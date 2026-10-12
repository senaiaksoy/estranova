# Magnezyum rehberi — ayrıntılı audit ve humanize düzeltmesi

Tarih: 12 Ekim 2026. Durum: yerel revizyon; bu tur için yazar/editör ve bağımsız tıbbi inceleme onayı henüz alınmadı. Önceki onaylar tarihsel kayıt olarak korunmuştur. Commit, push veya deploy yapılmadı.

Hedef: `src/pages/zamansiz-yasam/vitaminler/magnezyum-menopozda-ne-ise-yarar.astro`.

Başlangıç: temiz çalışma ağacı, makalenin son commit'i `d77a6c83`. `git diff d77a6c83 -- <makale> src/data/article-faqs.ts` başlangıçta boştu. Önceki 11–12 Ekim onayları `article-approvals.ts` ve `klinik-katkilar/2026-10-11_magnezyum-menopozda-ne-ise-yarar.json` içinde bulundu; eski onay bu revizyonu kapsamaz.

## Bulgular ve uygulanan düzeltmeler

| Öncelik | Konum | Bulgu | Düzeltme |
|---|---|---|---|
| P1 | Güvenlik, eski [22] | Sıçanlarda mineral su/risedronat çalışması, insanlardaki magnezyum–osteoporoz ilacı etkileşiminin doğrudan desteği olarak kullanılmıştı. | Hayvan kaynağı çıkarıldı; mevcut NIH ODS [12] üzerinden ağızdan bisfosfonatlarla sınırlı, doğrudan desteklenen ifade yazıldı. Tüm osteoporoz tedavilerine genellenmedi. |
| P2 | Uyku, [20] | Park 2015 çalışmasının meme kanseri öykülü menopoz sonrası kadınları kapsadığı yazmıyordu; 800–1.200 mg bileşik dozu elementel dozla karışabilirdi. | Popülasyon, günlük magnezyum oksit miktarı ve plasebo karşılaştırması belirtildi; çalışma miktarının kullanım önerisi olmadığı açıklandı. |
| P2 | Kabızlık, [7] | “Çok düşük kesinlik” ifadesi 2/5 “sınırlı kanıt” etiketiyle verilmişti. | 1/5 “zayıf kanıt” etiketiyle hizalandı. Koşullu öneri ve erişkin kronik idiyopatik kabızlık kapsamı korundu. |
| P2 | Çarpıntı, [10] | “Yakınmaları değişmedi” karşılaştırmanın plaseboya göre olduğunu yeterince açık anlatmıyordu. | “Yakınmalarında plaseboya göre ek bir düzelme olmadı.” Magnezyum + potasyum birlikteliği korundu; etki magnezyuma tek başına yüklenmedi. |
| P2 | Şema ve görünür tarih | Sonraki onaylı 12 Ekim turları bulunduğu hâlde güncelleme tarihi 11 Ekim'di; şema görseli yardımcıdaki varsayıma bağlıydı. | `modifiedDate` ve `lastUpdated` 12 Ekim 2026; şemaya OG ile aynı `articleImage` açıkça geçirildi. Tıbbi inceleme tarihi yenilenmedi. |
| P3 | Giriş, form, güvenlik, kapanış | Kuru tanım açılışı; form bölümünün lede'sinde çalışma yığını; aynı uyku sonucunun yeniden verilmesi; uzun ilaç paragrafı ve sonuç dökümü. | Okurun gerçek sorusuyla açılış; çalışma ayrıntıları ayrı paragrafta; elementel magnezyum ilk kullanımda açıklandı; ilaç paragrafı bölündü; kapanışta yinelenen sonuçlar azaltıldı. |
| P3 | Kaygı | “Derleme olumlu bir eğilim buldu” tek yönlü ortak sonuç izlenimi veriyordu; “bir çözüm değildir” fazla mutlak okunabilirdi. | “Bazı olumlu bulgular” ve düşük kalite sınırı korundu; yoğun belirtilerde takviyeye güvenerek değerlendirmeyi ertelememe yönlendirmesi yazıldı. |
| P3 | Görsel ve uyarı kutusu | Alt metinde görselin göstermediği “beden farkındalığı hissi”; uyarı kutusunda genel tanı inkârı ve editöre dönük açıklama. | Görsel dosyası görülerek somut alt metin yazıldı. Kutunun başlık/intro/alt satırı konuya özgü ilaç, böbrek ve toplam takviye kontrolüne bağlandı. Ortak bileşen değiştirilmedi. |

## Tıbbi anlam kaydı

- Uyku: Mah 2021'de üç küçük çalışma, düşük/çok düşük kesinlik; Schuster 2025'te 155 sağlıklı erişkin, 18–65 yaş, dört hafta, küçük etki `d=0,2`. Menopoz kadınlarına özgü sonuç olarak sunulmadı. Bu sayılar değişmedi.
- Kramp: Cochrane 2020'nin nedeni belli olmayan kramp yaşayan, ortalama yaşları 60'lı yıllarda olan alt grubuna bağlı sonuç korundu. Gebelik veya eksiklik tedavisine genellenmedi. 4/5 etiketi korundu.
- Kabızlık: koşullu magnezyum oksit önerisi, çok düşük kesinlik, diğer formların kılavuzda değerlendirilmemesi korundu. Laksatif mekanizması tedavi üstünlüğü gibi anlatılmadı.
- Kaygı: düşük kaliteli ve heterojen veri; menopozda kanıtlanmış kaygı tedavisi veya depresyon/panik tedavisi olarak sunulmadı.
- Form: Firoz 2001'de oksit yaklaşık %4; Walker 2003 ve Ivanovic 2022'de farklı emilim/biyokimya sonuçları. Emilim ölçümü ile klinik belirtilerde yarar ayrıldı. Ivanovic genç sağlıklı kadınları inceler; menopoz çalışması değildir. Gövdede bütün çalışmaların aynı formları karşılaştırdığı iddia edilmedi.
- Güvenlik: Avrupa 250 mg, ABD 350 mg üst sınırı; 31+ kadınlarda besinler dâhil 320 mg; besin/takviye ve bileşik/elementel doz ayrımı korundu. Avrupa kapsamına magnezyum oksit açıkça eklendi. Üst sınırın deterministik bir yan etki eşiği olmadığı belirtildi.
- Levotiroksin: prospektüsteki antasitlerle en az dört saat aralık korundu. Bu süre bütün ilaçlara yayılmadı.
- Acil uyarı: geçmeyen çarpıntı veya göğüs ağrısı, nefes darlığı, bayılma/bayılacak gibi olma ve 112 yönlendirmesi korundu.
- Dr. Aksoy'un teyitli muayene gözlemi, 250 mg hakkındaki birinci tekil tercihi, dört gerçek SSS yanıtı ve Dr. Mumcu'nun tarihsel inceleme notu değiştirilmedi.

## Kaynak doğrulaması ve erişim sınırları

Kapsam, makaledeki kaynakların iddialarla eşleşmesidir; yeni literatürün kapsamlı sistematik taraması değildir. Son kaynak sayısı 21; [1] ve [12] aynı resmî bilgi notunun farklı işlevlerde kullanımıdır.

| Kaynaklar | Kontrol sonucu |
|---|---|
| [1], [12] NIH ODS | Resmî sayfa botlara kapalı (403); bu turda okunamadı. [12] ana daldaki haliyle (Erişim: 12 Ekim 2026) bırakıldı; başlık ve anchor doğrulanmadı. Bisfosfonat iddiası artık [22] ile desteklenir. |
| [2] Guerrera 2009 | Yayıncının AAFP sayfası erişilebilir; eski genel derleme, kabızlıkta “yerleşik kullanım” için arka plan. Güncel koşullu önerinin desteği [7]'dir. |
| [3] Mah 2021 | PubMed doğrudan erişimi sınırlıydı; yayıncı DOI ve birincil kayıt arama çıktısı düşük/çok düşük kesinlik ve üç çalışma sonucunu doğruluyor. |
| [4] Baker 2018 | PMC doğrudan bot kontrolüne takıldı; birincil kayıt arama çıktısında künye, menopoz uykusu, sıcak basması, depresyon ve uyku solunumu ayrımları kontrol edildi. |
| [5] Cochrane 2020 | PubMed özeti okundu. Toplam çalışma grubuyla idiyopatik kramp alt grubu ayrıldı; orta/yüksek kesinlikte yarar bulunmayan sonuç doğrulandı. |
| [6] Monteleone 2018 | Yayıncının Nature kaydı/özeti üzerinden kas-iskelet yakınmaları ve bireysel değişkenlik doğrulandı. Tam metin incelemesi yapılmış sayılmadı. |
| [7] Chang 2023 | PubMed künyesi ve birincil PMC kaydının arama çıktısındaki koşullu öneri/çok düşük kesinlik kontrol edildi. PMC tam metni doğrudan bot kontrolüne takıldı. |
| [8] Bharucha & Lacy 2020 | PubMed özeti: birincil/ikincil kabızlık, ilaçlar, ayrıntılı öykü ve muayene doğrulandı. |
| [9] Boyle 2017 | Yayıncı PDF'i ve birincil kayıt çıktısı: kaygıya yatkın örneklemlerde olası yarar; genel çalışma kalitesi düşük. |
| [10] Zehender 1997 | PubMed künyesi ve JACC yayıncı çıktısı; magnezyum + potasyum, ekstra atımlar, semptomlarda plaseboya göre ek yarar olmaması. |
| [11] Schuster 2025 | PubMed özeti doğrudan okundu: 155, 18–65, dört hafta, `d=0,2` doğrulandı. Bir yazarın takviye sektörüyle ilişkisi açıklanmış; küçük ve kısa çalışma güçlü menopoz kanıtı sayılmadı. |
| [13], [14] üst sınırlar | [13]'ün National Academies sayfası doğrudan açılamadı; 320/350 mg NIH ODS güncel tablosuyla çapraz kontrol edildi. [14] resmî SCF PDF'inde 250 mg ve MgO dâhil kapsam okundu. |
| [15] DailyMed | Etiketin 2.1, 7.1 ve hasta bilgilendirme bölümleriyle antasit etkileşimi ve dört saat sınırı doğrulandı. |
| [16], [18], [19] emilim | Firoz ve Walker PubMed özetleri okundu; Ivanovic doğrudan erişilemedi, birincil kaydın indekslenmiş özeti kullanıldı. Klinik üstünlük sonucu türetilmedi. |
| [17] NHS | Çarpıntıda acil yardım koşulları resmî sayfadan kontrol edildi. Türkiye için mevcut 112 numarası korundu. |
| [20] Park 2015 | PubMed özeti doğrudan okundu; meme kanseri öykülü postmenopozal grup, oksit 800/1.200 mg/gün, plasebo farkı yok. |
| [21] Gugler 1990 | PubMed künye/özet kaydı erişilebilir; antasit etkileşimi genel desteği. Güncel güvenlik desteği NIH ODS'dir. |
| [22] DailyMed alendronat | Etiket bölüm 7.1: kalsiyum, antasit ve çok değerlikli katyon içeren ürünler emilimi azaltır; bölüm 2.6: alendronattan sonra diğer ağızdan ilaçlar için en az yarım saat beklenir. Yeni [22] ile bisfosfonat iddiası bu etikete bağlandı. Itoh 2016 (sıçan deneyi) bu iddiada kullanılmaz. |

Ana düzeltmelerin dayanakları: [NIH ODS (botlara kapalı, doğrulanamadı)](https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/), [DailyMed alendronat](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b63421af-ec03-1de7-e053-2a95a90abec6), [Park 2015](https://pubmed.ncbi.nlm.nih.gov/25423327/), [eski hayvan kaynağı](https://pubmed.ncbi.nlm.nih.gov/26934925/), [SCF üst sınır görüşü](https://ec.europa.eu/food/fs/sc/scf/out105_en.pdf), [JACC MAGICA](https://www.jacc.org/doi/full/10.1016/S0735-1097%2897%2900053-3).

## Gerçek hekim katkısı ve tekrar denetimi

SSS'nin dört yanıtı özgün kayıtlarla karşılaştırıldı. Q1 yalnız kalın işaretleri temizlenmiş yanıt; Q2 glisinat çalışma sayısı, Q3 sitrat mekanizması/oksit emilimi, Q4 antasit etkileşimi farklılıkları 12 Ekim ek onay kayıtlarıyla açıklanıyor. Yeni bir model eklemesi bulunmadı. Bu turda SSS veri dosyası değişmedi. “Glisinat daha iyi tolere edilir” ifadesi gerçek hekim değerlendirmesidir; kaynaklı bir üstünlük sonucu olarak gövdeye taşınmadı. Dr. Mumcu notundaki tekrarlar kendi onaylı değerlendirmesi olduğu için korunmuştur.

| Sonuç | Önce | Sonra | Kalan tekrarın işlevi |
|---|---:|---:|---|
| Uykuda küçük/sınırlı yarar | 6 | 4 | Özet, çalışma bulgusu/etki büyüklüğü ve bağımsız okunabilen gerçek SSS |
| Kabızlıkta koşullu öneri | 4 | 3 | Özet, bölüm başlığı, kılavuzun kapsamı |
| Kramp yararı gösterilemedi | 4 | 3 | Özet, bölüm başlığı, alt grup ve plasebo karşılaştırması |
| Kaygı yararı belirsiz | 3 | 2 | Özet ve derleme kalitesi |
| Formlar arasında klinik üstünlük yok | 3 | 3 | Gövde, değiştirilmemiş bağımsız inceleme notu ve gerçek SSS |

Sayılar açıkça çıkarılan Markdown'da `structure-check.mjs --claims` söyleniş eşleşmeleridir; anlamsal kesin sayım veya hedef/kota değildir. Aynı çalışma paragrafındaki etki ve etki büyüklüğü iki eşleşme üretir. H2'ler de sayılmıştır. Sonuçlar elle bütün metin okumasıyla değerlendirildi.

Gramer geçişi: “yakınmaları değişmedi” karşılaştırması açıklaştırıldı; uzun form/ilaç cümleleri bölündü. Yerel ifade geçişi: “neden ayrılır”, “çok değerlikli katyonlar”, soyut “tablo” ve üretim niyeti anlatan alt metin değerlendirildi; ilaç terimi okur için açıklanarak teknik zincir kaldırıldı. Ritim geçişi: giriş ve lede'ler çeşitlendi, kapanış sonuç listesi olmaktan çıktı. Mizah H1: tek takviye kutusu/vaat motifi; ilaç ve risk bölümleri H0. Yeni klinik yaşanmışlık üretilmedi.

## Doğrulama ve yayın sınırı

- `build:ci`: Astro sync, TypeScript, compliance, strict bütünlük/şablon denetimleri, encoding/token/lexicon/tarih prebuild, production build ve SEO denetimi geçti.
- `articles:audit:sources`: hedef için kaynak uyarısı yok. Depodaki başka klinik makaleler için mevcut kaynak uyarıları var; bu tur kapsamı dışında.
- `editorial-check.mjs`: açıkça çıkarılmış metinde 0 aday. Astro/JSX özellikleri bu aracın kapsamında değildir; uyarı kutusu ve alt metin ayrıca elle kontrol edildi.
- `structure-check.mjs`: kalan sekiz aday ailesi tek tek okundu. Negatif çerçevelerin kalanları gerçek SSS/inceleme notunda; kısa kapanışlar güvenlik, popülasyon ve ölçüt açıklıyor. Aynı “PubMed kaydı” etiketi hemen önündeki tam künye ile ayrılıyor; belirsiz kaynak eşleştirmesi bulunmadı. Beş iddia sayımı yukarıda gerekçelendirildi.
- `check-fidelity.mjs`: beklenen farklar var; kaynak [22] çıkarılması, [11] tekrarının azaltılması, 1/5 etiket kalibrasyonu, NIH güvenlik adresi ve tekrar temizliği. Klinik örneklem, oran, yaş, süre, üst sınır, levotiroksin aralığı ve gerçek hekim sözleri ayrıca elle karşılaştırıldı. Araç sonucu tıbbi onay değildir.
- Yerel gerçek tarayıcı: tek H1, dört SSS, görünür soru/cevaplarla FAQPage birebir eşit, bütün ana içerik anchor'ları geçerli, mobilde yatay taşma yok. Article ve MedicalWebPage görseli OG ile aynı; `dateModified=2026-10-12`.
- 390×844 mobil ve 1440×1000 masaüstü görünümü ekran görüntülerinden incelendi. Gövde okunabilir; hero/byline/kart dosyaları ve görsel konumları değiştirilmedi. Yalnız alt metin düzeltildi.
- Rendered-check'in “anonymous review” adayı, aynı satırda Dr. Alper Mumcu adı bulunduğu için yanlış pozitif. “Uncited source” adayları numaralı atıfları tanımayan sezgisel kontrol kaynaklı; [1]–[21] anchor'ları geçerli. Uyarı kutusunun eski genel tanı inkârı bu turda konuya özelleştirildi; son genel disclaimer tek yüzeyde kalır.
- Canlı sayfa tarayıcıda açıldı; bu turdaki yerel düzeltmeler yayımlanmadı. Canlı sayfada eski [22] bulunması yeni revizyonun canlı olduğuna kanıt değildir.

**Açık yayın işi:** Gövde/kaynak düzeltmeleri için Dr. Aksoy/KC ve Dr. Alper Mumcu bu revizyonu incelemelidir. İnceleme notundaki 11 Ekim tarihi tarihsel olarak korunmuştur; yeni tıbbi onay veya tarih uydurulmadı. Standart yazar formu Senai istisnası nedeniyle üretilmedi. Yayın için ayrıca açık commit/push/deploy yetkisi gerekir.
