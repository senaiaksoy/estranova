export interface ArticleFaqItem {
  question: string;
  answer: string;
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
  '/zihin-denge/duygusal-denge/olcu-panigi-beden-algisi-menopoz/': [
    {
      question: 'Tartıya her sabah çıkmak beden algısını neden bu kadar zorlar?',
      answer:
        'Her sabah tartılmak bazı kişilerde kontrol hissi verebilir; ama bazı kişilerde günün duygusunu tek bir rakama teslim eder. Özellikle hormonal geçiş döneminde su tutma, uyku, stres ve bağırsak düzeni gibi günlük değişkenler rakamı oynatabilir. Eğer tartı gününüzü belirlemeye başladıysa, ölçme sıklığını hekiminizle veya güvendiğiniz bir uzmanla konuşmak iyi bir başlangıç olabilir.',
    },
    {
      question: 'Kıyafetlerin birden dar gelmesi panik midir, yoksa bedenin değiştiğini mi söyler?',
      answer:
        'İkisi de olabilir. Kıyafetin dar gelmesi gerçek bir beden değişimini gösterebilir; ama o değişime verdiğiniz tepki bazen fiziksel durumdan daha büyük olur. Burada iyi soru şudur: Bu değişimi sağlık, hareket, uyku ve enerjiyle birlikte mi okuyorsunuz, yoksa yalnızca kendinizi suçlamak için mi kullanıyorsunuz?',
    },
    {
      question: 'Annem ve kızım aynı ölçü dilini konuşurken ben neden boğuluyorum?',
      answer:
        'Çünkü kuşaklar beden hakkında farklı cümleler taşır. Bir kuşak dayanmayı, bir kuşak incelmeyi, bir kuşak görünmeyi daha çok duymuş olabilir. Sizin sıkışmanız anlaşılır; bu sıkışmayı fark etmek bile aile içinde başka bir dil kurmanın ilk adımı olabilir.',
    },
    {
      question: 'Beden algısı bozulunca hekime ne götürülür: tartı mı, his mi?',
      answer:
        'İkisi de götürülebilir. Tartı, bel çevresi, kan değerleri ve tıbbi öykü hekimin işine yarar; ama sizin nasıl hissettiğiniz de resmin parçasıdır. "Kendimi eski bedenimde hissetmiyorum", "aynaya bakmak beni zorluyor", "bu kaygı günümü kaplıyor" gibi cümleler de konuşmaya değerdir.',
    },
    {
      question: '"Tartı susunca" ne demek; tartıyı atmak mı, başka bir ölçü mü kurmak?',
      answer:
        'Herkes için tartıyı tamamen bırakmak doğru olmayabilir. Bazı tıbbi durumlarda düzenli izlem gerekir. Buradaki "susmak", rakamın tek otorite olmaması demek: enerji, güç, uyku, kıyafetle rahatlık, ruh hali ve kendinize konuşma biçiminiz de ölçünün parçası olabilir.',
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
          'Evet, bazı kadınlarda doku incelmesi, elastikiyet azalması, hacim kaybı veya sürtünmeye daha açık bir yapı görülebilir. Burada ilk ayrım şudur: Bu yalnızca alışık olduğunuz görünümden bir fark mı, yoksa yürürken, spor yaparken, otururken ya da yakınlık sırasında konforunuzu etkileyen bir rahatsızlık mı?',
      },
      {
        question: 'Her genital bölge değişimi labioplasti gerektirir mi?',
        answer:
          'Hayır. Labioplasti belirli anatomik ve fiziksel rahatsızlık durumlarında konuşulabilecek cerrahi bir seçenektir; her görünüm farkının karşılığı değildir. Kuruluk, yanma, ilişki sırasında ağrı veya hassasiyet varsa çoğu zaman ilk adım cerrahi değil, jinekolojik değerlendirmedir.',
      },
      {
        question: 'Labioplasti yalnızca estetik bir işlem midir?',
        answer:
          'Her zaman değil. Bazı kadınlarda kıyafet, spor, bisiklet, yürüyüş veya oturma sırasında sürtünme ve çekilme hissi gibi fiziksel konfor başlıkları da tabloya eklenir. Yine de kararın merkezinde “yapılabilir mi?” değil, “sizin için gerçekten neyi rahatlatması bekleniyor?” sorusu olmalıdır.',
      },
      {
        question: 'Büyük dudaklarda hacim kaybı için cerrahi dışında seçenek var mı?',
        answer:
          'Hacim kaybı, küçük dudak fazlalığından farklı bir başlıktır; bu ayrımı bilmek bile konuşmayı sadeleştirir. Bazı kişilerde yağ enjeksiyonu gibi seçenekler gündeme gelebilir, ancak tutulum oranı, zaman içindeki değişim ve iyileşme süreci kişiden kişiye farklıdır. Bu nedenle parlak vaatler yerine ölçülü ve gerçekçi bir konuşma daha güvenlidir.',
      },
      {
        question: 'Bu konuda ilk görüşmede hangi soruyu sormak gerekir?',
        answer:
          'En sade başlangıç şudur: “Bu değişim günlük hayatımda neyi etkiliyor?” Yanıt yalnızca görüntüyle ilgili olabilir; sürtünme, ağrı, kuruluk, hassasiyet veya cinsel konforla da ilgili olabilir. Bu ayrım netleştiğinde cerrahi ve cerrahi dışı seçenekleri daha doğru, daha sakin ve daha kişisel bir yerden konuşmak mümkün olur.',
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
      question: 'Menopoz sonrası göğüslerdeki sarkma sporla tamamen düzeltilebilir mi?',
      answer:
        'Hayır, egzersiz göğüs altındaki kas dokusunu (pektoral kaslar) güçlendirebilir ama meme dokusunun kendisinde kas lifi bulunmaz. Menopozda azalan bağ dokusu elastikiyeti ve gerileyen süt bezleri nedeniyle sarkan meme dokusunu sporla tamamen eski konumuna getirmek anatomik olarak mümkün değildir.',
    },
    {
      question: 'Memeye yağ enjeksiyonunun mamografi ve MR takibinde ne gibi riskleri vardır?',
      answer:
        'Enjekte edilen yağ dokusunun bir kısmı zamanla canlılığını kaybedebilir ve kireçlenmeye (kalsifikasyon) veya küçük yağ kistlerine yol açabilir. Deneyimli meme radyologları bu değişikliklerin çoğunu iyi huylu bulgular olarak ayırt edebilir; ancak bazı durumlarda ek görüntüleme veya biyopsi gerekebilir.',
    },
    {
      question: 'Meme dikleştirme ameliyatından sonra mutlaka protez kullanılmalı mıdır?',
      answer:
        'Hayır, bu tamamen hastanın hacim beklentisine bağlıdır. Eğer sarkma giderildiğinde kalan doğal meme hacmi hasta için yeterliyse ve vücut oranlarıyla uyumluysa ek bir protez gerekmez; sadece dikleştirme (mastopeksi) yapılır. Hacim kaybı belirginse ve dolgunluk isteniyorsa protez veya yağ enjeksiyonu düşünülebilir.',
    },
    {
      question: 'Menopoz sonrası estetik ameliyat kararı alırken yaş tek başına bir engel midir?',
      answer:
        'Yaş tek başına bir engel değildir. Önemli olan kronolojik yaştan ziyade kişinin genel sağlık durumu, kronik hastalıklarının (diyabet, tansiyon vb.) kontrol altında olup olmaması, yara iyileşme kapasitesi ve anestezi alabilme durumudur.',
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
      question: 'HRT kilo, cilt, saç ve yaşlanma karşıtı beklentiler için karar nedeni olmalı mı?',
      answer:
        'HRT’yi kilo verdiren, saçı geri getiren ya da yaşlanmayı durduran bir tedavi gibi düşünmek doğru değildir. Bazı kadınlarda bel çevresi, cilt kuruluğu, doku konforu veya saç kalitesi tarafında ikincil bir yumuşama görülebilir; ancak bu alanlardaki kanıt, sıcak basması, vajinal doku konforu veya kemik sağlığı kadar güçlü değildir. Bu yüzden karar önce daha net ve kanıtı güçlü menopoz hedefleri üzerinden verilmelidir.',
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
      question: 'Lokal vajinal östrojen ne kadar sürede etki gösterir?',
      answer:
        'Lokal östrojenin tipik kullanım rejimi başlangıçta 2 hafta günlük, sonra haftada 2 gün idame; belirgin iyileşme genellikle 4-12 hafta içinde fark ediliyor. Bazı kadınlarda ilk değişiklik daha erken hissedilir, tam doku iyileşmesi birkaç ayı bulabilir. Sürdürülen bir plandır; bırakıldığında belirtiler 1-3 ay içinde geri dönebilir.',
    },
    {
      question: 'Meme kanseri öykülü kadında lokal östrojen kullanılabilir mi?',
      answer:
        'Meme kanseri öyküsü olan kadında lokal östrojen kararı onkolog ve jinekolog ortak değerlendirmesi gerektirir. Hormon reseptörü durumu ve tedavi öyküsü hesaba katılarak karar verilir; bazı durumlarda hormon dışı seçenekler öncelik kazanabilir.',
    },
    {
      question: 'Tekrarlayan idrar yolu enfeksiyonum var, GSM ile bağı ne?',
      answer:
        'Postmenopozal kadında tekrarlayan idrar yolu enfeksiyonu sıklıkla GSM’in üriner kanadıyla ilişkilidir; vajinal pH yükselmesi ve mikrobiyota değişimi koruyucu zemini zayıflatır. Sadece antibiyotik geçici rahatlama sağlasa da altta yatan zemine dokunmaz; lokal östrojen bu zemini iyileştirebilir.',
    },
    {
      question: 'Hyaluronik asit, polikarbofil veya doğal içerikli vajinal ürünler işe yarar mı?',
      answer:
        'Hormon dışı vajinal nemlendiriciler (hyaluronik asit veya polikarbofil bazlı) günlük konforu artırabilir; bazı kadınlarda düzenli kullanımda fayda sağlar. Özellikle hormon kullanamayan veya tercih etmeyen kadınlarda ilk basamak seçenektir.',
    },
    {
      question: 'Cinsel ilişkide ağrı sürekli; ne kadar süre denemeden hekime başvurmalı?',
      answer:
        'Lokal nemlendirici ve yağlayıcı kullanımıyla 4-6 hafta içinde belirgin fark gözlenmiyorsa jinekolog değerlendirmesi gereklidir; lokal östrojen veya pelvik taban fizyoterapisi gibi adımlar gündeme gelir.',
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
  '/zamansiz-yasam/kemik-sagligi-40-sonrasi/': [
    {
      question: 'Kemik kaybı ağrı yapmıyorsa neden erken düşünmek gerekir?',
      answer:
        'Kemik kaybını çoğu zaman hissetmeyiz; ilk belirti bir kırık olabilir. Özellikle menopozdan sonra riskleri erkenden konuşmamın amacı, kırık oluşmadan önce önlem alabilmektir.',
    },
    {
      question: 'DXA ölçümü herkese 40 yaşında gerekli midir?',
      answer:
        'Hayır, 40 yaş her kadın için otomatik DXA yaşı değildir. Erken menopoz, düşük travmayla kırık, uzun süreli kortizon kullanımı veya başka önemli riskler varsa daha genç yaşta isterim. Risk yoksa ölçüm zamanını yaşa ve kişisel öyküye göre belirlerim.',
    },
    {
      question: 'Kemik sağlığı için yürüyüş tek başına yeterli olur mu?',
      answer:
        'Yürüyüş iyi bir başlangıç, ama kemik sağlığı için tek başına yeterli görmem. Yanına kişiye uygun kas güçlendirme ve denge egzersizleri eklemeyi öneririm. Osteoporozu veya geçirilmiş kırığı olan birinde hareketlerin güvenli biçimde seçilmesi gerekir.',
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
