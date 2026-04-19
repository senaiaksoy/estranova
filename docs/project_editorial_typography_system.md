# Estranova — editöryal tipografi ve kanıt rozeti

## Özet

- Makale gövdesi: `ArticleProsePanel` → `prose prose-lg prose-estranova max-w-none` (tek sistem).
- Stil kaynağı: `src/index.css` içinde `@utility prose-estranova` (`@tailwindcss/typography` ile).
- **Kanıt düzeyi (Evidence):** `src/components/site/Evidence.astro` — inline gold/burgundy sparkline segmentleri; `title` + `aria-label` ile “Kanıt düzeyi: … (N/5)”; aralık için `from` / `to`. **Literal `[●●●●●]` vb. nokta dizileri yasak** (yalnızca bileşen).
- Sparkline stilleri: `prose-estranova` altında `& .evidence*`; aynı kurallar `ArticleProsePanel` dışındaki hub tablo/kartlar için `@layer components` içinde tekrarlanır.

## Bakım

- Tipografi veya Evidence görünümü değişince `npm run build` ile doğrula.
- Toplu nokta migrasyonu için referans: `scripts/migrate-evidence.mjs` (tek seferlik / tekrar çalıştırmadan önce diff incele).
