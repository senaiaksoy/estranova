# NAD+ takviyesi — özel makale görselleri

Tarih: 13 Ekim 2026. Kullanıcı talebi: “makaleye özel ayrı bir görsel üret.”

Üretim: yerleşik `image_gen` aracı; iki bağımsız kaynak, `photorealistic-natural`. Kurgusal kişi; hekim veya gerçek hasta temsili değil. Takviye kullanımını veya klinik yararı göstermez.

## Dosyalar ve bağlama

- `public/images/library/editorial/nad-plus-takviyesi-byline.webp`: 1200×1500, makale içi `ArticleAuthorBlock`.
- `public/images/library/editorial/nad-plus-takviyesi.webp`: 2400×1000, `articleCardImageByRoute`, OG ve makale şeması.
- Üst `SubmenuHero` parent görselini kullanmaya devam eder; yeni makale hero girdisi eklenmedi.

İki dosya `npm run article:images -- --slug=nad-plus-takviyesi --byline-src=... --card-src=...` ile üretildi; varsayılan attention kırpımı kullanıldı. Kaynaklar Codex generated_images klasöründe korundu. Her iki çıktı görsel olarak incelendi: baş ve eller bütünüyle görünür, metin/ürün/tedavi vaadi yok. AI kaynak metaverisi `images:tag-ai` ile eklendi.

## Kaynaklar

Doğrulama: `build:ci` çıkış kodu 0; 180 dosyada compliance, strict/template audit ve 160 sayfada SEO audit geçti. Derlenmiş makalede yeni byline, OG/Twitter ve Article/MedicalWebPage görsel yolları; parent hero ayrıca doğrulandı. Kart eşlemesi kaynak kodunda doğrulandı; mevcut hub arşivi görselsiz metin indeksi olduğundan NAD+ satırında kart görseli render edilmiyor. AI metaveri kontrolü iki dosyada geçti. Tarayıcıdaki sayfa görünümü bu adımda incelenmedi; çıktı görselleri doğrudan incelendi. Commit, push ve deploy yapılmadı.

- Dikey: `C:/Users/KC3/.codex/generated_images/01a13318-b1af-71c2-8c38-bc3ee2712e4e/exec-326c7484-b0bb-44c1-bbcc-21c6f70c110c.png`
- Yatay: `C:/Users/KC3/.codex/generated_images/01a13318-b1af-71c2-8c38-bc3ee2712e4e/exec-f451c0ec-465c-4c25-a543-da731de5509e.png`

## Nihai üretim komutları

### Dikey

Create a photorealistic premium Turkish women's health magazine editorial photograph, portrait composition 4:5. A fictional woman aged about 52, natural unretouched skin, shoulder length dark hair with subtle silver strands, wearing a relaxed cream linen shirt, sits beside a window in a quiet contemporary home. She thoughtfully reviews a plain open notebook with her hands comfortably visible on a pale wooden table, a simple glass of water nearby. Calm curiosity and personal decision making, not a medical treatment scene. Soft natural daylight, cream interior, a very subtle muted pink detail, warm realistic colors, elegant understated photography. Show her complete head with generous margin above and around it, head and hands in central safe area for 4:5 crop. No text, no logos, no pills, supplements, bottles, molecular graphics, syringes, IV equipment, lab coat, glamour retouching or rejuvenation claim. It illustrates an evidence-conscious NAD+ supplement article without depicting an effect of supplementation.

### Yatay

Create a photorealistic premium Turkish women's health magazine editorial photograph, extra wide landscape composition approximately 2.4:1. A fictional woman aged about 52, natural unretouched skin, shoulder length dark hair with subtle silver strands, wearing a relaxed cream linen shirt, sits beside a window in a quiet contemporary home. She thoughtfully reviews a plain open notebook, hands comfortably visible on a pale wooden table with a simple glass of water nearby. Calm curiosity and personal decision making, not a medical treatment scene. Soft natural daylight, cream interior, subtle muted pink detail, warm realistic colors. Frame the woman waist up in the center, complete head and both hands inside the middle horizontal band, generous surrounding space; camera far enough back to preserve head and hands in an extra wide editorial crop. No text, logos, pills, supplements, bottles, molecular graphics, syringes, IV equipment, lab coat, glamour retouching or rejuvenation claim. It illustrates an evidence-conscious NAD+ supplement article without depicting an effect of supplementation.
