# Yazar Onay İş Akışı

> **Amaç:** Estranova'da yeni bir makale yazara onaya gönderilirken, revizyon döngüsü yürütülürken ve yalnızca yazar onayı sonrasında yayına alınırken kullanılacak **kanonik klasör yapısı + 5 dakikalık form akışı + komut iskeleti**.

---

## Klasör mimarisi

```
icerik/
  yazar-onaylari/                      (tek yazar onay arşivi)
    <slug>/
      README.md                        (yazar başlığı + makale sayısı)
      article-log.md                   (varsa akümülatif üretim günlüğü)
      onay-bekleyen/                   (yazar yanıtı bekleyen paketler)
        <YYYY-MM-DD>_<makale-slug>/
          kontrol-formu.html           (5 dk tıklanabilir onay formu, tek başına çalışır)
          makale-onizleme.html         (yazıyı tarayıcıda okumayı kolaylaştıran landing)
          <yazar>-makale.pdf           (yazara giden makale PDF'i)
          <yazar>-onay-formu.pdf       (imza/onay PDF'i)
          meta.json                    (gönderim/deadline/status meta verisi)
      onaylanan/                       (onayı alınmış paketler)
        <YYYY-MM-DD>_<makale-slug>/
          ...                          (aynı paket + yazar yanıtı/karar kaydı)
  yayinlanmis-makaleler/               (mevcut export — yalnız onaylı/yayındaki makalelerin kronolojik dump'ı)
    2026-05/...
```

**İlke:**
- `icerik/yazar-onaylari/<slug>/` her yazarın **tek kalıcı onay arşivi** — bekleyen paket, onay belgesi, makale PDF'i ve yazar yanıtı yan yana.
- `onay-bekleyen/` **aktif iş kuyruğu**, `onaylanan/` **tamamlanmış onay arşivi** olarak aynı yazar klasörü altında durur.
- `article-log.md` yazarın **akümülatif makale günlüğüdür**; şablon cooldown ve yazar sesi sürekliliği bu dosyadan okunur.
- `icerik/yayinlanmis-makaleler/` **yalnız onaylanmış ve yayında olan makalelerin kronolojik dump'ıdır** (`npm run articles:export` çıktısı, audit log). Yanlışlıkla onay bekleyen bir makale bu arşive girmişse kayıt yayında sayılmaz; ilgili yazarın `onay-bekleyen/` paketine taşınır ve arşiv README'si düzeltilir.

**Yayın kapısı (hard gate):**
- Bir makale üretildiğinde **doğrudan siteye yayınlanmaz**; önce `onay-bekleyen/` paketine girer.
- `onay-bekleyen/` statüsündeki makale **site kaynak ağacında canlı rota olarak duramaz**: `src/pages/` altında `.astro` yayın dosyası, hub/sayı indeksi bağlantısı, RSS/static manifest kaydı veya `icerik/yayinlanmis-makaleler/` arşiv kaydı bulunmamalıdır. Varsa kaynak kopya aynı onay paketinde `site-kaynak.astro`, `makale-kaynak.astro` veya benzeri adla saklanır.
- Her yeni taslak veya revizyonla birlikte **yeni 5 dakikalık onay formu** üretilir.
- Yazar formda **DEĞİŞİKLİK İSTİYORUM** derse istenen değişiklik yapılır; revize makale için yeni paket/form üretilir ve süreç tekrar başlar.
- Yazar formda **ONAYLIYORUM** demeden makale `main` yayın akışına, site indekslerine, `article-approvals.ts` kaydına veya `onaylanan/` klasörüne alınmaz.
- Yazar onayı geldiğinde yanıt aynı pakete kaydedilir; paket `onaylanan/` altına taşınır ve ancak bu noktadan sonra yayın adımları başlar.

**Editör doğrudan onayı istisnası:**
- `berna-aksoy`, `alara-baykent` ve `senai-aksoy` için 5 dakikalık yazar onay formu zorunlu değildir.
- Bu üç yazarın yazılarında yayın kapısı **KC editör doğrudan onayı** ile açılır.
- Doğrudan onay yine iz bırakır: `src/data/article-approvals.ts` kaydında `note` alanına "KC editör doğrudan onayı" + tarih/bağlam yazılır.
- Varsa ilgili paket `icerik/yazar-onaylari/<slug>/onaylanan/` altına taşınır; paket yoksa `article-log.md` içinde "Doğrudan editör onayı" satırı tutulur.
- Bu istisna yalnızca onay formu zorunluluğunu kaldırır; tıbbi doğruluk, BEN, Evidence, yayın checklist'i ve stil disiplinini kaldırmaz.

**Kurumsal editöryal imza istisnası:**
- `estranova-editorial` slug'ı **Estranova Editörleri** kurumsal byline'ıdır; kişi/yazar profili değildir.
- Bu imza temel rehberler, hub tamamlayıcıları ve açıklayıcı editöryal sağlık haritalarında kullanılır.
- Dış yazar formu üretilmez; yayın kapısı **KC editör doğrudan onayı + bilimsel editör incelemesi** ile açılır.
- Görünür yazar kadrosunda ve `/yazarlar/<slug>` sayfalarında listelenmez; makale içinde sahipsiz anonimlik yerine “Hazırlayan: Estranova Editörleri” görünür.
- Kişisel anekdot, birinci tekil deneyim iddiası, dış yazar sesi taklidi veya köşe yazısı için kullanılmaz.
- Yazı tonu **Estranova Editorial Gloss** hibritidir: Vogue’dan atmosfer/seçicilik, Marie Claire’den çağdaş kadın deneyimine yakınlık, Estranova’dan kanıt-temelli sağlık disiplini alınır; hiçbir dış yayın, marka cümlesi veya bireysel yazar sesi taklit edilmez.
- Açılışta beden, zaman, şehir, gardırop, uyku, ayna, takvim veya mevsim gibi rafine bir sahne kurulabilir; ancak tıbbi iddialar Evidence, kırmızı bayraklar, kaynak disiplini ve Bilimsel Editör Notu ile dengelenir.
- Tüm yayınlarda `article-approvals.ts` kaydı ve mümkünse `icerik/yazar-onaylari/estranova-editorial/onaylanan/` altında kaynak/meta paketi tutulur.

**Stil öğrenme kaynağı:**
- Her form yanıtı aynı zamanda yazarın stil profilini geliştiren yapılandırılmış geri bildirimdir.
- Editör doğrudan onayı kapsamındaki üç yazarda form yoksa, KC'nin editöryal onay notu stil sinyali olarak kullanılabilir.
- Likert yanıtları, kritik toggle'lar ve serbest yorumlar önce paket içinde ham kayıt olarak saklanır; doğrudan profile otomatik yazılmaz.
- AI agent yanıtı özetleyerek `article-log.md` içine "form sinyali / stil etkisi / önerilen profil güncellemesi" olarak işler.
- Kalıcı profil değişikliği ancak editör onayıyla `writers/<slug>/profile.yaml`, `hot.md`, `warm.md`, `cold.md` veya `hidden.md` dosyalarına geçirilir.
- Tek bir formdaki geçici tercih yazarın kalıcı sesi sayılmaz; aynı sinyal birkaç makalede tekrar ederse güçlü stil kuralına dönüşür.

---

## Akış (uçtan uca)

### 1. Makale yazılır

AI agent yeni bir makaleyi taslak olarak hazırlar. Taslak kaynak dosya veya önizleme hazırlanabilir, ancak yazar onayı gelene kadar makale **yayın statüsünde değildir** ve siteye canlı içerik olarak alınmaz.

### 2. Onay paketi üretilir

```bash
npm run author:send-for-approval -- --slug <writer-slug> --article <article-pathname>
```

> `berna-aksoy`, `alara-baykent`, `senai-aksoy` için bu adım zorunlu değildir. Bu üç yazar için KC editör doğrudan onayı yeterlidir; kayıt `article-approvals.ts` ve/veya `article-log.md` içinde tutulur.

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
3. `icerik/yazar-onaylari/<slug>/onay-bekleyen/<YYYY-MM-DD>_<son-segment>/` klasörünü açar.
4. En az üç dosya üretir:
   - **`kontrol-formu.html`** — `templates/kontrol-formu.template.html`'in placeholder'ları doldurulmuş hali.
   - **`makale-onizleme.html`** — yazı için yönlendirme sayfası (canlı URL + form linki).
   - **`meta.json`** — gönderim tarihi, deadline (default +7 gün), durum (`pending-author-approval`) ve stil öğrenme kapısı.
   - Varsa **makale PDF'i / markdown örneği / kaynak kopyası** aynı pakete eklenir.
5. Yazara iletilecek dosya yollarını ve email konu satırını terminale basar.

### 3. Yazara iletilir

Editör (manuel olarak) yazara email atar:

> *Sevgili [Yazar Adı],*
> *[Makale Başlığı] başlıklı taslağı senin onayına sunuyorum. Aşağıdaki linkten yaklaşık 5 dakika içinde formu doldurabilirsin:*
> *file:///.../icerik/yazar-onaylari/<slug>/onay-bekleyen/<klasör>/kontrol-formu.html*
> *Yazıya: [canlı önizleme URL'i]*

### 4. Yazar formu doldurur

`kontrol-formu.html` tarayıcıda açılır — **internet bağımlılığı yok**, tek başına çalışır.

Kanonik yayın kapısı **standart 5 dakikalık onay formudur**. İlk makalede stil rafinesi gerekiyorsa ek uzun form kullanılabilir; bu uzun form yayın onayı sürecinin yerine geçmez, yalnızca yazar sesini geliştiren yardımcı bir kalibrasyon aracıdır.

#### Standart form (~5 dk, 7 alan) — yazarın 2. ve sonraki makaleleri için

- **Bölüm 1 — Genel Ses (3 likert 1-5):** Sesi tanıyor musunuz / Tabu konularda dürüst mü / Pazarlama hissi var mı?
- **Bölüm 2 — Kritik Kontrol (3 yes/no):** Çift Rol disiplini / Yasak ad / BEN ayrı blok mu?
- **Bölüm 3 — Yorumunuz (opsiyonel textarea):** kısa not.
- **Karar (2 büyük buton):** ✓ **ONAYLIYORUM** veya ✏ **DEĞİŞİKLİK İSTİYORUM**.

#### Opsiyonel stil rafine formu (~10 dk, 14 alan) — yazarın İLK framework makalesi için yardımcı kalibrasyon

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

**Form yanıtları** profil dosyalarını geliştirmek için kullanılır; ancak profil güncellemesi manuel editör adımıdır. Bölüm 3 ve açık yorum yanıtları önce `article-log.md` içinde özetlenir, sonra gerekirse profile işlenir.

**JSON payload `formType` alanı:** `'standard'` veya `'first-article-style-refine'`. Editör email'de bu alana bakarak sürecin hangi tipte olduğunu anlar.

### 5. Form gönderilir

Yazar karara bastığında JS form datasını JSON'a serialize eder ve `mailto:drsenaiaksoy@gmail.com` URL'ini açar:

- **Subject:** `[ONAY] <Makale Başlığı>` veya `[REVIZYON] <Makale Başlığı>`
- **Body:** JSON payload (yazar slug, makale slug, decision, likert + kontrol + yorum, ISO timestamp)

Yazar email'i gönderir (gönderim alışkanlığında olduğu istemcide otomatik açılır).

### 6. Editör yanıtı işler

Email'i alan editör:

1. JSON payload'ı aynı paketin içine `yazar-yaniti.json` veya `onay-yaniti.json` olarak kaydeder.
2. Yanıttaki stil sinyallerini işler:
   - Likertlerde düşük puan alan alanları "kaçınılacak eğilim" olarak özetler.
   - Yazarın beğendiği ritim, başlık, açıklık veya mizah tercihlerini "güçlenen imza" olarak not eder.
   - Serbest yorumu birebir profile kopyalamaz; editöryal özete çevirir.
   - `icerik/yazar-onaylari/<slug>/article-log.md` dosyasına form sinyali ve önerilen profil etkisini ekler.
   - Kalıcı profil değişikliği gerekiyorsa editör onayından sonra `writers/<slug>/` dosyalarına işler.
3. Eğer karar **DEĞİŞİKLİK İSTİYORUM** ise:
   - Yazarın istediği değişiklik makaleye uygulanır.
   - Eski paket revizyon izi olarak `onay-bekleyen/` altında kalır veya `revizyon-1`, `revizyon-2` notuyla korunur.
   - Revize makale için **yeni 5 dakikalık onay formu** ve yeni paket üretilir.
   - Editör yeni paketi yazara tekrar gönderir.
4. Eğer karar **ONAYLIYORUM** ise:
   - Onay yanıtı aynı pakete kaydedilir.
   - Tüm paket `icerik/yazar-onaylari/<slug>/onaylanan/<YYYY-MM-DD>_<makale-slug>/` altına taşınır.
   - `src/data/article-approvals.ts`, hub/sayı indeksleri ve yayın kayıtları ancak bu aşamada güncellenir.
   - Makale ancak bu aşamadan sonra siteye yayınlanır.

### 6.1 Editör doğrudan onayı nasıl işlenir?

Berna Aksoy, Alara Baykent veya Senai Aksoy yazısında KC doğrudan onay verdiyse:

1. `src/data/article-approvals.ts` içine ilgili pathname için kayıt eklenir.
2. `note` alanı şu formatı taşır: `KC editör doğrudan onayı — <tarih> — <kısa bağlam>`.
3. Varsa onay bekleyen paket `onaylanan/` altına taşınır; yoksa `article-log.md` satırında doğrudan onay ve stil notu tutulur.
4. Yayın/hub/sayı indeksleri ancak bu kayıt sonrası güncellenir.

---

## Template'ler

Tüm placeholder'lar `{{ALL_CAPS_SNAKE}}` formatında. Script substitution yapar.

| Template | Form tipi | Placeholder'lar |
|---|---|---|
| `templates/kontrol-formu.template.html` | Standart (~5 dk) | `{{WRITER_NAME}}`, `{{WRITER_SLUG}}`, `{{ARTICLE_TITLE}}`, `{{ARTICLE_SLUG}}`, `{{PREVIEW_URL}}`, `{{SENT_DATE}}`, `{{DEADLINE_DATE}}`, `{{TARGET_EMAIL}}` |
| `templates/kontrol-formu-uzun.template.html` | Opsiyonel ilk makale stil rafine (~10 dk) | Aynı placeholder seti |
| `templates/makale-onizleme.template.html` | — | `{{WRITER_NAME}}`, `{{ARTICLE_TITLE}}`, `{{PREVIEW_URL}}`, `{{FORM_URL}}` (relative `./kontrol-formu.html`) |
| `templates/meta.template.json` | — | Yukarıdakilerin yapısal versiyonu + `status` `createdAt` `deadline` |

---

## Komutlar

| Komut | Ne yapar |
|---|---|
| `npm run authors:init-folders` | `src/data/writers.ts`'teki tüm yazarlar için `icerik/yazar-onaylari/<slug>/{onay-bekleyen,onaylanan}/` iskeletini açar (bir kerelik). |
| `npm run author:send-for-approval -- --slug X --article /path` | Yeni 5 dakikalık yazar onay paketi üretir. Her revizyon turunda yeniden çalıştırılır. |
| `npm run articles:status` | (mevcut) onaylı/onaysız makale dökümü. |
| `npm run articles:export` | (mevcut) yayınlanmış makaleleri markdown'a döker. v2'de dual-write yapacak. |

## Pasif Yazar Kuralı

Bir yazar geçici olarak aktif kadrodan çıkarılacaksa profili, article-log'u ve onay arşivi silinmez. `src/data/writers.ts` içinde `status: 'inactive'` işaretlenir; site yalnızca `activeWriters` üzerinden kart, arama ve `/yazarlar/<slug>` rotası üretir. Tekrar aktif etmek için `status` alanı kaldırılır veya `active` yapılır.

Şu an pasif tutulan, geri dönüşe hazır yazarlar:

- `bahar-ozeray`
- `gonca-gokdemir`
- `elif-ozcan-dulundu`
- `ozlem-denizmen`

---

## Kapsam ve aşamalar

**v1 (şu an):** Klasör yapısı + 3 template + 2 script (init + paket üretici) + dokümantasyon. Yeni makaleler yazar onayı gelmeden yayınlanmaz; onay gelene kadar `onay-bekleyen/` altında kalır.

**v2 (sonraki):** Onaylanan paketlere yazar yanıtı, karar tarihi ve gerekirse markdown/PDF export kopyası ekleyen otomasyonu genişlet. Mevcut 21 makaleyi retrofit etmek için bir kerelik script.

**v3 (opsiyonel):** Form yanıtını mailto yerine Cloudflare Pages Function endpoint'ine POST eden HTTP akışı (Resend Faz 3 aktivasyonu sonrası).

---

## Form süre hedefi (5 dk)

- 3 likert (slider veya 5 radio button) ≈ 90 sn
- 3 yes/no/uygulanmaz toggle ≈ 60 sn
- 1 opsiyonel textarea (max 200 karakter) ≈ 90 sn
- Yazıyı önizleme süresi yazara bırakılır, form süreye dahil değildir.
- Karar + email gönderim ≈ 30 sn
- **Toplam form süresi: ~5 dakika**

---

## Yasal not

Form yanıtı email yoluyla iletilir; yazar göndermeden önce JSON payload'ı tarayıcıda görür ve düzenleyebilir. Form yanıtı sadece `drsenaiaksoy@gmail.com`'a gider; üçüncü taraf servis kullanılmaz (mailto: protokolü yerel email istemcisini açar). Bu mimari KVKK aydınlatma metnimizdeki **iç editöryal süreç** çerçevesindedir.

---

## Versiyon

- **v1.1** (2026-05-04) — Kanonik yayın kapısı netleştirildi: her taslak/revizyon için 5 dakikalık onay formu, değişiklik istenirse yeni revizyon paketi, yalnızca yazar onayı sonrası yayın + `onaylanan/`.
- **v1.0** (2026-05-03) — İlk yayım. Klasör yapısı + 3 template + 2 script + dokümantasyon. Pilot: yeni Senai/Berna makaleleri için.
