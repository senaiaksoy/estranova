# CLAUDE.md

## Belge amacı ve üst kural statüsü

Bu dosya (**`CLAUDE.md`**) Estranova ekosistemindeki **tüm ajan ve üretim hatları** için **üst kural setidir**: Research, Writer, Medical / Fact-check, Compliance, Publisher, Orchestrator ve repo içi otomasyonlar bu kurallara tabidir.

Aşağıdaki **HARD CONSTRAINT** bölümleri (**§1–§6**) **opsiyonel değildir**. **Her üretimde** uygulanır; **Writer ve tüm metin üreten ajanlar** bunları **ihlal edemez**. Çelişki durumunda önce bu bölümler, sonra genişletilmiş rehber uygulanır.

---

## HARD CONSTRAINTS — Tüm ajanlar (zorunlu)

### Dil politikası — Site ve yayın dili (HARD CONSTRAINT)

- Estranova **kullanıcıya görünen site yüzü tek dildir: Türkçe.** Menü, başlık, gövde metni, düğme metni, kart metni, meta açıklama, alternatif metin (uygun olduğunda) ve **yayınlanacak makale / içerik gövdesi** Türkçe olmalıdır; **İngilizce arayüz metni, İngilizce başlık veya İngilizce paragraf** kullanılmaz.
- Şema.org tür adları (`BlogPosting` vb.), teknik alan adları veya URL yolu (`/blog` gibi) teknik istisna sayılır; **okuyucuya sunulan her ifade Türkçedir**.
- Nadiren gerekli bilimsel/uluslararası öznitelik (ör. hastalık veya kavramın yaygın İngilizce adı) yalnızca **kısa**, **köşeli parantez veya `lang="en"` ile işaretli** ve **Türkçe açıklama eşlikli** olabilir; gövde anlatımı yine Türkçedir.
- Tüm ajanlar: üretilecek **yayın metni, SEO başlığı ve özet/snippet** Türkçedir.

### 1. Sistem Rolü ve Kimlik

- Estranova, **premium editoryal kadın sağlığı bilgi platformudur**: perimenopoz, menopoza hazırlık, menopoz, 40+ sağlık ve hormonal geçiş döneminde yaşam tarzı ile ilgili **yapılandırılmış rehberlik** sunar.
- **Şunlar değildir:** klinik sitesi; tedavi pazarlaması; hasta edinme hunisi; tele-tıp ürünü; abonelik sağlık platformu; takviye / ürün satış sitesi; başhekim reklamı veya “en iyi uzman” vitrini.
- Platform her zaman şöyle hissettirmelidir: **edisyon yayını**; **tıbben gözden geçirilmiş bilgi kaynağı**; **40+ kadınlar için sakin, net yönlendirme**.
- **Tema odağı:** perimenopoz, menopoza hazırlık, menopoz, 40 sonrası sağlık, hormonal geçişte yaşam tarzı ve iyi oluş.

### 2. Hedef Okuyucu

- Birincil okuyucu: **40 yaş ve üzeri**, hormonal geçiş ve kadın sağlığı konularında **güvenilir, nötr bilgi** arayan kadınlar (Türkiye bağlamında Türkçe içerik).
- Okuyucu **hasta edinme hunisinde değildir**; “hemen randevu / paket / kampanya” ile konumlandırılmaz.
- İçerik **korku, utandırma veya aşırı aciliyet** ile manipüle etmez; **panik dili** kullanmaz.
- Dil: **anlaşılır Türkçe**; gerektiğinde teknik terime kısa açıklama; okuryazar ama **akademik şişkinlik ve plaza dili** hedeflenmez (ayrıntı: §3 ve §6).

### 3. Yazar Ses ve Üslup

- **Ton:** tıbbi olarak okuryazar, **sakin**, **kesin**, **güven veren**, **zarif**, **insani**, **sansasyonel olmayan**.
- **Kaçınılacaklar:** abartı, alarmist ifade, mucize dili, aşırı vaat, influencer tonu, **satış / funnel metni**, uygulama-SaaS panosu dili, “en iyi / garanti / kesin çözüm” hissi.
- **Tercih edilen çerçeve:** yapılandırılmış rehberlik; bilimsel açıklık; kanıta duyarlılık; okuyucunun anlamasına yardım.
- **Stratejik tercih (çelişkide):** editoryal nötrlük > dönüşüm; güven > ikna; rehberlik > promosyon; eğitim > lead toplama; yapı > hype.
- Uzman görünür olabilir; **promosyonel çerçeve** (en iyi doktor, rakipsiz başarı vb.) **yasaktır** (uzman çerçevesi: editoryal katkı, tıbbi inceleme, uzman perspektifi — üstünlük iddiası değil).

### 4. Yasaklı İfadeler ve İçerik Kalıpları

**Dil — örnek yasaklar (tam ve anlamca eşdeğerleri):**  
Randevu al; Tedaviye başla; Hemen başvur; En iyi; En başarılı; Garantili; Kesin çözüm; Başarı oranlarımız; Paketlerimiz; Kampanya; İndirim; Şimdi satın al; “book now” tarzı sağlık CTA’ları; fiyatlandırma tabloları (tıbbi hizmet satışı için); başarı oranı pazarlama bölümleri; hasta referansı duvarı; “en iyi klinik / en iyi uzman” metni; doğrudan satış hunisi kılığında sağlık rehberliği.

**Tercih edilen nötr CTA örnekleri (uygunsa):** Rehberi keşfet; Belirtileri değerlendir; Bilgi al; İçeriği incele; Daha fazla bilgi; Devamını oku.

**İçerik kalıbı — oluşturma:** before/after bölümleri; tanık hikayesi ile promosyon kanıtı; başarı iddiası; tedavi vaadi; satış karşılaştırması; paket / fiyat bölümleri; agresif dönüşüm hunisi; güçlü satış niyetiyle dönüşüm odaklı tıbbi landing sayfaları.

**Plaza dili / iş İngilizcesi:** “aksiyon almak”, “fokuslanmak”, “set etmek”, “push etmek”, “optimize”, “deadline”, “stakeholder” vb. **sade Türkçe** ile değiştirilmelidir (Writer’da zorunlu eşleştirme listesine uyum).

**Tıbbi sınır:** teşhis, tedavi önerisi, reçete dili, bireysel tıbbi karar dayatma, abartılı tıbbi kesinlik **yasaktır**. İçerik **bilgilendirme amaçlıdır**; bireysel değerlendirme, tanı veya tedavinin yerini almaz (standart uyarı görünür olmalı).

### 5. Estranova DNA

- **Kimlik özü:** genel ilgi sağlık **yayını** mantığında kal; doğrudan tedavi pazarlaması değil.
- **Güven mimarisi:** Editoryal Politika, Tıbbi Sorumluluk Reddi, Gizlilik, Hakkımızda, İletişim gibi sayfalarla uyumlu, **nötr ve görünür** uyarılar.
- **Bilgi mimarisi:** hizmet menüleri (“Tedavilerimiz”, “Randevu”, “Paketler”) yerine **bilgi yolları** (perimenopoz, menopoz, 40+ sağlık, yaşam tarzı, uzman içgörüleri).
- **Öncelik sırası (çelişkide):**  
  1. Düzenlemeye uygun nötrlük  
  2. Güven  
  3. Açıklık  
  4. Editoryal kalite  
  5. Dönüşüm  
  Dönüşüm nötrlikle çelişirse **nötrlik** kazanır.

### 6. Kalite Kontrol Checklist

Aşağıdaki kontroller **her üretimde** (metin, sayfa taslağı, agent JSON çıktısı) doğrulanmalıdır; **tek bir “hayır”** ilgili pipeline’da **düzeltme veya reddetme** gerektirir.

- [ ] **§1 Kimlik:** Çıktı bir klinik / tedavi satışı / huni sitesi gibi sunulmuyor.
- [ ] **§2 Okuyucu:** 40+ bilgi arayan kadın perspektifi korunuyor; korku / utanç / aşırı aciliyet yok.
- [ ] **§3 Ses:** Sakin, kesin, güven veren, sansasyonel olmayan ton; influencer ve satış kopyası yok.
- [ ] **§4 Yasaklar:** §4’teki yasak ifade ve içerik kalıpları ve plaza dili **yok**; nötr CTA kuralları ihlal edilmiyor.
- [ ] **§5 DNA:** Editoryal yayın çizgisi ve güven / nötrlük önceliği bozulmuyor.
- [ ] **Tıbbi sınır:** Teşhis, tedavi talimatı, reçete dili yok; bilgilendirme amaçlı çerçeve ve gerekliyse **doktorunuza danışın** tipi güvenli yönlendirme yer alıyor.
- [ ] **Kanıt zinciri:** İddialar Research onaylı kaynaklar ve izlenebilir iddia izi ile uyumlu (Research / Writer / Fact-check sorumluluklarına göre).
- [ ] **Okuma düzeyi:** Yaklaşık **10. sınıf ve altı** sade Türkçe hedefi; gereksiz akademik yığın ve iç içe uzun cümle yok (Compliance ile uyumlu).
- [ ] **Dil politikası:** Kullanıcıya dönük metin ve yayın içeriği **yalnızca Türkçe**; İngilizce UI veya tam İngilizce paragraf yok (bkz. üstte **Dil politikası**).

---

## Genişletilmiş rehber (tasarım, UX, uygulama)

Aşağıdaki bölümler **HARD CONSTRAINT §1–§6** ile çelişmedikçe geçerlidir; çelişkide **yukarıdaki HARD CONSTRAINT’ler** önceliklidir.

### Design System Principles

#### Visual tone
The site must feel:
- premium
- calm
- medically trustworthy
- elegant
- editorial
- clear
- structured

It must NOT feel like:
- a pink beauty blog
- a startup SaaS product
- a mobile wellness app
- a treatment funnel
- a supplement store
- a hospital dashboard

#### Color direction
Preferred palette:
- muted deep burgundy
- warm cream
- soft beige-gold accent
- dark gray text
- white or warm off-white backgrounds

#### Typography
Preferred style:
- elegant serif for headings
- highly readable sans-serif for body copy

#### Layout
Use:
- generous whitespace
- large type
- short text blocks
- strong hierarchy
- modular page sections
- desktop-first responsive layout

Avoid:
- app-like cards everywhere
- dashboard patterns
- bottom mobile navigation patterns
- overly decorative magazine chaos
- crowded hero sections

### UX Rules

This is a content-driven website, not an application.

Always structure pages as websites with:
- top navigation
- homepage sections
- category pages
- article pages
- informational subpages
- footer with trust architecture

#### Homepage must include
- Hero section
- Hormonal transition summary
- Journey section:
  - Perimenopause
  - Preparing for Menopause
  - Menopause
  - Health After 40
- Symptom-based navigation
- Expert-reviewed trust section
- Featured educational content
- Preventive health block
- Soft information CTA
- Footer with policy/disclaimer links

#### Article pages must include
- clear article title
- short summary or quick answer box
- structured subsections
- neutral medical tone
- optional clinical insight box
- related content links
- medical disclaimer

#### Article layout (implementation)

For new static Astro articles, follow **AGENTS.md → “Article page layout (Astro)”**: `SubmenuHero` (when in `submenu-heroes`), `SubmenuArticleBody`, `ArticleProsePanel` for body HTML, then related content, optional editor note, disclaimer. Reference `src/pages/zihin-denge/uyku-bozuklugu-menopoz.astro`. Dynamic articles use `article/[slug].astro` with the same body components.

### Content Architecture Rules

The site architecture should be built around knowledge pathways, not services.

Preferred main sections:
- Perimenopause
- Preparing for Menopause
- Menopause
- Health After 40
- Lifestyle & Well-being
- Expert Insights
- About the Platform
- Editorial Policy
- Medical Disclaimer
- Contact / Information

Do not use service-oriented menus such as:
- Treatments
- Our Services
- Book Appointment
- Packages
- Pricing

### Expert Positioning

The expert behind the platform may be visible, but must not be framed in a promotional manner.

Preferred framing:
- editorial contribution
- medical review
- expert perspective
- clinical insight

Avoid:
- overt physician self-promotion
- superiority claims
- competitive comparisons
- reputation marketing

### Trust Architecture

Every implementation should support trust with:
- Editorial Policy
- Medical Disclaimer
- Privacy Policy
- About the Platform
- Contact / Information page

Medical disclaimer language must always be neutral and visible.

Suggested principle:
This content is for general information only and does not replace individual medical evaluation, diagnosis, or treatment.

### Images and Media

Preferred image direction:
- calm, confident women aged 40–55
- natural light
- thoughtful editorial portraits
- non-dramatic doctor-patient trust moments
- subtle lifestyle scenes

Avoid:
- suffering stereotypes
- exaggerated menopause sadness
- beauty ad styling
- product mockups
- supplement bottles
- sales graphics
- startup iconography

### If Asked to Create New Pages

Before generating a new page, check:
1. Does this page feel like editorial information rather than medical advertising?
2. Is the CTA neutral?
3. Does the page avoid direct treatment promotion?
4. Does the design look like a website, not an app?
5. Does the page reinforce trust rather than conversion pressure?

If any answer is no, revise before finalizing.

---

## Agent uygulama notu

- **Dil politikası:** Üretilen **yayın metinleri ve kullanıcıya görünür kopyalar** Türkçedir; yukarıdaki **Dil politikası — Site ve yayın dili** bölümüne uyum zorunludur.
- **Writer** ve metin üreten tüm ajanlar: **`CLAUDE.md` HARD CONSTRAINT §1–§6** ile **prompt içi “hard constraint”** bloklarında hizalanmalıdır; üretim başına checklist (§6) mantığı uygulanmalıdır.
- **Research / Fact-check:** §6’daki kanıt ve izlenebilirlik maddeleri zorunludur.
- **Compliance:** §3–§5 ve §6 ile uyum; çelişen çıktı **revizyon veya red** gerektirir.
- **Publisher / site üretimi:** §1–§2 ve güven / nötr CTA kuralları; içerik gövdesi Writer çıktısına dayanır.
