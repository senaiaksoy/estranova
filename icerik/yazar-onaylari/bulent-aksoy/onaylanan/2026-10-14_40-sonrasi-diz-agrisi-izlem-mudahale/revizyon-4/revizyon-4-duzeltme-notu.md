# Revizyon 4 — son audit bulgularının düzeltmesi

14 Ekim 2026. Önceki aday kaynak, meta, önizleme, form ve kontrolleri `revizyon-3/` altında korunmuştur.

1. İzlem bölümündeki geniş “ani güç kaybı” ifadesi kaldırıldı. Ani tek taraflı güç kaybı/uyuşma için acil yardım ve 112 yönlendirmesi, kaynak 9/8 atıfları ve acil belirtiler bölüm bağlantısı eklendi.
2. Yalnızca aday önizlemesinde sürüm bandına sabit navigasyondan aşağıda başlayacak üst boşluk verildi. Mobil ve masaüstünde sayfa başında bandın örtülmediği DOM ve görsel kontrolle doğrulandı. Yeniden yükleme sırasında tarayıcının eski kaydırma konumunu koruması ayrıca kontrol edildi.
3. Sonuçtaki zorunlu basamak çağrışımı kaldırıldı: “Tedaviye yanıt, mevcut planın sürdürülmesine veya değiştirilmesine yön verir.”
4. İlk edit notunun güncel kayıt bağlantısı revizyon 4'e çevrildi.

## Kontroller ve durum

- İzole Astro önizlemesi başarıyla derlendi; tam site regresyonu veya yayın doğrulaması değildir.
- Tek H1, 4/4 SSS–FAQPage eşleşmesi, 9/9 atıflı kaynak; bozuk bölüm bağlantısı/görsel yok.
- 390×844 ve 1440×900 ölçülerde yatay taşma yok, sayfa başındaki aday bandı görünür. Mobil kanıt: `revizyon-4-mobil.png`. Geçici viewport geri alındı.
- Kaynak hash'i meta ve kontrol formunda aynı: `05e153f4fa69b9ba7f8b8356bdebc21d1be3fabb81fbd650df3675c328b6bd3c`.
- Otomatik tarama ayrıntıları `kontrol-sonuclari.json` içinde. Rendered-check'in 9 kaynak için ad eşleşmesi uyarısı numaralı atıf bağlantılarıyla ayrıca denetlendi; atıflar eksik değil.
- Yazar onayı ve bağımsız bilimsel inceleme halen bekleniyor. Form gönderilmedi. Gerçek inceleme sonrasında görünür inceleyen ve MedicalWebPage reviewedBy birlikte eklenmelidir.
- Canlı rota, paylaşılan SSS verisi/bileşenler ve önceki onay kaydı değiştirilmedi. Commit/push/deploy yapılmadı.
