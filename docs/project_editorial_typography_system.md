# Estranova — editöryal tipografi ve kanıt rozeti

## Özet

- Makale gövdesi: `ArticleProsePanel` → `prose prose-lg prose-estranova max-w-none` (tek sistem).
- Stil kaynağı: `src/index.css` içinde `@utility prose-estranova` (`@tailwindcss/typography` ile).
- **Kanıt düzeyi (Evidence):** `src/components/site/Evidence.astro` — parantez içi italic Türkçe etiket (`(güçlü kanıt)` · `(iyi kanıt)` · `(orta kanıt)` · `(sınırlı kanıt)` · `(zayıf kanıt)`); aralık `from` / `to` ile `(orta–iyi kanıt)` birleşir. Level 5 primary, level 4 gold-bronze, level 1-3 gold; italic `font-serif` / Manrope, 0.85em. `title` + `aria-label` "Kanıt düzeyi: … (N/5)" magnitude'u korur. **Literal `[●●●●●]` vb. nokta dizileri yasak** (yalnızca bileşen).
- **Canlı font kuralı (2026-06-02):** `font-serif = Manrope`, `font-sans = Kulim Park`. Newsreader / Playfair / Inter eski taslak referansıdır; yeni doküman, site veya sosyal asset üretiminde kullanılmaz.
- Evidence stilleri: `prose-estranova` altında `& .evidence*`; aynı kurallar `ArticleProsePanel` dışındaki hub tablo/kartlar için `@layer components` içinde tekrarlanır.

## Bakım

- Tipografi veya Evidence görünümü değişince `npm run build` ile doğrula.
- Toplu nokta migrasyonu için referans: `scripts/migrate-evidence.mjs` (tek seferlik / tekrar çalıştırmadan önce diff incele).
