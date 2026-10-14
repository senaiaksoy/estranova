# Revizyon 4 — orta öncelikli düzeltmeler

14 Ekim 2026. Revizyon 3'ten sonra geniş audit'in orta öncelikli maddeleri yapıldı. Revizyon 3 kopyası `revizyon-3/` altında. Bu kopya, revizyon 4 düzenlemeleri geri alınarak yeniden oluşturuldu ve SHA-256 (`4c869345…0da90`) kayıtla birebir eşleşti.

| Madde | Düzeltme |
|---|---|
| Kırmızı bayrak tekrarı | Hareket bölümündeki acil servis listesi kaldırıldı; yerine "acil belirtiler için aşağıdaki kutuya bakın" yönlendirmesi kondu. "Ani ve şiddetli ağrıda beklemeden tıbbi değerlendirme" cümlesi korundu. Tam liste `RedFlagBox` ve SSS 4'te kalıyor. |
| Belirsiz cümle | "Türkiye'de yeni ağrıya…" cümlesi "Ağrıya travma eşlik ediyorsa ya da aşağıdaki belirtilerden biri varsa önce tıbbi değerlendirme alın." olarak yeniden yazıldı. |
| `medicalReviewer="Yok"` | Prop bilerek bırakıldı: `ArticleAuthorBlock` bu değeri inceleme satırını gizlemek için kullanıyor. Açıklayıcı Astro yorumu eklendi. Varsayılan prop'a bırakılırsa bileşen yanlış bir inceleyici adı gösterirdi. |

## Doğrulama

- `article-drafts/kas-iskelet-preview2` içinde `astro build` başarılı.
- Derlenen sayfada 1 H1, 1 FAQ şeması, kanıt dağılımı 2/5 ×2, 3/5 ×4, 4/5 ×3; yönlendirme cümlesi 1 kez; "Türkiye" geçişi kalmadı.

## İnceleme durumu

- `meta.json` revizyon 4'e çekildi. `medicalReviewer`: `pending`, atanan: Dr. Senai Aksoy (inceleme henüz yapılmadı). İnceleyici adı ve tarihi, inceleme tamamlanınca yazılacak.
- Kanıt etiketlerinin son kararı ve kaynak [1]–[5] doğrulaması inceleme sırasında yapılacak.

## Açık kalanlar

- `kontrol-formu.html` ve `teknik-kontrol.json` hâlâ eski hash'lere bağlı. Yazar onayı öncesi yeniden üretilmeli.
- `makale.html` önizlemesi eski kaynakla duruyor.
- Canlı site ve ortak bileşenlere dokunulmadı.

Paket hâlâ onay bekliyor; `releaseAuthorized: false`. Commit, push ve yayın yapılmadı.
