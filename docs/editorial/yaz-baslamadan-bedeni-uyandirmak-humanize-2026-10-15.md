# Yaz Başlamadan Bedeni Uyandırmak — yerel revizyon

Durum: Kullanıcının “Audit humanize” ardından verdiği “Fix.” talebiyle yerel düzeltme. Bu revizyon için yazar ve tıbbi onay henüz alınmadı. Commit, push, deploy ve yayın yapılmadı. Önceki yayın ve onay kayıtları değiştirilmedi.

## Başlangıç ve kapsam

- Başlangıç HEAD: `6fe28d78737ca0a1882aed8a44763869ec750488`. Hedef dosyada çalışma ağacı farkı yoktu.
- Son hedef dosya commit'i: `cf597aec`; onay kaydı belirli bir commit'e bağlı olmadığı için bunun son onaylı sürüm olduğu ileri sürülmez.
- Başlangıçtaki Astro dosyası geçici `estranova-yaz-fix-20261015/before.astro` kopyasında; kalıcı özgün sürüm Git geçmişinde korunur.
- Makale ve yalnız bu makalenin manifest açıklaması düzenlendi. Görseller, üst hero, slug, anchor kimlikleri, yayın tarihi, yazar, tıbbi inceleyen ve eski arşiv korunur.
- Başlıklardaki soru düzeni değişti; altı eski anchor korundu. Kullanılmayan TOC verisi kaldırıldı. Deneyim yazısına SSS eklenmedi.

## Anlam ve kanıt kaydı

| Önce | Revizyonda karşılığı / sınır |
|---|---|
| Yaz öncesi görünüm baskısı ve devamlılık | Spot, açılış ve gelecek haftaya yer açma bölümünde; sonuç ve tıbbi nottaki tekrarlar kaldırıldı. |
| Deniz öncesi omuz, nefes, ayak kontrolü | Mevcut sahne açılışa taşındı; yeni olay, kişi veya doğrudan alıntı eklenmedi. Önceki sahnenin yazara aidiyeti yeniden onaylanmış sayılmaz. |
| Alara menopoz geçişini yaşamıyor | Bir kez açıkça korundu; anneye menopoz belirtisi atfedilmedi. |
| Yürüyüş, kas, denge ve hareket açıklığı | Tıbbi notta ayrıştırıldı; her egzersiz türünün her sonuç için eşit kanıt taşıdığı izlenimi kaldırıldı. |
| 40 sonrası kas kütlesi/kalitesi azalabilir, iyi kanıt | Doğrulanmış hedefe özgü kaynak kaydı bulunmadığından 40 yaşı eşiği ve birleşik kas kalitesi iddiası çıkarıldı. Kas güçlendirme bilgisi korundu. Bu, yalnızca üslup değişikliği değildir. |
| Bütün yazı için iyi–güçlü kanıt | Genel derece kaldırıldı. Güçlü kanıt etiketi yalnız yetişkinlerde düzenli fiziksel aktivitenin kalp-damar/metabolik yararına bağlandı; kişisel gözleme uygulanmadı. |
| Nefes, sıcak, toparlanma | Ayrı tıbbi notta. Konuşma testi güvenlik testi olarak sunulmaz; sıcak hastalığında hareketi bırakma, serinleme ve yardım ayrımı eklendi. |
| Göğüs ağrısı ve diğer belirtiler aynı listede | Acil yardım ve devam etmeden değerlendirme ayrıldı. Önceki eklem, travma, nörolojik belirti, düşme ve ilaç uyarıları korundu. |
| Gebelik/lohusalık ve kişisel program sınırı | Sorumluluk reddinde korundu. |

## Doğrulanan kaynaklar ve iddia izi

15 Ekim 2026'da okundu. Hekim olmayan yazar için kaynak izi yayın gövdesine taşınmadı (CLAUDE.md §4).

- [WHO — Physical activity](https://www.who.int/news-room/fact-sheets/detail/physical-activity): yetişkinlerde genel sağlık yararı, kas güçlendirme; kişiye özel program veya 40 yaşına özgü eşik kanıtı değildir.
- [CDC — How to Measure Physical Activity Intensity](https://www.cdc.gov/physical-activity-basics/measuring/index.html): konuşma testi, göreli efor ve nefes; kişisel güvenlik değerlendirmesi yerine geçmez.
- [NHS — Chest pain](https://www.nhs.uk/symptoms/chest-pain/): geçmeyen ani göğüs ağrısı, yayılım ve eşlik eden belirtilerde acil yardım; rutin değerlendirmeden ayrıldı.
- [NHS — Heat exhaustion and heatstroke](https://www.nhs.uk/conditions/heat-exhaustion-heatstroke/): serinleme, sıvı, düzelmeyen belirtiler ve bilinç/koordinasyon kaybında acil yardım.
- [İçişleri Bakanlığı — 112 ACM Projesi](https://www.112.gov.tr/112-acm-projesi): acil yardım numarası Türkiye için 112 olarak yerelleştirildi.

## Yapı ve tekrar

Önceki audit'in bölüm/yüzey bazlı anlam sayımıyla aynı kapsamda:

| Ana sonuç | Önce | Sonra | Kalan tekrarın işlevi |
|---|---:|---:|---|
| Devam ettirilebilir hareket | 6 | 2 | Spot ve takvim/uygulanabilirlik bölümü |
| Yaz öncesi görünüm baskısı | 5 | 2 | Spot ve somut açılış bağlamı |
| Farklı hareket türlerini birlikte düşünmek | 5 | 1 | Ayrı tıbbi bilgi |

Yazarın menopoz deneyimi yaşamadığını belirtmesi ve mevcut doğa/saha kapanışı persona gereği korunur; otomatik kapanış adayı diye silinmedi. Çıkarım sırasında Evidence bileşeninin yerinde oluşan nokta öncesi boşluklar kaynak metin hatası sayılmaz.

## Açık işler

- Bu sürümün Alara/yazar onayı ve değişen tıbbi notun tıbbi onayı KC üzerinden alınmalı. Eski onay bu revizyonu kapsamıyor.
- Şimdiki deneyim sahnesinin önceki yayımlanmış metinde bulunması, bağımsız yazarlık doğrulaması değildir; yeni bir yaşanmışlık üretilmedi.
- Yayın istenirse, onay sonrası arşiv ve gerçek güncelleme tarihi yayın akışında ele alınmalı; bu yerel düzeltmede güncellenmedi.

## Yerel doğrulama

- `npm run build`: geçti; 139 sayfa. Production launch modu ve telemetry kapalı kullanıldı.
- `npm run compliance`: 179 dosyada geçti.
- `articles:audit:strict` ve `articles:audit:templates`: geçti. Eski kemik sağlığı rotası için approval/manifest bilgi notu hedef dışı.
- `npm run seo:audit`: 160 çıktı sayfasında geçti.
- `build:ci`: TypeScript adımında hedef dışı `article-drafts/kas-iskelet-preview2/src/` içindeki 7 eksik import nedeniyle durdu. Bu klasör veya TypeScript kapsamı değiştirilmedi; tam CI geçti denmez.
- `check-fidelity`: gerçek başlangıç dosyasından açıkça çıkarılan önce/sonra metinlerde çalıştı. 40 yaş ifadelerinin kaldırılmasını aday gösterdi; yukarıda olgusal kapsam değişikliği olarak kaydedildi. Onaylı commit karşılaştırması değildir. JSX özelliklerindeki güvenlik metni ayrıca elle karşılaştırıldı.
- `editorial-check`: 27 düz yazı bloğunda 0 aday.
- `structure-check`: 5 kısa paragraf kapanışı incelendi. İkisi gündelik soru/örnek; üçü birbirinden farklı efor ve güvenlik sınırı. Yer değiştirilebilir özdeyiş olmadıkları için korundu. Üç claim kalıbının sözcüksel eşleşmeleri anlam sayımı yerine kullanılmadı.
- `rendered-check`: derlenmiş hedef HTML'de 0 aday; yazar adı eşleştirme sezgisinin boş sonucu, gerçek HTML ve tarayıcıda Alara Baykent'in görünmesiyle ayrıca kontrol edildi.
- Hedef sayfa yerel tarayıcıda açıldı; gövde, tıbbi not ve acil yardım ayrımı görünür. Masaüstü görünümde metin kesilmesi görülmedi; mobil ekran kontrolü yapılmadı.
- Altı önceki anchor, tek H1, Article şeması ve SSS/MedicalWebPage üretilmemesi kontrol edildi.
- Manifestin özgün satır sonları korundu; yalnız hedef açıklama değişti. CRLF uyumlu `git diff --check` geçti.
- Oturum sırasında başka editörün köşesi sayfalarında değişiklikler belirdi; bu çalışmanın parçası değiller ve bunlara dokunulmadı.

## İkinci kontrol sonrası düzeltme — 15 Ekim 2026

Kullanıcının ikinci “Fix.” talebiyle aynı yerel revizyon üzerinde çalışıldı. İlk geçişte eklenen “artık gelecek haftayı da düşünüyorum” ve “deniz sporlarından kalan bir alışkanlığım var” ifadeleri kaynakta doğrulanmış kişisel alışkanlıklar değildi; genel gözleme çevrildi. “Yaptığım hareketin ertesi günkü işlerimi nasıl etkilediği benim için önemli” ek atfı da çıkarıldı. İlk geçişin kişisel deneyim üretmediği yönündeki yukarıdaki değerlendirmesi bu dar noktalar bakımından düzeltilmiştir.

- “Hevesle açılan büyük bir boşluk” ifadesi, egzersize ayrılan uzun zamanı yoğun haftalarda koruyamamak olarak açıklandı.
- Özgün sürümde bulunan kısa yürüyüş, hafif esneme ve ayak bileği/kalça hareketliliği örnekleri koşullu seçenekler olarak geri alındı; süre, tekrar veya herkese uygun program yazılmadı. Sağlık sorunu/sakatlık sınırı yanında korundu.
- Tıbbi nota iki ayrı yönlendirme kaldırıldı. Son bölümün eski `durulacak-yer` anchor'ı korunarak başlığı “Başlangıç Noktanız” oldu; mevcut deniz sahnesine kısa dönüşle kapanıyor.
- Sıcakta dinlenme, serinleme ve sıvıya rağmen 30 dakika içinde düzelmeme durumunda 112 yönlendirmesi eklendi. Acil belirtilerde bu sürenin beklenmemesi ayrıca söylendi. Kaynak: yukarıdaki NHS heat exhaustion/heatstroke sayfası bu turda yeniden okundu.
- Yazar, yayın tarihi, eski onay, şema türü, görseller ve manifest bu turda değiştirilmedi. Yeni onay verilmedi; yayın yapılmadı.
- Ana mesajların yüzey sayımı önceki yerel revizyona göre aynı: devamlılık 2 → 2, görünüm baskısı 2 → 2, farklı hareket türlerinin birlikte düşünülmesi 1 → 1. Geri alınan örnek listesi birleşik tıbbi yarar iddiası değildir; pratik seçenek işlevi taşır.
- İkinci geçiş doğrulaması: build (139 sayfa), compliance (179 dosya), strict template, SEO (160 sayfa) ve CRLF uyumlu diff kontrolü geçti. Editorial-check 0, rendered-check 0 aday. Structure-check'in 7 kısa kapanışı tek tek okundu: soru, gündelik örnek, pratik bölüm açılışı, kişisel deneyimin sınırı ve üç ayrı güvenlik koşulu; aynı hükmü yinelemedikleri için korundu.
- Fidelity farkları `30`, `112` ve `30 dakika`: kaynakla doğrulanan güvenlik değişikliği olarak değerlendirildi. Yeni güvenlik cümlesi, beklememe istisnası, geri alınan seçenekler, altı anchor, tek H1 ve Article/BreadcrumbList şeması son derlenmiş HTML'de doğrulandı.
- Lint yeniden denendi: aynı hedef dışı kas-iskelet-preview2 klasöründeki 7 import hatası sürüyor. Tam CI bu nedenle açık. Bu turda tarayıcı/mobil kontrolü yenilenmedi; doğrulama son derlenmiş HTML üzerinde yapıldı.
