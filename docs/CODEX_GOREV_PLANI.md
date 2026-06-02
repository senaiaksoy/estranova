# CODEX GÖREV PLANI — Estranova

> Bu dosya Codex'e sırasıyla verilecek tüm görevleri içerir.
> Her görev bir önceki tamamlandıktan sonra verilmelidir.
> Her görevden sonra çıktıyı Claude'a kontrol ettirin.

---

## GÖREV 1: İletişim Sayfası
**Dosya:** `src/pages/iletisim.astro`

```
Estranova projesi için src/pages/iletisim.astro sayfası oluştur.

Önce CLAUDE.md kurallarını oku. Sonra src/pages/kullanim-kosullari.astro dosyasını referans al — aynı yapıyı kullan (SiteLayout, SiteNavbar, SiteFooter import et).

Bu bir BİLGİ AMAÇLI İLETİŞİM sayfasıdır. RANDEVU veya TEDAVİ sayfası DEĞİLDİR.

İçerik:
1. Başlık: "İletişim"
2. Açıklama: "Estranova editoryal ekibiyle iletişime geçin. Sorularınız, önerileriniz ve düzeltme talepleriniz için buradayız."
3. İletişim kartları (Tailwind card yapısı):
   - Genel Bilgi: bilgi@estranova.com
   - Editoryal Ekip: editoral@estranova.com
   - KVKK Talepleri: kvkk@estranova.com
4. Basit bir iletişim formu (sadece görsel — isim, e-posta, konu, mesaj alanları)
5. Altında not: "Bu form bilgi ve öneri amaçlıdır. Tıbbi danışmanlık veya randevu talebi için kullanılamaz."

ÖNEMLİ: "Randevu al" gibi ifadeler ASLA kullanma. Gönder butonu: "Mesajınızı İletin". Ton bilgilendirici ve sakin.
```

---

## GÖREV 2: Hakkımızda Sayfası
**Dosya:** `src/pages/hakkimizda.astro`

```
Estranova projesi için src/pages/hakkimizda.astro sayfası oluştur.

Önce CLAUDE.md kurallarını oku. src/pages/kullanim-kosullari.astro yapısını referans al (SiteLayout, SiteNavbar, SiteFooter).

Bu sayfa platformun editoryal kimliğini tanıtır. KLİNİK TANITIMI DEĞİLDİR.

Bölümler:
1. Başlık: "Hakkımızda"
2. Platform hikayesi — Estranova neden kuruldu? (2-3 paragraf, editoryal ton, "40+ kadınların güvenilir bilgiye erişim ihtiyacından doğdu" vurgusu)
3. Misyon — "Bilimsel bilgiyi herkesin anlayacağı dilde sunmak" (kısa, 1 paragraf)
4. Vizyon — "Türkiye'nin en güvenilir editoryal kadın sağlığı platformu olmak" (kısa)
5. Değerlerimiz — 4 madde kartlar halinde: Bağımsızlık, Bilimsel Doğruluk, Tarafsızlık, Erişilebilirlik
6. İçerik yaklaşımımız — Bilimsel editör denetimi, kanıt düzeyi sistemi, sade Türkçe (kısa açıklama)
7. Editoryal politika sayfasına yönlendirme linki

ÖNEMLİ: Doktor veya klinik tanıtımı yapma. "En iyi", "en başarılı" gibi ifadeler yasak. Ton: sakin, güvenilir, editoryal. Sade Türkçe (8-10. sınıf düzeyi).
```

---

## GÖREV 3: Ana Sayfa Yeniden Tasarımı
**Dosya:** `src/pages/index.astro` (mevcut dosyayı yeniden yaz)

```
Estranova projesi için src/pages/index.astro ana sayfasını CLAUDE.md ve docs/SITE_MIMARISI.md kurallarına göre yeniden tasarla.

Önce şu dosyaları oku:
- CLAUDE.md (tüm kurallar)
- docs/SITE_MIMARISI.md (ana sayfa bileşenleri listesi)
- src/pages/kullanim-kosullari.astro (referans yapı — SiteLayout, SiteNavbar, SiteFooter kullan)

Ana sayfa şu 10 bölümü SIRASYLA içermeli:

1. HERO BÖLÜMü — Büyük serif başlık, kısa açıklama, sakin editoryal his. Arka plan: #FDF8F0 krem. Başlık: "Hormonal geçişinizi anlamak için güvenilir rehberiniz" veya benzeri. CTA butonu: "Rehberi Keşfet" (tarafsız).

2. HORMONAL GEÇİŞ YOLCULUK HARİTASI — 4 karttan oluşan yatay bölüm: Perimenopoz → Menopoza Hazırlık → Menopoz → 40 Sonrası. Her kart kısa açıklama + "Devamını Oku" linki. Linkler: /hormonal-gecis/perimenopoz, /hormonal-gecis/menopoza-hazirlik, /hormonal-gecis/menopoz, /hormonal-gecis/40-sonrasi

3. EDİTÖRÜN KÖŞESİ — Ayrı bir bölüm. Başlık: "Editörün Köşesi". Alt başlık: "Bu Ay Kadın Dünyasında Ne Konuşuluyor?". Placeholder metin (3-4 cümle). Editör adı placeholder.

4. ZAMANSIZ YAŞAM ÖNE ÇIKAN İÇERİK — 3 makale kartı grid. Her kartta: başlık, kısa özet, kategori etiketi (Vitaminler, Deneysel Yaklaşımlar, Non-İnvaziv vb.), kanıt düzeyi rozeti (●●●○○ gibi). Placeholder içerik.

5. BELİRTİ BAZLI NAVİGASYON — "Ne Hissediyorsunuz?" başlığı. 6-8 belirti butonu grid halinde: Sıcak Basması, Uyku Bozukluğu, Ruh Hali Değişimi, Kilo Artışı, Eklem Ağrısı, Hafıza Sorunları, Cilt Değişimleri, Libido Azalması. Her buton tıklanabilir görünümlü.

6. BİLİMSEL EDİTÖR GÜVEN BLOĞU — Güven inşa eden bölüm. "İçeriklerimiz bilimsel editör denetiminden geçer" mesajı. Kanıt düzeyi sisteminin kısa açıklaması. 5 seviyeyi gösteren mini tablo veya görsel.

7. SON YAYINLAR — 4 makale kartı grid. Her kartta: başlık, kategori, tarih, kısa özet. Placeholder içerik. Kategoriler karışık olsun (Hormonal Geçiş, Beden & Yakınlık, Zihin & Denge vb.)

8. KORUYUCU SAĞLIK BLOĞU — "40 Yaşından Sonra Koruyucu Sağlık" başlığı. Tarama testleri takvimi ve önleme bilgileri. Kısa metin + "Rehberi Keşfet" CTA.

9. YUMUŞAK BİLGİ CTA — Tam genişlik bölüm. "Hormonal geçiş hakkında daha fazla bilgi mi istiyorsunuz?" + "İçerikleri Keşfedin" butonu. Sakin, baskısız.

10. FOOTER — SiteFooter bileşenini kullan.

TASARIM KURALLARI:
- Renkler: #D81B60 bordo, #FDF8F0 krem, #C9A96E altın, #2D2D2D gri, #F5EDE0 bej
- Başlıklar: Manrope (`font-serif`)
- Gövde: Kulim Park (`font-sans`)
- Bol beyaz alan, büyük tipografi
- Masaüstü öncelikli responsive
- App benzeri tasarım YASAK, dergi hissi olmalı

DİL KURALLARI:
- Sade Türkçe, 8-10. sınıf düzeyi
- "Randevu al", "tedaviye başla" gibi CTA'lar YASAK
- Korku dili YASAK
- Plaza Türkçesi YASAK
```

---

## GÖREV 4: Hormonal Geçiş Kategori Sayfası
**Dosya:** `src/pages/hormonal-gecis/index.astro`

```
Estranova projesi için src/pages/hormonal-gecis/index.astro kategori sayfası oluştur.

Önce CLAUDE.md ve docs/SITE_MIMARISI.md oku. src/pages/kullanim-kosullari.astro yapısını referans al.

Bu bir KATEGORİ SAYFASIDIR — bilgi yolları mantığıyla.

İçerik:
1. Başlık: "Hormonal Geçiş"
2. Açıklama: "Perimenopozdan menopoza, hormonal geçiş sürecinizi anlamak için kapsamlı bilgi rehberleri." (1-2 paragraf)
3. 4 alt kategori kartı (büyük, görsel ağırlıklı):
   - Perimenopoz → /hormonal-gecis/perimenopoz — "Nedir, ne zaman başlar, belirtileri neler?"
   - Menopoza Hazırlık → /hormonal-gecis/menopoza-hazirlik — "Geçiş sürecine nasıl hazırlanırsınız?"
   - Menopoz → /hormonal-gecis/menopoz — "Menopoz nedir, vücudunuzda neler değişir?"
   - 40 Sonrası Sağlık → /hormonal-gecis/40-sonrasi — "Koruyucu sağlık, tarama testleri, uzun vadeli planlama"
4. "Öne Çıkan İçerikler" bölümü — 3 placeholder makale kartı
5. Alt bölümde ilgili kategorilere link: "Zamansız Yaşam", "Beden & Yakınlık", "Zihin & Denge"

Tasarım: Estranova renk paleti, serif başlıklar, bol beyaz alan. CTA'lar tarafsız: "Devamını Oku", "Rehberi Keşfet".
```

---

## GÖREV 5: Zamansız Yaşam Kategori Sayfası
**Dosya:** `src/pages/zamansiz-yasam/index.astro`

```
Estranova projesi için src/pages/zamansiz-yasam/index.astro kategori sayfası oluştur.

Önce CLAUDE.md ve docs/SITE_MIMARISI.md oku. src/pages/hormonal-gecis/index.astro yapısını referans al (aynı kart düzeni).

Bu, Estranova'nın ÖNE ÇIKAN kategorisidir — anti-aging, longevity, takviyeler, deneysel yaklaşımlar.

İçerik:
1. Başlık: "Zamansız Yaşam"
2. Açıklama: "Dinamik ve enerjik yaşlanmak için bilimsel bilgi. Vitaminlerden deneysel yaklaşımlara, kanıt düzeyiyle değerlendirilmiş içerikler." (1-2 paragraf)
3. 5 alt kategori kartı:
   - Vitaminler & Takviyeler → /zamansiz-yasam/vitaminler — "D vitamini, Omega-3, mineraller, kolajen ve daha fazlası"
   - Deneysel Yaklaşımlar → /zamansiz-yasam/deneysel — "NAD+, Peptidler, Ozon tedavisi: bilim ne diyor?"
   - Non-İnvaziv Uygulamalar → /zamansiz-yasam/non-invaziv — "Lazer, HIFU, RF, PRP: kanıt düzeyiyle değerlendirme"
   - Beslenme & Metabolizma → /zamansiz-yasam/beslenme — "İnsülin direnci, gut sağlığı, metabolik denge"
   - Hareket & Vücut → /zamansiz-yasam/hareket — "Kas kütlesi, esneklik, postür, nefes teknikleri"
4. Kanıt düzeyi sistemi açıklama kutusu — "Bu kategorideki her makale bilimsel editör tarafından değerlendirilir" + 5 seviye kısa tablo
5. "Öne Çıkan İçerikler" — 3 placeholder makale kartı (her birinde kanıt düzeyi rozeti ●●●○○)

ÖNEMLİ: "Mucize", "kesin çözüm", "garantili" gibi ifadeler ASLA kullanma. Ton: bilimsel ama anlaşılır. Tedavi önerisi yapma, bilgilendir.
```

---

## GÖREV 6: Beden & Yakınlık Kategori Sayfası
**Dosya:** `src/pages/beden-yakinlik/index.astro`

```
Estranova projesi için src/pages/beden-yakinlik/index.astro kategori sayfası oluştur.

Önce CLAUDE.md oku. src/pages/hormonal-gecis/index.astro yapısını referans al.

Bu hassas ama önemli bir kategori. Zarif, bilimsel ve destekleyici ton şart.

İçerik:
1. Başlık: "Beden & Yakınlık"
2. Açıklama: "Menopoz döneminde bedeniniz, cinsel sağlığınız ve yakınlık ilişkileriniz hakkında bilimsel bilgi ve rehberlik." (zarif, klişesiz)
3. 5 alt kategori kartı:
   - Menopoz ve Cinsel Sağlık → /beden-yakinlik/cinsel-saglik
   - Vajinal Sağlık ve Değişimler → /beden-yakinlik/vajinal-saglik
   - Libido ve Hormonlar → /beden-yakinlik/libido
   - İlişki Dinamikleri ve İletişim → /beden-yakinlik/iliski
   - Beden Algısı ve Özgüven → /beden-yakinlik/beden-algisi
4. "Öne Çıkan İçerikler" — 3 placeholder makale kartı

ÖNEMLİ: Klişe kullanma ("cinsel hayat biter mi?" gibi). Vulger ifadeler yasak. Ton: zarif, bilimsel, destekleyici. Korku dili ve abartı yasak.
```

---

## GÖREV 7: Zihin & Denge Kategori Sayfası
**Dosya:** `src/pages/zihin-denge/index.astro`

```
Estranova projesi için src/pages/zihin-denge/index.astro kategori sayfası oluştur.

Önce CLAUDE.md oku. Diğer kategori sayfalarının yapısını referans al.

İçerik:
1. Başlık: "Zihin & Denge"
2. Açıklama: "Hormonal değişimlerin zihinsel ve duygusal etkilerini anlamak, uyku kalitesini artırmak ve ruh halinizi dengelemek için bilimsel rehberlik."
3. 4 alt kategori kartı:
   - Uyku & Dinlenme → /zihin-denge/uyku
   - Stres Yönetimi → /zihin-denge/stres
   - Beyin Sağlığı & Hafıza → /zihin-denge/beyin-sagligi
   - Ruh Hali & Duygusal Dalgalanmalar → /zihin-denge/ruh-hali
4. "Öne Çıkan İçerikler" — 3 placeholder makale kartı

Ton: Sakin, destekleyici, bilimsel. Korku dili yasak.
```

---

## GÖREV 8: Bilimsel Pencere Kategori Sayfası
**Dosya:** `src/pages/bilimsel-pencere/index.astro`

```
Estranova projesi için src/pages/bilimsel-pencere/index.astro kategori sayfası oluştur.

Önce CLAUDE.md oku. Diğer kategori sayfalarının yapısını referans al.

Bu, platformun bilimsel derinlik alanıdır.

İçerik:
1. Başlık: "Bilimsel Pencere"
2. Açıklama: "Uzman görüşleri, güncel araştırma özetleri ve sağlık dünyasının yaygın mitlerinin bilimsel gerçeklerle karşılaştırılması."
3. 3 alt kategori kartı:
   - Uzman Görüşleri → /bilimsel-pencere/uzman-gorusleri — "Editoryal danışman hekimlerin perspektifleri"
   - Araştırma Özetleri → /bilimsel-pencere/arastirma — "Güncel bilimsel literatürün anlaşılır özetleri"
   - Mitler vs. Gerçekler → /bilimsel-pencere/mitler — "Yaygın sağlık inançlarının bilimsel değerlendirmesi"
4. "Son Araştırma Özetleri" — 3 placeholder makale kartı

Ton: Bilimsel, entelektüel ama anlaşılır. "En iyi", "kesin" gibi ifadeler yasak.
```

---

## GÖREV 9: Örnek Makale Sayfası Şablonu
**Dosya:** `src/pages/zamansiz-yasam/vitaminler/d-vitamini-rehberi.astro`

```
Estranova projesi için bir ÖRNEK MAKALE sayfası oluştur: src/pages/zamansiz-yasam/vitaminler/d-vitamini-rehberi.astro

Önce şu dosyaları oku:
- CLAUDE.md (kurallar)
- docs/MAKALE_SABLONU.md (zorunlu makale yapısı)
- docs/KANIT_DUZEYI.md (kanıt düzeyi sistemi)
- docs/ICERIK_DILI_KILAVUZU.md (dil kuralları)
- src/pages/kullanim-kosullari.astro (SiteLayout yapısı referans)

Bu sayfa MAKALE_SABLONU.md yapısını birebir uygulamalı:

1. YAZAR BİLGİSİ (sayfa üstü):
   - Yuvarlak fotoğraf placeholder (gri daire)
   - Yazar: "[Yazar Adı]"
   - Kısa tanıtım: "Sağlık editörü, 8 yıldır kadın sağlığı alanında yazan gazeteci"
   - Yayın tarihi: "14 Nisan 2026"

2. BAŞLIK: "D Vitamini: 40 Yaşından Sonra Ne Kadar Almanız Gerekiyor?"

3. KISA ÖZET KUTUSU:
   - Bu yazıda öğrenecekleriniz: 3 madde
   - Okuma süresi: 6 dakika

4. MAKALE GÖVDESİ (gerçek içerik yaz, 4-5 bölüm):
   - D Vitamini Nedir ve Neden Önemlidir?
   - 40 Yaşından Sonra D Vitamini İhtiyacı Neden Artar?
   - Eksiklik Belirtileri Nelerdir?
   - Ne Kadar Almanız Gerekiyor? (dozaj bilgisi — tarafsız)
   - Doğal Kaynaklar ve Takviye Seçimi

5. İLGİLİ İÇERİK BAĞLANTILARI:
   → "Omega-3 ve Kadın Sağlığı" (placeholder link)
   → "Kemik Sağlığı ve Menopoz" (placeholder link)
   → "40 Yaşından Sonra Tarama Testleri" (placeholder link)

6. BİLİMSEL EDİTÖR NOTU (ayrı çerçeve, sayfa altı):
   - Kanıt Düzeyi: A — Güçlü Kanıt ●●●●●
   - Metin: "D vitamini takviyesinin kemik sağlığı üzerindeki olumlu etkisi çok sayıda randomize kontrollü çalışma ve meta-analiz ile desteklenmektedir. Uluslararası kılavuzlar menopoz sonrası kadınlarda D vitamini takviyesini önermektedir."
   - Son güncelleme: Nisan 2026

7. TIBBİ SORUMLULUK REDDİ (sayfa en altı):
   "Bu içerik yalnızca genel bilgilendirme amaçlıdır ve bireysel tıbbi değerlendirme, tanı veya tedavinin yerini almaz."

TASARIM:
- Bilimsel Editör Notu bordo sol kenar + bej arka plan ile vurgulu kutu
- Kısa Özet kutusu altın kenar çizgisi
- Yazar bilgisi yuvarlak gri placeholder + isim
- Estranova renk paleti
- Bol beyaz alan, kısa paragraflar

DİL: Sade Türkçe, 8-10. sınıf, plaza Türkçesi yasak, korku dili yasak, satış dili yasak. Tedavi önerme, bilgilendir.
```

---

## GÖREV 10: İkinci Örnek Makale (Zamansız Yaşam — Deneysel)
**Dosya:** `src/pages/zamansiz-yasam/deneysel/nad-plus-takviyesi.astro`

```
Estranova projesi için ikinci örnek makale: src/pages/zamansiz-yasam/deneysel/nad-plus-takviyesi.astro

Önce şu dosyaları oku: CLAUDE.md, docs/MAKALE_SABLONU.md, docs/KANIT_DUZEYI.md, docs/ICERIK_DILI_KILAVUZU.md.
src/pages/zamansiz-yasam/vitaminler/d-vitamini-rehberi.astro dosyasını şablon olarak kullan — aynı yapı ve tasarım.

MAKALE İÇERİĞİ:

1. Yazar bilgisi (placeholder)
2. Başlık: "NAD+ Takviyesi: Bilim Ne Diyor?"
3. Kısa özet kutusu (3 madde + okuma süresi: 7 dakika)
4. Makale gövdesi (gerçek içerik, 5-6 bölüm):
   - NAD+ Nedir? (nikotinamid adenin dinükleotid, hücresel enerji)
   - Yaşla Birlikte NAD+ Düzeyi Neden Düşer?
   - NAD+ Takviyesi Araştırmaları (NMN, NR — mevcut çalışmaları özetle)
   - Olası Faydalar ve Sınırlılıklar (dengeli sunum)
   - Güvenlik ve Yan Etkiler
   - Sonuç: Bilim Henüz Nerede?

5. İlgili içerik linkleri (3 placeholder)
6. BİLİMSEL EDİTÖR NOTU:
   - Kanıt Düzeyi: C — Gelişen Kanıt ●●●○○
   - Metin: "NAD+ takviyesinin hücresel yaşlanma üzerindeki etkisini inceleyen 12 klinik çalışma bulunmaktadır. Sonuçlar laboratuvar ortamında umut verici olsa da, insanlarda uzun vadeli etkinlik ve güvenlik verileri henüz yeterli değildir. Bu konuda araştırmalar devam etmektedir."
   - Son güncelleme: Nisan 2026
7. Tıbbi sorumluluk reddi

ÖNEMLİ: Bu DENEYSEL bir konudur. Abartma, mucize dili, tedavi önerisi YASAK. "Umut verici ama henüz kesin değil" tonu korunmalı. Kanıt düzeyi C olduğunu vurgula.
```

---

## GÖREV 11: Editörün Köşesi İlk Yazısı
**Dosya:** `src/pages/editorun-kosesi/nisan-2026.astro`

```
Estranova projesi için Editörün Köşesi ilk yazısı: src/pages/editorun-kosesi/nisan-2026.astro

Önce CLAUDE.md ve docs/ICERIK_DILI_KILAVUZU.md oku. Mevcut makale sayfalarını referans al.

Format: Aylık editör yazısı. Diğer makalelerden biraz daha kişisel ve sıcak ton kullanılabilir.

İçerik:
1. Başlık: "Bu Ay Kadın Dünyasında Ne Konuşuluyor?"
2. Alt başlık: "Nisan 2026 — Editörün Köşesi"
3. Editör bilgisi (placeholder isim + fotoğraf placeholder)
4. İçerik (gerçek metin yaz, 4-5 paragraf):
   - İlkbaharla birlikte enerji, hareket ve yenilenme temaları
   - Son haftalarda gündemde olan bir kadın sağlığı konusu (örn: HRT tartışmaları, longevity trendi)
   - Estranova'da bu ay ne okuyabilirsiniz? (site içi yönlendirme)
   - Okuyuculara sıcak bir kapanış

5. İlgili içerik linkleri
6. Tıbbi sorumluluk reddi

Ton: Kişisel, sıcak, editöryal. "Biz" kullanılabilir. Ama bilimsel çerçeveyi koru. Satış dili yasak.
```

---

## GÖREV SIRASI ÖZETİ

| # | Görev | Dosya | Öncelik |
|---|-------|-------|---------|
| 1 | İletişim sayfası | src/pages/iletisim.astro | Faz 1 (tamamlama) |
| 2 | Hakkımızda sayfası | src/pages/hakkimizda.astro | Faz 1 (tamamlama) |
| 3 | Ana sayfa yeniden tasarım | src/pages/index.astro | Faz 2 (tasarım) |
| 4 | Hormonal Geçiş kategorisi | src/pages/hormonal-gecis/index.astro | Faz 2 |
| 5 | Zamansız Yaşam kategorisi | src/pages/zamansiz-yasam/index.astro | Faz 2 |
| 6 | Beden & Yakınlık kategorisi | src/pages/beden-yakinlik/index.astro | Faz 2 |
| 7 | Zihin & Denge kategorisi | src/pages/zihin-denge/index.astro | Faz 2 |
| 8 | Bilimsel Pencere kategorisi | src/pages/bilimsel-pencere/index.astro | Faz 2 |
| 9 | D Vitamini örnek makale | src/pages/zamansiz-yasam/vitaminler/d-vitamini-rehberi.astro | Faz 3 |
| 10 | NAD+ örnek makale | src/pages/zamansiz-yasam/deneysel/nad-plus-takviyesi.astro | Faz 3 |
| 11 | Editörün Köşesi ilk yazı | src/pages/editorun-kosesi/nisan-2026.astro | Faz 3 |

Her görev bittikten sonra Claude'a kontrol ettirin. Claude düzeltmeleri yapar ve sonraki göreve geçmeniz için onay verir.
