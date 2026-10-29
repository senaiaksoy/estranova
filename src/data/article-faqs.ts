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
    {
      question: "Kreatin uzun yaşam ya da yaşlanmayı yavaşlatma amacıyla kullanılabilir mi?",
      answer: "Kreatin son yıllarda yalnızca sporcuların değil, sağlıklı yaşlanmak isteyen insanların da ilgisini çekiyor. Bunun anlaşılır bir nedeni var. Yaş ilerledikçe kas gücümüzü kaybediyoruz ve bu kayıp günlük hareketlerimizi, dengemizi ve bağımsız yaşayabilme becerimizi etkileyebiliyor.\n\nKreatinin özellikle direnç egzersizleriyle birlikte kullanıldığında kas gücünü bir miktar artırabildiğini gösteren çalışmalar var. Menopoz sonrasındaki kadınlarda da bu konuda olumlu sonuçlar elde edilmiş. Ancak her çalışmada aynı etki görülmüyor ve özellikle fiziksel işlevler üzerindeki uzun dönem yararlar henüz yeterince net değil.\n\nPeki, kreatin yaşlanmayı yavaşlatıyor mu? İşte burada daha dikkatli konuşmamız gerekiyor. Kas gücünü desteklemekle hücresel yaşlanmayı yavaşlatmak veya insan ömrünü uzatmak aynı şey değil. Bugün kreatin kullanan insanların daha uzun yaşadığını gösteren güvenilir klinik kanıtlarımız bulunmuyor. Beyin sağlığı ve hafıza üzerindeki olası etkileri de araştırılıyor, ancak bunlar için de kesin sonuçlara ulaşmış değiliz.\n\nBen özellikle menopoz dönemindeki kadınlarda kas gücünün korunmasını çok önemsiyorum. Fakat bunun için ilk önerim kreatin değil, düzenli direnç egzersizi, yeterli protein alımı ve sürdürülebilir bir hareket programı oluyor. Kreatin, uygun kişilerde bu programı destekleyebilecek bir seçenek olabilir.\n\nKısacası, kreatini bir gençlik iksiri olarak görmüyorum. Ama doğru koşullarda kas gücünü korumaya yardımcı olabilecek bir takviye olarak değerlendirebilirim.",
    },
    {
      question: "Bipolar bozukluğum ya da belirgin ruh hâli dalgalanmalarım varsa kreatin kullanmadan önce neye dikkat etmeliyim?",
      answer: "Böyle bir durumda kreatine kendi kendinize başlamanızı önermem. Çünkü kreatin yalnızca kaslarda değil, beynin enerji metabolizmasında da görev alıyor ve ruh hâli üzerindeki etkileri hâlâ araştırılıyor.\n\nÖzellikle dikkatimi çeken küçük bir çalışma var. Bipolar depresyonu olan hastalarda kreatinin etkisi araştırılmış ve kreatin kullanan 17 kişiden ikisinde mani veya hipomani gelişmiş. Bu, kreatinin mutlaka mani başlattığını kanıtlamıyor. Çünkü bipolar bozuklukta bu tür dönemler kendiliğinden de ortaya çıkabiliyor. Ancak göz ardı edebileceğimiz bir bulgu değil.\n\nBu nedenle hastamın bipolar bozukluk tanısı varsa önce psikiyatri uzmanıyla görüşmesini isterim. Geçmişte mani veya hipomani yaşayıp yaşamadığını, son dönemde ruh hâlinin ne kadar dengeli olduğunu ve kullandığı ilaçları değerlendiririz. Özellikle lityum kullanıyorsa böbrek fonksiyonları ve kreatinin ölçümleri açısından da dikkatli olmak gerekir.\n\nBelirgin ruh hâli dalgalanmaları olup henüz tanı almamış bir hastada ise önce bu dalgalanmaların nedenini anlamayı tercih ederim. Her ruh hâli değişikliği bipolar bozukluk anlamına gelmez.\n\nKreatin kullanımı sırasında uyku ihtiyacında belirgin azalma, olağandışı enerji artışı, aşırı konuşma, taşkınlık veya dürtüsel davranışlar ortaya çıkarsa takviye bırakılmalı ve gecikmeden psikiyatrik değerlendirme yapılmalıdır.\n\nBenim için burada önemli olan, kas gücüne sağlayabileceğimiz olası küçük bir yarar uğruna ruhsal dengeyi riske atmamak. Bipolar bozukluğu olan kişilerde kreatini rutin olarak önermiyorum; kullanılacaksa kararın takip eden psikiyatri uzmanıyla birlikte verilmesi gerektiğini düşünüyorum.",
      sourceRef: 18,
    },
    {
      question: "Türkiye’de kreatin takviyeleri günlük en fazla 3 gramla sınırlı. Araştırmalarda daha yüksek dozlar kullanılması ne anlama geliyor?",
      answer: "Bu gerçekten önemli bir ayrıntı. Çünkü internette kreatin hakkında okuduğunuz bir araştırmada günlük 5 gram, hatta daha yüksek miktarlar kullanıldığını görebilirsiniz. Oysa Türkiye’de takviye edici gıdalar için belirlenen günlük üst miktar 3 gram.\n\nÖncelikle şunu açıklayayım: Mevzuatta bir takviye için belirlenen miktarla, bilimsel araştırmalarda kullanılan doz aynı şey değil. Birincisi ürünlerin piyasaya sunulmasına ilişkin düzenleyici bir sınır; ikincisi ise belirli bir etkiyi araştırmak amacıyla seçilmiş çalışma dozu.\n\nÖrneğin menopoz sonrası kadınlarda yapılan bazı çalışmalarda günlük 5 gram veya daha fazla kreatin, direnç egzersiziyle birlikte kullanıldığında kas gücünde olumlu sonuçlar elde edilmiş. Ancak bu çalışmalara bakarak 3 gramın hiçbir işe yaramayacağını söyleyemeyiz. Aynı şekilde 5 gramın herkes için daha iyi olduğunu da söyleyemeyiz.\n\nBir başka sorun da araştırmaların bazen birbirinden çok farklı olması. Katılımcıların yaşı, egzersiz yapıp yapmadıkları, kullanım süresi ve başlangıçtaki kas gücü sonuçları etkileyebiliyor. Dolayısıyla yalnızca doza bakarak karar vermek doğru değil.\n\nHastalarıma özellikle etiket üzerinde belirtilen günlük miktarı kendi kendilerine artırmamalarını söylüyorum. Bir çalışmada 5 gram kullanılmış olması, Türkiye’de satılan bir ürünün önerilen miktarını aşmak için gerekçe değil.\n\nBurada benim için önemli olan şu: Araştırmada kullanılan dozun daha yüksek olması, daha yüksek dozun mutlaka daha etkili veya daha güvenli olduğu anlamına gelmiyor. Kreatinden beklediğimiz faydayı, kişinin sağlık durumunu ve ürünün kullanım koşullarını birlikte değerlendirmemiz gerekiyor.",
      sourceRef: 24,
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
        'Tek bir ideal yaş yok. Ben diş ve dişeti sağlığına, kapanışa ve değiştirmek istediğiniz özelliğe bakıyorum. 40 yaşını geçmek tek başına bir işlem gerektirmez; yaşla birlikte fark ettiğiniz değişikliklerin nedeni muayenede değerlendirilir.',
    },
    {
      question: 'Aynı işlem bir arkadaşımda iyi sonuç verdi; bende de aynı olur mu?',
      answer:
        'Arkadaşınızın sonucu, sizin sonucunuzu öngörmez. Beğendiğiniz şeyin renk, şekil veya diziliş olduğunu tarif etmek görüşmeyi kolaylaştırır. Uygun seçenekler dişleriniz, dişetiniz, mevcut restorasyonlarınız ve kapanışınızla birlikte değerlendirilir.',
    },
    {
      question: 'Estetik diş kararını vermek kaç görüşme gerektirir?',
      answer:
        'Herkes için geçerli bir görüşme sayısı yoktur. Benim için geri dönüşsüz adımlar öncesinde seçeneklerin ve bakım ihtiyacının anlaşılması önemli; ek görüşme veya prova bu amaçla değerlendirilebilir. Daha fazla görüşmenin tek başına daha iyi sonuç sağlayacağı söylenemez. Beş soru bölümündeki listeyi görüşmeye hazırlık için kullanabilirsiniz.',
    },
    {
      question: 'Estetik diş hekimi seçerken neye dikkat etmek gerek?',
      answer:
        'Önerilen işlemin nedenini, alternatiflerini, risklerini ve bakım ihtiyacını anlaşılır biçimde açıklamasına dikkat edin. Ne kadar mine kaldırılacağını ve mevcut ağız sağlığı sorunlarının nasıl ele alınacağını sorun. Kararınızı yalnız bir görsele veya vaat edilen sonuca dayandırmayın; anlamadığınız noktaları yeniden konuşabilmelisiniz.',
      sourceRef: 5,
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
        'Müdahale sayısı tek başına sonucu belirlemez. Asıl soru, düşündüğünüz işlemin hangi değişimi hedeflediği ve bu hedef için gerekli olup olmadığıdır. Daha az işlem, herkes için daha iyi sonuç anlamına gelmez.',
    },
    {
      question: 'Müdahale yaptırmazsam yüzüm hızla kötüye gider mi?',
      answer:
        'Yüzünüz değişmeye devam eder; bu değişimin hızı ve görünümü kişiden kişiye farklıdır. Menopozla birlikte bazı kadınlarda değişim birkaç yıl içinde daha belirgin hissedilebilir. İşlem yaptırmamak bu süreci hızlandırmaz.',
    },
    {
      question: 'Menopozda dolgu yaptırmak yüzü gençleştirir mi?',
      answer:
        'Kolajen desteği azalmış, incelmiş bir ciltte yalnızca yoğun dolguyla hacim eklemek yüzü gençleştirmeyebilir; taşıyıcı gücü azalmış doku daha ağır ve şiş görünebilir. Hacim kaybı ile cildin doku kalitesi farklı sorunlardır. Hangisinin ön planda olduğunu muayenede ayırmak gerekir.',
    },
  ],
  '/zamansiz-yasam/vitaminler/magnezyum-menopozda-ne-ise-yarar/': [
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
    {
      question: "L-treonat ya da “beyin magnezyumu” soran bir hastaya nasıl yaklaşıyorsunuz?",
      answer:
        "Son zamanlarda magnezyum L-treonat özellikle hafızayı güçlendirdiği ve beyin yaşlanmasını yavaşlattığı iddiasıyla çok konuşuluyor. Hatta bazı ürünler doğrudan “beyin magnezyumu” adıyla tanıtılıyor.\n\nBunun arkasında bilimsel bir fikir var. Hayvan çalışmalarında magnezyum L-treonatın beyindeki magnezyum düzeylerini artırabildiği gösterilmiş. Ancak hayvanlarda elde ettiğimiz sonuçların insanlarda da aynı şekilde ortaya çıkacağını varsayamayız.\n\nİnsanlarda yapılan küçük çalışmalar da var. Bazılarında hafıza, dikkat veya uykuya ilişkin olumlu sonuçlar bildirilmiş. Fakat bu araştırmalar henüz L-treonatın diğer magnezyum türlerinden daha etkili olduğunu veya demansı önlediğini gösterecek düzeyde değil.\n\nBana böyle bir takviye soran hastamın önce neyi düzeltmek istediğini anlamaya çalışıyorum. Menopoz döneminde unutkanlık veya zihinsel bulanıklık yaşıyorsa bunun nedeni her zaman magnezyum eksikliği olmayabilir. Uyku bozuklukları, sıcak basmaları, tiroid sorunları, kullanılan ilaçlar veya başka nedenler de etkili olabilir.\n\nBir de ürünlerin üzerinde yazan miktarlara dikkat etmek gerekiyor. Örneğin 2.000 mg magnezyum L-treonat, 2.000 mg saf magnezyum anlamına gelmiyor. İçerdiği gerçek magnezyum miktarı çok daha düşük.\n\nBen L-treonatı tamamen etkisiz bir ürün olarak görmüyorum. Ancak bugün için diğer magnezyum türlerinden üstün olduğunu veya beyin yaşlanmasını önlediğini söyleyemem. Önce hastanın belirtilerini ve gerçekten magnezyum desteğine ihtiyacı olup olmadığını değerlendiriyorum.",
    },
    {
      question: "Mide koruyucu ya da idrar söktürücü kullanan menopozdaki bir kadında magnezyumu ne zaman gündeme getiriyorsunuz?",
      answer:
        "Bu hastalarda magnezyum konusuna biraz daha dikkat ediyorum. Çünkü bazı ilaçlar vücudun magnezyum dengesini değiştirebiliyor.\n\nÖrneğin omeprazol, pantoprazol veya esomeprazol gibi mide asidini azaltan ilaçlar uzun süre kullanıldığında bazı hastalarda magnezyum emilimini azaltabiliyor. Özellikle aylarca, hatta yıllarca kullanan kişilerde bunu akılda tutmak gerekiyor. Ancak bu ilaçları kullanan herkesin mutlaka magnezyum eksikliği yaşayacağını düşünmemek lazım.\n\nİdrar söktürücülerde ise kullanılan ilacın türü önemli. Furosemid veya hidroklorotiyazid gibi bazı ilaçlar idrarla magnezyum kaybını artırabiliyor. Buna karşılık spironolakton gibi bazı idrar söktürücüler magnezyum kaybını azaltabiliyor. Dolayısıyla hepsini aynı şekilde değerlendiremeyiz.\n\nBen özellikle uzun süre bu ilaçları kullanan, yeterince beslenemeyen veya kas krampları, güçsüzlük, çarpıntı gibi şikâyetleri bulunan hastalarda magnezyum eksikliğini düşünüyorum. Gerekli gördüğümde kandaki magnezyum düzeyine, böbrek fonksiyonlarına ve diğer elektrolitlere bakıyorum.\n\nAncak burada da önemli bir ayrıntı var: Kandaki magnezyumun normal olması, vücudun bütün magnezyum depolarının mutlaka yeterli olduğu anlamına gelmiyor. Sonuçları hastanın genel durumuyla birlikte yorumlamak gerekiyor.\n\nEksiklik saptarsak yalnızca takviye vermekle yetinmiyorum. Buna yol açabilecek ilaçları, beslenmeyi ve diğer nedenleri de gözden geçiriyorum. Özellikle böbrek fonksiyonları bozuk olan hastalarda kontrolsüz magnezyum kullanımı da sorun yaratabilir.\n\nKısacası, mide koruyucu veya idrar söktürücü kullanan her kadına otomatik olarak magnezyum önermiyorum. Ama özellikle uzun süreli kullanımda ve ek risk faktörleri varsa eksiklik ihtimalini göz ardı etmiyorum.",
    },
  ],
  '/bilimsel-pencere/yeni-arastirmalar/menopozda-hrt-avantajlari/': [
    {
      question: "HRT'nin en belirgin faydasını hastanıza nasıl anlatıyorsunuz?",
      answer:
        "Hastalarıma hormon tedavisinin en belirgin faydasının menopoz belirtilerini azaltarak yaşam kalitesini iyileştirmek olduğunu söylüyorum. Özellikle sıcak basmaları ve gece terlemeleri söz konusu olduğunda elimizdeki en etkili tedavi HRT.\n\nGece defalarca uyanan, ertesi gün yorgun ve huzursuz hisseden bir kadın için bunun ne kadar önemli olduğunu tahmin edebilirsiniz. Tedaviyle birlikte uykusu düzelen, gün içinde kendisini daha iyi hisseden çok sayıda hastamız oluyor.\n\nAma HRT'nin yararı yalnızca sıcak basmalarından ibaret değil. Vajinal kuruluk ve cinsel ilişkide ağrı gibi sorunlarda da etkili olabiliyor. Ayrıca kemik kaybını yavaşlatması ve kırık riskini azaltması önemli bir başka avantaj.\n\nYine de hastalarıma HRT'yi bir gençleşme tedavisi olarak anlatmıyorum. Amacımız menopozu ortadan kaldırmak değil, bu dönemin yaşam kalitesi ve sağlık üzerindeki olumsuz etkilerini mümkün olduğunca azaltmak.",
    },
    {
      question: "Sıcak basması olmayan bir kadında HRT'yi hangi amaçlarla değerlendiriyorsunuz?",
      answer:
        "Sıcak basması yok diye bir kadının hormon tedavisinden yarar görmeyeceğini düşünmüyorum. Önce başka şikâyetleri olup olmadığına bakıyorum. Örneğin vajinal kuruluk, cinsel ilişkide ağrı veya tekrarlayan idrar yolu enfeksiyonları olabilir. Böyle durumlarda çoğu zaman tüm vücudu etkileyen hormon tedavisi yerine lokal vajinal östrojen yeterli oluyor.\n\nKemik sağlığı da değerlendirdiğim önemli konulardan biri. Özellikle kemik kaybı veya kırık riski yüksek olan, menopozun üzerinden çok uzun zaman geçmemiş kadınlarda sistemik HRT bir seçenek olabilir.\n\nBir de erken menopoza giren kadınlar var. Özellikle 40 yaşından önce yumurtalık fonksiyonları kaybolmuş bir kadında, sıcak basması olmasa bile hormon tedavisini çok daha güçlü şekilde öneriyorum. Çünkü burada yalnızca belirtileri gidermekten değil, normal menopoz yaşına kadar sürmesi beklenen hormonların erken kaybının uzun vadeli etkilerini azaltmaktan söz ediyoruz.\n\nBuna karşılık 52 yaşında, hiçbir şikâyeti olmayan, kemik sağlığı iyi ve önemli bir risk faktörü bulunmayan kadına sırf menopoza girdi diye hormon tedavisi başlamam. Her kadının HRT kullanması gerektiğini düşünmüyorum.",
    },
    {
      question: "Kalp ve metabolizma için HRT'den ne beklenebileceğini nasıl açıklıyorsunuz?",
      answer:
        "Bu konuda hastalarıma özellikle dikkatli açıklama yapıyorum. Çünkü hormon tedavisinin kalbi koruduğu, kilo almayı önlediği veya yaşlanmayı yavaşlattığı yönünde çok fazla iddia var.\n\nÖstrojenin kolesterol, insülin duyarlılığı ve glukoz metabolizması üzerinde bazı olumlu etkileri olabileceğini biliyoruz. Ancak bu, hormon tedavisi kullanan her kadının kalp krizi veya felç riskinin azalacağı anlamına gelmiyor. Günümüzde HRT'yi yalnızca kalp hastalıklarını veya diyabeti önlemek amacıyla başlatmıyoruz.\n\nTedaviye hangi yaşta başlandığı da önemli. Menopozun ilk yıllarında, özellikle 60 yaşından küçük ve başka önemli risk faktörü olmayan kadınlarda yarar-risk dengesi genellikle daha uygun. Buna karşılık menopozdan 15 yıl sonra ilk kez hormon tedavisine başlamayı aynı şekilde değerlendiremeyiz.\n\nBir de ilacın nasıl kullanıldığı önemli. Özellikle pıhtılaşma riski yüksek kadınlarda ağızdan alınan östrojen yerine cilt yoluyla uygulanan tedavileri tercih edebiliyoruz.\n\nBenim yaklaşımım önce hastanın tansiyonuna, kilosuna, kan şekeri ve kolesterol değerlerine, sigara kullanımına ve kişisel risklerine bakmak. HRT gerekiyorsa bunları dikkate alarak tedaviyi seçiyorum.\n\nAma kalp ve metabolizma sağlığını korumanın temelinde hâlâ düzenli hareket, sağlıklı beslenme, sigaradan uzak durmak ve mevcut risk faktörlerini kontrol etmek var. Hormon tedavisini bunların yerine koyamayız.",
    },
    {
      question: "Kemik sağlığı için HRT'nin yararını ve tedavi bırakılınca ne olacağını nasıl anlatıyorsunuz?",
      answer:
        "Hastalarıma menopozdan sonra östrojenin azalmasıyla birlikte kemik kaybının hızlandığını anlatıyorum. Özellikle menopozun ilk yıllarında bu kayıp daha belirgin olabiliyor. Hormon tedavisinin önemli yararlarından biri de bu süreci yavaşlatması. Kemik yoğunluğunu korumaya yardımcı oluyor ve kırık riskini azaltıyor. Üstelik bu, yalnızca kemik yoğunluğu ölçümünde gördüğümüz bir değişiklik değil; kırıkların azaldığını gösteren klinik çalışmalarımız da var.\n\nAncak hastalarımın bilmesini istediğim bir nokta var: HRT'nin kemikler üzerindeki koruyucu etkisi büyük ölçüde tedavinin devam ettiği süreyle ilişkili. İlacı bıraktığımızda östrojenin sağladığı koruma azalıyor ve kemik kaybı yeniden hızlanabiliyor. Yani birkaç yıl hormon kullanıp kemiklerimizi kalıcı olarak koruma altına almış olmuyoruz. Tabii bu, tedaviyi bırakan her kadının hızla osteoporoz geliştireceği anlamına da gelmiyor.\n\nBu nedenle HRT'yi bırakmayı düşündüğümüzde yalnızca sıcak basmalarının geri gelip gelmeyeceğini değil, kemik sağlığını da değerlendiriyorum. Özellikle kemik yoğunluğu düşükse, daha önce kırık geçirilmişse veya başka risk faktörleri varsa kemik yoğunluğu ölçümü ve kırık riski değerlendirmesiyle sonraki adımı planlıyoruz. Gerektiğinde osteoporoza yönelik başka ilaçlara geçmek mümkün.\n\nBir de şunu vurguluyorum: Hormon tedavisi kullanmak kemik sağlığı için yapmamız gereken diğer şeylerin yerine geçmiyor. Düzenli direnç ve ağırlık taşıma egzersizleri, yeterli protein ve kalsiyum alımı, gerektiğinde D vitamini eksikliğinin düzeltilmesi hâlâ çok önemli. Ben HRT'yi kemik sağlığını korumak için elimizdeki etkili seçeneklerden biri olarak görüyorum ama tek seçenek olarak değil.",
    },
    {
      question: "HRT'yi kilo, cilt, saç veya gençleşme beklentisiyle isteyen bir kadına ne söylüyorsunuz?",
      answer:
        "Bu soruyla son yıllarda çok daha sık karşılaşıyorum. Özellikle sosyal medyada hormon tedavisi bazen sanki kilo verdiren, cildi gençleştiren, saçları güçlendiren ve yaşlanmayı durduran bir tedaviymiş gibi anlatılıyor. Ben hastalarıma önce şunu söylüyorum: Östrojenin azalması vücudumuzda gerçekten bazı değişikliklere neden oluyor ama bu değişikliklerin hepsini hormon vererek geri çeviremiyoruz.\n\nÖrneğin menopoz döneminde karın çevresinde yağlanma artabiliyor. Hormon tedavisinin vücut yağının dağılımı üzerinde bazı olumlu etkileri olabilir, ancak HRT bir zayıflama tedavisi değil. Tek başına anlamlı bir kilo kaybı sağlamasını beklemiyoruz. Aynı şekilde hormon tedavisinin mutlaka kilo aldırdığı düşüncesi de doğru değil.\n\nCilt konusunda biraz daha farklı bir durum var. Östrojenin cildin kolajen yapısı, kalınlığı ve elastikiyeti üzerinde etkili olduğunu biliyoruz. Hormon tedavisiyle bu özelliklerin bir kısmında iyileşme görülebiliyor. Ancak bunun gözle görülür bir gençleşme sağlayacağını veya kırışıklıkları ortadan kaldıracağını söylemek doğru olmaz. Üstelik yalnızca cildi güzelleştirmek amacıyla sistemik hormon tedavisi başlamayı önermiyorum.\n\nSaç dökülmesinde ise daha da dikkatli olmak gerekiyor. Menopozla birlikte saçlarda incelme görülebiliyor ama her saç dökülmesinin nedeni östrojen eksikliği değil. Genetik yatkınlık, tiroit hastalıkları, demir eksikliği ve başka nedenler de söz konusu olabilir. Dolayısıyla hormon tedavisini saç çıkaran bir tedavi gibi sunmak doğru değil.\n\nBenim için asıl önemli olan hastanın neyi düzeltmek istediği. Eğer sıcak basmaları, uyku bozukluğu, vajinal yakınmaları veya hormon tedavisinin yararlı olabileceği başka bir tıbbi durum varsa HRT'yi değerlendiriyorum. Tedavinin cilt veya vücut kompozisyonu üzerinde bazı ek yararları da olabilir. Ama yalnızca daha genç görünmek için hormon kullanmak isteyen, başka bir tedavi gereksinimi olmayan bir kadına HRT başlamam.\n\nHastalarıma söylediğim gibi, hormon tedavisi menopozun bazı olumsuz etkilerini azaltabilir ama yaşlanmayı durdurmaz. Sağlıklı yaş almak istiyorsak kaslarımızı, kemiklerimizi, metabolik sağlığımızı ve günlük yaşam alışkanlıklarımızı da korumamız gerekiyor. HRT, doğru hastada bunun bir parçası olabilir; tamamı değil.",
    },
  ],
  '/zihin-denge/duygusal-denge/perimenopozda-kaygi-artisi/': [
    {
      question: 'Perimenopozdaki kaygı artışı anksiyete bozukluğu anlamına gelir mi?',
      answer:
        'Hayır. Kaygı artışı tek başına bir anksiyete bozukluğu tanısı koydurmaz. Tanıda kaygının ne kadar sürdüğü, şiddeti, günlük hayatınıza etkisi ve başka olası nedenler birlikte değerlendirilir.',
    },
    {
      question: 'Kaygı hissi adet düzeni değişmeden de başlayabilir mi?',
      answer:
        'Olabilir; kaygı artışını veya uyku bölünmesini adet düzeninizde belirgin bir değişiklik olmadan da fark edebilirsiniz. Ancak kaygı tek başına perimenopoz tanısı koydurmaz. Yaşınız, adet öykünüz, sıcak basması gibi diğer belirtiler ve başka olası nedenler birlikte değerlendirilir.',
    },
    {
      question: 'Gece uyanmaları kaygıyı gerçekten artırabilir mi?',
      answer:
        'Uyku kaybı ertesi gün kaygıyı artırabilir; kaygı da yeniden uykuya dalmayı zorlaştırabilir. Gece terlemesi ve sıcak basması da uykuyu bölebilir.',
    },
    {
      question: 'Hangi durumda kaygıyı yoğunluğa bağlayıp geçiştirmemek gerekir?',
      answer:
        'Kaygı işinizi, uykunuzu veya ilişkilerinizi etkiliyorsa; tekrarlayan panik benzeri ataklar ya da çöküntü hali varsa profesyonel değerlendirme isteyin. Kendinize zarar verme düşüncesi için gecikmeden yardım alın. Bir planınız varsa, kendinizi güvende tutamıyorsanız veya kendinize zarar verdiyseniz yalnız kalmayın; güvendiğiniz birini yanınıza çağırın ve acil sağlık yardımı alın.',
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
        'Çoğu zaman hayır. Bu dönemde anlatılan şey daha çok dikkat, kelime bulma ve zihinsel hızın dalgalanmasıdır; uyku, stres ve hormonal geçiş birlikte rol oynayabilir. Belirgin ilerleme, günlük işleri yapamama veya ani yönelim kaybı, tek taraflı güçsüzlük, şiddetli baş ağrısı gibi ek belirtiler varsa konu yeniden ele alınmalıdır.',
    },
    {
      question: 'Beyin sisi ile uykusuzluk arasında bir bağ var mı?',
      answer:
        'Sık birlikte görülür. Gece terlemesi, sık uyanma ve yüzeysel uyku ertesi gün kelime bulmayı ve odağı sürdürmeyi daha kırılgan hale getirebilir. Sis yalnızca uykudan gelmez; stres ve hormon dalgalanması da aynı tabloya katılabilir.',
    },
    {
      question: 'Bu sis her zaman hormon geçişinden midir?',
      answer:
        'Hayır. Anemi, tiroid düzensizlikleri, B12 eksikliği, depresif dönemler ve bazı ilaç etkileri benzer bir sis yaratabilir. Bu yüzden her bulanıklığı yalnızca hormonal geçişle açıklamak zorunda değilsiniz; belirtiler günlük işleri bozuyorsa değerlendirme daha geniş tutulur.',
    },
  ],
  '/hormonal-gecis/perimenopoz/perimenopoz-ilk-isaretler/': [
    {
      question: 'Perimenopoz kaç yaşında başlar?',
      answer:
        "Perimenopoz genellikle 40'lı yaşların ortalarında başlıyor ama herkes için geçerli kesin bir yaşı yok. Bazı kadınlarda ilk değişiklikleri 40 yaş civarında, bazılarında 48–49 yaşında görüyoruz; daha erken başlayanlar da olabiliyor. Burada önemli olan yalnızca yaş değil, adet düzeninde ve vücutta nelerin değiştiği. Eskiden 28 günde bir adet gören bir kadın artık bazen 22, bazen 40 günde bir adet görmeye başlayabiliyor; gece terlemeleri, uyku sorunları veya sıcak basmaları da eşlik edebiliyor. Aile öyküsü de önemli: annesi veya kız kardeşi erken menopoza girmiş bir kadında benzer bir eğilim olabilir. Sigara kullanımı, yumurtalık dokusuna zarar veren ameliyatlar ve bazı kanser tedavileri de menopozun daha erken başlamasına neden olabiliyor. Ancak 38 yaşında adetleri düzensizleşen bir kadına hemen perimenopoz tanısı koymam; öncelikle başka nedenleri araştırırım. 40 yaşından önce ortaya çıkan belirtilerde erken yumurtalık yetmezliği olasılığını değerlendirmek gerekiyor. Perimenopoz bir gecede başlayan bir durum değil, yıllar içinde ilerleyen bir geçiş dönemidir. Her kadının bu süreci aynı yaşta ve aynı belirtilerle yaşamasını beklemiyoruz.",
    },
    {
      question: 'Adet görüyorsam hâlâ gebe kalabilir miyim?',
      answer:
        'Evet, kalabilirsiniz. Perimenopoz döneminde en sık karşılaştığım yanlış düşüncelerden biri, adetler düzensizleşmeye başladığında artık gebelik olmayacağına inanılması. Oysa yumurtlama tamamen bitmiş değil. Bazı aylarda yumurtlama olmayabilir, bazı aylarda normal şekilde gerçekleşebilir; adetleriniz birkaç ay gecikse bile yeniden yumurtlayabilirsiniz. Yaş ilerledikçe gebelik ihtimali azalıyor, özellikle 40 yaşından sonra bu azalma belirginleşiyor; ama ihtimalin azalması sıfıra inmesi demek değil. Gebelik istemeyen kadınlara korunmaya devam etmelerini öneriyorum. Genel yaklaşımımız, 50 yaşından önce son doğal adetini gören kadınların iki yıl, 50 yaş ve sonrasında görenlerin ise bir yıl daha korunması. Genellikle 55 yaşından sonra doğal gebelik ihtimali son derece düşük olduğu için korunma bırakılabiliyor. Doğum kontrol hapı veya hormonlu spiral gibi yöntemler kullanılıyorsa adet kanamalarına bakarak menopoz zamanını belirlemek her zaman mümkün olmuyor. Hormon replasman tedavisinin gebelikten korumadığını da özellikle hatırlatıyorum. Perimenopozda doğurganlık azalır ama tamamen sona ermez. Gebelik istemiyorsanız korunmayı, istiyorsanız da özellikle 40 yaşından sonra zaman kaybetmeden değerlendirme yaptırmayı öneriyorum.',
    },
    {
      question: 'Her sıcak basması perimenopoz mudur?',
      answer:
        'Hayır, değil. Sıcak basması perimenopozun en bilinen belirtilerinden biri ama her sıcak basmasını hormon değişikliklerine bağlamak doğru olmaz. Menopoza bağlı sıcak basmalarında genellikle göğüsten veya yüzden başlayan, kısa sürede yayılan ani bir sıcaklık hissi oluyor; buna terleme, çarpıntı ve bazen ardından üşüme eşlik edebiliyor. Özellikle geceleri yaşandığında uykuyu ciddi şekilde bozabiliyor. Ancak benzer yakınmaları tiroid bezinin fazla çalışmasında, bazı ilaçların kullanımında, kaygı durumlarında veya başka sağlık sorunlarında da görebiliyoruz. 47 yaşında, adetleri düzensizleşmiş ve gece terlemeleri başlamış bir kadında ilk düşündüğüm neden perimenopoz olur. 32 yaşında, adetleri tamamen düzenli olan ve yeni başlayan çarpıntı ile aşırı terleme tarif eden bir kadında önce başka nedenleri araştırmak isterim. Özellikle ateş, açıklanamayan kilo kaybı veya belirgin çarpıntı eşlik ediyorsa bunları yalnızca menopoza bağlamamak gerekir. Her kadının sıcak basması yaşaması gerekmiyor; bazı kadınlar perimenopozu neredeyse hiç sıcak basması olmadan geçirebiliyor. Tanıyı tek bir belirtiye ya da tek bir hormon sonucuna göre değil, yaş, adet düzeni, diğer şikâyetler ve gerektiğinde yapılan incelemelerle birlikte değerlendiriyorum.',
    },
    {
      question: 'Beyin sisi kalıcı mı?',
      answer:
        'Genellikle hayır. Perimenopoz döneminde bazı kadınlar unutkanlıktan, dikkatlerini toplamakta zorlanmaktan veya eskiden kolayca yaptıkları işleri daha yavaş yapmaya başladıklarından söz ediyor: bir odaya girip neden geldiğini unutmak, konuşurken aradığı kelimeyi bulamamak veya aynı anda birkaç işe odaklanamamak gibi. Bunlar hormonların dalgalandığı bu dönemde sık karşılaştığımız şikâyetler. Çoğu kadında bu sorunlar kalıcı olmuyor ve menopoz geçişi tamamlandıkça hafifleyebiliyor. Ancak her unutkanlığı östrojen azalmasına bağlamak doğru değil. Uyku bozuklukları, stres, depresyon, tiroid hastalıkları, B12 eksikliği ve bazı ilaçlar benzer yakınmalara neden olabiliyor. Belirtilerin ne zamandır devam ettiğine ve günlük yaşamı ne kadar etkilediğine bakıyorum. Ara sıra anahtarını nereye koyduğunu unutmakla, sık sık yolunu kaybetmek veya daha önce rahatlıkla yaptığı işleri artık yapamamak aynı şey değil. Unutkanlık giderek artıyorsa veya günlük yaşamı belirgin şekilde etkiliyorsa değerlendirmeyi ertelememek gerekir. Ani başlayan bilinç bulanıklığı, konuşma bozukluğu veya tek taraflı güçsüzlük acil değerlendirme gerektirir. Beyin sisi yaşayan her kadına hormon tedavisi başlamıyoruz; önce katkıda bulunabilecek nedenleri araştırmak ve özellikle uyku sorunlarını düzeltmek gerekiyor. Perimenopozdaki beyin sisi çoğu zaman geçici bir durum, ama her unutkanlık da menopozdan kaynaklanmıyor.',
    },
    {
      question: 'Hormon tedavisi bu dönemde şart mı?',
      answer:
        'Hayır, her kadının perimenopoz döneminde hormon tedavisi kullanması gerekmiyor. Bu dönemi çok az şikâyetle geçiren, günlük yaşamı etkilenmeyen birçok kadında herhangi bir ilaç tedavisine ihtiyaç duymuyoruz. Benim için önemli olan yalnızca hormon düzeyleri değil, kadının nasıl hissettiği ve belirtilerin yaşamını ne kadar etkilediği. Gece terlemeleri nedeniyle uyuyamayan, gündüz işine odaklanamayan veya sık sıcak basmaları yaşayan bir kadında hormon tedavisi oldukça yararlı olabilir. Tedaviye başlamak için adetlerin tamamen kesilmesini beklemek de gerekmiyor. Hafif yakınmaları olan bir kadında yaşam tarzı düzenlemeleri veya hormon dışı seçeneklerle de ilerleyebiliriz. Vajinal kuruluk ve cinsel ilişkide ağrı gibi sorunlarda bazen sistemik hormon tedavisi yerine yalnızca lokal vajinal östrojen yeterli oluyor. Önemli bir istisna var: 40 yaşından önce gelişen erken yumurtalık yetmezliğinde, belirgin şikâyet olmasa bile hormon tedavisini genellikle normal menopoz yaşına kadar öneriyoruz. Burada amaç yalnızca belirtileri azaltmak değil, erken östrojen kaybının kemikler ve genel sağlık üzerindeki etkilerini de sınırlamak. Hormon tedavisine ne tamamen karşıyım ne de her kadının kullanması gerektiğini düşünüyorum. Kararı hastanın yaşı, şikâyetleri, tıbbi geçmişi, riskleri ve tercihleriyle birlikte veriyoruz. Bu yazının amacı hormon tedavisine başlayıp başlamamanız gerektiğini söylemek değil; vücudunuzda nelerin olabileceğini anlamanıza ve hekiminizle hangi konuları konuşmanız gerektiğini görmenize yardımcı olmak.',
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
    {
      question: "Damardan NAD+ serumu uygulatmak isteyen bir hastaya ne söylersiniz?",
      answer: "Son zamanlarda NAD+ serumları oldukça popüler. Daha enerjik hissetmek, zihinsel performansı artırmak, hatta yaşlanmayı yavaşlatmak amacıyla yaptırmak isteyen hastalarla karşılaşıyorum.\n\nÖnce şunu açıklıyorum: NAD+ vücudumuz için gerçekten önemli bir molekül. Hücrelerin enerji üretiminde ve DNA onarımında görev alıyor. Ancak bir maddenin vücudumuzda önemli olması, onu damar yoluyla fazladan verdiğimizde daha sağlıklı veya daha genç olacağımız anlamına gelmiyor.\n\nBugün elimizde damar yoluyla NAD+ verilmesinin yaşlanmayı yavaşlattığını, menopozdaki yorgunluğu giderdiğini veya uzun vadeli sağlığı iyileştirdiğini gösteren güçlü klinik çalışmalar yok. Üstelik uygulamanın da bazı riskleri var. Bulantı, karın krampları, göğüste rahatsızlık hissi gibi yan etkiler bildiriliyor. Damar yoluyla verilen ürünün sterilitesi ve hazırlanma koşulları da ayrıca önem taşıyor.\n\nBana böyle bir uygulama yaptırmak isteyen hasta geldiğinde önce neden ihtiyaç duyduğunu anlamaya çalışıyorum. Sürekli yorgunsa uyku düzenini, kullandığı ilaçları, kansızlık veya tiroid sorunu gibi olasılıkları değerlendiriyorum. Çünkü bazen çözümü deneysel bir serumda ararken tedavi edebileceğimiz bir sorunu gözden kaçırabiliyoruz.\n\nBen bugün için NAD+ serumlarını rutin bir anti-aging tedavisi olarak önermiyorum. İleride iyi tasarlanmış çalışmalarla gerçek bir faydası gösterilirse elbette yaklaşımımız değişebilir. Ama şimdilik yüksek maliyetli bir uygulamayı, yararı kanıtlanmış bir tedavi gibi sunmak doğru olmaz.",
    },
    {
      question: "NMN ile NR arasında seçim yapmaya çalışan birine, ikisini ayıran ne bilgi verirsiniz?",
      answer: "NMN ve NR, vücudumuzun NAD+ üretmek için kullanabildiği iki farklı madde. Her ikisi de son yıllarda yaşlanma karşıtı takviyeler arasında çok konuşuluyor.\n\nAncak hastalarıma önce şunu söylüyorum: İkisinin de kandaki NAD+ düzeylerini artırabildiğini gösteren insan çalışmaları var. Buna karşılık hangisinin menopoz belirtilerini daha iyi azalttığını, kas gücünü daha fazla koruduğunu veya yaşlanmayı daha fazla yavaşlattığını bilmiyoruz.\n\nNR biraz daha uzun süredir araştırılıyor. Bu nedenle insanlarda kullanımı ve kısa dönem güvenliliği hakkında daha fazla bilgiye sahibiz. NMN konusunda da çalışmalar artıyor ve bugüne kadarki kısa süreli sonuçlar genel olarak iyi tolere edildiğini düşündürüyor.\n\nHatta yakın zamanda yapılan doğrudan karşılaştırmalı bir çalışmada, her iki maddenin de kandaki NAD+ düzeylerini benzer ölçüde yükselttiği görüldü. Ancak bu çalışma, hangisini kullanan insanların daha sağlıklı yaşlandığını araştırmıyordu.\n\nDolayısıyla hastam NMN mi, NR mi diye sorduğunda birini diğerinden kesin olarak üstün göstermiyorum. Ürünün içeriği, güvenilirliği, kullanımına ilişkin güvenlilik verileri ve kişinin sağlık durumu daha anlamlı değerlendirme başlıkları.\n\nAsıl sormamız gereken soru ise şu: NAD+ düzeyini artırmakla hastanın sağlığında gerçekten bir iyileşme sağlayabiliyor muyuz? Bugün bu soruya henüz yeterince güçlü bir yanıt veremiyoruz.\n\nBu nedenle yalnızca daha genç kalmak amacıyla NMN veya NR kullanımını rutin olarak önermiyorum.",
    },
    {
      question: "Hormon tedavisi kullanan bir kadın NMN ya da NR eklemek isterse neyi değerlendirirsiniz?",
      answer: "Öncelikle neden kullanmak istediğini sorarım. Çünkü menopoz hormon tedavisi alan bir kadının hâlâ sıcak basmaları, uyku sorunları veya yorgunluğu varsa ilk yapacağım şey yeni bir takviye eklemek olmaz.\n\nÖnce mevcut hormon tedavisinin uygun dozda ve doğru şekilde kullanılıp kullanılmadığını değerlendiririm. Örneğin gece terlemeleri devam ediyorsa östrojen tedavisinin yeterliliğine bakabiliriz. Uyku bozukluğu ön plandaysa bunun gerçekten menopozla ilişkili olup olmadığını araştırmak gerekir.\n\nNMN ve NR konusunda ise önemli bir belirsizlik var. Bugüne kadar östrojen veya progesteron tedavisiyle birlikte kullanıldıklarında ciddi bir etkileşime neden olduklarını gösteren güçlü kanıtlar bulunmuyor. Ancak bu kombinasyonların güvenli olduğunu kanıtlayan yeterli klinik çalışma da yok.\n\nBu nedenle hastanın kullandığı hormonların türünü, diğer ilaçlarını, karaciğer ve böbrek hastalığı bulunup bulunmadığını ve özellikle kanser öyküsünü öğrenmek isterim. Hormon duyarlı kanser öyküsü varsa daha da temkinli davranırım.\n\nBir başka önemli nokta da kullanım amacı. Hormon tedavisinin belirli menopoz belirtilerine karşı kanıtlanmış yararları var. NMN veya NR'nin buna ek olarak ne kadar fayda sağladığını ise bilmiyoruz.\n\nBen hormon tedavisi kullanan her kadına NMN veya NR kesinlikle yasaktır demiyorum. Ama güvenli oldukları ve hormon tedavisinin etkisini artırdıkları da gösterilmiş değil.\n\nDolayısıyla önce mevcut tedaviyi ve hastanın devam eden şikâyetlerini değerlendiriyorum. Kanıtlanmış bir ihtiyacı karşılamayan yeni bir takviyeyi, yalnızca anti-aging beklentisiyle tedaviye eklemeyi doğru bulmuyorum.",
    },
  ],
  '/zamansiz-yasam/deneysel/resveratrol-takviyesi/': [
    {
      question: "Hormon tedavisi kullanırken resveratrol eklemek mantıklı mı?",
      answer: "Öncelikle hastama neden resveratrol kullanmak istediğini sorarım. Çünkü menopoz hormon tedavisi alırken bir de resveratrol eklemenin mutlaka daha fazla yarar sağlayacağına dair elimizde güçlü kanıtlar yok.\n\nResveratrolün antioksidan ve iltihapla ilişkili süreçler üzerindeki etkileri uzun zamandır araştırılıyor. Ayrıca laboratuvar çalışmalarında östrojen reseptörleriyle etkileşebildiğini de biliyoruz. Ancak bu, vücutta doğrudan östrojen gibi davrandığı veya hormon tedavisinin etkisini artırdığı anlamına gelmiyor.\n\nBenim asıl dikkat ettiğim nokta, bu ikisinin birlikte kullanımının yeterince araştırılmamış olması. Özellikle yoğunlaştırılmış resveratrol takviyelerinin östrojen ve progesteron tedavileriyle uzun dönem güvenliliğini bilmiyoruz.\n\nÖrneğin hormon tedavisi kullanan bir kadın hâlâ sıcak basmalarından yakınıyorsa, çözümü hemen başka bir takviye eklemekte aramam. Önce mevcut tedavisinin dozunu, uygulama şeklini ve şikâyetlerinin neden devam ettiğini değerlendiririm.\n\nEklem ağrısı veya yorgunluk için düşünüyorsa da yaklaşımım farklı olur. Bu yakınmaların her zaman hormon eksikliğinden kaynaklanmadığını unutmamak gerekiyor.\n\nBen resveratrol ile hormon tedavisinin birlikte kullanılmasının kesinlikle zararlı olduğunu söylemiyorum. Ama ek bir yarar sağladığı ve güvenli olduğu da gösterilmiş değil. Bu nedenle yalnızca daha genç kalmak veya hormon tedavisini güçlendirmek amacıyla kullanılmasını önermiyorum.",
      sourceRef: 16,
    },
    {
      question: "Kan sulandırıcı kullanan biri resveratrol alabilir mi?",
      answer: "Bu konuda daha dikkatli davranıyorum. Çünkü resveratrolün laboratuvar çalışmalarında trombositlerin birbirine yapışmasını azaltabildiği gösterilmiş. Bu da kan sulandırıcı ilaçlarla birlikte kullanıldığında kanama riskinin artabileceği endişesini doğuruyor.\n\nÖrneğin warfarin, apiksaban, rivaroksaban veya aspirin kullanan bir hastaya resveratrol kapsülünü kendi kendine başlamasını önermem. Klopidogrel gibi trombositlerin çalışmasını azaltan ilaçlarda da aynı şekilde dikkatli olmak gerekiyor.\n\nBurada bir ayrıntıyı açıklamak isterim. Resveratrol ile bu ilaçların birlikte kullanılmasının insanlarda ne kadar kanama riskine yol açtığını gösteren yeterli klinik çalışmamız yok. Yani kesinleşmiş bir tehlikeden değil, ciddiye alınması gereken olası bir etkileşimden söz ediyoruz.\n\nÜstelik resveratrol karaciğerde bazı ilaçların parçalanmasını sağlayan enzimleri de etkileyebiliyor. Bu nedenle yalnızca kanama değil, başka ilaç etkileşimleri açısından da değerlendirme yapmak gerekebilir.\n\nBazen hastalarım, “Ama resveratrol üzümde de var, neden kapsülü sorun olsun?” diye soruyor. Çünkü besinlerle aldığımız küçük miktarlarla yoğunlaştırılmış kapsüllerdeki miktarlar aynı değil.\n\nBen kan sulandırıcı kullanan bir hastaya, yararı henüz kesinleşmemiş bir takviye için gereksiz risk almasını önermem. Özellikle de ortada tedavi etmemiz gereken belirli bir sorun yoksa. Bu nedenle resveratrol kapsülü kullanmadan önce mutlaka ilacını düzenleyen hekimle görüşmesini isterim. Kan sulandırıcı ilacını ise takviye kullanmak amacıyla kesinlikle bırakmamalı.",
      sourceRef: 22,
    },
    {
      question: "Menopozdaki eklem ağrısı için resveratrol denemeye değer mi?",
      answer: "Resveratrolün en ilginç araştırma alanlarından biri de eklem ağrısı. Özellikle menopoz sonrası kadınlarda yapılan bazı küçük çalışmalarda ağrıların azaldığı ve günlük yaşamın biraz daha rahatladığı bildirilmiş.\n\nAncak araştırmaların tamamı aynı sonucu vermiyor. Örneğin diz kireçlenmesi olan hastalarda yapılan daha büyük bir çalışmada resveratrol, ağrıyı azaltmak açısından plasebodan daha etkili bulunmadı. Sonraki bazı çalışmalarda ise olumlu sonuçlar bildirildi.\n\nDolayısıyla bugün resveratrolün eklem ağrısına kesinlikle iyi geldiğini söyleyemiyoruz.\n\nBenim için daha önemli olan, ağrının nedenini anlamak. Menopoz döneminde eklem ve kas ağrıları sık görülebiliyor ama her ağrıyı hormon değişikliklerine bağlayamayız. Örneğin dizde kireçlenme, omuzda donukluk, tendon sorunları veya iltihaplı romatizmal hastalıklar birbirinden farklı durumlar.\n\nÖzellikle eklemde belirgin şişlik, kızarıklık, ısı artışı veya uzun süren sabah tutukluğu varsa önce bunları araştırmak gerekir.\n\nTedavide de öncelikle doğru tanıya göre hareket ediyorum. Düzenli egzersiz, kasların güçlendirilmesi, gerektiğinde fizik tedavi ve uygun ağrı tedavileri çoğu zaman resveratrolden daha anlamlı seçenekler.\n\nPeki, hafif ve uzun süredir devam eden eklem ağrısı olan bir kadın resveratrolü özellikle denemek istiyorsa? Güvenlik açısından bir engel yoksa, sınırlı kanıtları ve belirsizlikleri konuşabiliriz. Ancak bunu kanıtlanmış bir tedavi olarak önermem ve etkili tedavilerin yerine koymam.\n\nBenim yaklaşımım şu: Resveratrol konusunda umut verici bazı sonuçlar var, ama henüz herkese önerecek kadar güçlü değiller. Özellikle ağrının günlük yaşamı etkilediği bir hastada, işe yarayıp yaramayacağı belirsiz bir takviye yerine önce ağrının nedenini bulmayı tercih ediyorum.",
      sourceRef: 23,
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
      question: 'Menopoz döneminde NMN ile NR arasında pratikte bir tercih farkı var mı?',
      answer:
        'Bugünkü bilgilerimizle, menopoz dönemindeki bir kadına NMN yerine NR’yi veya NR yerine NMN’yi özellikle tercih etmemi gerektirecek güçlü bir klinik neden yok.\n\nİkisi de vücudun NAD+ üretiminde kullandığı maddeler. İnsanlarda yapılan çalışmalarda her ikisinin de kandaki NAD+ düzeylerini artırabildiğini görüyoruz. NR biraz daha uzun süredir araştırılıyor ve hakkında daha fazla klinik güvenlilik verisi bulunuyor. Ancak bu, menopoz belirtilerinde daha etkili olduğu anlamına gelmiyor.\n\n2026’da yayımlanan, iki maddeyi doğrudan karşılaştıran bir çalışmada NR ve NMN’nin kandaki NAD+ düzeylerini benzer ölçüde artırdığı gösterildi. Çalışma yalnızca 14 gün sürdü ve menopoz belirtilerindeki iyileşmeyi değerlendirmedi.\n\nHastalarıma hep aynı ayrımı hatırlatıyorum: Bir takviyenin kan testinde bir değeri yükseltmesi, kendimizi daha iyi hissettireceğini veya bir hastalığı önleyeceğini kanıtlamaz. Dolayısıyla benim için soru NMN mi, NR mi olduğundan önce, bu takviyeyi neden kullanmak istediğiniz. Ateş basmasını azaltmak, uykuyu düzeltmek veya yorgunluğu gidermek için düşünüyorsanız, bugün elimizde bu amaçlarla kullanabileceğimiz çok daha iyi araştırılmış seçenekler var.',
    },
    {
      question: 'Ateş basması veya uyku için NAD+ düşünüyorsam, bu takviyeyi konuşmadan önce hangi kanıtlı seçenekler açılmalı?',
      answer:
        'Önce asıl sorunun ne olduğunu anlamaya çalışıyorum. Gece sıcak basması nedeniyle mi uyanıyorsunuz, yoksa sıcak basması olmadan da uykuya dalmakta mı zorlanıyorsunuz? Bunların tedavisi aynı değil.\n\nTemel sorun sıcak basmaları ve gece terlemeleriyse, öncelikle menopoz hormon tedavisinin uygun olup olmadığına bakıyorum. Her kadına hormon tedavisi vermiyoruz. Yaş, menopozun üzerinden geçen süre, kişisel riskler ve tıbbi öykü birlikte değerlendirilir. Uygun hastalarda hormon tedavisi, sıcak basmalarını azaltmak için hâlâ en etkili seçenek.\n\nHormon kullanamayan veya kullanmak istemeyen kadınlarda da seçeneklerimiz var. Menopoza yönelik bilişsel davranışçı terapi, bazı antidepresanlar, gabapentin ve nörokinin reseptörlerini hedefleyen yeni ilaçlar bunlardan bazıları. Hangisini seçeceğimiz belirtilere ve diğer sağlık sorunlarına bağlı.\n\nUyku sorunu ön plandaysa yaklaşımım biraz değişiyor. Önce gece terlemeleri dışında uykuyu bozan nedenlere bakıyorum: uyku apnesi, huzursuz bacak sendromu, tiroid sorunları, kullanılan ilaçlar veya kaygı. Özellikle kronik uykusuzlukta, uykusuzluğa yönelik bilişsel davranışçı terapiyi (CBT-I) ilk seçenekler arasında değerlendiriyorum. Düzenli hareket, kafein ve alkol kullanımının gözden geçirilmesi, uyku saatlerinin düzenlenmesi gibi alışkanlıklar da bu tedaviyi destekleyebilir.\n\nNAD+ takviyelerine ancak bunları konuştuktan sonra gelirim. Menopoz belirtileri için yararlı olabileceklerini düşündüren bazı ön araştırmalar bulunsa da, henüz standart tedavilerin yerine koyabileceğimiz kadar güçlü kanıtımız yok. Yeni bir takviyeyi yasaklamak için değil, işe yarama ihtimali daha yüksek olan seçenekleri kaçırmamanız için bu sırayı izliyorum.',
    },
    {
      question: 'Kanser öyküm var, şu an tedavi almıyorum. Kısa bir NAD+ denemesini nasıl konuşursunuz?',
      answer:
        'Böyle bir durumda NAD+ takviyesini konuşmayı reddetmem, ancak önermek konusunda oldukça temkinli davranırım. Önce hangi kanser türünü geçirdiğinizi, tanının ne zaman konduğunu, tedavisinin nasıl tamamlandığını ve bugün hastalığın durumu hakkında neler bildiğimizi öğrenmek isterim. Uzun yıllardır hastalıksız izlenen bir kadınla tedavisini birkaç ay önce tamamlamış, nüks riski yüksek bir hastayı aynı şekilde değerlendirmem.\n\nTemkinli olmamın nedeni, NAD+’nin yalnızca sağlıklı hücrelerin değil, kanser hücrelerinin de enerji metabolizmasında ve DNA onarımında rol oynaması. Bazı laboratuvar ve hayvan çalışmalarında NAD+ düzeylerini artıran maddelerin belirli tümörlerde istenmeyen etkileri olabileceğine ilişkin bulgular var. Bunun tersine sonuç veren deneysel araştırmalar da mevcut. Dolayısıyla bu takviyelerin insanlarda kanser nüksüne neden olduğunu söyleyemeyiz. Aynı şekilde kanser öyküsü olan kadınlarda güvenli olduklarını da henüz söyleyemiyoruz.\n\nTakviyenin yalnızca birkaç hafta kullanılması, kanser açısından güvenli olduğu anlamına gelmiyor. Bu konuda güvenilir bir doz veya güvenli kullanım süresi belirlenmiş değil. Bu nedenle özellikle hormon duyarlı kanser öyküsü olan, yakın zamanda tedavi tamamlamış veya nüks riski yüksek bir hastada NAD+ takviyesini önermem. İstek devam ediyorsa önce takip eden onkoloğuyla görüşmesini isterim.\n\nUzun süredir hastalıksız izlenen, onkoloğunun da sakınca görmediği bir hastada ise konuyu tamamen kapatmam. Beklenen yararın henüz kanıtlanmadığını, uzun dönem güvenlilik verilerinin bulunmadığını ve daha iyi araştırılmış seçeneklerimiz olduğunu açıkça anlatırım. Buna rağmen denemeyi düşünüyorsa, bunu otomatik olarak güvenli kabul etmek yerine mevcut ilaçları, olası etkileşimleri ve bireysel riskleri birlikte değerlendiririz. Benim yaklaşımım ne her NAD+ takviyesini tehlikeli ilan etmek ne de kanser tedavisi bitince bunları otomatik olarak güvenli saymaktır.',
    },
  ],
  '/zamansiz-yasam/deneysel/rapamisin-yaslanma-ilaci-kanit-ve-risk/': [
    {
      question: "\"Rapamisin yaşlanma ilacı\" diye gelen bir kadına nasıl yanıt veriyorsunuz? Farelerdeki sonuçlarla insanlardaki sonuçları nasıl açıklıyorsunuz?",
      answer:
        "Rapamisin son yıllarda yaşlanma araştırmalarında en çok ilgimi çeken ilaçlardan biri. Bunun da bir nedeni var. Farelerde yapılan çalışmalarda yaşam süresini uzatabildiği defalarca gösterildi. Yani ortada yalnızca teorik bir fikir yok.\n\nAma hastalarıma şunu anlatıyorum: Farelerde işe yarayan bir tedavinin insanlarda da aynı sonucu vereceğini düşünemeyiz. Farelerin yaşam süresi kısa, yaşlanma süreçleri bizimkinden farklı. İnsanlarda bir ilacın gerçekten ömrü uzatıp uzatmadığını göstermek ise çok daha uzun ve kapsamlı araştırmalar gerektiriyor.\n\nRapamisin, hücrelerin büyümesini ve enerji kullanımını düzenleyen mTOR adlı bir mekanizmayı etkiliyor. Yaşlanma araştırmacılarının ilgisini çekmesinin nedeni de bu.\n\nİnsanlarda yapılan ilk çalışmalar da var. Örneğin PEARL araştırmasında bazı olumlu sonuçlar bildirildi. Ancak bunlar henüz rapamisin kullanan insanların daha uzun veya daha sağlıklı yaşadığını göstermiyor.\n\nBen bu araştırmaları heyecan verici buluyorum. Ama bugün sağlıklı bir kadına yalnızca yaşlanmayı geciktirmek amacıyla rapamisin başlamam.\n\nHastalarıma da bunu açıkça söylüyorum: Rapamisin gelecekte yaşlanma tıbbında önemli bir yere sahip olabilir. Ama bugün için henüz o noktada değiliz.",
    },
    {
      question: "Rapamisinin bağışıklığı baskılayan bir ilaç olması sizi ne kadar düşündürüyor?",
      answer:
        "Açıkçası oldukça düşündürüyor. Çünkü rapamisin bir vitamin veya sıradan bir takviye değil. Organ nakli yapılan hastalarda bağışıklık sistemini baskılamak için de kullandığımız bir ilaçtan söz ediyoruz.\n\nElbette nakil hastalarındaki kullanım şekliyle yaşlanma araştırmalarında incelenen aralıklı uygulamalar aynı değil. Bazı küçük çalışmalarda bu farklı uygulamaların iyi tolere edildiğini görüyoruz. Ama bir ilacın birkaç ay iyi tolere edilmesi, yıllarca güvenle kullanılabileceği anlamına gelmiyor.\n\nBen özellikle sık enfeksiyon geçiren, bağışıklık sistemiyle ilgili bir hastalığı olan veya başka bağışıklık baskılayıcı ilaçlar kullanan kadınlarda çok daha temkinli olurum. Ağız yaraları, kan yağlarında yükselme ve yara iyileşmesinde gecikme de dikkat ettiğimiz diğer sorunlar.\n\nKanser öyküsü varsa konu biraz daha karmaşık. Rapamisinin hücre çoğalmasını baskılayan özellikleri var ve bu mekanizmadan bazı kanser tedavilerinde de yararlanılıyor. Ama bağışıklık sistemini baskılayan tedavilerin bazı kanser risklerini artırabildiğini de biliyoruz. Dolayısıyla rapamisini ne kanserden koruyan ne de her durumda kansere yol açan bir ilaç olarak tanımlamak doğru.\n\nAşılar da önemli. Özellikle canlı aşılarla ilgili uyarılar var; diğer aşılara verilen bağışıklık yanıtı da etkilenebilir.\n\nBana yalnızca genç kalmak için rapamisin kullanmak istediğini söyleyen sağlıklı bir hastaya şu soruyu sorarım: Henüz işe yaradığı kanıtlanmamış bir amaç için bütün bu belirsizlikleri göze almaya gerçekten değer mi?\n\nBen bugün için değmeyeceğini düşünüyorum. Ama bu, gelecekte daha güvenli ve etkili kullanım yöntemleri bulunamayacağı anlamına gelmiyor.",
    },
    {
      question: "Menopoza geçişte rapamisin gündeme gelirse yumurtalık yaşlanması ve gebelik açısından ne söylersiniz?",
      answer:
        "Bu konu benim için ayrıca ilginç. Çünkü rapamisinin yumurtalık yaşlanmasını yavaşlatıp yavaşlatamayacağı da araştırılıyor.\n\nHayvan deneylerinde umut verici sonuçlar elde edildi. Bazı çalışmalarda yumurtalıklardaki folikül rezervinin daha yavaş azaldığı görüldü. Şimdi araştırmacılar bunun kadınlarda da mümkün olup olmadığını anlamaya çalışıyor. Columbia Üniversitesinde yürütülen bir çalışma da bu amaçla başlatıldı.\n\nAncak hastalarıma özellikle şunu hatırlatıyorum: Yumurtalık rezervinin daha yavaş azalmasıyla gebelik şansının artması aynı şey değil.\n\nÖrneğin bir tedavinin AMH düşüşünü yavaşlattığını düşünelim. Bu bize yumurtaların kromozomal olarak daha sağlıklı olduğunu veya kadının daha kolay gebe kalacağını göstermez. Canlı doğum sonuçlarını da görmemiz gerekir.\n\nBir başka önemli konu, rapamisinin bazı kadınlarda adet düzensizlikleri ve yumurtalık kistleriyle ilişkilendirilmiş olması. Ayrıca gebelikte güvenli kabul edilmiyor. İlacın resmi kullanım bilgilerinde, tedavi boyunca ve bırakıldıktan sonraki 12 hafta etkili korunma öneriliyor.\n\nBu nedenle özellikle çocuk sahibi olmak isteyen bir kadına rapamisin önermem.\n\nDiyelim ki 39 yaşında bir kadın geldi ve yumurtalıklarını genç tutmak için rapamisin kullanmak istiyor. Ben önce yaşını, yumurtalık rezervini ve gebelik planını değerlendiririm. Çünkü bu yaşlarda en önemli konulardan biri zaman.\n\nHenüz işe yarayıp yaramayacağını bilmediğimiz bir tedaviyi denerken kadının mevcut gebelik şansını kaybetmesini istemem.\n\nRapamisin bir gün menopozu geciktirmek için kullanılabilir mi? Belki. Ama bugün böyle bir etkiyi kanıtladığımızı söyleyemiyoruz.",
    },
    {
      question: "Rapamisin kullanmak isteyen birinde başlamadan önce hangi tahlilleri ve ilaç etkileşimlerini kontrol edersiniz?",
      answer:
        "Önce neden kullanmak istediğini öğrenirim. Çünkü rapamisin için tıbbi bir neden bulunmasıyla yalnızca uzun yaşam beklentisiyle kullanmak istemesi benim açımdan çok farklı durumlar.\n\nRapamisin kullanımı gerçekten gerekli olan bir hastada önce genel sağlık durumunu değerlendiririm. Geçirdiği hastalıklar, enfeksiyonlar, kanser öyküsü, gebelik ihtimali ve kullandığı ilaçlar önemli.\n\nKan tahlillerinde özellikle tam kan sayımı, böbrek fonksiyonları, karaciğer enzimleri, kan şekeri ve kan yağlarına bakmak gerekir. Hastanın durumuna göre HbA1c, idrarda protein ve bazı enfeksiyonlarla ilgili testler de gerekebilir.\n\nAma yalnızca kan tahlili yaptırmak yeterli değil. Rapamisinin başka ilaçlarla etkileşimi de önemli.\n\nÖrneğin bazı antibiyotikler ve mantar ilaçları rapamisinin kandaki düzeyini ciddi şekilde artırabiliyor. Bazı epilepsi ilaçları ise azaltabiliyor. Verapamil ve diltiazem gibi kalp ilaçlarıyla da etkileşim olabiliyor. Hatta greyfurt suyu bile ilacın kandaki miktarını değiştirebiliyor.\n\nBu yüzden hastanın kullandığı bütün ilaçları, bitkisel ürünleri ve takviyeleri bilmek isterim.\n\nBir de şu var: Başlangıçta bütün sonuçların normal çıkması, ilacın daha sonra sorun yaratmayacağını garanti etmiyor. Tedavi sırasında da düzenli izlem gerekiyor.\n\nBen rapamisini birkaç kan testi yaptırdıktan sonra rahatlıkla kullanılabilecek bir anti-aging ürünü olarak görmüyorum. Gerçek bir tıbbi kullanım nedeni varsa, ilgili uzman tarafından takip edilmesi gereken bir ilaç.",
    },
    {
      question: "Hekim gözetimi olmadan internetten veya tanıdıktan rapamisin almak neden sorun?",
      answer:
        "İnternette rapamisin hakkında yazılanları okuyunca insanların neden meraklandığını anlayabiliyorum. Farelerde yaşam süresini uzattığı gösterilmiş, bazı araştırmacılar kendileri de kullanıyor ve uzun yaşam topluluklarında sürekli konuşuluyor.\n\nAma burada gözden kaçırılan bir şey var: Rapamisin hâlâ ciddi etkileri olabilen reçeteli bir ilaç. Üstelik sağlıklı insanlarda yaşlanmayı geciktirmek amacıyla nasıl ve ne kadar süre kullanılmasının güvenli olduğu da bilinmiyor.\n\nİnternetten alınan bir ürünün gerçekliğinden veya doğru koşullarda saklandığından her zaman emin olamazsınız. Ama benim asıl endişem bununla da sınırlı değil.\n\nÖrneğin kişi başka bir hastalık nedeniyle antibiyotik kullanmaya başlıyor. Bunun rapamisinle etkileşebileceğinin farkında değil. Ya da hiçbir şikâyeti olmadığı için her şeyin yolunda olduğunu düşünüyor ama kan yağları yükselmiş veya kan hücreleri etkilenmiş olabiliyor.\n\nBunlar kişinin kendi kendine kolayca takip edebileceği şeyler değil.\n\nBana rapamisin kullandığını söyleyen bir hastayı yargılamam. Ne zamandır kullandığını, neden başladığını, başka hangi ilaçları aldığını öğrenir ve olası riskleri değerlendiririm.\n\nAma sırf daha uzun yaşama umuduyla, doktor kontrolü olmadan böyle bir ilaca başlanmasını doğru bulmuyorum.\n\nYaşlanma araştırmalarını takip etmek başka, henüz sonuçlanmamış bir araştırmayı kendi üzerimizde denemek başka. Ben hastalarıma bu ayrımı hatırlatıyorum. Rapamisinin gelecekte neler sağlayabileceğini bilmiyoruz. Ama bugün elimizdeki bilgilerle sağlıklı insanların rutin olarak kullanmasını önerecek noktada değiliz.",
    },
  ],
  '/zamansiz-yasam/deneysel/mots-c-peptidi-kanit-ve-risk/': [
    {
      question: "“MOTS-c egzersiz yerine geçer mi?” diye soran, egzersiz yapmakta zorlanan bir kadına ne söylersiniz?",
      answer:
        "Öncelikle neden egzersiz yapmakta zorlandığını anlamaya çalışırım. Dizleri mi ağrıyor, çabuk mu yoruluyor, yoksa yoğun çalıştığı için zaman mı bulamıyor? Çünkü çözüm her zaman aynı değil.\n\nMOTS-c son yıllarda “egzersiz taklidi yapan molekül” olarak tanıtılıyor. Bunun bilimsel bir çıkış noktası var. Egzersiz yaptığımızda vücudumuzun ürettiği MOTS-c miktarı artabiliyor. Farelerde yapılan bazı çalışmalarda da dışarıdan verilen MOTS-c'nin fiziksel dayanıklılığı ve metabolik işlevleri iyileştirdiği görülmüş.\n\nAncak burada önemli bir fark var. Egzersiz sırasında vücudumuzda bir maddenin artması, o maddeyi enjekte ettiğimizde egzersizin bütün faydalarını elde edeceğimiz anlamına gelmiyor.\n\nÜstelik egzersiz yalnızca enerji harcamak değil. Kaslarımızı, kemiklerimizi, kalp ve damar sistemimizi, dengemizi ve ruh sağlığımızı da etkiliyor. MOTS-c enjeksiyonlarının insanlarda bu etkileri sağladığını gösteren güvenilir çalışmalarımız henüz yok.\n\nBen egzersiz yapmakta zorlanan bir kadına hemen spor salonuna gitmesini de söylemiyorum. Bazen kısa yürüyüşlerle, bazen oturarak yapılan kas güçlendirme hareketleriyle, bazen de bir fizyoterapistin yardımıyla başlanabilir.\n\nMOTS-c araştırmalarını ilginç buluyorum. Ama bugün için egzersizin yerine geçebilecek bir tedavi olarak görmüyorum. Egzersiz yapmak zorsa, önce onu nasıl daha kolay ve güvenli hâle getirebileceğimize bakmayı tercih ediyorum.",
    },
    {
      question: "Menopozdaki kilo artışı için MOTS-c'yi araştırıp gelen biriyle farelerdeki yumurtalık çalışmalarını nasıl konuşursunuz?",
      answer:
        "Menopoz döneminde kilo vermenin zorlaştığını söyleyen hastalarıma sık rastlıyorum. Özellikle karın çevresindeki yağlanma birçok kadını rahatsız ediyor. MOTS-c'yi araştırıp gelenler de genellikle bu maddenin hem metabolizmayı iyileştirebileceğini hem de yumurtalık yaşlanmasını yavaşlatabileceğini okumuş oluyor.\n\nAslında iki farklı araştırma alanından söz ediyoruz.\n\nFarelerde yapılan bazı çalışmalarda MOTS-c'nin insülin duyarlılığını ve yağ metabolizmasını olumlu etkilediği gösterilmiş. Yumurtalıklarla ilgili laboratuvar çalışmalarında ise yaşlanmış fare yumurtalarının ve insan granüloza hücrelerinin enerji üretimi üzerinde umut verici sonuçlar elde edilmiş.\n\nBunlar bilimsel açıdan önemli bulgular. Ancak henüz kadınlarda aynı sonuçların elde edildiğini bilmiyoruz.\n\nÖrneğin laboratuvarda yumurta hücresinin enerji üretimini iyileştirmek, o kadının yumurta kalitesinin gençleştiği veya gebelik şansının arttığı anlamına gelmiyor. Aynı şekilde farelerde yağlanmanın azalması, menopozdaki bir kadının MOTS-c enjeksiyonuyla kilo vereceğini kanıtlamıyor.\n\nBen böyle bir hastada önce kilo artışının ne zaman başladığına, bel çevresine, kas kütlesine, beslenmesine ve metabolik risklerine bakarım. Uyku sorunları, kullanılan ilaçlar ve gerektiğinde tiroid fonksiyonları da değerlendirmeye dahil olur.\n\nMOTS-c'nin gelecekte metabolizma veya yumurtalık yaşlanması konusunda bir tedaviye dönüşme ihtimalini dışlamıyorum. Ama bugün için menopozda kilo vermek ya da yumurtalıkları gençleştirmek amacıyla kullanılmasını önermiyorum.",
    },
    {
      question: "MOTS-c kullanmak isteyen birinde sizi en çok düşündüren durumlar neler?",
      answer:
        "Benim ilk endişem, MOTS-c'nin insanlarda yeterince araştırılmamış olması. Henüz hangi kullanım şeklinin güvenli olduğunu, uzun vadede ne tür etkiler ortaya çıkabileceğini bilmiyoruz.\n\nÖzellikle gebelik planlayan veya hâlâ gebe kalma ihtimali bulunan kadınlarda çok dikkatli olurum. MOTS-c'nin gebelik üzerindeki etkilerine ilişkin bazı hayvan deneyleri var ama bunlar insanlarda güvenli olduğunu göstermiyor. Bu nedenle gebelik düşünen bir kadına önermem.\n\nKanser öyküsü de benim için önemli. MOTS-c hücrelerin enerji kullanımı ve metabolik düzenlenmesiyle ilişkili bir molekül. Bazı laboratuvar araştırmalarında kanser hücreleri üzerindeki etkileri de incelenmiş. Ancak dışarıdan verilen MOTS-c'nin insanlarda kanser riskini veya nüks olasılığını nasıl etkilediğini bilmiyoruz.\n\nBu nedenle kanser geçirmiş bir hastada, özellikle de yakın zamanda tedavi tamamlanmışsa, yalnızca kilo vermek veya genç kalmak amacıyla böyle bir uygulamayı doğru bulmam.\n\nDiyabet ilaçları kullanan hastalarda ise başka bir belirsizlik var. Hayvan çalışmalarında MOTS-c'nin glukoz metabolizmasını etkilediğini biliyoruz. Acaba insülin veya kan şekerini düşüren başka ilaçlarla birlikte kullanıldığında ne olur? Henüz yeterli insan verimiz yok. Bu yüzden özellikle hipoglisemiye neden olabilen tedavilerle birlikte kullanımını güvenli kabul edemeyiz.\n\nBenim yaklaşımım MOTS-c'nin mutlaka zararlı olduğunu söylemek değil. Ama yararı kanıtlanmamış ve güvenliği yeterince bilinmeyen bir maddeyi, özellikle riskli hastalarda denemek için güçlü bir gerekçe görmüyorum.",
    },
    {
      question: "Kanda MOTS-c düzeyi ölçtürüp sonuca göre karar vermek isteyen birine ne dersiniz?",
      answer:
        "Aslında mantıklı görünen bir fikir. Madem MOTS-c yaşlanma ve metabolizmayla ilişkili, kandaki miktarını ölçelim ve eksikse yerine koyalım diye düşünülebilir.\n\nAma şu anda işler bu kadar basit değil.\n\nAraştırmalarda insanların kanındaki MOTS-c düzeyi ölçülebiliyor. Hatta bazı çalışmalarda yaşla, insülin direnciyle veya belirli hastalıklarla ilişkili değişiklikler bulunmuş.\n\nAncak henüz klinikte kullanabileceğimiz güvenilir bir normal değer aralığımız yok. Farklı laboratuvar yöntemleri birbirinden oldukça farklı sonuçlar verebiliyor. Ayrıca egzersiz yapmak gibi günlük bir etkinlik bile kandaki MOTS-c düzeyini geçici olarak değiştirebiliyor.\n\nDaha önemlisi, düşük MOTS-c düzeyinin mutlaka bir hastalığa neden olduğunu bilmiyoruz. Bazen ölçtüğümüz değişiklik, hastalığın nedeni değil sonucu olabilir.\n\nDiyelim ki hastamın MOTS-c düzeyi düşük çıktı. Bu sonuca bakarak ona enjeksiyon önermem. Çünkü hangi düzeyi hedeflememiz gerektiğini veya düzeyi yükseltmenin sağlığı iyileştireceğini bilmiyoruz.\n\nBen bugün için MOTS-c ölçümünü rutin bir yaşlanma veya metabolizma testi olarak kullanmıyorum. Araştırmalarda anlamlı olabilecek bir belirtecin, günlük hasta takibinde gerçekten işe yarayıp yaramadığını göstermek için daha fazla çalışmaya ihtiyacımız var.",
    },
    {
      question: "İnternetten ya da bir merkezden MOTS-c enjeksiyonu yaptırmış biri size geldiğinde ilk neyi sorarsınız?",
      answer:
        "Önce ne kullandığını ve ne zaman yaptırdığını öğrenmek isterim. Kaç kez enjeksiyon yapılmış, ürün nereden temin edilmiş, başka hangi ilaçlarla veya takviyelerle birlikte kullanılmış? Bunlar önemli.\n\nArdından herhangi bir şikâyeti olup olmadığını sorarım. Enjeksiyon yerinde kızarıklık, şişlik, ağrı, ateş, çarpıntı veya alışılmadık başka bir belirti gelişmiş mi?\n\nÇünkü MOTS-c'nin insanlarda güvenliliği yeterince araştırılmadığı gibi, piyasada enjeksiyon amacıyla sunulan ürünlerin içerik ve üretim koşullarıyla ilgili de ciddi belirsizlikler var.\n\nBir merkezin uygulamayı yapıyor olması veya ürünün üzerinde yüksek saflık oranı yazması, bunun insanlarda güvenli olduğu anlamına gelmiyor. Enjeksiyonlarda yalnızca etken madde değil, ürünün steril olması ve istenmeyen maddeler içermemesi de çok önemli.\n\nÖzellikle enfeksiyon veya alerjik reaksiyon düşündüren bir belirti varsa gecikmeden değerlendirme yapılması gerekir.\n\nAma hastanın hiçbir şikâyeti yoksa da otomatik olarak her şeyin güvenli olduğunu düşünmem. Kullandığı diğer ilaçları, metabolik hastalıklarını ve enjeksiyonu neden yaptırdığını gözden geçiririm. Gerektiğinde muayene ve uygun incelemelerle devam ederim.\n\nBöyle bir hastayı yargılamak istemem. İnsanlar özellikle kilo verme ve sağlıklı yaşlanma konusunda yeni yöntemleri merak edebiliyor. Ama kullandıkları ürünler hakkında doğru bilgiye sahip olmaları gerekiyor.\n\nBenim ilk amacım hastanın ne yaptığını eleştirmek değil, herhangi bir zarar görüp görmediğini anlamak. Ardından da henüz araştırma aşamasındaki bir maddenin neden kanıtlanmış bir tedavi gibi kullanılmaması gerektiğini konuşurum.",
    },
  ],
  '/zamansiz-yasam/deneysel/metformin-uzun-yasam-etiket-disi/': [
    {
      question: "Diyabeti olmayan bir kadın \"uzun yaşam için\" metformin isterse nasıl yanıt veriyorsunuz?",
      answer:
        "Böyle bir hastaya önce neden metformin kullanmak istediğini soruyorum. Çünkü son yıllarda metformin, diyabet ilacı olmaktan çıkıp neredeyse bir gençlik ilacı gibi konuşulmaya başladı.\n\nBunun tamamen temelsiz olduğunu söyleyemeyiz. Metforminin hücresel enerji metabolizması ve yaşlanmayla ilişkili bazı mekanizmalar üzerinde etkileri var. Diyabet hastalarında yapılan bazı gözlemsel araştırmalarda da ilginç sonuçlar elde edilmiş.\n\nAncak bunlar, diyabeti olmayan sağlıklı bir kadının metformin kullanarak daha uzun yaşayacağını kanıtlamıyor. Bugün elimizde böyle bir yararı gösteren güçlü klinik çalışmalar yok.\n\nPeki, hiç mi düşünmem? Elbette düşünebileceğim durumlar var. Örneğin hastanın prediyabeti, belirgin metabolik risk faktörleri veya daha önce geçirilmiş gebelik diyabeti varsa konuyu farklı değerlendiririm. Özellikle diyabet gelişme riski yüksek olan bazı hastalarda metformin kullanmanın bilimsel bir gerekçesi bulunuyor.\n\nAma kan şekeri normal, metabolik açıdan sağlıklı, düzenli egzersiz yapan ve yalnızca yaşlanmayı geciktirmek isteyen bir kadına metformin başlamam.\n\nBenim için burada önemli bir ayrım var: Bir hastalığı önlemek amacıyla, belirli risk faktörlerine dayanarak ilaç kullanmak başka; henüz kanıtlanmamış bir uzun yaşam beklentisiyle ilaç kullanmak başka.\n\nKısacası, metformine tamamen karşı değilim. Ama onu sağlıklı kadınlara rutin olarak önerebileceğimiz bir anti-aging ilacı olarak da görmüyorum.",
    },
    {
      question: "Egzersiz yapıyorum, kas kaybından korkuyorum. MASTERS sonucu sizi metformin konusunda ne kadar etkiliyor?",
      answer:
        "MASTERS çalışması benim için önemli. Çünkü yaşlanmayı geciktirmeye çalışırken, yaşlandıkça en çok korumak istediğimiz şeylerden biri olan kaslarımızı olumsuz etkileme ihtimalini gündeme getiriyor.\n\nBu çalışmada 65 yaş üzerindeki kadın ve erkekler direnç egzersizi yaptı. Katılımcıların bir kısmı metformin, diğer kısmı plasebo kullandı. On dört haftanın sonunda her iki grupta da egzersizin yararları vardı. Ancak metformin kullananlarda kas kütlesindeki artış daha azdı.\n\nBu sonuç, metforminin herkesin kaslarını erittiği anlamına gelmiyor. Kas gücündeki artış açısından da gruplar arasında istatistiksel olarak kesin bir fark gösterilemedi. Üstelik çalışma, diyabet tedavisine ihtiyacı olan hastaları değil, büyük ölçüde sağlıklı yaşlı bireyleri değerlendiriyordu.\n\nYine de bu bulguyu önemsiyorum.\n\nÖrneğin 60 yaşında, düzenli ağırlık çalışan, metabolik açıdan sağlıklı bir kadın bana yalnızca uzun yaşamak için metformin kullanmak istediğini söylerse, MASTERS çalışması başlamamasını önermem için ek bir neden olur.\n\nAma aynı kadında tip 2 diyabet veya metformin kullanımını haklı çıkaran önemli bir metabolik sorun varsa yaklaşımım değişir. O zaman ilacın kanıtlanmış yararlarını da hesaba katmamız gerekir.\n\nBenim için mesele metforminin egzersizin bütün faydalarını ortadan kaldırması değil. Böyle bir kanıt yok. Ama sağlıklı bir kadında kas gelişimini bir miktar sınırlama ihtimali varken, henüz kanıtlanmamış bir uzun yaşam yararı için neden kullanalım?",
    },
    {
      question: "Menopozdaki bir kadında metformin hangi durumlarda yaşlanma için değil, bir tanıya dayanarak kullanılır?",
      answer:
        "Menopoz döneminde kilo artışı, özellikle karın çevresinde yağlanma ve insülin direnciyle daha sık karşılaşabiliyoruz. Ancak bunların hepsi otomatik olarak metformin kullanılması gerektiği anlamına gelmiyor.\n\nÖncelikle tip 2 diyabet varsa metformin, hastanın genel durumuna göre değerlendirebileceğimiz ilaçlardan biri.\n\nPrediyabet varsa da bazı hastalarda kullanmayı düşünebiliriz. Özellikle fazla kilosu belirgin olan, kan şekeri değerleri diyabet sınırına yaklaşan veya daha önce gebelik diyabeti geçirmiş kadınlarda bu seçeneği daha ciddi değerlendiriyorum. Ama her prediyabet hastasının mutlaka metformin kullanması gerektiğini düşünmüyorum.\n\nPolikistik over sendromu da önemli bir örnek. PKOS yalnızca adet düzensizliği veya infertiliteyle ilgili değil; metabolik etkileri de olabilen bir durum. Özellikle fazla kilolu ve metabolik sorunları bulunan PKOS hastalarında metformin yararlı olabilir. Menopoz sonrasında da bu hastaların metabolik risklerini izlemeye devam etmek gerekiyor.\n\nİnsülin direnci konusunda ise biraz daha dikkatliyim. Tek başına yüksek insülin veya HOMA-IR sonucu gördüğüm her hastaya ilaç başlamıyorum. Kan şekeri değerlerini, bel çevresini, kilosunu ve diğer metabolik riskleri birlikte değerlendiriyorum.\n\nBenim için belirleyici olan, metforminin neden verildiğini açıkça söyleyebilmek.\n\nÖrneğin bir hastada diyabet gelişme riskini azaltmak amacıyla metformin kullanıyorsak bu, yaşlanmayı yavaşlatmak için metformin verdiğimiz anlamına gelmez. Birincisinin belirli hasta gruplarında klinik kanıtı var. İkincisinin ise henüz yok.",
    },
    {
      question: "Metformine başlamadan önce hangi kan testlerini istersiniz?",
      answer:
        "Metformine başlamadan önce iki şeyi mutlaka bilmek isterim: Hastanın kan şekeriyle ilgili durumu ne ve böbrekleri bu ilacı güvenle kullanabilecek durumda mı?\n\nBu nedenle açlık kan şekeri ve HbA1c değerlerine bakıyorum. Gerektiğinde şeker yükleme testi de isteyebilirim. Böylece gerçekten prediyabet veya diyabet bulunup bulunmadığını, varsa sorunun derecesini değerlendirebiliyoruz.\n\nBöbrek fonksiyonları ise güvenlik açısından özellikle önemli. Kreatinin ve hesaplanan glomerüler filtrasyon hızı, yani eGFR, mutlaka değerlendirdiğim ölçümler arasında. Çünkü böbrek fonksiyonları ciddi şekilde bozulmuş bir hastada metformin kullanmak tehlikeli olabilir.\n\nBunların dışında hastanın durumuna göre karaciğer enzimlerini, kan sayımını ve B12 vitaminini de değerlendirebilirim. Özellikle kansızlığı, sinir sistemiyle ilgili yakınmaları veya B12 eksikliği açısından risk faktörleri olan hastalarda başlangıç değerini bilmek yararlı.\n\nMetformin uzun süre kullanıldığında B12 düzeyini düşürebildiği için tedavi sırasında da bu konuyu takip etmek gerekiyor.\n\nAncak bütün hastalara aynı geniş kan tahlili paketini istemiyorum. Testleri kişinin yaşına, sağlık durumuna, kullandığı ilaçlara ve metformin kullanma nedenine göre seçiyorum.\n\nBenim için önemli olan yalnızca ilaca başlamadan önce birkaç test yapmak değil. İlacın gerçekten gerekli olduğundan emin olmak ve kullanımı sırasında hangi değerleri izleyeceğimizi bilmek.",
    },
    {
      question: "Hekim gözetimi olmadan internetten veya tanıdıktan metformin edinmek neden sorun?",
      answer:
        "Metformin eski ve çok kullanılan bir ilaç olduğu için bazen zararsızmış gibi algılanıyor. Üstelik ucuz olması da insanların gözünde onu sıradan bir takviyeye dönüştürebiliyor.\n\nOysa metformin bir takviye değil, reçeteli bir ilaç.\n\nEn sık karşılaştığımız yan etkileri bulantı, karın ağrısı ve ishal gibi sindirim sistemi yakınmaları. Uzun süreli kullanımda B12 eksikliği gelişebiliyor. Daha seyrek ama çok daha ciddi bir sorun olan laktik asidoz ise özellikle böbrek fonksiyonlarının bozulduğu veya vücudun oksijenlenmesinin etkilendiği bazı durumlarda ortaya çıkabiliyor.\n\nBir de hastanın başlangıçtaki böbrek fonksiyonlarını bilmek gerekiyor. Örneğin ciddi böbrek yetmezliği olan birinin bu ilacı kullanması uygun değil. Bazı ağır enfeksiyonlar, susuz kalma durumları veya kontrast madde kullanılan tetkiklerde de tedavinin geçici olarak yeniden düzenlenmesi gerekebiliyor.\n\nİnternetten güvenilir olmayan kaynaklardan ilaç temin edildiğinde buna ürünün gerçekliği, saklanma koşulları ve içeriğiyle ilgili belirsizlikler de ekleniyor.\n\nBana metformini bir arkadaşının tavsiyesiyle kullanmaya başladığını söyleyen hastayı azarlamam. Ama neden başladığını, gerçekten ihtiyacı olup olmadığını ve güvenle kullanıp kullanamayacağını mutlaka değerlendiririm.\n\nMetforminin uzun yıllardır kullanılıyor olması, herkes için uygun olduğu anlamına gelmiyor. Özellikle yalnızca uzun yaşamak amacıyla, doktor değerlendirmesi olmadan başlanmasını doğru bulmuyorum.",
    },
  ],
  '/zamansiz-yasam/deneysel/ghk-cu-menopoz-cilt/': [
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
        'Hayır. Yaş, uyku, stres, kas kütlesi, yağın nereye yerleştiği ve hormonal değişim birlikte etkili oluyor. Düzenli hareket eden kadınlarda da aynı tablo görülebilir. Bu yüzden tabloyu yalnızca hareketsizliğe bağlamak eksik bir okuma olur.',
    },
    {
      question: 'Tartı aynı kalırken bedende değişim olması mümkün mü?',
      answer:
        'Evet, bu dönem için tanıdık bir durum. Kas kütlesi azalırken yağ başka bir bölgeye kayabiliyor. Sayı sabit kalsa bile kıyafetlerin üzerinizdeki duruşu ve genel his değişebilir.',
    },
    {
      question: 'Hızlı kilo verme yöntemleri bu dönemde işe yarar mı?',
      answer:
        'Çoğunlukla kalıcı bir sonuç sunmuyor. Belirgin kısıtlama kısa vadede tartıyı hareket ettirse de kas kaybını hızlandırabiliyor ve kilo genellikle geri geliyor. Yavaş ama sürdürülebilir bir denge daha kalıcı olabiliyor.',
    },
    {
      question: 'Protein miktarı nasıl belirlenmeli?',
      answer:
        'Genel bir formül herkese uymuyor. Araştırmalarda sık geçen yaklaşım protein alımını artırmayı işaret ediyor; kesin miktar yaş, aktivite düzeyi ve genel sağlık durumuna göre hekim veya diyetisyenle birlikte değerlendirilmesi gereken bir aralıktır.',
    },
    {
      question: 'Bel çevresi ölçümü neden tartıdan daha bilgilendirici kabul ediliyor?',
      answer:
        'Tartı toplam kütleyi gösterir, yerleşimi göstermez. Bel çevresi, visseral yağ artışına dair daha doğrudan bir sinyal taşıdığı için kilo değerinden bağımsız bir risk göstergesi olarak değerlendiriliyor.',
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
        'Tıbbi tanım tek bir eşiği işaretler: son adetten sonra on iki ay. Bu eşik o anda değil, bir yıl sonra geriye dönük netleşir. Öncesindeki yıllar perimenopoz geçişidir; yaşantı olarak süreç, tanım olarak eşik yan yana durur.',
    },
    {
      question: 'Menopoz belirtileri son adetle birlikte hemen biter mi?',
      answer:
        'Hayır. Sıcak basması ve gece terlemesi birçok kadında zamanla hafifler; kiminde yıllarca sürebilir. Uyku, cilt kuruluğu, libido veya odaklanma bazı kadınlarda eşiğin ardından da devam edebilir. Seyir kişiye göredir; yalnızca takvime bakarak anlaşılmaz.',
    },
    {
      question: 'Menopoz sonrası dönemde en çok hangi sağlık başlıkları öne çıkar?',
      answer:
        'Kemik sağlığı, kalp-metabolizma dengesi, uyku ve bel çevresindeki değişim daha görünür hale gelir. Vajinal kuruluk ve idrar yolu konforu da bu dönemin parçası olabilir. Bu yüzden dönem yalnızca adetin durması olarak değil, yeni bir sağlık takvimi olarak okunur.',
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
        'Tek başına menopoza özgü değildir. Kasın yavaşça azalması ve yağın başka bölgelere yerleşmesi yaş almanın da parçasıdır. Östrojen düşüşü bu kayışın eğimini dikleştirebilir; bu yüzden menopoz, yaş almanın içinde ayrı bir katman olarak okunur. Sayının yatışıp bedenin değişmeyi sürdürmesi yaygın bir gözlemdir.',
    },
    {
      question: 'BMI normal aralıkta ama yağ oranı yüksek; ne yapmalı?',
      answer:
        'Önce hekimle birlikte bakmak gerekir — sizin tablonuzda yağın karın çevresinde mi yoksa başka yerlerde mi toplandığı, metabolik açıdan farklı anlamlar taşıyabilir. Bu tek başına bir alarm olmak zorunda değildir. Direnç antrenmanı, yeterli protein ve uyku düzeni, kompozisyon tablosunu zaman içinde değiştirebilen üç dayanak olarak birlikte değerlendirilir.',
    },
    {
      question: 'Kompozisyon takibi için tek bir doğru yöntem var mı?',
      answer:
        'Tek bir doğru yöntem iddiası fazla kesin olur. Ev tartısının da bir yeri vardır; yanına bedeni gözlemleme alışkanlığı ve hekimle karar verilen aralıklı bir kompozisyon ölçümü, tablonun içini görmeye yardım edebilir. Sıklık da o karara dahildir.',
    },
    {
      question: 'Direnç antrenmanı menopozda gerçekten kritik mi?',
      answer:
        'Düzenli direnç antrenmanının kas kütlesini korumaya yardımcı olabileceği araştırmalarda sık konuşuluyor; menopoz döneminde bu eğilim ayrıca değerli bulunur. Zorunluluk diline çevirmemek de önemlidir: başlama eşiği kişiden kişiye değişir. Küçük, haftaya yerleşmiş başlangıçlar zamanla fark bırakabilir.',
    },
    {
      question: 'Protein için bir kural var mı?',
      answer:
        'Sayısal hedefi hekim belirler. Genel olarak ana öğünlerde proteinin tabakta görünür yer alması, öğünleri kompozisyon açısından daha bilinçli kurmaya yardımcı olabilir. Yerleştiğinde sürekli tartmaya gerek kalmaz.',
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
  '/zamansiz-yasam/deneysel/coenzyme-q10-takviyesi/': [
    {
      question: 'CoQ10 gerçekten anti-aging için güçlü kanıtlı bir takviye mi?',
      answer:
        'CoQ10 son yıllarda yaşlanma karşıtı takviyeler arasında oldukça popüler oldu. Bunun bilimsel bir gerekçesi de var. Koenzim Q10, hücrelerimizin enerji üretiminde görev alıyor ve antioksidan özelliklere sahip. Yaş ilerledikçe bazı dokulardaki düzeyleri de azalabiliyor.\n\nAncak burada önemli bir ayrım var: Bir maddenin vücutta önemli bir görevi olması, onu takviye olarak aldığımızda yaşlanmayı yavaşlatacağı anlamına gelmiyor.\n\nCoQ10 konusunda insanlarda yapılmış çalışmalar var. Bazılarında yorgunluk veya belirli sağlık sorunları açısından olumlu sonuçlar bildirilmiş. Ancak sağlıklı insanların daha uzun yaşadığını, yaşlanmaya bağlı hastalıkların azaldığını veya fiziksel ve zihinsel işlevlerin belirgin şekilde korunduğunu gösteren güçlü kanıtlara sahip değiliz.\n\nÜstelik kanımızdaki CoQ10 düzeyini artırmakla kaslarımızın ya da diğer organlarımızın daha iyi çalışmasını sağlamak aynı şey değil.\n\nBu nedenle menopoz dönemindeki bir kadına yalnızca yaşlanmayı geciktirmek amacıyla rutin CoQ10 önermiyorum. Önce neyi iyileştirmek istediğinizi konuşmayı tercih ediyorum. Yorgunluk mu, uyku mu, kas gücü mü, yoksa cilt değişiklikleri mi? Çünkü bu sorunların her biri için değerlendirmemiz gereken farklı nedenler ve daha iyi araştırılmış yaklaşımlar var.\n\nCoQ10’un biyolojik olarak önemli olması tartışmasız. Ama güçlü bir anti-aging tedavisi olduğunu söylemek için henüz erken.',
    },
    {
      question: 'Statin kullanan biri için CoQ10 konusu neden ayrı konuşuluyor?',
      answer:
        'Kolesterol düşürmek için kullanılan statinler, vücudun CoQ10 üretiminde de rol oynayan bir metabolik yolu etkiliyor. Bu nedenle statin kullanan kişilerde kandaki CoQ10 düzeyleri azalabiliyor.\n\nBuradan hareketle yıllardır şöyle bir düşünce var: Acaba statin kullanan kişilerde görülebilen kas ağrılarını CoQ10 takviyesiyle azaltabilir miyiz?\n\nAslında mantıklı bir soru. Üstelik bazı küçük çalışmalarda olumlu sonuçlar da görülmüş. Ancak araştırmaların tamamına baktığımızda sonuçlar birbiriyle tutarlı değil. Bu yüzden güncel kardiyoloji kılavuzları statin kullanan herkese veya statine bağlı kas şikâyeti yaşayanlara rutin CoQ10 başlanmasını önermiyor.\n\nBenim için önemli olan, kas ağrısı yaşayan hastada önce bunun gerçekten statinle ilişkili olup olmadığını anlamak. Çünkü tiroid hastalıkları, yoğun egzersiz, başka ilaçlar veya farklı kas sorunları da benzer yakınmalara neden olabiliyor.\n\nŞikâyetler statinle ilişkili görünüyorsa, ilacın dozunu değiştirmek, farklı bir statin denemek veya gerektiğinde başka kolesterol düşürücü tedavilerden yararlanmak gibi seçeneklerimiz var. CoQ10 konusunu da beklentilerinizle birlikte konuşabiliriz. Ancak yararının kesin olmadığını açıklamak gerekiyor. Özellikle kalp ve damar hastalığı riski yüksekken, CoQ10 kullanmak amacıyla statin tedavisini kendi kendinize bırakmanızı kesinlikle istemem.\n\nKısacası, statin kullananlarda CoQ10’u konuşmamızın somut bir biyolojik nedeni var. Fakat bu, takviyenin her hastada işe yaradığını gösteren bir kanıt değil.',
    },
    {
      question: 'Takviye reklamı ile klinik kanıtı ayırmak için ilk bakılacak şey nedir?',
      answer:
        'Benim ilk baktığım şey, reklamda söylenen faydanın insanlarda yapılan güvenilir araştırmalarla gerçekten gösterilip gösterilmediği.\n\nÖrneğin bir takviyenin hücrelerde oksidatif stresi azalttığını veya kandaki bir maddenin düzeyini artırdığını okumak ilginç olabilir. Ama benim asıl öğrenmek istediğim, bunun insanın hayatında neyi değiştirdiği. Daha iyi uyuyor mu? Kas gücü artıyor mu? Günlük yaşamını daha rahat sürdürebiliyor mu? Hastalık riski gerçekten azalıyor mu?\n\nBir de araştırmanın nasıl yapıldığına bakmak gerekiyor. Sadece birkaç kişinin takviye kullandıktan sonra kendini daha iyi hissetmesi yeterli değil. Mümkünse takviyenin plaseboyla karşılaştırıldığı, katılımcıların rastgele gruplara ayrıldığı ve yeterli süre izlendiği çalışmaları görmek isterim. Sonucun başka araştırmalarda da tekrarlanabilmesi önemli.\n\nReklamlarda sık karşılaştığım bir başka durum da hayvanlarda veya laboratuvar ortamında elde edilen sonuçların doğrudan insanlara uygulanması. Oysa farelerde umut verici görünen bir etki, insanlarda aynı sonucu vermeyebilir.\n\nBir ürünün doğal olması, çok satılması veya tanınmış kişiler tarafından önerilmesi de etkinlik ve güvenlilik kanıtı değil.\n\nHastalarıma takviye reklamlarını değerlendirirken tek bir soru sormalarını öneriyorum: “Bu ürünün ne yaptığı anlatılıyor, peki bunu kullanan insanlarda gerçekten neyin iyileştiği gösterilmiş?” Bence bilimsel kanıtla pazarlama arasındaki en önemli fark burada başlıyor.',
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
  '/zamansiz-yasam/vitaminler/fitoestrojenler-menopozda-ne-ise-yarar/': [
    {
      question: "Soya sütü ve tofu yerine kapsül almak mantıklı mı?",
      answer:
        "Ben genellikle soyanın kapsül olarak değil, besin olarak tüketilmesinden yanayım. Çünkü tofu veya soya sütü tükettiğinizde yalnızca fitoöstrojen almıyorsunuz; protein ve başka yararlı besin öğeleri de alıyorsunuz.\n\nKapsüllerde ise soyanın içindeki izoflavonlar yoğunlaştırılmış hâlde bulunuyor. İlk bakışta daha güçlü bir etki sağlayacakmış gibi görünebilir ama işin ilginç tarafı, daha yüksek miktarda izoflavon almanın daha iyi sonuç verdiğini gösteren güçlü kanıtlarımız yok.\n\nÖzellikle sıcak basmaları için yapılan çalışmalar oldukça karışık. Bazılarında küçük faydalar görülmüş, bazılarında ise plaseboyla belirgin bir fark bulunamamış.\n\nBu nedenle bana soya kapsülü soran bir hastaya önce neden kullanmak istediğini soruyorum. Sağlıklı beslenmek içinse kapsüle gerek yok. Sıcak basmalarını azaltmak için düşünüyorsa da elimizde daha etkili seçenekler var.\n\nKısacası, soya sütü içmek başka, yüksek miktarda izoflavon içeren bir kapsülü her gün kullanmak başka. İkisini aynı şekilde değerlendirmiyorum.",
    },
    {
      question: "Meme kanseri öyküsü olan biri soyayı tüketebilir mi?",
      answer:
        "Bu konuda özellikle meme kanseri geçirmiş kadınların endişelendiğini biliyorum. Çünkü soyanın içinde fitoöstrojenler var ve doğal olarak, “Acaba östrojen gibi davranıp hastalığımı tekrar tetikler mi?” diye düşünüyorlar.\n\nAma soyanın içindeki fitoöstrojenlerle vücudumuzun ürettiği östrojen aynı şey değil. Üstelik bugüne kadar yapılan insan araştırmalarında, normal miktarlarda soya tüketmenin meme kanserinin tekrarlama riskini artırdığı gösterilmedi.\n\nHatta bazı büyük araştırmalarda soya tüketen kadınlarda daha olumlu sonuçlar görülmüş. Tabii buradan soyanın meme kanserini önlediği veya tedavi ettiği sonucunu çıkaramayız.\n\nBu nedenle meme kanseri geçirmiş bir kadına yalnızca hastalık öyküsü var diye tofu veya soya sütünü bırakmasını söylemem. Normal beslenmesinin bir parçası olarak tüketebilir.\n\nAma iş soya izoflavonu kapsüllerine gelince daha temkinliyim. Çünkü bunlar besinlerden çok daha yoğun miktarlarda fitoöstrojen içerebiliyor ve meme kanseri geçirmiş kadınlarda uzun dönem güvenlilikleri yeterince araştırılmış değil.\n\nÖzellikle hormon duyarlı meme kanseri geçirmiş veya tamoksifen ya da aromataz inhibitörü kullanan bir hastada, onkoloğunun görüşünü almadan bu takviyelere başlanmasını istemem.\n\nYani hastalarımı soyadan korkutmuyorum. Benim asıl çekincem, normal bir besini güvenle tüketebiliyor olmamızın, onun yoğunlaştırılmış takviyesinin de aynı derecede güvenli olduğu şeklinde yorumlanması.",
    },
    {
      question: "Keten tohumu ile kırmızı yonca arasında hangisi öne çıkar?",
      answer:
        "Eğer bana sağlıklı beslenme açısından soruyorsanız keten tohumunu tercih ederim. Çünkü lif içeriyor, bitkisel omega-3 yağ asitleri sağlıyor ve beslenmeye kolayca eklenebiliyor.\n\nAma sıcak basmalarına hangisi daha iyi geliyor diye soruyorsanız cevap o kadar net değil.\n\nKeten tohumunun menopozdaki sıcak basmalarını belirgin şekilde azalttığını gösteren güçlü kanıtlarımız yok. Kırmızı yonca ise içerdiği izoflavonlar nedeniyle bu amaçla daha fazla araştırılmış. Bazı çalışmalarda küçük iyileşmeler görülmüş ama sonuçlar birbirini yeterince desteklemiyor.\n\nDolayısıyla kırmızı yoncayı sıcak basmaları için güvenilir bir tedavi olarak öneremiyorum. Özellikle hormon duyarlı kanser öyküsü olan kadınlarda takviye şeklinde kullanılmasına daha da dikkat etmek gerekiyor.\n\nBen hastalarıma keten tohumunu mucizevi bir menopoz tedavisi olarak değil, sağlıklı beslenmenin bir parçası olarak öneriyorum. Kırmızı yonca kapsülü almak içinse güçlü bir neden görmüyorum.\n\nSıcak basmaları günlük yaşamı etkiliyorsa, bu iki ürünle vakit kaybetmek yerine gerçekten etkili olabilecek tedavileri konuşmak daha mantıklı.",
    },
    {
      question: "Equol üreticisi olmak ne demek, test yaptırmak gerekir mi?",
      answer:
        "Soya tükettiğimizde içindeki bazı maddeler bağırsak bakterilerimiz tarafından başka maddelere dönüştürülüyor. Bunlardan biri de equol.\n\nAma herkesin bağırsak bakterileri equol üretemiyor. Bazı insanlar üretiyor, bazıları üretmiyor. Bu nedenle araştırmalarda insanları “equol üreticileri” ve “üretici olmayanlar” diye iki gruba ayırıyorlar.\n\nPeki, bu neden önemli? Çünkü equol, östrojen reseptörleriyle etkileşime girebiliyor. Bu yüzden bilim insanları, equol üreten kadınların soyanın menopoz belirtileri üzerindeki etkilerinden daha fazla yararlanıp yararlanmadığını araştırıyor.\n\nİlginç sonuçlar var ama henüz kesin bir şey söyleyemiyoruz. Equol üretiyor olmanız, soyanın sıcak basmalarınızı mutlaka azaltacağı anlamına gelmiyor.\n\nBunu öğrenmek için testler de var. Ancak ben hastalarıma rutin olarak yaptırmalarını önermiyorum. Çünkü sonuç ne çıkarsa çıksın tedavi yaklaşımımızı değiştirecek kadar güvenilir bir bilgi elde etmiş olmuyoruz.\n\nÖrneğin equol üreticisi olduğunuzu öğrensek bile size mutlaka soya kapsülü önermem. Üretici değilseniz de soya tüketmenin beslenme açısından yararsız olduğunu söylemem.\n\nAraştırma açısından güzel bir konu ama bugün için hastanın mutlaka bilmesi gereken bir özellik değil.",
    },
    {
      question: "Hormon tedavisi alırken fitoöstrojen de kullanılır mı?",
      answer:
        "Önce bir ayrım yapalım. Menopoz hormon tedavisi kullanan bir kadının tofu yemesinde, soya sütü içmesinde veya beslenmesine keten tohumu eklemesinde genel olarak bir sorun görmüyorum.\n\nAma östrojen ve progesteron tedavisi alırken bir de soya izoflavonu veya kırmızı yonca kapsülü kullanmak isterse durup nedenini konuşmak isterim.\n\nÇünkü bu takviyeleri hormon tedavisine eklediğimizde daha iyi sonuç aldığımızı gösteren yeterli araştırma yok. Uzun süre birlikte kullanıldıklarında güvenlilikleri konusunda da bilgilerimiz sınırlı.\n\nBöyle bir hastaya ilk sorum, “Hormon tedavisine rağmen sizi rahatsız eden ne var?” olur.\n\nSıcak basmaları devam ediyorsa belki kullandığı hormonun dozu veya uygulama şekli uygun değildir. Uyku sorunu varsa bunun başka nedenleri olabilir. Yorgunluk yaşıyorsa önce bunun nedenini araştırmak gerekir.\n\nYani her şikâyette tedaviye yeni bir ürün eklemeyi doğru bulmuyorum. Özellikle meme kanseri öyküsü, başka ilaç kullanımı veya beklenmedik vajinal kanama varsa daha dikkatli olmak gerekiyor.\n\nFitoöstrojen içeren besinleri yasaklamıyorum. Ancak yoğunlaştırılmış kapsülleri de hormon tedavisini güçlendiren masum bir destek gibi görmüyorum.\n\nBence önce mevcut tedavinin neden yeterli gelmediğini anlamak gerekiyor. Çoğu zaman çözüm, üzerine yeni bir takviye eklemekten daha farklı bir yerde olabiliyor.",
    },
  ],
  '/zamansiz-yasam/deneysel/bpc-157-tb-500-menopoz/': [
    {
      question: "Kırklı yaşlarında donuk omuz ya da tendon ağrısı olan bir kadın “BPC-157 ve TB-500 kullanmayı düşünüyorum” dediğinde ilk neyi sorarsınız?",
      answer:
        "İlk sorum genellikle şu olur: “Omzunuz mu ağrıyor, yoksa kolunuzu hareket ettirmekte de zorlanıyor musunuz?”\n\nÇünkü donuk omuzla tendon sorunları aynı şey değil. Donuk omuzda hareketler giderek kısıtlanıyor. Tendon sorunlarında ise bazı hareketler özellikle ağrılı olabiliyor. Tedaviyi doğru planlayabilmek için önce hangisiyle karşı karşıya olduğumuzu anlamamız gerekiyor.\n\nKırklı yaşlarındaki kadınlarda bu şikâyetlerle oldukça sık karşılaşıyoruz. Menopoza geçiş döneminde hormonal değişikliklerin kas ve eklem yakınmalarıyla ilişkili olabileceğini biliyoruz. Ama her omuz ağrısını da hormonlara bağlamak doğru değil. Özellikle donuk omuzda diyabet ve tiroid hastalıklarını da akılda tutuyorum.\n\nBPC-157 ve TB-500 konusuna gelince, neden ilgi çektiğini anlıyorum. Hayvan deneylerinde tendonların ve yaralanmış dokuların iyileşmesiyle ilgili umut verici sonuçlar var. Ancak insanların omuz ağrısını azalttıklarını veya tendonlarını daha hızlı iyileştirdiklerini gösteren güvenilir klinik çalışmalarımız henüz yok.\n\nBu nedenle hastamın önce doğru tanı almasını isterim. Donuk omuzda uygun egzersizler, fizik tedavi ve bazı hastalarda eklem içi kortizon enjeksiyonlarıyla iyi sonuçlar alabiliyoruz.\n\nBenim için öncelik, yeni bir peptid denemek değil, ağrının nedenini bulmak. Çünkü elimizde etkili olabilecek tedaviler varken, yararını ve güvenliğini yeterince bilmediğimiz bir enjeksiyonla başlamak bana doğru gelmiyor.",
    },
    {
      question: "BPC-157 ve TB-500 kullanmaya zaten başlamış bir hastanızda hangi tahlilleri istersiniz? Hangi belirti çıkarsa bırakmasını söylersiniz?",
      answer:
        "Öncelikle ne kullandığını tam olarak öğrenmek isterim. Çünkü internette BPC-157 veya TB-500 adıyla satılan ürünlerin içerikleri ve hazırlanma koşulları her zaman güvenilir değil.\n\nHastama ürünü nereden aldığını, ne zamandır kullandığını, enjeksiyonları kimin yaptığını ve başka ilaçlar alıp almadığını sorarım. Mümkünse ürünün kutusunu veya etiketini de görmek isterim.\n\nArdından herhangi bir şikâyeti olup olmadığını değerlendiririm. Enjeksiyon yerinde kızarıklık, şişlik, ağrı, ateş veya döküntü gelişmiş mi? Daha önce olmayan başka bir belirti ortaya çıkmış mı?\n\nTahlil konusunda ise herkese uygulanabilecek, bu iki peptidin güvenli olduğunu gösteren özel bir testimiz yok. Hastanın sağlık durumuna göre tam kan sayımı, böbrek ve karaciğer fonksiyonları gibi temel incelemeler isteyebilirim. Enfeksiyon düşündüren bir bulgu varsa buna yönelik değerlendirme yaparım.\n\nAncak bütün sonuçların normal çıkması beni tamamen rahatlatmaz. Çünkü bu maddelerin uzun dönem etkilerini henüz yeterince bilmiyoruz.\n\nBen zaten rutin kullanımını önermediğim için hastayla devam etmemesini konuşurum. Özellikle enjeksiyon yerinde giderek artan kızarıklık veya şişlik, ateş ya da yeni gelişen başka bir şikâyet varsa kullanımı durdurup değerlendirme yapılmasını isterim. Nefes darlığı, yüz veya boğazda şişme gibi ciddi alerjik reaksiyon belirtilerinde ise acil müdahale gerekir.\n\nHastamın bu ürünleri kullanmış olması nedeniyle onu yargılamam. Ama şikâyeti olmamasını veya kan tahlillerinin normal çıkmasını, güvenli olduklarının kanıtı olarak da kabul etmem.",
    },
    {
      question: "Menopoz hormon tedavisi kullanan bir kadın bu peptidleri eklemek isterse nasıl değerlendirirsiniz?",
      answer:
        "Öncelikle neden eklemek istediğini sorarım. Çünkü menopoz hormon tedavisi alan bir kadının kas ve eklem ağrıları devam ediyorsa, bunun mutlaka östrojen eksikliğinden kaynaklandığını düşünmemek gerekiyor.\n\nÖrneğin hasta donuk omuz nedeniyle geceleri uyuyamıyorsa, öncelikle omzun kendisini değerlendirmek gerekir. Tendon yırtığı, eklem sorunu veya başka bir neden varsa bunlara yönelik tedavi planlamalıyız.\n\nBPC-157 ve TB-500'ün östrojen ya da progesteron tedavisiyle birlikte kullanımına ilişkin yeterli insan araştırması bulunmuyor. Bildiğimiz belirgin bir etkileşim olmaması, bu kombinasyonun güvenli olduğu anlamına gelmiyor.\n\nBir de hormon tedavisinin ne amaçla verildiğini düşünmek gerekiyor. Menopoz hormon tedavisinin sıcak basmaları ve gece terlemeleri gibi belirtiler üzerindeki yararlarını biliyoruz. Ama buna BPC-157 veya TB-500 eklediğimizde tendonların daha iyi iyileşeceğini gösteren bir kanıtımız yok.\n\nBen böyle bir hastada önce hormon tedavisinin uygunluğunu, diğer ilaçlarını ve omuz şikâyetinin nedenini değerlendiririm. Gerekiyorsa fizik tedavi veya ortopedi uzmanıyla birlikte ilerlerim.\n\nHormon tedavisi kullanıyor diye bu peptidlerin mutlaka zararlı olacağını söyleyemem. Ama güvenli ve yararlı olduklarını da bilmiyoruz. Bu nedenle özellikle rutin kullanım amacıyla eklenmelerini önermem.",
    },
    {
      question: "Kanser öyküsü olan bir kadın BPC-157 veya TB-500 kullanmak isterse yanıtınız nedir?",
      answer:
        "Böyle bir hastada çok daha temkinli davranırım. Önce hangi kanser türünü geçirdiğini, tedavisinin ne zaman tamamlandığını ve bugün nasıl takip edildiğini öğrenmek isterim.\n\nBurada beni düşündüren konulardan biri, bu peptidlerle ilgili deneysel araştırmalarda hücrelerin hareketi, doku onarımı ve yeni damar oluşumu gibi mekanizmaların gündeme gelmesi.\n\nNormalde yaraların iyileşmesi için gerekli olan bu mekanizmalar, kanser biyolojisinde de önemli olabiliyor. Ancak buradan BPC-157 veya TB-500'ün insanlarda kanserin tekrarlamasına neden olduğu sonucunu çıkaramayız. Böyle bir ilişki klinik çalışmalarla gösterilmiş değil.\n\nSorun tam da burada. Zararlı olduklarını kesin olarak bilmiyoruz, ama kanser geçirmiş kadınlarda güvenli olduklarını da gösteremedik.\n\nÖzellikle meme kanseri gibi hormon duyarlı bir kanser geçirmiş hastada, tedavisi tamamlanmış olsa bile, yalnızca omuz veya tendon ağrısı için bu peptidleri önermem. Hastanın kanser türüne, tedavi geçmişine ve kullandığı ilaçlara göre onkoloğunun görüşü de önemli.\n\nÜstelik donuk omuz veya tendon ağrısı için kullanabileceğimiz, etkinliği çok daha iyi araştırılmış tedaviler var.\n\nBenim yaklaşımım kanser öyküsü olan bir hastaya bütün yeni tedavileri yasaklamak değil. Ama yararı henüz kanıtlanmamış bir madde için belirsiz bir risk almasını da istemem. Bu nedenle bugün BPC-157 veya TB-500 kullanımını önermiyorum.",
    },
  ],
};
