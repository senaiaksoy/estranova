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
      'Uzun yıllar kurumsal bankacılıkta çalıştıktan sonra kendi işini kuran bir iş insanı; yüz kişiyi aşkın bir ekibi yönetti. Estranova\'da yayın çizgisini, içerik önceliklerini ve önleyici sağlık başlıklarını şekillendiriyor. Telaşı sevmeyen, kararı veriye konuşturarak veren bir akran.',
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
      'Eski profesyonel windsurfer; sporun içinde geçen uzun yıllar bedeni okuma alışkanlığını kalıcı kıldı. Estranova\'da hareket, anti-aging ve sürdürülebilir egzersiz başlıklarında sporcu beden okumasıyla yazıyor. Atlar, köpekler ve kuşlarla iç içe yaşayan, anne kuşağını sevgiyle gözlemleyen genç bir akran.',
    signaturePhrase:
      'Anne kuşağını gözlemleyen, sporcu beden okumasıyla erken hazırlık yazıları yazan genç bir akran.',
    portrait: '/images/writers/alara-baykent.webp',
    focusAreas: ['Spor & Hareket', 'Anti-aging', 'Doğa & Hayvan'],
    isEditor: false,
    writingStyle: {
      voice: 'Eğitici-popüler bilim akran tonu (Cumhuriyet Pazar imzası); canlı, motive edici, beden farkındalığı yüksek.',
      rhythm: 'Kısa-vurgulu ve açıklayıcı uzun cümle dengesi; ritmik bölümleme, "Oysa…" karşıtlık geçişleri.',
      framing: '"Çoğu zaman X yaparız/sanırız, oysa Y..." kalıbıyla yaygın yanılgıyı bilimsel düzeltmeye köprüler; spesifik veri ve karşılaştırma (yüzde, mekanizma adı) ile anlamı somutlaştırır; sürdürülebilir mini adımla kapatır.',
      dos: [
        '"Çoğu zaman X yaparız, oysa Y..." kalıbıyla yaygın yanılgıyı bilimsel açıklamaya köprüle (Cumhuriyet imzası).',
        'Spesifik mekanizma terimini Türkçe parantez açıklamasıyla sun (osteoblast = kemik yapan hücre; sarkopeni = kas erimesi).',
        'Karşılaştırmalı somut veri kullan (yüzde, süre, evrimsel zaman).',
        'Hareket önerilerini günlük hayata uyarlanabilir tut.',
        'Performans baskısı değil sürdürülebilirlik vurgusu yap.',
        'Beden sinyallerini fark etmeyi merkeze al.',
      ],
      donts: [
        'Disiplin suçluluğu yaratan buyurgan dil kullanma.',
        'Kısa vadede büyük dönüşüm vaadi verme.',
        'Tek tip egzersizi herkes için zorunlu gibi anlatma.',
        'Bilim terimini Türkçe karşılığı olmadan bırakma; jargonlu otorite tonuna kayma.',
      ],
    },
  },
  {
    slug: 'bahar-ozeray',
    displayName: 'Bahar Özeray',
    role: 'Hukuk ve Yaşam Tarzı Yazarı / Konuk Katkı',
    ageBand: '47',
    publicBio:
      "İstanbul Barosu'na kayıtlı avukat ve sicilli arabulucu; aile bürosunda yerli ve yabancı şirketlere danışmanlık veriyor. Estranova'da hak, sınır, karar ve gündelik yaşam dengesi başlıklarında akran perspektifiyle yazıyor. Uzlaşmayı önemseyen titiz bir hukukçu; iyi yemek ve seçici bir estetik gözle gündelik neşesini koruyan bir akran.",
    signaturePhrase:
      'Uzlaşmayı önceleyen titiz bir avukat-arabulucu; 40 sonrası yaşam gustosunu seçici estetik ve gündelik neşeyle yazan akran sesi.',
    focusAreas: ['Hak & Sınır', 'Karar & Uzlaşma', 'Yaşam Tarzı', 'Estetik & Gusto'],
    isEditor: false,
    writingStyle: {
      voice: 'Ölçülü, kararlı ve uzlaşmacı; özel hayata dair notlarda neşeli ve zarif.',
      rhythm: 'Sade ve kararlı cümleler; karar veren ama dayatmayan ton; sonda küçük bir yaşamsal dokunuş.',
      framing: 'Önce tabloyu netleştirir, sonra hak/sınır boyutunu kurar, en sona uygulanabilir bir adım veya gündelik bir mikrosahne yerleştirir.',
      dos: [
        'Hukuki dili gündelik karşılığıyla sadeleştir.',
        'Uyuşmazlıkta tek tarafa savrulmadan, uzlaşma seçeneğini görünür kıl.',
        'Estetik / yaşam tarzı dokunuşunu ölçülü ve seçici tut — vitrin değil, his.',
        '"Uzmanına danış" çağrısını dayatmadan, doğal bir refleks olarak yerleştir.',
      ],
      donts: [
        'Hukuki tavsiye veya bireysel hak yönlendirmesi verme — yalnızca bilgilendirme.',
        'Lüks / marka pornografisine kayma; "trend takip" değil "seçici göz" üslubu.',
        'Uyuşmazlığı dramatize eden, taraflaştıran dile düşme.',
      ],
    },
  },
  {
    slug: 'basak-pelister',
    displayName: 'Başak Pelister',
    role: 'Araştırma Yazarı / Konuk Katkı — Üç Kuşaklı Tanıklık',
    ageBand: '55-57',
    publicBio:
      "Marka stratejisi ve deneyim danışmanı; Plume Magazine ve Mahmure'de yazıları yayımlandı. Estranova'da uzun menopoz deneyimini, yakın dönem HRT yolculuğunu ve üç kuşaklı kadın bağını araştırmacı bir gözle yazıyor. Soruyu seven, yarım bırakmayı bilen, samimi itiraflarıyla okurun yanına oturan meraklı bir gezgin.",
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
      "Diş hekimliği eğitimi almış bir anne ve yazar; hormonal geçişini HRT ile yönetiyor. Estranova'da HRT deneyimi, estetik bakım ve seyahat-sosyal yaşam başlıklarında kendi bedeninde yaşadıklarını akran tonuyla paylaşıyor. Londra-İstanbul arasında gezinen, deneyerek öğrenen, neşesini düşürmeyen bir akran.",
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
      "MIT Sloan MBA'lı bir finans profesyoneli; Türkiye'nin ilk finansal okuryazarlık hareketi Para Durumu'nun kurucusu. Estranova'da finansal sağlık, dayanıklılık ve 40 sonrası karar perspektifi başlıklarında yazıyor. Karmaşık seçenekleri sade kontrol listelerine indirgeyen, okuru telaşa düşürmeden yön gösteren bir akran.",
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
      "Medya ve dijital yayıncılıkta yıllarca yöneticilik yaptı; halen Sparkle Medya'da ortak. Estranova'da bilim ve teknoloji başlıklarını araştırmacı titizliğiyle yazıyor; aynı zamanda kaynak doğrulama ve yayın akışına editöryal danışmanlık veriyor. Bilgi kirliliğini ayıklamayı seven; \"kaynak nereden?\" sorusunu sormaktan çekinmeyen biri.",
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
      "Türkiye'de modern Anadolu mutfağı kültürünün öncülerinden bir girişimci; uzun yıllar Hürriyet'te lifestyle ve gastronomi köşesi yazdı. Estranova'da beslenme, sürdürülebilirlik ve sabah rutinleri başlıklarını sofra sıcaklığıyla yazıyor. Kültürel referansı bir mevsim sebzesi gibi gündelik hayata sokan, üç noktayı seven bir akran.",
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
    slug: 'isik-selin-gunce',
    displayName: 'Işık Selin Günce',
    role: 'Tiyatro Sanatçısı ve Kadın Sağlığı İçerik Yazarı / Konuk Katkı',
    ageBand: 'Belirtilmedi',
    publicBio:
      'Tiyatro sanatçısı; sahne disiplinini ve sahici anlatımı içerik üretimine taşıyan bir yazar. Estranova\'da perimenopoz, menopoz ve iyi yaşam başlıklarını sade dille, okurla sıcak temas kuran bir üslupla yazıyor. Panik değil yön duygusu veren, okurun hissini önce normalize eden bir akran.',
    signaturePhrase:
      'Tiyatro sanatçısı duyarlılığıyla perimenopoz ve menopoz başlıklarını sadeleştiren, okura sahici bir eşlik duygusu veren bir ses.',
    portrait: '/images/writers/isik-selin-gunce.jpg',
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
    role: 'Kimsenin Yazmak İstemediği Konu Yazarı',
    ageBand: '50+',
    publicBio:
      'Estranova\'nın bilimsel editörü; ama bu kartta hekim kimliğini değil, yıllardır kadın sağlığının içinde olmuş birinin sesini taşıyor. Vajinal sağlık, idrar kaçırma ya da libido gibi konularda kimse yazmaya gönüllü olmadığında masaya kendisi oturuyor. Tıbbi jargon değil, komşu sıcaklığıyla konuşan; soruyu küçümsemeyen biri.',
    signaturePhrase:
      'Konuşulması zor ama bilinmesi gereken konuları, jargon değil komşu sıcaklığıyla anlatan yazar.',
    portrait: '/images/writers/senai-aksoy.webp',
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
      "İngilizce öğretmenliği mezunu; uzun yıllar Japonya Dış Ticaret Teşkilatı'nın İstanbul ofisinde çalışarak iki kültürü yakından izledi. Estranova'da menopoz deneyimi, Japon kültürü ve gündelik nezaket başlıklarında HRT yolunu paylaşan bir akran tonuyla yazıyor. Aile sıcaklığını ve sakin gözlemi her satıra taşıyan candan bir ses.",
    signaturePhrase:
      'Türkiye-Japonya hattında uzun yıllar çalışmış; menopoz geçişini iki kültürün sakinliği, aile sıcaklığı ve gündelik nezaketle yazan candan bir akran sesi.',
    portrait: '/images/writers/demet-kizilkaya.webp',
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
// Yazar Kadromuz listesi — alfabetik sıralama (Senai hariç).
// Senai Aksoy ayrı export ile listenin EN ALTINDA özel pozisyonda
// render edilir; aynı kişi "Editörler" bölümünde "Doç. Dr." kimliğiyle
// de görünür — iki rol farklı kimlik (yazar kartı "Dr." öneki kullanmaz).
export const guestWriters = writers
  .slice()
  .filter((w) => w.slug !== 'senai-aksoy')
  .sort((a, b) => a.displayName.localeCompare(b.displayName, 'tr'));

// Senai Aksoy yazar kartı için ayrı export — yayin-kurulu listesinin
// EN ALTINDA özel pozisyonda render edilir ("Kimsenin Yazmak İstemediği
// Konu Yazarı" rolüyle).
export const guestWriterEnAlt = writers.find((w) => w.slug === 'senai-aksoy')!;
