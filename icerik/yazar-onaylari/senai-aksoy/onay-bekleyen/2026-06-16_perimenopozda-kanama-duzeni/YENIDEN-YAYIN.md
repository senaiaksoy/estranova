# Tutulan taslak — Perimenopozda Kanama Düzeni (Senai Aksoy)

**Durum:** ⏸ Yayınlanmayacak (2026-06-16, KC kararı). Canlı rotadan çıkarıldı; approval + manifest + FAQ kayıtları geri alındı.

- **Hedef rota (yayınlanınca):** `/hormonal-gecis/perimenopoz/perimenopozda-kanama-duzeni/`
- **Kaynak:** `makale-kaynak.astro` (bu klasörde)
- **Yazar:** `senai-aksoy` (klinisyen istisnası, KC doğrudan onay)
- **Hub:** `hormonal-gecis/perimenopoz` — üst hero parent hero olarak korunur (değiştirilmez)
- **Görsel:** byline (dikey 4:5) + kart (yatay 2.4:1) editörden istenecek; henüz yok (byline portreye düşüyor)

## Yayın kapısı açılırsa — geri alma adımları

1. `makale-kaynak.astro` → `src/pages/hormonal-gecis/perimenopoz/perimenopozda-kanama-duzeni.astro`
2. `src/data/article-faqs.ts` → aşağıdaki `faq-entry.ts` bloğunu `articleFaqs` nesnesine ekle
3. `src/data/article-approvals.ts` → `{ pathname, writerSlug: 'senai-aksoy', approvedAt, note }` kaydı ekle
4. `src/data/static-articles.ts` → manifest girdisi ekle (title/description/publishedDate/writerSlug/section/sectionPath/keywords)
5. `icerik/yazar-onaylari/senai-aksoy/article-log.md` → M17 satırındaki `⏸ TUTULDU …` işaretini kaldır, gerçek yayın tarihiyle güncelle (V13/Kalıp 4/T3 artık cooldown'a sayılır)
6. `npm run build:ci` (strict audit + SEO) + `npm run lexicon:check` yeşil olmalı
7. Görsel bağlanacaksa: `ArticleAuthorBlock imageSrc` (byline) + `articleCardImageByRoute` (kart); `submenuHeroByRoute`'a article-path entry EKLENMEZ

## faq-entry.ts (article-faqs.ts'e geri eklenecek)

```ts
'/hormonal-gecis/perimenopoz/perimenopozda-kanama-duzeni/': [
  {
    question: 'Perimenopozda adetim ne kadar düzensizse hâlâ "olağan" sayılır?',
    answer:
      'Bu dönemde aralığın bir miktar kısalması ya da uzaması, kanamanın bazen daha hafif bazen daha yoğun olması beklenen bir tablodur; çünkü yumurtlama düzensizleşir ve hormonlar tek çizgide değil dalgalanarak değişir. Önemli olan tek bir tuhaf ayın kendisi değil, birkaç ay içinde tekrarlayan bir yön. Yine de düzensizliğe yoğun kanama, sık tekrar veya ara kanama eşlik ediyorsa bunu olağan dalgalanmadan ayırmak ve hekiminizle konuşmak gerekir.',
  },
  {
    question: 'Adet arası lekelenme veya ilişki sonrası kanama perimenopozda normal mi?',
    answer:
      'Adet aralığının değişmesi olağan kabul edilebilir; ama iki adet arasında ortaya çıkan lekelenme ya da ilişki sonrası kanama "geçiş dönemi işte" diyerek geçiştirilecek bir başlık değildir. Bunların arkasında polip, miyom, rahim ağzıyla ilgili nedenler veya rahim iç tabakasına dair değişiklikler olabilir. Bu tür kanamalar genellikle bir değerlendirme gerektirir; sıklığı ve süresi ne olursa olsun hekiminize iletmeniz daha doğru olur.',
  },
  {
    question: 'Çok yoğun ve uzun süren kanama perimenopozda beklenir mi, ne yapmalıyım?',
    answer:
      'Bu dönemde kanama bazı aylarda daha yoğun olabilir; ancak saatte bir pedi/tamponu dolduran, büyük pıhtılarla gelen, bir haftadan uzun süren ya da günlük hayatı belirgin kısıtlayan kanama olağan kabul edilmez. Bu tablo zamanla kansızlığa (anemiye) yol açabilir ve altta yatan bir nedeni işaret ediyor olabilir. Böyle bir kanamada beklemek yerine yakın zamanda hekiminize başvurmak en güvenli yoldur.',
  },
  {
    question: 'Menopozdan sonra yeniden kanama olursa bu ne anlama gelir?',
    answer:
      'Son adetin üzerinden 12 ay geçtikten sonra ortaya çıkan herhangi bir kanama — miktarı az bile olsa — ayrı bir başlıktır ve her zaman değerlendirme gerektirir. Çoğu zaman nedeni iyi huylu olsa da, rahim iç tabakasını değerlendirmek bu aşamada standart bir adımdır. Bu yüzden menopoz sonrası gelen kanamayı ertelemeden bir kadın hastalıkları ve doğum uzmanıyla konuşmak önemlidir.',
  },
  {
    question: 'Kanama düzeni için hangi muayene ve testler yapılır?',
    answer:
      'Değerlendirme genellikle ayrıntılı bir öyküyle başlar: kanamanın sıklığı, süresi, yoğunluğu ve eşlik eden belirtiler. Sonrasında muayene ve çoğu zaman bir ultrason ile rahim ve yumurtalıklar, gerektiğinde rahim iç tabakasının kalınlığı incelenir; bazı durumlarda kan sayımı, tiroid veya rahim iç tabakasından küçük bir örnekleme istenebilir. Hangi adımın gerekli olduğu kişiden kişiye değişir; bu yüzden tek bir reçete değil, size uygun bir değerlendirme planı konuşulur.',
  },
],
```
