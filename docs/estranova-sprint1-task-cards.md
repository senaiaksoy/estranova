# Estranova Sprint 1 - Uygulama Kartları (Hafta 1-2)

Amaç: Editoryal güven, uyum ve teknik temel altyapıyı standart hale getirmek.

## Yönetim Modeli
- `Yönetici Agent`: önceliklendirme, sıra bağımlılıkları, teslim onayı
- `Alt Agent 1 (Uyum)`: dil/etik/yasal kontroller
- `Alt Agent 2 (İçerik/IA)`: şablon ve içerik modeli
- `Alt Agent 3 (Teknik/SEO)`: schema, metadata, route filtreleme, otomasyon

## Kart 1 - Editoryal İlke ve Yasak Dil Sözlüğü
- Öncelik: `P0`
- Sahip: `Alt Agent 1`
- Çıktı:
  - `docs/editorial-policy-operational.md`
  - Yasak ifadeler listesi (`en iyi`, `kesin çözüm`, `tedaviye başla`, fiyat/indirim vb.)
  - Nötr CTA sözlüğü
- Kabul kriteri:
  - Politika dokümanı yayınlanmış
  - Compliance script’e kullanılacak regex seti netleşmiş

## Kart 2 - Makale Veri Modeli Genişletme
- Öncelik: `P0`
- Sahip: `Alt Agent 2`
- Çıktı:
  - `src/data/articles.ts` veya içerik şemasına şu alanlar:
    - `status` (`draft | in_review | published`)
    - `medicalReviewerTitle`
    - `reviewDate`
    - `lastModified`
    - `disclaimerVersion`
    - `references`
- Kabul kriteri:
  - TypeScript hata vermiyor
  - Zorunlu alanlar için doğrulama hatası üretiliyor

## Kart 3 - Yayın Filtresi (Sadece Published)
- Öncelik: `P0`
- Sahip: `Alt Agent 3`
- Çıktı:
  - `getPublishedArticles()` yardımcı katmanı
  - Listeleme ve detay route’larında `published` dışı içerik kapalı
- Kabul kriteri:
  - `draft` içerikler build çıktısında route üretmiyor

## Kart 4 - Tıbbi Şeffaflık Bileşeni
- Öncelik: `P0`
- Sahip: `Alt Agent 2`
- Çıktı:
  - Reusable bileşen: yazar, reviewer, tarih, disclaimer
  - Makale detay sayfasına entegrasyon
- Kabul kriteri:
  - Tüm makalelerde standart blok görünüyor

## Kart 5 - Schema Temeli (WebSite + Organization + Article)
- Öncelik: `P0`
- Sahip: `Alt Agent 3`
- Çıktı:
  - `SiteLayout`: `WebSite` + `Organization`
  - `article/[slug]`: `MedicalWebPage + Article` (`reviewedBy`, `citation`)
  - Breadcrumb schema
- Kabul kriteri:
  - Build sonrası JSON-LD blokları sayfada doğrulanabilir

## Kart 6 - Canonical + OG/Twitter Standardı
- Öncelik: `P1`
- Sahip: `Alt Agent 3`
- Çıktı:
  - Ortak utility veya merkezi meta standardı
  - Sayfalarda canonical zorunluluğu
- Kabul kriteri:
  - Ana sayfalar ve makalelerde meta tutarlı

## Kart 7 - Compliance Script Genişletme
- Öncelik: `P0`
- Sahip: `Alt Agent 1`
- Çıktı:
  - `scripts/compliance-check.mjs` kontrol başlıkları:
    - Yasak reklam/üstünlük dili
    - Sponsorlu içerik etiketi zorunluluğu
    - Tıbbi sorumluluk reddi var/yok
- Kabul kriteri:
  - Fail eden örneklerde script hata veriyor

## Kart 8 - Türkçe Encoding ve Mojibake Kontrolü
- Öncelik: `P1`
- Sahip: `Alt Agent 3`
- Çıktı:
  - Pre-build tarama adımı (bozuk karakter denetimi)
- Kabul kriteri:
  - Bozuk karakter içeren dosyada build pipeline uyarı/hata üretiyor

## Kart 9 - Library İç Linkleme Kuralı
- Öncelik: `P1`
- Sahip: `Alt Agent 2`
- Çıktı:
  - `kategori + tag + semptom yakınlığı` kural seti
  - “İlgili okumalar” deterministik sıralama
- Kabul kriteri:
  - Aynı içerik farklı sayfalarda tutarlı öneri üretiyor

## Kart 10 - Sprint 1 KPI Baseline
- Öncelik: `P1`
- Sahip: `Yönetici Agent`
- Çıktı:
  - Baseline metrik raporu:
    - organik oturum
    - içerik CTR
    - %75 scroll
    - iç link tıklama
    - compliance hata sayısı
- Kabul kriteri:
  - İlk haftalık rapor formatı hazır ve tekrar üretilebilir

## Uygulama Sırası
1. Kart 1
2. Kart 2
3. Kart 3
4. Kart 4
5. Kart 5
6. Kart 6
7. Kart 7
8. Kart 8
9. Kart 9
10. Kart 10

## Sprint Sonu Definition of Done
- `lint + compliance + build` temiz
- Tüm yayınlanmış içeriklerde şeffaflık blokları mevcut
- Schema/metadata standartları uygulanmış
- Yasak dil kontrolleri otomasyonda aktif
