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
  // Kurumsal imza: görünür yazar kadrosuna girmez, ama makale byline'ında
  // "Estranova Editörleri" gibi sahipsiz olmayan editöryal imza sağlar.
  isInstitutionalByline?: boolean;
  // active = sitede yazar kadrosunda görünür; inactive = profil/arşiv korunur,
  // ancak kadro kartları, arama ve /yazarlar rotalarında görünmez.
  status?: 'active' | 'inactive';
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
    slug: 'estranova-editorial',
    displayName: 'Estranova Editörleri',
    role: 'Kurumsal Editöryal İmza',
    ageBand: '—',
    publicBio:
      'Estranova Editörleri; temel rehberler, hub tamamlayıcıları ve kurumsal bilgi yazıları için kullanılan editöryal imzadır. Bu içerikler Estranova Editorial Gloss tonuyla hazırlanır: sofistike kadın dergisi ritmi, sakin sağlık okuryazarlığı ve bilimsel editör disiplini birlikte taşınır.',
    signaturePhrase:
      'Vogue’un atmosfer duygusunu, Marie Claire’in çağdaş kadın deneyimine yakınlığını ve Estranova’nın kanıt-temelli sağlık çizgisini birleştirir.',
    focusAreas: ['Editorial Gloss', 'Temel Rehberler', 'Bilimsel İnceleme'],
    isEditor: false,
    isInstitutionalByline: true,
    status: 'inactive',
    writingStyle: {
      voice:
        'Estranova Editorial Gloss: rafine, şehirli, atmosferik ve kadın deneyimine yakın; Vogue/Marie Claire hissinden ilham alır ama hiçbir dış yayını taklit etmez. Kişisel deneyim iddiası kurmadan, kanıt-temelli editöryal sorumluluğu korur.',
      rhythm:
        'Kısa-orta paragraflar; görsel/duygusal bir lede, sonra net ayrım, ardından uygulanabilir sağlık okuryazarlığı adımı. Cümleler parlak ama ölçülü; dergisel akış klinik netlikle dengelenir.',
      framing:
        'Konuyu isimli yazar sesiyle değil, Estranova editöryal rehberliğiyle çerçeveler. Açılışta beden, zaman, şehir, gardırop, uyku, ayna, takvim veya mevsim gibi atmosferik bir kapı kullanılabilir; her tıbbi iddia bilimsel editör notu ve kaynak disipliniyle desteklenir.',
      dos: [
        'İmzada “Estranova Editörleri” kullan; sahipsiz anonimlik yaratma.',
        'Kişisel anekdot veya birinci tekil deneyim iddiası kurma.',
        'Vogue’dan atmosfer ve seçicilik, Marie Claire’den erişilebilir çağdaş kadın dili al; marka, cümle veya yayın taklidi yapma.',
        'Açılışı kuru tanımla değil, okurun bedensel/gündelik farkındalığını çağıran zarif bir sahneyle kur.',
        'Temel rehber, hub tamamlayıcı ve açıklayıcı sağlık haritası formatını editorial gloss ile yumuşat.',
        'Tıbbi konularda bilimsel editör incelemesini ve kırmızı bayrakları görünür tut.',
      ],
      donts: [
        'Kişisel köşe yazısı, yazar deneyimi veya dış yazar üslubu taklidi yapma.',
        'Moda dergisi parıltısını bilimsel belirsizliği örtecek şekilde kullanma.',
        'Lüks, trend, güzellik veya performans baskısı kuran dil kullanma.',
        'Klinik tanı/tedavi talimatını hekim değerlendirmesi gibi sunma.',
        'Yazar onayı gerekiyormuş gibi dış form üretme.',
      ],
    },
  },
  {
    slug: 'berna-aksoy',
    displayName: 'Berna Aksoy',
    role: 'Yönetici Editör / Ana Yazar',
    ageBand: '55-56',
    publicBio:
      'Kurumsal hayatın ardından kendi işini kurmuş, kararlarını aceleyle değil veriyle veren bir yönetici. Estranova\'da yayın çizgisini, içerik önceliklerini ve önleyici sağlık başlıklarını şekillendiriyor. Telaşı sevmeyen, resmi sadeleştirip okura yön duygusu veren bir yaşıt.',
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
      'Eski profesyonel windsurfer; sporun içinde geçen yıllar onda bedeni dikkatle okuma alışkanlığı bıraktı. Estranova\'da hareket, anti-aging ve sürdürülebilir egzersiz başlıklarını performans baskısı kurmadan yazıyor. Doğayla iç içe yaşayan, anne kuşağını sevgiyle gözlemleyen genç bir yaşıt.',
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
    status: 'inactive',
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
      'Marka ve deneyim alanından gelen, soruyu sevmeyi bilen araştırmacı bir yazar. Estranova\'da uzun menopoz deneyimini, yakın dönem HRT yolculuğunu ve üç kuşaklı kadın bağını samimi ama ölçülü bir tonla yazıyor. Yargı dağıtmadan yanına oturan, merakını gizlemeyen bir yaşıt.',
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
    // Bilimsel yazar — medikal ve kozmetik dermatoloji. 5. bilimsel
    // yazar; cilt biyolojisi merkezli, hormon-cilt ekseninde menopoz
    // odaklı. Çağrı Sade ile yan eksen ama farklı: Çağrı yüz katmanlı
    // cerrahi haritası, Gonca cilt biyolojisi (UV+hormon+melanin+
    // kollajen). Kozmetik marka danışmanlığı geçmişi nedeniyle marka
    // adı yasağı ekstra hassasiyet ister. Tıbbi danışman kartı korunur
    // (yayin-kurulu.astro medicalAdvisors[3] — Dermatoloji).
    slug: 'gonca-gokdemir',
    displayName: 'Prof. Dr. Gonca Gökdemir',
    role: 'Medikal & Kozmetik Dermatoloji Bilimsel Yazarı',
    ageBand: '58-62',
    publicBio:
      "Medikal ve kozmetik dermatoloji alanında 25 yılı aşkın deneyimli bir akademisyen. Şişli Etfal, Okmeydanı, İstanbul Tıp Fakültesi, Liv Hospital ve Bahçeşehir Üniversitesi Tıp Fakültesi'nde görev yaptı; ~150 yerli ve yabancı yayın, çok sayıda kongre sunumu, estetik dermatoloji eğitmenliği ve medikal kozmetik marka danışmanlığı geçmişine sahip. Estranova'da cilt sağlığı, hormonal geçişin cilde etkileri ve estetik dermatoloji başlıklarında yazıyor — \"trendin değil cildin tarafında duran\" çerçevede; anlaşılır anlatımla, marka pazarlamasından uzak, cilt biyolojisi merkezli.",
    signaturePhrase:
      'Cilt biyolojisini hormon-UV-zaman ekseninde okuyan; "trendin değil cildin tarafında" duran, marka pazarlamasından uzak akademisyen-klinisyen.',
    portrait: '/images/writers/gonca-gokdemir.webp',
    focusAreas: ['Cilt & Menopoz', 'Lekeler & Hormon-Cilt', 'Önleyici Dermatoloji'],
    isEditor: false,
    status: 'inactive',
    category: 'scientific',
    writingStyle: {
      voice: 'Anlaşılır + okuru rahatlatan + akademik birikim arka planda; "trendin değil cildin tarafında" anti-trend duruşu.',
      rhythm: 'Orta-uzun cümleler (12-20 kelime); tablo → mekanizma → karar zinciri akışı; mevsim odaklı pratik rehber tonu.',
      framing: 'Cilt biyolojisi merkez (UV/hormon/melanin/kollajen) → klinik karşılık → günlük rutin / dermatoloji takibi.',
      dos: [
        '"Trendin değil cildin tarafında" anti-trend duruşunu en az bir cümlede göster (HARD imza).',
        'Cilt biyolojisi merkezli mekanizma haritası kur (UV + hormon + melanin + kollajen + bariyer).',
        'Aktif madde okur-yazarlığı: marka değil mekanizma (retinol şu mekanizmayla, niasinamid şu mekanizmayla).',
        'Klinik jargonu Türkçe karşılığıyla aç (melazma = epidermal pigmentasyon bozukluğu).',
        'Hormonal geçişle cilt değişimini bağla (perimenopoz/postmenopoz cilt).',
        '"Dermatoloğunuzla şu konuyu konuşabilirsiniz" rehberi kullan.',
      ],
      donts: [
        '"Profesör olarak söylerim ki" kibirli otorite.',
        'Kendi sitesi (goncagokdemir.com) / Teşvikiye muayenehane / hastane gövdede.',
        'Promosyonel akademisyen vitrini gövdede ("25 yıl / 150 makale / Profesörlük") — biyografide ok.',
        '**Önce-sonra anlatımı MUTLAK YASAK.**',
        '**Spesifik kozmetik / dermokozmetik / cihaz marka adı gövdede MUTLAK YASAK.**',
        'Kozmetik marka danışmanlığı geçmişi gövdeye sızması.',
        'Uluslararası kuruluş adı (AAD/EADV/IADVL) gövdede.',
        'Kontrol edilemez vaat ("genç görün / lekesiz cilt / sırrı / mucize").',
        'Hasta hikayesi anekdot detayı (yaş/yer/tarih).',
        'Yaşıt yazar pozu — Gonca ~60, kadın, hekim.',
        'Cerrahi yüz germe ayrıntısı (Çağrı Sade alanı) — eksen karışıklığı.',
        'Mahrem (Senai) / endokrin (Metin) / kardiyo (Alp) eksenleri.',
      ],
    },
  },
  {
    // Bilimsel yazar — plastik, rekonstrüktif ve estetik cerrahi. 4.
    // bilimsel yazar; yüz ve cilt yaşlanması 40+ ekseninde. Estetik
    // konuları Estranova'nın CLAUDE.md §1 (klinik sitesi DEĞİL) ve §4
    // (promosyon yasakları) çerçevesiyle EN SIKI uygulanır: önce-sonra
    // anlatımı, marka adı, başarı vitrini MUTLAK YASAK. Tıbbi danışman
    // kartı korunur (yayin-kurulu.astro medicalAdvisors[2]).
    slug: 'cagri-sade',
    displayName: 'Op. Dr. Çağrı Sade',
    role: 'Plastik & Estetik Cerrahi Bilimsel Yazarı',
    ageBand: '55-57',
    publicBio:
      'Plastik, rekonstrüktif ve estetik cerrahi alanında çalışan deneyimli bir hekim. Estranova\'da estetik girişimleri modaya değil yüze ve kişiye bakarak, gerçekçi beklenti ve doğal yaşlanma dengesi içinde anlatıyor. Pazarlama dili yerine karar vermeyi kolaylaştıran sakin bir bilgi hattı kuruyor.',
    signaturePhrase:
      'Yüz ve cilt yaşlanması 40+ ekseninde "size uygun mu" karar çerçevesini öne çıkaran; doğal yaşlanma kabulü ile müdahale dengesini bilgi diliyle açan klinisyen.',
    portrait: '/images/writers/cagri-sade.webp',
    focusAreas: ['Yüz Yaşlanması & Menopoz', 'Estetik Karar Süreci', 'Non-İnvaziv Bilgi Haritası'],
    isEditor: false,
    category: 'scientific',
    writingStyle: {
      voice: 'Bilgilendirici + danışmanlık niteliğinde + hasta-merkezli; "modaya değil yüze ve kişiye bakan" kişiselleştirme felsefesi.',
      rhythm: 'Orta-uzun cümleler (12-20 kelime); tablo → mekanizma → karar zinciri akışı; bullet listin önünde 1 cümle bağlam paragrafı zorunlu.',
      framing: '"Yapılabilir mi" değil "size uygun mu" sorusunu merkeze al; doğal yaşlanma kabulü ile müdahale dengesini birlikte düşünmeyi öner.',
      dos: [
        '"Size uygun mu" karar çerçevesini açılışta veya ilk H2\'de kur (kişiselleştirme imzası).',
        'Yüz yaşlanması mekanizmasını katmanlı aç (cilt + yağ + kemik + kas).',
        'Klinik jargonu Türkçe karşılığıyla ver (blefaroplasti = göz kapağı estetiği).',
        '"Cerrahınızla şu konuları konuşabilirsiniz" rehberi kullan.',
        'Doğal yaşlanma kabulü + müdahale dengesini birlikte düşün.',
        'Bullet listin önünde 1 cümle bağlam paragrafı koy.',
      ],
      donts: [
        '"25 yıllık cerrah olarak söylerim ki" / "Aston gözleminde olarak" — kibirli otorite + promosyonel referans.',
        'Kendi sitesi (cagrisade.com.tr) / muayenehane / Amerikan Hastanesi gövdede.',
        'Promosyonel cerrah vitrini ("25 yıl deneyim / binlerce hasta") gövdede.',
        '**Önce-sonra anlatımı MUTLAK YASAK.**',
        '**Spesifik marka adı (dolgu / botoks / cihaz / lazer / iplik / krem) gövdede MUTLAK YASAK.**',
        'Uluslararası kuruluş adı (ASPS/ISAPS/IPRAS) gövdede.',
        'Kontrol edilemez vaat ("size 10 yıl gençlik / sırrı / mucize").',
        'Hasta hikayesi anekdot detayı (yaş/yer/tarih/işlem).',
        'Yaşıt yazar pozu — Çağrı Sade ~56, erkek, hekim.',
        'Mahrem (Senai — labiaplasti) / endokrin (Metin) / kardiyo (Alp) eksen karışıklığı.',
        'Vücut estetiği geneli (BBL / liposuction) — menopoz çerçevesi dışı.',
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
      'Girişimsel kardiyoloji ve önleyici kalp sağlığı alanında çalışan deneyimli bir hekim. Estranova\'da menopoz sonrası kalp damar değişimini, kadın özelindeki risk başlıklarını ve erken taramanın neden önemli olduğunu sade Türkçeyle anlatıyor. Riski abartmadan ama geçiştirmeden konuşan sakin bir klinisyen sesi var.',
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
      'Endokrinoloji ve metabolizma alanında çalışan bir hekim. Estranova\'da hormonal geçişle iç içe geçen tiroid, kemik ve metabolik denge başlıklarını sade Türkçeyle açıyor. Yanlış anlaşılan tabloları panik yaratmadan netleştirmeyi seven bir klinisyen.',
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
    slug: 'elif-ozcan-dulundu',
    displayName: 'Dt. Elif Özcan Dulundu',
    role: 'Estetik Diş Hekimliği Bilimsel Yazarı',
    ageBand: '57-59',
    publicBio:
      "Estetik diş hekimliği ve porselen laminalar alanında 30+ yıllık deneyimli bir diş hekimi. İstanbul Üniversitesi Diş Hekimliği Fakültesi (1991) mezunu, Siena Üniversitesi (İtalya) Protetik, Estetik ve Dijital Diş Hekimliği Master'ı. Creadenta'nın kurucu ortağı; EDAD (Estetik Diş Hekimliği Akademisi Derneği) Genel Sekreteri ve DEKİD (Diş Hekimleri Klinik Sahipleri Derneği) Başkan Yardımcısı. 2003'ten beri meslektaşlarına eğitim veriyor; uluslararası dergilerde porselen laminalar üzerine yayınları var. Estranova'da gülüş tasarımı, diş sağlığı ve hormonal geçişin ağız sağlığına etkileri başlıklarında \"sade ama kalıcı olanı seven\" çerçevede yazıyor.",
    signaturePhrase:
      'Estetik diş hekimliğini "sağlıklı dokuyu koruyarak" minimal invaziv felsefede ele alan; sade ama kalıcı olanı, modaya değil yüzün geometrisine uygun olanı seçen akademisyen-klinisyen.',
    portrait: '/images/writers/elif-ozcan-dulundu.webp',
    focusAreas: ['Ağız Sağlığı & Menopoz', 'Estetik Diş Karar Süreci', 'Minimal İnvaziv Felsefe'],
    isEditor: false,
    status: 'inactive',
    category: 'scientific',
    writingStyle: {
      voice: 'Akademik birikim arka planda + sade Türkçe; "sade ama kalıcı olanı seven, abartıdan uzak duran" minimal invaziv felsefe.',
      rhythm: 'Orta-uzun cümleler (12-20 kelime); tablo → mekanizma → karar zinciri akışı; eğitmen disiplini yumuşak versiyonu.',
      framing: '"Yapılabilir mi" değil "sağlıklı doku nasıl korunur" sorusu merkezde; yüzün bütününe bakan gülüş tasarımı yaklaşımı.',
      dos: [
        '"Sağlıklı dokuyu koruyarak" minimal invaziv felsefesini en az bir cümlede göster (HARD imza).',
        '"Sade ama kalıcı" anti-trend duruşunu vurgula (Hollywood smile karşıtı).',
        'Hormonal geçişin ağız sağlığına etkilerini bağla (östrojen-mukoza-kemik ekseni).',
        'Klinik jargonu Türkçe karşılığıyla aç (xerostomi = kuru ağız sendromu).',
        'Yüzün bütününe bakan gülüş tasarımı çerçevesini koru.',
        '"Diş hekiminizle şu konuyu konuşabilirsiniz" rehberi kullan.',
      ],
      donts: [
        '"30 yıllık diş hekimi olarak söylerim ki" / "EDAD Genel Sekreter olarak" — kibirli otorite.',
        '**Creadenta marka adı / Duygu Karaosmanoğlu ortağı referansı / "kliniğimizde" gövdede MUTLAK YASAK.**',
        'Promosyonel akademisyen-klinisyen vitrini gövdede ("30 yıl / EDAD / DEKİD / Siena Master\'s").',
        '**Önce-sonra anlatımı MUTLAK YASAK.**',
        '**Spesifik porselen / lamina / cihaz / dijital tarayıcı markası MUTLAK YASAK.**',
        '**"Hollywood smile" / "mükemmel gülüş" pazarlama dili MUTLAK YASAK.**',
        'Galip Gürel mentor referansı gövdede.',
        'Uluslararası kuruluş adı (AAED/AACD/IFED) gövdede.',
        'Tedavi reçete dili.',
        'Hasta hikayesi anekdot detayı.',
        'Yaşıt yazar pozu — Elif ~58, kadın, hekim.',
        'Mahrem (Senai) / endokrin (Metin) / kardiyo (Alp) / dermatoloji (Gonca) / cerrahi (Çağrı Sade) eksen karışıklığı.',
      ],
    },
  },
  {
    // Bilimsel yazar — ortopedi & travmatoloji + 40+ kadın kemik-kas-
    // iskelet sistemi cerrahi sınır kanadı. 9. (şimdilik son) bilimsel
    // yazar — Tıbbi Danışmanlar 8/8'i bilimsel yazar olarak da kayıtlı.
    // Üçlü kemik-kas-iskelet mimarisi: Metin endokrin (medikal) /
    // Ersin fizyoterapi (rehab) / Bülent ortopedi (cerrahi sınır).
    // SOYAD BENZERLİĞİ: Senai Aksoy ile aynı soyad + Cerrahpaşa 1985
    // paralel mezuniyet — aile bağı kullanıcı doğrulamasına bağlı,
    // default kapalı. Tıbbi danışman kartı korunur (yayin-kurulu.astro
    // medicalAdvisors[7] — Ortopedi).
    slug: 'bulent-aksoy',
    displayName: 'Prof. Dr. Bülent Aksoy',
    role: 'Ortopedi & Travmatoloji Bilimsel Yazarı',
    ageBand: '63-65',
    publicBio:
      'Ortopedi ve travmatoloji alanında çalışan deneyimli bir hekim. Estranova\'da kemik sağlığı, eklem ağrıları ve 40 sonrası ortopedik takip başlıklarını cerrahiyi ilk cevap gibi sunmadan anlatıyor. Hastayı ameliyat masasından önce hayata yönlendirmeyi önemseyen sakin bir klinisyen.',
    signaturePhrase:
      'Postmenopozal kemik-kas-iskelet sistemini "ameliyat masasından önce hayata yönlendirmek" felsefesinde okuyan; cerrahi-öncesi konservatif yaklaşım ve sakin hekim tonuyla yazan akademisyen-cerrah.',
    portrait: '/images/writers/bulent-aksoy.webp',
    focusAreas: ['Postmenopozal Kemik & Kırık Riski', 'Eklem Ağrıları 40+', 'Cerrahi Sınır & Konservatif Yaklaşım'],
    isEditor: false,
    category: 'scientific',
    writingStyle: {
      voice: 'Klinisyen mesafesi + "sakin bir hekim" tonu (yayin-kurulu bio\'su); cerrahi-öncesi konservatif yaklaşım felsefesi.',
      rhythm: 'Orta-uzun cümleler (12-20 kelime); tablo → mekanizma → karar zinciri akışı; tedrici yaklaşım.',
      framing: '"Hastayı ameliyat masasından önce hayata yönlendirmek" çerçevesinde mekanizma + karar süreci; doğru zamanlama felsefesi.',
      dos: [
        '"Hastayı ameliyat masasından önce hayata yönlendirmek" felsefesini en az bir cümlede göster (HARD imza).',
        '"Sakin hekim" tonu — panik dili karşıtı, tedrici yaklaşım.',
        'Postmenopozal kemik-kas-iskelet ekseninde mekanizma + ortopedik takip zinciri kur.',
        'Klinik jargonu Türkçe karşılığıyla aç (artroplasti = eklem protezi cerrahisi).',
        'Konservatif yaklaşım önceliği vurgula; cerrahi seçeneği "ilk değil son" değerlendir.',
        '"Ortopedi hekiminizle şu konuyu konuşabilirsiniz" rehberi kullan.',
      ],
      donts: [
        '"Profesör olarak söylerim ki" / "25 yıllık cerrah olarak" — kibirli otorite.',
        'Memorial / Amerikan Hastanesi / Beşiktaş muayenehane gövdede.',
        'Promosyonel akademisyen-cerrah vitrini gövdede ("25 yıl / Cerrahpaşa / Profesör") — biyografide ok.',
        '**Spor klübü tabipliği gövdede MUTLAK YASAK** ("Efes Pilsen ile çalıştığım yıllar / Galatasaray ile").',
        '**Önce-sonra anlatımı MUTLAK YASAK.**',
        '**Spesifik protez / implant / cerrahi cihaz / ilaç markası MUTLAK YASAK.**',
        '"Hızlı iyileşme" / "X günde toparla" / "Yıllık X protez ameliyatım" — pazarlama dili YASAK.',
        'Cerrahi reçete dili ("şu cerrahi tekniği şu yaklaşımla").',
        'Uluslararası kuruluş adı (AAOS/EFORT/SICOT) gövdede.',
        'Hasta hikayesi anekdot detayı.',
        'Yaşıt yazar pozu — Bülent ~64, erkek, hekim.',
        'Pediatrik ortopedi / spor yaralanmaları geneli — Estranova menopoz çerçevesi dışı.',
        'Sporcu performans odaklı içerik (Alara alanı; Bülent için ayrı yasak).',
        'Mahrem (Senai) / endokrin (Metin) / kardiyo (Alp) / dermatoloji (Gonca) / cerrahi yüz (Çağrı Sade) / dental (Elif/Duygu) / fizyoterapi (Ersin) eksen karışıklığı.',
      ],
    },
  },
  {
    // Bilimsel yazar — kas-iskelet rehabilitasyonu + önleyici fizyoterapi.
    // 8. bilimsel yazar; Alp önleyici kardiyoloji / Ersin önleyici
    // kas-iskelet paralel ekseninde. Bilimsel yazar grubunda EN GENÇ
    // (33 yaş, 1993 Adana doğumlu); yaş farkı içtenlik kapısı DEĞİL —
    // klinisyen mesafesi sıkı. Pain Free Nişantaşı klinik kurucusu;
    // Fenerbahçe Erkek Basketbol A Takımı (2017-2018) sporcu klinisyen
    // deneyimi. Tıbbi danışman kartı korunur (yayin-kurulu.astro
    // medicalAdvisors[6] — Fizyoterapi).
    slug: 'ersin-sarac',
    displayName: 'Fzt. Ersin Saraç',
    role: 'Fizyoterapi & Rehabilitasyon Bilimsel Yazarı',
    ageBand: '33',
    publicBio:
      'Kas-iskelet rehabilitasyonu, postür ve klinik egzersiz alanında çalışan bir fizyoterapist. Estranova\'da hareket, kronik ağrı ve postmenopozal kas-iskelet sağlığı başlıklarını bedeni dinleyerek ilerleme fikriyle yazıyor. Hızlı sonuç vaat etmek yerine küçük ama sürdürülebilir adımları öne çıkarıyor.',
    signaturePhrase:
      '40+ kadın bedeninde kas-iskelet, postür ve denge eksenini "bedeni dinleyerek ilerlemek" felsefesinde okuyan; tedrici yaklaşım ve kanıt-temelli rehberlikle yazan klinisyen.',
    portrait: '/images/writers/ersin-sarac.webp',
    focusAreas: ['Kas-İskelet & 40 Sonrası', 'Postmenopozal Hareket', 'Pelvik Taban Fizyoterapi'],
    isEditor: false,
    category: 'scientific',
    writingStyle: {
      voice: 'Klinisyen mesafesi + öğretmen tonu (paternalist DEĞİL, kanıt-temelli rehber); "bedeni dinleyerek ilerlemek" felsefesi.',
      rhythm: 'Orta-uzun cümleler (12-20 kelime); tablo → mekanizma → günlük egzersiz/karar zinciri akışı; tedrici yaklaşım.',
      framing: '"Bedeni dinleyerek ilerlemek" + "küçük adımların gücü" çerçevesinde mekanizma + günlük uygulama zinciri; panik dili / hızlı sonuç vaadi YASAK.',
      dos: [
        '"Bedeni dinleyerek ilerlemek" / "küçük adımların gücü" felsefesini en az bir cümlede göster (HARD imza).',
        'Tedrici yaklaşımı vurgula — panik dili / "X günde sıfır ağrı" vaadi karşıtı.',
        'Klinik jargonu Türkçe karşılığıyla aç (diastasis recti = karın kasları ayrılması).',
        'Postmenopozal kas-iskelet ekseninde mekanizma + egzersiz zinciri kur.',
        '"Fizyoterapistinizle şu pratiği değerlendirebilirsiniz" rehberi kullan.',
        'Yumuşak inclusive ("kliniğe başvuran 40+ kadınlarda…").',
      ],
      donts: [
        '"Genç fizyoterapist olarak söylerim ki" yaş vurgusu YASAK.',
        '"Sporcu fizyoterapisti olarak" / "Fenerbahçe ile çalıştığım yıllar" — promosyonel vitrin.',
        'Pain Free Nişantaşı klinik adı / "Kliniğimde" gövdede.',
        'Promosyonel klinisyen vitrini gövdede ("Fenerbahçe / Pain Free kurucusu").',
        '**Önce-sonra anlatımı MUTLAK YASAK.**',
        '**Spesifik alet / cihaz / takviye / kineziyolojik bant markası MUTLAK YASAK.**',
        '**"X günde sıfır ağrı" / "Hızlı toparlanma" hızlı sonuç vaadi MUTLAK YASAK.**',
        'Egzersiz reçete dili ("şu set şu tekrar şu sıklık").',
        'Uluslararası kuruluş adı (WCPT/IFOMPT/APTA) gövdede.',
        'Hasta hikayesi anekdot detayı.',
        '**Yaşıt yazar pozu MUTLAK YASAK — Ersin 33, yaş farkı içtenlik kapısı değil.**',
        'Mahrem (Senai) / endokrin (Metin) / kardiyo (Alp) / dermatoloji (Gonca) / cerrahi (Çağrı Sade) / dental (Elif/Duygu) eksen karışıklığı.',
        'Sporcu performans / spor yaralanması geneli (Estranova menopoz dışı).',
        'Anti-aging spor felsefesi (Alara alanı — yaşıt sesi).',
      ],
    },
  },
  {
    // v2.0 (lifestyle) → v3.0 (bilimsel yazar) geçiş 2026-05-02. Eski
    // lifestyle bio (HRT deneyimi paylaşan yaşıt yazar / Londra-İstanbul /
    // kız-anne ekseni) bilimsel yazar konumuna geçişte taşınmadı. Elif
    // Özcan Dulundu ile Creadenta yapısal ortaklığı + Senai jinekoloji
    // (HRT muayene odası bilgisi) Çift Rol active=true.
    slug: 'duygu-karaosmanoglu',
    displayName: 'Dt. Duygu Karaosmanoğlu',
    role: 'Estetik Diş Hekimliği Bilimsel Yazarı',
    ageBand: '55-57',
    publicBio:
      'Estetik diş hekimliği alanında çalışan deneyimli bir diş hekimi. Estranova\'da diş sağlığını, gülüş tasarımını ve hormonal geçişin ağız sağlığına etkilerini doğal görünümü zorlamadan anlatıyor. Yüze yakışanı arayan, jargonu gereksiz yere büyütmeyen bir sesi var.',
    signaturePhrase:
      'Estetik diş hekimliğini "yüze yakışanı arayan" kişiselleştirme felsefesinde ele alan; doğal görünümü zorlamayan, klinik-pratik gündelik tonu olan diş hekimi.',
    portrait: '/images/writers/duygu-karaosmanoglu.webp',
    focusAreas: ['Diş Sağlığı & Menopoz', 'Gülüş Tasarımı', 'Doğal Görünüm Felsefesi'],
    isEditor: false,
    category: 'scientific',
    writingStyle: {
      voice: 'Klinik-pratik gündelik ton; "yüze yakışanı arayan, doğal görünümü zorlamayan" felsefe; akademik birikim arka planda.',
      rhythm: 'Orta-uzun cümleler (12-20 kelime); tablo → mekanizma → karar zinciri akışı; pratik öneri zinciri (Elif akademik-lider tonundan farklı).',
      framing: '"Yüze yakışanı arayan" kişiselleştirme + doğal görünüm + müdahale dengesi; pratik bakım rehberi.',
      dos: [
        '"Yüze yakışanı arayan" kişiselleştirme felsefesini en az bir cümlede göster (HARD imza).',
        'Hormonal geçişin ağız sağlığına etkilerini bağla (östrojen-mukoza-kemik ekseni).',
        'Klinik jargonu Türkçe karşılığıyla aç (xerostomi = kuru ağız sendromu).',
        'Doğal görünüm + müdahale dengesini birlikte düşün.',
        '"Diş hekiminizle şu pratik konuyu konuşabilirsiniz" rehberi kullan.',
        'Pratik öneri zinciri (Elif akademik-lider tonundan farklı; gündelik öneri tarzı).',
      ],
      donts: [
        '"30 yıllık diş hekimi olarak söylerim ki" / "EDAD Yönetim Kurulu Üyesi olarak" — kibirli otorite.',
        '**Creadenta marka adı / Elif Özcan Dulundu ortağı referansı / "kliniğimizde" gövdede MUTLAK YASAK.**',
        'Promosyonel akademisyen-klinisyen vitrini gövdede ("30 yıl / EDAD / Siena Master\'s") — biyografide ok.',
        '**Önce-sonra anlatımı MUTLAK YASAK.**',
        '**Spesifik porselen / lamina / cihaz / dijital tarayıcı markası MUTLAK YASAK.**',
        '**"Hollywood smile" / "mükemmel gülüş" pazarlama dili MUTLAK YASAK.**',
        '**HRT deneyimi paylaşımı — Senai jinekolog Çift Rol uyarısı gereği MUTLAK YASAK.**',
        '**Eski v2.0 lifestyle eksenleri (Londra-İstanbul, 21 yaşında kız, boşanma, sosyal masa, "yaşıt tonuyla paylaşma") MUTLAK YASAK.**',
        'Tedavi reçete dili.',
        'Uluslararası kuruluş adı (AAED/AACD/IFED) gövdede.',
        'Hasta hikayesi anekdot detayı.',
        '**Yaşıt yazar pozu MUTLAK YASAK** (eski v2.0 lifestyle persona izi gövdeye sızmaz).',
        'Mahrem (Senai) / endokrin (Metin) / kardiyo (Alp) / dermatoloji (Gonca) / cerrahi (Çağrı Sade) eksen karışıklığı.',
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
    status: 'inactive',
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
      'Medya ve dijital yayıncılıkta uzun yıllar çalışmış bir editör ve araştırmacı. Estranova\'da bilim ve teknoloji başlıklarını yazıyor; aynı zamanda kaynak doğrulama ve yayın akışına editöryal destek veriyor. Bilgi kirliliğini ayıklamayı seven, "kaynak nereden?" sorusunu sormaktan çekinmeyen biri.',
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
      'Gastronomi ve gündelik hayat bilgisini aynı sofrada buluşturan bir yazar. Estranova\'da beslenme, sürdürülebilirlik ve sabah rutinleri başlıklarını sofra sıcaklığıyla yazıyor. Kültürel referansı gösterişe kaçmadan gündelik hayata sokan, ritmi yumuşak bir yaşıt.',
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
      'Tiyatro sanatçısı; sahne disiplinini ve sahici anlatımı yazıya taşıyan bir yazar. Estranova\'da perimenopoz, menopoz ve iyi yaşam başlıklarını sade dille, okurun hissini önce normalize ederek yazıyor. Panik değil yön duygusu veren sıcak bir yaşıt sesi var.',
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
    // Görünür yazar adı akademik unvanıyla yazılır; slug sabit kalır.
    slug: 'senai-aksoy',
    displayName: 'Doç. Dr. Senai Aksoy',
    role: 'Kimsenin Yazmak İstemediği Konu Yazarı',
    ageBand: '50+',
    publicBio:
      'Estranova\'nın bilimsel editörü; ama bu kartta öne çıkan şey hekim unvanından çok, yıllardır kadın sağlığının içinde olmuş birinin sesi. Vajinal sağlık, idrar kaçırma ya da libido gibi konularda kimse yazmaya gönüllü olmadığında masaya kendisi oturuyor. Jargonla mesafe koyan, soruyu ciddiye alan ve gereksiz vaat kurmayan biri.',
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
      'Uzun yıllar Türkiye-Japonya hattında çalışmış, iki kültürü yakından gözlemlemiş bir yazar. Estranova\'da menopoz deneyimi, Japon kültürü ve gündelik nezaket başlıklarını HRT yolunu da saklamadan, ölçülü bir yaşıt tonuyla yazıyor. Aile sıcaklığını ve sakin gözlemi metne taşıyan candan bir sesi var.',
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

export const inactiveWriterSlugs = ['bahar-ozeray', 'gonca-gokdemir', 'elif-ozcan-dulundu', 'ozlem-denizmen'] as const;

export const activeWriters = writers.filter((w) => w.status !== 'inactive');

// Editör her zaman ilk: Berna; diğerleri: displayName alfabetik
export const editors = activeWriters.filter((w) => w.isEditor);

// Magazinsel yaşıt sesi yazarlar — doktor değil; kendi uzmanlık alanı +
// 40+ kadın sağlığı kesişiminde günlük gözlem ve magazinsel makaleler.
// Editör (Berna) ve bilimsel yazarlar (Duygu, Senai) bu listede yer almaz.
export const guestWriters = writers
  .slice()
  .filter((w) => w.status !== 'inactive' && !w.isEditor && (w.category ?? 'lifestyle') === 'lifestyle')
  .sort((a, b) => a.displayName.localeCompare(b.displayName, 'tr'));

// Bilimsel yazarlar — doktor / klinik uzman; kendi uzmanlık alanında
// bilimsel anlatımla yazıyor. Bilim kurulu (tıbbi danışmanlar) içinden
// yazıya geçen kadro burada listelenir.
export const scientificWriters = writers
  .slice()
  .filter((w) => w.status !== 'inactive' && w.category === 'scientific')
  .sort((a, b) => a.displayName.localeCompare(b.displayName, 'tr'));

// Geri-uyumluluk için korunuyor — Senai Aksoy ayrı kart referansı.
// Yeni yapıda bu kart `scientificWriters` listesinin parçası olarak
// render edilir; bu export başka veri dosyaları (search-index vb.)
// referans verirse kırılmasın diye duruyor.
export const guestWriterEnAlt = writers.find((w) => w.slug === 'senai-aksoy')!;
