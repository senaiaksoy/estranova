# Brief: Fitoestrojenler (soya, keten tohumu, kırmızı yonca) ve menopoz

> Durum: YAYIN HAZIR (yerelde, commit yok). Sayfa: src/pages/zamansiz-yasam/vitaminler/fitoestrojenler-menopozda-ne-ise-yarar.astro. Yazar ve Mumcu onayı 2026-10-27. Eksik: Dr. Aksoy SSS yanıtları.
> Hazırlanma: 2026-10-27 · Stil rehberi okundu: Dr. Senai Aksoy Makale Stil Rehberi

## 1. Künye

| Alan | Karar |
|---|---|
| Çalışma başlığı | Fitoestrojenler Menopozda Ne İşe Yarar? Soya, Keten Tohumu ve Kırmızı Yonca |
| Slug / rota | `/zamansiz-yasam/vitaminler/fitoestrojenler-menopozda-ne-ise-yarar/` (kreatin ve magnezyum yazılarının adlandırmasıyla aynı) |
| Alt hub | Vitaminler ve Takviyeler (şu an 3 yazı: kreatin, magnezyum, D vitamini) |
| Yazar | `senai-aksoy` (category: scientific, klinisyen istisnası) |
| Tür | `clinical-guide` |
| Tıbbi inceleyen | Dr. Alper Mumcu. Senai kendi makalesini inceleyemez; `buildArticleSchemas` `writerSlug==='senai-aksoy'` iken otomatik atar. `ArticleAuthorBlock` ve `medicalReviewer` değerleri aynı olmalı. |
| Mizah | H1 (bir açılış dokunuşu, bir orta geçiş). Sıcak basması, meme/endometrium güvenliği, HRT karşılaştırması, kanser öyküsü, ilaç etkileşimi bölümleri H0. |
| Ana motif | Mutfak rafı ve "doğal" etiketi: tofu, keten tohumu, baharat reyonu. Eczane kapağı motifi NAD+ ve CoQ10 yazılarında yakın zamanda kullanıldı (cooldown), bu yüzden kullanılmaz. |
| Beden/kilo/yaş | Mizah malzemesi yapılmaz. |

## 2. Neden yazar Senai, neden `clinical-guide`

- Konunun iki yüzü var: "doğal HRT" vaadi ve gerçek ama sınırlı insan verisi. Meme, endometrium, tiroid ve ilaç etkileşimi soruları kaynaklı klinik güvenlik çerçevesi ister.
- Hekim olmayan yaşıt yazar (Rima dahil) bu yazıyı `clinical-guide` olarak yazamaz. Rima'nın `editorial-guide` hattı ise kaynakça ve dipnot kullanamaz; bu konuda iddia-kaynak izi görünür olmalı.
- Alternatif: Mumcu yazar, Senai inceler. Mumcu "köklü başvuru hekimi" sesiyle soru-yanıt çizgisinde; Senai'nin Vitaminler serisindeki sürekliliği (kreatin, magnezyum) ve "umut etiketi ve kanıt sınırı" imzası bu yazıyı Senai'ye taşıyor. Karar KC'nin.

## 3. Mevcut içerikle örtüşme (düzeltme: konu sıfırdan değil)

Konu sitede **kısmen** geçiyor, ayrı bir yazısı yok:

- `bilimsel-pencere/hormonlarin-bilimi/estrogen-biyolojisi-saglik` içinde tek paragraf: soya ve kırmızı yonca sıcak basmasında küçük azalma, hormon tedavisinin yerini tutmaz (kanıt 3), besinle soya ve meme kanseri nüksü (9.514 kadın, kanıt 3).
- `article-faqs.ts` içinde aynı makale için "Soya, izoflavon ve fitoöstrojenler gerçekten östrojenin yerine geçer mi?" sorusu ve Dr. Aksoy yanıtı.

Kurallar:

1. Yeni yazı bu iki parçayla **çelişmez**; kanıt düzeyi ve yön aynı kalır (küçük, tutarsız etki; hormon tedavisinin yerine geçmez; besin olarak soya kanser öyküsünde bile güvenlik sinyali göstermiyor).
2. Mevcut Dr. Aksoy SSS yanıtı yeni yazıya kopyalanmaz. Yeni SSS için yeni soru sorulur (bölüm 6).
3. Yeni yazıdan `estrogen-biyolojisi-saglik` yazısına, o yazıdan yeni yazıya iç bağlantı verilir.

## 4. Okurun gerçek soruları (yazının omurgası)

1. "Sıcak basmam için soya ya da kapsül işe yarar mı, ne kadar?"
2. "Memede ya da rahimde risk yaratır mı? Kanser öyküm varsa?"
3. "Besinle almak ile kapsül/ekstrakt almak aynı şey mi?"
4. "Tiroid ilacı, tamoksifen ya da kan sulandırıcı kullanıyorum, sakınca var mı?"
5. "Kemiklerim için yararı var mı?"
6. "Hormon tedavisine alternatif mi, tamamlayıcı mı?"

## 5. Önerilen yapı (8 bölüm ana iskeleti; H2'ler bildirimsel, soru başlığı en fazla 1)

0. **Kısa Klinik Yanıt** (`ArticleSummary`, 70-120 kelime, doğrudan cevap): "Küçük, tutarsız bir etki var; hormon tedavisinin yerini tutmuyor; besin olarak güvenli, ekstrakt kararı kişiye göre."
1. **Açılış sahnesi** (H1 mizah): mutfak rafında "doğal" etiketi. Ters açı, ardından tıbbi köprü.
2. **Fitoestrojen nedir, hangi bitkide ne var** (izoflavon, lignan, kumestan; soya, keten, kırmızı yonca ayrımı). "Yanlış arkadaş": besin, ekstrakt ve kapsül farklı sorular.
3. **Mekanizma** (östrojen reseptörü beta eğilimi, equol üreticisi olma farkı). Ölçek değişimi: bağırsaktan reseptöre.
4. **Sıcak basması için kanıt** (H0). Kanıt merdiveni: soya izoflavon, kırmızı yonca, keten. Hangi sonlanım ölçüldü, etki büyüklüğü, plasebo yanıtı, çalışma süresi, ürün standardizasyonu.
5. **Kemik, kalp, vajinal kuruluk, uyku, ruh hali iddiaları** (iddia haritası): "ne gösterir / ne göstermez" tablosu. Kanıt düzeyleri `<Evidence>` ile.
6. **Güvenlik** (H0): meme, endometrium, tiroid, gebelik/emzirme, ilaç etkileşimleri (tamoksifen, levotiroksin, varfarin), besin vs ekstrakt ayrımı, kimler uzak durmalı.
7. **Kararı değiştiren ölçütler** (Dr. Aksoy'un özgün katkısı): ne zaman denenebilir, ne zaman anlamsız, ne zaman hekime gitmeden almamalı. Başlangıç dozu cümlesi yazılmaz (§4: reçete/doz dili yasak); ürün etiketinden okuma ölçütü verilebilir.
8. **Görüşmeye üç soru** ve sakin kapanış (açılış motifine tek kısa geri çağırma).
9. **Kaynaklar** (`ArticleSources`) ve **Dr. Aksoy'a sorular** (3-5 gerçek yanıt).

Kısa Klinik Yanıt ve SSS gövde tekrarı olmamalı; kaynak kapısı `npm run articles:audit:sources` temiz olmadan yayın yok.

## 6. Dr. Aksoy'dan alınacak SSS yanıtları (uydurulmaz, birebir alınır)

Her biri konuya özgü ve mevcut soya sorusundan farklı:

1. Soya sütü ve tofu yerine kapsül almak mantıklı mı?
2. Meme kanseri öyküsü olan biri soyayı tüketebilir mi? (Yanıtlar yumuşatılmaz; kaygı varsa ayrıca bildirilir.)
3. Keten tohumu ile kırmızı yonca arasında hangisi öne çıkar?
4. Equol üreticisi olmak ne demek, test yaptırmak gerekir mi?
5. Hormon tedavisi alırken fitoestrojen de kullanılır mı?

## 7. Kaynaklar (PubMed ile doğrulandı, 2026-10-27)

Künye, popülasyon ve sonuçlar PubMed kayıtlarından okundu. Tam metinler açılmadı; yalnızca özet düzeyinde doğrulama yapıldı. Bu yüzden yayın öncesi KC'nin 2-3 kaynağı kendi tarayıcısında açması önerilir.

| # | Kaynak | PMID | Düzeltme / not |
|---|---|---|---|
| 1 | Franco 2016, JAMA 315(23):2554-63 | 27327802 | 62 çalışma, 6.653 kadın; yanlılık riski yüksek %74 |
| 2 | Lethaby 2013, Cochrane CD001395.pub4 | 24323914 | 43 RCT, 4.364 kişi. Brief'te "Lethaby" diye geçen kayıt Cochrane'in kendisi; Maturitas özeti (24768128) editoryaldir, kullanılmadı |
| 3 | Chen 2015, Climacteric 18(2):260-9 | 25263312 | Brief'teki "Menopause 2015" yanlıştı; dergi Climacteric |
| 4 | Taku 2012, Menopause 19(7):776-90 | 22433977 | Brief'te yoktu, Chen yerine soya ekstraktı meta-analizi olarak eklendi |
| 5 | Pruthi 2012, Menopause 19(1):48-53 | 21900849 | 188 kadın, 6 hafta, fark yok (p=0,29) |
| 6 | Levis 2011, Arch Intern Med 171(15):1363-9 | 21824950 | 248 kadın, 2 yıl; kemik ve belirti farkı yok, soya grubunda sıcak basması ve kabızlık daha sık |
| 7 | Najaf Najafi 2018, Climacteric 21(5):437-45 | 30156931 | Cinsel işlev; yeni eklendi |
| 8 | Gençtürk 2024, Explore 20(6):103012 | 38825560 | 5 çalışma, 425 kadın; yeni eklendi |
| 9 | Nechuta 2012, Am J Clin Nutr 96(1):123-32 | 22648714 | 9.514 kadın; gözlemsel kohort (PubMed "RCT" etiketlemiş, yanlış). `estrogen-biyolojisi-saglik` [16] ile aynı kaynak olup olmadığı o dosyada kontrol edilecek |
| 10 | Unfer 2004, Fertil Steril 82(1):145-8 | 15237003 | 376 kadın, 5 yıl, hiperplazi %3,37 vs %0. Brief'te "endometrium güvenli" yönünde beklenirdi; sonuç tersi, taslak buna göre yazıldı |
| 11 | Messina & Redmond 2006, Thyroid 16(3):249-58 | 16571087 | 14 çalışma derlemesi |
| 12 | NAMS 2023, Menopause 30(6):573-90 | 37252752 | Soya besin/ekstrakt ve equol "önerilmez" (Düzey II); takviyeler Düzey I-II |

Doğrulanamayan veya kullanılmayan: levotiroksin prospektüsü ve TİTCK takviye mevzuatı (gövdede mevzuat iddiası yok); equol için ayrı çalışma (yalnızca NAMS cümlesi).

## 8. Kurallar ve tuzaklar (bu yazı için)

- **"Doğal östrojen" ve "hormona alternatif" kalıpları** gövdede yalnızca düzeltmek için geçer.
- **Yasak kalıplar:** "tedavi eder", "iyileştirir", "çözer", "destekler/iyileştirir" 3. şahıs aktif, "en etkili", "kesin"; "beden konuşuyor" ailesi; "çökkünlük"; "akran"; ürün/marka adı ve doz önerisi.
- **Tereddüt yığını** ("çoğu zaman, genellikle, olabilir") seyreltilir; bildiğimiz yerde kesin cümle yazılır.
- **Sıcaklık katmanı:** 3-4 kısa vurgu cümlesi; her H2'de somut ayrıntı; en az bir doğrudan teselli anı ("Önce şunu söyleyeyim..."); bir sade duygu beat'i.
- **Anekdot:** en fazla iki, klinik çerçeveli ("muayene odasında sık duyduğum"), isim/yaş/yer yok, tekil vaka kanıt sayılmaz.
- **Şablon kırma:** Senai `article-log.md` açılış, kapanış, mizah ve imza kapanış varyantlarının son kullanımı kontrol edilip cooldown'a uyan varyant seçilecek; seçim "Notlar" sütununa yazılacak.
- **Skill:** `estranova-deneysel-molekul` çerçevesi yalnızca kanıtsız vaat bölümlerine uygulanır (kemik, kalp, kilo, "hormon dengeleme" iddiaları: kanıt merdiveni + iddia haritası + bilinmeyenler). Sıcak basması ve güvenlik bölümleri normal `clinical-guide` düzenindedir (karışık durum).

## 9. Yayın kablolaması (onaydan sonra)

1. `src/pages/zamansiz-yasam/vitaminler/fitoestrojenler-menopozda-ne-ise-yarar.astro`, `hero = submenuHeroByRoute['/zamansiz-yasam/vitaminler/']!` (makale görseli ASLA üst hero olmaz).
2. Görsel: byline 4:5 ve kart 2.4:1 iki ayrı crop. Özel görsel yoksa KC'den istenecek.
3. `sub-hubs.ts` Vitaminler `articlePaths`, `static-articles.ts` manifest girdisi (anasayfa "Son yazısı" için), `article-faqs.ts`, `RelatedReadings`.
4. `estrogen-biyolojisi-saglik` yazısına yeni yazıya iç bağlantı.
5. `article-approvals.ts` kaydı ve `article-log.md` satırı, sözlü onay notuyla. Kayıt değişince `tsc` ve `build:ci` yerelde çalıştırılır.
6. Çıkış: `buildArticleSchemas` (Article + MedicalWebPage + BreadcrumbList; FAQPage yalnızca görünür SSS varsa).

## 10. Açık kararlar (KC)

- Yazar: Senai (önerilen) mi, Mumcu mu?
- Slug: önerilen `fitoestrojenler-menopozda-ne-ise-yarar` kabul mü?
- Görsel: var mı, yoksa üretilsin mi?
- Yayın zamanı: Eşik sayı takvimine bağlı mı, serbest mi?
