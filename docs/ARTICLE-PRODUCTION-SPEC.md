# Estranova Article Production Spec

> **Amaç:** Estranova'da yeni bir makale üretmek için **tek kanonik referans**. Konu girdisinden yayın çıktısına kadar tüm zorunlu adımları, bileşenleri ve check'leri toparlar. Mevcut belgeler:
> - **CLAUDE.md** — HARD CONSTRAINTS (§1-§6: kimlik, ses, yasaklar, dil politikası, editöryal tipografi)
> - **AGENTS.md** — Astro article layout (line 147 "Article page layout"), Evidence component, JSON-LD pattern
> - **writers/<yazar>.md §0.5** — yazar-özel yürütme protokolü (v3.2 Gamze Cizreli'de kanıtlandı; diğer yazarlar v2-v2.1)
>
> Bu spec **tekrarlamaz, bağlar.** AI her makale öncesi bu dosyayı okur, oradan ilgili belgeye iner.

---

## Faz 1 — Konu + Yazar Atama

### 1.1 Konu kabul kontrolü

- CLAUDE.md HARD CONSTRAINTS §1-§2 ile uyumlu mu? (kadın sağlığı, hormonal geçiş, 40+ yaşam tarzı; klinik tedavi pazarlaması DEĞİL)
- Estranova kapsamı dışı konu (siyasi yorum, lüks dekor, satış, başhekim reklamı) → REDDET
- Tema dağılması var mı? Tek tema, tek eksen (CLAUDE.md §4 + writer §4a kuralı 10)

### 1.2 Yazar atama

Şu an merkezi `writer-routing.md` yok (v3.2 → v3.3 önerisi). Mevcut süreç: ilgili yazar profilinin §9 "seçilir eğer" + §10 kategori skoru'na bakarak karar.

**HRT yazarları** (klinik karar süreci derinliği):
- **Berna** — sakin değerlendirme, kilo/metabolizma/kompozisyon imza eksen
- **Başak** — deneyim-içtenliği, soru-cevap tekniği imza
- **Duygu** — klinik-yumuşaklık

**Yaşam tarzı yazarları:**
- **Gamze** ⭐ v3.2 — Anadolu/mevsim mutfağı + sabah ritmi + sürdürülebilir günlük pratik (imza eksen)
- **Özlem** — finansal köprü, soru-açılış imzası

**Diğer:**
- **Alara** — sporcu/atletik beden perspektifi
- **Rima** — teknoloji/wearable/AI/digital health
- **Işık** — mahrem (varsayılan değil; çoğu mahrem konu Senai geçici yazar)

**Senai Aksoy geçici yazar** (`src/data/writers.ts` slug `senai-aksoy`) — gönüllü yazar bulunamadığında (bkz. vault `wiki/sites/estranova/senai-aksoy-gecici-yazar.md`).

### 1.3 Çift Rol Uyarısı kontrolü (KRİTİK SINIR)

Doç. Dr. Senai Aksoy aynı zamanda **Gamze Cizreli'nin gerçek hayatta jinekoloğudur**. Gamze adına yazılan makalelerde:
- Muayene odası bilgisi (HRT/ilaç/doz/lab/tanı/kontrol notu) yazıya **sızmaz**
- Tek meşru kaynak: `writers/gamze-cizreli/cold.md §5a/§5b` kamuya açık çerçeve + `profile.yaml` `experience_seeds`
- Bilimsel Editör Notu Gamze sesinin DIŞINDA, sadece genel-popülasyon klinik perspektifi
- Detay: `writers/gamze-cizreli/hidden.md §5c-ek` + `profile.yaml dual_role_warning`
- Pre-script (`article-context-build.mjs`, Faz 2.1) `dual_role_warning.active=true` olan yazarlarda hidden.md'yi otomatik yüklenecek dosya listesine ekler

---

## Faz 1.5 — Article Log Review + Temporal Context

> **Framework:** [`docs/WRITER-DYNAMICS-FRAMEWORK.md`](WRITER-DYNAMICS-FRAMEWORK.md). Bu faz framework'ün B + C katmanlarını uygular.

### 1.5.0 Şablon Kırma havuz aktivasyon kontrolü (v2.6 — yeni yazar makalesi öncesi)

> **Detay:** [`docs/WRITER-TEMPLATE-BREAKING-DISCIPLINE.md`](WRITER-TEMPLATE-BREAKING-DISCIPLINE.md) — Lazy Aktivasyon Workflow.

Yazarın `hot.md §4`'üne bak:

- **Şablon Kırma Disiplini havuzu var mı?** (8 imza kalıbı için 10+ varyant her birinde)
  - **Var** → 1.5.1'e geç (normal akış)
  - **Yok** veya **eksik** → **Havuz aktivasyon adımı** tetiklenir:
    1. AI agent yazarın `cold.md / warm.md / hot.md / hidden.md` profillerini okur
    2. Yazarın sosyal haritasından, mesleki arka planından, ses imzasından, mevcut makale arşivinden (varsa) türeterek **8 imza kalıbı için minimum havuz boyutu** önerir (açılış 10, anekdot kapısı 10, dengeleyici 10, bilmiyorum 10, hekim çerçevesi 10, kapanış formatı 10, imza kapanış 6+atlama, humor 8-10)
    3. **Kullanıcıya sunar**: "Şu yazar için Şablon Kırma havuzu önerim: [...]"
    4. İnsan editör onayı sonrası AI agent havuzu yazarın `hot.md §4`'üne yazar (`writer_version` minor bump)
    5. Sonra 1.5.1'e geçilir

> **Yapay boilerplate yasak:** Havuz alfabetik sıralı/jenerik üretilemez. Yazarın **canlı dokümantasyonundan** türetilir; yapay üretim yazardan kopuk olur.

> **Berna referans örnek:** `writers/berna-aksoy/hot.md §4` v2.6 bölümleri tam tamamlanmış havuzlardır; yapısal şablon olarak kullanılabilir, ama içerik per-writer üretilir.

### 1.5.1 Article log'u oku

`icerik/yazar-onaylari/<yazar-slug>/article-log.md` dosyasını oku. Log boşsa veya henüz yoksa (yazarın ilk makalesi) bu adım atlanır, doğrudan 1.5.3'e geç.

### 1.5.2 Cooldown filtreleri uygula

Yazar profile YAML'daki `dynamics.cooldown_overrides`'a (varsa) bak; yoksa framework varsayılanı:

| Eleman | Cooldown | Filtreleme |
|---|---|---|
| Aforizma | 6 makale | Son 6 satırda kullanılan aforizmalar bu makalede YASAK |
| Manifesto kalıbı | 4 makale | Son 4 satırda kullanılanlar YASAK |
| Mevlana metaforu (varsa) | 5 makale | Son 5 satırda kullanılanlar YASAK |
| Başlık tipi | 3 makale | Son 3 satırda kullanılanlar YASAK |
| Mevsim açılışı | 4 makale | Son 4 satırda aynı mevsim açılışı ise farklı seç |
| Anekdot türü kombinasyonu | 2 makale | Son 2 satırda aynı kombo (örn. T1+T4) ise farklı seç |
| **(v2.6)** Açılış cümlesi (`opening_pattern`) | 6 makale + ardışık 2 yasak | Son 6'da kullanılan ve son 1'de aynı varyant YASAK |
| **(v2.6)** Kapanış formatı (`closing_pattern`) | 4 + ardışık 2 yasak | 10 format havuzundan rotasyon |
| **(v2.6)** Dengeleyici cümle (`balance_phrase`) | 4 + ardışık 2 yasak | Atlama opsiyonu (her makalede zorunlu değil) |
| **(v2.6)** "Bilmiyorum" anı (`not_knowing_phrase`) | 4 + ardışık 2 yasak | Atlama opsiyonu (tutum yeter, cümle yok) |
| **(v2.6)** Hekim/uzman çerçevesi (`clinician_frame`) | 4 + ardışık 2 yasak | Atlama opsiyonu (her makalede gerekmez) |
| **(v2.6)** Anekdot kapısı (`anecdote_door`) | 4 + ardışık 2 yasak | "Tanıdığım bir kadın" tek kapı olamaz; havuzdan farklı seç |
| **(v2.6)** İmza kapanış cümlesi (`signature_closing_template`) | 4 + ardışık 2 yasak | Atlama opsiyonu (~%50-65 oranında geçer) |
| **(v2.6)** Bilimsel Editör Notu 5 başlık dizilimi (`editor_note_layer_titles`) | 6 (3 ardışık birebir yasak) | Başlık havuzundan rotasyon; bazı makalelerde 5 katman yerine 3 katman |

`dynamics.cooldown_exempt` listesindeki imza-cümleler/metaforlar (örn. Gamze "kanonik soru s.89", Berna "bedenle yazışma" cümle yapısı imza ama 13/13 olamaz, Başak "soru-cevap tekniği") cooldown'dan muaftır.

> **Şablon Kırma Disiplini (v2.6 — tüm yazarlar evrensel):** Her yazarın `hot.md §4`'ünde 8 imza kalıbı havuzu **minimum 10 varyant** olmalıdır. Detay: [`docs/WRITER-TEMPLATE-BREAKING-DISCIPLINE.md`](WRITER-TEMPLATE-BREAKING-DISCIPLINE.md).

### 1.5.3 Temporal context hesapla

| Parametre | Hesap |
|---|---|
| Yazarın yaşı | `dynamics.birth_year` + bugün → güncel yaş |
| Mevsim | Bugün → ilkbahar/yaz/sonbahar/kış (Türkiye takvimi) |
| Önceki makale uzaklığı | Log son satırından bugüne (gün/hafta/ay) |
| Yakın dönem teması | Log son 3 satırın kategori + eksen analizi |

### 1.5.4 Tema sıçrama kontrolü

Yakın dönem teması analizinden:
- Aynı kategoride 3 makale üst üste varsa: kategori değişikliği öner
- Aynı imza eksen 3 makale üst üste varsa: farklı eksen öner

### 1.5.5 Cross-link kararı (E katmanı)

`dynamics.allow_inter_article_crosslinks: true` ise:
- Log'da benzer tema (yakın 5 makale) varsa: 1 doğal cross-link mümkün
- "Geçen ay yazmıştım..." / "Bir başka yere not düşmüştüm..." tonunda
- Max 1-2 cross-link/makale; SEO-style "bkz." YASAK

### 1.5.6 Filtrelenmiş havuzu Faz 2'ye geçir

Faz 2 (yazar §0.5 yürütme protokolü) bu filtrelenmiş havuzdan seçim yapar.

---

## Faz 2 — Yazar-Özel Yürütme Protokolü

### 2.0 Profil yapısı: modüler vs legacy

Estranova yazarları iki formattan birinde tutulur. AI agent her makale öncesi yazarın hangi formatta olduğunu kontrol eder ve uygun yükleme akışını seçer.

**Modüler format** (yeni — Aşama 1 pilot Gamze Cizreli'de uygulandı):

```
writers/<slug>/
  profile.yaml      machine-readable index (her makalede zorunlu yüklenir)
  hot.md            §0.5 protokolü + §4 ses + §5c tıbbi sınır + §13 self-check (her makalede zorunlu)
  warm.md           §4a-§4f stil/şablon katmanları (konu-tetikli lazy-load)
  cold.md           §0 + §1-§3 + §5a + §6-§10 + §12 gold-standard + changelog (audit-only)
  hidden.md         §5b gizli gözlemler + §5c-ek Çift Rol + §5d iç çelişkiler (yayınlanmaz; dual_role_warning aktifse zorunlu)
  README.md         klasör navigasyonu
  citations/
    canonical-sources.md   yazara özel atıf whitelist'i
    extended.md            editör onaylı genişleme
    pending.md             editör onay kuyruğu (RAG ön-eleme + insan geçidi)
```

**Legacy format** (mevcut çoğunluk):

```
writers/<slug>.md   tek dosya, tüm bölümler (§0 + §3 + §4 + §0.5 [v3.2 varsa] + §13 [v3.2 varsa])
```

**Yan dosyalar** (her iki formatta da klasör dışı, paylaşılan):

```
icerik/yazar-onaylari/<slug>/article-log.md  akümülatif log (Writer Dynamics Framework Katman B)
writers/<slug>-alintilar.md         korpus (varsa)
writers/<slug>-aphorism-pool.md     aforizma havuzu (varsa)
```

**Şu an modüler formatta:** `gamze-cizreli` (pilot, v3.2).
**Şu an legacy formatta:** `berna-aksoy`, `basak-pelister`, `duygu-karaosmanoglu`, `ozlem-denizmen`, `alara-baykent`, `isik-selin-gunce`, `rima-erdemir` (Aşama 2 rollout bekliyor).

**Backward compatibility:** AI agent legacy yazarlar için tek-dosya okumaya devam eder; modüler yazarlar paralel çalışır. Aşama 2 rollout'u tamamlanana kadar hibrit dönem sürer.

### 2.1 Bağlam üretimi — pre-script

**Modüler yazarlar için zorunlu:**

```bash
node scripts/article-context-build.mjs --writer <slug> --topic <konu> --json
```

Pre-script şunları yapar:
1. `profile.yaml`'ı oku (`section_index`, `topic_sections`, `dynamics`, `dual_role_warning`, `citations`)
2. Konuyu `topic_sections`'a eşle (exact ya da fallback)
3. Yüklenecek dosya listesini üret: hot.md (zorunlu) + ilgili warm/cold/hidden bölümleri
4. `icerik/yazar-onaylari/<slug>/article-log.md`'den cooldown listesi çıkar (Faz 1.5.2 ile uyumlu)
5. `dual_role_warning.active=true` ise hidden.md'yi listeye ekle ve uyarı bayrağını çıkar
6. Atıf çerçevesi referanslarını ekle (canonical/extended/pending path'leri + frekans kuralı)
7. Çelişki çözüm zincirini sırasıyla yazdır

**Çıktı modları:**
- Default (`--writer X --topic Y`): markdown (insan-okur, AI prompt'a manuel kopya)
- `--json`: yapısal JSON (programatik enjekte için)

**Legacy yazarlar için:** Pre-script yok; AI agent doğrudan `writers/<slug>.md`'i + `icerik/yazar-onaylari/<slug>/article-log.md`'i okur, cooldown'u Faz 1.5.2 kurallarına göre kendi çıkarır.

**Drift kontrolü:** `npm run writers:lint` (modüler yazarlar) — `profile.yaml ↔ markdown anchor` doğrulaması, `file_layout` dosya varlığı, `dual_role+hidden` tutarlılığı. CI'a bağlanma planı: Aşama 3.

### 2.2 Yazar protokolü uygulanması

Atanan yazarın profiline gir, varsa **§0.5 Yürütme Protokolü**'nü uygula:

| Yazar | Format | Protokol versiyonu | §0.5 konumu |
|---|---|---|---|
| Gamze Cizreli | **modüler** | **v3.2 ✅** (12 adım, korpus + manifesto kalıpları + Mevlana mimarisi + Erken/Olgun sentezi) | `writers/gamze-cizreli/hot.md §0.5` |
| Berna, Özlem | legacy | v2.1 — §3 ses + §4 stil; §0.5 yok (v3.2'ye taşıma sırası bekliyor) | — |
| Duygu, Başak, Alara, Rima, Işık | legacy | v2 | — |

**v3.2 yazar protokolü 12 adım özet** (referans: modüler yazarlarda `<slug>/hot.md §0.5`, legacy v3.2 yazarlarda `<slug>.md §0.5`):
1. Konu kabul kontrolü
2. İmza eksen eşleme
3. Aforizma seçimi (varsa korpus)
4. Manifesto kalıbı (varsa)
5. Anekdot türü seçimi
6. Açılış kalıbı seçimi
7. Başlık tipi seçimi
8. Editöryal tipografi hizalaması
9. 3-parçalı kapanış kurma
10. Mikro stil pas
11. Yasak filtreleri pas
12. Self-check + çelişki çözüm

**v2/v2.1 yazarlar için:** §3 ses kuralları + §4 stil imzası + signature_phrases'i takip et; §0.5 yokluğu pratikte AI'ın karar yükünü artırır — bu fark **bilinerek** kabul.

---

## Faz 3 — Astro File Scaffolding

### 3.1 Konum + dosya adı

```
src/pages/<kategori>/<alt-kategori>/<slug>.astro
```

Örnek: `src/pages/hormonal-gecis/menopoz/hrt-yillar-sonra-baslamak.astro`

Kategori → klasör eşlemesi:
- `hormonal-gecis/perimenopoz/` `hormonal-gecis/menopoza-hazirlik/` `hormonal-gecis/menopoz/` `hormonal-gecis/40-sonrasi/`
- `beden-yakinlik/cinsel-saglik/` `beden-yakinlik/pelvik-taban/` `beden-yakinlik/cilt-gorunum/`
- `zamansiz-yasam/` (+ alt: `non-invaziv/` `vitaminler/` `deneysel/`)
- `zihin-denge/uyku-dinlenme/` `zihin-denge/duygusal-denge/` `zihin-denge/bilissel-saglik/`
- `bilimsel-pencere/hormonlarin-bilimi/` `bilimsel-pencere/hucreler-ve-yaslanma/` `bilimsel-pencere/yeni-arastirmalar/`
- `editorun-kosesi/`

### 3.2 Astro template iskeleti

**Kanonik referans:** `src/pages/zihin-denge/uyku-dinlenme/uyku-bozuklugu-menopoz.astro` veya `hormonal-gecis/menopoz/hrt-ilk-alti-ay.astro`

Zorunlu yapı:
- Frontmatter import'ları: `BaseLayout`/`SiteLayout`, `SubmenuHero` (varsa kategori submenu-heroes.ts'te), `SubmenuArticleBody`, `ArticleSummary`, `ArticleProsePanel`, `Evidence`, `RelatedReadings`, `ArticleEditorNote`, `ArticleDisclaimer`, `ArticleAuthorBlock`, `buildArticleSchemas`
- JSON-LD injection: `MedicalWebPage` + `Article` + `BreadcrumbList` + `FAQPage`
- Body başlangıcı: `ArticleSummary` içinde Kısa Özet / quick answer; ardından `ArticleProsePanel` içinde h2 + italic lede paragraflar
- `class="prose prose-lg prose-estranova max-w-none"` zorunlu (CLAUDE.md HARD CONSTRAINT)
- Body sonu / SSS: tek görünür SSS yüzeyi zorunlu; gövde içinde editoryal SSS yoksa `ArticleFAQ`, varsa ikinci FAQ bloğu yok; schema ile aynı içerik
- Sonra: `RelatedReadings` (3-5 link) → `ArticleEditorNote` (BEN) → `ArticleDisclaimer`. Eski elle yazılmış gradient left-border editor note veya dashed disclaimer `<section>` yeni/yenilenen makalelerde kullanılmaz.

**Detaylı şablon:** `AGENTS.md` line 147 "Article page layout (Astro)" — kod örnekleri orada.

---

## Faz 4 — İçerik Üretimi (yazar protokolünden çıkan)

### 4.1 Editöryal tipografi (CLAUDE.md HARD CONSTRAINT)

- **6-8 H2** (cümleli; tek-kelime "Beslenme" / "Sonuç" YASAK)
- Her H2'den sonra **ilk paragraf = italic lede** (1-2 cümle, bölümün açılış kanısı/sorusu/durumu) — `prose-estranova` CSS otomatik italic ana pembe render
- Bullet list / veri yığını / uzun tanım ile başlayan H2 YASAK
- Chapter numarası (01, 02), gold ayraç ve italic lede CSS'ten otomatik gelir; manuel "01." YAZMA

### 4.2 Evidence bileşeni — yazar sesinde yumuşatma

**Syntax:** `<Evidence level={N} />` (N=1-5) veya `<Evidence from={A} to={B} />`. Render: `(güçlü kanıt)` · `(iyi kanıt)` · `(orta kanıt)` · `(sınırlı kanıt)` · `(zayıf kanıt)`. Aralık: `(orta–iyi kanıt)`.

**YASAK:** Literal nokta dizileri `[●●●●●]`, `[●●●●○]` (CLAUDE.md HARD CONSTRAINT).

**Frekans (genel):**
- Min: 1 (yoksa "yaşam tarzı blogu" gibi durur, kanıt-temelli yayın iddiası zayıflar)
- Max: 4-5 (fazlası klinik rapor hissi)
- İdeal: **2-3 Evidence/makale**

**Yazar sesinde 3 yumuşatma yapısı:**

| Yapı | Sıklık | Şablon |
|---|---|---|
| **A) Inline yaşıt-yumuşatma** | %70 | Yaşıt cümlesi + (kanıt) + yazar yorumu |
| **B) Anekdot köprüsü** | %20 | Anekdot/sahne + (kanıt) + yaşıt yorum |
| **C) Doğrudan klinik** | %10 | Klinik cümle + (kanıt) + yumuşatma cümlesi |

**Evidence YERLEŞTİRİLMEZ:**
- Saf kişisel anekdot ("o sabah bana iyi geldi")
- Mevlana/aforizma/manifesto cümlesi içinde
- 3-parçalı kapanışta (mikro-sahne / aforizma + üç nokta)
- Açılış paragrafında
- H2 italic lede içinde (kanıt sonraki paragrafta)

**Evidence YERLEŞTİRİLİR:**
- Genel klinik fact (mekanizma, hormon, kemik, kardiyovasküler)
- Beslenme/yaşam tarzı ↔ sağlık bağı (epidemiyolojik)
- Bedensel deneyimin yaygınlığı
- Spesifik müdahale etkisi

**Seviye haritası — tipik Estranova konuları:**

| Konu | Tipik seviye |
|---|---|
| Menopoz mekanizması (sıcak basma, uyku bölünmesi, kemik kaybı, kardiyovasküler risk) | 5 (güçlü) |
| HRT etkinliği — vasomotor belirtiler, kemik koruması | 5 (güçlü) |
| HRT — uzun dönem güvenlik (uzayan kohort sınırlamaları) | 3-4 (orta–iyi) |
| Akdeniz/Anadolu beslenme ↔ kardiyovasküler | 4 (iyi) |
| Mevsim/yerel beslenme ↔ genel sağlık | 3 (orta) |
| Sabah ışığı + sirkadyen ritm | 4 (iyi) |
| Sosyal destek ↔ menopoz iyilik hali | 3 (orta) |
| Spesifik gıda iddiaları (soya, izoflavon vb.) | 2-3 (sınırlı–orta) |
| Geleneksel/kuşak bilgeliği iddiaları | 1-2 veya Evidence YOK (kültürel çerçeve) |
| Tarama testi etkinliği (KMD, mamografi, vb.) | 4-5 (iyi-güçlü) |

### 4.3 Bilimsel Editör Notu (BEN) — 5-katmanlı şablon

**Konum:** Makale gövdesi bittikten sonra, RelatedReadings'in altında (veya AGENTS.md pattern'ine göre yeri), `EditorNote` componentinde. Yazarın 3-parçalı kapanışı tamamlandıktan SONRA.

**5 katman (zorunlu sıra):**

1. **Başlık:**
   ```markdown
   ## Bilimsel Editör Notu
   ```

2. **Bağlam cümlesi (1 paragraf):** Yazının niteliğini netleştir.
   > *"Bu yazı bir [kişisel deneyim paylaşımı / yaşam tarzı yansıması / kuşak aktarımı / araştırma özeti]dır; bireysel tıbbi değerlendirme veya tedavi önerisi olarak okunmamalıdır."*

3. **Klinik perspektif (3-5 madde, Evidence etiketli):** Yazının ana iddialarına klinik bakış.
   > - **[İddia başlık]:** [klinik açıklama] (kanıt etiketi).
   > - **[İddia başlık]:** [klinik açıklama] (kanıt etiketi).

4. **Bireyselleştirme uyarısı (1 paragraf):**
   > *"Sn. [Yazar adı]'nın yazısında paylaştığı [tema] deneyimi onun **kendi yolu**dur; sizin için uygun olup olmadığını kendi hekiminizle değerlendirmek önemlidir. Özellikle [riskli alan] konusunda belirgin değişiklik yapmadan önce mevcut sağlık durumunuz, ilaçlarınız ve laboratuvar değerleriniz hekiminizle birlikte gözden geçirilmelidir."*

5. **İmza:**
   > *Doç. Dr. Senai Aksoy — Tıbbi Editör*

**Uzunluk:** 150-250 kelime ideal. Min 80, max 300.

**Çift Rol Uyarısı (Gamze makalelerinde KRİTİK):**
- BEN'de Gamze'nin spesifik tıbbi durumuna referans YOK
- Sadece **genel popülasyon** klinik perspektifi
- "Sn. Cizreli'nin yolu kendi yolu" formülü
- Kullandığı/kullanmadığı HRT, ilaç, doz, lab değerlerine **ima bile** girmez
- Detay: `writers/gamze-cizreli/hidden.md §5c-ek` + `profile.yaml dual_role_warning`

### 4.3-ek) Senai-yazıyor-Senai-inceleyiyor durumu — 1. şahıs istisnası

> **Bağlam:** Senai Aksoy hem Estranova bilimsel editörü hem de yazar (mahrem klinik konularda — idrar kaçırma, GSM, vajinoplasti, lokal HRT vb.). Yazar imzası "Senai Aksoy" Dr. öneksiz / inceleyici imzası "Doç. Dr. Senai Aksoy" — bilinçli iki ayrı kart, aynı kişi (writers.ts:308-344 yorumu + article-schema.ts:71). **Diğer 8 yazarın makalelerinde** standart 5-katmanlı şablon (3. şahıs *"Sn. [Yazar]'nın yazısında..."*) korunur; **Senai kendi yazılarında** 3. şahıs yapay durduğu için **1. şahıs istisnası** uygulanır.

**Tetikleyici koşul:** `writerSlug === 'senai-aksoy'` olduğunda bu istisna devreye girer. Diğer yazarlarda Faz 4.3 standart şablonu geçerli.

**Senai-için-Senai BEN şablonu (5 katman + üst geçiş + iki "ben" çapası):**

1. **Üst geçiş cümlesi (italic, BEN gövdesinin ilk paragrafı):**
   - **Varyant 1:** *"Bu yazıda klinik tarafı bilinçle kısa tuttum; aynı konuyu — yazar değil, kadın hastalıkları uzmanı olarak — burada biraz daha açayım."*
   - **Varyant 2:** *"Yazıyı yazar olarak yazdım; bu notu Estranova'nın bilimsel editörü olarak yazıyorum — aynı konunun klinik disiplin tarafı için."*
   - **Varyant 3:** *"Yazının başında değinmeden geçtiğim birkaç klinik ayrıntıyı, bu kez uzman tarafımdan eklemek istiyorum."*
   - **Şablon Kırma Disiplini:** Aynı varyant **2 ardışık makalede yasak**, **havuz cooldown 4 makale**. Article-log "Notlar" sütununda varyant kaydı zorunlu.

2. **Klinik bağlam:** İlk veya ikinci cümlede **tek bir "ben" çapası**:
   - *"... kliniğimde de en sık karşılaştığım — ama en az dile getirilen — tablolardan biri."*
   - *"... kliniğimde her hafta birden çok kadında konuştuğum — ama yıllarca sessiz kalmış — bir tablo."*
   - Sonrası klinik özet (3. şahıs, evrensel referans).

3. **Mekanik çerçeve:** Kompakt klinik özet — fizyoloji. **"Ben" YOK**, evrensel referans.

4. **Klinik kırmızı bayraklar:** Kompakt uyarı listesi. **"Ben" YOK**, klinik standart.

5. **Pratik bütünleşim:** Tedavi hiyerarşisi — **bir cümle kişisel klinik disiplin olarak çerçevelenir**, gerisi standart sıralama:
   - *"... bu sıralamayı klinikte titizlikle koruduğum bir disiplin olarak söyleyebilirim:"*
   - *"... klinikte uyguladığım sıralama şu hiyerarşiyi izler:"*

6. **Bireysellik vurgusu:** *"Sn. Aksoy"* formülü YASAK. Yeni formül:
   > *"Yukarıda paylaştıklarım — hem yazıda hem bu notta — genel popülasyon çerçevesidir; sizin tablonuzdaki [konuya özel: tip ayrımı / anatomik bulgular / eşlik eden tıbbi durumlar / ayırıcı tanılar] tedavi seçimine yön verir. Burada okuduğunuz bir başlangıç çerçevesidir, karar değil; sizin için uygun adımları kendi hekiminizle birebir değerlendirmeniz önemlidir."*

7. **İmza (değişmez):**
   > *— Doç. Dr. Senai Aksoy, Kadın Hastalıkları ve Doğum Uzmanı, Estranova Bilimsel Editörü*

**HARD CONSTRAINT (1. şahıs istisnası):**
- **"Ben" sadece 3 yerde**: (a) üst geçiş cümlesi, (b) Klinik bağlam'da tek cümle, (c) Pratik bütünleşim'de tek cümle. Toplam **max 3 "ben" çapası**.
- **Yoğun "ben" YASAK** — her paragrafta 1. şahıs ders veren tona kayar; CLAUDE.md §1 *"başhekim vitrini"* yasağına yaklaşır.
- **"Doçent olarak söylerim ki"** kibirli kalıbı YASAK (mevcut HARD CONSTRAINT korunur).
- **Tıbbi otorite + sıcak hocalık dengesi** — BEN tonu klinik-eğitici, Senai'nin yazar tonu (komşu sıcaklığı) BEN'e taşınmaz.
- **İki kart bilinçli ayrımı** — yazar imzası "Senai Aksoy" / inceleyici imzası "Doç. Dr. Senai Aksoy" BEN içinde bulanıklaşmaz.
- **Bireysellik vurgusu** *"Sn. Aksoy"* yerine *"Yukarıda paylaştıklarım"* — kişiselleştirme + hekim çağrısı + *"başlangıç çerçevesidir, karar değil"* sınırı.

**Uygulama kanıtı (2026-05-02 commit'leri):**
- [/beden-yakinlik/pelvik-taban/menopozda-idrar-kacirma-pelvik-taban](src/pages/beden-yakinlik/pelvik-taban/menopozda-idrar-kacirma-pelvik-taban.astro) — Varyant 1 üst geçiş
- [/beden-yakinlik/cinsel-saglik/mahrem-bolge-degisimleri-menopoz](src/pages/beden-yakinlik/cinsel-saglik/mahrem-bolge-degisimleri-menopoz.astro) — Varyant 2 üst geçiş

**Premium yayın referansı:** NYT *"Personal Health"* (Jane Brody) ve The Atlantic *"Health"* (James Hamblin) — gazeteci + tıp eğitimli yazarlar; *"As a physician..."* tek cümlelik açık geçiş işareti, sonra metin akar. Estranova'da Türkçe karşılık: yazar/uzman geçişi italic kısa cümle ile işaretlenir, sonra klinik özet kompakt akar.

### 4.4 ArticleAuthorBlock

`src/data/writers.ts` içindeki yazar profilinden çekilir. Manuel girme; sadece `slug` ile referans. Component otomatik render eder (display name, bio, avatar, link).

Görsel yüzey ayrımı zorunludur:
- `ArticleAuthorBlock` yanında görünen byline görseli, üstteki `SubmenuHero` görselinden bağımsızdır.
- Makale için özel bir byline görseli gerekiyorsa `imageSrc`, `imageAlt`, gerekirse `imagePosition` prop'ları burada verilir.
- Bu tercih sub-hub `Son yazı` kartını veya üst hero'yu otomatik değiştirmez.
- Kullanıcının verdiği makale görseli için varsayılan şablon: üst hero aynı kalır; görsel yalnızca `ArticleAuthorBlock` byline yüzeyinde ve sub-hub kartında (`articleCardImageByRoute`) kullanılır. Üst hero ancak kullanıcı açıkça "makale hero görseli değişsin" derse `submenuHeroByRoute` üzerinden değiştirilir.

### 4.5 RelatedReadings

3-5 link. Aynı kategoriden + komşu kategoriden. CrosslinkRules: `feedback_article_hub_linking_rule.md` (memory):
- Parent hub'a ekle
- Manifest entry
- 3-5 cross-link

### 4.6 Hero image

- Önce vault katalog (`reference_vault_media_catalog.md`)
- Eşleşme yoksa konsept-odaklı yükleme isteği (kullanıcıya)
- 12 Türk kadın arketip çerçevesi (`reference_archetype_framework.md`) — tek yüz tekrarını kır

Hero ve kart görselleri aynı yüzey değildir:
- Üstteki sayfa hero görseli `src/data/submenu-heroes.ts` içindeki `submenuHeroByRoute` ile yönetilir.
- Sub-hub sayfalarında `Son yazı` ve arşiv kartları için farklı bir görsel kullanılacaksa ayrı kart eşlemesi kullanılır (`articleCardImageByRoute`).
- Sadece kart görseli değişecekse `submenuHeroByRoute` güncellenmez; aksi halde makale sayfasındaki üst hero da istenmeden değişir.
- Yazıya özel verilen görsel için güvenli varsayılan iki yüzeydir: `ArticleAuthorBlock imageSrc` + `articleCardImageByRoute[path]`. Bu ikili, makale hero'sunu bölüm kimliğinde tutarken arşiv/kart okunurluğunu ve yazı içi editoryal görseli günceller.

### 4.7 JSON-LD (zorunlu — non-optional)

`src/utils/article-schema.ts → buildArticleSchemas()` helper. Her yayın makalesinde:
- `MedicalWebPage` (üst tip)
- `Article` (yazar + reviewedBy)
- `BreadcrumbList` (kategoriden makaleye yol)
- `FAQPage` (`faqItems` verildiğinde; yeni yayınlarda zorunlu)

**Tek SSS yüzeyi kuralı:** Yayında yalnızca bir görünür SSS yüzeyi olmalı. SSS ana gövde içinde `ArticleProsePanel` akışında H2/H3 olarak yazıldıysa ayrıca `ArticleFAQ` eklenmez. Gövdede görünür SSS yoksa `ArticleFAQ` ana gövdeden sonra, `RelatedReadings` öncesinde kullanılır. Her iki durumda da `FAQPage` schema aynı soru-cevap kaynağıyla beslenir.

`author.Person` → `writers.ts`
`reviewedBy.Person` → Tıbbi editör (default Doç. Dr. Senai Aksoy). **İstisna:** yazar Senai Aksoy'un kendisiyse denetleyici **Dr. Alper Mumcu** (aynı branş; Senai kendini inceleyemez). `buildArticleSchemas` otomatik atar.
`articleSection` + `sectionPath` → kategoriye uygun

**Yazar entity'si sayfada çözülebilir (E-E-A-T):** `author`/`reviewedBy` `@id` referansı (Dr. Aksoy → `https://senaiaksoy.net/#person`) kullandığında, o `@id`'ye karşılık gelen inline `Person` düğümü **aynı sayfada** bulunmalı. Dr. Aksoy Person düğümü `src/layouts/SiteLayout.astro`'da site-geneli basılır; yeni `@id` referanslı yazar eklenirse onunki de tanımlanır. Uydurma `sameAs`/hesap eklenmez.

**`dateModified` tazeliği:** Makale içerikçe revize edilirse `buildArticleSchemas`'a `modifiedDate` (revizyon günü) geçilir; verilmezse `datePublished`'a eşitlenir. Revize edilen makalede `dateModified` eski kalmamalı (YMYL tazelik sinyali).

### 4.8 GEO — AI-alıntı optimizasyonu (AI Overviews · ChatGPT · Perplexity)

AI motorları passage-level "doğrudan cevap" alıntılar. Marka kuralları (gövdede inline dış URL / uluslararası kuruluş adı yasak — §4; yumuşatma; "siz" hitabı) bu optimizasyonun üstündedir; aşağıdakiler bu sınır içinde uygulanır.

- **Kısa Özet doğrudan-cevap formu:** `ArticleSummary` içeriği ~**40–55 kelime, tek paragraf**; ilk cümle başlık-sorusunu doğrudan yanıtlar (veri yığını/uzun girişle açılmaz). AI Overview'lerin ilk tercih ettiği yapı.
- **SSS uzun-kuyruk:** 3–5 konuya özgü sorudan en az biri "ne zaman / hangi durumda / X ile Y farkı nedir" kalıbında long-tail olmalı; her cevap 2–3 cümle ve **gövdedeki iddiaya dayalı** (yeni iddia eklemez, schema ile aynı kaynak).
- **Sayısal çapa:** somut sayı/eşik içeren cümleler (yaş aralığı, oran, süre) AI tarafından daha sık çekilir; gövdede ve Kısa Özet'te en az bir kez net geçsin — `<Evidence>` ve klinik doğrulukla uyumlu.
- Bu üç madde mevcut makalelerde de revizyon sırasında uygulanabilir; `dateModified` bump kuralıyla birlikte çalışır.

---

## Faz 5 — Pre-publish Checklist (YAYIN ÖNCESİ ZORUNLU)

> **Yazar onayı hard gate:** Faz 5 kontrolleri tamamlanan makale dahi doğrudan yayınlanmaz. Önce `npm run author:send-for-approval` ile 5 dakikalık yazar onay paketi üretilir ve paket `icerik/yazar-onaylari/<slug>/onay-bekleyen/` altında kalır. Yazar formda **ONAYLIYORUM** demeden makale `main` yayın akışına, `src/pages/` canlı rota ağacına, hub/sayı indekslerine, RSS/static manifest'e, `icerik/yayinlanmis-makaleler/` arşivine, `article-approvals.ts` kaydına veya `onaylanan/` klasörüne alınamaz. İstisna: `berna-aksoy`, `alara-baykent`, `senai-aksoy` için form zorunlu değildir; KC editör doğrudan onayı `article-approvals.ts` ve/veya `article-log.md` içinde kayıtlıysa yayın kapısı açılır. Aynı form yanıtı veya doğrudan onay notu yazar stilini geliştirmek için de kullanılır; ham yanıt pakette kalır, stil özeti `article-log.md`'a işlenir, kalıcı profil değişikliği editör onayıyla yapılır.

| # | Kontrol | Sonuç |
|---|---|---|
| 1 | Yazar §13 self-check (varsa, v3.2'de zorunlu — Gamze) — 0-1 hayır kabul, 2+ revizyon | ☐ |
| 2 | Frontmatter eksiksiz: `title`, `description`, `author`, `reviewedBy`, `date`, `category`, `sectionPath`, `hero`, `lang="tr"` | ☐ |
| 3 | `ArticleProsePanel` + `class="prose prose-lg prose-estranova max-w-none"` (CLAUDE.md HARD CONSTRAINT) | ☐ |
| 3a | `ArticleSummary` kullanıldı; Kısa Özet için elle yazılmış tekil card class yok | ☐ |
| 4 | 6-8 cümleli H2 + her birinde italic lede | ☐ |
| 5 | Evidence 2-3 (max 4-5), yazar sesinde yumuşatılmış (3 yapıdan biri) | ☐ |
| 6 | Bilimsel Editör Notu `ArticleEditorNote` içinde, 5-katmanlı veya konuya göre kompakt, Doç. Dr. Senai Aksoy imzalı (**Senai'nin kendi makalelerinde Dr. Alper Mumcu imzalı**) | ☐ |
| 7 | Çift Rol Uyarısı (Gamze): muayene odası bilgisi sızıntısı yok | ☐ |
| 8 | ArticleAuthorBlock — writers.ts'ten | ☐ |
| 9 | RelatedReadings 3-5 link (parent hub + komşu kategori) | ☐ |
| 10 | Hero image — vault catalog veya yeni üretim, archetype çerçevesi | ☐ |
| 11 | JSON-LD: MedicalWebPage + Article + BreadcrumbList + FAQPage (`buildArticleSchemas`) | ☐ |
| 11b | `@id` referanslı yazar/inceleyici için inline `Person` düğümü sayfada çözülebilir (Dr. Aksoy → SiteLayout site-geneli); revize makalede `modifiedDate` revizyon gününe çekildi | ☐ |
| 11c | GEO (§4.8): Kısa Özet ~40–55 kelime doğrudan-cevap; SSS'de ≥1 long-tail soru; ≥1 sayısal çapa cümlesi | ☐ |
| 11a | Tek görünür SSS yüzeyi var: gövde içi editoryal SSS veya `ArticleFAQ`; 3–5 soru, schema ile birebir aynı veri kaynağından besleniyor | ☐ |
| 12 | Yayın bağlantı planı hazır; ancak standart yazar onayı gelmeden parent hub/sayı indeksine canlı link eklenmedi | ☐ |
| 13 | Manifest entry yalnız yayın kapısı açıldıktan sonra eklenecek; onay bekleyen makale RSS/static manifest'te yok | ☐ |
| 14 | Compliance score ≥ 85 (`compliance_expert_agent.py`) | ☐ |
| 15 | Yasak filtreleri temiz (URL, kuruluş adı, marka, HRT/ilaç adı, lüks dekor, sosyal/siyasi yorum) | ☐ |
| 16 | Tıbbi sorumluluk reddi `ArticleDisclaimer` ile görünür (CLAUDE.md §1) | ☐ |
| 17 | Dil: %100 Türkçe (CLAUDE.md Dil politikası) | ☐ |
| 17a | `npm run lexicon:check` temiz; `hard_ban` ihlali yok, `soft_ban` warning'leri gözden geçirildi | ☐ |
| 18 | Yazar onayı yolu seçildi: standart yazar formu veya `berna-aksoy` / `alara-baykent` / `senai-aksoy` için KC editör doğrudan onayı | ☐ |
| 19 | Standart yazarlar için 5 dakikalık onay paketi `onay-bekleyen/` altında; istisna yazarlar için KC doğrudan onay kaydı hazırlanmış | ☐ |
| 20 | Form yanıtı veya KC doğrudan onay notu geldiğinde stil sinyallerinin `article-log.md`'a özetleneceği ve kalıcı profil değişikliğinin editör onayı gerektirdiği not edildi | ☐ |

**13-20 herhangi birinde "hayır" → otomatik büyük revizyon veya yazar onay döngüsü.** Yayın engellenir.

### 5.1 Yazar Onay Döngüsü

1. Makale taslağı tamamlanınca `npm run author:send-for-approval -- --slug <writer-slug> --article <article-pathname>` çalıştırılır.
2. `berna-aksoy`, `alara-baykent`, `senai-aksoy` için form zorunlu değildir; KC doğrudan onay verirse `article-approvals.ts` kaydı ve `article-log.md` notu yeterlidir.
3. Standart yazarlar için oluşan paket `icerik/yazar-onaylari/<slug>/onay-bekleyen/<YYYY-MM-DD>_<makale-slug>/` altında tutulur.
4. Editör 5 dakikalık `kontrol-formu.html` dosyasını yazara gönderir.
5. Yazar **DEĞİŞİKLİK İSTİYORUM** derse yanıt aynı pakete kaydedilir, makale revize edilir ve revizyon için yeni makale + yeni 5 dakikalık onay formu üretilir.
6. Her form yanıtı veya KC doğrudan onay notu stil öğrenme girdisi olarak değerlendirilir: düşük puanlar kaçınılacak eğilimlere, yüksek puanlar güçlenen imzalara, serbest yorumlar/editör notları editöryal özete dönüştürülür.
7. Stil sinyali `icerik/yazar-onaylari/<slug>/article-log.md` dosyasına yazılır; `writers/<slug>/` profil dosyalarına kalıcı değişiklik yalnızca editör onayıyla geçirilir.
8. Standart yazarlarda döngü yazar **ONAYLIYORUM** diyene kadar sürer; istisna yazarlarda KC doğrudan onayı yeterlidir.
9. Onay geldiğinde paket varsa `onaylanan/` altına taşınır ve ancak bundan sonra Faz 6 yayın adımları başlar.
10. Onay bekleyen paketteki kaynak kopya gerekirse `site-kaynak.astro` / `makale-kaynak.astro` olarak saklanır; canlı rota için `src/pages/` altına ancak yayın kapısı açıldıktan sonra geri alınır.

---

## Faz 6 — Publish / Post-publish

Faz 6 yalnızca `icerik/yazar-onaylari/<slug>/onaylanan/<paket>/` altında kayıtlı yazar onayı veya istisna yazarlar için kayıtlı KC doğrudan onayı varsa başlar.

- Cloudflare auto-deploy (push = main → site, bkz. `reference_cloudflare_deploy.md`)
- /symptoms bento entry (gerekirse, bkz. `project_symptoms_audit_2026_04_28.md`)
- Hub linkage audit (orphan kontrolü, bkz. `feedback_article_hub_linking_rule.md`)
- Canlı rota ekleme: `src/pages/`, hub/sayı indeksi, `src/data/static-articles.ts` / RSS manifest ve `icerik/yayinlanmis-makaleler/` export'u yalnız bu aşamada güncellenir.

---

## Faz 7 — Post-publish Journal Entry

> **Framework:** [`docs/WRITER-DYNAMICS-FRAMEWORK.md`](WRITER-DYNAMICS-FRAMEWORK.md) Katman B (akümülatif log) + Katman D (evrim trigger).

### 7.1 Log'a yeni satır ekle

`icerik/yazar-onaylari/<yazar-slug>/article-log.md` dosyasının tablosuna yeni satır append. Sütunlar:

| # | Tarih | Konu | Kategori | Yazar v. | Aforizma | Manifesto | Anekdot | Açılış | Başlık tipi | Mevsim | Notlar |
|---|---|---|---|---|---|---|---|---|---|---|---|

Örnek:
```
| 12 | 2026-04-29 | Sade sofra disiplini | zamansiz-yasam | v3.2 | s.218 | s.132 | T1+T4+T7 | Yıllar önce... | Tireli | ilkbahar | — |
```

### 7.2 Evolution review tetikleyici kontrolü

Yazar profile YAML'daki `dynamics.evolution_review_threshold` (default 10) ve `dynamics.evolution_review_time_threshold_months` (default 6):

- **Makale-bazlı:** Log'daki yeni satır sayısı ≥ threshold mi?
- **Zaman-bazlı:** Son evrim review'dan ≥ N ay geçti mi?

Hangisi önce gelirse → editöre **evrim review tetikleyicisi bildirimi** (manuel veya hook ile).

### 7.3 Evrim review (eğer tetiklendiyse)

Detaylı prosedür: Framework Katman D.

**Özet adımlar:**
1. AI pass: son N makale gövdesi taranır → yeni signature_phrases / anekdot türleri / iç çelişkiler / drift
2. İnsan editör onayı (Doç. Dr. Senai Aksoy + ilgili yazar onayı)
3. Profile minor version bump (örn. v3.2 → v3.3)
4. Profile changelog'una evrim kaydı

---

## Hızlı Başlangıç (cheat sheet)

```
1. Konu → CLAUDE.md HARD CONSTRAINTS uyumu? Yazar atama (§9 + §10).
2. Çift Rol kontrol (Gamze ise).
3. Article log review (Faz 1.5): cooldown filtre + temporal context + cross-link kararı.
4. Yazar §0.5 protokolü uygula (v3.2'de yazılı; v2/v2.1'de §3 + §4) — filtrelenmiş havuzdan.
5. Astro file → kategori klasörü → AGENTS.md "Article page layout" şablonu.
6. ArticleProsePanel içinde 6-8 H2 + italic lede.
7. Evidence 2-3 yumuşatılmış. Yasak: literal nokta dizisi.
8. Bilimsel Editör Notu 5-katmanlı (150-250 kelime, Senai Aksoy imza).
9. ArticleAuthorBlock + RelatedReadings 3-5 + Hero (vault).
10. JSON-LD: buildArticleSchemas() + faqItems.
11. Görünür FAQ bloğu (`ArticleFAQ`) ekle; schema ile drift bırakma.
12. `npm run lexicon:check` çalıştır; `hard_ban` sıfır olmalı.
13. Pre-publish checklist 18+ madde — 13-18 must-pass.
14. Yazar onay paketi oluştur: `author:send-for-approval` → `onay-bekleyen`.
15. Yazar değişiklik isterse revizyon + yeni 5 dk form; onay gelene kadar tekrar.
16. Yazar ONAYLIYORUM dedikten sonra paket `onaylanan` altına taşınır.
17. Hub linkage. Compliance ≥85.
18. Push → Cloudflare auto-deploy.
19. Post-publish journal (Faz 7): log'a satır ekle + evrim review tetik kontrolü.
```

---

## Bağlantılı belgeler

- **CLAUDE.md** — HARD CONSTRAINTS §1-§6 (kimlik, ses, yasaklar, dil, editöryal tipografi)
- **AGENTS.md** — line 147 "Article page layout (Astro)", Evidence component, JSON-LD pattern
- **docs/WRITER-DYNAMICS-FRAMEWORK.md** — yazar dinamizm mimarisi (5 katman: DNA / log / temporal / evrim / cross-link)
- **docs/HANDOFF-modular-writer-profiles.md** — modüler profil mimari geçişi (Aşama 1-3 rollout planı)
- **writers/_schema/profile.schema.json** — modüler `profile.yaml` JSON Schema (zorunlu alanlar + section_index + citations)
- **icerik/yazar-onaylari/<yazar>/article-log.md** — per-writer akümülatif log (Katman B)
- **writers/gamze-cizreli/** — modüler v3.2 protokol (`profile.yaml` + `hot.md §0.5/§4/§5c/§13` + `warm.md` + `cold.md §12 gold-standard` + `hidden.md §5c-ek`)
- **scripts/article-context-build.mjs** — pre-script: konu+yazar → yüklenecek dosya listesi + cooldown + Çift Rol bayrağı + atıf çerçevesi
- **scripts/check-writer-profile-consistency.mjs** — drift CI (`npm run writers:lint`)
- **docs/PIPELINE.md** — compliance score eşikleri, best-effort akışı
- **Memory:** `feedback_article_writing_checklist.md`, `feedback_article_hub_linking_rule.md`, `feedback_dual_role_senai_gamze.md`, `reference_writer_profile_v32_pattern.md`, `reference_vault_media_catalog.md`, `reference_archetype_framework.md`
- **Vault:** `wiki/sites/estranova/writers-profile-architecture.md`, `editorial-rules.md`, `voice-rules-hassas-terimler.md`, `senai-aksoy-gecici-yazar.md`

---

## Versiyon

- **v1.1** (2026-04-29) — Faz 2 modüler profil yapısına bağlandı: §2.0 (modüler vs legacy), §2.1 (pre-script `article-context-build.mjs` + drift lint), §2.2 (yazar protokolü uygulanması). §1.3 Çift Rol referansları modüler path'lere taşındı (`hidden.md §5c-ek`). "Bağlantılı belgeler"'e schema + handoff + iki yeni script eklendi. Backward compatibility: legacy yazarlar tek-dosya akışında devam eder.
- **v1.0** (2026-04-29) — İlk yayım. v3.2 Gamze protokolü kanıtlandıktan sonra Faz 1-6 + 17 maddelik pre-publish checklist + Evidence/BEN şablonu yapısallaştırıldı. Çift Rol Uyarısı kritik sınır olarak işaretlendi.
