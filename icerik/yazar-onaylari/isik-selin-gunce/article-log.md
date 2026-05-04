# Işık Selin Günce — Article Log

> **Article log framework:** [`docs/WRITER-DYNAMICS-FRAMEWORK.md`](../docs/WRITER-DYNAMICS-FRAMEWORK.md)
> **DNA referansı:** [`isik-selin-gunce.md`](./isik-selin-gunce.md)
> **Log başlangıcı:** 2026-04-29

## Schema

| # | Tarih | Konu | Kategori | Yazar v. | Aforizma | Manifesto | Anekdot | Açılış | Başlık tipi | Mevsim | Notlar |
|---|---|---|---|---|---|---|---|---|---|---|---|

## Sütun anahtarı

- **Yazar v.** — yazar profil versiyonu (v2...)
- **Aforizma** — kullanılan alıntı (kaynak/sayfa); yoksa "—"
- **Manifesto** — kullanılan kalıp; yoksa "—"
- **Anekdot** — anekdot türleri (T1+T2 vb. profil §4b'ye göre); yoksa "—"
- **Açılış** — açılış kalıbı kısa kod
- **Başlık tipi** — `title_style.prefer` listesinden
- **Mevsim** — yazıldığı mevsim (ilkbahar/yaz/sonbahar/kış)
- **Notlar** — özel durum (Test, Retrofit, Evrim review tetik vb.)

## Cooldown durumu (canlı)

> Şu an log boş — cooldown filtresi 2026-04-29 sonrası ilk gerçek yayından itibaren tam çalışacak.

## Evolution review

> Son review: —
> Tetikleyici: 10 makale veya 6 ay (default)

## Retrofit özet (pre-framework yayınlar — 2026-04-29 öncesi)

Işık Selin Günce'ye atanmış yayınlanmış makaleler:

- `hormonal-gecis/perimenopoz/perimenopoz-nedir.astro`
- `hormonal-gecis/perimenopoz/perimenopozda-adet-duzensizligi-ne-normal-ne-zaman-doktora-gidilmeli.astro`

**Toplam: 2 makale** (perimenopoz girişi). Detaylı log retrofit yapılmadı.

## Versiyon notları

### v2.0 → v2.1 (2026-05-02) — özel yazı korpusu eklendi (minor bump)

**Tetikleyici:** Yazardan üç özel yazı (kullanım onaylı, yayımlanmamış) — tahterevalli/denk-olamama metaforu, yas/kayıp lirik figür, uykusuz partner / aşk-endişe + beden parçası imgelemi. Mevcut profil **yüzeysel kamuya açık ses** üzerine kuruluydu; özel yazılar **lirik-edebi alt katmanı** kanıtladı.

**Eklenen:**

- `cold.md §0` → [ISG-Ö] etiketi (özel yazı, kullanım onaylı, yayımlanmamış); 4 ses-imzası alt-bölümü (tahterevalli kalıbı / yas edebi figür / beden parçası + uykusuz partner / hibrit cümle ritmi)
- `cold.md §3` → iki katmanlı karakter yapısı (üst: sahne sıcaklığı / alt: lirik-edebi derinlik)
- `cold.md §0` frekans kuralına lirik dekor mikro-imzası maddesi
- `warm.md §4e` → Kalıp 7 (tahterevalli/denk-olamama/kök salma) [ISG-Ö] kaynaklı
- `hot.md §4` → lirik-edebi alt katman bölümü + mikro stil disiplin alt-listesi + asla listesi v2.1 maddeleri (tam-lirik makale / anaforik aşırılık / beden imge yığını / birebir alıntı / yas merkezi tema)
- `hot.md` Adım 8 mikro stil pas → lirik dekor disiplini (anafora / beden parçası / lirik *"sen"* / hibrit cümle ritmi)
- `hot.md` §13 self-check Madde 10 ve 12 → lirik mikro-imza ek-clause + Kalıp 7 çakışma kontrolü; Madde 17 → tam-lirik / yas merkezi / birebir alıntı yasakları
- `hidden.md §5b` → "Lirik-edebi kapasite (KRİTİK dolaylı dekor) — v2.1" yeni bölümü (iki katmanlı kavrayış + edebi figür yas çerçevesi + mikro-imza disiplini + Kalıp 7 sınırı + hibrit cümle ritmi)
- `profile.yaml` → writer_version v2.1; `voice_traits` 3 yeni satır; `micro_style_rules` 3 yeni alt-kural (anaphoric_repetition / body_part_imagery / reader_address_intensity); `signature_phrases_acilis` 4 lirik açılış; `manifesto_templates` Kalıp 7 + 6→7 havuz; `private_context_inject` v2.1 paragrafı; `quick_reference.must_not` 4 yeni yasak; `must_include` 3 opsiyonel lirik dekor; `conditional` 3 yeni açılma koşulu

**Disiplin (HARD CONSTRAINT v2.1):**

1. Tam-lirik makale YASAK
2. Yas/kayıp = edebi figür; merkezi tema değil — Işık'a yas-merkezli makale atanmaz
3. Anaforik yineleme: 2-3 tekrar serbest, 4+ aşırılık yasak; her 2-3 makalede max 1 yer
4. Beden parçası imgesi: 1 cümle/makale, klinik anatomi diline kayma yasak
5. Lirik *"sen"* çağrısı: 1 kez/makale, soru biçiminde, bölüm-içi imza
6. Birebir alıntı YASAK (özel yazılar yayımlanmamış); gevşek paraframe + ses imzası taklidi serbest
7. Kalıp 7 ile Kalıp 1/Kalıp 5 aynı makalede çakışma yasak

**Pattern_pool_sizes etkileri (manifesto):** 6 → 7 kalıp havuzu (cooldown_overrides default değişmedi).
