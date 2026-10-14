# Revizyon 7 — Ersin Saraç'ın denge katkısı

14 Ekim 2026. Revizyon 6 kopyası `revizyon-6/` altında; SHA-256 (`f6559071…dc603`) kayıtla eşleşti. Yeni hash: `87df42e7f4d53896eb13bf1428c27831509f21f736dafd4079909a15bf6eeb7b`.

## Katkı

Revizyon 6 notunda önerilen soru ("Denge kaygısıyla gelen 40+ bir kadına ilk görüşmede hangi günlük işi sorarak başlıyorsunuz?") için KC'nin bu sohbette ilettiği yanıt. Ham metin ve köken `yazar-katkisi-2.json` içinde; Ersin'in özgün yanıt tarihi verilmediği için `null`, alınma tarihi 14 Ekim 2026.

## Uyarlama (özgün → makale)

| Özgün | Makalede | Not |
|---|---|---|
| İlk olarak çok basit bir şey sorarım: “Pantolonunuzu…?” | Denge kaygısıyla gelen birine ilk olarak çok basit bir şey sorarım: “Pantolonunuzu…?” | Bağlam eklendi, soru birebir |
| Çünkü tek ayak üzerinde durmak, günlük yaşamda dengeyi değerlendirmek için güzel bir örnektir. | Tek ayak üzerinde durmak, günlük yaşamda dengeyi anlamak için güzel bir örnektir. | "Çünkü" düştü; "değerlendirmek" → "anlamak" (sayfadaki tekrar nedeniyle) |
| …zorlanıp zorlanmadığını, …tökezleme veya düşme yaşayıp yaşamadığını sorarım. | …zorlanıp zorlanmadığınızı, …tökezleyip tökezlemediğinizi ya da düşüp düşmediğinizi sorarım. | Okura "siz" hitabı |
| Burada önemli olan, kişinin yalnızca dengesinden endişe etmesiyle gerçekten denge kaybı yaşaması arasındaki farkı anlamaktır. | Aradığım şey, dengeden endişe etmek ile gerçekten denge kaybı yaşamak arasındaki farktır. | Anlam aynı |
| Kas gücündeki azalma ve hareketsizlik önemli olabilir, ancak özellikle yeni başlayan veya giderek artan dengesizliği yalnızca yaşa ya da menopoza bağlamam. Önce altında başka bir sağlık sorunu olup olmadığını değerlendiririm. | Kas gücündeki azalma ve hareketsizlik önemli olabilir. Ama özellikle yeni başlayan ya da giderek artan dengesizliği yalnızca yaşa veya menopoza bağlamam; önce altında başka bir sağlık sorunu olup olmadığını değerlendiririm. | Cümle bölündü; anlam ve kesinlik aynı |

## Yapı

- `denge-guven` bölümünde eski genel paragraf ("Dengeyle ilgili bir güçlük, yalnızca ağrılı bölgeye bakılarak anlaşılmayabilir…") Ersin'in iki paragrafıyla değiştirildi. Sandalyeden kalkma örneği hareket bölümünde duruyor.
- Son paragraftaki "Yakın zamanda düştüyseniz" ifadesi çıktı; düşme sorusu artık Ersin'in sorularında.
- Güvenlik: okur pantolon sorusunu evde kendi üzerinde denemesin diye son cümle "Pantolon sorusunun yanıtını öğrenmek için kendinizi evde sınamanız gerekmez; düşme tehlikesine girmeden, bildiğiniz kadarını anlatın." oldu. Önceki "düşme tehlikesine sokmanız gerekmez" uyarısının anlamı korunuyor.
- Yeni tıbbi iddia, sayı veya atıf yok. Kanıt etiketleri ve SSS değişmedi.

## Doğrulama

- Lexicon 0; `editorial-check` 0 aday; `structure-check` yalnızca kısa kapanış (gövdede 5 → 4) ve çıkarıcı kaynaklı noktalama adayı.
- `check-fidelity` (rev 6 → rev 7): sayı ve atıf farkı yok.
- Önizleme derlemesi: 1 H1, 1 FAQPage, Evidence 2/5 ×2, 3/5 ×1, 4/5 ×2.

## Açık işler

- Yazar formunun 3. bölümünde iki yanıt ve kapanış güvence cümlesi özgün/uyarlanmış yan yana gösteriliyor; zorunlu `katkiAktarimi` sorusu eklendi.
- Kontrol formu, `teknik-kontrol.json` ve `makale.html` revizyon 7 hash'iyle yeniden üretildi (14 Ekim 2026); form gönderilmedi.
- Tıbbi inceleme bekleniyor.

Revizyon 5–7 metni `592bf5e8` ile commit edildi (push yok). Form dosyaları bu commit'ten sonra üretildi. Yayın yapılmadı; `releaseAuthorized: false`.
