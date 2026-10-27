# NAD+ hücresel yaşlanma — yazar (byline) görseli

Tarih: 27 Ekim 2026. Kapsam: yalnızca `ArticleAuthorBlock` görseli. Hub kartı görseli (`bp-nad-plus.webp`) ve üst hero (parent hub) değişmedi.

## Neden yenilendi

İlk sürüm (PR #78), kart görselinden 800×1000 kırpılıp 1200×1500'e büyütülmüştü: ad-hoc `sharp` komutuyla yapıldığı için AGENTS.md'deki kanonik akışa (`npm run article:images`) uymuyordu ve IPTC yapay zekâ etiketi taşımıyordu. Bu tur ikisini de düzeltir.

## Üretim

- Kaynak: Higgsfield `gpt_image_2_5`, 3:4 dikey, tek üretim; 880×1168 PNG. Kurgusal kişi, gerçek hasta veya hekim temsili değil; ürün, takviye, metin ve logo yok.
- Prompt özeti: yaklaşık 52 yaşında kurgusal kadın, doğal cilt, saç topuz, adaçayı yeşili ipek gömlek, cam tavanlı kış bahçesinde beyaz hasır koltukta, elinde küçük bir cam çay bardağı, dalgın bakış, sıcak doğal ışık, eller ve yüz tam görünür.
- Büyütme: Higgsfield `bytedance_image_upscale`, 2K; 2160×2864. Sonuç görsel olarak incelendi.
- Kırpım: `npm run article:images -- --slug=nad-plus-hucresel-yaslanma --byline-src=<2K png> --card-src=bp-nad-plus.webp --outdir=<geçici klasör>`; yalnızca `-byline.webp` (1200×1500, varsayılan attention) alındı. Kart çıktısı kullanılmadı.
- Etiket: `npm run images:tag-ai` ile IPTC `trainedAlgorithmicMedia` eklendi; `--check` geçti.

## Kaynak notu

Kaynak PNG'ler repoda tutulmaz. İki Higgsfield işi: üretim `e9cb0390-c908-4ac8-a11c-5312fdf16630`, büyütme `82b86cfe-9b3b-4f56-877f-d2b88dae0c2c`.
