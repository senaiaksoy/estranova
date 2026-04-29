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
- Tek meşru kaynak: `writers/gamze-cizreli.md` §5b/§5c kamuya açık çerçeve + experience_seeds
- Bilimsel Editör Notu Gamze sesinin DIŞINDA, sadece genel-popülasyon klinik perspektifi
- Detay: `writers/gamze-cizreli.md` §5c-ek + YAML `dual_role_warning`

---

## Faz 2 — Yazar-Özel Yürütme Protokolü

Atanan yazarın profiline gir, varsa **§0.5 Yürütme Protokolü**'nü uygula:

| Yazar | Protokol versiyonu |
|---|---|
| Gamze Cizreli | **v3.2 ✅** — `writers/gamze-cizreli.md` §0.5 (12 adımlı, korpus + manifesto kalıpları + Mevlana mimarisi + Erken/Olgun sentezi) |
| Berna, Özlem | v2.1 — §3 ses + §4 stil; §0.5 yok (v3.2'ye taşıma sırası bekliyor) |
| Duygu, Başak, Alara, Rima, Işık | v2 |

**v3.2 yazar protokolü 12 adım özet** (referans: `writers/gamze-cizreli.md` §0.5):
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
- Frontmatter import'ları: `BaseLayout`, `SubmenuHero` (varsa kategori submenu-heroes.ts'te), `SubmenuArticleBody`, `ArticleProsePanel`, `Evidence`, `RelatedReadings`, `EditorNote` (BEN için), `ArticleAuthorBlock`, `buildArticleSchemas`
- JSON-LD injection: `MedicalWebPage` + `Article` + `BreadcrumbList`
- Body: `ArticleProsePanel` içinde h2 + italic lede paragraflar
- `class="prose prose-lg prose-estranova max-w-none"` zorunlu (CLAUDE.md HARD CONSTRAINT)
- Sonra: `RelatedReadings` (3-5 link) → `EditorNote` (BEN) → `ArticleAuthorBlock` → Disclaimer

**Detaylı şablon:** `AGENTS.md` line 147 "Article page layout (Astro)" — kod örnekleri orada.

---

## Faz 4 — İçerik Üretimi (yazar protokolünden çıkan)

### 4.1 Editöryal tipografi (CLAUDE.md HARD CONSTRAINT)

- **6-8 H2** (cümleli; tek-kelime "Beslenme" / "Sonuç" YASAK)
- Her H2'den sonra **ilk paragraf = italic lede** (1-2 cümle, bölümün açılış kanısı/sorusu/durumu) — `prose-estranova` CSS otomatik italic burgundy serif render
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
| **A) Inline akran-yumuşatma** | %70 | Akran cümlesi + (kanıt) + yazar yorumu |
| **B) Anekdot köprüsü** | %20 | Anekdot/sahne + (kanıt) + akran yorum |
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
- Detay: `writers/gamze-cizreli.md` §5c-ek + dual_role_warning

### 4.4 ArticleAuthorBlock

`src/data/writers.ts` içindeki yazar profilinden çekilir. Manuel girme; sadece `slug` ile referans. Component otomatik render eder (display name, bio, avatar, link).

### 4.5 RelatedReadings

3-5 link. Aynı kategoriden + komşu kategoriden. CrosslinkRules: `feedback_article_hub_linking_rule.md` (memory):
- Parent hub'a ekle
- Manifest entry
- 3-5 cross-link

### 4.6 Hero image

- Önce vault katalog (`reference_vault_media_catalog.md`)
- Eşleşme yoksa konsept-odaklı yükleme isteği (kullanıcıya)
- 12 Türk kadın arketip çerçevesi (`reference_archetype_framework.md`) — tek yüz tekrarını kır

### 4.7 JSON-LD (zorunlu — non-optional)

`src/utils/article-schema.ts → buildArticleSchemas()` helper. Her yayın makalesinde:
- `MedicalWebPage` (üst tip)
- `Article` (yazar + reviewedBy)
- `BreadcrumbList` (kategoriden makaleye yol)

`author.Person` → `writers.ts`
`reviewedBy.Person` → Tıbbi editör (Doç. Dr. Senai Aksoy)
`articleSection` + `sectionPath` → kategoriye uygun

---

## Faz 5 — Pre-publish Checklist (YAYIN ÖNCESİ ZORUNLU)

| # | Kontrol | Sonuç |
|---|---|---|
| 1 | Yazar §13 self-check (varsa, v3.2'de zorunlu — Gamze) — 0-1 hayır kabul, 2+ revizyon | ☐ |
| 2 | Frontmatter eksiksiz: `title`, `description`, `author`, `reviewedBy`, `date`, `category`, `sectionPath`, `hero`, `lang="tr"` | ☐ |
| 3 | `ArticleProsePanel` + `class="prose prose-lg prose-estranova max-w-none"` (CLAUDE.md HARD CONSTRAINT) | ☐ |
| 4 | 6-8 cümleli H2 + her birinde italic lede | ☐ |
| 5 | Evidence 2-3 (max 4-5), yazar sesinde yumuşatılmış (3 yapıdan biri) | ☐ |
| 6 | Bilimsel Editör Notu 5-katmanlı (150-250 kelime, Doç. Dr. Senai Aksoy imzalı) | ☐ |
| 7 | Çift Rol Uyarısı (Gamze): muayene odası bilgisi sızıntısı yok | ☐ |
| 8 | ArticleAuthorBlock — writers.ts'ten | ☐ |
| 9 | RelatedReadings 3-5 link (parent hub + komşu kategori) | ☐ |
| 10 | Hero image — vault catalog veya yeni üretim, archetype çerçevesi | ☐ |
| 11 | JSON-LD: MedicalWebPage + Article + BreadcrumbList (`buildArticleSchemas`) | ☐ |
| 12 | Parent hub'a listelendi (mevcut hub `index.astro`'ya makale eklendi) | ☐ |
| 13 | Manifest entry eklendi (varsa kategori manifesti) | ☐ |
| 14 | Compliance score ≥ 85 (`compliance_expert_agent.py`) | ☐ |
| 15 | Yasak filtreleri temiz (URL, kuruluş adı, marka, HRT/ilaç adı, lüks dekor, sosyal/siyasi yorum) | ☐ |
| 16 | Tıbbi sorumluluk reddi disclaimer'ı görünür (CLAUDE.md §1) | ☐ |
| 17 | Dil: %100 Türkçe (CLAUDE.md Dil politikası) | ☐ |

**13-17 herhangi birinde "hayır" → otomatik büyük revizyon.** Yayın engellenir.

---

## Faz 6 — Post-publish

- Cloudflare auto-deploy (push = main → site, bkz. `reference_cloudflare_deploy.md`)
- /symptoms bento entry (gerekirse, bkz. `project_symptoms_audit_2026_04_28.md`)
- Hub linkage audit (orphan kontrolü, bkz. `feedback_article_hub_linking_rule.md`)

---

## Hızlı Başlangıç (cheat sheet)

```
1. Konu → CLAUDE.md HARD CONSTRAINTS uyumu? Yazar atama (§9 + §10).
2. Çift Rol kontrol (Gamze ise).
3. Yazar §0.5 protokolü uygula (v3.2'de yazılı; v2/v2.1'de §3 + §4).
4. Astro file → kategori klasörü → AGENTS.md "Article page layout" şablonu.
5. ArticleProsePanel içinde 6-8 H2 + italic lede.
6. Evidence 2-3 yumuşatılmış. Yasak: literal nokta dizisi.
7. Bilimsel Editör Notu 5-katmanlı (150-250 kelime, Senai Aksoy imza).
8. ArticleAuthorBlock + RelatedReadings 3-5 + Hero (vault).
9. JSON-LD: buildArticleSchemas().
10. Pre-publish checklist 17 madde — 13-17 must-pass.
11. Hub linkage. Compliance ≥85.
12. Push → Cloudflare auto-deploy.
```

---

## Bağlantılı belgeler

- **CLAUDE.md** — HARD CONSTRAINTS §1-§6 (kimlik, ses, yasaklar, dil, editöryal tipografi)
- **AGENTS.md** — line 147 "Article page layout (Astro)", Evidence component, JSON-LD pattern
- **writers/gamze-cizreli.md** — yazar-özel v3.2 protokol (§0.5 + §12 gold-standard + §13 self-check)
- **docs/PIPELINE.md** — compliance score eşikleri, best-effort akışı
- **Memory:** `feedback_article_writing_checklist.md`, `feedback_article_hub_linking_rule.md`, `feedback_dual_role_senai_gamze.md`, `reference_writer_profile_v32_pattern.md`, `reference_vault_media_catalog.md`, `reference_archetype_framework.md`
- **Vault:** `wiki/sites/estranova/writers-profile-architecture.md`, `editorial-rules.md`, `voice-rules-hassas-terimler.md`, `senai-aksoy-gecici-yazar.md`

---

## Versiyon

- **v1.0** (2026-04-29) — İlk yayım. v3.2 Gamze protokolü kanıtlandıktan sonra Faz 1-6 + 17 maddelik pre-publish checklist + Evidence/BEN şablonu yapısallaştırıldı. Çift Rol Uyarısı kritik sınır olarak işaretlendi.
