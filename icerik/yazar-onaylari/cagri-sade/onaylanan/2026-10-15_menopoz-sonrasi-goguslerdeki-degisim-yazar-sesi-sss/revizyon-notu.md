# Revizyon notu — yazar sesi ve SSS (15 Ekim 2026, onay bekliyor)

Taban: `onay-tabani.astro` = 15 Ekim 2026'da onaylanan sürüm (`onaylanan/2026-10-15_menopoz-sonrasi-goguslerdeki-degisim-audit-humanize/site-kaynak.astro`). Güncel metin: `site-kaynak.astro` (SHA-256 `e3a76669…be01a`).

## Muayene odası gözlemleri (yeni uydurma yok)

Tekil hasta anekdotu eklenmedi; bu yalnızca Çağrı Sade'nin kendisinden gelebilir. Bunun yerine 29 Temmuz 2026'da yazar onayıyla yayımlanan özgün metindeki dört birleşik muayene gözlemi, kısaltılarak geri getirildi:

1. Açılış: kadınların değişimi anlatırken duraksaması, konunun "geçici bir estetik kaygı" diye bir kenara bırakılması.
2. Doku bölümü: sarkmanın yalnız cilt yüzeyinde değil derin destek dokularında da yaşandığını vurgulaması. (Özgün metindeki "meme altı kıvrımı / meme başı aşağı yönelir" ayrıntısı kaynaksız olduğu için alınmadı.)
3. Cerrahi seçenekler: "ne kadar büyütebiliriz" yerine "bu beden bu hacmi ve duruşu önümüzdeki on yılda da rahat taşıyabilir mi?" ölçütü.
4. Yağ transferi: son yıllarda bu yöntemi soranların arttığı gözlemi.

## "Biz" tonu

Çağrı Sade erkek hekim olduğu için (profile.yaml: yaşıt yazar pozu yasak) göğüs deneyimini paylaşan "biz" kullanılmadı. "Biz" hekim–okur ortaklığı ve genel insan deneyimi olarak kuruldu: "bedenimizle kurduğumuz ilişki… günlük konforumuz", "birlikte konuşalım", "birlikte nereden başlayacağımızı".

## SSS

Gövdede zaten yanıtlanan üç soru (egzersiz, yağ enjeksiyonu–mamografi, protez şartı) çıkarıldı. Yeni sorular:

- Dikleştirme sonrası yeniden sarkma — ASPS [3]: gebelik, kilo dalgalanması, yaşlanma, yerçekimi meme şeklini zamanla değiştirir.
- Silikon protezde sessiz yırtılma — FDA [5]: MR en etkili yöntem, belirtisizlerde ultrason kabul edilebilir; salin protezde yırtılma sönmeyle fark edilir; süre uzadıkça komplikasyon olasılığı artar. FDA sayfası görüntüleme takvimi vermediği için takvim yazılmadı.
- Yaş sorusu değişmedi.

SSS sayısı 4 → 3. Görünür SSS ile FAQPage 3/3 eşleşiyor.

### SSS 1–2 yanıtlarının güncellenmesi (KC'nin ilettiği metin)

KC, iki yeni SSS için yanıt metni iletti; yanıtlar birebir alındı (yalnızca kopyalama artıkları ve kaynak simgeleri temizlendi). Doğrulama:

- **SSS 1 (yeniden sarkma):** ASPS sonuç sayfası destekliyor — sonuç uzun süreli, yaşlanma ve yerçekimiyle değişim sürer, gebelik iyileşmeyi azaltabilir, kiloyu korumak sonucu uzatır. Kaynak 8 olarak eklendi.
- **SSS 2 (sessiz yırtılma):** FDA 29 Eylül 2020 etiketleme rehberi (PDF metni okundu) birebir destekliyor: belirtisizlerde ilk ultrason veya MR 5–6. yılda, sonra 2–3 yılda bir; belirti ya da belirsiz ultrasonda MR. Kaynak 9 olarak eklendi.
- **Kaynakta birebir bulunamayan iki ifade (KC'ye bildirildi, değiştirilmedi):** "yırtılmaların önemli bir bölümü hiçbir belirti vermeden gelişir" (FDA metinleri sessiz yırtılmayı tanımlıyor ama oran vermiyor) ve "özellikle kontrastsız MR" (FDA yalnızca "MR" diyor; silikon protokolü klinik pratikte kontrastsızdır, ama kaynakta yazmıyor).

## Kontroller

compliance, lexicon, yayın bütünlüğü, src TypeScript, build, SEO (160 sayfa) geçti; kırık anchor yok; tek H1; soru H2 1.

Yazar onayı ve tıbbi onay bekleniyor. Onaylanana kadar arşiv (`icerik/yayinlanmis-makaleler/`) 15 Ekim onaylı sürümde kalır. Commit/push yapılmadı.
