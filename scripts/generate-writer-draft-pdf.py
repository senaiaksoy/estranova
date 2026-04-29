# -*- coding: utf-8 -*-
"""
Estranova editöryal tipografide yazar makale taslağı PDF üretimi.

İlk versiyon: 2026-04-29, Berna Aksoy makale taslağı
("Eşim hekim ama hekimim değil — modern kadın menopoz takibinde ne arıyor").

Bu script bir TEMPLATE. Yeni yazar / yeni makale için:
  1. story listesini yeni içerikle değiştir (başlık, açılış lede, intro, chapter çağrıları, FAQ, kapanış)
  2. evidence() helper'ı ile bilimsel iddiaların yanına kanıt etiketi ekle
  3. bilimsel_editor_notu() helper'ı ile sayfa sonuna Bilimsel Editör Notu yerleştir
  4. SimpleDocTemplate çağrısındaki title / author / subject metadata'sını güncelle
  5. output_path'i değiştir
  6. Script'i çalıştır: python scripts/generate-writer-draft-pdf.py

ZORUNLU YAPISAL ÖGELER (HARD MUST-CHECK — atlanmaz):
  - Her bilimsel iddianın yanında {evidence('iyi kanıt')} tarzı etiket
    Render: parantez içi italic gold (güçlü/iyi/orta/sınırlı/zayıf kanıt)
  - bilimsel_editor_notu(text) sayfa sonunda — Doç. Dr. Senai Aksoy imzalı
  - ArticleAuthorBlock + JSON-LD (Astro yayında; PDF'te byline yeterli)
  - Italic lede her H2 sonrası ilk paragraf
  - FAQ 3-5 konuya özgü soru

Sabit kalanlar (Estranova editöryal tipografi pattern'i):
  - A4 sayfa, 2.5/2 cm kenar boşlukları
  - Constantia (serif) + Calibri (sans-serif) — Windows sistem fontları
  - Palette: burgundy (#6B2D3E / #4f171c), gold (#C9A96E), dark_gray (#2D2D2D)
  - H1 + 3.2cm gold ayraç
  - H2 = küçük gold "01"…"NN" + başlık + 2.5cm gold ayraç + italic lede
  - Gövde Calibri 11pt, satır yüksekliği 1.5
  - FAQ soru-yanıt KeepTogether
  - Bilimsel Editör Notu = Table flowable, sol kenarda gold dik çizgi, açık krem arka plan
  - Footer: gold ince çizgi + disclaimer + sayfa numarası

Kanonik referans: memory/reference_estranova_pdf_typography.md
HARD MUST-CHECK kuralları: memory/feedback_article_writing_checklist.md

Bilinen kısıtlamalar (ileride generic hâle getirme):
  - FONTS path Windows-specific (C:/Windows/Fonts) — Linux/Mac için fallback gerek
  - Story sabit kod ile yazılı; markdown parser yok (bilinçli — kontrol için)
  - Output path argv yerine hardcoded
"""

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

# --- Styles ---
byline_style = ParagraphStyle(
    'Byline', fontName='Calibri-Italic', fontSize=9, textColor=light_gray,
    alignment=TA_RIGHT, spaceAfter=14, leading=12,
)

h1_style = ParagraphStyle(
    'H1', fontName='Constantia-Bold', fontSize=24, textColor=deep_burgundy,
    leading=30, spaceBefore=8, spaceAfter=4, alignment=TA_LEFT,
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

profile_label_style = ParagraphStyle(
    'ProfileLabel', fontName='Calibri-Bold', fontSize=11, textColor=deep_burgundy,
    leading=15, spaceBefore=8, spaceAfter=2, alignment=TA_LEFT,
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

# --- Bilimsel Editör Notu styles ---
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

# Açık krem arka plan tonu (Estranova editöryal tipografi)
editor_note_bg = HexColor('#FAF6EE')


# --- Helpers ---
def evidence(text):
    """Inline kanıt etiketi: parantez içi italic gold Türkçe.
    Kullanım: f"... bilimsel iddia {evidence('orta-iyi kanıt')}."
    Render: ... bilimsel iddia (orta-iyi kanıt).
    """
    return f'<i><font color="#C9A96E">({text})</font></i>'


def bilimsel_editor_notu(body_text, signature="— Doç. Dr. Senai Aksoy, Estranova Bilimsel Editörü"):
    """Sayfa sonuna eklenen Bilimsel Editör Notu kutusu.
    Sol kenarda gold dik çizgi, açık krem arka plan, label + içerik + imza.
    """
    inner = [
        [Paragraph("BİLİMSEL EDİTÖR NOTU", editor_note_label_style)],
        [Paragraph(body_text, editor_note_body_style)],
        [Paragraph(signature, editor_note_signature_style)],
    ]
    table = Table(inner, colWidths=[15.5*cm])
    table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), editor_note_bg),
        ('LEFTPADDING', (0, 0), (-1, -1), 14),
        ('RIGHTPADDING', (0, 0), (-1, -1), 14),
        ('TOPPADDING', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 10),
        ('LINEBEFORE', (0, 0), (0, -1), 3, gold),  # sol kenar gold dik çizgi
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    return table


# --- Footer canvas ---
class FooterCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        canvas.Canvas.__init__(self, *args, **kwargs)
        self.pages = []

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
        self.drawString(2.5*cm, 1.1*cm,
            "Estranova editöryal taslak — yayın öncesi yazar revizyonu için. "
            "Tıbbi inceleme katmanı yayın öncesi tamamlanır.")
        self.setFont('Calibri', 8)
        self.setFillColor(light_gray)
        self.drawRightString(A4[0] - 2.5*cm, 1.1*cm,
            f"{self._pageNumber} / {page_count}")
        self.restoreState()


# --- Build story ---
story = []

story.append(Paragraph(
    "Yazar: Berna Aksoy &nbsp;·&nbsp; Estranova editöryal taslak &nbsp;·&nbsp; 29 Nisan 2026",
    byline_style
))

story.append(Paragraph(
    "Eşim hekim, ama hekimim değil &mdash; modern kadın menopoz takibinde ne arıyor",
    h1_style
))
story.append(HRFlowable(
    width=3.2*cm, thickness=2, color=gold,
    hAlign='LEFT', spaceBefore=8, spaceAfter=6
))

story.append(Paragraph(
    "Bedenimin görünmez sürecini takip eden iki farklı pencere var hayatımda: bir hekim, bir eş. "
    "İkisi aynı kişi değil. Eşim jinekolog ama beni takip eden o değil &mdash; yakınlarını takip etmenin "
    "doğru olmadığını düşünür ve takiplerimi güvendiği bir meslektaşına devretti. "
    "Bu yazı bu iki pencereden bakan birinin sorduğu bir soru.",
    opening_lede_style
))

story.append(Paragraph(
    "Bir noktada şunu fark ettim: kendi durumumu sıradan saymak da, sıra dışı saymak da kolay olmuyor. "
    "Bunu açıkça yazayım &mdash; çünkü gizlemek dürüstlüğü zedeler: asıl jinekoloğum eşim değil, "
    "ama eşimin meslektaşı olan ve aynı zamanda arkadaş çevremizden bir hekim. Bu yüzden ben "
    "<i>bekleme salonunda da beklemiyorum</i>; sıramı kuyrukta tutmuyorum; sohbet havasında karşılanıyorum. "
    "Çoğu kadının yaşadığı kontrol süreci, ben dahil olmak üzere bizim çevremizdeki bazı kadınlar için "
    "böyle akmıyor. Bunu kabul ediyorum.",
    body_style
))

story.append(Paragraph(
    "Bir de evde tıbbi konuların doğal akışı var: eşim jinekolog olduğu için akşam yemeğinde, eve dönerken "
    "bir cümle açılıyor; bir başka açıdan bakmama yardımcı oluyor. Ama bu paylaşım, konsültasyon değil "
    "&mdash; karar her zaman benim ile asıl hekimim arasında kurulur. Eşim yakınlarını takip etmenin "
    "doğru olmadığını düşünür ve bu sınırı baştan çekmiştir; o sınıra ben de saygı duyuyorum.",
    body_style
))

story.append(Paragraph(
    "Bu çift ayrıcalığın (eş hekim + arkadaş hekim) içinde bir soru duruyor: modern kadın menopoz takibinde "
    "hekiminden ne arıyor? Cevabı hâlâ aramaktayım &mdash; ve aramak için kendi konumumun dışına bakmaya "
    "çalışıyorum. Çevremdeki kadınların anlattıkları, benim kendi gözlemlerim ve hâlâ açık duran sorular "
    "bu yazının özeti. Senin yolun başka olabilir &mdash; ve olmalı da.",
    body_style
))


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
        if isinstance(block, tuple):
            # (style, text)
            style, text = block
            items.append(Paragraph(text, style))
        else:
            items.append(Paragraph(block, body_style))
    return items


# === Chapter 01 — Eski hekim-hasta resmi ===
story.extend(chapter(
    1,
    "Eskinin hekim-hasta resmi &mdash; otoritenin tek sesi",
    "Anne ve büyükteyzelerimin kuşağında hekim &ldquo;söz sahibi olan&rdquo;, "
    "hasta &ldquo;dinleyen ve takip eden&rdquo;di. Bu resim sade ama tek başına yeterli değildi.",
    [
        "Annemin ve onun kuşağındaki çoğu kadının hekim ilişkisi büyük ölçüde tek yönlüydü. "
        "Hekim söylerdi, hasta uygulardı. Soru sorulurdu ama az; hekimin söylediği genellikle son sözdü. "
        "Bedenle ilgili karmaşık bir şey yaşandığında &ldquo;geçer&rdquo; ya da &ldquo;dayanılır&rdquo;dı; "
        "daha ileri gidilmezdi. Bu form bir kuşağa yetti &mdash; ama aynı kuşağın bazı kadınları için "
        "iç sıkıntısının ana kaynağı oldu.",

        "Annem kendi hormonal geçişini sessiz geçirdi. Kendi bedeniyle ilgili sormadığı çok şey vardı. "
        "Bu sessizlik onun zayıflığı değildi, kuşağının ortak bir kalıbıydı. Hekime "
        "&ldquo;ben şunu hissediyorum, sebebi ne olabilir&rdquo; demek bizden iki kuşak öncesinde "
        "yaygın bir alışkanlık değildi.",

        "Bu sessiz form bizim kuşağımıza miras kalmadı &mdash; ama eski reflekslerin izi hâlâ var. "
        "Çoğumuz bir hekim karşısında oturduğumuzda hâlâ otomatikman &ldquo;ona güvenmem gerekir, "
        "çok soru sormak ayıp olur&rdquo; düşüncesinin geç yansımalarını yaşıyoruz."
    ]
))

# === Chapter 02 — Modern kadının arayışı ===
story.extend(chapter(
    2,
    "Modern kadın bilgi seli içinde ne arıyor",
    "Bugün hasta sandalyesinde oturan kadın çoğu zaman hekimden önce kendi araştırmasını yapmış oluyor. "
    "Bu hem güç veriyor hem de yorgunluk.",
    [
        "Bizim kuşağımız farklı bir konuma geldi. Bir görüşmeye gitmeden önce çevrimiçi forumları okumuş, "
        "sosyal medyada kıyaslamalar yapmış, yapay zekâya soru sormuş, arkadaşlarıyla konuşmuş bir kadın "
        "oturuyor masanın karşısında. Hekimine &ldquo;ben şunu okudum, sen ne diyorsun&rdquo; diyebiliyor. "
        "Bu, kuşağımızın belki en büyük başarısı. Üstelik son yıllarda hekim-hasta paylaşımının "
        f"klinik karar süreçlerinde aktif rol oynaması, jinekoloji ve menopoz literatüründe paydaş karar "
        f"verme (shared decision-making) modeli olarak tartışılıyor {evidence('iyi kanıt')}.",

        "Ama aynı zamanda bir tükenmişlik de var. Çok fazla bilgi var, kanaat kalabalığı içinde "
        "&ldquo;doğru&rdquo; cümleyi bulmak zor. Sosyal medyada bir akşam okuduğum yarım düzine içerik "
        "birbiriyle çelişebiliyor. Bu yüzden modern kadın hekiminden tek bir şey beklemiyor &mdash; "
        "ama eskinin &ldquo;söyle ben uygulayayım&rdquo; tutumundan da uzakta.",

        "Bir okurun yorumunda gördüm geçenlerde: &ldquo;Hekimimden hem söyleyen hem dinleyen olmasını "
        "istiyorum, ama bu çok mu fazla?&rdquo; diyordu. Hayır, fazla değil &mdash; aslında modern bir "
        "ilişkinin temel beklentisi. Sadece bunu açıkça talep etmeyi henüz öğreniyoruz."
    ]
))

# === Chapter 03 — Dört doktor profili ===
profile_intro_lede = (
    "Yakın çevremdeki kadınların anlattıklarını bir kâğıda yazsam, hekim profilleri "
    "dört temel konuma ayrılıyor. Hiçbiri tek başına doğru ya da yanlış değil; "
    "her birinin uyduğu bir kadın profili var."
)

ch3_head = [
    Paragraph("03", chapter_num_style),
    Paragraph("Çevremdeki dört hekim profili", h2_style),
    HRFlowable(width=2.5*cm, thickness=1.5, color=gold,
               hAlign='LEFT', spaceBefore=4, spaceAfter=12),
    Paragraph(profile_intro_lede, section_lede_style),
]
story.append(KeepTogether(ch3_head))

profile_blocks = [
    ("Klasik otorite.",
     "&ldquo;Yaşın bu, normal bu, başka bir şey gerek yok.&rdquo; Hızlı, kararlı, tartışmaya pek açık olmayan. "
     "Bazı kadınlar için bu tutum <i>rahatlatıcı</i>: kararı hekim versin, ben uygulayayım. Bazıları için "
     "ise <i>kapatıcı</i>: sorularımın yarısı söylenmeden kalkıp gidiyorum, sonra evde uyku tutmuyor. "
     "Aynı hekim profili, iki kadın için iki ayrı sonuç doğuruyor."),

    ("&ldquo;Her şey normal&rdquo; diyen temkinli.",
     "Tahliller iyiyse müdahale önermeyen, &ldquo;izleyelim&rdquo; diyen. Bu bazen gerçek bilgelik, "
     "bazen tedirginliği bastırma. Bir arkadaşım anlattı: hekimi her seferinde "
     "&ldquo;normal aralıkta&rdquo; diyordu; o ise kendi bedeninde başka bir şey hissediyordu. "
     "İki kavram arasında köprü kurulmamıştı &mdash; aralarındaki boşluk arkadaşımı bir başka hekime "
     "yönlendirdi sonunda."),

    ("Bilgi yığan.",
     "Her seçeneği uzun uzun anlatan, broşür veren, &ldquo;kararı sen ver&rdquo; diyen. "
     "Eğitici ve şeffaf &mdash; ama bilginin altında zaten yorgun bir kadın için ezici. "
     "Çünkü ev hayatından bunalmış birinin sandalyesine oturup &ldquo;sen seç&rdquo; denmesi, "
     "bağımsızlık değil yalnızlık verebiliyor."),

    ("Paydaş, birlikte düşünen.",
     "&ldquo;Şu seçenekler var, sen ne hissediyorsun, neyi denemek istiyorsun?&rdquo; "
     "Hem otoritesi var hem dinliyor; karar verirken hastayı yanına alıyor. "
     "Çoğumuzun aradığı bu &mdash; ama bulması zor, ve bulduktan sonra korumak da çaba ister. "
     "Çünkü aynı hekim her gün aynı sabırla aynı paydaşlık tonunu sürdürebilmek zorunda."),
]

for label, text in profile_blocks:
    story.append(KeepTogether([
        Paragraph(label, profile_label_style),
        Paragraph(text, faq_a_style),
    ]))

story.append(Paragraph(
    "Bu dört profilin hiçbiri tek başına &ldquo;iyi&rdquo; ya da &ldquo;kötü&rdquo; değil. "
    "Bir kadına klasik otorite uyabilir; başka birine paydaş hekim daha doğru gelebilir. "
    "Önemli olan kadının kendi pozisyonunu ve neyle rahat ettiğini önce kendine sorabilmesi.",
    body_style
))

# === Chapter 04 — Eşim hekim ama hekimim değil ===
story.extend(chapter(
    4,
    "Eşim hekim ama hekimim değil &mdash; etik bir sınırın içinden bakmak",
    "Eşim jinekolog ama beni takip eden hekim o değil. Bu, etik bir tercih &mdash; "
    "ve onun da, benim de saygı duyduğumuz bir sınır.",
    [
        "Benim durumum biraz özel, bunu en başta söylemem gerek. Eşim jinekolog. Ama jinekolog takibimi "
        "o yapmıyor &mdash; kendisi yakınlarını takip etmenin doğru olmadığını düşünür ve takiplerimi "
        "güvendiği bir meslektaşına devretmiştir. Bu prensibe içtenlikle saygı duyuyorum. Çünkü iki ilişki "
        "(bir eş ile bir hekim ile) birbirini bozmadan yan yana var olacaksa, aralarına etik bir mesafe "
        f"konması gerek &mdash; tıp etiği literatüründe yakın aile bireylerinin tedavi edilmemesi yaygın bir "
        f"meslek normu olarak kabul edilir {evidence('güçlü kanıt')}. "
        "Bu mesafe ilişkiyi soğutmuyor; aksine, ikisinin de kendi sınırlarında kalmasını sağlıyor.",

        "Bu durum bana <i>iki katmanlı</i> bir konum yarattı &mdash; ama her iki katman da, açıkça söyleyeyim, "
        "sıra dışı koşullarda akıyor. Birinci katman klinik: asıl hekimim hem eşimin meslektaşı hem de "
        "arkadaş çevremizden. Bu nedenle ben kontrole gittiğimde bekleme salonunda beklemiyorum, sıramı "
        "kuyrukta tutmuyorum, sohbet havasında karşılanıyorum. Bu durum bana sıradan bir hastanın "
        "deneyimini içeriden anlama imkânı bırakmıyor &mdash; aksine. İkinci katman ev içi: eşim jinekolog "
        "olduğu için tıbbi bir konu evde gündeme gelmeden geçen gün az. Akşam yemeğinde bir cümle açılıyor; "
        "bir başka açıdan bakmama yardımcı oluyor. Ama bu paylaşım, konsültasyon değil. Karar her zaman "
        "benim ile asıl hekimim arasında kurulur.",

        "Bu çift ayrıcalığın (eş hekim + arkadaş hekim) bir kazanımı var, kabul ediyorum. Tıbbi perspektif "
        "eve sızıyor; sözcükler, sorular, soru sorma alışkanlığı evimin içinde olgunlaşıyor. Çevremdeki "
        "çoğu kadın bu pozisyona araştırarak, okuyarak, kendine yer açarak ulaşıyor; ben kısmen daha kolay "
        "yere geldim. Bunun farkındayım &mdash; ve bu farkındalık beni sıradan bir hastanın deneyimini "
        "kendi sözüm gibi anlatmaktan alıkoyuyor.",

        "Bir körlük de var, hatta tam tersi söyleyeyim: körlüğüm önde geliyor, ayrıcalığım onun ardından. "
        "Çünkü çevremdeki kadınların yaşadığı bekleme odası tedirginliğini, &ldquo;doktor ne diyecek&rdquo; "
        "gerginliğini, dönüş yolunda aklın bin parçaya bölünmesini ben içeriden bilmiyorum. Bu yüzden "
        "çevremdeki kadınların anlattıklarını çok dinliyorum. Onların deneyimi benim öğretmenim oluyor; "
        "bu yazıyı yazma sebebim de büyük ölçüde bu.",

        "Bir de etik soru var: hekim eşinizse, ona &ldquo;ikinci görüş alacağım&rdquo; demek zor olmaz mı? "
        "Olmadı, çünkü zaten o ben olmadığım için bu soru baştan tartışmadan dışındaydı. İkinci görüş, "
        "asıl hekimimin meslektaşlarından biri olabilir; ev sofrasından bağımsız bir karar. "
        "Bu sınırı baştan çekmiş olmak ilişkiyi koruyor &mdash; her ikisini de."
    ]
))

# === Chapter 05 — Annenin paradoksu ===
story.extend(chapter(
    5,
    "Annemin paradoksu &mdash; iki ses arasında",
    "Annem kendi bedeninde sessiz, başkalarının bedeninde sesli bir kadındı. "
    "Bu paradoksu uzun yıllar anlamadım; sonra anladım ki bu da kuşağına ait bir şey.",
    [
        "Annem bir taraftan kendi menopozunu hiç sormadan geçiriyordu. Bir taraftan da yakınlarımızdan "
        "birinin muayenesinde en çok soran o olabilirdi. Yıllarca bu paradoksu tutarsızlık zannettim. "
        "Sonra şunu fark ettim: annem kendi bedeniyle ilgili sormaya <i>izinli hissetmiyordu</i>, "
        "ama başkasının bedeni adına soru sormak ona doğal geliyordu. Bu, kuşağının kalıbıydı &mdash; "
        "kadının kendisi için değil, başkası için ses çıkarması.",

        "Bizim kuşağımız bu kalıbı kırmaya çalışıyor. Kendimiz için de soruyoruz; ama hâlâ rahat değiliz. "
        "Kızımın kuşağı belki bizden daha kolay yapacak. Üç kuşak arasında bir geçiş halindeyiz &mdash; "
        "ve bu geçişin yorgunluğu da, güzelliği de bize ait."
    ]
))

# === Chapter 06: FAQ ===
faq_head = [
    Paragraph("06", chapter_num_style),
    Paragraph("Pratik: sıkça duyduğum sorular", h2_style),
    HRFlowable(width=2.5*cm, thickness=1.5, color=gold,
               hAlign='LEFT', spaceBefore=4, spaceAfter=12),
    Paragraph(
        "Aşağıdaki sorular bana farklı arkadaşlarımdan ve okurlardan geldi; "
        "her birinin cevabı kendi yolumdaki notum.",
        section_lede_style
    ),
]
story.append(KeepTogether(faq_head))

faq_items = [
    (
        "Hekim seçerken neye bakmalıyım?",
        "İlk olarak ilişkinin sürekli olabilirliğine &mdash; yıllarla derinleşecek bir bağ olup olamayacağına. "
        "İkincisi, hekimin sorularımı kabaca cevaplama eğiliminde olup olmadığı; "
        "&ldquo;bu yaşta bu normal&rdquo; demek yerine &ldquo;haydi birlikte bakalım&rdquo; diyen bir tutum aradım kendim için. "
        "Üçüncüsü, ikinci görüş almama açık olması &mdash; gerçekten güçlü bir hekim, "
        "başka bir hekime danışmaktan rahatsız olmaz."
    ),
    (
        "Dört profil arasından nasıl seçim yapmalıyım?",
        "Önce kendi pozisyonunu tanı: kararı senin için verilmesini mi istiyorsun, yoksa karara katılmak mı? "
        "Bilgi seli içinde rahat etmiyor musun, yoksa çok bilgi sana güç mü veriyor? "
        "Bu soruların cevabı senin için doğru hekim profilini gösteriyor. Tek bir doğru profil yok; "
        "sana uygun olan var. Zaman içinde değişebilir de &mdash; gençken klasik otorite işine yarayan biri "
        "kırk beş yaşında paydaş hekim arıyor olabilir."
    ),
    (
        "Hekimim &ldquo;her şey normal&rdquo; diyor ama ben kendimi iyi hissetmiyorsam?",
        "Bu durumda iki şey yapılabilir: hekiminle &ldquo;normal aralık&rdquo; cümlesinin altında ne anladığını "
        "konuşmak &mdash; <i>senin</i> için neyin normal olduğunu birlikte tanımlamak. "
        "İkincisi, ne hissettiğini daha somut anlatmaya çalışmak: hangi saatlerde, hangi durumlarda, ne sıklıkta. "
        "Tahliller bir şey söyler, sözlerin başka bir şey söyler. İki anlatı birleştiğinde tablo netleşir. "
        "Bu çabaya açık olmayan bir hekimle uzun yola çıkmak zor olur."
    ),
    (
        "HRT konusunda hekimimden tam olarak ne beklemeliyim?",
        "Kararın yükünü tek başına taşımanı değil, seninle birlikte düşünmesini. "
        "&ldquo;Şu ilacı kullan&rdquo; cümlesinden çok &ldquo;şu seçenekler var, sen ne hissediyorsun?&rdquo; "
        "cümlesini duymak istiyorsan, bu beklenti seni yalnız bırakacak bir hekim değil &mdash; paydaş bir hekim "
        "arıyorsun demektir. Bu beklentinin altını çizmek senin hakkın; ifade etmek de senin sorumluluğun."
    ),
]

for q, a in faq_items:
    story.append(KeepTogether([
        Paragraph(q, faq_q_style),
        Paragraph(a, faq_a_style),
    ]))

# Closing italic lede
story.append(Paragraph(
    "Cevabı bulmak değil, doğru soruyu sormaya alışmak &mdash; son birkaç yıl bana bunu öğretti. "
    "Modern kadın menopoz takibinde tek bir şey aramıyor; hekim de tek bir şey olamıyor. "
    "Önemli olan kadının kendi pozisyonunu tanıması, ve bu pozisyona uyacak hekimle uzun bir bağ kurabilmesi. "
    "Senin yolun başka olacak &mdash; ve olmalı da.",
    closing_lede_style
))

# Bilimsel Editör Notu (HARD MUST-CHECK — her makalede zorunlu)
story.append(Spacer(1, 0.6*cm))
story.append(bilimsel_editor_notu(
    "Modern menopoz takibinde hekim-hasta ilişkisinin niteliği ve sürekliliği, klinik karar verme "
    "süreçlerinde belirleyici bir faktör olarak öne çıkmaktadır. Paydaş karar verme "
    "(shared decision-making) modeli, özellikle uzun süreli hormonal takipte hasta katılımını ve "
    "tedaviye uyumu artıran bir yaklaşım olarak güncel jinekoloji literatüründe tartışılmaktadır. "
    "Yine de hekim seçimi ve takip stratejisi her bireyin sağlık geçmişine, kişisel beklentilerine "
    "ve yaşam koşullarına göre kişiselleştirilmelidir. Bu yazıdaki gözlemler genel bir bilgilendirme "
    "amacındadır; hormonal geçiş ve hormon replasman tedavisi (HRT) kararları konusunda kendi "
    "hekiminizle birlikte değerlendirme yapmanız önerilir."
))

story.append(HRFlowable(
    width=16*cm, thickness=0.4, color=very_light_gray,
    spaceBefore=12, spaceAfter=8
))
story.append(Paragraph(
    "<i>Bu yazı bilgilendirme amaçlıdır; bireysel tıbbi değerlendirme, tanı veya tedavinin yerini almaz. "
    "Hormonal geçiş süreciyle ilgili kararlarda kendi hekimine danışman önerilir.</i>",
    inline_disclaimer_style
))

# --- Build PDF ---
output_path = r"C:\Users\KC3\Downloads\berna-hekim-bagi-perimenopoz-taslak.pdf"

doc = SimpleDocTemplate(
    output_path,
    pagesize=A4,
    leftMargin=2.5*cm, rightMargin=2.5*cm,
    topMargin=2*cm, bottomMargin=2.5*cm,
    title="Eşim hekim ama hekimim değil — modern kadın menopoz takibinde ne arıyor",
    author="Berna Aksoy",
    subject="Estranova editöryal taslak — hekim-hasta ilişkisi, etik sınır, doktor profilleri, modern kadın",
    creator="Estranova editöryal pipeline",
)

doc.build(story, canvasmaker=FooterCanvas)

print(f"PDF olusturuldu: {output_path}")

import os
size_kb = os.path.getsize(output_path) / 1024
print(f"Boyut: {size_kb:.1f} KB")
