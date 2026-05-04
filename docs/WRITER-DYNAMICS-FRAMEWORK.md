# Writer Dynamics Framework

> **Amaç:** Estranova'nın 8 yazarını **statik snapshot** yerine **canlı, evrim geçirebilen sistem** olarak modellemek. Her yazarın "DNA"sını koruyarak (mevcut profil dosyaları), zaman içinde mikro-evrim, çeşitlilik garantisi ve kendi külliyatına süreklilik kuran bir mimari.
>
> **Kapsam:** Cross-writer infrastructure. Tek dosyada tanımlanan kurallar 8 yazara da uygulanır; per-writer customization YAML override ile.
>
> **Yazılış tetikleyicisi:** 2026-04-29 Gamze v3.2 test makalesi sonrası "yazar profili sürekli evrim halinde olmalı" tespiti. Per-writer kurallar yerine merkezi framework + writer-specific instances yaklaşımı seçildi.

---

## 5 katmanlı mimari

| Katman | Konum | Yenilenme |
|---|---|---|
| **A) Statik DNA** | `writers/<yazar>.md` (mevcut profil) | Versiyon bazında (v3.2 → v3.3); ay/yıl bazında değişmez |
| **B) Akümülatif log** | `icerik/yazar-onaylari/<yazar>/article-log.md` | Her makale sonrası satır ekleme |
| **C) Temporal context** | Runtime (otomatik hesap) | Her makale yazımında |
| **D) Periyodik evrim review** | İnsan editör + AI pass | Her 10 makale veya 6 ay (hangisi önce) |
| **E) Inter-article continuity** | Makale gövdesi içinde soft cross-link | Makale yazımında, opsiyonel |

**Önemli:** A katmanı **DNA'dır, değişmez**; B-E katmanları **akış**tır, sürekli güncellenir.

---

## Katman A — Statik DNA (mevcut)

Yazarın çekirdek kimliği. Mevcut profil dosyalarında zaten tanımlı:

- Karakter özü (§3)
- Ses imzası (§4 — signature_phrases, başlık tipi, açılış kalıpları)
- Manifesto kalıpları (§4e — varsa)
- Spiritüel/felsefi omurga (§4f — varsa)
- Atıf üslubu, kapanış formülü
- Çift Rol uyarıları (§5c-ek — Gamze)
- Yürütme protokolü (§0.5 — varsa, v3.2)

DNA versiyon bazında evrildi (v2 → v2.1 → v3.1 → v3.2). Versiyon bump bilinçli, organic evolution review (Katman D) sonrası yapılır.

---

## Katman B — Akümülatif log

### Konum

`icerik/yazar-onaylari/<yazar-slug>/article-log.md`

### Schema (8 yazar için ortak — ZORUNLU)

```markdown
# <Yazar Adı> — Article Log

> Article log framework: docs/WRITER-DYNAMICS-FRAMEWORK.md
> DNA referansı: writers/<yazar-slug>.md
> Log başlangıcı: <tarih>

| # | Tarih | Konu | Kategori | Yazar v. | Aforizma | Manifesto | Anekdot | Açılış | Başlık tipi | Mevsim | Notlar |
|---|---|---|---|---|---|---|---|---|---|---|---|
```

### Sütun açıklamaları

- **#** — sıra numarası (1, 2, 3...)
- **Tarih** — ISO format (2026-04-29)
- **Konu** — makale konusu kısa (max 8 kelime)
- **Kategori** — Estranova kategori slug (zamansiz-yasam, hormonal-gecis/menopoz, vb.)
- **Yazar v.** — yazar profil versiyonu (v3.2, v2.1, vb.)
- **Aforizma** — kullanılan aforizma (sayfa numarası veya kaynak; "—" yoksa)
- **Manifesto** — kullanılan manifesto kalıbı (s.X veya kalıp adı; "—" yoksa)
- **Anekdot** — anekdot türleri (T1+T4+T7 gibi; profil §4b'ye göre kodlama)
- **Açılış** — açılış kalıbı kısa kod ("Geçen perşembe..." → "Geçen perşembe açılışı")
- **Başlık tipi** — `title_style.prefer` listesinden (Mevsim+saat / Tireli / Aforistik / Üç nokta / Kişisel zaman)
- **Mevsim** — yazıldığı mevsim (ilkbahar/yaz/sonbahar/kış)
- **Notlar** — opsiyonel; özel durum (test, evrim review tetikleyicisi vb.)

### Örnek satır

```
| 1 | 2026-04-29 | Sade sofra disiplini | zamansiz-yasam | v3.2 | s.218 | s.132 | T1+T4+T7 | Yıllar önce... | Tireli | ilkbahar | Test makalesi |
```

---

## Katman C — Temporal context (runtime injection)

Her makale yazımında AI **otomatik** hesaplar:

### 1. Yazarın yaşı

Profile YAML'daki `dynamics.birth_year` + bugünün tarihi. Örn: Gamze 1968 doğumlu → 2026-04-29'da 57-58.

### 2. Mevsim

Bugünün tarihi → Türkiye takvimi:
- 21 Mart - 21 Haziran: ilkbahar
- 22 Haziran - 22 Eylül: yaz
- 23 Eylül - 21 Aralık: sonbahar
- 22 Aralık - 20 Mart: kış

### 3. Önceki makaleden geçen süre

Log'un son satırından bugüne kadar gün/hafta. **Süreklilik tonu etkiler:**
- < 1 hafta: "geçen hafta yazmıştım..."
- 1-4 hafta: "geçen ay düşündüğüm..."
- 1-3 ay: "uzun zaman önce..."
- 3+ ay: "çok zaman geçmiş..."

### 4. Yakın dönem teması

Log'un son 3 satırı taranır. **Tema sıçraması engellenir:**
- Aynı kategoride 3 makale üst üste varsa kategori değişikliği önerilir
- Aynı imza eksen (mutfak/sabah/sürdürülebilir) 3 makale üst üste varsa değiştir

### 5. İlk makale durumu

Log boşsa C katmanı sadece yaş + mevsim hesaplar; süreklilik ve yakın dönem teması yok.

---

## Katman D — Periyodik evrim review

### Tetikleme

İki koşuldan biri:
- **Makale-bazlı:** Yazar log'una 10 yeni satır eklendi
- **Zaman-bazlı:** Son evrim review'dan 6 ay geçti

Hangisi önce gelirse.

### Review prosedürü

1. **Pattern detection (AI pass):**
   - Son 10 makalenin gövdesi taranır
   - Yeni signature_phrases ortaya çıktı mı? (örn. yazar 3+ makalede üst üste yeni bir tabir kullanmış)
   - Yeni anekdot türü gelişti mi? (mevcut §4b 7 türünden farklı)
   - Yeni iç çelişki belirginleşti mi? (§5d'ye eklenecek)
   - Yeni manifesto kalıbı doğdu mu? (§4e'ye eklenecek)

2. **Drift detection:**
   - Aşırı tekrarlanan kalıp var mı? (cooldown'a rağmen tekrar)
   - Tonun belli yöne kayması var mı? (yorgunluk vs bilinçli evrim)
   - Yasak filtre ihlali var mı? (geriye dönük audit)

3. **Editör onayı:**
   - AI pass çıktısı insan editöre (Doç. Dr. Senai Aksoy + ilgili yazar onayı)
   - Onaylanan değişiklikler profile commit edilir

4. **Profile minor version bump:**
   - v3.2 → v3.3 (Gamze)
   - v2.1 → v2.2 (Berna, Özlem)
   - v2 → v2.1 (diğerleri — bu paritye taşıma fırsatı)

5. **Changelog:** Profile sonuna v3.x → v3.x+1 evrim kaydı yazılır.

### Yapay değil — organic

Yazar profilden değil **kendi üretim çıktısından** öğrenir. AI 10 makale yazıyor; review pass 10 makaleden öğrendiği yeni patterns'i tespit ediyor; insan editör organic olanı seçiyor; profile bump'lanıyor. Bu sadece bir refactoring değil — yazarın **gerçek evrim simülasyonu**.

---

## Katman E — Inter-article continuity (soft cross-link)

### Amaç

Yazarın kendi külliyatına doğal atıf. Cizreli'nin doğal jesti zaten budur:
- *"Geçen ay yazmıştım..."*
- *"Bir başka yere not düşmüştüm..."*
- *"Önceden de düşünmüştüm bunu..."*

### Frekans

- Max **1-2 cross-link/makale**
- Yasak: SEO-style "bkz. önceki makale" — agresif iç linkleme

### Uygulama

AI yazma sırasında log'a bakar:
- Son 5 makale içinde benzer tema/eksen yazıldı mı?
- Evet ise: 1 doğal cross-link cümle (gerçekten anlatıyı zenginleştiriyorsa)
- Hayır ise: cross-link yok

### Yazar overrides

Bazı yazarlar (örn. Berna sade-rasyonel) cross-link kullanmaz. Profile YAML'da:

```yaml
dynamics:
  allow_inter_article_crosslinks: false
```

---

## Cooldown parametreleri (varsayılan)

Çeşitlilik garantisi için **drift guard:**

| Eleman | Cooldown | Min. havuz |
|---|---|---|
| Aforizma (alıntı) | **6 makale** | yazara göre |
| Manifesto kalıbı | **4 makale** | yazara göre |
| Mevlana metaforu (yazara özgü; örn. Gamze: mum) | **5 makale** | — |
| Başlık tipi | **3 makale** | 4 tip |
| Mevsim açılışı (sonbahar/kış vb.) | **4 makale** | — |
| Anekdot türü kombinasyonu (örn. T1+T4) | **2 makale** | — |
| **(v2.6)** Açılış cümlesi (`opening_pattern`) | **6 makale** + ardışık 2 yasak | **10+ varyant** |
| **(v2.6)** Kapanış formatı (`closing_pattern`) | **4 makale** + ardışık 2 yasak | **10+ format** |
| **(v2.6)** Dengeleyici cümle (`balance_phrase`) | **4 makale** + ardışık 2 yasak | **10+ varyant + atlama** |
| **(v2.6)** "Bilmiyorum" anı (`not_knowing_phrase`) | **4 makale** + ardışık 2 yasak | **10+ varyant** |
| **(v2.6)** Hekim/uzman çerçevesi (`clinician_frame`) | **4 makale** + ardışık 2 yasak | **10+ varyant** |
| **(v2.6)** Anekdot kapısı (`anecdote_door`) | **4 makale** + ardışık 2 yasak | **10+ varyant** |
| **(v2.6)** İmza kapanış cümlesi yapısı (`signature_closing_template`) | **4 makale** + ardışık 2 yasak | **6+ varyant + atlama** |
| **(v2.6)** Bilimsel Editör Notu 5 başlık dizilimi (`editor_note_layer_titles`) | **6 makale** (3 ardışık birebir yasak) | başlık havuzu rotasyonu |
| Humor / mizah kalıbı (yazar varsa) | **6 makale** | **8-10 kalıp** |

### Override mekanizması

Yazar profile YAML'da:

```yaml
dynamics:
  cooldown_overrides:
    aforizma: 8        # Berna gibi sade yazar daha geniş cooldown ister (havuz küçükse)
    manifesto: 3       # manifesto-ağır yazar daha kısa
```

Belirtilmeyen alanlar varsayılana uyar.

### İstisna durumları

- **Kanonik soru** (örn. Gamze s.89 "Kendi hayatımda ben ne kadar varım?") — cooldown'a tabi DEĞİL; yazarın imza-cümlesi
- **İmza metafor** (örn. Gamze "kapı" — HRT kapısı + tasavvufî yol açıklığı birleşik) — cooldown'a tabi DEĞİL; semantic core

İstisnalar profile YAML'da:

```yaml
dynamics:
  cooldown_exempt:
    - "kanonik_soru_s89"
    - "kapi_metafor"
```

---

## Per-writer YAML schema — `dynamics:` bloğu

Her yazar profilinin §11 YAML'ında zorunlu blok:

```yaml
dynamics:
  log_path: "../../icerik/yazar-onaylari/<yazar-slug>/article-log.md"
  birth_year: <YYYY>
  cooldown_overrides: {}                  # boş = varsayılan
  cooldown_exempt: []                     # imza-cümle/metafor
  allow_inter_article_crosslinks: true|false
  evolution_review_threshold: 10          # makale sayısı (default)
  evolution_review_time_threshold_months: 6
```

### 8 yazar için varsayılan değerler

| Yazar | birth_year | cross-link | Notlar |
|---|---|---|---|
| Alara Baykent | 1995 | true | Sporcu eksen, dar |
| Başak Pelister | 1970 | true | Soru-cevap imzası, üç nokta yoğun |
| Berna Aksoy | 1969 | true | Araştırmacı-rasyonel; "önceki bir düşüncemde değinmiştim" doğal |
| Duygu Karaosmanoğlu | 1971 | true | Klinik-yumuşak |
| Gamze Cizreli | 1968 | true | Doğal jesti var ("geçen ay yazmıştım") |
| Işık Selin Günce | 1979 | true | Mahrem alanda, kapsamlı |
| Özlem Denizmen | 1971 | true | Finansal köprü, soru-açılış |
| Rima Erdemir | 1971 | true | Teknoloji/wearable, yenilik |

> **Default policy:** Tüm yazarlar için `allow_inter_article_crosslinks: true` varsayılan. Pratikte bir yazarın sesinde cross-link uymadığı görülürse Faz 1.5'te bilinçli override edilir; ama yargısal varsayım yapılmaz.

---

## Yürütme entegrasyonu — `docs/ARTICLE-PRODUCTION-SPEC.md` ile bağ

Framework spec dosyasına 2 faz olarak entegre edilir:

### Faz 1.5 — Article log review (yazma öncesi)

**Konum:** Faz 1 (yazar atama) ile Faz 2 (yazar §0.5 protokolü) arası.

**Adımlar:**
1. Yazar log dosyasını oku (`icerik/yazar-onaylari/<yazar>/article-log.md`)
2. Cooldown filtreleri uygula:
   - Son 6 makaleden aforizma listesi → bu makalede o aforizmalar YASAK
   - Son 4 makaleden manifesto kalıpları → YASAK
   - Son 3 makaleden başlık tipleri → YASAK
   - Son 4 makaleden açılış kalıpları → YASAK
   - Son 4 makaleden mevsim açılışları → YASAK (eğer bu makale aynı mevsim ise)
3. Temporal context hesapla (yaş, mevsim, önceki makale uzaklığı, yakın dönem teması)
4. Cross-link kararı: log'da benzer tema var mı, doğal cross-link uygun mu?
5. Filtrelenmiş havuzu Faz 2'ye geçir

### Faz 7 — Post-publish journal entry (yayın sonrası)

**Konum:** Faz 6 (post-publish) sonrası, son adım.

**Adımlar:**
1. Yayınlanan makalenin meta verilerini topla:
   - Tarih, konu, kategori, yazar versiyonu
   - Kullanılan aforizma, manifesto, anekdot türleri, açılış, başlık tipi, mevsim
2. Log dosyasına yeni satır ekle (sıralı; en son satıra append)
3. **Evolution trigger kontrol:**
   - Log'da yeni satır sayısı > evolution_review_threshold (default 10) mi?
   - Son evrim review'dan 6 ay geçti mi?
   - Evet ise: editöre evrim review tetikleyicisi bildirimi

---

## Cross-writer audit yetenekleri

Schema standart olduğu için cross-writer SQL-benzeri sorgular mümkün (script ile):

- *"Son 30 gün'de en aktif yazar?"*
- *"Hangi yazar 6 ayda hiç manifesto kalıbı kullanmamış?"*
- *"Sonbahar açılışı 8 yazardan kaçında çıktı?"*
- *"Cooldown kuralı en çok hangi yazarda tetikleniyor?"*
- *"Hangi yazarın evrim review'i gecikiyor?"*

**Audit script konumu:** `scripts/writer-dynamics-audit.mjs` (gelecekte; şimdilik manuel sorgulama)

---

## İstisnalar ve özel durumlar

### 1. Çift Rol Uyarısı (Gamze özel)

Gamze log'unda **muayene odası bilgisi sızıntısı** sıfır toleranslı. Log'un "Notlar" sütununa ima bile yazılmaz. Editör revizyon yaparken log'u kaynak olarak kullanırken bu sınırı asla unutmaz.

### 2. Senai Aksoy geçici yazar

Mahrem konularda ad-hoc kullanım. Şu an log gerekli değil; eğer >5 makale yayınlanırsa log dosyası oluşturulur.

### 3. Test makaleleri

`Notlar` sütununda "Test" işaretli olur. Cooldown hesabına dahil edilir mi? **DAHİL DEĞİL** — test makalesi yayınlanmadığı için "kullanılmamış" sayılır. Ama referans için log'da kalır.

### 4. Retrofit (geçmiş yayınlar)

Bu framework yayın tarihinde (2026-04-29) zaten yayınlanmış makaleler var. Retrospektif log doldurma:
- Geçmiş yayınlar mümkün olduğunca tam doldurulur
- Bilinmeyen alanlar için "?" işareti
- Notlar sütununda "Retrofit" etiketi

---

## Versiyon

- **v1.0** (2026-04-29) — İlk yayım. 5 katmanlı mimari (DNA / log / temporal / evrim / cross-link) + cooldown parametreleri + per-writer YAML schema + Faz 1.5 + Faz 7 entegrasyonu + cross-writer audit altyapısı.
- **v1.1** (2026-05-02) — **Şablon Kırma Disiplini eklendi** (Berna 13 makale post-mortem'i sonrası, 9 kalıbın 6-10 makalede birebir tekrarı tespit edildi). 7 yeni cooldown alanı standart havuz listesine eklendi: `opening_pattern`, `closing_pattern`, `balance_phrase`, `not_knowing_phrase`, `clinician_frame`, `anecdote_door`, `signature_closing_template`, `editor_note_layer_titles`. Her havuz **minimum 10 varyant**, ardışık 2 makalede aynı varyant yasak. Detay: **`docs/WRITER-TEMPLATE-BREAKING-DISCIPLINE.md`** (v2.6 evrensel kuralları).

## Bağlantılı belgeler

- **CLAUDE.md** — HARD CONSTRAINTS §1-§6 (Şablon Kırma Disiplini §6 checklist'inde)
- **docs/ARTICLE-PRODUCTION-SPEC.md** — makale üretimi 6-fazlı spec; Faz 1.5 + Faz 7 framework'e bağlanır
- **docs/WRITER-TEMPLATE-BREAKING-DISCIPLINE.md** — v2.6 evrensel şablon kırma kuralları (8 imza kalıbı + cooldown standartları + yapısal tekrar yasakları)
- **writers/<yazar>.md** — DNA katmanı (Statik A)
- **icerik/yazar-onaylari/<yazar>/article-log.md** — akümülatif log (Katman B)
- **vault wiki/sites/estranova/writers-profile-architecture.md** — yazar profil mimarisi notu
- **memory/reference_writer_dynamics_framework.md** — bu framework'e referans memory entry
- **memory/feedback_template_breaking_universal_2026_05_02.md** — Şablon Kırma Disiplini evrensel kuralı memory entry
