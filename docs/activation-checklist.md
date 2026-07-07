# Estranova Faz 2 / 3 / 4 / 5 — Aktivasyon Rehberi

Bu belge, Estranova'nın **hesap kaydı + abonelik + paywall + PDF/audio**
sistemlerini canlıya alma adımlarını sırayla anlatır. Bütün sistemler şu
an **kapalı tutuluyor** (`src/utils/feature-flags.ts`); aşağıdaki adımlar
istenen fazda tek-tek aktive etmek içindir.

**Son güncelleme:** 2026-05-01
**Mevcut durum:** Tüm flagler `false`. Site canlı, açık erişim.

---

## Aktivasyon Sırası ve Eşik Metrikleri

| Faz | Sistem | Eşik | Tahmini Süre | Bağımlılık |
|---|---|---|---|---|
| **2** | Hesap kaydı + bülten gönderim | Günlük 2.000 unique + 5.000 bülten kaydı | 4-5 gün | yok |
| **3** | Aylık dergi aboneliği (iyzico) | Faz 2 üzerinden 1-2 ay denenmiş + iyzico merchant onayı (2-3 hafta) | 10-14 gün | Faz 2 |
| **4** | Selective premium paywall | 100+ ücretli abone + 12+ aylık sayı-özel parça stoğu | 6-8 gün | Faz 3 |
| **5** | Aylık PDF + audio | 3+ yayınlanmış sayı + audio üretim altyapısı | 5-7 gün | Faz 3 |

Eşik kontrolü: `featureFlags.activationThresholds` referans değerleri tutar;
manuel karar Senai Aksoy + Berna Aksoy'un.

---

## Faz 2 — Hesap Kaydı + Bülten Gönderim

### A. Ön hazırlık (1-2 gün, paralel başlatılabilir)

1. **Resend hesabı aç** (resend.com — ücretsiz tier 100 e-posta/gün başlangıç).
2. Domain DNS kayıtları:
   - SPF: `v=spf1 include:_spf.resend.com ~all`
   - DKIM: Resend dashboard'dan verilen TXT kaydı
   - DMARC: `v=DMARC1; p=quarantine; rua=mailto:info@estranova.com`
3. **Supabase projesi aç** (supabase.com — ücretsiz tier 500 MB DB).
   - Region: **Frankfurt** (KVKK uyum için EU residency).
   - Auth → Magic Link aktif et.
4. **Cloudflare Pages dashboard'da environment variables ayarla:**
   - `RESEND_API_KEY`
   - `PUBLIC_SUPABASE_URL`
   - `PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (server-only)
5. **KVKK Aydınlatma Metni'ni güncelle** (`src/pages/kvkk.astro`):
   - Bülten listesi tutma süresi (12 ay önerilir)
   - Resend EU veri merkezi, Supabase Frankfurt
   - Üyelik silme akışı

### B. Kod tarafı (3-4 gün)

1. **Astro hybrid moda geç:**
   ```js
   // astro.config.mjs
   import cloudflare from '@astrojs/cloudflare';
   export default defineConfig({
     output: 'hybrid',
     adapter: cloudflare(),
   });
   ```
   ```bash
   npm install @astrojs/cloudflare
   ```

2. **Supabase tablo migrasyonları:**
   ```sql
   -- supabase/migrations/0001_users_subscribers.sql
   create table newsletter_subscribers (
     id uuid primary key default gen_random_uuid(),
     email text unique not null,
     form_type text not null check (form_type in ('weekly', 'monthly')),
     status text not null default 'active' check (status in ('active', 'unsubscribed')),
     created_at timestamptz default now()
   );

   create table users (
     id uuid primary key default auth.uid(),
     email text unique not null,
     created_at timestamptz default now()
   );

   create table saved_articles (
     id uuid primary key default gen_random_uuid(),
     user_id uuid references users(id) on delete cascade,
     slug text not null,
     title text not null,
     saved_at timestamptz default now(),
     unique(user_id, slug)
   );

   alter table users enable row level security;
   alter table saved_articles enable row level security;
   create policy "users_self_read" on users for select using (auth.uid() = id);
   create policy "saved_self_all" on saved_articles for all using (auth.uid() = user_id);
   ```

3. **Cloudflare Pages Functions oluştur (`functions/api/`):**
   - `functions/api/newsletter/subscribe.ts` — Resend liste kayıt
   - `functions/api/auth/magic-link.ts` — Resend ile e-posta gönderimi
   - `functions/api/auth/callback.ts` — Token doğrulama + Supabase session
   - `functions/api/saved/[slug].ts` — Sonra Oku Supabase çift-yazım

4. **Mevcut script'leri güncelle:**
   - `src/scripts/newsletter-signup.ts` — `addPending()` çağrısını
     `fetch('/api/newsletter/subscribe', { method: 'POST', body: JSON.stringify({ email, formType }) })`
     ile değiştir; localStorage backup olarak kalır.
   - `src/scripts/save-for-later.ts` — Kullanıcı oturumu varsa
     `fetch('/api/saved/' + slug, ...)` ile çift-yazım; localStorage senkronize.

5. **Feature flag aç:**
   ```ts
   // src/utils/feature-flags.ts
   membershipEnabled: true,
   ```

6. **/giris ve /abone-ol sayfalarına gerçek bileşenleri ekle:**
   - `MagicLinkForm.astro` (giris)
   - `SubscriptionTiersCard.astro` (abone-ol — Faz 3'te aktif olur)

### C. Aktivasyon doğrulama

- [ ] `npm run build` temiz (97+ sayfa).
- [ ] `/giris` sayfası magic-link formu render ediyor.
- [ ] Test e-postası `mail-tester.com` üzerinde 9+/10 spam puanı.
- [ ] Supabase auth → magic link → callback akışı end-to-end test edildi.
- [ ] Resend dashboard'da bülten kaydı görünüyor.
- [ ] /hesabim sayfası oturum açıkken kullanıcı verisinden besleniyor.
- [ ] Mevcut localStorage verisi korunuyor (backup); yeni kayıtlar Supabase'e gidiyor.

### D. Geri-alma planı

- `featureFlags.membershipEnabled = false` → push → /giris ve /abone-ol
  yer-tutucu durumuna döner. Mevcut kayıtlar Supabase'de kalır;
  localStorage backup hâlâ çalışır.
- Astro `output: "static"`'e geri al → push → Pages Functions devre dışı.

---

## Faz 3 — Aylık Dergi Aboneliği (iyzico)

### A. Ön hazırlık (2-3 hafta paralel — iyzico onayı gecikmeli)

1. **iyzico merchant başvurusu** (iyzico.com — başvuru formu):
   - Şirket evrakı (vergi levhası, imza sirküleri, ticaret sicil)
   - IBAN
   - Onboarding süresi: 2-3 hafta
2. **Mesafeli Satış Sözleşmesi sayfası yaz** (`src/pages/mesafeli-satis-sozlesmesi.astro`):
   - 14 gün cayma hakkı
   - Dijital içerik istisnası (kullanım başlamışsa cayma hakkı geçersizdir
     — yine de Estranova etik için "ilk 14 gün tam iade" tercihi)
3. **`src/pages/iade-ve-cayma.astro`** sayfası — iade akışı + iletişim e-posta.
4. **KVKK güncellemesi:**
   - Ödeme bilgileri iyzico tarafında işlenir (PCI-DSS uyumlu)
   - Abonelik durumu Supabase'de tutulur

### B. Kod tarafı (5-7 gün)

1. **Yeni env vars:**
   - `IYZICO_API_KEY`
   - `IYZICO_SECRET_KEY`
   - `IYZICO_BASE_URL` (sandbox.iyzipay.com → api.iyzipay.com)
   - `JWT_SIGNING_SECRET`

2. **Supabase migrasyon:**
   ```sql
   -- supabase/migrations/0002_subscriptions.sql
   create table subscriptions (
     id uuid primary key default gen_random_uuid(),
     user_id uuid references users(id) on delete cascade,
     tier text not null check (tier in ('monthly', 'yearly')),
     status text not null check (status in ('active', 'cancelled', 'past_due')),
     current_period_end timestamptz not null,
     iyzico_subscription_id text,
     created_at timestamptz default now()
   );

   create table payments (
     id uuid primary key default gen_random_uuid(),
     user_id uuid references users(id) on delete cascade,
     subscription_id uuid references subscriptions(id),
     amount numeric not null,
     currency text default 'TRY',
     status text not null,
     raw_payload jsonb,
     created_at timestamptz default now()
   );
   ```

3. **Cloudflare Pages Functions:**
   - `functions/api/iyzico/checkout-init.ts` — iyzico CheckoutForm token üret
   - `functions/api/iyzico/webhook.ts` — payment.success/fail callback
   - `functions/api/subscription/cancel.ts` — abonelik iptal akışı
   - `functions/api/subscription/status.ts` — kullanıcının abonelik durumu

4. **Yeni sayfalar:**
   - `/abone-ol/odeme.astro` — iyzico CheckoutForm iframe (full-page, modal değil)
   - `/abone-ol/basarili.astro` — başarı sayfası
   - `/abone-ol/iptal.astro` — iptal akışı (Faz 3'te kullanım için)
   - `/hesabim/yayin-durumu.astro` — abonelik durumu paneli + cancel

5. **Yeni bileşenler:**
   - `SubscriptionTiersCard.astro` — Aylık ₺49 / Yıllık ₺399 (revize fiyat
     tavsiyesi; canlı eşik analizinden sonra ayarlanır)

6. **Feature flag aç:**
   ```ts
   subscriptionEnabled: true,
   ```

### C. Aktivasyon doğrulama

- [ ] iyzico sandbox: 5 farklı senaryo (TR kart + foreign + 3DS + ret + iptal)
- [ ] Webhook callback `iyzico/webhook.ts` üzerinde ödeme durumu doğru kayıt
- [ ] `/abone-ol/odeme` sayfası mobile + desktop'ta render (modal değil!)
- [ ] Mesafeli Satış + KVKK + cayma hakkı checkbox işaretsiz → submit disabled
- [ ] "Yayını sonlandır" akışı 2-adım + iyzico cancel API çağrısı + iptal e-postası
- [ ] Abonelik webhook → DB → JWT claim refresh end-to-end

### D. Geri-alma planı

- `featureFlags.subscriptionEnabled = false` → push.
- Aktif aboneliklere "moneyback" e-postası: "Sistem geçici olarak askıya
  alındı; ücreti iade ediyoruz" (etik tercih).
- iyzico merchant durumu kalır, env vars korunur.

---

## Faz 4 — Selective Premium Paywall

### A. Ön hazırlık

1. **`docs/paywall-policy.md` revizyonu** — bu fazda hangi içerikler
   premium işaretli, hangileri her zaman açık (zaten yazılı, gözden geçir).
2. **Premium içerik üretim planı:**
   - Aylık sayının "Yaşıt Köşesi" + "Okur Sayfası" + "Arka Sayfa" parçaları
     (issue-sections.ts'deki 3 sabit slot) premium işaretlenir.
   - Editör mektubu + kapak dosyası ana yazılar **her zaman açık**.

### B. Kod tarafı (6-8 gün)

1. **Yeni bileşenler:**
   - `IssueGate.astro` — yumuşak gradient fade + "Bu yazının devamı sayı
     okurlarına açık" mikro-copy + "Yayını izle" CTA
   - `IssueAccessPill.astro` — 3 durum rozet ("Yayına açık" / "Sayı okurlarına
     açık" / "Mektup seçkisi")
   - `QuotaBanner.astro` — anonim okur kotası göstergeci

2. **Edge function (Cloudflare):**
   - `functions/api/quota-check.ts` — anonim cookie + KV ile aylık 3 sayı-özel
     parça kotası
   - JWT claim varsa kota by-pass

3. **JSON-LD flexible sampling:**
   ```ts
   // src/utils/article-schema.ts
   buildArticleSchemas({ ..., paywall: { gatedSelector: "[data-gate='issue-only']" } })
   ```
   Schema'ya `isAccessibleForFree: false` + `hasPart` eklenir.

4. **Astro page'lerde gating:**
   - Sayı-özel parçalar `<div data-gate="issue-only">` ile sarılır
   - Lede + ilk 2 H2 her zaman açık (Google flexible sampling)
   - 3. H2 sonrası IssueGate bileşeni

5. **Feature flag aç:**
   ```ts
   paywallEnabled: true,
   ```

### C. Aktivasyon doğrulama

- [ ] Anonim okur 3 sayı-özel parça okuduktan sonra 4.'de gate erken devreye giriyor.
- [ ] Abone session'ı varsa kota by-pass (cookie + JWT).
- [ ] Schema.org validator + Google Rich Results Test geçti.
- [ ] Search Console "Subscription and paywalled content" raporu izlemede.
- [ ] Hub içerikleri ve mevcut makaleler **etkilenmedi** — açık kaldı.

### D. Geri-alma planı

- `featureFlags.paywallEnabled = false` → push.
- IssueGate render etmez, sayı-özel parçalar açık erişime döner.
- KV anonim cookie verisi 30 gün sonra otomatik temizlenir.

---

## Faz 5 — Aylık PDF + Audio

### A. Ön hazırlık

1. **Cloudflare R2 hesabı aç** (S3 uyumlu, çıkış ücreti yok).
2. **PDF üretim altyapısı:**
   - Build-time Playwright (`scripts/build-issue-pdf.mjs`)
   - GitHub Actions workflow (sayı yayınlandığında PDF üret)
3. **Audio üretim altyapısı:**
   - ElevenLabs veya Speechify ile TR sesi
   - Yazar onayıyla "yazar kendi sesi" opsiyonu

### B. Kod tarafı (5-7 gün)

1. **Yeni env vars:**
   - `R2_ACCESS_KEY_ID`
   - `R2_SECRET_ACCESS_KEY`
   - `R2_BUCKET_NAME`

2. **Yeni Cloudflare Pages Function:**
   - `functions/api/issue-pdf-signed-url.ts` — abone için signed URL üret

3. **Yeni route:**
   - `src/pages/sayi/[slug]/print.astro` — PDF-friendly print stylesheet
   - `src/pages/sayi/[slug]/oku.astro` — opsiyonel web reader

4. **issues.ts güncellemesi:**
   - `Issue.pdfUrl` ve `Issue.audioUrls` alanları doldurulur

5. **Hesap sayfası genişletme:**
   - `/hesabim` PDF indirme listesi + audio feed URL'si

6. **Feature flag aç:**
   ```ts
   pdfAudioEnabled: true,
   ```

### C. Aktivasyon doğrulama

- [ ] Build-time PDF üretimi başarılı (Türkçe diyakritik korunmuş).
- [ ] R2 signed URL 24 saat geçerli, abone-only.
- [ ] Hesap sayfasında "Sayını indir" link'leri çalışıyor.
- [ ] Audio player makale altında render (eğer audio mevcutsa).

---

## Mevcut Faz 2 Hazırlık Durumu (2026-05-01)

Aşağıdaki bileşenler **Faz 2 öncesi hazır** — feature flag aktif olunca
otomatik devreye girer veya kolayca dolar:

### ✓ Hazır iskeletler

- `src/utils/feature-flags.ts` — toggle merkezi
- `src/pages/abone-ol.astro` — yer-tutucu (subscriptionEnabled gözetler)
- `src/pages/giris.astro` — yer-tutucu (membershipEnabled gözetler)
- `src/pages/hesabim.astro` — kişisel okuma paneli (localStorage tabanlı)
- `src/pages/mektup/` — bülten arşivi yer-tutucu
- `src/pages/sonra-oku.astro` — kayıtlı yazı listesi
- `src/components/site/SaveForLaterButton.astro` + `src/scripts/save-for-later.ts`
- `src/scripts/newsletter-signup.ts` — localStorage mock kayıt
- `src/scripts/reading-controls.ts` — yazı boyutu tercihi
- `src/scripts/article-toc.ts` — sticky TOC + scroll progress
- KVKK sayfası mevcut (`/kvkk`)

### ⏳ Faz 2 zamanı eklenecek

- `astro.config.mjs` → `output: "hybrid"` + `@astrojs/cloudflare` adapter
- `functions/api/` Cloudflare Pages Functions (newsletter + auth + saved)
- `supabase/migrations/0001_users_subscribers.sql`
- `MagicLinkForm.astro` bileşeni
- `/hesabim` sayfasında sunucu verisi okuma (localStorage backup)

### ⏳ Faz 3 zamanı eklenecek

- `SubscriptionTiersCard.astro` (Aylık ₺49 / Yıllık ₺399 tavsiye)
- `/abone-ol/odeme.astro`, `/abone-ol/basarili.astro`, `/abone-ol/iptal.astro`
- `/hesabim/yayin-durumu.astro`
- `/mesafeli-satis-sozlesmesi.astro`, `/iade-ve-cayma.astro`
- iyzico CheckoutForm entegrasyonu
- `supabase/migrations/0002_subscriptions.sql` + `0003_payments_audit.sql`

### ⏳ Faz 4 zamanı eklenecek

- `IssueGate.astro`, `IssueAccessPill.astro`, `QuotaBanner.astro`
- Cloudflare KV kotası
- JSON-LD flexible sampling

### ⏳ Faz 5 zamanı eklenecek

- `scripts/build-issue-pdf.mjs` (Playwright)
- Cloudflare R2 entegrasyonu
- Audio dağıtım altyapısı

---

## Hızlı Aktivasyon Komut Sırası (örnek — Faz 2)

```bash
# 1. Resend + Supabase hesapları açık, env vars Cloudflare'de set
# 2. Astro hybrid moda geçiş
npm install @astrojs/cloudflare

# 3. astro.config.mjs güncelle:
#    output: 'hybrid', adapter: cloudflare()

# 4. Pages Functions oluştur (functions/api/...)

# 5. Supabase migration push
supabase db push --linked

# 6. Feature flag aç
# src/utils/feature-flags.ts → membershipEnabled: true

# 7. Build + push
npm run build  # 97+ sayfa
git add . && git commit -m "feat(faz-2): membership aktivasyonu" && git push origin HEAD:main
# Cloudflare auto-deploy başlar
```

---

## İlişkili Belgeler

- [`src/utils/feature-flags.ts`](../src/utils/feature-flags.ts) — toggle merkezi
- [`docs/paywall-policy.md`](paywall-policy.md) — selective premium etiği
- [`CLAUDE.md`](../CLAUDE.md) §5 DNA — abonelik etiği HARD CONSTRAINT
- [`docs/PIPELINE.md`](PIPELINE.md) — yayın hattı operasyonel parametreleri

---

## Değişiklik Geçmişi

- **2026-05-01:** İlk yazım. Tüm flagler kapalı; site canlı, açık erişim.
  Faz 2 hazırlığı tamamlandı (hesabim, mektup, sonra-oku, save-for-later,
  newsletter-signup, reading-controls, article-toc); aktivasyon backend
  bağlantısıyla tek-dokunuş.
