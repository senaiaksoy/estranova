# Estranova Go-Live Checklist

Bu belge, Estranova'nın açık erişimli editoryal sürümünü yayına almadan hemen önce
kontrol edilecek kısa yayın listesidir.

Kapsam:
- Açık erişimli editoryal site
- Üyelik / abonelik / paywall kapalı
- Okur hesabı ve bülten akışları "faz 2" öncesi durumda

Kapsam dışı:
- `docs/activation-checklist.md` içindeki üyelik, ödeme, paywall ve PDF/audio aktivasyonu

Son güncelleme: 6 Mayıs 2026

---

## Yayın Kararı

Canlıya çıkış için hedef yapı:
- `PUBLIC_LAUNCH_MODE=production`
- `membershipEnabled = false`
- `subscriptionEnabled = false`
- `paywallEnabled = false`
- `pdfAudioEnabled = false`
- `editorialDigestVisible = false`

Bu kombinasyon, siteyi aramaya açık ama üyelik/pazarlama katmanları kapalı bir
editoryal yayın olarak tutar.

---

## Kritik Bloklar

Yayına çıkmadan önce aşağıdaki 3 madde kapatılmalıdır:

- [ ] `src/pages/tibbi-sorumluluk.astro` içindeki "Bu sayfa hazırlanıyor" uyarısını kaldır ve metni final hale getir.
- [ ] Production ortamında `PUBLIC_LAUNCH_MODE=production` değişkeninin gerçekten tanımlı olduğunu doğrula.
- [ ] Navbar ve footer'da görünen "yakında" / placeholder yüzeylerin bilinçli olarak yayında kalacağına karar ver; kalmayacaksa ilgili linkleri gizle.

Bu üç madde kapanmadan "tam hazır" denmemeli.

---

## Yayın Öncesi Teknik Kontrol

- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] Build sonunda `/sitemap-index.xml`, `/rss.xml` ve `/robots.txt` üretildiğini kontrol et.
- [ ] Canonical URL'lerin `https://estranova.com` üstünden üretildiğini kontrol et.
- [ ] 404 sayfası, ana sayfa, bir hub sayfası ve bir makale sayfasını preview ortamında aç.

Önerilen kontrol yüzeyleri:
- `/`
- `/hormonal-gecis`
- `/zihin-denge/uyku-dinlenme/perimenopoz-uyku-degisen-yan`
- `/bilimsel-pencere/yeni-arastirmalar`
- `/tibbi-sorumluluk`

---

## Editoryal ve Güven Kontrolü

- [ ] Footer'da `Editoryal Politika`, `Tıbbi Sorumluluk`, `KVKK`, `Hakkımızda`, `İletişim` linkleri çalışıyor.
- [ ] Ana CTA'larda randevu / tedavi / satış dili yok.
- [ ] Ana sayfada ve hub sayfalarında İngilizce kullanıcı metni kalmadı.
- [ ] Makale sayfalarında `ArticleDisclaimer` ve editoryal güven blokları görünüyor.
- [ ] FAQ yüzeyi olan makalelerde görünür SSS ile JSON-LD kaynağı aynı.

---

## SEO ve İndeksleme Kontrolü

- [ ] Production build'de `<meta name="robots" content="index, follow, max-image-preview:large">` çıktısını doğrula.
- [ ] `/robots.txt` içinde `Allow: /` ve sitemap satırı olduğunu doğrula.
- [ ] `/rss.xml` açılıyor ve güncel makaleleri içeriyor.
- [ ] Sitemap içinde yeni static article route'ları görünüyor.
- [ ] Sosyal paylaşım için ana sayfa ve en az 2 makalede `og:image` çıktısını kontrol et.

---

## Bilinçli Olarak Açık Bırakılan Geçiş Alanları

Bu alanlar şimdilik blocker sayılmaz; fakat ekip kararıyla yayında tutuldukları net olmalıdır:

- `src/pages/giris.astro`
  Durum: gerçek giriş sistemi yok, bilgilendirme yüzeyi.
- `src/pages/abone-ol.astro`
  Durum: gerçek abonelik akışı yok, bekleme/duyuru yüzeyi.
- `src/pages/okuma-paneli.astro`
  Durum: localStorage tabanlı, hesap sistemi değil.
- `src/scripts/newsletter-signup.ts`
  Durum: gerçek e-posta servisi yerine localStorage mock akışı.

Eğer bu yüzeyler "henüz değil" hissi veriyorsa, canlıdan önce geçici olarak nav'dan saklanmaları daha temiz olur.

---

## Production Env Notları

Yayın anında en az şu değerler gözden geçirilmelidir:

- [ ] `PUBLIC_LAUNCH_MODE=production`
- [ ] Site domain'i `https://estranova.com`
- [ ] Cloudflare / hosting tarafında doğru primary domain tanımı
- [ ] Analytics, hata takibi veya temel uptime takibi varsa aktif doğrulama

---

## Yayın Sonrası İlk 24 Saat

- [ ] Ana sayfa, 3 makale ve 2 hub sayfasını gerçek domain üzerinden yeniden kontrol et.
- [ ] `robots.txt`, `rss.xml`, `sitemap-index.xml` canlı domainde tekrar aç.
- [ ] Mobil görünümde navbar, hero ve makale sayfası tipografisini kontrol et.
- [ ] Form veya localStorage yüzeylerinde beklenmedik JS hatası var mı console üzerinden kontrol et.
- [ ] Ekip içinde bir "ilk okur turu" yapıp dil, kırık link ve görsel yüklenme notlarını topla.

---

## Hızlı Karar Özeti

Şu anki değerlendirme:
- Build sağlıklı
- Açık erişimli editoryal omurga hazır
- Tam yayın için ana eksik: `tibbi-sorumluluk` sayfasının placeholder olmaktan çıkarılması

Pratik karar:
- Bu madde kapanır ve production env doğrulanırsa soft launch yapılabilir.
- Üyelik / abonelik / paywall tarafı bekleyebilir.
