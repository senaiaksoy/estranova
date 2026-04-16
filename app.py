"""
Estranova birlesik giris noktasi (repo kokunden calistirin).

Ornekler:
  py app.py run "konu" --pretty
  py app.py ui
  py app.py dashboard --last 7
  py app.py guide --age 45-50 --symptom uyku
  py app.py guide --age 40-45 --symptom cilt --out rehber.md
  py app.py setup
"""

from __future__ import annotations

import argparse
import os
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent


def _ensure_utf8_stdio() -> None:
    """Windows konsolunda Turkce cikti icin stdout/stderr UTF-8."""
    for stream in (sys.stdout, sys.stderr):
        try:
            stream.reconfigure(encoding="utf-8")
        except (AttributeError, OSError, ValueError):
            pass


def _run_in_root(cmd: list[str]) -> int:
    env = os.environ.copy()
    env.setdefault("PYTHONUTF8", "1")
    return subprocess.call(cmd, cwd=str(ROOT), env=env)


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Estranova: icerik hatti, web arayuzu ve raporlar",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    sub = parser.add_subparsers(dest="command", required=True)

    p_run = sub.add_parser("run", help="Coklu ajan pipeline (main.py)")
    p_run.add_argument("topic", help="Islenecek konu")
    p_run.add_argument("--audience", default="40+ kadinlar")
    p_run.add_argument(
        "--content-goal",
        default="bilgilendirici makale + sosyal medya + bulten + publisher paketi",
    )
    p_run.add_argument("--risk-level", choices=["low", "medium", "high"], default="medium")
    p_run.add_argument("--pretty", action="store_true", help="JSON ciktiyi guzel yazdir")

    sub.add_parser("ui", help="Streamlit arayuzu (streamlit_app.py)")

    p_dash = sub.add_parser("dashboard", help="output/ rapor ozeti (dashboard.py)")
    p_dash.add_argument("--last", type=int, default=7, help="Son N gun (varsayilan: 7)")

    sub.add_parser("setup", help="Bagimliliklari yukle (pip install -r requirements.txt)")

    p_guide = sub.add_parser("guide", help="Okuyucu Rehberi onerileri (terminal, kural tabanli)")
    p_guide.add_argument(
        "--age",
        choices=["40-45", "45-50", "50+"],
        required=True,
        help="Yas araligi",
    )
    p_guide.add_argument(
        "--symptom",
        choices=["beyin_sisi", "uyku", "cilt", "kemik"],
        required=True,
        help="Semptom / ilgi alani",
    )
    p_guide.add_argument(
        "--out",
        type=Path,
        default=None,
        metavar="DOSYA",
        help="Markdown ciktiyi UTF-8 olarak bu dosyaya da yaz (or. rehber.md)",
    )

    args = parser.parse_args()

    py = sys.executable

    if args.command == "run":
        cmd = [
            py,
            str(ROOT / "main.py"),
            args.topic,
            "--audience",
            args.audience,
            "--content-goal",
            args.content_goal,
            "--risk-level",
            args.risk_level,
        ]
        if args.pretty:
            cmd.append("--pretty")
        raise SystemExit(_run_in_root(cmd))

    if args.command == "ui":
        raise SystemExit(
            _run_in_root([py, "-m", "streamlit", "run", str(ROOT / "streamlit_app.py")])
        )

    if args.command == "dashboard":
        raise SystemExit(
            _run_in_root([py, str(ROOT / "dashboard.py"), "--last", str(args.last)])
        )

    if args.command == "setup":
        rc = _run_in_root(
            [py, "-m", "pip", "install", "-r", str(ROOT / "requirements.txt")]
        )
        if rc == 0:
            print("[OK] Kurulum tamamlandi.")
        else:
            print("[ERR] pip install basarisiz.", file=sys.stderr)
        raise SystemExit(rc)

    if args.command == "guide":
        _ensure_utf8_stdio()
        from reader_guide import format_recommendations_markdown, recommend

        result = recommend(args.age, args.symptom)
        text = format_recommendations_markdown(result)
        if args.out is not None:
            out_path = Path(args.out)
            if not out_path.is_absolute():
                out_path = ROOT / out_path
            out_path.write_text(text, encoding="utf-8")
            print(f"[OK] UTF-8 dosya: {out_path.resolve()}")
        print(text)
        raise SystemExit(0)

    raise SystemExit(2)


if __name__ == "__main__":
    main()
