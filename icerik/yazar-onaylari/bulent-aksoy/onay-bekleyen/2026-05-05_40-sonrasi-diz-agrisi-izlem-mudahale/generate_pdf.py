from pathlib import Path
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.units import cm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

base_dir = Path(r"D:\A-klasör\Estranova\icerik\yazar-onaylari\bulent-aksoy\onay-bekleyen\2026-05-05_40-sonrasi-diz-agrisi-izlem-mudahale")
md_path = base_dir / "makale-ornek.md"
output_path = str(base_dir / "makale-ornek.pdf")
fonts_dir = Path("C:/Windows/Fonts")

pdfmetrics.registerFont(TTFont("Calibri", str(fonts_dir / "calibri.ttf")))
pdfmetrics.registerFont(TTFont("Calibri-Bold", str(fonts_dir / "calibrib.ttf")))
pdfmetrics.registerFont(TTFont("Calibri-Italic", str(fonts_dir / "calibrii.ttf")))

doc = SimpleDocTemplate(
    output_path,
    pagesize=A4,
    leftMargin=2.2 * cm,
    rightMargin=2.2 * cm,
    topMargin=2.0 * cm,
    bottomMargin=2.0 * cm,
    title="40 Sonrasi Diz Agrisi: Ne Zaman Izlem, Ne Zaman Mudahale?",
    author="Prof. Dr. Bulent Aksoy",
)

styles = getSampleStyleSheet()
eyebrow_style = ParagraphStyle(
    "Eyebrow",
    parent=styles["BodyText"],
    fontName="Calibri-Bold",
    fontSize=9,
    leading=12,
    textColor=colors.HexColor("#6B2D3E"),
    spaceAfter=6,
)
title_style = ParagraphStyle(
    "Title",
    parent=styles["Title"],
    fontName="Calibri-Bold",
    fontSize=20,
    leading=24,
    textColor=colors.HexColor("#4f171c"),
    spaceAfter=12,
)
h1_byline_style = ParagraphStyle(
    "Byline",
    parent=styles["BodyText"],
    fontName="Calibri-Italic",
    fontSize=10,
    leading=13,
    textColor=colors.HexColor("#6d625d"),
    spaceAfter=8,
)
h2_style = ParagraphStyle(
    "H2",
    parent=styles["Heading2"],
    fontName="Calibri-Bold",
    fontSize=13.5,
    leading=18,
    textColor=colors.HexColor("#6B2D3E"),
    spaceBefore=10,
    spaceAfter=6,
)
lede_style = ParagraphStyle(
    "Lede",
    parent=styles["BodyText"],
    fontName="Calibri-Italic",
    fontSize=11,
    leading=16,
    textColor=colors.HexColor("#6B2D3E"),
    spaceAfter=8,
)
body_style = ParagraphStyle(
    "Body",
    parent=styles["BodyText"],
    fontName="Calibri",
    fontSize=11,
    leading=16,
    textColor=colors.HexColor("#2D2D2D"),
    spaceAfter=8,
)
summary_title_style = ParagraphStyle(
    "SummaryTitle",
    parent=styles["BodyText"],
    fontName="Calibri-Bold",
    fontSize=11,
    leading=14,
    textColor=colors.HexColor("#4f171c"),
    spaceAfter=6,
)

story = []
lines = md_path.read_text(encoding="utf-8").splitlines()
summary_added = False
for raw_line in lines:
    line = raw_line.strip()
    if not line:
        story.append(Spacer(1, 5))
        continue
    if line.startswith("# "):
        story.append(Paragraph("Zamansiz Yasam · Ortopedik Takip", eyebrow_style))
        story.append(Paragraph(line[2:].strip(), title_style))
        story.append(HRFlowable(width=3.2 * cm, thickness=2, color=colors.HexColor("#C9A96E"), hAlign="LEFT", spaceAfter=8))
        story.append(Paragraph("Yazar: Prof. Dr. Bulent Aksoy · Okuma suresi: 7-8 dakika", h1_byline_style))
        continue
    if line.startswith("## "):
        story.append(Paragraph(line[3:].strip(), h2_style))
        continue
    if line.startswith("*") and line.endswith("*") and len(line) > 2:
        story.append(Paragraph(line[1:-1].strip(), lede_style))
        continue
    if line.startswith("- "):
        story.append(Paragraph(f"• {line[2:].strip()}", body_style))
        continue
    if line.startswith("**") and line.endswith("**"):
        story.append(Paragraph(line.strip("*"), body_style))
        continue
    if not summary_added:
        summary_box = Table(
            [[Paragraph("Kisa Ozet", summary_title_style)], [Paragraph(line.replace("*", ""), body_style)]],
            colWidths=[16.4 * cm],
        )
        summary_box.setStyle(
            TableStyle(
                [
                    ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#FAF6EE")),
                    ("LINEBEFORE", (0, 0), (0, -1), 3, colors.HexColor("#C9A96E")),
                    ("LEFTPADDING", (0, 0), (-1, -1), 12),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 12),
                    ("TOPPADDING", (0, 0), (-1, -1), 9),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
                ]
            )
        )
        story.append(summary_box)
        story.append(Spacer(1, 8))
        summary_added = True
        continue
    line = line.replace("*", "")
    story.append(Paragraph(line, body_style))

doc.build(story)
print(output_path)
