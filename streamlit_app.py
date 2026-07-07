from __future__ import annotations

import copy
import json
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

import streamlit as st
from dotenv import load_dotenv

from agents.writer_agent import ALLOWED_CATEGORIES

from main import (
    build_graph,
    build_save_payload,
    draft_markdown_path,
    ensure_runtime_dependencies,
    save_approved_article_with_routing,
    save_draft_to_output_drafts,
    save_operational_outputs,
)
from naming import output_file_basename
from reader_guide import (
    ARTICLE_KIND_DISPLAY,
    build_user_context,
    format_recommendations_markdown,
    list_age_options,
    list_symptom_options,
    recommend,
    suggest_agent_topic,
)
from state import EstranovaState, initialize_state, new_editorial_review_record

# LangGraph node adi -> UI'da gosterilecek tek satir (log temizligi)
PIPELINE_UI_LINES: dict[str, str] = {
    "start": "start",
    "research": "research done",
    "writer": "writer done",
    "validation": "validation done",
    "compliance": "compliance done",
    "publisher": "final",
}


def merge_state(base: dict[str, Any], updates: dict[str, Any]) -> dict[str, Any]:
    for key, value in updates.items():
        if isinstance(value, dict) and isinstance(base.get(key), dict):
            base[key] = merge_state(dict(base[key]), value)
        else:
            base[key] = value
    return base


def run_pipeline(
    topic: str,
    audience: str,
    content_goal: str,
    risk_level: str,
    user_context: str = "",
    article_angle: str = "",
    content_emphasis: list[str] | None = None,
    internal_link_suggestions: str = "",
):
    ensure_runtime_dependencies()
    load_dotenv(override=True)

    app = build_graph()
    initial_state = initialize_state(
        topic=topic,
        audience=audience,
        content_goal=content_goal,
        risk_level=risk_level,  # type: ignore[arg-type]
        user_context=user_context or "",
        article_angle=article_angle or "",
        content_emphasis=content_emphasis,
        internal_link_suggestions=internal_link_suggestions or "",
    )

    event_logs: list[str] = []
    current_state: dict[str, Any] = dict(initial_state)

    try:
        for event in app.stream(initial_state):
            if isinstance(event, dict):
                for node_name, node_update in event.items():
                    line = PIPELINE_UI_LINES.get(node_name)
                    if line:
                        event_logs.append(line)
                    if isinstance(node_update, dict):
                        current_state = merge_state(current_state, node_update)
            yield {"type": "progress", "logs": list(event_logs), "state": dict(current_state)}
    except Exception as exc:
        raise RuntimeError(f"Akis calistirilamadi: {exc}") from exc

    final_state: EstranovaState = current_state  # type: ignore[assignment]
    yield {"type": "done", "logs": event_logs, "state": final_state}


def extract_article(result: dict[str, Any]) -> str:
    publisher_output = result.get("publisher_output", {})
    article = publisher_output.get("content", {}).get("body_markdown", "")
    if not str(article).strip():
        draft_article = result.get("draft", {}).get("article", "")
        if isinstance(draft_article, str) and draft_article.strip():
            from agents.publisher_agent import compose_publisher_body_markdown

            article = compose_publisher_body_markdown(result)  # type: ignore[arg-type]
        else:
            article = draft_article if isinstance(draft_article, str) else ""
    return article or "Makale olusturulamadi."


def inject_article_into_state(state: dict[str, Any], body: str) -> dict[str, Any]:
    """Pipeline state dict'ine duzenlenmis makale govdesini yazar (derin kopya)."""
    s = copy.deepcopy(state)
    draft = s.setdefault("draft", {})
    if isinstance(draft, dict):
        draft["article"] = body
    pub = s.setdefault("publisher_output", {})
    if isinstance(pub, dict):
        content = pub.setdefault("content", {})
        if isinstance(content, dict):
            content["body_markdown"] = body
    return s


def load_output_reports() -> list[dict[str, Any]]:
    output_dir = Path("output")
    output_dir.mkdir(parents=True, exist_ok=True)
    reports: list[dict[str, Any]] = []
    for path in sorted(output_dir.glob("*-report.json"), reverse=True):
        try:
            report = json.loads(path.read_text(encoding="utf-8"))
            report["_report_path"] = str(path)
            report["_basename"] = path.name.replace("-report.json", "")
            reports.append(report)
        except json.JSONDecodeError:
            continue
    return reports


def render_output_history() -> None:
    st.subheader("Output Gecmisi")
    reports = load_output_reports()
    if not reports:
        st.info("Henüz output raporu yok.")
        return

    status_options = sorted({str(r.get("status", "unknown")) for r in reports})
    selected_statuses = st.multiselect(
        "Durum filtresi",
        options=status_options,
        default=status_options,
        key="history_status_filter",
    )
    topic_query = st.text_input("Konu filtrele", value="", key="history_topic_filter").strip().lower()
    sort_mode = st.selectbox(
        "Siralama",
        options=["en yeni", "en pahali", "en yuksek skor"],
        index=0,
        key="history_sort_mode",
    )
    page_size = st.selectbox("Sayfa boyutu", options=[5, 10, 20, 50], index=1, key="history_page_size")

    filtered = [
        r
        for r in reports
        if (not selected_statuses or str(r.get("status", "unknown")) in selected_statuses)
        and (not topic_query or topic_query in str(r.get("topic", "")).lower())
    ]

    if sort_mode == "en pahali":
        filtered.sort(key=lambda x: float(x.get("estimated_cost_usd", 0) or 0), reverse=True)
    elif sort_mode == "en yuksek skor":
        filtered.sort(
            key=lambda x: float(x.get("quality_assessment", {}).get("compliance_score", 0) or 0), reverse=True
        )
    else:  # en yeni
        filtered.sort(key=lambda x: str(x.get("generated_at", "")), reverse=True)

    st.caption(f"{len(filtered)} kayit gosteriliyor")
    if not filtered:
        st.warning("Filtreye uygun kayit bulunamadi.")
        return

    total_pages = max(1, (len(filtered) + page_size - 1) // page_size)
    if "history_page" not in st.session_state:
        st.session_state.history_page = 1
    try:
        st.session_state.history_page = int(st.session_state.history_page)
    except (TypeError, ValueError):
        st.session_state.history_page = 1
    st.session_state.history_page = min(max(1, st.session_state.history_page), total_pages)
    if "history_selected_idx" not in st.session_state:
        st.session_state.history_selected_idx = 0
    else:
        try:
            st.session_state.history_selected_idx = int(st.session_state.history_selected_idx)
        except (TypeError, ValueError):
            st.session_state.history_selected_idx = 0

    pcol1, pcol2, pcol3 = st.columns([1, 1, 3])
    if pcol1.button("Onceki", disabled=st.session_state.history_page <= 1, key="history_prev_page"):
        st.session_state.history_page -= 1
        st.session_state.history_selected_idx = 0
    if pcol2.button("Sonraki", disabled=st.session_state.history_page >= total_pages, key="history_next_page"):
        st.session_state.history_page += 1
        st.session_state.history_selected_idx = 0
    pcol3.caption(f"Sayfa {st.session_state.history_page}/{total_pages}")

    start_idx = (st.session_state.history_page - 1) * page_size
    end_idx = start_idx + page_size
    page_items = filtered[start_idx:end_idx]

    visible_avg_score = sum(
        float(item.get("quality_assessment", {}).get("compliance_score", 0) or 0) for item in page_items
    ) / len(page_items)
    visible_total_cost = sum(float(item.get("estimated_cost_usd", 0) or 0) for item in page_items)
    visible_success = sum(1 for item in page_items if item.get("status") == "published")

    m1, m2, m3 = st.columns(3)
    m1.metric("Gorunen Sayfa Ortalama Skor", f"{visible_avg_score:.2f}")
    m2.metric("Gorunen Sayfa Toplam Maliyet ($)", f"{visible_total_cost:.4f}")
    m3.metric("Gorunen Sayfa Basari", f"{visible_success}/{len(page_items)}")

    trend_window = st.selectbox(
        "Mini trend kayit sayisi",
        options=[3, 5, 10],
        index=1,
        key="history_trend_window",
    )
    trend_items = page_items[: int(trend_window)]
    trend_labels = [str(item.get("topic", "N/A"))[:24] for item in trend_items]
    trend_scores = [float(item.get("quality_assessment", {}).get("compliance_score", 0) or 0) for item in trend_items]
    trend_costs = [float(item.get("estimated_cost_usd", 0) or 0) for item in trend_items]

    tcol1, tcol2 = st.columns(2)
    tcol1.caption(f"Mini Trend - Son {len(trend_items)} Gorunen Kayit Skoru")
    tcol1.line_chart({"Skor": trend_scores})
    tcol1.caption("Sirayla: " + " | ".join(trend_labels) if trend_labels else "Veri yok")
    tcol2.caption(f"Mini Trend - Son {len(trend_items)} Gorunen Kayit Maliyeti ($)")
    tcol2.line_chart({"Maliyet": trend_costs})
    tcol2.caption("Sirayla: " + " | ".join(trend_labels) if trend_labels else "Veri yok")

    labels = [
        f"{item.get('generated_at', 'unknown')} | {item.get('status', 'unknown')} | {item.get('topic', 'N/A')}"
        for item in page_items
    ]
    n_items = len(page_items)
    try:
        cur = int(st.session_state.history_selected_idx)
    except (TypeError, ValueError):
        cur = 0
        st.session_state.history_selected_idx = 0
    if cur >= n_items:
        st.session_state.history_selected_idx = 0
    selected_idx = st.selectbox(
        "Kayit sec",
        options=range(n_items),
        format_func=lambda i: labels[i],
        key="history_selected_idx",
    )
    selected = page_items[int(selected_idx)]

    c1, c2, c3 = st.columns(3)
    c1.metric("Status", str(selected.get("status", "unknown")))
    c2.metric("Compliance Score", int(selected.get("compliance_score", 0) or 0))
    c3.metric("Tahmini Maliyet ($)", f"{float(selected.get('estimated_cost_usd', 0) or 0):.4f}")

    md_path = Path("output") / f"{selected.get('_basename', '')}.md"
    if md_path.exists():
        st.download_button(
            label="Secili Makaleyi Indir (.md)",
            data=md_path.read_text(encoding="utf-8"),
            file_name=md_path.name,
            mime="text/markdown",
            key=f"download_{md_path.name}",
        )
    else:
        st.caption("Bu kayit yayina hazir degil; .md dosyasi yok.")

    with st.expander("Secili rapor JSON"):
        st.json({k: v for k, v in selected.items() if not k.startswith("_")})


def _go_to_producer_with_reader_profile(age_key: str, symptom_key: str) -> None:
    """Okuyucu rehberi secimlerini Writer'a aktar ve uretim ekranina gec."""
    st.session_state.user_context_input = build_user_context(age_key, symptom_key)
    st.session_state.pending_producer_topic = suggest_agent_topic(symptom_key)
    st.session_state.nav_page = "Icerik uretimi"
    st.rerun()


def render_reader_guide_tab() -> None:
    st.subheader("Okuyucu Rehberi")
    st.caption("2 kisa soru — kural tabanli oneriler (AI kullanilmaz).")

    st.markdown("**Soru 1:** Hangi yas araliginda okumak istersiniz?")
    age_keys = [k for k, _ in list_age_options()]
    age_labels = {k: lab for k, lab in list_age_options()}
    age_choice = st.radio(
        "Yas araligi",
        options=age_keys,
        format_func=lambda k: age_labels[k],
        horizontal=True,
        key="reader_age",
        label_visibility="collapsed",
    )

    st.markdown("**Soru 2:** Su aralar en cok hangi konuda icerik okumak istersiniz?")
    sym_keys = [k for k, _ in list_symptom_options()]
    sym_labels = {k: lab for k, lab in list_symptom_options()}
    symptom_choice = st.selectbox(
        "Semptom / konu",
        options=sym_keys,
        format_func=lambda k: sym_labels[k],
        key="reader_symptom",
        label_visibility="collapsed",
    )

    if st.button("Onerileri goster", key="reader_show"):
        result = recommend(age_choice, symptom_choice)
        st.session_state.user_context_input = build_user_context(age_choice, symptom_choice)
        st.session_state.reader_last_result = result
        st.session_state.reader_last_age = age_choice
        st.session_state.reader_last_symptom = symptom_choice

    if st.session_state.get("reader_last_result"):
        result = st.session_state.reader_last_result
        age_choice = st.session_state.reader_last_age
        symptom_choice = st.session_state.reader_last_symptom

        st.markdown("### Sizin için önerilen içerikler")
        st.info(result["age_note"])
        st.caption("Okuyucu baglami Writer icin kenar cubukta guncellendi.")

        if not result["articles"]:
            st.warning("Henüz bu konuda bir makale önerisi yok.")
            if st.button("Bu konuyu agent'a yazdır", key="reader_agent_empty"):
                _go_to_producer_with_reader_profile(age_choice, symptom_choice)
        else:
            for art in result["articles"]:
                icon, kind_label = ARTICLE_KIND_DISPLAY[art["kind"]]
                with st.container():
                    st.markdown(
                        f"{icon} **{kind_label}** · **{art['title']}** · ~{art['read_minutes']} dk okuma"
                    )
                    st.caption(art["summary"])

            b1, b2 = st.columns(2)
            with b1:
                st.download_button(
                    label="Oneri listesini indir (.md)",
                    data=format_recommendations_markdown(result),
                    file_name=f"estranova-okuyucu-rehberi-{age_choice}-{symptom_choice}.md",
                    mime="text/markdown",
                    key="reader_download_md",
                )
            with b2:
                if st.button("Bu profille içerik üret", key="reader_go_producer"):
                    _go_to_producer_with_reader_profile(age_choice, symptom_choice)


def main() -> None:
    st.set_page_config(page_title="Estranova Content Studio", layout="wide")
    st.title("Estranova Icerik Uretim Merkezi")
    st.caption("Konuyu girin, akisi canli izleyin, final makaleyi indirin.")

    if "user_context_input" not in st.session_state:
        st.session_state.user_context_input = ""
    if "producer_article_angle" not in st.session_state:
        st.session_state.producer_article_angle = ""
    if "producer_content_emphasis" not in st.session_state:
        st.session_state.producer_content_emphasis = []
    if "producer_internal_links" not in st.session_state:
        st.session_state.producer_internal_links = ""

    with st.sidebar:
        st.subheader("Icerik uretimi ayarlari")
        audience = st.text_input("Hedef kitle", value="40+ kadinlar")
        content_goal = st.text_input(
            "Icerik hedefi",
            value="bilgilendirici makale + sosyal medya + bulten + publisher paketi",
        )
        risk_level = st.selectbox("Risk seviyesi", options=["low", "medium", "high"], index=1)
        st.text_area(
            "Okuyucu baglami (Writer)",
            height=100,
            key="user_context_input",
            help="Okuyucu Rehberi secimleriniz buraya yazilir; Writer makalenin girisine uyarlama yapar.",
        )
        st.radio(
            "Bolum",
            options=["Icerik uretimi", "Okuyucu Rehberi"],
            key="nav_page",
        )

    if st.session_state.get("pending_producer_topic"):
        st.session_state.producer_topic = st.session_state.pop("pending_producer_topic")

    if st.session_state.nav_page == "Icerik uretimi":
        if "producer_topic" not in st.session_state:
            st.session_state.producer_topic = ""

        topic = st.text_input(
            "Konu başlığı",
            placeholder="Orn: Magnezyum ve kadin sagligi",
            key="producer_topic",
        )

        angle_options: list[str] = ["", "mekanizma", "tedavi", "deneyim"]
        angle_labels = {
            "": "Estranova varsayılanı (dengeli)",
            "mekanizma": "Mekanizma",
            "tedavi": "Tedavi çerçevesi (nötr; dayatmasız)",
            "deneyim": "Deneyim / yaşam tarafı",
        }
        st.radio(
            "Makale açısı",
            options=angle_options,
            format_func=lambda k: angle_labels[k],
            horizontal=True,
            key="producer_article_angle",
            help="Secim yok sayilirsa standart 8 bolum dengesi uygulanir.",
        )

        emphasis_choices: list[tuple[str, str]] = [
            ("turkiye", "Türkiye"),
            ("bilimsel_calismalar", "Bilimsel çalışmalar"),
            ("alternatif_yaklasimlar", "Alternatif yaklaşımlar"),
        ]
        st.multiselect(
            "Özel vurgu",
            options=[k for k, _ in emphasis_choices],
            format_func=lambda k: dict(emphasis_choices)[k],
            key="producer_content_emphasis",
            help="Hic secilmezse ek vurgu uygulanmaz (varsayilan Estranova).",
        )

        st.text_area(
            "İç link önerileri (opsiyonel)",
            height=90,
            key="producer_internal_links",
            placeholder="Orn: /blog/menopoz-rehberi — ilgili yazi",
        )

        run_button = st.button("Icerik Uret")

        if run_button:
            if not topic.strip():
                st.error("Lutfen once bir konu girin.")
                return

            logs_box = st.empty()
            status_box = st.empty()

            final_state: dict[str, Any] | None = None
            uc = str(st.session_state.get("user_context_input", "") or "")
            aa = str(st.session_state.get("producer_article_angle") or "")
            ce = list(st.session_state.get("producer_content_emphasis") or [])
            iln = str(st.session_state.get("producer_internal_links") or "")
            try:
                for message in run_pipeline(
                    topic,
                    audience,
                    content_goal,
                    risk_level,
                    user_context=uc,
                    article_angle=aa,
                    content_emphasis=ce,
                    internal_link_suggestions=iln,
                ):
                    logs = message["logs"]
                    logs_box.code("\n".join(logs[-30:]) or "Akis baslatildi...")

                    if message["type"] == "progress":
                        status_box.info("Akis calisiyor...")
                    elif message["type"] == "done":
                        final_state = message["state"]
                        halt = str(final_state.get("pipeline_halt_reason", "") or "")
                        if halt in ("max_iteration_reached", "max_iteration_hard_stop"):
                            status_box.warning(
                                "max iteration reached → final version kullanıldı"
                            )
                        elif halt == "loop prevented":
                            status_box.warning(
                                "loop prevented — akış güvenli şekilde sonlandırıldı"
                            )
                        else:
                            status_box.empty()
                        st.success("✅ içerik hazır")
            except Exception as exc:
                st.error(str(exc))
                return

            if not final_state:
                st.error("Final state alinamadi.")
                return

            st.session_state.pipeline_pending_state = copy.deepcopy(final_state)
            st.session_state.article_editor = extract_article(final_state)
            pub_topic = str(final_state.get("topic") or topic or "").strip()
            st.session_state.publish_flow_topic = pub_topic
            eday = datetime.now(timezone.utc).strftime("%Y-%m-%d")
            st.session_state.editorial_run_date = eday
            st.session_state.editorial_review_record = new_editorial_review_record(
                pub_topic,
                extract_article(final_state),
                date_iso=eday,
            )
            st.session_state.pop("pending_draft_path", None)

        if msg := st.session_state.pop("draft_saved_flash", None):
            st.success(msg)
        if msg := st.session_state.pop("publish_success_flash", None):
            st.success(msg)
        if st.session_state.pop("reject_flash", None):
            st.warning("İçerik reddedildi.")

        if st.session_state.get("pipeline_pending_state"):
            pending = st.session_state.pipeline_pending_state
            decision = pending.get("compliance", {}).get("final_decision", "unknown")
            halt = str(pending.get("pipeline_halt_reason", "") or "")
            st.subheader("Onay ekranı")
            st.caption(
                "**`src/content/blog/`** yalnızca **Onayla ve Yayınla** ile dolar (Astro blog). "
                "Taslaklar **`output/drafts/`** altına yazılır; siteye gitmeden önce düzenleyebilirsiniz."
            )
            st.write(f"Pipeline kararı: `{decision}`")
            if halt and halt not in (
                "max_iteration_reached",
                "max_iteration_hard_stop",
                "loop prevented",
            ):
                st.warning(
                    f"Akis sonlandirma: `{halt}` (icerik en iyi haliyle uretildi ise manuel kontrol onerilir.)"
                )

            detected_category = pending.get("target_category") or "beden-yakinlik"
            cat_list = list(ALLOWED_CATEGORIES)
            try:
                cat_index = cat_list.index(detected_category) if detected_category in cat_list else 0
            except ValueError:
                cat_index = 0
            st.selectbox(
                "Yayın kategorisi",
                options=cat_list,
                index=cat_index,
                help="Writer'ın önerdiği kategori. Manuel override edebilirsin.",
                key="publish_category_override",
            )

            st.text_area(
                "Üretilen makale",
                height=560,
                key="article_editor",
                help="Metni burada düzenleyin. Yayın veya taslak için aşağıdaki düğmeleri kullanın.",
            )

            b1, b2, b3 = st.columns(3)
            if b1.button("✅ Onayla ve Yayınla", type="primary", key="btn_publish"):
                body = str(st.session_state.get("article_editor", "") or "")
                ttopic = str(st.session_state.get("publish_flow_topic") or "").strip()
                eday = str(st.session_state.get("editorial_run_date") or "") or datetime.now(
                    timezone.utc
                ).strftime("%Y-%m-%d")
                st.session_state.editorial_review_record = new_editorial_review_record(
                    ttopic,
                    body,
                    status="approved",
                    date_iso=eday or None,
                )
                st.session_state.last_editorial_review_record = dict(
                    st.session_state.editorial_review_record
                )
                to_save = inject_article_into_state(st.session_state.pipeline_pending_state, body)
                try:
                    pub_cat = st.session_state.get(
                        "publish_category_override", detected_category
                    )
                    if not isinstance(pub_cat, str) or pub_cat not in ALLOWED_CATEGORIES:
                        pub_cat = "beden-yakinlik"
                    to_save["target_category"] = pub_cat
                    md_path, astro_path = save_approved_article_with_routing(
                        body, ttopic, eday, pub_cat
                    )
                    draft_markdown_path(ttopic, eday).unlink(missing_ok=True)
                    save_operational_outputs(
                        to_save,
                        build_save_payload(to_save),
                        write_output_article_md=False,
                    )  # type: ignore[arg-type]
                    st.session_state.pop("pipeline_pending_state", None)
                    st.session_state.pop("publish_flow_topic", None)
                    st.session_state.pop("article_editor", None)
                    st.session_state.pop("editorial_run_date", None)
                    st.session_state.pop("editorial_review_record", None)
                    st.session_state.pop("publish_category_override", None)
                    st.session_state.publish_success_flash = (
                        f"✅ Yayında:\n"
                        f"  Markdown: `{md_path.as_posix()}`\n"
                        f"  Astro page: `{astro_path.as_posix()}`\n"
                        f"⚠️ submenu-heroes.ts ve navigation.ts'a manuel ekleme gerekir."
                    )
                    st.rerun()
                except Exception as exc:
                    st.error(f"Yazma hatasi: {exc}")

            if b2.button("💾 Taslak Olarak Kaydet", key="btn_save_draft"):
                body = str(st.session_state.get("article_editor", "") or "")
                ttopic = str(st.session_state.get("publish_flow_topic") or "").strip()
                eday = str(st.session_state.get("editorial_run_date") or "") or datetime.now(
                    timezone.utc
                ).strftime("%Y-%m-%d")
                st.session_state.editorial_review_record = new_editorial_review_record(
                    ttopic,
                    body,
                    status="draft",
                    date_iso=eday or None,
                )
                try:
                    draft_path = save_draft_to_output_drafts(body, ttopic, eday)
                    st.session_state.pending_draft_path = draft_path.as_posix()
                    st.session_state.pipeline_pending_state = inject_article_into_state(
                        st.session_state.pipeline_pending_state, body
                    )
                    st.session_state.article_editor = body
                    st.session_state.draft_saved_flash = f"💾 Taslak kaydedildi: `{draft_path.as_posix()}`"
                    st.rerun()
                except Exception as exc:
                    st.error(f"Taslak yazılamadı: {exc}")

            if b3.button("❌ Reddet ve Sil", key="btn_reject"):
                ttopic = str(st.session_state.get("publish_flow_topic") or "").strip()
                eday = str(st.session_state.get("editorial_run_date") or "") or datetime.now(
                    timezone.utc
                ).strftime("%Y-%m-%d")
                body = str(st.session_state.get("article_editor", "") or "")
                st.session_state.editorial_review_record = new_editorial_review_record(
                    ttopic,
                    body,
                    status="rejected",
                    date_iso=eday or None,
                )
                st.session_state.last_editorial_review_record = dict(
                    st.session_state.editorial_review_record
                )
                draft_markdown_path(ttopic, eday).unlink(missing_ok=True)
                st.session_state.pop("pipeline_pending_state", None)
                st.session_state.pop("publish_flow_topic", None)
                st.session_state.pop("article_editor", None)
                st.session_state.pop("editorial_run_date", None)
                st.session_state.pop("editorial_review_record", None)
                st.session_state.pop("pending_draft_path", None)
                st.session_state.reject_flash = True
                st.rerun()

            ttopic = str(st.session_state.get("publish_flow_topic") or "").strip()
            draft_fn = f"{output_file_basename(ttopic, datetime.now().strftime('%Y-%m-%d'))}.md"
            st.download_button(
                label="Taslagi indir (.md)",
                data=str(st.session_state.get("article_editor", "") or ""),
                file_name=draft_fn,
                mime="text/markdown",
                key="download_draft_md",
            )

            _rec = st.session_state.get("editorial_review_record") or {}
            _snap = {
                "status": _rec.get("status", "draft"),
                "content": str(st.session_state.get("article_editor") or ""),
                "topic": str(st.session_state.get("publish_flow_topic") or ""),
                "date": str(st.session_state.get("editorial_run_date") or ""),
            }
            with st.expander("Inceleme kaydi (JSON sozlesmesi)"):
                st.json(_snap)
            with st.expander("Ham cikti (JSON)"):
                st.json(st.session_state.pipeline_pending_state)

        st.divider()
        render_output_history()

    else:
        render_reader_guide_tab()


if __name__ == "__main__":
    main()
