# Estranova Publisher Module Specification

Bu dokuman, hazirlanan iceriklerin WordPress, Webflow veya benzeri bir CMS'e uygun bicimde yayin paketine donusturulmesi icin `Publisher` modul taslagini tanimlar.

Amaç:
- Cok agentli sistemden cikan son icerigi yayinlanabilir formata cevirmek
- Markdown + SEO metadata paketini standartlastirmak
- Estranova uslubunu koruyan title, description, ic link ve alt text onerileri uretmek

---

## 1) Publisher modulunun rolu

Publisher modulu:
- final onay almis metni teslim alir
- CMS'e uygun ciktı paketi uretir
- SEO alanlarini standartlastirir
- ic linkleme ve gorsel alt metin onerileri hazirlar

Publisher modulu **sunlari yapmaz**:
- yeni tibbi iddia eklemez
- Writer/Medical Checker/Compliance kararlarini override etmez
- tani, tedavi, recete veya satis dili eklemez

---

## 2) Girdi paketi

Publisher'a verilmesi gereken minimum girdi:

```json
{
  "topic": "string",
  "slug": "string",
  "category": "string",
  "article_title": "string",
  "article_body_markdown": "string",
  "excerpt": "string",
  "approved_sources": [],
  "risk_level": "low | medium | high",
  "disclaimer_needed": true,
  "final_decision": "ready_to_publish",
  "related_topics": [],
  "hero_image_context": "string"
}
```

Zorunlu kontrol:
- `final_decision` mutlaka `ready_to_publish` olmali
- disclaimer gerekiyorsa final metinde bulunmali

---

## 3) Cikti paketi

Publisher modulu su yapida bir CMS paketi uretir:

```json
{
  "cms_format": "markdown",
  "content": {
    "title": "string",
    "slug": "string",
    "body_markdown": "string",
    "excerpt": "string"
  },
  "seo": {
    "title_tag": "string",
    "meta_description": "string",
    "canonical_slug": "string"
  },
  "internal_linking": {
    "recommended_links": []
  },
  "media": {
    "hero_alt_text": "string",
    "inline_image_alt_texts": []
  }
}
```

---

## 4) Markdown cikti kurali

CMS'e gidecek ana govde `Markdown` formatinda olmali.

Beklenen yapi:
- `# H1`
- `## Kisa Ozet`
- `##` alt basliklar
- kisa paragraflar
- gerekiyorsa liste kullanimi
- en sonda yasal uyari

Markdown donusum kurallari:
- HTML zorunlu degilse kullanma
- tek paragrafta tek fikir koru
- uzun ve karmasik cumleleri bol
- CTA kullanilacaksa notr tut:
  - `Icerigi inceleyin`
  - `Rehberi kesfedin`
  - `Daha fazla bilgi`

---

## 5) Title Tag uretim kurali

### Amac
Arama sonucunda anlasilir, notr ve Estranova uslubuna uygun baslik vermek.

### Ton
- sakin
- bilgilendirici
- editoriyal
- sansasyonel olmayan

### Kurallar
- Ana konu baslikta gecmeli
- Mümkünse 50-60 karakter bandi hedeflenmeli
- Tani, tedavi, garanti, korku dili olmamali
- Marka eklenebilir: `- Estranova`

### Ornek kaliplar
- `Perimenopozda Gece Terlemeleri Neden Olur? - Estranova`
- `Menopozda Uyku Sorunlari Icin Destekleyici Adimlar - Estranova`
- `Odaklanma Guclugu ve Perimenopoz: Bilmeniz Gerekenler - Estranova`

### Kacinilacak basliklar
- `Gece Terlemelerini Bitiren Kesin Cozum`
- `Menopozda En Iyi Tedavi Yontemi`
- `Bu Yontemle Hemen Rahatlayin`

---

## 6) Meta Description uretim kurali

### Amac
Arama sonucunda icerigin ne sundugunu sade ve dogru anlatmak.

### Kurallar
- 140-160 karakter arasi hedeflenmeli
- Kisa ozet niteliginde olmali
- Tedavi vaadi veya tibbi kesinlik olmamali
- Kullaniciya ne ogrenecegini net soylemeli

### Ornekler
- `Perimenopozda gece terlemeleri neden olur? Destekleyici yaklasimlari, tetikleyicileri ve ne zaman destek alinabilecegini sade bir dille okuyun.`
- `Menopozda uyku sorunlarini etkileyen basliklari ve destekleyici yaklasimlari sakin, bilgilendirici bir rehberle kesfedin.`

### Kacinilacak meta aciklamalari
- `Gece terlemelerini kesin olarak bitiren dogal cozumler burada.`
- `Bu yontemle belirtilerden hizla kurtulun.`

---

## 7) Internal Linking (Ic linkleme) onerisi mantigi

Publisher modulu, final icerik icin 3-5 arasi ic link onerisi uretmelidir.

### Secim mantigi

Oncelik sirasiyla:
1. Ayni semptom ailesindeki icerikler
2. Ayni kategori/hub altindaki icerikler
3. Neden-sonuc veya ilgili mekanizma anlatan bilimsel pencere icerikleri
4. Okuyucuyu asiri dagitmayacak tamamlayici rehberler

### Link secim kurallari
- Icerikle dogrudan bagli olmali
- Tedavi/satis yonlendirmesi olmamali
- Anchor text sade ve acik olmali

### Onerilen anchor text kaliplari
- `Uyku sorunlari ile ilgili rehber`
- `Perimenopozu anlamak icin bu yazi`
- `Ostrojen degisimleri hakkinda daha fazla bilgi`

### Onerilen cikti formati

```json
{
  "recommended_links": [
    {
      "href": "/zihin-denge/uyku-bozuklugu-menopoz",
      "anchor_text": "Uyku sorunlari ile ilgili rehber",
      "reason": "Gece terlemeleri ve gece uyanmalari arasinda dogrudan iliski kuruyor"
    }
  ]
}
```

---

## 8) Gorsel alt metin (Alt Text) onerileri

### Amac
Gorsellerin erisilebilir, acik ve editoriyal tonda tanimlanmasi.

### Kurallar
- Goruleni tarif et
- Tibbi tanim veya yorum ekleme
- Duygu/sahne varsa olculu ve sade aktar
- 80-140 karakter bandi iyi hedeftir
- `resim`, `foto`, `gorsel` gibi gereksiz kelimelerle baslama

### Estranova goruntu yonu ile uyumlu alt text kaliplari
- `Dogal isikta pencere kenarinda dinlenen orta yasli kadin`
- `Gece yatak odasinda hafif battaniye ile oturan dusunceli kadin`
- `Sakin bir ev ortaminda bitki cayi tutan 40 yas ustu kadin`

### Kacinilacak alt text ornekleri
- `Menopozu olan hasta kadin`
- `Kesin cozum arayan mutsuz kadin`
- `Tedavi bekleyen hasta`

### Onerilen cikti formati

```json
{
  "hero_alt_text": "Gece yatak odasinda hafif battaniye ile oturan dusunceli orta yasli kadin",
  "inline_image_alt_texts": [
    "Sabah isigi alan odada pencereyi acan orta yasli kadin"
  ]
}
```

---

## 9) Publisher karar kontrolleri

Publisher paketi olusturulmadan once su kontroller gecmelidir:
- `final_decision = ready_to_publish`
- yasal uyari metni mevcut
- title_tag ve meta_description icinde yasakli vaat yok
- internal link onerileri notr
- alt text ifadeleri editoriyal ve olculu

Bu kosullardan biri saglanmiyorsa Publisher modulu ciktiyi `revision_required` olarak geri cevirmelidir.

---

## 10) Ornek cikti

```json
{
  "cms_format": "markdown",
  "content": {
    "title": "Perimenopozda Gece Terlemeleri: Daha Rahat Uyku Icin Destekleyici Adimlar",
    "slug": "perimenopozda-gece-terlemeleri",
    "body_markdown": "# Perimenopozda Gece Terlemeleri\\n\\n## Kisa Ozet\\n...",
    "excerpt": "Perimenopozda gece terlemeleri uykuyu bozabilir. Destekleyici yaklasimlari sade bir rehberde ele aliyoruz."
  },
  "seo": {
    "title_tag": "Perimenopozda Gece Terlemeleri Neden Olur? - Estranova",
    "meta_description": "Perimenopozda gece terlemeleri neden olur? Destekleyici yaklasimlari, tetikleyicileri ve ne zaman destek alinabilecegini sade bir dille okuyun.",
    "canonical_slug": "/perimenopozda-gece-terlemeleri"
  },
  "internal_linking": {
    "recommended_links": [
      {
        "href": "/zihin-denge/uyku-bozuklugu-menopoz",
        "anchor_text": "Uyku sorunlari ile ilgili rehber",
        "reason": "Gece terlemeleri ile uyku bolunmesi arasindaki iliskiyi tamamlar"
      }
    ]
  },
  "media": {
    "hero_alt_text": "Gece yatak odasinda hafif battaniye ile oturan dusunceli orta yasli kadin",
    "inline_image_alt_texts": [
      "Sabah isigi alan odada pencereyi acan orta yasli kadin"
    ]
  }
}
```
