from __future__ import annotations

import json
import re
from datetime import datetime
from pathlib import Path
from typing import Any

import streamlit as st
from dotenv import load_dotenv

from main import build_graph, ensure_runtime_dependencies
from state import EstranovaState, initialize_state


def slugify_topic(topic: str) -> str:
    slug = topic.strip().lower()
    slug = re.sub(r"[^a-z0-9]+", "-", slug).strip("-")
    return slug or "icerik"


def merge_state(base: dict[str, Any], updates: dict[str, Any]) -> dict[str, Any]:
    for key, value in updates.items():
        if isinstance(value, dict) and isinstance(base.get(key), dict):
            base[key] = merge_state(dict(base[key]), value)
        else:
            base[key] = value
    return base


def run_pipeline(topic: str, audience: str, content_goal: str, risk_level: str):
    ensure_runtime_dependencies()
    load_dotenv()

    app = build_graph()
    initial_state = initialize_state(
        topic=topic,
        audience=audience,
        content_goal=content_goal,
        risk_level=risk_level,  # type: ignore[arg-type]
    )

    event_logs: list[str] = []
    current_state: dict[str, Any] = dict(initial_state)

    try:
        for event in app.stream(initial_state):
            if isinstance(event, dict):
                for node_name, node_update in event.items():
                    event_logs.append(f"{datetime.now().strftime('%H:%M:%S')} - {node_name} tamamlandi")
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
    if not article:
        article = result.get("draft", {}).get("article", "")
    return article or "Makale olusturulamadi."


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
    st.session_state.history_page = min(max(1, int(st.session_state.history_page)), total_pages)
    if "history_selected_idx" not in st.session_state:
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
    if st.session_state.history_selected_idx >= len(page_items):
        st.session_state.history_selected_idx = 0
    selected_idx = st.selectbox(
        "Kayit sec",
        options=range(len(page_items)),
        format_func=lambda i: labels[i],
        key="history_selected_idx",
    )
    selected = page_items[selected_idx]

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


def main() -> None:
    st.set_page_config(page_title="Estranova Content Studio", layout="wide")
    st.title("Estranova Icerik Uretim Merkezi")
    st.caption("Konuyu girin, akisi canli izleyin, final makaleyi indirin.")

    with st.sidebar:
        st.subheader("Ayarlar")
        audience = st.text_input("Hedef kitle", value="40+ kadinlar")
        content_goal = st.text_input(
            "Icerik hedefi",
            value="bilgilendirici makale + sosyal medya + bulten + publisher paketi",
        )
        risk_level = st.selectbox("Risk seviyesi", options=["low", "medium", "high"], index=1)

    topic = st.text_input("Konu", placeholder="Orn: Magnezyum ve kadin sagligi")
    run_button = st.button("Icerik Uret")

    if run_button:
        if not topic.strip():
            st.error("Lutfen once bir konu girin.")
            return

        logs_box = st.empty()
        status_box = st.empty()

        final_state: dict[str, Any] | None = None
        try:
            for message in run_pipeline(topic, audience, content_goal, risk_level):
                logs = message["logs"]
                logs_box.code("\n".join(logs[-30:]) or "Akis baslatildi...")

                if message["type"] == "progress":
                    status_box.info("Akis calisiyor...")
                elif message["type"] == "done":
                    status_box.success("Akis tamamlandi.")
                    final_state = message["state"]
        except Exception as exc:
            st.error(str(exc))
            return

        if not final_state:
            st.error("Final state alinamadi.")
            return

        article = extract_article(final_state)
        decision = final_state.get("compliance", {}).get("final_decision", "unknown")
        st.subheader("Final Makale")
        st.write(f"Final karar: `{decision}`")
        st.markdown(article)

        filename = f"{datetime.now().strftime('%Y-%m-%d')}-{slugify_topic(topic)}.md"
        st.download_button(
            label="Makaleyi Indir (.md)",
            data=article,
            file_name=filename,
            mime="text/markdown",
        )

        with st.expander("Ham cikti (JSON)"):
            st.json(final_state)

    st.divider()
    render_output_history()


if __name__ == "__main__":
    main()
