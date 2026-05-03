# -*- coding: utf-8 -*-
"""
Estranova editöryal tipografide bilim yazarları davet/onboarding belgesi PDF üretimi.

Output: icerik/onboarding/bilim-yazarlari-davet.pdf

Kaynak: icerik/onboarding/bilim-yazarlari-davet.md (paralel manuel yazım)

Sabit kalanlar (Estranova editöryal tipografi pattern'i):
  - A4 sayfa, 2.5/2 cm kenar boşlukları
  - Constantia (serif) + Calibri (sans-serif) — Windows sistem fontları
  - Palette: burgundy (#6B2D3E / #4f171c), gold (#C9A96E), dark_gray (#2D2D2D)
  - H1 + gold ayraç
  - H2 = küçük gold rakam + başlık + gold ayraç
  - Gövde Calibri 11pt, satır yüksekliği 1.5
  - Tablolar: burgundy başlık, cream satır, gold ayraçlar
  - Footer: gold ince çizgi + disclaimer + sayfa numarası

Kanonik referans: memory/reference_estranova_pdf_typography.md
"""

from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, ListFlowable, ListItem,
)
from reportlab.platypus.flowables import HRFlowable, KeepTogether
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
BURGUNDY = HexColor('#6B2D3E')
BURGUNDY_DEEP = HexColor('#4f171c')
GOLD = HexColor('#C9A96E')
GOLD_DEEP = HexColor('#a8884c')
DARK_GRAY = HexColor('#2D2D2D')
INK = HexColor('#2D2D2D')
INK_70 = HexColor('#5e5e5e')
INK_55 = HexColor('#7a7a7a')
CREAM_WARM = HexColor('#F8F2EA')
CREAM_SOFT = HexColor('#FAF6EE')
WHITE = HexColor('#FFFFFF')

# --- Styles ---
def style(name, **kwargs):
    base = dict(
        name=name,
        fontName='Calibri',
        fontSize=11,
        leading=16,
        textColor=INK,
        alignment=TA_LEFT,
        spaceBefore=0,
        spaceAfter=8,
    )
    base.update(kwargs)
    return ParagraphStyle(**base)

EYEBROW = style('Eyebrow',
                fontName='Calibri-Bold',
                fontSize=8,
                leading=12,
                textColor=BURGUNDY,
                spaceAfter=6,
                alignment=TA_LEFT)

H1 = style('H1',
           fontName='Constantia-Bold',
           fontSize=28,
           leading=34,
           textColor=BURGUNDY_DEEP,
           spaceBefore=0,
           spaceAfter=10)

H1_COVER = style('H1Cover',
                 fontName='Constantia-Bold',
                 fontSize=34,
                 leading=42,
                 textColor=BURGUNDY_DEEP,
                 spaceAfter=14,
                 alignment=TA_LEFT)

H2 = style('H2',
           fontName='Constantia-Bold',
           fontSize=18,
           leading=24,
           textColor=BURGUNDY,
           spaceBefore=18,
           spaceAfter=10)

H3 = style('H3',
           fontName='Constantia-Bold',
           fontSize=14,
           leading=20,
           textColor=BURGUNDY,
           spaceBefore=14,
           spaceAfter=6)

LEDE = style('Lede',
             fontName='Constantia-Italic',
             fontSize=12,
             leading=18,
             textColor=BURGUNDY,
             spaceAfter=12)

BODY = style('Body',
             fontName='Calibri',
             fontSize=10.5,
             leading=16,
             textColor=INK,
             spaceAfter=8)

BODY_LARGE = style('BodyLarge',
                   fontName='Calibri',
                   fontSize=11.5,
                   leading=18,
                   textColor=INK,
                   spaceAfter=10)

QUOTE = style('Quote',
              fontName='Constantia-Italic',
              fontSize=12,
              leading=20,
              textColor=BURGUNDY,
              leftIndent=14,
              spaceBefore=8,
              spaceAfter=14)

LIST_ITEM = style('ListItem',
                  fontName='Calibri',
                  fontSize=10.5,
                  leading=16,
                  textColor=INK,
                  leftIndent=14,
                  spaceAfter=4)

SIGNATURE = style('Signature',
                  fontName='Constantia-Italic',
                  fontSize=11,
                  leading=16,
                  textColor=BURGUNDY,
                  spaceBefore=12,
                  spaceAfter=4,
                  alignment=TA_LEFT)

FOOTER_NOTE = style('FooterNote',
                    fontName='Calibri-Italic',
                    fontSize=9,
                    leading=13,
                    textColor=INK_55,
                    alignment=TA_LEFT)

# --- Custom canvas: footer + page number ---
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
        self.drawString(2*cm, 1.1*cm,
            'Estranova · Bilim Yazarları Davet Belgesi · v1.0 · 3 Mayıs 2026')
        self.setFont('Calibri', 8)
        self.setFillColor(BURGUNDY)
        self.drawRightString(A4[0]-2*cm, 1.1*cm,
            f'Sayfa {self._pageNumber} / {page_count}')

# --- Helpers ---
def gold_rule(width=4*cm, thickness=1.5):
    return HRFlowable(width=width, thickness=thickness, color=GOLD,
                      spaceBefore=2, spaceAfter=14, hAlign='LEFT')

def soft_rule(width=None, thickness=0.4):
    return HRFlowable(width=width, thickness=thickness, color=GOLD,
                      spaceBefore=14, spaceAfter=14, hAlign='CENTER')

def section_h2(number, title):
    """H2 with gold number prefix + title + gold rule below."""
    eyebrow_text = f'<font color="#a8884c">{number:02d}</font> &nbsp;&nbsp;<font color="#6B2D3E">{title.upper()}</font>'
    return [
        Paragraph(eyebrow_text, EYEBROW),
        Paragraph(title, H2),
        gold_rule(width=3*cm, thickness=1.2),
    ]

def section_h3(title):
    return Paragraph(title, H3)

def lede(text):
    return Paragraph(text, LEDE)

def p(text, st=BODY):
    return Paragraph(text, st)

def bullets(items, indent=12):
    flowables = []
    for item in items:
        flowables.append(Paragraph(f'<font color="#C9A96E">•</font>&nbsp;&nbsp;{item}', LIST_ITEM))
    return flowables

def numbered(items):
    flowables = []
    for idx, item in enumerate(items, 1):
        flowables.append(Paragraph(f'<font color="#a8884c"><b>{idx}.</b></font>&nbsp;&nbsp;{item}', LIST_ITEM))
    return flowables

def two_col_table(rows, col_widths=None, header=False):
    """Simple 2-column table with Estranova styling."""
    if col_widths is None:
        col_widths = [4.5*cm, 11*cm]
    t = Table(rows, colWidths=col_widths, repeatRows=1 if header else 0)
    style = TableStyle([
        ('FONTNAME', (0,0), (-1,-1), 'Calibri'),
        ('FONTSIZE', (0,0), (-1,-1), 9.5),
        ('TEXTCOLOR', (0,0), (-1,-1), INK),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
        ('LINEBELOW', (0,0), (-1,-1), 0.3, GOLD),
    ])
    if header:
        style.add('FONTNAME', (0,0), (-1,0), 'Calibri-Bold')
        style.add('TEXTCOLOR', (0,0), (-1,0), BURGUNDY)
        style.add('LINEBELOW', (0,0), (-1,0), 1, GOLD)
        style.add('BACKGROUND', (0,0), (-1,0), CREAM_WARM)
    style.add('FONTNAME', (0,0 if not header else 1), (0,-1), 'Calibri-Bold')
    style.add('TEXTCOLOR', (0,0 if not header else 1), (0,-1), BURGUNDY)
    t.setStyle(style)
    return t

def three_col_table(rows, col_widths=None, header=False):
    if col_widths is None:
        col_widths = [3.5*cm, 6*cm, 6*cm]
    t = Table(rows, colWidths=col_widths, repeatRows=1 if header else 0)
    style = TableStyle([
        ('FONTNAME', (0,0), (-1,-1), 'Calibri'),
        ('FONTSIZE', (0,0), (-1,-1), 9.5),
        ('TEXTCOLOR', (0,0), (-1,-1), INK),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 7),
        ('BOTTOMPADDING', (0,0), (-1,-1), 7),
        ('LEFTPADDING', (0,0), (-1,-1), 9),
        ('RIGHTPADDING', (0,0), (-1,-1), 9),
        ('LINEBELOW', (0,0), (-1,-1), 0.3, GOLD),
    ])
    if header:
        style.add('FONTNAME', (0,0), (-1,0), 'Calibri-Bold')
        style.add('TEXTCOLOR', (0,0), (-1,0), BURGUNDY)
        style.add('LINEBELOW', (0,0), (-1,0), 1, GOLD)
        style.add('BACKGROUND', (0,0), (-1,0), CREAM_WARM)
    style.add('FONTNAME', (0,0 if not header else 1), (0,-1), 'Calibri-Bold')
    style.add('TEXTCOLOR', (0,0 if not header else 1), (0,-1), BURGUNDY)
    t.setStyle(style)
    return t

# --- Document setup ---
output_path = "D:/A-klasör/Estranova/.claude/worktrees/brave-ptolemy-dee063/icerik/onboarding/bilim-yazarlari-davet.pdf"

doc = SimpleDocTemplate(
    output_path,
    pagesize=A4,
    leftMargin=2.5*cm,
    rightMargin=2.5*cm,
    topMargin=2.5*cm,
    bottomMargin=2.5*cm,
    title='Estranova — Bilim Yazarları Davet Belgesi',
    author='Estranova Editöryal Ekibi',
    subject='Bilim yazarları için onboarding rehberi',
    creator='Estranova',
)

story = []

# --- COVER / OPENING LETTER ---
story.append(Paragraph('<font color="#a8884c">ESTRANOVA</font>', style('CoverEyebrow',
    fontName='Calibri-Bold', fontSize=10, textColor=GOLD_DEEP, spaceAfter=4)))
story.append(Paragraph('Bilim Yazarları Davet Belgesi', H1_COVER))
story.append(gold_rule(width=5*cm, thickness=2))
story.append(Spacer(1, 0.4*cm))
story.append(Paragraph(
    'Premium editöryal kadın sağlığı yayınımızın bilim kadrosuna katılım daveti, '
    'editöryal ilkelerimiz ve makale üretim sürecimize dair eksiksiz rehber.',
    style('CoverSubtitle', fontName='Constantia-Italic', fontSize=12, leading=18,
          textColor=INK_70, spaceAfter=24)))
story.append(Spacer(1, 0.4*cm))

# Opening letter
story.append(Paragraph('Sevgili Meslektaşlarımız,', style('Greeting',
    fontName='Constantia-Bold', fontSize=15, textColor=BURGUNDY_DEEP, spaceAfter=12)))
story.append(p(
    'Estranova\'nın <b>Bilim Yazarları kadrosuna</b> katılım davetiniz vesilesiyle bu '
    'belgeyi sizlere sunuyoruz. Aşağıdaki sayfalarda; <b>Estranova nedir, neyi yapar, '
    'neyi yapmaz</b>; sizin <b>bu yayında nasıl bir yer</b> tutacağınız; ve bir '
    'makalenin <b>konu seçiminden yayına</b> kadar nasıl üretildiği — kısa ama eksiksiz '
    'bir biçimde anlatılıyor.', BODY_LARGE))
story.append(p(
    'Estranova klasik bir klinik web sitesi değil; <b>premium bir editöryal sağlık '
    'yayınıdır</b>. Vogue TR, Elle TR ya da Marie Claire TR\'nin sağlık-yaşam '
    'köşelerini hatırlatan bir hisle, perimenopoz, menopoza hazırlık, menopoz ve '
    '40 sonrası kadın sağlığı başlıklarını kapsayan, sakin, kanıt temelli bir okuma '
    'alanı. Sizin uzmanlığınız bu yayının <b>bilim mührünü</b> taşıyacak — ama klinik '
    'vitrin olarak değil, okuyucuyla <b>eşit söze yakın</b>, <b>dürüst</b> bir ses olarak.',
    BODY_LARGE))
story.append(p(
    'Belge biraz uzun gelebilir. Lütfen rahat okuyun; aklınıza takılan her şey için '
    'Estranova\'nın bilimsel editörü <b>Doç. Dr. Senai Aksoy</b> sizinle her aşamada '
    'iletişime hazır.', BODY_LARGE))

story.append(PageBreak())

# --- 01. Estranova Nedir ---
story += section_h2(1, 'Estranova Nedir?')

story.append(section_h3('Kimlik'))
story.append(p(
    'Estranova, <b>kadın sağlığı alanında premium bir editöryal yayındır</b>. Birincil '
    'okuyucumuz <b>40 yaş ve üzeri</b>, hormonal geçiş ve kadın sağlığı konularında '
    '<b>güvenilir, nötr bilgi</b> arayan kadınlardır. Yayın, klinik-tıbbi okuryazarlığı '
    'koruyarak; ama tıp jargonu yığını olmadan, sakin bir editöryal sesle yazılır.'))
story.append(p('İçerik beş ana hub etrafında kurulur:'))
story += bullets([
    '<b>Hormonal Geçiş</b> — perimenopoz, menopoza hazırlık, menopoz, 40 sonrası',
    '<b>Beden &amp; Yakınlık</b> — cilt, cinsel sağlık, mahrem bölge değişimleri, pelvik taban',
    '<b>Zihin &amp; Denge</b> — uyku, bilişsel sağlık, duygusal denge, stres',
    '<b>Zamansız Yaşam</b> — beslenme, hareket, vitaminler, kemik sağlığı, deneysel yaklaşımlar, ameliyatsız uygulamalar',
    '<b>Bilimsel Pencere</b> — hormon biyolojisi, hücreler ve yaşlanma, yeni araştırmalar',
])
story.append(Spacer(1, 0.2*cm))
story.append(p(
    'Bunlar yan yana, bir derginin bölümleri gibi durur. Ayrıca aylık bir dijital sayı '
    'formatımız var: <b>"Eşik"</b>. Her sayı bir kapak dosyasıyla açılır, tematik bir '
    'çerçeve sunar; sonra ilgili hub\'lardaki yazılar derginin gövdesini oluşturur.'))

story.append(section_h3('Estranova ne <i>değildir</i>'))
story.append(p('Bu sınırı netleştirmek önemli. Estranova:'))
story += bullets([
    'Bir <b>klinik tanıtım sitesi</b> değildir',
    '<b>Tedavi pazarlaması</b> yapmaz',
    '<b>Hasta edinme hunisi</b> kurmaz',
    '<b>Tele-tıp ürünü</b> veya <b>abonelik sağlık platformu</b> değildir',
    '<b>Takviye / ürün satış sitesi</b> değildir',
    '<b>Başhekim reklam alanı</b> veya <b>"en iyi uzman" vitrini</b> değildir',
])
story.append(Spacer(1, 0.2*cm))
story.append(p(
    'Bu tutum bilinçli bir editöryal seçimdir. Türkiye\'de kadın sağlığı içeriklerinin '
    'büyük çoğunluğu satış-yönelimli platformlarda dolaşıyor; biz aralarındaki '
    '<b>sakin, güven veren, satışsız bir ada</b> olmaya çalışıyoruz.'))

story.append(section_h3('Editöryal nötrlüğün önceliği'))
story.append(p('Çelişki çıktığı her durumda Estranova\'nın iç pusulası şu sıraya sadıktır:'))
story += numbered([
    '<b>Düzenlemeye uygun nötrlük</b> (her şeyden önce)',
    'Güven',
    'Açıklık',
    'Editöryal kalite',
    'Dönüşüm',
])
story.append(Spacer(1, 0.2*cm))
story.append(p(
    'Yani bir cümle "okuyucuyu dönüştürmek" ile "okuyucuya saygılı kalmak" arasında '
    'seçime zorluyorsa, <b>saygıyı seçeriz</b>. Bu, biçim olarak çoğu zaman bir yazıyı '
    '<b>biraz daha sade</b>, biraz daha <b>az iddialı</b> hale getirir; bu sade hâl tam '
    'da Estranova\'nın imzasıdır.'))

story.append(PageBreak())

# --- 02. Sizin Yeriniz ---
story += section_h2(2, 'Sizin Yeriniz: Bilim Yazarları Kadrosu')

story.append(section_h3('Rolün üç katmanı'))
story.append(p('Bilim Yazarları kadrosunun Estranova\'da üç eşzamanlı katmanı vardır:'))
story.append(p(
    '<b>(a) Konu uzmanı yazar.</b> Kendi alanınızdaki güncel klinik perspektifi, '
    '<b>40+ kadın okuyucu için anlaşılır</b> Türkçe ile yazıya dönüştürmek.'))
story.append(p(
    '<b>(b) Bilimsel inceleme mührü.</b> Her makalenin sonunda yer alan '
    '<b>Bilimsel Editör Notu</b> (BEN) bölümünün arkasındaki klinik kadronun parçası '
    'olmak. Yayınlarımızın "tıbben gözden geçirilmiş" güven mimarisi bu kadronun '
    'varlığıyla anlam kazanıyor.'))
story.append(p(
    '<b>(c) Konu fikri ve danışmanlık.</b> Editöryal takvime, hangi başlıkların '
    'okuyucu için anlamlı olduğuna dair fikir vermek; bir taslakta atlanan klinik '
    'nüansı işaret etmek.'))
story.append(p(
    'Sizin tarafınızdan <b>tek başına yazma yükümlülüğü beklenmiyor</b>. Aşağıda '
    'anlatacağımız üretim akışı, AI destekli bir taslak motoruyla başlar; siz '
    '<b>doğrulama, düzeltme ve onay</b> rolüyle akışın merkezindesiniz.'))

story.append(section_h3('İmzanız nasıl görünür'))
story.append(p('Yazılarınız <b>kişisel imzanızla</b> yayımlanır:'))
story += bullets([
    'Yazar imzası: profesyonel unvanınızla (Prof. Dr., Op. Dr., Dt., Fzt. vb.)',
    'Yazar kartında: özgeçmiş özeti, uzmanlık alanları, signature ses cümlesi',
    'Makale sonunda: <b>ArticleAuthorBlock</b> bileşeni (otomatik render)',
    'JSON-LD yapılandırılmış veride: <i>author.Person</i> olarak makaleyle bağlanır (SEO + kanıt zinciri)',
])
story.append(Spacer(1, 0.2*cm))
story.append(p(
    'Bu görünüm <b>profesyonel kart</b> olarak tasarlanmıştır; <b>klinik adresi '
    'pazarlama ya da randevu yönlendirme alanı</b> olarak kullanılmaz. Bu sınır '
    'editöryal nötrlüğün gereği — bilgi paylaşımına saygı duyduğumuz okuyucuya '
    '"şimdi bana gel" demediğimiz için sözümüzün ağırlığı vardır.'))

story.append(section_h3('Doç. Dr. Senai Aksoy — bilimsel editör + tabu açan klinik yazar'))
story.append(p(
    'Estranova\'nın bilimsel inceleme katmanını <b>Doç. Dr. Senai Aksoy</b> taşıyor. '
    'Senai Aksoy aynı zamanda Estranova\'da <b>mahrem klinik konularda yazar</b> olarak '
    'da görev yapıyor (idrar kaçırma, GSM, vajinal atrofi, cinsel ağrı, lokal HRT, vb.). '
    'Yazarlık imzası "Senai Aksoy" (Dr. öneksiz, <i>bilen biri</i> sesi); tıbbi inceleyici '
    'imzası "Doç. Dr. Senai Aksoy" — iki rol bilinçli olarak iki ayrı kart üzerinde.'))
story.append(p(
    'Bu çift rol, Estranova mimarisinin tasarım kararıdır. Sizin yazılarınızın '
    'sonundaki <b>Bilimsel Editör Notu (BEN)</b>, default olarak Doç. Dr. Senai Aksoy '
    'imzasıyla yer alır. Bu ikiliği bilinçle koruyoruz.'))

story.append(PageBreak())

# --- 03. Editöryal İlkeler ---
story += section_h2(3, 'Editöryal İlkeler')

story.append(section_h3('Yasak alanlar (HARD CONSTRAINT)'))
story.append(p('Aşağıdaki ifadeler ve içerik kalıpları gövde metni içinde <b>yer almaz</b>:'))
story += bullets([
    '"Randevu al / Tedaviye başla / Hemen başvur"',
    '"En iyi / En başarılı / Garantili / Kesin çözüm"',
    '"Başarı oranlarımız / Paketlerimiz / Kampanya / İndirim"',
    'Fiyatlandırma tabloları (tıbbi hizmet bağlamında)',
    'Hasta referansı duvarı, tanık hikâyeleri ile pazarlama',
    'Spesifik <b>klinik adı</b>, <b>hekim adı</b>, <b>marka adı</b>',
    'Uluslararası kuruluş ve yayın adları gövde metninde — yumuşak referans olarak '
    '<i>"uzman dernekler / uluslararası kılavuzlar"</i> tercih edilir',
    '<b>Korku dili</b> ("sessiz tehlike / hemen başvurun")',
    '<b>Mucize dili</b> ("hayatınızı değiştirir / kesin çözüm / büyüleyici")',
    '<b>Promosyonel başhekim vitrini</b> gövdede (biyografi sayfasında ok)',
    '<b>Tedavi reçete dili</b> ("şu doz şu marka şu sıklık" yerine "hekiminizle '
    'birlikte değerlendirilir")',
])
story.append(Spacer(1, 0.2*cm))
story.append(p(
    'Bu liste sıkı görünebilir; ama amacı <b>okuyucunun güvenini ve sizin sözünüzün '
    'ağırlığını korumak</b>. Reklam diline kayan bir cümle, o yazının arkasındaki tüm '
    'bilim mührünün ağırlığını sulandırır.'))

story.append(section_h3('Tıbbi sınır'))
story.append(p(
    'Yazılar <b>bilgilendirme amaçlıdır</b>. Bireysel <b>teşhis</b>, <b>tedavi '
    'önerisi</b> veya <b>reçete dili</b> kullanılmaz. Her makalenin sonunda standart '
    'bir disclaimer görünür:'))
story.append(Paragraph(
    '<i>"Bu içerik genel bilgi amaçlıdır ve bireysel tıbbi değerlendirme yerine geçmez. '
    'Tanı ve tedavi kararları için sağlık profesyoneline başvurunuz."</i>', QUOTE))

story.append(section_h3('Çift Rol uyarısı'))
story.append(p(
    'Bazı durumlarda yazar–hasta ya da yazar–editör ilişkisi etik bir sınır oluşturur. '
    'Senai Aksoy aynı anda Estranova kadrosunda yer alan birkaç yazarın '
    '<b>gerçek hayatta jinekoloğu</b> veya <b>eşi</b>dir. Muayene odası bilgisi bu '
    'yazıların <b>gövdesine sızdırılmaz</b> — ne doğrudan ne dolaylı.'))
story.append(p(
    'Sizin de hekim olarak gördüğünüz hastalardan biri Estranova okuru olabilir. '
    'Bu durumda <b>kişisel kimlik bilgisi (isim, klinik detay, ilaç, doz, lab sonucu)</b> '
    'asla yazıya girmez; <b>anonim genelleme</b> çerçevesi tercih edilir.'))

story.append(PageBreak())

# --- 04. Yazı Üretim Süreci ---
story += section_h2(4, 'Yazı Üretim Süreci — Uçtan Uca')

story.append(p(
    'Estranova\'da bir makale ortalama altı fazdan geçerek yayına ulaşır. Sürecin bir '
    'kısmı sizinle birlikte, bir kısmı arka planda yürür; ama hiçbiri sizin onayınız '
    'olmadan yayınlanmaz.'))

story.append(section_h3('Faz 1 — Konu Seçimi'))
story.append(p('Konu üç şekilde gündeme gelir:'))
story += bullets([
    '<b>Editöryal takvim</b> — aylık sayı temasıyla uyumlu başlıklar',
    '<b>Sizin öneriniz</b> — uzmanlık alanınızdan ve klinik gözleminizden gelen bir konu',
    '<b>Okuyucu sinyalleri</b> — sıkça gelen sorular, arama eğilimleri',
])
story.append(Spacer(1, 0.2*cm))
story.append(p(
    'Konu sizinle paylaşılır; <i>"Bu konuyu yazmak ister misiniz?"</i> sorusuyla davet '
    'edilirsiniz. <b>Hayır deme hakkı her zaman sizdedir.</b>'))

story.append(section_h3('Faz 2 — Yazar Profili (DNA)'))
story.append(p('Her bilim yazarı için bir <b>profil dosyası</b> hazırlanır. Modüler yapıdadır:'))
story += bullets([
    '<b>profile.yaml</b> — makine okunur özet (uzmanlık, ses imzası, kategori skorları)',
    '<b>cold.md</b> — geçmiş, eğitim, kariyer, korpus referansları (audit için)',
    '<b>warm.md</b> — anekdot yönelimi, manifesto kalıpları (varsa)',
    '<b>hot.md</b> — yazı tonu, signature açılış kalıpları, tıbbi sınır uyarıları',
    '<b>hidden.md</b> — gizli gözlemler, hassas sınırlar (yayınlanmaz)',
])
story.append(Spacer(1, 0.2*cm))
story.append(p(
    'İlk profilinizi oluştururken sizden 30-60 dakikalık bir <b>profil görüşmesi</b> '
    'rica ederiz; daha sonra siz revize etmek istemediğiniz sürece sabit kalır.'))

story.append(section_h3('Faz 3 — AI Destekli Taslak'))
story.append(p(
    'Profile + konu + Estranova kuralları girdi olarak verilir; AI yazar agent '
    '<b>ilk taslağı</b> üretir. Bu taslak:'))
story += bullets([
    'Sizin <b>ses imzanızı</b> taklit etmeye çalışır',
    'Estranova\'nın editöryal tipografisini uygular',
    'Yasak filtrelerden geçer',
    'Bilimsel Editör Notu bloğunu (Doç. Dr. Senai Aksoy imzalı) ekler',
])
story.append(Spacer(1, 0.2*cm))
story.append(p(
    'Bu otomatik bir taslaktır; <b>sizin onayınız olmadan asla yayına çıkmaz</b>.'))

story.append(section_h3('Faz 4 — Editöryal Tipografi ve Yapı'))
story.append(p('Yayına hazır makalenin yapısı:'))
story += bullets([
    '<b>6-8 ana başlık (H2)</b> — her biri cümleli (tek kelime yasak)',
    'Her H2\'den sonra <b>italic lede</b> (1-2 cümlelik açılış kanısı)',
    '<b>Otomatik bölüm numarası</b> (01, 02, ... — gold renkte)',
    '<b>Kanıt seviyesi etiketi</b> ("(<i>güçlü</i> / <i>orta</i> / <i>sınırlı kanıt</i>)")',
    '<b>RedFlagBox</b> — okuyucuya sade kırmızı bayrak hatırlatıcı',
    '<b>Sıkça Sorulanlar (SSS)</b> — 3-5 konuya özgü gerçek soru',
    '<b>Bilimsel Editör Notu (BEN)</b> — 5 katmanlı kapanış bloğu',
    '<b>RelatedReadings</b> — 3-5 ilgili makale linki',
    '<b>Standart disclaimer</b>',
])

story.append(section_h3('Faz 5 — Yazar Onayı (10 Dakikalık Form)'))
story.append(p('Taslak hazır olduğunda size <b>iki ek</b> ile bir e-posta gönderilir:'))
story += numbered([
    '<b>Makale önizleme linki</b> — yazıyı tarayıcınızda okumanız için',
    '<b>Tıklanabilir kontrol formu</b> — internet bağlantısı şart değil',
])
story.append(Spacer(1, 0.2*cm))
story.append(p('Form üç kısımdan oluşur:'))
story += bullets([
    '<b>Genel ses</b> (3 likert): Ses tanıyor musunuz? Tabu konularda dürüst-sakin mi? '
    'Pazarlama hissi var mı?',
    '<b>Kritik kontrol</b> (3 toggle): Çift Rol disiplini? Yasak ad? BEN ayrı blok mu?',
    '<b>Yorumunuz</b> (opsiyonel) — kısa not, max 400 karakter',
])
story.append(Spacer(1, 0.2*cm))
story.append(p('Sonunda iki büyük buton:'))
story += bullets([
    '<font color="#6B2D3E"><b>✓ ONAYLIYORUM</b></font> → makale yayında',
    '<font color="#6B2D3E"><b>✏ DEĞİŞİKLİK İSTİYORUM</b></font> → AI yorumla revizyon yapar',
])
story.append(Spacer(1, 0.2*cm))
story.append(p(
    'Bir butona tıkladığınızda e-posta istemciniz açılır; yanıtınız JSON yapıda hazır '
    'olur. Tek yapmanız gereken <b>gönder</b> tuşuna basmak. Üçüncü taraf bir servis '
    'kullanılmaz.'))

story.append(section_h3('Faz 6 — Yayın'))
story.append(p(
    'Onaylanan makale <b>main</b> dalına push edilir; site <b>Cloudflare Pages</b>\'te '
    'otomatik build alır. Site canlıya alındığında yayın anlık olur. Makale, '
    'Estranova\'nın yapısal indekslerine eklenir: hub sayfası, sayı sayfası, anasayfa '
    'yeni yayınlar bandı, belirti bazlı navigasyon, JSON-LD yapısal veri.'))

story.append(PageBreak())

# --- 05. Kanıt Seviyeleri ---
story += section_h2(5, 'Sayısal Disiplin: Kanıt Seviyeleri')

story.append(p(
    'Estranova\'da kanıt seviyesi <b>standardize edilmiş bir araçtır</b> — Evidence '
    'adında bir editöryal bileşen. 1\'den 5\'e bir ölçek:'))

evidence_rows = [
    ['<b>Düzey</b>', '<b>Türkçe etiket</b>', '<b>Tipik kanıt türü</b>'],
    ['5', '<i>(güçlü kanıt)</i>',
     'Birden fazla randomize çalışmanın meta-analizi, sistematik derleme'],
    ['4', '<i>(iyi kanıt)</i>',
     'Tek randomize kontrollü çalışma, geniş örneklemli kohort'],
    ['3', '<i>(orta kanıt)</i>',
     'Küçük randomize çalışmalar, gözlemsel çalışmalar'],
    ['2', '<i>(sınırlı kanıt)</i>',
     'Vaka serileri, kontrolsüz gözlem'],
    ['1', '<i>(zayıf kanıt)</i>',
     'Vaka raporu, uzman görüşü'],
]
evidence_rows = [[Paragraph(c, BODY) for c in row] for row in evidence_rows]
story.append(three_col_table(evidence_rows, col_widths=[2*cm, 4*cm, 9.5*cm], header=True))
story.append(Spacer(1, 0.4*cm))
story.append(p(
    'İki düzey arasında olduğunda aralık kullanılır: <i>(orta-iyi kanıt)</i>. Hedef her '
    'makalede <b>2-3 Evidence</b> (max 5). Her bilimsel iddianın <b>yanına</b> '
    'yerleştirilir; yazar sesinden <b>yumuşatılmış</b> olarak akar (klinik rapor hissi '
    'vermez).'))

# --- 06. BEN ---
story += section_h2(6, 'Bilimsel Editör Notu (BEN) — 5 Katman')

story.append(p(
    'Her makalenin sonunda <b>gold accent</b> ile vurgulanmış, Doç. Dr. Senai Aksoy '
    'imzalı 5 katmanlı bir blok yer alır. Bu blok yazarın sesinden <b>bilinçli olarak '
    'ayrı bir kart</b> olarak görünür — okuyucunun <b>klinik perspektif</b> mercekli '
    'bir noktaya taşınmasını sağlar.'))
story.append(p('5 katman:'))
story += numbered([
    '<b>Bağlam cümlesi (italic)</b> — yazının niteliğini netleştirir',
    '<b>Klinik bağlam</b> — kliniğin gerçeğinden bir not',
    '<b>Mekanik çerçeve</b> — kompakt fizyoloji / mekanizma açıklaması',
    '<b>Klinik kırmızı bayraklar</b> — uyarı listesi',
    '<b>Pratik bütünleşim</b> — tedavi hiyerarşisi / klinik yaklaşım sıralaması',
])
story.append(Spacer(1, 0.2*cm))
story.append(p('Sonunda imza:'))
story.append(Paragraph(
    '<i>— Doç. Dr. Senai Aksoy, Kadın Hastalıkları ve Doğum Uzmanı, Estranova '
    'Bilimsel Editörü</i>', QUOTE))

story.append(PageBreak())

# --- 07. Etik Sınırlar Tablo ---
story += section_h2(7, 'Etik Sınırlar (Özet)')

story.append(p('Önemli olduğu için yasak ve tercih edilen alanlar tabloda toparlandı:'))
story.append(Spacer(1, 0.2*cm))

ethics_rows = [
    ['<b>Kategori</b>', '<b>Yasak</b>', '<b>Tercih</b>'],
    ['Klinik adı',
     'Lotus Nişantaşı, Acıbadem, klinik web adresi',
     'Anonim "kliniğimde", "muayenehanemde" tercih'],
    ['Hekim adı',
     'Spesifik üçüncü hekim referansı',
     '"Bir meslektaşım" / "uzman dernekler"'],
    ['İlaç/cihaz markası',
     'Spesifik marka (HRT, takviye, cihaz)',
     '"Tipik klinik dozlarda" / "onaylı cihazlar"'],
    ['Uluslararası kuruluş',
     'NAMS, NICE, JAMA, WHO, CDC, FDA, ACOG…',
     '"Uluslararası uzman dernekler" yumuşaması'],
    ['Promosyon',
     '"30 yıl deneyim / 10.000 doğum" gövdede',
     'Biyografi sayfasında ok; gövdede yok'],
    ['Tedavi reçete',
     '"Şu doz şu marka şu sıklık"',
     '"Hekiminizle birlikte değerlendirilir"'],
    ['Korku dili',
     '"Sessiz tehlike / hemen başvurun"',
     '"Bir hekime danışmanın anlamlı olduğu"'],
    ['Mucize dili',
     '"Hayatınızı değiştirir / kesin çözüm"',
     '"Faydalı olabilir / ilişkili olabilir"'],
    ['Yaşıt yazar pozu',
     '"Bizim kuşağımız 40 sonrası…" (hekim için)',
     '"Klinik deneyimimde gözlemlediğim"'],
]
ethics_rows = [[Paragraph(c, BODY) for c in row] for row in ethics_rows]
story.append(three_col_table(ethics_rows, col_widths=[3*cm, 6*cm, 6.5*cm], header=True))

story.append(PageBreak())

# --- 08. Teknik Altyapı + Belge Ekosistemi + Site Plan ---
story += section_h2(8, 'Teknik Altyapı, Belge Ekosistemi, Yayın Planı')

story.append(section_h3('Teknik altyapı (kısa)'))
story.append(p('Sizin günlük üretim akışınızda bu ayrıntıları görmenize gerek yoktur:'))
story += bullets([
    '<b>Astro 6 (static)</b> — site statik HTML olarak build alır',
    '<b>Tailwind 4 + özel editöryal tipografi</b> — chapter counter, italic lede, gold ayraç',
    '<b>TypeScript veri katmanı</b> — yazar bilgileri, makale onayları, tip-güvenli',
    '<b>Cloudflare Pages</b> — main dalına push otomatik build + deploy tetikler',
    '<b>Modüler yazar profili</b> — cold/warm/hot/hidden katman dosyaları',
    '<b>JSON-LD yapılandırılmış veri</b> — MedicalWebPage + Article + BreadcrumbList',
])
story.append(Spacer(1, 0.2*cm))
story.append(p(
    'Site <b>henüz canlıya alınmadı</b> — tasarım/içerik aşamasındayız. Yayın hazır '
    'olduğunda sizleri bilgilendireceğiz.'))

story.append(section_h3('Belge ekosistemi'))

doc_rows = [
    ['<b>Belge</b>', '<b>İçerik</b>'],
    ['CLAUDE.md', 'Yazım üst kuralları (HARD CONSTRAINTS) — her şeyin temeli'],
    ['ARTICLE-PRODUCTION-SPEC.md', 'Makale üretiminin uçtan uca spec\'i'],
    ['AUTHOR-APPROVAL-WORKFLOW.md', 'Yazar onay sistemi detayı (form akışı dahil)'],
    ['WRITER-DYNAMICS-FRAMEWORK.md', 'Yazar profili evrimi mimarisi'],
    ['WRITER-TEMPLATE-BREAKING-DISCIPLINE.md',
     'Şablon kırma disiplini (yazar sesinin tekdüzeleşmesini önler)'],
    ['PIPELINE.md', 'Compliance puanlama eşikleri'],
    ['paywall-policy.md', 'Eşik dergisi abonelik etiği (gelecek faz)'],
]
doc_rows = [[Paragraph(c, BODY) for c in row] for row in doc_rows]
story.append(two_col_table(doc_rows, col_widths=[6*cm, 9.5*cm], header=True))
story.append(Spacer(1, 0.4*cm))

story.append(section_h3('Site canlıya alınma planı'))
plan_rows = [
    ['<b>Faz</b>', '<b>Kapsam</b>', '<b>Durum</b>'],
    ['1', 'UI / dergi görünümü / içerik hazırlığı', '<b>Aktif</b>'],
    ['2', 'Hesap kaydı (okuyucu profili)', 'Bekleniyor'],
    ['3', 'Abonelik altyapısı (e-posta tek adım)', 'Bekleniyor'],
    ['4', 'Sınırlı paywall (sadece sayı parçaları)', 'Bekleniyor'],
    ['5', 'PDF + sesli okuma', 'Bekleniyor'],
]
plan_rows = [[Paragraph(c, BODY) for c in row] for row in plan_rows]
story.append(three_col_table(plan_rows, col_widths=[1.5*cm, 9*cm, 5*cm], header=True))
story.append(Spacer(1, 0.4*cm))
story.append(p(
    'Önemli editöryal sözümüz: <b>Estranova kanıt-temelli temel sağlık bilgisini her '
    'zaman herkese açık tutar; abonelik yalnızca aylık sayıların kendine özgü '
    'editöryal parçalarını kapsar.</b> Sizin yazılarınız Faz 4\'te bile büyük olasılıkla '
    'paywall dışında kalacaktır.'))

story.append(PageBreak())

# --- 09. Sıradaki Adım + İletişim ---
story += section_h2(9, 'Sıradaki Adım: Sizden Beklediğimiz')

story.append(p('Bu belgeyi okuduktan sonra üç olası yol vardır:'))

story.append(section_h3('Yol A — Profil görüşmesi randevusu'))
story.append(p(
    '30-60 dakikalık bir görüşmede sizin profilinizi (cold/warm/hot dosyaları) '
    'birlikte oluştururuz; ses imzanızı, uzmanlık alanlarınızı, konu önerilerinizi '
    'konuşuruz. Bu görüşme sonrası ilk taslak makale çıkarılabilir.'))

story.append(section_h3('Yol B — Hazır taslak inceleme'))
story.append(p(
    'Sizin uzmanlık alanınızda bir konu için (örneğin postmenopozal cilt + topikal '
    'retinoidler, ya da postmenopozal osteoporoz tedavi sıralaması) <b>hazırlanmış '
    'bir taslak</b> önce sizinle paylaşılır; profil görüşmesi yerine doğrudan onay '
    'formundan geçmesi denenir.'))

story.append(section_h3('Yol C — Önerinin sizden gelmesi'))
story.append(p(
    'Klinik gözleminizden bir konu önerisi varsa onu birlikte değerlendiririz; '
    'oradan başlayarak hem profilinizi hem ilk yazıyı kurarız.'))
story.append(Spacer(1, 0.2*cm))
story.append(p(
    'Hangi yol size daha uygunsa, <b>Doç. Dr. Senai Aksoy\'a</b> kısaca iletmeniz yeterli.'))

# --- İletişim + Kapanış ---
story.append(soft_rule(width=10*cm, thickness=0.5))
story.append(Paragraph('İletişim', H3))
story += bullets([
    '<b>Bilimsel editör:</b> Doç. Dr. Senai Aksoy',
    '<b>E-posta:</b> drsenaiaksoy@gmail.com',
    '<b>Yayın yönetimi:</b> Berna Aksoy (yönetici editör)',
    '<b>Site (geliştirme):</b> estranova.com (henüz canlı değil)',
])

story.append(soft_rule(width=10*cm, thickness=0.5))
story.append(Paragraph('Kapanış', H3))
story.append(p(
    'Estranova bir <b>dergi mantığında</b> yapılmış kanıt-temelli bir kadın sağlığı '
    'yayını olmak istiyor. <b>Sizin uzmanlık ağırlığınız</b>, bu yayının okuyucusuna '
    'verdiği güvenin temel taşı.'))
story.append(p(
    'Birlikte yazılan her cümle — pazarlamanın yüksek sesinde değil — sakin, dürüst, '
    'saygılı bir okuma alanı oluşturmaya katkı sağlıyor. Bu özene değer veriyoruz; '
    'davetimize <b>evet</b> demeniz halinde bunu uzun soluklu bir editöryal işbirliğine '
    'dönüştürmek için elimizden geleni yapacağız.'))
story.append(Spacer(1, 0.4*cm))
story.append(Paragraph('Saygılarımızla,', SIGNATURE))
story.append(Paragraph(
    '<b>Estranova Editöryal Ekibi</b><br/>'
    '<i>Bilimsel Editör: Doç. Dr. Senai Aksoy · Yönetici Editör: Berna Aksoy</i>',
    style('SignatureBlock', fontName='Constantia', fontSize=11, leading=16,
          textColor=BURGUNDY, spaceAfter=20)))

# --- Build ---
doc.build(story, canvasmaker=FooterCanvas)
print(f"PDF üretildi: {output_path}")
