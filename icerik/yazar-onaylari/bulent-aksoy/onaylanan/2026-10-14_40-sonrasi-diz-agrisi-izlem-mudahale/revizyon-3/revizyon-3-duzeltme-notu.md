# Diz ağrısı — ikinci geniş audit sonrası düzeltmeler

14 Ekim 2026 · Revizyon `2026-10-14-audit-fix-v3`

Bu sürüm onay bekleyen adaydır. Bülent Aksoy yazar onayı veya bağımsız bilimsel inceleme olarak kaydedilmemiştir. Revizyon 2, `revizyon-2/` altında kaynak, önizleme, form ve kontrol kayıtlarıyla korunmuştur.

## Düzeltmeler

1. Ani tek taraflı güç kaybı/uyuşma, yüz düşmesi, konuşma bozukluğu ve yeni belirgin denge kaybı için acil yardım ve Türkiye'de 112 yolu eklendi. Belirtilerin geçmesinin acili ortadan kaldırmadığı açıklandı. NHS inme belirtileri kaynak 9 olarak eklendi.
2. Aynı gün diz değerlendirmesi listesinde geniş güç/denge kaybı ifadesi yerine ağrılı diz boşalması ve güvenle yük verememe kullanıldı. Akut nörolojik belirtiler ve göğüs ağrısı/nefes darlığı bu bekleme yolundan ayrıldı.
3. Cochrane 2024 egzersiz bulgusunun düşük–orta kesinliği yanında, ölçülen değişimin gündelik hayatta hissedilir büyüklükte olup olmadığının belirsizliği eklendi. Egzersizin kılavuzdaki temel yeri korundu.
4. Osteoartrit halk arasındaki kireçlenme adıyla, aerobik egzersiz yürüyüş gibi dayanıklılık çalışmalarıyla, kortikosteroid kortizon grubu ilaçla, hyalüronan hyalüronik asit adıyla açıklandı.
5. Kortikosteroid enjeksiyonunun diğer ilaç seçenekleri etkisiz/uygunsuz olduğunda veya egzersizi desteklemek için düşünülebileceği ve kısa rahatlamanın 2–10 hafta olduğu NICE NG226 ile sınırlandı. Hyalüronan için aynı kılavuzun önerisi açıklandı.
6. Görünür künyede bu revizyonun yazar onayı ve bilimsel incelemesinin beklediği belirtildi. Önceki sürümün inceleyeni tarihsel bağlamda korundu; adayın güncel inceleyeni gibi gösterilmedi. MedicalWebPage `reviewedBy` alanı bu adayda kaldırıldı. Gerçek inceleme kaydedildiğinde görünür satır ve şema birlikte geri eklenmelidir.
7. Bilimsel editör notunun başlığı inceleme bekliyor olarak işaretlendi. Yazara yönelik editoryal talimat yerine okura yönelik klinik ayrım kullanıldı; yeni hekim gözlemi veya onay üretilmedi.
8. Sonuç ve nottaki kontrol zamanı tekrarları azaltıldı; görüşmeye götürülebilecek yürüyüş, hareket ve uyku notlarıyla sonuç somutlaştırıldı.
9. Critchlow ve Lawford kaynaklarının dergi, yıl, cilt/makale ve DOI bilgileri tamamlandı.
10. Önizlemenin üst navigasyonundaki logo yolu düzeltildi. Canlı sitede bir logo hatası bulunduğu iddia edilmemektedir.

## Doğrulama

- İzole Astro önizleme projesi: başarılı derleme, 1 rota. Bu sonuç tam site regresyonu veya yayın doğrulaması değildir.
- Tarayıcı: 1 H1; 4/4 görünür SSS–FAQPage eşleşmesi; 9/9 kaynak atfı; bozuk bölüm bağlantısı yok.
- 390×844 ve 1440×900 görünüm: yatay taşma ve bozuk görsel yok. Geçici viewport ayarı geri alındı.
- Editorial-check: 0 aday. Structure-check: 3 olumsuz çerçeve ifadesi; farklı klinik ayrımları koruduğu için tutuldu (egzersiz başlangıç ağrısı, müdahale türü, normal kilo popülasyonu). Kısa cümle oranı %15; bu bir kalite veya yazarlık puanı değildir.
- Rendered-check, numaralı atıfları kurum adının metinde geçmesiyle eşleştiremediğinden 9 `uncited-source` adayı verdi. DOM'daki `#ref-1`–`#ref-9` bağlantılarıyla tamamının atıflı olduğu ayrıca doğrulandı.
- Form ve meta kaydı aynı kaynak SHA-256 değerine bağlı: `c5d3d5db21821cae8401e0b188084d246e84802ae03498b04d28b6511bf01341`.
- Canlı Astro dosyası ve paylaşılan veri/bileşenler değiştirilmedi. Form gönderilmedi; commit, push ve deploy yapılmadı.

## Yayın öncesinde kalan gerçek işler

Bu sürümün tamamı ve SSS/kaynak değişiklikleri için Bülent Aksoy yazar onayı, revizyona özgü bağımsız bilimsel inceleme ve notun onayı gerekir. Gerçek onaylardan sonra canlı kaynak–SSS verisi–görsel eşlemeleri yapılmalı, inceleyen satırı/şeması yeniden eklenmeli ve sitenin yayın kontrolleri çalıştırılmalıdır. Yazarın anonim klinik gözlem soruları yanıtlanmadıysa yeni deneyim cümlesi eklenmez. Mevcut görsellerin algoritmik üretim etiketi korunmuştur; özgün PNG ve üst hero değişmemiştir.
