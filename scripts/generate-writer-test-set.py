# -*- coding: utf-8 -*-
"""
Rima Erdemir test seti — iki PDF üretir:
  1. C:\\Users\\KC3\\Downloads\\rima-test-makale.pdf  (~1000-1200 kelime)
  2. C:\\Users\\KC3\\Downloads\\rima-yazar-dogrulama-formu.pdf  (8 bölüm yazar değerlendirme formu)

Konsept (2026-04-29):
- Test makalesi Rima v2.0 profile §0.5 yürütme protokolünü TAM uygular
- Form Rima'nın kendi sesini doğrulamak için işaretleyeceği 8 bölüm
- İkisi birlikte gönderildiğinde Rima'nın stilini OTURTUR

Profile referans: writers/rima-erdemir.md (v2.0)
"""

from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_RIGHT, TA_CENTER
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.platypus.flowables import HRFlowable, KeepTogether, Flowable
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

registerFontFamily('Constantia',
                   normal='Constantia',
                   bold='Constantia-Bold',
                   italic='Constantia-Italic',
                   boldItalic='Constantia-BoldItalic')
registerFontFamily('Calibri',
                   normal='Calibri',
                   bold='Calibri-Bold',
                   italic='Calibri-Italic',
                   boldItalic='Calibri-BoldItalic')

# --- Estranova palette ---
burgundy        = HexColor('#6B2D3E')
deep_burgundy   = HexColor('#4f171c')
gold            = HexColor('#C9A96E')
dark_gray       = HexColor('#2D2D2D')
light_gray      = HexColor('#888888')
very_light_gray = HexColor('#B5B0A8')
form_bg         = HexColor('#FAF6EE')

# --- Styles ---
byline_style = ParagraphStyle(
    'Byline', fontName='Calibri-Italic', fontSize=9, textColor=light_gray,
    alignment=TA_RIGHT, spaceAfter=14, leading=12,
)

h1_style = ParagraphStyle(
    'H1', fontName='Constantia-Bold', fontSize=23, textColor=deep_burgundy,
    leading=29, spaceBefore=8, spaceAfter=4, alignment=TA_LEFT,
)

opening_lede_style = ParagraphStyle(
    'OpeningLede', fontName='Constantia-Italic', fontSize=13, textColor=burgundy,
    leading=21, spaceBefore=14, spaceAfter=18, alignment=TA_LEFT, leftIndent=0,
)

chapter_num_style = ParagraphStyle(
    'ChapterNum', fontName='Constantia-Bold', fontSize=11, textColor=gold,
    leading=14, spaceBefore=22, spaceAfter=2, alignment=TA_LEFT,
)

h2_style = ParagraphStyle(
    'H2', fontName='Constantia-Bold', fontSize=17, textColor=deep_burgundy,
    leading=22, spaceBefore=2, spaceAfter=4, alignment=TA_LEFT,
)

section_lede_style = ParagraphStyle(
    'SectionLede', fontName='Constantia-Italic', fontSize=12, textColor=burgundy,
    leading=19, spaceBefore=10, spaceAfter=12, alignment=TA_LEFT, leftIndent=0,
)

body_style = ParagraphStyle(
    'Body', fontName='Calibri', fontSize=11, textColor=dark_gray,
    leading=17, spaceBefore=4, spaceAfter=10, alignment=TA_LEFT,
)

faq_q_style = ParagraphStyle(
    'FAQQ', fontName='Calibri-Bold', fontSize=11, textColor=deep_burgundy,
    leading=16, spaceBefore=12, spaceAfter=4, alignment=TA_LEFT,
)

faq_a_style = ParagraphStyle(
    'FAQA', fontName='Calibri', fontSize=11, textColor=dark_gray,
    leading=17, spaceBefore=0, spaceAfter=8, alignment=TA_LEFT,
)

closing_lede_style = ParagraphStyle(
    'ClosingLede', fontName='Constantia-Italic', fontSize=12, textColor=burgundy,
    leading=19, spaceBefore=18, spaceAfter=14, alignment=TA_LEFT, leftIndent=0,
)

inline_disclaimer_style = ParagraphStyle(
    'InlineDisclaimer', fontName='Calibri-Italic', fontSize=10, textColor=light_gray,
    leading=14, spaceBefore=10, spaceAfter=12, alignment=TA_LEFT,
    leftIndent=10, rightIndent=10,
    borderColor=very_light_gray, borderWidth=0, borderPadding=4,
)

editor_note_label_style = ParagraphStyle(
    'EditorNoteLabel', fontName='Constantia-Bold', fontSize=10, textColor=gold,
    leading=14, spaceAfter=6, alignment=TA_LEFT,
)
editor_note_body_style = ParagraphStyle(
    'EditorNoteBody', fontName='Calibri', fontSize=10.5, textColor=dark_gray,
    leading=16, spaceAfter=8, alignment=TA_LEFT,
)
editor_note_signature_style = ParagraphStyle(
    'EditorNoteSignature', fontName='Calibri-Italic', fontSize=9.5, textColor=deep_burgundy,
    leading=12, spaceBefore=4, alignment=TA_LEFT,
)

# Form-specific styles
form_title_style = ParagraphStyle(
    'FormTitle', fontName='Constantia-Bold', fontSize=21, textColor=deep_burgundy,
    leading=27, spaceAfter=6, alignment=TA_LEFT,
)
form_intro_style = ParagraphStyle(
    'FormIntro', fontName='Calibri', fontSize=10.5, textColor=dark_gray,
    leading=16, spaceBefore=10, spaceAfter=14, alignment=TA_LEFT,
)
form_section_style = ParagraphStyle(
    'FormSection', fontName='Constantia-Bold', fontSize=14, textColor=deep_burgundy,
    leading=20, spaceBefore=18, spaceAfter=6, alignment=TA_LEFT,
)
form_section_lede_style = ParagraphStyle(
    'FormSectionLede', fontName='Constantia-Italic', fontSize=11, textColor=burgundy,
    leading=16, spaceAfter=8, alignment=TA_LEFT,
)
form_question_style = ParagraphStyle(
    'FormQuestion', fontName='Calibri', fontSize=10.5, textColor=dark_gray,
    leading=15, spaceBefore=8, spaceAfter=2, alignment=TA_LEFT,
)
form_question_quote_style = ParagraphStyle(
    'FormQuestionQuote', fontName='Calibri-Italic', fontSize=10.5, textColor=burgundy,
    leading=15, spaceBefore=4, spaceAfter=2, alignment=TA_LEFT, leftIndent=12,
)
form_options_style = ParagraphStyle(
    'FormOptions', fontName='Calibri', fontSize=10, textColor=dark_gray,
    leading=14, spaceBefore=0, spaceAfter=8, alignment=TA_LEFT, leftIndent=12,
)
form_open_label_style = ParagraphStyle(
    'FormOpenLabel', fontName='Calibri-Italic', fontSize=10, textColor=light_gray,
    leading=14, spaceBefore=4, spaceAfter=4, alignment=TA_LEFT,
)


# --- Footer canvas ---
class FooterCanvas(canvas.Canvas):
    def __init__(self, *args, footer_text="Estranova editöryal taslak — yazar revizyonu için.", **kwargs):
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
        self.drawRightString(A4[0] - 2.5*cm, 1.1*cm,
            f"{self._pageNumber} / {page_count}")
        self.restoreState()


# --- Helpers ---
def evidence(text):
    return f'<i><font color="#C9A96E">({text})</font></i>'


def bilimsel_editor_notu(body_text, signature="— Doç. Dr. Senai Aksoy, Estranova Bilimsel Editörü"):
    inner = [
        [Paragraph("BİLİMSEL EDİTÖR NOTU", editor_note_label_style)],
        [Paragraph(body_text, editor_note_body_style)],
        [Paragraph(signature, editor_note_signature_style)],
    ]
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


def chapter(num, title, lede, body_blocks):
    items = []
    head = [
        Paragraph(f"{num:02d}", chapter_num_style),
        Paragraph(title, h2_style),
        HRFlowable(width=2.5*cm, thickness=1.5, color=gold,
                   hAlign='LEFT', spaceBefore=4, spaceAfter=12),
        Paragraph(lede, section_lede_style),
    ]
    items.append(KeepTogether(head))
    for block in body_blocks:
        items.append(Paragraph(block, body_style))
    return items


def likert_satir(secenekler=("1 — Hiç katılmıyorum", "2", "3", "4", "5 — Tam katılıyorum")):
    """Likert ölçeği satırı — 5 noktalı kutu satırı."""
    cells = [Paragraph(f"[ ] {s}", form_options_style) for s in secenekler]
    table = Table([cells], colWidths=[3.1*cm]*5)
    table.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 4),
        ('TOPPADDING', (0, 0), (-1, -1), 2),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 2),
    ]))
    return table


def evet_hayir_satir():
    """Üç seçenekli onay: [ ] Evet  [ ] Yumuşat  [ ] Hayır"""
    cells = [
        Paragraph("[ ] Evet — bana ait", form_options_style),
        Paragraph("[ ] Yumuşat / değiştir", form_options_style),
        Paragraph("[ ] Hayır — kaldır", form_options_style),
    ]
    table = Table([cells], colWidths=[5.2*cm]*3)
    table.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 4),
        ('TOPPADDING', (0, 0), (-1, -1), 2),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 2),
    ]))
    return table


def yes_no_satir():
    """İki seçenekli: [ ] Doğru  [ ] Yanlış"""
    cells = [
        Paragraph("[ ] Doğru / kabul", form_options_style),
        Paragraph("[ ] Yanlış / değiştir", form_options_style),
    ]
    table = Table([cells], colWidths=[7.7*cm]*2)
    table.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 4),
        ('TOPPADDING', (0, 0), (-1, -1), 2),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 2),
    ]))
    return table


def acik_uclu_alan(satir_sayisi=4):
    """Açık uçlu yanıt alanı — boş çizgili satırlar."""
    items = []
    for _ in range(satir_sayisi):
        items.append(HRFlowable(
            width=15.5*cm, thickness=0.5, color=very_light_gray,
            spaceBefore=12, spaceAfter=0
        ))
    return items


# ============================================================
# INTERAKTİF FORM HELPERS — ReportLab AcroForm (tıklanabilir)
# ============================================================

class InteractiveLikert(Flowable):
    """5 noktalı tıklanabilir likert (radio button group — tek seçim).

    drawOn() override edilmiştir: ReportLab AcroForm widget'ları canvas
    transformation matrix'ini DİKKATE ALMAZ — page-absolute koordinat ister.
    Bu yüzden translate olmadan x, y'yi doğrudan kullanırız.
    """
    def __init__(self, name, options=None):
        Flowable.__init__(self)
        self.name = name
        self.options = options or [
            ("1", "1 (hiç)"),
            ("2", "2"),
            ("3", "3"),
            ("4", "4"),
            ("5", "5 (tam)"),
        ]
        self.height = 22
        self.width = 16*cm

    def wrap(self, available_width, available_height):
        return self.width, self.height

    def drawOn(self, canvas, x, y, _sW=0):
        col_width = 3.1 * cm
        for i, (val, label) in enumerate(self.options):
            ax = x + i * col_width
            ay = y + 4
            canvas.acroForm.radio(
                name=self.name,
                value=val,
                selected=False,
                x=ax, y=ay,
                size=11,
                buttonStyle='circle',
                borderColor=burgundy,
                fillColor=HexColor('#ffffff'),
                textColor=deep_burgundy,
                borderWidth=0.7,
                forceBorder=True,
                tooltip=label,
            )
            canvas.setFont('Calibri', 9)
            canvas.setFillColor(dark_gray)
            canvas.drawString(ax + 16, ay + 3, label)


class InteractiveTriple(Flowable):
    """3 seçenekli tıklanabilir radio: Evet / Yumuşat / Hayır.

    drawOn() override edilmiştir (page-absolute koordinat için).
    """
    def __init__(self, name):
        Flowable.__init__(self)
        self.name = name
        self.options = [
            ("evet", "Evet — bana ait"),
            ("yumusat", "Yumuşat / değiştir"),
            ("hayir", "Hayır — kaldır"),
        ]
        self.height = 22
        self.width = 16*cm

    def wrap(self, available_width, available_height):
        return self.width, self.height

    def drawOn(self, canvas, x, y, _sW=0):
        col_width = 5.2 * cm
        for i, (val, label) in enumerate(self.options):
            ax = x + i * col_width
            ay = y + 4
            canvas.acroForm.radio(
                name=self.name,
                value=val,
                selected=False,
                x=ax, y=ay,
                size=11,
                buttonStyle='circle',
                borderColor=burgundy,
                fillColor=HexColor('#ffffff'),
                textColor=deep_burgundy,
                borderWidth=0.7,
                forceBorder=True,
                tooltip=label,
            )
            canvas.setFont('Calibri', 9.5)
            canvas.setFillColor(dark_gray)
            canvas.drawString(ax + 16, ay + 3, label)


class InteractiveDouble(Flowable):
    """2 seçenekli tıklanabilir radio: Doğru / Yanlış.

    drawOn() override edilmiştir (page-absolute koordinat için).
    """
    def __init__(self, name):
        Flowable.__init__(self)
        self.name = name
        self.options = [
            ("dogru", "Doğru / kabul"),
            ("yanlis", "Yanlış / değiştir"),
        ]
        self.height = 22
        self.width = 16*cm

    def wrap(self, available_width, available_height):
        return self.width, self.height

    def drawOn(self, canvas, x, y, _sW=0):
        col_width = 7.7 * cm
        for i, (val, label) in enumerate(self.options):
            ax = x + i * col_width
            ay = y + 4
            canvas.acroForm.radio(
                name=self.name,
                value=val,
                selected=False,
                x=ax, y=ay,
                size=11,
                buttonStyle='circle',
                borderColor=burgundy,
                fillColor=HexColor('#ffffff'),
                textColor=deep_burgundy,
                borderWidth=0.7,
                forceBorder=True,
                tooltip=label,
            )
            canvas.setFont('Calibri', 9.5)
            canvas.setFillColor(dark_gray)
            canvas.drawString(ax + 16, ay + 3, label)


class InteractiveTextArea(Flowable):
    """Multiline tıklanabilir text alanı — yazılabilir.

    drawOn() override edilmiştir (page-absolute koordinat için).
    """
    def __init__(self, name, line_count=4, label=None):
        Flowable.__init__(self)
        self.name = name
        self.line_count = line_count
        self.label = label
        # Her satır ~14pt; padding ekle
        self.height = 14 * line_count + 12
        self.width = 16*cm

    def wrap(self, available_width, available_height):
        return self.width, self.height

    def drawOn(self, canvas, x, y, _sW=0):
        canvas.acroForm.textfield(
            name=self.name,
            tooltip=self.label or "Yanıtınızı buraya yazın",
            x=x, y=y + 2,
            width=15.5 * cm,
            height=self.height - 6,
            borderStyle='solid',
            borderColor=very_light_gray,
            fillColor=HexColor('#FAFAF8'),
            textColor=dark_gray,
            borderWidth=0.5,
            forceBorder=True,
            fontName='Helvetica',  # multiline için en güvenli
            fontSize=10,
            fieldFlags='multiline',
        )


def interaktif_likert(name):
    """Tıklanabilir likert flowable yaratır."""
    return InteractiveLikert(name)


def interaktif_uclu(name):
    """Tıklanabilir 3-seçenekli flowable yaratır (Evet/Yumuşat/Hayır)."""
    return InteractiveTriple(name)


def interaktif_ikili(name):
    """Tıklanabilir 2-seçenekli flowable yaratır (Doğru/Yanlış)."""
    return InteractiveDouble(name)


def interaktif_acik_uclu(name, satir_sayisi=4, label=None):
    """Tıklanabilir multiline text alanı flowable yaratır."""
    return InteractiveTextArea(name, line_count=satir_sayisi, label=label)


# ============================================================
# PDF 1 — TEST MAKALE
# ============================================================

def build_test_makale():
    story = []

    story.append(Paragraph(
        "Yazar: Rima Erdemir &nbsp;·&nbsp; Estranova editöryal test taslağı &nbsp;·&nbsp; 29 Nisan 2026",
        byline_style
    ))

    story.append(Paragraph(
        "AI'ya Sorduğum Bir Soru, Hekime Yazdığım Bir Not &mdash; Sağlık Bilgisinin Üçlü Dengesi",
        h1_style
    ))
    story.append(HRFlowable(
        width=3.2*cm, thickness=2, color=gold,
        hAlign='LEFT', spaceBefore=8, spaceAfter=6
    ))

    story.append(Paragraph(
        "Bilgi artık tek bir ağızdan gelmiyor; ama çok ağızdan gelen bilgiyi nasıl dengeleyeceğimi öğrenmek "
        "bana yıllar aldı. 55 yaşında bir akşam, telefondan AI asistanına bir soru sorduğumda, ertesi sabah "
        "hekimime yazdığım not arasındaki bağlantı bana şunu öğretti: bilgi tek başına cevap değil, doğru "
        "soruya köprü.",
        opening_lede_style
    ))

    story.append(Paragraph(
        "Geçen ay bir gece sıcak basmasıyla uyandım. Yıllardır bu durumlardan geçiyorum, ama o gece nedense "
        "bedenim başka bir şey söylüyor gibiydi &mdash; daha yoğun, daha uzun. Telefonuma uzandım, AI asistanına "
        "açtım: &ldquo;55 yaşta gece sıcak basmasının tetikleyicileri nelerdir, son birkaç haftada hormon dışında "
        "ne sebep olabilir?&rdquo; Aldığım cevap aydınlatıcıydı &mdash; magnezyum, alkol, akşam yemeği saati, oda "
        "ısısı, stres, bazı ilaç etkileşimleri. Liste uzundu.",
        body_style
    ))
    story.append(Paragraph(
        "Sonra durdum. Bu cevap doğru bir başlangıçtı, ama bana özel değildi. AI bilmiyordu son üç haftadır kahve "
        "miktarımı arttırdığımı; bilmiyordu son hafta ailede uyku düzeninin değiştiğini; bilmiyordu kendi tarama "
        "geçmişimdeki bir detayı. Sabah hekimime yazdım &mdash; AI'nın listesini değil, kendi gözlemimi: "
        "&ldquo;şu üç değişen şeyi fark ettim, AI şunu sıralıyor; senin gözünde ne anlam var?&rdquo;",
        body_style
    ))
    story.append(Paragraph(
        "Üç kaynak &mdash; AI + cihaz + hekim &mdash; yan yana durduğunda farklı bir tablo çıktı. Bu yazı bu "
        "üçlü dengenin son birkaç yıldır bana ne öğrettiğine dair bir not.",
        body_style
    ))

    # === Chapter 01 ===
    story.extend(chapter(
        1,
        "AI'nın söyleyebildiği, söyleyemediği",
        "Yapay zekâ asistanları sağlık sorularına ilk başlangıç noktası olabilir; ama klinik karar verme aracı değil &mdash; bunu öğrenmek bana zaman aldı.",
        [
            "Bir AI asistanına sağlık sorduğunuzda iki şey yapıyor: birincisi, geniş bir bilgi havuzundan damıtılmış "
            "özetler veriyor; ikincisi, yaygın tetikleyicileri ve araştırma çıkışlarını sıralıyor. Bu iki iş için "
            f"oldukça iyi {evidence('orta-iyi kanıt')}. Ama AI'nın bilemediği şeyler de var: sizin geçmiş öykünüz, "
            "kişisel risk profiliniz, kullandığınız ilaçların etkileşimi, son haftalardaki yaşam değişiklikleriniz. "
            "Bunlar AI'nın dışında duran ve hekimin işine giren alanlar.",

            "Ben uzun yıllar medya ekosisteminin içinden geçtim &mdash; hangi başlığın gerçek, hangisinin gürültü "
            "olduğunu ayırmayı meslek olarak öğrendim. AI'da da benzer bir disiplin işe yarıyor. Aldığım cevabı "
            "'henüz başlangıç noktası, klinik karar değil' kategorisine yerleştiriyorum. Bilim bu alanda hızlı "
            "ilerliyor; şunu biliyoruz, şu hâlâ belirsiz.",

            "AI tek başına bana cevap vermiyor; bana **daha doğru soru sormama yardım ediyor**. Aradaki fark sandığımdan "
            "büyük çıktı."
        ]
    ))

    # === Chapter 02 ===
    story.extend(chapter(
        2,
        "Cihazın anlattığı bedeni",
        "Wearable verisi başlangıç noktasıdır, cevap değil &mdash; bu da bir sınır.",
        [
            "Telefonumdaki uyku takip uygulaması son üç haftada bir kalıp göstermişti: hafif uyku evresinin uzaması, "
            "derin uyku evresinin kısalması. Önce göz ardı ettim; cihaz hata yapıyordur, dedim. Sonra fark ettim ki "
            "aynı dönemde gece sıcak basmaları da artmıştı. İki veri yan yana durdu birden.",

            f"Cihaz tek başına teşhis koymaz {evidence('orta kanıt')}. Wearable'ların uyku evresi sınıflandırması "
            "klinik altın standardın altında kalır &mdash; bunu biliyoruz. Ama gözlem aracı olarak işe yarar: bir "
            "kalıpyü fark etmenize yardım eder, hekimle konuşmanızda bir görsel referans olur.",

            "Ben hekimimle bir kontrolde bu veriyi göstermek zorunda değildim. Ama gösterdim. &ldquo;Şu üç hafta uyku "
            "evrelerimde bir değişim var, fark ettiniz mi?&rdquo; dedim. Birlikte değerlendirdik. Cihaz cevap "
            "vermedi, hekimim de tek başına cevap vermedi; ikisi birden yeni bir soru açtı &mdash; belki melatonin "
            "ritmim de değişiyordu. Soruyu sormak, tek başıma sorabileceğim soruyu büyüttü."
        ]
    ))

    # === Chapter 03 ===
    story.extend(chapter(
        3,
        "Hekim üçüncü ses &mdash; yorumlayan",
        "AI ve cihaz başlangıç noktaları; hekim **yorumlayan** üçüncü ses. Bu üçlü olmadan kendi bedenimi okuyamadığımı kabul ediyorum.",
        [
            "Sabah hekimime yazdığım not şuna benziyordu: &ldquo;Geçen gece sıcak basmasıyla uyandım. AI asistanına "
            "tetikleyicileri sordum, şu listeyi verdi. Aynı dönemde uyku takip uygulamam derin uyku kısalması "
            "gösteriyor. Ben bunlara ek olarak son üç haftada kahve miktarımın arttığını fark ettim. Senin gözünde "
            "bu üçlü ne anlam taşıyor?&rdquo;",

            "Hekimimden gelen cevap AI'dan farklıydı &mdash; daha kısa, daha kişiselleştirilmiş. Belirli iki "
            "değişkene odaklandı, bir testi önerdi, üç hafta sonra tekrar konuşmayı planladık. AI'nın geniş "
            "haritası vardı; cihazın somut verisi vardı; hekimin **yorumu** vardı. Üçü birbirinin yerine "
            "geçmedi &mdash; üçü birbirini tamamladı.",

            "Bu üçlü, &ldquo;tek başına karar vermek&rdquo; yerine &ldquo;birlikte düşünmek&rdquo; anlamına geliyor. "
            "Bunun benim için en zor öğrendiğim şey olduğunu kabul ediyorum &mdash; uzun yıllar tek başına karar "
            "vermeyi öğrenmiş bir kadın olarak."
        ]
    ))

    # === Chapter 04 ===
    story.extend(chapter(
        4,
        "Bilgi tek başına yetmez",
        "Ne kadar bilgi olursa olsun, doğru sorunun yerini tutmuyor &mdash; bunu yıllar sonra fark ettim.",
        [
            "Telefonumun arama geçmişine bakarsam haftada üç-dört farklı menopoz makalesi okuduğumu görürdüm. Bir "
            "AI'ya bir gece sıcak basması nedenini sorduğumda verdiği cevap saatlerce zihnimi açık tuttu. Cihazımın "
            "verisini günlerce yorumladım. Sonra bir noktada anladım: bilgi çoğaldıkça dahaa basit soru sormak "
            "gerekiyordu.",

            "AI hızlı, cihaz pratik, hekim yorumlayan. Üçü aynı odada konuştuğunda &mdash; ama her biri kendi "
            "sınırını bildiğinde &mdash; bedenimi daha az gürültüyle okuyabiliyorum. Hâlâ HRT konusunda kararsızım; "
            "üç kaynak da beni aynı yere getirmiyor, ama dinlemeyi öğretiyor.",

            "Uzun yıllar medya ve dijital sektörün içinden geçtim. O sektörde 'tüm bilgi senin elinde, sen seç' "
            "kalıbı vardı &mdash; ama sağlığa gelince bunu uygulamanın tek başına yetmediğini öğrendim. Yorum, "
            "yargı, tecrübe &mdash; üçü hâlâ insandan geliyor. AI'yı bu yorumun yerine değil, yanına koymayı "
            "öğreniyorum."
        ]
    ))

    # === Chapter 05: FAQ ===
    faq_head = [
        Paragraph("05", chapter_num_style),
        Paragraph("Pratik: sıkça duyduğum sorular", h2_style),
        HRFlowable(width=2.5*cm, thickness=1.5, color=gold,
                   hAlign='LEFT', spaceBefore=4, spaceAfter=12),
        Paragraph(
            "Aşağıdaki sorular bana farklı arkadaşlarımdan ve okurlardan geldi; her birinin cevabı kendi yolumdaki notum.",
            section_lede_style
        ),
    ]
    story.append(KeepTogether(faq_head))

    faq_items = [
        (
            "AI sağlık asistanlarına ne kadar güvenmeliyim?",
            "Başlangıç noktası olarak değerli bir araç; yaygın tetikleyicileri, araştırma özetlerini, geniş bir bilgi haritasını sunuyor. "
            "Ama klinik karar aracı değil. Senin geçmiş öykünü, kişisel risk profilini, etkileşimlerini bilmiyor. "
            "Bana göre AI bir başlangıç sorusu için harika &mdash; cevap olarak yetersiz, soru olarak değerli."
        ),
        (
            "Wearable verisini hekimime götürmeye değer mi?",
            "Evet, ama nasıl götürdüğüne bağlı. Cihaz verisi tek başına teşhis aracı değil; ama bir kalıp göstermişse, "
            "hekiminle ortak bir görsel referans oluyor. Ben &ldquo;şuna baktım, şu üç hafta şu kalıp var&rdquo; "
            "şeklinde gösteriyorum &mdash; cihaz sözcüğümü taşıyor sanki."
        ),
        (
            "AI'ya bir soru sorduğumda hekime nasıl bir not tutmalıyım?",
            "Üç parça yararlı buluyorum: AI'nın söylediğini özet olarak yaz, kendi gözlemini ayrıca yaz, ve sorduğun "
            "soruyu yaz. Bu üçlü hekime götürdüğünde &lsquo;ne sordun, ne aldın, sen ne hissediyorsun?&rsquo; "
            "üçgenini tamamlıyor. Hekim seninle birlikte yorumluyor &mdash; AI yerine değil, AI'nın yanına geçerek."
        ),
        (
            "AI yanlış cevap verirse?",
            "Yanlış cevap her aracın özelliği &mdash; medya da, cihaz da, hatta zaman zaman hekim tavsiyesi de "
            "sınırlı kalabilir. Önemli olan tek bir kaynağa güvenmemek. Üç kaynağı yan yana koyduğunda yanlış "
            "olanın ortaya çıkma ihtimali artıyor. Ama tek başına AI verisiyle ilaç başlamak ya da kesmek? "
            "Bunu kimsenin yapmaması gerek &mdash; sınır budur."
        ),
    ]

    for q, a in faq_items:
        story.append(KeepTogether([
            Paragraph(q, faq_q_style),
            Paragraph(a, faq_a_style),
        ]))

    # Closing italic lede
    story.append(Paragraph(
        "Geçen sabah aynı kahveyle telefonuma baktım, AI sohbet geçmişini açtım. Üç sorum vardı son hafta &mdash; "
        "üçü de hekimimle konuştuğum üç soruya bağlanıyordu. Bir sandalye, bir kahve, üç soru. Senin yolun başka "
        "olacak &mdash; belki AI yerine bir başka kaynak, belki cihaz yerine bir günce. Bilgi çoğaldıkça daha "
        "sade soru sormayı öğreniyorum.",
        closing_lede_style
    ))

    # Bilimsel Editör Notu
    story.append(Spacer(1, 0.6*cm))
    story.append(bilimsel_editor_notu(
        "Yapay zekâ destekli sağlık asistanları ve giyilebilir teknoloji araçları, hastaların sağlık bilgisi "
        "okuryazarlığını destekleyen yardımcı kaynaklar olarak güncel literatürde değerlendirilmektedir. Ancak bu "
        "araçlar klinik karar verme süreçlerinin yerine geçmez; tanı ve tedavi planlaması bireysel hekim "
        "değerlendirmesi gerektirir. Wearable verilerinin uyku evresi ya da kalp ritmi sınıflandırma doğruluğu "
        "klinik altın standartların altında kalabilir. Hormonal geçiş döneminde belirti yorumlanırken bireysel "
        "öykü, kişisel risk profili ve mevcut ilaç kullanımı belirleyici olur. Bu yazıdaki gözlemler genel "
        "bilgilendirme amaçlıdır; sağlığınıza dair kararlarda kendi hekiminizle birlikte değerlendirme yapmanız önerilir."
    ))

    story.append(HRFlowable(
        width=16*cm, thickness=0.4, color=very_light_gray,
        spaceBefore=12, spaceAfter=8
    ))
    story.append(Paragraph(
        "<i>Bu yazı bilgilendirme amaçlıdır; bireysel tıbbi değerlendirme, tanı veya tedavinin yerini almaz. "
        "Sağlığınıza dair kararlarda kendi hekiminize danışmanız önerilir.</i>",
        inline_disclaimer_style
    ))

    output_path = r"C:\Users\KC3\Downloads\rima-test-makale.pdf"
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=2.5*cm, rightMargin=2.5*cm,
        topMargin=2*cm, bottomMargin=2.5*cm,
        title="AI'ya Sorduğum Bir Soru, Hekime Yazdığım Bir Not — Sağlık Bilgisinin Üçlü Dengesi",
        author="Rima Erdemir",
        subject="Estranova test taslağı — yazar stilini doğrulamak için",
        creator="Estranova editöryal pipeline",
    )

    def make_canvas(*args, **kwargs):
        return FooterCanvas(*args, footer_text="Estranova editöryal test taslağı — yazar stil doğrulaması için.", **kwargs)

    doc.build(story, canvasmaker=make_canvas)
    return output_path


# ============================================================
# PDF 2 — YAZAR DOĞRULAMA FORMU
# ============================================================

def build_dogrulama_formu():
    story = []

    # Üst başlık
    story.append(Paragraph(
        "Sevgili Rima &nbsp;·&nbsp; Estranova editöryal stil doğrulama formu &nbsp;·&nbsp; 29 Nisan 2026",
        byline_style
    ))

    story.append(Paragraph(
        "Yazar Stil Doğrulama Formu",
        form_title_style
    ))
    story.append(HRFlowable(
        width=3.2*cm, thickness=2, color=gold,
        hAlign='LEFT', spaceBefore=8, spaceAfter=6
    ))

    story.append(Paragraph(
        "Bu form Estranova için kuracağımız <i>Rima Erdemir</i> editöryal sesinin sana ait hissedip "
        "hissetmediğini doğrulamak için. 8 bölüm var; her bölüm ayrı bir katmanı sorguluyor &mdash; "
        "karakter izi, manifesto kalıpları, yasak filtreler, konu eksenleri, hassas alanlar, test makalesi "
        "değerlendirmesi ve açık uçlu eklemen. Her sayfada işaretleyebilirsin; dijital olarak da, basıp "
        "kalemle de aynı işi görür.",
        form_intro_style
    ))
    story.append(Paragraph(
        "Cevaplarına göre profil <i>writers/rima-erdemir.md</i> v2.0 üzerinde rafine edilecek. Birlikte aldığın "
        "<i>rima-test-makale.pdf</i>'ye 6. bölümde değiniyoruz; o makaleyi okuduktan sonra bu forma dönmek en pratik akış olacak.",
        form_intro_style
    ))

    # === Bölüm 1: Karakter izi onayı ===
    story.append(Paragraph("1. Karakter izi cümleleri", form_section_style))
    story.append(HRFlowable(width=2.5*cm, thickness=1.5, color=gold,
                            hAlign='LEFT', spaceBefore=2, spaceAfter=10))
    story.append(Paragraph(
        "Aşağıdaki cümleler senin sesini ne kadar yakalıyor? Her birini 1-5 arası işaretle "
        "(1: hiç bana ait değil, 5: tam bana ait).",
        form_section_lede_style
    ))

    karakter_cumleleri = [
        "Bilim hızlı ilerliyor; şunu biliyoruz, şu hâlâ belirsiz.",
        "Henüz karar vermedim — bu da bir duruş.",
        "Bir wearable verisinde garip bir kalıp gördüğümde, kendimi alıp doktora götürdüm — teknoloji bana kendi bedenimi yeniden hatırlattı.",
        "Geçen sabah kahveyle bir araştırma özetini okurken bir cümlede durdum — kendi bedenimi hatırladım.",
        "ChatGPT'ye sorduğumu sabah hekimime yazdım — kendi başıma karar vermek artık tek başıma yapacağım bir iş değil.",
        "Akdeniz mutfağında büyürken yenilenler hakkında okuduğum bir araştırmayı kendi mutfağımda test ettiğim hafta...",
        "Bu dönemden geçen biri olarak söyleyebilirim ki: araştırmayı okurken kendi bedenini hatırlamayı öğrenmek zaman alıyor.",
        "Yeni nesil bir takviyeyi okuduğumda kanıt seviyesi bana 'henüz değil' dedi — bu disiplini medyadan öğrendim, sağlığa taşıdım.",
    ]
    for c in karakter_cumleleri:
        story.append(Paragraph(f'&ldquo;{c}&rdquo;', form_question_quote_style))
        story.append(likert_satir())

    # === Bölüm 2: Manifesto kalıpları ===
    story.append(Paragraph("2. Manifesto kalıpları onayı", form_section_style))
    story.append(HRFlowable(width=2.5*cm, thickness=1.5, color=gold,
                            hAlign='LEFT', spaceBefore=2, spaceAfter=10))
    story.append(Paragraph(
        "Profile §4e'de senin için 6 manifesto kalıbı tanımladım. Her biri Estranova'da bir makalede en fazla 1 kez "
        "kullanılır. Aşağıdaki kalıplar imzan olarak doğru mu, yumuşatılmalı mı, kaldırılmalı mı?",
        form_section_lede_style
    ))

    manifesto_kaliplari = [
        ("Kalıp 1 — Bilim hızlı ilerliyor; biliyoruz/belirsiz",
         "Yeni araştırma / rehber değişikliği / kanıt düzeyi tartışması yazılarında."),
        ("Kalıp 2 — Henüz karar vermedim (HRT-muğlak imza)",
         "HRT karar süreci / 'henüz değil' duruşu / araştırma-takip-eden ses. Birinci elden, yılda 2-3 makalede."),
        ("Kalıp 3 — Akdeniz mutfağında büyürken",
         "Gastronomi + sağlık / Akdeniz beslenme + menopoz / kültürler arası bakış."),
        ("Kalıp 4 — Bir wearable verisi → hekim",
         "Wearable / digital health / AI asistan / dijital takip yazılarında."),
        ("Kalıp 5 — Bir cümlede durdum (sabah okuma)",
         "Yenilik takibi / araştırma okuma / kendi bedeniyle araştırmayı birleştirme."),
        ("Kalıp 6 — ChatGPT'ye sorduğumu hekimime yazdım",
         "AI asistan / sağlık bilgisi okuryazarlığı / 'kim sorulur' yazılarında. Spesifik AI ürün adı YASAK — 'bir AI asistanı' yumuşak çerçeve."),
    ]
    for baslik, aciklama in manifesto_kaliplari:
        story.append(Paragraph(f"<b>{baslik}</b>", form_question_style))
        story.append(Paragraph(aciklama, form_options_style))
        story.append(evet_hayir_satir())

    # === Bölüm 3: Yasak filtreleri ===
    story.append(Paragraph("3. Yasak filtreleri onayı", form_section_style))
    story.append(HRFlowable(width=2.5*cm, thickness=1.5, color=gold,
                            hAlign='LEFT', spaceBefore=2, spaceAfter=10))
    story.append(Paragraph(
        "Profile §13'te &lsquo;asla yazıda geçmemesi gereken&rsquo; 12 filtre var. Aşağıdaki yasaklar makul mü, "
        "esnetilmeli mi?",
        form_section_lede_style
    ))

    yasaklar = [
        "Doktor / klinisyen perspektifi (\"hastalarımda gözlemliyorum\", \"tıbben söyleyebilirim\", \"klinik tecrübemde\") — kullanmıyorum, profile yasak.",
        "Marka / şirket / cihaz / uygulama spesifik adı (Apple Watch, Fitbit, Oura, Whoop, ChatGPT, supplement markası, ilaç markası) — yazıya girmez.",
        "Demirören / Milliyet / MedyaNet / IAB / MMA / Sparkle Medya / ajans adları — kariyer biyografi süsü olarak yazıda yer almaz.",
        "Medya/reklam jargonu (DSP, programatik, CPM, GRP, brief, deck) — sağlık dilinde anılmaz.",
        "Spesifik HRT / ilaç / doz / marka / supplement ürün adı — kişisel deneyim Kanal A açık ama bu kalıplar yasak.",
        "Lider talimat tonu (\"şunu yapmalısınız\", \"şunu yapın\") — yumuşatılır; davet, paylaşım.",
        "Trend öncüsü / teknoloji kraliçesi influencer konumlandırması — yasak.",
        "Lüks gastronomi / destinasyon / şef adı — Akdeniz mutfağı anonim çerçeve, spesifik isim yasak.",
        "Uluslararası kuruluş/yayın adı (NAMS, Lancet, NEJM, ESHRE, IMS, WHO, JAMA, Mayo, ACOG) — gövdede yasak.",
        "Erken-heyecanlanmama imzası — \"yeni bir mucize keşif\" tonu YASAK; \"kanıt seviyesi henüz yeterli değil\" tonu sürer.",
    ]
    for y in yasaklar:
        story.append(Paragraph(y, form_question_style))
        story.append(yes_no_satir())

    # === Bölüm 4: Konu eksenleri ağırlık ===
    story.append(Paragraph("4. Konu eksenleri ağırlığı", form_section_style))
    story.append(HRFlowable(width=2.5*cm, thickness=1.5, color=gold,
                            hAlign='LEFT', spaceBefore=2, spaceAfter=10))
    story.append(Paragraph(
        "Profile §0.5 Adım 1'de senin için 6 imza eksen tanımladım. Her birinin senin sesini ne kadar tanımladığını "
        "1-5 arası işaretle.",
        form_section_lede_style
    ))

    eksenler = [
        "Yenilik takibi / araştırma okuma / rehber değişimi (çekirdek)",
        "Teknoloji + sağlık kesişimi — wearable, AI, digital health (çekirdek)",
        "Akdeniz / Lübnan kültürel zenginlik (çekirdek)",
        "Post-menopoz akran sesi (Kanal A açık — birinci elden belirti/uyku/wearable deneyimi)",
        "Medya okuryazarlığı + sağlık kesişimi (ikincil)",
        "HRT-muğlak / araştırma-takip-eden (ikincil)",
    ]
    for e in eksenler:
        story.append(Paragraph(f"<b>{e}</b>", form_question_style))
        story.append(likert_satir())

    # === Bölüm 5: Hassas alanlar ===
    story.append(Paragraph("5. Hassas alanlar onayı", form_section_style))
    story.append(HRFlowable(width=2.5*cm, thickness=1.5, color=gold,
                            hAlign='LEFT', spaceBefore=2, spaceAfter=10))
    story.append(Paragraph(
        "Aşağıdaki bilgiler profile'da kayıtlı; gerçek hayatınla ne kadar uyumlu?",
        form_section_lede_style
    ))

    hassas_alanlar = [
        "Doğum: 1970, İstanbul (2026'da 55-56 yaş bandı).",
        "Lübnan kökenli — Akdeniz mutfağı, kültürler arası gözlem.",
        "İÜ İşletme Fakültesi (1991), kariyer Milliyet → MedyaNet → Demirören → Sparkle Medya.",
        "Çok yönlü anne; gastronomi, seyahat, teknoloji takibi, kendine özen.",
        "Post-menopoz dönemde — kişisel belirti / uyku / wearable deneyimi yazıya birinci elden girebilir.",
        "HRT konusunda kararsızlık; \"henüz değil\" duruşu birinci elden anlatılabilir.",
        "Estranova'da konuk yazar + editöryal süreç danışmanı (kaynak doğrulama + yayın akışı katkısı).",
    ]
    for h in hassas_alanlar:
        story.append(Paragraph(h, form_question_style))
        story.append(yes_no_satir())

    # === Bölüm 6: Test makalesi değerlendirmesi ===
    story.append(Paragraph("6. Test makalesi değerlendirmesi", form_section_style))
    story.append(HRFlowable(width=2.5*cm, thickness=1.5, color=gold,
                            hAlign='LEFT', spaceBefore=2, spaceAfter=10))
    story.append(Paragraph(
        "Birlikte aldığın <i>rima-test-makale.pdf</i> &mdash; başlığı &ldquo;AI'ya Sorduğum Bir Soru, Hekime Yazdığım "
        "Bir Not — Sağlık Bilgisinin Üçlü Dengesi&rdquo; &mdash; senin sesinde mi yazılmış? Aşağıdaki 5 katmanı "
        "değerlendir.",
        form_section_lede_style
    ))

    makale_degerlendirme = [
        "<b>Açılış:</b> &ldquo;Bilgi artık tek bir ağızdan gelmiyor; ama çok ağızdan gelen bilgiyi nasıl dengeleyeceğimi öğrenmek bana yıllar aldı.&rdquo; &mdash; lede senin tonun mu?",
        "<b>Yapı:</b> 4 ana bölüm + FAQ + 3-parçalı kapanış &mdash; Estranova'da işine yarıyor mu?",
        "<b>Ses imzası:</b> Belirsizlik dili (\"şu hâlâ belirsiz\", \"henüz net değil\"), bilim okuryazarlığı, kuru humor (\"hâlâ bir gazeteci gibi haber takip ediyorum, sadece konum değişti\") &mdash; bu üçlü doğru mu?",
        "<b>Yasaklar:</b> Marka/şirket/cihaz adı yok, hekim PERSONA yok, lider tonu yok &mdash; her şey yerinde mi?",
        "<b>Kapanış:</b> 3-parçalı (sandalye-kahve-üç soru / senin yolun başka olacak / aforistik son) &mdash; bana ait hissettiriyor mu?",
    ]
    for m in makale_degerlendirme:
        story.append(Paragraph(m, form_question_style))
        story.append(evet_hayir_satir())

    # === Bölüm 7: Yaşam tarzı + Kanal A ===
    story.append(Paragraph("7. Kanal A &mdash; kişisel deneyim açıklığı", form_section_style))
    story.append(HRFlowable(width=2.5*cm, thickness=1.5, color=gold,
                            hAlign='LEFT', spaceBefore=2, spaceAfter=10))
    story.append(Paragraph(
        "Profile §5b'de &ldquo;Kanal A açık&rdquo; deniyor: post-menopoz dönemde olduğun için kişisel belirti / uyku / "
        "wearable deneyimleri akran tonunda paylaşılabilir. Aşağıdaki spesifik kategorilerde rahat mısın?",
        form_section_lede_style
    ))

    kanal_a = [
        "Sıcak basmaları / gece terlemesi belirti deneyimi (birinci elden anlatım).",
        "Uyku düzeni değişimi (wearable verisiyle birlikte).",
        "Ruh hali / enerji dalgalanmaları.",
        "AI asistanlarına sağlık sorusu sorma deneyimi.",
        "Bir bilim haberini kendi bedeninde test etme.",
        "HRT konusunda tartışmaya açık duruş — \"henüz değil\".",
        "Akdeniz / Lübnan mutfak deneyimi (anekdot bağlamında).",
        "Aile bağı (\"çok yönlü anne\" çerçevesinde sıcak referans).",
    ]
    for k in kanal_a:
        story.append(Paragraph(k, form_question_style))
        story.append(evet_hayir_satir())

    # === Bölüm 8: Açık uçlu ===
    story.append(Paragraph("8. Eklemek / çıkarmak istediklerin", form_section_style))
    story.append(HRFlowable(width=2.5*cm, thickness=1.5, color=gold,
                            hAlign='LEFT', spaceBefore=2, spaceAfter=10))
    story.append(Paragraph(
        "Profile'da eksik kalan, yanlış vurgulanan, ya da tamamen kaldırılması gereken bir şey var mı? "
        "Açık uçlu olarak yazabilirsin &mdash; cümle, anekdot, kalıp, yasak, tema fark etmez.",
        form_section_lede_style
    ))

    story.append(Paragraph("Eklemek istediğin imza cümle / anekdot / kalıp:", form_open_label_style))
    story.extend(acik_uclu_alan(satir_sayisi=4))

    story.append(Paragraph("Çıkarmak / yumuşatmak istediğin tonu, eksen, yasak:", form_open_label_style))
    story.extend(acik_uclu_alan(satir_sayisi=4))

    story.append(Paragraph("Estranova'da Rima Erdemir sesinin oturmuş olması için en kritik dokunuş ne?", form_open_label_style))
    story.extend(acik_uclu_alan(satir_sayisi=4))

    story.append(Paragraph("Diğer notların (özgür alan):", form_open_label_style))
    story.extend(acik_uclu_alan(satir_sayisi=6))

    # Footer note
    story.append(Spacer(1, 1*cm))
    story.append(HRFlowable(
        width=16*cm, thickness=0.4, color=very_light_gray,
        spaceBefore=8, spaceAfter=8
    ))
    story.append(Paragraph(
        "<i>Form tamamlandığında editöryal süreçte profile §0–§13 yenilenir; senin imzan v2.1'e taşınır. "
        "Cevaplar Estranova'nın yayın kalitesi için içeriden veridir, dışarıyla paylaşılmaz.</i>",
        inline_disclaimer_style
    ))

    output_path = r"C:\Users\KC3\Downloads\rima-yazar-dogrulama-formu.pdf"
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=2.5*cm, rightMargin=2.5*cm,
        topMargin=2*cm, bottomMargin=2.5*cm,
        title="Yazar Stil Doğrulama Formu — Rima Erdemir",
        author="Estranova editöryal pipeline",
        subject="Rima Erdemir profili v2.0 → v2.1 stil doğrulama",
        creator="Estranova editöryal pipeline",
    )

    def make_canvas(*args, **kwargs):
        return FooterCanvas(*args, footer_text="Estranova editöryal stil doğrulama formu — Rima Erdemir", **kwargs)

    doc.build(story, canvasmaker=make_canvas)
    return output_path


# ============================================================
# PDF 3 — INTERAKTİF YAZAR DOĞRULAMA FORMU (tıklanabilir)
# ============================================================

def build_interaktif_dogrulama_formu():
    """Tıklanabilir radio button + multiline text field içeren interaktif PDF formu.
    Yazar PDF reader'da (Adobe Reader, Edge, Chrome) doğrudan üzerinde işaretler ve yazar."""
    story = []

    story.append(Paragraph(
        "Sevgili Rima &nbsp;·&nbsp; Estranova editöryal stil doğrulama formu (interaktif) &nbsp;·&nbsp; 29 Nisan 2026",
        byline_style
    ))

    story.append(Paragraph(
        "Yazar Stil Doğrulama Formu — Tıklanabilir Versiyon",
        form_title_style
    ))
    story.append(HRFlowable(
        width=3.2*cm, thickness=2, color=gold,
        hAlign='LEFT', spaceBefore=8, spaceAfter=6
    ))

    story.append(Paragraph(
        "Bu form Estranova için kuracağımız <i>Rima Erdemir</i> editöryal sesinin sana ait hissedip "
        "hissetmediğini doğrulamak için. 8 bölüm var; her bölüm ayrı bir katmanı sorguluyor &mdash; "
        "karakter izi, manifesto kalıpları, yasak filtreler, konu eksenleri, hassas alanlar, test makalesi "
        "değerlendirmesi, Kanal A açıklığı ve açık uçlu eklemen.",
        form_intro_style
    ))
    story.append(Paragraph(
        "<b>Bu PDF tıklanabilir.</b> Adobe Reader, Edge, Chrome ya da herhangi bir modern PDF okuyucuda "
        "yuvarlak işaretleri tıklayarak seçim yapabilir, açık uçlu alanlara doğrudan yazabilir, sonra dosyayı "
        "kaydederek geri gönderebilirsin. Birlikte aldığın <i>rima-test-makale.pdf</i>'yi okuduktan sonra bu "
        "forma dönmek en pratik akış olacak.",
        form_intro_style
    ))

    # === Bölüm 1: Karakter izi onayı ===
    story.append(Paragraph("1. Karakter izi cümleleri", form_section_style))
    story.append(HRFlowable(width=2.5*cm, thickness=1.5, color=gold,
                            hAlign='LEFT', spaceBefore=2, spaceAfter=10))
    story.append(Paragraph(
        "Aşağıdaki cümleler senin sesini ne kadar yakalıyor? Her birini 1-5 arası işaretle "
        "(1: hiç bana ait değil, 5: tam bana ait). Tıkla, seç.",
        form_section_lede_style
    ))

    karakter_cumleleri = [
        "Bilim hızlı ilerliyor; şunu biliyoruz, şu hâlâ belirsiz.",
        "Henüz karar vermedim — bu da bir duruş.",
        "Bir wearable verisinde garip bir kalıp gördüğümde, kendimi alıp doktora götürdüm — teknoloji bana kendi bedenimi yeniden hatırlattı.",
        "Geçen sabah kahveyle bir araştırma özetini okurken bir cümlede durdum — kendi bedenimi hatırladım.",
        "ChatGPT'ye sorduğumu sabah hekimime yazdım — kendi başıma karar vermek artık tek başıma yapacağım bir iş değil.",
        "Akdeniz mutfağında büyürken yenilenler hakkında okuduğum bir araştırmayı kendi mutfağımda test ettiğim hafta...",
        "Bu dönemden geçen biri olarak söyleyebilirim ki: araştırmayı okurken kendi bedenini hatırlamayı öğrenmek zaman alıyor.",
        "Yeni nesil bir takviyeyi okuduğumda kanıt seviyesi bana 'henüz değil' dedi — bu disiplini medyadan öğrendim, sağlığa taşıdım.",
    ]
    for i, c in enumerate(karakter_cumleleri, 1):
        story.append(Paragraph(f'&ldquo;{c}&rdquo;', form_question_quote_style))
        story.append(interaktif_likert(f"karakter_{i}"))

    # === Bölüm 2: Manifesto kalıpları ===
    story.append(Paragraph("2. Manifesto kalıpları onayı", form_section_style))
    story.append(HRFlowable(width=2.5*cm, thickness=1.5, color=gold,
                            hAlign='LEFT', spaceBefore=2, spaceAfter=10))
    story.append(Paragraph(
        "Profile §4e'de senin için 6 manifesto kalıbı tanımladım. Her biri Estranova'da bir makalede en fazla 1 kez "
        "kullanılır. Aşağıdaki kalıplar imzan olarak doğru mu, yumuşatılmalı mı, kaldırılmalı mı?",
        form_section_lede_style
    ))

    manifesto_kaliplari = [
        ("Kalıp 1 — Bilim hızlı ilerliyor; biliyoruz/belirsiz",
         "Yeni araştırma / rehber değişikliği / kanıt düzeyi tartışması yazılarında."),
        ("Kalıp 2 — Henüz karar vermedim (HRT-muğlak imza)",
         "HRT karar süreci / 'henüz değil' duruşu / araştırma-takip-eden ses. Birinci elden, yılda 2-3 makalede."),
        ("Kalıp 3 — Akdeniz mutfağında büyürken",
         "Gastronomi + sağlık / Akdeniz beslenme + menopoz / kültürler arası bakış."),
        ("Kalıp 4 — Bir wearable verisi → hekim",
         "Wearable / digital health / AI asistan / dijital takip yazılarında."),
        ("Kalıp 5 — Bir cümlede durdum (sabah okuma)",
         "Yenilik takibi / araştırma okuma / kendi bedeniyle araştırmayı birleştirme."),
        ("Kalıp 6 — ChatGPT'ye sorduğumu hekimime yazdım",
         "AI asistan / sağlık bilgisi okuryazarlığı / 'kim sorulur' yazılarında. Spesifik AI ürün adı YASAK — 'bir AI asistanı' yumuşak çerçeve."),
    ]
    for i, (baslik, aciklama) in enumerate(manifesto_kaliplari, 1):
        story.append(Paragraph(f"<b>{baslik}</b>", form_question_style))
        story.append(Paragraph(aciklama, form_options_style))
        story.append(interaktif_uclu(f"manifesto_{i}"))

    # === Bölüm 3: Yasak filtreleri ===
    story.append(Paragraph("3. Yasak filtreleri onayı", form_section_style))
    story.append(HRFlowable(width=2.5*cm, thickness=1.5, color=gold,
                            hAlign='LEFT', spaceBefore=2, spaceAfter=10))
    story.append(Paragraph(
        "Profile §13'te &lsquo;asla yazıda geçmemesi gereken&rsquo; 12 filtre var. Aşağıdaki yasaklar makul mü, "
        "esnetilmeli mi?",
        form_section_lede_style
    ))

    yasaklar = [
        "Doktor / klinisyen perspektifi (\"hastalarımda gözlemliyorum\", \"tıbben söyleyebilirim\", \"klinik tecrübemde\") — kullanmıyorum, profile yasak.",
        "Marka / şirket / cihaz / uygulama spesifik adı (Apple Watch, Fitbit, Oura, Whoop, ChatGPT, supplement markası, ilaç markası) — yazıya girmez.",
        "Demirören / Milliyet / MedyaNet / IAB / MMA / Sparkle Medya / ajans adları — kariyer biyografi süsü olarak yazıda yer almaz.",
        "Medya/reklam jargonu (DSP, programatik, CPM, GRP, brief, deck) — sağlık dilinde anılmaz.",
        "Spesifik HRT / ilaç / doz / marka / supplement ürün adı — kişisel deneyim Kanal A açık ama bu kalıplar yasak.",
        "Lider talimat tonu (\"şunu yapmalısınız\", \"şunu yapın\") — yumuşatılır; davet, paylaşım.",
        "Trend öncüsü / teknoloji kraliçesi influencer konumlandırması — yasak.",
        "Lüks gastronomi / destinasyon / şef adı — Akdeniz mutfağı anonim çerçeve, spesifik isim yasak.",
        "Uluslararası kuruluş/yayın adı (NAMS, Lancet, NEJM, ESHRE, IMS, WHO, JAMA, Mayo, ACOG) — gövdede yasak.",
        "Erken-heyecanlanmama imzası — \"yeni bir mucize keşif\" tonu YASAK; \"kanıt seviyesi henüz yeterli değil\" tonu sürer.",
    ]
    for i, y in enumerate(yasaklar, 1):
        story.append(Paragraph(y, form_question_style))
        story.append(interaktif_ikili(f"yasak_{i}"))

    # === Bölüm 4: Konu eksenleri ağırlık ===
    story.append(Paragraph("4. Konu eksenleri ağırlığı", form_section_style))
    story.append(HRFlowable(width=2.5*cm, thickness=1.5, color=gold,
                            hAlign='LEFT', spaceBefore=2, spaceAfter=10))
    story.append(Paragraph(
        "Profile §0.5 Adım 1'de senin için 6 imza eksen tanımladım. Her birinin senin sesini ne kadar tanımladığını "
        "1-5 arası işaretle.",
        form_section_lede_style
    ))

    eksenler = [
        "Yenilik takibi / araştırma okuma / rehber değişimi (çekirdek)",
        "Teknoloji + sağlık kesişimi — wearable, AI, digital health (çekirdek)",
        "Akdeniz / Lübnan kültürel zenginlik (çekirdek)",
        "Post-menopoz akran sesi (Kanal A açık — birinci elden belirti/uyku/wearable deneyimi)",
        "Medya okuryazarlığı + sağlık kesişimi (ikincil)",
        "HRT-muğlak / araştırma-takip-eden (ikincil)",
    ]
    for i, e in enumerate(eksenler, 1):
        story.append(Paragraph(f"<b>{e}</b>", form_question_style))
        story.append(interaktif_likert(f"eksen_{i}"))

    # === Bölüm 5: Hassas alanlar ===
    story.append(Paragraph("5. Hassas alanlar onayı", form_section_style))
    story.append(HRFlowable(width=2.5*cm, thickness=1.5, color=gold,
                            hAlign='LEFT', spaceBefore=2, spaceAfter=10))
    story.append(Paragraph(
        "Aşağıdaki bilgiler profile'da kayıtlı; gerçek hayatınla ne kadar uyumlu?",
        form_section_lede_style
    ))

    hassas_alanlar = [
        "Doğum: 1970, İstanbul (2026'da 55-56 yaş bandı).",
        "Lübnan kökenli — Akdeniz mutfağı, kültürler arası gözlem.",
        "İÜ İşletme Fakültesi (1991), kariyer Milliyet → MedyaNet → Demirören → Sparkle Medya.",
        "Çok yönlü anne; gastronomi, seyahat, teknoloji takibi, kendine özen.",
        "Post-menopoz dönemde — kişisel belirti / uyku / wearable deneyimi yazıya birinci elden girebilir.",
        "HRT konusunda kararsızlık; \"henüz değil\" duruşu birinci elden anlatılabilir.",
        "Estranova'da konuk yazar + editöryal süreç danışmanı (kaynak doğrulama + yayın akışı katkısı).",
    ]
    for i, h in enumerate(hassas_alanlar, 1):
        story.append(Paragraph(h, form_question_style))
        story.append(interaktif_ikili(f"hassas_{i}"))

    # === Bölüm 6: Test makalesi değerlendirmesi ===
    story.append(Paragraph("6. Test makalesi değerlendirmesi", form_section_style))
    story.append(HRFlowable(width=2.5*cm, thickness=1.5, color=gold,
                            hAlign='LEFT', spaceBefore=2, spaceAfter=10))
    story.append(Paragraph(
        "Birlikte aldığın <i>rima-test-makale.pdf</i> &mdash; başlığı &ldquo;AI'ya Sorduğum Bir Soru, Hekime Yazdığım "
        "Bir Not — Sağlık Bilgisinin Üçlü Dengesi&rdquo; &mdash; senin sesinde mi yazılmış? Aşağıdaki 5 katmanı "
        "değerlendir.",
        form_section_lede_style
    ))

    makale_degerlendirme = [
        "<b>Açılış:</b> &ldquo;Bilgi artık tek bir ağızdan gelmiyor; ama çok ağızdan gelen bilgiyi nasıl dengeleyeceğimi öğrenmek bana yıllar aldı.&rdquo; &mdash; lede senin tonun mu?",
        "<b>Yapı:</b> 4 ana bölüm + FAQ + 3-parçalı kapanış &mdash; Estranova'da işine yarıyor mu?",
        "<b>Ses imzası:</b> Belirsizlik dili (\"şu hâlâ belirsiz\", \"henüz net değil\"), bilim okuryazarlığı, kuru humor (\"hâlâ bir gazeteci gibi haber takip ediyorum, sadece konum değişti\") &mdash; bu üçlü doğru mu?",
        "<b>Yasaklar:</b> Marka/şirket/cihaz adı yok, hekim PERSONA yok, lider tonu yok &mdash; her şey yerinde mi?",
        "<b>Kapanış:</b> 3-parçalı (sandalye-kahve-üç soru / senin yolun başka olacak / aforistik son) &mdash; bana ait hissettiriyor mu?",
    ]
    for i, m in enumerate(makale_degerlendirme, 1):
        story.append(Paragraph(m, form_question_style))
        story.append(interaktif_uclu(f"makale_{i}"))

    # === Bölüm 7: Yaşam tarzı + Kanal A ===
    story.append(Paragraph("7. Kanal A &mdash; kişisel deneyim açıklığı", form_section_style))
    story.append(HRFlowable(width=2.5*cm, thickness=1.5, color=gold,
                            hAlign='LEFT', spaceBefore=2, spaceAfter=10))
    story.append(Paragraph(
        "Profile §5b'de &ldquo;Kanal A açık&rdquo; deniyor: post-menopoz dönemde olduğun için kişisel belirti / uyku / "
        "wearable deneyimleri akran tonunda paylaşılabilir. Aşağıdaki spesifik kategorilerde rahat mısın?",
        form_section_lede_style
    ))

    kanal_a = [
        "Sıcak basmaları / gece terlemesi belirti deneyimi (birinci elden anlatım).",
        "Uyku düzeni değişimi (wearable verisiyle birlikte).",
        "Ruh hali / enerji dalgalanmaları.",
        "AI asistanlarına sağlık sorusu sorma deneyimi.",
        "Bir bilim haberini kendi bedeninde test etme.",
        "HRT konusunda tartışmaya açık duruş — \"henüz değil\".",
        "Akdeniz / Lübnan mutfak deneyimi (anekdot bağlamında).",
        "Aile bağı (\"çok yönlü anne\" çerçevesinde sıcak referans).",
    ]
    for i, k in enumerate(kanal_a, 1):
        story.append(Paragraph(k, form_question_style))
        story.append(interaktif_uclu(f"kanal_{i}"))

    # === Bölüm 8: Açık uçlu (multiline text fields) ===
    story.append(Paragraph("8. Eklemek / çıkarmak istediklerin", form_section_style))
    story.append(HRFlowable(width=2.5*cm, thickness=1.5, color=gold,
                            hAlign='LEFT', spaceBefore=2, spaceAfter=10))
    story.append(Paragraph(
        "Profile'da eksik kalan, yanlış vurgulanan, ya da tamamen kaldırılması gereken bir şey var mı? "
        "Aşağıdaki kutulara <b>doğrudan yazabilirsin</b> — cümle, anekdot, kalıp, yasak, tema fark etmez.",
        form_section_lede_style
    ))

    story.append(Paragraph("Eklemek istediğin imza cümle / anekdot / kalıp:", form_open_label_style))
    story.append(interaktif_acik_uclu("acik_ekleme", satir_sayisi=4, label="Eklemek istediğiniz imza cümle / anekdot / kalıp"))

    story.append(Paragraph("Çıkarmak / yumuşatmak istediğin tonu, eksen, yasak:", form_open_label_style))
    story.append(interaktif_acik_uclu("acik_cikarma", satir_sayisi=4, label="Çıkarmak / yumuşatmak istediğiniz unsur"))

    story.append(Paragraph("Estranova'da Rima Erdemir sesinin oturmuş olması için en kritik dokunuş ne?", form_open_label_style))
    story.append(interaktif_acik_uclu("acik_kritik", satir_sayisi=4, label="En kritik dokunuş"))

    story.append(Paragraph("Diğer notların (özgür alan):", form_open_label_style))
    story.append(interaktif_acik_uclu("acik_diger", satir_sayisi=6, label="Diğer notlar / özgür alan"))

    # Footer note
    story.append(Spacer(1, 0.6*cm))
    story.append(HRFlowable(
        width=16*cm, thickness=0.4, color=very_light_gray,
        spaceBefore=8, spaceAfter=8
    ))
    story.append(Paragraph(
        "<i>Form doldurulduğunda &ldquo;Kaydet&rdquo; ile geri gönderilir; cevaplar profile §0–§13 yenilenmesinde "
        "kullanılır. Senin imzan v2.1'e taşınır. Cevaplar Estranova'nın yayın kalitesi için içeriden veridir, "
        "dışarıyla paylaşılmaz.</i>",
        inline_disclaimer_style
    ))

    output_path = r"C:\Users\KC3\Downloads\rima-yazar-dogrulama-formu-interaktif.pdf"
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=2.5*cm, rightMargin=2.5*cm,
        topMargin=2*cm, bottomMargin=2.5*cm,
        title="Yazar Stil Doğrulama Formu (interaktif) — Rima Erdemir",
        author="Estranova editöryal pipeline",
        subject="Rima Erdemir profili v2.0 → v2.1 stil doğrulama (tıklanabilir form)",
        creator="Estranova editöryal pipeline",
    )

    def make_canvas(*args, **kwargs):
        return FooterCanvas(*args, footer_text="Estranova editöryal stil doğrulama formu (interaktif) — Rima Erdemir", **kwargs)

    doc.build(story, canvasmaker=make_canvas)
    return output_path


# ============================================================
if __name__ == "__main__":
    import os

    print("Rima test seti üretiliyor...")
    print()

    p1 = build_test_makale()
    s1 = os.path.getsize(p1) / 1024
    print(f"[OK] Test makalesi   : {p1}  ({s1:.1f} KB)")

    p2 = build_dogrulama_formu()
    s2 = os.path.getsize(p2) / 1024
    print(f"[OK] Dogrulama formu (statik)     : {p2}  ({s2:.1f} KB)")

    p3 = build_interaktif_dogrulama_formu()
    s3 = os.path.getsize(p3) / 1024
    print(f"[OK] Dogrulama formu (interaktif) : {p3}  ({s3:.1f} KB)")

    print()
    print("İkisi birlikte yazara gönderildiğinde Rima'nın stilini doğrulamak için kullanılır.")
