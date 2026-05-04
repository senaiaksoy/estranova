# Perimenopozda Zihinsel Bulanıklık Tasarım Notu

## Amaç

`/zihin-denge/bilissel-saglik` alt-hub'ındaki içerik boşluğunu, `Estranova Editörleri` imzasıyla yayımlanacak kurumsal bir editoryal rehberle kapatmak.

Önerilen yazı:

- Başlık: `Perimenopozda Zihinsel Bulanıklık: Unutkanlık Hissi Günlük Hayatta Nasıl Okunur?`
- Rota: `/zihin-denge/bilissel-saglik/perimenopozda-zihinsel-bulaniklik`
- İmza: `estranova-editorial`

## Neden Bu Yazı

- `Zihin & Denge > Bilişsel Sağlık` şu anda içerik açısından zayıf.
- Konu, Estranova'nın 40+ kadın sağlık okuryazarlığı çizgisine doğrudan uyuyor.
- Başlık, korku üretmeden yüksek okur ilgisi taşıyan bir gündelik deneyimi adresliyor.
- Kurumsal editoryal imza bu konu için uygun; kişisel anekdot yerine sakin açıklama ve yönlendirme öne çıkıyor.

## Editoryal Çerçeve

- Ton: sakin, açıklayıcı, panik yaratmayan, Türkçe kullanıcı dili
- Konum: editoryal sağlık bilgi platformu
- Kaçınılacaklar:
  - klinik/tedavi promosyonu
  - “randevu”, “başvur”, “tedaviye başla” dili
  - dış kurum/jurnal adıyla otorite yığılması
  - kişisel deneyim veya birinci tekil anlatım
- İmza mantığı:
  - `Estranova Editörleri` kurumsal byline kullanılacak
  - `ArticleAuthorBlock` içindeki kurumsal içerik notu görünür olacak
  - bilimsel inceleme hattı varsayılan `Doç. Dr. Senai Aksoy` ile korunacak

## Yapısal Tasarım

Makale, mevcut static Astro article kabuğunu izleyecek:

- `SiteLayout`
- `SubmenuHero`
- `SubmenuArticleBody`
- `ArticleTOC`
- `ArticleAuthorBlock`
- özet kartı
- ana gövde için `ArticleProsePanel`
- ilgili içerikler
- disclaimer kartı

## İçerik İskeleti

H2 akışı:

1. `Bu bulanıklık hissi neden tam da şimdi ortaya çıkıyor?`
2. `Perimenopozda unutkanlık ile zihinsel yorgunluk aynı şey mi?`
3. `Uyku, stres ve sıcak basmaları zihni nasıl etkiliyor?`
4. `Hangi belirtiler olağan dalgalanma gibi okunabilir?`
5. `Ne zaman daha dikkatli değerlendirme gerekir?`
6. `Gündelik hayatta zihni biraz rahatlatan küçük düzenler neler olabilir?`
7. `Kısa hatırlatma: Bu dönem zekâyı değil yükü değiştirir`

## Metadata

- `publishedDate`: `4 Mayıs 2026`
- `writerSlug`: `estranova-editorial`
- `articleSection`: `Zihin & Denge`
- `sectionPath`: `/zihin-denge`
- keywords:
  - `perimenopoz`
  - `beyin sisi`
  - `unutkanlık`
  - `odaklanma`
  - `zihinsel yorgunluk`
  - `bilişsel sağlık`
  - `uyku`
  - `stres`
  - `hormon değişimi`

## Gerekli Repo Değişiklikleri

- Yeni makale dosyası:
  - `src/pages/zihin-denge/bilissel-saglik/perimenopozda-zihinsel-bulaniklik.astro`
- RSS/static manifest girişi:
  - `src/data/static-articles.ts`
- İlgili içerik kartları gerekiyorsa mevcut hub içeriğiyle uyumlu seçim yapılacak.

## Riskler ve Sınırlar

- Konu hafıza kaybı korkusuna kolay kayabilir; alarmist dil sıkı biçimde filtrelenecek.
- Bilişsel belirtiler anlatılırken tanı koyan veya nörolojik değerlendirme yerine geçen bir dil kurulmayacak.
- Kurumsal editoryal imza kullanıldığı için manifesto-anekdot kuralı bireysel yazarlar gibi uygulanmayacak; bunun yerine daha nötr editoryal rehber tonu korunacak.

## Başarı Kriteri

- `Bilişsel Sağlık` alt-hub’ına güçlü bir ilk giriş yazısı eklenmiş olacak.
- Makale Estranova görsel kabuğu, Türkçe dil politikası ve editoryal sağlık platformu konumuyla uyumlu olacak.
- Kurumsal byline, JSON-LD ve static manifest birlikte doğru çalışacak.
