# -*- coding: utf-8 -*-
"""
Alara Baykent — yazar stil doğrulama formu (interaktif).

Çıktı:
    C:\\Users\\KC3\\Downloads\\alara-yazar-dogrulama-formu-interaktif.pdf

Akış:
    Yazara önce yayın taslağı PDF'i ile birlikte
    "C:\\Users\\KC3\\Downloads\\aksam-hareketi-uyku-melatonin.pdf"
    bu form gönderilir. Yazar makaleyi okuduktan sonra forma dönüp
    her bölümü tıklanabilir radio + multiline text alanları ile
    işaretler.

Profile referans: writers/alara-baykent/ (v2.0; modüler — Aşama 2 5/7)
    profile.yaml + hot.md (§4 + §5c) + warm.md (§4b) + cold.md +
    hidden.md (§5b + §5b ek aile rızalı görünürlük çerçevesi).
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

registerFontFamily('Constantia',
                   normal='Constantia', bold='Constantia-Bold',
                   italic='Constantia-Italic', boldItalic='Constantia-BoldItalic')
registerFontFamily('Calibri',
                   normal='Calibri', bold='Calibri-Bold',
                   italic='Calibri-Italic', boldItalic='Calibri-BoldItalic')

# Estranova palette
burgundy        = HexColor('#6B2D3E')
deep_burgundy   = HexColor('#4f171c')
gold            = HexColor('#C9A96E')
dark_gray       = HexColor('#2D2D2D')
light_gray      = HexColor('#888888')
very_light_gray = HexColor('#B5B0A8')
form_bg         = HexColor('#FAF6EE')


# Styles
byline_style = ParagraphStyle(
    'Byline', fontName='Calibri-Italic', fontSize=9, textColor=light_gray,
    alignment=TA_RIGHT, spaceAfter=14, leading=12,
)
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
inline_disclaimer_style = ParagraphStyle(
    'InlineDisclaimer', fontName='Calibri-Italic', fontSize=10, textColor=light_gray,
    leading=14, spaceBefore=10, spaceAfter=12, alignment=TA_LEFT,
    leftIndent=10, rightIndent=10,
)


# Footer canvas (page numbers + soft gold line)
class FooterCanvas(canvas.Canvas):
    def __init__(self, *args, footer_text="Estranova editöryal stil doğrulama formu (interaktif) — Alara Baykent", **kwargs):
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


# Interactive widgets — page-absolute coords (AcroForm widget reqs)

class InteractiveLikert(Flowable):
    """5 noktalı tıklanabilir likert (radio group — tek seçim)."""
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

    def wrap(self, _aw, _ah):
        return self.width, self.height

    def drawOn(self, c, x, y, _sW=0):
        col_width = 3.1 * cm
        for i, (val, label) in enumerate(self.options):
            ax = x + i * col_width
            ay = y + 4
            c.acroForm.radio(
                name=self.name, value=val, selected=False,
                x=ax, y=ay, size=11, buttonStyle='circle',
                borderColor=burgundy, fillColor=HexColor('#ffffff'),
                textColor=deep_burgundy, borderWidth=0.7,
                forceBorder=True, tooltip=label,
            )
            c.setFont('Calibri', 9)
            c.setFillColor(dark_gray)
            c.drawString(ax + 16, ay + 3, label)


class InteractiveTriple(Flowable):
    """3 seçenek: Evet — bana ait / Yumuşat / Hayır — kaldır."""
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

    def wrap(self, _aw, _ah):
        return self.width, self.height

    def drawOn(self, c, x, y, _sW=0):
        col_width = 5.2 * cm
        for i, (val, label) in enumerate(self.options):
            ax = x + i * col_width
            ay = y + 4
            c.acroForm.radio(
                name=self.name, value=val, selected=False,
                x=ax, y=ay, size=11, buttonStyle='circle',
                borderColor=burgundy, fillColor=HexColor('#ffffff'),
                textColor=deep_burgundy, borderWidth=0.7,
                forceBorder=True, tooltip=label,
            )
            c.setFont('Calibri', 9.5)
            c.setFillColor(dark_gray)
            c.drawString(ax + 16, ay + 3, label)


class InteractiveDouble(Flowable):
    """2 seçenek: Doğru / Yanlış."""
    def __init__(self, name):
        Flowable.__init__(self)
        self.name = name
        self.options = [
            ("dogru", "Doğru / kabul"),
            ("yanlis", "Yanlış / değiştir"),
        ]
        self.height = 22
        self.width = 16*cm

    def wrap(self, _aw, _ah):
        return self.width, self.height

    def drawOn(self, c, x, y, _sW=0):
        col_width = 7.7 * cm
        for i, (val, label) in enumerate(self.options):
            ax = x + i * col_width
            ay = y + 4
            c.acroForm.radio(
                name=self.name, value=val, selected=False,
                x=ax, y=ay, size=11, buttonStyle='circle',
                borderColor=burgundy, fillColor=HexColor('#ffffff'),
                textColor=deep_burgundy, borderWidth=0.7,
                forceBorder=True, tooltip=label,
            )
            c.setFont('Calibri', 9.5)
            c.setFillColor(dark_gray)
            c.drawString(ax + 16, ay + 3, label)


class InteractiveTextArea(Flowable):
    """Multiline tıklanabilir text alanı."""
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
        c.acroForm.textfield(
            name=self.name,
            tooltip=self.label or "Yanıtınızı buraya yazın",
            x=x, y=y + 2,
            width=15.5 * cm, height=self.height - 6,
            borderStyle='solid', borderColor=very_light_gray,
            fillColor=HexColor('#FAFAF8'), textColor=dark_gray,
            borderWidth=0.5, forceBorder=True,
            fontName='Helvetica', fontSize=10,
            fieldFlags='multiline',
        )


def il(name): return InteractiveLikert(name)
def iu(name): return InteractiveTriple(name)
def ii(name): return InteractiveDouble(name)
def ia(name, lines=4, label=None): return InteractiveTextArea(name, line_count=lines, label=label)


def section_header(story, num_title, lede):
    story.append(Paragraph(num_title, form_section_style))
    story.append(HRFlowable(width=2.5*cm, thickness=1.5, color=gold,
                            hAlign='LEFT', spaceBefore=2, spaceAfter=10))
    story.append(Paragraph(lede, form_section_lede_style))


# ============================================================
# FORM
# ============================================================

def build_form():
    story = []

    story.append(Paragraph(
        "Sevgili Alara &nbsp;·&nbsp; Estranova editöryal stil doğrulama formu (interaktif) &nbsp;·&nbsp; 30 Nisan 2026",
        byline_style
    ))

    story.append(Paragraph(
        "Yazar Stil Doğrulama Formu — Tıklanabilir Versiyon",
        form_title_style
    ))
    story.append(HRFlowable(width=3.2*cm, thickness=2, color=gold,
                            hAlign='LEFT', spaceBefore=8, spaceAfter=6))

    story.append(Paragraph(
        "Bu form, Estranova için kuracağımız <i>Alara Baykent</i> editöryal sesinin sana ait hissedip "
        "hissetmediğini doğrulamak için. 8 bölüm var; her bölüm ayrı bir katmanı sorguluyor &mdash; "
        "karakter izi, imza kalıpları, yasak filtreler, konu eksenleri, hassas alanlar, taslak makale "
        "değerlendirmesi, Kanal A açıklığı ve açık uçlu eklemen.",
        form_intro_style
    ))
    story.append(Paragraph(
        "<b>Bu PDF tıklanabilir.</b> Adobe Reader, Edge, Chrome ya da herhangi bir modern PDF okuyucuda "
        "yuvarlak işaretleri tıklayarak seçim yapabilir, açık uçlu alanlara doğrudan yazabilir, sonra dosyayı "
        "kaydederek geri gönderebilirsin. Sana ayrıca gönderdiğimiz "
        "<i>aksam-hareketi-uyku-melatonin.pdf</i> taslak makaleyi okuduktan sonra bu forma dönmek en pratik "
        "akış olacak; 6. bölüm doğrudan o yazıyı değerlendirmen üzerine kurulu.",
        form_intro_style
    ))

    # ============================================================
    # 1) Karakter izi cümleleri
    # ============================================================
    section_header(story, "1. Karakter izi cümleleri",
        "Aşağıdaki cümleler senin sesini ne kadar yakalıyor? Her birini 1-5 arası işaretle "
        "(1: hiç bana ait değil, 5: tam bana ait). Tıkla, seç."
    )

    karakter_cumleleri = [
        "Geçen yaz bir akşam, atımı ahıra erken bıraktım. Hava hâlâ aydınlıktı; eve dönerken birkaç tur hızlı yürüyüş yaptım. O gece üçte uyandım.",
        "Sporun bana öğrettiği şu: beden, sandığımızdan çok daha sadık bir kayıt tutuyor.",
        "Atçılıkla geçen bu yıllarda öğrendiğim bir şey var: at, antrenmandan sonra hemen ahıra çekilip yatmaz; bir süre yürür, terini bırakır, soğuması için kendine zaman tanır.",
        "Ben henüz 30'larımın başındayım; perimenopozun içinden geçmedim. Ama annem nesli bana bir şeyi açıkça gösterdi.",
        "Annemle akşam yürüyüşlerimizden gözlemim de bu yönde — eskiden saat dokuzda biten yürüyüş onu rahat uyutuyordu; şimdi yedi-yedi buçukta bitirmesi gerekiyor.",
        "Ben yaşamadım ama yakından gördüm.",
        "Atımı sabah ahıra götürdüğümde — ortalık daha sersem, hava soğuk, ahır kapısı henüz açılmış — kendi enerjimin akşam nasıl kapanacağını çoğu zaman o saatten öğreniyorum.",
        "Akran kuşağımdan sıkça duyduğum 'spor sonrası dünyalar benim oluyor ama gece üçte uyanıyorum' cümlesi, çoğu zaman bu denklemin işareti.",
        "Beden kendi takvimini söylüyor, biz sadece dinleyebiliyoruz.",
        "Sabahını nasıl başlattığını gözlemlemek, akşam uykunun nasıl geleceğini bilmenin en sessiz yolu.",
    ]
    for i, c in enumerate(karakter_cumleleri, 1):
        story.append(Paragraph(f'&ldquo;{c}&rdquo;', form_question_quote_style))
        story.append(il(f"karakter_{i}"))

    # ============================================================
    # 2) İmza kalıpları
    # ============================================================
    section_header(story, "2. İmza kalıpları onayı",
        "Profile §4 + §4b'de senin için 7 imza kalıbı tanımladım. Her biri Estranova'da bir makalede "
        "1-2 kez kullanılır. Aşağıdaki kalıplar imzan olarak doğru mu, yumuşatılmalı mı, kaldırılmalı mı?"
    )

    imza_kaliplari = [
        ("Kalıp 1 — Saha/doğa anekdotu açılışı (HARD imza)",
         "Sabah ahır, atımla bir an, windsurf bordu, doğada bir yürüyüş — kişisel yer/zaman çapasıyla açılış. "
         "Her makalede en az 1 saha/doğa sahnesi. 'Atımla sabah ahırda…' / 'Geçen yaz bir akşam atımı erken bıraktım…'"),
        ("Kalıp 2 — Akran ama mütevazı çerçeveleme",
         "'Ben yaşamadım ama yakından gördüm' / 'Henüz benim dönemim değil; ama annemin döneminde olmayan "
         "bir şey bende var: bilgi.' Yaşı 30-31; menopoz deneyimi yok — bu mütevazı sınırlandırma her makalede "
         "açıkça konumlandırılır."),
        ("Kalıp 3 — Sporcu beden okuma transferi",
         "'Sporcu olarak bedenimi takip etmek bana şunu öğretti…' / 'Sporun bana öğrettiği şu: beden, sandığımızdan "
         "çok daha sadık bir kayıt tutuyor.' Voleybol → windsurf → binicilik zincirinden gelen vücut okuma "
         "disiplini hormonal/uyku/enerji konularına köprü kurar."),
        ("Kalıp 4 — Anne/abla gözlemcisi",
         "'Annemin neslinden öğrendiklerim…' / 'Annemle akşam yürüyüşlerimizden gözlemim de bu yönde…' / "
         "'Annem geçen ay söyledi…' Kendi yaşamadığını, gözlemleyerek öğrendiğini açıkça çerçeveler. Yıllık "
         "2-3 makalede merkezi eksen; daha sık makalelerde ikincil bağ."),
        ("Kalıp 5 — At ↔ insan beden paralelliği",
         "'Atın akşam soğuma ritmiyle bizim bedenimizin termostatı çoğu zaman aynı dilde konuşuyor.' / "
         "'At, antrenmandan sonra hemen ahıra çekilip yatmaz — bir süre yürür, terini bırakır, soğuması için "
         "kendine zaman tanır.' Atçılık merceği üzerinden hayvan ↔ insan beden köprüsü; uyku, sirkadyen ritim, "
         "stres regülasyonu, enerji yönetimi konularında doğal organik geçiş."),
        ("Kalıp 6 — 'İlk başta merak ettim, sonra denedim' meraklı keşifçi",
         "'İlk başta merak ettim, sonra denedim…' / 'Bir ara fark ettim ki…' Voleybol → windsurf → binicilik "
         "zincirinin ruhu: yaparım, öğrenirim, paylaşırım. Anti-aging deneyim anlatımında, yeni rutin denemelerinde "
         "doğal açılış (advocacy değil, deneyim çerçevesinde)."),
        ("Kalıp 7 — Saha/doğa kapanış imgesi (iki parçalı kapanış)",
         "Önce konumun sınırlandırılması ('Ben yaşamadım ama yakından gördüm.' / 'Henüz benim dönemim değil…'), "
         "sonra saha/doğa sahnesinden bir kapanış imgesi ('Atımı sabah ahıra götürdüğümde…' / 'Sahile inen güneş, "
         "atımı düşündüren bir cümle…'). İki parça yeter; üçüncü zorunlu değil."),
    ]
    for i, (baslik, aciklama) in enumerate(imza_kaliplari, 1):
        story.append(Paragraph(f"<b>{baslik}</b>", form_question_style))
        story.append(Paragraph(aciklama, form_options_style))
        story.append(iu(f"imza_{i}"))

    # ============================================================
    # 3) Yasak filtreleri
    # ============================================================
    section_header(story, "3. Yasak filtreleri onayı",
        "Profile'da hot.md §4 'asla' listesi + cold.md §8 'uzak durulanlar' var. Aşağıdaki yasaklar makul mü, "
        "esnetilmeli mi?"
    )

    yasaklar = [
        "<b>KRİTİK — yaş sınırı:</b> Menopoz deneyimini 'ben de yaşadım' kalıbı YASAK. Yaşı uygun değil "
        "(30-31). Onun yerine 'Annemin neslinden öğrendiklerim' / 'Ben henüz yaşamıyorum ama hazırlanıyorum' / "
        "sporcu beden okuma transferi.",
        "Doktor / klinisyen tonu ('hastalarımda gözlemliyorum', 'klinik tecrübemde', 'tıbben söyleyebilirim') — "
        "sen klinisyen değilsin, akran sporcu/yazarsın.",
        "Anti-aging mucize dili ('hayatımı değiştirdi', 'genç gösterdi', 'mucize') — Kore krem ve laser peeling "
        "deneyim anlatımında bile YASAK; deneyim paylaşımı tonu serbest, advocacy yok.",
        "Spesifik marka / ürün / klinik / cihaz / hekim adı (krem markası, laser cihazı, klinik ismi, "
        "hekim ismi) — yumuşak çerçeve serbest ('bir Kore krem rutini', 'bir laser uygulaması'), spesifik isim YASAK.",
        "'Herkes yaptırsın' / 'sen de Kore kremi kullan' / 'mutlaka denemelisin' advocacy kalıbı — yerine "
        "'ben denedim, bana şöyle geldi' deneyim çerçevesi.",
        "At yarışı / dressage / jumping teknik detayı YASAK (Estranova teması değil; at Alara'nın hayatında "
        "yaşam ritmi ve terapötik bağ olarak gelir, yarış branşı olarak değil).",
        "Veteriner / hayvan sağlığı tıbbi içerik YASAK (kadın sağlığı platformuna uygun değil).",
        "Coşkulu hyperbol sıfatlar ('muhteşem', 'harika', 'süper', 'kraliçe', 'efsane', 'inanılmaz') — sade "
        "sporcu dili.",
        "Yakınlarının deneyimini 'ben de bilirim' tonuyla devralma — annenin yaşadığını birinci tekil sahiplenmek "
        "YASAK; gözlemci tonu zorunlu.",
        "Spor performansı yüceltme / 'ben yaptım, siz de yapın' yapısı — sade akran tonu.",
        "Uluslararası kuruluş / yayın adı (NAMS, Lancet, NEJM, NICE, WHO, ACOG, JAMA, Mayo, USPSTF) gövdede "
        "YASAK; yumuşak referans serbest ('araştırmalar gösteriyor', 'uzmanlar genellikle belirtiyor').",
        "Ünlem işareti, emoji, üç noktanın dramatik kullanımı — Alara mizajı sade, az süslü.",
        "Yasak hitaplar: 'canım', 'tatlım', 'kızım', 'abla', 'kızlar' — akran ama mütevazı, hitap değil.",
        "<b>AİLE RIZALI GÖRÜNÜRLÜK ÇERÇEVESİ — 5 sınır MUTLAK:</b> Otistik üvey kardeş + babasının yeni eşi yazıya "
        "girebilir (aile rızası belgeli — Cumhuriyet yazısı sonrası iletilen mesaj), AMA: (1) ergen kimliği "
        "(isim/okul/fotoğraf/sosyal medya/akademik durum) YOK, (2) klinik tanı detayı (terapi adı, tanı seviyesi, "
        "ilaç adı, davranış spesifikleri) YOK, (3) araç-haline-getirme ('X sayesinde Y öğrendim' formülü) YOK, "
        "(4) genelleme ('otistikler şöyledir') YOK, (5) yakının iç dünyası varsayım temsili ('aslında şöyle hissediyor') YOK.",
        "Engellilik / otizm dernek / vakıf / fon adı gövdede YOK; advokasi tonu ('X derneğine bağışta bulunabilirsiniz') YOK.",
        "Babasının yeni eşi için kimlik ifşası (isim / fotoğraf / spesifik kişisel detay) — rıza var olsa bile "
        "yetişkin gizliliği gereği YOK.",
    ]
    for i, y in enumerate(yasaklar, 1):
        story.append(Paragraph(y, form_question_style))
        story.append(ii(f"yasak_{i}"))

    # ============================================================
    # 4) Konu eksenleri ağırlığı
    # ============================================================
    section_header(story, "4. Konu eksenleri ağırlığı",
        "Profile'da senin için 8 imza eksen tanımladım. Her birinin senin sesini ne kadar tanımladığını "
        "1-5 arası işaretle."
    )

    eksenler = [
        ("Sporcu beden okuma (HARD imza)",
         "Voleybol → windsurfing → binicilik zincirinden gelen vücut okuma disiplini; kendi bedeninde olmasa "
         "bile yarışma/antrenman döngüsünden gelen okuma."),
        ("Hayvan / at-merkezli yaşam — atçılık merceği (HARD imza)",
         "Cumhuriyet Pazar Eki haftalık at/hayvan yazıları kanıtlı editöryal track record. Ahır rutini, atın "
         "temposu, köpeklerle yürüyüş — kadın sağlığına organik köprü."),
        ("Sabah rutini + sirkadyen ritim + doğa ışığı",
         "Atçılık üzerinden doğa ışığı, sabah erken kalkma, dışarıda olma — uyku, enerji, hormonal denge bağlamı."),
        ("Anne / abla / kuşak gözlemcisi (akran ama mütevazı)",
         "'Annemin neslinden öğrendiklerim…' / 'Henüz yaşamıyorum ama hazırlanıyorum…' Hormonal geçişe "
         "erken farkındalık, gözlemci perspektif."),
        ("Anti-aging ve cilt bakımı deneyim anlatımı",
         "Kore cilt bakımı, laser peeling, anti-aging — 'denedim, öğrendim, paylaşıyorum' çerçevesinde; "
         "advocacy değil, deneyim paylaşımı."),
        ("Sporcu kadın perspektifi (PMS, adet düzeni, performans)",
         "Antrenman döngüsü ile adet düzeni ilişkisi, performans/dinlenme, sporcu beden disiplini."),
        ("Doğa, açık hava, dışarı pratikleri (atçılık üzerinden)",
         "Yoğun şehir hayatından ayrılma, ahır / dışarı / doğa ile temas — kadın sağlığı stres regülasyonu kesişimi."),
        ("Aile rızalı görünürlük — engelli/nörodivergan kesişim ekseni (yeni)",
         "Otistik üvey kardeş + babasının yeni eşi yazıya girebilir (rıza belgeli). Bakım yükü, kuşak, görünmez "
         "emek, sessizlik karşıtlığı kesişiminde — saf engellilik politikasına kaymadan. 4-6/yıl doğal sıklık."),
    ]
    for i, (baslik, aciklama) in enumerate(eksenler, 1):
        story.append(Paragraph(f"<b>{baslik}</b>", form_question_style))
        story.append(Paragraph(aciklama, form_options_style))
        story.append(il(f"eksen_{i}"))

    # ============================================================
    # 5) Hassas alanlar
    # ============================================================
    section_header(story, "5. Hassas alanlar onayı",
        "Aşağıdaki bilgiler profile'da kayıtlı; gerçek hayatınla ne kadar uyumlu?"
    )

    hassas_alanlar = [
        "Doğum: 1995 (2026'da 30-31 yaş bandı). Menopoz deneyimi YOK; 'ben de yaşadım' kalıbı MUTLAK YASAK.",
        "Spor geçmişi: adolesan dönem büyük kulüplerin alt yapısında voleybol; sonra profesyonel windsurfing "
        "(PWA World Tour, 2012-2015); ardından binicilik. 1. seviye antrenörlük sertifikası.",
        "2026 yaz: Alaçatı'da windsurf eğitmenliği planı.",
        "Cumhuriyet Pazar Eki'nde haftalık köşe — at ve hayvan dünyası odaklı (gerçek editöryal track record).",
        "Hayat arkadaşları: 1 at (günlük bakım + binicilik rutini), 3 köpek, papağanlar, 1 kumru — hayvanlara "
        "derin bağlılık yazı kimliğinin merkezinde.",
        "Aileye düşkün; anne/abla/anneanne ekseninde gözlem yapma alışkanlığı.",
        "Anti-aging kişisel deneyimi: Kore cilt bakımı rutinleri + yakın zamanda yüz içi laser peeling "
        "(deneyim anlatımı çerçevesinde, advocacy değil).",
        "Babasının yeni eşi + onun otistik ergen oğlu (Alara'nın üvey kardeşi) — aile, Cumhuriyet Pazar Eki'ndeki "
        "yazından sonra sana bizzat 'sessizlik değil paylaşım' mesajı iletti; aile rızalı görünürlük çerçevesi "
        "yazıya açık (5 sınır dahilinde).",
        "Çift Rol Uyarısı false: Doç. Dr. Senai Aksoy senin yakın aile / eşin değil. (Berna ve Gamze için aktif "
        "olan Çift Rol Uyarısı sende aktif değil.)",
        "Estranova'da varsayılan değil, konuk katkı yazarı (kategori bazlı atama: zamansiz-yasam çekirdek, "
        "beden-yakinlik atletik, bilimsel-pencere spor bilimi).",
    ]
    for i, h in enumerate(hassas_alanlar, 1):
        story.append(Paragraph(h, form_question_style))
        story.append(ii(f"hassas_{i}"))

    # ============================================================
    # 6) Taslak makale değerlendirmesi
    # ============================================================
    section_header(story, "6. Taslak makale değerlendirmesi",
        "Sana gönderdiğimiz <i>aksam-hareketi-uyku-melatonin.pdf</i> &mdash; başlığı &ldquo;Akşam Hareketinin "
        "Uykuya Etkisi: Melatonin ve Serin Vücut&rdquo; &mdash; senin sesinde mi yazılmış? Aşağıdaki 8 katmanı "
        "değerlendir. Her katman sende kalmış mı, fazla mı, eksik mi?"
    )

    makale_katmanlari = [
        ("Açılış sahnesi — saha/doğa anekdotu",
         "<i>'Geçen yaz bir akşam, atımı ahıra erken bıraktım. Hava hâlâ aydınlıktı, saat sekizdi; eve dönerken "
         "birkaç tur hızlı yürüyüş yaptım… O gece üçte uyandım.'</i> Saha/doğa anekdotu açılışı (HARD imza) "
         "burada doğru tonal omurga mı?"),
        ("At ↔ insan beden paralelliği — atçılık merceği",
         "<i>'At, antrenmandan sonra hemen ahıra çekilip yatmaz — bir süre yürür, terini bırakır, soğuması için "
         "kendine zaman tanır. İnsan bedeninde de süreç benzer.'</i> Atın akşam soğuma ritmi ↔ insan termostatı "
         "paralelliği — bu metafor sende kalmış mı, fazla mı?"),
        ("Bilim cümlesi yumuşatması — Evidence + akran ton",
         "Yazıda Evidence işaretleri var: <i>(güçlü kanıt) (iyi kanıt) (orta-iyi kanıt)</i>. Akran tonunda "
         "mekanizma açıklaması (termoregülasyon, melatonin, sirkadyen ritim) — doz doğru mu, fazla teknik mi, eksik mi?"),
        ("Annem gözlemi bölümü — akran ama mütevazı",
         "<i>'Ben henüz 30'larımın başındayım; perimenopozun içinden geçmedim. Ama annem nesli bana bir şeyi "
         "açıkça gösterdi.'</i> + <i>'Annem geçen ay söyledi: Eskiden saat dokuzda biten yürüyüş beni rahat "
         "uyutuyordu; şimdi yedi-yedi buçukta bitirmem gerekiyor.'</i> Anne gözlemcisi tonu ve birinci ağızdan "
         "annem alıntısı sende kalmış mı?"),
        ("Üç senaryo yapısı — sürdürülebilir mini plan",
         "Sabah erkenci / Öğle arası / Akşam erkenci üç esnek senaryo. Tek tip reçete yerine üç pencere — bu "
         "yapı (talimat değil davet, 'hangisi hayatına oturuyorsa') Estranova'da sürdürülmeli mi?"),
        ("FAQ 5 soru — at binme dahil kişiselleştirilmiş",
         "5 SSS: yatma süresi tamponu / yoga ve nefes egzersizi / <b>at binmek veya ahırda geçen vakit uykuya "
         "yardımcı mı?</b> / sıcak basması yaşıyorsam akşam egzersizi / kromotip. At binme sorusu Alara'ya özel "
         "konu-özelliği — derinliği ve ton sana ait mi?"),
        ("Saha/doğa kapanışı — iki parçalı imza",
         "<i>'Ben henüz perimenopozun içinde değilim; bu yazıdaki gözlemlerin bir kısmı annem nesli ile akran "
         "kuşağımdan duyduklarımın özeti…'</i> + <i>'Atımı sabah ahıra götürdüğümde — ortalık daha sersem, hava "
         "soğuk, ahır kapısı henüz açılmış — kendi enerjimin akşam nasıl kapanacağını çoğu zaman o saatten "
         "öğreniyorum. Sabahını nasıl başlattığını gözlemlemek, akşam uykunun nasıl geleceğini bilmenin en sessiz "
         "yolu.'</i> İki parçalı kapanış (sınırlandırma + saha sahnesi) Estranova omurgası olarak sürmeli mi?"),
        ("Akran ama mütevazı çerçeveleme — HARD imza",
         "Yazı boyunca hiçbir cümle 'menopoz deneyimini ben de yaşadım' tonuna kaymıyor; <i>'Ben yaşamadım ama "
         "yakından gördüm.'</i> + <i>'Bedenin dilini değiştirmediğini, sadece daha net konuştuğunu öğreniyorum "
         "onu izleyerek.'</i> Bu mütevazı sınırlandırma her makalede zorunlu omurga olmalı mı?"),
    ]
    for i, (baslik, aciklama) in enumerate(makale_katmanlari, 1):
        story.append(Paragraph(f"<b>{baslik}</b>", form_question_style))
        story.append(Paragraph(aciklama, form_options_style))
        story.append(iu(f"makale_{i}"))

    # ============================================================
    # 7) Kanal A — kişisel deneyim açıklığı
    # ============================================================
    section_header(story, "7. Kanal A — kişisel deneyim açıklığı",
        "Aşağıdaki spesifik kategorilerde Estranova bağlamında rahat mısın? Her kategori için "
        "'evet bana ait' / 'yumuşat' / 'hayır kaldır' işaretle."
    )

    kanal_a = [
        "Atçılık sabah ahır rutini — birinci elden anlatım (atımı ahıra erken bıraktım, sabah çıkardım).",
        "Sporcu beden okuma — voleybol/windsurf/binicilik zincirinden gelen vücut okuma disiplini (birinci elden).",
        "Anne ile akşam yürüyüşü gözlemi — somut sahne ('annem geçen ay söyledi' tipi alıntı dahil).",
        "Akran kuşağından duyulan cümle — 'Akran kuşağımdan sıkça duyduğum…' / 'jimde tanıdığım bir abla geçen gün dedi ki…'",
        "Windsurf bordu / saha sahnesi (yaz mevsimi).",
        "Köpekler, atlar, kuşlarla bir an — sessiz hayvan paralelliği.",
        "Anti-aging kişisel deneyim (Kore krem rutini, laser peeling) — 'denedim, öğrendim' çerçevesinde, "
        "marka adı YOK.",
        "Adet düzeni / PMS — sporcu kadın perspektifinde, antrenman döngüsüyle.",
        "Anneanne / büyük kadın bilgeliği anekdotu — somut sahne (mutfakta sıcak bastığı ânı, ilaç kutusu).",
        "Otistik üvey kardeş + babasının yeni eşi (aile rızalı görünürlük çerçevesinde): yakının varlığını anma, "
        "sessizlik karşıtlığı tonu, birlikte geçen anlar — 5 sınır dahilinde.",
        "Cumhuriyet Pazar Eki köşesinden düşen bir not — yazı sürecinin kendisinden kesit.",
        "Atın temposu ↔ kendi ritmin paralelliği (sirkadyen ritim, sabah erken kalkma).",
    ]
    for i, k in enumerate(kanal_a, 1):
        story.append(Paragraph(k, form_question_style))
        story.append(iu(f"kanal_{i}"))

    # ============================================================
    # 8) Açık uçlu eklemeler
    # ============================================================
    section_header(story, "8. Eklemek / çıkarmak istediklerin",
        "Profile'da eksik kalan, yanlış vurgulanan, ya da tamamen kaldırılması gereken bir şey var mı? "
        "Aşağıdaki kutulara <b>doğrudan yazabilirsin</b> &mdash; cümle, anekdot, kalıp, yasak, tema fark etmez."
    )

    story.append(Paragraph("Eklemek istediğin imza cümle / anekdot / kalıp:", form_open_label_style))
    story.append(ia("acik_ekleme", lines=4, label="Eklemek istediğiniz imza cümle / anekdot / kalıp"))

    story.append(Paragraph("Çıkarmak / yumuşatmak istediğin tonu, eksen, yasak:", form_open_label_style))
    story.append(ia("acik_cikarma", lines=4, label="Çıkarmak / yumuşatmak istediğiniz unsur"))

    story.append(Paragraph(
        "Atçılık merceği sende ne ölçüde merkezde — daha sık mı gelmeli, daha az mı, başka bir hayvan/saha "
        "anekdotu da ekleyelim mi?",
        form_open_label_style
    ))
    story.append(ia("acik_atcilik", lines=4, label="Atçılık merceği yorumu"))

    story.append(Paragraph(
        "'Annem nesli' gözlemci konumu sana doğru hissettiriyor mu? Anne / abla / anneanne arasında "
        "ağırlığı değiştirmemiz gerekir mi?",
        form_open_label_style
    ))
    story.append(ia("acik_anne_gozlem", lines=4, label="Annem nesli gözlemci tonu"))

    story.append(Paragraph(
        "Aile rızalı görünürlük çerçevesi (otistik üvey kardeş + babasının yeni eşi) — Estranova bağlamında "
        "kullanım sıklığı ve sınırları seninle uyumlu mu? Eklemek/değiştirmek istediğin bir nokta var mı?",
        form_open_label_style
    ))
    story.append(ia("acik_aile_rizali", lines=4, label="Aile rızalı görünürlük çerçevesi notu"))

    story.append(Paragraph(
        "Estranova'da Alara Baykent sesinin oturmuş olması için en kritik dokunuş ne?",
        form_open_label_style
    ))
    story.append(ia("acik_kritik", lines=4, label="En kritik dokunuş"))

    story.append(Paragraph("Diğer notların (özgür alan):", form_open_label_style))
    story.append(ia("acik_diger", lines=6, label="Diğer notlar / özgür alan"))

    # Footer note
    story.append(Spacer(1, 0.6*cm))
    story.append(HRFlowable(width=16*cm, thickness=0.4, color=very_light_gray,
                            spaceBefore=8, spaceAfter=8))
    story.append(Paragraph(
        "<i>Form doldurulduğunda &ldquo;Kaydet&rdquo; ile geri gönderilir; cevaplar profil dosyalarının "
        "(profile.yaml + hot.md + warm.md + cold.md + hidden.md) yenilenmesinde kullanılır. Senin imzan "
        "v2.1'e taşınır. Cevaplar Estranova'nın yayın kalitesi için içeriden veridir, dışarıyla paylaşılmaz.</i>",
        inline_disclaimer_style
    ))

    output_path = r"C:\Users\KC3\Downloads\alara-yazar-dogrulama-formu-interaktif.pdf"
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=2.5*cm, rightMargin=2.5*cm,
        topMargin=2*cm, bottomMargin=2.5*cm,
        title="Yazar Stil Doğrulama Formu (interaktif) — Alara Baykent",
        author="Estranova editöryal pipeline",
        subject="Alara Baykent profili v2.0 → v2.1 stil doğrulama (tıklanabilir form)",
        creator="Estranova editöryal pipeline",
    )

    def make_canvas(*args, **kwargs):
        return FooterCanvas(
            *args,
            footer_text="Estranova editöryal stil doğrulama formu (interaktif) — Alara Baykent",
            **kwargs,
        )

    doc.build(story, canvasmaker=make_canvas)
    return output_path


if __name__ == "__main__":
    import os

    print("Alara Baykent stil doğrulama formu (interaktif) üretiliyor...")
    print()
    p = build_form()
    s = os.path.getsize(p) / 1024
    print(f"[OK] Dogrulama formu (interaktif) : {p}  ({s:.1f} KB)")
    print()
    print("Bu form, sana zaten gönderilmiş olan")
    print("  C:\\Users\\KC3\\Downloads\\aksam-hareketi-uyku-melatonin.pdf")
    print("taslak makale ile birlikte yazara iletilmek üzere hazırlandı.")
