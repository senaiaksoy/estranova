# Tutulan taslak — Menopoz ve Perimenopozda BPC-157 ve TB-500 (Senai Aksoy)

**Durum:** ⏸ Yayın kapısı bekleniyor. Bu turda canlı rota, RSS manifesti, FAQ kaydı ve approval kaydı değiştirilmedi.

- **Hedef rota:** `/zamansiz-yasam/deneysel/bpc-157-tb-500-menopoz/`
- **Kaynak:** `makale-kaynak.astro`
- **Yazar:** `senai-aksoy` — klinisyen istisnası; KC doğrudan onayı gerekir.
- **Makale türü:** `clinical-guide`
- **Görsel:** Yeni özel görsel üretildi ve iki kanonik crop hazırlandı; mevcut tüm-peptidler yazısının görseli kullanılmayacak.
  - Byline: `/images/library/editorial/bpc-157-tb-500-menopoz-byline.webp`
  - Kart: `/images/library/editorial/bpc-157-tb-500-menopoz.webp`
- **Kaynak tarihi:** 5 Ağustos 2026; FDA’nın 2026 BPC-157/TB-500 değerlendirmeleri ve 2026 WADA listesi işlendi.

## Bu turda yapılan editoryal düzeltmeler

- IVF, over rezervi ve büyüme hormonu kaynakları çıkarıldı; yalnızca iddiayı taşıyan güncel kaynaklar bırakıldı.
- Menopozal kas-eklem yakınmaları ile kemik sağlığı birbirine eşitlenmedi.
- BPC-157’nin preklinik sinyalleri insan etkinliği gibi sunulmadı.
- TB-500, tam thymosin beta-4’ten ayrıldı; TB-500 için insan klinik verisi olmadığı açıkça yazıldı.
- “Tümör anjiyojenezi riski” kanıtlanmış klinik sonuç gibi kullanılmadı; belirsizlik ve mekanizma sınırı ayrıştırıldı.
- FDA’nın güncel 503A değerlendirmesi “FDA onayı” gibi çerçevelenmedi.
- Doz, kullanım protokolü, ürün/marka ve kişisel tedavi önerisi eklenmedi.

## Yayın kapısı açılırsa

1. Bu dosya yeni hedef rotaya `src/pages/zamansiz-yasam/deneysel/bpc-157-tb-500-menopoz.astro` adıyla alınır; mevcut `peptid-kullanimlari-menopoz.astro` dosyasına dokunulmaz.
2. Canlı sayfada yerel `./faq-entry` importu kaldırılır; `src/data/article-faqs.ts` içine aşağıdaki FAQ bloğu eklenir ve `articleFaqs[pathname]` kullanılır.
3. `src/data/static-articles.ts` mevcut aynı rota girdisi yeni başlık, açıklama, tarih ve anahtar kelimelerle güncellenir; ikinci manifest girdisi eklenmez.
4. `src/data/article-approvals.ts` mevcut kayıt güncel revizyon notuyla yenilenir.
5. `icerik/yazar-onaylari/senai-aksoy/article-log.md` içine doğrudan KC onayı ve bu makalenin kanıt/üslup notu yazılır.
6. `npm run build:ci`, `npm run lexicon:check`, Astro check ve `git diff --check` çalıştırılır.
7. Yayın kapısı açıldığında `src/data/submenu-heroes.ts` içine şu ayrı kart kaydı eklenir; `submenuHeroByRoute` içine yeni makale yolu eklenmez:
   ```ts
   articleCardImageByRoute['/zamansiz-yasam/deneysel/bpc-157-tb-500-menopoz/'] = {
     src: '/images/library/editorial/bpc-157-tb-500-menopoz.webp',
     alt: 'Doğal ışık alan sakin bir iç mekanda omzuna elini koyarak bedenini dinleyen düşünceli kadın',
   };
   ```
