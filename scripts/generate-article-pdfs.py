# -*- coding: utf-8 -*-
"""
4 yayın makalesini PDF olarak Downloads klasörüne render et.

Makaleler (icerik/yayinlanmis-makaleler/ markdown export'undan):
    Berna  — kilo-artisi-menopoz.pdf
    Duygu  — menopozda-cilt-degisimleri.pdf
    Selin  — perimenopoz-nedir.pdf
    Demet  — hrt-ilk-alti-ay.pdf

Her PDF Estranova editöryal tipografi sistemine sadık kalır:
    H1 başlık + altın ayraç + H2 sonrası chapter num + gold separator
    + italic primary lede + gövde + (kanıt) inline gold italic
    + FAQ Q-A + Bilimsel Editör Notu (Doç. Dr. Senai Aksoy imzalı)
    + medical disclaimer + footer.
"""

import os
import re
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.platypus.flowables import HRFlowable, KeepTogether
from reportlab.pdfgen import canvas

FONTS = "C:/Windows/Fonts"
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

# Estranova palette
primary        = HexColor('#D81B60')
secondary_pink   = HexColor('#D81B60')
gold            = HexColor('#C9A96E')
dark_gray       = HexColor('#2D2D2D')
light_gray      = HexColor('#888888')
very_light_gray = HexColor('#B5B0A8')
form_bg         = HexColor('#FAF6EE')


# Styles
byline_style = ParagraphStyle('Byline', fontName='Calibri-Italic', fontSize=9,
    textColor=light_gray, alignment=TA_RIGHT, spaceAfter=14, leading=12)
h1_style = ParagraphStyle('H1', fontName='Constantia-Bold', fontSize=23,
    textColor=secondary_pink, leading=29, spaceBefore=8, spaceAfter=4, alignment=TA_LEFT)
opening_lede_style = ParagraphStyle('OpeningLede', fontName='Constantia-Italic',
    fontSize=12.5, textColor=primary, leading=20, spaceBefore=12, spaceAfter=18, alignment=TA_LEFT)
chapter_num_style = ParagraphStyle('ChapterNum', fontName='Constantia-Bold', fontSize=11,
    textColor=gold, leading=14, spaceBefore=22, spaceAfter=2, alignment=TA_LEFT)
h2_style = ParagraphStyle('H2', fontName='Constantia-Bold', fontSize=16.5,
    textColor=secondary_pink, leading=21, spaceBefore=2, spaceAfter=4, alignment=TA_LEFT)
section_lede_style = ParagraphStyle('SectionLede', fontName='Constantia-Italic',
    fontSize=11.5, textColor=primary, leading=18, spaceBefore=10, spaceAfter=12, alignment=TA_LEFT)
body_style = ParagraphStyle('Body', fontName='Calibri', fontSize=11,
    textColor=dark_gray, leading=17, spaceBefore=4, spaceAfter=10, alignment=TA_LEFT)
list_style = ParagraphStyle('List', fontName='Calibri', fontSize=11,
    textColor=dark_gray, leading=17, spaceBefore=2, spaceAfter=4, alignment=TA_LEFT,
    leftIndent=18, bulletIndent=6)
faq_q_style = ParagraphStyle('FAQQ', fontName='Calibri-Bold', fontSize=11,
    textColor=secondary_pink, leading=16, spaceBefore=12, spaceAfter=4, alignment=TA_LEFT)
faq_a_style = ParagraphStyle('FAQA', fontName='Calibri', fontSize=11,
    textColor=dark_gray, leading=17, spaceBefore=0, spaceAfter=8, alignment=TA_LEFT)
editor_note_label_style = ParagraphStyle('EditorNoteLabel', fontName='Constantia-Bold',
    fontSize=10, textColor=gold, leading=14, spaceAfter=6, alignment=TA_LEFT)
editor_note_body_style = ParagraphStyle('EditorNoteBody', fontName='Calibri', fontSize=10.5,
    textColor=dark_gray, leading=16, spaceAfter=8, alignment=TA_LEFT)
editor_note_signature_style = ParagraphStyle('EditorNoteSig', fontName='Calibri-Italic',
    fontSize=9.5, textColor=secondary_pink, leading=12, spaceBefore=4, alignment=TA_LEFT)
inline_disclaimer_style = ParagraphStyle('InlineDisclaimer', fontName='Calibri-Italic',
    fontSize=10, textColor=light_gray, leading=14, spaceBefore=10, spaceAfter=12,
    alignment=TA_LEFT, leftIndent=10, rightIndent=10)


class FooterCanvas(canvas.Canvas):
    def __init__(self, *args, footer_text="Estranova editöryal yayın taslağı", **kwargs):
        canvas.Canvas.__init__(self, *args, **kwargs)
        self.pages = []
        self.footer_text = footer_text

    def showPage(self):
        self.pages.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        page_count = len(self.pages)
        for page in self.pages:
            self.__dict__.update(page)
            self._draw_footer(page_count)
            canvas.Canvas.showPage(self)
        canvas.Canvas.save(self)

    def _draw_footer(self, page_count):
        self.saveState()
        self.setStrokeColor(gold)
        self.setLineWidth(0.4)
        self.line(2.5*cm, 1.7*cm, A4[0] - 2.5*cm, 1.7*cm)
        self.setFont('Calibri-Italic', 8)
        self.setFillColor(light_gray)
        self.drawString(2.5*cm, 1.1*cm, self.footer_text)
        self.setFont('Calibri', 8)
        self.setFillColor(light_gray)
        self.drawRightString(A4[0] - 2.5*cm, 1.1*cm, f"{self._pageNumber} / {page_count}")
        self.restoreState()


# ----------------------------------------------------------------
# Markdown → ReportLab Paragraph XML conversion
# ----------------------------------------------------------------

EVIDENCE_RE = re.compile(r'\(([^()\n]*?kanıt[^()\n]*?)\)')

def md_inline(text):
    """Convert a markdown text fragment to ReportLab Paragraph XML.

    Handles: XML-escape, **bold**, *italic*, _italic_, [text](url), (N kanıt)→gold italic.
    """
    # XML escape
    text = text.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')

    # (N kanıt) → italic gold (do this BEFORE other italic substitution so we can use
    # font tags inside)
    text = EVIDENCE_RE.sub(
        r'<i><font color="#C9A96E">(\1)</font></i>', text)

    # **bold**
    text = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', text)
    # *italic*  (avoid touching ** which already converted)
    text = re.sub(r'(?<!\*)\*([^\*\n]+?)\*(?!\*)', r'<i>\1</i>', text)
    # _italic_
    text = re.sub(r'(?<!_)_([^_\n]+?)_(?!_)', r'<i>\1</i>', text)
    # [text](url) → text (drop URL since this is a print-PDF)
    text = re.sub(r'\[([^\]]+?)\]\([^)]+?\)', r'\1', text)
    return text


def preprocess_evidence(body):
    """Merge orphan (N kanıt) tokens that the export wrote on their own lines
    back into the surrounding text — so they render inline."""
    # Pattern A: paragraph end + blank + "(N kanıt)" + "." + continuation:
    #   "duruyor\n\n(güçlü kanıt)\n. Bu birkaç..."
    body = re.sub(
        r'([^\n])\n\n+(\([^()]*?kanıt[^()]*?\))\n\.\s*',
        r'\1 \2. ',
        body
    )
    # Pattern B: paragraph end + blank + "(N kanıt)" + blank line:
    #   "duruyor\n\n(güçlü kanıt)\n\nNew para..."
    body = re.sub(
        r'([^\n])\n\n+(\([^()]*?kanıt[^()]*?\))\s*\n\n',
        r'\1 \2.\n\n',
        body
    )
    # Pattern C: list item with multi-line evidence:
    #   "- **X\n(N kanıt)\n:** ..." → "- **X (N kanıt):** ..."
    body = re.sub(
        r'(- \*\*[^\n]+)\n(\([^()]*?kanıt[^()]*?\))\n(:[^\n]*)',
        r'\1 \2\3',
        body
    )
    # Pattern D: any remaining orphan "(N kanıt)" line embedded in a paragraph
    body = re.sub(
        r'\n(\([^()]*?kanıt[^()]*?\))\n(?!\s*\n)',
        r' \1 ',
        body
    )
    return body


# ----------------------------------------------------------------
# Markdown parser → list of (kind, content) blocks
# ----------------------------------------------------------------

def parse_markdown(body):
    """Parse markdown body to a list of (kind, content) blocks.

    kinds: 'h1', 'h2', 'h3', 'p', 'list' (content = list of items), 'callout'
    """
    body = preprocess_evidence(body)
    lines = body.split('\n')
    blocks = []
    i = 0
    n = len(lines)
    while i < n:
        line = lines[i].rstrip()
        if not line:
            i += 1
            continue
        if line.startswith('# ') and not blocks:
            blocks.append(('h1', line[2:].strip()))
            i += 1
            continue
        if line.startswith('## '):
            blocks.append(('h2', line[3:].strip()))
            i += 1
            continue
        if line.startswith('### '):
            blocks.append(('h3', line[4:].strip()))
            i += 1
            continue
        if line.startswith('- '):
            # Collect list items until blank line
            items = []
            cur = line[2:].strip()
            i += 1
            while i < n:
                ln = lines[i].rstrip()
                if not ln:
                    break
                if ln.startswith('- '):
                    items.append(cur)
                    cur = ln[2:].strip()
                else:
                    cur += ' ' + ln.strip()
                i += 1
            if cur:
                items.append(cur)
            blocks.append(('list', items))
            continue
        if line.startswith('> '):
            # Blockquote / callout — collect until blank
            quote_lines = [line[2:].strip()]
            i += 1
            while i < n and lines[i].rstrip().startswith('> '):
                quote_lines.append(lines[i].rstrip()[2:].strip())
                i += 1
            blocks.append(('callout', ' '.join(quote_lines)))
            continue
        # Regular paragraph: collect until blank or special line
        para = [line]
        i += 1
        while i < n:
            ln = lines[i].rstrip()
            if not ln:
                break
            if ln.startswith(('# ', '## ', '### ', '- ', '> ')):
                break
            para.append(ln)
            i += 1
        joined = ' '.join(p.strip() for p in para)
        # "**Kısa not:** ..." — render as callout (bordered)
        if joined.startswith('**Kısa not:**'):
            blocks.append(('callout', joined))
        else:
            blocks.append(('p', joined))
    return blocks


# ----------------------------------------------------------------
# Block renderer
# ----------------------------------------------------------------

def callout_flowable(text):
    inner = [[Paragraph(md_inline(text), editor_note_body_style)]]
    table = Table(inner, colWidths=[15.5*cm])
    table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), form_bg),
        ('LEFTPADDING', (0, 0), (-1, -1), 14),
        ('RIGHTPADDING', (0, 0), (-1, -1), 14),
        ('TOPPADDING', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 10),
        ('LINEBEFORE', (0, 0), (0, -1), 3, gold),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    return table


def editor_note_flowable(paragraphs, signature="— Doç. Dr. Senai Aksoy, Estranova Bilimsel Editörü"):
    inner = [[Paragraph("BİLİMSEL EDİTÖR NOTU", editor_note_label_style)]]
    for p in paragraphs:
        inner.append([Paragraph(md_inline(p), editor_note_body_style)])
    inner.append([Paragraph(signature, editor_note_signature_style)])
    table = Table(inner, colWidths=[15.5*cm])
    table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), form_bg),
        ('LEFTPADDING', (0, 0), (-1, -1), 14),
        ('RIGHTPADDING', (0, 0), (-1, -1), 14),
        ('TOPPADDING', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 10),
        ('LINEBEFORE', (0, 0), (0, -1), 3, gold),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    return table


def render_blocks(blocks, h1_title, faq_section_title="Sıkça Sorulanlar"):
    """Render parsed blocks to ReportLab story flowables.

    State machine:
        - First H2 starts ch=01; gold separator + italic lede.
        - In FAQ (after h2 == faq_section_title): h3 → faq_q, p → faq_a.
    """
    story = []

    # H1 already provided externally (we skip the markdown's own H1 to use
    # the frontmatter title with editorial typography).

    chapter_idx = 0
    in_faq = False
    last_was_h2 = False

    for kind, content in blocks:
        if kind == 'h1':
            # Skip - we use the frontmatter title as our H1
            continue

        if kind == 'h2':
            chapter_idx += 1
            in_faq = (faq_section_title.lower() in content.lower())
            head = [
                Paragraph(f"{chapter_idx:02d}", chapter_num_style),
                Paragraph(md_inline(content), h2_style),
                HRFlowable(width=2.5*cm, thickness=1.5, color=gold,
                           hAlign='LEFT', spaceBefore=4, spaceAfter=12),
            ]
            story.append(KeepTogether(head))
            last_was_h2 = True
            continue

        if kind == 'h3':
            # In FAQ → Q. Outside FAQ → small bold.
            if in_faq:
                story.append(Paragraph(md_inline(content), faq_q_style))
            else:
                story.append(Paragraph(md_inline(content), faq_q_style))
            last_was_h2 = False
            continue

        if kind == 'p':
            # If this is the first paragraph after H2 (and not in FAQ), render as italic lede
            if last_was_h2 and not in_faq:
                story.append(Paragraph(md_inline(content), section_lede_style))
                last_was_h2 = False
            else:
                style = faq_a_style if in_faq else body_style
                story.append(Paragraph(md_inline(content), style))
            continue

        if kind == 'callout':
            story.append(callout_flowable(content))
            last_was_h2 = False
            continue

        if kind == 'list':
            for item in content:
                story.append(Paragraph(f"•  {md_inline(item)}", list_style))
            last_was_h2 = False
            continue

    return story


# ----------------------------------------------------------------
# Article configurations
# ----------------------------------------------------------------

ARTICLE_DIR = "D:/A-klasör/Estranova/.claude/worktrees/zen-hertz-0533c9/icerik/yayinlanmis-makaleler"

ARTICLES = [
    {
        'slug': 'kilo-artisi-menopoz',
        'writer': 'Berna Aksoy',
        'date': '28 Nisan 2026',
        'md_path': f"{ARTICLE_DIR}/2026-04/2026-04-28__kilo-artisi-menopoz.md",
        'title': "Menopozda Kilo Artışı — Aynı Yaşamda Değişen Bedenle Sakin Bir Sohbet",
        'opening_lede': (
            "Menopoz geçişinde kilo artışının arkasındaki östrojen-yağ dağılımı ilişkisini, kas kütlesinin neden "
            "tartıdan daha belirleyici olduğunu ve diyet kültürüne kapılmadan denenebilecek küçük adımları "
            "akran tonuyla anlatan rehber."
        ),
        'editor_note': [
            "Menopoz ilişkili kilo değişimi tek bir mekanizmaya bağlanamaz; östrojen düşüşüyle yağ dağılımının "
            "visseral alana kayması, sarkopeni, uyku-kortizol ekseni ve insülin duyarlılığındaki değişim birlikte "
            "değerlendirilir. Belirgin kalori kısıtlaması yerine protein temelli tabak yapısı, düzenli direnç "
            "çalışması, uyku korunumu ve stres yönetimi en tutarlı destek başlıkları arasında. Hızlı ve "
            "açıklanamayan kilo değişimleri, eşlik eden sistemik belirtiler ya da güçlü aile öyküsü varsa plan "
            "mutlaka hekim değerlendirmesi ile şekillendirilir.",
        ],
        'output': r"C:\Users\KC3\Downloads\berna-kilo-artisi-menopoz.pdf",
    },
    {
        'slug': 'menopozda-cilt-degisimleri',
        'writer': 'Dt. Duygu Karaosmanoğlu',
        'date': '28 Nisan 2026',
        'md_path': f"{ARTICLE_DIR}/2026-04/2026-04-28__menopozda-cilt-degisimleri.md",
        'title': "Menopozda Cilt Değişimleri — Aynaya Sakince Bakmak ve Bakım Rehberi",
        'opening_lede': (
            "Menopozda cilt neden ve nasıl değişir, hangi bakım adımları gerçekten fark yaratır, hangileri "
            "pahalı umut? HRT yolculuğunu yaşayan bir akranın deneyim notlarıyla."
        ),
        'editor_note': [
            "Cilt değişimleri menopozun görünür ve günlük yaşamı etkileyen yönlerinden biridir. Bu değişimleri "
            "anlamak ve kişiye uygun bakım planı oluşturmak konforu artırır. Birçok müdahale kişiden kişiye "
            "farklı sonuç verir; düzenli takip ve sabırlı yaklaşım önemlidir.",
        ],
        'output': r"C:\Users\KC3\Downloads\duygu-menopozda-cilt-degisimleri.pdf",
    },
    {
        'slug': 'perimenopoz-nedir',
        'writer': 'Işık Selin Günce',
        'date': '27 Nisan 2026',
        'md_path': f"{ARTICLE_DIR}/2026-04/2026-04-27__perimenopoz-nedir.md",
        'title': "Perimenopoz Nedir? — Temel Rehber",
        'opening_lede': (
            "Perimenopoz nedir, ne zaman başlar, hangi belirtileri getirir? Sahne arkasında ve günlük hayatta "
            "birçoğumuzun konuştuğu bir geçişin sade ve sıcak tarifi."
        ),
        'editor_note': [
            "Perimenopoz kişi kişi çok değişken bir deneyimdir. Başlangıç yaşı, belirtilerin şiddeti ve süresi "
            "geniş bir dağılım gösterir. Bu rehber genel bilgi sağlar; kişisel sağlık değerlendirmesi hekim ile "
            "yapılmalıdır. Belirtileriniz yoğunsa, yaşam alışkanlıklarını düzenlemek ve profesyonel destek almak "
            "süreci kolaylaştırır.",
        ],
        'output': r"C:\Users\KC3\Downloads\selin-perimenopoz-nedir.pdf",
    },
    {
        'slug': 'hrt-ilk-alti-ay',
        'writer': 'Demet Kızılkaya',
        'date': '27 Nisan 2026',
        'md_path': f"{ARTICLE_DIR}/2026-04/2026-04-27__hrt-ilk-alti-ay.md",
        'title': "HRT — İlk Altı Ayın Notları",
        'opening_lede': (
            "Hormon replasman tedavisine başlayan 58 yaşında bir kadının ilk aylarından bir yazı: karar süreci, "
            "üç ayın muhasebesi, beklentilerle gerçeğin örtüştüğü ve örtüşmediği yerler, aile bağı."
        ),
        'editor_note': [
            "Hormon replasman tedavisi (HRT) menopoz döneminde uygun adaylarda etkili ve büyük ölçüde güvenli "
            "bir seçenek olabilir; ancak risk-fayda dengesi bireyseldir ve yıllar içinde yeniden değerlendirilir. "
            "Bu yazı bir akranın ilk aylardaki deneyimini paylaşmaktadır; tıbbi tavsiye, tanı veya tedavi yerine "
            "geçmez.",
            "Güncel uluslararası rehberlerde tedavinin **ilk yılında takipler genellikle daha sık tutulur**: "
            "başlangıçtan sonra üç ay ve altı ay aralıklarındaki değerlendirmeler yaygın bir çerçevedir. Tedavi "
            "oturduktan sonra kontroller çoğunlukla **yıllık rutine** döner; mamografi, kemik mineral yoğunluğu "
            "ve temel kan tetkikleri bu rutinin parçasıdır. Endometrium izlemi, kullanılan progesteron "
            "formülasyonuna ve klinik tabloya göre planlanır.",
            "Bu aralıklar sabit bir kural değildir; **semptom seyri, kullanılan formülasyon, eşlik eden sağlık "
            "durumu ve kişisel risk profiline göre hekim tarafından bireyselleştirilir**. Tedavi başlama, doz "
            "ayarlama, izlem sıklığı ve sonlandırma kararları her zaman bireysel klinik değerlendirme sonrasında, "
            "jinekoloji uzmanı veya tıbbi sorumlusu olan hekim ile birlikte alınmalıdır. Beklenmedik belirtiler "
            "(örneğin yoğun baş ağrısı, beklenmedik kanama, göğüste belirgin hassasiyet, nefes darlığı, bacakta "
            "şişlik) için planlı zamandan önce başvurmak her zaman güvenli tercihtir.",
        ],
        'output': r"C:\Users\KC3\Downloads\demet-hrt-ilk-alti-ay.pdf",
    },
]


def parse_frontmatter(text):
    """Strip and return (frontmatter_dict, body)."""
    if not text.startswith('---'):
        return {}, text
    end = text.find('\n---', 3)
    if end < 0:
        return {}, text
    fm_block = text[3:end].strip()
    body = text[end + 4:].lstrip('\n')
    fm = {}
    for ln in fm_block.split('\n'):
        if ':' in ln:
            k, v = ln.split(':', 1)
            fm[k.strip()] = v.strip().strip('"')
    return fm, body


def build_article(article):
    with open(article['md_path'], 'r', encoding='utf-8') as f:
        text = f.read()
    _fm, body = parse_frontmatter(text)
    blocks = parse_markdown(body)

    story = []

    # Byline
    story.append(Paragraph(
        f"{article['writer']} &nbsp;·&nbsp; Estranova &nbsp;·&nbsp; {article['date']}",
        byline_style
    ))

    # H1 + gold separator
    story.append(Paragraph(article['title'], h1_style))
    story.append(HRFlowable(width=3.2*cm, thickness=2, color=gold,
                            hAlign='LEFT', spaceBefore=8, spaceAfter=6))

    # Opening lede (description)
    story.append(Paragraph(md_inline(article['opening_lede']), opening_lede_style))

    # Body
    story.extend(render_blocks(blocks, article['title']))

    # Bilimsel Editör Notu
    story.append(Spacer(1, 0.6*cm))
    story.append(editor_note_flowable(article['editor_note']))

    # Medical disclaimer
    story.append(HRFlowable(width=16*cm, thickness=0.4, color=very_light_gray,
                            spaceBefore=12, spaceAfter=8))
    story.append(Paragraph(
        "<i>Bu içerik genel bilgi amaçlıdır ve bireysel tıbbi değerlendirme, tanı veya tedavinin yerini almaz. "
        "Sağlığınıza dair kararlarda kendi hekiminize danışmanız önerilir.</i>",
        inline_disclaimer_style
    ))

    # Build doc
    doc = SimpleDocTemplate(article['output'], pagesize=A4,
        leftMargin=2.5*cm, rightMargin=2.5*cm,
        topMargin=2*cm, bottomMargin=2.5*cm,
        title=article['title'], author=article['writer'],
        subject="Estranova editöryal yayın taslağı",
        creator="Estranova editöryal pipeline")

    footer = f"Estranova editöryal yayın taslağı — {article['writer']}"
    def make_canvas(*args, **kwargs):
        return FooterCanvas(*args, footer_text=footer, **kwargs)

    doc.build(story, canvasmaker=make_canvas)
    return article['output']


if __name__ == "__main__":
    print("Estranova yayın makaleleri PDF olarak üretiliyor...")
    print()
    for art in ARTICLES:
        path = build_article(art)
        size_kb = os.path.getsize(path) / 1024
        print(f"[OK] {art['writer']:<25s} : {path}  ({size_kb:.1f} KB)")
    print()
    print("Her makale, ilgili yazara doğrulama formuyla birlikte gönderilebilir.")
