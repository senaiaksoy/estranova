"""Ad hoc: 2026-04-17 editoryal test sonuçlarını karşılaştırma tablosuna çevir."""
from __future__ import annotations

import json
import re
from pathlib import Path

TOPICS = [
    ("Sicak Basmalari ve Menopoz Gecisi", "sicak-basmalari-ve-menopoz-gecisi"),
    ("Menopozda Kilo Yonetimi ve Metabolizma", "menopozda-kilo-yonetimi-ve-metabolizma-degisimi"),
    ("Perimenopozda Anksiyete Duzenleme", "perimenopozda-anksiyete-duzenleme-stratejileri"),
    ("40 Sonrasi Kardiyovaskuler Tarama", "40-sonrasi-kardiyovaskuler-tarama-onerileri"),
    ("Menopozda Libido ve Cinsel Saglik", "menopozda-libido-ve-cinsel-saglik"),
]
TODAY = "2026-04-17"


def analyze_md(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    h2 = len(re.findall(r"(?m)^## ", text))
    words = len(text.split())
    turkey = "türkiye" in text.lower() or "turkiye" in text.lower()
    links = len(re.findall(r"\[.*?\]\(http", text))
    risky = sum(1 for t in ("destekl", "iyilestir", "iyileştir") if t in text.lower())
    return {"h2": h2, "words": words, "turkey": turkey, "links": links, "risky": risky}


def main() -> None:
    rows = []
    total_cost = 0.0
    for label, slug in TOPICS:
        rp = Path(f"output/{TODAY}-{slug}-report.json")
        if not rp.exists():
            rows.append({"label": label, "missing": True})
            continue
        r = json.loads(rp.read_text(encoding="utf-8"))
        root_md = Path(f"output/{TODAY}-{slug}.md")
        drafts_md = Path(f"output/drafts/{TODAY}-{slug}.md")
        if root_md.exists():
            md_stats = analyze_md(root_md)
            where = "output/"
        elif drafts_md.exists():
            md_stats = analyze_md(drafts_md)
            where = "drafts/"
        else:
            md_stats = {"h2": 0, "words": 0, "turkey": False, "links": 0, "risky": 0}
            where = "YOK"
        cost = r.get("estimated_cost_usd") or 0.0
        total_cost += cost
        rows.append({
            "label": label,
            "score": r.get("compliance_score"),
            "critical": r.get("quality_assessment", {}).get("critical_violations"),
            "iter": r.get("current_iteration"),
            "final": r.get("final_decision"),
            "best_effort": r.get("best_effort_publish"),
            "halt": r.get("pipeline_halt_reason") or "",
            "where": where,
            "cost": cost,
            **md_stats,
        })

    # Kompakt tablo
    print("| Konu | Skor | Crit | H2 | Kelime | TR | Link | Risky | İter | Klasör | Halt | $ |")
    print("|------|-----:|-----:|---:|-------:|:--:|-----:|------:|-----:|--------|------|--:|")
    for x in rows:
        if x.get("missing"):
            print(f"| {x['label']} | — | — | — | — | — | — | — | — | MISSING | — | — |")
            continue
        tr = "✓" if x["turkey"] else "✗"
        halt = x["halt"][:22] if x["halt"] else ""
        print(
            f"| {x['label']} | {x['score']} | {x['critical']} | {x['h2']} | {x['words']} | "
            f"{tr} | {x['links']} | {x['risky']} | {x['iter']} | {x['where']} | {halt} | "
            f"{x['cost']:.3f} |"
        )
    print()
    print(f"Toplam maliyet: ${total_cost:.3f}")
    scores = [x["score"] for x in rows if not x.get("missing") and x.get("score") is not None]
    if scores:
        print(f"Skor: min={min(scores)}, max={max(scores)}, ort={sum(scores)/len(scores):.1f}, range={max(scores)-min(scores)}")


if __name__ == "__main__":
    main()
