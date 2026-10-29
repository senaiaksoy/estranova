# HRT Yan Etkileri ve İzleme — geniş denetim ve düzeltme

Tarih: 29 Ekim 2026. Durum: **yazar ve tıbbi onay tamam; 29 Ekim 2026 yayın revizyonu**.

Taslak: `icerik/taslaklar/hrt-yan-etkileri-ve-izleme-revizyon-2026-10-29.astro`.
Amaçlanan entegrasyon yolu: `src/pages/hormonal-gecis/menopoz/hrt-yan-etkileri-ve-izleme.astro`.
Yerel önizleme: http://127.0.0.1:4389/hormonal-gecis/menopoz/hrt-yan-etkileri-ve-izleme/

Bu belge denetim kaydıdır; onay formu veya onay e-postası değildir. İlk denetim aşamasında yayın rotası değiştirilmedi. Ardından kullanıcı bu sohbette “yazar ve tıbbi onay tamam. commit, push ve deploy” diyerek revizyonu ve yayın işlemlerini açıkça onayladı; onaylanan taslak yayın rotasına aktarıldı. Aşağıdaki önce/sonra bulguları ilk denetimin kaydıdır.

## Başlangıç ve kapsam

- Dr. Alper Mumcu byline'ı ve `clinical-guide` türü doğru; korundu. İnceleyen Dr. Senai Aksoy. Yeni hekim deneyimi, yanıtı veya inceleme tarihi üretilmedi.
- Son onay: 30 Eylül 2026 revizyon 2; `icerik/yazar-onaylari/alper-mumcu/article-log.md`, eski onay kaydı ve `meta.json` üzerinden doğrulandı. İlgili commit `dcfbce3e`.
- `git diff dcfbce3e -- src/pages/hormonal-gecis/menopoz/hrt-yan-etkileri-ve-izleme.astro` boş. Dosya SHA-256 değeri onaylı arşivle aynı: `b0e1eb0c663431408c1c172c2a36dbd255386585b750a2b44027ec546bba3f2b`.
- Canlı HTML ayrıca indirildi: görünür son güncelleme ve iki şema tarihi 30 Eylül 2026. Yerel onaylı kaynakla aynı temel metin/SSS incelendi.
- Başlık, SEO açıklaması, kısa yanıt, giriş, tüm gövde, SSS ve yanıt kökeni, kaynaklar, editör notu, sorumluluk reddi, görsellerin alt metni, içindekiler, iç bağlantılar, şema ve mobil/masaüstü görünüm kapsandı. Görsel dosyaları ve üst hero değiştirilmedi.
- Mevcut sıcak, mütevazı klinisyen sesi yeterli bulundu; iyi çalışan bölümler sırf yeniden yazılmış görünmesi için değiştirilmedi. HRT/güvenlik konusu H0: mizah eklenmedi.

## Bulgular ve uygulanan düzeltmeler

Satırlar eski onaylı yayın dosyasına, karşılıklar taslağa aittir.

| Öncelik | Konum / bulgu | Taslakta yapılan düzeltme |
|---|---|---|
| P1 | Kısa yanıt ve güvenlik listesi: göğüs ağrısı için nefes darlığıyla birliktelik aranıyordu. Ani görme kaybında yalnızca “acil değerlendirme” yazıyordu. | Ani nefes darlığı veya göğüs ağrısında ikisinin birlikte çıkmasını beklememe; ani görme kaybı, alışılmadık ani şiddetli baş ağrısı ve geçen inme belirtilerinde de 112 çağrısı açıklaştırıldı. NHS akciğer pıhtısı ve inme kaynaklarıyla eşlendi. |
| P2 | Güvenlik listesinde ciddi alerjik reaksiyon sınırı yoktu. | Ani dudak/dil/boğaz şişmesiyle nefes veya yutma güçlüğü için 112 eklendi. Kaynak: NHS östrojen yan etkileri. |
| P2 | Kanama bölümünde altı aydan sonra “ilk kez” başlayan kanama öndeydi; devam eden kanama gövdede yeterince açık değildi. | Altı ay / tedavi değişikliğinden üç ay sonra süren veya yeni başlayan kanamanın bildirilmesi birlikte yazıldı. İlk hafif lekelenmenin üçüncü ay kontrolünde konuşulması eklendi. Bu sürelerin yoğun kanama ve kişisel risklerde bekleme izni olmadığı açıklaştırıldı. |
| P2 | Rahmi ameliyatla alınmış kişide kanama istisnası belirtilmiyordu. HRT dışı menopoz sonrası kanama iddiasının doğrudan kaynağı yoktu. | Histerektomi sonrası vajinal kanamanın alışma belirtisi sayılmaması eklendi. HRT kullanmayanlarda bir kez/az miktarda menopoz sonrası kanamanın da değerlendirilmesi, ayrı NHS kaynağıyla bağlandı. |
| P2 | HRT'nin hangi uygulamalarının ele alındığı başta belirsizdi. | Tablet/bant/jel/sprey ile sistemik tedavi kapsamı tanımlandı. Düşük doz vajinal östrojenin emilim/risk profilinin farklı olduğu ve aynı risklerin ona genellenemeyeceği belirtildi. |
| P2 | Progesteron/progestojen ve sürekli/döngüsel kombine tedavi farkı yeterince açıklanmıyordu. | Benzer etkili hormon grubu ve ayın belirli günleri / her gün kullanım ayrımı sadeleştirildi. Yan etkilerin iki hormon grubundan da kaynaklanabileceği açıklandı. Reçete veya kişisel doz verilmedi. |
| P2 | Sarılık, koyu idrar ve karın ağrısı uyarısı kaynaklandırılmamıştı. Çarpıntının acil eşlikçileri ayrılmamıştı. | MedlinePlus HRT ilaç bilgisiyle ilk grup bağlandı. Çarpıntıda göğüs ağrısı, belirgin nefes darlığı veya bayılma eşlik etmesi için ayrı 112 sınırı ve NHS hastane kaynağı eklendi. |
| P2 | SSS gerçek Dr. Aksoy yanıtları taşıyor fakat yazı Mumcu imzalı. Güncel AGENTS kuralı başka yazarın makalesinde Dr. Aksoy adına SSS'yi yasaklıyor. | Yalnız yeni taslaktan Dr. Aksoy adına bölüm ve FAQPage girdisi çıkarıldı. Yanıtlar Mumcu'ya mal edilmedi, anonimleştirilerek onun sesi gibi kullanılmadı. Yayındaki beş yanıt, paylaşılan FAQ kaynağı ve özgün/onaylı yanıt arşivi aynen bırakıldı. Eski `#sik-sorulanlar` bağlantısı gövdedeki mevcut üç kontrol sorusuna yönelen bir anchor olarak korundu. |
| P2 | Görsel alt metni “birleşmiş eller ve açık not defteri” diyordu; gerçek dosyada pencere yanında elini omzuna koyan kadın portresi var. | Görsel dosyası değiştirilmeden alt metin görülen sahneye göre düzeltildi. |
| P3 | Kısa yanıt uzundu; SSS ana gövdedeki izlem ve kanama bilgisini yineliyordu. | Kısa yanıt sıkılaştırıldı. Üçüncü ay/yıllık izlem ve tarama bilgisi korundu. Rutin hormon düzeyi ölçümünün yeri güncel BMS kaynağıyla gövdede açık bırakıldı; en düşük etkili doz ilkesi NICE'a bağlandı. |

## Doğrulanan ve korunan tıbbi bilgiler

| İddia | Kaynak kontrolü / sonuç |
|---|---|
| İlk kontrol üçüncü ay, ardından yıllık; sorun varsa daha erken | NICE NG23 §1.9.2 ile uyumlu. Herkese zorunlu altıncı ay kontrolü eklenmedi. |
| İlk altı ay / doz ya da ürün değişikliğinden sonraki üç ayda kanama değerlendirmesi | NICE §1.8.4–1.8.5 ve BMS kılavuzuyla kontrol edildi. Yoğun/uzun kanama ve kişisel riskler sürelerden önce değerlendirme gerektirebilir. Düşük riskte tedavi ayarı ile inceleme kararı hekimde bırakıldı; herkese aynı ultrason/biopsi algoritması yazılmadı. |
| Meme hassasiyeti birkaç hafta içinde azalabilir; bulantı veya baş ağrısı bir haftadan uzun sürerse bildirilir | NHS östrojen yan etkileriyle uyumlu. Şiddetli belirti için bekleme önerisi yok. |
| Mamografi: belirtisiz 40–69 yaşta iki yılda bir ulusal tarama | Sağlık Bakanlığı kaynağı doğrulandı. Bu aralık kişisel risk veya yeni meme bulgusu için bekleme süresi yapılmadı. |
| Rutin hormon testleri | BMS 22 Haziran 2026 açıklaması olağan menopoz yaş aralığı için HRT izleminin çoğunlukla hormon testine dayanmadığını doğruluyor. Kişisel ihtiyaç/öykü istisnası korundu. |
| Kullanım yolu / doz | Herkese bant veya jel üstünlüğü iddia edilmedi. En düşük etkili doz ilkesi var; kişisel ilaç/doz önerilmedi. |

Üç elle okuma yapıldı: gramer/sentaks, doğal Türkçe/terim açıklaması, bölüm işlevi/ritim. Yeni nedensellik, başarı oranı veya tedavi vaadi eklenmedi. Şiddetli belirti, beklenmedik kanama ve rutin tarama birbirinden ayrıldı.

## Gerçek hekim yanıtları ve korunan kayıtlar

30 Eylül 2026 tarihli `hekim-yanitlari.json` içindeki beş özgün yanıt ile düzenlenmiş karşılıklar okundu. Güncel `src/data/article-faqs.ts` içindeki beş cevap kayıtlı `editedAnswer` metinleriyle tam eşleşiyor. Bu turda soru, cevap, özgün yanıt tarihi, kullanım/onay kaydı veya ortak FAQ dosyası değiştirilmedi. Mevcut Bilimsel Editör Notu da birebir korundu; eski imza yeni revizyon için onay kanıtı sayılmadı.

SSS'nin yeni taslakta çıkarılması eski onaylı yanıtları geçersiz veya uydurma saymak değildir; güncel yazar sınırına uyum içindir. Makale türünde SSS otomatik zorunlu değil. Yeni Mumcu yanıtı üretilmedi veya istenmedi.

## Tekrar ve anlam kontrolü

Kaynak HTML'den özet + prose + editör notu açıkça Markdown'a çıkarıldı; import/JSX üzerinden skora gidilmedi. `structure-check.mjs --claims` sonuçları aşağıdadır. Bunlar kalıp eşleşmesi sayılarıdır; farklı sözcüklerle kurulan eş anlamlar ayrıca elle okundu.

| Sonuç / kalıp ailesi | Önce | Sonra | Kalan tekrarın işlevi |
|---|---:|---:|---|
| Üçüncü ay / yıllık izlem | 10 | 8 | Özet, ilk izlem açıklaması, kanama kontrolü ve korunmuş editör notu; biri klinik etkinlik, diğeri izlem sıklığı. |
| Yoğun / uzun kanama | 4 | 3 | Bağımsız okunan özet, kanama bölümü ve güvenlik listesi. |
| Acil yardım / 112 | 5 | 9 | Güvenlik eylemi farklı belirtilerde açık; aynı hükmü dekoratif yineleme değil. |
| Rutin hormon testi | 1 | 2 | Gövde açıklaması ve onu adlandıran kaynak; eski tek eşleşme hekim SSS'sindeydi. |

`family-deferral-closer` 3 → 0; yinelenen ifade adayları 2 → 0. Kısa kapanış adayları 10 → 10: başlıca güvenlik maddeleri ve kısa kaynak açıklamaları, gerekçesiyle korundu. Tek editoryal uyarı üç ardışık “112'yi arayın” açılışı: yardım eylemini her maddede açık tutmak için bilinçli bırakıldı. Cümle ortalaması 11,9 → 11,9 sözcük; standart sapma 6,7 → 5,7. Yanıt bloğunun çıkarılması dağılımı etkiliyor; metin daha düşük skora zorlanmadı.

Fidelity aracı `review_changes` verdi: SSS'nin yeni taslaktan çıkarılması, yeni kaynak/atıf numaraları, 112 tekrarları ve kaynak sürüm tarihlerinin eklenmesi beklenen farklar. Bu çıktı hata yokluğu veya tıbbi onay diye sunulmadı. Üçüncü ay/yıllık izlem, altı/üç aylık kanama sınırları ve 40–69 yaş / iki yılda bir tarama elle karşılaştırıldı. Beş özgün yanıt kendi kayıtlarında korundu.

## Teknik ve görsel doğrulama

Yayın rotasına dokunmadan geçici bir proje kopyasında taslak hedef rotaya yerleştirilerek sınandı. Public görseller/bağımlılıklar yeniden yazılmadı. QA kökü: `C:\Users\KC3\AppData\Local\Temp\estranova-hrt-20261029-04RJNB\project`.

- `npm run build:ci`: geçti. TypeScript lint, compliance, strict bütünlük ve strict template kontrolü, encoding, renk, lexicon ve tarih kontrolleri tamamlandı. 139 sayfa üretildi; SEO kontrolü 161 çıktı için geçti. Son alt metin düzeltmesinden sonra build ve SEO tekrar geçti.
- Compliance iki ilgisiz yazının uzun cümle uyarısını verdi: MOTS-c ve peptid kullanım alanları. HRT için uyarı yok.
- `npm run articles:audit:sources`: **site genelinde geçmedi**. `/zamansiz-yasam/40-sonrasi-diz-agrisi-izlem-mudahale/` için mevcut kaynak izi uyarısı var. Aynı komut değiştirilmemiş ana checkout'ta da aynı sonuç verdi. HRT kaynak bölümü bu denetimde işaretlenmedi. İlgisiz yazı değiştirilmedi.
- Kaynak ve taslak HTML'de bir H1 var. Yeni HTML'de yinelenen ID ve kırık sayfa içi bağlantı yok. 11 numaralı kaynak gövdede kullanılıyor. Eski `#sik-sorulanlar` anchor'ı mevcut.
- İçindekiler sekiz prose H2 ile uyumlu. Görünür SSS çıkarıldığı için taslakta FAQPage yok; Article, MedicalWebPage ve BreadcrumbList var. Yazar Mumcu; inceleyen Dr. Aksoy; yayın tarihi 27 Nisan, taslak değişiklik tarihi 29 Ekim 2026. Yeni tıbbi inceleme tarihi eklenmedi.
- `rendered-check`: yalnız kaynakların gövdede kurum adıyla anılmamasından doğan `uncited-source` adayları. Estranova kuralı gereği kurum adı gövdeye yığılmadı; karşılık gelen numaralı anchor'lar elle doğrulandı. Bu adaylar kaynakların gerçekten atıfsız kaldığı anlamına gelmiyor.
- Mobil 390×844 ve masaüstü 1365×900: yatay taşma yok; iki görsel yüklendi; Kulim Park gövde yazı tipi doğrulandı. Başlık ve lede okunuyor. Masaüstünde TOC kontrol edildi.
- Görsel incelemesi alt metin hatasını ortaya çıkardı ve düzeltildi. Görseller, üst hero ve kaynak haritasındaki görsel kayıtları değiştirilmedi.
- Onaylı makale kaynak dosyası ve korunmuş editör notu SHA/metin karşılaştırmasıyla değişmeden kaldı. Ortak metadata dosyaları bu çalışma tarafından değiştirilmedi; paralel resveratrol çalışmasının commit'i geri alınmadı.

## Kaynaklar ve erişim notları

Denetim 29 Ekim 2026'da yapıldı. Referanslar taslağın kaynak listesinde tıklanabilir. NICE ana adresi doğrudan araç isteğinde 403 verdi; aynı resmi sayfanın arama dizinindeki güncel metni / text-only sonucu üzerinden §1.5.6, §1.8.4–1.8.5 ve §1.9 kontrol edildi. İkincil bir kopya kılavuz yerine kullanılmadı. NHS genel/östrojen yan etki sayfalarının son inceleme tarihi 2023, planlı inceleme tarihi 2026 başı olarak görünüyor; bu sayfalar tek başına güncel kanama kılavuzu yerine geçirilmedi. BMS'nin Mayıs 2026 incelemesi doğrulandı.

1. https://www.nice.org.uk/guidance/ng23/chapter/Recommendations
2. https://www.nhs.uk/medicines/hormone-replacement-therapy-hrt/side-effects-of-hormone-replacement-therapy-hrt/
3. https://www.nhs.uk/medicines/hormone-replacement-therapy-hrt/oestrogen-tablets-patches-gel-and-spray/side-effects-of-oestrogen-tablets-patches-gel-and-spray/
4. https://thebms.org.uk/publications/bms-guidelines/management-of-unscheduled-bleeding-on-hormone-replacement-therapy-hrt/
5. https://www.saglik.gov.tr/TR-100021/ekim-ayi-tum-dunyada-meme-kanseri-farkindalik-ayidir.html
6. https://www.nhs.uk/conditions/stroke/symptoms/
7. https://www.nhs.uk/symptoms/post-menopausal-bleeding/
8. https://www.nhs.uk/conditions/pulmonary-embolism/
9. https://medlineplus.gov/druginfo/meds/a601041.html
10. https://thebms.org.uk/2026/06/new-whc-fact-sheet-hormone-blood-tests-in-the-menopause-transition/
11. https://www.uhsussex.nhs.uk/resources/palpitations-emergency-department-leaflet/

## Revizyona özgü onay ve yayın talimatı

29 Ekim 2026 kullanıcı talimatı: “yazar ve tıbbi onay tamam. commit, push ve deploy”. KC üzerinden Dr. Alper Mumcu yazar onayı ve Dr. Senai Aksoy tıbbi onayı tamamlandı; article-approvals.ts ve yazar article-log kaydına işlendi. Onay tam olarak bu raporla sunulan 29 Ekim revizyonuna aittir. Commit/push/deploy açıkça yetkilendirildi. Sonuç ve canlı doğrulama sohbetin yayın tesliminde bildirilir.
