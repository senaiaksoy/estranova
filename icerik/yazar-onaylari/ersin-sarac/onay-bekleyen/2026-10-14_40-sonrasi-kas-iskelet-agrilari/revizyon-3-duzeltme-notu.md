# Revizyon 3 — yüksek öncelikli düzeltmeler

14 Ekim 2026. Geniş audit'in (`makale-kaynak.astro`, revizyon 2) üç yüksek öncelikli maddesi düzeltildi. Revizyon 2 kopyası `revizyon-2/` altında saklandı.

| Madde | Düzeltme | Kontrol |
|---|---|---|
| Byline görseli yatay (1800×999) | Yeni 4:5 görsel üretildi (GPT Image 2.5, 1792×2240) ve `images/library/editorial/kas-iskelet-yuruyus-byline.webp` olarak 1200×1500 WebP'ye çevrildi. `ArticleAuthorBlock` bu dosyayı kullanıyor; alt metin güncellendi. | Dosya 1200×1500, WebP. Renkli saç, kapalı kıyafet, klinik ortam ve alkol/sigara yok. |
| OG/şema görseli byline ile aynı dosyaydı | OG ve `Article.image` yatay `introspective-khaki-wrap.webp` olarak kaldı; byline'dan ayrıldı. | Derlenen sayfada OG görseli `introspective-khaki-wrap` ile eşleşiyor. |
| Kanıt etiketleri abartılı | Satır 118: 4→3 (orta). Satır 127 (tek gözlemsel kohort, Greendale): 3→2 (sınırlı). Satır 167 ("düşünülebilir" ifadesi): 4→3 (orta). | Derlenen sayfada etiket dağılımı: 2 adet 2/5, 4 adet 3/5, 3 adet 4/5. |

## Doğrulama

- `article-drafts/kas-iskelet-preview2` içine kopyalanıp `astro build` çalıştırıldı: başarılı, 2 sayfa.
- Derlenen HTML'de byline `kas-iskelet-yuruyus-byline.webp` referansı var.
- Kaynak SHA-256 değişti: `4c869345dbcc5bcad54c50f0d4f948a83084ab480befedd6a4dacf0976d0da90`. `meta.json` revizyon 3 olarak güncellendi (`revision3Changes` alanında değişiklik listesi).

## Bilinen eksikler (bu turda yapılmadı)

- `kontrol-formu.html` ve `teknik-kontrol.json` hâlâ revizyon 2 hash'ini (`ab8e010f…`) taşıyor. Yazar formu yeni hash'e bağlı olmalı; yeniden üretilmeden onaya gönderilmemeli.
- `makale.html` önizlemesi eski kaynakla üretildi; yeniden üretilmedi.
- Kanıt etiketi değişiklikleri (2/5, 3/5 ve 4/5 kararları) benim kalibrasyonum; tıbbi inceleme ile teyit edilmeli.
- Kaynaklar [1]–[5] çevrimiçi doğrulanmadı.
- Orta öncelikli audit maddeleri (tekrarlanan kırmızı bayrak metni, belirsiz 189. satır, `medicalReviewer="Yok"` prop'u) bu turda kapsam dışı bırakıldı.
- Canlı `src/pages/`, `public/` ve ortak bileşenlere dokunulmadı; görsel entegrasyonu yayın onayından sonra yapılacak.

## Onay sınırı

Paket hâlâ `pending-author-approval` / `pending-revision-review`. `releaseAuthorized: false`. Commit, push, deploy ve yayın yapılmadı.
