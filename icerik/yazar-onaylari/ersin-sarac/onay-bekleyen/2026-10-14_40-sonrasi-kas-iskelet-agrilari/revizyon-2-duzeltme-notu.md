# İkinci audit bulguları — düzeltme kaydı

14 Ekim 2026. Kullanıcının `fix` talimatıyla yalnızca onay bekleyen paketteki beş bulgu ve bunların görünür/SSS karşılıkları düzeltildi. Önceki paket kaynak, HTML, form, meta, teknik kontrol ve yazar katkısı `revizyon-1/` altında değişmeden saklandı. Güncel form revizyon 2 ve kaynak SHA-256 ile eşleşir.

| Bulgu | Düzeltme | Kontrol |
|---|---|---|
| Güçlendirme ve 65+ düşme önerisindeki 5/5 | İki etiket 3/5 oldu; güçlü öneri ile orta kanıt kesinliği ayrı cümlelerle açıklandı. | WHO 2020 yetişkin/ileri yaş önerilerinin iki ayrı boyutu korunur; klinik bireysel egzersiz reçetesi eklenmedi. |
| Üst künyede tamamlanmış tıbbi kontrol izlenimi | Mevcut bileşenin `medicalReviewer="Yok"` seçeneğiyle tamamlanmış inceleme satırı kaldırıldı. Üstte açık `Tıbbi inceleme: Bu revizyon için bekleniyor.` satırı var. | Görünür DOM'da eski kontrol satırı yok; inceleme bekleniyor satırı var. Article şemasında `reviewedBy` yok; sahte kişi veya tarih eklenmedi. |
| Ani şiddetli ağrı ile acil servis ayrımı | Ani şiddetli ağrıda beklemeden tıbbi değerlendirme; üzerine basamama, yeni sfinkter/his kaybı veya iki bacakta yeni güçsüzlükte acil servis açıklaştırıldı. MR SSS'si de aynı ayrımı kullanır. | NHS bel/eklem ağrısı triyaj ayrımı. Ham kullanıcı yanıtı aynen korundu; onun genel acil değerlendirme ifadesinin kaynaklarla açıklaştırıldığı katkı kaydına eklendi. Bu yeni parafraz yazar/tıbbi onayını bekler. |
| Muayenenin nedeni kesin belirlediği izlenimi | Özet `Muayene ... olası nedenlerini ayırt etmeye yardımcı olur` olarak değiştirildi. | Tanı kesinliği düşürüldü; kişisel tanı veya yeni sonuç iddiası eklenmedi. |
| Open Graph varsayılan görseli | `SiteLayout image` mevcut byline görseliyle bağlandı. | OG ve Article.image aynı URL. Üst hero, kart görseli, görsel dosyaları ve ortak bileşenler değişmedi. |

## Kaynak ve onay sınırı

- Kaynaklar: WHO 2020 fiziksel aktivite kılavuzu (yetişkinler ve 65+), NHS bel ağrısı ve eklem ağrısı sayfaları; ikinci audit'te doğrudan metin/PDF ve resmî öneri metinleri doğrulandı.
- Yazarın ham yanıtı `yazar-katkisi.json originalResponse` alanında değişmedi. Özgün yazar yanıt tarihi hâlâ ayrıca verilmemiştir; alınma tarihi 14 Ekim'dir. Tıbbi kaynaklarla yönlendirme düzeyinin açıklaştırılması düzenlenmiş sürümün yeniden yazar onayını gerektirir; onay verildiği varsayılmadı.
- İlk rapordaki iddia sayımı ve bulgular revizyon 1 içindir. Son yapı ve anlam farkları `yapi-sonra.txt` / `fidelity-kontrol.txt` içinde. Yeni acil servis cümlesinin hareket bölümünde de olması, katkının tek başına okunduğunda güvenlik sınırını koruması içindir.

## Doğrulama

- Ayrı Astro projesi yeniden derlendi: başarılı, 2 sayfa (taslak ve başlangıç kopyası).
- Tek H1, 5/5 görünür FAQ–FAQPage eşleşmesi, 9 geçerli TOC hedefi, yinelenmeyen kimlikler.
- `upperReviewPending`, `oldReviewLabelHidden`, `ogSchemaImageParity`: true.
- Tarayıcıda yeni kaynak yüklenerek bekleyen inceleme satırı, eski kontrol satırının yokluğu ve yeni OG görseli doğrulandı. 390 piksel genişlikte documentWidth 375: yatay taşma yok.
- `editorial-check`: 0 aday. `rendered-check` kalanları: tamamlanmış inceleme olmayan bekleme satırı, numaralı atıfla kullanılan kaynaklar ve bağlama özel sınırlar/RedFlagBox metni. Bunlar onay veya kaynak eksikliği gibi yorumlanmadı.
- Mevcut yayın rotasının SHA-256 değeri başlangıçla aynı. Ortak FAQ, manifest, stil profili ve bileşenler değiştirilmedi. Tam site CI bu dar paket turunda tekrar çalıştırılmadı; önceki tam site kontrolü yeni yazar/tıbbi onayı değildir.
- Paket `pending-author-approval` / `pending-revision-review`. Commit, push, deploy ve yayın yetkisi kullanılmadı.
