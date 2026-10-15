export interface ArticleFaqItem {
  question: string;
  answer: string;
  /** Sayfadaki kaynak listesinde bu yanıtı destekleyen numara (isteğe bağlı). */
  sourceRef?: number;
}

export const articleFaqs: Record<string, ArticleFaqItem[]> = {
  '/zamansiz-yasam/vitaminler/kreatin-menopozda-ne-ise-yarar/': [
    {
      question: 'Kreatin menopoz belirtilerini azaltır mı?',
      answer:
        'Sıcak basması, gece terlemesi gibi klasik menopoz belirtilerini azalttığını gösteren yeterli kanıt yok. Buna karşılık kreatinin özellikle direnç egzersiziyle birlikte kas gücü ve yağsız vücut kütlesine küçük katkıları olabilir; perimenopoz/menopoz dönemine özgü çalışmalar ise hâlâ sınırlı.',
    },
    {
      question: 'Kreatin kemik erimesini önler mi?',
      answer:
        'Bugünkü verilere göre kreatini osteoporozu önleyen bir tedavi olarak görmemek gerekir. İki yıllık randomize çalışmalarda kemik mineral yoğunluğunda belirgin yarar gösterilmedi; bazı çalışmalar direnç egzersiziyle birlikte kemik geometrisi ve mekanik dayanıklılık göstergelerinde olumlu değişiklikler bildirmiş olsa da, toplam kanıt kemik yoğunluğunu koruduğunu kesin olarak göstermiyor.',
    },
    {
      question: 'Kreatin beyin sisi için kullanılabilir mi?',
      answer:
        'İlginç ama henüz kesin olmayan veriler var. Genel erişkin çalışmalarında hafıza ve bazı bilişsel alanlarda küçük yararlar bildirilse de sonuçlar tutarsız. Menopoz dönemindeki yalnızca 36 kadını içeren bir çalışmada kreatin hidroklorürle reaksiyon zamanında iyileşme görüldü; bunu beyin sisinin kanıtlanmış tedavisi saymak için henüz erken.',
    },
    {
      question: 'Kreatin kullanırken direnç egzersizi şart mı?',
      answer:
        'Kreatin kullanırken direnç egzersizi şart değildir, ancak özellikle kas gücü ve kas kütlesi açısından en belirgin yarar genellikle kreatin + direnç egzersizi birlikte olduğunda görülür. Egzersiz yapmadan da kas kreatin depoları artar; fakat menopoz döneminde asıl hedef kas kaybını önlemekse kreatini egzersizin yerine değil, egzersize destek olarak görmek daha doğru olur.',
    },
    {
      question: 'Kreatin kullanmaya başlamadan önce neyi konuşmalıyım?',
      answer:
        'Böbrek hastalığı öyküsü, kullanılan ilaçlar, hipertansiyon, diyabet ve diğer takviyeler konuşulmalıdır. Başlangıçta su tutulumuna bağlı hafif kilo artışı olabilir. Böbrek hastalığı olanlarda veya böbrek işlevini etkileyebilecek ilaç kullananlarda hekime danışmadan başlanmasını önermem.',
    },
  ],
  '/beden-yakinlik/menopoz-sonrasi-karin-germe/': [
    {
      question: 'Menopoz sonrası karın bölgesindeki değişim yalnızca kilo almakla mı ilgilidir?',
      answer:
        'Her zaman değil. Yağ dağılımı, cilt elastikiyeti, bağ dokusu, kas desteği, doğum öyküsü ve kilo alıp verme döngüleri birlikte rol oynayabilir. Bu yüzden ilk soru tartıdaki rakam değil, karın bölgesindeki değişimin hangi dokudan kaynaklandığıdır.',
    },
    {
      question: 'Karın germe ameliyatı kilo verme yöntemi midir?',
      answer:
        'Hayır. Karın germe, diyet ve egzersizin yerini alan bir zayıflama yöntemi değildir. Daha çok kilosu büyük ölçüde dengelenmiş kişilerde, belirgin cilt fazlası, alt karın sarkması veya karın duvarı gevşekliği gibi yapısal başlıklar için gündeme gelir.',
    },
    {
      question: 'Menopoz sonrası dönemde karın germe için yaş tek başına engel midir?',
      answer:
        'Yaş tek başına karar verdirmez. Genel sağlık durumu, sigara kullanımı, diyabet eğilimi, dolaşım, kullanılan ilaçlar, yara iyileşmesi ve ameliyattan beklenen değişimin gerçekçi olup olmadığı birlikte değerlendirilmelidir.',
    },
    {
      question: 'Karın germe sonrası iyileşme süresi herkes için aynı mıdır?',
      answer:
        'Hayır. İşlemin kapsamı, kişinin sağlık zemini, cilt ve doku kalitesi, iş temposu, ev içi destek ve cerrahın planı iyileşme ritmini değiştirir. Bu nedenle tek bir takvim vaadi yerine, kişisel bir iyileşme planı konuşmak daha güvenlidir.',
    },
    {
      question: 'Karar verirken kendime hangi soruyu sormalıyım?',
      answer:
        'En sade soru şudur: Bu değişim yalnızca aynadaki görüntümü mü etkiliyor, yoksa kıyafet seçimimi, cilt rahatlığımı, oturma-yürüme hissimi ve günlük hareketimi de değiştiriyor mu? Yanıt netleştiğinde cerrahi ve cerrahi dışı seçenekleri daha gerçekçi bir yerden değerlendirmek mümkün olur.',
    },
  ],
  '/beden-yakinlik/menopoz-sonrasi-genital-estetik/': [
    {
      question: 'Menopoz sonrası genital bölgede değişim olması normal mi?',
      answer:
        'Bazı kadınlarda doku incelmesi, elastikiyet azalması veya hacim kaybı görülebilir. Vulvanın şekli ve büyüklüğü de kişiden kişiye değişir; tek bir doğru görünüm yoktur. Yeni yara, kitle, geçmeyen kaşıntı ya da kanama varsa bunu olağan yaşlanmaya bağlamadan hekim değerlendirmesi alın.',
    },
    {
      question: 'Her genital bölge değişimi labioplasti gerektirir mi?',
      answer:
        'Hayır. Görünüm farkı ameliyat gerekliliğini göstermez. Kuruluk, yanma veya ilişki sırasında ağrı varsa önce yakınmanın nedeni araştırılır; cerrahi ancak belirli bir anatomik rahatsızlık için yararları, riskleri ve alternatifleri değerlendirilerek konuşulur.',
    },
    {
      question: 'Labioplasti yalnızca estetik bir işlem midir?',
      answer:
        'Görünüm isteğinin yanında, bazı kişilerde kıyafet veya spor sırasında sürtünme ve çekilme gibi fiziksel yakınmalar da değerlendirmeye alınır. Bu yakınmanın hangi dokudan kaynaklandığı muayenede araştırılmalıdır. Beklenen yarar, yakınmanın nedeni ve işlemin riskleriyle birlikte değerlendirilir.',
    },
    {
      question: 'Büyük dudaklarda hacim kaybı için yağ enjeksiyonu nasıl bir seçenektir?',
      answer:
        'Kişinin kendi yağ dokusunun alınarak büyük dudaklara aktarılması, hacim kazandırmayı amaçlayan cerrahi bir girişimdir. Aktarılan yağın bir kısmı zamanla azalabilir; sonuç ve iyileşme kişiden kişiye değişir. Çalışmalar az sayıda ve çoğunlukla gözlemseldir; özellikle menopoz sonrası kadınlarda uzun dönem yarar ve güvenlik konusunda veriler sınırlıdır.',
    },
    {
      question: 'Bu konuda ilk görüşmede hangi soruyu sormak gerekir?',
      answer:
        '“Bu değişim günlük hayatımda neyi etkiliyor?” sorusuyla başlayabilirsiniz. Yakınmanın ne zaman başladığını, hangi hareketlerde arttığını ve kuruluk ya da ağrı eşlik edip etmediğini anlatın. Ardından önerilen seçeneğin hangi yakınmayı hedeflediğini, alternatiflerini ve risklerini sorun.',
    },
  ],
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
        'Hayır. Bazı kadınlarda asıl amaç görünümden çok ağrıyı, meme altı tahrişini veya hareket güçlüğünü azaltmaktır. Ancak bu, işlemin herkese uygun olduğu anlamına gelmez; kişisel tıbbi değerlendirme gerekir.',
    },
    {
      question: 'Meme küçültme ameliyatından sonra ne zaman egzersize dönebilirim?',
      answer:
        'Günlük etkinliklere dönüş çoğunlukla birkaç hafta sürer. Ağır egzersiz ve yük kaldırma için yaklaşık altı haftalık bir kısıtlama gerekebilir; şişliğin azalması ve memenin son şeklini alması daha uzun sürebilir. Bunlar genel sürelerdir; sizin takviminiz yara iyileşmenize göre cerrahınızla birlikte belirlenir.',
    },
    {
      question: 'Hormon tedavisi (HRT) kullanıyorsam meme küçültmeyi konuşabilir miyim?',
      answer:
        'Evet, konuşabilirsiniz; HRT kullanımı ameliyat öncesi değerlendirmede gözden geçirilen konulardan biridir. Kullandığınız diğer ilaçlar, önceki meme hastalıkları ve yaşa uygun mamografi ya da tarama durumu da bu değerlendirmeye girer. HRT’yi sürdürüp sürdürmemek ayrı bir karardır; tedavinizi kendi başınıza değiştirmeden hekiminizle konuşmanız gerekir.',
    },
  ],
  '/beden-yakinlik/menopoz-sonrasi-goguslerdeki-degisim/': [
    {
      question: 'Meme dikleştirme ameliyatından sonra göğüsler yeniden sarkar mı?',
      answer:
        'Evet, zaman içinde yeniden sarkma olabilir. Meme dikleştirme ameliyatı yaşlanmayı durdurmaz. Yerçekimi, cilt elastikiyetinin azalması, kilo değişiklikleri ve gebelik gibi faktörler memenin şeklini zamanla değiştirebilir. Ancak bu, mutlaka ameliyat öncesindeki kadar sarkacağı anlamına gelmez. Özellikle kilonun sabit tutulması, elde edilen sonucun daha uzun süre korunmasına yardımcı olur.',
    },
    {
      question: 'Silikon protezde yırtılma fark edilmeden gelişebilir mi?',
      answer:
        'Evet. Hatta silikon protez yırtılmalarının önemli bir bölümü hiçbir belirti vermeden gelişir. Buna sessiz yırtılma diyoruz. Meme şeklinde değişiklik, ağrı veya sertlik olmayabilir; muayenede bile fark edilmeyebilir. Bu nedenle FDA, silikon protezi olan kadınlara ameliyattan 5–6 yıl sonra ilk ultrason veya MR kontrolünü, ardından 2–3 yılda bir görüntülemeyi öneriyor. Şüpheli durumlarda ise özellikle kontrastsız MR tercih edilir. Yani protezde herhangi bir sorun hissetmemek, protezin mutlaka sağlam olduğu anlamına gelmez.',
    },
    {
      question: 'Menopoz sonrası estetik ameliyat kararı alırken yaş tek başına bir engel midir?',
      answer:
        'Yaş tek başına bir engel değildir. Yaşın yanı sıra genel sağlık durumu, kronik hastalıkların kontrolü, yara iyileşmesi ve anestezi riskleri birlikte değerlendirilir.',
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
        'Normal TSH, hipofiz hastalığı şüphesi olmayan bir yetişkinde tiroid işlevi açısından çoğunlukla güven vericidir. Yorgunluk sürüyorsa uyku, adet kanaması, kullanılan ilaçlar ve diğer belirtiler değerlendirilir; fT4, kan sayımı, ferritin veya glikoz gibi testler bu bulgulara göre seçilir. Anti-TPO, fT3, vitaminler ve açlık insülini herkese gereken bir yorgunluk paneli değildir. 45 yaş ve üzerinde tipik perimenopoz belirtilerini açıklamak için rutin FSH ve östradiol ölçümü gerekmez.',
      sourceRef: 7,
    },
    {
      question: "Anti-TPO pozitif çıktı ama tiroid hormonum normal — Hashimoto'm var mı?",
      answer:
        'Anti-TPO pozitifliği tiroid bezine karşı gelişen otoantikorları gösterir ve Hashimoto tiroiditiyle uyumlu olabilir. TSH ve fT4 normal olduğunda sırf antikor pozitif diye tiroid hormonu tedavisi başlanmaz. İzlemde asıl bakılan tiroidin çalışmasıdır; antikor düzeyini tekrar tekrar ölçmek genellikle gerekmez. TSH kontrolünün aralığı önceki sonuçlara ve belirtilere göre belirlenir.',
      sourceRef: 1,
    },
    {
      question: 'Hormon replasman tedavisi (HRT) tiroid takibimi değiştirir mi?',
      answer:
        'Özellikle ağızdan alınan östrojen, tiroid hormonunu taşıyan TBG proteinini artırır. Levotiroksin kullanan bazı kadınlarda fT4 azalabilir, TSH yükselebilir ve dozun yeniden değerlendirilmesi gerekebilir. Deriden uygulanan östrojende bu etki daha sınırlıdır. Tiroid ilacı kullanıyorsanız hormon tedavisine başlarken veya uygulama yolu değişirken kontrol zamanını hekiminizle belirleyin; dozu kendiniz değiştirmeyin.',
      sourceRef: 6,
    },
    {
      question: 'Perimenopozda TSH neden değişken çıkıyor?',
      answer:
        'TSH günün saati, laboratuvar ölçümü, eşlik eden hastalıklar ve ilaçlardan etkilenebilir. Değişen bir sonucu doğrudan perimenopoza bağlamak yerine önce bu koşullar ve tiroid işlevi değerlendirilir. Biyotin içeren takviyeleri de hekiminize bildirin; bazı ölçümleri yanıltabilirler. Testin tekrarı gerekiyorsa zamanı bulguya göre seçilir; her değişken sonuç aynı kontrol takvimini gerektirmez.',
      sourceRef: 7,
    },
    {
      question: 'Tiroid ilacı ile menopoz ilaçları aynı anda alınabilir mi?',
      answer:
        'Aynı tedavi döneminde kullanılabilirler; ancak bu, bütün ilaçların aynı saatte alınacağı anlamına gelmez. Levotiroksin için yaygın kullanım aç karnına, kahvaltıdan 30–60 dakika öncedir. Kalsiyum ve demir içeren ürünlerle en az 4 saat ara gerekir; bunlar ilacın emilimini azaltabilir. Kullandığınız ürünün talimatına uyun ve diğer ilaçların saatlerini hekim veya eczacınızla planlayın.',
      sourceRef: 9,
    },
  ],
  '/zamansiz-yasam/40-sonrasi-diz-agrisi-izlem-mudahale/': [
    {
      question: 'Dizimde ağrı varken yürüyüş yapabilir miyim?',
      answer:
        'Diz osteoartritinde hareket ve egzersiz, kişiye uygun süre ve yükle planlanır; başlangıçta bir miktar ağrı olabilir. Yeni travma, belirgin şişlik, kilitlenme veya üzerine basamama varsa önce değerlendirme gerekir. Yürüyüş süresini ve temponuzu mevcut tanınız ve egzersiz planınıza göre belirleyin.',
    },
    {
      question: "MR'da menisküs yırtığı yazıyorsa ameliyat şart mı?",
      answer:
        'Hayır; rapordaki bulgu tek başına ameliyat kararı verdirmez. Yaşla ilişkili dejeneratif yırtıklarla yeni travma sonrası oluşan akut yırtıklar aynı şekilde değerlendirilmez. Diziniz gerçekten kilitlenmiş ve açılamıyorsa, genel izlem süresinin dolmasını beklemeden değerlendirme alınmalıdır.',
    },
    {
      question: 'Kilo vermek gerçekten diz ağrısını azaltır mı?',
      answer:
        'Diz osteoartriti olan ve fazla kilo ya da obeziteyle yaşayan kişilerde kilo yönetimi ağrı ve işlev açısından yarar sağlayabilir. Bu öneri, normal kilodaki herkesin kilo vermesi gerektiği anlamına gelmez. Diz ağrısının nedeni ve size uygun hedef birlikte değerlendirilir.',
    },
    {
      question: 'Ne kadar süre konservatif plan denenmeli?',
      answer:
        'Cerrahi dışı tedavi için bütün diz ağrılarına uyan tek bir süre yoktur. Kontrol zamanı tanıya, belirtilere ve tedaviye yanıta göre belirlenir. Yeni kilitlenme, hızla artan şişlik veya belirgin kötüleşme olduğunda planlanan kontrol tarihini beklemeyin.',
    },
  ],
  '/zamansiz-yasam/belden-gelen-agri-kasik-genital-bolge/': [
    {
      question: 'Kasık ağrısı yaşıyorsam önce jinekoloji mi yoksa fizyoterapi mi düşünmeliyim?',
      answer:
        'Bel ağrısıyla birlikte yeni genital uyuşma, idrar yapamama, idrar-dışkı kontrolünde kayıp ya da hızla ilerleyen güçsüzlük varsa acil değerlendirme gerekir. Yeni pelvik ağrıya ateş, olağandışı kanama veya akıntı ya da idrar yaparken yanma eşlik ediyorsa aynı gün hekim değerlendirmesi alın. Hareketle değişen yakınmalarda kas-iskelet değerlendirmesi de yapılabilir; hareketle ilişki jinekolojik veya ürolojik nedenleri dışlamaz.',
    },
    {
      question: 'Bel kaynaklı ağrı genital bölgede gerçekten hissedilebilir mi?',
      answer:
        'Genital bölgedeki sinir yakınmalarında omurgayla ilişkili nedenler de araştırılabilir; ancak genital ağrıyı yalnızca belde bir sorun bulunmasına bağlamak doğru olmaz. Pelvik sinirler, pelvik taban ve pelvik organlarla ilgili nedenler birlikte değerlendirilir. Belin ağrıdaki rolü, yakınmanın yerine veya tarifine bakılarak değil, öykü ve muayeneyle belirlenir.',
    },
    {
      question: 'MR temizse ağrının mekanik olmadığı sonucuna varılır mı?',
      answer:
        'Hayır. MR belirli yapısal sorulara yanıt verir; normal bir bel MR’ı ağrıyı veya bütün pelvik nedenleri dışlamaz. Sinir hassasiyeti, kas işlevi ve pelvik tabanla ilgili yakınmalar öykü ve muayeneyle birlikte değerlendirilir. Yeni acil belirtiler varsa önceki MR’ın normal olması beklemek için gerekçe değildir.',
    },
    {
      question: 'Evde dinlenmek mi, hareket etmek mi daha doğru olur?',
      answer:
        'Acil belirtiler varsa evde hareket denemek yerine değerlendirme alın. Kas-iskelet kaynaklı bel ağrısında, kapasitenize uygun günlük etkinlikleri sürdürmek uzun süreli yatak istirahatine tercih edilir; ağrıyı belirgin artıran yüklenmeyi zorlamayın. Yeni veya nedeni bilinmeyen genital ağrıda ise hazır bir egzersiz programı uygulamadan önce hekim değerlendirmesi gerekir.',
    },
  ],
  '/zamansiz-yasam/yuz-mudahalesi-olcu-sorusu/': [
    {
      question: 'Erken mi, geç mi kalıyorum?',
      answer:
        'Tek bir yaş cevabı yok. Uygunluk, yüzünüzdeki değişime, beklentinize ve sağlık durumunuza bağlı. Bir işlemi yalnızca belirli bir yaşa geldiğiniz için yaptırmanız gerekmez.',
    },
    {
      question: 'Arkadaşımda iyi sonuç veren işlem bende neden farklı sonuç verir?',
      answer:
        'Cilt özellikleri, yağ ve kemik desteği, mimikler ve iyileşme süreci kişiden kişiye değişir. Başkasında gördüğünüz sonuç, sizin yüzünüzde elde edilecek sonucu göstermez.',
    },
    {
      question: 'Daha az müdahaleyle daha iyi sonuç almak mümkün mü?',
      answer:
        'Müdahale sayısı tek başına sonucu belirlemez. Önemli olan, düşündüğünüz işlemin hangi değişimi hedeflediği ve bu hedef için gerekli olup olmadığıdır. Küçük bir işlem de risk taşır; daha az işlem, herkes için daha iyi sonuç garantisi değildir.',
    },
    {
      question: 'Müdahale yaptırmazsam yüzüm hızla kötüye gider mi?',
      answer:
        'İşlem yaptırmamak, yüzünüzün hızla kötüye gideceği anlamına gelmez. Yaşlanma doğal biçimde devam eder; hız ve görünüm kişiden kişiye değişir. Müdahale yaptırmamayı seçebilirsiniz.',
    },
    {
      question: 'Karar verirken kendime hangi soruyu sormalıyım?',
      answer:
        '“Bu kararı kim veriyor: ben mi, yoksa çevremden duyduğum yorumlar mı?” diye sorabilirsiniz. Ne istediğiniz henüz net değilse karar vermek için kendinize zaman tanıyın. Görüşmeye gitmek de işlem yaptırma zorunluluğu doğurmaz.',
    },
  ],
  '/zamansiz-yasam/vitaminler/magnezyum-menopozda-ne-ise-yarar/': [
    {
      question: "Magnezyum menopozda herkese gerekli bir takviye midir?",
      answer:
        "Hayır. Menopoza giren her kadının magnezyum takviyesi kullanması gerektiğini düşünmüyorum. Magnezyum kasların, sinir sisteminin ve kemiklerin sağlıklı çalışması için önemli bir mineral. Ancak menopoz başlaması, tek başına magnezyum eksikliği olduğu anlamına gelmez.\n\nBen önce hastanın nasıl beslendiğine bakarım. Yeşil yapraklı sebzeler, kuru baklagiller, kuruyemişler ve tam tahıllar magnezyum açısından zengin besinlerdir. Beslenmeyle yeterli miktarda alınıyorsa ayrıca takviye kullanmak çoğu zaman gerekli değildir.\n\nAncak yetersiz beslenen, bağırsaklardan emilim sorunu olan veya magnezyum düzeyini etkileyebilecek bazı ilaçları uzun süre kullanan kadınlarda takviye düşünülebilir.\n\nMagnezyumu menopozun standart bir tedavisi olarak görmüyorum. Sıcak basmalarını, gece terlemelerini veya menopozun diğer belirtilerini belirgin biçimde azalttığına ilişkin güçlü kanıtlarımız yok.\n\nBenim yaklaşımım, menopozdaki her kadına bir takviye listesi vermek yerine gerçekten neye ihtiyacı olduğunu değerlendirmek.",
    },
    {
      question: "Uyku için magnezyum gerçekten işe yarar mı?",
      answer:
        "Menopoz döneminde uyku sorunu yaşayan kadınlardan magnezyumla ilgili çok soru alıyorum. Bazı hastalar kullandıklarında daha rahat uyuduklarını söylüyor. Bunun mümkün olduğunu düşünüyorum, ancak bilimsel araştırmalar henüz herkese önerebileceğimiz kadar güçlü sonuçlar vermiyor.\n\nMagnezyum glisinatla yapılan çalışma sayısı az. Uyku şikâyeti olan sağlıklı erişkinlerde yapılan bir randomize çalışmada küçük bir iyileşme gösterildi; diğer magnezyum tuzlarıyla yapılan çalışmalarda sonuçlar tek yönde değil.\n\nBenim için burada asıl soru, kadının neden uyuyamadığıdır. Gece sıcak basması nedeniyle mi uyanıyor? Kaygı mı yaşıyor? Yoksa uzun süredir devam eden bağımsız bir uykusuzluk sorunu mu var?\n\nÖrneğin gece terlemeleri nedeniyle defalarca uyanan bir kadında yalnızca magnezyum vermek yerine, öncelikle menopoz belirtilerini tedavi etmeyi düşünürüm.\n\nBeslenmeyle yeterince magnezyum alamayan veya eksiklik riski bulunan bir kadında takviye uygun olabilir. Ancak magnezyumu uyku ilacının yerine geçen, etkisi kanıtlanmış bir tedavi olarak sunmam.\n\nÖzellikle uzun süren uykusuzlukta önemli olan, doğru magnezyumu seçmekten önce uykuyu bozan nedeni bulmaktır.",
    },
    {
      question: "Hangi magnezyum formu daha iyi? Glisinat mı, sitrat mı?",
      answer:
        "Bu sorunun herkes için geçerli tek bir cevabı yok. Çünkü farklı magnezyum formlarının emilimi, bağırsaklar üzerindeki etkileri ve kullanım amaçları birbirinden farklı.\n\nÖrneğin magnezyum sitrat, emilimi iyi olan formlardan biridir. Ancak bağırsakta su tutarak etki eden bir laksatif olduğu için bazı hastalarda bağırsak hareketlerini artırabilir. Kabızlığı olan bir hastada bu özellik bazen avantaj sağlayabilirken, hassas bağırsakları bulunan bir kadında sorun yaratabilir.\n\nMagnezyum glisinat ise genellikle bağırsaklar açısından daha iyi tolere edilen seçeneklerden biridir. Bu nedenle takviye gerektiğinde, özellikle sindirim sistemi şikâyetleri olan hastalarda değerlendirebilirim. Ancak glisinatın diğer formlardan daha iyi uyku sağladığı kesin olarak gösterilmiş değil.\n\nMagnezyum oksit de yaygın kullanılıyor. Oksidin emilimi için çalışmalar tutarlı değil; bu yüzden tek bir formu üstün saymıyorum. Bağırsak yan etkileri ise oksitte görülebilir.\n\nPiyasada beyin sağlığı, hafıza veya uyku için özellikle önerilen başka magnezyum çeşitleri de var. Ancak bunlarla ilgili pazarlama iddiaları, çoğu zaman elimizdeki bilimsel kanıtlardan daha ileri gidiyor.\n\nBen magnezyum seçerken yalnızca ürünün adına değil, içerdiği gerçek magnezyum miktarına, hastanın böbrek fonksiyonlarına, kullandığı ilaçlara ve takviyeyi neden kullanacağına bakarım.\n\nÇünkü gereğinden fazla magnezyum almak da zararsız değildir. Özellikle böbrek fonksiyonu bozuk olan hastalarda dikkatli olmak gerekir.\n\nBenim için en iyi magnezyum, en pahalı veya en çok reklamı yapılan ürün değil; gerçekten ihtiyacı olan hastanın uygun dozda ve iyi tolere edebileceği formdur.",
    },
    {
      question: "Magnezyum zararsız bir takviye midir?",
      answer:
        "Hayır. Magnezyum vücudumuz için gerekli bir mineral ama bu, takviye olarak ne kadar alınırsa alınsın zararsız olduğu anlamına gelmiyor.\n\nBen hastalarıma özellikle şunu anlatıyorum: Bir maddenin doğal olması veya vücutta bulunması, yüksek dozlarının güvenli olduğu anlamına gelmez.\n\nMagnezyum takviyelerinin en sık karşılaştığımız yan etkileri ishal, karın ağrısı ve bulantıdır. Ancak özellikle böbrek fonksiyonları bozuk olan kadınlarda fazla magnezyum vücutta birikebilir. Ağır durumlarda tansiyon düşüklüğüne, kas güçsüzlüğüne ve kalp ritim bozukluklarına kadar giden ciddi sorunlar oluşturabilir.\n\nBir diğer konu ilaç etkileşimleri. Magnezyum içeren antasitler bazı antibiyotiklerin, magnezyum ise tiroid ilaçlarının ve osteoporoz tedavisinde kullanılan ilaçların emilimini azaltabilir. Bu nedenle hangi saatte alındığı da önemlidir.\n\nBenim yaklaşımım, magnezyumu zararsız olduğu düşüncesiyle herkese önermek değil, gerçekten gerekli olup olmadığını ve hangi dozda kullanılacağını değerlendirmek.\n\nÖzellikle menopoz döneminde birden fazla takviye kullanan kadınlarda toplam magnezyum miktarına dikkat ederim. Çünkü farklı ürünlerin içinde farkında olmadan aynı mineral bulunabilir.\n\nSağlıklı bir kadında besinlerden alınan magnezyumu kısıtlamamız genellikle gerekmez. Ancak takviye olarak alınan magnezyum için aynı şeyi söyleyemeyiz.\n\nKısacası, magnezyum gerekli bir mineraldir ama gereksiz magnezyum takviyesi de gereksiz bir tedavidir.",
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
      question: 'HRT kilo, cilt, saç ve yaşlanma karşıtı beklentiler için karar nedeni olmalı mı?',
      answer:
        'HRT’yi kilo verdiren, saçı geri getiren ya da yaşlanmayı durduran bir tedavi gibi düşünmek doğru değildir. Bazı kadınlarda bel çevresi, cilt kuruluğu, doku konforu veya saç kalitesi tarafında ikincil bir yumuşama görülebilir; ancak bu alanlardaki kanıt, sıcak basması, vajinal doku konforu veya kemik sağlığı kadar güçlü değildir. Bu yüzden karar önce daha net ve kanıtı güçlü menopoz hedefleri üzerinden verilmelidir.',
    },
  ],
  '/beden-yakinlik/cilt-gorunum/menopozda-cilt-degisimleri/': [
    {
      question: 'Menopozda cilt kuruluğu ve hassasiyet artabilir mi?',
      answer:
        'Evet, özellikle kuruluk belirginleşebilir; cilt daha kolay tahriş olabilir ve kızarıklık ya da döküntü eğilimi artabilir. Nemlendiriciyi banyodan sonra ve gün içinde cildiniz kurudukça kullanmak, parfümsüz ürünler seçmek yardımcı olabilir. Buna rağmen süren kuruluk veya tahrişte nedenin değerlendirilmesi gerekir.',
    },
    {
      question: 'Güneş koruyucuyu kışın da kullanmak gerekir mi?',
      answer:
        'Evet, güneş koruması yalnızca yaz tatiline ait bir alışkanlık değildir. Kışın da dışarı çıkmadan önce giysinin örtmediği yüz, boyun ve el üstü gibi alanları korumak gerekir.',
    },
    {
      question: 'Kolajen takviyesi herkes için gerekli midir?',
      answer:
        'Hayır, rutin kullanımını önermek için yeterli kanıt yoktur. Önerilen bir takviyeyi değerlendirirken ürünün hangi sonuç için incelendiğini ve araştırmanın ne kadar güvenilir olduğunu sorabilirsiniz; bu ayrımı yazının kolajen bölümünde açıklıyorum.',
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
      question: 'Menopoza yaklaşırken herkese geniş bir hormon paneli gerekir mi?',
      answer:
        'Hayır. Hangi testin gerektiği yaşınıza, adet düzeninize, belirtilerinize ve sağlık öykünüze göre belirlenir. Başka bir sağlık sorunu olmayan, tipik menopoz belirtileri yaşayan 45 yaş ve üzerindeki kadınlarda değerlendirme genellikle hormon testi olmadan yapılabilir.',
    },
    {
      question: 'FSH yüksek çıktıysa bu tek başına menopoza girdiğim anlamına mı gelir?',
      answer:
        'Hayır. FSH özellikle menopoza geçiş döneminde dalgalanabilir. Sonuç yaşınız, adet düzeniniz, belirtileriniz ve kullandığınız hormonal ilaçlarla birlikte yorumlanır; başka bir ölçüm gerekip gerekmediğine hekiminiz karar verir.',
    },
    {
      question: 'Kontrol dosyasına hangi notları eklemek görüşmeyi kolaylaştırır?',
      answer:
        'Adet tarihlerindeki değişimleri, sıcak basmasının sıklığını, uyku bölünmelerini, kullandığınız ilaç ve takviyeleri not edebilirsiniz. Aile öykünüzü ve son tarama tarihlerinizi de ekleyin. Belirtilerin ne zaman başladığını ve günlük hayatınızı nasıl etkilediğini yazmanız, görüşmede ayrıntıları hatırlamanızı kolaylaştırır.',
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
      question: 'Menopozda libido azalması herkeste olur mu?',
      answer:
        'Hayır. Menopozda cinsel istekte azalma sık görülür ama her kadının yaşamak zorunda olduğu bir kural değildir. Poliklinikte en sık karşılaştığımız, ama kadınların dile getirmekte en çok tereddüt ettiği konulardan biri bu. İsteğin azalması tek başına bir hastalık anlamına gelmez; benim için önemli olan, bu değişimin sizi rahatsız edip etmediğidir.',
    },
    {
      question: 'Vajinal östrojenin tüm vücuda etkisi var mı, güvenli mi?',
      answer:
        'Düşük doz vajinal östrojen ile sistemik hormon hapları aynı şey değildir. Göz kuruluğunda hap yerine göz damlası kullanmak gibi, vajinal östrojen de esas olarak kuruyan ve incelen vajina ile idrar yolu dokusuna lokal olarak etki eder. En düşük dozlu vajinal tabletlerde bir yıllık toplam hormon miktarı, tek bir menopoz hapındakine ancak denk gelir. Kana geçen miktar çok düşüktür; düşük dozlarda rahim iç zarını kalınlaştırdığı ya da pıhtı riskini artırdığı gösterilmemiştir. Amaç, canınızı yakan dokunun esnekliğini ve nemini geri kazandırmaktır. Östrojene duyarlı meme kanseri geçirdiyseniz kararı daha dikkatli verir, onkoloğunuzla birlikte değerlendiririz.',
    },
    {
      question: 'Antidepresan kullanıyorum, libido azlığını ona mı bağlamalıyım?',
      answer:
        'Olabilir. Bazı antidepresanlar kaygıyı ve üzüntüyü yatıştırırken, arzu ve heyecanla ilişkili dopamin gibi kimyasalların etkisini de azaltabilir. Değişim ilaca başladıktan ya da doz değiştikten sonra ortaya çıktıysa bu olasılığı düşünürüz. Ancak ilacı kendi başınıza aniden kesmeyin; aniden bırakmak çekilme belirtilerine ve depresyonun daha şiddetli geri dönmesine yol açabilir. Ruh sağlığınızı korurken cinsel hayatınızı feda etmek zorunda değilsiniz; bunu ilacınızı yazan hekiminizle birlikte ele alırız.',
    },
    {
      question: 'Partnerimle bunu nasıl konuşurum?',
      answer:
        'Konuşmaya “Cinsel isteğim bitti” diye başlamak partnerinizi savunmaya itebilir ya da içine kapanmasına yol açabilir. Önce ona olan sevginizin ve bağlılığınızın değişmediğini söylemek, sonra bedeninizde ve isteğinizde fark ettiğiniz değişimi anlatmak çoğu zaman daha açıklayıcı olur. Örneğin: “Sana olan sevgim ya da seni çekici bulmam değişmedi. Ama bedenimde ve isteğimde bir değişiklik fark ediyorum; bunu birlikte anlamak istiyorum.”',
    },
    {
      question: 'Partnerim yoksa cinsel sağlıkla ilgilenmem gerekir mi?',
      answer:
        'Evet. Vajina ve idrar yollarının sağlığı yalnızca cinsel ilişki için değil; kendi konforunuz, rahat idrar yapabilmeniz ve enfeksiyonlardan korunmanız için de önemlidir. Menopozla gelişen doku değişiklikleri kuruluk, hassasiyet, idrar yakınmaları ve tekrarlayan idrar yolu enfeksiyonlarıyla ilişkili olabilir; ileride yapılacak rutin muayeneleri de ağrılı hâle getirebilir. Belirtileriniz varsa nemlendiriciler ya da gerektiğinde düşük doz lokal tedavi, cildinize ya da dişlerinize gösterdiğiniz özen gibi temel öz bakımın parçasıdır.',
    },
  ],
  '/hormonal-gecis/menopoz/hrt-yan-etkileri-ve-izleme/': [
  {
    "question": "HRT’nin hafif yan etkileri ne kadar sürebilir?",
    "answer": "Meme hassasiyeti, şişkinlik, baş ağrısı, bulantı ve lekelenme gibi hafif yan etkiler çoğunlukla ilk 2–3 ay içinde azalır. Tolere edilebiliyorsa bir süre izlemek veya doz ya da ilaç türünü ayarlamak mümkündür. Ancak şiddetli veya giderek artan baş ağrısı, göğüs ağrısı ya da nefes darlığı, tek taraflı bacak şişliği, sarılık veya belirgin ve yoğun vajinal kanamada beklemeyi önermem; değerlendirme gerekir. Tedavinin etkinliği ve tolere edilip edilmediği yaklaşık üçüncü ayda yeniden değerlendirilir."
  },
  {
    "question": "HRT’nin ilk aylarındaki kanamayı nasıl değerlendirirsiniz?",
    "answer": "HRT’nin tipi önemlidir. Döngüsel (sekansiyel) tedavide progesteron döneminden sonra düzenli çekilme kanaması beklenebilir. Sürekli kombine HRT’de ise ilk aylarda düzensiz lekelenme sık görülür ve çoğu kez 4–6 ay içinde azalır. Kanamanın miktarını ve düzenini, HRT’ye ne zaman başlandığını, progesteronun dozunu ve düzenli kullanılıp kullanılmadığını, rahim iç tabakası (endometrium) kanseri açısından kişisel riskleri birlikte değerlendiririm. Kanama HRT başladıktan sonra altı aydan uzun süre devam ediyorsa, tedavi değişikliğinden üç ay sonra hâlâ sürüyorsa veya başlangıçtan itibaren çok yoğun ya da uzamışsa ultrason ve gerektiğinde ileri değerlendirme yapılmalıdır."
  },
  {
    "question": "HRT’de kontrol sıklığını ve gerekli tetkikleri nasıl belirlersiniz?",
    "answer": "Genellikle HRT’ye başladıktan veya önemli bir değişiklik yaptıktan üç ay sonra, ardından sorun yoksa yılda en az bir kez kontrol yeterlidir. Kontrolde belirtilerin ne kadar düzeldiğini, yan etkileri, kanama düzenini, tansiyonu, kiloyu ve beden kitle indeksini (BMI), yeni gelişen riskleri değerlendiririm. Her kontrolde rutin hormon düzeyi ölçmek gerekmez. Kan yağları, kan şekeri/HbA1c, karaciğer veya tiroid testleri yaşa, önceki sonuçlara, kullanılan tedaviye ve kişisel risklere göre istenir. Mamografi, rahim ağzı taraması ve diğer koruyucu kontroller de HRT nedeniyle daha sık yapılmaz; yaşa ve kişisel risklere uygun programda sürdürülür."
  },
  {
    "question": "Evde hangi belirtileri, nasıl kaydetmek yararlı olur?",
    "answer": "Evde çok ayrıntılı bir günlük tutmak gerekmez. Kanama ve lekelenme günlerini ve miktarını; sıcak basması, gece terlemesi, uyku, baş ağrısı, meme hassasiyeti, şişkinlik ve ruh halindeki değişiklikleri kısa notlarla kaydedebilirsiniz. Tedavinin belirtilerinize etkisini de not edin. Özellikle yeni başlayan veya giderek artan belirtilerin tarihi önemlidir. Böylece yan etkinin gerçekten HRT ile ilişkili olup olmadığını ve zaman içinde azalıp azalmadığını daha iyi değerlendiririz."
  },
  {
    "question": "Yan etki geliştiğinde tedavinin uygunluğunu ve değişiklik ihtiyacını nasıl değerlendirirsiniz?",
    "answer": "Yan etki geliştiğinde önce hangi hormonun, dozun ve uygulama yolunun sorumlu olabileceğine bakarım. Östrojen dozu fazla geliyorsa azaltmak, progesterona bağlı şikâyetlerde progesteron tipini veya kullanım şeklini değiştirmek, ağızdan alınan tedavide sorun varsa cilt yoluyla uygulamaya geçmek düşünülebilir. Aynı zamanda tedavinin hâlâ gerekli olup olmadığını, belirtilere ne kadar fayda sağladığını ve kişinin damar içinde pıhtı (tromboz), migren, karaciğer hastalığı, meme ve rahim iç tabakası (endometrium) açısından risklerini yeniden değerlendiririm. Amaç yan etkiyi tolere ettirmek değil, en düşük etkili dozla kişiye en uygun ilaç türünü ve uygulama yolunu bulmaktır."
  }
],
  '/zamansiz-yasam/deneysel/nad-plus-takviyesi/': [
    {
      question: "NAD+ takviyeleri menopozda enerji için kanıtlı bir çözüm müdür?",
      answer: "Benim için ilk soru, NAD+ düzeyini artırmanın hastaya gerçekten ne kazandıracağıdır. Bir maddenin kandaki veya hücrelerdeki NAD+ düzeyini yükseltmesi, kişinin daha enerjik olacağı, daha yavaş yaşlanacağı veya menopoz belirtilerinin düzeleceği anlamına gelmiyor.\n\nNR ve NMN gibi takviyelerin biyolojik etkilerini gösteren çalışmalar var. Ancak insanlarda yorgunluğu azalttıkları, kas gücünü korudukları veya sağlıklı yaşam süresini uzattıkları henüz güvenilir biçimde kanıtlanmış değil. Bugünkü kanıtlarla NAD+ takviyelerini menopoz veya yaşlanma karşıtı tedavinin rutin bir parçası olarak önermiyorum.",
    },
    {
      question: "Bir takviyenin NAD+ düzeyini artırması güvenli olduğunu gösterir mi?",
      answer: "Hayır. Bir takviyenin kandaki NAD+ düzeyini artırması, hem yararlı hem de güvenli olduğunu göstermez. Kısa süreli araştırmalarda NMN ve NR genel olarak iyi tolere ediliyor; yıllarca kullanıldıklarında neler olacağını henüz yeterince bilmiyoruz.\n\nKullanmak isteyen hastada diğer ilaç ve takviyeleri, karaciğer ve böbrek hastalığı olup olmadığını, kanser öyküsünü ve gebelik planını değerlendiririm. Aktif kanser tedavisi görenlerde daha temkinli olurum. NAD+ hücrelerin enerji üretimi ve onarımında rol oynuyor; bu süreçleri artırmanın kanser üzerindeki uzun dönem etkilerini henüz yeterince bilmiyoruz. Bu, NMN veya NR'nin insanlarda kansere neden olduğunun kanıtlandığı anlamına gelmez. Gebelik planlayan, hamile veya emziren kadınlarda kanıtlanmış bir ihtiyaç olmadan bu ürünleri önermem.\n\nÜrünün içeriğinin doğrulanması ve üretim kalitesinin denetlenmesi de önemli. NMN veya NR yazan her kutunun aynı kaliteye, saflığa ve güvenilirliğe sahip olduğunu varsayamam. Araştırmalarda kullanılan miktarların üzerinde almanın daha fazla yarar sağladığı gösterilmiş değil; uzun süreli yüksek dozların güvenliği hakkında da yeterli bilgi yok.\n\nBenim yaklaşımım, hastaya yalnızca takviyenin ne yapabildiğini değil, henüz neleri bilmediğimizi de anlatmak.",
    },
    {
      question: "NMN veya NR kullanmayı düşünürken ilk hangi soruyu sorarsınız?",
      answer: "Ben önce hastanın neden bu takviyeyi kullanmak istediğini anlamaya çalışırım. Yorgunluk mu yaşıyor, uyku sorunu mu var, yoksa yaşlanmayı geciktirmek mi istiyor? Öncelikle bu sorunların nedenlerini ve etkinliği gösterilmiş tedavi seçeneklerini değerlendiririm.\n\nBenim için tedavinin başarısı bir laboratuvar değerinin yükselmesi değil, hastanın sağlığında ölçülebilir ve anlamlı bir iyileşme sağlamasıdır.",
    },
  ],
  '/zamansiz-yasam/deneysel/peptid-kullanimlari-menopoz/': [
    {
      question: "Peptid denince neden tek bir ürün grubundan söz edemiyoruz?",
      answer:
        "Peptid kelimesini son yıllarda özellikle yaşlanma karşıtı tedavilerde çok sık duyuyoruz. Ancak peptid, bir ilacın ne kadar etkili veya güvenli olduğunu anlatan bir kelime değil. Peptidler, aminoasitlerin birbirine bağlanmasıyla oluşan moleküllerdir ve vücudumuzda çok farklı görevler üstlenebilirler.\n\nÖrneğin insülin de bir peptid hormondur. Diyabet ve obezite tedavisinde kullanılan bazı ilaçlar da peptid yapısındadır. Bunların yanında cilt bakım ürünlerinde bulunan kolajen peptidleri ve internette doku onarımı veya gençleşme amacıyla pazarlanan deneysel peptidler var.\n\nBunların hepsine yalnızca peptid oldukları için aynı gözle bakmak büyük bir hata.\n\nBazıları yıllardır kullanılan, etkinliği ve güvenliği klinik araştırmalarla değerlendirilmiş ilaçlar. Bazıları henüz hayvan deneyleri aşamasında. Bazılarının ise insanlarda hangi dozda, ne kadar süreyle ve ne kadar güvenli kullanılabileceğini bilmiyoruz.\n\nBen bir ürünün peptid olmasından çok, ne amaçla kullanıldığına, hangi araştırmalardan geçtiğine ve o kullanım amacı için onaylı olup olmadığına bakarım.\n\nBir maddenin vücudumuzda doğal olarak bulunması veya doğal bir moleküle benzemesi, dışarıdan verildiğinde de güvenli olacağı anlamına gelmez.",
    },
    {
      question: "Menopozda peptidler kilo kaybı veya kas korunması için kanıtlı bir seçenek midir?",
      answer:
        "Burada kilo kaybıyla kas korunmasını birbirinden ayırmak gerekiyor.\n\nÖrneğin semaglutid ve tirzepatid gibi ilaçlar, obezite tedavisinde etkili oldukları büyük klinik araştırmalarla gösterilmiş peptid temelli ilaçlardır. Menopoz dönemindeki bir kadında da, gerekli tıbbi koşulları sağlıyorsa kullanılabilirler.\n\nAncak menopoza girmek, tek başına bu ilaçları kullanmak için bir neden değildir. Öncelikle hastanın kilosuna, bel çevresine, metabolik sağlığına ve eşlik eden hastalıklarına bakarım.\n\nKas korunması ise farklı bir konu.\n\nMenopozla birlikte kas kütlesi ve kas gücünde azalma görülebiliyor. Üstelik hızlı kilo kaybı sırasında yalnızca yağ değil, yağsız vücut dokusunun bir bölümü de kaybedilebiliyor. Bu nedenle kilo verdiren bir ilacın aynı zamanda kasları koruduğunu varsayamayız.\n\nÖzellikle büyüme hormonu salgısını artırdığı iddia edilen bazı peptidler, kas kazanımı veya kas kaybını önleme amacıyla pazarlanıyor. Ancak sağlıklı menopoz dönemindeki kadınlarda bu amaçla kullanılmalarını destekleyen yeterli klinik kanıt yok.\n\nBen kilo vermesi gereken bir kadında yalnızca tartıdaki rakama odaklanmam. Kilo verirken kas gücünü ve fiziksel işlevini koruması da önemli.\n\nBu nedenle uygun beslenmeyi, yeterli protein alımını ve özellikle direnç egzersizlerini tedavinin temel parçaları olarak görüyorum.\n\nBugün için menopozda kas kaybını önlemek amacıyla deneysel peptid enjeksiyonları önermiyorum.",
    },
    {
      question: "BPC-157, thymosin beta-4 veya ipamorelin gibi peptidlerde en büyük belirsizlik nedir?",
      answer:
        "Bu maddeler hakkında internette oldukça iddialı bilgiler dolaşıyor. BPC-157'nin dokuları onardığı, thymosin beta-4'ün iyileşmeyi hızlandırdığı, ipamorelinin ise büyüme hormonu salgısını artırarak kasları güçlendirdiği anlatılıyor.\n\nAncak burada önemli bir ayrım yapmamız gerekiyor: Bir maddenin laboratuvar veya hayvan deneylerinde biyolojik bir etki göstermesi, insanlarda da güvenli ve etkili bir tedavi olduğu anlamına gelmez.\n\nÖrneğin BPC-157 ile ilgili hayvan araştırmaları var. Ancak insanlarda yapılmış çalışmalar çok küçük ve bu maddenin doku onarımı, kas korunması veya yaşlanmayı geciktirme amacıyla kullanılmasını desteklemeye yeterli değil.\n\nThymosin beta-4'ün kendisiyle bazı insan araştırmaları yapılmış olsa da internette TB-500 adıyla satılan kısa peptid parçaları aynı molekül değil. Birindeki araştırma sonucunu diğerine aktaramayız.\n\nİpamorelin ise büyüme hormonu salgılanmasını uyarmak amacıyla geliştirilmiş bir madde. Ancak bunun sağlıklı menopoz dönemindeki kadınlarda kas gücünü artırdığını veya güvenli bir yaşlanma karşıtı tedavi olduğunu gösteren yeterli klinik veri bulunmuyor.\n\nBenim en büyük çekincem yalnızca işe yarayıp yaramamaları değil. Uzun vadeli güvenlikleri, uygun dozları ve başka ilaçlarla etkileşimleri konusunda da önemli bilgi eksiklikleri var.\n\nÜstelik internetten satın alınan bir enjeksiyon ürününün içinde gerçekten etikette yazan maddenin, belirtilen miktarda ve uygun saflıkta bulunduğundan da emin olamayız.\n\nBen bu maddelere araştırılmaya değmez demiyorum. Ancak araştırılıyor olmaları, bugün hastalara tedavi olarak önerilmeleri için yeterli değil.",
    },
    {
      question: "Bir peptid iddiasını reklam dili olmadan değerlendirmek için ilk neye bakarsınız?",
      answer:
        "Benim ilk sorum şu olur: “Bu maddenin insanlarda, tam da iddia edilen amaç için yararlı olduğu gösterilmiş mi?”\n\nÇünkü bir ürünün hücre yenilenmesini desteklediğini veya büyüme hormonu salgısını artırdığını söylemek, o ürünün insanları daha sağlıklı yaşlandırdığını kanıtlamaz.\n\nÖrneğin bir araştırmada kandaki büyüme hormonu düzeyinin artması, kas gücünün arttığı anlamına gelmez. Benzer şekilde bir maddenin hayvanlarda yara iyileşmesini hızlandırması, menopozdaki bir kadında kas kaybını önleyeceğini göstermez.\n\nAraştırmanın nasıl yapıldığı da önemli. Kaç kişi katılmış? Benzer özellikte bir karşılaştırma grubu var mı? Sonuçlar başka araştırmalarda doğrulanmış mı? Yarar yalnızca kan tahlilinde mi görülmüş, yoksa hastanın günlük yaşamına gerçekten yansımış mı?\n\nBir de güvenlik konusu var. Özellikle uzun süre kullanılacak ürünlerde birkaç haftalık bir araştırmanın yeterli olmadığını düşünüyorum.\n\nSon olarak ürünün hangi amaçla ruhsatlandırıldığını ve önerilen kullanımın bu kapsamda olup olmadığını kontrol ederim. Ruhsat dışı kullanımın her zaman yanlış olduğunu söylemiyorum; ancak bunun da hastaya açıklanması ve bilimsel olarak gerekçelendirilmesi gerekir.\n\nBenim için bir tedavinin değeri, ne kadar yeni veya ilgi çekici olduğuyla değil, hastaya sağladığı gerçek yararın ve taşıdığı risklerin ne kadar iyi bilindiğiyle ölçülür.\n\nÖzellikle menopoz ve yaşlanma alanında bu ayrımın çok önemli olduğunu düşünüyorum. Çünkü insanların daha sağlıklı ve uzun yaşama isteği, bilimsel kanıtı yetersiz ürünlerin pazarlanması için kullanılabiliyor.",
    },
  ],
  '/hormonal-gecis/menopoz/sicak-basmasi-gece-terlemesi/': [
    {
      question: 'Sıcak basması ile gece terlemesi aynı şey mi?',
      answer:
        'Sıcak basması ve gece terlemesi, aynı vazomotor belirtilerin farklı zamanlarda ortaya çıkmasıdır. Uykuda olan sıcak basmaları yoğun terleme ve uyanma şeklinde hissedilebilir.',
    },
    {
      question: 'Menopozda sıcak basmasına ne iyi gelir?',
      answer:
        'Serin ortam, katmanlı giyinme ve alkol, çok sıcak içecekler veya baharat gibi kişisel tetikleyicilerden kaçınma konfor sağlayabilir. Orta-ağır şikâyetlerde uygun hastalar için menopoz hormon tedavisi değerlendirilir. Hormon kullanamayan veya istemeyenlerde bazı SSRI/SNRI grubu ilaçlar, gabapentin ve fezolinetant gibi hormon dışı seçenekler vardır.',
    },
    {
      question: 'Sıcak basması neden gece daha şiddetli olabilir?',
      answer:
        'Gece boyunca vücut ısısı doğal olarak değişir; menopozda ısı düzenleme eşiği daralır. Yatak ve oda sıcaklığı da ısı kaybını zorlaştırabildiği için belirtiler gece daha şiddetli hissedilebilir.',
    },
    {
      question: 'Hormon tedavisi dışında seçenekler var mı?',
      answer:
        'Orta-ağır sıcak basması ve gece terlemelerinde bazı SSRI/SNRI grubu ilaçlar, gabapentin ve uygun hastalarda fezolinetant gibi hormon dışı tedaviler kullanılabilir. Kilo kontrolü, serin yatak odası, kişisel tetikleyicilerden kaçınma ve özellikle bilişsel davranışçı terapi bazı hastalarda belirtilerin yarattığı sıkıntıyı azaltabilir. Bitkisel ürünlerin etkinliği ise daha belirsizdir.',
    },
    {
      question: 'Gece terlemesi ne zaman yalnızca menopoza bağlanmamalı?',
      answer:
        'Terlemeler yeni başlamışsa, çok şiddetliyse veya ateş, açıklanamayan kilo kaybı, çarpıntı, titreme, belirgin halsizlik, lenf bezi şişliği ya da gündüzleri yoğun terleme eşlik ediyorsa başka nedenler araştırılmalıdır. Tiroid hastalıkları, enfeksiyonlar, bazı ilaçlar, hipoglisemi, uyku apnesi ve daha nadiren hematolojik hastalıklar benzer belirtilere yol açabilir.',
    },
  ],
  '/bilimsel-pencere/hucreler-ve-yaslanma/nad-plus-hucresel-yaslanma/': [
    {
      question: 'NMN veya NR kullanmak kandaki NAD+ düzeyini gerçekten yükseltir mi?',
      answer:
        'Kısa süreli insan çalışmalarında NMN ve NR gibi öncüllerin kandaki NAD+ göstergelerini artırabildiği görülüyor. Bu artışın kas gücü, düşünme ve hafıza, metabolizma veya uzun yaşam gibi sonuçlara da yansıdığı ise henüz gösterilmedi. Kandaki sayı yükselebilir; bunun sağlığınızda neyi değiştirdiği hâlâ açık bir soru.',
    },
    {
      question: 'NAD+ yükselirse yaşlanma yavaşlar mı?',
      answer:
        'Bugün için bunu söylemek fazla iddialı olur. NAD+ hücresel enerji ve onarım yollarında önemli bir molekül ve bilimsel merakı hak ediyor. Fakat insanda yaşlanmayı yavaşlattığını veya ömrü uzattığını gösteren güçlü, uzun dönem klinik veri henüz yok.',
    },
    {
      question: 'NAD+ öncülleri yumurta kalitesini veya gebelik şansını artırır mı?',
      answer:
        'Fare çalışmalarında ve insandan alınmış yumurta hücreleriyle yapılan laboratuvar çalışmalarında ilgi çekici sinyaller var. Ancak bunlar, takviyeyi ağızdan alan bir kadında gebelik şansının arttığını göstermiyor. Haziran 2026 itibarıyla, kadına NMN veya NR verildiğinde gebelik ya da canlı doğum şansını artırdığını gösteren tamamlanmış ve güçlü bir insan çalışması yok. Gebelik planlıyorsanız bu konuyu kadın hastalıkları ve doğum uzmanınızla konuşmanız iyi olur.',
    },
    {
      question: 'Aldığım ürünün etikette yazan içeriği gerçekten taşıdığını nasıl anlarım?',
      answer:
        'Çevrimiçi satılan bazı NMN ve NAD+ ürünlerinde etiket iddiası ile gerçek içerik arasında ciddi uyumsuzluklar bildirildi; bazılarında iddia edilen miktarın çok azı bulundu, bazılarında hedef bileşik hiç saptanmadı. Lot numarası, analiz sertifikası, üçüncü taraf testi ve üreticinin şeffaflığı bu konuda önemli ipuçları verir. Türkiye’de ürünün takviye edici gıda statüsü ve resmî bildirimi de ayrıca doğrulanmalı.',
    },
  ],
  '/bilimsel-pencere/hucreler-ve-yaslanma/ghk-cu-menopoz-cilt/': [
    {
      question: 'GHK-Cu menopoz cildi için kanıtlanmış bir tedavi midir?',
      answer:
        'GHK-Cu ilgi çekici bir molekül, ancak henüz menopoz cildini gençleştirdiği kanıtlanmış bir tedavi değil. Laboratuvar çalışmalarında kolajen üretimi, doku onarımı ve iltihabi süreçler üzerinde bazı olumlu etkileri gösterilmiş; menopozdaki kadınlarda yeterli kaliteli klinik çalışma bulunmuyor. Uygun formülasyonda ve cilt tarafından iyi tolere edilen bir serum, kozmetik bakımın parçası olabilir. Ancak GHK-Cu enjeksiyonlarını cilt gençleştirme amacıyla önermiyorum; etkinliği, uygun dozu ve uzun dönem güvenliği yeterince araştırılmış değil. Önceliğim güneşten korunma, nem dengesinin korunması ve gerektiğinde etkinliği daha iyi araştırılmış dermatolojik tedavilerdir.',
    },
    {
      question: 'GHK-Cu içeren topikal serum veya krem kullanmak makul olabilir mi?',
      answer:
        'Temel cilt bakımını düzenli yapan bir kadın, GHK-Cu içeren bir serumu isteğe bağlı ek bakım olarak denemek isteyebilir. Ürün güvenilir bir üreticiden gelmeli, içeriği açık olmalı ve cilde uygulanmak üzere hazırlanmış olmalıdır. Araştırma amaçlı peptid tozlarını evde karıştırmayı veya enjeksiyon ürünlerini cilde uygulamayı doğru bulmuyorum. Hassas cilt, egzama veya rozaseada daha dikkatli davranırım. Önce küçük bir bölgede deneyin; kızarıklık, kaşıntı veya yanma gelişirse bırakın. Güneş koruyucusu, nemlendirici ve uygun dermatolojik tedaviler sürdürülmelidir. Başka aktif ürünler kullanılıyorsa yeni serumu tek başına ve kademeli eklemeyi tercih ederim. Olası yararı sınırlıdır; menopozla kaybedilen kolajeni geri kazandırdığına yeterli klinik kanıt yoktur.',
    },
    {
      question: 'GHK-Cu enjeksiyonu neden daha riskli bir başlık?',
      answer:
        'Enjeksiyon cildin koruyucu bariyerini aşar; olası safsızlıklar da doğrudan dokulara verilir. GHK-Cu enjeksiyonlarının güvenli dozu, uygulama sıklığı ve uzun dönem sonuçları yeterince araştırılmış değil. İnternetten alınan ürünlerin saf ve steril olduğundan emin olamayız; enfeksiyon, alerjik reaksiyon ve istenmeyen bağışıklık yanıtları söz konusu olabilir. FDA da kümelenme ve peptidle ilişkili safsızlıklardan kaynaklanabilecek bağışıklık reaksiyonları konusunda uyarıyor. Bu, insanlarda mutlaka ciddi zarar oluştuğunun kanıtı değildir; güvenli olduğunu söylemeye yeterli veri bulunmadığını gösterir. Enjeksiyonun serumdan daha etkili olduğu da kanıtlanmış değil. Bu nedenle cilt gençleştirme veya kolajen artırma amacıyla GHK-Cu enjeksiyonu önermiyorum.',
    },
    {
      question: 'Bakır içermesi toksisite açısından endişe yaratır mı?',
      answer:
        'Bakır gerekli bir mineraldir; miktarı, biçimi ve vücuda giriş yolu önemlidir. Peptide bağlı olması toksisite olasılığını ortadan kaldırmaz. Fazlası oksidatif strese ve organ hasarına yol açabilir; Wilson hastalığı gibi bakır metabolizması bozukluklarında risk önemlidir. Sağlam cilde, uygun konsantrasyonda uygulanan kozmetik GHK-Cu ürünlerinin bakır zehirlenmesine yol açtığını gösteren güvenilir klinik bulgu bulunmuyor; uzun süreli veriler de sınırlı. Enjeksiyonda dağılım ve birikim sorularını yanıtlayan yeterli insan araştırması yok. Karaciğer hastalığı veya bakır metabolizması bozukluğunda daha dikkatli olunmasını düşünüyorum. Topikal ürünleri ayrı değerlendiririm; cilt gençleştirme amacıyla GHK-Cu enjeksiyonu önermiyorum.',
    },
    {
      question: 'GHK-Cu reklamlarında hangi iddialara özellikle temkinli bakılmalı?',
      answer:
        'Menopozda kaybedilen kolajeni geri kazandırma, kırışıklıkları giderme, DNA onarımıyla yaşlanmayı tersine çevirme ve yaşam süresini uzatma vaatlerine temkinli yaklaşırım. Laboratuvardaki biyolojik etki, insanlarda aynı sonucun kanıtı değildir. Küçük çalışmaların sonuçları bütün ürünlere genellenemez; belirli bir yüzde veya birkaç haftada gençleşme vaadinin hangi insan çalışmasına dayandığını görmek isterim. “Doğal olduğu için tamamen güvenli” ve “enjeksiyon kremden daha etkili” iddiaları da yeterince desteklenmiyor. “Klinik olarak kanıtlanmıştır” deniyorsa araştırmanın insanlarda yapılıp yapılmadığına, katılımcı sayısına ve ürünün kendisinin test edilmesine bakarım. GHK-Cu serumunun menopozdaki cilt değişikliklerini düzelttiğini veya dermatolojik tedavilerin yerini tuttuğunu söylemek için erken.',
    },
  ],
  '/zamansiz-yasam/d-vitamini-rehberi/': [
    {
      question: 'D vitamini herkese otomatik takviye olarak mı düşünülmeli?',
      answer:
        'Her postmenopozal kadına otomatik olarak yüksek doz D vitamini başlamak doğru değil; ama herkese tahlil yapmak da gerekli değil. Sağlıklı 50–74 yaş arası kadınlarda güncel kılavuz rutin tarama veya gereksinimin üzerinde rutin takviye önermiyor. Osteoporoz, düşük travmalı kırık, emilim sorunu, hipokalsemi, böbrek hastalığı veya D vitamini metabolizmasını etkileyen ilaçlar varsa ölçüm ve kişiye özel tedavi anlam kazanır.',
    },
    {
      question: 'Güneş görmek tek başına yeterli olur mu?',
      answer:
        'Ne kadar D vitamini sentezlendiğini yalnızca “güneşte kaldım” diye tahmin edemeyiz; mevsim, saat, ten rengi, yaş, açıkta kalan deri alanı ve coğrafya sonucu ciddi biçimde değiştirir. Bu nedenle D vitamini için korumasız güneşlenmeyi önermem; ihtiyacı cilt kanseri riskini artırmadan, beslenme ve gerektiğinde takviyeyle karşılamak daha güvenlidir.',
    },
    {
      question: 'D vitamini desteğinde asıl risk eksiklik değil, gereksiz yüksek doz olabilir mi?',
      answer:
        'En sık gördüğüm yanılgı “D vitamini ne kadar yüksekse o kadar iyi” düşüncesidir. Eksiklik, özellikle kemik sağlığı açısından riskli kişilerde düzeltilmelidir. Ama gereksiz yüksek dozların uzun süre kullanılması hiperkalsemi, böbrek taşı ve hatta böbrek hasarına yol açabilir. Sağlıklı erişkinlerde günlük üst sınır genel olarak 4.000 IU’dur; bunun üzerindeki dozlar tedavi amacıyla kullanılacaksa hekim gözetimi gerekir.',
    },
  ],
  '/beden-yakinlik/cinsel-saglik/cinsellikte-agri-menopoz/': [
    {
      question: 'Menopozda cinsel ilişkide ağrı yaşlanmanın doğal bir sonucu mu?',
      answer:
        'Bu dönemde sık görülebilir ama katlanmanız gereken bir durum değil. Menopozla ilişkili doku değişiklikleri ağrıya yol açabilir ve nedeni belirlendiğinde yardımcı olabilecek tedaviler vardır.',
    },
    {
      question: 'Ağrı her zaman yalnızca vajinal kuruluğa mı bağlıdır?',
      answer:
        'Ağrının vajina girişinde mi yoksa daha derinde mi olduğunu, ilişki dışında yanma veya hassasiyet bulunup bulunmadığını sorarım. Muayenede kurulukla birlikte enfeksiyon, vulva cildinde (dış genital bölgede) bir hastalık veya pelvik taban kaslarında ağrı gibi başka nedenleri de değerlendiririm; her ağrıyı otomatik olarak kuruluğa bağlamam.',
    },
    {
      question: 'Hangi belirtilerde değerlendirme ertelenmemeli?',
      answer:
        'Özellikle menopozdan sonra herhangi bir kanama, ilişki sonrası lekelenme, yeni başlayan şiddetli ağrı, kötü kokulu akıntı veya vulvada (dış genital bölgede) yeni bir yara ya da görünüm değişikliği varsa muayeneyi ertelememenizi söylerim. Kanama çok az olsa bile “sürtünmedendir” diye varsaymadan nedenine bakmak gerekir.',
    },
  ],
  '/beden-yakinlik/cinsel-saglik/mahrem-bolge-degisimleri-menopoz/': [
    {
      question: 'Lokal vajinal östrojenin etkisi ne kadar sürede hissedilir?',
      answer:
        'Bazı kadınlar ilk 2–4 hafta içinde kuruluk, yanma ve ilişki sırasında rahatsızlıkta azalma hisseder. Dokuların toparlanması ve tam etkinin ortaya çıkması ise 2–3 ayı bulabilir. GSM kronik bir durum olduğu için tedavi kesildiğinde belirtiler zamanla yeniden ortaya çıkabilir.',
    },
    {
      question: 'Meme kanseri geçmişi olan kadınlarda lokal östrojen kullanılabilir mi?',
      answer:
        'Meme kanseri öyküsünde önce nemlendirici, kayganlaştırıcı ve hyalüronik asit gibi hormon dışı seçenekleri denerim. Bunlar yetersiz kalırsa düşük doz lokal vajinal östrojen yarar ve riskler konuşularak değerlendirilebilir. Tamoksifen kullananlarda bu seçeneği daha rahat tartışabilirim; aromataz inhibitörü kullananlarda onkologla ortak karar vermeyi tercih ederim. Gözlemsel veriler, meme kanseri öyküsü olan kadınların genelinde düşük doz lokal vajinal östrojenin nüks riskini belirgin artırdığını göstermiyor. Ancak bu bulgu aromataz inhibitörü alanlara genellenemez: Danimarka çalışmasında genel grupta artış saptanmazken bu alt grupta artış sinyali görüldü. Özellikle aromataz inhibitörü alanlarda semptomların şiddeti, hormon dışı seçeneklerin yetersizliği ve onkolojik risk birlikte değerlendirilmelidir.',
    },
    {
      question: 'Menopozda sık tekrarlayan idrar yolu enfeksiyonlarının GSM ile ilişkisi nedir?',
      answer:
        'Menopozla östrojen azalınca yalnızca vajina değil, üretra ve mesane çevresindeki dokular da etkilenir; epitel incelir, vajinal pH yükselir ve koruyucu laktobasiller azalır. Bu ortam bazı kadınlarda tekrarlayan idrar yolu enfeksiyonlarına yatkınlığı artırabilir. Postmenopozal dönemde tekrarlayan idrar yolu enfeksiyonu varsa GSM’yi özellikle sorgularım. Uygun hastalarda lokal vajinal östrojen enfeksiyonların tekrarını azaltmaya da yardımcı olabilir.',
    },
    {
      question: 'Hyalüronik asit veya polikarbofil içeren hormon dışı vajinal ürünler ne kadar etkilidir?',
      answer:
        'Hyalüronik asit veya polikarbofil içeren vajinal nemlendiriciler özellikle hafif–orta derecede kuruluk, yanma ve ilişki sırasında rahatsızlıkta yararlı olabilir. Düzenli kullanıldıklarında, yalnızca ilişki sırasında kullanılan kayganlaştırıcılardan farklı olarak birkaç gün süren nemlendirme sağlarlar. Menopoz geçişindeki küçük bir karşılaştırmalı çalışmada iki ürünle de semptomlarda ve vajinal sağlık ölçütlerinde düzelme görüldü; belirgin üstünlük saptanmadı. Hyalüronik asit için 2026 tarihli bir meta-analiz postmenopozal kadınlarda kuruluk, yaşam kalitesi ve cinsel işlevde anlamlı iyileşme bildirdi; ürünler ve kullanım protokolleri arasında farklılıklar var. Küçük bir randomize çalışmada 12 haftada vajinal östrojenle benzer semptom düzelmesi görüldü. Bu sonuçlar, vajinal östrojen kadar güçlü veya uzun dönemli bir kanıt tabanı olduğu anlamına gelmez. Hormon kullanmak istemeyen, kullanamayan veya belirtileri hafif olan kadınlarda ilk seçeneklerden biri olarak düşünülebilir. Belirgin atrofi, sık idrar yolu enfeksiyonu veya ciddi ilişki ağrısında nemlendirici tek başına yetersiz kalabilir; lokal östrojen veya diğer GSM tedavileri ayrıca değerlendirilmelidir.',
    },
    {
      question: 'Cinsel ilişkide ağrı varsa hangi belirtilerde değerlendirme ertelenmemeli?',
      answer:
        'Özellikle menopozdan sonra herhangi bir kanama, ilişki sonrası lekelenme, yeni başlayan şiddetli ağrı, kötü kokulu akıntı veya vulvada (dış genital bölgede) yeni bir yara ya da görünüm değişikliği varsa muayeneyi ertelememenizi söylerim. Kanama çok az olsa bile “sürtünmedendir” diye varsaymadan nedenine bakmak gerekir.',
    },
  ],
  '/zihin-denge/duygusal-denge/stres-yonetimi-menopoz/': [
    {
      question: 'Kortizol yüksekliği tek bir kan testiyle anlaşılır mı?',
      answer:
        'Genellikle hayır. Kortizol gün içinde belirli bir ritimle değişir; rastgele saatte alınan tek bir ölçüm yanıltıcı olabilir. Klinik şüphe varsa zamanlamaya duyarlı yöntemler (sabah kan kortizolü, tükürük örneklemesi, 24 saatlik idrar kortizolü gibi) tercih edilir.',
    },
    {
      question: 'Menopozda stres eşiği neden daha düşük hissediliyor?',
      answer:
        'Östrojenin HPA ekseninin duyarlılığını bir ölçüde yumuşattığı düşünülür. Düzey dalgalandığında aynı yükün bedende bıraktığı kortizol yanıtı büyüklük ve süre olarak değişebilir; bu da aynı olayın daha ağır hissedilmesine yol açabilir.',
    },
    {
      question: 'Kronik stres ile menopoz belirtileri birbirinden nasıl ayrılır?',
      answer:
        'Kesin bir çizgi çekmek zordur, çünkü ikisi birbirini besleyebilir. Uyku bölünmesi, sıcak basması ve gündelik yük aynı anda büyüdüğünde hangi eksenin ağır bastığını ayırmak hekimle birlikte yapılan bir değerlendirmeyi gerektirir.',
    },
    {
      question: 'Ne zaman endokrinoloji değerlendirmesi gerekir?',
      answer:
        'Ay şeklinde yüz değişimi, mor renkli çatlaklar, açıklanamayan kilo kaybı veya kaybı, tuzlu gıdaya artan istek ya da panik atak sıklığında ani artış gibi bulgular eşlik ediyorsa değerlendirme öncelikli hale gelir.',
    },
  ],
  '/zihin-denge/uyku-dinlenme/uyku-bozuklugu-menopoz/': [
    {
      question: 'Menopozda uykusuzluk yalnızca sıcak basmasına mı bağlıdır?',
      answer:
        'Hayır. Sıcak basması önemli bir neden olabilir, ama stres, ağrı, gece idrara kalkma, huzursuz bacak veya uyku apnesi de uykuyu bölebilir. Hastaya önce "Sizi ne uyandırıyor?" diye sorarım; her uyanmayı menopoza bağlamam.',
    },
    {
      question: 'Gece sık uyanıp tekrar uyuyabiliyorsam yine de bunu önemsemeli miyim?',
      answer:
        'Gece kısa süre uyanıp tekrar uyumak tek başına hastalık belirtisi değildir. Benim için belirleyici olan bunun ne kadar sık olduğu ve sabah dinlenmiş kalkıp kalkmadığınız, gün içinde yorgunluk veya dikkat sorunu yaşayıp yaşamadığınızdır. Belirgin horlama ya da nefes durması anlatılıyorsa, tekrar uyuyabiliyor olsanız da ayrıca değerlendiririm.',
    },
    {
      question: 'Uyku günlüğü tutmak gerçekten işe yarar mı?',
      answer:
        'Evet, ama günlüğü bir sınav gibi tutmanızı istemem. Bir–iki hafta boyunca yatış saatinizi, gece uyanmalarınızı, sıcak basmasını ve ertesi gün nasıl hissettiğinizi kısaca yazmanız yeterli. Bu kayıt sorunun seyrini görmemize yardımcı olur; tek başına bir tedavi değildir.',
    },
    {
      question: 'CBT-I nedir, uykusuzlukta neden gündeme geliyor?',
      answer:
        'CBT-I, uykusuzluk için geliştirilmiş yapılandırılmış bir bilişsel davranışçı terapidir. Uyku saatlerini ve yatakta geçirilen zamanı düzenlemeyi, uykuyla ilgili kaygıyı azaltmayı öğretir. Uykusuzluk sıklaşıp gündüz yaşamınızı etkiliyorsa, özellikle uzun süredir devam ediyorsa gündeme getiririm; yalnızca "erken yatın" demekten ibaret değildir.',
    },
    {
      question: 'Sıcak basması gece uykumu bölüyorsa hormon tedavisi (HRT) seçenekler arasında mı?',
      answer:
        'Evet, gece terlemesi ve sıcak basması uykunuzu belirgin biçimde bölüyorsa hormon tedavisi seçeneklerden biridir. Kararı yaşınıza, menopozdan beri geçen süreye, rahminizin olup olmadığına ve kişisel sağlık risklerinize göre veririm. Sıcak basması olmadan yalnızca uykusuzluk varsa, HRT\'yi otomatik olarak uyku ilacı gibi önermem; önce uykusuzluğun nedenini değerlendiririm.',
    },
  ],
  '/zamansiz-yasam/beslenme-yaslanma/': [
    {
      question: '40 yaş sonrasında beslenmede en çok hangi başlıklar önem kazanır?',
      answer:
        'Protein, lif, kemik sağlığı için kalsiyum ve D vitamini ile B12 gibi emilimi yaşla değişebilen besinler daha görünür hale gelir. Enerji dengesi de bu dönemde kas kütlesi, hareket ve hormon değişimiyle birlikte yeniden şekillenir. Amaç eksik tamamlamak kadar sürdürülebilir bir tabak düzeni kurmaktır.',
    },
    {
      question: 'Tek bir “mükemmel menopoz diyeti” var mı?',
      answer:
        'Hayır. Kültür, yaşam ritmi, sağlık durumu ve hedefler çok farklı olduğu için herkese uyan tek bir plan yok. Akdeniz tipi beslenme menopozdaki kadınlarda en çok araştırılan yaklaşımlardan biridir, ama çalışma sayısı sınırlıdır. Uzun vadede sürdürülebilen ve size iyi gelen düzen çoğu zaman daha değerlidir.',
    },
    {
      question: 'Takviye almak yerine önce sofraya bakmak neden önemli?',
      answer:
        'Çünkü birçok beslenme hedefi önce günlük düzen içinde karşılanabilir. Takviye bazen gerekli olabilir; ancak doz ve süre kan düzeyi, ilaçlar ve kişisel risklerle birlikte belirlenir. Eksiklik ya da açık bir klinik gerekçe yoksa raf alışkanlığı kararın yerini tutmaz.',
    },
    {
      question: 'Menopozda kalsiyum ihtiyacı yaşa göre değişir mi?',
      answer:
        'Evet. Genel başvuru değerleri 19–50 yaş arası kadınlar için günde yaklaşık 1000 mg, 51 yaş ve sonrası için 1200 mg’dır. Tabaktan gelen kalsiyum da bu hesabın parçasıdır. Takviye gerekip gerekmediği; D vitamini düzeyi, böbrek taşı öyküsü ve kemik riskiyle birlikte hekiminizle değerlendirilmelidir.',
    },
    {
      question: '50 yaşından sonra B12 emilimi neden konuşuluyor?',
      answer:
        'Yaşla birlikte mide asidi azalabildiği için doğal besinlerdeki B12’nin emilimi bazı kişilerde zorlaşabilir. Et, balık, yumurta ve süt ürünleri başlıca kaynaklardır; vejetaryen ve vegan beslenenlerde bu başlık daha da önem kazanır. Yorgunluk ya da unutkanlık tek başına B12 eksikliği anlamına gelmez; şüphe varsa karar kan tetkikiyle verilir.',
    },
  ],
  '/zamansiz-yasam/kilo-artisi-menopoz/': [
    {
      question: 'Kilo artışı yalnızca daha az hareket etmekten mi olur?',
      answer:
        'Hayır. Yaş, uyku, stres, kas kütlesi, yağ dağılımı ve hormonal değişim birlikte etkili oluyor. Bu yüzden tabloyu yalnızca hareketsizliğe bağlamak eksik bir okuma olur.',
    },
    {
      question: 'Tartı aynı kalırken bedende değişim olması mümkün mü?',
      answer:
        'Evet, bu dönem için tanıdık bir durum. Kas kütlesi azalırken yağ dağılımı değişebiliyor; bu da sayı sabit kalsa bile kıyafetin oturuşunu ve genel hissi değiştirebiliyor.',
    },
    {
      question: 'Hızlı kilo verme yöntemleri bu dönemde işe yarar mı?',
      answer:
        'Çoğunlukla kalıcı bir sonuç sunmuyor. Belirgin kısıtlama kısa vadede tartıyı hareket ettirse de kas kaybını hızlandırabiliyor ve kilo genellikle geri geliyor. Yavaş ama sürdürülebilir bir denge daha tutarlı sonuç veriyor.',
    },
    {
      question: 'Protein miktarı nasıl belirlenmeli?',
      answer:
        'Genel bir formül herkese uymuyor. Araştırmalarda sık geçen yaklaşım protein alımını artırmayı işaret ediyor; kesin miktar yaş, aktivite düzeyi ve genel sağlık durumuna göre hekim veya diyetisyenle birlikte değerlendirilmesi gereken bir aralık.',
    },
    {
      question: 'Bel çevresi ölçümü neden tartıdan daha bilgilendirici kabul ediliyor?',
      answer:
        'Çünkü tartı toplam kütleyi gösterir, dağılımı göstermez. Bel çevresi, visseral yağ artışına dair daha doğrudan bir sinyal taşıdığı için kilo değerinden bağımsız bir risk göstergesi olarak değerlendiriliyor.',
    },
  ],
  '/bilimsel-pencere/hormonlarin-bilimi/estrogen-biyolojisi-saglik/': [
    {
      question: "Biyoözdeş hormonlar daha mı güvenli?",
      answer:
        "Hastalarımdan sık duyduğum bir soru var: “Hocam, biyoözdeş hormonlar doğal olduğu için daha güvenli değil mi?”\n\nÖncelikle biyoözdeş hormonun ne anlama geldiğini açıklamak gerekiyor. Bunlar, vücudumuzun ürettiği hormonlarla aynı kimyasal yapıya sahip hormonlardır. Örneğin estradiol ve mikronize progesteron bu gruptadır. Ancak bir hormonun vücudumuzdaki hormonla aynı yapıda olması, tamamen risksiz olduğu anlamına gelmez.\n\nBurada önemli bir ayrım var. Bir tarafta içeriği, dozu ve üretim kalitesi denetlenen ruhsatlı hormon ilaçları bulunuyor. Diğer tarafta ise bazı eczanelerde hastaya özel hazırlanan, farklı hormonların karıştırıldığı kremler, kapsüller veya başka ürünler var. Bunların hepsini aynı şekilde değerlendirmem.\n\nBen hormon tedavisi gerekiyorsa öncelikle ruhsatlı, içeriği ve dozu standart olan ürünleri tercih ederim. Çünkü kişiye özel hazırlanan biyoözdeş hormon karışımlarının daha güvenli veya daha etkili olduğunu gösteren yeterli bilimsel kanıt yok.\n\nÖrneğin ciltten uygulanan estradiol, ağızdan alınan östrojene kıyasla damar içinde pıhtı oluşması açısından daha avantajlı olabilir. Ancak bu fark yalnızca hormonun biyoözdeş olmasından değil, uygulama yolundan da kaynaklanıyor.\n\nBenzer şekilde mikronize progesteronun bazı sentetik progesteron türevlerine göre avantajları olabilir. Fakat meme kanseri açısından kesin olarak daha güvenli olduğunu söylemek için yeterli kanıtımız bulunmuyor.\n\nRahmi bulunan kadınlarda ayrıca östrojenin rahim iç tabakası üzerindeki etkisini dengelemek gerekir. Bu nedenle uygun progesteron veya benzeri koruyucu tedavi önemlidir. Özellikle kişiye özel hazırlanan progesteron kremlerinin bu korumayı yeterince sağladığından emin olamıyoruz.\n\nBenim için önemli olan hormonun doğal veya biyoözdeş olarak pazarlanması değil; doğru hastaya, doğru hormonun, uygun dozda ve güvenilir bir ürünle verilmesidir.",
    },
    {
      question: "Östrojen testleri nasıl yorumlanır; kandan ölçüm anlamlı mı?",
      answer:
        "Evet, östrojenin kanda ölçülmesi bazı durumlarda yararlıdır. Ancak her kadında, özellikle de menopoz döneminde, rutin olarak östrojen ölçmenin gerekli olduğunu düşünmüyorum.\n\nÖncelikle östrojenin tek bir hormon olmadığını bilmek gerekiyor. Kan testlerinde en sık ölçtüğümüz hormon estradioldür ve genellikle E2 olarak belirtilir.\n\nEstradiol düzeyi adet döngüsü boyunca sürekli değişir. Adetin başında düşük olabilir, yumurtlama öncesinde belirgin şekilde yükselir. Menopoza geçiş döneminde ise bir ay yüksek, sonraki ay çok düşük çıkabilir.\n\nBu nedenle örneğin 48 yaşındaki bir kadında estradiolün düşük çıkması tek başına menopoz tanısı koydurmaz. Normal veya yüksek çıkması da menopozun yaklaşmadığı anlamına gelmez.\n\nÖzellikle 45 yaşından sonra, adet düzeni değişmiş ve sıcak basması gibi tipik belirtileri olan kadınlarda menopozu çoğunlukla kan testlerinden değil, klinik durumdan değerlendiririm.\n\nAncak 40 yaşından önce adetleri kesilen bir kadında durum farklıdır. Erken yumurtalık yetmezliğinden şüpheleniyorsam FSH başta olmak üzere gerekli hormon incelemelerini yaparım. Estradiol de bu değerlendirmeye yardımcı olabilir, fakat tek başına tanı koydurmaz.\n\nTüp bebek tedavisi sırasında ise estradiol ölçümünün ayrı bir yeri vardır. Yumurtalıkların ilaçlara verdiği yanıtı değerlendirmemize yardımcı olabilir.\n\nBir diğer konu menopozda hormon tedavisi kullanan kadınlar. Bu hastalarda da herkese düzenli olarak estradiol ölçmeyi gerekli görmüyorum. Tedavinin yeterli olup olmadığını öncelikle şikâyetlerin düzelmesine, yan etkilere ve klinik değerlendirmeye bakarak belirlerim.\n\nAncak uygun dozda tedaviye rağmen şikâyetleri devam eden, özellikle ciltten uygulanan östrojenin yeterince emilmediğinden şüphelendiğim bir hastada kan ölçümü yararlı olabilir. Yine de tek bir sonuç, gün boyunca maruz kalınan hormon miktarını tam olarak yansıtmayabilir.\n\nAyrıca tükürük testleriyle hormonların çok hassas şekilde ayarlanabileceği iddialarına da temkinli yaklaşıyorum. Bu testlerin menopozda kişiye özel hormon dozunu belirlemek için güvenilir olduğu gösterilmiş değil.\n\nBen hastanın yalnızca laboratuvar sonucunu tedavi etmiyorum. Östrojen değerini, hastanın yaşı, belirtileri, adet düzeni ve kullandığı ilaçlarla birlikte değerlendiriyorum.",
    },
    {
      question: "Soya, izoflavon ve fitoöstrojenler gerçekten östrojenin yerine geçer mi?",
      answer:
        "Hayır. Fitoöstrojenler, bitkilerde bulunan ve vücudumuzdaki östrojen hormonuna benzer bazı etkiler gösterebilen maddelerdir. Soya fasulyesinde bulunan izoflavonlar da bu gruba girer. Ancak östrojene benzer etki göstermeleri, östrojenin yerini tutabilecekleri anlamına gelmez.\n\nÖzellikle menopozda sıcak basmalarını azaltmak amacıyla kullanılıyorlar. Bazı araştırmalarda küçük bir yarar gösterilmiş olsa da diğer çalışmalarda belirgin bir etki bulunmamış. Üstelik menopoz hormon tedavisinin kemik sağlığı, vajinal kuruluk ve sıcak basmaları üzerindeki etkilerini aynı şekilde sağladıklarını söyleyemiyoruz.\n\nBen burada soya içeren besinlerle yüksek doz izoflavon takviyelerini birbirinden ayırıyorum. Tofu, soya sütü veya soya fasulyesi dengeli beslenmenin bir parçası olabilir. Bunları yalnızca östrojen içeriyorlar diye yasaklamayı doğru bulmuyorum. Meme kanseri geçirmiş kadınlarda bile normal miktarlarda soya tüketiminin riski artırdığı gösterilmiş değil.\n\nAncak yüksek doz izoflavon içeren kapsüller için aynı güvenceyi veremiyoruz. Özellikle hormon duyarlı kanser öyküsü olan kadınlarda bu ürünlerin güvenliği yeterince bilinmiyor.\n\nBen fitoöstrojenleri hormon tedavisinin doğal ve tamamen güvenli bir alternatifi olarak görmüyorum. Menopoz belirtileri hafif olan bazı kadınlar bunları denemek isteyebilir, ancak belirgin şikâyetleri olan bir hastada etkinliği daha iyi gösterilmiş tedavileri değerlendiririm.\n\nBenim hastalarıma anlatmak istediğim şu: Bir ürünün bitkisel olması, mutlaka daha etkili veya daha güvenli olduğu anlamına gelmez.",
    },
    {
      question: "Perimenopozda ruh hâli neden değişiyor; bunun östrojenle ilişkisi ne?",
      answer:
        "Perimenopoz döneminde bazı kadınlar kendilerini eskisinden daha tahammülsüz, kaygılı veya duygusal hissedebiliyor. Bazen daha önce kolayca başa çıktıkları olaylara çok daha güçlü tepkiler verdiklerini anlatıyorlar.\n\nBunun nedenlerinden biri hormonların değişmesi. Ancak burada önemli bir ayrıntı var: Sorun yalnızca östrojenin azalması değil, bazen çok yükselip bazen hızla düşmesi.\n\nPerimenopozda yumurtalıkların hormon üretimi düzensizleşiyor. Östrojen bir ay yüksekken başka bir ay oldukça düşük olabilir. Bu dalgalanmalar, beyinde ruh hâlinin düzenlenmesinde rol oynayan serotonin gibi sistemleri etkileyebiliyor.\n\nÜstelik her kadın bu değişikliklere aynı şekilde tepki vermiyor. Özellikle geçmişte adet öncesi belirgin ruh hâli değişiklikleri veya doğum sonrası depresyon yaşamış kadınlar, hormonal dalgalanmalara daha duyarlı olabilir.\n\nBir de uyku sorunu var. Gece sıcak basmaları nedeniyle sık sık uyanan bir kadının ertesi gün yorgun, sinirli ve tahammülsüz olması şaşırtıcı değil. Ancak her ruh hâli değişikliğini yalnızca hormonlara veya uykusuzluğa bağlamak da doğru değil.\n\nBen hastalarıma önce şikâyetlerinin ne zaman başladığını, uykularının nasıl olduğunu, günlük yaşamlarının ne kadar etkilendiğini ve daha önce benzer sorunlar yaşayıp yaşamadıklarını sorarım.\n\nEğer ruh hâli değişikliklerine sıcak basmaları ve diğer menopoz belirtileri eşlik ediyorsa, uygun hastalarda hormon tedavisi yardımcı olabilir. Ancak belirgin depresyon veya anksiyete varsa bunu yalnızca menopozun doğal bir sonucu olarak kabul etmem. Gerektiğinde psikolojik destek, psikoterapi veya ilaç tedavisini de değerlendiririm.\n\nBenim için önemli olan hastaya yalnızca östrojeniniz azalmış demek değil, yaşadığı değişikliklerin ne kadarının hormonlarla ilişkili olduğunu ve yaşamını nasıl etkilediğini anlamak.\n\nÇünkü perimenopozda görülen ruh hâli değişiklikleri gerçek ve tedavi edilebilir sorunlar olabilir. Ama her kadında ortaya çıkmaları da kaçınılmaz değildir.",
    },
    {
      question: "Östrojen düşüşü kemik kaybını neden hızlandırır?",
      answer:
        "Kemiklerimizi çoğu zaman değişmeyen, sert yapılar olarak düşünüyoruz. Oysa kemiklerimiz canlı dokulardır. Hayatımız boyunca eski kemik dokusu yıkılır ve yerine yenisi yapılır. Sağlıklı bir kemikte bu iki işlem arasında bir denge vardır.\n\nÖstrojen hormonunun önemli görevlerinden biri de bu dengeyi korumaktır.\n\nKemiklerimizde eski dokuyu yıkan hücreler ve yeni kemik yapan hücreler bulunur. Östrojen, özellikle kemik yıkımından sorumlu hücrelerin faaliyetini kontrol altında tutar.\n\nMenopozla birlikte östrojen azaldığında bu kontrol zayıflar. Kemik yıkımı hızlanır, ancak yeni kemik yapımı aynı hızda artamaz. Sonuçta her yenilenme döngüsünde biraz daha fazla kemik kaybedilir.\n\nÜstelik yalnızca kemik yoğunluğu azalmaz. Kemiğin içindeki ince destek yapıları da zamanla zayıflar. Bu nedenle kemikler dışarıdan normal görünse bile kırılmaya daha yatkın hâle gelebilir.\n\nKemik kaybının özellikle menopozdan sonraki ilk yıllarda hızlanmasının temel nedeni budur. Sorun yalnızca yaşlanma değil, östrojenin kemik üzerindeki koruyucu etkisinin azalmasıdır.\n\nBenim hastalarıma özellikle hatırlattığım nokta şu: Kemik kaybı genellikle ağrı yapmaz. Kadın kendini tamamen sağlıklı hissederken de kemik yoğunluğu azalıyor olabilir.\n\nBu nedenle menopoz döneminde kemik sağlığını değerlendirirken yalnızca şikâyetlere değil, yaşa, menopozun ne zaman başladığına, önceki kırıklara ve diğer risk faktörlerine bakarım.\n\nDüzenli direnç egzersizleri, yeterli protein ve kalsiyum alımı, D vitamini yeterliliği ve gerektiğinde uygun tedavilerle kemik kaybını yavaşlatmak ve kırık riskini azaltmak mümkündür.\n\nBenim için amaç, kemik erimesi ortaya çıktıktan sonra müdahale etmekten çok, kemik sağlığını henüz belirgin bir kayıp oluşmadan korumaktır.",
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
      question: 'Hormonun türünü ve dozunu nasıl seçiyorsunuz?',
      answer:
        'Yalnızca vajinal kuruluk varsa lokal tedavi yeterli olabilir; sıcak basması gibi genel belirtilerde sistemik tedaviyi değerlendiririm. Rahim yerindeyse sistemik östrojene rahim iç tabakasını koruyacak bir progestojen eklerim; rahim alınmışsa çoğunlukla yalnız östrojen kullanılır.\n\nAuralı migren, kontrollü hipertansiyon veya trigliserid yüksekliğinde genellikle ciltten östradiolü tercih ederim. Dozu belirtileri kontrol eden en düşük düzeyden başlatır, yanıta ve yan etkilere göre ayarlarım. Kararı tek bir hormon kan sonucuna bağlamam.',
    },
    {
      question: 'Kararda hangi üç başlığa bakıyorsunuz?',
      answer:
        'Önce yakınma ve hedef: Sizi en çok ne zorluyor, tedaviden ne bekliyorsunuz?\n\nİkinci başlık kişisel risk. Yaşınız, menopozdan beri geçen süre; meme kanseri, pıhtı ve kalp-damar hastalığı öyküsü tedavinin uygunluğunu belirler.\n\nÜçüncüsü tedavi planı. Sağlık bulgularınıza göre hormonun türünü ve uygulama yolunu seçer, yararı ve yan etkileri birlikte izleriz.',
    },
    {
      question: 'Hormon kullanmak istemeyen bir kadına seçenekleri nasıl anlatıyorsunuz?',
      answer:
        'Önce kararına saygı duyar, “Sizi en çok hangi belirti zorluyor?” diye sorarım. Sıcak basması ve gece terlemesi için menopoza yönelik bilişsel davranışçı terapiyi; belirgin yakınmalarda ise kişiye göre bazı antidepresanları, gabapentini veya uygun ve erişilebilir olduğunda diğer hormon dışı reçeteli seçenekleri konuşuruz.\n\nYalnızca vajinal kuruluk varsa düzenli nemlendirici ve ilişki sırasında kayganlaştırıcıyla başlayabiliriz. Uyku, hareket ve sigara gibi genel sağlık etkenlerini de ele alırım.\n\nHiçbirini “HRT ile tamamen aynı etkiyi sağlar” diye sunmam; seçtiğimiz yöntemin işe yarayıp yaramadığını birlikte değerlendiririz. Hormon istememesi, yakınmalarıyla tek başına baş etmesi gerektiği anlamına gelmez.',
    },
    {
      question: 'Hormon tedavisine başlamakla devam etmek aynı karar mı?',
      answer:
        'İlk kez sistemik hormon tedavisine başlarken yaşa ve menopozdan beri geçen süreye birlikte bakarım. Yakınmaları belirgin, tedaviye engeli olmayan bir kadında 60 yaşından önce ve menopozdan sonraki ilk 10 yıl içinde başlandığında yarar-risk dengesi genellikle daha elverişlidir. Daha geç başvuruda “Artık kesinlikle kullanamazsınız” demem; fakat kalp-damar hastalığı, inme ve pıhtı riskini daha dikkatli değerlendirir, hormon dışı seçenekleri de konuşurum.\n\nDevam kararı farklıdır. Tedaviye daha erken başlamış bir kadın 60 veya 65 yaşına geldi diye ilacı otomatik kesmem. Belirtiler hâlâ tedavi gerektiriyor mu, yarar görüyor mu, yeni bir risk gelişti mi diye düzenli olarak yeniden değerlendiririm. 65 yaşında ilk kez başlamakla, 65 yaşında işe yarayan bir tedaviye devam etmek aynı karar değildir.',
    },
    {
      question: 'Düşük doz vajinal östrojenin farkı nedir; meme kanseri öyküsünde nasıl değerlendiriyorsunuz?',
      answer:
        'Sistemik hormon tedavisinin kana geçerek sıcak basması ve gece terlemesi gibi genel yakınmaları hedeflediğini anlatırım. Düşük doz vajinal östrojen ise esas olarak kuruluk, yanma ve ilişki sırasında ağrı için vajinaya uygulanır. Kana geçişi genellikle çok azdır, ama “Hiç emilmez” demem; sıcak basmasını da tedavi etmesini beklemem.\n\nMeme kanseri öyküsünde önce hormon içermeyen nemlendirici ve kayganlaştırıcıları denerim. Bunlar yetmez ve yakınma belirginse düşük doz vajinal östrojeni, olası yarar ve belirsizlikleri anlatarak değerlendirebiliriz. Tamoksifen kullananlarda bu görüşme yapılabilir; aromataz inhibitörü kullananlarda ise karara hastayı izleyen onkoloğu mutlaka dahil ederim.',
    },
  ],
  '/hormonal-gecis/menopoz/tarti-yatisinca-vucut-kompozisyonu/': [
    {
      question: 'Tartı pek değişmiyor ama beden değişti — bu menopoza özgü mü?',
      answer:
        'Tek başına menopoza özgü değildir; ama menopoz bu süreci hızlandırabilir. Kompozisyon değişimi yaş almanın bir parçasıdır — kas yavaşça azalır, yağ farklı bölgelere yerleşebilir. Östrojen düşüşü bu kayışın eğimini biraz daha dikleştirebilir. Sayının yatışıp bedenin değişmeye devam etmesi yaygın bir gözlemdir; bu bir hata değil, ölçü aletini değiştirme zamanının gelmiş olabileceğinin işaretidir.',
    },
    {
      question: 'BMI normal aralıkta ama yağ oranı yüksek; ne yapmalı?',
      answer:
        'Önce hekimle birlikte değerlendirmek gerekir — özellikle yağın nereye yerleştiği metabolik açıdan farklı anlamlar taşıyabilir. Bu bir panik göstergesi olmak zorunda değildir; bir yön göstergesi olabilir. Direnç antrenmanı, yeterli protein ve uyku düzeni, kompozisyon tablosunu zaman içinde değiştirebilen üç ana sütundur. Ölçüm alarm için değil, görmek içindir.',
    },
    {
      question: 'Kompozisyon takibi için tek bir doğru yöntem var mı?',
      answer:
        '"Tek doğru yöntem" fazla iddialı olur; "yararlı bulunan yöntem" daha dürüst bir yaklaşımdır. Ev tartısının da bir yeri vardır; yanına bedeni gözlemleme alışkanlığı ve hekimle karar verilen aralıklı bir kompozisyon ölçümü tablonun gövdesini görmeye yardım edebilir. İzlemek de bir doza sahiptir.',
    },
    {
      question: 'Direnç antrenmanı menopozda gerçekten kritik mi?',
      answer:
        '"Kritik" biraz büyük bir kelimedir; "değerli" daha doğru durur. Düzenli direnç antrenmanının kas kütlesini korumaya yardımcı olabileceği araştırmalarda sık konuşuluyor; menopoz döneminde bu eğilim özellikle önemlidir. Zorunluluk diline çevirmemek de önemli — başlama eşiği kişiden kişiye değişir. Küçük başlangıçlar zamanla fark yaratabilir.',
    },
    {
      question: 'Protein için bir kural var mı?',
      answer:
        'Sayısal hedefi hekim belirler. Genel prensip olarak ana öğünlerde proteinin tabakta görünür yer alması, öğünleri kompozisyon açısından daha bilinçli kurgulamaya yardımcı olabilir. Bu, sürekli tartmaktan çok bir alışkanlık konusudur; yerleştiğinde hesap yapmadan da işler.',
    },
  ],
  '/hormonal-gecis/menopoza-hazirlik/koruyucu-saglik-kayitlari/': [
    {
      question: "Belirtisi olmayan bir kadın menopoza hazırlıkta hangi sağlık kayıtlarını tutmalı?",
      answer: "Belirtisi olmayan bir kadında menopoza hazırlık için en yararlı kayıtlar, adet tarihleri ve adet aralıklarındaki değişiklikler, kilo ve bel çevresi, tansiyon, kullanılan ilaçlar, sigara/alkol durumu, egzersiz düzeyi, uyku, ailede erken kalp-damar hastalığı, osteoporoz ve meme veya yumurtalık kanseri öyküsüdür. Ayrıca son mamografi, rahim ağzı taraması, kemik yoğunluğu ölçümü yapılmışsa sonucu ve önceki önemli kan tahlillerini tek yerde tutmak ileride karşılaştırmayı kolaylaştırır.",
    },
    {
      question: "Kan tahlillerinin gerekliliğini ve tekrar sıklığını nasıl belirlersiniz?",
      answer: "Kan tahlillerini yaşa göre otomatik değil, risk profiline göre isterim. Kan yağlarını gösteren lipid profili, açlık glukozu veya son birkaç aylık kan şekeri hakkında bilgi veren HbA1c, gerektiğinde karaciğer-böbrek fonksiyonları ve tiroid testleri; kişinin kilosu, aile öyküsü, tansiyonu, kullandığı ilaçlar ve önceki sonuçlarına göre planlanır. Normal sonuçları olan düşük riskli bir kişide her birkaç ayda bir test tekrarı gerekmez; sınırda veya anormal sonuçlarda, tedavi başlanmışsa ya da yeni belirti gelişmişse daha sık kontrol edilir. Menopoz tanısı tipik yaş ve belirtilerle çoğu zaman hormon testleriyle konmaz.",
    },
    {
      question: "Ev tipi tansiyon cihazı seçimi ve ölçüm kayıtları konusunda ne önerirsiniz?",
      answer: "Ev tipi tansiyon cihazında tercihim, doğrulanmış bir model olan, üst koldan ölçen otomatik cihazdır; bilekten ölçen cihazları genellikle önermem. Manşet kol çevresine uygun olmalı. Ölçümden önce 5 dakika dinlenmek, sırt ve kolu desteklemek, ayakları yere basmak, konuşmamak gerekir. İlk değerlendirmede sabah ve akşam, 1 dakika arayla ikişer ölçümü 5–7 gün kaydetmek çok yararlıdır; tek tek yüksek değerlerden çok ortalamaya bakarım. Sürekli yüksek ölçümler varsa cihazı da muayeneye getirip klinik cihazla karşılaştırmak iyi olur.",
    },
    {
      question: "Menopoza hazırlıkta belirti günlüğüne ne kadar zaman ayırmak gerekir; hangi ayrıntıları kaydetmek yararlıdır?",
      answer: "Belirti günlüğü için uzun uzun not tutmak gerekmez; günde 1–2 dakika, özellikle birkaç hafta düzenli kayıt çoğu zaman yeterlidir. Adet tarihleri ve kanama miktarı, sıcak basması/gece terlemesi, uyku kalitesi, çarpıntı, baş ağrısı, ruh hali, vajinal kuruluk, idrar yakınmaları, cinsel istek, kullanılan ilaçlar ve belirtileri artırdığını düşündüğünüz alkol, kafein, stres veya sıcak ortam gibi tetikleyiciler kaydedilebilir. Amaç her belirtinin peşine düşmek değil; zaman içindeki seyri görmek, hangi şikâyetin gerçekten sıklaştığını ve günlük yaşamı ne kadar etkilediğini anlamaktır.",
    },
  ],
  '/zamansiz-yasam/glp1-istah-metabolizma-menopoz/': [
    {
      question: 'İkinci kuşak mı, üçüncü kuşak mı “daha iyi”?',
      answer:
        'Tek başına doğru soru bu değildir. Üçüncü kuşakta etki büyüyebilir; buna karşılık tolerans, erişim ve uzun dönem izlem de değişir. Doğru soru, sizin bedeninizde hangi sinyalin bozulduğu ve hangi basamağın buna cevap verdiğidir.',
    },
    {
      question: 'GLP-1 yalnızca kilo vermek için midir?',
      answer:
        'Hayır. Sınıfın klinik zemini iştah, glikoz düzeni ve metabolik riskle iç içedir. “Biraz incelmek” motivasyonu tek başına klinik gerekçe sayılmaz; hekim endikasyonu, risk ve takip planıyla birlikte değerlendirir.',
    },
    {
      question: 'Menopozdaysam otomatik aday mıyım?',
      answer:
        'Hayır. Menopoz iştah ve yağ dağılımını etkileyebilir; bu, herkesin aynı kuşağa gireceği anlamına gelmez. Önce tabloyu ayırmak gerekir.',
    },
    {
      question: 'Kas kaybı kaçınılmaz mı?',
      answer:
        'Hayır. Ama tartıya körü körüne bakmak — özellikle etki büyüdükçe — risklidir. Protein, direnç çalışması ve izlem konuşulmadan hızlı düşüş kutlanmamalıdır.',
    },
  ],
  '/bilimsel-pencere/yeni-arastirmalar/glp1-analoglari-menopozal-kilo/': [
    {
      question: 'Semaglutid, liraglutid ve tirzepatid arasında kilo kontrolü açısından nasıl bir fark var; ilaç seçimini ne belirler?',
      answer:
        'Kilo kaybı açısından üçü de etkili, ancak etkileri aynı düzeyde değil. Liraglutid günlük enjeksiyonla kullanılan daha eski bir GLP-1 agonisti ve çalışmalarda ortalama kilo kaybı yaklaşık %8 düzeyindeydi. Semaglutid haftalık kullanılıyor ve obezitesi olan, diyabeti bulunmayan kişilerde yaklaşık %15’e varan ortalama kayıplar gösterdi. Tirzepatid ise hem GIP hem GLP-1 reseptörlerini etkiliyor ve güncel verilerde en yüksek ortalama kilo kaybını sağlıyor; 2025’teki doğrudan karşılaştırmada 72 haftada tirzepatid ile ortalama %20,2, semaglutid ile %13,7 kilo kaybı görüldü.\n\nAma ilaç seçimini yalnızca “hangisi daha çok zayıflatıyor?” diye yapmam. Hedeflenen kilo kaybı, diyabet/prediyabet, kalp-damar hastalığı, uyku apnesi, gastrointestinal tolerans, safra kesesi ve pankreas öyküsü, kullanılan diğer ilaçlar, gebelik planı, uygulama sıklığı, maliyet ve ilaca erişim birlikte değerlendirilir. Örneğin semaglutidin, bilinen kardiyovasküler hastalığı olan aşırı kilolu veya obez kişilerde majör kardiyovasküler olay riskini azaltmaya yönelik doğrudan sonuç verisi ve onayı bulunuyor; tirzepatidin ise obeziteyle birlikte orta-ağır obstrüktif uyku apnesinde ayrıca onayı var. Bu nedenle benim için doğru ilaç, yalnızca tartıda en fazla düşüşü sağlayan değil, hastanın metabolik ve tıbbi profiline en uygun olan ilaçtır.',
    },
    {
      question: 'GLP-1 ilaçları menopoz döneminde kilo vermeye yardımcı olur mu; menopozda olmak tek başına kullanım gerekçesi midir?',
      answer:
        'GLP-1 temelli ilaçlar menopoz dönemindeki kadınlarda da kilo vermeye yardımcı olabilir; menopoz bu ilaçların etkisini ortadan kaldırmaz. Ancak menopozda olmak tek başına kullanım gerekçesi değildir. Karar, kişinin obezite veya fazla kilo açısından tedavi kriterlerini karşılayıp karşılamadığına, eşlik eden diyabet, hipertansiyon, uyku apnesi veya kardiyovasküler risklere ve daha önceki kilo verme girişimlerine göre verilir. Menopoz döneminde yağ dağılımı değişebilir ve özellikle karın çevresinde kilo artışı belirginleşebilir; bu nedenle uygun hastalarda GLP-1/GIP temelli ilaçlar yararlı olabilir. Güncel çalışmalar ayrıca menopoz hormon tedavisi kullanan bazı postmenopozal kadınlarda semaglutid veya tirzepatid ile kilo kaybının biraz daha fazla olabileceğini düşündürüyor, ancak bu henüz hormon tedavisini kilo vermek amacıyla başlatmak için yeterli bir gerekçe değildir.',
    },
    {
      question: 'GLP-1 analoğu nedir, vücutta nasıl çalışır?',
      answer:
        'GLP-1 analogları, bağırsaktan yemek sonrası salgılanan GLP-1 hormonunun etkisini taklit eden ilaçlardır. Beyindeki iştah merkezlerini etkileyerek açlığı ve yeme isteğini azaltır, mide boşalmasını yavaşlatarak daha uzun süre tokluk sağlar ve kan şekeri yükseldiğinde pankreastan insülin salınımını artırırken glukagonu azaltır. Bu nedenle hem tip 2 diyabet tedavisinde hem de uygun hastalarda kilo kontrolünde kullanılırlar. Etkileri yalnızca “iştah kapatmak” değildir; beyin, mide-bağırsak sistemi ve pankreas üzerinden birlikte çalışırlar.',
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
  { question: '40 yaş sonrası diz, kalça ve bel ağrısı kaçınılmaz mı?', answer: 'Yaşla birlikte kas gücü ve hareket alışkanlıkları değişebilir; ağrı yine de değerlendirilmesi gereken bir yakınmadır. Günlük yaşamı kısıtlayan veya tekrarlayan ağrıyı yaşınıza bağlayıp geçmeyin. Muayene, olası nedenleri ve uygun desteği ayırmaya yardımcı olur.' },
  { question: 'Ağrım varken tamamen dinlenmeli miyim?', answer: 'Travma veya acil belirti varsa önce tıbbi değerlendirme gerekir. Bunlar dışlandığında bel ağrısı ve eklem kireçlenmesinde, kapasitenize göre ayarlanmış hareket genellikle bakımın parçasıdır. Egzersiz sırasında belirgin kötüleşme ya da yeni güç kaybı olursa hareketi sürdürmeye zorlamayın.' },
  { question: 'Yürüyüş kas güçlendirme çalışmasının yerini tutar mı?', answer: 'Yürüyüş genel dayanıklılık için bir başlangıç olabilir. Yetişkinler için fiziksel aktivite önerileri, aerobik hareketin yanında kas güçlendirmeyi de kapsar. Mevcut ağrı veya denge sorunu varsa hangi çalışmanın uygun olduğu ayrıca değerlendirilir.' },
  { question: 'MR raporunda fıtık veya kireçlenme yazması ağrıyı açıklar mı?', answer: 'Rapordaki bulgu, şikâyetiniz ve muayeneyle birlikte yorumlanır. Bel ağrısında görüntüleme rutin olarak istenmez; uzman değerlendirmesinde sonucu bakım planını değiştirecekse düşünülür. Yeni idrar-dışkı kontrol sorunu veya kasık çevresinde his kaybı varsa acil servise başvurun. Bacakta ilerleyen güç kaybında beklemeden tıbbi değerlendirme gerekir.' },
  { question: 'Fizyoterapi için üç ay beklemem gerekir mi?', answer: 'Hayır. Üç ay, kronik bel ağrısını tanımlarken kullanılan süredir; yardım istemek için bekleme süresi değildir. Ağrı yürüyüşünüzü, uykunuzu veya işinizi kısıtlıyorsa daha erken değerlendirme alabilirsiniz.' },
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
      answer: 'Normal bir sonuç sevindiricidir, ancak kırık riskini sıfırlamaz. Önceki kırıklar, düşme riski, kas gücü, aile öyküsü ve eşlik eden hastalıklar da değerlendirmeye katılır. Ölçüm sonucu bu bilgilerle birlikte okunur.',
    },
    {
      question: 'Osteopeni mutlaka ilaç kullanmak anlamına mı gelir?',
      answer: 'Osteopeni, otomatik olarak ilaç başlanması anlamına gelmez. Yaş, kırık öyküsü ve diğer risk etkenleri birlikte değerlendirilir. Bazı kadınlarda izlem ve yaşam alışkanlıklarında değişiklik yeterli olabilir; kırık riski yüksekse ilaç seçenekleri de konuşulur.',
    },
    {
      question: 'Kemik için yürüyüş yeterli mi?',
      answer: 'Yürüyüş, ağırlık taşıyan bir hareket olarak kemik sağlığına katkı sağlayabilir. Kas gücü ve denge için güvenli direnç ve denge çalışmaları da önemlidir. Egzersizlerin seçimi mevcut ağrılara, kırık öyküsüne ve hareket kapasitesine göre yapılır.',
    },
    {
      question: 'D vitamini takviyesine herkes başlamalı mı?',
      answer: 'Herkes için aynı takviye veya doz uygun değildir. Beslenme, güneşle temas, kemik riski ve mevcut hastalıklar birlikte değerlendirilir. Belirgin bir tıbbi gerekçe bulunmayan sağlıklı yetişkinlerde rutin D vitamini testi önerilmez.',
    },
    {
      question: 'Düşme sonrası ağrı azaldıysa yine de kontrol gerekir mi?',
      answer: 'Ağrının azalması kırığı dışlamaz. Kalça, kasık, bel veya el bileğinde yürümeyi, üzerine basmayı ya da günlük işleri bozan ağrı sürüyorsa değerlendirme gerekir. Şiddetli ağrı veya üzerine basamama varsa beklemeden tıbbi yardım alınmalıdır.',
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
        'Üşüme, kabızlık ya da çarpıntı gibi belirtiler veya öykünüz tiroidi düşündürüyorsa test gündeme gelebilir. İlk adım ise yakınmanın süresini, eşlik eden belirtileri, uykuyu, kullandığınız ilaçları ve muayeneyi değerlendirmektir. Tiroid düşünülüyorsa ve hipofiz sorunu şüphesi yoksa değerlendirme genellikle TSH ölçümüyle başlar.',
    },
    {
      question: 'TSH normal çıkarsa tiroid tamamen dışlanır mı?',
      answer:
        'Normal TSH çoğu kişide tiroidin düzgün çalıştığını düşündürür. Hipofiz hastalığı şüphesi gibi özel durumlarda TSH, fT4 ile birlikte değerlendirilir. Antikor testi ise tiroid hastalığının nedenini araştırmak içindir; hormon değerleri normalse yorgunluğun açıklaması başka yerde aranır.',
    },
    {
      question: 'Yemekten sonra gelen uyku hali metabolik bir işaret olabilir mi?',
      answer:
        'Bu his tek başına insülin direnci ya da prediyabet göstergesi sayılmaz; iki durum da çoğunlukla sessiz seyreder. Ailede diyabet öyküsü veya bel çevresinde artış gibi riskler varsa açlık kan şekeri ya da HbA1c istenebilir. Yemek sonrası uyku hâlinin ne zaman başladığını ve ne kadar sürdüğünü anlatmanız da yararlıdır.',
    },
    {
      question: 'Kas kütlesi azalması gerçekten yorgunluk yapar mı?',
      answer:
        'Kas gücündeki azalma merdiven çıkmak, sandalyeden kalkmak gibi günlük işleri zorlaştırabilir. Kas kütlesi, kas gücü ve genel yorgunluk ise ayrı ayrı ölçülür; aradaki bağı hekiminiz muayene ve gerektiğinde güç testleriyle değerlendirir. Hangi işin zorlaştığını somut anlatmanız bu değerlendirmeyi kolaylaştırır.',
    },
    {
      question: 'D vitamini düşüklüğü bütün yorgunluğu açıklar mı?',
      answer:
        'Düşük bir sonuç, yorgunluğun tek açıklaması olarak okunmaz. Sonuç yakınmalarınız ve muayene bulgularınızla birlikte yorumlanır. Uyku sorunları, kansızlık, tiroid bozukluğu ya da ilaç etkisi gibi başka nedenler de aynı görüşmede gözden geçirilir.',
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
        'Bir tedaviye “deneysel” denmesi, etkinliği ve güvenliği konusunda henüz yeterli ve kaliteli klinik kanıt bulunmadığı; standart tedavi olarak kabul edilmediği anlamına gelir. Bu, mutlaka işe yaramadığı demek değildir ama beklenen yarar, riskler ve hangi hastanın gerçekten fayda göreceği konusunda belirsizlik daha fazladır.',
    },
    {
      question: 'Off-label kullanım ile deneysel yaklaşım aynı şey midir?',
      answer:
        'Off-label kullanım ile deneysel tedavi aynı şey değildir. Off-label, ruhsatlı bir ilacın onaylanmış endikasyonu, dozu, yaş grubu veya kullanım şekli dışında kullanılmasıdır; bazı off-label uygulamaların güçlü bilimsel kanıtı ve kılavuz desteği olabilir. Deneysel yaklaşımda ise kanıt düzeyi genellikle daha düşüktür ve yöntemin klinik değeri henüz netleşmemiştir.',
    },
    {
      question: 'Deneysel bir seçenek konuşulurken hekime sorulacak üç temel soru nedir?',
      answer:
        'Deneysel bir seçenek konuşulurken hekime üç temel soru sorulabilir: “Bu tedavinin benim durumumda işe yaradığını gösteren ne kadar güçlü kanıt var?”, “Bilinen ve henüz bilinmeyen riskleri neler?” ve “Bunu yaptırmazsam elimizde kanıtı daha güçlü hangi standart seçenekler var?” Bu üç soru, yeni veya çekici görünen bir tedavinin gerçekten anlamlı olup olmadığını çoğu zaman oldukça iyi ortaya koyar.',
    },
  ],
  '/zamansiz-yasam/non-invaziv/non-invaziv-cihazlar-hifu-rf-mikroakim/': [
    {
      question: 'HIFU mu radyofrekans mı, hangisi daha iyi?',
      answer:
        'Herkes için daha iyi olan bir yöntem yok. HIFU odaklanmış ses dalgalarıyla belirli derinliklerde, radyofrekans ise elektrik enerjisiyle dokuda ısı oluşturur. İkisini doğrudan karşılaştıran güçlü veri sınırlı olduğu için seçim; hedeflenen doku, cildinizin bugünkü durumu ve kullanılacak cihazın kendi verisi üzerinden yapılır.',
    },
    {
      question: 'HIFU ya da radyofrekans uygulaması acıtır mı?',
      answer:
        'Ağrı kişiye ve cihaza göre değişir. Mikroodaklı ultrason çalışmalarında hastalar ağrıyı ortalama olarak orta düzeyde tarif etmiş. Uygulama öncesinde ağrı konusunda neler yapılabileceğini sormanız, uygulama sırasında da ağrınızı açıkça söylemeniz önemlidir.',
    },
    {
      question: 'Ev tipi mikroakım cihazları kalıcı yüz germe etkisi sağlar mı?',
      answer:
        'Kalıcı yüz germe etkisi gösterilmiş değil. Bu alandaki araştırmaların bir kısmı mikroakımı ışık, radyofrekans ve ultrasonla birlikte kullanan cihazları incelediği için, bildirilen değişim yalnızca mikroakıma bağlanamıyor. Ev cihazı kullanıyorsanız talimattaki süreyi ve sıklığı aşmamak, beklentiyi de profesyonel bir uygulama ya da cerrahiyle eşitlememek gerekir.',
    },
    {
      question: 'Menopozdan sonra bu cihazlar daha az mı etkili olur?',
      answer:
        'Bunu bütün kişiler ve cihazlar için söyleyemeyiz. Menopoz cildin nemini, kalınlığını ve esnekliğini değiştirebilir; ancak estetik çalışmaların çok azı sonuçları menopoz durumuna göre ayrı inceliyor. Beklentiyi yaş etiketi yerine cildinizin bugünkü durumu ve hedeflediğiniz değişim belirler.',
    },
  ],
  '/zihin-denge/uyku-dinlenme/gece-terlemesi-uyku-utancsiz/': [
    {
      question: 'Partnerimi rahatsız etmemek için ne yapabilirim?',
      answer:
        'Partnerinizle açıkça konuşmak ve aynı yatakta farklı ısı ihtiyaçlarının normal olabileceğini kabul etmek işe yarar. Ayrı yorgan, ince ve nefes alan çarşaflar veya yatağın iki tarafında farklı örtüler kullanmak uykuyu koruyabilir. Gerekirse kısa süreli ayrı uyuma düzeni de düşünülebilir; bunu ilişki sorunu gibi görmemek gerekir.',
    },
    {
      question: 'Gece kalkıp duş almak doğru mu, uykuyu daha çok böler mi?',
      answer:
        'Duş bazı kişileri rahatlatırken bazılarını tamamen uyandırabilir. Duş alacaksanız kısa ve ılık olması, çok sıcak veya çok soğuk sudan kaçınmanız ve ardından serin, kuru kıyafetlerle yatağa dönmeniz daha uygundur. Hafif terlemede çoğu zaman kıyafet veya çarşaf değiştirmek duş almaktan daha az uykuyu böler.',
    },
    {
      question: 'Klima açmak terlemeyi hafifletiyor ama eklem ağrısını artırıyor; ne yapabilirim?',
      answer:
        'Ortamı çok soğutmak yerine ılımlı ve sabit bir sıcaklık, doğrudan hava akımından kaçınma ve ince katmanlı giyinme öneririm. Klima tek başına eklem hastalığı oluşturmaz; soğuk hava kas ve eklem sertliğini daha belirgin hissettirebilir. Ağrı sürekliyse, şişlikle veya belirgin hareket kısıtlılığıyla birlikteyse bunu yalnızca klimaya bağlamamak gerekir.',
    },
    {
      question: 'Soğutucu yastık ve jel mat gibi ürünler gerçekten işe yarıyor mu?',
      answer:
        'Bazı kadınlarda rahatlatabilirler, ama vazomotor semptomu tedavi etmezler. Rahatlatıyorsa kullanılabilir; belirgin gece terlemesi varsa asıl tedavi seçeneklerini ayrıca konuşmak gerekir.',
    },
  ],
};
