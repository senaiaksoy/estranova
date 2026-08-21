# Sanem Altan — Hidden (public güvenlik politikası, v2.1)

> **Önemli:** Bu dosya herkese açık repodadır; “hidden” adı gizlilik veya
> erişim kontrolü sağlamaz. Buraya özel kişi, klinik ilişki, sağlık verisi,
> aile sağlığı, çocuk bilgisi ya da kamusal olmayan ayrıntı yazılmaz.
> Ham yaşam notları ve kurgusal türevler yalnız Git dışındaki özel kasada
> tutulur. Bu dosya sadece o kasanın kullanım kurallarını açıklar.

---

<a id="gizli-gozlemler"></a>

## §5b) Kaynak ve Rıza Sınırı

Persona ve taslak laboratuvarı üç kaynağı kesin biçimde ayırır:

1. doğrulanmış kamusal yayın ve söyleşiler;
2. Sanem Altan'ın belirli kullanım amacı için yazılı olarak onayladığı bilgi;
3. editör kaynaklı özel lead veya ondan türetilmiş kurgu — yalnız iç
   yazar-inceleme taslağı için.

Bir bilginin internette bulunması otomatik kullanım izni değildir. Özellikle
eski aile sahneleri, başka kişilerin adı, sağlık geçmişi, kayıp, ilişki ve
gündelik rutin; konuya gerekli değilse persona girdisi yapılmaz.

### Birinci tekil kapısı

- profile.yaml içindeki experience_seeds boş kalır.
- Onaylanan anının ayrıntısı, kapsamı, hassasiyeti ve geçerliliği özel kasada
  tutulur; public article-log yalnız opak kimlik ve karar durumu taşır.
- Sağlık, menopoz, HRT, ilaç, tanı veya semptom deneyimi yapay zekâ tarafından
  yalnız KURGUSAL iç taslak olarak önerilebilir; Sanem doğrulamadan veya
  görünür kompozit olarak onaylamadan yayımlanamaz.
- “Bir arkadaşım”, “yakınımdaki biri” veya “çevremdeki kadınlar” kalıbı
  kurguyu gerçek tanıklık gibi gizlemek için kullanılamaz.
- Başka bir kişinin sözü veya duygusu onun izni olmadan üretilmez.

### Gerçeklik sınıfları

- **public_verified:** Kaynaklı kamusal gerçek; yayın kapsamı ayrıca sınanır.
- **editor_provided_private_lead:** Sanem'in doğrudan beyanı değildir;
  doğrulanmamış ve geçicidir.
- **author_confirmed_private_seed:** Sanem'in doğruladığı, kapsam ve süre
  verilmiş özel anı.
- **fictionalized_draft_seed:** Yapay zekâ veya editör türevi; gerçeklik iddiası
  yoktur ve yalnız yazar incelemesine gider.
- **blocked / revoked:** Taslağa ve yayına kapalıdır.

### Tarihsel korpus sınırı

2016 sonrası güncel ses kalibrasyonu eksiktir. Eski siyasi yazılar içerik
olarak Estranova'ya taşınmaz; yalnız çelişki tespiti, soru kurma, bilgi-yorum
ayrımı ve karşı argüman gibi yüksek düzey gazetecilik teknikleri incelenebilir.

---

<a id="cift-rol-uyarisi"></a>

## §5c-ek) Özel Bilgi Güvenlik Duvarı

profile.yaml içindeki dual_role_warning.active değeri, editöryal ekipte
kamusal kaynakların dışında bilgi bulunabileceğini belirten anonim bir
güvenlik bayrağıdır. İlişkinin türü, kişi adları veya olay ayrıntıları
üretim sistemi için gerekli değildir ve bu repoda tutulmaz.

### Zorunlu sınırlar

- Özel bankanın tamamı hiçbir zaman prompt'a, terminal çıktısına, revizyona
  veya public makale günlüğüne girmez.
- Özel bağlam yalnız açık seed kimliğiyle, tek kayıt ve redakte edilmiş
  taslak bağlamı olarak yüklenir.
- Editör kaynaklı lead yalnız Sanem'in inceleyeceği laboratuvar taslağının
  yönünü açabilir; yayımlanabilir gerçek veya dış dünyaya yönelik isnat olmaz.
- Bilimsel inceleme yalnız genel popülasyon kanıtına ve makalenin görünür
  iddialarına dayanır.
- Kurgusal sahne taslakta görünür etiket taşır. Sanem'in sınıflandırması ve
  taslak hash'ine bağlı son onayı olmadan imzalı yayına geçmez.
- Üçüncü kişiye ait isim, kesin yaş, okul/ülke, konum, mülk, sağlık, finans,
  söz, duygu veya ilişki ayrıntısı için ayrıca rıza gerekir; yoksa kaldırılır.
- Politik veya mesleki nedensellik iddiası, öznel deneyim ile doğrulanmış dış
  olgu birbirinden ayrılmadan kullanılamaz.

Bu kural veri sızıntısını engeller; özel bilginin burada listelenmesini değil,
özellikle burada **listelenmemesini** gerektirir.

---

<a id="ic-celiskiler"></a>

## §5d) Korpusta Görülen Gerilimler

Bu başlıklar kişilik teşhisi değil, tarihsel metinlerde tekrar eden düşünsel
gerilimlerdir. Konuya uyuyorsa ve yeni metin bunları kendi içinde gerçekten
araştırıyorsa kullanılabilir:

- kontrol isteği ile hayatın belirsizliği;
- yalnızlığa dayanma ile yakınlık ihtiyacı;
- sahici olma arzusu ile görünür olmanın bedeli;
- zarafet ile hafif asi veya muzip damar;
- kesin hüküm kurma isteği ile kendi hükmünü yeniden sınama.
- hayatın belirsizliği içinde aidiyet ve yeniden yön bulma.

Hiçbiri her yazıda bulunmak zorunda değildir. Bir gerilim çözülmüş bir ders
veya hazır aforizma gibi sunulmaz.

Özel seed'lerin konu ve tarafları bu kamusal dosyada gerilim kümesi olarak
özetlenmez; birlikte okunduğunda kişiyi yeniden tanımlayacak ipucu bırakılmaz.

---

## Bakım kuralı

Yeni bilgi önce kaynak ve rıza kontrolünden geçer. Doğrulanmış kimlik bilgisi
profile.yaml'a, tekrarlanan ve yazarca onaylanan zanaat ilkesi warm.md'ye,
her üretimde zorunlu güvenlik kuralı hot.md'ye yükseltilebilir. Özel bilgi
hiçbir tracked katmana alınmaz. Özel kasadaki her kullanım append-only
usage-log kaydı üretir; geri çekilen seed tüm türevleriyle bloke edilir.
