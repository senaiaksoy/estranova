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

#### Yazar persona'sı (HARD CONSTRAINT)

- **Yazar profili:** Estranova yazıları; tıp/sağlık dışı bir meslekte başarılı, 40+ yaşında, kendi hormonal geçişini yaşamış veya yaşamakta olan, **konuyu kişisel deneyimle ve geniş okuma ile** anlamış bir kadın gibi seslenir. Yazar **bir hekim ya da klinisyen değildir**; ama konuyu derinlemesine merak etmiş ve okumuş bir akrandır.
- **Karşılaştırma referansları:** Vogue Türkiye, Elle Türkiye, Marie Claire Türkiye, Harper's Bazaar Türkiye sağlık-yaşam köşeleri. **YASAK:** medical journal yorumu, klinik rehber özeti, doktor blogu tonu.
- **"Ben de sizden biriyim" zorunluluğu:** Her makalede yazar, okuyucu ile **akran olarak** konuşur. "Sen", "biz", "bu dönemden geçen birçoğumuz" gibi bağlar zorunludur. "Hastalarımda gözlemliyorum" / "klinik deneyimimde" / "tıbbi olarak şunu söyleyebilirim" tarzı uzman-perspektif **YASAK**.
- **Kanıt sunum tarzı:** Yazar bilime saygılıdır; yumuşak referans ile kuruluş adı / URL yasağı **§4 Yasak referans biçimleri** ile hizalıdır.
- **Tıbbi inceleme katmanı arka planda:** Estranova'nın "tıbben gözden geçirilmiş" güven mimarisi (CLAUDE.md §5) **görünmez ama vardır**: editöryal politika sayfasında medical reviewer ismi geçer, makale gövdesinde geçmez. Makale gövdesi tamamen yazar-okur diyalogudur.

#### Editöryal ses sürekliliği (HARD CONSTRAINT)

- `acilis_sahnesi` bölümünde kurulan **sen-tonlu, samimi sahne** tüm **8 ana bölüm** boyunca korunur; ders kitabı / anonim klinik ansiklopedi diline kayma **yasaktır**.
- Her `##` bölümünde en az bir **akran bağı** olmalı: "sen", "biz", "birçoğumuz", "vücudun", "hissettiğin", "fark etmedin" vb. (yalnızca açılışta sıcak ton, sonrası soğuk anlatım = ihlal).

#### Humanize zorunluluğu (HARD CONSTRAINT)

- Her makalede en az **1** (tercihen 1–2) **akran / deneyim** cümlesi: "Bu dönemden geçen biri olarak", "Bir arkadaşımın anlattığı gibi", "Belki sen de yaşıyorsundur", "Hepimizin tanıdığı bir his" benzeri.
- **Yasak:** yalnızca anonim klinik özet ("kadınlarda görülür", "hastalarda yaygındır") **biz-tonlu** karşılık olmadan kullanılamaz; mümkünse "birçoğumuzun bildiği gibi" gibi bağlaştır.

#### FAQ disiplini (HARD CONSTRAINT)

- `pratik_veya_sss` bölümü **3–5** adet **konuya özgü**, long-tail niteliğinde gerçek soru içerir; her yanıt **en az 2–3 cümle** derinlikte olmalıdır.
- **Yasak:** jenerik meta sorular ("bu içerik kimler için", "tıbbi karar yerine geçer mi", "Türkiye bağlamı neden ayrı", "bu metin neyi netleştirir") — SEO şablonu / FAQ stuffing sinyali. Ayrıntı: `agents/writer_agent.md` + `agents/writer_agent.py` doğrulaması.

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

#### Yasak referans biçimleri (HARD CONSTRAINT)

- **Inline harici URL yasak:** Makale, sosyal veya bülten gövdesinde markdown `[metin](http://...)` veya `https://...` ile okura tıklanır dış kaynak bağlantısı **yok** (pipeline’da deterministik `regulation_risk`).
- **Uluslararası kuruluş / yayın adı yasak:** Metin gövdesinde **NAMS, NICE, JAMA, Lancet, NEJM, Mayo Clinic, ACOG, Cleveland Clinic, USPSTF, WHO, NHS, CDC, FDA, PubMed** vb. adları cümle içine yerleştirmek **yasaktır** (aynı liste `compliance_expert_agent.py` ile denetlenir).
- **Serbest:** anonim yumuşak referans — örn. "araştırmalar gösteriyor", "uzmanlar genellikle belirtiyor", "menopoz alanında çalışan dernekler öneriyor".
- **İç bağlantı:** Site içi öneri listesi **yalnızca Publisher** paketinde otomatik eklenir; **Writer makale gövdesine iç link blokları veya URL önerisi yerleştirmez** (`agents/writer_agent.md` ile uyumlu).

#### Yazar dilinde yumuşatma (HARD CONSTRAINT)

- **"Destekler" / "iyileştirir"** yalnızca **3. şahıs aktif fiil** anlamında yasaktır ("X'i destekler", "Y'yi iyileştirir"); **pasif ve sıfat formları** (destekleyen, destekleyici, desteklenmektedir, destekleyebilir, iyileştirici, iyileşebilir) **meşru** akademik / yumuşatılmış kullanımdır (`compliance_expert_agent.py` word-boundary eşlemesi).
- **Tercih edilen kalıplar:** "yardımcı olabilir", "ilişkili olabilir", "fayda görebilir", "herkeste aynı olmayabilir".

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

#### Pipeline operasyonel parametreleri (referans)

- **Yayın eşiği:** `compliance_score` **≥ 85** iken yayın bandına girilebilir (`COMPLIANCE_SCORE_PUBLISH_OK`; altı revizyon / best-effort akışı). Tam sayı ve model matrisi: **`docs/PIPELINE.md`**.
- **Best-effort:** En fazla **2** revizyon turundan sonra zorunlu durdurma ve `ready_to_publish_best_effort` — ayrıntı aynı belgede ve `agents/compliance_expert_agent.py`.

#### Editöryal gövde tipografisi — makale sayfaları (HARD CONSTRAINT)

Makale gövdeleri (Astro veya dinamik) **tek bir editöryal tipografi sistemi** ile yayınlanır. Bu sistem Estranova'nın "Vogue TR / Elle TR" editöryal hissini doğuran yegâne mekanizmadır; farklı bir `prose` veya custom wrapper kullanılamaz.

- **Wrapper zorunluluğu:** Makale ana metni her zaman `ArticleProsePanel` içinde yayınlanır. İçerideki div: `class="prose prose-lg prose-estranova max-w-none"`. Bu üç class birlikte zorunludur; değiştirilemez, kaldırılamaz.
- **Otomatik bölüm numarası (chapter counter):** `prose-estranova` her `<h2>`'nin üstüne gold renkte `01`, `02` … numarası basar (`counter-increment: estranova-chapter`). Sidebar TOC'deki numaralarla **görsel olarak kenetlenir** — TOC ve chapter numaralarının eşleşmesi için ArticleProsePanel dışında manuel `<h2>` kullanma.
- **Altın ayraç:** Her H2'den sonra 2.5rem genişlikte gold çizgi (`::after`) otomatik basılır. Bu çizgiyi manuel `<hr>` ile taklit etme; kart içinde çift çizgi doğar.
- **İtalik lede zorunluluğu:** Her H2'den **sonraki ilk `<p>`** otomatik olarak **italic serif burgundy** render edilir (`h2 + p` selector). Bu paragraf bölümün "lede"sidir — 1-2 cümlede bölümün kanısını/sorusunu/durumunu kurar. **Bullet list, ağır veri, veya uzun tanım ile başlayan bölüm yasaktır**; yazar, publisher ve her metin üreten ajan bunu üretim sırasında hesaba katar.
- **Gizli mekanizma:** CSS editoryal katmanı görünür. Yazar markdown/HTML'de sadece `<h2>başlık</h2><p>gövde</p>` yazar; numara, çizgi ve italic lede görsel katmandan gelir. Yazar manuel olarak "01." yazmaz, italic tag atmaz.
- **Değiştirme kuralı:** `src/index.css` içindeki `@utility prose-estranova` bloğuna yapılan değişiklikler tüm makaleleri etkiler. Renk tokenları (`--tw-prose-*`) ve palet değerleri (#6B2D3E, #C9A96E, #4f171c, #2D2D2D) marka paletinde sabittir; "premium editöryal his" tanımlı bu paletle korunur.
- **Teknik kaynak:** Uygulama detayı + kod snippet'leri **AGENTS.md → "Article page layout (Astro)"** bölümünde. Kurulum: `@tailwindcss/typography` devDependency, `src/index.css` içinde `@plugin "@tailwindcss/typography"`.
- **Kanıt düzeyi etiketi:** Yayında kanıt gücü yalnızca `<Evidence level={N} />` (`N` = 1–5) veya aralık için `<Evidence from={A} to={B} />` ile gösterilir. Render formatı **parantez içi italic Türkçe etikettir**: `(güçlü kanıt)` · `(iyi kanıt)` · `(orta kanıt)` · `(sınırlı kanıt)` · `(zayıf kanıt)`; aralık `(orta–iyi kanıt)` biçiminde birleşir. Level 5 burgundy, level 4 gold-bronze, level 1-3 gold; italic Newsreader serif, 0.85em. Tooltip (`title` + `aria-label`) sayısal magnitude'u (`5/5` vb.) korur. `[●●●●●]`, `[●●●●○]` vb. **literal nokta / daire dizileri yasaktır**; Writer ve Publisher bu kalıpları metne yazmaz, Publisher Astro gövdesinde `Evidence` bileşenini kullanır.

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
- [ ] **Yazar tonu:** Akran / lifestyle dergi çizgisi (§3); **hekim veya klinisyen personası yok**; "hastalarımda gözlemliyorum" vb. yok.
- [ ] **Harici URL:** Makale gövdesinde inline harici markdown link **yok** (§4).
- [ ] **Kuruluş adı:** Uluslararası medikal kuruluş / yayın adı gövdeye gömülmemiş (§4).
- [ ] **Humanize:** En az bir akran / deneyim cümlesi var (§3).
- [ ] **FAQ:** `pratik_veya_sss` 3–5 konuya özgü soru; jenerik meta soru yok (§3 + Writer doğrulaması).
- [ ] **Editöryal tipografi:** Makale gövdesi `ArticleProsePanel` + `prose-estranova` ile yayınlanıyor; H2 sonrası ilk paragraf bölümün lede'sini kuracak 1-2 cümlelik editöryal açılış (veri yığını, bullet list veya uzun tanımla başlamıyor).
- [ ] **Yapılandırılmış veri (JSON-LD):** Her yayın makalesinde `MedicalWebPage` + `Article` + `BreadcrumbList` schema'sı var; `author.Person` writers.ts'ten geliyor, `reviewedBy.Person` tıbbi editör (Doç. Dr. Senai Aksoy), `articleSection` + `sectionPath` kategoriye uygun. Helper: `src/utils/article-schema.ts → buildArticleSchemas()`.

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

---

## Makale üretimi — uçtan uca spec

Yeni bir makale üretirken (yazar ataması, Astro scaffolding, Evidence/BEN yerleşimi, hub linkage, JSON-LD, 17 maddelik pre-publish checklist) **tek kanonik referans:**

> **[`docs/ARTICLE-PRODUCTION-SPEC.md`](docs/ARTICLE-PRODUCTION-SPEC.md)**

AI/yazar ajan her makale öncesi bu dosyayı okur. Mevcut belgeleri (CLAUDE.md HARD CONSTRAINTS, AGENTS.md Astro layout, writers/<yazar>.md §0.5 yazar protokolleri) **tekrarlamaz, bağlar.** Faz 1-6 + Pre-publish Checklist içerir; **13-17 herhangi 'hayır' = otomatik büyük revizyon, yayın engellenir.**

**Çift Rol Uyarısı** (Doç. Dr. Senai Aksoy = Gamze Cizreli'nin gerçek jinekoloğu) bu spec'in Faz 1.3 + Faz 4.3'te kritik sınır olarak işaretli; Gamze adına yazılan tüm makaleler için zorunlu kontrol.
