/**
 * Her hub ve alt-hub için tek bir editöryel epigraf cümlesi.
 * Sayfanın duygusal merkezini taşıyan satır — italic vurgu,
 * full-bleed cream bantta gösterilir.
 *
 * 3 cümle (cinsel-saglik, uyku-dinlenme, hormonlarin-bilimi) brand-writer
 * çalışmasından gelir; 17 cümle aynı tonda devam yazıldı.
 */

export const subHubEpigraphs: Record<string, string> = {
  // Hub girişleri
  '/hormonal-gecis/': 'Geçiş, yıllardır giydiğiniz bir kıyafetin ölçüsünü yeniden almaya benzer.',
  '/zamansiz-yasam/': 'İyi yaşlanmak, büyük vaatlerden çok küçük ve tekrarlanan doğrulardan beslenir.',
  '/beden-yakinlik/': 'Merak, utançtan daha iyi bir yol arkadaşıdır.',
  '/zihin-denge/': 'Zihin de bir doku gibidir; uykuyla, ışıkla ve sözle beslenir.',
  '/bilimsel-pencere/': 'Bir bulgu, sınırlarıyla birlikte okunduğunda anlam kazanır.',

  // Hormonal Geçiş alt-hub'ları
  '/hormonal-gecis/perimenopoz/': 'Perimenopoz çoğu zaman kapıyı çalmadan gelir; fark ettiğinizde bir süredir buradadır.',
  '/hormonal-gecis/menopoza-hazirlik/': 'Hazırlanmak, gelmekte olanı önceden tanımaktır.',
  '/hormonal-gecis/menopoz/': 'Son adet bir tarihtir; ondan sonraki yıllar uzun ve sizindir.',
  '/hormonal-gecis/40-sonrasi/': 'Kırktan sonra zaman çoğalır; daha az gürültülü, daha geniş soluklu.',

  // Zamansız Yaşam
  '/zamansiz-yasam/vitaminler/': 'Tabak, hapın söyleyemediği şeyleri söyler.',
  '/zamansiz-yasam/deneysel/': 'İyi bilim, ne öğrendiğini söylerken ne öğrenmediğini de saklamaz.',
  '/zamansiz-yasam/non-invaziv/': 'Her değişim neşter istemez; bazen ilk adım daha az müdahaleyle atılır.',

  // Beden & Yakınlık
  '/beden-yakinlik/cilt-gorunum/': 'Cilt, yılların kaydını herkesin görebileceği yerde tutar.',
  '/beden-yakinlik/cinsel-saglik/': 'Bedenin geri çekildiği yer, çoğu zaman cümlelerin de çekildiği yerdir.',
  '/beden-yakinlik/pelvik-taban/': 'Pelvik taban kaslarının adını çoğu zaman ancak bir şey değiştiğinde duyarsınız.',

  // Zihin & Denge
  '/zihin-denge/uyku-dinlenme/': 'Uyku önce gürültüyle değil, sessiz bir aşınmayla kaybedilir.',
  '/zihin-denge/duygusal-denge/': 'Hormon dalgaları dışarıdan görünmez; etkisi önce içerideki manzarada hissedilir.',
  '/zihin-denge/bilissel-saglik/': 'Unutmak çoğu zaman bir kayıp değil, sınıflama yorgunluğudur.',

  // Bilimsel Pencere
  '/bilimsel-pencere/hormonlarin-bilimi/': 'Hormonlar dokular arasında dolaşan mesajlardır; menopozda bu mesajlardan bazılarının sesi kısılır.',
  '/bilimsel-pencere/hucreler-ve-yaslanma/': 'Hücre düzeyinde yaşlanma, onarımın yavaş yavaş geri kaldığı yerdir.',
  '/bilimsel-pencere/yeni-arastirmalar/': 'Bilim yanıt biriktirir; ama önce daha iyi sorular geliştirir.',
};
