# NAD+ takviyesi — ikinci denetim bulgularının uygulanması

Tarih: 13 Ekim 2026. Yetki: Kullanıcının “Bulguları uygula” talebi; yerel düzeltme. Commit, push veya deploy yetkisi yok.

## Değişiklikler

- Başlıkta vs → ve, gövde/açıklamada anti-aging → yaşlanma karşıtı. RSS/hub başlığı ve açıklaması manifesto girdisiyle hizalandı.
- Özette NAD+ koenzimi ile NMN/NR öncülleri ayrıldı. Koenzim, mitokondri ve enzim açıklamaları sadeleştirildi. Biyobelirteç, substrat, yolak ve objektif parametre anlatımı sade Türkçeye çevrildi.
- Açılış, güvenlik ve iletişim lede'leri iki cümleye indirildi. Önceki gerçek hekim katkısı anlamı korunarak gövdeye taşındı.
- Holmes 2026 (PMID 42211736) dördüncü kaynak olarak eklendi: 40 kadın, 32 belirti bildiren katılımcı, yedi gün, NR+pterostilben kombinasyonu; plasebosuz/açık etiketli tasarım, üretici finansmanı ve bazı yazarların şirket bağlantıları açıklandı. Etkinlik için Evidence 1/5 verildi; önceki kaynaksız sınırlı çalışma sayısı hükmünün yerini aldı. NR tek başına veya NMN'ye genellenmedi.
- Yoshino çalışmasının kas gücü ve yorulabilirlik bulgusu NCBI BioC tam metin üzerinden bu turda doğrulandı. Mevcut olumsuz sonuç aktarımı doğru; korundu.
- Kısa dönem güvenliğin sınırları kaynak 2/3 ile bağlandı; Conze çalışmasının gebe/emzirenleri dışlaması belirtildi. Kanser, kanser takibi ve bağışıklığı baskılayan tedavi konusundaki uyarı klinik ihtiyat olarak ayrıldı; kanıtlanmış kanser riski/ilaç etkileşimi gibi sunulmadı. Güvenlik kutusunun giriş/alt notu da buna uyarlandı. Gebelik/emzirmede hiç veri yok hükmü, bu kaynakların o popülasyonun güvenliğini göstermemesi olarak daraltıldı.
- Bilimsel Editör Notu'nda NAD+ ile öncüllerin biyokimyasal rolü ve 2026 pilot çalışmanın sınırları düzeltildi. Dr. Alper Mumcu'nun bu yeni metni onayladığı iddia edilmedi; nihai bağımsız tıbbi inceleme açık iş.
- Kaynaklar için prose-estranova-references değiştiricisi eklendi; yalnızca bu makalenin kaynak paneline bağlandı. 00 numarası gizlendi, manuel heading tipografisi eklenmedi. Mevcut diğer makaleler bu değiştiriciyi kullanmıyor.
- Üç SSS gerçek hekim girdisinden hazırlandı. 1 ve 3 önceki gerçek yanıttan; 2 bu turda alınan güvenlik yanıtından. Özgün güvenlik yanıtı ve tüm düzenlenmiş metinler klinik-katkilar/2026-10-13_nad-plus-takviyesi-sss.json içinde. Başlık Dr. Aksoy'a Sorular; sıklık doğrulanmadığı için en sık nitelemesi yok.

## Kontroller

build:ci çıkış kodu 0; compliance 180 dosya, strict/template audit ve SEO audit 160 sayfa geçti. Editorial-check 0 aday; yapı ritmi ortalama 13,0 sözcük, standart sapma 6,1. Structure-check beş kısa kapanış adayı verdi; mekanizma sınırı, çalışma süresi, hedefi netleştirme, takip sorusu ve genel disclaimer farklı işlevleri nedeniyle korundu. Rendered-check tekrar-disclaimer ve kaynak adı anılmaması adaylarını verdi; güvenlik kutusu genel disclaimer'dan farklı işleve sahip, kaynaklar [1–4] atıflarıyla gövdede anılıyor. Bunlar yanlış pozitifler; kaynak isimlerini gövdeye yığmak site kuralına aykırı.

| Dar hüküm sayımı | İkinci denetim öncesi | Son |
|---|---:|---:|
| Standart takviye önerisi | 1 | 1 |
| Uzun dönem güvenlik ifadesi | 2 | 1 |
| Yaşla NAD+ azalması | 1 | 1 |

Bu sayım statik gövde/kaynak/editör notunun regex kapsamındadır; SSS ve güvenlik bileşeni ayrı incelendi. SSS bağımsız okunduğu için kendi belirsizliğini koruyor; gerçek hekim yanıtı tekrar azaltma amacıyla bozulmadı.

Tarayıcıda kaynak numarası için ::before content none; tek H1, dört kaynak, bütün anchor'lar sağlam; SSS 3/3 görünür yanıt ile FAQPage aynı. Yeni görseller yüklendi. 390 px mobil genişlikte page scrollWidth 375; yatay taşma yok. Güvenlik SSS'si açılıp görüntülendi. Üst hero korunuyor.

CRLF kullanılan manifest için git -c core.whitespace=cr-at-eol diff --check geçti; dosyanın mevcut satır sonları korundu. Önceki build kaydı tarihsel kaldı; bu belge son revizyonun kontrol sonucudur.

## Düzenlenmiş gerçek hekim yanıtları

### 1. NAD+ takviyeleri menopozda enerji için kanıtlı bir çözüm müdür?

Benim için ilk soru, NAD+ düzeyini artırmanın hastaya gerçekten ne kazandıracağıdır. Bir maddenin kandaki veya hücrelerdeki NAD+ düzeyini yükseltmesi, kişinin daha enerjik olacağı, daha yavaş yaşlanacağı veya menopoz belirtilerinin düzeleceği anlamına gelmiyor.

NR ve NMN gibi takviyelerin biyolojik etkilerini gösteren çalışmalar var. Ancak insanlarda yorgunluğu azalttıkları, kas gücünü korudukları veya sağlıklı yaşam süresini uzattıkları henüz güvenilir biçimde kanıtlanmış değil. Bugünkü kanıtlarla NAD+ takviyelerini menopoz veya yaşlanma karşıtı tedavinin rutin bir parçası olarak önermiyorum.

### 2. Bir takviyenin NAD+ düzeyini artırması güvenli olduğunu gösterir mi?

Hayır. Bir takviyenin kandaki NAD+ düzeyini artırması, hem yararlı hem de güvenli olduğunu göstermez. Kısa süreli araştırmalarda NMN ve NR genel olarak iyi tolere ediliyor; yıllarca kullanıldıklarında neler olacağını henüz yeterince bilmiyoruz.

Kullanmak isteyen hastada diğer ilaç ve takviyeleri, karaciğer ve böbrek hastalığı olup olmadığını, kanser öyküsünü ve gebelik planını değerlendiririm. Aktif kanser tedavisi görenlerde daha temkinli olurum. NAD+ hücrelerin enerji üretimi ve onarımında rol oynuyor; bu süreçleri artırmanın kanser üzerindeki uzun dönem etkilerini henüz yeterince bilmiyoruz. Bu, NMN veya NR'nin insanlarda kansere neden olduğunun kanıtlandığı anlamına gelmez. Gebelik planlayan, hamile veya emziren kadınlarda kanıtlanmış bir ihtiyaç olmadan bu ürünleri önermem.

Ürünün içeriğinin doğrulanması ve üretim kalitesinin denetlenmesi de önemli. NMN veya NR yazan her kutunun aynı kaliteye, saflığa ve güvenilirliğe sahip olduğunu varsayamam. Araştırmalarda kullanılan miktarların üzerinde almanın daha fazla yarar sağladığı gösterilmiş değil; uzun süreli yüksek dozların güvenliği hakkında da yeterli bilgi yok.

Benim yaklaşımım, hastaya yalnızca takviyenin ne yapabildiğini değil, henüz neleri bilmediğimizi de anlatmak.

### 3. NMN veya NR kullanmayı düşünürken ilk hangi soruyu sorarsınız?

Ben önce hastanın neden bu takviyeyi kullanmak istediğini anlamaya çalışırım. Yorgunluk mu yaşıyor, uyku sorunu mu var, yoksa yaşlanmayı geciktirmek mi istiyor? Öncelikle bu sorunların nedenlerini ve etkinliği gösterilmiş tedavi seçeneklerini değerlendiririm.

Benim için tedavinin başarısı bir laboratuvar değerinin yükselmesi değil, hastanın sağlığında ölçülebilir ve anlamlı bir iyileşme sağlamasıdır.

## Bilimsel kaynak bağlantıları

- Yoshino 2021: https://pmc.ncbi.nlm.nih.gov/articles/PMC8550608/
- Conze 2019: https://pmc.ncbi.nlm.nih.gov/articles/PMC6611812/
- Covarrubias 2021: https://pmc.ncbi.nlm.nih.gov/articles/PMC7963035/
- Holmes 2026: https://www.frontiersin.org/journals/aging/articles/10.3389/fragi.2026.1773667/full

Nihai tıbbi/yayın onayı kaydedilmedi. Commit, push ve deploy yapılmadı.

## Üçüncü tur — yayın öncesi geniş denetim ve düzeltme (13 Ekim 2026)

KC beyanı: Dr. Alper Mumcu ikinci revizyonun son halini gördü (yazılı not yok). KC ardından geniş denetim istedi ve "Düzelt" dedi. Denetim bulguları 1 ve 3–8 uygulandı; SSS yanıtlarına dokunulmadı.

- Kaynak 3 (Conze 2019): PubMed kaydında Conze ve Kruger'in bağlantısı "Chromadex Spherix Consulting" (NIAGEN üreticisi). Gövdeye ve kaynak notuna "üç yazardan ikisi üretici şirketle bağlantılı" eklendi; Holmes 2026 açıklamasıyla simetrik. Tek, 8 haftalık, üreticiye bağlı çalışmanın tolerabilite kanıt düzeyi 4 → 3.
- Gövde 5. bölüm: SSS 1 ve 3 ile birebir aynı iki cümle çıkarıldı; hekim tutumu ("rutin önermiyorum") gövdede tek cümlede korundu. Başlık "Takviyeyi Düşünürken Hekimle Konuşmak" (takviye tedavi değil); anchor `iletisim-sureci` aynı.
- 4. bölüm: "NR ile NAD+ yükseldi" paragrafı 3. bölüm lede'siyle tekrar ettiği için çıkarıldı; kaynak [3] o lede'ye bağlandı. "İyi tolere edildi" bir kez, sade açıklamayla.
- Kanser/klinik ihtiyat uyarısı uyarı kutusu alt notundan ve editör notundan çıkarıldı; gövde ve SSS 2'de kalıyor. Editör notundaki NAD+/öncül düzeltme artığı cümle kaldırıldı.
- Uyarı kutusu: "onkolojik takip / immünsüpresif" sadeleştirildi; doz maddesi SSS 2'deki hekim ifadesiyle hizalandı.
- Dil: "postmenopozal", "yorulabilirlik", "tolerabilite" sadeleştirildi; "Buna karşın" → "Öte yandan".
- İlgili okumalar: kardeş yazı NAD+ ve Hücresel Yaşlanma ile Deneysel Tedaviyi Okuma Kılavuzu eklendi; kemik sağlığı çıkarıldı (4 öğe).

Kontroller: lexicon hard_ban 0 (NAD+ dosyasında uyarı yok); build:ci çıkış 0 (compliance 180, strict/template audit, SEO audit 160). Tarayıcı: kanıt etiketleri 3/1/3, kırık çapa yok, kaynak numarası `none`, 390 px'de taşma yok, konsol hatası yok.

## Dördüncü tur — ikinci geniş denetim ve düzeltme (13 Ekim 2026)

KC "Tekrardan geniş audit yap", ardından "düzeltmeleri yap" dedi. SSS yanıtlarına ve Mumcu imzasına dokunulmadı (imzaya inceleme tarihi, Mumcu bu turu görmeden eklenmez).

- 3. bölüm lede'si: NMN+NR genellemesi yalnız [3]'e (NR) bağlıydı; [1] eklendi.
- 3. bölüm: ikiye bölünmüş NMN paragrafı birleştirildi; "farklı soruları ele alıyor:" yerine çalışmaların gerçek soruları (NMN metabolizma, NR güvenlik) yazıldı. "Yarar, ölçülen her sonuca yayılmadı" (kas insülin yanıtı/sinyali arttı, kas gücü ve yorulma değişmedi). "Kardiyovasküler olaylar" → "kalp krizi ve inme gibi kalp-damar olayları".
- 4. bölüm lede'si: "özel durumların güvenli olduğunu" anlam pürüzü düzeltildi; çalışma süresi 8–10 hafta olarak somutlandı.
- İnkâr kalıpları seyreltildi (dosyada göstermez/göstermiyor 4→1, tek başına 3→0, genellenemez 1→0): Holmes ve Conze cümleleri kapsam diliyle yazıldı.
- 1. bölüm lede'sindeki yol tabelası cümlesi gözlem cümlesiyle değişti; öncül/koenzim tanım tekrarı azaltıldı; NAD+ açık adı ilk mekanizma cümlesine taşındı (kardeş yazının açılış cümlesi kopyalanmadı).
- Editör notu ilk paragrafı sadeleşti (anlam aynı). Uyarı kutusu: "veri kalitesi" → "veri".

Kontroller: lexicon hard_ban 0; build:ci çıkış 0 (compliance 180, strict/template, SEO 160); editorial-check 0 aday; yapı 72 cümle, ort. 12,8 sözcük. Rendered-check iki aday (şablon başlığı, numaralı atıf) bilinen yanlış pozitif. Tarayıcı: değişen 9 ifade sayfada, kanıt 3/1/3, kırık çapa yok, kaynak numarası `none`.

## Kapanış — KC kararları ve yayın (13 Ekim 2026)

KC: SSS 2 kısaltılmış haliyle kalır; Mumcu nihai metni inceledi ve onay veriyor (KC beyanı, yazılı not yok); gövdedeki "Hastaya ilk sorduğum şey de bu" ifadesi uygun; article-log, onay kaydı, commit ve push yapılsın. Editör notu imzası "Bağımsız tıbbi inceleme: 13 Ekim 2026" oldu. Onay kaydı: `icerik/yazar-onaylari/senai-aksoy/onaylanan/2026-10-13_nad-plus-takviyesi-genis-audit/`.
