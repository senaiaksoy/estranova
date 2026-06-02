# Estranova — Marka Kuralları (v1.0)

> Bilimsel pencere · Hormonal geçiş · Zamansız yaşam

Bu döküman Estranova marka kimliğinin nasıl uygulanacağını tanımlar. Asıl marka kit klasörü: `D:\A-klasör\estranova-brand-kit\`. Bu dosya o klasörün **özetidir** — ana referans `estranova-brand-kit/brand-guidelines.html`.

---

## 1. Marka Özü

Estranova, menopoza ve sonrasına bilimsel bir rehberdir. Tonu editöryel ve sıcak, içeriği kanıt-temelli, sesi sakin ve güven verendir.

**Temel ilkeler:**
- **Bilimsel ama sıcak** — lab dergisi soğukluğunda olmadan kanıta dayalı.
- **Editöryel ama erişilebilir** — The Cut / Aeon / Nautilus tonu.
- **Lüks ama klinik değil** — Pink 600 + krem + siyah accent paleti zarafet verir; klinik beyazdan kaçın.
- **Kadın merkezli ama klişeleştirilmemiş** — pembe-çiçek estetiğinden uzak.

---

## 2. Logo

**Yön:** Sekiz köşeli "Nova" yıldızı + ESTRANOVA wordmark.
**Anlam:** Kuzey yıldızı / rehber / yeniden doğuş. 16 köşeli geometri (8 uzun + 8 kısa ışın), klasik pusula yıldızı.

### Dosyalar
| Dosya | Kullanım |
|---|---|
| `logo.svg` | Ana lockup (yıldız + wordmark), açık zeminde Pink 600 |
| `logo-icon.svg` | 8 köşeli pusula yıldızı — favicon, avatar, baskı, ≥32px her yer |
| `logo-icon-spark.svg` | 4 köşeli sparkle — yalnız küçük boy (≤24px) inline süs |
| **Ters versiyon** | Koyu zeminde altın yıldız + krem wordmark |

### Hangi yıldızı ne zaman?

| Bağlam | Varyant | Boyut |
|---|---|---|
| Favicon, app icon, OG image, lockup, baskı | `logo-icon.svg` (8 köşeli) | ≥32px |
| Eyebrow etiket, inline editöryel süs, kart başı, e-posta inline ikon | `logo-icon-spark.svg` (4 köşeli) | ≤24px |

**Önemli:** Spark varyantı sembol değişimi değil — aynı yıldızın küçük boy için optimize edilmiş halidir. 8 köşeli ana yıldız küçültüldüğünde "+" işaretine dönüşür; bu yüzden 24px ve altı kullanımlar için sparkle versiyonu kullanılır. Tipik renk siyah accent (`#000000`) veya Pink 600 (`#D81B60`) olabilir.

### Boş alan (clearspace)
Logo etrafında en az **"E" harfi yüksekliği** kadar boşluk bırakın.

### Minimum boyut
- **Dijital:** Wordmark 24px, ikon 16px (yükseklik).
- **Baskı:** Wordmark 8mm, ikon 5mm.

### ✓ Yapın
- Logoyu orijinal SVG'den kullanın.
- Bordo logo → açık zemin. Altın logo → koyu zemin.
- Boş alana saygı gösterin.
- Tek renkli baskıda tek Pink 600 veya tek siyah versiyonu.

### ✕ Yapmayın
- Döndürmeyin, eğmeyin, gerdirmeyin.
- Marka palet dışı renk kullanmayın.
- Yıldıza gölge, kontur, gradient eklemeyin.
- Wordmark harf aralığını değiştirmeyin (tracking 10px).
- Düşük kontrastlı arka planda kullanmayın.

---

## 3. Renk Paleti

### Birincil (2026-06-02 — Pink 600 + siyah accent paleti)
| Renk | HEX | Rol |
|---|---|---|
| Pink 600 | `#D81B60` | Hero, footer, CTA, link, lede, drop cap, ana vurgu |
| Siyah | `#000000` | Accent — yalnız **açık zeminde** (chapter counter, h2 ayraç, evidence label) (`--color-gold`) |
| Krem | `#fdf8f0` | Arka plan |
| Mürekkep | `#2d2d2d` | Makale metni |

> **Karanlık zemin kuralı:** Foto overlay üstündeki pill / divider / eyebrow rolünde **siyah yerine cream-warm** veya şeffaf cam (`bg-white/10 border-white/35 text-white backdrop-blur-sm`) kullanılır. Ana renk zeminli aside / footer için gold accent → `cream-warm` tonu (Pink 600 zeminde siyah okunmaz).

> Aktif palet yalnız Pink 600, siyah accent, krem ve mürekkep tonlarından oluşur.

### Genişletilmiş
| Renk | HEX | Rol |
|---|---|---|
| Krem Rose | `#f8eef0` | Sıcak kart zemin |
| Charcoal | `#1c1c19` | UI koyu metin |

### Kombinasyon kuralları
- **Yüksek kontrast:** Pink 600 ↔ Krem — ana lockup.
- **Lüks vurgu:** Siyah accent yalnızca chapter counter, evidence level 5, ince çizgiler ve süslemeler için. **Geniş alan rengi olarak kullanmayın.**
- **Ana vurgu:** Pink 600 `#D81B60` — sosyal medya kapağı, hero alanları ve CTA yüzeyleri.
- **Okuma kontrastı:** Body metni `#2D2D2D` krem zeminde — WCAG AA uyumlu.

### Mevcut kullanım (`src/index.css`)
```css
@theme {
  --color-primary: #D81B60;
  --color-primary-container: #D81B60;
  --color-secondary: #D81B60;
  --color-surface: #fdf8f0;
  --color-surface-container: #f8eef0;
  --color-charcoal: #1c1c19;
}
```

---

## 4. Tipografi

İki font: **Manrope** (`font-serif`, başlıklar / wordmark / editoryal vurgu) + **Kulim Park** (`font-sans`, gövde / arayüz / okuma metni). İkisi de Google Fonts üzerinden yüklenir.

> **Canlı font kuralı (2026-06-02):** estranova.com üretim CSS'i `--font-serif: "Manrope", sans-serif` ve `--font-sans: "Kulim Park", sans-serif` kullanır. Newsreader, Playfair Display ve Inter eski hafıza / taslak kalıntısıdır; yeni web, sosyal medya veya üretim asset'lerinde kullanılmaz.

### Hiyerarşi
| Eleman | Font | Boyut | Ağırlık | Diğer |
|---|---|---|---|---|
| H1 / Hero | Manrope | 72–96px | 620–800 | tracking sıkı, dergi kapağı hissi |
| H2 / Bölüm | Manrope | 36–56px | 600–700 | `font-serif` sınıfı |
| H3 / Alt | Manrope | 22–24px | 600 | |
| Lead | Kulim Park Italic | 19–22px | 400 | sakin editoryal giriş |
| Body | Kulim Park | 16–18px | 400 | line-height 1.6–1.75, max-width 64ch |
| UI / etiket | Kulim Park / Manrope | 11–13px | 500–700 | letter-spacing 0.12–0.28em, UPPERCASE |
| Wordmark | Manrope | — | 500–700 | tracked uppercase |

### Import
```css
@import url('https://fonts.googleapis.com/css2?family=Kulim+Park:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Manrope:wght@200..800&display=swap');
```

---

## 5. Ses ve Ton

Estranova bir **editöryel rehberdir**, bir wellness blogu değil. Tonu sakin, kanıt temelli, dengeli; abartısız ve duygusal şantajsız.

### ✓ Yapın
- Kanıt seviyesini açıkça belirtin (RKT, meta-analiz, gözlemsel).
- Belirsizliği saklamayın: "Bilim kararsız" demek "bilim çelişkili" demekten daha doğru.
- Olgun, bilgili bir kadın okurun seviyesinde yazın.
- Cümleler kısa ama akıcı. Pasif yapıdan kaçının.

### ✕ Kaçının
- Mucize anlatıları ("hayatınızı değiştirecek!", "doktorların söylemediği sır").
- Korku tabanlı pazarlama dili.
- Pembe-çiçek "kadınlık" klişeleri.
- Tıbbi tavsiye yerine geçen kesin reçeteler — daima "bireyselleştirilmeli" notu.

### Karşılaştırma

| ✓ Doğru ton | ✕ Yanlış ton |
|---|---|
| "Östrojenin kemik yoğunluğu üzerindeki etkisi, kontrollü çalışmalarda tutarlı şekilde gösterilmiştir; ancak başlangıç yaşı ve süresi sonucu belirler." | "Östrojen, kemiklerinizin gizli kahramanı! Doğru kullanımla yıllarınızı geri kazanabilirsiniz." |

---

## 6. Kullanım Alanları

### Dijital
- **Web sitesi:** Krem zemin (`#fcf9f4`), Pink 600 başlıklar, charcoal metin.
- **Favicon:** `logo-icon.svg` — Pink 600 yıldız.
- **Sosyal medya avatarı:** `social/avatar.svg` — Pink 600 gradient zeminde açık yıldız.
- **LinkedIn banner:** `social/banner-linkedin.svg` (1584×396).
- **X banner:** `social/banner-x.svg` (1500×500).
- **Instagram post:** `social/post-template.svg` (1080×1080) şablonu.
- **E-posta imzası:** `email/signature.html`.

### Baskı
- **Kartvizit:** Krem kart, Pink 600 wordmark, siyah accent detay; arka yüz boş veya ince siyah çerçeve.
- **Letterhead:** Üstte sol köşede yıldız + ESTRANOVA, altta küçük altın çizgi.
- **Sunum şablonu:** Krem zemin, Pink 600 başlık, ufak siyah bölüm numarası.

---

## 7. Brand Kit Dosya Yapısı

```
D:\A-klasör\estranova-brand-kit\
├── logo.svg                    Ana lockup
├── logo-icon.svg               Yalnız yıldız
├── colors.txt                  Hex paleti
├── fonts.txt                   Tipografi
├── preview.html                Logo varyasyon önizlemesi
├── brand-guidelines.html       Tam doküman (bu .md'nin uzun versiyonu)
├── social/
│   ├── avatar.svg              1080×1080 — Instagram/X/LinkedIn avatar
│   ├── banner-linkedin.svg     1584×396
│   ├── banner-x.svg            1500×500
│   └── post-template.svg       1080×1080 — Instagram post şablonu
├── email/
│   └── signature.html          E-posta imzası
└── assets/                     PNG export'ları
```

---

**Versiyon:** 1.0
**İletişim:** drsenaiaksoy@gmail.com
