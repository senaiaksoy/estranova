# /makale-denetle

Mevcut bir Estranova makalesini **salt-okunur** denetler: kuralları tarar, bulguları raporlar — **değiştirmez**.
`/makale-humanize`'in rapor-önce modudur. Kuralları **tekrarlamaz, bağlar**: kanonik kaynak `CLAUDE.md` §3 + §6, `docs/ARTICLE-PRODUCTION-SPEC.md` Faz 5, canonical stil rehberi.

**Argüman:** denetlenecek makalenin yolu (`src/pages/.../<slug>.astro`) veya canlı URL'i.

## 0. Preflight (HARD GATE)

1. Oku: `D:\A-klasör\obsidian-vaults\draksoyivf-knowledge\wiki\brand\senai-aksoy-makale-stil-rehberi.md`.
2. Aynen yaz: `Stil rehberi okundu: Dr. Senai Aksoy Makale Stil Rehberi`.
3. Oku: `CLAUDE.md` §3 (Sıcaklık Katmanı + klinisyen istisnası/anekdot çerçevesi + persona + FAQ + tipografi) ve §6 kalite checklist; `docs/ARTICLE-PRODUCTION-SPEC.md` Faz 5 tablosu.
4. Rehber okunamıyorsa hafızadan devam etme; engeli bildir ve dur.

## DENETİM MODU — DEĞİŞTİRME

Bu komut **makaleyi düzenlemez**. Yalnız tarar ve raporlar. Düzeltme, kullanıcı onayından sonra `/makale-humanize` ile yapılır.

## 1. Persona uyumu

- Yazarı `src/data/writers.ts`'ten bul (`authorSlug`/`writerSlug`). Klinisyen istisnası mı (`category: 'scientific'`) yaşıt mı?
- **Anekdot çerçevesi** persona ile tutarlı mı? Klinisyende "bir hastam/muayene odasında" — "bir kadın (bizzat tanıkken)/tanıdığım bir kadın/bir arkadaşım/çevremdeki kadınlar/okudukça/okuduğum yerde" **ihlal**. Yaşıtta tersi: "bir hastam" **ihlal**.
- Hitap "siz" mi; "sen" sızıntısı var mı? Klinisyende promosyonel başhekim vitrini (§4) var mı?

## 2. Mekanik tell taraması (Sıcaklık Katmanı / AI kadansı)

`/makale-humanize` Adım 2 eşik tablosunu uygula; aşan her satırı işaretle:

| Tell | Eşik |
|---|---|
| "X değil, Y" antitezi (gövde) | ≤ 2–3 |
| "beden konuşuyor/dil/ritim" kişileştirmesi | 0 |
| Soru-başlıklı H2 | ≤ 1 |
| Persona-anekdot uyumsuzluğu | 0 |
| Tereddüt yığını (çoğu zaman/genellikle/olabilir) | seyrek |
| Ritim tekdüzeliği / ≤6 kelimelik vurgu eksikliği | ≥ 3–4 kısa vurgu, 3+ ardışık eş-uzunluk yok |
| Lede formülü tekdüzeliği | çeşitlenmiş |

Sonunda **YZ/insan kadansı tahmini** ver — ölçüm değil editöryal yargı; ölçülebilir AI-dedektör skoru gibi sunma.

## 3. HARD yapı kontrolü (Faz 5 + §6)

- `ArticleProsePanel` + `class="prose prose-lg prose-estranova max-w-none"`
- 6–8 **cümleli** H2 + her H2 sonrası **italic lede** (bullet/veri/uzun tanımla başlamıyor)
- **Evidence** 2–3 (max 4–5), `<Evidence .../>` ile; literal `[●●●●○]` yok
- **Bilimsel Editör Notu** (Doç. Dr. Senai Aksoy imzalı); Senai kendi yazdıysa 1. şahıs istisnası
- **Tek görünür SSS yüzeyi** (3–5 konuya özgü, jenerik meta soru yok); schema ile aynı kaynak
- **JSON-LD**: MedicalWebPage + Article + BreadcrumbList + FAQPage (`buildArticleSchemas`)
- `ArticleAuthorBlock` (writers.ts), `RelatedReadings` 3–5, `ArticleDisclaimer` görünür
- **Hero** parent hub'tan (`submenuHeroByRoute['/<parent-hub>']`), makale-path entry yok / değişmemiş

## 4. Yasak taraması (§4)

Satış/funnel dili (randevu/en iyi/garantili/paket/kampanya/fiyat/başarı oranı); inline harici URL; uluslararası kuruluş/yayın adı (NAMS/NICE/JAMA/Mayo/WHO/FDA…); teşhis/reçete dili; plaza dili.

## 5. Otomatik kontroller

- `npm run lexicon:check` — `hard_ban` 0, `soft_ban` uyarılarını listele.
- `npm run build:ci` — compliance (≥85) + strict audit + SEO audit sonucu.

## 6. Rapor formatı

1. **Persona + ton uyumu** (klinisyen/yaşıt; anekdot çerçevesi; siz/§4)
2. **Tell sayıları + YZ/insan kadansı tahmini**
3. **HARD yapı eksikleri** (Faz 5/§6 maddeleri)
4. **§4 ihlalleri**
5. **lexicon + build sonucu**
6. **Öncelikli düzeltme listesi** (en yüksek etkiden düşüğe)

Bitişte sor: **"Düzelteyim mi? (/makale-humanize ile uygularım)"** — onay gelmeden dosyaya dokunma.
