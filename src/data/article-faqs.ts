export interface ArticleFaqItem {
  question: string;
  answer: string;
}

export const articleFaqs: Record<string, ArticleFaqItem[]> = {
  '/hormonal-gecis/menopoz/dokuz-yillik-menopoz-sonunda-hrt-karari': [
    {
      question: 'Dokuz yıl sonra HRT başlamak otomatik olarak geç kalınmış bir karar mı sayılır?',
      answer:
        'Hayır. Bu başlıkta tek başına takvime bakmak çoğu zaman yeterli değildir; belirtilerin yükü, menopoza giriş yaşı, kişisel riskler ve hekimle kurulan izlem planı birlikte değerlendirilir. Aynı soru iki farklı kadın için iki farklı yanıta dönüşebilir.',
    },
    {
      question: 'Ailede osteoporoz öyküsü HRT kararını tek başına belirler mi?',
      answer:
        'Hayır. Aile öyküsü önemli bir veri sunar ama kararın tamamı onun üstüne kurulmaz. Kemik sağlığı, mevcut tarama sonuçları, başka risk faktörleri ve genel sağlık zemini birlikte okunur.',
    },
    {
      question: 'Uzun yıllardır tanıdığınız bir hekimle karar vermek daha mı güvenlidir?',
      answer:
        'Tanışıklık güven duygusunu güçlendirebilir; ama klinik kararın yerini tutmaz. Asıl önemli olan, kişisel öykünün dikkatle dinlenmesi ve izlem planının açık biçimde kurulmasıdır.',
    },
    {
      question: 'Bu tür kişisel bir HRT deneyimi herkese örnek alınacak bir yol haritası sunar mı?',
      answer:
        'Hayır. Kişisel anlatılar yalnızca bir deneyimin nasıl yaşandığını görünür kılar. Tedavi kararı ise her zaman kişisel belirtiler, risk-fayda dengesi ve hekim değerlendirmesiyle ayrı ayrı verilir.',
    },
  ],
  '/zamansiz-yasam/vitaminler/magnezyum-menopozda-ne-ise-yarar': [
    {
      question: 'Magnezyum menopozda herkese gerekli bir takviye midir?',
      answer:
        'Hayır. Bazı kadınlarda uyku, kabızlık ya da belirli eksiklik riski nedeniyle anlamlı olabilir; ama herkese otomatik olarak gerekliymiş gibi konuşmak doğru olmaz. Asıl soru, hangi yakınma için ve hangi gerekçeyle düşünüldüğüdür.',
    },
    {
      question: 'Uyku için magnezyum gerçekten işe yarar mı?',
      answer:
        'Uyku tarafında bazı kadınlarda fayda hissi olabilir; ancak kanıt bütün uyku sorunları için aynı güçte değildir. Özellikle uyku bozukluğunun nedeni sıcak basması, anksiyete, uyku apnesi ya da gece bölünmesi ise magnezyum tek başına bütün tabloyu çözmez.',
    },
    {
      question: 'Hangi magnezyum formu daha iyi sorusunun tek cevabı var mı?',
      answer:
        'Hayır. Form seçimi çoğu zaman hedefe göre anlam kazanır: kabızlıkta sitrat daha pratik olabilirken, mide-barsak hassasiyetinde başka formlar daha iyi tolere edilebilir. “En iyi form” yerine “hangi amaç için” sorusu daha doğru bir başlangıç sağlar.',
    },
    {
      question: 'Magnezyum zararsız diye düşünmek doğru mu?',
      answer:
        'Her zaman değil. Özellikle böbrek hastalığı olanlarda, bazı ilaçları kullananlarda ya da yüksek dozları uzun süre alanlarda daha dikkatli olunmalıdır. Takviyenin sıradan görünmesi, herkes için risksiz olduğu anlamına gelmez.',
    },
  ],
  '/bilimsel-pencere/yeni-arastirmalar/menopozda-hrt-avantajlari': [
    {
      question: "HRT'nin en belirgin faydası hangisidir?",
      answer:
        'En net ve en güçlü veri, sıcak basması ve gece terlemesi gibi vazomotor belirtilerin azalması tarafındadır. Buna bağlı olarak uyku bölünmeleri ve günlük yaşam kalitesi de birçok kadında iyileşebilir; yani fayda yalnızca tek bir belirtiyi azaltmakla kalmayıp bütün gün ritmini de etkileyebilir.',
    },
    {
      question: 'HRT yalnızca sıcak basması için mi düşünülür?',
      answer:
        'Hayır. Vajinal kuruluk, doku hassasiyeti, ilişki sırasında rahatsızlık ve bazı ürogenital yakınmalar için de anlamlı bir yeri vardır; burada özellikle lokal östrojen seçenekleri güçlü bir fayda alanı taşır. Ayrıca kemik kaybını yavaşlatma ve erken menopozda daha geniş bir koruyucu hat sağlama açısından da önemli olabilir.',
    },
    {
      question: 'Kalp ve metabolizma için koruyucu etkisi kesin midir?',
      answer:
        'Bu başlıkta daha temkinli konuşmak gerekir. Menopozun erken döneminde, uygun kişide ve doğru zamanlamayla başlanan tedavilerde genel denge daha elverişli olabilir; ancak bunu herkese genellenen güçlü bir “kalbi korur” cümlesine çevirmek doğru değildir. Yaş, başlangıç zamanı ve kişisel damar riski sonucu belirgin biçimde değiştirir.',
    },
    {
      question: 'Kemik sağlığı için faydası neden bu kadar vurgulanıyor?',
      answer:
        'Çünkü östrojen düşüşü menopoz sonrası kemik kaybının temel hızlandırıcılarından biridir ve HRT bu kaybı yavaşlatabilir. Özellikle erken menopoz yaşayan ya da kırık riski açısından daha dikkatli izlenen kadınlarda bu fayda daha stratejik bir anlam taşır; ama yine de karar tek başına kemik başlığına bakılarak değil, bütün tabloyla verilir.',
    },
    {
      question: 'HRT cilt, saç ve genel anti-aging etkisi için düşünülür mü?',
      answer:
        'Bazı kadınlarda cilt kuruluğu, doku konforu ya da saç kalitesindeki menopoz ilişkili değişimlerde ikincil bir destek sağlayabilir; ancak bu alanlardaki kanıt, sıcak basması ya da kemik sağlığı kadar güçlü değildir. Bu yüzden HRT’yi anti-aging vaadiyle değil, önce daha net ve kanıtı güçlü menopoz hedefleri üzerinden değerlendirmek daha doğru olur.',
    },
    {
      question: 'HRT kilo vermeye ya da göbek çevresini azaltmaya yardımcı olur mu?',
      answer:
        'HRT’yi kilo verdiren bir tedavi gibi düşünmek doğru değildir. Ancak menopozla birlikte yağın karın çevresine kayması ve vücut kompozisyonundaki değişim açısından bazı kadınlarda daha nötr bir zemin sağlayabileceğini düşündüren veriler vardır; bu etki genellikle büyük tartı değişiminden çok bel çevresi, uyku, hareket kapasitesi ve genel metabolik denge üzerinden okunur.',
    },
  ],
  '/beden-yakinlik/cilt-gorunum/menopozda-cilt-degisimleri': [
    {
      question: 'Menopozda cilt değişimi yalnızca yaşlanma mı?',
      answer:
        'Hayır. Yaş alma, güneş geçmişi, genetik yapı, uyku, stres ve bakım alışkanlıkları etkilidir; fakat menopoz döneminde östrojen azalması da cildin nem, kolajen ve bariyer ritmini değiştirebilir. Bu yüzden tabloyu tek nedenle açıklamak çoğu zaman eksik kalır.',
    },
    {
      question: 'Cilt kuruluğu ve hassasiyet bu dönemde artabilir mi?',
      answer:
        'Evet, bazı kadınlarda cilt daha kuru, daha gergin veya daha kolay kızaran bir hale gelebilir. Sert temizleyiciler, yoğun peeling ve üst üste aktif içerik denemeleri bu hassasiyeti artırabilir; önce bariyeri sakinleştirmek çoğu zaman daha iyi bir başlangıçtır.',
    },
    {
      question: 'Menopozda cilt için en güçlü günlük adım nedir?',
      answer:
        'Düzenli güneş koruması hâlâ en güçlü ve en iyi kanıtlı temel adımdır. Leke, elastikiyet, ince çizgi ve genel cilt sağlığı açısından gösterişli olmayan ama uzun vadede çok belirleyici bir alışkanlıktır.',
    },
    {
      question: 'Kolajen takviyesi herkes için gerekli midir?',
      answer:
        'Hayır. Kolajen takviyeleri için bazı sınırlı olumlu veriler olsa da her kadına genellenebilecek zorunlu bir öneri değildir. Protein alımı, uyku, direnç egzersizi, güneşten korunma ve kişisel sağlık durumu birlikte düşünülmelidir.',
    },
    {
      question: 'Ne zaman dermatolojik değerlendirme geciktirilmemeli?',
      answer:
        'Yeni veya hızla büyüyen leke, şekli değişen ben, kanayan ya da kabuklanan alan, geçmeyen yara, yoğun kaşıntı veya belirgin yanma varsa bekletmemek gerekir. Bu belirtiler kozmetik bakım konusu gibi değil, tıbbi değerlendirme gerektiren işaretler olarak ele alınmalıdır.',
    },
  ],
  '/zihin-denge/duygusal-denge/perimenopozda-kaygi-artisi': [
    {
      question: 'Perimenopozdaki kaygı artışı anksiyete bozukluğu anlamına gelir mi?',
      answer:
        'Her zaman hayır. Perimenopozda kaygı dalgalanması hormon değişimi, uyku bölünmesi ve yaşam yüküyle ilişkili olabilir. Ama kaygı günlük işlevi belirgin bozuyorsa, panik atak benzeri ataklar oluyorsa veya çökünlük eşlik ediyorsa profesyonel değerlendirme iyi olur.',
    },
    {
      question: 'Kaygı hissi adet düzeni değişmeden de başlayabilir mi?',
      answer:
        'Evet, bazı kadınlarda ruh hali, uyku veya bedensel alarm hissi adet düzenindeki belirgin değişimden önce fark edilebilir. Perimenopoz her kadında aynı sırayla ilerlemez; bu yüzden yalnızca takvime bakmak tabloyu eksik bırakabilir.',
    },
    {
      question: 'Gece uyanmaları kaygıyı gerçekten artırabilir mi?',
      answer:
        'Evet. Uyku bölündüğünde ertesi gün sinir sistemi daha tetikte çalışabilir; küçük stresler daha büyük hissedilebilir. Sıcak basması ve gece terlemesi de bu döngüyü besleyebilir.',
    },
    {
      question: 'Ne zaman bunu yalnızca yoğunluk diye geçmemek gerekir?',
      answer:
        'Kaygı işinizi, ilişkinizi, uykunuzu, dışarı çıkma rahatlığınızı veya güvenlik hissinizi belirgin etkiliyorsa ertelememek gerekir. Kendinize zarar verme düşüncesi, yoğun umutsuzluk veya panik atak benzeri ataklar varsa destek aramak acil önem taşır.',
    },
  ],
  '/hormonal-gecis/menopoza-hazirlik/menopoza-hazirlik-ilk-kontrol-dosyasi': [
    {
      question: 'Menopoza yaklaşırken herkese geniş hormon paneli gerekir mi?',
      answer:
        'Hayır. Yakınmayı, adet düzenini ve kişisel risk öyküsünü anlamadan yalnızca sayıyı büyütmek çoğu zaman daha fazla netlik sağlamaz. Çekirdek kontroller çoğu kadında daha değerlidir; ileri testler ise belirli bir soru varsa anlam kazanır.',
    },
    {
      question: 'FSH yüksek çıktıysa bu tek başına menopoza girdiğim anlamına gelir mi?',
      answer:
        'Hayır. FSH, özellikle perimenopozda dalgalanabilir ve tek başına bütün tabloyu anlatmaz. Adet düzeni, yaş, belirtiler ve bazen tekrar ölçüm ihtiyacı birlikte değerlendirilir.',
    },
    {
      question: 'Kontrol dosyasına hangi notları eklemek görüşmeyi kolaylaştırır?',
      answer:
        'Adet tarihi değişimleri, sıcak basması sıklığı, uyku bölünmeleri, kullanılan ilaç ve takviyeler, aile öyküsü ve son tarama tarihleri görüşmeyi çok kolaylaştırır. Bu küçük notlar çoğu zaman ekstra tahlilden daha yol gösterici olur.',
    },
  ],
  '/zihin-denge/bilissel-saglik/perimenopozda-zihinsel-bulaniklik': [
    {
      question: 'Perimenopozdaki zihinsel bulanıklık kalıcı bir hafıza kaybı mıdır?',
      answer:
        'Çoğu zaman hayır. Bu dönem daha çok dikkat, kelime bulma ve zihinsel hız dalgalanması şeklinde yaşanır; uyku, stres ve hormonal değişim birlikte rol oynar. Ama belirgin ilerleme, günlük işlev kaybı veya nörolojik ek belirti varsa konu yeniden ele alınmalıdır.',
    },
    {
      question: 'Beyin sisi ile uykusuzluk arasında gerçekten güçlü bir bağ var mı?',
      answer:
        'Evet, çoğu kadında en görünür bağlantılardan biri budur. Gece bölünmeleri arttıkça ertesi gün kelime bulma, odak sürdürme ve zihinsel dayanıklılık daha kırılgan hissedilebilir.',
    },
    {
      question: 'Bu dönemde ne zaman daha ayrıntılı değerlendirme istemek gerekir?',
      answer:
        'Yakınma kısa süreli dalgalanmanın ötesine geçip iş, güvenlik ya da günlük yaşamı etkiliyorsa daha dikkatli değerlendirme gerekir. Özellikle tek taraflı güçsüzlük, ani yönelim bozukluğu, şiddetli baş ağrısı veya hızla ilerleyen unutkanlık bekletilmemelidir.',
    },
  ],
  '/hormonal-gecis/perimenopoz/perimenopoz-ilk-isaretler': [
    {
      question: 'Perimenopoz kaç yaşında başlar?',
      answer:
        'Çoğu kadında kırklı yaşlarda fark edilir; bazı kadınlarda otuzların sonlarında, bazılarında ellilere yakın başlayabilir. Aile öyküsü, sigara, bazı kanser tedavileri, yumurtalık cerrahisi ve bazı otoimmün durumlar zamanlamayı etkileyebilir. Yaştan çok gidişe bakmak gerekir.',
    },
    {
      question: 'Adet görüyorsam hâlâ gebe kalabilir miyim?',
      answer:
        'Evet. Yumurtlama düzensizleşse de tamamen bitmiş sayılmaz. Gebelik istemiyorsanız, menopoz son adet üzerinden 12 ay geçerek netleşene kadar doğum kontrolü konusunu hekiminizle konuşmanız gerekir.',
    },
    {
      question: 'Her sıcak basması perimenopoz mudur?',
      answer:
        'Hayır. Sıcak basması perimenopozda sık görülür, ama tiroid sorunları, bazı ilaçlar, enfeksiyonlar, stres sistemi ve başka tıbbi durumlar da benzer hisler yaratabilir. Yeni, şiddetli veya günlük hayatı bozan belirtilerde değerlendirme gerekir.',
    },
    {
      question: 'Beyin sisi kalıcı mı?',
      answer:
        'Çoğu kadında hafif, dalgalı ve geçiş dönemine eşlik eden bir şikâyet olarak yaşanır. Uyku bozukluğu, stres, demir eksikliği, tiroid sorunları ve depresyon da tabloyu artırabilir. Korkuya kapılmadan, ama uzun sürerse görmezden gelmeden ele almak en sağlıklısıdır.',
    },
    {
      question: 'Hormon tedavisi bu dönemde şart mı?',
      answer:
        'Hayır, şart değildir; ama bazı kadınlarda belirgin vazomotor belirtiler ve yaşam kalitesi etkilenmesi varsa seçeneklerden biri olabilir. Karar yaş, sağlık öyküsü, riskler, beklentiler ve kontrendikasyonlar birlikte değerlendirilerek hekimle verilir. Bu yazı karar rehberi değil, ilk işaretleri okuma rehberidir.',
    },
  ],
  '/beden-yakinlik/cinsel-saglik/libido-degisimi-menopoz': [
    {
      question: 'Menopozda libido azalması mutlaka hormonal bir sorun mudur?',
      answer:
        'Hayır. Hormonlar önemli bir parça olsa da ilişki dinamiği, uyku, stres, beden konforu, ağrı ve kendilik hissi de tabloyu belirler. Bu yüzden tek neden aramak çoğu zaman konuyu gereğinden fazla daraltır.',
    },
    {
      question: 'İstek azalması ile uyarılma sorunu aynı şey mi?',
      answer:
        'Tam olarak değil. İstek, konuya zihinsel ve duygusal yaklaşımı; uyarılma ise bedensel yanıtı tarif eder. İkisi birlikte etkilenebilir ama her zaman aynı şekilde değişmez.',
    },
    {
      question: 'Ne zaman bu konuyu profesyonel destekle konuşmak iyi olur?',
      answer:
        'Yakınma ilişkiyi, özsaygıyı ya da bedenle kurduğunuz huzuru belirgin biçimde etkiliyorsa konuşmak iyi olur. Özellikle ağrı, belirgin kuruluk veya yeni başlamış isteksizlik başka başlıklarla birlikte değerlendirilmelidir.',
    },
  ],
  '/hormonal-gecis/menopoz/hrt-yan-etkileri-ve-izleme': [
    {
      question: 'HRT başladıktan sonra ilk haftalarda hangi yakınmalar geçici sayılabilir?',
      answer:
        'Hafif meme hassasiyeti, şişkinlik hissi, hafif baş ağrısı ya da lekelenme bazı rejimlerde başlangıç döneminde görülebilir. Bu tabloyu anlamlı yapan şey şiddeti, süresi ve zaman içinde yatışıp yatışmadığıdır.',
    },
    {
      question: 'Lekelenme olursa hemen tedavinin bana uymadığını mı düşünmeliyim?',
      answer:
        'Hayır, özellikle ilk aylarda bazı kadınlarda lekelenme görülebilir. Ama artan miktar, uzayan süre veya beklenmedik zamanlama varsa düzenin yeniden gözden geçirilmesi gerekir.',
    },
    {
      question: 'İzlem yalnızca yan etkileri görmek için mi yapılır?',
      answer:
        'Hayır. İzlem aynı zamanda belirtilerin gerçekten düzelip düzelmediğini, dozun uygun olup olmadığını ve kişisel risk dengesinin değişip değişmediğini anlamak için yapılır. Yani yalnızca sorun aramak değil, tedaviyi rafine etmektir.',
    },
  ],
  '/zamansiz-yasam/deneysel/nad-plus-takviyesi': [
    {
      question: 'NAD+ takviyeleri menopozda enerji için kanıtlı bir çözüm müdür?',
      answer:
        'Şu an için böyle net bir cümle kurmak zor. Mekanizma ilgisi yüksek olsa da insan çalışmalarındaki klinik fayda henüz sınırlı ve tutarsız. Pazarlama dili çoğu zaman bilimin önünde gidiyor.',
    },
    {
      question: 'Laboratuvar mantıklı görünüyorsa takviye otomatik olarak güvenli sayılır mı?',
      answer:
        'Hayır. Bir mekanizmanın biyolojik olarak ilginç olması, uzun dönem kullanımın güvenli ve etkili olduğu anlamına gelmez. Özellikle doz, ürün standardı ve ilaç etkileşimleri netleşmeden temkinli olmak gerekir.',
    },
    {
      question: 'Bu tür takviyelerde en doğru başlangıç sorusu ne olmalı?',
      answer:
        'En doğru soru genellikle “Hangi somut hedef için düşünüyorum ve bunun için daha kanıtlı bir seçenek var mı?” olur. Hedef netleşmeden takviyeye yönelmek çoğu zaman beklentiyi üründen büyük yapar.',
    },
  ],
  '/zamansiz-yasam/deneysel/peptid-kullanimlari-menopoz': [
    {
      question: 'Peptid denince neden tek bir ürün grubundan söz edemiyoruz?',
      answer:
        'Çünkü bu başlık altında iştah-metabolizma hattından yara iyileşmesi, kas toparlanması ve anti-aging iddialarına kadar çok farklı moleküller dolaşıyor. Aynı şemsiye altında anılsalar da etki mekanizması, klinik veri kalitesi ve güvenlik tablosu birbirinden belirgin biçimde ayrılıyor.',
    },
    {
      question: 'Menopozda peptidler kilo kaybı veya kas korunması için kanıtlı bir seçenek midir?',
      answer:
        'Bu sorunun yanıtı peptidin hangisi olduğuna göre değişir; hepsini aynı cümleyle değerlendirmek doğru olmaz. GLP-1 hattında daha belirgin insan verisi varken, GLP-1 dışındaki birçok peptidde menopoz özelinde veri az, genel kullanım verisi ise sınırlı veya pazarlama etkisiyle şişirilmiş olabilir.',
    },
    {
      question: 'BPC-157, thymosin beta-4 ya da ipamorelin gibi isimlerde en büyük belirsizlik nedir?',
      answer:
        'En büyük belirsizlik, erken dönem mekanizma ilgisinin gerçek klinik fayda ve uzun dönem güvenlik verisiyle yeterince desteklenmemesidir. Ürün standardı, içerik doğruluğu ve hangi hasta grubunda ne kadar işe yaradığı gibi temel sorular çoğu zaman hâlâ açık kalır.',
    },
    {
      question: 'Bir peptid iddiasını reklam dili olmadan değerlendirmek için ilk bakılacak şey nedir?',
      answer:
        'Önce hangi sonucun gerçekten ölçüldüğüne bakmak gerekir: kilo, kas gücü, doku onarımı, ağrı ya da yalnızca laboratuvar göstergesi mi? Ardından bu sonucun insan çalışmasıyla mı, küçük pilot verilerle mi, yoksa yalnızca teorik biyoloji anlatısıyla mı desteklendiğini ayırmak sakin bir başlangıç sağlar.',
    },
  ],
  '/hormonal-gecis/menopoz/sicak-basmasi-gece-terlemesi': [
    {
      question: 'Sıcak basması yalnızca yüz kızarması mıdır?',
      answer:
        'Hayır. Birçok kadın için ani ısı yükselmesi, terleme, çarpıntı hissi ve sonrasında üşüme birlikte yaşanır. Bazılarında gece bölünmeleri gündüz yakınmasından bile daha yıpratıcı olur.',
    },
    {
      question: 'Tetikleyicileri takip etmek gerçekten fark yaratır mı?',
      answer:
        'Evet, özellikle alkol, sıcak ortam, yoğun stres, uykusuzluk ve bazı yiyeceklerle kişisel ilişki görmek işe yarayabilir. Her tetik herkeste aynı olmadığı için kısa bir gözlem dönemi yararlıdır.',
    },
    {
      question: 'Ne zaman destek seçeneği konuşmak gerekir?',
      answer:
        'Yakınma uykuyu, iş ritmini veya sosyal konforu belirgin bozuyorsa konuşmak gerekir. Amaç yalnızca dayanmak değil, hayat kalitesini hangi düzeyde etkilediğini dürüstçe görmek olmalıdır.',
    },
  ],
  '/bilimsel-pencere/hucreler-ve-yaslanma/nad-plus-hucresel-yaslanma': [
    {
      question: 'NAD+ neden yaşlanma tartışmalarında bu kadar sık geçiyor?',
      answer:
        'Çünkü hücresel enerji metabolizması ve onarım yollarıyla ilişkili biyolojik bir merkez gibi düşünülüyor. Ama ilginç biyoloji ile kanıtlanmış klinik fayda aynı şey değildir; arada hâlâ önemli boşluklar var.',
    },
    {
      question: 'Fare çalışmaları insanlarda aynı etkiyi beklememiz için yeterli mi?',
      answer:
        'Hayır. Erken dönem hayvan verileri yön verici olabilir ama insan bedenindeki sonuçları garanti etmez. Bu başlıkta özellikle doz, süre ve gerçek klinik kazanım hâlâ tartışmalıdır.',
    },
    {
      question: 'Bu alandaki haberlere nasıl daha sakin yaklaşılır?',
      answer:
        'Önce çalışma tipine, insan verisi olup olmadığına ve ölçülen sonucun gerçekten günlük yaşamı etkileyen bir sonlanım olup olmadığına bakmak iyi bir başlangıçtır. “Mekanizma var” ifadesi tek başına yeterli değildir.',
    },
  ],
  '/zamansiz-yasam/d-vitamini-rehberi': [
    {
      question: 'D vitamini herkese otomatik takviye olarak mı düşünülmeli?',
      answer:
        'Hayır. D vitamini önemli olsa da doz ve ihtiyaç kişisel duruma göre değişir. Kimi kadın için yaşam biçimi ve ölçüm takibi yeterliyken, kimi kadın için hedefli destek daha anlamlı olabilir.',
    },
    {
      question: 'Güneş görmek tek başına yeterli olur mu?',
      answer:
        'Bazı dönemlerde olabilir, bazı dönemlerde olmayabilir. Mevsim, cilt özellikleri, dışarıda geçirilen süre ve yaşam düzeni bu denklemi değiştirir; bu yüzden tek yanıt herkes için aynı değildir.',
    },
    {
      question: 'D vitamini desteğinde asıl risk eksiklik değil, gereksiz yüksek doz olabilir mi?',
      answer:
        'Evet, bu da önemli bir noktadır. “Fazlası daha iyi” yaklaşımı burada güvenli değildir; yüksek dozlar gereksiz yere başka sorunlara kapı açabilir. Denge, eksikliği ve aşırılığı birlikte düşünmeyi gerektirir.',
    },
  ],
  '/beden-yakinlik/cinsel-saglik/cinsellikte-agri-menopoz': [
    {
      question: 'Menopozda cinsellikte ağrı normalleşmesi gereken bir durum mu?',
      answer:
        'Hayır. Sık görülmesi, normalleştirilmesi gerektiği anlamına gelmez. Ağrı, kuruluk, doku hassasiyeti ya da pelvik taban gerilimi gibi başlıkların işareti olabilir ve konuşulmayı hak eder.',
    },
    {
      question: 'Ağrı her zaman yalnızca vajinal kuruluğa mı bağlıdır?',
      answer:
        'Hayır. Kuruluk önemli bir neden olsa da enfeksiyon, cilt sorunları, pelvik taban spazmı, korku-anksiyete döngüsü ve farklı yapısal nedenler de rol oynayabilir. Bu yüzden tek açıklamaya sıkışmamak gerekir.',
    },
    {
      question: 'Ne zaman değerlendirme bekletilmemeli?',
      answer:
        'Ağrı yeni başladıysa, giderek artıyorsa, kanama eşlik ediyorsa ya da kaçınmaya yol açacak kadar belirginleştiyse bekletmemek iyi olur. Konfor kaybı uzun süre sessiz kalması gereken bir konu değildir.',
    },
  ],
  '/beden-yakinlik/cinsel-saglik/mahrem-bolge-degisimleri-menopoz': [
    {
      question: 'Mahrem bölgede kuruluk ve hassasiyet menopozda ne kadar yaygındır?',
      answer:
        'Oldukça yaygındır ama her kadın aynı yoğunlukta yaşamaz. Bazılarında yalnızca aralıklı rahatsızlık olurken, bazılarında gündelik konforu ve cinselliği etkileyen daha kalıcı bir tablo gelişebilir.',
    },
    {
      question: 'Yalnızca nemlendirici kullanmak herkeste yeterli olur mu?',
      answer:
        'Her zaman değil. Bazı kadınlarda düzenli nem desteği iyi gelirken, bazı kadınlarda doku değişimi daha belirgin olduğu için farklı seçenekleri konuşmak gerekir. İhtiyaç, yakınmanın derinliğine göre değişir.',
    },
    {
      question: 'İdrar yaparken yanma veya sıkışma hissi de bu tabloya eşlik edebilir mi?',
      answer:
        'Evet, edebilir. Menopozla birlikte ürogenital dokulardaki değişim yalnızca vajinal konforu değil, mesane ve idrar yolu çevresindeki hissi de etkileyebilir. Ama enfeksiyon gibi başka nedenleri de dışlamak gerekir.',
    },
  ],
  '/zihin-denge/duygusal-denge/stres-yonetimi-menopoz': [
    {
      question: 'Menopoz döneminde stres eşiği gerçekten düşebilir mi?',
      answer:
        'Evet, birçok kadın bunu böyle tarif eder. Hormon dalgalanması, uyku kırılması ve gündelik yükler birleşince aynı olaylara verilen tepki daha yoğun hissedilebilir.',
    },
    {
      question: 'Stresi yönetmek için büyük hayat değişiklikleri mi gerekir?',
      answer:
        'Çoğu zaman hayır. Küçük ama düzenli ritimler, örneğin uyku saatini korumak, gün içinde kısa hareket araları vermek ve zihni yoran yükleri görünür kılmak daha sürdürülebilir sonuç verir.',
    },
    {
      question: 'Ne zaman bu tabloyu yalnızca “yoğunluk” diye geçmemek gerekir?',
      answer:
        'Kaygı, çökkünlük, öfke patlamaları ya da beden belirtileri işlevi bozuyorsa daha yakından bakmak gerekir. Çünkü bazen mesele yalnızca stres değil, uyku bozulması veya depresif tabloyla birleşen bir yük olabilir.',
    },
  ],
  '/zihin-denge/uyku-dinlenme/uyku-bozuklugu-menopoz': [
    {
      question: 'Menopozda uyku bozukluğu yalnızca sıcak basmasına mı bağlıdır?',
      answer:
        'Hayır. Sıcak basması önemli bir neden olsa da anksiyete, erken uyanma, düzensiz uyku saati, horlama ve bacak huzursuzluğu gibi başka başlıklar da tabloyu besleyebilir. İyi uyku için önce hangi kapının öne çıktığını görmek gerekir.',
    },
    {
      question: 'Gece sık uyanıp tekrar uyuyabiliyorsam yine de bunu önemsemeli miyim?',
      answer:
        'Evet, çünkü uykunun kalitesi yalnızca toplam saatle ilgili değildir. Tekrarlayan bölünmeler ertesi gün zihinsel dayanıklılığı, ruh halini ve beden enerjisini belirgin biçimde etkileyebilir.',
    },
    {
      question: 'Uyku günlüğü tutmak gerçekten işe yarar mı?',
      answer:
        'Evet, özellikle sorunun ritmini görmek için çok işe yarar. Yatma-kalkma saatleri, gece uyanma sayısı, alkol-kafein, egzersiz ve sıcak basması notları tabloyu daha okunur hale getirir.',
    },
  ],
  '/zihin-denge/uyku-dinlenme/aksam-hareketi-uyku-melatonin': [
    {
      question: 'Akşam egzersizi uykuya her zaman zarar mı verir?',
      answer:
        'Hayır. Egzersizin saati kadar yoğunluğu, süresi ve bedende bıraktığı ısı yükü önemlidir. Bazı kadınlarda hafif akşam hareketi toparlayıcı olurken, yoğun antrenman tam tersine uyarıcı kalabilir.',
    },
    {
      question: 'Perimenopozda akşam hareketi neden daha farklı hissedilebilir?',
      answer:
        'Çünkü bu dönemde beden ısısı, gece uyanmaları ve toparlanma ritmi daha kırılgan olabilir. Aynı egzersiz genç yaşta sorun yaratmazken, bu dönemde uyku penceresini daraltabilir.',
    },
    {
      question: 'En pratik deneme yöntemi ne olabilir?',
      answer:
        'Bir süre yoğunluğu ve bitiş saatini değiştirip ertesi günkü uyku hissini not etmek iyi bir başlangıçtır. Mesele kuralla değil, kendi beden ritmiyle çalışmaktır.',
    },
  ],
  '/zamansiz-yasam/beslenme-yaslanma': [
    {
      question: '40 yaş sonrasında beslenmede en çok hangi başlıklar önem kazanır?',
      answer:
        'Protein, lif, kemik sağlığını destekleyen besinler ve genel enerji dengesi daha görünür hale gelir. Ama mesele yalnızca eksik tamamlamak değil, sürdürülebilir bir tabak düzeni kurmaktır.',
    },
    {
      question: 'Tek bir “mükemmel menopoz diyeti” var mı?',
      answer:
        'Hayır. Kültür, yaşam ritmi, sağlık durumu ve hedefler çok farklıdır. En iyi plan, uzun vadede sürdürülebilen ve bedeni daha dengeli hissettiren plandır.',
    },
    {
      question: 'Takviye almak yerine önce sofraya bakmak neden önemli?',
      answer:
        'Çünkü birçok beslenme hedefi önce günlük düzen içinde karşılanabilir. Takviye bazen gerekli olabilir ama iyi bir temel olmadan üzerine eklenen kısa yol gibi kalır.',
    },
  ],
  '/zamansiz-yasam/kilo-artisi-menopoz': [
    {
      question: 'Menopozda kilo artışı yalnızca daha az hareket etmekten mi olur?',
      answer:
        'Hayır. Yaş, uyku, stres, kas kütlesi, yağ dağılımı ve hormonal değişim birlikte çalışır. Bu yüzden tabloyu yalnızca irade ya da aktivite eksikliği olarak okumak haksızlık olur.',
    },
    {
      question: 'Tartı aynı kalırken bedenin değişmesi mümkün mü?',
      answer:
        'Evet, hatta bu dönem için oldukça tanıdık bir durumdur. Kas kütlesi azalırken yağ dağılımı değişebilir; bu da sayı sabit kalsa bile kıyafet ve beden hissini değiştirebilir.',
    },
    {
      question: 'En doğru ilk hedef hızlı kilo vermek midir?',
      answer:
        'Çoğu zaman hayır. İlk hedef, kası koruyan ritimleri güçlendirmek, uykuyu toparlamak ve bel çevresi ile enerji düzeyini daha yakından izlemek olabilir. Hızlı çözümler çoğu zaman sürdürülebilir olmaz.',
    },
  ],
  '/zamansiz-yasam/kemik-sagligi-40-sonrasi': [
    {
      question: 'Kemik kaybı ağrı yapmıyorsa neden erken düşünmek gerekir?',
      answer:
        'Çünkü kemik kaybı çoğu zaman sessiz ilerler ve ilk güçlü işaretini yıllar sonra kırık riskiyle verir. Koruyucu yaklaşım, ağrı beklemeden risk faktörlerini ve tarama zamanını düşünmeyi gerektirir.',
    },
    {
      question: 'DXA ölçümü herkese 40 yaşında gerekli midir?',
      answer:
        'Hayır. Yaş, kırık öyküsü, aile öyküsü, steroid kullanımı, erken menopoz ve eşlik eden hastalıklar gibi riskler ölçüm zamanını değiştirir. Doğru zamanlama kişisel risk tablosuna göre belirlenir.',
    },
    {
      question: 'Kemik sağlığı için yürüyüş tek başına yeterli olur mu?',
      answer:
        'Yürüyüş değerli bir temel ama her zaman tek başına yeterli olmayabilir. Kemik ve kas için yük taşıyan, dengeyi ve direnç kapasitesini geliştiren hareketlerin de plana girmesi çoğu zaman daha güçlü sonuç verir.',
    },
  ],
  '/bilimsel-pencere/hormonlarin-bilimi/estrogen-biyolojisi-saglik': [
    {
      question: 'Östrojen neden yalnızca üreme hormonu gibi düşünülmemeli?',
      answer:
        'Çünkü etkisi yalnızca adet döngüsüyle sınırlı değildir. Kemik, damar, beyin, cilt ve metabolizma gibi birçok sistem bu hormondaki değişimlerden pay alır.',
    },
    {
      question: 'Östrojenin azalması herkeste aynı sonuçları mı doğurur?',
      answer:
        'Hayır. Aynı biyolojik değişim farklı bedenlerde farklı önceliklerle görünür; birinde sıcak basması, diğerinde uyku, başka birinde kemik veya doku konforu öne çıkabilir.',
    },
    {
      question: 'Bu biyolojiyi bilmek günlük yaşam açısından neden değerli?',
      answer:
        'Çünkü dağınık görünen yakınmaları tek tek değil, ortak bir bakışla okumayı kolaylaştırır. Böylece bedenin verdiği sinyaller daha az şaşırtıcı, daha çok anlaşılır hale gelir.',
    },
  ],
  '/hormonal-gecis/menopoz/menopoz-nedir': [
    {
      question: 'Menopoz bir gün mü, bir süreç mi?',
      answer:
        'Tıbbi tanım olarak tek bir eşik vardır ama yaşantı olarak bir süreçtir. Son adetten 12 ay sonra geriye dönük olarak netleşir; öncesindeki yıllar ise perimenopoz geçişidir.',
    },
    {
      question: 'Menopoz belirtileri son adetle birlikte hemen biter mi?',
      answer:
        'Hayır. Bazı kadınlarda belirtiler bu eşiğin ardından da bir süre devam edebilir. Yakınmanın seyri kişiye göre değişir ve yalnızca takvime bakarak anlaşılmaz.',
    },
    {
      question: 'Menopoz sonrası dönemde en çok hangi sağlık başlıkları öne çıkar?',
      answer:
        'Kemik sağlığı, kardiyometabolik denge, uyku, beden kompozisyonu ve ürogenital konfor daha görünür hale gelir. Bu yüzden dönem yalnızca “adet bitti” diye değil, yeni bir sağlık ajandası olarak okunmalıdır.',
    },
  ],
  '/hormonal-gecis/menopoz/hormon-tedavisi-karar-rehberi': [
    {
      question: 'HRT herkes için aynı formda mı planlanır?',
      answer:
        'Hayır. Uygulama yolu, doz, progesteron ihtiyacı ve hedeflenen yakınma kişisel tabloya göre değişir. Aynı başlık altında konuşulan iki tedavi aslında çok farklı rejimler olabilir.',
    },
    {
      question: 'Karar verirken en kritik üç başlık nedir?',
      answer:
        'Belirtinin hayatı ne kadar etkilediği, kişisel risk profili ve menopozdan bu yana geçen süre en kritik üç başlıktır. Bu üçlü konuşulmadan yalnızca korku veya umut üzerinden karar vermek sağlıklı olmaz.',
    },
    {
      question: 'HRT düşünmüyorsam seçenekler bitmiş mi sayılır?',
      answer:
        'Hayır. Yakınmanın türüne göre yaşam tarzı düzenlemeleri, davranışsal yaklaşımlar, hormonsuz seçenekler veya lokal çözümler gündeme gelebilir. “Hayır” demek çoğu zaman boşluk değil, farklı yol anlamına gelir.',
    },
  ],
  '/hormonal-gecis/menopoz/menopozda-hekim-hasta-iliskisi': [
    {
      question: 'Menopoz takibinde iyi hekim-hasta ilişkisini ne belirler?',
      answer:
        'En çok belirleyen şey, kadının sorularını küçültmeden dinleyen ve kararı birlikte kuran bir yaklaşım olmasıdır. Bilgi kadar üslup ve güven hissi de bu süreçte çok önemlidir.',
    },
    {
      question: 'İkinci görüş istemek güvensizlik anlamına mı gelir?',
      answer:
        'Hayır. Özellikle büyük kararlar söz konusuysa ikinci görüş bazen zihni sakinleştirir ve seçenekleri daha net görmeyi sağlar. Bu, ilişkiyi bozmak değil, tabloyu olgunlaştırmak olabilir.',
    },
    {
      question: 'Görüşmeye gitmeden önce hangi soruları hazırlamak iyi olur?',
      answer:
        'Belirtilerin ne kadar sürdüğü, en çok neyi zorladığı, hangi riski merak ettiğiniz ve hangi hedefe ulaşmak istediğiniz iyi bir başlangıçtır. Net soru, daha net konuşma demektir.',
    },
  ],
  '/hormonal-gecis/menopoz/tarti-yatisinca-vucut-kompozisyonu': [
    {
      question: 'Tartı değişmiyorsa yine de beden kompozisyonu bozulabilir mi?',
      answer:
        'Evet. Kas azalırken yağ dağılımı değişebilir ve bu tartıda görülmeyebilir. Bu yüzden yalnızca kiloya bakmak bedenin bütün hikâyesini anlatmaz.',
    },
    {
      question: 'Bel çevresinin artması neden daha çok konuşuluyor?',
      answer:
        'Çünkü menopoz geçişinde yağın yer değiştirmesi sık görülen bir durumdur ve bu değişim metabolik sağlık açısından sayıdan daha anlamlı olabilir. Kıyafetlerin farklı oturması bazen ilk işaret olur.',
    },
    {
      question: 'Vücut kompozisyonunu korumada ilk öncelik nedir?',
      answer:
        'Kas kütlesini koruyan hareket ve yeterli protein çoğu zaman ilk önceliktir. Hızlı kalori kısıtları, kısa vadede sayı verse de uzun vadede kompozisyonu daha kırılgan bırakabilir.',
    },
  ],
  '/hormonal-gecis/menopoza-hazirlik/koruyucu-saglik-kayitlari': [
    {
      question: 'Koruyucu sağlık kaydı tutmak neden bu dönemde daha değerli hale gelir?',
      answer:
        'Çünkü belirtiler, taramalar ve aile öyküsü aynı anda önem kazanmaya başlar. Dağınık bilgiler yazıya döküldüğünde hem siz hem de hekim için daha okunur bir başlangıç haritası oluşur.',
    },
    {
      question: 'Bu kayda yalnızca tahlil sonuçları mı yazılmalı?',
      answer:
        'Hayır. Adet düzeni, uyku, sıcak basması, ruh hali, tansiyon, kullanılan ilaçlar ve önemli aile öyküleri de en az sonuçlar kadar değerlidir. Bazen kararı sayılar değil, hikâye tamamlar.',
    },
    {
      question: 'Ne kadar ayrıntı fazla olur?',
      answer:
        'Her günü dakikası dakikasına tutmak yerine eğilimleri görmek yeterlidir. Kısa, düzenli ve sürdürülebilir kayıt; çok ayrıntılı ama çabuk bırakılan kayıttan daha işlevseldir.',
    },
  ],
  '/zihin-denge/uyku-dinlenme/perimenopoz-uyku-degisen-yan': [
    {
      question: 'Perimenopozda uyku sorunu neden bazen hiçbir sebep yokmuş gibi başlar?',
      answer:
        'Çünkü hormonal dalgalanma önce beden ritmini değiştirir ve bu değişim her zaman gündüz çok görünür olmayabilir. Gece ise daha sık uyanma, erken uyanma veya hafif uyku olarak kendini gösterebilir.',
    },
    {
      question: 'Yatağa yorgun girmek ama yine de uyuyamamak bu dönemde sık mıdır?',
      answer:
        'Evet, oldukça sık tarif edilir. Yorgunluk ile uykuya geçiş kapasitesi aynı şey değildir; beden bitkin olsa bile zihin ve sinir sistemi geceyi kolay bırakmayabilir.',
    },
    {
      question: 'Bu dönemde en işe yarar ilk farkındalık ne olabilir?',
      answer:
        'Sorunun yalnızca “az uyumak” değil, uykunun yapısının değişmesi olduğunu görmek önemlidir. Bu bakış, çözümü de daha gerçekçi kurmaya yardım eder.',
    },
  ],
  '/beden-yakinlik/pelvik-taban/menopozda-idrar-kacirma-pelvik-taban': [
    {
      question: 'İdrar kaçırmanın her türü aynı nedenle mi olur?',
      answer:
        'Hayır. Öksürme, zıplama veya gülme ile olan kaçırma ile aniden sıkışıp yetişememe tablosu farklı mekanizmalarla ortaya çıkar. Çoğu kadında iki tipin karışımı da görülebilir.',
    },
    {
      question: 'Pelvik taban egzersizi herkes için aynı biçimde mi yapılmalı?',
      answer:
        'Hayır. Bazı kadınlarda güçsüzlük, bazılarında ise fazla kasılı kalma öne çıkar. Bu yüzden yalnızca “daha çok sık” yaklaşımı her bedende aynı sonucu vermez.',
    },
    {
      question: 'Ne zaman bu konuyu ertelememek gerekir?',
      answer:
        'Kaçırma günlük hayatı, yürüyüşü, sporu, cinselliği veya dışarı çıkma rahatlığını etkilemeye başladıysa ertelememek gerekir. Sessiz yaşanması, çözümsüz olduğu anlamına gelmez.',
    },
  ],
  '/bilimsel-pencere/yeni-arastirmalar/glp1-analoglari-menopozal-kilo': [
    {
      question: 'GLP-1 analogları menopozda kilo için sihirli çözüm mü?',
      answer:
        'Hayır. Bazı kadınlarda güçlü sonuçlar sağlayabilir ama bu ilaçlar yaşam tarzı, kas korunumu ve uzun dönem planın yerini tutmaz. Beklentiyi gerçekçi kurmak çok önemlidir.',
    },
    {
      question: 'Bu ilaçlarla kas kaybı konuşmak neden önemli?',
      answer:
        'Çünkü hızlı kilo kaybı her zaman yalnızca yağ dokusundan olmaz. Menopoz geçişinde kas zaten hassas bir başlık olduğu için hareket ve protein desteği daha da önemli hale gelir.',
    },
    {
      question: 'Menopozal kilo yakınması olan herkes bu tedavi için aday mıdır?',
      answer:
        'Hayır. Eşlik eden hastalıklar, beden kitle durumu, metabolik risk ve beklenti hattı birlikte değerlendirilir. Klinik karar, yalnızca tartıdan değil bütün sağlık resminden çıkar.',
    },
  ],
  '/bilimsel-pencere/yeni-arastirmalar/menopoz-hrt-meme-kanseri-riski': [
    {
      question: 'Ailede meme kanseri öyküsü varsa hormon tedavisi tamamen kapanır mı?',
      answer:
        'Her zaman hayır. Aile öyküsü önemli bir başlıktır ama tek başına otomatik yasak anlamına gelmez; kişisel risk tablosu, meme görüntüleme geçmişi, tedavi tipi ve hedef belirti birlikte okunur. Karar çoğu zaman “evet ya da hayır”dan çok, “hangi rejim ve hangi yakın izlemle?” sorusuna döner.',
    },
    {
      question: 'Kısa süreli kullanım ile uzun süreli kullanım arasında meme riski farkı var mı?',
      answer:
        'Evet, özellikle kombine sistemik tedavide süre uzadıkça risk daha görünür hale gelir. Bu yüzden tedaviye başlarken yalnızca başlangıç değil, yıllık yeniden değerlendirme planı da konuşulmalıdır.',
    },
    {
      question: 'Transdermal östrojen meme açısından daha güvenli mi?',
      answer:
        'Bunu bugün kesin cümleyle söylemek için veri yeterli değil. Ciltten uygulanan östrojenin pıhtı başlığında daha avantajlı bir profili var; fakat meme kanseri açısından oral ve transdermal yol arasındaki fark hâlâ netleşmiş değil.',
    },
    {
      question: 'Hormon tedavisine hiç başlamamak her zaman daha mı güvenlidir?',
      answer:
        'Bu soru yalnızca riskle değil, fayda tarafıyla da birlikte değerlendirilir. Bazı kadınlarda belirgin sıcak basmaları, uyku kaybı ve yaşam kalitesi düşüşü öyle yüksektir ki kişisel risk tablosu uygunsa tedavinin sağlayacağı kazanım anlamlı olabilir. Güvenlik, çoğu zaman tedavisizlik değil doğru seçilmiş tedavi ve izlem demektir.',
    },
  ],
  '/zamansiz-yasam/40-sonrasi-kas-iskelet-agrilari': [
    {
      question: '40 yaş sonrası diz, kalça ve bel ağrısı yaşlanmanın kaçınılmaz parçası mı?',
      answer:
        'Hayır. Yaşla birlikte bazı yapılar daha hassas hale gelse de ağrıyı otomatik kader gibi görmek doğru değildir. Kas gücü, yüklenme biçimi, uyku ve iyileşme ritmi tabloyu ciddi biçimde değiştirir.',
    },
    {
      question: 'Ağrı varken tamamen dinlenmek en doğru yaklaşım mı?',
      answer:
        'Her zaman değil. Bazı durumlarda kısa süreli koruma gerekir ama çoğu tabloda iyi ayarlanmış hareket iyileşmenin parçasıdır. Mesele hiç hareket etmemek değil, ağrıyla kavga etmeyen doz bulmaktır.',
    },
    {
      question: 'Ne zaman görüntüleme veya ayrıntılı değerlendirme düşünmek gerekir?',
      answer:
        'Gece uykudan uyandıran ağrı, travma öyküsü, güç kaybı, ilerleyen şişlik ya da nörolojik yakınmalar varsa daha hızlı değerlendirme gerekir. Çünkü bazı durumlarda mesele yalnızca yüklenme değildir.',
    },
  ],
  '/zamansiz-yasam/deneysel/coenzyme-q10-takviyesi': [
    {
      question: 'CoQ10 gerçekten anti-aging için güçlü kanıtlı bir takviye mi?',
      answer:
        'Bu iddia için kanıt sınırlıdır. CoQ10’un bazı klinik alanlarda yeri olabilir ama “genel gençlik enerjisi” başlığında pazarlama, bilimin önüne geçme eğilimindedir.',
    },
    {
      question: 'Statin kullanan biri için CoQ10 konusu neden ayrı konuşuluyor?',
      answer:
        'Çünkü en fazla klinik ilgi gören alanlardan biri statin ilişkili kas yakınmalarıdır. Yine de herkes için aynı etki beklenmez; bu alan bile kesinlik değil, olasılık üzerinden konuşulur.',
    },
    {
      question: 'Takviye reklamı ile klinik kanıtı ayırmak için ilk bakılacak şey nedir?',
      answer:
        'İlk bakılacak şey, hangi sonlanımın ölçüldüğüdür. Gerçek bir yakınma mı düzelmiş, yoksa yalnızca biyokimyasal bir parametre mi değişmiş, bunu ayırmak çok şey söyler.',
    },
  ],
  '/zamansiz-yasam/deneysel/deneysel-tedaviyi-okuma-kilavuzu': [
    {
      question: 'Bir tedaviye “deneysel” denmesi tam olarak ne anlama gelir?',
      answer:
        'Genellikle etkinlik ve güvenlik verisinin henüz sınırlı olduğu, kullanım yerinin tam netleşmediği anlamına gelir. Bu kelime bazen umut çağrıştırsa da aslında belirsizliğin de adıdır.',
    },
    {
      question: 'Off-label kullanım ile deneysel yaklaşım aynı şey midir?',
      answer:
        'Hayır. Off-label kullanım, onaylı bir ilacın farklı bir endikasyonda kullanılması olabilir; deneysel yaklaşım ise çoğu zaman daha az veri ve daha fazla belirsizlik taşır. İkisini aynı torbaya koymamak gerekir.',
    },
    {
      question: 'Deneysel bir seçenek konuşulurken en doğru üç soru nedir?',
      answer:
        'Ne kadar insan verisi olduğu, beklenen faydanın ne kadar somut olduğu ve standart seçeneklerin neden yeterli görülmediği iyi üç başlangıç sorusudur. Bu sorular pazarlama ile klinik kararı ayırmaya yardım eder.',
    },
  ],
  '/zamansiz-yasam/non-invaziv/non-invaziv-cihazlar-hifu-rf-mikroakim': [
    {
      question: 'Non-invaziv cihazlar cerrahi sonuçla aynı etkiyi verir mi?',
      answer:
        'Genellikle hayır. Bazı cihazlarda sınırlı ya da orta düzey iyileşme görülebilir ama beklentiyi cerrahi sonuç düzeyine taşımak çoğu zaman gerçekçi değildir.',
    },
    {
      question: 'Bu cihazlarda en çok hangi yanılgı oluşuyor?',
      answer:
        'En sık yanılgı, teknoloji isminin kanıt gücü sanılmasıdır. Oysa HIFU, RF veya mikroakım demek tek başına güçlü veri demek değildir; uygulama alanı ve çalışma kalitesi çok değişir.',
    },
    {
      question: 'Postmenopozal ciltte neden beklenti daha dikkatli kurulmalı?',
      answer:
        'Çünkü doku kalitesi, kollajen yanıtı ve iyileşme temposu değişebilir. Aynı cihaz daha genç ciltte farklı, postmenopozal zeminde daha sınırlı bir karşılık verebilir.',
    },
  ],
  '/zamansiz-yasam/non-invaziv/sauna-soguk-dus-menopoz': [
    {
      question: 'Sauna sıcak basması yaşayan biri için her zaman iyi gelir mi?',
      answer:
        'Hayır. Bazı kadınlar gevşeme hissi yaşarken, bazıları için ısı yükü yakınmayı artırabilir. Burada “iyi gelir” sorusunun yanıtı oldukça kişiseldir.',
    },
    {
      question: 'Soğuk duş dayanıklılık antrenmanı gibi mi düşünülmeli?',
      answer:
        'Hayır, özellikle menopoz yakınmaları olan biri için bu yaklaşım fazla sert olabilir. Amaç performans göstermek değil, bedenin neye nasıl yanıt verdiğini sakin biçimde anlamaktır.',
    },
    {
      question: 'Kimler daha dikkatli olmalı?',
      answer:
        'Kalp-damar hastalığı, tansiyon düzensizliği, bayılma eğilimi veya belirgin ısı hassasiyeti olan kadınlar daha dikkatli olmalıdır. Çünkü iyi olma aracı olarak düşünülen şey bazen bedene fazla yük binebilir.',
    },
  ],
  '/zihin-denge/uyku-dinlenme/gece-terlemesi-uyku-utancsiz': [
    {
      question: 'Gece terlemesi neden bu kadar utanç duygusuyla birlikte yaşanabiliyor?',
      answer:
        'Çünkü çok mahrem bir anda, kontrol dışında gelişir ve çoğu kadın bunu sessizce yönetmeye çalışır. Oysa bu yakınma yalnız yaşanan bir tuhaflık değil, menopoz geçişinin sık bir parçasıdır.',
    },
    {
      question: 'Yatak odası düzeni gerçekten fark yaratır mı?',
      answer:
        'Evet, bazen düşündüğümüzden daha çok fark yaratır. Oda ısısı, katmanlı giyinme ve yatak tekstili gibi basit düzenlemeler geceyi tamamen çözmese bile yükünü azaltabilir.',
    },
    {
      question: 'Ne zaman bu tabloyu yalnızca “alışırım” diye geçmemek gerekir?',
      answer:
        'Gece uyanmaları ertesi gün zihni, işi, ilişkiyi veya genel dayanıklılığı etkilemeye başladıysa daha fazla sessiz kalmamak gerekir. Çünkü mesele yalnızca terlemek değil, dinlenmenin bozulmasıdır.',
    },
  ],
};
