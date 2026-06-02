<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

**Estranova (Python pipeline):** Operasyon rehberi [docs/PIPELINE.md](docs/PIPELINE.md) · Agentic iskelet özeti [docs/AGENTIC_PIPELINE_SCAFFOLD.md](docs/AGENTIC_PIPELINE_SCAFFOLD.md) · Fork için boş domain sablonu [config/domain_placeholders.py](config/domain_placeholders.py) · Son değişiklikler [CHANGELOG.md](CHANGELOG.md)

**CLI:** `python main.py "Konu"` veya `python main.py --topic "Konu"` · **Streamlit:** `streamlit run streamlit_app.py`

# Web site runbook

Estranova'nın editoryal web yüzü Astro ile derlenir; Netlify tarafında `dist/` klasörü yayınlanır. Python pipeline ve Streamlit araçları içerik üretim / onay operasyonu içindir.

## Yerelde çalıştırma

Gerekenler: Node.js 20+, npm

1. Bağımlılıkları kurun:
   `npm install`
2. Gerekirse `.env.example` dosyasını `.env` olarak çoğaltın ve içerik pipeline anahtarlarını doldurun.
3. Web sitesini açın:
   `npm run dev`

## Canlıya çıkış öncesi zorunlu kontroller

1. Tüm kalite kapıları:
   `npm run build:ci`
2. Yerel smoke preview:
   `npm run preview -- --host 0.0.0.0 --port 4322`

`build:ci`; Astro sync, TypeScript lint, compliance, sıkı yayın bütünlüğü denetimi,
prebuild kontrolleri (encoding / renk token / editoryal lexicon), production build
ve SEO output audit zincirini birlikte çalıştırır. Google kaynak tercihi CTA'sı da
SEO audit içinde makale sonu ve footer yüzeyleriyle doğrulanır.

## Deploy notları

- Canlı site Cloudflare Pages üzerinden düşünülerek işletilir.
- Cloudflare Pages project dashboard: https://dash.cloudflare.com/4797b38bf5bfb1b15a30ac27f0a9a78f/pages/view/estranova
- Cloudflare build komutu: `npm run build:cloudflare`
- Cloudflare production build env: `PUBLIC_LAUNCH_MODE=production`
- Yayın bütünlüğü denetimi: `npm run articles:audit`
- Sıkı denetim: `npm run articles:audit:strict`
- SEO / canonical / Preferred Source denetimi: `npm run seo:audit`
- Sitemap ve RSS üretimi build sırasında otomatik yapılır.
