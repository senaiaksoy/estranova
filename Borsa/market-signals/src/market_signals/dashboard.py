from __future__ import annotations

import base64
import html
import os
from dataclasses import dataclass
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Callable


REPORT_PATTERNS = {
    "latest_daily": "daily-*.md",
    "latest_portfolio": "portfolio-*.md",
    "weekly_model": "model-review-weekly.md",
    "monthly_model": "model-review-monthly.md",
}


@dataclass(frozen=True)
class DashboardAuth:
    username: str
    password: str

    @property
    def enabled(self) -> bool:
        return bool(self.password)


@dataclass(frozen=True)
class DashboardSnapshot:
    root: Path
    latest_daily: Path | None
    latest_portfolio: Path | None
    weekly_model: Path | None
    monthly_model: Path | None


def dashboard_auth_from_env() -> DashboardAuth:
    return DashboardAuth(
        username=os.getenv("MARKET_SIGNALS_DASHBOARD_USER", "estranova"),
        password=os.getenv("MARKET_SIGNALS_DASHBOARD_PASSWORD", ""),
    )


def collect_dashboard_snapshot(root: Path) -> DashboardSnapshot:
    reports_dir = root / "data" / "reports"
    return DashboardSnapshot(
        root=root,
        latest_daily=_latest_report(reports_dir, REPORT_PATTERNS["latest_daily"]),
        latest_portfolio=_latest_report(reports_dir, REPORT_PATTERNS["latest_portfolio"]),
        weekly_model=_latest_report(reports_dir, REPORT_PATTERNS["weekly_model"]),
        monthly_model=_latest_report(reports_dir, REPORT_PATTERNS["monthly_model"]),
    )


def render_dashboard_html(snapshot: DashboardSnapshot) -> str:
    cards = [
        ("Günlük Sinyal", snapshot.latest_daily),
        ("Portföy Özeti", snapshot.latest_portfolio),
        ("Haftalık Model", snapshot.weekly_model),
        ("Aylık Strateji", snapshot.monthly_model),
    ]
    sections = "\n".join(_render_report_section(title, path) for title, path in cards)
    return f"""<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex,nofollow">
  <title>Estranova Varlık Pusulası</title>
  <style>
    :root {{
      color-scheme: light;
      --ink: #181716;
      --muted: #6f6762;
      --line: #ded8d3;
      --paper: #fbf8f5;
      --panel: #ffffff;
      --pink: #D81B60;
      --gold: #B8904A;
    }}
    * {{ box-sizing: border-box; }}
    body {{
      margin: 0;
      background: var(--paper);
      color: var(--ink);
      font-family: "Kulim Park", "Segoe UI", Arial, sans-serif;
      line-height: 1.55;
    }}
    main {{
      width: min(1280px, calc(100% - 32px));
      margin: 0 auto;
      padding: 32px 0 48px;
    }}
    header {{
      border-bottom: 1px solid var(--line);
      padding: 0 0 22px;
      margin-bottom: 22px;
    }}
    h1 {{
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(2rem, 4vw, 4rem);
      line-height: 1;
      margin: 0 0 12px;
      letter-spacing: 0;
    }}
    .meta, .notice {{
      color: var(--muted);
      font-size: 0.95rem;
      max-width: 78ch;
    }}
    .notice {{
      border-left: 3px solid var(--gold);
      padding: 10px 0 10px 14px;
      margin-top: 16px;
    }}
    .grid {{
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
    }}
    section {{
      background: var(--panel);
      border: 1px solid var(--line);
      border-radius: 8px;
      min-width: 0;
      overflow: hidden;
    }}
    .section-head {{
      display: flex;
      justify-content: space-between;
      gap: 16px;
      align-items: baseline;
      border-bottom: 1px solid var(--line);
      padding: 16px 18px 12px;
    }}
    h2 {{
      font-size: 0.82rem;
      text-transform: uppercase;
      color: var(--pink);
      margin: 0;
      letter-spacing: 0.04em;
    }}
    .file {{
      color: var(--muted);
      font-size: 0.82rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }}
    .report {{
      padding: 16px 18px 20px;
      overflow: auto;
      max-height: 520px;
    }}
    .report h1, .report h2, .report h3 {{
      font-family: Georgia, "Times New Roman", serif;
      line-height: 1.2;
      margin: 16px 0 8px;
      letter-spacing: 0;
    }}
    .report h1 {{ font-size: 1.45rem; }}
    .report h2 {{ font-size: 1.15rem; color: var(--ink); text-transform: none; }}
    .report p, .report ul {{ margin: 0 0 10px; }}
    .report table {{
      border-collapse: collapse;
      width: 100%;
      min-width: 560px;
      font-size: 0.9rem;
    }}
    .report th, .report td {{
      border-bottom: 1px solid var(--line);
      padding: 8px 10px;
      text-align: left;
      vertical-align: top;
    }}
    .missing {{
      color: var(--muted);
      font-style: italic;
      padding: 16px 18px 20px;
    }}
    @media (max-width: 860px) {{
      main {{ width: min(100% - 20px, 1280px); padding-top: 20px; }}
      .grid {{ grid-template-columns: 1fr; }}
      .section-head {{ display: block; }}
      .file {{ margin-top: 4px; white-space: normal; }}
    }}
  </style>
</head>
<body>
  <main>
    <header>
      <h1>Estranova Varlık Pusulası</h1>
      <div class="meta">Özel karar-destek ekranı · hedef adres: varlik.estranova.com · lokal servis: 127.0.0.1:8765</div>
      <div class="notice">Bu ekran yatırım tavsiyesi değildir; otomatik emir, portföy yönetimi veya kişisel al-sat talimatı üretmez. Cloudflare Access ve dashboard parolası arkasında kullanılmalıdır.</div>
    </header>
    <div class="grid">
      {sections}
    </div>
  </main>
</body>
</html>"""


def is_authorized(header_value: str | None, auth: DashboardAuth) -> bool:
    if not auth.enabled:
        return True
    if not header_value or not header_value.startswith("Basic "):
        return False
    try:
        decoded = base64.b64decode(header_value[6:], validate=True).decode("utf-8")
    except (ValueError, UnicodeDecodeError):
        return False
    username, separator, password = decoded.partition(":")
    return bool(separator) and username == auth.username and password == auth.password


def serve_dashboard(
    root: Path,
    *,
    host: str = "127.0.0.1",
    port: int = 8765,
    auth: DashboardAuth | None = None,
) -> None:
    auth = auth or dashboard_auth_from_env()
    handler = _handler_factory(root, auth)
    httpd = ThreadingHTTPServer((host, port), handler)
    print(f"Estranova Varlık Pusulası: http://{host}:{port}/")
    print("Cloudflare hedef adresi: https://varlik.estranova.com")
    httpd.serve_forever()


def _latest_report(reports_dir: Path, pattern: str) -> Path | None:
    matches = [path for path in reports_dir.glob(pattern) if path.is_file()]
    if not matches:
        return None
    return max(matches, key=lambda path: (path.stat().st_mtime, path.name))


def _render_report_section(title: str, path: Path | None) -> str:
    filename = "rapor yok" if path is None else path.name
    body = (
        '<div class="missing">Henüz bu başlık için rapor yok.</div>'
        if path is None
        else f'<div class="report">{_markdown_to_html(path.read_text(encoding="utf-8"))}</div>'
    )
    return (
        "<section>"
        f'<div class="section-head"><h2>{html.escape(title)}</h2><div class="file">{html.escape(filename)}</div></div>'
        f"{body}"
        "</section>"
    )


def _markdown_to_html(markdown: str) -> str:
    lines: list[str] = []
    in_list = False
    in_table = False
    for raw_line in markdown.splitlines():
        line = raw_line.rstrip()
        if not line:
            if in_list:
                lines.append("</ul>")
                in_list = False
            if in_table:
                lines.append("</table>")
                in_table = False
            continue
        if line.startswith("#"):
            if in_list:
                lines.append("</ul>")
                in_list = False
            if in_table:
                lines.append("</table>")
                in_table = False
            level = min(len(line) - len(line.lstrip("#")), 3)
            text = line[level:].strip()
            lines.append(f"<h{level}>{html.escape(text)}</h{level}>")
            continue
        if line.startswith("|") and line.endswith("|"):
            cells = [cell.strip() for cell in line.strip("|").split("|")]
            if all(set(cell) <= {"-", ":", " "} for cell in cells):
                continue
            if not in_table:
                lines.append("<table>")
                in_table = True
            tag = "th" if not any("<tr>" in item for item in lines[-1:]) else "td"
            lines.append("<tr>" + "".join(f"<{tag}>{html.escape(cell)}</{tag}>" for cell in cells) + "</tr>")
            continue
        if in_table:
            lines.append("</table>")
            in_table = False
        if line.startswith("- "):
            if not in_list:
                lines.append("<ul>")
                in_list = True
            lines.append(f"<li>{html.escape(line[2:])}</li>")
            continue
        if in_list:
            lines.append("</ul>")
            in_list = False
        lines.append(f"<p>{html.escape(line)}</p>")
    if in_list:
        lines.append("</ul>")
    if in_table:
        lines.append("</table>")
    return "\n".join(lines)


def _handler_factory(root: Path, auth: DashboardAuth) -> Callable[..., BaseHTTPRequestHandler]:
    class DashboardHandler(BaseHTTPRequestHandler):
        def do_GET(self) -> None:
            if self.path not in {"/", "/index.html"}:
                self.send_error(404)
                return
            if not is_authorized(self.headers.get("Authorization"), auth):
                self.send_response(401)
                self.send_header("WWW-Authenticate", 'Basic realm="Estranova Varlık Pusulası"')
                self.end_headers()
                return
            body = render_dashboard_html(collect_dashboard_snapshot(root)).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Cache-Control", "no-store")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)

        def log_message(self, format: str, *args: object) -> None:
            return

    return DashboardHandler
