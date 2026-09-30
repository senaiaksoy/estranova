import type { ArticleFaqItem } from './article-faqs';

// Özgün hekim yanıtları ve aktarım izi:
// icerik/yazar-onaylari/berna-aksoy/onaylanan/2026-09-30_perimenopoz-uyku-degisen-yan/klinik-katki.json
// Sayfadaki tek görünür SSS ve FAQPage bu kaynağı kullanır.
export const perimenopozUykuFaqs: ArticleFaqItem[] = [
  {
    question: 'Perimenopoz ne zaman başlıyor, uykuya hemen dokunuyor mu?',
    answer: 'Perimenopoz çoğunlukla 40’lı yaşlarda başlar, ancak bazı kadınlarda daha erken olabilir. İlk bulgu her zaman adet düzensizliği değildir; sıcak basması, gece terlemesi, çarpıntı, duygu durum değişiklikleri ve uyku bozulması bazen adet düzenindeki değişikliklerden önce fark edilebilir.',
  },
  {
    question: 'Her gece üçte uyanmak perimenopoz belirtisi mi?',
    answer: 'Her gece saat 03.00 civarında uyanmak tek başına perimenopoz belirtisi değildir. Gece terlemesi veya sıcak basmasıyla birlikteyse hormonal dalgalanmalar olası nedenlerden biridir; ancak stres, alkol, kafein, depresyon veya kaygı bozukluğu, uyku apnesi, tiroid sorunları, reflü veya bazı ilaçlar da benzer bir seyre yol açabilir. Saatin hep aynı olması menopoz için özgül bir bulgu değildir.',
  },
  {
    question: 'CBT-I nedir, uykusuzlukta neden gündeme geliyor?',
    answer: 'CBT-I, uykusuzluk için geliştirilmiş yapılandırılmış bir bilişsel davranışçı terapidir. Uyku saatlerini ve yatakta geçirilen zamanı düzenlemeyi, uykuyla ilgili kaygıyı azaltmayı öğretir. Uykusuzluk sıklaşıp gündüz yaşamınızı etkiliyorsa, özellikle uzun süredir devam ediyorsa gündeme getiririm; yalnızca “erken yatın” demekten ibaret değildir.',
  },
  {
    question: 'Uyku takip cihazı bana ne söyler, ne söylemez?',
    answer: 'Uyku takip cihazları eğilimi görmek için yararlıdır, tanı koymak için değil. Yatma-kalkma saatleri, toplam uyku süresi, gece uyanmalarındaki değişim, dinlenik nabız ve bazı cihazlarda sıcaklık değişimleri hakkında fikir verebilir. Ancak derin uyku, REM süresi ve kısa uyanmaları kesin ölçmez; perimenopozu, uyku apnesini veya başka bir uyku hastalığını tek başına teşhis edemez. En değerlisi, cihaz verisini belirtiler ve adet düzeniyle birlikte birkaç hafta izlemektir.',
  },
  {
    question: 'Sıcak basması gece uykumu bölüyorsa hormon tedavisi seçenekler arasında mı?',
    answer: 'Evet, gece terlemesi ve sıcak basması uykunuzu belirgin biçimde bölüyorsa hormon tedavisi seçeneklerden biridir. Kararı yaşınıza, menopozdan beri geçen süreye, rahminizin olup olmadığına ve kişisel sağlık risklerinize göre veririm. Sıcak basması olmadan yalnızca uykusuzluk varsa, hormon tedavisini otomatik olarak uyku ilacı gibi önermem; önce uykusuzluğun nedenini değerlendiririm.',
  },
];
