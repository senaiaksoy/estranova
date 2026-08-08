# Estranova Operasyonel Editoryal Politika

Bu doküman yayın sürecinde günlük kararları standartlaştırmak için hazırlanmıştır.

## 1) Konumlandırma
- Estranova bir klinik değildir.
- Estranova tedavi/hizmet satış platformu değildir.
- Estranova bağımsız editoryal sağlık bilgi platformudur.

## 2) Zorunlu Yayın Unsurları
Her sağlık içeriğinde aşağıdakiler görünür olmalıdır:
- `Yazar`
- `Tıbbi inceleme` (reviewer adı ve unvanı)
- `Son güncelleme tarihi`
- `Tıbbi sorumluluk reddi`
- `Bilimsel kaynaklar`

## 3) Yasak Dil (Asla Kullanılmaz)
- Randevu/başvuru/satış çağrıları:
  - `Randevu al`
  - `Tedaviye başla`
  - `Hemen başvur`
  - `Şimdi başla`
  - `Fiyat al`
- Üstünlük veya garanti iddiaları:
  - `En iyi`
  - `En başarılı`
  - `Kesin çözüm`
  - `Garantili`
  - `Başarı oranımız`
- Kampanya/fiyat dili:
  - `Paket`
  - `Kampanya`
  - `İndirim`

## 4) Nötr CTA Sözlüğü (Tercih Edilen)
- `Rehberi keşfet`
- `Belirtileri değerlendir`
- `İçeriği incele`
- `Bilimsel dosyaları gör`
- `Okuma rotasına başla`

## 5) Deneysel Konu Formatı (Peptit, GLP-1, NAD+, vb.)
Bu tür içerikler yalnızca aşağıdaki başlık yapısıyla yayınlanır:
1. `Ne biliyoruz`
2. `Ne bilmiyoruz`
3. `Riskler ve belirsizlikler`
4. `Regülasyon durumu`

Not: Doz/protokol/tedavi planı önerilmez.

## 6) Sponsorluk ve Şeffaflık
- Sponsorlu içerik açık etiketlenir.
- Affiliate bağlantılar açıkça belirtilir.
- Sponsorlu metinler editoryal metin gibi sunulmaz.

## 7) Kanıt Hiyerarşisi
Kaynak öncelik sırası:
1. Uluslararası rehberler (WHO, ESHRE, ASRM vb.)
2. Sistematik derleme / meta-analiz
3. Randomize kontrollü çalışmalar
4. Gözlemsel çalışmalar
5. Uzman görüşleri

## 8) Yayın Öncesi Kontrol Kapısı
Yayından önce üç onay gerekir:
1. Editoryal ton ve yapı kontrolü
2. Tıbbi doğruluk kontrolü
3. Uyum ve yasak dil kontrolü

## 9) Yazar Üslup Kartı — B. Selin (Işık Selin Günce)
Bu kart, `src/data/writers.ts` içindeki `writingStyle` alanı ile birlikte uygulanır.

- **Ses:** Sahici, sıcak, yaşıt tonu yüksek; panik değil yön duygusu veren anlatım.
- **Ritim:** Kısa-orta cümle dengesi; sahne geçişi gibi akıcı ve nefesli kurgu.
- **Çerçeve:** Önce deneyimi adlandır, sonra mekanizmayı sadeleştir, en sonda güvenli adım ver.

### Zorunlu Uygulamalar
- Duyguyu normalize eden bir giriş kullan (`yalnız değilsiniz`, `bu sık görülebilir` çerçevesi).
- Tıbbi terimi sade Türkçe karşılığıyla birlikte ver.
- Belirsizlikte kesinlik değil olasılık dili kullan (`yardımcı olabilir`, `ilişkili olabilir`).
- Kırmızı bayrakları kısa, net ve maddeli ver.

### Kaçınılacaklar
- Buyurgan/didaktik doktor tonu
- Korku yükselten dramatik ifadeler
- Kanıttan bağımsız kesin yargılar

## 10) Terim Tercihi (Dil Standardı)
- Kadın sağlığı içeriklerinde genel dilde `döngü` yerine öncelikli terim `adet` kullanılır.
- Tercih edilen kullanımlar:
  - `adet düzeni`
  - `adet aralığı`
  - `adet kaydı`
- `Döngü` terimi yalnızca teknik bağlamda (ör. `hormonal döngü`) gerçekten gerekli olduğunda kullanılır.

### 10.1) Akademik / eski Türkçe yumuşatması (HARD CONSTRAINT — 2026-04-30)

Estranova yaşıt sesi (CLAUDE.md §3) için günlük konuşma dilinde nadir kullanılan akademik/eski Türkçe kelimeler **makale gövdesinde yasaktır**; muadiliyle değiştirilir. Profile/editöryal sınıflandırma terimi olarak istisna kalabilir (yazıya sızmaz).

| Yasak (akademik) | Önerilen muadil | Bağlam notu |
|---|---|---|
| `örüntü` | **kalıp**, düzen, biçim | "uyku örüntüsü" → "uyku kalıbı"; tüm Türkçe iyelik/durum ekleri sed ile dönüştürülür |
| `muğlak` | **belirsiz**, net olmayan | İSTİSNA: profile içi "HRT-muğlak imza" gibi editöryal sınıflandırma terimi makaleye sızmaz |
| `yeti` | **beceri**, kapasite | "yerlendirme yetisi" → "yerlendirme becerisi" |
| `edinim` | kazanım, öğrenme | — |
| `temayül` | eğilim, yönelim | — |
| `ivedi` | acil, hemen | — |
| `müktesebat` | birikim | — |
| `ikircik(li)` | kararsızlık (kararsız) | — |
| `müphem` | belirsiz, anlaşılmaz | — |
| `istinaen` | dayanarak, göre | — |
| `salt` | yalnız, sadece | İSTİSNA: korpus alıntıları (Gamze) |
| `durağan` | sabit, hareketsiz | İSTİSNA: yoga teknik terimi *Hatha (durağan duruşlar)* |

**Korunan teknik bağlamlar:** *uyku döngüsü, adet/regl döngüsü, kemik döngüsü, yaşam döngüsü, hormonal döngü, NREM/REM döngüleri* — yerleşmiş tıbbi terimler.

**Detay + sed komutu + yan-etki uyarısı:** `memory/feedback_akademik_kelime_yumusatma_2026_04_30.md`

## 11) Manifesto-Aligned Mahrem Ton Eki (Supplementary)

Bu bölüm `/manifesto` sayfasındaki *"deneyim aktarmak"* sözüne bağlı **ek** kuralları belgeler. **Bölüm 9'daki yazar üslup kartlarının ve `AGENTS.md` Content Tone'un yerini ALMAZ**; onları manifesto ile uyumlu kılar.

### 11.1) İlke

Estranova yazıları "akıllı, samimi ve güvenilir bir not defteri" iddiasını her makalede görünür kılmalıdır. Bu, makalenin ortasında veya bir bölüm geçişinde **kısa bir kişisel sahne** ile gerçekleşir — yazar kendi günlük hayatından (veya yakın çevresindeki kadınların gözleminden) bir an açar.

### 11.2) Operasyonel Kurallar

- **Sayı:** Her makalede **1, en fazla 2** anekdot. Daha fazlası karikatür, daha azı manifesto-aligned değil.
- **Şekil:** Birinci tekil şahıs, kısa sahne (genelde 2-4 cümle), somut detay — soyut his değil.
- **Denge cümlesi:** Anekdotun ardından *"ama bu benim yolum, sizinki farklı olabilir"* tipi yumuşatıcı bir cümle **zorunlu**.
- **Kişiselleştirme:** Tek-elden hissi vermesin. Her yazarın kendi anekdot ekseni `writers/<slug>.md` **Bölüm 4b**'de tanımlıdır; writer agent buna sadık kalır.

### 11.3) Yazar-Bazlı Eksenler (Özet)

| Yazar | Eksen | Yıllık makale başı anekdot ana kaynak |
|---|---|---|
| Berna | Instagram tarama, hekim danışma, antrenman gözlemi | Feed/post + bedeniyle iletişim |
| Alara | Mevsimsel saha, jim, geniş aile | Surf/at/jim antrenman + anne-anneanne-teyze |
| Başak | 9 yıllık geçiş + yeni HRT + anne-kız üçgeni | Aile sahnesi + HRT yolculuğu + seyahat |
| Duygu | Yeni şey deneme + Londra-İstanbul + yargısız dinleyici | Kızıyla telefon + kliniğin dekoru + yaşıt sohbeti |
| Özlem | Sokratik soru + üst düzey iş çevresi | Para Durumu sahnesi + soru-eksenli sahne |
| Rima | HRT karar süreci + araştırmacı titizlik | Sabah araştırma okuma + iç tartışma |
| Gamze | Mutfak köşesi + HRT iç sorgulaması | Sabah mutfağı + kuşak aktarımı + bedeniyle konuşma |
| Senai | Hekimlik + aktif klinik pratik + bilimsel kanıt + babacan açıklama | Anonim/parafraz muayene anekdotu; kimliklendirici ayrıntı ve tek vakadan genelleme yasak |

### 11.4) Hassas Sınırlar

Bazı yazarların anekdot havuzunda **araç haline getirilemeyecek** kişi/durum vardır. Detay her yazarın `writers/<slug>.md` Bölüm 4b sonundaki "Hassas Sınır" alt bölümündedir. Senai için genel klinik gözlem yasak değildir: `Geçen gün bir hastam...` veya `muayene odasında sık duyduğum...` biçiminde anonim ve parafraz edilmiş sahne kullanılabilir. Mutlak sınır; isim/yaş/yer/kurum/tanı/ilaç-doz/ayırt edici ayrıntı, Estranova yazarlarına ima, uydurma hasta sözü ve tek vakadan bilimsel sonuç üretmektir.

### 11.5) Yasak Yapılar

- "Bende işe yaradı, siz de yapın" — manifesto'nun *"yol açmak"* eksenine ters
- "Şu uygulamayı/markayı denedim, çok memnun kaldım" tarzı endorsement
- Aynı anekdotu birden fazla makalede tekrarlama (havuz tükenmesi)
- Yer/marka/restoran/otel listeleme — biyografi süsü olarak
- Mahrem aile detaylarını araç haline getirme (özellikle çocuklar, sağlık koşulu olan akrabalar)

### 11.6) Bağlantı

- Manifesto sayfası: `/manifesto`
- Üst kural seti: `AGENTS.md` → "Content Tone" + "Manifesto-Aligned Anekdot Ekseni"
- Yazar üslup kartları: Bölüm 9 + her yazarın `writers/<slug>.md` Bölüm 4b
