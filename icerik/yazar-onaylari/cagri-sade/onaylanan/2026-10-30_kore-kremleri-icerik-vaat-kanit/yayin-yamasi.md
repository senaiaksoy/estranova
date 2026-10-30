# Kore kremleri yazısı — yayın yaması (UYGULANDI: 30 Ekim 2026, onay sonrası)

> **Durum: onay 30 Ekim 2026'da sözlü alındı ve yama uygulandı; aşağıdaki adımlar kayıt amaçlı duruyor.** Önceki ifade: onaydan önce uygulanmaz. CLAUDE.md, yazar ve tıbbi onay yayın kapısı: onay alınmadan makale `src/pages/` canlı rota ağacında durmaz; manifeste, hub veya sayı indekslerine, RSS'e ve `icerik/yayinlanmis-makaleler/` arşivine girmez. Bu belge onay gelince sırayla uygulanacak adımları ve hazır parçaları içerir.
> Hazırlanma: 2026-10-30 · Taslak: `icerik/taslaklar/kore-kremleri-icerik-vaat-kanit.astro` · Brief: `kore-kremleri-icerik-vaat-kanit-brief.md`

## 0. Kapı (KC'den alınacak, sözlü)

1. Op. Dr. Çağrı Sade yazar onayı (dört yanıt metne birebir girdi; kalın imza cümleleri değişmedi).
2. Doç. Dr. Senai Aksoy tıbbi inceleme onayı (varsayılan inceleyen; yazar Senai olmadığı için `medicalReviewer` verilmez).
3. ~~Görsel kararı~~ — KC 30 Ekim 2026'da Seçenek A'yı seçti (arşivdeki görsel); yeni kırpımlar hazır ve bu dalda (`public/images/library/editorial/kore-kremleri-icerik-vaat-kanit-byline.webp` ve `kore-kremleri-icerik-vaat-kanit.webp`).
4. Tam metin kontrolü açık kalan finansman satırları (brief bölüm 6b-3): kabul edilebilir mi, yoksa tam metin mi okunsun?

## 1. Sayfayı rota ağacına taşı

```bash
sed "s#'../../src/#'../../../#g" icerik/taslaklar/kore-kremleri-icerik-vaat-kanit.astro \
  > src/pages/beden-yakinlik/cilt-gorunum/kore-kremleri-icerik-vaat-kanit.astro
```

Taşıdıktan sonra dosyada:

- Frontmatter başındaki `TASLAK` yorum bloğunu sil.
- `publishedDate` (iki yerde: `buildArticleSchemas` ve `ArticleAuthorBlock`) yayın gününe çek.
- Byline görseli taslakta zaten bağlı (`ArticleAuthorBlock imageSrc`); taşırken ek iş yok.


## 2. `src/data/static-articles.ts` — manifest girdisi

Cagri Sade'nin mevcut girdilerinin yanına (örn. `menopoz-sonrasi-karin-germe` girdisinden sonra) ekle. Anasayfadaki yazar carousel'i "Son yazısı" kartını bu girdiden okur; girdi eklenmezse eski kart kalır. Hub (`SubHubPage`) listesi de `/beden-yakinlik/cilt-gorunum/` önekiyle bu manifestten dolar; ayrıca `sub-hubs.ts` değişikliği gerekmez.

```ts
  {
    path: '/beden-yakinlik/cilt-gorunum/kore-kremleri-icerik-vaat-kanit/',
    title: 'Kore Kremlerinin Kavanozunda Ne Var? İçerik, Vaat ve Kanıt',
    description:
      'Kore kremlerindeki içerikler, vaatleri ve insanlarda ölçülen sonuçlar yan yana: güneş koruyucudan seramide, salyangozdan PDRN\'ye. Menopozda cilt için etiketten neyi okuyabileceğiniz. Op. Dr. Çağrı Sade anlatıyor.',
    publishedDate: '<yayın günü>',
    writerSlug: 'cagri-sade',
    section: 'Beden & Yakınlık',
    sectionPath: '/beden-yakinlik/',
    keywords: [
      'Kore kremleri',
      'Kore cilt bakımı',
      'menopozda cilt bakımı',
      'cilt bakımı içerikleri',
      'seramid',
      'niasinamid',
      'retinol',
      'krem etiketi nasıl okunur',
    ],
  },
```

Not: apostrofu `.ts` string içinde kaçır (`PDRN\'ye`) ya da `’` kullan; commit öncesi `tsc` (bellek: apostrof .ts string kırar).

## 3. `src/data/submenu-heroes.ts` — kart görseli (`articleCardImageByRoute`)

Kart görseli (yatay 2.4:1), Seçenek A, yeni kırpım:

```ts
  '/beden-yakinlik/cilt-gorunum/kore-kremleri-icerik-vaat-kanit/': {
    src: '/images/library/editorial/kore-kremleri-icerik-vaat-kanit.webp',
    alt: 'Gün batımı ışığında sokakta yan dönmüş bakan, vitrin camında yansıması görünen bir kadının yakın planı; temsili görsel',
  },
```

`submenuHeroByRoute`'a yeni makale yolu EKLENMEZ.

## 4. `src/data/article-approvals.ts` — onay kaydı

```ts
  {
    pathname: '/beden-yakinlik/cilt-gorunum/kore-kremleri-icerik-vaat-kanit/',
    writerSlug: 'cagri-sade',
    approvedAt: '<onay günü>',
    note: 'Yazar onayı ve tıbbi onay (<tarih>, sözlü, KC). Kapsam: Çağrı Sade’nin dört klinik yanıtı birebir; kanıt haritası (güneş koruyucu, retinoidler, niasinamid, hyalüronik asit, seramid, centella, salyangoz, adenozin, PDRN, ginseng); Türkiye ve Kore mevzuat satırları resmî metinden; çıkar bağlantısı notları. Paket: icerik/taslaklar/kore-kremleri-icerik-vaat-kanit-brief.md. Commit/push yapılmadı.',
  },
```

Apostrof için `’` kullan (düz `'` string'i kapatır; 26 Ekim'deki Cloudflare build hatası).

## 5. Karşı yönden bağlantılar (`RelatedReadings`)

Yeni yazıyı şu üç yayındaki yazının `RelatedReadings paths` listesine ekle (yeni yazı manifestte olduktan sonra, yoksa humanize fallback üretir):

- `src/pages/zamansiz-yasam/yuz-mudahalesi-olcu-sorusu.astro` (Çağrı Sade; hacim ve sarkma işlem kararı)
- `src/pages/zamansiz-yasam/non-invaziv/non-invaziv-cihazlar-hifu-rf-mikroakim.astro` (cihaz sorusu)
- `src/pages/zamansiz-yasam/deneysel/ghk-cu-menopoz-cilt.astro` (bakır peptidi; bu yazıdaki peptid satırlarıyla örtüşür)

Eklenen yol: `'/beden-yakinlik/cilt-gorunum/kore-kremleri-icerik-vaat-kanit/'`. Bu üç yazının içeriği (kanıt, onay) değişmediği için onay kaydı gerekmez; `dateModified` değişmez.

## 6. Hub ve discoverability

- **Hub:** ek iş yok (bölüm 2). `Cilt & Görünüm` hub'ının epigrafı ve açıklaması zaten tanımlı; hub bu yazıyla "boş hub" olmaktan çıkar. Hub sayfasında `Son yazı` şeridinin yeni yazıyı gösterdiğini yerelde doğrula.
- **`public/llms.txt` "Öne çıkan içerikler":** küratörlü liste, hub başına bir temsilî makale. Beden & Yakınlık için şu an temsilci yok; bu yazı hub'ın ilk ve tek yazısı olduğundan KC isterse eklenir (tam URL + bir cümle). Google için gerekli değil, yalnızca diğer AI servisleri için. İstenmezse atlanır.
- **Sitemap ve RSS:** manifestten otomatik; `npm run seo:audit` doğrular.
- **`icerik/yayinlanmis-makaleler/` arşivi:** yayından sonra `npm run articles:export` ile üretilir (bir sonraki dışa aktarımda).

## 7. Doğrulama ve commit

```bash
npm run build:ci
```

Beklenen: lint, compliance, `articles:audit:strict`, `articles:audit:templates`, derleme ve `seo:audit` temiz. Ardından yerelde `/beden-yakinlik/cilt-gorunum/kore-kremleri-icerik-vaat-kanit/` ve `/beden-yakinlik/cilt-gorunum/` sayfalarını aç; hub'da yazının göründüğünü, byline ve kart görsellerinin doğru kırpıldığını ve anasayfadaki Çağrı Sade kartının güncellendiğini kontrol et. Yayın sonrası canlı metni `?nc=` ile doğrula (CF "success" canlı demek değildir).

Commit/push yalnızca KC isterse; Cloudflare `main`'e otomatik dağıtır.
