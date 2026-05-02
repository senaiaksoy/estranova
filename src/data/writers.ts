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
  // 'lifestyle' = magazinsel yaşıt sesi (doktor değil, kendi uzmanlığı + 40+
  // kadın sağlığı kesişimi); 'scientific' = doktor / klinik uzman, kendi
  // alanında bilimsel anlatım. Default 'lifestyle'.
  category?: 'lifestyle' | 'scientific';
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
      'Uzun yıllar kurumsal bankacılıkta çalıştıktan sonra kendi işini kuran bir iş insanı; yüz kişiyi aşkın bir ekibi yönetti. Estranova\'da yayın çizgisini, içerik önceliklerini ve önleyici sağlık başlıklarını şekillendiriyor. Telaşı sevmeyen, kararı veriye konuşturarak veren bir yaşıt.',
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
      'Eski profesyonel windsurfer; sporun içinde geçen uzun yıllar bedeni okuma alışkanlığını kalıcı kıldı. Estranova\'da hareket, anti-aging ve sürdürülebilir egzersiz başlıklarında sporcu beden okumasıyla yazıyor. Atlar, köpekler ve kuşlarla iç içe yaşayan, anne kuşağını sevgiyle gözlemleyen genç bir yaşıt.',
    signaturePhrase:
      'Anne kuşağını gözlemleyen, sporcu beden okumasıyla erken hazırlık yazıları yazan genç bir yaşıt.',
    portrait: '/images/writers/alara-baykent.webp',
    focusAreas: ['Spor & Hareket', 'Anti-aging', 'Doğa & Hayvan'],
    isEditor: false,
    writingStyle: {
      voice: 'Eğitici-popüler bilim yaşıt tonu (Cumhuriyet Pazar imzası); canlı, motive edici, beden farkındalığı yüksek.',
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
      "İstanbul Barosu'na kayıtlı avukat ve sicilli arabulucu; aile bürosunda yerli ve yabancı şirketlere danışmanlık veriyor. Estranova'da hak, sınır, karar ve gündelik yaşam dengesi başlıklarında yaşıt perspektifiyle yazıyor. Uzlaşmayı önemseyen titiz bir hukukçu; iyi yemek ve seçici bir estetik gözle gündelik neşesini koruyan bir yaşıt.",
    signaturePhrase:
      'Uzlaşmayı önceleyen titiz bir avukat-arabulucu; 40 sonrası yaşam gustosunu seçici estetik ve gündelik neşeyle yazan yaşıt sesi.',
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
      'Dokuz yıllık menopoz deneyimini, yakın dönem HRT yolculuğunu ve üç kuşaklı kadın bağını soru-cevap yaşıtdiyaloğu, üç nokta ve samimi itiraflarla harmanlayan gezgin bir araştırmacı.',
    portrait: '/images/writers/basak-pelister.webp',
    focusAreas: ['Menopoz', 'HRT yolculuğu', 'Üç kuşaklı bağ', 'Biohacking', 'Seyahat & Estetik'],
    isEditor: false,
    writingStyle: {
      voice: 'Meraklı, rafine, araştırmacı; okurla sürekli soru-cevap kuran samimi bir yaşıt sesi.',
      rhythm: 'Üç nokta (...) ile yarım bırakma sık (3-4/makale); kısa-orta cümle dengesi; her teknik bölümden sonra "Sizce de öyle değil mi?" tarzı bir yaşıt sorusu.',
      framing: '"Aslında hepimizin bildiği bir an…" yaşıt açılışı + soru başlıklı bölümler + bilimsel kanıt sınırını netleştirme + ne bilinir / ne bilinmez ayrımı + samimi itiraf.',
      dos: [
        'Deneysel konularda ne bilindiği-ne bilinmediği ayrımını açık ver.',
        'Risk ve belirsizlikleri görünür kıl.',
        'Kaynak gücünü cümle içinde kısaca hissettir.',
        'Kararı erteletmeyen ama aceleye de itmeyen bir ton kur.',
        'Her bölümde en az 1 okurla diyalog sorusu kullan ("Sizce de öyle değil mi?", "Hiç düşündünüz mü?").',
        'H2 başlıklarının en az 2\'sini soru formunda kur ("X ne demek?", "Y mi, Z mi?").',
        'Üç nokta (...) geçişlerini ritim aracı olarak kullan.',
        '"Aslında her şey..." / "Hepimizin yaşadığı bir an..." yaşıt açılışıyla aç.',
        'Samimi itiraf cümlesi ekle ("Bende öyle bir an oldu ki...", "Niye olduğunu hâlâ bilmiyorum, ama...").',
        'Gündelik anglizm 1-2 kez kullan (self-care, ghosting, longevity, burnout) — okur 40+ kadın için doğal.',
      ],
      donts: [
        'Trend olduğu için yöntemi güvenli ilan etme.',
        'Bilimsel boşluğu görmezden gelen iddialı dil kullanma.',
        'Pazarlama kokan heyecan cümlelerine kayma.',
        'Marka stratejisti jargonu (Aşk Marka, müşteri sadakati, vizyon mimarı, curate, disrupt) kullanma.',
        '"Başak Pelister olarak..." üçüncü-tekil ad refleksini kullanma; yaşıt tonunda "ben" yeterli.',
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
    // Bilimsel yazar — girişimsel kardiyoloji ve önleyici kardiyoloji.
    // Senai/Metin paraleli, kalp damar ekseninde. Türkiye'nin ilk TAVİ
    // (2009) ve ilk MitraClip (2010) ekiplerinde. Estranova'da menopoz
    // sonrası kardiyovasküler risk, lipid değişimi, hipertansiyon, felç
    // riski, atriyal fibrilasyon, ani kalp ölümü. Tıbbi danışman kartı
    // korunur (yayin-kurulu.astro medicalAdvisors[1] — Kardiyoloji).
    slug: 'alp-aslan-eryilmaz',
    displayName: 'Dr. Alp Aslan Eryılmaz',
    role: 'Girişimsel & Önleyici Kardiyoloji Bilimsel Yazarı',
    ageBand: '53-55',
    publicBio:
      "Girişimsel kardiyoloji alanında 25+ yıllık deneyimli bir hekim. Akdeniz Üniversitesi Tıp Fakültesi mezunu, İstanbul Üniversitesi Çapa Tıp Fakültesi'nde kardiyoloji uzmanlığı; Türkiye'nin ilk TAVİ ve ilk MitraClip ekiplerinde yer aldı. 2006'dan beri Amerikan Hastanesi Kardiyoloji'de. Estranova'da menopoz sonrası kalp damar değişimi, kadın özelinde kardiyovasküler risk haritası ve önleyici kardiyoloji başlıklarını sade Türkçeyle açıyor — panik dili değil \"erken tarama hayat kurtarır\" repertuvarı.",
    signaturePhrase:
      'Menopoz sonrası kalp damar tablosunu, kadın bedeni özelinde önleyici kardiyoloji çerçevesiyle ve sayısal kanıtla — panik değil bilgiyle açan klinisyen.',
    portrait: '/images/writers/alp-aslan-eryilmaz.webp',
    focusAreas: ['Önleyici Kardiyoloji', 'Menopoz Sonrası Kalp', 'Lipid & Hipertansiyon'],
    isEditor: false,
    category: 'scientific',
    writingStyle: {
      voice: 'Klinik disiplin + sade Türkçe + sayısal kanıt destekli; "erken tarama hayat kurtarır" tonu, risk anchored ama panik dili yok.',
      rhythm: 'Orta-uzun cümleler (12-20 kelime); risk → mekanizma → karar zinciri akışı; bullet listin önünde 1 cümle bağlam paragrafı zorunlu.',
      framing: 'Önleyici çerçeveyle aç ("henüz belirti vermeye başlamadan önce"), risk faktörlerini ve mekanizmayı net listele, sayısal kanıtla destekle, hangi tarama ne zaman ile kapat.',
      dos: [
        '"Önleyici kardiyoloji" çerçevesini açılışta kur (erken tarama / rutin / kontrol altına repertuvarı).',
        'Sayısal kanıtla destekle ("Kalp krizi riskinde 2-4 kat artış", "İlk yılda %50 azalır") — Evidence level etiketleriyle yumuşat.',
        'Bullet listin önünde 1 cümle bağlam paragrafı koy; kuru bullet yasak.',
        'Kadın kalp krizi atypical presentation (göğüs ağrısı yerine yorgunluk / mide bulantısı / çene ağrısı) farkındalığını işaretle.',
        '"Doktorunuza şu testi / şu soruyu sorabilirsiniz" rehberi kullan.',
        'Klinik jargonu Türkçe karşılığıyla aç (KKS = koroner kalsiyum skoru; AF = atriyal fibrilasyon).',
      ],
      donts: [
        'Tıbbi otorite kibirli çıkışı ("Pioneer kardiyolog olarak söylerim ki", "Tıbben kesindir").',
        'Kendi sitesi (eryilmazalp.com) / Amerikan Hastanesi tanıtımı gövdede.',
        'Promosyonel pioneer vitrini gövdede ("Türkiye\'nin ilk TAVİ ekibinde / 25 yıl") — biyografide ok.',
        'Reçete dili ("şu doz şu marka şu sıklık") — bireyselleştirme felsefesiyle çelişir.',
        'Spesifik marka adı (ilaç / stent / cihaz / TAVİ kapakları / MitraClip) gövdede.',
        'Uluslararası kuruluş adı (ESC/AHA/ACC/JAMA/Lancet/NEJM) gövdede.',
        'Korku/panik dili ("sessiz tehlike", "hemen başvurun", "acil müdahale").',
        'Yaşıt yazar pozu — Alp ~54, erkek, hekim; kategori farklı.',
        'Mahrem klinik (Senai) / endokrin (Metin) — eksen karışıklığı.',
      ],
    },
  },
  {
    // Bilimsel yazar — endokrinoloji ve metabolizma. Senai paraleli ama
    // farklı eksen: Senai mahrem klinik (idrar kaçırma, GSM); Metin
    // endokrin kavşak (tiroid-menopoz, kemik-D vitamini, metabolik
    // sendrom 40+, kortizol-stres). Tıbbi danışman kartı korunur
    // (yayin-kurulu.astro medicalAdvisors[0]).
    slug: 'metin-alis',
    displayName: 'Dr. Metin Alış',
    role: 'Endokrinoloji & Metabolizma Bilimsel Yazarı',
    ageBand: '53-55',
    publicBio:
      "Endokrinoloji ve metabolizma uzmanı bir hekim. Estranova'da hormonal geçişle iç içe geçen tiroid, kemik, metabolik sendrom ve adrenal başlıklarını klinik bilgiyi sade Türkçeye taşıyan bir dille açıyor. GATA mezunu, Mayo Clinic endokrin güncellemelerinden geçmiş, şu an Amerikan Hastanesi Endokrinoloji bölümünün başhekimi. Tonu \"tıbbi otorite çıkışı\" değil; yanlış anlaşılan tabloları yumuşak ama net açıklayan klinisyen.",
    signaturePhrase:
      'Endokrin sistemin kadın bedeniyle nasıl konuştuğunu — tiroid, kemik, metabolik kavşaklarda — panik değil netleştirme tonuyla anlatan klinisyen.',
    portrait: '/images/writers/metin-alis.webp',
    focusAreas: ['Tiroid & Menopoz Kavşağı', 'Postmenopozal Kemik', 'Metabolik Sendrom 40+'],
    isEditor: false,
    category: 'scientific',
    writingStyle: {
      voice: 'Klinik disiplin + sade Türkçe; "yanlış anlaşılan tabloyu açan" sıcak akademisyen.',
      rhythm: 'Orta-uzun cümleler (12-20 kelime); tanım → mekanizma → karar zinciri akışı; em dash yan-cümle ayraç.',
      framing: '"X mi Y mi?" kafa karışıklığını isimlendir, mekanizmayı sade dille aç, lab/test okuma ve hekim-hasta iletişimi rehberi ile kapat.',
      dos: [
        'Klinik jargonu ilk geçtiği yerde Türkçe karşılığıyla ver (TSH = tiroid uyarıcı hormon).',
        '"Yanlış anlaşılan tablo" çerçevesini açılışta kur (panik değil netleştirme).',
        'Mekanizma → klinik karşılık → karar zinciri yapısını koru.',
        'Lab/test değerinin ne söylediğini ve söylemediğini birlikte aç.',
        '"Doktorunuza şu testi / şu soruyu sorabilirsiniz" rehberi kullan.',
        'Bireyselleştirme felsefesi: "kılavuz var ama herkes farklı".',
      ],
      donts: [
        'Tıbbi otorite kibirli çıkışı ("Başhekim olarak söylerim ki", "Tıbben kesindir").',
        'Reçete dili ("şu doz şu marka şu sıklık") — bireyselleştirme felsefesiyle çelişir.',
        'Spesifik HRT / takviye / cihaz / klinik / hastane marka adı gövdede.',
        'Uluslararası kuruluş adı (NAMS/NICE/JAMA/WHO/ACOG/ESE/ASE/Mayo) gövdede — anonim "uluslararası uzman dernekler" yumuşaması.',
        'Korku/panik dili ("sessiz tehlike", "hemen başvurun", "acil müdahale").',
        'Promosyonel başhekim vitrini gövdede ("20+ yıl deneyim" tipi övgü).',
        'Yaşıt yazar pozu — Metin 54, erkek, hekim; kategori farklı.',
        'Mahrem klinik konular (idrar kaçırma, GSM, lokal HRT) — Senai alanı.',
      ],
    },
  },
  {
    slug: 'duygu-karaosmanoglu',
    displayName: 'Dt. Duygu Karaosmanoğlu',
    role: 'Yaşam & Estetik Yazarı / Konuk Katkı',
    ageBand: '55',
    publicBio:
      "Diş hekimliği eğitimi almış bir anne ve yazar; hormonal geçişini HRT ile yönetiyor. Estranova'da HRT deneyimi, estetik bakım ve seyahat-sosyal yaşam başlıklarında kendi bedeninde yaşadıklarını yaşıt tonuyla paylaşıyor. Londra-İstanbul arasında gezinen, deneyerek öğrenen, neşesini düşürmeyen bir yaşıt.",
    signaturePhrase:
      'HRT ile geçişini canlı tutan, estetiği deneyerek öğrenen, Londra-İstanbul arasında gezinen neşeli bir yaşıt.',
    portrait: '/images/writers/duygu-karaosmanoglu.webp',
    focusAreas: ['HRT Deneyimi', 'Estetik & Bakım', 'Seyahat & Sosyal Yaşam'],
    isEditor: false,
    category: 'scientific',
    writingStyle: {
      voice: 'Samimi, arkadaşça ve deneyim paylaşımı güçlü bir yaşıt sesi.',
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
      "MIT Sloan MBA'lı bir finans profesyoneli; Türkiye'nin ilk finansal okuryazarlık hareketi Para Durumu'nun kurucusu. Estranova'da finansal sağlık, dayanıklılık ve 40 sonrası karar perspektifi başlıklarında yazıyor. Karmaşık seçenekleri sade kontrol listelerine indirgeyen, okuru telaşa düşürmeden yön gösteren bir yaşıt.",
    signaturePhrase:
      'Finansal dayanıklılığı kadın sağlığı diline taşıyan, 40 sonrası hayatı meraklı bir yaşıt bakışıyla okuyan bir ses.',
    portrait: '/images/writers/ozlem-denizmen.webp',
    focusAreas: ['Finansal Sağlık', '40 Sonrası Dayanıklılık', 'Profesyonel Kadın'],
    isEditor: false,
    writingStyle: {
      voice: 'Net, düzenli ve karar kalitesini artıran öğretici yaşıt tonu.',
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
      "Türkiye'de modern Anadolu mutfağı kültürünün öncülerinden bir girişimci; uzun yıllar Hürriyet'te lifestyle ve gastronomi köşesi yazdı. Estranova'da beslenme, sürdürülebilirlik ve sabah rutinleri başlıklarını sofra sıcaklığıyla yazıyor. Kültürel referansı bir mevsim sebzesi gibi gündelik hayata sokan, üç noktayı seven bir yaşıt.",
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
      'Tiyatro sanatçısı; sahne disiplinini ve sahici anlatımı içerik üretimine taşıyan bir yazar. Estranova\'da perimenopoz, menopoz ve iyi yaşam başlıklarını sade dille, okurla sıcak temas kuran bir üslupla yazıyor. Panik değil yön duygusu veren, okurun hissini önce normalize eden bir yaşıt.',
    signaturePhrase:
      'Tiyatro sanatçısı duyarlılığıyla perimenopoz ve menopoz başlıklarını sadeleştiren, okura sahici bir eşlik duygusu veren bir ses.',
    portrait: '/images/writers/isik-selin-gunce.jpg',
    focusAreas: ['Perimenopoz', 'Menopoz', 'Tiyatro ve Anlatı'],
    isEditor: false,
    writingStyle: {
      voice: 'Sahici, sıcak, yaşıt tonu yüksek; panik değil yön duygusu veren anlatım.',
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
    category: 'scientific',
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
      "İngilizce öğretmenliği mezunu; uzun yıllar Japonya Dış Ticaret Teşkilatı'nın İstanbul ofisinde çalışarak iki kültürü yakından izledi. Estranova'da menopoz deneyimi, Japon kültürü ve gündelik nezaket başlıklarında HRT yolunu paylaşan bir yaşıt tonuyla yazıyor. Aile sıcaklığını ve sakin gözlemi her satıra taşıyan candan bir ses.",
    signaturePhrase:
      'Türkiye-Japonya hattında uzun yıllar çalışmış; menopoz geçişini iki kültürün sakinliği, aile sıcaklığı ve gündelik nezaketle yazan candan bir yaşıt sesi.',
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

// Magazinsel yaşıt sesi yazarlar — doktor değil; kendi uzmanlık alanı +
// 40+ kadın sağlığı kesişiminde günlük gözlem ve magazinsel makaleler.
// Editör (Berna) ve bilimsel yazarlar (Duygu, Senai) bu listede yer almaz.
export const guestWriters = writers
  .slice()
  .filter((w) => !w.isEditor && (w.category ?? 'lifestyle') === 'lifestyle')
  .sort((a, b) => a.displayName.localeCompare(b.displayName, 'tr'));

// Bilimsel yazarlar — doktor / klinik uzman; kendi uzmanlık alanında
// bilimsel anlatımla yazıyor. Bilim kurulu (tıbbi danışmanlar) içinden
// yazıya geçen kadro burada listelenir.
export const scientificWriters = writers
  .slice()
  .filter((w) => w.category === 'scientific')
  .sort((a, b) => a.displayName.localeCompare(b.displayName, 'tr'));

// Geri-uyumluluk için korunuyor — Senai Aksoy ayrı kart referansı.
// Yeni yapıda bu kart `scientificWriters` listesinin parçası olarak
// render edilir; bu export başka veri dosyaları (search-index vb.)
// referans verirse kırılmasın diye duruyor.
export const guestWriterEnAlt = writers.find((w) => w.slug === 'senai-aksoy')!;
