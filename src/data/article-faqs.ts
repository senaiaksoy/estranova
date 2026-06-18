export interface ArticleFaqItem {
  question: string;
  answer: string;
}

export const articleFaqs: Record<string, ArticleFaqItem[]> = {
  '/beden-yakinlik/meme-kucultme-menopoz-sonrasi-beden-konforu/': [
    {
      question: 'Menopoz sonrası meme küçültme ameliyatı düşünülebilir mi?',
      answer:
        'Bazı kadınlarda düşünülebilir; ancak karar yalnızca yaşa veya menopoz durumuna göre verilmez. Genel sağlık durumu, meme yapısı, mamografi geçmişi, cilt kalitesi, kullanılan ilaçlar ve iyileşme kapasitesi birlikte değerlendirilmelidir.',
    },
    {
      question: 'Büyük göğüsler menopozdan sonra neden daha rahatsız edici olabilir?',
      answer:
        'Cilt elastikiyeti, bağ dokusu, kas desteği ve kilo dağılımı yaşla birlikte değişebilir. Bu değişimler omuz, sırt, boyun ve meme altı cilt bölgesindeki yükü daha belirgin hale getirebilir.',
    },
    {
      question: 'Meme küçültme yalnızca estetik bir işlem midir?',
      answer:
        'Hayır. Bazı kadınlarda beden konforu ve günlük yaşam dengesiyle ilişkili bir cerrahi seçenek olarak değerlendirilebilir. Ancak bu, işlemin herkese uygun olduğu anlamına gelmez; kişisel tıbbi değerlendirme gerekir.',
    },
    {
      question: 'Her büyük göğüs ameliyat gerektirir mi?',
      answer:
        'Hayır. Her büyük göğüs fiziksel sorun yaratmaz. Bazı kadınlarda doğru sütyen desteği, postür çalışmaları, kilo dengesi, cilt bakım önlemleri veya yaşam tarzı düzenlemeleri yeterli olabilir.',
    },
    {
      question: 'Karar verirken en önemli soru nedir?',
      answer:
        'En önemli soru şudur: "Bu kararı bedenimin gerçek konforu için mi düşünüyorum?" Eğer yanıt evetse, ikinci adım bunun tıbbi olarak uygun ve güvenli olup olmadığını değerlendirmektir.',
    },
  ],
  '/hormonal-gecis/40-sonrasi/yuze-yakisan-estetik-dis-karari/': [
    {
      question: 'Estetik diş kararı için ideal bir yaş var mı?',
      answer:
        'Hastalarıma hep söylediğim şey şu: tek bir ideal yaş yok. Karar, dişin ve dişetinin sağlık durumuyla, kemik desteğiyle ve sizin kendi yüzünüze baktığınız yerle ilgili. 40 sonrası yüz orta hattının, dudak hattının ve çevre kemiğin değişmeye başladığı bir dönem; bu yüzden bu yaş bandında muayene odamda alınan estetik diş kararlarını, 25 yaşındakilerden farklı düşünüyorum. Aceleci bir tarih belirlemek yerine, yüz yapınızın bugünkü ölçüsünü ve önümüzdeki 5–10 yıl içindeki seyrini birlikte konuşmak — bana göre çok daha sürdürülebilir bir başlangıç.',
    },
    {
      question: 'Aynı işlem bir arkadaşımda iyi sonuç verdi; bende de aynı olur mu?',
      answer:
        'Çoğunlukla hayır — ya da en azından "aynı" olmaz. Bunu hastalarıma muayene odamda hemen hemen her hafta söylüyorum. Diş rengi, dişeti hattı, dudak kalınlığı, gülüş çizgisi, yüz simetrisi, kemik desteği ve iyileşme kapasitesi kişiden kişiye değişir; aynı işlem aynı yüze yerleşmez. Başkasının sonucu üzerinden karar almak çoğu zaman beklenti hatasına yol açıyor. Bence kendi yüzünüzün ölçüsünü tanıyan bir karar her zaman daha sürdürülebilir kalıyor.',
    },
    {
      question: 'Estetik diş kararına karar vermek kaç görüşme alır?',
      answer:
        'Hastalarımda kalıcı estetik kararlar için neredeyse hiçbir zaman tek görüşmeyle ilerlemiyorum. İlk görüşme bende yüzünüzü ve dişlerinizi tanıma görüşmesidir; ikinci görüşmede seçenekleri, sınırları ve gerçekçi beklentileri birlikte konuşuyoruz. Daha geri dönüşsüz adımlar — özellikle minenin aşındırılmasını gerektiren işlemler — düşünülüyorsa ara bir görüşme veya geçici bir deneme rica ediyorum; bu, karara güven katar. Hastalarıma sıkça söylediğim bir cümle var: "Bugün karar vermek zorunda değilsiniz." Bunu bir hekimden duyduğunuzda iyi bir işarettir.',
    },
    {
      question: 'Estetik diş hekimi seçerken neye dikkat etmek gerek?',
      answer:
        'En sade kontrol şu: hekim sizinle konuşurken <em>"ben şunu yaparım"</em> mı diyor, yoksa <em>"sizin yüzünüze ne yakışır"</em> mı diye soruyor — bu fark her şeyi söyler. Geri döndürülemez adımları (mine aşındırma, çoklu kron, agresif beyazlatma) ilk görüşmede önerme aceleciliği; bence sürdürülebilir bir yaklaşımın işareti değil. Müdahale yapmamayı veya daha küçük bir müdahaleyi de bir seçenek olarak masaya koyan hekim — uzun vadede daha güvenilir bir adres oluyor.',
    },
  ],
  '/hormonal-gecis/40-sonrasi/tiroid-menopoz-yorgunluk-uyku/': [
    {
      question: 'TSH normal ama yorgunum, başka ne bakılmalı?',
      answer:
        'TSH normal sınırlardayken yorgunluğun nedeni birden fazla olabilir. Sade bir genişletilmiş değerlendirme genellikle fT4, Anti-TPO, ferritin, B12, D vitamini, açlık glikozu ve HbA1c üzerinden ilerler; fT3 daha çok seçilmiş durumlarda eklenir. Perimenopoz ekseninde FSH ve östradiol her kadında rutin gereklilik değildir; klinik belirsizlik varsa anlam kazanır.',
    },
    {
      question: "Anti-TPO pozitif çıktı ama tiroid hormonum normal — Hashimoto'm var mı?",
      answer:
        'Anti-TPO yüksekliği tiroid bezine karşı otoantikor varlığını gösterir; bu Hashimoto tiroiditinin immünolojik işaretidir. Ancak otoantikor pozitifliği tek başına tedavi kararı getirmez — TSH ve fT4 normalken klinik durum genellikle izlem ile yönetilir. TSH 6-12 ayda bir tekrarlanır; aile öyküsü veya ilerleyen belirtiler varsa takip aralığı sıkılaştırılabilir.',
    },
    {
      question: 'Hormon replasman tedavisi (HRT) tiroid takibimi değiştirir mi?',
      answer:
        'Özellikle oral östrojen tedavisi tiroid bağlayıcı globulini (TBG) bir miktar arttırabilir; bu da total T4 düzeyini yükseltebilir ama serbest fT4 genellikle daha stabil kalır. Transdermal östrojen formlarında bu etki daha sınırlıdır. Levotiroksin kullanan kadınlarda HRT başlandıktan 6-8 hafta sonra TSH tekrar bakılması uygun pratiktir; bazılarında küçük doz ayarı gerekebilir.',
    },
    {
      question: 'Perimenopozda TSH neden değişken çıkıyor?',
      answer:
        'Perimenopoz hormonal dalgalanmaların yoğun olduğu bir dönemdir; östrojen-progesteron dengesi tek bir doğrultuda ilerlemez. TSH değerlerindeki küçük dalgalanmalar ölçüm zamanı, laboratuvar değişkenliği, eşlik eden hastalıklar, ilaçlar ve tiroid eksenindeki gerçek değişimlerle ilişkili olabilir. Tek değer üzerinden hızlı karar verilmez; gerekirse 6-8 hafta arayla tekrar bakılır.',
    },
    {
      question: 'Tiroid ilacı ile menopoz ilaçları aynı anda alınabilir mi?',
      answer:
        'Genel olarak evet, ancak levotiroksinin aç karna ve diğer ilaçlardan en az 30-60 dakika önce alınması önerilir; kalsiyum, demir gibi mineraller ve bazı yiyecekler emilimi azaltır. HRT oral formunda sabah levotiroksinden ayrı bir saatte alınması yeterlidir. Spesifik ilaç etkileşimi planını eczacı ve hekiminizle birlikte yapmanız en güvenli yoldur.',
    },
  ],
  '/zamansiz-yasam/40-sonrasi-diz-agrisi-izlem-mudahale/': [
    {
      question: 'Dizimde ağrı varken yürüyüş yapabilir miyim?',
      answer:
        'Çoğu hastada evet; ancak süre ve tempo kişiye göre ayarlanmalıdır. Ağrıyı artıran uzun yürüyüşler yerine kısa ve düzenli yürüyüşler tercih edilir.',
    },
    {
      question: "MR'da menisküs yırtığı yazıyorsa ameliyat şart mı?",
      answer:
        'Hayır. Menisküs bulgusu klinik muayene ve işlev kaybı ile birlikte değerlendirilir. Her menisküs bulgusu cerrahi gerektirmez.',
    },
    {
      question: 'Kilo vermek gerçekten diz ağrısını azaltır mı?',
      answer:
        'Çoğu hastada evet. Vücut ağırlığındaki azalma diz eklemine binen yükü azaltır ve hareket toleransını artırır.',
    },
    {
      question: 'Ne kadar süre konservatif plan denenmeli?',
      answer:
        'Genellikle 8-12 hafta. Bu sürede ölçülebilir iyileşme yoksa müdahale basamakları yeniden değerlendirilir.',
    },
  ],
  '/zamansiz-yasam/belden-gelen-agri-kasik-genital-bolge/': [
    {
      question: 'Kasık ağrısı yaşıyorsam önce jinekoloji mi yoksa fizyoterapi mi düşünmeliyim?',
      answer:
        'Yanıt ağrının davranışına göre değişir. Kanama, akıntı, ateş, idrar yakınması ya da ilişkiyle belirginleşen farklı bir tablo varsa jinekolojik veya ürolojik değerlendirme öne çıkar; ağrı oturup kalkmakla, yürümekle, bel pozisyonuyla ya da uzun oturmayla değişiyorsa mekanik hat da düşünülür.',
    },
    {
      question: 'Bel kaynaklı ağrı genital bölgede gerçekten hissedilebilir mi?',
      answer:
        'Evet. Bazı sinir hatları ve kas-fasya ilişkileri nedeniyle ağrı beklenenden daha önde ya da aşağıda hissedilebilir. Bu, her genital ağrının belden geldiği anlamına gelmez; yalnızca bel-kalça-pelvik taban hattının değerlendirmede unutulmaması gerektiğini gösterir.',
    },
    {
      question: 'MR temizse ağrının mekanik olmadığı sonucuna varılır mı?',
      answer:
        'Hayır. Görüntüleme normal olsa bile sinir hassasiyeti, pelvik taban gerginliği, kas yüklenmesi ya da hareket paternine bağlı ağrı olabilir. Klinik değerlendirme ile görüntüleme aynı soruya bakmaz; biri diğerinin yerini tam olarak tutmaz.',
    },
    {
      question: 'Evde dinlenmek mi, hareket etmek mi daha doğru olur?',
      answer:
        'Tam hareketsizlik çoğu zaman çözüm olmaz; ama ağrıyı artıran yüklenmeyi zorlamak da doğru değildir. Bedeni dinleyerek ilerlemek, ağrıyı belirgin artırmayan kısa hareket araları ve rahatlatan pozisyonlarla geçici bir denge kurmak anlamına gelir.',
    },
  ],
  '/zamansiz-yasam/yuz-mudahalesi-olcu-sorusu/': [
    {
      question: 'Erken mi, geç mi kalıyorum?',
      answer:
        'Bu soruyu çok duyuyorum. Tek bir yaş cevabı yok. Erken ya da geç olması, kendi yüzünüzde hangi katmanın konuştuğuna ve hangi beklentiyle baktığınıza bağlı. 35\'inde bir kadın için bazı uygulamalar erken, 60\'ında bir kadın için bazı cerrahi müdahaleler hâlâ uygun olabiliyor.',
    },
    {
      question: 'Arkadaşımda iyi sonuç veren işlem bende neden farklı sonuç verir?',
      answer:
        'Çünkü cilt zemini, yağ ve kemik desteği, mimik yapısı, iyileşme hızı ve yaşam tarzınız bambaşka. Aynı işlem aynı tabloya yerleşmiyor; bu yüzden başkasının sonucu üzerinden karar almak çoğu zaman beklenti hatasına yol açıyor.',
    },
    {
      question: 'Daha az müdahaleyle daha iyi sonuç almak mümkün mü?',
      answer:
        'Çoğu zaman evet — özellikle erken aşamada. Bakım katmanının ihmal edilmediği bir ciltte, küçük ve doğru zamanlanmış müdahaleler yıllar içinde bütünlüklü bir tablo veriyor. Ben bunu hep şöyle özetliyorum: "Daha çok değil, daha doğru."',
    },
    {
      question: 'Müdahale yaptırmazsam yüzüm hızla kötüye gider mi?',
      answer:
        'Hayır. Doğal yaşlanma yıllar içinde ilerliyor; bir günde dramatik bir değişim olmaz. Müdahaleyi "olmazsa olmaz" değil, "ölçülü tercih" olarak gördüğünüzde panik dilinden uzaklaşıyor.',
    },
    {
      question: 'Karar verirken kendime hangi soruyu sormalıyım?',
      answer:
        'Tek bir soru: "Bu kararı kim soruyor — ben mi, yoksa duyduğum cümleler mi?" Cevap "ben" ise, hekiminizle yapılacak görüşmenin zemini sağlam. Cevap belirsizse, kararı bir süre daha taşımak ve yüzünüzle daha uzun bir konuşma yapmak çoğu zaman daha doğru oluyor.',
    },
  ],
  '/hormonal-gecis/menopoz/hrt-ilk-alti-ay/': [
    {
      question: 'HRT\'nin etkisi ne kadar sürede başlar?',
      answer:
        'Bireysel deneyim büyük ölçüde değişir. Bazı kadınlarda ilk iki–dört hafta içinde hafif değişimler görülebilir; ancak gerçek dengelenmenin oturması genellikle iki–üç ay sürer. İlk hafta hiçbir şey hissetmemek de tamamen normal; sabırla beklemek ve hekimle düzenli iletişim genellikle daha iyi bir yol haritası verir.',
    },
    {
      question: 'İlk aylarda yan etki yaşamak yaygın mı?',
      answer:
        'Evet, hafif yan etkiler ilk iki–üç ayda görülebilir: hafif baş ağrısı, hassasiyet, hafif şişkinlik gibi. Bunların büyük kısmı vücut alıştıkça geriler. Şiddetli veya beklenmedik bir belirti — örneğin yoğun baş ağrısı, beklenmedik kanama, göğüste belirgin hassasiyet — yaşanırsa hekime başvurmak gerekir.',
    },
    {
      question: 'HRT kullanırken günlük yaşam alışkanlıkları neden hâlâ önemli?',
      answer:
        'Hormon tedavisi tek bir müdahaledir; ancak hareket, beslenme, uyku ve stres yönetimi gibi yaşam alışkanlıkları da menopoz dönemindeki bedensel ve zihinsel iyi oluş için kritik kalır. HRT bir köprü kurar; günlük alışkanlıklar bu köprünün dayandığı zemini oluşturur. İkisi birbirinin yerine değil, tamamlayıcısıdır.',
    },
    {
      question: 'Hekimle ne sıklıkta görüşmek anlamlı?',
      answer:
        'İlk yıl genellikle 3 aylık aralıklarla, sonrasında klinik duruma göre 6 ay–yıllık aralıklarla. Yıllık mamografi, kan tetkikleri ve kemik yoğunluğu takibi (klinik karara göre) standart izlem çerçevesinin parçasıdır. Beklenmedik bir belirti olduğunda planlı zamandan önce başvurmak her zaman güvenli tercihtir.',
    },
    {
      question: 'Aile içinde "doğru karar mı?" kuşkusu olduğunda nasıl konuşulur?',
      answer:
        'Eşin, kızın veya kardeşin sessiz bir endişesi normaldir; çoğu zaman bilgisizlikten değil, sevgiden gelir. Erken aşamada paylaşılabilecek üç şey var: kararın hekimle birlikte alındığı, takvimin nasıl kurulduğu (üç ay sonra muhasebe), ve hangi belirtilerin "hemen ara" sinyali olduğu. Süreç zaman ilerledikçe çoğu zaman onların ölçümleri — "daha az yorgunsun", "daha az gergin görünüyorsun" gibi — yazılı bir rapordan daha güvenilir bir geri bildirim kaynağı olur.',
    },
  ],
  '/hormonal-gecis/menopoz/dokuz-yillik-menopoz-sonunda-hrt-karari/': [
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
  '/zamansiz-yasam/vitaminler/magnezyum-menopozda-ne-ise-yarar/': [
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
  '/bilimsel-pencere/yeni-arastirmalar/menopozda-hrt-avantajlari/': [
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
  '/beden-yakinlik/cilt-gorunum/menopozda-cilt-degisimleri/': [
    {
      question: 'Menopozda cilt değişimi yalnızca yaşlanma mı?',
      answer:
        'Hayır. Yaş alma, güneş geçmişi, genetik yapı, uyku, stres ve bakım alışkanlıkları etkilidir; fakat menopoz döneminde östrojen azalması da cildin nem, kolajen ve bariyer ritmini değiştirebilir. Ben bu tabloyu tek nedenle açıklamam; hormon, UV, melanin, bariyer ve kişisel cilt öyküsü birlikte değerlendirilmelidir.',
    },
    {
      question: 'Cilt kuruluğu ve hassasiyet bu dönemde artabilir mi?',
      answer:
        'Evet, bazı kadınlarda cilt daha kuru, daha gergin veya daha kolay kızaran bir hale gelebilir. Sert temizleyiciler, sıcak su, yoğun peeling ve üst üste aktif içerik denemeleri bu hassasiyeti artırabilir; önce bariyeri sakinleştirmek çoğu zaman daha doğru bir başlangıçtır.',
    },
    {
      question: 'Menopozda cilt için kanıtı güçlü günlük adım nedir?',
      answer:
        'Düzenli güneş koruması hâlâ kanıtı güçlü temel adımlardan biridir. Leke, elastikiyet, ince çizgi, kolajen kaybı ve genel cilt sağlığı açısından gösterişli olmayan ama uzun vadede çok belirleyici bir alışkanlıktır.',
    },
    {
      question: 'Kolajen takviyesi herkes için gerekli midir?',
      answer:
        'Hayır. Kolajen takviyeleri için bazı sınırlı olumlu veriler olsa da her kadına genellenebilecek zorunlu bir öneri değildir. Protein alımı, uyku, direnç egzersizi, güneşten korunma, sigaradan uzak durma ve kişisel sağlık durumu birlikte düşünülmelidir.',
    },
    {
      question: 'Ne zaman dermatolojik değerlendirme geciktirilmemeli?',
      answer:
        'Yeni veya hızla büyüyen leke, şekli değişen ben, kanayan ya da kabuklanan alan, geçmeyen yara, yoğun kaşıntı, belirgin yanma, ani saç dökülmesi veya tırnak değişikliği varsa bekletmemek gerekir. Bu belirtiler kozmetik bakım konusu gibi değil, dermatolojik değerlendirme gerektiren işaretler olarak ele alınmalıdır.',
    },
  ],
  '/zihin-denge/duygusal-denge/perimenopozda-kaygi-artisi/': [
    {
      question: 'Perimenopozdaki kaygı artışı anksiyete bozukluğu anlamına gelir mi?',
      answer:
        'Her zaman hayır. Perimenopozda kaygı dalgalanması hormon değişimi, uyku bölünmesi ve yaşam yüküyle ilişkili olabilir. Ama kaygı günlük işlevi belirgin bozuyorsa, panik atak benzeri ataklar oluyorsa veya çöküntü hali eşlik ediyorsa profesyonel değerlendirme iyi olur.',
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
  '/hormonal-gecis/menopoza-hazirlik/menopoza-hazirlik-ilk-kontrol-dosyasi/': [
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
  '/zihin-denge/bilissel-saglik/perimenopozda-zihinsel-bulaniklik/': [
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
  '/hormonal-gecis/perimenopoz/perimenopoz-ilk-isaretler/': [
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
  '/beden-yakinlik/cinsel-saglik/libido-degisimi-menopoz/': [
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
  '/hormonal-gecis/menopoz/hrt-yan-etkileri-ve-izleme/': [
    {
      question: 'Yan etkilerin büyük kısmı ne zamana kadar geçer?',
      answer:
        'Yumuşak ve yaygın yan etkilerin büyük kısmı (meme hassasiyeti, hafif ödem, küçük baş ağrıları, kanama düzensizliği) ilk üç–altı ay içinde belirgin biçimde azalır. Üçüncü ay çoğu durumda ilk gerçek değerlendirme noktasıdır; ilk haftalarda yaşanan bir belirti üzerinden tedaviyi yargılamak çoğu zaman erken bir karardır. Altıncı ayda hâlâ belirgin bir rahatsızlık varsa, doz veya form ayarı hekimle birlikte konuşulabilir.',
    },
    {
      question: 'İlk haftalarda kanama olması her zaman endişe verici mi?',
      answer:
        'Hayır. Özellikle kombine tedavide (östrojen + progesteron) ilk üç–altı ay boyunca arada gelen küçük lekelenmeler ya da kısa beklenmedik kanamalar görülebilir; bu uyum dönemine ait yaygın bir tablodur. Ancak yoğun ya da uzun süreli kanama, postmenopoz döneminde açıklanamayan kanama veya altıncı aydan sonra hâlâ düzene oturmamış kanama her zaman hekimle değerlendirilir.',
    },
    {
      question: 'Hekimle ne sıklıkta görüşmek anlamlı?',
      answer:
        'İlk yıl genellikle üç aylık aralıklarla; sonraki yıllarda klinik tabloya göre altı ay–yıllık. Yıllık mamografi, kan tetkikleri ve gerektiğinde kemik yoğunluğu ölçümü standart izlemin parçasıdır. Beklenmedik bir belirti olduğunda planlı zamandan önce iletişime geçmek her zaman güvenli tercihtir.',
    },
    {
      question: 'Ev ortamında neyi izlemek anlamlı?',
      answer:
        'Çok karmaşık bir takip sistemi gerekmiyor. Telefonda veya küçük bir defterde haftada bir cümle — “bu hafta uyku iyiydi, meme hassasiyeti azaldı, lekelenme oldu” gibi — üç ay sonra hekimle oturulduğunda en değerli kaynak hâline gelir. Belirti günlüğü, neyin tedaviye neyin yaşam tarzına bağlı olduğunun ayrıştırılmasını da kolaylaştırır.',
    },
    {
      question: 'Yan etkiler bana uymadığını mı gösterir?',
      answer:
        'Çoğu zaman hayır. İlk haftalarda yaşanan yumuşak yan etkiler tedavinin “uymadığı” anlamına gelmez; vücut yeni dengeye yerleşirken gelir. Üç ayın sonunda hâlâ rahatsız edici bir tablo varsa, hekimle birlikte doz veya form (oral, transdermal jel, bant) değişikliği gündeme gelebilir.',
    },
  ],
  '/zamansiz-yasam/deneysel/nad-plus-takviyesi/': [
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
  '/zamansiz-yasam/deneysel/peptid-kullanimlari-menopoz/': [
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
  '/hormonal-gecis/menopoz/sicak-basmasi-gece-terlemesi/': [
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
  '/bilimsel-pencere/hucreler-ve-yaslanma/nad-plus-hucresel-yaslanma/': [
    {
      question: 'NMN veya NR kullanmak kandaki NAD+ düzeyini gerçekten yükseltir mi?',
      answer:
        'Kısa süreli insan çalışmalarında NMN ve NR gibi öncüllerin kandaki NAD+ göstergelerini artırabildiği görülüyor. Ama okuyanın asıl sorusu genellikle bu değil; "bu bende neyi değiştirir?" sorusudur. Bugün için biyobelirteç artışı, kas gücü, biliş, metabolizma veya uzun yaşam gibi klinik sonuçların da iyileştiği anlamına gelmez.',
    },
    {
      question: 'NAD+ yükselirse yaşlanma yavaşlar mı?',
      answer:
        'Bugün için bunu söylemek fazla iddialı olur. NAD+ hücresel enerji ve onarım yollarında önemli bir moleküldür; bu nedenle bilimsel merakı hak eder. Fakat insanda yaşlanmayı yavaşlattığını veya ömrü uzattığını gösteren güçlü, uzun dönem klinik veri henüz yoktur.',
    },
    {
      question: 'NAD+ öncüleri yumurta kalitesini veya gebelik şansını artırır mı?',
      answer:
        'Fare ve laboratuvar düzeyindeki insan yumurta hücresi çalışmalarında ilginç sinyaller vardır. Yine de bu başlıkta dili özellikle yavaşlatmak gerekir; umut eden bir kadına mekanizma, klinik sonuç gibi sunulmamalıdır. Haziran 2026 itibarıyla, kadına NMN veya NR verildiğinde gebelik ya da canlı doğum şansını artırdığını gösteren tamamlanmış ve güçlü insan çalışması yoktur.',
    },
    {
      question: 'Ürün kalitesi neden bu kadar vurgulanıyor?',
      answer:
        'Çünkü bazı çevrimiçi ürünlerde etiket iddiası ile gerçek içerik arasında ciddi uyumsuzluklar bildirilmiştir. Kutu parlak görünebilir; ama bu, içeriğin doğru olduğu anlamına gelmez. Bu yüzden ürün kalitesi, lot numarası, analiz sertifikası, üçüncü taraf test ve yerel yasal durum, molekül seçimi kadar önemli bir güvenlik başlığıdır.',
    },
  ],
  '/bilimsel-pencere/hucreler-ve-yaslanma/ghk-cu-menopoz-cilt/': [
    {
      question: 'GHK-Cu menopoz cildi için kanıtlanmış bir tedavi midir?',
      answer:
        'Hayır. GHK-Cu için cilt onarımı, kolajen ve yara iyileşmesi alanında ilgi çekici laboratuvar ve küçük insan verileri vardır; ancak menopoz cildinde doğrudan denenmiş güçlü bağımsız klinik çalışma yoktur. Bu nedenle tedavi gibi değil, topikal cilt bakımında beklentisi sınırlı bir yardımcı içerik gibi okunmalıdır.',
    },
    {
      question: 'GHK-Cu içeren topikal serum veya krem kullanmak makul olabilir mi?',
      answer:
        'Bazı kişiler için makul olabilir; özellikle ürün iyi formüle edilmişse ve iddiası cilt görünümünü desteklemekle sınırlıysa. Yine de cilt bariyeri hassas, rosacea eğilimi olan veya yoğun retinoid/asit kullanan kişilerde tahriş riski dikkate alınmalıdır. Güneş koruması, bariyer bakımı ve dermatolojik değerlendirme temel adımların yerini tutmaz.',
    },
    {
      question: 'GHK-Cu enjeksiyonu neden daha riskli bir başlık?',
      answer:
        'Çünkü enjeksiyon için yayımlanmış güçlü insan klinik çalışması, farmakokinetik veri ve uzun dönem güvenlik haritası yoktur. Ayrıca gri kanaldan edinilen peptidlerde sterilite, endotoksin, doz sapması ve içerik doğruluğu gibi ek riskler bulunabilir. Topikal kozmetik güvenlik bilgisi enjeksiyon güvenliği anlamına gelmez.',
    },
    {
      question: 'Bakır içermesi toksisite açısından endişe yaratır mı?',
      answer:
        'Topikal kozmetik kullanımda sistemik bakır yükü genellikle ana kaygı değildir; olası sorunlar daha çok kızarıklık, batma, kaşıntı veya hassasiyet gibi lokal reaksiyonlardır. Ancak bakır metabolizmasıyla ilgili özel hastalığı olanlar, bakır alerjisi öyküsü bulunanlar, gebelik veya emzirme dönemindekiler daha dikkatli değerlendirilmelidir.',
    },
    {
      question: 'GHK-Cu reklamlarında hangi iddialara özellikle temkinli bakılmalı?',
      answer:
        '“Genetik reset”, “sistemik gençleşme”, “kolajeni geri kazandırır”, “menopoz cildini tersine çevirir” veya enjeksiyonla geniş sağlık faydası vaat eden cümleler kanıt sınırını aşar. Daha güvenilir dil, GHK-Cu’yu topikal kozmetik bakımda olası ve sınırlı bir destek olarak tarif eder; kesin sonuç veya tedavi vaadi kurmaz.',
    },
  ],
  '/bilimsel-pencere/hucreler-ve-yaslanma/epitalon-telomer-yaslanma/': [
    {
      question: 'Epitalon menopozu geciktirir veya hormonal geçişi yumuşatır mı?',
      answer:
        'Bilimsel olarak henüz desteklenmiş bir iddia değildir. Pineal bezin hormonal döngülerle ilişkisi mekanizma düzeyinde tartışılır; ama Epitalon\'un menopoz başlangıcını ertelediği veya geçiş belirtilerini hafiflettiği bir kontrollü insan verisi mevcut değil. Mekanizmadan klinik vaade atlamak bu alanda en sık yapılan yanlıştır.',
    },
    {
      question: 'Telomerazı destekleyen bir molekül kanser riski yaratır mı?',
      answer:
        'Önemli bir soru. Yeni laboratuvar verileri, Epitalon\'un sağlıklı hücrelerde telomerazı orta seviyelerde uyardığını ve kanser hücrelerindeki ölümsüzlük seviyelerine ulaşmadığını gösteriyor; ALT mekanizması ise sağlıklı hücrelerde aktive olmuyor. Bu yorum laboratuvar düzeyinde rahatlatıcı ama insan klinik güvenlik verisi anlamına gelmez. Aktif kanseri olan veya yüksek riskli kanser öyküsü taşıyan kişilerde net güvenlik verisi olmadan deneysel telomer uzatma stratejisi önerilmez.',
    },
    {
      question: 'İnternette satılan Epitalon enjeksiyonu güvenli midir?',
      answer:
        'Türkiye\'de ve birçok ülkede Epitalon onaylı bir ilaç değil; gri kanaldan edinilen peptid ürünlerinin saflık, doz ve içerik tutarlılığı bilinen bir sorundur. Kanıtsız bir molekülü kanıtsız kaynaktan kullanmak iki belirsizliği üst üste koymak demektir; klinik karar açısından makul bir adım değil.',
    },
    {
      question: 'Epitalon hakkında bilimsel haberlere nasıl daha sakin yaklaşılır?',
      answer:
        'Üç soruyla başlamak iyi olur: çalışma laboratuvar mı, hayvan mı, insan mı? İnsan ise küçük bir gözlem mi, plasebo kontrollü randomize bir araştırma mı? Ölçülen sonuç gerçekten günlük yaşamı etkileyen bir sonlanım mı, yoksa biyobelirteç değişimi mi? Bu üç soru pazarlama dilinden bilim diline geçişin filtresidir.',
    },
  ],
  '/zamansiz-yasam/d-vitamini-rehberi/': [
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
  '/beden-yakinlik/cinsel-saglik/cinsellikte-agri-menopoz/': [
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
  '/beden-yakinlik/cinsel-saglik/mahrem-bolge-degisimleri-menopoz/': [
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
  '/zihin-denge/duygusal-denge/stres-yonetimi-menopoz/': [
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
        'Kaygı, çöküntü hali, öfke patlamaları ya da beden belirtileri işlevi bozuyorsa daha yakından bakmak gerekir. Çünkü bazen mesele yalnızca stres değil, uyku bozulması veya depresif tabloyla birleşen bir yük olabilir.',
    },
  ],
  '/zihin-denge/uyku-dinlenme/uyku-bozuklugu-menopoz/': [
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
  '/zihin-denge/uyku-dinlenme/aksam-hareketi-uyku-melatonin/': [
    {
      question: 'Akşam yürüyüşü melatonini (uyku hormonu) olumsuz etkiler mi?',
      answer:
        'Genellikle hayır. Loş ışıkta, çok geçe kalmadan yapılan hafif tempolu bir yürüyüş melatonin salgılanmasını engellemez; aksine günün stresini zihnimizden düşürerek uykuya geçişi destekler. Ancak parlak sokak lambaları altında veya elinizde telefon ekranıyla yürüyorsanız, mavi ışık maruziyeti nedeniyle uykunuz kaçabilir.',
    },
    {
      question: 'Yatmadan hemen önce pilates veya yoga yapmak doğru mu?',
      answer:
        'Eğer seansınız yumuşak esneme hareketlerinden oluşuyorsa evet; ancak kasları yakan yoğun bir performans dersiyse hayır. Akşam rutini terlemekten ziyade eklemleri açmalı, omurgayı rahatlatmalı ve nefesi uzatmalıdır. \'Daha çok kalori yakayım\' hırsı, geceye yaklaşırken uykunun en büyük düşmanına dönüşebilir.',
    },
    {
      question: 'Gece terlemesi yaşayan kadınlar akşam hareketinden uzak mı durmalı?',
      answer:
        'Uzak durmak şart değildir; fakat saati ve yoğunluğu çok daha dikkatli ayarlamak gerekir. Akşam geç vakitte yapılan sert antrenmanlar beden ısısını aşırı yükselterek gece terlemelerini tetikleyebilir. Hafif bir eklem mobilitesi başlangıç için en güvenli yoldur. Eğer terlemeleriniz artıyorsa, küçük bir semptom günlüğü tutarak tetikleyicileri takip edebilirsiniz.',
    },
    {
      question: 'Sabah hareketi mi, akşam hareketi mi daha faydalı?',
      answer:
        'Bu sorunun tek bir doğrusu yoktur; belirleyici olan kendi bedeninizin verdiği yanıttır. Sabah saatlerindeki hareket sirkadiyen ritmi (iç saatimizi) güçlendirirken, akşam hareketi günün birikmiş gerilimini boşaltır. Eğer akşam hareketinden sonra uykunuzun kaçtığını fark ediyorsanız, antrenman yoğunluğunu azaltmayı veya rutini 2 saat öne çekmeyi deneyebilirsiniz.',
    },
    {
      question: 'Hiç hareket edemeyecek kadar yorgun hissettiğimde ne yapmalıyım?',
      answer:
        'Böyle akşamlarda \'egzersiz\' kelimesini tamamen zihninizden çıkarın. Sadece iki dakika omuzlarınızı geriye doğru çevirmek, üç dakika bacaklarınızı duvara yaslamak veya loş ışıkta nefesinizi yavaşlatmak bile bedene dinlenme sinyali gönderir. Unutmayın, sürdürülebilirlik bazen en küçük adımları bile küçümsememekten başlar.',
    },
  ],
  '/zamansiz-yasam/beslenme-yaslanma/': [
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
  '/zamansiz-yasam/kilo-artisi-menopoz/': [
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
  '/zamansiz-yasam/kemik-sagligi-40-sonrasi/': [
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
  '/bilimsel-pencere/hormonlarin-bilimi/estrogen-biyolojisi-saglik/': [
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
  '/hormonal-gecis/menopoz/menopoz-nedir/': [
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
  '/hormonal-gecis/menopoz/hormon-tedavisi-karar-rehberi/': [
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
    {
      question: 'HRT için en uygun zaman ne zaman?',
      answer:
        'Kanıt, 60 yaş altında ve menopozdan sonraki ilk on yıl içinde başlanan tedavide fayda-risk dengesinin çoğu kadın için daha olumlu olduğunu gösteriyor; bu aralık bazen “fırsat penceresi” olarak anılır. Pencerenin dışında yeni başlatmada bazı riskler artabildiği için yaş ve menopozdan bu yana geçen süre konuşmanın merkezinde olur.',
    },
    {
      question: 'Vajinal östrojen sistemik hormon tedavisinden farklı mı?',
      answer:
        'Evet. Yalnızca vajinal kuruluk gibi lokal yakınmalar için kullanılan düşük doz vajinal östrojen, tüm vücudu etkileyen sistemik tedaviden ayrı değerlendirilir ve genellikle çok daha güvenli bir kategori olarak görülür. Sistemik bir gerekçe yoksa lokal seçenek tek başına yeterli olabilir.',
    },
  ],
  '/hormonal-gecis/menopoz/menopozda-hekim-hasta-iliskisi/': [
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
  '/hormonal-gecis/menopoz/tarti-yatisinca-vucut-kompozisyonu/': [
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
  '/hormonal-gecis/menopoza-hazirlik/koruyucu-saglik-kayitlari/': [
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
  '/zihin-denge/uyku-dinlenme/perimenopoz-uyku-degisen-yan/': [
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
  '/beden-yakinlik/pelvik-taban/menopozda-idrar-kacirma-pelvik-taban/': [
    {
      question: 'Kegel egzersizleri gerçekten işe yarıyor mu, ne kadar sürede etki gösterir?',
      answer:
        'Doğru yapılan ve düzenli sürdürülen pelvik taban kas eğitimi stres tipi idrar kaçırmada en güçlü kanıt tabanına sahip ilk basamak yaklaşımdır. Egzersiz yararlıdır ancak hepsi aynı değildir; en kritik nokta doğru yapılmasıdır. Belirgin fark genellikle 8-12 hafta düzenli uygulamadan sonra hissediliyor; tutarlı yapıldığında iyileşmeler 6 ay sonunda da artmaya devam edebiliyor. Bir pelvik taban fizyoterapistiyle başlangıç birkaç seans yapmak, kalan süreyi evde doğru bir şekilde sürdürmenizi sağlıyor.',
    },
    {
      question: 'Lokal östrojen sistemik HRT mi, güvenli mi?',
      answer:
        'Vajinal yoldan uygulanan düşük doz östrojen lokal etkili olacak biçimde tasarlanır ve sistemik dolaşıma geçen miktar oldukça düşüktür. Bu yüzden sistemik HRT\'nin kontrendike olduğu birçok kadında bile lokal östrojen değerlendirilebilir; ancak meme kanseri öyküsü gibi belirli durumlarda karar mutlaka onkolog ve jinekoloğun ortak değerlendirmesiyle verilir. Aynı kelime başka şeyi anlatabiliyor — netleştirme önemlidir.',
    },
    {
      question: 'Cerrahi nasıl bir karar, kimler için uygun?',
      answer:
        'Mid-uretral sling (askı) cerrahisi stres tipi inkontinansta en yaygın ve en kanıtlı seçenektir. Davranışsal adımların yetmediği veya yaşam kalitesini belirgin etkileyen olgularda gündeme gelir. Doğum planı olmayan kadınlar için aday profili daha nettir; eşlik eden tıbbi durumlar, geçirilmiş cerrahiler, beklenti ve risk-fayda dengesi değerlendirmenin parçasıdır. Karar tek seans değil, bir süreçtir.',
    },
    {
      question: 'Yerel lazer veya radyofrekans, kanıt durumu nedir?',
      answer:
        'Stres tipi idrar kaçırma için yerel lazer ve radyofrekans uygulamalarının kanıt seviyesi sınırlı kalmaktadır ve uzun dönem ile karşılaştırmalı veriler henüz yeterli değildir. Davranışsal adımlar ve belgeli seçenekler atlanarak bu uygulamalara geçmek çoğu zaman beklenen faydayı vermez. Karar öncesinde sıralamayı doğru kurmak hem bütçeyi hem beklentiyi korur.',
    },
    {
      question: 'İdrar kaçırma menopozdan sonra ortaya çıktıysa geçici midir?',
      answer:
        'Postmenopozal dönemde idrar kaçırma çoğunlukla geçici bir tablo değildir; östrojen düşüşü ve birikmiş pelvik taban yıpranmasıyla sürebilen bir durumdur. Sürdürülebilir tedavi seçenekleri vardır ve büyük çoğunluk kadında belirgin iyileşme mümkündür. Erken değerlendirme şikâyetin yıllar içinde sessizce büyümesinin önüne geçer.',
    },
  ],
  '/bilimsel-pencere/yeni-arastirmalar/glp1-analoglari-menopozal-kilo/': [
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
  '/bilimsel-pencere/yeni-arastirmalar/menopoz-hrt-meme-kanseri-riski/': [
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
  '/zamansiz-yasam/40-sonrasi-kas-iskelet-agrilari/': [
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
  '/zamansiz-yasam/40-sonrasi-harekete-yeniden-baslamak/': [
    {
      question: 'Uzun süredir spor yapmadıysam yürüyüşle başlamak yeterli mi?',
      answer:
        'Yürüyüş iyi bir başlangıç olabilir; özellikle dolaşım, genel dayanıklılık ve ruh hali için değerli bir kapı açar. Ancak kas gücü, denge ve hareket açıklığı için zamanla güvenli güçlenme ve denge çalışmaları da plana eklenebilir.',
    },
    {
      question: "Ağırlık çalışmak 40'tan sonra güvenli mi?",
      answer:
        'Çoğu kişi için doğru teknik, uygun doz ve kişisel sağlık durumu dikkate alındığında güç çalışması değerlidir. Başlangıç seviyesi, eklem geçmişi, osteoporoz riski, tansiyon, kalp sağlığı ve mevcut ağrılar planı değiştirebilir.',
    },
    {
      question: 'Her gün hareket etmek gerekir mi?',
      answer:
        'Her gün aynı yoğunlukta egzersiz yapmak gerekmez. Bazı günler yürüyüş, bazı günler hareket açıklığı, bazı günler güçlenme, bazı günler yalnızca hafif esneme ve nefes çalışması daha uygun olabilir.',
    },
    {
      question: 'Hareketten sonra ağrı olması normal mi?',
      answer:
        'Hafif kas hassasiyeti, özellikle uzun aradan sonra görülebilir. Fakat keskin, eklem içine binen, uyuşma veya güç kaybıyla gelen, topallatan ya da birkaç gün içinde yatışmayan ağrı normal kabul edilmemelidir.',
    },
    {
      question: 'Menopoz döneminde hareket kilo vermek için mi yapılmalı?',
      answer:
        'Kilo yönetimi bazı kadınlar için gündeme gelebilir, ancak hareketin değeri yalnızca kilo üzerinden okunmamalıdır. Kas gücü, kemik sağlığı, denge, uyku, metabolik esneklik ve günlük yaşam kapasitesi en az tartı kadar önemlidir.',
    },
  ],
  '/zamansiz-yasam/kemik-gucu-kirigi-beklemeden-sorulacak-sorular/': [
    {
      question: 'Kemik ölçümü normal çıktıysa kırık riski tamamen biter mi?',
      answer:
        'Tamamen kapanmaz. Kemik yoğunluğu iyi bir haber olabilir; yine de düşme riski, önceki kırık, aile öyküsü, kas gücü ve eşlik eden hastalıklar tabloya eklenir. Rapor rahatlatır, ama bütün hikayeyi tek başına anlatmaz.',
    },
    {
      question: 'Osteopeni mutlaka ilaç kullanmak anlamına mı gelir?',
      answer:
        'Hayır, bu otomatik bir eşik değildir. Osteopenide yaş, kırık öyküsü, düşme riski ve aile öyküsü birlikte okunur. Bazı kadınlarda izlem ve yaşam düzeni yeterli olurken, bazı kadınlarda dosyayı biraz daha yakından açmak gerekir.',
    },
    {
      question: 'Kemik için yürüyüş yeterli mi?',
      answer:
        'Yürüyüş iyi bir kapı açar; ritim, dolaşım ve denge için değerlidir. Ama kemik ve kas yalnızca adım sayısıyla güçlenmez. Zamanla güvenli direnç egzersizleri ve denge çalışmaları da konuşmaya katılabilir.',
    },
    {
      question: 'D vitamini takviyesine herkes başlamalı mı?',
      answer:
        'Rastgele başlamak iyi fikir değildir. D vitamini düzeyi, beslenme, güneşle temas, kemik riski ve mevcut hastalıklar aynı kişide farklı bir yanıt verebilir. Bu yüzden “herkese aynı doz” yerine ölçülü bir değerlendirme daha güvenlidir.',
    },
    {
      question: 'Düşme sonrası ağrı azaldıysa yine de kontrol gerekir mi?',
      answer:
        'Ağrının azalması rahatlatır ama kırığı tamamen dışlamaz. Kalça, kasık, bel, omurga veya el bileği hattında basmayı, yürümeyi ya da günlük işi bozan ağrı varsa “geçer” diye beklememek daha doğru olur.',
    },
  ],
  '/zamansiz-yasam/denge-kaybolmadan-ayak-kalca-govde/': [
    {
      question: 'Denge sorunu yalnızca baş dönmesiyle mi anlaşılır?',
      answer:
        'Hayır. Baş dönmesi olmadan da denge güveni azalabilir. Merdiven inerken trabzana fazla yüklenmek, çorap giyerken oturacak yer aramak ya da gece yürürken duvara dokunmak da küçük ama değerli ipuçlarıdır.',
    },
    {
      question: 'Ayak tabanı denge için neden önemlidir?',
      answer:
        'Çünkü beden zemini önce ayaktan okur. Taban duyusu, ayak bileği hareketi, parmakların zemini kavraması ve ayakkabı seçimi günlük denge hissini şaşırtıcı ölçüde değiştirebilir.',
    },
    {
      question: 'Denge çalışmasına tek ayak üzerinde durarak başlamak doğru mu?',
      answer:
        'Herkes için ilk adım bu olmayabilir. Bazı bedenler önce ağırlığı güvenle aktarmayı, ayak bileğini hareket ettirmeyi veya kalçayı kontrol etmeyi öğrenmelidir. Başlangıç seviyesi risk, ağrı ve ev güvenliğiyle birlikte seçilir.',
    },
    {
      question: 'Ev içinde denge için ilk bakılacak şey nedir?',
      answer:
        'Önce evin küçük tuzaklarına bakılır: kayan halı, zayıf ışık, kablo, kaygan terlik, dar geçiş. Bazen denge çalışmasının ilk adımı egzersiz matı değil, gece yürüdüğünüz yolu biraz daha güvenli hale getirmektir.',
    },
    {
      question: 'Ne zaman fizyoterapi veya tıbbi değerlendirme düşünülmeli?',
      answer:
        'Sık düşme, yeni başlayan belirgin dengesizlik, travma sonrası ağrı, uyuşma, güç kaybı veya günlük hareketi kısıtlayan güvensizlik varsa beklememek gerekir. Baş dönmesi eşlik ediyorsa tablo ayrıca tıbbi açıdan da okunmalıdır.',
    },
  ],
  '/hormonal-gecis/40-sonrasi/yorgunluk-kas-tiroid-metabolizma/': [
    {
      question: 'Yorgunluk varsa önce tiroid testi mi yapılmalı?',
      answer:
        'Tiroid sık akla gelir, haklı olarak da önemli bir başlıktır. Ama yorgunluğu tek testle kapatmak çoğu zaman yetmez. Süre, uyku, kilo değişimi, menopoz durumu, demir depoları, B12, D vitamini ve glikoz metabolizması da aynı hikayeye dahil olabilir.',
    },
    {
      question: 'TSH normal çıkarsa tiroid tamamen dışlanır mı?',
      answer:
        'Normal TSH çoğu zaman rahatlatıcıdır; yine de her sorunun kapağını tek başına kapatmaz. Yakınmaların biçimi, fT4, ilaç kullanımı, tiroid antikorları ve öykü bazı kişilerde ek bakışı gerekli kılabilir.',
    },
    {
      question: 'Yemekten sonra gelen uyku hali metabolik bir işaret olabilir mi?',
      answer:
        'Olabilir. Özellikle yemekten sonra gözlerin kapanması, tatlı isteği, karın çevresinde artış ve ailede diyabet öyküsü aynı tabloda buluşuyorsa glikoz metabolizmasına ayrıca bakmak anlamlıdır.',
    },
    {
      question: 'Kas kütlesi azalması gerçekten yorgunluk yapar mı?',
      answer:
        'Evet, kas yalnızca spor salonunun konusu değildir. Merdiven, çanta taşıma, uzun yürüyüş ve sabah yataktan kalkış bile kas kalitesinden etkilenir. Kas azaldığında aynı gün daha ağır yaşanabilir.',
    },
    {
      question: 'D vitamini düşüklüğü bütün yorgunluğu açıklar mı?',
      answer:
        'Tek başına her zaman açıklamaz. D vitamini düşüklüğü önemli olabilir; ama yorgunlukta demir, B12, tiroid, uyku, metabolik durum ve eşlik eden hastalıklar da dosyaya girer. Tek değere fazla anlam yüklememek gerekir.',
    },
  ],
  '/zamansiz-yasam/yaz-baslamadan-bedeni-uyandirmak/': [
    {
      question: 'Yaz öncesi harekete yürüyüşle başlamak yeterli mi?',
      answer:
        'Yürüyüş çok iyi bir başlangıç olabilir; özellikle ritim, nefes ve dayanıklılık için. Yine de yazı daha rahat taşımak istiyorsanız zamanla kas gücü, denge ve hareket açıklığı için güvenli ek çalışmalar da işe yarar.',
    },
    {
      question: 'Her gün egzersiz yapmak gerekir mi?',
      answer:
        'Her gün aynı şeyi yapmak gerekmez. Bir gün yürüyüş, bir gün hafif güçlenme, bir gün esneme, bir gün yalnızca toparlanma olabilir. Devam eden ritim, kusursuz takvimden daha değerlidir.',
    },
    {
      question: 'Sıcak havada hareket ederken nelere dikkat edilmeli?',
      answer:
        'Sabah erken saatler, gölge, yeterli sıvı ve daha yumuşak tempo iyi başlangıçtır. Nefesiniz sertleşiyor, başınız dönüyor, bulantı ya da çarpıntı geliyorsa “biraz daha dayanayım” demek iyi bir fikir değildir.',
    },
    {
      question: 'Ağrı varken hareket tamamen bırakılmalı mı?',
      answer:
        'Her ağrı hareketi tamamen yasaklamaz. Ama keskinleşen, artan, ekleme binen, topallatan ya da birkaç gün içinde yatışmayan ağrı “duy beni” diyen bir işarettir. O noktada kişisel değerlendirme daha güvenlidir.',
    },
    {
      question: 'Yaz hedefi kilo vermek olmak zorunda mı?',
      answer:
        'Hayır. Yaz hedefi tartı olmak zorunda değil. Daha rahat yürümek, daha iyi uyumak, daha dengeli hissetmek, kası ve kemiği korumak da gayet gerçek hedeflerdir.',
    },
  ],
  '/hormonal-gecis/menopoz/guc-cantayi-daha-hafif-hazirlamak/': [
    {
      question: 'Menopozda güç yalnızca egzersizle mi ilgilidir?',
      answer:
        'Hayır. Egzersiz kas ve kemik için çok değerli; ama günlük güç bazen uykuya sahip çıkmak, yük paylaşmak, sınır koymak ya da “bugün bunu taşımayayım” diyebilmekten de geçer.',
    },
    {
      question: 'HRT kararı kişisel deneyime bakarak verilebilir mi?',
      answer:
        'Hayır. Başkasının deneyimi yalnızca soru sormayı kolaylaştırır; kararın kendisi olmaz. HRT kişisel yakınmalar, sağlık geçmişi, riskler, muayene ve takip planıyla konuşulmalıdır.',
    },
    {
      question: 'Menopozda yorgunluk normal kabul edilip geçiştirilmeli mi?',
      answer:
        'Geçiştirilmemeli. Uyku bölünmesi, sıcak basması ve hormonal geçiş yorgunluğu artırabilir; ama tiroid, demir depoları, metabolizma, ilaçlar ve başka sağlık başlıkları da tabloya karışabilir.',
    },
    {
      question: 'Günlük yükü hafifletmek sağlık açısından gerçekten anlamlı mı?',
      answer:
        'Evet, bazı kadınlar için çok anlamlıdır. Çanta, takvim, merdiven, uzun ayakta kalma ve uykusuzluk birikince beden bunu hisseder. Küçük düzenlemeler tedavi değildir; ama günün yükünü daha taşınabilir kılabilir.',
    },
    {
      question: 'Deneyim yazıları tıbbi öneri yerine geçer mi?',
      answer:
        'Geçmez. Deneyim yazıları “yalnız değilim” duygusu verebilir ve iyi soru sordurabilir. Tanı, tedavi ve takip kararı ise kişisel tıbbi değerlendirme ister.',
    },
  ],
  '/zamansiz-yasam/deneysel/coenzyme-q10-takviyesi/': [
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
  '/zamansiz-yasam/deneysel/deneysel-tedaviyi-okuma-kilavuzu/': [
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
  '/zamansiz-yasam/non-invaziv/non-invaziv-cihazlar-hifu-rf-mikroakim/': [
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
  '/zamansiz-yasam/non-invaziv/sauna-soguk-dus-menopoz/': [
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
  '/zihin-denge/uyku-dinlenme/gece-terlemesi-uyku-utancsiz/': [
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
