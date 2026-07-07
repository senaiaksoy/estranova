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
  '/hormonal-gecis/': 'Hormonal geçiş bir kayıp hikâyesi değil, yeniden ölçek alma hikâyesidir.',
  '/zamansiz-yasam/': 'Yaşlanmamak değil iyi yaşlanmak; uzaktaki büyük cümle değil, bugünkü küçük doğru.',
  '/beden-yakinlik/': 'Beden, hakkında konuştuğumuzda iyileşmeye başlar.',
  '/zihin-denge/': 'Zihin de bir doku gibidir; uykuyla, ışıkla ve sözle beslenir.',
  '/bilimsel-pencere/': 'Bilimi sevmek, kesinlik değil; iyi soru sormayı sevmektir.',

  // Hormonal Geçiş alt-hub'ları
  '/hormonal-gecis/perimenopoz/': 'Geçiş bir sayfa değil, gizlice sahaya inen bir dönüştür.',
  '/hormonal-gecis/menopoza-hazirlik/': 'Hazırlık, kaybı azaltmak için değil, gelmekte olanı tanımak içindir.',
  '/hormonal-gecis/menopoz/': 'Menopoz bir son değil, bedenin uzun bir cümleyi yeniden noktalama anıdır.',
  '/hormonal-gecis/40-sonrasi/': 'Kırktan sonra zaman çoğalır; daha az gürültülü, daha geniş soluklu.',

  // Zamansız Yaşam
  '/zamansiz-yasam/vitaminler/': 'Tabak, hapın söyleyemediği şeyleri söyler.',
  '/zamansiz-yasam/deneysel/': 'Bilim ne öğrendiğini değil, ne öğrenmediğini de söylemelidir.',
  '/zamansiz-yasam/non-invaziv/': 'Bedeni dinlemek, ona dokunmadan da mümkündür.',

  // Beden & Yakınlık
  '/beden-yakinlik/cilt-gorunum/': 'Cilt yaşlanmaz; kendi biyografisini taşır.',
  '/beden-yakinlik/cinsel-saglik/': 'Bedenin geri çekildiği yer, çoğu zaman cümlelerin de çekildiği yerdir.',
  '/beden-yakinlik/pelvik-taban/': 'Bedenin sessizce çalışan kasları, sessizliği bırakınca konuşur.',

  // Zihin & Denge
  '/zihin-denge/uyku-dinlenme/': 'Uyku önce gürültüyle değil, sessiz bir aşınmayla kaybedilir.',
  '/zihin-denge/duygusal-denge/': 'Hormon dalgaları kıyıyı değil, içerideki manzarayı şekillendirir.',
  '/zihin-denge/bilissel-saglik/': 'Unutmak çoğu zaman bir kayıp değil, sınıflama yorgunluğudur.',

  // Bilimsel Pencere
  '/bilimsel-pencere/hormonlarin-bilimi/': 'Hormonlar bedenin gürültüsü değil, dilidir; menopoz o dilin yeniden öğrenilmesidir.',
  '/bilimsel-pencere/hucreler-ve-yaslanma/': 'Yaşlanma, bedenin onarımını yavaşça unuttuğu yerdir.',
  '/bilimsel-pencere/yeni-arastirmalar/': 'Bilim, yanıt biriktirir; ama önce daha iyi sorular geliştirir.',
};
