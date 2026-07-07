# CODEX FAZE 2 — 5 MAKALE YAZIMI GÖREV PAKETİ

**Tarih:** 14 Nisan 2026  
**Hedef:** 5 Türkçe, editoryal makale yazımı (Astro + Tailwind)  
**Kontrol:** Claude tarafından editöryal gözden geçirilecek

---

## ORTAK TALIMATLAR (TÜM 5 MAKALE)

### Teknik Gereksinimler

- **Framework:** Astro (.astro dosyaları)
- **Styling:** Tailwind CSS (core utility classes only)
- **Imports:** `SiteLayout`, `SiteNavbar`, `SiteFooter` 
- **Layout Template:**
  ```astro
  ---
  import SiteLayout from '../../layouts/SiteLayout.astro';
  import SiteNavbar from '../../components/site/SiteNavbar.astro';
  import SiteFooter from '../../components/site/SiteFooter.astro';
  ---
  
  <SiteLayout 
    title="[Makale Başlığı] - Estranova"
    description="[90 karaktere kadar özet]"
  >
    <SiteNavbar currentPath="/[kategori]" />
    <main id="main-content" class="pt-24 text-[#2D2D2D]">
      <!-- MAKALE İÇERİĞİ BURAYA -->
    </main>
    <SiteFooter />
  </SiteLayout>
  ```

### Makale Yapısı (7 Bileşen)

Tüm makaleler `/docs/MAKALE_SABLONU.md`'deki yapıyı takip etmelidir:

1. **Yazar Bilgisi** (üst bölüm)
   - Yazar adı, unvan/rol
   - Yayın tarihi
   - Tahmini okuma süresi

2. **Makale Başlığı** (serif, büyük)

3. **Özet Kutusu** (krem renkli, sınırlandırılmış)
   - Max 3 cümle
   - Temel bulguları özetler

4. **Makale Gövdesi** (alt başlıklar ile yapılandırılmış)
   - 800-1200 sözcük
   - Sade Türkçe (8-10. sınıf seviyesi)
   - Kanıt seviyeleri belirtilmeli (● işaretleri)
   - Paragraflar kısa (max 4-5 cümle)

5. **İlgili İçerikler** (5 bağlantı)
   - Aynı/bitişik kategoriye
   - İç sayfalar

6. **Bilimsel Editör Notu** (ayrı çerçeve)
   - Doç. Dr. Senai Aksoy adına
   - Tıbbi perspektif / ek bağlam
   - Max 3 cümle

7. **Tıbbi Sorumluluk Reddi** (altbilgi)
   - Standart: "Bu içerik genel bilgi amaçlıdır ve bireysel tıbbi değerlendirme yerine geçmez..."

### Yazı Dili & Ton

Referans: `/docs/ICERIK_DILI_KILAVUZU.md`

- **Ton:** Sakin, bilgili, tarafsız, güvenilir
- **Kelime seçimi:** Sade, hiperbol yok
- **Cümle yapısı:** Kısa, açık
- **Kaçınılması gereken:** Pazarlama dili, promosyon, "en iyi", "garantili", "mucize"
- **Önerilen:** "Anlaşılır", "dengeli", "yapılandırılmış rehber"

### Kanıt Seviyeleri

Referans: `/docs/KANIT_DUZEYI.md`

İlgili bölümlerde kanıt seviyesi belirtilmeli:
- **A (Güçlü):** ●●●●● — RCT, meta-analiz, kapsamlı araştırma
- **B (Orta):** ●●●●○ — Gözlemsel çalışmalar, kontrollü deneyler
- **C (Orta-Düşük):** ●●●○○ — Bazı tutarlı kanıt, sınırlı veri
- **D (Zayıf):** ●●○○○ — Ön-klinik, hayvan modelleri, teorik
- **E (Yetersiz):** ●○○○○ — Anekdot, şu anki kanıt yetersiz

Örn: "**Osteoporoz riski [●●●●●]:** Geniş çaplı prospektif kohort çalışmaları..."

### Regulatif & Editöryal Standartlar

- **Pozisyonlandırma:** Genel neşriyat (klinik/muayenehane değil)
- **Tedavi promotion yok:** "Başvur", "Tedaviye başla", "En iyi hekim" vs. kaçın
- **CTA Dili:** Sadece "Devamını Oku", "Rehberi Keşfet", "Daha Fazla Bilgi"
- **Doktor adı:** Kişisel promosyon değil, "Bilimsel Editör" olarak belirtilmeli
- **Yasal:** KVKK uyumlu, neutral tıbbi referans

---

## GÖREV 1: Perimenopoz Nedir? (Temel Rehber)

**Dosya Konumu:** `src/pages/hormonal-gecis/perimenopoz/perimenopoz-nedir.astro`  
**Kanıt Seviyesi:** A (Güçlü)  
**Hedef Sözcük Sayısı:** 1000-1100  
**Okuma Süresi:** 5-6 dakika

### İçerik Yapısı

**H1:** Perimenopoz Nedir? — Temel Rehber  
**Özet Kutusu:**  
"Perimenopoz, menopoza giden 4-10 yıllık geçiş dönemidir. Hormon dalgalanmaları döngü düzensizliğine, sıcak basması ve ruh hali değişimlerine neden olur. Erken tanı ve bilgi, bu süreçte kendinizi daha iyi hissetmenize yardımcı olabilir."

### Alt Başlıklar & Bölümler

1. **Perimenopoz Nedir?**
   - Tanım (4-10 yıllık geçiş dönemi)
   - Menopoz ile fark
   - Başlangıç yaşı (ortalama 43-45, varyasyon geniş)

2. **Hormonal Değişimler Neler Olur?**
   - FSH, LH, östrojen, progesteron dalgalanması [●●●●●]
   - Neden "dalgalanma" olur (üregen azalması, hipofiz tepkisi)
   - Döngü değişkenlikleri (ön 2 yıl, arka 2 yıl)

3. **Yaygın Belirtiler Nelerdir?**
   - Döngü düzensizliği (çok ağır, çok hafif, atlanmış)
   - Sıcak basması [●●●●●]
   - Gece terlemesi
   - Uyku bozukluğu
   - Ruh hali değişimleri (anksiyete, depresyon)
   - Kuru cilt, ince çizgiler
   - Enerji / fatigue
   - Kilo değişimleri
   - Not: Belirtiler kişi kişi çok değişkendir

4. **Perimenopozun Evreleri**
   - Erken perimenopoz (döngü hâlâ düzenli ama hormon değişiyor)
   - Geç perimenopoz (döngü belirgin düzensiz)
   - Son adet (final menstrual period)
   - Postmenopoz (1 yıl son adet sonrası)

5. **Ne Zaman Doktor Görmeliyim?**
   - Belirtiler günlük yaşamı bozuyor
   - Ağır kanamalar
   - Endişe / belirsizlik
   - Aile öyküsü / risk faktörleri
   - Tıbbi tarama (hormonal testler, ekografi - kişiselleştirilmiş)

6. **Bu Dönemde Kendinize Nasıl Bakabilirsiniz?**
   - Düzenli hareket
   - Beslenme (kalsiyum, D vitamini, protein)
   - Stres yönetimi
   - Uyku hijyeni
   - Sosyal destek

### Bilimsel Editör Notu

"Perimenopoz kişi kişi çok değişken bir deneyimdir. Başlangıç yaşı, belirtilerin şiddeti ve süresi geniş bir dağılım gösterir. Bu rehber genel bilgi sağlar; kişisel sağlık değerlendirmesi hekim ile yapılmalıdır. Belirtileriniz yoğunsa, yaşam alışkanlıklarını değiştirmekten ve destek almaktan çekinmeyin."

### İlgili İçerikler

- Hormonal Geçiş / Menopoza Hazırlık
- Hormonal Geçiş / Menopoz
- Zihin & Denge / Ruh Hali Değişimleri ve Menopoz
- Zamansız Yaşam / Uyku Bozukluğu
- Beden & Yakınlık / Cilt Değişimleri

---

## GÖREV 2: 40 Yaşından Sonra Kemik Sağlığı

**Dosya Konumu:** `src/pages/zamansiz-yasam/kemik-sagligi-40-sonrasi.astro`  
**Kanıt Seviyesi:** A (Oxford CEBM Level 1-2)  
**Hedef Sözcük Sayısı:** 1050-1150  
**Okuma Süresi:** 5-6 dakika

### İçerik Yapısı

**H1:** 40 Yaşından Sonra Kemik Sağlığı — Koruyucu Rehber  
**Özet Kutusu:**  
"Östrojen düşüşü ile kemik yoğunluğu azalır. 40+ kadınlarda osteoporoz riski artış gösterir. Proaktif yaklaşım—test, beslenme, hareket—uzun vadeli kemik sağlığını destekler."

### Alt Başlıklar & Bölümler

1. **Neden Kemik Sağlığı Önemlidir?**
   - Kemiklerin işlevleri (destek, mobilite, mineral depolaması)
   - 40+ sonrası neden kemik yoğunluğu değişir [●●●●●]
   - Östrojen ve kemik turnover ilişkisi
   - Osteoporoz, kütük fraktur riski

2. **Osteoporoz vs. Osteopenia — Fark Nedir?**
   - Kemik yoğunluğu seviyelerine göre tanımlar
   - T-skor aralıkları (>-1, -1 ile -2.5, <-2.5)
   - Osteopenia = ön uyarı, osteoporoz = yüksek kırık riski
   - Tanı: DEXA scan

3. **Risk Faktörleri Nelerdir?**
   - Yaş, cinsiyet (postmenopoz kadın yüksek risk)
   - Aile öyküsü [●●●●○]
   - Beslenme (kalsiyum, D vitamini yetersizliği) [●●●●●]
   - Hareketsizlik [●●●●●]
   - Sigara, alkol [●●●●○]
   - İdiyopatik hiperkalsiuri, tiroid hastalıkları
   - Bazı ilaçlar (kortikosteroid)

4. **Kemik Sağlığını Tarama: Ne Zaman ve Nasıl?**
   - DEXA scan (DXA) — en sık tarama
   - Ne zaman yapılmalı: 65+ (tüm kadınlara) vs. erken (risk faktörlü) [●●●●●]
   - Diğer testler (P1NP, CTX — turnover markerleri)
   - İlk tarama baseline, sonraki taramalara kıyasla (risk izleme)

5. **Kemik Sağlığını Destekleme: Beslenme**
   - Kalsiyum (1000-1200 mg/gün) [●●●●●]
     - Gıda kaynakları (süt, peynir, yeşil yapraklılar, tahıl)
     - Suplement (gerekirse hekim danışması)
   - D vitamini (40-60 ng/mL; 1000-2000 IU/gün ortalama) [●●●●●]
     - Güneş, gıda, suplement
   - Protein (1.0-1.2 g/kg vücut ağırlığı) [●●●●○]
   - Mangan, magnesium, fosfor (denge)

6. **Kemik Sağlığını Destekleme: Hareket**
   - Ağırlık antrenmanı (kuvvet, düşüş önleyici dengelemeler) [●●●●●]
   - Yürüyüş (düşük etkili, düzenli) [●●●●●]
   - Esnek antrenmanlar (kırık riski azaltma)
   - Sıklık: Haftada 3-4 gün

7. **Yaşam Alışkanlıkları — Kaçınılması Gereken**
   - Sigara: Kemik yoğunluğu kaybını hızlandırır [●●●●●]
   - Alkol (>2 içki/gün): Kalsiyum emilimini zayıflatır [●●●●○]
   - Aşırı kafein (>400 mg/gün): Kalsiyum excretion artırabilir [●●○○○]
   - Aşırı tuz: Kalsiyum kaybını artırabilir [●●●○○]
   - Hareketsizlik

8. **Tıbbi Seçenekler**
   - HRT (östrojen yerine koyma) [●●●●●]
   - Bifosfonatlar (alenronat, risedronat) [●●●●●]
   - SERM (selektif östrojen reseptor modülatörleri)
   - Hekim ile konuşma: Risk profili, seçenekler

### Bilimsel Editör Notu

"Kemik sağlığı proaktif planlama gerektiren bir alandır. Beslenme ve hareket yaşamın herhangi bir döneminde kemik kalitesini destekleyebilir. Düzenli tarama ve erken müdahale, yaşlılıkta kütük fraktır riskini önemli oranda azaltır."

### İlgili İçerikler

- Hormonal Geçiş / 40 Sonrası Sağlık
- Zamansız Yaşam / D Vitamini Rehberi
- Zamansız Yaşam / Kalsiyum Kaynakları
- Zihin & Denge / Düzenli Hareket
- Bilimsel Pencere / [Osteoporoz araştırması makale]

---

## GÖREV 3: Menopozda Cilt & Elastikiyet Değişimleri

**Dosya Konumu:** `src/pages/beden-yakinlik/menopozda-cilt-degisimleri.astro`  
**Kanıt Seviyesi:** A/B (Dermatoloji + Endokrinoloji)  
**Hedef Sözcük Sayısı:** 1100-1200  
**Okuma Süresi:** 6-7 dakika

### İçerik Yapısı

**H1:** Menopozda Cilt Değişimleri — Anlamak ve Bakım Yapmanın Rehberi  
**Özet Kutusu:**  
"Östrojen azalması cilt mimarisini değiştirir: kolajen ve elastin üretimi azalır. Cilt daha ince, kuru ve döşemeye başlayabilir. Anlamak ve uygun bakım—topikal, beslenme, yaşam alışkanlığı—bu değişimleri yönetmeye yardımcı olur."

### Alt Başlıklar & Bölümler

1. **Östrojen Cilt Yapısına Nasıl Etki Eder?**
   - Östrojen ve cilt fizyolojisi [●●●●●]
   - Kolajen, elastin, hyaluronik asit üretimi [●●●●●]
   - Cilt bariyeri fonksiyonu (lipidler, nem)
   - Mikro-dolaşım ve cilt iyileşme kapasitesi
   - Menopozda değişim zaman çizelgesi (1-3 yıl, kişiye göre değişir)

2. **Yaygın Cilt Değişimleri Nelerdir?**
   - Kuru cilt [●●●●●]
   - İnce çizgiler ve kırışıklıklar [●●●●●]
   - Sagginess / elastikiyet kaybı [●●●●●]
   - Cilt tonu ve pigmentasyon değişimleri [●●●●○]
   - Hassasiyet (reaktif, genel kızarıklık) [●●●●○]
   - Pori genişlemesi görüngüsü [●●●○○]

3. **Vaginal Cilt Değişimleri (Atrofi)**
   - Vulvovajinal atrofi tanımı [●●●●●]
   - Yaygın belirtiler (kuru cilt, ince doku, ağrı/rahatsızlık, yakınlık sırasında ağrı) [●●●●●]
   - Yakınlık deneyimine etkileri
   - Enfeksiyon riski (UTI)
   - Tanı ve tıbbi danışma ne zaman

4. **Fasiyal Cilt Bakımı: Topical Yaklaşımlar**
   - Nemlendirici (günlük, hyaluronik asit, glycerin) [●●●●●]
   - Retinoidler (retinol, tretinoin) — kolajen stimulasyon [●●●●●]
     - Başlangıç: Hafif doza, kademeli artış
     - Güneş hassasiyeti (SPF zorunlu)
   - Vitamin C serumu (antioksidan, aydınlatma) [●●●●○]
   - Peptidler (kolajen destegi) [●●●○○]
   - Güneş koruması (SPF 30+, UV-A/B) [●●●●●] — kritik!
   - Alfa-hidroksi asitler (AHA, hafif; haftalık)

5. **Oral / Suplement Seçenekleri**
   - Kolajen hidrolizatı [●●○○○] — sınırlı insan kanıtı
   - Hyaluronik asit takviyesi [●●○○○]
   - Vitamin C, E, A [●●●●○]
   - Omega-3 yağlar [●●●●○]
   - Antioksidanlar (polifenol, flavonoid) [●●●●○]

6. **Vaginal Cilt Bakımı: Tedavi**
   - Topikal krem/yağ (non-hormonal: hyaluronik asit, coconut oil) [●●●●●]
   - Lokal hormon kremi (estriol, dehidroepiandrosterone) [●●●●●]
   - Sistemik HRT [●●●●●]
   - SERM (ospemifene) [●●●○○]
   - Lazer terapi / radiofrequency [●●○○○] — promisli ama kanıt gelişiyor
   - Düzenli sexual aktivite (kan akışı) [●●●●○]

7. **Yaşam Alışkanlıkları**
   - Beslenme (protein, yağ, antioksidant zengin) [●●●●○]
   - Hidrasyon (2-3 litre su/gün) [●●●●○]
   - Uyku (cilt onarım) [●●●●○]
   - Stres yönetimi (cortisol ve cilt kalitesi) [●●●●○]
   - Sigara / alkol kaçın [●●●●●]
   - Güneş maruziyeti sınırlandır [●●●●●]
   - Hareket / kan dolaşımı [●●●●○]

8. **Dermatolog Ne Zaman Görmeli?**
   - Belirtiler günlük yaşamı etkiliyorsa
   - Cilt tepkisi (alerji, irritasyon)
   - Pigmentasyon endişesi
   - Yaygın rahatsızlık

### Bilimsel Editör Notu

"Cilt değişimleri menopozun görünür ve dokunabilir yönüdür. Bu değişimleri anlamak ve proaktif bakım yöntemleri—evde ve profesyonel desteğin kombinasyonu—hissetmenizi iyileştirebilir. Birçok müdahale kişiye göre varyasyon gösterir; sabır ve tutarlılık anahtardır."

### İlgili İçerikler

- Beden & Yakınlık / Yakınlık Sırasında Ağrı ve Menopoz
- Zamansız Yaşam / Beslenme ve Cilt Sağlığı
- Zihin & Denge / Stres ve Cilt
- Bilimsel Pencere / Kolajen Araştırması
- Hormonal Geçiş / Menopoz Nedir

---

## GÖREV 4: Uyku Bozukluğu ve Menopoz

**Dosya Konumu:** `src/pages/zihin-denge/uyku-bozuklugu-menopoz.astro`  
**Kanıt Seviyesi:** A (Nöroloji + Uyku Tıbbı)  
**Hedef Sözcük Sayısı:** 1100-1200  
**Okuma Süresi:** 6-7 dakika

### İçerik Yapısı

**H1:** Uyku Bozukluğu ve Menopoz — Dinlenmeyi Yeniden Kazanmanın Rehberi  
**Özet Kutusu:**  
"Menopoz uyku kalitesini derinden etkiler: sıcak basması, hormon dalgalanması, ruh hali. Uyku mimarisini, hijyeni ve tedavi seçeneklerini anlamak, kaybedilen dinlenişi geri kazandırmaya yardımcı olur."

### Alt Başlıklar & Bölümler

1. **Uyku Mimarisi Nedir?**
   - Uyku döngüleri (NREM 1, 2, 3; REM) [●●●●●]
   - Her evrenin işlevi (konsolidasyon, yenileme, duygusal işleme)
   - Döngü süresi (~90 dakika) ve gece boyunca tekrarları
   - Derin uyku ve REM uyku menopozda nasıl değişir [●●●●●]

2. **Menopozda Uyku Neden Bozulur?**
   - Vasomotor belirtileri (sıcak basması, gece terlemesi) [●●●●●]
   - Hormon dalgalanması (östrojen, progesteron) [●●●●●]
   - Ruh hali değişimleri (depresyon, anksiyete) [●●●●●]
   - Uyku mimarisinde değişim [●●●●○]
   - Diğer faktörler (apnea riski, restless leg sendromu) [●●●●○]

3. **Yaygın Uyku Sorunları**
   - **İnsomniya başlangıç** — uyumaya başlamakta zorluk [●●●●●]
   - **Maintenance insomnia** — ara uyanmalar, erken sabah uyandırma [●●●●●]
   - **Non-restorative sleep** — yeterli saate rağmen dinlenmemiş hissi [●●●●●]
   - **Increased sleep latency** — işleme süresi
   - İlişkili: Gündüz somnolans, fatigue, dikkati zorluk

4. **Uyku Hijyeni: Temeller**
   - **Saat düzenlemesi** (sabit uyku/uyanış saati, haftasonları bile) [●●●●●]
   - **Uyku ortamı** (serin 16-19°C, karanlık, sessiz, rahat yatak) [●●●●●]
   - **Aktivite** (günlük hareket, ancak uykudan 3-4 saat öncesi değil) [●●●●●]
   - **Beslenme:** Caffeine <400 mg, sonlandırma 2 PM [●●●●●]
   - **Alkol:** Kaçının (uyku mimarisini bozar, ara uyanmaları artırır) [●●●●●]
   - **Yatakta ekranlar:** Yatak sadece uyku + yakınlık (conditionning) [●●●●●]
   - **Relaksasyon:** Bedtime rutini (okuma, meditasyon) [●●●●○]

5. **Doğal & Suplement Seçenekleri**
   - **Melatonin** [●●●●○]
     - Eksernal melatonin (0.5-5 mg): uyku başlatmada yardımcı
     - Saat ayarında rol (circadian)
     - Doza bağlı varyasyon
   - **Magnesium** [●●●●○]
     - 200-400 mg: kas rahatlaması, anksiyete azaltma
     - Gıda: Yeşil yapraklılar, kuruyemişler, çikolata
   - **Valerian root** [●●●○○]
   - **Passionflower, chamomile** [●●●○○] — gentle, oral
   - **L-teanine** [●●●○○] — odaklanma/rahatlaması
   - Uyarı: Suplement etkileşimleri (ilaç konusunda hekim danışma)

6. **Tıbbi Tedavi Seçenekleri**
   - **HRT** (östrojen ± progesteron) [●●●●●]
     - Vasomotor belirtileri azaltır
     - Dolaylı olarak uyku kalitesini iyileştirir
   - **Selektif serotonin reuptake inhibitörleri (SSRI)** [●●●●○]
     - Uyku bozukluğuna bağlı depresyon/anksiyete
     - Yan etkiler (uyku bozabilen, dozunun zamanlaması önemli)
   - **Uyku ilaçları** (short-acting: zolpidem, zaleplon) [●●●●●] — kısa süreli
     - Bağımlılık riski
     - Sabah etkileri
     - Son çare: 2-4 hafta max
   - **Gabapentin** [●●●●○] — neuropati + vasomotor belirtileri
   - **Bilişsel Davranış Terapisi (CBT-I)** [●●●●●] — kanıt-tabanlı, uzun süreli iyileşme

7. **İlişkili Durumlar: Ne Zaman Uyku Doktoru Görmeli?**
   - **Uyku apnesi** (uykuda nefes kesintileri, şnorkulama, gündüz somnolans) [●●●●●]
   - **Restless leg sendromu** [●●●●●]
   - **GERD** (yatarken reflü) [●●●●●]
   - **Narkrolepsji, narkolepsi belirtileri** [●●●●○]
   - Uzman tanı: Uyku çalışması (polysomnography)

8. **Uzun Vadeli Perspektif**
   - Uyku sorunları zamanla iyileşebilir (perimenopoz → postmenopoz)
   - Kronik uyumsuzluk kardiyovasküler, metabolik risk artırır [●●●●●]
   - Tutarlı müdahale başarı oranını artırır
   - Yaşam kalitesi iyileşmesi uykunun ötesine uzanır

### Bilimsel Editör Notu

"Uyku kalitesi menopozun deneyiminin merkezi bir bileşenidir. Sistemli bir yaklaşım—hijyen, tedavi, destek—çoğu kadında uyku mimarisinin ve dinlenişin geri kazanılmasını sağlar. Sabırlı, tutarlı müdahale anahtar; bir yöntemi 2-4 hafta deneyin ve ardından değerlendirin."

### İlgili İçerikler

- Zihin & Denge / Ruh Hali Değişimleri ve Menopoz
- Hormon Geçişi / Perimenopoz
- Zamansız Yaşam / Stres Yönetimi
- Beden & Yakınlık / Gece Terlemesi
- Bilimsel Pencere / [Uyku araştırması makale]

---

## GÖREV 5: NAD+ ve Hücresel Yaşlanma

**Dosya Konumu:** `src/pages/bilimsel-pencere/nad-plus-hucresel-yaslanma.astro`  
**Kanıt Seviyesi:** C/D (Erken evre insan araştırması)  
**Hedef Sözcük Sayısı:** 1100-1250  
**Okuma Süresi:** 6-7 dakika

### İçerik Yapısı (ÖNEMLİ: Bu makale teorik ve erken evre araştırma kapsamında yazılmalıdır)

**H1:** NAD+ ve Hücresel Yaşlanma — Gelişmekte Olan Bilim  
**Özet Kutusu:**  
"NAD+ hücresel enerji ve onarımda kritik bir moleküldür. Yaş ile NAD+ seviyeleri düşer ve yaşlanma ile bağlantılıdır. Araştırma umut verici ancak insan uygulamalarında kanıt hâlâ erken evrededir. Bu rehber mevcut bilimin durumunu açıklar."

### Alt Başlıklar & Bölümler

1. **NAD+ Nedir?**
   - NAD+ (Nikotin Adenin Dinükleotid) tanımı [●●●●●]
   - Hücresel işlevleri (mitokondri, ATP üretimi, DNA onarım) [●●●●●]
   - Sirtuinler (histone deacetylase) ve NAD+-bağımlı yolları [●●●●●]
   - Redoks durum (NAD+ vs. NADH iyonu) [●●●●●]
   - Yaşlanma biyolojisindeki rolü [●●●●○]

2. **Yaş ile NAD+ Seviyeleri Nasıl Değişir?**
   - Doğumda yüksek → yaş ile kademeli azalma [●●●●○]
   - 40+ sonrasında gözlemlenebilir düşüş [●●●●○]
   - Yaşlılıkta %50+ azalma [●●●●○]
   - Organ/doku varyasyonu (beyin, kas, kalp, karaciğer)
   - Azalmanın nedenleri (PARP aktivitesi, NADase artışı, CD38 ekspresyonu) [●●●●○]

3. **NAD+ Düşüşü ve Yaşlanma Belirtileri Arasındaki Bağlantı**
   - **Mitokondrial işlev** [●●●●○]
     - Enerji üretimi azalması (ATP)
     - Gündüz fatigue, düşük tolerans
   - **DNA onarım kapasitesi** [●●●●○]
     - Hasarlı DNA birikimi
     - Mutasyon riski
     - Hücre ölümü
   - **Sirtuinler ve metabolik sağlık** [●●●●○]
     - SIRT1 (uzun yaşam gen), metabolik sağlık
     - SIRT3 (mitokondrial), antioksidan savunma
     - Metabolik sendrom, insülin direnci
   - **Nöronal işlev** [●●●●○]
     - Deneysel: Kognitif azalma ile bağlantı
     - Parkinson, Alzheimer modelleri
   - **Dolaşım ve kemik** [●●●●○]
   - **İmmün fonksiyon** [●●●●○]

4. **Araştırma Bulguları (Hayvan Modelleri ve Erken İnsan Çalışmalar)**
   - **Hayvan Modelleri [●●●●○]**
     - C. elegans, Drosophila, fare modelleri
     - NAD+ artırımı yaşam uzunluğunu uzatır (deneysel koşullarda)
     - Metabolik sağlık iyileşmesi
     - NOT: Farelerde gözlemler → insanlar değildir
   
   - **Erken İnsan Çalışmalar [●●●●○]**
     - Pilot çalışmalar (n=50-100 aralığı) — küçük örneklemler
     - NR (Nikotin Riboside), NMN (Nikotinamid Mononükleotid) takviyelerinin NAD+ seviyeleri artırdığı gözlenmiş [●●●●○]
     - Sınırlı veri: Fiziksel performans, metabolik marker (ön sonuçlar umut verici) [●●●○○]
     - İnsanlarda uzun vadeli güvenlik ve etkisellik hakkında veriler sınırlı [●●●○○]
     - RCT (randomized controlled trials) hâlâ devam ediyor

5. **NAD+ Artırmanın Potansiyel Müdahale Alanları**
   - **NAD+ prekürsorleri (Supplementler)**
     - NR (Nikotin Riboside) [●●●●○] — en çok araştırılan
     - NMN (Nikotinamid Mononükleotid) [●●●●○]
     - NA (Nikotin Aside, Vitamin B3) [●●●●●] — uzun süredir biliniyor, doza bağlı varyasyon
     - Tryptophan (NAD+ sentezi yolu)
   
   - **NAD+ prodüksüyonu uyarıcıları**
     - PARP inhibitörleri [●●●●○]
     - sirtuin aktivatörleri (SRT501, resveratrol) [●●●○○]
   
   - **Yaşam alışkanlığı**
     - Hareket (mitokondrial uyarımı) [●●●●●]
     - Intermittent fasting / kalorieyi sınırlandırma [●●●●○]
     - Protein tüketimi [●●●●○]
     - Uyku [●●●●●]

6. **Ticari NAD+ Takviyelerine Eleştirel Bakış**
   - **İhraç söylemler vs. Kanıt**
     - Pazar: "NAD+ artırma, yaşlanmayı yavaşlatır, enerji artırır" iddiası
     - Gerçek kanıt: Hayvan modellerinde umut, insanlar da hâlâ belirsiz
   - **Bioavailability sorusu** [●●●●○]
     - NAD+ molekülü GI sistemde stabil mi?
     - Emilim oranı % kaç? (Belirsiz)
     - NR vs. NMN: Biyolojik değerliliği dışa aktarılamıyor
   - **Maliyet-Fayda** [●●○○○]
     - Oldukça pahalı (~$30-80/aylık)
     - Kanıt sınırlı
     - Yaşam alışkanlığı değişimi (hareket, uyku, beslenme) daha maliyetsiz ve kanıt-tabanlı
   - **Potansiyel yan etkiler** [●●●○○]
     - Çoğunlukla güvenli görünüyor (klinik çalışmalarda)
     - Uzun vadeli veriler eksik
     - Etkileşimler (ilaç): Doktor danışması gerekli

7. **NAD+ Optimizasyonu: Kanıt-Tabanlı Adımlar**
   - **Tıbbi değerlendirme**
     - NAD+ seviyeleri ölçümü mümkün müdür? (Laboratuvar hizmetleri, sınırlı)
     - Kişiselleştirilmiş risk faktörleri
   
   - **Yaşam alışkanlığı (En Güçlü Kanıt)**
     - Düzenli aerobik + dirençli antrenman [●●●●●]
     - Yeterli uyku (7-9 saat) [●●●●●]
     - Sağlıklı beslenme (Akdeniz diyeti) [●●●●●]
     - Stress yönetimi [●●●●○]
     - Sosyal bağlantılar [●●●●○]
   
   - **Beslenme Seçenekleri**
     - Vitamin B3 (NA) kaynakları (tavuk, ton balığı, yer fıstığı) [●●●●●]
     - Tüm tahıllar, fasulye [●●●●○]
     - Suplement (gerekirse hekim danışması) [●●●●○]

8. **Gelecek Yönü: Araştırma Devam Ediyor**
   - Devam eden klinik çalışmalar (metabolik sendrom, Parkinson, kardiyak) [●●●●○]
   - Daha büyük, daha uzun RCT'ler bekleniyor (5-10 yıl)
   - Mekanizm (sirtuinler, mitokondrial dinamik) gelişmekte
   - Kişiselleştirilmiş tıp: NAD+ seviyeleri, yaşlanma hızı belirteci olabilir mi? (Deneysel) [●●●○○]

### Dikkat Kutusu (Önemli)

Tüm makalede vurgulanmalı:
- **Temel Fakta:** NAD+ araştırması hızlı gelişmekte ancak insan uygulamalarında kanıt hâlâ erken evrededir.
- **Pazar söylemi:** Birçok ticari iddia araştırma bulguları aşırı yorumlanmıştır.
- **Kanıt Hiyerarşisi:** Hayvan modelleri ≠ İnsan kanıtı. Erken çalışmalar ≠ Etkili / güvenli sonuç.
- **Kişisel karar:** Suplement kararları sağlık profesyoneli ile yapılmalıdır.

### Bilimsel Editör Notu

"NAD+ araştırması hücresel yaşlanma biçimde heyecan verici bir alana ışık tutmuştur. Ancak insan sağlığında uygulamalar hakkında güvenilir kanıt, henüz erken aşamadadır. Hayvan modelleri umut verici sonuçlar gösterirken, bu bulguların insanlar için nasıl çevrildiği hâlâ belirlenmelidir. Herhangi bir NAD+ takviyesi başlatmadan önce sağlık profesyoneli ile danışınız. Yaşlanmayı sağlığa en destekleyen yaklaşım—düzenli hareket, yeterli uyku, beslenme—hâlâ yaşam alışkanlıklarıdır."

### İlgili İçerikler

- Bilimsel Pencere / [Mitokondrial Sağlık Makale]
- Zamansız Yaşam / Hareket ve Yaşam Süresi
- Zamansız Yaşam / Beslenme ve Yaşlanma
- Zihin & Denge / Uyku ve Nöral Sağlık
- Hormonal Geçiş / Menopoz Sonrası Sağlık

---

## FİNAL KONTROL (CODEX İÇİN)

Her makale tamamlandıktan sonra:

✅ **SiteLayout + SiteNavbar + SiteFooter** import et  
✅ **Başlık, kategori, okuma süresi** belirtildi  
✅ **Özet kutusu** krem renkli, sınırlandırılmış (70-80 sözcük)  
✅ **Gövde** 1000-1250 sözcük, 5-8 alt başlık  
✅ **Kanıt seviyeleri** (● işaretleri) bölümlerde belirtildi  
✅ **Bilimsel Editör Notu** ayrı çerçeve, Doç. Dr. Senai Aksoy adına  
✅ **Tıbbi sorumluluk reddi** altbilgi  
✅ **İlgili içerikler** 5 bağlantı, iç sayfalar  
✅ **Dil** — sade Türkçe, hiperbol yok  
✅ **Renk/Stil** — Tailwind core utilities, renkler CLAUDE.md paletinden  

---

**BAŞLANIZ. Tüm 5 makale için aynı kalite standardı, editöryal ton ve yapı kullanınız.**
