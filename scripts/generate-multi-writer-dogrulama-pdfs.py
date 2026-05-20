# -*- coding: utf-8 -*-
"""
Berna · Duygu · Selin · Demet — yazar stil doğrulama formları (interaktif).

Çıktılar:
    C:\\Users\\KC3\\Downloads\\berna-yazar-dogrulama-formu-interaktif.pdf
    C:\\Users\\KC3\\Downloads\\duygu-yazar-dogrulama-formu-interaktif.pdf
    C:\\Users\\KC3\\Downloads\\selin-yazar-dogrulama-formu-interaktif.pdf
    C:\\Users\\KC3\\Downloads\\demet-yazar-dogrulama-formu-interaktif.pdf

Akış:
    Her form, sitedeki bir mevcut yayın makalesini referans alır
    (6. bölüm doğrudan o makaleyi yazara değerlendirtir). Yazara
    makale URL'siyle birlikte gönderilir; istenirse aynı çerçeveyle
    ayrı article PDF de hazırlanabilir.

Profile referansları:
    writers/berna-aksoy/        (v2.2.3 — Çift Rol AKTİF)
    writers/duygu-karaosmanoglu/ (v2 — Çift Rol false; diş hekimi KRİTİK)
    writers/isik-selin-gunce/   (v2.0 — 5 KRİTİK gizlilik; tıp/sanat otoritesi YASAK)
    src/data/writers.ts         (Demet — modüler profil henüz yok)

Referans makaleler:
    Berna  — "Menopozda Kilo Artışı — Aynı Yaşamda Değişen Bedenle Sakin Bir Sohbet"
             /zamansiz-yasam/kilo-artisi-menopoz
    Duygu  — "Menopozda Cilt Değişimleri — Aynaya Sakince Bakmak ve Bakım Rehberi"
             /beden-yakinlik/cilt-gorunum/menopozda-cilt-degisimleri
    Selin  — "Perimenopoz Nedir? — Temel Rehber"
             /hormonal-gecis/perimenopoz/perimenopoz-nedir
    Demet  — "HRT" (HRT İlk 6 Ay)
             /hormonal-gecis/menopoz/hrt-ilk-alti-ay
"""

from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.platypus.flowables import HRFlowable, Flowable
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
burgundy        = HexColor('#6B2D3E')
deep_burgundy   = HexColor('#4f171c')
gold            = HexColor('#C9A96E')
dark_gray       = HexColor('#2D2D2D')
light_gray      = HexColor('#888888')
very_light_gray = HexColor('#B5B0A8')
form_bg         = HexColor('#FAF6EE')


# --- Styles ---
byline_style = ParagraphStyle('Byline', fontName='Calibri-Italic', fontSize=9,
    textColor=light_gray, alignment=TA_RIGHT, spaceAfter=14, leading=12)
form_title_style = ParagraphStyle('FormTitle', fontName='Constantia-Bold', fontSize=21,
    textColor=deep_burgundy, leading=27, spaceAfter=6, alignment=TA_LEFT)
form_intro_style = ParagraphStyle('FormIntro', fontName='Calibri', fontSize=10.5,
    textColor=dark_gray, leading=16, spaceBefore=10, spaceAfter=14, alignment=TA_LEFT)
form_section_style = ParagraphStyle('FormSection', fontName='Constantia-Bold', fontSize=14,
    textColor=deep_burgundy, leading=20, spaceBefore=18, spaceAfter=6, alignment=TA_LEFT)
form_section_lede_style = ParagraphStyle('FormSectionLede', fontName='Constantia-Italic', fontSize=11,
    textColor=burgundy, leading=16, spaceAfter=8, alignment=TA_LEFT)
form_question_style = ParagraphStyle('FormQuestion', fontName='Calibri', fontSize=10.5,
    textColor=dark_gray, leading=15, spaceBefore=8, spaceAfter=2, alignment=TA_LEFT)
form_question_quote_style = ParagraphStyle('FormQuestionQuote', fontName='Calibri-Italic', fontSize=10.5,
    textColor=burgundy, leading=15, spaceBefore=4, spaceAfter=2, alignment=TA_LEFT, leftIndent=12)
form_options_style = ParagraphStyle('FormOptions', fontName='Calibri', fontSize=10,
    textColor=dark_gray, leading=14, spaceBefore=0, spaceAfter=8, alignment=TA_LEFT, leftIndent=12)
form_open_label_style = ParagraphStyle('FormOpenLabel', fontName='Calibri-Italic', fontSize=10,
    textColor=light_gray, leading=14, spaceBefore=4, spaceAfter=4, alignment=TA_LEFT)
inline_disclaimer_style = ParagraphStyle('InlineDisclaimer', fontName='Calibri-Italic', fontSize=10,
    textColor=light_gray, leading=14, spaceBefore=10, spaceAfter=12, alignment=TA_LEFT,
    leftIndent=10, rightIndent=10)


class FooterCanvas(canvas.Canvas):
    def __init__(self, *args, footer_text="", **kwargs):
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


# --- Interactive widgets (page-absolute coords) ---

class InteractiveLikert(Flowable):
    def __init__(self, name):
        Flowable.__init__(self)
        self.name = name
        self.options = [("1", "1 (hiç)"), ("2", "2"), ("3", "3"), ("4", "4"), ("5", "5 (tam)")]
        self.height = 22
        self.width = 16*cm

    def wrap(self, _aw, _ah):
        return self.width, self.height

    def drawOn(self, c, x, y, _sW=0):
        col_width = 3.1 * cm
        for i, (val, label) in enumerate(self.options):
            ax = x + i * col_width
            ay = y + 4
            c.acroForm.radio(name=self.name, value=val, selected=False,
                x=ax, y=ay, size=11, buttonStyle='circle',
                borderColor=burgundy, fillColor=HexColor('#ffffff'),
                textColor=deep_burgundy, borderWidth=0.7,
                forceBorder=True, tooltip=label)
            c.setFont('Calibri', 9)
            c.setFillColor(dark_gray)
            c.drawString(ax + 16, ay + 3, label)


class InteractiveTriple(Flowable):
    def __init__(self, name):
        Flowable.__init__(self)
        self.name = name
        self.options = [("evet", "Evet — bana ait"),
                        ("yumusat", "Yumuşat / değiştir"),
                        ("hayir", "Hayır — kaldır")]
        self.height = 22
        self.width = 16*cm

    def wrap(self, _aw, _ah):
        return self.width, self.height

    def drawOn(self, c, x, y, _sW=0):
        col_width = 5.2 * cm
        for i, (val, label) in enumerate(self.options):
            ax = x + i * col_width
            ay = y + 4
            c.acroForm.radio(name=self.name, value=val, selected=False,
                x=ax, y=ay, size=11, buttonStyle='circle',
                borderColor=burgundy, fillColor=HexColor('#ffffff'),
                textColor=deep_burgundy, borderWidth=0.7,
                forceBorder=True, tooltip=label)
            c.setFont('Calibri', 9.5)
            c.setFillColor(dark_gray)
            c.drawString(ax + 16, ay + 3, label)


class InteractiveDouble(Flowable):
    def __init__(self, name):
        Flowable.__init__(self)
        self.name = name
        self.options = [("dogru", "Doğru / kabul"),
                        ("yanlis", "Yanlış / değiştir")]
        self.height = 22
        self.width = 16*cm

    def wrap(self, _aw, _ah):
        return self.width, self.height

    def drawOn(self, c, x, y, _sW=0):
        col_width = 7.7 * cm
        for i, (val, label) in enumerate(self.options):
            ax = x + i * col_width
            ay = y + 4
            c.acroForm.radio(name=self.name, value=val, selected=False,
                x=ax, y=ay, size=11, buttonStyle='circle',
                borderColor=burgundy, fillColor=HexColor('#ffffff'),
                textColor=deep_burgundy, borderWidth=0.7,
                forceBorder=True, tooltip=label)
            c.setFont('Calibri', 9.5)
            c.setFillColor(dark_gray)
            c.drawString(ax + 16, ay + 3, label)


class InteractiveTextArea(Flowable):
    def __init__(self, name, line_count=4, label=None):
        Flowable.__init__(self)
        self.name = name
        self.line_count = line_count
        self.label = label
        self.height = 14 * line_count + 12
        self.width = 16*cm

    def wrap(self, _aw, _ah):
        return self.width, self.height

    def drawOn(self, c, x, y, _sW=0):
        c.acroForm.textfield(name=self.name,
            tooltip=self.label or "Yanıtınızı buraya yazın",
            x=x, y=y + 2, width=15.5 * cm, height=self.height - 6,
            borderStyle='solid', borderColor=very_light_gray,
            fillColor=HexColor('#FAFAF8'), textColor=dark_gray,
            borderWidth=0.5, forceBorder=True,
            fontName='Helvetica', fontSize=10, fieldFlags='multiline')


def il(name): return InteractiveLikert(name)
def iu(name): return InteractiveTriple(name)
def ii(name): return InteractiveDouble(name)
def ia(name, lines=4, label=None): return InteractiveTextArea(name, line_count=lines, label=label)


def section_header(story, num_title, lede):
    story.append(Paragraph(num_title, form_section_style))
    story.append(HRFlowable(width=2.5*cm, thickness=1.5, color=gold,
                            hAlign='LEFT', spaceBefore=2, spaceAfter=10))
    story.append(Paragraph(lede, form_section_lede_style))


def render_form(output_path, footer, title, intro_paras, sections):
    """Generic form renderer. sections is a list of build callables."""
    story = []
    story.append(Paragraph(title['byline'], byline_style))
    story.append(Paragraph(title['title'], form_title_style))
    story.append(HRFlowable(width=3.2*cm, thickness=2, color=gold,
                            hAlign='LEFT', spaceBefore=8, spaceAfter=6))
    for p in intro_paras:
        story.append(Paragraph(p, form_intro_style))

    for build in sections:
        build(story)

    # Footer note
    story.append(Spacer(1, 0.6*cm))
    story.append(HRFlowable(width=16*cm, thickness=0.4, color=very_light_gray,
                            spaceBefore=8, spaceAfter=8))
    story.append(Paragraph(
        "<i>Form doldurulduğunda &ldquo;Kaydet&rdquo; ile geri gönderilir; cevaplar profil dosyalarının "
        "(profile.yaml + hot.md + warm.md + cold.md + hidden.md) yenilenmesinde kullanılır. Senin imzan "
        "bir sonraki minor sürüme taşınır. Cevaplar Estranova'nın yayın kalitesi için içeriden veridir, "
        "dışarıyla paylaşılmaz.</i>",
        inline_disclaimer_style
    ))

    doc = SimpleDocTemplate(output_path, pagesize=A4,
        leftMargin=2.5*cm, rightMargin=2.5*cm, topMargin=2*cm, bottomMargin=2.5*cm,
        title=title['pdf_title'], author="Estranova editöryal pipeline",
        subject=title['pdf_subject'], creator="Estranova editöryal pipeline")

    def make_canvas(*args, **kwargs):
        return FooterCanvas(*args, footer_text=footer, **kwargs)

    doc.build(story, canvasmaker=make_canvas)
    return output_path


# ============================================================
# 1) BERNA AKSOY
# ============================================================

def build_berna_form():
    title = {
        'byline': "Sevgili Berna &nbsp;·&nbsp; Estranova editöryal stil doğrulama formu (interaktif) &nbsp;·&nbsp; 30 Nisan 2026",
        'title': "Yazar Stil Doğrulama Formu — Tıklanabilir Versiyon",
        'pdf_title': "Yazar Stil Doğrulama Formu (interaktif) — Berna Aksoy",
        'pdf_subject': "Berna Aksoy profili v2.2.3 → v2.3 stil doğrulama (tıklanabilir form)",
    }
    intro = [
        "Bu form, Estranova için kuracağımız <i>Berna Aksoy</i> editöryal sesinin sana ait hissedip "
        "hissetmediğini doğrulamak için. 8 bölüm var; her bölüm ayrı bir katmanı sorguluyor &mdash; "
        "karakter izi, imza kalıpları, yasak filtreler, konu eksenleri, hassas alanlar, taslak makale "
        "değerlendirmesi, Kanal A açıklığı ve açık uçlu eklemen.",
        "<b>Bu PDF tıklanabilir.</b> Adobe Reader, Edge, Chrome ya da herhangi bir modern PDF okuyucuda "
        "yuvarlak işaretleri tıklayarak seçim yapabilir, açık uçlu alanlara doğrudan yazabilir, sonra dosyayı "
        "kaydederek geri gönderebilirsin. Referans makale: <i>Menopozda Kilo Artışı — Aynı Yaşamda Değişen "
        "Bedenle Sakin Bir Sohbet</i> "
        "(estranova.com/zamansiz-yasam/kilo-artisi-menopoz). 6. bölüm doğrudan bu yazıyı değerlendirmen "
        "üzerine kurulu.",
    ]

    def s1(story):
        section_header(story, "1. Karakter izi cümleleri",
            "Aşağıdaki cümleler senin sesini ne kadar yakalıyor? Her birini 1-5 arası işaretle "
            "(1: hiç bana ait değil, 5: tam bana ait). Tıkla, seç.")
        cumle = [
            "Birçoğumuzun aynı sahnesi var: yıllarca aynı tabakla, aynı yürüyüş ritmiyle, aynı uyku saatiyle yaşadık. Bir gün tartıya çıktığımızda rakam sessizce iki, üç, beş kilo yukarı taşındı.",
            "Tek bir suçlu yok; birkaç katmanın aynı anda devreye girdiği bir tablo var.",
            "Burada anahtar cümle şu: bu dönem kalori savaşı değil, kompozisyon savaşı.",
            "Diyet kültürünün gürültüsünden bir adım geri çekilmek bu döneme yapılabilecek en sade iyiliklerden biri.",
            "Yasak listesi yerine denge dili daha sürdürülebilir.",
            "Tartının söylediğinden çok bel çevresinin söylediğine kulak vermek bu dönemde daha bilgilendirici olabiliyor.",
            "Kuşağımız 'kilo verecekseniz daha çok kardiyo' cümlesiyle büyüdü. Bu cümle bütün hayat için doğru değil.",
            "Beden bir mektup yazmıştı; sen de cevap veriyorsun.",
            "Buradan bakınca eski 'kararlı diyet' refleksimi kendime hatırlattığımda bile kıs kıs gülüyorum: kontrol etmenin uzun listesini, sonunda bir kez daha kendi gözümün önüne sermek için yapıyorum sanki.",
            "Apple Watch'umun bana 'ayağa kalk' demesini hâlâ sevimli buluyorum; sanki kontrol etme refleksimi cep saatime dış kaynak vermişim.",
        ]
        for i, c in enumerate(cumle, 1):
            story.append(Paragraph(f'&ldquo;{c}&rdquo;', form_question_quote_style))
            story.append(il(f"karakter_{i}"))

    def s2(story):
        section_header(story, "2. İmza kalıpları onayı",
            "Profile §4 + warm.md §4b'de senin için 7 imza kalıbı tanımladım. Her biri Estranova'da bir makalede "
            "1-2 kez kullanılır. Aşağıdaki kalıplar imzan olarak doğru mu, yumuşatılmalı mı, kaldırılmalı mı?")
        kaliplar = [
            ("Kalıp 1 — Sakin/araştırmacı akran tonu (HARD imza)",
             "Berna sakin-araştırmacı (Başak geç-başlangıç hassasiyetli; Duygu yaşam-neşesi; Berna araştırma-takipli ama HRT kullanan). "
             "Korku, mucize ve aciliyet dilinden uzak; öğrenmeyi ve geri çekilmeyi modelleyen ses."),
            ("Kalıp 2 — Kompozisyon imzası (kilo/metabolizma/kas)",
             "'Kalori savaşı değil, kompozisyon savaşı' / 'kronik diyet ↔ sürdürülebilir alışkanlık' / 'tartının söylediğinden çok bel çevresinin söylediği'. "
             "2026-04-28 ile netleşen Berna imza ekseni."),
            ("Kalıp 3 — 'Sahne' kuruluşu (akran masası)",
             "'Birçoğumuzun aynı sahnesi var…' / 'Sen de fark etmişsindir…' Akran kuşağıyla buluşturan, suçluluğu yumuşatan ortak sahne anlatımı."),
            ("Kalıp 4 — Mekanizma cümlesi yumuşatması",
             "'Östrojen yıllarca sessiz bir koreograftı…' / 'Visseral yağ pasif bir depo değil; metabolik olarak aktif…' "
             "Bilim cümlesini akran sesinde, parantez içi kanıt etiketi (güçlü/iyi/orta/sınırlı kanıt) ile sunma."),
            ("Kalıp 5 — Ev içi ince humor (HARD CONSTRAINT — 2026-04-29)",
             "Kendi listeciliği, Apple Watch ironisi, kontrol takıntısına gülen bir cümle, ev içi aile şakası, gece okuma alışkanlığı, "
             "goji berry tozu, soru-yağmurluğu, kanaat kalabalığı. Her makalede 1-2 ince humor cümlesi zorunlu."),
            ("Kalıp 6 — Çift ayrıcalık ifşası (Çift Rol)",
             "'Eşim hekim, hekimim başkası' — etik prensip nedeniyle eşi takip etmiyor; takip arkadaş çevresinden "
             "bir meslektaşa devredilmiş. Bekleme odasında da beklemiyor. Hekim-hasta ilişkisi konularında "
             "Berna kendi konumunu DÜRÜSTÇE ifşa edebilir; isim yine geçmez."),
            ("Kalıp 7 — Bedenle yazışma kapanışı",
             "'Beden bir mektup yazmıştı; sen de cevap veriyorsun.' / 'Birkaç hafta sonra fark edeceğin şey büyük "
             "bir dönüşüm değil, sade bir dengelenme.' Kapanış: bedeni okuyan ve cevaplayan akran tonu."),
        ]
        for i, (b, a) in enumerate(kaliplar, 1):
            story.append(Paragraph(f"<b>{b}</b>", form_question_style))
            story.append(Paragraph(a, form_options_style))
            story.append(iu(f"imza_{i}"))

    def s3(story):
        section_header(story, "3. Yasak filtreleri onayı",
            "Profile hot.md §4 'asla' listesi + warm.md koçluk-pazarlama yasakları + cold.md §8. Aşağıdaki "
            "yasaklar makul mü, esnetilmeli mi?")
        yasaklar = [
            "<b>KRİTİK — Çift Rol:</b> Doç. Dr. Senai Aksoy senin eşin; ama etik prensip nedeniyle hekimin değil. "
            "Asıl jinekoloğun arkadaş çevresinden bir meslektaş. Muayene odası bilgisi (HRT/ilaç/doz/lab/tanı) "
            "Estranova'ya ASLA sızmaz. Hekim-hasta makalelerinde dürüst ifşa serbest, isim yine geçmez.",
            "Doktor / klinisyen otorite tonu ('hastalarımda gözlemliyorum', 'klinik tecrübemde', 'tıbben söylerim') "
            "— sen klinisyen değilsin, akransın.",
            "Spesifik HRT marka adı / ilaç adı / doz / protokol — kişisel deneyim Kanal A açık ama bu kalıplar yasak.",
            "Spesifik supplement marka adı / ürün adı / klinik adı / hekim adı / cihaz adı — yumuşak çerçeve serbest, spesifik isim yasak.",
            "Wellness-pop dili / koçluk-pazarlama tonu ('bütünsel', 'detoks', 'reset', 'glow', 'biohack') — sade dile.",
            "Sosyo-ekonomik mesafe yaratan dil ('lüks spa', 'private trainer', 'organik premium') — akran tonu.",
            "Türkiye-Batı kıyaslama coşkulu sıfatları ('biz neden böyleyiz', 'orada şöyle yapılıyor') — yumuşatılır.",
            "Influencer mucize dili ('hayatımı değiştirdi', 'mucize', 'genç gösterdi', 'kraliçe', 'efsane') — sade ses.",
            "Smiley / emoji / fazla ünlem — Berna mizajı sade.",
            "Diyet kültürü dili ('yağ yakıcı', 'temiz beslenme', 'kötü besin', 'cheat day') — denge dili.",
            "Yasak hitaplar: 'canım', 'tatlım', 'kızım', 'abla', 'kızlar' — akran ama mütevazı, hitap değil.",
            "Uluslararası kuruluş / yayın adı (NAMS, Lancet, NEJM, NICE, WHO, ACOG, JAMA, Mayo) gövdede yasak; "
            "yumuşak referans serbest.",
            "Annesi karakteri ile özdeşleşme: Berna ≠ annesi (anne bipolar, anne karakteri ile karıştırılmaz); "
            "anne arka planı sadece bağlam, doğrudan otobiyografik koz değil.",
        ]
        for i, y in enumerate(yasaklar, 1):
            story.append(Paragraph(y, form_question_style))
            story.append(ii(f"yasak_{i}"))

    def s4(story):
        section_header(story, "4. Konu eksenleri ağırlığı",
            "Profile'da senin için 8 imza eksen tanımladım. Her birinin senin sesini ne kadar tanımladığını "
            "1-5 arası işaretle.")
        eksenler = [
            ("Kompozisyon imzası — kilo / metabolizma / kas (HARD imza)",
             "Kalori savaşı değil kompozisyon savaşı; bel çevresi, kas korunması, sarkopeni, insülin direnci."),
            ("HRT akran sesi — sakin/araştırmacı tonu",
             "HRT kullanıyorsun ama Duygu'nun neşeli/cesur tonu yerine sakin-araştırmacı. 'Henüz değil'in tersi: "
             "denedim, izliyorum, yumuşak güncelleniyor."),
            ("Diyet kültürü eleştirisi — denge dili",
             "Yo-yo döngüsü, 'asla yemem' tuzakları, kısıtlama yerine mimari, yasak listesi yerine doyum tasarımı."),
            ("Hareket çerçevesi — kardiyo değil yük taşıma",
             "Direnç çalışması ön planda; kardiyo destekleyici. Ev tipi pratikleştirme — lastik bant, 1-3 kg dambıl."),
            ("Çift Rol ifşası — hekim-hasta ilişkisi",
             "'Eşim hekim, hekimim başkası' makaleleri. Etik prensip + arkadaş hekim devri + bekleme odası ayrıcalığı."),
            ("Ev içi ince humor (HARD CONSTRAINT)",
             "Apple Watch ironisi, kendi listeciliği, kontrol takıntısına gülme, gece okuma alışkanlığı. Her makalede 1-2 cümle."),
            ("Aile arka planı — kuşak köprüsü (sınırlı)",
             "Anneanne de Marneffe, Galatasaray dede, anne bipolar (karakter ayırımı), baba akademisyen, kız kardeş, "
             "Frankofon iz, eski evlilik, Alara 1995. Spesifik kimlik bilgisi yazıya girmez; bağlam olarak."),
            ("Beslenme rehberleri — Akdeniz tarzı, sade çerçeve",
             "IIN+Rouxbe sertifikaları, Turkmax Gurme 7 Ekim 2015 — gıda + kadın sağlığı kesişiminde editöryal track record."),
        ]
        for i, (b, a) in enumerate(eksenler, 1):
            story.append(Paragraph(f"<b>{b}</b>", form_question_style))
            story.append(Paragraph(a, form_options_style))
            story.append(il(f"eksen_{i}"))

    def s5(story):
        section_header(story, "5. Hassas alanlar onayı",
            "Aşağıdaki bilgiler profile'da kayıtlı; gerçek hayatınla ne kadar uyumlu?")
        hassas = [
            "Aile: anneannen 'de Marneffe' (Frankofon iz), deden Galatasaray + BYİK, annen bipolar (karakter olarak Berna ≠ annesi), "
            "baban akademisyen, kız kardeşin var, Alara 1995 doğumlu kız çocuğun.",
            "Kariyer / sertifikalar: IIN (Institute for Integrative Nutrition) + Rouxbe diploması; Turkmax Gurme'de "
            "ilk yayın 7 Ekim 2015. Beslenme + kadın sağlığı ekseninde editöryal track record.",
            "HRT kullanıyorsun — birinci elden deneyim Kanal A açık; ama spesifik marka/ilaç/doz YASAK.",
            "Çift Rol KRİTİK: Doç. Dr. Senai Aksoy eşin; etik prensip nedeniyle hekimin değil. Asıl jinekoloğun "
            "eşinin meslektaşı = arkadaş çevresinden biri. Bekleme odasında da beklemiyorsun.",
            "Hekim-hasta ilişkisi makalelerinde kendi konumunu (eşinin hem partner hem hekim olduğunu) "
            "DÜRÜSTÇE ifşa edebilirsin; isim yine geçmez.",
            "Estranova'da varsayılan editör olarak konumun var (Berna feed mercek noktası, sosyal medya literatür "
            "tarayıcı, sakin-araştırmacı akran ses).",
            "İnce humor imzası (HARD CONSTRAINT — 2026-04-29): Apple Watch ironisi, kendi listeciliği, kontrol "
            "takıntısına gülme, ev içi aile şakası, gece okuma alışkanlığı, goji berry tozu, soru-yağmurluğu, "
            "kanaat kalabalığı — her makalede 1-2 cümle zorunlu.",
            "Aile spesifik kimlik bilgisi yazıya girmez (eş, kız çocuğu, kız kardeş ismi/detayı); bağlam olarak gelir.",
        ]
        for i, h in enumerate(hassas, 1):
            story.append(Paragraph(h, form_question_style))
            story.append(ii(f"hassas_{i}"))

    def s6(story):
        section_header(story, "6. Taslak makale değerlendirmesi",
            "Referans makale: <i>Menopozda Kilo Artışı — Aynı Yaşamda Değişen Bedenle Sakin Bir Sohbet</i> "
            "(/zamansiz-yasam/kilo-artisi-menopoz). Senin sesinde mi yazılmış? Aşağıdaki 8 katmanı "
            "değerlendir. Her katman sende kalmış mı, fazla mı, eksik mi?")
        katmanlar = [
            ("Açılış sahnesi — akran masası kuruluşu",
             "<i>'Birçoğumuzun aynı sahnesi var: yıllarca aynı tabakla, aynı yürüyüş ritmiyle, aynı uyku saatiyle "
             "yaşadık. Bir gün tartıya çıktığımızda rakam sessizce iki, üç, beş kilo yukarı taşındı.'</i> Suçluluğu "
             "yumuşatan, akranı masaya çağıran açılış — sende kalmış mı?"),
            ("Kompozisyon imzası — 'kalori savaşı değil kompozisyon savaşı'",
             "<i>'Burada anahtar cümle şu: bu dönem kalori savaşı değil, kompozisyon savaşı.'</i> Berna imza ekseninin "
             "merkezi cümlesi — bu çerçeveleme her makalede zorunlu omurga olmalı mı?"),
            ("Mekanizma yumuşatması — koreograf metaforu + kanıt etiketleri",
             "<i>'Östrojen yıllarca sessiz bir koreograftı: yağı kalça ve uyluk gibi alt bölgeye yönlendirdi…'</i> + "
             "'(güçlü kanıt) (iyi kanıt) (orta kanıt) (sınırlı kanıt)' parantez etiketleri. Doz doğru mu, fazla "
             "teknik mi, eksik mi?"),
            ("Diyet kültürü eleştirisi — yumuşak ama net",
             "<i>'Yasak listesi yerine denge dili daha sürdürülebilir.'</i> + <i>'Diyet kültürünün gürültüsünden "
             "bir adım geri çekilmek bu döneme yapılabilecek en sade iyiliklerden biri.'</i> Bu eleştiri tonu sende "
             "kalmış mı, daha keskin/yumuşak olmalı mı?"),
            ("Hareket çerçevesi — yük taşıma vurgusu",
             "<i>'Kuşağımız \"kilo verecekseniz daha çok kardiyo\" cümlesiyle büyüdü. Bu cümle bütün hayat için "
             "doğru değil; menopoz dönemi için ise dengeyi yeniden kurmayı gerektiriyor.'</i> Direnç egzersizinin "
             "ön plana çıkarılması — kuşak göndermeli ses sende kalmış mı?"),
            ("HRT cümlesi — sakin akran çerçeve",
             "<i>'Hormon replasman tedavisi tek başına kilo verdirmiyor; ama yağ dağılımındaki bel-merkezli kaymayı "
             "yumuşattığı görülmüş (orta kanıt). HRT kararı… kilo bu kararın merkez başlığı değil, olası bir yan "
             "kazanım.'</i> Bu HRT cümlesinin mesafesi/dürüstlüğü sende kalmış mı?"),
            ("İnce humor — bu yazıda var mı / eksik mi?",
             "Bu yazıda Apple Watch ironisi / ev içi aile şakası / kontrol takıntısı gülüşü gibi humor cümleleri "
             "GİZLİ kalmış görünüyor. Profile §3 'her makalede 1-2 ince humor cümlesi' zorunlu — bu makaleye "
             "humor cümlesi eklemeli miyiz, yoksa konu (kilo) hassas olduğu için humor uzak tutulmalı mı?"),
            ("Bedenle yazışma kapanışı — 'beden bir mektup yazmıştı'",
             "<i>'Beden bir mektup yazmıştı; sen de cevap veriyorsun.'</i> + <i>'Birkaç hafta sonra fark edeceğin "
             "şey büyük bir dönüşüm değil, sade bir dengelenme.'</i> Kapanış imzası sende kalmış mı?"),
        ]
        for i, (b, a) in enumerate(katmanlar, 1):
            story.append(Paragraph(f"<b>{b}</b>", form_question_style))
            story.append(Paragraph(a, form_options_style))
            story.append(iu(f"makale_{i}"))

    def s7(story):
        section_header(story, "7. Kanal A — kişisel deneyim açıklığı",
            "Aşağıdaki spesifik kategorilerde Estranova bağlamında rahat mısın? "
            "'Evet bana ait' / 'Yumuşat' / 'Hayır kaldır' işaretle.")
        kanal = [
            "HRT kullanıcı olarak birinci elden anlatım — sakin akran tonunda; spesifik marka/ilaç/doz YASAK.",
            "Kilo / kompozisyon değişimi — kendi bedenini izleme deneyimi.",
            "Uyku bölünmesi / sıcak basması / gece terlemesi — birinci elden.",
            "Apple Watch ironisi / kendi listeciliği / kontrol takıntısı — ince humor cümleleri.",
            "Ev içi aile şakası — eş, kız (Alara), kız kardeş bağlamında genel renk (isim/spesifik detay yok).",
            "Akdeniz tarzı sade çerçeve / IIN + Rouxbe sertifikaları üzerinden beslenme rehberliği.",
            "Direnç egzersizi / lastik bant / dambıl evde rutin — birinci elden.",
            "Çift Rol ifşası — 'eşim hekim, hekimim başkası' / arkadaş çevresinden hekim devri (isim YOK).",
            "Goji berry tozu / yeni denenen takviyeler — kendine ironiyle (advocacy değil).",
            "Gece okuma alışkanlığı / sosyal medya feed merceği — Berna feed imzası bağlamında.",
        ]
        for i, k in enumerate(kanal, 1):
            story.append(Paragraph(k, form_question_style))
            story.append(iu(f"kanal_{i}"))

    def s8(story):
        section_header(story, "8. Eklemek / çıkarmak istediklerin",
            "Profile'da eksik kalan, yanlış vurgulanan, ya da tamamen kaldırılması gereken bir şey var mı? "
            "Aşağıdaki kutulara <b>doğrudan yazabilirsin</b>.")
        story.append(Paragraph("Eklemek istediğin imza cümle / anekdot / kalıp:", form_open_label_style))
        story.append(ia("acik_ekleme", lines=4, label="Eklemek istediğin imza cümle / anekdot / kalıp"))
        story.append(Paragraph("Çıkarmak / yumuşatmak istediğin tonu, eksen, yasak:", form_open_label_style))
        story.append(ia("acik_cikarma", lines=4, label="Çıkarmak / yumuşatmak istediğin unsur"))
        story.append(Paragraph(
            "İnce humor imzası (HARD CONSTRAINT) — 8 mevcut kalıbı görüyorsun. Eklemek istediğin yeni bir kalıp "
            "var mı, yoksa bazılarını çıkartalım mı?",
            form_open_label_style))
        story.append(ia("acik_humor", lines=4, label="İnce humor kalıpları üzerinde değişiklik"))
        story.append(Paragraph(
            "Çift Rol ifşası — eş hekim + arkadaş hekim devri + bekleme odası ayrıcalığı çerçevesi seninle "
            "uyumlu mu? Eklemek/yumuşatmak istediğin nokta var mı?",
            form_open_label_style))
        story.append(ia("acik_cift_rol", lines=4, label="Çift Rol ifşası"))
        story.append(Paragraph(
            "Annene karakter ayırımı — Berna ≠ annesi (anne bipolar) — yazıda nasıl çerçeveliyoruz, "
            "değiştirmemiz gereken bir nokta var mı?",
            form_open_label_style))
        story.append(ia("acik_anne_karakter", lines=4, label="Anne karakteri ayırımı"))
        story.append(Paragraph(
            "Estranova'da Berna Aksoy sesinin oturmuş olması için en kritik dokunuş ne?",
            form_open_label_style))
        story.append(ia("acik_kritik", lines=4, label="En kritik dokunuş"))
        story.append(Paragraph("Diğer notların (özgür alan):", form_open_label_style))
        story.append(ia("acik_diger", lines=6, label="Diğer notlar / özgür alan"))

    return render_form(
        r"C:\Users\KC3\Downloads\berna-yazar-dogrulama-formu-interaktif.pdf",
        "Estranova editöryal stil doğrulama formu (interaktif) — Berna Aksoy",
        title, intro, [s1, s2, s3, s4, s5, s6, s7, s8],
    )


# ============================================================
# 2) DUYGU KARAOSMANOĞLU
# ============================================================

def build_duygu_form():
    title = {
        'byline': "Sevgili Duygu &nbsp;·&nbsp; Estranova editöryal stil doğrulama formu (interaktif) &nbsp;·&nbsp; 30 Nisan 2026",
        'title': "Yazar Stil Doğrulama Formu — Tıklanabilir Versiyon",
        'pdf_title': "Yazar Stil Doğrulama Formu (interaktif) — Duygu Karaosmanoğlu",
        'pdf_subject': "Duygu Karaosmanoğlu profili v2 → v2.1 stil doğrulama (tıklanabilir form)",
    }
    intro = [
        "Bu form, Estranova için kuracağımız <i>Dt. Duygu Karaosmanoğlu</i> editöryal sesinin sana ait "
        "hissedip hissetmediğini doğrulamak için. 8 bölüm var; her bölüm ayrı bir katmanı sorguluyor &mdash; "
        "karakter izi, imza kalıpları, yasak filtreler, konu eksenleri, hassas alanlar, taslak makale "
        "değerlendirmesi, Kanal A açıklığı ve açık uçlu eklemen.",
        "<b>Bu PDF tıklanabilir.</b> Adobe Reader, Edge, Chrome ya da herhangi bir modern PDF okuyucuda "
        "yuvarlak işaretleri tıklayarak seçim yapabilir, açık uçlu alanlara doğrudan yazabilir, sonra dosyayı "
        "kaydederek geri gönderebilirsin. Referans makale: <i>Menopozda Cilt Değişimleri — Aynaya Sakince "
        "Bakmak ve Bakım Rehberi</i> "
        "(estranova.com/beden-yakinlik/cilt-gorunum/menopozda-cilt-degisimleri). 6. bölüm doğrudan bu yazıyı "
        "değerlendirmen üzerine kurulu.",
    ]

    def s1(story):
        section_header(story, "1. Karakter izi cümleleri",
            "Aşağıdaki cümleler senin sesini ne kadar yakalıyor? Her birini 1-5 arası işaretle "
            "(1: hiç bana ait değil, 5: tam bana ait).")
        cumle = [
            "Bende öyle bir gün oldu — sıradan bir sabah, kahvemi koymuş, makyaj çantasını açmıştım. Aynaya baktığımda cildim bana yabancı geldi.",
            "Sana hekim olarak değil — Londra ile İstanbul arasında gidip gelen, HRT yolculuğunu yaşayan, denediği ürünleri unuttuğunda kendine 'bu kadarı yetti, bir sayfaya yazsam' diyen bir akran olarak yazıyorum.",
            "Bende işe yarayan her şeyin sende de yarayacağını söylemiyorum; ama dönem aynı, dert aynı, sorular birbirine benziyor.",
            "Açık konuşacağım: yıllar içinde çok ürün denedim.",
            "Ben bu kuralı atladığımda bir hafta kıpkırmızı yürüdüm — kendi deneyimimden söylüyorum, sabırlı başla.",
            "Bu konuda ben kendi adıma erken davrandım: vajinal nemlendiriciler ve düşük doz lokal östrojen seçenekleri jinekoloğumla konuşulduğunda fark gerçekten belirgin.",
            "Aynayla ilişkimiz bu yıllarda yeniden kuruluyor; ürün listesi kadar bu ilişki de bakımın parçası.",
            "Ben kendi adıma sabah yürüyüşünü 'yüz losyonum' gibi düşünüyorum.",
            "Bu cümle bana çok tanıdık — ben de yıllarca aynı kremi kullanmıştım, sonra birden tahriş etmeye başladı.",
            "Sade bir konfor, sağlıklı bir bariyer, kendi yansımanla sakince barışmak — bence asıl kazanım bu.",
        ]
        for i, c in enumerate(cumle, 1):
            story.append(Paragraph(f'&ldquo;{c}&rdquo;', form_question_quote_style))
            story.append(il(f"karakter_{i}"))

    def s2(story):
        section_header(story, "2. İmza kalıpları onayı",
            "Profile §4 + warm.md §4b'de senin için 7 imza kalıbı tanımladım. Her biri Estranova'da bir makalede "
            "1-2 kez kullanılır. Aşağıdaki kalıplar imzan olarak doğru mu, yumuşatılmalı mı, kaldırılmalı mı?")
        kaliplar = [
            ("Kalıp 1 — Aktif HRT yaşam-neşesi tonu (HARD imza)",
             "Berna sakin-araştırmacı, Başak geç-başlangıç hassasiyetli, Duygu yaşam-neşesi/cesur. "
             "'HRT yolculuğunu yaşayan… denediği ürünleri unuttuğunda kendine 'bu kadarı yetti, bir sayfaya yazsam' "
             "diyen bir akran' — neşeli, ölçülü cesur, mesafesiz."),
            ("Kalıp 2 — Sosyal masa imzası (mercek)",
             "Berna feed merceği, Başak günce, Duygu **masada dinler**. Yüz yüze sohbet anısı, ortak masada "
             "geçen bir cümle, bir arkadaşın aktarımı. Her makalede 1-2 sosyal masa anekdotu."),
            ("Kalıp 3 — 'Bende öyle bir gün oldu' itirafı",
             "'Bende öyle bir gün oldu — sıradan bir sabah…' / 'Bende en şaşırtıcı değişiklik şu oldu…' / "
             "'Bende üç-dört aylık tutarlı kullanım sonrası küçük bir fark hissettim'. Kişisel itiraf açılışı."),
            ("Kalıp 4 — 'Hekim olarak değil, akran olarak' çerçeveleme",
             "'Sana hekim olarak değil — bir akran olarak yazıyorum.' Diş hekimi kimliğin var ama yazıda klinisyen "
             "otoritesi MUTLAK YASAK. Bu sınır cümlesi makalelerin omurgası."),
            ("Kalıp 5 — Estetik kabul ve dikkat dengesi (advocacy değil)",
             "Botoks, filler, laser, IPL, mezoterapi, dermapen — denedim/öğrendim çerçevesinde, marka adı YOK. "
             "'Hiçbiri tek seansla gençleştirmiyor; üç-altı seans + bakım rutini birlikte işliyor.'"),
            ("Kalıp 6 — Boşanma sonrası 50'lerde yeniden kurulma",
             "Mağduriyet değil olgunluk. Konu varsa: 'kendine alan açma', 'yeniden seçme', 'eski rutinin yerine "
             "yeni mimari'. Yıllık 1-2 makalede merkezi eksen; daha sık makalelerde dolaylı bağ."),
            ("Kalıp 7 — Kapanış arkadaş bağı imzası",
             "Berna doktoruyla, Başak günceyle, Duygu **bir arkadaşıyla** kapatır. Sosyal masa kapanışı veya "
             "kendine dönük hafif ironi — son cümle bir akran cümlesi."),
        ]
        for i, (b, a) in enumerate(kaliplar, 1):
            story.append(Paragraph(f"<b>{b}</b>", form_question_style))
            story.append(Paragraph(a, form_options_style))
            story.append(iu(f"imza_{i}"))

    def s3(story):
        section_header(story, "3. Yasak filtreleri onayı",
            "Profile hot.md §4 'asla' listesi + hidden.md §5b diş hekimi kimliği KRİTİK uyarısı. "
            "Aşağıdaki yasaklar makul mü, esnetilmeli mi?")
        yasaklar = [
            "<b>KRİTİK — Diş hekimi kimliği:</b> Sen diş hekimisin; ama Estranova'da yazıda klinisyen otorite "
            "MUTLAK YASAK. 'Hekim olarak söylerim ki…' / 'Hastalarımda gözlemliyorum…' / klinik dekoru, ofis, "
            "muayene odası tasviri — hiçbiri yazıya girmez.",
            "Klinik dekoru / ofis / hasta sahnesi tasviri — MUTLAK YASAK (klinisyen otorite tetikler).",
            "Spesifik marka / ürün / klinik / cihaz / hekim adı — yumuşak çerçeve serbest, spesifik isim YASAK.",
            "Spesifik HRT marka adı / ilaç adı / doz / protokol — kişisel deneyim Kanal A açık ama bu kalıplar yasak.",
            "Estetik mucize dili ('hayatımı değiştirdi', 'genç gösterdi', 'sihirli', 'tek seansta dönüşüm') YASAK.",
            "Lider talimat tonu ('şunu yapın', 'mutlaka deneyin', 'bence herkesin kullanması lazım') — yerine davet.",
            "İnfluencer / before-after pazarlama dili — Estranova ses dışı.",
            "Lüks gastronomi / destinasyon / şef / restoran adı (Londra/İstanbul anekdotunda bile) — anonim çerçeve.",
            "Boşanma melodramı / mağduriyet tonu — olgunluk çerçevesi, yapı dili.",
            "Kız hakkında spesifik kimlik bilgisi (isim, okul, iş, sosyal medya) — Londra anekdotu serbest, kimlik YOK.",
            "Uluslararası kuruluş / yayın adı (NAMS, Lancet, NEJM, NICE, WHO, ACOG, JAMA, Mayo) gövdede yasak.",
            "Cesur ton — fiziksel yakınlık alanlarında (cinsellik, vajinal/vulvar konfor) ek sıkılık: aşırı klinik "
            "detay, mahrem mekanik tasvir, pelvik anatomi sözlüğü — yumuşak çerçeve.",
            "'Bütünsel', 'glow', 'detoks', 'reset' wellness-pop dili — sade dile.",
            "Yasak hitaplar: 'canım', 'tatlım', 'kızım', 'abla', 'kızlar' — neşeli ama hitap değil.",
        ]
        for i, y in enumerate(yasaklar, 1):
            story.append(Paragraph(y, form_question_style))
            story.append(ii(f"yasak_{i}"))

    def s4(story):
        section_header(story, "4. Konu eksenleri ağırlığı",
            "Profile'da senin için 8 imza eksen tanımladım. Her birinin senin sesini ne kadar tanımladığını "
            "1-5 arası işaretle.")
        eksenler = [
            ("Aktif HRT deneyimi — yaşam-neşesi tonu (HARD imza)",
             "Birinci elden HRT kullanımı; Berna sakin-araştırmacı, Başak geç-başlangıç, Duygu neşeli/cesur."),
            ("Estetik deneyim anlatımı — kabul ve dikkat dengesi",
             "Botoks, filler, laser, IPL, mezoterapi, dermapen — denedim/öğrendim, advocacy değil, marka YOK."),
            ("Sosyal masa imzası (mercek)",
             "Yüz yüze sohbet, ortak masa, arkadaş aktarımı — yazının mercek noktası."),
            ("Boşanma sonrası 50'lerde yeniden kurulma",
             "Mağduriyet değil olgunluk; kendine alan açma, yeniden seçme, yapı dili."),
            ("Anne-yetişkin kız + Londra uzaklık-yakınlık",
             "Boş yuva + HRT eş zamanlı yaşanması; Londra/İstanbul gel-git çerçeveleme."),
            ("Cilt + estetik bakım rehberliği (mekanizma yumuşatması)",
             "Östrojen → cilt, kolajen, retinoid, SPF, oral takviye — denedim/öğrendim çerçevesinde."),
            ("Cesur ton mahrem konularda (pelvik konfor, dispareuniya)",
             "Konuyu konuşmaya açma cesareti; ama klinik mekanik tasvir YASAK, yumuşak çerçeve."),
            ("Kendine dönük hafif ironi (kapanış imzası)",
             "Kendine yönelik gülüş; başkasını küçük düşürmez. Kapanış arkadaş bağı imzası."),
        ]
        for i, (b, a) in enumerate(eksenler, 1):
            story.append(Paragraph(f"<b>{b}</b>", form_question_style))
            story.append(Paragraph(a, form_options_style))
            story.append(il(f"eksen_{i}"))

    def s5(story):
        section_header(story, "5. Hassas alanlar onayı",
            "Aşağıdaki bilgiler profile'da kayıtlı; gerçek hayatınla ne kadar uyumlu?")
        hassas = [
            "Diş hekimi kimliği KRİTİK — Estranova yazısında klinisyen otorite MUTLAK YASAK; klinik dekoru / ofis "
            "/ muayene tasviri yazıya GİRMEZ.",
            "Aktif HRT kullanıcısı — birinci elden anlatım Kanal A açık (marka/ilaç/doz YOK).",
            "Estetik deneyim — botoks, filler, laser, IPL, mezoterapi, dermapen düzeyinde denenmiş; cerrahi düzey "
            "deneyimi de var; kabul-dikkat dengesi ile anlatılır.",
            "Boşanma sonrası 50'lerde — mağduriyet değil olgunluk; kendi yapısını yeniden kuran sesi.",
            "Kız Londra'da — boş yuva + HRT eş zamanlı yaşanması; spesifik kimlik bilgisi yazıya girmez.",
            "Sosyal masa kişisi — yüz yüze sohbet, ortak masa, arkadaş aktarımı yazının mercek noktası.",
            "Kapanış arkadaş bağı imzası — Berna doktoruyla, Başak günceyle, Duygu **bir arkadaşıyla** kapatır.",
            "Çift Rol Uyarısı false (Senai Aksoy yakın aile/eşin değil); ama doktor adı CLAUDE.md gereği "
            "gövdeye yazılmaz.",
            "Estranova'da varsayılan değil, konuk katkı yazarı — kategori bazlı atama (HRT akran, estetik kabul, "
            "sosyal masa imzası).",
            "Cesur ton fiziksel yakınlık alanlarında ek sıkılık (pelvik konfor, mahrem konular) — konuyu açma "
            "cesareti var, klinik mekanik tasvir YOK.",
        ]
        for i, h in enumerate(hassas, 1):
            story.append(Paragraph(h, form_question_style))
            story.append(ii(f"hassas_{i}"))

    def s6(story):
        section_header(story, "6. Taslak makale değerlendirmesi",
            "Referans makale: <i>Menopozda Cilt Değişimleri — Aynaya Sakince Bakmak ve Bakım Rehberi</i> "
            "(/beden-yakinlik/cilt-gorunum/menopozda-cilt-degisimleri). Senin sesinde mi yazılmış? Aşağıdaki 8 "
            "katmanı değerlendir.")
        katmanlar = [
            ("Açılış sahnesi — itiraf + akran çerçeveleme",
             "<i>'Bende öyle bir gün oldu — sıradan bir sabah, kahvemi koymuş, makyaj çantasını açmıştım. Aynaya "
             "baktığımda cildim bana yabancı geldi.'</i> Kişisel itiraf + sabah aynası sahnesi sende kalmış mı?"),
            ("'Hekim olarak değil, akran olarak' çerçeveleme — KRİTİK",
             "<i>'Sana hekim olarak değil — Londra ile İstanbul arasında gidip gelen, HRT yolculuğunu yaşayan… "
             "bir akran olarak yazıyorum.'</i> Diş hekimi kimliğini DIŞARDA tutan akran sınırlandırması — bu cümle "
             "her makalede zorunlu omurga olmalı mı?"),
            ("Sosyal masa / Londra-İstanbul gel-git imzası",
             "Yazıda Londra/İstanbul gidip gelme + HRT yolculuğu çerçeveleme. Mercek noktası bağlamında bu yer "
             "doğru mu, daha sık/daha az olmalı mı?"),
            ("Estetik kabul ve dikkat dengesi — advocacy değil",
             "<i>'Açık konuşacağım: yıllar içinde çok ürün denedim.'</i> + <i>'Ben bu kuralı atladığımda bir hafta "
             "kıpkırmızı yürüdüm — kendi deneyimimden söylüyorum, sabırlı başla.'</i> Mezoterapi, IPL, dermapen "
             "değerlendirmesi — denedim/öğrendim tonu sende kalmış mı?"),
            ("Mekanizma yumuşatması — kanıt etiketi + akran ses",
             "Östrojen → bariyer, kolajen, kuruluk; kanıt etiketleri (güçlü/iyi/orta-iyi/sınırlı kanıt). "
             "Doz doğru mu, fazla teknik mi, eksik mi?"),
            ("Vulvovajinal doku — cesur ton + yumuşak çerçeve",
             "<i>'Cilt deyince yüzü düşünüyoruz, yüz dışındaki cildi unutuyoruz; menopozun en az konuştuğumuz cilt "
             "başlığı vulvar ve vajinal doku.'</i> Konuyu açma cesareti + 'jinekoloğumla konuşulduğunda' çerçevesi "
             "sende kalmış mı?"),
            ("HRT cilt etkisi — yumuşak iyileşme dili",
             "<i>'Ben kendi HRT yolculuğumda cildimde yumuşak bir iyileşme hissettim; ama bunu HRT'nin cilt "
             "tedavisi olarak almıyorum.'</i> Bu mesafelendirme sende kalmış mı?"),
            ("Kapanış imzası — aynayla ilişki",
             "<i>'Sade bir konfor, sağlıklı bir bariyer, kendi yansımanla sakince barışmak — bence asıl kazanım "
             "bu. Aynayla ilişkimiz bu yıllarda yeniden kuruluyor; ürün listesi kadar bu ilişki de bakımın "
             "parçası.'</i> Kapanış arkadaş bağı imzası — sende kalmış mı?"),
        ]
        for i, (b, a) in enumerate(katmanlar, 1):
            story.append(Paragraph(f"<b>{b}</b>", form_question_style))
            story.append(Paragraph(a, form_options_style))
            story.append(iu(f"makale_{i}"))

    def s7(story):
        section_header(story, "7. Kanal A — kişisel deneyim açıklığı",
            "Aşağıdaki spesifik kategorilerde Estranova bağlamında rahat mısın? "
            "'Evet bana ait' / 'Yumuşat' / 'Hayır kaldır' işaretle.")
        kanal = [
            "HRT kullanıcı olarak birinci elden anlatım — yaşam-neşesi tonu; spesifik marka/ilaç/doz YASAK.",
            "Estetik deneyim — botoks, filler, laser, IPL, mezoterapi, dermapen düzeyinde 'denedim, öğrendim'.",
            "Cilt değişimi / aynaya bakma / sabah ritüeli — birinci elden itiraf.",
            "Boşanma sonrası 50'lerde yapısal kuruluş — kendine alan açma çerçevesi (kişisel detay yumuşak).",
            "Kız Londra'da, boş yuva — uzaklık-yakınlık çerçevesi (kimlik bilgisi YOK).",
            "Sosyal masa anekdotu — yüz yüze sohbet, arkadaşlarla ortak masa, bir arkadaştan duyulan cümle.",
            "Mahrem konfor / dispareuniya / vulvovajinal değişim — cesur konuyu açma; klinik mekanik tasvir YOK.",
            "Sabah yürüyüşü 'yüz losyonum' tipi kendine ironili çerçeveleme.",
            "Akşam yemeğinde bir arkadaşın itirafı (jinekolojik/cinsel/HRT konularında akran masası).",
            "Kapanış arkadaş bağı imzası — bir arkadaşla kapanış cümlesi.",
            "Kendine dönük hafif ironi — başkasını küçük düşürmeyen, kendine gülüş.",
            "İç çelişki ifşası — cesaret↔temkin, sosyal↔yalnız, anne↔kendi, estetik↔doğallık, HRT↔'doğru karar mı' "
            "gecesi (yıllık 1-2 makalede).",
        ]
        for i, k in enumerate(kanal, 1):
            story.append(Paragraph(k, form_question_style))
            story.append(iu(f"kanal_{i}"))

    def s8(story):
        section_header(story, "8. Eklemek / çıkarmak istediklerin",
            "Profile'da eksik kalan, yanlış vurgulanan, ya da tamamen kaldırılması gereken bir şey var mı?")
        story.append(Paragraph("Eklemek istediğin imza cümle / anekdot / kalıp:", form_open_label_style))
        story.append(ia("acik_ekleme", lines=4, label="Eklemek istediğin imza cümle / anekdot / kalıp"))
        story.append(Paragraph("Çıkarmak / yumuşatmak istediğin tonu, eksen, yasak:", form_open_label_style))
        story.append(ia("acik_cikarma", lines=4, label="Çıkarmak / yumuşatmak istediğin unsur"))
        story.append(Paragraph(
            "Diş hekimi kimliği KRİTİK uyarısı — yazıda klinisyen otoritesi YASAK çerçevesi seninle uyumlu mu? "
            "Eklemek/yumuşatmak istediğin nokta var mı?",
            form_open_label_style))
        story.append(ia("acik_dis_hekimi", lines=4, label="Diş hekimi kimliği uyarısı"))
        story.append(Paragraph(
            "Sosyal masa imzası — yüz yüze sohbet mercek noktası — sende ne ölçüde merkezde? "
            "Daha sık/daha az olmalı mı?",
            form_open_label_style))
        story.append(ia("acik_sosyal_masa", lines=4, label="Sosyal masa imzası ağırlığı"))
        story.append(Paragraph(
            "Boşanma sonrası 50'lerde yeniden kurulma teması — Estranova bağlamında ne ölçüde merkezde olsun? "
            "Yıllık kaç makalede ana eksen?",
            form_open_label_style))
        story.append(ia("acik_bosanma", lines=4, label="Boşanma sonrası tema"))
        story.append(Paragraph(
            "Estranova'da Duygu Karaosmanoğlu sesinin oturmuş olması için en kritik dokunuş ne?",
            form_open_label_style))
        story.append(ia("acik_kritik", lines=4, label="En kritik dokunuş"))
        story.append(Paragraph("Diğer notların (özgür alan):", form_open_label_style))
        story.append(ia("acik_diger", lines=6, label="Diğer notlar / özgür alan"))

    return render_form(
        r"C:\Users\KC3\Downloads\duygu-yazar-dogrulama-formu-interaktif.pdf",
        "Estranova editöryal stil doğrulama formu (interaktif) — Duygu Karaosmanoğlu",
        title, intro, [s1, s2, s3, s4, s5, s6, s7, s8],
    )


# ============================================================
# 3) IŞIK SELİN GÜNCE
# ============================================================

def build_selin_form():
    title = {
        'byline': "Sevgili Selin &nbsp;·&nbsp; Estranova editöryal stil doğrulama formu (interaktif) &nbsp;·&nbsp; 30 Nisan 2026",
        'title': "Yazar Stil Doğrulama Formu — Tıklanabilir Versiyon",
        'pdf_title': "Yazar Stil Doğrulama Formu (interaktif) — Işık Selin Günce",
        'pdf_subject': "Işık Selin Günce profili v2.0 → v2.1 stil doğrulama (tıklanabilir form)",
    }
    intro = [
        "Bu form, Estranova için kuracağımız <i>Işık Selin Günce</i> editöryal sesinin sana ait hissedip "
        "hissetmediğini doğrulamak için. 8 bölüm var; her bölüm ayrı bir katmanı sorguluyor &mdash; "
        "karakter izi, manifesto kalıpları, yasak filtreler, konu eksenleri, hassas alanlar, taslak makale "
        "değerlendirmesi, Kanal A açıklığı ve açık uçlu eklemen.",
        "<b>Bu PDF tıklanabilir.</b> Adobe Reader, Edge, Chrome ya da herhangi bir modern PDF okuyucuda "
        "yuvarlak işaretleri tıklayarak seçim yapabilir, açık uçlu alanlara doğrudan yazabilir, sonra dosyayı "
        "kaydederek geri gönderebilirsin. Referans makale: <i>Perimenopoz Nedir? — Temel Rehber</i> "
        "(estranova.com/hormonal-gecis/perimenopoz/perimenopoz-nedir). 6. bölüm doğrudan bu yazıyı "
        "değerlendirmen üzerine kurulu.",
    ]

    def s1(story):
        section_header(story, "1. Karakter izi cümleleri",
            "Aşağıdaki cümleler senin sesini ne kadar yakalıyor? Her birini 1-5 arası işaretle "
            "(1: hiç bana ait değil, 5: tam bana ait).")
        cumle = [
            "Geçen perde arasında soyunma odasında bir oyuncu arkadaşım, 'Bu ay her şey bir tuhaf, perimenopoz mu acaba?' diye sormuştu.",
            "Adının önce konulduğu değil, çoğunlukla yaşandıktan sonra konulduğu bir geçiş bu.",
            "Tek bir yaşa takılmak yerine bedenin verdiği sinyalleri dinlemek daha anlamlı geliyor — sahnede de hep böyledir aslında: replik tek başına bir şey söylemez, asıl iş bedenin o repliği taşıma biçiminde.",
            "'Geçen ay iyiydim, bu ay ne oldu bana?' cümlesi sahne arkasında çok geçer; aslında biyoloji aynı şeyi anlatıyor.",
            "Bir oyunun perdeleri gibi: sahne aynı, ama ışık değişiyor.",
            "Sahnede bir replik unutursak hemen seyirciye söylemeyiz, ama prova arkadaşımıza söyleriz; bedenle de aynısı: önce paylaşmak, sonra yön bulmak.",
            "Bodrum'a taşındığımızdan beri sabahlarımı yavaşça açmayı öğrendim — ve fark ettim ki, beden bu yavaşlığa hızla minnettar kalıyor.",
            "Sahneye çıkmadan önce nefes alırken fark ettim ki: beden, dinlemeyi bilen bir refakatçidir.",
            "Perimenopoz da 'katlanılması gereken' bir dönem değil; bedeninin yeni dilini öğrenmek için sana açılan bir alan.",
            "Bunu söylerken bir hekim sesi olarak değil, bir akran olarak konuşuyorum.",
        ]
        for i, c in enumerate(cumle, 1):
            story.append(Paragraph(f'&ldquo;{c}&rdquo;', form_question_quote_style))
            story.append(il(f"karakter_{i}"))

    def s2(story):
        section_header(story, "2. Manifesto kalıpları onayı",
            "Profile warm.md §4e'de senin için 6 manifesto kalıbı tanımladım (2 [ISG-K] doğrulanmış + 4 [ISG-T] "
            "tematik türetme). Her biri Estranova'da bir makalede en fazla 1 kez kullanılır. Aşağıdaki kalıplar "
            "imzan olarak doğru mu, yumuşatılmalı mı, kaldırılmalı mı?")
        kaliplar = [
            ("Kalıp 1 — Soyunma odası / sahne arkası açılışı (HARD imza)",
             "'Geçen perde arasında soyunma odasında bir oyuncu arkadaşım…' / 'Sahne arkasında bir akşam bir "
             "kadın bana dedi ki…' Sahne arkası samimiyeti — Estranova'da senin merkezi mercek noktan."),
            ("Kalıp 2 — 'Replik tek başına bir şey söylemez' sahne metaforu",
             "'Sahnede de hep böyledir aslında: replik tek başına bir şey söylemez, asıl iş bedenin o repliği "
             "taşıma biçiminde.' Sahne disiplini → günlük beden farkındalığı köprüsü. Kanonik."),
            ("Kalıp 3 — Bodrum sabahı / şehir-doğa kontrastı",
             "'Bodrum'a taşındığımızdan beri sabahlarımı yavaşça açmayı öğrendim.' Şehir-doğa ritim kontrastı, "
             "İstanbul-Bodrum gel-giti. UYARI: 'herkes taşınmalı / şehir öldürür' Bodrum advocacy MUTLAK YASAK; "
             "sadece RİTİM DEĞİŞİMİ metaforu."),
            ("Kalıp 4 — 'Beden, dinlemeyi bilen bir refakatçidir' kapanış",
             "'Sahneye çıkmadan önce nefes alırken fark ettim ki: beden, dinlemeyi bilen bir refakatçidir.' "
             "Kapanış aforistik: bedeni 'refakatçi' olarak çerçeveleyen mütevazı bilgelik."),
            ("Kalıp 5 — Çocuksuz menopoz akran sesi",
             "'Çocuksuzlukla geçen menopoz başka bir tonu var; ben bu tonu içeriden anlatabilirim.' Estranova'da "
             "az temsil edilen otantik ses (çocuksuz olgunluk). UYARI: çocuksuzluk dayatma MUTLAK YASAK "
             "('yapmamalısın / yanlış tercihtir / iyi ki yapmadım' YOK); anlatılır, dayatılmaz."),
            ("Kalıp 6 — HRT-muğlak otantik ses",
             "'Ben henüz HRT'ye yönelmedim; bu da bir duruş.' Berna sakin-araştırmacı, Başak geç-başlangıç, "
             "Duygu yaşam-neşesi/cesur, Selin **muğlak/henüz değil**. Karar süreci şeffaf, baskısız."),
        ]
        for i, (b, a) in enumerate(kaliplar, 1):
            story.append(Paragraph(f"<b>{b}</b>", form_question_style))
            story.append(Paragraph(a, form_options_style))
            story.append(iu(f"manifesto_{i}"))

    def s3(story):
        section_header(story, "3. Yasak filtreleri onayı",
            "Profile hot.md §4 'asla' listesi + hidden.md 5 KRİTİK gizlilik katmanı. Aşağıdaki yasaklar "
            "makul mü, esnetilmeli mi?")
        yasaklar = [
            "<b>KRİTİK — Tıp dışı + sanat otoritesi YASAK:</b> Sen tıp doktoru DEĞİL, akademisyen DEĞİL, "
            "araştırmacı DEĞİL. 'Klinik olarak…' / 'Araştırmalar gösteriyor…' / 'Tıbben söyleyebilirim…' MUTLAK "
            "YASAK. Tiyatrocu kimliği yazıda otorite çıkışı yapmaz; sahne **dekor**. 'Tiyatrocu olarak söylerim "
            "ki…' MUTLAK YASAK.",
            "<b>5 KRİTİK gizlilik 1 — Ablanın 15 yıllık meme kanseri remisyonu:</b> isim / tanı yılı / tedavi / "
            "klinik adı YOK; sadece duygusal çerçeve ('ailede sağlık geçmişi olunca tarama bilinci sessizce "
            "yerleşir'); tıbbi reçete dili MUTLAK YASAK.",
            "<b>5 KRİTİK gizlilik 2 — Eşin Yunus Günce mahrem alanı:</b> kamuoyunda eşi olarak biliniyor, "
            "ama gerçek mahrem yaşamı / sağlığı yazıya GİRMEZ; 'Karı Koca İşleri' parodi yazıya KAYNAK DEĞİL.",
            "<b>5 KRİTİK gizlilik 3 — Çocuksuzluk dayatma yasağı:</b> anlatılır ama dayatılmaz "
            "('yapmamalısın / yanlış tercihtir / iyi ki yapmadım' abartısı YASAK).",
            "<b>5 KRİTİK gizlilik 4 — Yıldız Kenter doğrudan adı YASAK:</b> anonimleştirilir ('bir hocam' "
            "çerçevesi); Akademi Kenter sadece public bio'da.",
            "<b>5 KRİTİK gizlilik 5 — Bodrum advocacy YASAK:</b> 'herkes taşınmalı / şehir öldürür' YASAK; "
            "Bodrum sadece RİTİM DEĞİŞİMİ metaforu.",
            "Spesifik HRT marka adı / ilaç adı / doz / protokol — Selin HRT-muğlak; karar bekliyor durum, "
            "spesifik yazılmaz.",
            "Spesifik supplement marka / klinik / hekim / cihaz adı — yumuşak çerçeve serbest, isim YASAK.",
            "Doktor / klinisyen otorite tonu ('hastalarımda gözlemliyorum') — MUTLAK YASAK (tıp dışı).",
            "Influencer mucize dili / wellness-pop ('glow', 'detoks', 'reset', 'biohack', 'kraliçe', 'efsane') YASAK.",
            "Lider talimat tonu ('mutlaka yapın', 'şunu deneyin') — yerine davet ('siz de duyduysanız…').",
            "Uluslararası kuruluş / yayın adı (NAMS, Lancet, NEJM, NICE, WHO, ACOG, JAMA, Mayo) gövdede yasak.",
            "Yasak hitaplar: 'canım', 'tatlım', 'kızım', 'abla', 'kızlar' — akran ama hitap değil.",
            "Bohem ton aşırılığı / sanatçı sembolizmi — sahne **dekor** olarak, otorite olarak değil.",
        ]
        for i, y in enumerate(yasaklar, 1):
            story.append(Paragraph(y, form_question_style))
            story.append(ii(f"yasak_{i}"))

    def s4(story):
        section_header(story, "4. Konu eksenleri ağırlığı",
            "Profile'da senin için 8 imza eksen tanımladım. Her birinin senin sesini ne kadar tanımladığını "
            "1-5 arası işaretle.")
        eksenler = [
            ("Çocuksuz menopoz / çocuksuz olgunluk (HARD imza)",
             "Estranova'da az temsil edilen otantik ses. Anlatılır, dayatılmaz."),
            ("Sahne arkası samimiyeti (mercek)",
             "Soyunma odası, perde arası, kostüm değişimi — kadınlar arası akran konuşması. Berna feed, "
             "Gamze sabah mutfak, Başak günce, Duygu masada dinler, Alara saha/doğada, Işık **sahne arkası**."),
            ("Bodrum sabahı / şehir-doğa ritim kontrastı (mercek 2)",
             "İstanbul-Bodrum gel-giti, bedenin iki dilde nefesi. UYARI: Bodrum advocacy YASAK."),
            ("Beden farkındalığı sahne dekor olarak",
             "Sahne disiplini → günlük farkındalık. Tiyatrocu otorite çıkışı YASAK."),
            ("HRT-muğlak otantik ses",
             "'Henüz yönelmedim' rahatlığı; karar süreci şeffaf, baskısız."),
            ("Butik partnerlik (Hürriyet doğrulanmış)",
             "Modern post-romantik dingin ortaklık. UYARI: Eşin Yunus mahrem yaşamı yazıya GİRMEZ."),
            ("Aile sağlık geçmişi — duygusal çerçeve (5 KRİTİK gizlilik 1)",
             "'Ailede sağlık geçmişi olunca tarama bilinci sessizce yerleşir' — abla için isim/tanı/tedavi YOK."),
            ("Yavaş yaşam / sade rutin",
             "Sabah açma, hafif yürüyüş, yavaş başlangıç. Wellness-pop dili olmadan."),
        ]
        for i, (b, a) in enumerate(eksenler, 1):
            story.append(Paragraph(f"<b>{b}</b>", form_question_style))
            story.append(Paragraph(a, form_options_style))
            story.append(il(f"eksen_{i}"))

    def s5(story):
        section_header(story, "5. Hassas alanlar onayı",
            "Aşağıdaki bilgiler profile'da kayıtlı; gerçek hayatınla ne kadar uyumlu?")
        hassas = [
            "Doğum 1979 (2026'da 47 yaş; peri/menopoz geçiş bandında).",
            "Tiyatro Kedi mensubiyeti — sahne arkası mercek yazıya girer; tiyatrocu otorite çıkışı YASAK.",
            "Yıldız Kenter mirası — anonimleştirilmiş ('bir hocam'); Akademi Kenter sadece public bio'da.",
            "2018 evlilik / Eşin Yunus Günce — kamuoyunda eşi; mahrem yaşam yazıya GİRMEZ; 'Karı Koca İşleri' "
            "parodi KAYNAK DEĞİL.",
            "Çocuksuzluk — *'bencil olmadıkları için'* çerçeve; anlatılır, dayatılmaz.",
            "Bodrum'a taşınma — şehir-doğa ritim kontrastı yazıya girer; advocacy YASAK.",
            "Ablanın 15 yıllık meme kanseri remisyonu — duygusal çerçeve serbest; isim/tanı/tedavi/klinik YOK.",
            "HRT-muğlak — 'henüz değil' duruşu birinci elden anlatılabilir.",
            "Tıp dışı kimlik KRİTİK — yazıda klinisyen otoritesi MUTLAK YASAK; sanat otoritesi de YASAK.",
            "Çift Rol Uyarısı false (Senai Aksoy yakın aile/eşin değil).",
        ]
        for i, h in enumerate(hassas, 1):
            story.append(Paragraph(h, form_question_style))
            story.append(ii(f"hassas_{i}"))

    def s6(story):
        section_header(story, "6. Taslak makale değerlendirmesi",
            "Referans makale: <i>Perimenopoz Nedir? — Temel Rehber</i> "
            "(/hormonal-gecis/perimenopoz/perimenopoz-nedir). Senin sesinde mi yazılmış? Aşağıdaki 8 katmanı "
            "değerlendir.")
        katmanlar = [
            ("Açılış sahnesi — soyunma odası anekdotu (HARD imza)",
             "<i>'Geçen perde arasında soyunma odasında bir oyuncu arkadaşım, \"Bu ay her şey bir tuhaf, "
             "perimenopoz mu acaba?\" diye sormuştu.'</i> Sahne arkası açılışı — Estranova omurgan olmalı mı?"),
            ("'Adının önce konulduğu değil…' aforistik mütevazı bilgelik",
             "<i>'Adının önce konulduğu değil, çoğunlukla yaşandıktan sonra konulduğu bir geçiş bu.'</i> "
             "Açılış aforistik tonu sende kalmış mı?"),
            ("Sahne metaforu — 'replik tek başına bir şey söylemez' (Manifesto Kalıp 2)",
             "<i>'Sahnede de hep böyledir aslında: replik tek başına bir şey söylemez, asıl iş bedenin o repliği "
             "taşıma biçiminde.'</i> Sahne disiplini → beden farkındalığı köprüsü — kanonik kalıbın doğrulaması."),
            ("'Bir oyunun perdeleri gibi' — erken/geç evre çerçevelemesi",
             "<i>'Bu dalgalı süreci kabaca ikiye ayırmak, zihinde biraz daha düzenli bir resim çiziyor. Bir "
             "oyunun perdeleri gibi: sahne aynı, ama ışık değişiyor.'</i> Sahne metaforu yumuşatma — sende kalmış mı?"),
            ("Bodrum sabahı (Manifesto Kalıp 3)",
             "<i>'Bodrum'a taşındığımızdan beri sabahlarımı yavaşça açmayı öğrendim — ve fark ettim ki, beden bu "
             "yavaşlığa hızla minnettar kalıyor.'</i> Bodrum sabahı imzası — advocacy çerçevesinden uzak duruyor mu?"),
            ("'Hekim olarak değil, akran olarak' çerçeveleme",
             "<i>'Bunu söylerken bir hekim sesi olarak değil, bir akran olarak konuşuyorum.'</i> Tıp dışı sınır "
             "cümlesi — her makalede zorunlu omurga olmalı mı?"),
            ("Mekanizma yumuşatması — kanıt etiketi",
             "Hormonal dalgalanma, FSH/LH/östrojen/progesteron, vasomotor belirtiler için '(güçlü kanıt)' / "
             "'(iyi-güçlü kanıt)' parantez etiketleri. Doz doğru mu, fazla teknik mi, eksik mi?"),
            ("Kapanış — 'beden, dinlemeyi bilen bir refakatçidir' (Manifesto Kalıp 4)",
             "<i>'Sahneye çıkmadan önce nefes alırken fark ettim ki: beden, dinlemeyi bilen bir refakatçidir.'</i> + "
             "<i>'Perimenopoz da \"katlanılması gereken\" bir dönem değil; bedeninin yeni dilini öğrenmek için "
             "sana açılan bir alan.'</i> Kapanış aforistik tonu — sende kalmış mı?"),
        ]
        for i, (b, a) in enumerate(katmanlar, 1):
            story.append(Paragraph(f"<b>{b}</b>", form_question_style))
            story.append(Paragraph(a, form_options_style))
            story.append(iu(f"makale_{i}"))

    def s7(story):
        section_header(story, "7. Kanal A — kişisel deneyim açıklığı",
            "Aşağıdaki spesifik kategorilerde Estranova bağlamında rahat mısın?")
        kanal = [
            "Soyunma odası / perde arası anekdotu — sahne arkası akran konuşması.",
            "Sahne disiplini → beden farkındalığı köprüsü — sahne dekor olarak.",
            "Bodrum sabahı — şehir-doğa ritim kontrastı (advocacy YOK; ritim metaforu).",
            "Çocuksuz olgunluk birinci elden — anlatılır, dayatılmaz.",
            "HRT-muğlak / 'henüz değil' duruşu — kararsızlık birinci elden.",
            "Butik partnerlik / modern post-romantik ortaklık — Hürriyet doğrulanmış kamuoyu çerçevesi; "
            "mahrem yaşam YOK.",
            "Aile sağlık geçmişi duygusal çerçeve — ablanın varlığı (isim/tanı/tedavi/klinik YOK).",
            "Sabah yavaş açma / hafif yürüyüş / yavaş rutin — Bodrum'da.",
            "'Bencil olmadıkları için' çocuksuzluk çerçevesi — kişisel + ailenin değerlendirmesi (dayatma YOK).",
            "Anonim 'bir hocam' Yıldız Kenter mirası — sahne hocası referansı (isim YOK).",
            "Kendine dönük hafif ironi — sahne dekoru olarak.",
            "Mütevazı kanıt — atıf yapmıyorsun ama 'yumuşak referans' (araştırmalar gösteriyor) serbest.",
        ]
        for i, k in enumerate(kanal, 1):
            story.append(Paragraph(k, form_question_style))
            story.append(iu(f"kanal_{i}"))

    def s8(story):
        section_header(story, "8. Eklemek / çıkarmak istediklerin",
            "Profile'da eksik kalan, yanlış vurgulanan, ya da tamamen kaldırılması gereken bir şey var mı?")
        story.append(Paragraph("Eklemek istediğin imza cümle / anekdot / kalıp:", form_open_label_style))
        story.append(ia("acik_ekleme", lines=4, label="Eklemek istediğin imza cümle / anekdot / kalıp"))
        story.append(Paragraph("Çıkarmak / yumuşatmak istediğin tonu, eksen, yasak:", form_open_label_style))
        story.append(ia("acik_cikarma", lines=4, label="Çıkarmak / yumuşatmak istediğin unsur"))
        story.append(Paragraph(
            "Tıp dışı + sanat otoritesi yasağı — yazıda 'klinik olarak / araştırmalar gösteriyor / tiyatrocu olarak' "
            "MUTLAK YASAK çerçevesi seninle uyumlu mu? Eklemek/yumuşatmak istediğin nokta var mı?",
            form_open_label_style))
        story.append(ia("acik_otorite", lines=4, label="Tıp dışı + sanat otoritesi yasağı"))
        story.append(Paragraph(
            "Çocuksuzluk dayatma yasağı — 'yapmamalısın / yanlış tercihtir / iyi ki yapmadım' YASAK; "
            "anlatılır dayatılmaz çerçeve. Yıllık kaç makalede çocuksuz olgunluk merkezi eksen olsun?",
            form_open_label_style))
        story.append(ia("acik_cocuksuzluk", lines=4, label="Çocuksuzluk teması"))
        story.append(Paragraph(
            "5 KRİTİK gizlilik katmanı (abla / Yunus / Yıldız Kenter / Bodrum advocacy / çocuksuzluk dayatma) "
            "— eklemek/değiştirmek istediğin nokta var mı?",
            form_open_label_style))
        story.append(ia("acik_gizlilik", lines=4, label="5 KRİTİK gizlilik katmanı"))
        story.append(Paragraph(
            "Estranova'da Işık Selin Günce sesinin oturmuş olması için en kritik dokunuş ne?",
            form_open_label_style))
        story.append(ia("acik_kritik", lines=4, label="En kritik dokunuş"))
        story.append(Paragraph("Diğer notların (özgür alan):", form_open_label_style))
        story.append(ia("acik_diger", lines=6, label="Diğer notlar / özgür alan"))

    return render_form(
        r"C:\Users\KC3\Downloads\selin-yazar-dogrulama-formu-interaktif.pdf",
        "Estranova editöryal stil doğrulama formu (interaktif) — Işık Selin Günce",
        title, intro, [s1, s2, s3, s4, s5, s6, s7, s8],
    )


# ============================================================
# 4) DEMET KIZILKAYA
# ============================================================
# NOT: Demet'in modüler profili henüz yok (writers/demet-kizilkaya/ dizini
# yok); sadece src/data/writers.ts kayıt var. Bu nedenle form, profile'ın
# kuruluşuna katkı sağlayacak bir baseline niteliği taşır — yazarın
# cevapları ile v1 modüler profil oluşturulacak.

def build_demet_form():
    title = {
        'byline': "Sevgili Demet &nbsp;·&nbsp; Estranova editöryal stil doğrulama formu (interaktif) &nbsp;·&nbsp; 30 Nisan 2026",
        'title': "Yazar Stil Doğrulama Formu — Tıklanabilir Versiyon",
        'pdf_title': "Yazar Stil Doğrulama Formu (interaktif) — Demet Kızılkaya",
        'pdf_subject': "Demet Kızılkaya profili — modüler v1 baseline (tıklanabilir form)",
    }
    intro = [
        "Bu form, Estranova için kuracağımız <i>Demet Kızılkaya</i> editöryal sesinin sana ait hissedip "
        "hissetmediğini doğrulamak için. 8 bölüm var; her bölüm ayrı bir katmanı sorguluyor &mdash; "
        "karakter izi, imza kalıpları, yasak filtreler, konu eksenleri, hassas alanlar, taslak makale "
        "değerlendirmesi, Kanal A açıklığı ve açık uçlu eklemen.",
        "Senin için modüler profil dosyaları henüz oluşturulmadı; cevapların doğrudan profilin <b>v1 "
        "kuruluşunda</b> kullanılacak. <b>Bu PDF tıklanabilir.</b> Adobe Reader, Edge, Chrome ya da herhangi "
        "bir modern PDF okuyucuda yuvarlak işaretleri tıklayarak seçim yapabilir, açık uçlu alanlara doğrudan "
        "yazabilir, sonra dosyayı kaydederek geri gönderebilirsin. Referans makale: <i>HRT — İlk Altı Ayın "
        "Notları</i> (estranova.com/hormonal-gecis/menopoz/hrt-ilk-alti-ay). 6. bölüm doğrudan bu yazıyı "
        "değerlendirmen üzerine kurulu.",
    ]

    def s1(story):
        section_header(story, "1. Karakter izi cümleleri",
            "Aşağıdaki cümleler senin sesini ne kadar yakalıyor? Her birini 1-5 arası işaretle "
            "(1: hiç bana ait değil, 5: tam bana ait).")
        cumle = [
            "Geçen pazartesi sabahı çayımı demlerken aklıma geldi: dört aydır küçük bir jel ve akşam alınan bir kapsül, mutfak tezgâhımın bir köşesinde sessizce duruyor.",
            "Bu yazıyı yazmaya karar vermem de o andan başladı. Çünkü başlamadan önce, en çok aradığım şey bu küçük rutinin nasıl bir hisle taşındığıydı.",
            "Menopoz benim için bir noktada başladı, bir başka noktada bedenimi çağırmaya başladı. İkisi aynı şey değildi.",
            "O kararı bedenim verdi; ben yalnızca dinledim.",
            "Annemin kuşağı bu konuları neredeyse hiç konuşmadan geçirmişti; benim kuşağım yarı sessiz, yarı utangaç bir şekilde adım atıyor; kızımın kuşağı çok daha açık konuşacak.",
            "Üç kuşağın aynı eşikte üç farklı duruşu… ve bu, hem teselli hem de küçük bir gurur veriyor.",
            "Japon kültüründe bir kavram var: ma. Tam çevirisi 'boşluk' değil, ama 'iki şey arasındaki anlamlı aralık.'",
            "Bedenin hormonal denge bulması bir ma dönemi. Doldurulması gereken bir boşluk değil; içine yerleşilmesi gereken bir aralık.",
            "Hormonal denge tek bir hapla 'kurulan' bir şey değil; yeniden müzakere edilen bir şey.",
            "Akran hikayeleri rehber değildir; bir başlangıç noktasıdır.",
        ]
        for i, c in enumerate(cumle, 1):
            story.append(Paragraph(f'&ldquo;{c}&rdquo;', form_question_quote_style))
            story.append(il(f"karakter_{i}"))

    def s2(story):
        section_header(story, "2. İmza kalıpları onayı",
            "Profile baseline'ı kurarken senin için 7 olası imza kalıbı tanımlıyoruz. Aşağıdaki kalıplar imzan "
            "olarak doğru mu, yumuşatılmalı mı, kaldırılmalı mı?")
        kaliplar = [
            ("Kalıp 1 — Mutfak tezgâhı / sabah çayı açılışı (HARD imza)",
             "'Geçen pazartesi sabahı çayımı demlerken aklıma geldi…' Günlük yaşam gözlemiyle başlayan, mutfak "
             "anekdotu ile genişleyen sabit açılış."),
            ("Kalıp 2 — 'Sıcağı sıcağına anlatıyorum' akran şeffaflığı",
             "'Ben şimdi tam o yerde duruyorum — ve sıcağı sıcağına anlatabilirim.' / 'Annemin/kızımın kuşağı…' "
             "kuşak köprüsü içinde kendi pozisyonunu açıkça belirleme."),
            ("Kalıp 3 — Üç kuşak köprüsü (anne / ben / kız)",
             "'Annemin kuşağı bu konuları neredeyse hiç konuşmadan geçirmişti; benim kuşağım yarı sessiz, yarı "
             "utangaç bir şekilde adım atıyor; kızımın kuşağı çok daha açık konuşacak.' Sessizlikten paylaşıma "
             "geçişin akran sesi."),
            ("Kalıp 4 — Japon kültürü kavramı yumuşak referans",
             "'Japon kültüründe bir kavram var: ma…' Tek-konsept-bir-anekdot. Gündelik yaşama dokuduğun, "
             "abartmadan, kısa ve sıcak. UYARI: kültürel referansı dışlayıcı dile çevirme YASAK."),
            ("Kalıp 5 — Eş / kız / aile sıcaklığı çerçevesi",
             "'Eşim ilk başta sessiz bir endişe içindeydi…' / 'Kızım — şimdi yirmili yaşlarında — beni daha sakin "
             "gördüğünü söyledi.' Yakın çevre desteğini görünür kılan satırlar."),
            ("Kalıp 6 — 'Sürekli güncellenen bir konuşma' HRT yolu",
             "'Tek bir karar değil, sürekli güncellenen bir konuşma.' HRT'yi sabit reçete değil, devam eden bir "
             "müzakere olarak çerçeveleyen ses."),
            ("Kalıp 7 — Akran hikayesi mütevazılığı (kapanış)",
             "'Akran hikayeleri rehber değildir; bir başlangıç noktasıdır. Senin yolun benimkinden farklı "
             "olabilir — ve farklı olması doğaldır.' Kapanış: kendi yolunu ön plana çıkarmadan, akran sesini "
             "sınırlandırma."),
        ]
        for i, (b, a) in enumerate(kaliplar, 1):
            story.append(Paragraph(f"<b>{b}</b>", form_question_style))
            story.append(Paragraph(a, form_options_style))
            story.append(iu(f"imza_{i}"))

    def s3(story):
        section_header(story, "3. Yasak filtreleri onayı",
            "Profile baseline'ı kurarken aşağıdaki yasakları öneriyoruz (writers.ts kayıtlı 'donts' + Estranova "
            "CLAUDE.md HARD CONSTRAINT). Aşağıdaki yasaklar makul mü, esnetilmeli mi?")
        yasaklar = [
            "Doktor / klinisyen otorite tonu ('hastalarımda gözlemliyorum', 'klinik tecrübemde') — sen klinisyen "
            "değilsin, akransın.",
            "Spesifik HRT marka adı / ilaç adı / doz / protokol — kişisel deneyim Kanal A açık ama spesifik "
            "isim/doz YASAK ('küçük bir jel', 'akşam alınan bir kapsül' yumuşak çerçeve serbest).",
            "Spesifik supplement marka / klinik / hekim / cihaz adı — yumuşak çerçeve serbest, isim YASAK.",
            "Kültürel referansı dışlayıcı dile çevirme ('Japonlar şöyle akıllı', 'Türkler ise…') — yumuşak köprü, "
            "abartmadan, gündelik hayata bağlayarak.",
            "Kendi deneyimini tek doğru yol gibi sunma ('benim yolum doğru', 'herkes böyle yapsın') — akran "
            "sınırlandırması zorunlu.",
            "Melodramatik / aşırı nostaljik ton ('o eski güzel günler', 'hayatım altüst oldu') — sade, sakin gözlem.",
            "Influencer mucize dili ('hayatımı değiştirdi', 'mucize', 'genç gösterdi', 'kraliçe') — sade dil.",
            "Wellness-pop ('detoks', 'reset', 'glow', 'biohack', 'bütünsel') — sade akran dili.",
            "Lider talimat tonu ('mutlaka yapın', 'şunu deneyin') — yerine davet, paylaşım.",
            "Spesifik klinik / hekim adı — yumuşak çerçeve ('hekimimle birlikte') serbest, isim YASAK.",
            "Türkiye-Japonya kıyaslama coşkulu sıfatları ('orada ne kadar iyi', 'biz neden böyleyiz') — yumuşak "
            "gözlem, kıyaslama değil.",
            "Lüks gastronomi / destinasyon / restoran adı — anonim çerçeve.",
            "Uluslararası kuruluş / yayın adı (NAMS, Lancet, NEJM, NICE, WHO, ACOG, JAMA, Mayo) gövdede yasak.",
            "Yasak hitaplar: 'canım', 'tatlım', 'kızım', 'abla', 'kızlar' — candan ama hitap değil.",
        ]
        for i, y in enumerate(yasaklar, 1):
            story.append(Paragraph(y, form_question_style))
            story.append(ii(f"yasak_{i}"))

    def s4(story):
        section_header(story, "4. Konu eksenleri ağırlığı",
            "Senin için 8 olası imza eksen tanımlıyoruz. Her birinin senin sesini ne kadar tanımladığını "
            "1-5 arası işaretle.")
        eksenler = [
            ("HRT akran hikayesi (HARD imza — yaşam-deneyim ekseni)",
             "Aktif HRT kullanan 58 yaşında bir kadının ilk aylarından / yıllarından notlar. Berna sakin, "
             "Başak geç-başlangıç, Duygu yaşam-neşesi, Demet **candan akran**."),
            ("Üç kuşak köprüsü (anne / ben / kız)",
             "Sessizlikten paylaşıma geçen kuşak farkı; aile sıcaklığı çerçevesi."),
            ("Japon kültürü yumuşak referansı",
             "Japon Dış Ticaret Teşkilatı yıllarından gelen iki kültür gözlemi; kavram, gelenek, gündelik nezaket "
             "abartmadan dokunan ses."),
            ("Aile sıcaklığı / eş / kız / anne çerçevesi",
             "Yakın çevre desteğini görünür kılan satırlar; mahrem detaylar değil, var olan bağ."),
            ("Gündelik nezaket / sade rutin",
             "Küçük, nazik, sürdürülebilir adımlar. Sabah çayı, akşam çayı, kısa yürüyüş."),
            ("Sakin gözlem / bekleme yapısı",
             "Hızlı reçete değil; gözlem, dinleme, zamanla yerleşme. 'İçine yerleşilmesi gereken bir aralık.'"),
            ("Akran sınırlandırması / mütevazılık",
             "'Akran hikayeleri rehber değildir; bir başlangıç noktasıdır.' Kendi yolunu ön plana çıkarmadan."),
            ("Beslenme / kültürel mutfak köprüsü",
             "Turpgiller, fermente, mevsim sebzesi — Japon mutfak deneyiminden gelen sade beslenme bağlamları."),
        ]
        for i, (b, a) in enumerate(eksenler, 1):
            story.append(Paragraph(f"<b>{b}</b>", form_question_style))
            story.append(Paragraph(a, form_options_style))
            story.append(il(f"eksen_{i}"))

    def s5(story):
        section_header(story, "5. Hassas alanlar onayı",
            "Aşağıdaki bilgiler writers.ts'de kayıtlı; gerçek hayatınla ne kadar uyumlu? Bu cevaplar v1 modüler "
            "profilin temelini kuracak.")
        hassas = [
            "58 yaş (2026'da). HRT kullanıcısı — birinci elden anlatım Kanal A açık.",
            "İngilizce öğretmenliği mezunu — eğitim arka planı.",
            "Uzun yıllar Japonya Dış Ticaret Teşkilatı'nın İstanbul ofisinde çalıştın — iki kültürü yakından "
            "izledin.",
            "Eş, kız (yirmili yaşlarında), anne (kuşak köprüsü) — aile sıcaklığı çerçevesi.",
            "Estetik uygulama / cilt bakımı konularında deneyim varsa — 'denedim, öğrendim' çerçevesinde "
            "(advocacy değil) yazılabilir.",
            "Çift Rol Uyarısı false (Senai Aksoy yakın aile/eşin değil); ama hekim adı CLAUDE.md gereği "
            "gövdeye yazılmaz.",
            "Estranova'da konuk katkı yazarı — kategori bazlı atama (HRT akran, kuşak köprüsü, kültür merceği).",
            "HRT yolculuğunu paylaşan akran ses — ilk 6 ay, sonraki aylar, yıllar. Sürekli güncellenen bir konuşma.",
            "Türkiye seyahat / Japonya seyahat (varsa) anekdotları — anonim çerçeve, lüks/lokal isim YOK.",
            "Aile sağlık geçmişi (varsa) — duygusal çerçeve serbest, klinik detay YASAK.",
        ]
        for i, h in enumerate(hassas, 1):
            story.append(Paragraph(h, form_question_style))
            story.append(ii(f"hassas_{i}"))

    def s6(story):
        section_header(story, "6. Taslak makale değerlendirmesi",
            "Referans makale: <i>HRT — İlk Altı Ayın Notları</i> (/hormonal-gecis/menopoz/hrt-ilk-alti-ay). "
            "Senin sesinde mi yazılmış? Aşağıdaki 8 katmanı değerlendir.")
        katmanlar = [
            ("Açılış sahnesi — mutfak tezgâhı / sabah çayı",
             "<i>'Geçen pazartesi sabahı çayımı demlerken aklıma geldi: dört aydır küçük bir jel ve akşam alınan "
             "bir kapsül, mutfak tezgâhımın bir köşesinde sessizce duruyor.'</i> Mutfak anekdotu açılışı sende "
             "kalmış mı?"),
            ("Karar verme süreci — 'O kararı bedenim verdi; ben yalnızca dinledim'",
             "<i>'Bir noktada — eşimle bir akşam yemeğinde, kızımın yoğun bir haftasında, kendi annemin bakım "
             "rutininde — sürekli kısık ateşte yanan bir yorgunluğun altında olduğumu fark ettim. O kararı "
             "bedenim verdi; ben yalnızca dinledim.'</i> Karar mütevazılığı sende kalmış mı?"),
            ("Üç kuşak köprüsü",
             "<i>'Annemin kuşağı bu konuları neredeyse hiç konuşmadan geçirmişti; benim kuşağım yarı sessiz, "
             "yarı utangaç bir şekilde adım atıyor; kızımın kuşağı çok daha açık konuşacak.'</i> Kuşak köprüsü "
             "imzası — bu çerçeveleme her HRT/menopoz yazısında zorunlu omurga olmalı mı?"),
            ("Japon kültürü 'ma' kavramı — yumuşak referans",
             "<i>'Japon kültüründe bir kavram var: ma. Tam çevirisi \"boşluk\" değil, ama \"iki şey arasındaki "
             "anlamlı aralık.\" Müzikte iki nota arasındaki sessizlik, bir bahçede iki taş arasındaki yer…'</i> "
             "Tek konsept anekdotu, abartmadan, gündelik hayata bağlayarak — sende kalmış mı?"),
            ("HRT teknik notları — 'jel uygulamasıyla ilgili üç küçük nokta'",
             "Yazıda jel kuruma süresi, yıkama tamponu, partner dokunma süresi anlatılıyor. Bu **teknik detaylar** "
             "akran şeffaflığı çerçevesinde yararlı mı, yoksa CLAUDE.md spesifik protokol yasağı kapsamında "
             "yumuşatılmalı mı?"),
            ("Eş / kız çerçevesi — aile sıcaklığı",
             "<i>'Eşim ilk başta sessiz bir endişe içindeydi…' / 'Kızım — şimdi yirmili yaşlarında — beni daha "
             "sakin gördüğünü söyledi.'</i> Aile sıcaklığı görünürlüğü sende kalmış mı?"),
            ("Mekanizma yumuşatması — kanıt etiketi",
             "Yazıda '(güçlü kanıt)', '(iyi kanıt)', '(orta-iyi kanıt)' parantez etiketleri var. WHI 2002 "
             "atıfı yumuşak ama 'önde gelen uluslararası kadın sağlığı kuruluşları' ifadesi geniş çerçeve. "
             "Doz doğru mu, fazla teknik mi, eksik mi?"),
            ("Kapanış — 'Akran hikayeleri rehber değildir' mütevazılığı",
             "<i>'Akran hikayeleri rehber değildir; bir başlangıç noktasıdır. Senin yolun benimkinden farklı "
             "olabilir — ve farklı olması doğaldır.'</i> Kapanış mütevazılığı sende kalmış mı?"),
        ]
        for i, (b, a) in enumerate(katmanlar, 1):
            story.append(Paragraph(f"<b>{b}</b>", form_question_style))
            story.append(Paragraph(a, form_options_style))
            story.append(iu(f"makale_{i}"))

    def s7(story):
        section_header(story, "7. Kanal A — kişisel deneyim açıklığı",
            "Aşağıdaki spesifik kategorilerde Estranova bağlamında rahat mısın?")
        kanal = [
            "HRT kullanıcı olarak birinci elden anlatım — candan akran tonu; spesifik marka/ilaç/doz YASAK.",
            "Karar verme süreci anlatımı — 'henüz değil' yıllarından 'şimdi' yıllarına geçiş.",
            "Üç kuşak köprüsü — anne kuşağı sessizlik, ben yarı-sessiz, kız kuşağı açık konuşma.",
            "Japon kültürü kavramı / gelenek / gündelik nezaket — sade, abartmadan.",
            "Eş ile karar süreci paylaşımı — 'doğru karar mı?' endişesinden 'daha az yorgunsun' geri bildirimine.",
            "Kız ile yetişkin ilişki — 'beni daha sakin gördüğünü söyledi' tipi sıcak kayıt.",
            "Mutfak / sabah çayı / akşam alınan kapsül — günlük rutin sahnesi.",
            "Aile bakım rutini — annenin bakım rutini bağlamında öz-değerlendirme.",
            "Seyahat anekdotu (Japonya, Türkiye) — anonim çerçeve, mekan/restoran adı YOK.",
            "Beslenme / mutfak köprüsü (turpgiller, mevsim sebzesi, fermente) — kültürel arka plan.",
            "Aile sağlık geçmişi (varsa) — duygusal çerçeve, klinik detay YOK.",
            "Kendine dönük hafif gözlem / kuşak içinde mütevazılık.",
        ]
        for i, k in enumerate(kanal, 1):
            story.append(Paragraph(k, form_question_style))
            story.append(iu(f"kanal_{i}"))

    def s8(story):
        section_header(story, "8. Eklemek / çıkarmak istediklerin",
            "Modüler profil v1 dosyaların kurulurken eksik kalan, yanlış vurgulanan ya da tamamen kaldırılması "
            "gereken bir şey var mı? Aşağıdaki kutulara doğrudan yazabilirsin.")
        story.append(Paragraph("Eklemek istediğin imza cümle / anekdot / kalıp:", form_open_label_style))
        story.append(ia("acik_ekleme", lines=4, label="Eklemek istediğin imza cümle / anekdot / kalıp"))
        story.append(Paragraph("Çıkarmak / yumuşatmak istediğin tonu, eksen, yasak:", form_open_label_style))
        story.append(ia("acik_cikarma", lines=4, label="Çıkarmak / yumuşatmak istediğin unsur"))
        story.append(Paragraph(
            "Japonya'daki uzun yıllarından gelen başka bir kavram, gelenek veya günlük nezaket örneği "
            "Estranova'ya katmak ister misin? (yıllık yaklaşık kaç makalede yumuşak referans yer alsın?)",
            form_open_label_style))
        story.append(ia("acik_japon", lines=4, label="Japon kültür referansları"))
        story.append(Paragraph(
            "Üç kuşak köprüsü (anne / sen / kız) — Estranova'da ne ölçüde merkezde olsun? Annenin / kızının "
            "spesifik kimlik bilgilerinin yazıya girme sınırını sen nasıl çiziyorsun?",
            form_open_label_style))
        story.append(ia("acik_kusak", lines=4, label="Üç kuşak köprüsü"))
        story.append(Paragraph(
            "HRT teknik notları (jel uygulaması, doz atlamama, eşine dokunmama gibi) makalede ne ölçüde "
            "spesifik konuşulsun? Akran şeffaflığı vs. profesyonel reçete sınırı sende nasıl çiziliyor?",
            form_open_label_style))
        story.append(ia("acik_hrt_teknik", lines=4, label="HRT teknik detay sınırı"))
        story.append(Paragraph(
            "Estranova'da Demet Kızılkaya sesinin oturmuş olması için en kritik dokunuş ne?",
            form_open_label_style))
        story.append(ia("acik_kritik", lines=4, label="En kritik dokunuş"))
        story.append(Paragraph("Diğer notların (özgür alan):", form_open_label_style))
        story.append(ia("acik_diger", lines=6, label="Diğer notlar / özgür alan"))

    return render_form(
        r"C:\Users\KC3\Downloads\demet-yazar-dogrulama-formu-interaktif.pdf",
        "Estranova editöryal stil doğrulama formu (interaktif) — Demet Kızılkaya",
        title, intro, [s1, s2, s3, s4, s5, s6, s7, s8],
    )


# ============================================================
if __name__ == "__main__":
    import os
    builds = [
        ("Berna",  build_berna_form),
        ("Duygu",  build_duygu_form),
        ("Selin",  build_selin_form),
        ("Demet",  build_demet_form),
    ]
    print("Estranova yazar stil doğrulama formları (interaktif) üretiliyor...")
    print()
    for name, fn in builds:
        path = fn()
        size = os.path.getsize(path) / 1024
        print(f"[OK] {name:<7s} : {path}  ({size:.1f} KB)")
    print()
    print("Her form, ilgili yazara sitedeki referans makale URL'siyle birlikte gönderilebilir.")
