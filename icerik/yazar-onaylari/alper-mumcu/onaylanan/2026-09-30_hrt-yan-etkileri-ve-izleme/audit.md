# HRT yan etkileri ve izleme — audit, humanize ve düzeltme

İnceleme tarihi: 30 Eylül 2026. Yazar: Dr. Alper Mumcu; tür: clinical-guide; hedef dil: Türkçe. Durum: yazar ve tıbbi inceleme bekleyen yerel revizyon. Gönderim, onay, commit, push veya deploy yapılmadı.

## Başlangıç ve onay sınırı

Başlangıçtaki commit edilmemiş hedef sayfa `baslangic-kaynak.astro`, hedef SSS `baslangic-faq.ts.txt` içinde korundu. Aynı çalışma alanında başka düzenlemeler vardı; kaynak ağacına ve paylaşılan FAQ dosyasına bu çalışmada yazılmadı. Derleme ayrı geçici kopyada yapıldı.

`article-approvals.ts` yalnızca 4 Mayıs 2026 Senai imzasına geçiş onayını taşıyor; güncel Alper Mumcu imzasını kapsamıyor. 16 Haziran yazar değişimi commit'i `0dd4b08342fc40f392c9a338bab15357ad0ad2de`; commit mesajı onay belgesi değildir. Alper'in logunda gerçek onay veya hasta sözünün özgün kaydı bulunamadı. Bu nedenle bu commit son onaylı Alper metni diye adlandırılmadı; kayıtlı yazar geçişi olarak saklandı ve sonraki fark `onay-sonrasi.diff` içinde verildi.

Projede standart yazar revizyonu onay paketinde bekler (CLAUDE.md §6; docs/AUTHOR-APPROVAL-WORKFLOW.md). Mevcut sayfa/yayın silinmedi. Yeni revizyon `makale-kaynak.astro` içinde; görünür metin ve form yerel pakette. Önceki Bilimsel Editör Notu başlangıç kopyasında korunuyor; yeni öneri hekim sözü veya tamamlanmış tıbbi inceleme gibi imzalanmadı. Taslak schema/byline reviewer alanları şablonun mevcut reviewer'ıdır, incelemenin yapıldığının kanıtı değildir.

## Bulgular ve uygulanan düzeltmeler

| Konum | Bulgu | Düzeltme ve dayanak |
| --- | --- | --- |
| Özet, ilk haftalar, ruh hali | Kaydı olmayan “muayenede çok sık karşılaşırım”, “bir hastam şöyle ifade etmişti” ve hasta alıntısı; reseptör uyumu, zihinsel uyum enerjisi ve ikinci ayda uyku düzelmesi hakkında desteksiz kesin açıklamalar. | Atıfsız deneyim/alıntı çıkarıldı; hekim olmayan sese geçilmeden, okurun belirtisini ve değerlendirme sorusunu açıklayan sade klinik anlatım kuruldu. Profil örnekleri gerçek gözlem sayılmadı. |
| Hafif yan etkiler | Meme hassasiyeti, bulantı ve kanama tek bir 3–6 aylık bekleme kuralına bağlanmış; rahatsız edici bulantı için üçüncü ay beklenmesi önerilmiş. | Belirtiye göre süreler ayrıldı; bulantının bir haftadan uzun sürmesi, baş ağrısının uzaması ve rahatsız edici belirtiler için erken görüşme korundu/eklendi. NHS ilaç bilgisi [2,3]. |
| Hafif yan etkiler | Bant/jelin karaciğer ilk geçişini atlaması otomatik mide konforu üstünlüğü gibi sunulmuş; rahat iç giyim, uyku pozisyonu, su-tuz önerileri belirgin sonuç taahhüdü taşıyor. | Desteksiz mekanizma/üstünlük ve sonuç iddiaları çıkarıldı; doz/tür/uygulama yolu değerlendirmesi kişisel hekime bırakıldı. |
| Kanama | İlk aylardaki her lekelenme “olağan adaptasyon”, altıncı ayda kendiliğinden düzene girme ise büyük çoğunluk için kesin gibi anlatılmış. Menopoz sonrası kanama, HRT'deki beklenen kanamadan ayrılmamış. | Döngüsel çekilme kanaması ve sürekli kombine tedavi ayrıldı. Başlangıçtan ilk 6 ay ve değişiklikten sonraki 3 ay bağlamı açıklandı; yoğun/uzun kanama için süreye bakmadan değerlendirme, kişisel risklere bağlı erken inceleme belirtildi [1,4]. Bu süreler kendi kendine bekleme izni değildir. |
| İzlem | İlk yıl üç ayda bir kontrol ve sabit 3–6–12 ay şeması evrensel standart gibi sunulmuş. | Yaklaşık üçüncü ay ve sonrasında en az yıllık kontrol; yan etki/etkisizlikte erken görüşme. Altıncı ay kontrolü kişisel ihtiyaca bağlı [1]. |
| Tarama | Her 40+ kadına yıllık mamografi, rutin kan biyokimyası ve jinekolojik tetkikler zorunlu gösterilmiş. | Ulusal tarama ve kişisel risklere göre planlama; Türkiye'de belirtisiz 40–69 yaş grubu için iki yılda bir mamografi bilgisi [5]. Sabit test paketi kaldırıldı. Yeni meme bulgusunda tarama tarihi beklenmez. |
| Güvenlik | Göğüs ağrısı/nefes darlığı ve nörolojik alarm belirtileri yalnız “hekime bildirin” düzeyinde kalmış. | Acil yardım ile aynı gün ve kontrol tarihinden önce değerlendirme ayrıldı. Türkiye için 112 ve kendi aracıyla acile gitmeme sınırı [3,6]. |
| SSS | Görünür yanıtlar sayfada elle yazılıyor, schema ayrı shared kaynaktan geliyor; kolay drift riski. | Taslakta tek `faqItems` kaynağından görünür SSS ve FAQPage üretildi. Beş yanıt genel editoryal düzeltmedir; Dr. Aksoy'a atfedilmedi. |
| Dil ve yapı | “Yumuşak yan etkiler”, “hormonal dengeye yerleşme”, “dinamik süreç”, “güvenli yolculuk” gibi tekrarlı soyut çerçeveler; dört paragraflık aynı mesajı yineleyen kapanış. | “Hafif yan etkiler” terimi; kısa ve somut izlem kayıtları; bölüm işlevleri ayrıldı, kapanış kontrol görüşmesi sorularına indirildi. Başlık, bütün gövde, görünür özet, SSS ve editör notu birlikte incelendi. |

## Anlam kontrolü

- HRT başlangıcı, doz/ilaç değişimi ve kanamanın ortaya çıkışı ayrı zaman noktalarıdır. Üç ay yan etki değerlendirmesi ile kanamanın altı aylık bağlamı birbirinin yerine kullanılmadı.
- Hafif belirti ilacın kesin uygunsuzluğunu veya kesin biyolojik uyumu kanıtlamaz. Kesin uyum mekanizması çıkarıldı.
- Beklenmedik kanama endometrium değerlendirmesini gerektirebilir; kanser tanısı veya kişisel risk oranı üretmedi.
- Doz/ilaç/uygulama yolu kararı hekime bırakıldı; reçete veya marka eklenmedi. Oral, transdermal ve vajinal uygulamalar eşdeğer seçeneklermiş gibi sunulmadı.
- Hasta alıntısı ve bireysel deneyim gerçek kaydı olmadan yeni ses öğesi olarak kullanılmadı. Yazar imzası ve articleType korundu.
- Sayısal değişiklikler kaynaklı olgusal düzeltmelerdir: sabit 3–6–12 izlem kaldırıldı, 40–69/iki yıl mamografi ve değişiklik sonrası üç ay kanama bağlamı eklendi. Fidelity raporundaki farklar bu yüzden beklenir; sıfır fark için eski hatalar geri konmadı.
- İlk yayın tarihi korundu; taslak modifiedDate/byline 30 Eylül 2026 olarak eşleşti. Bu bir gerçek tıbbi onay tarihi değildir.
- H0 seçildi: ilaç ve güvenlik konusu nedeniyle mizah, aforizma ve üretilmiş klinik sahne eklenmedi. Motif kısa belirti notu; kapanışta bir kez geri dönüyor.

## Kaynak doğrulaması — 30 Eylül 2026

1. [NICE NG23 önerileri](https://www.nice.org.uk/guidance/ng23/chapter/Recommendations): 1.8.4 ve 1.9.1–1.9.3. Doğrudan açılış 403 verdi; resmi NICE arama sonuçlarında öneri metni okundu, [QS143](https://www.nice.org.uk/guidance/QS143/chapter/quality-statement-4-reviewing-treatments-for-menopause-associated-symptoms) kontrol standardıyla karşılaştırıldı. Kontrol sıklığı kılavuz önerisidir; RCT gücü diye sunulmadı.
2. [NHS HRT yan etkileri](https://www.nhs.uk/medicines/hormone-replacement-therapy-hrt/side-effects-of-hormone-replacement-therapy-hrt/): yan etkiler, ağır/uzayan belirtiler, döngüsel ve sürekli kombine tedavide kanama. Sayfada son inceleme 2023; mevcut resmi hasta bilgisi olarak kullanıldı, yeni 2026 incelemesi varmış gibi gösterilmedi.
3. [NHS östrojen ilaç bilgisi](https://www.nhs.uk/medicines/hormone-replacement-therapy-hrt/oestrogen-tablets-patches-gel-and-spray/side-effects-of-oestrogen-tablets-patches-gel-and-spray/): meme hassasiyeti, bulantı/baş ağrısı için yardım sınırları, pıhtı ve acil belirtiler. Son inceleme 2023.
4. [BMS ortak kanama kılavuzu](https://thebms.org.uk/publications/bms-guidelines/management-of-unscheduled-bleeding-on-hormone-replacement-therapy-hrt/): güncel resmi sayfa tam okundu; Mayıs 2026 incelemesi bağlantısı mevcut. Yoğun/uzun kanama zaman pencerelerinden bağımsız ele alınıyor. Risk temelli yönlendirme korunuyor.
5. [Sağlık Bakanlığı ulusal tarama bilgisi](https://www.saglik.gov.tr/TR-100021/ekim-ayi-tum-dunyada-meme-kanseri-farkindalik-ayidir.html): 40–69 yaşta iki yılda bir mamografi.
6. [NHS inme belirtileri](https://www.nhs.uk/conditions/stroke/symptoms/): ani nörolojik belirtiler, görme kaybı ve şiddetli baş ağrısı. Başvuru numarası hedef ülke Türkiye'ye 112 olarak uyarlandı.

## Dr. Aksoy SSS dönüşümü — açık işler

Soruların gerçek hekim yanıtı ve kullanım durumu bulunamadı. Genel makale onayı bu eksikliği kapatmaz. “En sık” nitelemesi ayrıca doğrulanmış değildir; dönüşüm tamamlandığında sıklık kanıtı gelmezse başlık “Dr. Aksoy'a sorular” olmalı. Byline Alper Mumcu olarak kalır, Dr. Aksoy ayrı uzman katkısıdır.

| Soru | Özgün yanıt | Gerçek yanıt tarihi | Kullanım/onay |
| --- | --- | --- | --- |
| Hafif yan etkiler ne kadar sürebilir; hangi durumda beklemeyi önermezsiniz? | 30 Eylül 2026 alındı; hekim-yanitlari.json içinde | Yok | Yok |
| HRT'nin ilk aylarında kanamayı nasıl değerlendirirsiniz? | 30 Eylül 2026 alındı; hekim-yanitlari.json içinde | Yok | Yok |
| Kontrol sıklığını ve gerekli tetkikleri nasıl belirlersiniz? | 30 Eylül 2026 alındı; hekim-yanitlari.json içinde | Yok | Yok |
| Evde hangi belirtilerin nasıl kaydedilmesini önerirsiniz? | İkinci grupta soruldu; yanıt bekleniyor | Yok | Yok |
| Yan etki olduğunda tedavinin uygunluğunu ve değişiklik ihtiyacını nasıl değerlendirirsiniz? | İkinci grupta soruldu; yanıt bekleniyor | Yok | Yok |

Modelin düzelttiği mevcut yanıtlar `onerilen-faq.json` içinde tutuluyor; bunlar yukarıdaki özgün hekim yanıtı alanlarını doldurmaz. Yanıt gelince anlam değişmeden düzenlenmiş karşılığı ve kullanım/onay durumu bu pakette izlenecek.

## Kontroller

- İzole proje kopyasında `npm run build`: geçti (143 sayfa).
- `npm run lint`, `npm run compliance`, `npm run articles:audit:templates`, `npm run seo:audit`: geçti. Compliance başka makalede uzun cümle uyarısı verdi; bu hedefle ilgili değil.
- `npm run articles:audit:sources`: site genelinde eski kaynak eksikleri nedeniyle başarısız; hedef HRT sayfası eksik listesinde yok. Site geneli temiz diye raporlanmadı.
- Üretilen hedef HTML: bir H1, tek SSS yüzeyi, beş soru-cevap; görünür SSS ile FAQPage eşit; yinelenen id veya kırık iç anchor yok. `html-kontrol.json` ve `schema-onizleme.json` kanıtı.
- Yerel editorial helper: 53 blokta aday yok. Elle üç geçiş (gramer, doğal Türkçe, ritim/tekrar) ve kaynak/iddia karşılaştırması ayrıca yapıldı. Fidelity farkları `fidelity.json` içinde, tıbbi onay sayılmaz.
- `git diff --check`: geçti. Kaynak ağacındaki diğer oturum değişiklikleri bu işte geri alınmadı/stage edilmedi.
- Canlı sayfa cache-bypass HTTP 200; eski üç aylık/yıllık mamografi genellemeleri mevcut. Yeni taslak kaynak işaretleri canlıda yok. Revizyon yayına alınmış değildir; `canli-kaynak.html` yalnız inceleme anındaki eski sürümü saklar.

## Teslim

Tam revizyon: `makale-kaynak.astro`; HTML önizleme: `makale-onizleme.html`; yazar formu: `kontrol-formu.html`. Yayın için gerçek Alper Mumcu onayı, bilimsel editör incelemesi ve Dr. Aksoy SSS yanıtları/kullanım durumu açık. Üst hero, kart ve byline görselleri değiştirilmedi. Sadece mevcut görselin korunması nedeniyle yeni görsel talebi oluşturulmadı.


## 30 Eylül 2026 — özgün hekim yanıtları eklendi

Önceki eksik-yanıt değerlendirmesi ilk üç soru için kapanmıştır. Kullanıcı Dr. Aksoy’un üç özgün yanıtını bu sohbette verdi. Özgün yanıt, gerçek alım tarihi, düzenlenmiş karşılık ve kullanım durumu hekim-yanitlari.json içinde tutulur. İlk üç SSS gerçek yanıtlarla değiştirildi; diğer ikisi mevcut editoryal cevap olarak açıkça ayrıldı. Tek SSS yüzeyi, beş FAQ şema girdisi ve üç hekim atfı doğrulandı. “En sık” kanıtı gelmediğinden bu niteleme eklenmedi. Kalan iki soru kullanıcıya yöneltildi.

NICE QS143 üç aylık/yıllık takip, kilo/tansiyon ve tarama katmanını; NG23 kanama sürelerini destekliyor. QS143 bütün laboratuvar testleri için ayrıntılı bir protokol vermiyor: rutin hormon ölçmemek ve testleri kişiselleştirmek hekim yanıtında klinik yaklaşım olarak korundu, tamamı NICE hükmü gibi sunulmadı. 2–3 aylık hafif yan etki seyri hekim görüşü; belirtiye özel erken başvuru sınırları gövdede korunuyor. Kanamada ultrason/ileri değerlendirme ayrıntısı mevcut BMS kaynağına bağlandı. Kaynak veya hekim yanıtıyla çelişki saptanmadı.

Düzenlenmiş yanıtlar HTML önizlemede gösterildi. Yeni yazar onayı, genel tıbbi onay, yayın/commit/deploy yetkisi çıkarılmadı. Derleme yeniden geçti; SSS/FAQPage eşliği ve iç bağlantılar tekrar doğrulandı.


## Son durum — beş gerçek yanıt tamamlandı

30 Eylül 2026: dördüncü ve beşinci özgün yanıt bu sohbetten alındı. Her birinin özgün metni, tarihi, düzenlenmiş karşılığı ve kullanım durumu hekim-yanitlari.json içinde. Önceki bekleyen-soru tabloları tarihsel ara durumu gösterir; şu an bekleyen SSS yanıtı yok. Beş editoryal cevap gerçek yanıtlarla değiştirildi. Başlık ve TOC “Dr. Aksoy’a sorular”; “en sık” sıklık doğrulanmadığı için eklenmedi. Alper Mumcu byline'ı ve ayrı Dr. Aksoy uzman katkısı korundu.

Son iki yanıtın düzenlenmesinde izlenenler: kanama günleri/miktarı, sıcak basması-gece terlemesi, uyku, baş ağrısı, meme hassasiyeti, şişkinlik, ruh hali ve tedavi etkisi listesinin tamamı korundu; yeni/artmakta olan belirtinin tarihi ve ilişki değerlendirmesi kesin nedensellik iddiasına çevrilmedi. Beşinci yanıtta hormon-doz-uygulama yolu ayrımı, progesteron tipi/kullanım şekli, oral/transdermal geçiş olasılığı, tedavinin devam gereği/faydası, tromboz-migren-karaciğer-meme/endometrium riskleri ve en düşük etkili doz hedefi korundu. Olası değişiklikler kişisel reçete gibi sunulmadı; kendi hekimiyle değerlendirme sınırı bölüm girişinde açık. NICE NG23 1.8.3 en düşük etkili dozu, NHS ilaç bilgisi doz/tür/uygulama değişikliğini destekler; ayrıntılı karar mantığı Dr. Aksoy’un gerçek klinik yaklaşımı olarak kalır.

Derleme yeniden geçti. Son HTML'de bir H1, tek SSS yüzeyi, beş gerçek hekim yanıtı ve eşleşen beş FAQPage girdisi var; kırık iç bağlantı veya duplicate id yok. Düzenlenmiş karşılıklar önizlemede gösterildi. Alper Mumcu yazar onayı, bütün revizyonun bilimsel incelemesi ve ayrı yayın yetkisi bekleniyor; SSS yanıtlarının gelmesi bu kapıları kendi başına kapatmaz. Kaynak ağacı, yayın ve diğer oturum değişikliklerine dokunulmadı.


## Güncel durum: onaylı

30 Eylül 2026 kullanıcı mesajı: “yazar ve tıbbi inceleme onayları  tamam”. Onay, son önizlemedeki tam revizyona ve beş gerçek hekim yanıtına uygulanmıştır. Dr. Alper Mumcu yazar onayı ve Dr. Senai Aksoy tıbbi incelemesinin tamamlandığı kullanıcı tarafından bildirildi; ayrı imzalı form alınmış gibi kaydedilmedi. Kaynak aktarımı yapıldı; commit/push/deploy yapılmadı.
Önceki bekleyen-onay ifadeleri tarihsel ara durumdur. Bilimsel Editör Notu artık onaylı ve imzalıdır.

Onaylı site kaynaklarından derleme geçti. Üretilen HTML tekrar kontrol edildi: 1 H1, 5 gerçek SSS/FAQPage eşliği, 0 duplicate id ve 0 kırık iç anchor. Onaylı metin ile paket kaynak dosyası eşit.
