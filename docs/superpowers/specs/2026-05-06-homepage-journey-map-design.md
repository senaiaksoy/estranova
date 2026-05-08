# Ana Sayfa `01 — Yolculuk Haritası` Dengeli Revizyon Tasarımı

## Zemin

Estranova ana sayfasındaki `01 — Yolculuk Haritası` bölümü premium editorial bir dille tasarlanmış olsa da, mevcut haliyle sayfanın kalanındaki editoryal hiyerarşiden kopuk görünmektedir. Sorun görsel kalite değil; bölümün ana sayfanın geri kalanında kullanılan `kapak sahnesi + ikincil katman + açık ama nötr CTA` ritmine göre fazla eşit ağırlıklı ve fazla indeks-benzeri davranmasıdır.

Bu tasarım notu, bölümü tamamen yeniden icat etmeden ana sayfanın geri kalanına yaklaştıran `dengeli revizyon` yönünü tanımlar.

## Problem Tanımı

- Mevcut dört kart aynı görsel ve metinsel ağırlıkta akıyor.
- Bölüm adı `Yolculuk Haritası`, tüm siteyi kapsayan bir giriş hissi veriyor; fakat kartların tamamı `/hormonal-gecis/...` altında toplanıyor.
- Kartların sonunda yalnızca ok işareti bulunuyor; açık ama nötr CTA dili yeterince görünür değil.
- `01` ile `02` arasındaki geçiş dekoratif, fakat editoryal olarak yönlendirici değil.
- Bu yüzden `01` bölümü “ilk sahne” gibi değil, “güzel bir dört link listesi” gibi okunuyor.

## Hedef

`01 — Yolculuk Haritası` bölümünü:

- ana sayfanın ilk güçlü editoryal girişlerinden biri haline getirmek,
- `Belirti Atlası` ve `Bu Ayın Sayısı` bölümleriyle aynı ritim ailesine yaklaştırmak,
- kullanıcıya “buradan nasıl başlamalıyım?” sorusuna daha net ama nötr bir cevap vermek,
- mevcut premium tonu korurken bilgi mimarisini daha dürüst ve daha okunur hale getirmek.

## Tasarım Kararı

Seçilen yön: `1 öne çıkan ana kapı + 3 kompakt rota`.

Bu yaklaşım mevcut bölümün işlevini korur, fakat dört eşit kart düzenini kırarak editoryal hiyerarşi kurar. En mantıklı ana kapı `Perimenopoz` olur; diğer üç rota kompakt, taranabilir ve indeks-benzeri bir yan kolonda akar.

## Önerilen Yapı

### 1. Başlık Alanı

Mevcut `01 — Yolculuk Haritası` numaralı giriş korunur.

Başlık:

- önerilen ana başlık: `Hormonal geçiş için ilk okuma eşiği`

Köprü ledesi:

- `Döneminizi kabaca biliyorsanız bu dört kapıdan başlayın. Emin değilseniz bir alttaki belirti atlası daha iyi bir giriş sunar.`

Amaç:

- mevcut “harita” metaforunu korumak,
- fakat kullanıcıya bunun tüm sitenin genel haritası değil, dönem odaklı bir başlangıç yüzeyi olduğunu açık etmek.

### 2. Kart Hiyerarşisi

#### Ana kapı

Öne çıkan tek kart:

- büyük görsel yüzey
- daha büyük serif başlık
- kısa italik lede
- altta görünür ama nötr CTA: `İçeriği incele`

Önerilen rota:

- `Perimenopoz`

Bu kartın rolü:

- bölümün “kapak sahnesi” olmak,
- kullanıcıya ilk giriş tercihini daha net göstermek.

#### İkincil rotalar

Sağ sütunda ya da alt bölümde üç kompakt rota:

- `Menopoza Hazırlık`
- `Menopoz`
- `40 Sonrası Sağlık`

Her rota için:

- küçük üst etiket veya küçük editorial üst satır
- başlık
- tek cümle açıklama
- nötr CTA: `Rotayı aç` veya `İçeriği incele`

Bu üç kartın rolü:

- ana kapının etrafında taranabilir bir editoryal indeks oluşturmak,
- ana sayfanın geri kalanındaki hiyerarşik kompozisyon diline yaklaşmak.

### 3. CTA Dili

CTA işaret dili yalnızca oklara bırakılmayacak.

Kullanım önerileri:

- ana kart: `İçeriği incele`
- ikincil kartlar: `Rotayı aç`

Yasaklı satış/funnel dili kullanılmayacak. CTA’lar bilgi odaklı ve nötr kalacak.

### 4. Görsel Yüzey ve Derinlik

Bölümün mevcut beyaz üstüne beyaz kart etkisi hafifçe derinleştirilecek:

- daha hissedilir krem tonlu ikinci yüzey
- biraz daha görünür blur lekesi
- kart kabuğu ile başlık alanı arasında daha ferah boşluk
- kart içi görsel-metin ritminde daha geniş nefes

Amaç:

- bölümü ağırlaştırmak değil,
- `IssueHero` ve `SymptomNavigation` ile akraba bir editoryal yüzey hissi vermek.

### 5. `01` → `02` Geçişi

Mevcut dekoratif ayırıcı, küçük bir editoryal yönlendirme notuyla güçlendirilecek.

Önerilen metin:

- `Belirti daha baskın görünüyorsa bir sonraki atlas daha doğru başlangıç olabilir.`

Amaç:

- `Yolculuk Haritası` ile `Belirti Atlası` arasında gerçek bir okuma köprüsü kurmak,
- sayfanın üst yarısındaki iki farklı başlangıç mantığını çatıştırmak yerine birbirine bağlamak.

## Bileşen ve Pattern Yönü

Bu revizyon sıfırdan özel bir tasarım dili kurmamalı. Mevcut sistemden faydalanmalı:

- `HubStartingPath.astro` içindeki “nereden başlamalıyım” mantığı referans alınabilir.
- `SubHubArchiveIndex.astro` içindeki numaralı editoryal indeks yaklaşımı kompakt rotalar için iyi bir modeldir.
- `SubmenuHero.astro` ve `SubHubPage.astro` başlık ritmi, eyebrow + büyük serif başlık + kısa lede düzeni için referans alınmalıdır.

Amaç kopyalamak değil; ana sayfadaki bölümü mevcut hub diliyle akraba hale getirmektir.

## Kapsam

Bu revizyonun kapsamı:

- ana sayfadaki `01 — Yolculuk Haritası` bölüm yapısı
- bölüm başlığı ve köprü kopyası
- kart hiyerarşisi
- CTA görünürlüğü
- `01` ile `02` arasındaki geçiş notu

Kapsam dışı:

- ana sayfanın tüm bilgi mimarisini baştan kurmak
- `Belirti Atlası` veya `Bu Ayın Sayısı` bileşenlerini yeniden tasarlamak
- site genelinde tipografi sistemini değiştirmek

## Başarı Ölçütleri

Revizyon başarılı sayılırsa:

- `01` bölümü sayfanın geri kalanından kopuk değil, aynı editoryal ailenin parçası gibi görünür.
- Kullanıcı `dönemden mi, belirtiden mi başlamalıyım?` sorusuna daha net cevap alır.
- Bölüm artık dört eşit link listesi gibi değil, bir editoryal giriş yüzeyi gibi okunur.
- CTA’lar daha görünür olur, fakat satış dili kullanılmaz.

## Uygulama Notu

İlk uygulama adımında hedef, en küçük taşımayla en büyük algı farkını üretmektir:

1. başlık + köprü ledesi güncellemesi
2. kart yapısının `1 + 3` hiyerarşisine dönmesi
3. mikro CTA eklenmesi
4. `01` ile `02` arasına kısa editoryal geçiş notu yerleştirilmesi

Bu dört adım, yapıyı tümden bozmeden tasarım amacını karşılar.
