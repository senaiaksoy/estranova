# GHK-Cu — Codex devam kontrolü

12 Ekim 2026. Yerel revizyon; commit, push, deploy ve yayın yapılmadı. Bu dosya, önceki audit kaydının açık maddelerinin güncel durumudur; eski tur kayıtları değiştirilmedi.

## Sonuç ve yayın durumu

Son SSS ve kaynak değişikliklerinden sonra kod kapısı yeniden geçti (21:25:21). SSS dönüşümü 5/5 gerçek yanıtla tamamlandı; son değişikliklerin inceleme/onay kapsamı ve nihai yayın kararı açık. Başka makaleler değiştirilmedi. `dist/` Git tarafından ignore ediliyor. `.pytest_cache/` dizinine erişim uyarısı Git durumunda çıktı; hedef dosyaları okumayı ve doğrulamayı engellemedi.

## Kaynak kontrolleri ve düzeltmeler

- [1] Pickart 2012: gen ifadesi değişimi ile oksidatif stres/bakır dengesi ilişkisi bibliyografik kayıt ve özette destekleniyor. Tam metin PMC/Europe PMC erişimi bu oturumda engellendi. Daha ayrıntılı “hastalık imzalarını ters yöne çevirme” ifadesi kaldırıldı; soyut özette doğrulanmayan bir iddia taşınmadı. Bakır yükü ve özel hasta gruplarıyla ilgili geniş genellemeler hâlâ ayrıca kaynak/klinik kontrol gerektiriyor. https://pubmed.ncbi.nlm.nih.gov/22666519/
- [6] Sauerbronn 2000: 41 postmenopozal kadın, randomize çift kör çalışma, altı ay, üst kol biyopsisi; yalnız hormon grubunda kolajen +%6,49. Metindeki yaklaşık %6,5 doğru; popülasyon ve ölçüm alanı eklendi. Bu araştırma cilt amacıyla hormon başlama önerisi olarak sunulmadı. Özet doğrulandı; tam makale değil. https://pubmed.ncbi.nlm.nih.gov/10687834/
- [9] CIR 2018 DOI doğrulandı: **10.1177/1091581818807863**. Yayıncıdaki özet ve ilgili güvenlik metni ile CIR'in 30 Haziran 2014 nihai raporunun konsantrasyon/tartışma bölümleri açıldı. Tipik konsantrasyon <10 ppm; güvenlik sonucu değerlendirilen kozmetik uygulama ve konsantrasyonlarla sınırlı. Bu değer güvenli doz eşiği veya yüksek konsantrasyonların zarar kanıtı değildir. Künye bağlantısı ve kapsam uyarısı eklendi. https://journals.sagepub.com/doi/10.1177/1091581818807863 ; https://www.cir-safety.org/sites/default/files/tripep062014final.pdf
- [2] Luansritisakul 2026: PubMed kaydı anlatısal kronik ağrı derlemesi; makale numarası **109** tamamlandı. Genel insan kanıtı sınırlılığına destek olur; menopoz cildindeki tüm çalışmaların yokluğunu tek başına kanıtlamaz. https://pubmed.ncbi.nlm.nih.gov/42635865/
- [10] FDA'nın güncel indirme adresi bu oturumda yeniden açıldı: belge hâlâ **14 Mayıs 2026** tarihini taşıyor. Enjeksiyon dışı GHK-Cu Category 1; PCAC görüşmesi Şubat 2027 sonundan önce planlanıyor. Bu, ilaç veya kozmetik onayı değildir. Başka bir FDA kararının hiç bulunmadığı iddia edilmedi. https://www.fda.gov/media/94155/download
- [13] 200/80 ng/mL için 2021 Pickart–Margolina yayınındaki tarihsel aktarım bulundu: UCSF erkek tıp öğrencileri (ortalama 25 yaş) ve erkek öğretim üyeleri (ortalama 60 yaş); kaynak 1, Pickart'ın 1973 UCSF tezine yöneliyor. Tez varlığı katalog ve yazarın UCSF arşivindeki beyanıyla destekleniyor; özgün ölçümün yöntem/örneklem/tablosu açılmadı. Gövdedeki bağımsız kohort yokluğu hükmü ve birim dönüşümü tutarsızlığı kaldırıldı; 1 μg/L = 1 ng/mL. Sayılar tarihsel aktarım olarak korundu; menopozdaki kadınlara genellenmedi. Ayrıntı: `200-80-kaynak-izleme.md`. https://www.lidsen.com/journals/genetics/genetics-05-02-128
- [11] FDA'nın enjeksiyon güvenliği sayfası, GHK-Cu için kümelenme ve peptidle ilişkili safsızlıklardan doğabilecek immünojenisiteyi ve sınırlı insan güvenlik verisini destekliyor. GHK-Cu burada geri çekilmiş adaylıklar listesinde; güncel Category 2 diye sunulmadı. Bu olası risk, her enjeksiyonun insanlarda ağır zarar oluşturduğunun kanıtı olarak yazılmadı. https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks
- [12] NIH ODS bakır bilgi notu, fazla bakırın karaciğer hasarı ve Wilson hastalığında bozulmuş bakır uzaklaştırılmasıyla ilişkisini destekliyor. Bu genel bakır bilgisi, uygun topikal GHK-Cu ürününün zehirlenmeye yol açtığı sonucu olarak kullanılmadı. https://ods.od.nih.gov/factsheets/Copper-HealthProfessional/
- Eski geniş topikal güvenlik genellemesi ve kaynaksız bakır alerjisi/gebelik listesi yerine daha sınırlı, kaynaklı bakır metabolizması açıklaması yazıldı. Önceki kaynaksız iddiaların tamamı kapanmadı: molekül özelliklerinin ayrıntıları ve tüm insan literatüründe yokluk iddiaları kapsamlı ayrı tarama gerektirir. SSS'deki beş yanıt artık doğrudan sağlanan hekim yanıtlarının kısa karşılığıdır; uzman görüşü kaynak yerine sayılmadı.

## Kod ve yüzey düzeltmeleri

- Klinik rehber özeti “Kısa Klinik Yanıt” oldu.
- Evidence toplamı **6 → 5**: gövde 3 + özet 1 + editör notu 1. Spec 4–5'i üst sınır, 2–3'ü ideal olarak tanımlar; 4–5 minimum gereklilik değildir.
- Atıflar kaynak maddelerine tıklanabilir `#kaynak-1` … `#kaynak-13` bağlantılarıyla bağlandı.
- Open Graph/Twitter görseli schema görseliyle hizalandı; mevcut üst hero görseli kullanıldı. Üst hero veya `submenuHeroByRoute` değiştirilmedi.
- 5 Haziran onay kaydı, kullanıcı görselinin hero/card/byline bağlanmasını açıkça içeriyor. Makaleye özgü hero kaydı bu somut önceki yetki altında korunmuştur; otomatik silinecek hata sayılmadı.
- Eski kayıt “tüm Evidence 3” ve “longevity görünür metinde yok” ifadelerinde eksikti: toplam 6'ydı, pazarlama paragrafında İngilizce sözcük kalmıştı. İkisi düzeltildi.
- Tekrar eden kapanış ve inkâr cümleleri azaltıldı. Kipsel belirsizlik ifadeleri kanıt anlamını taşıdığı yerlerde korundu; kota için kesinlik yükseltilmedi.

## Gerçek yanıt ve inceleme

Kullanıcı, “Dr. Alper Mumcu, 12 Ekim revizyonunu bağımsız olarak inceledi mi?” sorusuna **“bugün inceledi”** dedi. Bu, 12 Ekim inceleme beyanıdır; yazılı belge, yayın yetkisi veya bu sohbetin sonrasındaki tüm değişikliklerin onayı olarak kaydedilmedi. Görünür notta yazarın klinik değerlendirmesi Senai'ye, bağımsız inceleme Mumcu'ya açıkça ayrı etiketlerle bağlandı; Mumcu adına birinci tekil hekim sözü üretilmedi.

Beş özgün SSS yanıtı `klinik-katkilar/2026-10-12_ghk-cu-menopoz-cilt.json` içinde tam olarak saklandı; `editedForArticle` kısa karşılıkları içeriyor. Yanıt 1: kanıt sınırı, topikal/enjeksiyon ayrımı, enjeksiyon önermeme ve temel bakım sırası korunuyor. Yanıt 2: güvenilir/şeffaf kozmetik ürün, evde peptid hazırlamama, hassas cilt, küçük alanda deneme ve tahrişte bırakma, temel bakımı sürdürme, aktif ürünleri kademeli ekleme ve gerçekçi beklenti korunuyor. Yanıt 3: bariyer, safsızlık/sterilite, belirsiz doz ve uzun dönem güvenliği, FDA uyarısı, kesin zarar sonucuna varmama ve enjeksiyon önermeme korunuyor. Yanıt 4: bakırın miktar/biçim/yol farkı, Wilson/karaciğer, sınırlı topikal ve enjeksiyon verisi korunuyor. Yanıt 5: menopoz kolajeni, kırışıklık, DNA/yaşlanma, doğal güvenlik ve enjeksiyon üstünlüğü vaatlerine yaklaşım ile insan/ürün araştırması ayrımı korunuyor. Yeni doz/deneyim eklenmedi. Kısa karşılıklar `hekim-yanitlari-duzenlenmis.md` dosyasında incelemeye sunuldu; ayrıca onaylandıkları iddia edilmiyor.

Tek görünür SSS yüzeyi ve TOC “Dr. Aksoy'a sorular” başlığına dönüştürüldü. “En sık” için sıklık doğrulaması yapılmadığından başlığa eklenmedi. FAQPage aynı beş kısa soru-cevabı ortak kaynaktan alıyor. Nihai metnin yeni SSS ve kaynak kapsamı hekim/editör incelemesine sunulmalı.

## Kontroller

- `npm run build:ci`: geçti; lint, compliance (180 dosya), yayın bütünlüğü, şablon kontrolü, 140 sayfa build, 160 çıktı SEO kontrolü. Compliance deterministik yerel kontrol; API anahtarı gerekmedi. Tıbbi onay değildir.
- `npm run articles:audit:sources`: GHK-Cu işaretlenmiyor; genel komut başka **11** makalede kaynak izi eksik olduğundan exit 1. Kaynak bulunması ile iddia-kaynak doğruluğu ayrı kontrollerdir.
- `git diff --check`: temiz.
- `images:tag-ai --check`: iki yeni WebP 2/2 etiketli; görseller yeniden kırpılmadı. Önceki ad-hoc kırpma yöntemi gelecekte tekrarlanmayacak; kanonik araç `npm run article:images`.
- Derlenmiş HTML: tek H1; 5/5 görünür SSS/FAQPage birebir eşleşiyor; 13/13 kaynak anchor hedefi mevcut; duplicate id yok; OG/schema görseli aynı; dateModified 2026-10-12; MedicalWebPage reviewer Dr. Alper Mumcu. `qa-html.json`; tekrarlanabilir kontrol `qa-html.mjs`.
- Skill yardımcıları Astro'yu doğrudan okumadığı için açık metin çıkarımıyla çalıştırıldı (`qa-extract.mjs`, `qa-before.md`, `qa-after.md`). Dinamik props ve ortak FAQ ayrıca incelendi.
- `editorial-check`: 0 aday. `check-fidelity`: önceki turlarda eklenen kaynak/sayı/tarih değişiklikleri bulundu; bilinçli tıbbi değişiklikler yukarıda sınırlamalarıyla kaydedildi. Otomatik “eşdeğerlik/onay” sayılmadı.
- `structure-check`: 17 kısa kapanış adayı: 13 kaynak künyesi/DOI, 2 imza/inceleme ve 2 ayrı güvenlik yolu/düzenleyici durum bilgisi. Metin çıkarımındaki 22 noktadan önce boşluk adayı etiketlerin silinmesinden kaynaklanıyor; derlenmiş HTML taraması aynı uyarıyı vermedi.
- `rendered-check`: bibliyografik adları numaralı atıflarla eşleyemeyen “uncited-source” sezgisel adayları mevcut. 1–13 numaralı atıflar ve tıklanabilir hedefler elle/HTML ile doğrulandı; kurum/dergi isimlerini gövdeye yığarak sezgisel uyarı gizlenmedi.
- Tarayıcı: `browser-client is not trusted / privileged native pipe bridge is not available` nedeniyle bağlantı kurulamadı. Bu turda görsel/mobil QA ve canlı sayfayla karşılaştırma doğrulanmadı.

## Sözcük kalıbı sayımı

Bu tablo sonuçların semantik tekrar sayısı değildir; `structure-check --claims` sözcük kalıplarını sayar. Önce/sonra aynı açık Astro gövde çıkarımı; dışarıdan gelen SSS ve metadata kapsam dışıdır. SSS ayrıca incelendi.

| Kalıp | Önce | Sonra | Kalan kullanımın işlevi |
|---|---:|---:|---|
| menopoz cildi / postmenopozal cilt | 13 | 14 | Tanım, hormon çalışmasının popülasyonu, çalışma tasarımı, vaat sınırı, özet/kapanış; kaynak 13'ün menopoz cildi çalışması olmadığı sınırı |
| topikal kozmetik / yardımcı içerik | 10 | 8 | Kullanım yolu, konsantrasyon sınırı, temel bakımın yerini almama |
| enjeksiyon / sistemik gençleşme | 31 | 31 | Ürün standardı, yol farkı, insan güvenliği, regülasyon, FDA safsızlık uyarısı, risk işaretleri ve disclaimer |
| gen ifadesi / genleri gençleştirme | 6 | 6 | Mekanizma ile insan sonucu arasındaki fark; pazarlama sözü ayrı iddia olarak açıklanıyor |

## Açık işler

1. Beş SSS'nin kısa karşılıkları incelemeye sunuldu; metnin nihai onay durumunu kaydetmek.
2. 200/80 için tarihsel aktarım ve tez atfı bulundu; özgün ölçüm tablosu erişimi hâlâ açık. Kullanıcı “Evet, gerçek klinik gözlemim” diyerek iki gözlem ifadesini teyit etti; klinik katkı kaydına işlendi ve ifadeler korundu. Bu iki soru artık yanıt bekliyor olarak izlenmiyor.
3. Son kaynak/SSS değişikliklerinin bağımsız inceleme kapsamını ve nihai yayın kararını kaydetmek.
4. Görsel/mobil kontrolü tamamlamak. Bu engel HTML kontrolüyle kapanmış sayılmadı.
5. Yayın onayından sonra article-log ve yayın arşivini güncellemek. Bu turda approval kaydı, yayın arşivi ve yayımlandı durumu değiştirilmedi.

Okur eğitimi değeri: topikal kozmetik, laboratuvar bulgusu ve enjeksiyon iddiasını ayrı değerlendirmeye yardımcı. İkincil web/AI kaynağı olarak kaynaklı çalışma bağlamı ve düzenleyici belge tarihi alıntılanabilir. Kişisel doz, enjeksiyon güvenliği, menopozda etkinlik veya tüm ürünlerde güvenlik referansı olarak kullanılmaya uygun değil.

