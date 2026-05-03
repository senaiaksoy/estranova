# -*- coding: utf-8 -*-
"""
Yazar onay formu HTML'inin görsel PDF arşivi.

10 dakikalık stil rafine + onay formunu (templates/kontrol-formu-uzun.template.html)
veya 5 dakikalık standart formu (templates/kontrol-formu.template.html) görsel
referans amaçlı PDF'e çevirir.

PDF interaktif değildir — radio butonları boş kutucuk olarak görünür; karar
butonları statik. Yazar gerçek formu HTML olarak doldurur (mailto akışı). PDF
arşiv ve okuma kolaylığı içindir.

Kullanım:
    python scripts/generate-form-pdf.py <input-form.html> <output.pdf>

Form HTML'inden meta verileri (yazar adı, makale başlığı, tarih, deadline,
hedef email) extract eder; bölümleri render eder.
"""

import sys
import re
import argparse
from bs4 import BeautifulSoup, NavigableString
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm, mm
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether,
)
from reportlab.platypus.flowables import HRFlowable
from reportlab.pdfgen import canvas

FONTS = "C:/Windows/Fonts"

# --- Font registration ---
pdfmetrics.registerFont(TTFont('Constantia', f'{FONTS}/constan.ttf'))
pdfmetrics.registerFont(TTFont('Constantia-Bold', f'{FONTS}/constanb.ttf'))
pdfmetrics.registerFont(TTFont('Constantia-Italic', f'{FONTS}/constani.ttf'))
pdfmetrics.registerFont(TTFont('Calibri', f'{FONTS}/calibri.ttf'))
pdfmetrics.registerFont(TTFont('Calibri-Bold', f'{FONTS}/calibrib.ttf'))
pdfmetrics.registerFont(TTFont('Calibri-Italic', f'{FONTS}/calibrii.ttf'))

registerFontFamily('Constantia', normal='Constantia', bold='Constantia-Bold',
                   italic='Constantia-Italic')
registerFontFamily('Calibri', normal='Calibri', bold='Calibri-Bold',
                   italic='Calibri-Italic')

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
BORDER = HexColor('#D7C0C7')

# --- Styles ---
def st(name, **kw):
    base = dict(name=name, fontName='Calibri', fontSize=10.5, leading=15,
                textColor=INK, alignment=TA_LEFT, spaceBefore=0, spaceAfter=6)
    base.update(kw)
    return ParagraphStyle(**base)

TAG = st('Tag', fontName='Calibri-Bold', fontSize=9, textColor=GOLD_DEEP, spaceAfter=6)
EYEBROW = st('Eyebrow', fontName='Calibri-Bold', fontSize=9, textColor=BURGUNDY, spaceAfter=4)
H1 = st('H1', fontName='Constantia-Bold', fontSize=22, leading=27, textColor=BURGUNDY_DEEP, spaceAfter=10)
META = st('Meta', fontSize=10, textColor=INK_70, spaceAfter=4)
INTRO = st('Intro', fontSize=10, textColor=INK, leading=15, spaceAfter=12,
           leftIndent=10, rightIndent=10)
SECT_NUM = st('SectNum', fontName='Calibri-Bold', fontSize=8.5, textColor=GOLD_DEEP, spaceAfter=2)
H2 = st('H2', fontName='Constantia-Bold', fontSize=15, leading=20, textColor=BURGUNDY, spaceBefore=14, spaceAfter=4)
HINT = st('Hint', fontName='Calibri-Italic', fontSize=9.5, textColor=INK_70, spaceAfter=10)
LABEL = st('Label', fontName='Calibri-Bold', fontSize=10.5, textColor=INK, spaceAfter=6)
EXAMPLE = st('Example', fontSize=9.5, leading=14, textColor=INK_70, leftIndent=10,
             rightIndent=10, spaceBefore=4, spaceAfter=8)
SCALE = st('Scale', fontSize=8.5, textColor=INK_55, spaceAfter=4)
FOOTER_NOTE = st('FooterNote', fontSize=9, textColor=INK_70, leading=14, spaceBefore=14)
DECISION = st('Decision', fontName='Constantia-Bold', fontSize=14, alignment=TA_CENTER, textColor=WHITE, leading=20)
DECISION_ALT = st('DecisionAlt', fontName='Constantia-Bold', fontSize=14, alignment=TA_CENTER, textColor=BURGUNDY, leading=20)

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
        self.drawString(2*cm, 1.1*cm, 'Estranova · Yazar Onay Formu — görsel PDF arşivi')
        self.setFont('Calibri', 8)
        self.setFillColor(BURGUNDY)
        self.drawRightString(A4[0]-2*cm, 1.1*cm, f'Sayfa {self._pageNumber} / {page_count}')

# --- Box drawings (radio buttons as empty boxes) ---
def make_radio_row(labels, col_widths=None, height=0.7*cm):
    """Boş kare/yuvarlak butonlu radio satırı (görsel)."""
    n = len(labels)
    if col_widths is None:
        col_widths = [(A4[0] - 5*cm) / n] * n
    cells = []
    for lbl in labels:
        cells.append(Paragraph(f'<font face="Calibri" size="10">☐</font> &nbsp;{lbl}', st('RB', fontSize=10, alignment=TA_LEFT)))
    t = Table([cells], colWidths=col_widths, rowHeights=[height])
    t.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ]))
    return t

def make_likert_row(scale_left='1', scale_right='5'):
    """5-button likert visual."""
    cells = [Paragraph(f'<font face="Calibri" size="11">☐</font><br/><font color="#7a7a7a" size="8">{i}</font>', st('Lk', fontSize=10, alignment=TA_CENTER, leading=12)) for i in range(1, 6)]
    col_w = (A4[0] - 5*cm) / 5
    t = Table([cells], colWidths=[col_w]*5, rowHeights=[1*cm])
    t.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('ALIGN', (0,0), (-1,-1), 'CENTER'),
        ('BOX', (0,0), (-1,-1), 0.5, BORDER),
        ('INNERGRID', (0,0), (-1,-1), 0.3, BORDER),
        ('BACKGROUND', (0,0), (-1,-1), CREAM_SOFT),
    ]))
    return t

def make_textarea_box(min_lines=4):
    """Boş textarea görseli."""
    cells = [['']]
    t = Table(cells, colWidths=[A4[0] - 5*cm], rowHeights=[1.2*cm * min_lines])
    t.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 0.7, BORDER),
        ('BACKGROUND', (0,0), (-1,-1), CREAM_SOFT),
    ]))
    return t

def gold_rule(width=4*cm, thickness=1.2):
    return HRFlowable(width=width, thickness=thickness, color=GOLD,
                      spaceBefore=2, spaceAfter=10, hAlign='LEFT')

def section_card(content):
    """Wraps content in a styled card."""
    return KeepTogether(content)

# --- HTML form parser ---
TEMPLATE_PLACEHOLDER_RE = re.compile(r'\{\{[A-Z_]+\}\}')

def extract_meta(html_text):
    """HTML form'dan meta verileri çıkar."""
    soup = BeautifulSoup(html_text, 'html.parser')
    meta = {}

    title_tag = soup.find('title')
    if title_tag:
        meta['form_title'] = title_tag.get_text().strip()

    # Form-tag (ör. "İLK MAKALE — STİL RAFİNE FORMU · ~10 DAKİKA")
    form_tag = soup.find(class_='form-tag')
    if form_tag:
        meta['form_tag'] = form_tag.get_text().strip()

    # Eyebrow
    eyebrow = soup.find(class_='eyebrow')
    if eyebrow:
        meta['eyebrow'] = eyebrow.get_text().strip()

    # H1 (article title)
    h1 = soup.find('header').find('h1') if soup.find('header') else None
    if h1:
        meta['article_title'] = h1.get_text().strip()

    # Meta line (yazar / tarih / deadline)
    meta_p = soup.find('p', class_='meta')
    if meta_p:
        meta['meta_line'] = meta_p.get_text(' ', strip=True)

    # Intro note
    intro = soup.find(class_='intro-note')
    if intro:
        meta['intro_note'] = intro.get_text(' ', strip=True)

    # Footer note
    footer = soup.find(class_='footer-note')
    if footer:
        meta['footer_note'] = footer.get_text(' ', strip=True)

    return meta, soup

# --- Build story for the form ---
def build_form_story(html_text):
    meta, soup = extract_meta(html_text)
    story = []

    # Header
    if 'form_tag' in meta:
        story.append(Paragraph(f'<b>{meta["form_tag"]}</b>', TAG))
    if 'eyebrow' in meta:
        story.append(Paragraph(meta['eyebrow'], EYEBROW))
    if 'article_title' in meta:
        story.append(Paragraph(meta['article_title'], H1))
    story.append(gold_rule(width=4*cm, thickness=1.5))
    if 'meta_line' in meta:
        story.append(Paragraph(meta['meta_line'], META))
    if 'intro_note' in meta:
        story.append(Spacer(1, 0.2*cm))
        # Intro note as a box
        intro_table = Table([[Paragraph(meta['intro_note'], INTRO)]],
                            colWidths=[A4[0] - 5*cm])
        intro_table.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (-1,-1), CREAM_SOFT),
            ('LEFTPADDING', (0,0), (-1,-1), 12),
            ('RIGHTPADDING', (0,0), (-1,-1), 12),
            ('TOPPADDING', (0,0), (-1,-1), 10),
            ('BOTTOMPADDING', (0,0), (-1,-1), 10),
            ('LINEBEFORE', (0,0), (0,-1), 3, GOLD),
        ]))
        story.append(intro_table)

    story.append(Spacer(1, 0.3*cm))

    # Iterate through form sections (cards)
    cards = soup.find_all('section', class_='card')
    for card in cards:
        # section-num
        sect_num = card.find(class_='section-num')
        if sect_num:
            story.append(Paragraph(sect_num.get_text().strip(), SECT_NUM))

        # H2
        h2 = card.find('h2')
        if h2:
            story.append(Paragraph(h2.get_text().strip(), H2))

        # Section hint
        hint = card.find(class_='section-hint')
        if hint:
            story.append(Paragraph(hint.get_text().strip(), HINT))

        # Iterate fields within the card
        fields = card.find_all(class_='field')
        for field in fields:
            label = field.find(class_='field-label')
            if label:
                story.append(Paragraph(label.get_text().strip(), LABEL))

            example = field.find(class_='field-example')
            if example:
                example_text = example.get_text(' ', strip=True)
                story.append(Paragraph(example_text, EXAMPLE))

            # Likert?
            likert = field.find(class_='likert')
            if likert:
                # Find scale-line for left/right labels
                scale = likert.find(class_='scale-line')
                story.append(make_likert_row())
                if scale:
                    spans = scale.find_all('span')
                    if len(spans) >= 2:
                        story.append(Paragraph(
                            f'<font color="#7a7a7a" size="9">{spans[0].get_text().strip()}'
                            f' &nbsp;…&nbsp; {spans[1].get_text().strip()}</font>',
                            SCALE))
                story.append(Spacer(1, 0.15*cm))
                continue

            # Toggle / style-choice (multi-button radio)?
            toggle = field.find(class_='toggle')
            style_choice = field.find(class_='style-choice')
            choice = toggle or style_choice
            if choice:
                labels = []
                for lbl in choice.find_all('label'):
                    # Inputs hidden, so get text minus input
                    txt = lbl.get_text(' ', strip=True)
                    labels.append(txt)
                story.append(make_radio_row(labels))
                story.append(Spacer(1, 0.15*cm))
                continue

            # Textarea?
            textarea = field.find('textarea')
            if textarea:
                placeholder = textarea.get('placeholder', '')
                if placeholder:
                    story.append(Paragraph(
                        f'<font color="#7a7a7a" size="9" face="Calibri-Italic">'
                        f'{placeholder}</font>', SCALE))
                story.append(make_textarea_box(min_lines=4))
                story.append(Spacer(1, 0.15*cm))
                continue

        story.append(Spacer(1, 0.4*cm))

    # Decision row (statik buton görseli)
    btn_approve = Paragraph('<font face="Constantia-Bold" size="14" color="#FFFFFF">'
                            '<br/>✓ ONAYLIYORUM<br/></font>', DECISION)
    btn_revise = Paragraph('<font face="Constantia-Bold" size="14" color="#6B2D3E">'
                           '<br/>✏ DEĞİŞİKLİK İSTİYORUM<br/></font>', DECISION_ALT)
    decision_table = Table([[btn_approve, btn_revise]],
                           colWidths=[(A4[0]-5*cm)/2 - 7]*2,
                           rowHeights=[2*cm])
    decision_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('ALIGN', (0,0), (-1,-1), 'CENTER'),
        ('BACKGROUND', (0,0), (0,0), BURGUNDY),
        ('BOX', (1,0), (1,0), 1.5, BURGUNDY),
        ('BACKGROUND', (1,0), (1,0), WHITE),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(Spacer(1, 0.2*cm))
    story.append(decision_table)

    # Footer note
    if 'footer_note' in meta:
        footer_table = Table([[Paragraph(meta['footer_note'], FOOTER_NOTE)]],
                             colWidths=[A4[0] - 5*cm])
        footer_table.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (-1,-1), CREAM_SOFT),
            ('LEFTPADDING', (0,0), (-1,-1), 12),
            ('RIGHTPADDING', (0,0), (-1,-1), 12),
            ('TOPPADDING', (0,0), (-1,-1), 10),
            ('BOTTOMPADDING', (0,0), (-1,-1), 10),
            ('BOX', (0,0), (-1,-1), 0.5, BORDER),
        ]))
        story.append(Spacer(1, 0.4*cm))
        story.append(footer_table)

    # Print warning at the very end
    pdf_warning = Paragraph(
        '<font color="#7a7a7a" size="8" face="Calibri-Italic">'
        'Not: Bu PDF, formun görsel arşividir. Etkileşimli yanıt için lütfen '
        'paketle birlikte gönderilen HTML formunu tarayıcınızda açın; karara '
        'tıkladığınızda e-posta istemciniz açılarak yanıtınız iletilir.</font>',
        FOOTER_NOTE)
    story.append(Spacer(1, 0.3*cm))
    story.append(pdf_warning)

    return story, meta

# --- Main ---
def main():
    parser = argparse.ArgumentParser(description='Yazar onay formu HTML → PDF (görsel arşiv).')
    parser.add_argument('input', help='Form HTML dosyası')
    parser.add_argument('output', help='PDF çıktı yolu')
    args = parser.parse_args()

    with open(args.input, 'r', encoding='utf-8') as f:
        html_text = f.read()

    story, meta = build_form_story(html_text)

    title = meta.get('form_title', 'Estranova Yazar Onay Formu')

    doc = SimpleDocTemplate(
        args.output, pagesize=A4,
        leftMargin=2.5*cm, rightMargin=2.5*cm,
        topMargin=2.5*cm, bottomMargin=2.5*cm,
        title=title, author='Estranova', creator='Estranova',
        subject='Yazar onay formu görsel PDF arşivi',
    )

    doc.build(story, canvasmaker=FooterCanvas)
    print(f"PDF üretildi: {args.output}")

if __name__ == '__main__':
    main()
