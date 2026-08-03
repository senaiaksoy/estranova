export type PainPointStatus = 'draft' | 'testing' | 'validated' | 'archived';

export interface PainPoint {
  id: string;
  slug: string;
  title: string;
  userQuestion: string;
  shortDescription: string;
  relatedSymptoms: string[];
  articleRoutes: string[];
  articleTitles: string[];
  neutralNextSteps: string[];
  doctorQuestions: string[];
  videoTopics: string[];
  safetyDisclaimer: string;
  redFlagTopics: string[];
  status: PainPointStatus;
}

/**
 * Ürün doğrulama için merkezi pain-point kataloğu.
 * Bu kayıtlar tanı veya tedavi kararı üretmez; yalnızca eğitim ve okuma rotası sağlar.
 */
export const painPoints: PainPoint[] = [
  {
    id: 'sleep-uncertainty',
    slug: 'uyku-ve-gece-uyanmalari',
    title: 'Uyku ve gece uyanmaları',
    userQuestion: 'Gece uyanmam hormonal geçişle ilişkili olabilir mi?',
    shortDescription:
      'Gece uyanmalarını, uyku düzenindeki değişimleri ve eşlik eden belirtileri daha sakin bir çerçevede okumaya yardımcı olur.',
    relatedSymptoms: ['uyku-bozuklugu', 'sicak-basmasi', 'ruh-hali'],
    articleRoutes: [
      '/zihin-denge/uyku-dinlenme/uyku-bozuklugu-menopoz/',
      '/zihin-denge/uyku-dinlenme/perimenopoz-uyku-degisen-yan/',
      '/hormonal-gecis/menopoz/sicak-basmasi-gece-terlemesi/',
    ],
    articleTitles: [
      'Menopozda uyku bozukluğu',
      'Perimenopozda uykunun değişen yanı',
      'Sıcak basması ve gece terlemesi',
    ],
    neutralNextSteps: [
      'Uyanma saatini, yaklaşık süresini ve eşlik eden belirtileri not edin.',
      'Uyku değişikliklerini stres, hareket ve adet düzeniyle birlikte değerlendirin.',
      'Günlük işleviniz belirgin biçimde etkileniyorsa profesyonel değerlendirme düşünün.',
    ],
    doctorQuestions: [
      'Uyku değişikliğimin farklı nedenleri olabilir mi?',
      'Hangi bilgileri ve ne kadar süreyle takip etmem yararlı olur?',
      'Günlük yaşamımı etkileyen bu değişiklik için hangi değerlendirmeler konuşulabilir?',
    ],
    videoTopics: [
      'Menopozda gece uyanmaları neden artabilir?',
      'Gece uyanmalarını takip ederken hangi notlar tutulabilir?',
    ],
    safetyDisclaimer:
      'Bu okuma rotası tanı koymaz. Uyku değişikliklerinin birden fazla nedeni olabilir.',
    redFlagTopics: [
      'uzun süren ve günlük yaşamı belirgin etkileyen uykusuzluk',
      'şiddetli gündüz uykululuğu',
      'eşlik eden yoğun ruhsal belirtiler',
    ],
    status: 'testing',
  },
  {
    id: 'perimenopause-uncertainty',
    slug: 'perimenopoz-belirsizligi',
    title: 'Perimenopozu ve adet değişimlerini anlamak',
    userQuestion: 'Adetim devam ederken perimenopozda olabilir miyim?',
    shortDescription:
      'Adet düzenindeki ve bedendeki değişimleri tek bir belirtiye indirgemeden anlamlandırmaya yardımcı olur.',
    relatedSymptoms: ['ruh-hali', 'uyku-bozuklugu', 'sicak-basmasi'],
    articleRoutes: [
      '/hormonal-gecis/perimenopoz/perimenopoz-ilk-isaretler/',
      '/hormonal-gecis/perimenopoz/',
      '/hormonal-gecis/menopoz/menopoz-nedir/',
    ],
    articleTitles: [
      'Perimenopozun ilk işaretleri',
      'Perimenopoz rehberi',
      'Menopoz nedir?',
    ],
    neutralNextSteps: [
      'Adet tarihlerini, kanama düzenindeki değişiklikleri ve eşlik eden belirtileri not edin.',
      'Değişiklikleri uyku, stres ve günlük yaşam üzerindeki etkisiyle birlikte değerlendirin.',
      'Sizi en çok düşündüren soruları bir sağlık görüşmesine götürmek üzere yazın.',
    ],
    doctorQuestions: [
      'Yaşadığım değişiklikleri değerlendirirken hangi bilgiler önemlidir?',
      'Tek bir hormon testi bu dönemi anlamak için yeterli midir?',
      'Hangi kanama değişikliklerinde değerlendirme geciktirilmemelidir?',
    ],
    videoTopics: [
      'Adetim düzenli ama perimenopozda olabilir miyim?',
      'Perimenopozun ilk işaretleri nasıl fark edilir?',
    ],
    safetyDisclaimer:
      'Bu okuma rotası perimenopoz tanısı koymaz. Adet ve kanama değişiklikleri kişisel değerlendirme gerektirebilir.',
    redFlagTopics: [
      'beklenmedik veya yoğun kanama',
      'tekrarlayan ve açıklanamayan kanama değişiklikleri',
      'şiddetli veya giderek artan ağrı',
    ],
    status: 'testing',
  },
  {
    id: 'body-composition-change',
    slug: 'kilo-ve-vucut-kompozisyonu',
    title: 'Kilo ve vücut kompozisyonundaki değişimler',
    userQuestion: 'Yaşamım çok değişmediği hâlde vücudum neden farklılaşıyor?',
    shortDescription:
      'Kilo, bel çevresi, kas kütlesi, uyku ve hareket arasındaki ilişkiyi daha geniş bir çerçevede okumaya yardımcı olur.',
    relatedSymptoms: ['kilo', 'eklem'],
    articleRoutes: [
      '/hormonal-gecis/menopoz/tarti-yatisinca-vucut-kompozisyonu/',
      '/zamansiz-yasam/kilo-artisi-menopoz/',
      '/zamansiz-yasam/40-sonrasi-harekete-yeniden-baslamak/',
      '/zamansiz-yasam/kemik-sagligi-40-sonrasi/',
    ],
    articleTitles: [
      'Tartı yatışınca: vücut kompozisyonu',
      'Menopozda kilo artışı',
      '40 sonrası harekete yeniden başlamak',
      '40 sonrası kemik sağlığı',
    ],
    neutralNextSteps: [
      'Yalnızca tartıdaki sayıyı değil, hareket, uyku, enerji ve bel çevresi değişikliklerini de not edin.',
      'Kuvvet, hareket ve beslenme başlıklarını küçük ve sürdürülebilir adımlarla ele almayı düşünün.',
      'Hızlı veya belirgin değişikliklerde profesyonel değerlendirme düşünün.',
    ],
    doctorQuestions: [
      'Vücut kompozisyonundaki değişimi değerlendirirken hangi ölçümler anlamlıdır?',
      'Kas ve kemik sağlığımı korumak için hangi başlıkları konuşmalıyım?',
      'Kilo değişimimin başka nedenleri araştırılmalı mı?',
    ],
    videoTopics: [
      'Menopozda göbek çevresi neden değişebilir?',
      '40 yaşından sonra kas neden önemlidir?',
    ],
    safetyDisclaimer:
      'Bu okuma rotası kilo veya vücut kompozisyonu için kişisel beslenme ya da egzersiz reçetesi değildir.',
    redFlagTopics: [
      'hızlı ve açıklanamayan kilo değişimi',
      'belirgin güç kaybı veya hareket kısıtlılığı',
      'eşlik eden ciddi ağrı veya başka yeni belirtiler',
    ],
    status: 'testing',
  },
  {
    id: 'brain-fog-uncertainty',
    slug: 'beyin-sisi-ve-odaklanma',
    title: 'Beyin sisi ve odaklanma',
    userQuestion: 'Hormon testlerim normal olduğu hâlde neden odaklanmakta zorlanıyorum?',
    shortDescription:
      'Odaklanma, bellek, uyku ve ruh hâli değişikliklerini birlikte değerlendirmek için bir başlangıç rotası sunar.',
    relatedSymptoms: ['hafiza', 'uyku-bozuklugu', 'ruh-hali'],
    articleRoutes: [
      '/zihin-denge/bilissel-saglik/perimenopozda-zihinsel-bulaniklik/',
      '/zihin-denge/bilissel-saglik/',
      '/zihin-denge/uyku-dinlenme/uyku-bozuklugu-menopoz/',
    ],
    articleTitles: [
      'Perimenopozda zihinsel bulanıklık',
      'Bilişsel sağlık rehberi',
      'Menopozda uyku bozukluğu',
    ],
    neutralNextSteps: [
      'Odaklanma güçlüğünün hangi saatlerde ve hangi koşullarda arttığını not edin.',
      'Uyku, stres ve günlük yükle birlikte değişip değişmediğine bakın.',
      'Yeni, şiddetli veya günlük işlevi belirgin etkileyen değişikliklerde değerlendirme düşünün.',
    ],
    doctorQuestions: [
      'Odaklanma ve bellek değişikliğinin farklı nedenleri olabilir mi?',
      'Uyku ve ruh hâli bu tabloyu nasıl etkileyebilir?',
      'Hangi yeni belirtilerde daha erken değerlendirme gerekir?',
    ],
    videoTopics: [
      'Perimenopozda beyin sisi ve odaklanma',
      'Unutkanlık ile uyku bozulması nasıl birlikte okunur?',
    ],
    safetyDisclaimer:
      'Bu okuma rotası nörolojik veya psikiyatrik tanı koymaz.',
    redFlagTopics: [
      'ani başlayan belirgin bilişsel değişiklik',
      'günlük işlevde hızlı ve ciddi bozulma',
      'eşlik eden yeni nörolojik belirtiler',
    ],
    status: 'draft',
  },
  {
    id: 'sexual-health-uncertainty',
    slug: 'libido-ve-yakinlik',
    title: 'Libido ve yakınlık değişimleri',
    userQuestion: 'Libido azalması her zaman hormonlarla mı ilgilidir?',
    shortDescription:
      'Libido, vajinal kuruluk, ağrı, yorgunluk ve ilişki dinamiklerinin birlikte ele alınabileceği güvenli bir okuma alanı sunar.',
    relatedSymptoms: ['libido'],
    articleRoutes: [
      '/beden-yakinlik/cinsel-saglik/libido-degisimi-menopoz/',
      '/beden-yakinlik/cinsel-saglik/cinsellikte-agri-menopoz/',
      '/beden-yakinlik/cinsel-saglik/mahrem-bolge-degisimleri-menopoz/',
    ],
    articleTitles: [
      'Menopozda libido değişimi',
      'Cinsellikte ağrı',
      'Mahrem bölgedeki değişimler',
    ],
    neutralNextSteps: [
      'Libido değişimini ağrı, kuruluk, uyku, ruh hâli ve ilişki bağlamıyla birlikte düşünün.',
      'Konuşmak istediğiniz soruları güvenli ve uygun bir sağlık görüşmesi için not edin.',
      'Ağrı veya kanama varsa değerlendirmeyi ertelemeyin.',
    ],
    doctorQuestions: [
      'Libido veya yakınlık değişiminin hangi nedenleri olabilir?',
      'Kuruluk ya da ağrı için hangi seçenekler hakkında bilgi alabilirim?',
      'Bu konuyu görüşürken hangi bilgileri paylaşmam yararlı olur?',
    ],
    videoTopics: [
      'Libido azalması tek bir nedenle açıklanabilir mi?',
      'Menopozda yakınlık ağrısı hakkında bilinmesi gerekenler',
    ],
    safetyDisclaimer:
      'Bu okuma rotası cinsel sağlıkla ilgili kişisel tanı veya tedavi önerisi değildir.',
    redFlagTopics: [
      'tekrarlayan veya şiddetli ağrı',
      'ilişki sonrası ya da beklenmedik kanama',
      'yeni başlayan ve kalıcı fiziksel değişiklikler',
    ],
    status: 'draft',
  },
  {
    id: 'evidence-overload',
    slug: 'saglik-iddialarini-okuma',
    title: 'Sağlık iddiaları arasında güvenilir olanı seçmek',
    userQuestion: 'Bu bilgi gerçekten bilimsel mi, yoksa bana bir ürün mü satılıyor?',
    shortDescription:
      'Takviye, longevity ve anti-aging iddialarını kanıt, belirsizlik ve ticari çıkar açısından okumaya yardımcı olur.',
    relatedSymptoms: [],
    articleRoutes: [
      '/zamansiz-yasam/deneysel/deneysel-tedaviyi-okuma-kilavuzu/',
      '/zamansiz-yasam/deneysel/nad-plus-takviyesi/',
      '/zamansiz-yasam/deneysel/peptid-kullanimlari-menopoz/',
    ],
    articleTitles: [
      'Deneysel tedaviyi okuma kılavuzu',
      'NAD+ takviyesi',
      'Peptid kullanımları ve menopoz',
    ],
    neutralNextSteps: [
      'İddianın hangi çalışmaya dayandığını kontrol edin.',
      'Çalışmanın kimlerde ve hangi koşullarda yapıldığını okuyun.',
      'Ticari çıkarları ve kanıtın sınırlarını birlikte değerlendirin.',
    ],
    doctorQuestions: [
      'Bu uygulama veya ürün için insan çalışmalarında hangi kanıtlar var?',
      'Bilinen riskler ve belirsizlikler neler?',
      'Kullandığım ilaçlarla veya sağlık geçmişimle ilgili bir etkileşim olabilir mi?',
    ],
    videoTopics: [
      'Bir sağlık iddiasını birkaç dakikada nasıl okuruz?',
      'Anti-aging söyleminde bilim ve pazarlama nasıl ayrılır?',
    ],
    safetyDisclaimer:
      'Bir iddianın araştırılmış olması, ürünün veya uygulamanın herkes için uygun olduğu anlamına gelmez.',
    redFlagTopics: [
      'kişisel takviye veya ilaç önerisi talebi',
      'deneysel uygulamanın standart tedavi gibi sunulması',
      'ürün satın almaya yönlendiren kesin vaatler',
    ],
    status: 'draft',
  },
];

export function getPainPoint(id: string): PainPoint | undefined {
  return painPoints.find((painPoint) => painPoint.id === id);
}

export function getPainPointsBySymptom(symptomSlug: string): PainPoint[] {
  return painPoints.filter((painPoint) => painPoint.relatedSymptoms.includes(symptomSlug));
}

export function getActivePainPoints(): PainPoint[] {
  return painPoints.filter((painPoint) => painPoint.status !== 'archived');
}

export const painPointTopics = painPoints.map(({ id, title, userQuestion, shortDescription, articleRoutes, articleTitles, neutralNextSteps, doctorQuestions, safetyDisclaimer, redFlagTopics }) => ({
  id,
  title,
  userQuestion,
  shortDescription,
  articleRoutes,
  articleTitles,
  neutralNextSteps,
  doctorQuestions,
  safetyDisclaimer,
  redFlagTopics,
}));

export default painPoints;

