# Stil Kontrol Dokümanı — Berna Aksoy / Perimenopozda İlk İşaretler

> **Makale:** "Perimenopozda İlk İşaretler: “Bende Bir Şey Değişiyor” Dedirten Dönem"
> **Slug:** `/hormonal-gecis/perimenopoz/perimenopoz-ilk-isaretler`
> **Yazar:** Berna Aksoy (slug: `berna-aksoy`)
> **Profil seti:** modüler yapı — `writers/berna-aksoy/README.md`, `hot.md`, `warm.md`
> **Kontrol tarihi:** 5 Mayıs 2026
> **Kaynak dosya:** `src/pages/hormonal-gecis/perimenopoz/perimenopoz-ilk-isaretler.astro`

---

## 1. Kısa hüküm

Bu makale Berna Aksoy sesinin ana omurgasını büyük ölçüde taşıyor: kişisel ama klinik kürsüsüne çıkmayan bir açılış, dolaylı sesle kurulmuş yaşıt sahnesi, sakin hekim çerçevesi, yumuşak ama net bir kapanış ve güçlü bir bilimsel iskelet var.

Buna karşılık yayın-standardı açısından **3 net revizyon ihtiyacı** bulunuyor:

1. **Tek görünür SSS yüzeyi kuralı ihlal ediliyor.** Gövde içinde `Sıkça Sorulanlar` H2 bloğu var; ayrıca altta `ArticleFAQ` akordeonu da render ediliyor.
2. **Hitap standardı yer yer kayıyor.** Berna metni genel olarak “siz” çizgisinde olsa da bazı cümleler “sen” ya da tekil emir kipine düşüyor.
3. **Deterministik lexicon riski var.** `örüntü` hard-ban listesinde; makalede hem ana gövdede hem Bilimsel Editör Notu'nda geçiyor.

Bu yüzden genel sonuç: **ses güçlü, ama stil-polisi ve yayın-lint açısından revizyon gerekli.**

---

## 2. Profil katmanları — uyum matrisi

| # | Katman | Durum | Kanıt |
|---|---|---|---|
| 1 | **Signature açılış havuzu** | ✓ Güçlü | Makale `Bir noktada şunu fark ettim` açılışıyla başlıyor; bu Berna `hot.md` açılış havuzundaki klasik varyantla uyumlu. |
| 2 | **Dolaylı ses / yaşıt aktarımı** | ✓ Güçlü | Açılışta `Tanıdığım bir kadın bunu çok sade anlatmıştı` cümlesi Berna'nın `warm.md` dolaylı ses kanallarıyla tam uyumlu. |
| 3 | **Klinik kürsüsü yasağı** | ✓ Temiz | Metin hekim gibi konuşmuyor; “tıbbi olarak” açıklama var ama ana ses editoryal kalıyor. Klinik otorite yalnızca `ArticleEditorNote` içinde toplanmış. |
| 4 | **Hekim çerçevesi kullanımı** | ✓ Doğal | `Hekimimle bir konuşmamızda şunu söylemişti` cümlesi Berna `hot.md` içindeki tercih edilen çerçevelerden biriyle uyumlu. |
| 5 | **Anekdot sayısı disiplini** | ✓ Kabul | Bir ana dolaylı ses anekdotu + bir hekim cümlesi var; 1-2 anekdot kuralı aşılmıyor. |
| 6 | **Bedeni bir yazı gibi okuma kapanışı** | ✓ Güçlü | Finalde `Beden bir cümle söylemişti; siz onu bu kez kendi takviminize yazıyorsunuz` cümlesi Berna'nın “bedenle yazışma” imzasını taşıyor. |
| 7 | **Kolektif “biz” sahne kurmama** | ✓ Temiz | Berna'ya özel yasak olan “hepimiz / birçoğumuzun aynı sahnesi” açılışı yok. |
| 8 | **Kanal A kapalı alanlara girmeme** | ✓ Temiz | Yazar kendi sıcak basması, kilosu, gece uyanması gibi birinci el beden izlerini anlatmıyor; dolaylı ses kullanıyor. |

---

## 3. Güçlü çalışan alanlar

### Açılış

Makalenin ilk bölümü Berna için doğru yerden açılıyor: büyük iddia yerine küçük fark hissi. “Evin içinde yeri değişmiş küçük bir eşya” benzetmesi, hem Vogue/TR editoryal hissine yakın hem de panik dili üretmeden bedensel değişimi görünür kılıyor.

### Bilimsel omurga

Makale perimenopozun klinik tanımını, adet değişimini, vazomotor belirtileri, bilişsel etkileri ve testlerin sınırlılığını dengeli biçimde kuruyor. `Evidence` kullanımı düzenli; uluslararası kurum adı ya da dış link sızıntısı yok.

### Berna'ya uygun dolaylı ses

Berna profilinde hassas kalemlerde birinci el bedensel anlatım yerine dolaylı ses tercih ediliyor. Bu yazı da o sınırı iyi koruyor. “Tanıdığım bir kadın...” ile açılması bu makalenin en isabetli ses kararlarından biri.

### Kapanış tonu

Kapanış bölümünde dramatik zafer anlatısı yok; bedenin verdiği sinyalleri “küçük notlar” gibi okuyan, yumuşak ama akılda kalan bir editoryal bitiş var. Bu, Estranova'nın satışsız güven diline uygun.

---

## 4. Revizyon gerektiren noktalar

### A. Tek görünür SSS yüzeyi ihlali

`CLAUDE.md` ve `AGENTS.md` aynı kuralı koyuyor: yayınlanan sayfada **tek görünür SSS yüzeyi** olmalı.

Bu makalede ise iki ayrı yüzey var:

- gövde içinde `h2 id="sorular"` altında 5 soru-cevap
- gövde sonrasında `<ArticleFAQ id="sik-sorulanlar" items={faqItems} />`

Bu yalnızca görsel tekrar üretmiyor; aynı zamanda schema kaynağıyla görünür içerik arasında drift riski yaratıyor. `FAQPage` şeması `articleFaqs.ts` içindeki 3 soruya bağlıyken, gövdedeki editoryal SSS 5 ayrı soru taşıyor.

**Öneri:** Ya gövde içindeki `Sıkça Sorulanlar` bölümü kalsın ve `ArticleFAQ` kaldırılsın, ya da gövde içi H2/Q&A bloğu çıkarılıp tek yüzey `ArticleFAQ` olsun.

### B. “Siz” standardında kırılma

Makale genel olarak “siz” çizgisine yakın ama bazı satırlarda hitap kırılıyor:

- Açılışta: `... neyin farklı olduğunu bilemiyorsun ...`
- İzleme planı maddelerinde: `not et`, `işaretle`, `kaydet`

Bu Berna'nın yaşıt tonunu bozmaz ama Estranova'nın **tekil hitap standardını** bozar. Aynı blok içinde tekil emir ile çoğul/nötr anlatım karışması, makaleyi editoryal olarak biraz “taslak” hissettiriyor.

**Öneri:** tüm bu satırlar “not edin”, “işaretleyin”, “kaydedin” ya da daha nötr biçimde “not almak işe yarar” çizgisine çekilmeli.

### C. Hard-ban lexicon ihlali: `örüntü`

`config/editorial-lexicon.json` içinde `örüntü` hard-ban listesinde. Makalede bu sözcük en az iki yerde geçiyor:

- `Burada önemli olan tek bir ay değil, örüntüdür.`
- Bilimsel Editör Notu içinde `menstrual döngü örüntüsünün değiştiği geçiş dönemidir`

Bu tür kullanım yayın öncesi lint kontrolünde fail üretir.

**Öneri:** `örüntü` yerine `seyir`, `gidiş`, `düzen` ya da `tekrar eden tablo` kullanılmalı.

---

## 5. Mikro stil kontrol

| Kural | Durum | Not |
|---|---|---|
| Cümle ritmi | ✓ | Çoğu paragraf 2-4 cümlelik, okunur ritimde. |
| H2 sonrası lede | ✓ | Bölüm açılışları çoğunlukla iyi editoryal lede taşıyor; veri dökümüyle başlamıyor. |
| Dış URL yok | ✓ | Makale gövdesinde inline link yok. |
| Kuruluş adı yok | ✓ | NAMS/NICE vb. doğrudan kurum adı geçirilmemiş. |
| Plaza dili yok | ✓ | Dil sade, reklam-cümlesi ya da iş İngilizcesi sızıntısı taşımıyor. |
| Yumuşatma dili | ✓ | “işaret edebilir”, “çoğu zaman”, “anlamlı olabilir” çizgisi korunuyor. |
| Soru yoğunluğu | ✓ | Retorik soru aşırı değil; okuru bunaltmıyor. |
| Emir kipi kontrolü | △ | Özellikle izleme planı maddelerinde tekil emir var; “siz” standardıyla uyumsuz. |

---

## 6. Yapısal yayın kontrolü

| Öğe | Durum | Not |
|---|---|---|
| `SubmenuHero` + `SubmenuArticleBody` | ✓ | Hub-stil makale iskeleti doğru kurulmuş. |
| `ArticleAuthorBlock` | ✓ | Yazar, tarih ve okuma süresi mevcut. |
| `ArticleSummary` | ✓ | Kısa Özet yüzeyi doğru kullanılmış. |
| `ArticleProsePanel` | ✓ | Ana gövde tek editoryal tipografi sisteminde. |
| `Evidence` kullanımı | ✓ | Bilimsel iddialar yanında görünür. |
| `RelatedReadings` | ✓ | Mevcut. |
| `ArticleEditorNote` | ✓ | Bilimsel güven bloğu yerinde. |
| `ArticleDisclaimer` | ✓ | Nötr uyarı mevcut. |
| `buildArticleSchemas()` | ✓ | JSON-LD helper kullanılıyor. |
| `FAQPage` ile görünür SSS birebirliği | ✗ | Görünür çift SSS yüzeyi nedeniyle birebirlik bozuluyor. |

---

## 7. Sonuç skoru

| Alan | Skor | Yorum |
|---|---|---|
| Berna ses uyumu | 4/5 | Güçlü açılış, dolaylı ses ve kapanış var. |
| Estranova ton uyumu | 4/5 | Sakin, zarif, paniksiz. |
| Yapısal uyum | 3/5 | Makale kabuğu doğru; SSS kuralı kırılıyor. |
| Deterministik compliance | 2/5 | `örüntü` hard-ban ve hitap sapması revizyon istiyor. |
| Yayına hazır oluş | 3/5 | Küçük değil, net ama sınırlı bir editoryal düzeltme turu gerekiyor. |

**Genel sonuç:** Bu yazı Berna Aksoy sesi açısından başarılı; özellikle açılış, dolaylı ses ve final çizgisi iyi çalışıyor. Ancak yayın-standardı açısından `tek görünür SSS yüzeyi`, `siz hitabı` ve `örüntü` hard-ban kelimesi düzeltilmeden “tam temiz stil paketi” sayılmamalı.

---

## 8. Önerilen revizyon listesi

1. `Sıkça Sorulanlar` H2 bloğu ile `ArticleFAQ` arasından yalnızca biri bırakılmalı.
2. `bilemiyorsun` ve tekil emir kipleri `siz` standardına çevrilmeli.
3. `örüntü` geçen tüm yerler lexicon uyumlu eşanlamlarla değiştirilmeli.
4. Görünür SSS yüzeyi hangisi kalacaksa `FAQPage` şeması onunla birebir eşleştirilmeli.

---

## 9. Referanslar

- `CLAUDE.md` — HARD CONSTRAINT §3, §4, §5, §6
- `docs/style-rules-map.md`
- `config/editorial-lexicon.json`
- `writers/berna-aksoy/README.md`
- `writers/berna-aksoy/hot.md`
- `writers/berna-aksoy/warm.md`
- `src/pages/hormonal-gecis/perimenopoz/perimenopoz-ilk-isaretler.astro`
- `src/data/article-faqs.ts`
