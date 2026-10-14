# Diz ağrısı — audit sonrası düzeltme, revizyon 2

14 Ekim 2026. Kullanıcının ayrıntılı audit sonrasındaki `onay` yanıtı düzeltme yetkisi olarak uygulandı. Bülent Aksoy yazar onayı veya yeni bilimsel inceleme kaydı üretilmedi. Aday yalnız onay-bekleyen pakette tutuldu; ilk aday revizyon-1/ içinde korundu.

## Değişiklikler ve anlam kaydı

- Bütün diz ağrıları için genel 8–12 hafta çerçevesi çıkarıldı. Tanı, tedaviye yanıt ve yeni belirtilere göre kontrol zamanı anlatıldı. Bu sürenin seçilmiş kişilerde kullanılamayacağı ileri sürülmedi.
- Kilitlenme/takılma ayrımı, ateşli sıcak-şiş eklem ve üzerine basamamada erken değerlendirme belirtildi. Tek taraflı bacak bulgularına nefes darlığı/göğüs ağrısı eklenmesi ayrı acil yardım paragrafına alındı; Türkiye 112 bilgisi resmî kaynağa bağlandı. RedFlagBox'ın makaleye özgü başlık/açıklaması düzeltildi; ortak bileşen değişmedi.
- Osteoartrit için önerilen cerrahi dışı tedavi bütün 40+ diz ağrılarına genellenmedi. Enjeksiyon ayrımı, artroskopi/protez farkı ve akut/dejeneratif menisküs kapsamı eklendi.
- Kilo SSS'si diz osteoartriti ve fazla kilo/obeziteyle sınırlandı. Normal kiloda genel kilo kaybı önerisi yok. Çoğu/birçok kadın sıklık iddiası çıkarıldı; güvenli dönüş garantisi kaldırıldı.
- Sekiz kaynak, iddiaya bitişik numaralı atıflarla eklendi. Kaynak 1 NICE NG226: osteoartrit; 2 NHS diz ağrısı: uyarılar; 3 NHS DVT: acil belirtiler; 4 AAOS: yalnız akut izole menisküs; 5 BMJ: dejeneratif hastalıkta artroskopi; 6 sistematik derleme PMID 37716136: kadın kas yaşlanması; 7 Cochrane 2024 CD004376: egzersiz; 8 Türkiye 112: çağrı numarası. Kaynakların popülasyonları birbirine taşınmadı. NICE/BMJ doğrudan erişimi bazı denemelerde 403 verdi; erişilebilir resmî indekslenmiş içerik ve önceki başarılı okumalar kullanıldı. Bütün çalışmaların tam metin sistematik taraması yapılmadı.
- Kaynaksız genel 4–5 kanıt etiketi çıkarıldı. Cochrane egzersiz sonucundaki düşük–orta kesinlik, yalnız bu iddiada site ölçeğinde 2–3 olarak gösterildi; klinik önem ve kişisel yarar sınırı korundu. Bu eşleme bilimsel inceleme bekler.
- MR, kuadriseps, konservatif tedavi ve artroskopi açıklandı; diğer gereksiz jargon sadeleştirildi. Tek görünür SSS ve FAQPage aynı yerel faqItems dizisini kullanıyor. Canlı article-faqs.ts değişmedi.
- Önceki onaylı muayene gözlemi korundu; yeni anekdot, kişisel deneyim veya hasta alıntısı üretilmedi. Bilimsel not açıkça revizyon önerisi; önceki inceleyen adıyla yeni inceleme/onay durumu ayrıldı. Tek zorunlu ArticleDisclaimer korundu.
- Kanonik article:images aracıyla 1200×1500 byline ve 2400×1000 kart WebP üretildi. Attention kırpımı kadını dışarıda bıraktığı için görsel incelemesinden sonra byline west, kart north seçildi. İki crop'ta da yüz korunuyor; dosyalar yaklaşık 169/172 KB. AI IPTC/XMP etiketi yeniden eklendi. Özgün PNG, üst hero ve canlı görsel eşlemeleri değişmedi. Adayın OG ve Article görseli aynı kartı kullanır.

## Doğrulama

- Astro compiler: 0 diagnostic. Bağımsız aday build: 1 rota, başarılı; tam site build/regression değildir.
- HTML: 1 H1, 9 TOC hedefi, 4/4 SSS/şema eşleşmesi, 8/8 kaynağa atıf, kırık anchor yok.
- Editorial-check: 0 aday; yerel lexicon hard/soft eşleşmesi yok.
- Structure-check: üç olumsuz çerçeve farklı sınırları açıklıyor (egzersiz başlangıç ağrısı, müdahale/ameliyat, normal kiloda kilo kaybı); korundu. Noktadan önce boşluk adayı Evidence etiketinin düz metne çıkarılmasından kaynaklanıyor; rendered HTML'de yok.
- Rendered-check: 7 uncited-source adayı, numaralı bağlantıları tanımayan kurum/yazar adı sezgisinden kaynaklanıyor. 8/8 #ref-N bağlantısı ayrı kontrol edildi. Başka rendered bulgu yok.
- Fidelity sayı/süre/aralık farklarını bildirdi; genel 8–12 hafta ve 2–3 ayın kaldırılması, yeni 112 ve atıflar kasıtlı değişikliklerdir. Kaynakça, meta ve bileşen props'ları ayrıca denetlendi. No_tracked_changes anlam eşitliği değildir; eski notun izlenen değişiklik işaretlerini arar açıklaması geçersizdir.
- Aynı metin çıkarımıyla canlı → yeni aday: ortalama 13,1 → 12,8 sözcük; standart sapma 5,5 → 4,6; ≤8 sözcük cümle payı %14 → %19. Kota değil. Eski notun farklı kapsamıyla karşılaştırılmaz.
- Tekrar: genel 8–12 hafta 3→0; genel konservatif ilk basamak/en güvenli yaklaşım 4→0 (osteoartrit kapsamlı bilgi var); MR tek başına karar değildir 3→3 yüzey (özet, ilgili gövde, bağımsız SSS).
- Tarayıcı DOM: 390×844 ve 1440×900'de yatay taşma yok. Mobilde 4/4 SSS eşleşmesi, 8 kaynak, 0 kırık görsel; Kulim Park/Manrope doğrulandı. Native screenshot dosya erişimi reddedildi; inline screenshot yanıt vermedi. Tam sayfa ekran görüntüsü incelemesi tamamlanmadı; iki WebP dosyası ayrı ayrı görsel olarak incelendi.

## Açık işler

Bu sürüme özgü Bülent Aksoy yazar onayı, bağımsız bilimsel inceleme ve bilimsel notun onayı bekliyor. Önceki üç isteğe bağlı yazar sorusu tarihsel not §6'da korunuyor; yanıt gelmeden deneyim eklenmez.

Standart kontrol-formu.html hazırlandı, gönderilmedi; yeni adayın SHA-256 değeri yanıt payload'ında var. Gönderim tarihi veya deadline üretilmedi. makale-onizleme.html eski canlı metni değil yeni adayı gösterir; önizleme varlıkları yereldir. Meta hash eşleşmesi son kontrolde doğrulanır.

Onay sonrası aday entegrasyonu, ortak SSS kaynağı, kart/byline dosyalarının public'e taşınması ve site yayın kontrolleri gerekir. Canlı rota, eski onay, static manifest, submenu eşlemeleri, shared bileşenler ve özgün PNG korunmuştur. Commit, push, deploy ve yazara gönderim yapılmadı.
