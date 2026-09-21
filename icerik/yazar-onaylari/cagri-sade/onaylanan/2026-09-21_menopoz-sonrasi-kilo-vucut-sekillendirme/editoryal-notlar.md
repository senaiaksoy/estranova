# Editöryal revizyon notları

## Durum

- Statü: `approved-awaiting-publication`
- Yazar: Op. Dr. Çağrı Sade
- Makale türü: `clinical-guide`
- Yazar onayı: 21 Eylül 2026'da kullanıcı tarafından teyit edildi.
- Tıbbi onay: Doç. Dr. Senai Aksoy tarafından tamamlandı; 21 Eylül 2026'da kullanıcı tarafından teyit edildi.
- Önerilen rota: `/beden-yakinlik/menopoz-sonrasi-kilo-vucut-sekillendirme/`
- Canlı rota, RSS/static manifest, hub/arşiv ve `article-approvals.ts` kaydı oluşturulmadı.
- Özel makale görseli hazırlandı. Dikey ve yatay iki ayrı kaynak, kanonik `scripts/make-article-images.mjs` akışıyla byline ve kart formatlarına dönüştürüldü. Üst hero değiştirilmedi.
- Byline: `/images/library/editorial/cagri-sade-menopoz-sonrasi-kilo-vucut-sekillendirme-byline.webp` (1200×1500).
- Kart: `/images/library/editorial/cagri-sade-menopoz-sonrasi-kilo-vucut-sekillendirme.webp` (2400×1000).
- Taslakta `ArticleAuthorBlock` ve schema görseli bağlandı. Yazar onayı gelmeden `articleCardImageByRoute` veya hub/arşiv kaydı eklenmedi.

## Kaynak metinden korunan ana fikirler

- Tartıdaki kilo ile vücut kompozisyonu ve yağ dağılımı birbirinden ayrıldı.
- Yaş alma, hormonal geçiş, kas kaybı, hareket, uyku ve beslenmenin birlikte rol oynadığı çerçeve korundu.
- Liposuction'ın kilo verme veya metabolik hastalık tedavisi olmadığı netleştirildi.
- Lokalize cilt altı yağ, visseral yağ, deri fazlalığı ve karın duvarı gevşekliği ayrı karar başlıklarına dönüştürüldü.

## Değiştirilen veya çıkarılan iddialar

- Genel kilo niyeti, sitedeki mevcut `/zamansiz-yasam/kilo-artisi-menopoz/` rehberiyle çakışmaması için plastik cerrahi kararına daraltıldı.
- “Lazer liposuction kontrollü yanık oluşturur” ifadesi, hasta dostu ve güvenli açıklama sağlamadığı için kullanılmadı.
- VASER/ultrason yardımlı liposuction için genel “hızlı iyileşme” iddiası kaldırıldı.
- “Dört hafta korse” ve “on günde sosyal hayata dönüş” sabit takvimleri kişi ve işlem kapsamına göre değiştiği için vaat olarak kullanılmadı.
- İşlem seçimi için zorunlu ortak branş formülü kurulmadı; ilgili tıbbi değerlendirme ihtiyaca göre çerçevelendi.

## Persona ve şablon kararları

- Çağrı Sade'nin “biz + siz” zemini, sınırlı “ben” danışman sesi ve “yapılabilir mi / size uygun mu” ayrımı kullanıldı.
- Kısa klinik soru-diyalog anları özet ve gövdeye dağıtıldı; “biz önce ayırırız” karar ritmi güçlendirildi.
- Kısa paragraf ritmi, `Sonuç Olarak` kapanışı ve sade karar listesi korundu.
- Kaynaklar iddialara yakın numaralı atıflarla bağlandı; görünür SSS ile `FAQPage` aynı `faqItems` kaynağından üretildi.
- Liposuction'ın metabolik sınırları OMA bildirisine; hasta seçimi ve doku sınırları güncel klinik özete; teknik üstünlük ve komplikasyon iddiaları 2024 meta-analizi ile 2026 güncel literatür değerlendirmesine bağlandı.
- Kaynak 6'nın yazar künyesi PubMed kaydıyla eşleştirilerek Bartow, Szymanski ve Raggio olarak düzeltildi.
- Başlık, açıklama ve anahtar kelimeler genel menopoz-kilo niyetinden ayrılarak “liposuction size uygun mu?” karar niyetine daraltıldı.

## Teknik kontrol

- Astro derleyici ayrıştırması: 0 tanılama hatası.
- Tam depo `astro check` mevcut, bu taslaktan bağımsız eski TypeScript/Astro hataları nedeniyle temiz değil.
- Taslak dosyası onay paketi içinde tutuldu; `src/pages/` altındaki geçici kontrol kopyası kaldırıldı.
