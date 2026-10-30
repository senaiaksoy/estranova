# HRT — İlk Ayların Notları: 30 Ekim 2026 revizyonu

Yazar: Demet Kızılkaya. İlk yayın: 27 Nisan 2026. Revizyon: 30 Ekim 2026.

KC bu sohbette yazar onayının ve bağımsız tıbbi incelemenin tamamlandığını bildirdi. İnceleyen hekimi “doç.dr.senai aksoy” olarak belirtti ve commit/push/deploy istedi. Bu, kullanıcı tarafından bildirilen onaydır; ayrıca yazılı bir inceleme raporu sunulmadı. Audit sırasında gündeme getirilen kendi hekimi / bağımsız inceleyen ayrımı KC’ye aktarılmıştı; KC mevcut Dr. Aksoy adını teyit etti. İsim başka bir hekimle değiştirilmedi ve yeni hekim sözü üretilmedi.

## Değişiklikler

- Acil uyarıda göğüs ağrısı ile nefes darlığının birlikte olması koşulu kaldırıldı; ani çok şiddetli baş ağrısı ve ani görme kaybı ayrıldı.
- HRT başlangıcı/değişikliği sonrası lekelenme zaman pencereleri, yoğun/uzayan kanama ve daha sonra başlayan/süren beklenmedik kanama ayrıldı; ilk altı ay bekleme önerisi verilmedi.
- Temas uyarısı östradiol jel ve spreyle sınırlandı; ürün talimatı korunuyor.
- Kişisel hafıza/cilt/ağrı/sakinlik gözlemlerinin kullanım endikasyonu kanıtı olmadığı açıklaştırıldı; yakın tekrar azaltıldı.
- Genel güvence kişisel deneyime daraltıldı; aile bölümündeki kronoloji çelişkisi çıkarıldı.
- Boş tıbbi sorumluluk notu dolduruldu. Byline ve kart görselleri kanonik araçla 1200×1500 ve 2400×1000 üretildi, gözle kontrol edildi ve AI köken etiketi korundu.
- Görünür inceleyen ile tıbbi not ve schema girdisi Doç. Dr. Senai Aksoy adıyla eşitlendi. Güncelleme tarihi görünür metin ve Article şemasında 30 Ekim.
- URL, üst hero, yazar, ilk yayın tarihi, H2 anchorları ve dört aylık deneyim korunuyor. SSS eklenmedi.

## Kaynak izi

- Kanama: [NICE NG23 1.8.4–1.8.5](https://www.nice.org.uk/guidance/ng23/chapter/Recommendations), [BMS kılavuzu](https://thebms.org.uk/publications/bms-guidelines/management-of-unscheduled-bleeding-on-hormone-replacement-therapy-hrt/).
- Acil belirtiler: [NHS ambulans hizmeti](https://ambulance.nhs.wales/services/999/), [MedlinePlus HRT ilaç bilgisi](https://medlineplus.gov/druginfo/meds/a601041.html).
- Jel/sprey: [EMA ürün bilgisi değişikliği](https://www.ema.europa.eu/en/documents/psusa/estradiol-except-creambalmemulsion-application-female-genital-area-cmdh-scientific-conclusions-and-grounds-variation-amendments-product-information-and-timetable-implementation-psusa00010440202108_en.pdf).
- Kişisel gözlem / kullanım amacı: [The Menopause Society açıklaması](https://menopause.org/wp-content/uploads/2024/09/TMS-statement-on-HT-Misinformation.pdf).

Kaynaklar bu sohbetin geniş audit aşamasında kontrol edildi. Modelin kaynak kontrolü hekim incelemesi yerine geçmez.

## Doğrulama ve yayın

- Son künye değişikliği sonrası üretim build:ci geçti (Astro sync, lint, compliance, sıkı makale/tür denetimleri, prebuild, 141 sayfa build, 163 çıktı için SEO audit).
- Astro compiler ve editoryal kontrol temiz; hedef sayfa rendered-check ilk turunda sıfır aday bulgu.
- Uygulama içi tarayıcı bağlantısı ve DevTools profil bağlantısı çalışmadı. Ayrı Playwright oturumunda yerel 1440×1000 masaüstü ve 390×844 mobil önizleme kontrol edildi; iki görsel yüklendi, mobilde scrollWidth=390 (taşma yok), dolu tıbbi not doğrulandı.
- Son HTML: tek H1, doğru yazar ve tarihler, Article/BreadcrumbList; FAQPage ve MedicalWebPage yok.
- Hedef makale arşivi güncellendi. Export sırasında filtre yazımından doğan diğer arşiv değişiklikleri tamamen geri alındı; yalnız hedef arşiv kapsamda.
- Yayın: 2bfc70bd main'e push edildi ve canlıya yansıdı. Canlı sayfa `?nc=` ile kontrol edildi: 200 yanıt, yeni acil belirti ve kanama metni yayında, dateModified 2026-10-30.

## İkinci düzeltme (30 Ekim 2026, onaylandı)

- Canlı doğrulama: ilk yayın sonrası canlı sayfa `?nc=` ile kontrol edildi; 200 yanıt, tek H1, dateModified 2026-10-30, yeni acil belirti ve kanama metni yayında. `og:image` ve breadcrumb sorunları bu kontrolde görüldü.
- Düzeltilen: `og:image` artık makale görseli; kart görseli `articleCardImageByRoute` içinde, alt metinde yapay zekâ notu var; Article şemasında `articleSection` ve `sectionPath` Menopoz bölümüne bağlandı.
- Gövde: yaşıt bağları ve kapanışlar çeşitlendi, uyarı cümleleri anlatı sesine çevrildi. Tıbbi bilgi notu bilerek değişmedi; kısaltma önerisi hekim kararına bırakıldı.
- KC yazar onayının (Demet) ve tıbbi onayın tamam olduğunu sözlü bildirdi. Yayın: c1ce8c01 main'e push edildi ve canlıya yansıdı. Canlı doğrulama (30 Ekim 2026, `?nc=`): og:image makale görseli, breadcrumb Hormonal Geçiş · Menopoz, yeni gövde yayında.

## Üçüncü düzeltme (30 Ekim 2026, onaylandı)

- Cümle ritmi: on üç yerde kısa cümleler birleştirildi; kısa vurgu cümleleri korundu. Olgu ve güvenlik sınırları aynı.
- Geri bağlantı: `hrt-yan-etkileri-ve-izleme` ve `dokuz-yillik-menopoz-sonunda-hrt-karari` ilgili okumalarına bu yazı eklendi. Bu iki yazının gövdesi ve tarihleri değişmedi.
- `menopozda-hrt-avantajlari` ilgili okumalarına bu yazı sonradan eklendi (30 Ekim 2026, KC talimatı; yalnızca gezinti, o yazının metni ve tarihleri değişmedi).
- KC yazar (Demet) ve tıbbi onayın tamam olduğunu sözlü bildirdi. Yayın: 019a4471 main'e push edildi ve canlıya yansıdı. Canlı doğrulama (30 Ekim 2026, `?nc=`): yeni ritim yayında; hrt-yan-etkileri-ve-izleme ve dokuz-yillik-menopoz-sonunda-hrt-karari sayfalarında bu yazıya bağlantı var.
