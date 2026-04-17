# AGENTS.md

## Mission

Build and maintain a premium editorial women's health website focused on:
- perimenopause
- preparing for menopause
- menopause
- health after 40

This project is an editorial health information platform.
It is not a clinic marketing site, not a treatment funnel, and not a product sales platform.

**Yayın dili:** Estranova web sitesi **yalnızca Türkçe** kullanıcı arayüzü ve içerik diliyle yayınlanır; kullanıcıya dönük metinlerde İngilizce navigasyon veya gövde kullanılmaz. Ayrıntı: **`CLAUDE.md` → Dil politikası (HARD CONSTRAINT)**.

---

## Non-Negotiable Rules

### Never position the site as:
- a clinic website
- a physician advertising site
- a healthcare service funnel
- a medical product/subscription platform
- a treatment promotion landing page

### Never use:
- appointment-booking language
- treatment-promotion language
- superiority claims
- success-rate claims
- before/after narratives
- patient testimonials as promotion
- package, pricing, discount, or offer sections

Forbidden examples:
- Randevu al
- Tedaviye başla
- En iyi uzman
- En başarılı yöntem
- Başarı oranlarımız
- Paketlerimiz
- Hemen başvur

Allowed neutral CTA examples:
- Rehberi keşfet
- Belirtileri değerlendir
- Bilgi al
- İçeriği incele
- Daha fazla bilgi

---

## Pipeline Model Matrix (Operasyonel)

Pipeline ajanları ve kullandıkları modeller:

| Ajan | Model | Rol |
|------|-------|-----|
| orchestrator | gpt-4o | LangGraph routing |
| researcher | gemini-2.5-flash | Kaynak derleme, iddia paketi |
| writer | claude-sonnet-4-6 | Makale üretimi (master prompt + few-shot) |
| checker | claude-sonnet-4-6 | Medical fact-check |
| compliance | claude-sonnet-4-6 | CLAUDE.md kural denetimi |

Detaylı konfigürasyon, eşikler ve debug rehberi için: **[docs/PIPELINE.md](docs/PIPELINE.md)**

Model değişikliği önerirken öncelik: maliyet ≠ kalite. Writer / checker / compliance için Sonnet’ten `gpt-4o`’ya geri dönmeyi düşünmeden önce **docs/PIPELINE.md** içindeki **G1** (double-escape / newline) gotcha’sını oku.

---

## Product / Design Direction

The site should feel like:
- a premium editorial publication
- a medically reviewed information platform
- a calm, structured guidance resource

It should NOT feel like:
- a mobile app
- a SaaS dashboard
- a supplement store
- a beauty/lifestyle blog
- a sales-driven clinic website

### Design characteristics
Use:
- muted burgundy / cream / beige-gold palette
- serif headings
- readable sans-serif body text
- large type
- generous whitespace
- modular sections
- desktop-first responsive website structure

Avoid:
- app dashboards
- bottom nav app patterns
- aggressive sticky conversion bars
- loud marketing visuals
- cluttered layouts

---

## Information Architecture

Preferred top-level sections:
- Perimenopause
- Preparing for Menopause
- Menopause
- Health After 40
- Lifestyle & Well-being
- Expert Insights
- About the Platform
- Editorial Policy
- Medical Disclaimer
- Contact / Information

Do not introduce service-oriented navigation unless explicitly approved.

---

## Page Rules

### Homepage should include
- Hero
- Summary of hormonal transition after 40
- Journey cards
- Symptom-based navigation
- Expert trust section
- Featured content
- Preventive health block
- Soft CTA
- Trust footer

### Article pages should include
- Title
- Quick answer / summary
- Structured headings
- Neutral medical explanation
- Optional clinical insight box
- Related reading
- Medical disclaimer

### Article page layout (Astro — use for every new static article)

The visual shell is **not** optional for new `.astro` articles under `src/pages/`. Reuse these components so pages match the homepage / hub styling:

1. **`SubmenuHero`** (`compact`) when the URL is registered in `src/data/submenu-heroes.ts` (`submenuHeroByRoute`). If the page uses a plain in-article `<header>` + `pt-24` instead (some informational routes), keep that pattern only where it already exists; new hub-style articles should prefer `SubmenuHero` + hero data.
2. **`SubmenuArticleBody`** — wraps the column under the hero: gradient background, `max-w-4xl`, spacing. Replace ad-hoc `<article class="px-6 py-16">` + inner wrappers with this.
3. **Inside the body (typical order):**
   - Author / meta panel (rounded white card; gradient avatar placeholder pattern as in existing articles).
   - **Kısa Özet** (or equivalent intro) in the gold-tint summary card class used on current pages.
   - Main text: **`ArticleProsePanel`** only — do **not** put `prose` on a bare `<section>`; the panel supplies the white card + typography.
   - Extra prose blocks (e.g. “Kısa Hatırlatma”): second **`ArticleProsePanel`** with `class="mt-10"` (and more if needed).
   - **İlgili İçerikler** (cream panel), optional **Bilimsel editör notu** (gradient left-border panel), **disclaimer** (dashed border card) — match classes from an updated article such as `src/pages/zihin-denge/uyku-bozuklugu-menopoz.astro`.
4. **Imports:** `../../components/site/...` from `src/pages/<section>/`; add one `../` per extra directory level (e.g. `hormonal-gecis/menopoz/` → `../../../components/site/`).
5. **CMS / JSON-driven articles** rendered by `src/pages/article/[slug].astro` already use `SubmenuArticleBody` + `ArticleProsePanel` for HTML body; follow the same content blocks in `src/data/articles` (title, excerpt, transparency, disclaimer).

### Assessment or contact pages
If creating a symptom-assessment or contact-style page, keep it neutral and informational.
Do not make it a sales funnel.

Allowed framing:
- structured guidance
- symptom orientation
- information request
- general contact

Not allowed:
- treatment enrollment
- appointment funnel
- urgent conversion patterns

---

## Content Tone

Write in a tone that is:
- calm
- precise
- medically informed
- non-sensational
- reassuring
- elegant

Avoid:
- aggressive persuasion
- hype
- fear-based wording
- influencer-style wellness claims
- miracle framing

---

## Expert Visibility

Expert presence is allowed as:
- editorial reviewer
- medical reviewer
- expert contributor
- clinical perspective

Avoid promotional framing such as:
- top doctor
- best specialist
- leading clinic
- unmatched success

---

## Compliance Mindset

When generating content, code, components, layouts, or prompts, always ask:

1. Does this look like an editorial health platform?
2. Does this avoid direct treatment marketing?
3. Is the CTA neutral?
4. Would this still make sense as a public-interest health publication?
5. Does this prioritize clarity and trust over conversion?

If not, revise.

---

## Footer Requirements

Every mature page set should make room for:
- Editorial Policy
- Medical Disclaimer
- Privacy Policy
- About the Platform
- Contact / Information

---

## Image Rules

Prefer:
- calm, confident women aged 40–55
- natural editorial photography
- subtle medical context
- thoughtful, non-dramatic visuals

Avoid:
- clinical machinery as hero focus
- product-style renders
- startup icon blocks
- exaggerated menopause suffering
- cosmetic advertising aesthetics

---

## Safe Default Behavior

If uncertain:
- choose editorial over promotional
- choose neutral over persuasive
- choose structured information over conversion tactics
- choose trust over marketing

These defaults override optimization instincts.
