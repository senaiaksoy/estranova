export interface Writer {
  slug: string;
  displayName: string;
  role: string;
  ageBand: string; // örn. "55-56"
  publicBio: string; // 2-3 cümle, yayin-kurulu için
  signaturePhrase: string; // tek cümle, anasayfa kartı için
  portrait?: string; // /images/writers/{slug}.jpg (yoksa undefined)
  focusAreas: string[]; // 2-3 çekirdek kategori etiketi
  isEditor: boolean; // Berna true, diğerleri false
  writingStyle?: {
    voice: string;
    rhythm: string;
    framing: string;
    dos: string[];
    donts: string[];
  };
}

export const writers: Writer[] = [
  {
    slug: 'berna-aksoy',
    displayName: 'Berna Aksoy',
    role: 'Yönetici Editör / Ana Yazar',
    ageBand: '55-56',
    publicBio:
      'Robert College ve Boğaziçi Üniversitesi İşletme mezunu. Uzun yıllar kurumsal bankacılıkta çalıştıktan sonra kendi işini kurarak yüz kişiyi aşan bir ekibi yönetti. Hormonal geçiş döneminde önleyici sağlık, araştırmaya dayalı karar ve yaşam tarzı dengesi üzerine içerik üretiyor.',
    signaturePhrase:
      'Hormonal geçişi sakin bir araştırmacı gözüyle okuyor; kontrolü kaybetmeden anlamayı kolaylaştırıyor.',
    portrait: '/images/writers/berna-aksoy.webp',
    focusAreas: ['Hormonal Geçiş', '40 Sonrası', 'Yaşam Tarzı'],
    isEditor: true,
    writingStyle: {
      voice: 'Sakin, güven veren ve düzen kuran editör tonu.',
      rhythm: 'Orta uzunlukta cümleler; net geçişler ve toparlayıcı ara cümleler.',
      framing: 'Önce resmi sadeleştirir, sonra seçenekleri dengeler, en sonda uygulanabilir ilk adımı verir.',
      dos: [
        'Karmaşık konuyu önce üç başlıkta toparla.',
        'Belirsizlikte kesin hüküm yerine dengeli olasılık dili kullan.',
        'Okuru acele karardan uzaklaştırıp planlı takibe yönlendir.',
        'Kırmızı bayrakları kısa ve açık maddelerle ver.',
      ],
      donts: [
        'Panik duygusu yükselten başlık ve cümle kurma.',
        'Tek bir yöntemi herkes için doğru gibi sunma.',
        'Gereksiz teknik terimi açıklamasız bırakma.',
      ],
    },
  },
  {
    slug: 'alara-baykent',
    displayName: 'Alara Baykent',
    role: 'Sağlık Yazarı / Konuk Katkı',
    ageBand: '30-31',
    publicBio:
      'Eski profesyonel windsurfer; adolesan döneminde voleybol alt yapısında oynadı, ardından profesyonel seviyede windsurfing yaptı. Atlar, köpekler ve kuşlarla çevrili bir yaşam sürüyor. Cumhuriyet Pazar Eki\'nde haftalık yazıyor, anti-aging ve well-being konularına yakın bir sporcu/yazar.',
    signaturePhrase:
      'Anne kuşağını gözlemleyen, sporcu beden okumasıyla erken hazırlık yazıları yazan genç bir akran.',
    portrait: '/images/writers/alara-baykent.webp',
    focusAreas: ['Spor & Hareket', 'Anti-aging', 'Doğa & Hayvan'],
    isEditor: false,
    writingStyle: {
      voice: 'Canlı, motive edici ve beden farkındalığı yüksek akran tonu.',
      rhythm: 'Kısa ve enerjik cümleler; akışı bozmadan pratik öneriye bağlanan yapı.',
      framing: 'Gündelik bir durumla açar, hareket-beden ilişkisini kurar, sürdürülebilir mini adımla kapatır.',
      dos: [
        'Hareket önerilerini günlük hayata uyarlanabilir tut.',
        'Performans baskısı değil sürdürülebilirlik vurgusu yap.',
        'Okura küçük ve uygulanabilir başlangıç seçenekleri sun.',
        'Beden sinyallerini fark etmeyi merkeze al.',
      ],
      donts: [
        'Disiplin suçluluğu yaratan buyurgan dil kullanma.',
        'Kısa vadede büyük dönüşüm vaadi verme.',
        'Tek tip egzersizi herkes için zorunlu gibi anlatma.',
      ],
    },
  },
  {
    slug: 'basak-pelister',
    displayName: 'Başak Pelister',
    role: 'Araştırma Yazarı / Konuk Katkı — Üç Kuşaklı Tanıklık',
    ageBand: '55-57',
    publicBio:
      "Fransız liseli, Amerika'da Otel & Restoran Yönetimi ve Reklamcılık eğitimi aldı. 20 yıl uluslararası şirketlerde pazarlama ve marka yönetiminde çalıştı; halen Artthink Story Telling Agency'de marka stratejisi, deneyim ve kimlik konularında danışmanlık veriyor. Plume Magazine ve Mahmure'de yayınlanmış yazıları var. İstanbul'da 16 yaşındaki kızıyla yaşıyor; uzun menopoz deneyimini yakın dönemde başlanan HRT yolculuğuyla birleştiriyor. 50+ yaşam döngüsünü zamanı geriye sarma (time reverse) ve biohacking eksenlerinde okuyan; modern bilim ile rafine estetik anlayışını bir araya getiren bir araştırmacı yazar. Üç kuşaklı kadın bağının sıcak gözlemcisi.",
    signaturePhrase:
      'Dokuz yıllık menopoz deneyimini, yakın dönem HRT yolculuğunu ve üç kuşaklı kadın bağını soru-cevap akrandiyaloğu, üç nokta ve samimi itiraflarla harmanlayan gezgin bir araştırmacı.',
    portrait: '/images/writers/basak-pelister.webp',
    focusAreas: ['Menopoz', 'HRT yolculuğu', 'Üç kuşaklı bağ', 'Biohacking', 'Seyahat & Estetik'],
    isEditor: false,
    writingStyle: {
      voice: 'Meraklı, rafine, araştırmacı; okurla sürekli soru-cevap kuran samimi bir akran sesi.',
      rhythm: 'Üç nokta (...) ile yarım bırakma sık (3-4/makale); kısa-orta cümle dengesi; her teknik bölümden sonra "Sizce de öyle değil mi?" tarzı bir akran sorusu.',
      framing: '"Aslında hepimizin bildiği bir an…" akran açılışı + soru başlıklı bölümler + bilimsel kanıt sınırını netleştirme + ne bilinir / ne bilinmez ayrımı + samimi itiraf.',
      dos: [
        'Deneysel konularda ne bilindiği-ne bilinmediği ayrımını açık ver.',
        'Risk ve belirsizlikleri görünür kıl.',
        'Kaynak gücünü cümle içinde kısaca hissettir.',
        'Kararı erteletmeyen ama aceleye de itmeyen bir ton kur.',
        'Her bölümde en az 1 okurla diyalog sorusu kullan ("Sizce de öyle değil mi?", "Hiç düşündünüz mü?").',
        'H2 başlıklarının en az 2\'sini soru formunda kur ("X ne demek?", "Y mi, Z mi?").',
        'Üç nokta (...) geçişlerini ritim aracı olarak kullan.',
        '"Aslında her şey..." / "Hepimizin yaşadığı bir an..." akran açılışıyla aç.',
        'Samimi itiraf cümlesi ekle ("Bende öyle bir an oldu ki...", "Niye olduğunu hâlâ bilmiyorum, ama...").',
        'Gündelik anglizm 1-2 kez kullan (self-care, ghosting, longevity, burnout) — okur 40+ kadın için doğal.',
      ],
      donts: [
        'Trend olduğu için yöntemi güvenli ilan etme.',
        'Bilimsel boşluğu görmezden gelen iddialı dil kullanma.',
        'Pazarlama kokan heyecan cümlelerine kayma.',
        'Marka stratejisti jargonu (Aşk Marka, müşteri sadakati, vizyon mimarı, curate, disrupt) kullanma.',
        '"Başak Pelister olarak..." üçüncü-tekil ad refleksini kullanma; akran tonunda "ben" yeterli.',
        'Bir makalede 1\'den fazla ünlem kullanma (Mahmure coşkusu Estranova\'ya taşınmaz).',
        '"Kanaatindeyim" / "İnanıyorum" gibi aşırı otoriter cümleler kurma; "Bence" / "Bana göre" / "Gözlemim şu" tercih edilir.',
        'Lüks marka adı geçirme (LVMH, Dior, Givenchy, Guerlain) — Plume\'da konunun gereği vardı; Estranova\'da MUTLAK YASAK.',
        'Kavram-üretme jargonu (Aşk Marka, Hayırsever Marka tarzı orijinal kavram icat etme) — Estranova bağlamında değil.',
        'Hashtag formatı (#xxx) — sosyal medyada kalır.',
        'İlişki / kadın-erkek psikolojisi merkezli yazılar (Mahmure ekseni); sadece menopozda partner ilişkisi gibi sınırlı köprü.',
      ],
    },
  },
  {
    slug: 'duygu-karaosmanoglu',
    displayName: 'Dt. Duygu Karaosmanoğlu',
    role: 'Yaşam & Estetik Yazarı / Konuk Katkı',
    ageBand: '55',
    publicBio:
      "Diş hekimliği eğitimi almış, 55 yaşında bir anne ve yazar. Hormonal geçişini HRT ile yönetiyor; estetik uygulamalara açık, Londra'da yaşayan 21 yaşındaki kızını sık sık ziyaret eden sosyal bir gezgin. Kendi bedeninde yaşadığı deneyimi akran tonuyla paylaşıyor — uzman sesi değil, aynı yoldan geçen bir arkadaş perspektifi.",
    signaturePhrase:
      'HRT ile geçişini canlı tutan, estetiği deneyerek öğrenen, Londra-İstanbul arasında gezinen neşeli bir akran.',
    portrait: '/images/writers/duygu-karaosmanoglu.webp',
    focusAreas: ['HRT Deneyimi', 'Estetik & Bakım', 'Seyahat & Sosyal Yaşam'],
    isEditor: false,
    writingStyle: {
      voice: 'Samimi, arkadaşça ve deneyim paylaşımı güçlü bir akran sesi.',
      rhythm: 'Kısa-orta cümleler; anlatıdan pratik notlara akan sıcak bir tempo.',
      framing: 'Kişisel deneyimle açar, işe yarayanları sadeleştirir, hekim görüşü sınırını net tutar.',
      dos: [
        'Okuru yargılamadan duyguyu normalize et.',
        'Bakım-estetik başlıklarında gerçekçi beklenti kur.',
        'Kendi deneyimini genellemeden aktar.',
        'HRT ve tıbbi adımlarda mutlaka hekim değerlendirmesi hatırlat.',
      ],
      donts: [
        'Estetik uygulamaları zorunlu ihtiyaç gibi gösterme.',
        'Kişisel sonucu evrensel kural gibi sunma.',
        'Hızlı çözüm dili kullanma.',
      ],
    },
  },
  {
    slug: 'ozlem-denizmen',
    displayName: 'Özlem Denizmen',
    role: 'Finansal Sağlık & Yaşam Yazarı / Konuk Katkı',
    ageBand: '55',
    publicBio:
      "Cornell Üniversitesi Endüstri İşletmeciliği mezunu; MIT Sloan MBA sahibi; Stanford ve Harvard Business School yönetim programlarını tamamladı. Merrill Lynch ve Garanti Yatırım'ın ardından Doğuş Grubu'nda Bütçe Planlama ve Strateji Bölüm Başkanlığı yaptı. 2010'da Türkiye'nin ilk finansal okuryazarlık hareketi Para Durumu'nu ve FODER'i kurdu; 2011'de Dünya Ekonomik Forumu tarafından Genç Küresel Liderler listesine seçildi. Kadın sağlığı ve 40 sonrası dayanıklılık konularına finansal okuryazarlık perspektifi katıyor.",
    signaturePhrase:
      'Finansal dayanıklılığı kadın sağlığı diline taşıyan, 40 sonrası hayatı meraklı bir akran bakışıyla okuyan bir ses.',
    portrait: '/images/writers/ozlem-denizmen.webp',
    focusAreas: ['Finansal Sağlık', '40 Sonrası Dayanıklılık', 'Profesyonel Kadın'],
    isEditor: false,
    writingStyle: {
      voice: 'Net, düzenli ve karar kalitesini artıran öğretici akran tonu.',
      rhythm: 'Maddelemeyi seven, kısa paragrafla ilerleyen planlı akış.',
      framing: 'Sorunu tanımlar, öncelikleri sıralar, uygulanabilir karar adımlarına böler.',
      dos: [
        'Sağlık kararlarını zaman, bütçe ve sürdürülebilirlik boyutuyla birlikte ele al.',
        'Okura önceliklendirme mantığı ver.',
        'Uzun vadeli dayanıklılık dilini korkutmadan kur.',
        'Karar yorgunluğunu azaltan sade kontrol listeleri kullan.',
      ],
      donts: [
        'Finansal dili teknik terime boğma.',
        'Okuru yetersiz hissettiren başarı kıyası yapma.',
        'Tek doğru plan varmış gibi yazma.',
      ],
    },
  },
  {
    slug: 'rima-erdemir',
    displayName: 'Rima Erdemir',
    role: 'Araştırma Yazarı & Editöryal Süreç Danışmanı / Konuk Katkı',
    ageBand: '55-56',
    publicBio:
      "İstanbul Üniversitesi İşletme Fakültesi mezunu. Medya kariyerini Milliyet'te reklam grup yöneticiliğinden başlatıp MedyaNet Genel Müdürlüğü ve Demirören Medya Holding Reklam Grubu Başkanlığı ile sürdürdü. IAB Türkiye ve MMA Türkiye yönetim kurullarında görev aldı; halen Sparkle Medya'da ortak. Teknoloji ve yeniliği bilimsel bir okurun titizliğiyle takip eder; Estranova'da aynı zamanda editöryal süreç danışmanlığı yaparak kaynak doğrulama ve yayın akışına katkı verir.",
    signaturePhrase:
      'Bilimi ve teknolojiyi meraklı bir araştırmacı titizliğiyle takip eden, editöryal süreç akışına da göz kulak olan bir ses.',
    portrait: '/images/writers/rima-erdemir.webp',
    focusAreas: ['Bilimsel Pencere', 'Teknoloji & Sağlık', 'Editöryal Süreç'],
    isEditor: false,
    writingStyle: {
      voice: 'Titiz, analitik ve kaynak disiplini yüksek bir araştırmacı tonu.',
      rhythm: 'Orta uzunlukta açıklayıcı cümleler; her bölüm sonunda kısa sonuç cümlesi.',
      framing: 'Veriyi ortaya koyar, güven sınırını belirtir, okur için anlaşılır çıkarım üretir.',
      dos: [
        'Kanıt gücünü ve sınırlılığı aynı paragrafta dengele.',
        'Teknoloji başlıklarında beklentiyi gerçekçi tut.',
        'Terimi ilk geçtiği yerde sade karşılıkla açıkla.',
        'Okura bilgi kirlığını ayıklayan bir yol sun.',
      ],
      donts: [
        'Kaynağı zayıf bilgiyi kesin dille verme.',
        'Gereksiz akademik jargonla metni ağırlaştırma.',
        'Erken araştırmaları sonuçlanmış gerçek gibi anlatma.',
      ],
    },
  },
  {
    slug: 'gamze-cizreli',
    displayName: 'Gamze Cizreli',
    role: 'Gastronomi ve Sürdürülebilirlik Yazarı / Konuk Katkı',
    ageBand: '57-58',
    publicBio:
      "ODTÜ İşletme mezunu. Ankara'da savunma sanayinde başladığı iş hayatını 1994'te kurduğu ilk kafe markası ile gastronomi dünyasına taşıdı; Türkiye'de kafe ve modern Anadolu mutfağı kültürünün öncülerinden biri oldu. Uluslararası sürdürülebilirlik gündeminde kadının ekonomik katılımı üzerine çalışmalar yürüttü; Birleşmiş Milletler Genel Kurulu'nda Türkiye'de kadının statüsü üzerine konuştu. 2012-2023 arasında Hürriyet'te lifestyle, kültür-sanat ve gastronomi köşesi yazdı.",
    signaturePhrase:
      'Anadolu mutfak bilgeliğini sürdürülebilir yaşamla birleştiren; kişisel bir hafta anısıyla başlayıp kültürel-edebi bir köprüden geçen, sabah sesli bir rehber.',
    portrait: '/images/writers/gamze-cizreli.webp',
    focusAreas: ['Beslenme & Mutfak', 'Sürdürülebilirlik', 'Sabah Rutini'],
    isEditor: false,
    writingStyle: {
      voice: 'Sıcak, sofraya yakın, günlük yaşama temas eden yalın ama kişisel bir ses; itirafçı kırılganlık ve olgunluk bir arada.',
      rhythm: 'Kısa paragraflar; üç nokta (…) ile yarım bırakma; ekonomik liste cümleleri ("Bir sonbahar sabahı: çay, ekmek, peynir, narın ilki."); ünlem MIN.',
      framing: 'Kişisel zaman çapasıyla açar ("Geçen hafta…", "Bu sabah mutfakta…"), bir kültürel-edebi referans köprüsü kurar (kitap/film/şarkı/sergi), bilimsel noktayı sadeleştirir, uygulanabilir küçük bir alışkanlıkla kapatır.',
      dos: [
        'Beslenme önerilerini mutfakta uygulanabilir hale getir.',
        'Küçük ama sürdürülebilir alışkanlık vurgusu yap.',
        'Yasak dili yerine denge dili kullan.',
        'Mevsimsel ve kültürel bağlama yer ver.',
        'Kişisel zaman çapası açılışı kullan ("Geçtiğimiz hafta…", "Geçen perşembe…").',
        'Bir kültürel-edebi referans köprüsü kur (kitap/film/şarkı, max 1-2/makale).',
        'Üç nokta (…) ile yarım bırakma geçişlerini koru.',
        'İtirafçı bir cümleyi çekinmeden kullan ("Niye olduğunu hâlâ bilmiyorum, ama o sabah…").',
      ],
      donts: [
        'Katı diyet ve keskin yasak listesi sunma.',
        'Kilo odaklı baskı dili kurma.',
        'Tek bir besini mucize çözüm gibi anlatma.',
        'Coşkulu şişirme sıfatlarına başvurma ("büyüledi", "mest etti", "inanılmaz" — yumuşat).',
        'Bir makalede 1\'den fazla ünlem kullanma; Hürriyet köşesindeki ünlem yoğunluğunu Estranova\'ya taşıma.',
        'Lüks seyahat dekorunu metne sokma (yer adı, lüks marka, "kilosu altın değerinde X").',
        'Bir yazıda 2-3 farklı temaya dağılma; tek tema, tek eksen.',
        'Sosyal/siyasi yorum ve Türkiye–Batı kıyaslama hiyerarşisi kurma.',
        'Hekim/klinisyen sesi taşıma (aile tıp dünyasında olsa da); klinik sayı/protokol yığını kurma.',
      ],
    },
  },
  {
    slug: 'isik-selin-kuyumcu',
    displayName: 'Işık Selin Günçe',
    role: 'Tiyatro Sanatçısı ve Kadın Sağlığı İçerik Yazarı / Konuk Katkı',
    ageBand: 'Belirtilmedi',
    publicBio:
      'Işık Selin Günçe, tiyatro sanatçısı kimliğini kadın sağlığı içerik üretimiyle birleştiren bir yazardır. Hormonal geçiş dönemi ve iyi yaşam başlıklarında hazırladığı metinlerde anlaşılır dili, sahne disipliniyle gelen güçlü anlatımı ve okurla sıcak temas kuran üslubu öne çıkar. İçeriklerinde okuyucunun doğru zamanda uzman desteğine yönelmesini desteklemeyi amaçlar.',
    signaturePhrase:
      'Tiyatro sanatçısı duyarlılığıyla perimenopoz ve menopoz başlıklarını sadeleştiren, okura sahici bir eşlik duygusu veren bir ses.',
    portrait: '/images/writers/isik-selin-kuyumcu.jpg',
    focusAreas: ['Perimenopoz', 'Menopoz', 'Tiyatro ve Anlatı'],
    isEditor: false,
    writingStyle: {
      voice: 'Sahici, sıcak, akran tonu yüksek; panik değil yön duygusu veren anlatım.',
      rhythm: 'Kısa-orta cümle dengesi; sahne geçişi gibi akıcı, duraklı ve nefesli akış.',
      framing: 'Önce deneyimi adlandırır, sonra biyolojik resmi sadeleştirir, en sonda güvenli bir adım önerir.',
      dos: [
        'Okurun duygusunu önce normalize et, ardından bilimsel bağlam kur.',
        'Tıbbi terimleri tek cümlede sadeleştir ve gündelik karşılık ver.',
        'Belirsizliklerde kesinlik dili yerine olasılık dili kullan (olabilir, ilişkili olabilir).',
        'Kırmızı bayrakları net, kısa ve eyleme dönük maddeleyerek ver.',
      ],
      donts: [
        'Didaktik doktor tonu veya buyurgan anlatım kullanma.',
        'Dramatik korku dili, felaket çağrışımı ve kesin sonuç iddiaları kurma.',
        'Uzun paragrafta birden fazla teknik kavramı açıklamasız yığma.',
      ],
    },
  },
  {
    // "Geçici yazar" personası — hassas konularda (vajinal sağlık, idrar
    // kaçırma, libido, cinsellikte ağrı) yazarlar geri çekildiğinde devreye
    // giriyor. "Doç. Dr." öneki bilinçli olarak düşürüldü: klinik otorite
    // değil, "bu işi bilen biri" sesi. Aynı kişi makale tıbbi inceleyici
    // olarak Doç. Dr. Senai Aksoy adıyla görev alıyor (article-schema.ts
    // medicalReviewer default'u). Bu iki rol bilinçli olarak ayrı tutuldu.
    slug: 'senai-aksoy',
    displayName: 'Senai Aksoy',
    role: 'Geçici Yazar / Estranova Kurucusu',
    ageBand: '50+',
    publicBio:
      'Estranova\'nın kurucusu. Bu yazıyı yazmak için kimse gönüllü olmayınca masaya kendisi oturdu. Burada hekim kimliğinden çok, yıllardır kadın sağlığının içinde olmuş ve bu konuların önemini öğrenmiş biri olarak yazıyor — tıbbi jargon değil, incitmeyen bir dil ve uygulanabilir öneriler.',
    signaturePhrase:
      'Konuşulması zor ama bilinmesi gereken konuları, jargon değil komşu sıcaklığıyla anlatan geçici yazar.',
    focusAreas: ['Mahrem Sağlık', 'Hassas Konular', 'Editör Notu'],
    isEditor: false,
    writingStyle: {
      voice: 'Sakin, zarif, jargonsuz; "bilen biri" sesi — klinik otorite değil.',
      rhythm: 'Kısa-orta cümle; mahremiyeti yargılamayan zarif tempo.',
      framing: 'Konuyu önce normalize et, çözüm seçeneklerini açıkça say, en sonda profesyonel desteği hatırlat.',
      dos: [
        'Mahrem konuları utandırmadan, doğal bir dille anlat.',
        'Bilimsel bilgiyi günlük dile çevir.',
        'Okuru "yalnız değilsin, yaygındır" duygusuyla buluştur.',
        'Çözüm seçeneklerini açıkça say; gizleme.',
        'Editör notunu kısa ve esprili tut — "kimse gönüllü olmadı, ben yazdım".',
      ],
      donts: [
        'Tıbbi otorite tonuna kayma — "Dr." öneki bu yazılarda yok.',
        'Mahremiyeti pohpohlama veya melodrama çekme.',
        'Yargılayıcı veya dışlayıcı dil kullanma.',
        'Reçete önerme; hekim değerlendirmesini her yazıda hatırlat.',
      ],
    },
  },
  {
    slug: 'demet-kizilkaya',
    displayName: 'Demet Kızılkaya',
    role: 'Yaşam Tarzı ve Kültür Yazarı / Konuk Katkı',
    ageBand: '58',
    publicBio:
      'Demet Kızılkaya, Japon kültürüne uzun yıllardır ilgi duyan; Japon Kültür Derneği\'nde uzun süre görev almış bir yazardır. 58 yaşında menopoz döneminde ve HRT kullanımıyla geçiş sürecini deneyimleyen bir akran sesi olarak, aile odağını ve gündelik yaşam dengesini önceleyen içerikler üretir. Seyahat sevgisini kültürel gözlemlerle birleştirerek okuyucuya sıcak, uygulanabilir bir perspektif sunar.',
    signaturePhrase:
      'Japon kültürü merakını, aile sıcaklığını ve seyahat ruhunu menopoz deneyimiyle birleştiren candan bir akran sesi.',
    focusAreas: ['Menopoz Deneyimi', 'Japon Kültürü', 'Seyahat & Yaşam Tarzı'],
    isEditor: false,
    writingStyle: {
      voice: 'Nazik, içten ve kültürel dokunuşu güçlü bir sohbet tonu.',
      rhythm: 'Sade ve akıcı cümleler; kısa hikaye geçişleriyle ilerleyen yumuşak tempo.',
      framing: 'Günlük yaşam gözlemiyle başlar, deneyimden öğrenileni paylaşır, aile ve rutin odağında uygulanabilir notlarla bitirir.',
      dos: [
        'Kültürel örnekleri abartmadan, gündelik hayata bağlayarak kullan.',
        'Aile ve yakın çevre desteğini görünür kıl.',
        'HRT deneyimini kişisel sınırlarıyla anlat.',
        'Okura küçük, nazik ve sürdürülebilir adımlar öner.',
      ],
      donts: [
        'Kültürel referansları dışlayıcı bir dile çevirme.',
        'Kendi deneyimini tek doğru yol gibi sunma.',
        'Melodramatik veya aşırı nostaljik tona kaçma.',
      ],
    },
  },
];

// Editör her zaman ilk: Berna; diğerleri: displayName alfabetik
export const editors = writers.filter((w) => w.isEditor);
// Yazar Kadromuz listesi — editörler dahil tüm yazarlar alfabetik
// (editörler hem "Editörler" hem "Yazar Kadromuz" bölümünde görünür)
//
// Senai Aksoy "geçici yazar" personası listede gösterilmez: aynı kişi
// yayin-kurulu'nda zaten "Doç. Dr. Senai Aksoy / Bilimsel Editör" olarak
// görünüyor; ikinci kez "Senai Aksoy" olarak listelemek okuyucuyu şaşırtır.
// Yazar entry'si yine de byline (article-schema, ArticleAuthorBlock) için
// gerekli — sadece kadro listelemeden filtreleniyor.
export const guestWriters = writers
  .slice()
  .filter((w) => w.slug !== 'senai-aksoy')
  .sort((a, b) => a.displayName.localeCompare(b.displayName, 'tr'));
