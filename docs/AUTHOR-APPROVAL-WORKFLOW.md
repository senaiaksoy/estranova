# Yazar Onay İş Akışı

> **Amaç:** Estranova'da yeni bir makale yazara onaya gönderilirken, onaylanırken veya revizyon istenirken kullanılacak **klasör yapısı + form akışı + komut iskeleti**. Yazarın tek tıkla yanıt verebileceği, en fazla 10 dakikalık tıklanabilir form.

---

## Klasör mimarisi

```
icerik/
  yazarlar/                            (yazar bazlı kalıcı arşiv)
    <slug>/
      README.md                        (yazar başlığı + makale sayısı)
      yayinlanan/                      (onaylı + yayında olan makaleler — markdown kopyaları)
        2026-05-03_<makale-slug>.md
      onay-belgeleri/                  (yazarın doldurduğu form yanıtları — JSON)
        2026-05-03_<makale-slug>.json
  onay-bekleyen/                       (yazarın yanıt vermesi beklenen geçici paketler)
    <slug>/
      <YYYY-MM-DD>_<makale-slug>/
        kontrol-formu.html             (10 dk tıklanabilir form, tek başına çalışır)
        makale-onizleme.html           (yazıyı tarayıcıda okumayı kolaylaştıran landing)
        meta.json                      (gönderim/deadline/status meta verisi)
  yayinlanmis-makaleler/               (mevcut export — kronolojik dump, dokunulmaz)
    2026-05/...
```

**İlke:**
- `icerik/yazarlar/<slug>/` her yazarın **kalıcı arşivi** — yazıları + onay belgeleri yan yana.
- `icerik/onay-bekleyen/` **geçici depo** — onay sonrası dosyalar `yazarlar/<slug>/`'a taşınır.
- `icerik/yayinlanmis-makaleler/` **dokunulmaz kronolojik dump** (`npm run articles:export` çıktısı, audit log).

---

## Akış (uçtan uca)

### 1. Makale yazılır

AI agent yeni bir makaleyi `src/pages/<kategori>/<slug>.astro` olarak oluşturur (mevcut [`docs/ARTICLE-PRODUCTION-SPEC.md`](ARTICLE-PRODUCTION-SPEC.md) faz 1-4).

### 2. Onay paketi üretilir

```bash
npm run author:send-for-approval -- --slug <writer-slug> --article <article-pathname>
```

Örnek:

```bash
npm run author:send-for-approval -- --slug bahar-ozeray --article /zamansiz-yasam/eklem-agrisi-menopoz
```

> **Git Bash / MSYS kullanıyorsanız:** Bash, `/zamansiz-yasam/...` ile başlayan
> argümanı Windows yoluna otomatik çevirebilir (`C:\Program Files\Git\zamansiz-yasam\...`).
> Bu davranışı kapatmak için komutun başına `MSYS_NO_PATHCONV=1` ekleyin **veya**
> argümanı çift slash ile yazın (`//zamansiz-yasam/...`):
>
> ```bash
> MSYS_NO_PATHCONV=1 npm run author:send-for-approval -- --slug bahar-ozeray --article /zamansiz-yasam/eklem-agrisi-menopoz
> # veya
> npm run author:send-for-approval -- --slug bahar-ozeray --article //zamansiz-yasam/eklem-agrisi-menopoz
> ```
>
> PowerShell veya cmd kullanıcılarında bu sorun yoktur.

Script şunları yapar:

1. `src/data/writers.ts`'ten yazarın `displayName`'ini okur.
2. `src/pages/<pathname>.astro` dosyasından `articleTitle` ve `articleDescription`'ı parse eder.
3. `icerik/onay-bekleyen/<slug>/<YYYY-MM-DD>_<son-segment>/` klasörünü açar.
4. Üç dosya üretir:
   - **`kontrol-formu.html`** — `templates/kontrol-formu.template.html`'in placeholder'ları doldurulmuş hali.
   - **`makale-onizleme.html`** — yazı için yönlendirme sayfası (canlı URL + form linki).
   - **`meta.json`** — gönderim tarihi, deadline (default +7 gün), durum (`pending`).
5. Yazara iletilecek dosya yollarını ve email konu satırını terminale basar.

### 3. Yazara iletilir

Editör (manuel olarak) yazara email atar:

> *Sevgili [Yazar Adı],*
> *[Makale Başlığı] başlıklı taslağı senin onayına sunuyorum. Aşağıdaki linkten 10 dakika içinde formu doldurabilirsin:*
> *file:///.../icerik/onay-bekleyen/<slug>/<klasör>/kontrol-formu.html*
> *Yazıya: [canlı önizleme URL'i]*

### 4. Yazar formu doldurur

`kontrol-formu.html` tarayıcıda açılır — **internet bağımlılığı yok**, tek başına çalışır.

İki form tipi vardır; AI agent makaleyi onaya gönderirken `--first-article` bayrağıyla seçim yapar:

#### Standart form (~5 dk, 7 alan) — yazarın 2. ve sonraki makaleleri için

- **Bölüm 1 — Genel Ses (3 likert 1-5):** Sesi tanıyor musunuz / Tabu konularda dürüst mü / Pazarlama hissi var mı?
- **Bölüm 2 — Kritik Kontrol (3 yes/no):** Çift Rol disiplini / Yasak ad / BEN ayrı blok mu?
- **Bölüm 3 — Yorumunuz (opsiyonel textarea):** kısa not.
- **Karar (2 büyük buton):** ✓ **ONAYLIYORUM** veya ✏ **DEĞİŞİKLİK İSTİYORUM**.

#### Stil rafine + onay formu (~10 dk, 14 alan) — yazarın İLK framework makalesi için (bir defaya mahsus)

- **Bölüm 1 — Genel ses (5 likert):** sesi tanıma + dürüstlük + pazarlama hissi + yapısal yoğunluk + kanıt seviyesi
- **Bölüm 2 — Kritik kontrol (4 toggle):** Çift Rol + yasak ad + BEN ayrı blok + hasta sızıntısı
- **Bölüm 3 — Stil rafine (5 öğe, "Tam tarzım / Kısmen / Bana uymaz"):**
  - Bullet (madde) yoğunluğu
  - Başlık tipi tercihi (tireli / soru / parantez içi terim / sade isim)
  - Açılış kalıbı tercihi (durum / önem / didaktik / espri)
  - Bold kategori başlığı + iki nokta kalıbı
  - Kontrollü espri seviyesi
- **Bölüm 4 — Açık yorum (textarea, max 600 karakter)**
- **Karar:** ✓ ONAYLIYORUM / ✏ DEĞİŞİKLİK İSTİYORUM

**Bölüm 3 yanıtları** profil dosyalarına işlenir (manuel editör adımı); sonraki makalelerde stil yazara belirgin biçimde yaklaşır.

**JSON payload `formType` alanı:** `'standard'` veya `'first-article-style-refine'`. Editör email'de bu alana bakarak sürecin hangi tipte olduğunu anlar.

### 5. Form gönderilir

Yazar karara bastığında JS form datasını JSON'a serialize eder ve `mailto:drsenaiaksoy@gmail.com` URL'ini açar:

- **Subject:** `[ONAY] <Makale Başlığı>` veya `[REVIZYON] <Makale Başlığı>`
- **Body:** JSON payload (yazar slug, makale slug, decision, likert + kontrol + yorum, ISO timestamp)

Yazar email'i gönderir (gönderim alışkanlığında olduğu istemcide otomatik açılır).

### 6. Editör onay sonrasını işler

Email'i alan editör:

1. JSON payload'ı `icerik/yazarlar/<slug>/onay-belgeleri/<YYYY-MM-DD>_<makale-slug>.json` olarak kaydeder.
2. Eğer onay → makale markdown'ını `icerik/yazarlar/<slug>/yayinlanan/`'a kopyalar (`npm run articles:export` zaten dual-write yapacak — Aşama 2'de eklenecek).
3. `src/data/article-approvals.ts`'e entry ekler (mevcut pattern korunur).
4. `icerik/onay-bekleyen/<slug>/<klasör>/`'yi temizler.
5. Eğer revizyon → AI agent ile birlikte yorumdaki revizyonları uygular, yeni paket üretir, akışı tekrar başlatır.

---

## Template'ler

Tüm placeholder'lar `{{ALL_CAPS_SNAKE}}` formatında. Script substitution yapar.

| Template | Form tipi | Placeholder'lar |
|---|---|---|
| `templates/kontrol-formu.template.html` | Standart (~5 dk) | `{{WRITER_NAME}}`, `{{WRITER_SLUG}}`, `{{ARTICLE_TITLE}}`, `{{ARTICLE_SLUG}}`, `{{PREVIEW_URL}}`, `{{SENT_DATE}}`, `{{DEADLINE_DATE}}`, `{{TARGET_EMAIL}}` |
| `templates/kontrol-formu-uzun.template.html` | İlk makale stil rafine (~10 dk) | Aynı placeholder seti |
| `templates/makale-onizleme.template.html` | — | `{{WRITER_NAME}}`, `{{ARTICLE_TITLE}}`, `{{PREVIEW_URL}}`, `{{FORM_URL}}` (relative `./kontrol-formu.html`) |
| `templates/meta.template.json` | — | Yukarıdakilerin yapısal versiyonu + `status` `createdAt` `deadline` |

---

## Komutlar

| Komut | Ne yapar |
|---|---|
| `npm run authors:init-folders` | `src/data/writers.ts`'teki tüm yazarlar için `icerik/yazarlar/<slug>/{yayinlanan,onay-belgeleri}/` iskeletini açar (bir kerelik). |
| `npm run author:send-for-approval -- --slug X --article /path` | Yeni onay paketi üretir. |
| `npm run articles:status` | (mevcut) onaylı/onaysız makale dökümü. |
| `npm run articles:export` | (mevcut) yayınlanmış makaleleri markdown'a döker. v2'de dual-write yapacak. |

---

## Kapsam ve aşamalar

**v1 (şu an):** Klasör yapısı + 3 template + 2 script (init + paket üretici) + dokümantasyon. Mevcut 21 onaylı makale (Berna 13 + Senai 8) `article-approvals.ts`'te kalır; yeni makaleler bu sistemden geçer.

**v2 (sonraki):** `articles:export` script'ini extend et — dual-write hem `yayinlanmis-makaleler/` hem `yazarlar/<slug>/yayinlanan/`'a yazsın. Mevcut 21 makaleyi retrofit etmek için bir kerelik script.

**v3 (opsiyonel):** Form yanıtını mailto yerine Cloudflare Pages Function endpoint'ine POST eden HTTP akışı (Resend Faz 3 aktivasyonu sonrası).

---

## Form süre hedefi (10 dk)

- 3 likert (slider veya 5 radio button) ≈ 90 sn
- 3 yes/no/uygulanmaz toggle ≈ 60 sn
- 1 opsiyonel textarea (max 200 karakter) ≈ 90 sn
- Yazıyı önizleme süresi ≈ 5-6 dakika (yazara bırakılır, form süreye dahil değil)
- Karar + email gönderim ≈ 30 sn
- **Toplam form süresi: ~5 dakika** (yazıyı okuma dahil 10 dk hedefi rahatça yakalanır)

---

## Yasal not

Form yanıtı email yoluyla iletilir; yazar göndermeden önce JSON payload'ı tarayıcıda görür ve düzenleyebilir. Form yanıtı sadece `drsenaiaksoy@gmail.com`'a gider; üçüncü taraf servis kullanılmaz (mailto: protokolü yerel email istemcisini açar). Bu mimari KVKK aydınlatma metnimizdeki **iç editöryal süreç** çerçevesindedir.

---

## Versiyon

- **v1.0** (2026-05-03) — İlk yayım. Klasör yapısı + 3 template + 2 script + dokümantasyon. Pilot: yeni Senai/Berna makaleleri için.
