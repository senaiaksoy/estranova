# Şablon Kırma Disiplini — Tüm Yazarlar İçin Evrensel Kural

> **Amaç:** AI agent her yazar makalesinde **aynı kalıba düşmesin** — okur 2-3 makaleyi yan yana okuduğunda "algoritma üretimi" hissi almasın. Yazar imzası **rotasyon havuzu** ile korunur, **özdeş cümle tekrarı** yasaktır.
>
> **Kapsam:** Estranova'nın tüm aktif yazarları (Berna, Alara, Başak, Duygu, Gamze, Işık, Özlem, Rima, ve gelecek yazarlar). Tek dosyada tanımlanan kurallar tüm yazarlara uygulanır; per-writer customization YAML override + writer hot.md havuzu ile.
>
> **Yazılış tetikleyicisi:** 2026-05-02 — Berna 13 onaylı makale post-mortem'inde 9 kalıp 6-10 makalede birebir tekrar etti, son 3 makale ardışık özdeş şablon. Çözüm: havuz + sıkı cooldown + article-log kayıt.
>
> **İlişkili dokümanlar:**
> - [`WRITER-DYNAMICS-FRAMEWORK.md`](WRITER-DYNAMICS-FRAMEWORK.md) — 5 katmanlı yazar mimarisi + temel cooldown listesi
> - [`ARTICLE-PRODUCTION-SPEC.md`](ARTICLE-PRODUCTION-SPEC.md) — makale üretim akışı + Faz 2.2
> - Yazar profil dosyaları: `writers/<yazar>/hot.md` §4 + `writers/<yazar>/profile.yaml` `dynamics:`

---

## Üst Kural — Bir Cümle

> **Aynı yazar imza cümlesi 2 ardışık makalede birebir tekrarlanamaz. Aynı kalıp havuzun cooldown penceresi içinde 1 kez kullanılır. Her kalıp en az 10 varyantlı bir havuza sahip olur.**

Bu kural tüm 8 imza kalıbı için geçerlidir (aşağıda).

---

## 8 İmza Kalıbı — Standart Cooldown'lar

Her yazarın hot.md §4'te (veya warm.md'de) bu 8 kalıp havuzu tanımlanmalıdır. Bazı yazarlarda zaten kısmi havuz vardır; v2.6 ile **havuz minimum 10 varyant**'a çıkarılır.

| # | Kalıp | Havuz minimum | Cooldown (default) | Ardışık 2 yasak | Atlama opsiyonu |
|---|---|---|---|---|---|
| 1 | **Açılış (signature opening)** | 10 varyant | 6 makale | ✓ | ✗ (her makalede 1) |
| 2 | **Anekdot kapısı (dolaylı ses girişi)** | 10 varyant | 4 makale | ✓ | ✓ (anekdot olmayabilir) |
| 3 | **Hekim/uzman çerçevesi** | 10 varyant | 4 makale | ✓ | ✓ (hekim çerçevesi olmayabilir) |
| 4 | **Dengeleyici cümle (anekdot sonrası yumuşatma)** | 10 varyant | 4 makale | ✓ | ✓ (her makalede zorunlu değil) |
| 5 | **"Bilmiyorum" anı** | 10 varyant | 4 makale | ✓ | ✓ (bazı makalelerde tutum yeter, cümle yok) |
| 6 | **Kapanış formatı (kapanış mimarisi)** | 10 format | 4 makale | ✓ | ✗ (her makalede kapanış var, ama farklı format) |
| 7 | **İmza kapanış cümlesi (varsa)** — Berna "bedenle yazışma", Gamze "kanonik soru s.89", Başak "soru-cevap kapanışı", vb. | 6 cümle yapısı varyantı + atlama | 4 makale | ✓ | ✓ (~6-8/13 oranı; her makalede zorunlu değil) |
| 8 | **Humor / mizah kalıbı (yazar varsa)** — Berna 10 kalıp havuzu, diğerleri farklı | 8-10 kalıp | 6 makale | ✓ | ✓ (hassas konuda humor 0) |

> **Per-writer override:** Yazarın profile.yaml'ında `dynamics.cooldown_overrides:` bloğunda kalıp adına göre override yazılır. Örn: Berna v2.6 `opening_pattern: 6` (default 6 ile aynı, ama eksplisit yazılır), `closing_3_part_manifesto: 6` (özel kalıp + ardışık 2 yasak).

---

## Yapısal Tekrar Yasakları

Cümle düzeyi tekrar dışında **paragraf/yapı düzeyinde** tekrar da yasaktır.

### Yasak 1 — Bilimsel Editör Notu birebir başlık tekrarı

Estranova standardı: 5-katmanlı Bilimsel Editör Notu (Doç. Dr. Senai Aksoy imzalı). v2.6 öncesi gözlem: son 5-6 makalede başlıklar **birebir aynı** ("Klinik bağlam / Mekanik çerçeve / Klinik kırmızı bayraklar / Pratik bütünleşim / Bireysellik vurgusu") — ezberden okutuyor.

**v2.6 kuralı:** 5 başlık birebir aynı dizilim **3 ardışık makalede yasak**. Alternatif başlık havuzu (Senai Aksoy editöryal sesi içinde):

- "Klinik bağlam" / "Klinik bütüne yerleştirme" / "Hastalık yelpazesinde konum"
- "Mekanik çerçeve" / "Fizyolojik perde arkası" / "Hücresel düzeyde" / "Endokrin akış" / "Patofizyolojik harita"
- "Klinik kırmızı bayraklar" / "Tıbben dikkat eşiği" / "Hekim koltuğunun haritası" / "Sevk kriterleri"
- "Pratik bütünleşim" / "Klinikte uygulanırlığı" / "Tedavi sıralaması" / "Müdahale hiyerarşisi"
- "Bireysellik vurgusu" / "Bireyselleşme zonu" / "Ayırıcı tanı katmanı" / "Hasta-hekim kararının alanı"

Ayrıca: **bazı makalelerde 5 katman yerine 3 katman** kullanılabilir (kısa not). Yapı zorunlu değil; tutarlılık zorunlu.

### Yasak 2 — Açılış cümle yapısı kalıbı

Yazarın açılış havuzunda 1 numara olan kalıp (örn. Berna "Bir noktada şunu fark ettim:") **4 yayında 1 kez** kullanılır. Kalan 3 makale farklı varyant.

### Yasak 3 — Bedenle yazışma / imza kapanış cümlesi 13/13 olamaz

Yazarın imza kapanış cümlesi varsa (Berna "Beden bir cümle söylemişti...", Gamze "Kapı..." vs.) **her makalede zorunlu değildir**. Önerilen oran: makalelerin **%50-65'inde** geçer; gerisinde başka kapanış formatı.

Hassas konularda (ciddi tanı, ölüm, ağır kayıp) bu cümle ezbere okunabilir; **sessizlik daha güçlü**.

### Yasak 4 — Kapanış formatı ardışık tekrarı

Aynı kapanış formatı (3-parçalı manifesto, tek paragraf editöryal, soru-cevap, metafor üzerinden çıkış vb.) **2 ardışık makalede yasak**.

---

## Article-Log "Notlar" Sütunu — Kalıp Seçim Kaydı

Her yayın sonrası `icerik/yazar-onaylari/<yazar>/article-log.md` "Notlar" sütununa kalıp seçim özeti yazılır:

```
| <slug> | açılış: #N (<varyant adı>) | dengeleyici: #N veya yok | kapanış formatı: #N | hekim çerçevesi: #N (varsa) | anekdot kapısı: #N (varsa) | bilmiyorum: #N (varsa) | imza kapanış cümlesi: var(#N + sembol) veya yok | humor: #N veya 0 |
```

Bu sayede AI agent yeni makale yazarken **son 6 makaledeki seçim kayıtlarını** okuyup cooldown'u uygulayabilir.

> **Schema:** `writers/_schema/profile.schema.json` ve framework dosyasındaki article-log şeması ile uyumlu. v2.6 ile "Notlar" sütunu **kalıp seçim kaydı için zorunlu** alan.

---

## AI Agent — Yazar Makale Üretim Akışı (v2.6)

Yeni Berna/Gamze/Alara vb. makalesi yazılırken AI agent şu adımları yürütür:

### 1. Profile + hot.md + son 6 makale log'u oku

```
profile.yaml → dynamics.cooldown_overrides + cooldown_exempt + pattern_pool_sizes
hot.md → 8 imza kalıbı havuzu (10+ varyant her biri)
article-log → son 6 satır "Notlar" sütunu (kullanılan varyantları çıkar)
```

### 2. Her kalıp için cooldown'dan uygun varyant seç

Aday listesi: havuz - cooldown'da olanlar. Kalan adaylardan **konuya en uygun** olanı seç. Birden fazla aday varsa rastgele değil — anlamsal uyumla.

### 3. Atlama opsiyonu kullanma değerlendirmesi

- Dengeleyici cümle, hekim çerçevesi, anekdot kapısı, bilmiyorum cümlesi, imza kapanış cümlesi, humor — bunların **bazıları belirli makalelerde atlanabilir**. Zorunlu olmayan kalıpları her makalede mekanik kullanmak şablonlamadır.

### 4. Yazılan makaleyi self-check

Article-log "Notlar" sütununa yazılacak satırı **makale yayını öncesi** çıkar. Eğer satır son 1 makalenin satırıyla 4+ alanda aynıysa **revizyon tetiği**.

### 5. Yayın sonrası article-log'a satır ekle

Article-log otomatik veya yarı-otomatik güncellenir. AI agent bu satırı yazar.

---

## Yazar Profile.yaml — Standart `cooldown_overrides` Bloğu (v2.6)

Tüm 8 yazarın profile.yaml `dynamics.cooldown_overrides:` bloğunda v2.6 sonrası şu standart bulunur (per-writer override edilebilir):

```yaml
dynamics:
  log_path: "../../icerik/yazar-onaylari/<yazar-slug>/article-log.md"
  birth_year: <YYYY>
  # v2.6 — Şablon Kırma Disiplini cooldown'ları
  # docs/WRITER-TEMPLATE-BREAKING-DISCIPLINE.md tüm yazarlar için evrensel.
  cooldown_overrides:
    opening_pattern: 6           # Açılış havuzu (10+ varyant) — aynı varyant 6 makale ara
    closing_pattern: 4           # Kapanış formatı (10 format) — 4 ara
    balance_phrase: 4            # Dengeleyici cümle (10+ varyant) — 4 ara, atlama opsiyonu
    not_knowing_phrase: 4        # Bilmiyorum anı (10+ varyant) — 4 ara
    clinician_frame: 4           # Hekim/uzman çerçevesi (10+ varyant) — 4 ara
    anecdote_door: 4             # Anekdot kapısı (10+ varyant) — 4 ara
    signature_closing_template: 4  # İmza kapanış cümlesi yapısı — 4 ara, atlama opsiyonu
    editor_note_layer_titles: 6  # Bilimsel Editör Notu 5 başlık dizilimi — 6 ara
    # Yazarın özel kalıpları (varsa) eklenir:
    # closing_3_part_manifesto: 6  # Berna 3-parçalı Bir/İki/Üç kapanışı
  cooldown_exempt:
    # Yazarın imza-cümleleri/metaforları (cooldown'a tabi DEĞİL):
    # - "kanonik_soru_s89"  # Gamze s.89 sorusu
    # - "kapi_metafor"      # Gamze "kapı"
  allow_inter_article_crosslinks: true
  evolution_review_threshold: 10
  evolution_review_time_threshold_months: 6
  # v2.6 — kalıp havuzları (referans; tam liste hot.md §4'te)
  pattern_pool_sizes:
    opening: 10              # min 10
    closing: 10
    balance_phrase: 10
    not_knowing: 10
    clinician_frame: 10
    anecdote_door: 10
    signature_closing: 6     # cümle yapısı varyantı (sembolle birlikte)
```

### Override örnekleri (per-writer)

- **Berna v2.6:** Sosyal harita zengin, 14 açılış varyantı havuzu kuruldu. `cooldown_overrides.opening_pattern: 6` korundu (default ile aynı; daha sıkı isteniyorsa 8'e çıkarılabilir).
- **Gamze v3.2:** Kanonik soru s.89 ve "kapı" metaforu cooldown'dan **muaf** (`cooldown_exempt: ["kanonik_soru_s89", "kapi_metafor"]`). Aforizma havuzu zengin (200+ aforizma kitabı dataset'i).
- **Alara v1.x:** Sporcu eksen dar; humor havuzu küçük olabilir, cooldown 4 makale yeterli (default 6 yerine).
- **Rima v2.x:** Teknoloji/wearable/AI odağı; veri-anlatı kalıbı imza, cooldown'dan muaf olabilir.
- **Başak v2.x:** Soru-cevap tekniği imza (HARD); soru kalıpları cooldown_exempt'a alınabilir.

---

## Geçiş Stratejisi (mevcut yazarlar için)

### Aşama 1 — Profile.yaml standardizasyonu (2026-05-02 ✓ tamamlandı)

8 yazar profile.yaml'ına v2.6 cooldown_overrides bloğu eklendi. **DNA korunur** (writer_version bump opsiyonel — işlevsel değişiklik yoksa minor versiyon notu yeter).

### Aşama 2 — Lazy havuz aktivasyonu (yeni makale ile genişlet)

> **Karar (2026-05-02):** Havuzlar **boilerplate olarak proaktif doldurulmaz**; her yazar için **ilk makale üretimi sırasında** yazarın o anki sesinden türetilir. Yapay 10 varyant havuzu ezberden gelir; gerçek üretim ihtiyacında türetilen havuz yazarla konuşur.

**Trigger noktası — yeni yazar makalesi üretim akışı (AI agent zorunlu kontrol):**

1. AI agent yazarın hot.md §4'ünü okur
2. **Şu kontrol yapılır:** "Şablon Kırma Disiplini havuzu" bölümü var mı?
   - **Yok** veya **eksik** ise → AI agent **havuz aktivasyon adımını** tetikler (aşağıda)
   - **Var** ise → AI agent normal cooldown disiplini ile makaleyi yazar
3. Havuz aktivasyon adımı: AI agent o yazarın **sosyal haritasından, mesleki arka planından, ses imzasından, mevcut makale arşivinden** türeterek 10+ varyant havuzu önerir; kullanıcıya sunar; onay sonrası hot.md'ye yazılır
4. Sonrasında makale yazımı normal akışta devam eder (cooldown disiplini uygulanır)

**Hangi havuzlar aktive edilir (yazara göre):**

- **Açılış havuzu** (signature opening): minimum 10 varyant — yazarın "düşünce kapısı" tarzına uygun
- **Anekdot kapısı havuzu** (dolaylı ses girişi): minimum 10 varyant — yazarın sosyal haritasından (yakın çevre, aile, eski iş, kuşaklar)
- **Dengeleyici cümle havuzu** (yumuşatma): minimum 10 varyant — yazarın "ben sınırı" diline uygun
- **"Bilmiyorum" anı havuzu**: minimum 10 varyant — yazarın alçakgönüllülük tonuna uygun
- **Hekim/uzman çerçevesi havuzu**: minimum 10 varyant — yazarın klinik temas biçimine uygun
- **Kapanış formatı havuzu**: minimum 10 format — 3-parçalı manifesto / tek paragraf editöryal / soru-cevap / metafor / kendine not / vb.
- **İmza kapanış cümlesi varyantları** (yazar imzası varsa): minimum 6 cümle yapısı + atlama opsiyonu
- **Humor havuzu** (yazar humor yapan biriyse): 8-10 kalıp + cooldown + hassas konuda 0

**Aktivasyon yapılacak yazarlar (2026-05-02 itibarıyla, Berna hariç):**
Alara, Başak, Duygu, Gamze, Işık, Özlem, Rima — her biri için **ilk makale üretiminde** havuz aktive edilir.

Berna **v2.6'yı tamamen tamamladı** — referans örnek olarak kullanılabilir (`writers/berna-aksoy/hot.md` §4 v2.6 bölümleri).

### Aşama 3 — Article-log retroaktif kayıt (opsiyonel)

Mevcut onaylı makaleler için article-log "Notlar" sütununa retroaktif kalıp seçimleri yazılabilir. Berna 13 onaylı makale için bu yapıldı (2026-05-02).

Diğer yazarlar için retroaktif kayıt **opsiyonel**: yeni makale üretimi için zorunlu değildir; sadece audit kolaylığı sağlar.

---

## Lazy Aktivasyon Workflow (AI agent için somut adımlar)

Yeni bir Alara/Başak/Duygu/Gamze/Işık/Özlem/Rima makalesi yazılacaksa:

### Adım 0 — Pre-flight kontrol (article-context-build sırasında veya öncesinde)

```
profile.yaml.dynamics.cooldown_overrides ✓ (varsa standart blok)
hot.md §4 → "Şablon Kırma Disiplini havuzu" bölümü?
  ✓ var (10+ varyant her havuzda) → Adım 1'e geç
  ✗ yok veya eksik → Adım 0a'ya in
```

### Adım 0a — Havuz aktivasyon önerisi (yazar bazlı)

AI agent şunları kullanarak havuz önerir:

1. **Yazarın profil dosyaları** — `cold.md` (biyografi/birikim), `warm.md` (manifesto/üslup), `hidden.md` (gözlemler), `hot.md` (mevcut çekirdek imzalar)
2. **Yazarın sosyal haritası** — yakın çevre, mesleki bağlar, aile arka planı, kuşak referansları
3. **Yazarın mevcut makale arşivi** (varsa) — gerçekten kullandığı kalıpları gözle
4. **Yazarın imza humor havuzu** (varsa) — Berna'nın 10 kalıbı gibi yazara özel
5. **Yazarın profile.yaml `cooldown_exempt`** — semantic core (cooldown'a tabi DEĞİL) cümleler/metaforlar

AI agent **kullanıcıya sunar**: "Şu yazar için Şablon Kırma havuzu önerim: [...]" — kullanıcı onay verirse AI hot.md'ye §4 bölümünde "Şablon Kırma Disiplini havuzu" başlığı altında yazar.

### Adım 1 — Normal makale üretim akışı

Havuz hazır olduktan sonra ARTICLE-PRODUCTION-SPEC.md Faz 1-7 akışı işler; cooldown disiplini her makalede uygulanır.

### Adım 2 — Yayın sonrası kayıt

Article-log "Notlar" sütununa kalıp seçim özeti yazılır (havuz oluşturulurken kullanılan varyant numaraları kayıt edilir).

> **AI agent zorunluluğu:** Yeni yazar makalesi üretiminde Adım 0 atlanamaz. Havuz **boilerplate** olarak değil, **canlı yazar dokümantasyonundan türetilir**. Yapay 10 varyant havuzu (alfabetik sıralı, jenerik) yazardan kopuk olur — bu yapılmamalıdır.

---

## CLAUDE.md HARD CONSTRAINT bağı

CLAUDE.md §6 Kalite Kontrol Checklist'ine v2.6 maddesi eklendi:

```
- [ ] **Şablon Kırma Disiplini:** AI agent açılış / kapanış / hekim / anekdot kapısı / dengeleyici / bilmiyorum / imza kapanış cümlesi gibi 8 imza kalıbı için yazarın hot.md havuzundan **cooldown disiplini** ile **farklı varyant** seçti; aynı kalıp 2 ardışık makalede birebir tekrar etmiyor.
```

Detay: bu dosya (`docs/WRITER-TEMPLATE-BREAKING-DISCIPLINE.md`).

---

## Değişiklik geçmişi

- **v1.0** (2026-05-02) — İlk yayım. Berna 13 onaylı makale post-mortem'inde tespit edilen 9 kalıp tekrarı sonucu ortaya çıktı. 8 imza kalıbı için 10+ varyant havuzu + sıkı cooldown standardı belirlendi. Yapısal tekrar yasakları (Bilimsel Editör Notu başlıkları, kapanış formatı ardışık, imza kapanış cümlesi 13/13 yasağı) tanımlandı.
