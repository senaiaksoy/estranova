# Estranova Yayınlanmış Makale Arşivi

Toplam makale: **43**
Son export: 2026-04-29

Bu klasör `scripts/export-published-articles.mjs` script'i tarafından otomatik üretilir. `src/pages/` altındaki Astro source'tan metadata, `dist/` altındaki build HTML'den gövde markdown'ına dönüştürülür. Aynı içerik aynı anda obsidian vault'a (`<VAULT>/articles/`) da yazılır.

## Klasör yapısı

```
icerik/yayinlanmis-makaleler/
├── 2026-04/
│   ├── 2026-04-29__menopozda-hekim-hasta-iliskisi.md
│   └── ...
├── 2026-03/
└── README.md
```

## Yeniden üretmek için

```bash
npm run build           # dist/ taze olsun
npm run articles:export # markdown'a dök
```

## İçindekiler (yeniden eskiye)

### 2026-04

| Tarih | Yazar | Başlık | Bölüm |
|---|---|---|---|
| 2026-04-29 | - | [Menopozda İdrar Kaçırma ve Pelvik Taban Sağlığı](2026-04/2026-04-29__menopozda-idrar-kacirma-pelvik-taban.md) | Beden & Yakınlık |
| 2026-04-29 | - | [Sıcacık Köşe — Bu Ay Kadın Dünyasında Ne Konuşuluyor?](2026-04/2026-04-29__nisan-2026.md) | editorun-kosesi |
| 2026-04-29 | - | [Nasıl Araştırıyoruz](2026-04/2026-04-29__nasil-arastiriyoruz.md) | editoryal-politika |
| 2026-04-29 | - | [Tarama ve İzlem: Genel Çerçeve](2026-04/2026-04-29__tarama-testleri.md) | Hormonal Geçiş |
| 2026-04-29 | berna-aksoy | [Eşim Hekim, Hekimim Başkası — Modern Kadın Menopoz Takibinde Ne Arıyor](2026-04/2026-04-29__menopozda-hekim-hasta-iliskisi.md) | Hormonal Geçiş |
| 2026-04-28 | duygu-karaosmanoglu | [Menopozda Cilt Değişimleri — Aynaya Sakince Bakmak ve Bakım Rehberi](2026-04/2026-04-28__menopozda-cilt-degisimleri.md) | Beden & Yakınlık |
| 2026-04-28 | berna-aksoy | [Menopozda Kilo Artışı — Aynı Yaşamda Değişen Bedenle Sakin Bir Sohbet](2026-04/2026-04-28__kilo-artisi-menopoz.md) | Zamansız Yaşam |
| 2026-04-28 | basak-pelister | [Menopozda Ruh Hali Değişimleri — Bir Dalga, Bir Soru, Bir Eşik](2026-04/2026-04-28__ruh-hali-degisimleri-menopoz.md) | Zihin & Denge |
| 2026-04-28 | alara-baykent | [Akşam Hareketinin Uykuya Etkisi: Melatonin ve Serin Vücut](2026-04/2026-04-28__aksam-hareketi-uyku-melatonin.md) | Zihin & Denge |
| 2026-04-28 | senai-aksoy | [Gece Terlemesi ve Uyku: Utançsız Bir Bakış](2026-04/2026-04-28__gece-terlemesi-uyku-utancsiz.md) | Zihin & Denge |
| 2026-04-28 | berna-aksoy | [Perimenopozda Uykunun Gerçekten Değişen Yanı](2026-04/2026-04-28__perimenopoz-uyku-degisen-yan.md) | Zihin & Denge |
| 2026-04-28 | basak-pelister | [Sabah Üçte Uyanmak: Dokuz Yılın Notları](2026-04/2026-04-28__sabah-ucte-uyanmak-dokuz-yil.md) | Zihin & Denge |
| 2026-04-28 | rima-erdemir | [Uyku Biliminin Sınırı: Ne Biliniyor, Ne Bilinmiyor](2026-04/2026-04-28__uyku-biliminin-siniri.md) | Zihin & Denge |
| 2026-04-27 | senai-aksoy | [Menopozda Libido Değişimi — Sessiz Bir Konunun Açık Sözlü Rehberi](2026-04/2026-04-27__libido-degisimi-menopoz.md) | Beden & Yakınlık |
| 2026-04-27 | demet-kizilkaya | [HRT](2026-04/2026-04-27__hrt-ilk-alti-ay.md) | Hormonal Geçiş |
| 2026-04-27 | berna-aksoy | [HRT Yan Etkileri ve İzleme — İlk Aylarda Neyi Bekleyelim, Neyi Soralım?](2026-04/2026-04-27__hrt-yan-etkileri-ve-izleme.md) | Hormonal Geçiş |
| 2026-04-27 | isik-selin-gunce | [Perimenopoz Nedir? — Temel Rehber](2026-04/2026-04-27__perimenopoz-nedir.md) | Hormonal Geçiş |
| 2026-04-27 | alara-baykent | [Menopozda Eklem Ağrısı — Sabah Tutukluğundan Hareketin Yatışına](2026-04/2026-04-27__eklem-agrisi-menopoz.md) | Zamansız Yaşam |
| 2026-04-27 | duygu-karaosmanoglu | [Seyahatte Menopoz — Uçuş, Zaman Farkı ve Otel Odası Notları](2026-04/2026-04-27__seyahat-menopoz.md) | Zamansız Yaşam |
| 2026-04-26 | rima-erdemir | [Sosyal Medyada Menopoz Bilgisi — Hangi Sinyaller Güvenilir?](2026-04/2026-04-26__sosyal-medyada-menopoz-bilgisi.md) | Bilimsel Pencere |
| 2026-04-26 | ozlem-denizmen | [40 Sonrası Sağlık Kararı: İstek mi, İhtiyaç mı, Yatırım mı?](2026-04/2026-04-26__saglik-kararlarinda-simdi-mi-sorusu.md) | Hormonal Geçiş |
| 2026-04-26 | basak-pelister | [HRT\](2026-04/2026-04-26__hrt-yillar-sonra-baslamak.md) | Hormonal Geçiş |
| 2026-04-26 | gamze-cizreli | [Mevsimle Yemek Yemek — Anadolu Sofrası 40 Sonrası](2026-04/2026-04-26__mevsimle-yemek-yemek.md) | Zamansız Yaşam |
| 2026-04-25 | rima-erdemir | [B12 Vitamini ve Menopoz: Sessiz Eksikliği Tanımak](2026-04/2026-04-25__b12-vitamini-ve-menopoz.md) | Hormonal Geçiş |
| 2026-04-25 | berna-aksoy | [Sıcak Basması ve Gece Terlemesi — Menopozda Vazomotor Belirtiler Rehberi](2026-04/2026-04-25__sicak-basmasi-gece-terlemesi.md) | Hormonal Geçiş |
| 2026-04-25 | berna-aksoy | [Koruyucu Sağlık Kayıtları: Menopoza Hazırlık Döneminde Ne İzlemeli?](2026-04/2026-04-25__koruyucu-saglik-kayitlari.md) | Hormonal Geçiş |
| 2026-04-25 | isik-selin-gunce | [Perimenopozda Adet Düzensizliği: Ne Normal, Ne Zaman Doktora Gidilmeli?](2026-04/2026-04-25__perimenopozda-adet-duzensizligi-ne-normal-ne-zaman-doktora-gidilmeli.md) | Hormonal Geçiş |
| 2026-04-25 | duygu-karaosmanoglu | [Menopozda Cilt Bakımı — Günlük Rutinden Ameliyatsız Yaklaşımlara Genel Çerçeve](2026-04/2026-04-25__cilt-bakimi-non-invaziv-genel-cerceve.md) | Zamansız Yaşam |
| 2026-04-20 | berna-aksoy | [Hormon Tedavisi — Karar Vermeden Önce Ne Bilmeliyim?](2026-04/2026-04-20__hormon-tedavisi-karar-rehberi.md) | Hormonal Geçiş |
| 2026-04-18 | alara-baykent | [Menopozda Kemik Erimesi: Egzersizle Neler Değişebilir?](2026-04/2026-04-18__menopozda-kemik-erimesi-onleme-ve-egzersiz.md) | Hormonal Geçiş |
| 2026-04-17 | basak-pelister | [NAD+ Takviyesi: Bilim Ne Diyor?](2026-04/2026-04-17__nad-plus-takviyesi.md) | Zamansız Yaşam · Deneysel |
| 2026-04-14 | basak-pelister | [NAD+ ve Hücresel Yaşlanma — Gelişmekte Olan Bilim](2026-04/2026-04-14__nad-plus-hucresel-yaslanma.md) | Bilimsel Pencere |
| 2026-04-07 | rima-erdemir | [D Vitamini Rehberi](2026-04/2026-04-07__d-vitamini-rehberi.md) | Zamansız Yaşam |
| 2026-04-03 | duygu-karaosmanoglu | [Cinsellikte Ağrı — Menopozda Dispareuniya Rehberi](2026-04/2026-04-03__cinsellikte-agri-menopoz.md) | Beden & Yakınlık |

### 2026-03

| Tarih | Yazar | Başlık | Bölüm |
|---|---|---|---|
| 2026-03-31 | duygu-karaosmanoglu | [Menopozda Mahrem Bölge Değişimleri](2026-03/2026-03-31__mahrem-bolge-degisimleri-menopoz.md) | Beden & Yakınlık |
| 2026-03-24 | rima-erdemir | [Bellek ve Odaklanma — Menopozda Bilişsel Değişimler](2026-03/2026-03-24__bellek-odaklanma-menopoz.md) | Zihin & Denge |
| 2026-03-20 | berna-aksoy | [Stres Yönetimi — Menopozda Stres ve Adaptasyon](2026-03/2026-03-20__stres-yonetimi-menopoz.md) | Zihin & Denge |
| 2026-03-12 | berna-aksoy | [Menopozda Uyku Bozukluğu — Dinlenme Rehberi](2026-03/2026-03-12__uyku-bozuklugu-menopoz.md) | Zihin & Denge |
| 2026-03-09 | berna-aksoy | [Beslenme ve Yaşlanma — 40+ Kadınlar için Beslenme Rehberi](2026-03/2026-03-09__beslenme-yaslanma.md) | Zamansız Yaşam |
| 2026-03-05 | alara-baykent | [Hareket ve Sağlık — Menopozda Egzersiz Rehberi](2026-03/2026-03-05__hareket-saglik-menopoz.md) | Zamansız Yaşam |
| 2026-03-01 | berna-aksoy | [40 Yaşından Sonra Kemik Sağlığı — Koruyucu Rehber](2026-03/2026-03-01__kemik-sagligi-40-sonrasi.md) | Zamansız Yaşam |

### 2026-02

| Tarih | Yazar | Başlık | Bölüm |
|---|---|---|---|
| 2026-02-25 | rima-erdemir | [Östrojen Biyolojisi ve Sağlık](2026-02/2026-02-25__estrogen-biyolojisi-saglik.md) | Bilimsel Pencere |
| 2026-02-21 | berna-aksoy | [Menopoz Nedir? - Temel Rehber](2026-02/2026-02-21__menopoz-nedir.md) | Hormonal Geçiş |
