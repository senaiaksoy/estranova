# -*- coding: utf-8 -*-
"""
Estranova editöryal tipografide markdown → PDF dönüştürücü (generic).

Estranova'nın yayınlanmış makale markdown'larını (npm run articles:export
çıktısı) Constantia/Calibri + primary/gold paletinde PDF'e çevirir.

Kullanım:
    python scripts/generate-article-pdf.py <input.md> <output.pdf>

Örnek:
    python scripts/generate-article-pdf.py \\
        "icerik/yayinlanmis-makaleler/2026-05/2026-05-03__diseti-cekilmesi-postmenopoz.md" \\
        "icerik/onboarding/duygu-diseti-cekilmesi-postmenopoz.pdf"

Frontmatter alanları (title, writer, publishedDate, section) PDF metadata
ve kapakta kullanılır.
"""

import sys
import re
import argparse
import markdown as md_lib
from bs4 import BeautifulSoup, NavigableString
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether
from reportlab.platypus.flowables import HRFlowable
from reportlab.pdfgen import canvas

FONTS = "C:/Windows/Fonts"

# --- Font registration ---
pdfmetrics.registerFont(TTFont('Constantia', f'{FONTS}/constan.ttf'))
pdfmetrics.registerFont(TTFont('Constantia-Bold', f'{FONTS}/constanb.ttf'))
pdfmetrics.registerFont(TTFont('Constantia-Italic', f'{FONTS}/constani.ttf'))
pdfmetrics.registerFont(TTFont('Constantia-BoldItalic', f'{FONTS}/constanz.ttf'))
pdfmetrics.registerFont(TTFont('Calibri', f'{FONTS}/calibri.ttf'))
pdfmetrics.registerFont(TTFont('Calibri-Bold', f'{FONTS}/calibrib.ttf'))
pdfmetrics.registerFont(TTFont('Calibri-Italic', f'{FONTS}/calibrii.ttf'))
pdfmetrics.registerFont(TTFont('Calibri-BoldItalic', f'{FONTS}/calibriz.ttf'))

registerFontFamily('Constantia', normal='Constantia', bold='Constantia-Bold',
                   italic='Constantia-Italic', boldItalic='Constantia-BoldItalic')
registerFontFamily('Calibri', normal='Calibri', bold='Calibri-Bold',
                   italic='Calibri-Italic', boldItalic='Calibri-BoldItalic')

# --- Estranova palette ---
PRIMARY_PINK = HexColor('#D81B60')
SECONDARY_PINK = HexColor('#D81B60')
GOLD = HexColor('#C9A96E')
GOLD_DEEP = HexColor('#a8884c')
INK = HexColor('#2D2D2D')
INK_70 = HexColor('#5e5e5e')
INK_55 = HexColor('#7a7a7a')
CREAM_WARM = HexColor('#F8F2EA')
CREAM_SOFT = HexColor('#FAF6EE')
WHITE = HexColor('#FFFFFF')

# --- Styles ---
def style(name, **kwargs):
    base = dict(
        name=name, fontName='Calibri', fontSize=11, leading=16,
        textColor=INK, alignment=TA_LEFT, spaceBefore=0, spaceAfter=8,
    )
    base.update(kwargs)
    return ParagraphStyle(**base)

EYEBROW = style('Eyebrow', fontName='Calibri-Bold', fontSize=9, leading=12,
                textColor=GOLD_DEEP, spaceAfter=6, alignment=TA_LEFT)
H1_COVER = style('H1Cover', fontName='Constantia-Bold', fontSize=28,
                 leading=34, textColor=SECONDARY_PINK, spaceAfter=12,
                 alignment=TA_LEFT)
BYLINE = style('Byline', fontName='Constantia-Italic', fontSize=12,
               leading=18, textColor=PRIMARY_PINK, spaceAfter=14)

H1 = style('H1', fontName='Constantia-Bold', fontSize=24, leading=30,
           textColor=SECONDARY_PINK, spaceAfter=10)
H2 = style('H2', fontName='Constantia-Bold', fontSize=17, leading=23,
           textColor=PRIMARY_PINK, spaceBefore=22, spaceAfter=8)
H3 = style('H3', fontName='Constantia-Bold', fontSize=13, leading=19,
           textColor=PRIMARY_PINK, spaceBefore=14, spaceAfter=6)
LEDE = style('Lede', fontName='Constantia-Italic', fontSize=12, leading=18,
             textColor=PRIMARY_PINK, spaceAfter=10)
BODY = style('Body', fontName='Calibri', fontSize=10.5, leading=16,
             textColor=INK, spaceAfter=8)
LIST_ITEM = style('ListItem', fontName='Calibri', fontSize=10.5, leading=15,
                  textColor=INK, leftIndent=14, spaceAfter=4)
QUOTE = style('Quote', fontName='Constantia-Italic', fontSize=11.5,
              leading=18, textColor=PRIMARY_PINK, leftIndent=14,
              spaceBefore=8, spaceAfter=12)

# --- FooterCanvas ---
class FooterCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.pages = []

    def showPage(self):
        self.pages.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        page_count = len(self.pages)
        for state in self.pages:
            self.__dict__.update(state)
            self.draw_footer(page_count)
            super().showPage()
        super().save()

    def draw_footer(self, page_count):
        self.setStrokeColor(GOLD)
        self.setLineWidth(0.5)
        self.line(2*cm, 1.5*cm, A4[0]-2*cm, 1.5*cm)
        self.setFont('Calibri-Italic', 8)
        self.setFillColor(INK_55)
        self.drawString(2*cm, 1.1*cm, 'Estranova · Yazar Taslağı')
        self.setFont('Calibri', 8)
        self.setFillColor(PRIMARY_PINK)
        self.drawRightString(A4[0]-2*cm, 1.1*cm, f'Sayfa {self._pageNumber} / {page_count}')

# --- Helpers ---
def gold_rule(width=4*cm, thickness=1.2):
    return HRFlowable(width=width, thickness=thickness, color=GOLD,
                      spaceBefore=2, spaceAfter=12, hAlign='LEFT')

def section_h2_block(title_html, number=None):
    out = []
    if number is not None:
        eyebrow_text = f'<font color="#a8884c">{number:02d}</font> &nbsp;<font color="#D81B60">|</font>'
        out.append(Paragraph(eyebrow_text, EYEBROW))
    out.append(Paragraph(title_html, H2))
    out.append(gold_rule(width=2.5*cm, thickness=1.2))
    return out

# --- Inline rendering ---
def escape_text(s):
    return (s.replace('&', '&amp;')
             .replace('<', '&lt;')
             .replace('>', '&gt;'))

def render_inline(elem):
    if isinstance(elem, NavigableString):
        return escape_text(str(elem))
    out = ''
    for child in elem.children:
        if isinstance(child, NavigableString):
            out += escape_text(str(child))
        elif child.name == 'em' or child.name == 'i':
            out += f'<i>{render_inline(child)}</i>'
        elif child.name == 'strong' or child.name == 'b':
            out += f'<b>{render_inline(child)}</b>'
        elif child.name == 'a':
            href = child.get('href', '')
            inner = render_inline(child)
            if href.startswith('http'):
                out += f'<link href="{href}" color="#D81B60">{inner}</link>'
            else:
                # internal link → just show text in primary
                out += f'<font color="#D81B60">{inner}</font>'
        elif child.name == 'code':
            out += f'<font face="Courier" size="10">{render_inline(child)}</font>'
        elif child.name == 'br':
            out += '<br/>'
        elif child.name == 'span':
            out += render_inline(child)
        else:
            out += render_inline(child)
    return out

# --- Parser ---
FRONTMATTER_RE = re.compile(r'^---\n(.*?)\n---\n(.*)$', re.DOTALL)

def parse_frontmatter(md_text):
    m = FRONTMATTER_RE.match(md_text)
    if not m:
        return {}, md_text
    raw, body = m.group(1), m.group(2)
    meta = {}
    for line in raw.split('\n'):
        if ':' in line and not line.strip().startswith('#'):
            k, v = line.split(':', 1)
            meta[k.strip()] = v.strip().strip('"').strip("'")
    return meta, body

def markdown_to_story(md_text):
    meta, body = parse_frontmatter(md_text)
    html = md_lib.markdown(body, extensions=['extra', 'sane_lists'])
    soup = BeautifulSoup(html, 'html.parser')

    story = []
    pending_lede = False
    h2_counter = 0

    elements = list(soup.children)

    for elem in elements:
        if isinstance(elem, NavigableString):
            if not str(elem).strip():
                continue
            continue

        name = elem.name
        if name == 'h1':
            story.append(Paragraph(render_inline(elem), H1))
            story.append(gold_rule(width=5*cm, thickness=2))
        elif name == 'h2':
            h2_counter += 1
            story += section_h2_block(render_inline(elem), number=h2_counter)
            pending_lede = True
        elif name == 'h3':
            story.append(Paragraph(render_inline(elem), H3))
        elif name == 'p':
            txt = render_inline(elem)
            if not txt.strip():
                continue
            if pending_lede:
                story.append(Paragraph(txt, LEDE))
                pending_lede = False
            else:
                story.append(Paragraph(txt, BODY))
        elif name == 'ul':
            for li in elem.find_all('li', recursive=False):
                story.append(Paragraph(
                    f'<font color="#C9A96E">•</font>&nbsp;&nbsp;{render_inline(li)}',
                    LIST_ITEM))
        elif name == 'ol':
            for idx, li in enumerate(elem.find_all('li', recursive=False), 1):
                story.append(Paragraph(
                    f'<font color="#a8884c"><b>{idx}.</b></font>&nbsp;&nbsp;{render_inline(li)}',
                    LIST_ITEM))
        elif name == 'blockquote':
            for p in elem.find_all('p', recursive=False):
                story.append(Paragraph(render_inline(p), QUOTE))
        elif name == 'hr':
            story.append(gold_rule(width=8*cm, thickness=0.5))

    return meta, story

# --- Main ---
def main():
    parser = argparse.ArgumentParser(description='Estranova markdown → PDF.')
    parser.add_argument('input', help='Markdown dosyası')
    parser.add_argument('output', help='PDF çıktı yolu')
    parser.add_argument('--eyebrow', default='ESTRANOVA', help='Üst eyebrow yazısı')
    args = parser.parse_args()

    with open(args.input, 'r', encoding='utf-8') as f:
        md_text = f.read()

    meta, body_story = markdown_to_story(md_text)

    title = meta.get('title', 'Estranova Makalesi')
    writer = meta.get('writer', '')
    publishedDate = meta.get('publishedDate', '')
    section = meta.get('section', '')

    doc = SimpleDocTemplate(
        args.output, pagesize=A4,
        leftMargin=2.5*cm, rightMargin=2.5*cm,
        topMargin=2.5*cm, bottomMargin=2.5*cm,
        title=title, author=writer or 'Estranova',
        subject=section or 'Estranova', creator='Estranova',
    )

    # Header story
    header = []
    eyebrow_label = args.eyebrow
    if section:
        eyebrow_label = f'{args.eyebrow} · {section.upper()}'
    header.append(Paragraph(eyebrow_label, EYEBROW))
    header.append(Paragraph(title, H1_COVER))
    header.append(gold_rule(width=5*cm, thickness=2))

    byline_parts = []
    if writer:
        byline_parts.append(f'Yazan: <b>{writer}</b>')
    if publishedDate:
        byline_parts.append(f'Yayım: {publishedDate}')
    if byline_parts:
        header.append(Paragraph('  ·  '.join(byline_parts), BYLINE))

    full_story = header + body_story

    doc.build(full_story, canvasmaker=FooterCanvas)
    print(f"PDF üretildi: {args.output}")

if __name__ == '__main__':
    main()
