# Revizyon 5 — kaynak düzeltmeleri

14 Ekim 2026. `kaynak-dogrulama-2026-10-14.md` taramasındaki bulgular işlendi. Revizyon 4 kopyası `revizyon-4/` altında; SHA-256 (`2484356e…a538a`) kayıtla birebir eşleşti. Revizyon 5 iki adımda yapıldı (önce NG59 tarihi, sonra kırmızı bayrak kaynağı); ara sürüm gönderilmediği ve commit edilmediği için ayrı kopya alınmadı.

| Madde | Düzeltme |
|---|---|
| Kaynak [2] tarihi | "NICE NG59, 2016; güncelleme 2020" → "NICE NG59, 2016; son güncelleme 2026". NICE güncelleme bilgisi: 29 Temmuz 2026 (psikolojik terapi önerileri geri çekildi). Makalenin dayandığı egzersiz (1.2.2) ve görüntüleme (1.1.4–1.1.6) önerileri değişmedi. |
| Kırmızı bayrak kaynağı | "kilo kaybı, ateş, gece terlemesi veya kanser öyküsü" maddesi [6, 7] ile desteklenmiyordu. Kaynak [8] eklendi: Verhagen ve ark., Eur Spine J 2016;25(9):2788–802, doi:10.1007/s00586-016-4684-0 (açık erişim, CC BY 4.0). 16 kılavuzun derlemesi: kanser öyküsü 16/16, istemsiz kilo kaybı 13/16, enfeksiyon için ateş 12 kılavuzda. "Gece terlemesi" derlemede geçmediği için maddeden çıkarıldı. Kutu dipnotu [6, 7, 8] oldu. |
| [3] kanıt düzeyi | 2/5 korundu. Tek gözlemsel kohort (SWAN); metin bulguyu "bir çalışmada gözlenmiştir" diye veriyor, 2/5 bu çerçeveyle tutarlı. |
| NHS (6, 7) için 4/5 | Dr. Aksoy kararıyla korundu. |

Aynı değişiklikler `duzenlenmis-metin.md` içine de işlendi. `modifiedDate` zaten 14 Ekim 2026.

Not: NICE CKS'nin bel ağrısı sayfası yalnızca İngiltere'den açılıyor; Finucane 2020 (IFOMPT çerçevesi) tam metni otomatik erişime kapalı. Bu yüzden açık erişimli Verhagen 2016 seçildi. Derleme, kırmızı bayrakların tanısal doğruluğuna dair kanıtın zayıf olduğunu da söylüyor; kutudaki "Bu bulgular tanı koymaz" ibaresi bununla uyumlu.

## Doğrulama

- Yeni kaynak hash'i: `83282c62d4cb936e2669ea70476bb4cb6f851eaf4abebb89a6439838383a2c93`. `meta.json` revizyon 5.
- `scripts/check-editorial-lexicon.mjs` → 0 bulgu.
- `article-drafts/kas-iskelet-preview2` içinde `astro build` başarılı: 1 H1, 1 FAQ şeması, kanıt dağılımı 2/5 ×2, 3/5 ×4, 4/5 ×3 (değişmedi), kaynak listesi 8 madde, "terleme" geçişi yok, dipnot [6, 7, 8].

## Açık kalanlar

- `kontrol-formu.html`, `teknik-kontrol.json`, `makale.html` ve `rendered-kontrol.txt` hâlâ eski sürüme bağlı; yazar onayı öncesi revizyon 5 hash'iyle yeniden üretilmeli.
- Tıbbi inceleme (`medicalReviewer: pending`) henüz yapılmadı.

Paket hâlâ onay bekliyor; `releaseAuthorized: false`. Commit, push ve yayın yapılmadı.
