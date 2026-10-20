# Perimenopozda Kaygı Artışı — geniş audit, humanize ve düzeltme turu

- Tarih: 20 Ekim 2026. Başlangıç: `92cc2713` (sözlü onay kaydından sonraki durum).
- Kapsam: makale gövdesi, özet, SSS (4 soru), başlık/açıklama/alt metin, TOC. Yeni tıbbi iddia, kaynak, deneyim veya alıntı eklenmedi.
- Onay durumu: bu turun metin değişiklikleri sözlü onaydan sonra yapıldı; yeni editör ve tıbbi onay bekleniyor.

## Düzeltmeler

- `neden-simdi`: "bu seyirde yer tutar" → "bunda payı olabilir" (jargon ve kesinlik); "şunu başta söyleyelim" tabelası kaldırıldı, tesellinin kendisi öne alındı.
- `ne-zaman-destek`: lede'e tek, adı konmuş duygu cümlesi eklendi ("Kaygıdan söz etmek bazen mahcup eder.").
- `kisa-hatirlatma`: bozuk cümle ("ilaç ve takviyelerle … neyin yardımcı olduğunu ekleyin") düzeltildi; tek yoğun paragraf ikiye bölündü.
- SSS 4 sorusu doğal Türkçeye çevrildi: "Hangi durumda kaygıyı yoğunluğa bağlayıp geçiştirmemek gerekir?" Yanıt değişmedi; şema aynı kaynaktan üretildiği için eşleşiyor.
- `modifiedDate` 20 Ekim 2026 olarak güncellendi.

## Bilerek dokunulmayanlar ve açık nokta

- Özet "yeni başlayan veya geçmeyen" göğüs ağrısı/baskı derken `bedensel-alarm` gövdesi "aniden başlayan ve geçmeyen" için acil yardım ister. İki ifade çelişmiyor (özet: bekletmeden değerlendirme; gövde: acil), ama eşik farkı var. Güvenlik metni olduğu için tek taraflı değiştirilmedi; karar Dr. Aksoy'da.
- Hekim notu, sorumluluk reddi, Evidence düzeyleri ve kaynak izi değişmedi.

## Doğrulama

- `check-fidelity` (92cc2713 metnine karşı): izlenen sayı/birim/atıf farkı yok. 4590cffb tabanına karşı tek fark önceki turdaki `30` dakika talimatının çıkarılması.
- `structure-check`: 76 cümle, ortalama 13,9 sözcük (sd 5,2), ≤8 sözcüklü cümle %17; `family-*` uyarısı 0; kalan 4 `short-closer` ve claim sayımları gerekçeyle kaldı.
- `editorial-check`: 1 aday (SSS 1 ve 2'deki farklı tanı sınırları), haklı.
- `build:ci` başarılı (139 rota, 160 HTML SEO denetimi); `rendered-check` 0 aday.
