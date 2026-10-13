# Başak Pelister — Article Log

> **Article log framework:** [`docs/WRITER-DYNAMICS-FRAMEWORK.md`](../docs/WRITER-DYNAMICS-FRAMEWORK.md)
> **DNA referansı:** [`basak-pelister.md`](./basak-pelister.md)
> **Log başlangıcı:** 2026-04-29

## Schema

| # | Tarih | Konu | Kategori | Yazar v. | Aforizma | Manifesto | Anekdot | Açılış | Başlık tipi | Mevsim | Notlar |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 2026-05-07 | HRT karar güncesi | Hormonal Geçiş · Menopoz | v2.6 | — | deneyim aktarmak | T1 + T2 + T3 | "Yıllarca beklediğim cevabı duyduğumda..." | tireli iki bölümlü başlık | ilkbahar | Onaylı test taslağı yayına uyarlandı; üç kuşaklı masa + aile öyküsü + kişisel karar dengesi korundu. |
| 2 | 2026-07-16 | Ölçü paniği / beden algısı | Zihin & Denge · Duygusal Denge | v2.6 | — | deneyim aktarmak | T1 (tartı/ayna sabahı) + T3 (üç kuşaklı masa) | "Yıllarca bir denge arayışı içindeydim..." | soru başlık | yaz | Eşik Sayı 03 kapak 4. **YAYINDA** — `/zihin-denge/duygusal-denge/olcu-panigi-beden-algisi-menopoz/`. Onay: KC "onay ok" → paket `onaylanan/2026-07-16_olcu-panigi-beden-algisi-menopoz/`. Kalıp: açılış denge-arayışı (HRT açılışından farklı); dengeleyici "benim yolum / sizinki farklı"; bilmiyorum "hâlâ da tam bildiğimi söyleyemem"; kapanış soru→gözlem→itiraf. GLP-1/ilaç/protokol yok. Evidence 3+3+2. BEN 2 paragraf (şablon kırma). Form sinyali: chat onayı (detaylı likert yok). |

## Sütun anahtarı

- **Yazar v.** — yazar profil versiyonu (v2, v2.1...)
- **Aforizma** — kullanılan alıntı (kaynak/sayfa); yoksa "—"
- **Manifesto** — kullanılan kalıp; yoksa "—"
- **Anekdot** — anekdot türleri (T1+T2 vb. profil §4b'ye göre); yoksa "—"
- **Açılış** — açılış kalıbı kısa kod
- **Başlık tipi** — `title_style.prefer` listesinden (Başak için soru başlık imza)
- **Mevsim** — yazıldığı mevsim (ilkbahar/yaz/sonbahar/kış)
- **Notlar** — özel durum (Test, Retrofit, Evrim review tetik vb.)

## Cooldown durumu (canlı)

> Bu bölüm her yeni satır eklendiğinde güncellenir. AI Faz 1.5 review'da burayı okur.
> Son yayın: `2026-07-16` — `olcu-panigi-beden-algisi-menopoz`

## Evolution review

> Son review: —
> Tetikleyici: 10 makale veya 6 ay (default)

## Revizyon notları ve onay kayıtları

- **2026-10-13 — #1 HRT karar güncesi, denetim ve düzeltme.** Şemada tıbbi inceleyici Doç. Dr. Senai Aksoy yerine Dr. Alper Mumcu olarak ayarlandı; yazarın 30 yıllık arkadaşı olan hekim Senai Aksoy olduğu için çakışma giderildi. Onay kaydı (`article-approvals.ts`, 2026-05-07) `onaylanan/basak-test-makale (1).pdf` dosyasına dayanıyor; bu PDF 30 Nisan 2026 tarihli editöryal test taslağı, yayındaki metin değil. Yayın metni yazarın onayladığı taslaktan farklı. **Yerel kaynağa alınan teknik düzeltmeler (yazar metnine dokunmaz):** görünür byline + şemada Mumcu; byline 4:5 ve kart/OG 2.4:1 görselleri (IPTC AI etiketli), `og:image`; `tocEntries` silindi; okuma süresi 9 → 7. **Metin revizyonu onaylandı (13 Ekim 2026):** yazar onayı KC bildirimiyle alındı (sohbet; form JSON yanıtı yok), tıbbi bilgi kontrolünü Dr. Alper Mumcu yaptı ve onayladı; revize kaynak yerel site ağacında; canlı yayın yapılmadı. Paket `onaylanan/2026-10-13_dokuz-yillik-menopoz-sonunda-hrt-karari/` (`site-kaynak.astro`, `revizyon-onizleme.html`, `degisiklik-ozeti.md`, 5 dk form; son tarih 20 Ekim 2026). İçerik: dil düzeltmeleri, tekrar azaltma (structure-check), "X değil, Y" ~8 → 3, "anlamına gelmez" 2 → 0, "yaşın önemi yok" cümlesi yerine menopozdan geçen süre bilgisi (NAMS 2022, PMID 35797481; gövdede atıf yok), Başak imzası için 2 soru + 2 üç nokta + "bilmiyorum" itirafı (yeni cümleler; olgu/anı eklenmedi). Onayla birlikte yerel rota ve arşiv `.md` revize metne geçti; eski 2400×1340 `.jpg` silindi. **Stil sinyali:** onay sohbette geldi, ayrıntılı form yanıtı yok; Başak imzası için eklenen soru, üç nokta ve "bilmiyorum" itirafı cümleleri değiştirilmeden onaylandı. Profil dosyalarına kalıcı işleme yapılmadı.
- **2026-10-03 — #2 ölçü paniği, revizyon.** Yazar onayı KC bildirimiyle alındı (“başak onayladı”, sohbet; form JSON yanıtı yok). Paket `onaylanan/2026-10-03_olcu-panigi-beden-algisi-menopoz` (önceki/revize kaynak, değişiklik özeti, önizleme). Değişiklikler: son soru bölümü 5 → 3 soru ve Başak'ın birinci tekil sesiyle yeniden yazıldı (kıyafet ve üç kuşak soruları gövdeyle örtüştüğü için çıkarıldı); “X değil, Y” antitezi ~3'e, üç nokta 7 → 2 indi; “self-care pozu” → “fotoğraflık bir kendine özen pozu”. Sahneler, kızıyla sofra sahnesi, kilo yolculuğu sınır cümlesi, Evidence ve tıbbi not değişmedi. **Stil sinyalleri (onaylı revizyondan):** (a) soru-cevap imzası gövdede doğal sorularla taşınır; ayrı soru bölümü varsa cevaplar da birinci tekil sesle yazılır, kişisiz danışman diline geçilmez; (b) “X değil, Y” antitezi imza değildir, makale başına 2–3 ile sınırlı kalır; (c) üç nokta açılış imzasında korunabilir, metin boyunca seyrek kullanılır. Profil dosyalarına kalıcı işleme editör onayıyla yapılır. **2026-10-03:** KC talebiyle profile işlendi → `writer_version` v2.1 → v2.2 (`profile.yaml`, `hot.md`, `warm.md` §4a kural 1-2). Üç nokta imzası silinmedi, aralığı 3-4 → 2-4 genişletildi; gündelik anglizm izni (warm.md §4a kural 4) değiştirilmedi.

## Retrofit özet (pre-framework yayınlar — 2026-04-29 öncesi)

Başak Pelister'e atanmış yayınlanmış makaleler:

- `bilimsel-pencere/hucreler-ve-yaslanma/nad-plus-hucresel-yaslanma.astro`
- `hormonal-gecis/menopoz/hrt-yillar-sonra-baslamak.astro`
- `zihin-denge/duygusal-denge/ruh-hali-degisimleri-menopoz.astro` (atama: ruh-hali Duygu→Başak değişikliği, /symptoms audit 2026-04-28)
- `zihin-denge/uyku-dinlenme/sabah-ucte-uyanmak-dokuz-yil.astro`

**Toplam: 4 makale** (HRT deneyim-içtenliği ekseni). Detaylı log retrofit yapılmadı.

- **2026-10-13 — #1 ikinci audit revizyonu (onaylandı, yerel kaynakta; canlıda değil).** Başak yazar onayı ve Dr. Alper Mumcu yeni tıbbi not onayı KC bildirimiyle alındı (sohbet; form JSON yanıtı yok). Paket `onaylanan/2026-10-13_dokuz-yillik-menopoz-sonunda-hrt-karari-rev2`; ilk paket ayrı kaldı. Yerel rota ve arşiv revize metne geçti; commit/push/deploy yok. Aşağıdaki değişiklik özeti onay öncesi yazılmıştır. İlk yazar/Mumcu onayı ve özgün onaylı kaynak korundu. Yeni anlatım ve tıbbi not `onay-bekleyen/2026-10-13_dokuz-yillik-menopoz-sonunda-hrt-karari/` paketinde; önceki onay bu ikinci revizyonu kapsamaz. Gövdeden genel tıbbi hükümler/Evidence ayrı nota taşındı; NAMS 2022 PMID 35797481 (doi:10.1097/GME.0000000000002028) ile tedaviye engel durum olmaması ve sıcak basması/kemik kaybı amaçları korundu. Geçmiş kılavuzların HRT’ye sonradan izin verdiği izlenimi kaldırıldı (NAMS 2017 PMID 28650869). Medeni durum ifadesi taslaktan çıkarıldı; gizlilik istisnası veya yeni deneyim uydurulmadı, profil değiştirilmedi. Kapanış tekrarı azaltıldı; anne, kardeş, hekim ve kız alıntıları korundu. Teknik kaynakta not inceleyicisi Mumcu, dolu sorumluluk notu, arşiv işaretleri ve görseller düzeltildi. Mizah H0. Commit/push/deploy yok.
