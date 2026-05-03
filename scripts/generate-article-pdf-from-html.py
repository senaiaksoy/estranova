# -*- coding: utf-8 -*-
"""
Estranova editöryal tipografide dist HTML → PDF dönüştürücü.

Astro build sonrası dist/<path>/index.html'i alır, 4 ana bölümü
(Kısa Özet + ArticleProsePanel + Bilimsel Editör Notu + Disclaimer)
ayrı ayrı parse edip Estranova editöryal tipografide PDF üretir.

Markdown ara katmanını BYPASS eder — RedFlagBox, BEN gold accent kart,
italic lede pattern, bullet listeler dist HTML'den doğrudan parse
edilir. Markdown export'tan kaynaklanan kayıplar olmaz.

Kullanım:
    python scripts/generate-article-pdf-from-html.py <input-dist-html> <output.pdf>

Örnek:
    python scripts/generate-article-pdf-from-html.py \\
        "dist/hormonal-gecis/40-sonrasi/diseti-cekilmesi-postmenopoz/index.html" \\
        "icerik/onay-bekleyen/.../duygu-makale.pdf"
"""

import sys
import re
import argparse
from bs4 import BeautifulSoup, NavigableString, Tag
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether
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

# --- Palette ---
BURGUNDY = HexColor('#6B2D3E')
BURGUNDY_DEEP = HexColor('#4f171c')
GOLD = HexColor('#C9A96E')
GOLD_DEEP = HexColor('#a8884c')
INK = HexColor('#2D2D2D')
INK_70 = HexColor('#5e5e5e')
INK_55 = HexColor('#7a7a7a')
CREAM_WARM = HexColor('#F8F2EA')
CREAM_SOFT = HexColor('#FAF6EE')
WHITE = HexColor('#FFFFFF')

# --- Styles ---
def st(name, **kw):
    base = dict(name=name, fontName='Calibri', fontSize=10.5, leading=16,
                textColor=INK, alignment=TA_LEFT, spaceBefore=0, spaceAfter=8)
    base.update(kw)
    return ParagraphStyle(**base)

EYEBROW = st('Eyebrow', fontName='Calibri-Bold', fontSize=9, leading=12,
             textColor=GOLD_DEEP, spaceAfter=6)
H1_COVER = st('H1Cover', fontName='Constantia-Bold', fontSize=28, leading=34,
              textColor=BURGUNDY_DEEP, spaceAfter=12)
BYLINE = st('Byline', fontName='Constantia-Italic', fontSize=11.5, leading=18,
            textColor=BURGUNDY, spaceAfter=14)
H2 = st('H2', fontName='Constantia-Bold', fontSize=17, leading=23,
        textColor=BURGUNDY, spaceBefore=22, spaceAfter=8)
H3 = st('H3', fontName='Constantia-Bold', fontSize=13, leading=19,
        textColor=BURGUNDY, spaceBefore=14, spaceAfter=6)
LEDE = st('Lede', fontName='Constantia-Italic', fontSize=12, leading=18,
          textColor=BURGUNDY, spaceAfter=10)
BODY = st('Body', fontName='Calibri', fontSize=10.5, leading=16,
          textColor=INK, spaceAfter=8)
LIST_ITEM = st('ListItem', fontName='Calibri', fontSize=10.5, leading=15,
               textColor=INK, leftIndent=14, spaceAfter=4)

# Kısa Özet card
OZET_TITLE = st('OzetTitle', fontName='Constantia-Bold', fontSize=18,
                textColor=BURGUNDY, spaceAfter=8)
OZET_BODY = st('OzetBody', fontName='Calibri', fontSize=10.5, leading=16,
               textColor=INK, spaceAfter=4)

# RedFlagBox
REDFLAG_EYEBROW = st('RFEyebrow', fontName='Calibri-Bold', fontSize=8.5,
                     textColor=GOLD_DEEP, spaceAfter=4)
REDFLAG_TITLE = st('RFTitle', fontName='Constantia-Bold', fontSize=14,
                   leading=18, textColor=BURGUNDY, spaceAfter=8)
REDFLAG_INTRO = st('RFIntro', fontSize=10, leading=14, textColor=INK_70, spaceAfter=8)
REDFLAG_ITEM = st('RFItem', fontSize=10, leading=14, textColor=INK,
                  leftIndent=14, spaceAfter=4)
REDFLAG_FOOTNOTE = st('RFFoot', fontName='Constantia-Italic', fontSize=9.5,
                      leading=14, textColor=INK_70, spaceBefore=8, spaceAfter=4)

# BEN
BEN_EYEBROW = st('BENEyebrow', fontName='Calibri-Bold', fontSize=9,
                 textColor=BURGUNDY, spaceAfter=4)
BEN_LEVEL = st('BENLevel', fontName='Calibri-Bold', fontSize=12,
               textColor=INK, spaceAfter=10)
BEN_INTRO = st('BENIntro', fontName='Constantia-Italic', fontSize=11,
               leading=17, textColor=INK, spaceAfter=10)
BEN_PARA = st('BENPara', fontSize=10, leading=15, textColor=INK, spaceAfter=8)
BEN_SIG = st('BENSig', fontName='Constantia-Italic', fontSize=10,
             textColor=BURGUNDY, spaceBefore=10, alignment=TA_LEFT)

# Disclaimer
DISC = st('Disc', fontName='Calibri-Italic', fontSize=9.5, leading=14,
          textColor=INK_70, alignment=TA_LEFT)

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
        self.setFillColor(BURGUNDY)
        self.drawRightString(A4[0]-2*cm, 1.1*cm, f'Sayfa {self._pageNumber} / {page_count}')

# --- Helpers ---
def gold_rule(width=4*cm, thickness=1.2):
    return HRFlowable(width=width, thickness=thickness, color=GOLD,
                      spaceBefore=2, spaceAfter=12, hAlign='LEFT')

def section_h2_block(title_html, number=None):
    out = []
    if number is not None:
        eyebrow_text = f'<font color="#a8884c">{number:02d}</font>'
        out.append(Paragraph(eyebrow_text, EYEBROW))
    out.append(Paragraph(title_html, H2))
    out.append(gold_rule(width=2.5*cm, thickness=1.2))
    return out

def escape_text(s):
    return (s.replace('&', '&amp;')
             .replace('<', '&lt;')
             .replace('>', '&gt;'))

def render_inline(elem):
    """BeautifulSoup elem'ini reportlab inline markup'a çevirir."""
    if isinstance(elem, NavigableString):
        return escape_text(str(elem))
    out = ''
    for child in elem.children:
        if isinstance(child, NavigableString):
            out += escape_text(str(child))
        elif child.name in ('em', 'i'):
            out += f'<i>{render_inline(child)}</i>'
        elif child.name in ('strong', 'b'):
            out += f'<b>{render_inline(child)}</b>'
        elif child.name == 'a':
            href = child.get('href', '')
            inner = render_inline(child)
            out += f'<font color="#6B2D3E">{inner}</font>'
        elif child.name == 'code':
            out += f'<font face="Courier" size="10">{render_inline(child)}</font>'
        elif child.name == 'br':
            out += '<br/>'
        elif child.name == 'span':
            # Aria-hidden veya pure styling span'lerini atla; içeriği al
            if child.get('aria-hidden') == 'true':
                continue
            out += render_inline(child)
        else:
            out += render_inline(child)
    return out

def normalize_text(s):
    """Çoklu whitespace'i tek boşluğa indir."""
    return re.sub(r'\s+', ' ', s).strip()

# --- Section parsers ---

def parse_kisa_ozet(soup):
    """Kısa Özet kartını story olarak render et."""
    section = soup.find('section', class_=re.compile(r'from-white\s+to-cream-soft'))
    if not section:
        return []
    h2 = section.find('h2')
    p = section.find('p')
    title = render_inline(h2) if h2 else 'Kısa Özet'
    body = render_inline(p) if p else ''

    inner = [
        Paragraph(title, OZET_TITLE),
        Paragraph(body, OZET_BODY),
    ]
    card = Table([[inner]], colWidths=[A4[0] - 5*cm])
    card.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), CREAM_SOFT),
        ('LEFTPADDING', (0,0), (-1,-1), 18),
        ('RIGHTPADDING', (0,0), (-1,-1), 18),
        ('TOPPADDING', (0,0), (-1,-1), 16),
        ('BOTTOMPADDING', (0,0), (-1,-1), 16),
        ('BOX', (0,0), (-1,-1), 1, GOLD),
    ]))
    return [card, Spacer(1, 0.4*cm)]

def parse_redflagbox(aside):
    """RedFlagBox <aside>'ı story olarak render et (cream card)."""
    eyebrow = aside.find('p', class_=re.compile(r'uppercase'))
    title = aside.find('h3')
    intro_p = None
    items_ul = None
    foot_p = None

    # Find structural elements
    for child in aside.find_all(['p', 'h3', 'ul'], recursive=True):
        if child.name == 'p' and 'uppercase' in (child.get('class', []) or []):
            continue  # already captured
        elif child.name == 'h3' and not title:
            title = child
        elif child.name == 'p' and not intro_p and 'italic' not in ' '.join(child.get('class', []) or []):
            intro_p = child
        elif child.name == 'ul' and not items_ul:
            items_ul = child
        elif child.name == 'p' and 'italic' in ' '.join(child.get('class', []) or []):
            foot_p = child

    inner = []
    if eyebrow:
        eyebrow_text = normalize_text(eyebrow.get_text())
        inner.append(Paragraph(eyebrow_text.upper(), REDFLAG_EYEBROW))
    if title:
        inner.append(Paragraph(render_inline(title), REDFLAG_TITLE))
    if intro_p:
        inner.append(Paragraph(render_inline(intro_p), REDFLAG_INTRO))
    if items_ul:
        for li in items_ul.find_all('li', recursive=False):
            # RedFlagBox li yapısı: <span aria-hidden></span><span>text</span>
            text_span = li.find_all('span')
            text = ''
            if text_span:
                # Last span typically has the actual text
                text = render_inline(text_span[-1])
            else:
                text = render_inline(li)
            inner.append(Paragraph(
                f'<font color="#C9A96E">●</font>&nbsp;&nbsp;{text}',
                REDFLAG_ITEM))
    if foot_p:
        inner.append(Paragraph(render_inline(foot_p), REDFLAG_FOOTNOTE))

    if not inner:
        return []

    card = Table([[inner]], colWidths=[A4[0] - 5*cm])
    card.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), CREAM_WARM),
        ('LEFTPADDING', (0,0), (-1,-1), 18),
        ('RIGHTPADDING', (0,0), (-1,-1), 18),
        ('TOPPADDING', (0,0), (-1,-1), 14),
        ('BOTTOMPADDING', (0,0), (-1,-1), 14),
        ('BOX', (0,0), (-1,-1), 0.7, GOLD),
        ('LINEBEFORE', (0,0), (0,-1), 4, GOLD),
    ]))
    return [Spacer(1, 0.2*cm), card, Spacer(1, 0.3*cm)]

def parse_prose_body(soup):
    """ArticleProsePanel ana gövdeyi story olarak render et."""
    prose_div = soup.find('div', class_=re.compile(r'prose-estranova'))
    if not prose_div:
        return []

    story = []
    pending_lede = False
    h2_counter = 0

    for elem in prose_div.children:
        if isinstance(elem, NavigableString):
            if not str(elem).strip():
                continue
            continue
        if not isinstance(elem, Tag):
            continue

        name = elem.name
        if name == 'h2':
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
        elif name == 'aside':
            # RedFlagBox
            story += parse_redflagbox(elem)
        elif name == 'blockquote':
            for p in elem.find_all('p', recursive=False):
                story.append(Paragraph(render_inline(p), LEDE))
        elif name == 'hr':
            story.append(gold_rule(width=8*cm, thickness=0.5))

    return story

def parse_ben(soup):
    """Bilimsel Editör Notu bölümünü gold accent kart olarak render et."""
    section = soup.find('section', class_=re.compile(r'border-l-gold'))
    if not section:
        return []

    inner = []
    # Eyebrow (Bilimsel Editör Notu)
    eyebrow = section.find('p', class_=re.compile(r'uppercase'))
    if eyebrow:
        inner.append(Paragraph(eyebrow.get_text().strip().upper(), BEN_EYEBROW))

    # Kanıt Düzeyi (lg font-semibold)
    level = section.find('p', class_=re.compile(r'text-lg.*font-semibold'))
    if level:
        inner.append(Paragraph(render_inline(level), BEN_LEVEL))

    # Tüm <p> elementleri (intro italic + 5 katman + imza)
    body_div = section.find('div', class_=re.compile(r'space-y'))
    if body_div:
        for p in body_div.find_all('p', recursive=False):
            classes = ' '.join(p.get('class', []) or [])
            text = render_inline(p)
            if not text.strip():
                continue
            if 'italic' in classes and 'border-t' not in classes:
                # intro italic
                inner.append(Paragraph(text, BEN_INTRO))
            elif 'border-t' in classes:
                # imza paragrafı
                inner.append(Paragraph(text, BEN_SIG))
            else:
                inner.append(Paragraph(text, BEN_PARA))

    if not inner:
        return []

    card = Table([[inner]], colWidths=[A4[0] - 5*cm])
    card.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), CREAM_WARM),
        ('LEFTPADDING', (0,0), (-1,-1), 18),
        ('RIGHTPADDING', (0,0), (-1,-1), 18),
        ('TOPPADDING', (0,0), (-1,-1), 16),
        ('BOTTOMPADDING', (0,0), (-1,-1), 16),
        ('LINEBEFORE', (0,0), (0,-1), 5, GOLD),
        ('BOX', (0,0), (-1,-1), 0.5, BURGUNDY),
    ]))
    return [Spacer(1, 0.6*cm), card]

def parse_disclaimer(soup):
    """Disclaimer bölümü."""
    section = soup.find('section', class_=re.compile(r'border-dashed'))
    if not section:
        return []
    p = section.find('p')
    if not p:
        return []
    inner = [Paragraph(render_inline(p), DISC)]
    card = Table([[inner]], colWidths=[A4[0] - 5*cm])
    card.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), WHITE),
        ('LEFTPADDING', (0,0), (-1,-1), 16),
        ('RIGHTPADDING', (0,0), (-1,-1), 16),
        ('TOPPADDING', (0,0), (-1,-1), 12),
        ('BOTTOMPADDING', (0,0), (-1,-1), 12),
        ('BOX', (0,0), (-1,-1), 0.5, BURGUNDY),
        ('DASHES', (0,0), (-1,-1), [3, 2], 0.5, BURGUNDY),
    ]))
    return [Spacer(1, 0.3*cm), card]

# --- Main ---
def main():
    parser = argparse.ArgumentParser(description='Estranova dist HTML → PDF.')
    parser.add_argument('input', help='Dist HTML dosyası (örn. dist/path/index.html)')
    parser.add_argument('output', help='PDF çıktı yolu')
    parser.add_argument('--eyebrow', default='ESTRANOVA', help='Üst eyebrow yazısı')
    args = parser.parse_args()

    with open(args.input, 'r', encoding='utf-8') as f:
        html_text = f.read()

    soup = BeautifulSoup(html_text, 'html.parser')

    # Metadata
    title_tag = soup.find('title')
    page_title = title_tag.get_text().strip() if title_tag else 'Estranova Makalesi'
    page_title = re.sub(r'\s*-\s*Estranova\s*$', '', page_title)

    # Article H1 (in SubmenuHero)
    h1 = soup.find('h1')
    article_title = render_inline(h1) if h1 else page_title

    # Eyebrow from SubmenuHero
    submenu_hero = soup.find('section', class_=re.compile(r'submenu-hero|hero'))
    eyebrow_text = args.eyebrow
    if submenu_hero:
        eyebrow_p = submenu_hero.find('p')
        if eyebrow_p:
            eyebrow_text = eyebrow_p.get_text().strip().upper() or args.eyebrow

    # Yazar bilgisi (ArticleAuthorBlock)
    author_block = soup.find('div', attrs={'data-author-block': True}) or \
                   soup.find('section', class_=re.compile(r'author'))
    writer_name = ''
    published = ''
    if author_block:
        # Best-effort: ad strong, tarih italic
        strong = author_block.find('strong')
        if strong:
            writer_name = strong.get_text().strip()
        # Tarih
        date_match = re.search(r'\d{1,2}\s+\w+\s+\d{4}', author_block.get_text())
        if date_match:
            published = date_match.group(0)

    # Build story
    story = []
    story.append(Paragraph(eyebrow_text, EYEBROW))
    story.append(Paragraph(article_title, H1_COVER))
    story.append(gold_rule(width=5*cm, thickness=2))
    if writer_name or published:
        byline_parts = []
        if writer_name:
            byline_parts.append(f'Yazan: <b>{writer_name}</b>')
        if published:
            byline_parts.append(f'Yayım: {published}')
        story.append(Paragraph('  ·  '.join(byline_parts), BYLINE))

    # 1. Kısa Özet
    story += parse_kisa_ozet(soup)

    # 2. Ana gövde (RedFlagBox dahil)
    story += parse_prose_body(soup)

    # 3. Bilimsel Editör Notu
    story += parse_ben(soup)

    # 4. Disclaimer
    story += parse_disclaimer(soup)

    # Document
    doc = SimpleDocTemplate(
        args.output, pagesize=A4,
        leftMargin=2.5*cm, rightMargin=2.5*cm,
        topMargin=2.5*cm, bottomMargin=2.5*cm,
        title=article_title, author=writer_name or 'Estranova',
        creator='Estranova',
    )
    doc.build(story, canvasmaker=FooterCanvas)
    print(f"PDF üretildi: {args.output}")

if __name__ == '__main__':
    main()
