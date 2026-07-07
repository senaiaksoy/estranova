# CODEX FAZE 3 — 5 EK MAKALE YAZIMI GÖREV PAKETİ

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
   - Yazar adı: `[Yazar Adı]` (placeholder, sonra doldurulacak)
   - Unvan: Sağlık editörü / ilgili rol
   - Yayın tarihi: 14 Nisan 2026
   - Tahmini okuma süresi: 5-7 dakika

2. **Makale Başlığı** (serif, büyük)

3. **Özet Kutusu** (krem renkli, sınırlandırılmış)
   - Max 3 cümle
   - Temel bulguları özetler

4. **Makale Gövdesi** (alt başlıklar ile yapılandırılmış)
   - 1000-1200 sözcük
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

### Regulatif & Editöryal Standartlar

- **Pozisyonlandırma:** Genel neşriyat (klinik/muayenehane değil)
- **Tedavi promotion yok:** "Başvur", "Tedaviye başla", "En iyi hekim" vs. kaçın
- **CTA Dili:** Sadece "Devamını Oku", "Rehberi Keşfet", "Daha Fazla Bilgi"
- **Doktor adı:** Kişisel promosyon değil, "Bilimsel Editör" olarak belirtilmeli
- **Yasal:** KVKK uyumlu, neutral tıbbi referans

---

## GÖREV 1: Menopoz Nedir? — Temel Rehber

**Dosya Konumu:** `src/pages/hormonal-gecis/menopoz/menopoz-nedir.astro`  
**Kanıt Seviyesi:** A (Güçlü)  
**Hedef Sözcük Sayısı:** 1000-1100  
**Okuma Süresi:** 5-6 dakika

### İçerik Yapısı

**H1:** Menopoz Nedir? — Temel Rehber  
**Özet Kutusu:**  
"Menopoz, son adettin 12 ay sonrasıyla geriye dönük olarak tanımlanır. Perimenopozun sonudur ve yeni bir yaşam evresidir. Menopoza girmek, vücudun yeni dengesine uyum sağlama sürecidir; belirtiler genellikle hafifler ancak uzun vadeli sağlık takibi önemli hale gelir."

### Alt Başlıklar & Bölümler

1. **Menopoz Nedir?**
   - Tanım (son adet + 12 ay)
   - Perimenopoz vs. Menopoz
   - "Menopause" vs. "Climacteric"
   - Ortalama yaş (51-52)

2. **Menopozun Evreleri**
   - Perimenopoz (geçiş)
   - Menopoz (last menstrual period)
   - Postmenopoz (hayatının kalanı)
   - Her evrenin özellikleri

3. **Hormon Değişimleri Bu Evrede**
   - FSH, LH yüksek [●●●●●]
   - Östrojen ve progesteron düşük [●●●●●]
   - Yeni hormonal dengeye ulaşma (postmenopozda stabilize) [●●●●●]
   - Hormon ölçümleri ne anlam taşır?

4. **Belirtiler Bu Evrede**
   - Vasomotor belirtilerin genellikle azalması [●●●●●]
   - Bazı belirtilerin devam etmesi (cilt, libido, uyku)
   - Yeni ortaya çıkabilecek başlıklar (metabolik değişim, kardiyovasküler risk)
   - Belirtilerin süre ve şiddeti [●●●●○]

5. **Postmenopoz Dönemi**
   - İlk 5-8 yıl (kemik kaybı hızlı) [●●●●●]
   - Kardiyovasküler risk artışı [●●●●●]
   - Metabolik değişim (kilo, şeker) [●●●●●]
   - Kemik ve kalp sağlığı uzun vadeli takip

6. **Yaşam Kalitesi Postmenopozda**
   - Semptomların genellikle hafiflemesi
   - Yaşam özgürlüğü / yeni başlangıç perspektifi
   - Fiziksel enerji dönüşü (bazı kadınlarda)
   - Sosyal, emosyonel, cinsel yaşamda değişim

7. **Uzun Vadeli Sağlık Gündemi**
   - Düzenli tarama (kemik, kalp, metabolik)
   - Yaşam alışkanlıkları (hareket, beslenme, uyku)
   - Tıbbi takip gerekliliği
   - HRT veya alternatif tedavi seçenekleri

### Bilimsel Editör Notu

"Menopoz, bir hastalık değil, yaşam döngüsüdür. Ancak bu dönem, sağlık proaktifliğinin kritik olduğu bir aşamadır. Kardiyovasküler sağlık, kemik yoğunluğu ve metabolik dengenin uzun vadeli takibi, yaşlılıkta sağlıklı yaşamın temelini atar."

### İlgili İçerikler

- Hormonal Geçiş / Perimenopoz Nedir?
- Hormonal Geçiş / 40 Sonrası Sağlık
- Zamansız Yaşam / Kemik Sağlığı
- Zihin & Denge / Ruh Hali Değişimleri
- Bilimsel Pencere / Östrojen Biyolojisi

---

## GÖREV 2: Ruh Hali Değişimleri ve Menopoz

**Dosya Konumu:** `src/pages/zihin-denge/ruh-hali-degisimleri-menopoz.astro`  
**Kanıt Seviyesi:** A (Psikiyatri + Endokrinoloji)  
**Hedef Sözcük Sayısı:** 1100-1200  
**Okuma Süresi:** 6-7 dakika

### İçerik Yapısı

**H1:** Ruh Hali Değişimleri ve Menopoz — Depresyon, Anksiyete, Duygudurum  
**Özet Kutusu:**  
"Menopoz, ruh hali dalgalanmasının en sık yaşandığı dönemdir. Hormon değişiklikleri, uyku bozukluğu ve yaşam faktörleri, depresyon ve anksiyete riskini artırır. Mekanizmi anlamak ve tedavi seçeneklerini bilmek, bu dönemdeki duygusal sağlığı korumada kritik değerdedir."

### Alt Başlıklar & Bölümler

1. **Hormon Değişiklikleri Ruh Halini Nasıl Etkiler?**
   - Östrojen ve serotonin ilişkisi [●●●●●]
   - Progesteron ve GABA [●●●●●]
   - FSH, LH ve nöral etkileri [●●●●○]
   - Perimenopauzda dalgalanma vs. postmenopozda sabitlik [●●●●●]

2. **Yaygın Ruh Hali Sorunları**
   - **Depresyon** [●●●●●]
     - Perimenopauzda risk artışı (%2-3x)
     - Semptomlar (bezginlik, iştahsızlık, umutsuzluk)
     - Major vs. sitüasyonel depresyon
   - **Anksiyete** [●●●●●]
     - Panik atak, sosyal anksiyete
     - Somatik semptomlar (kalp çarpıntısı)
   - **Ruh hali dalgalanmaları** [●●●●●]
   - **Duygusal hassasiyet** [●●●●○]

3. **Risk Faktörleri**
   - Aile öyküsü [●●●●●]
   - Önceki depresyon öyküsü [●●●●●]
   - Yaşam stresi, sosyal izolasyon [●●●●●]
   - Uyku bozukluğu [●●●●●]
   - Somatik belirtiler (sıcak basması, ağrı) [●●●●○]

4. **Ruh Halini Destekleyen Yaşam Alışkanlıkları**
   - Düzenli hareket (aerobik, dirençli) [●●●●●]
   - Uyku hijyeni [●●●●●]
   - Beslenme (protein, B vitaminleri, omega-3) [●●●●○]
   - Sosyal bağlantılar [●●●●●]
   - Stres yönetimi (meditasyon, yoga) [●●●●○]
   - Maruz kalınan ışık (circadian ritim) [●●●●○]

5. **Tıbbi Tedavi Seçenekleri**
   - **HRT** [●●●●●]
     - Depresyon ve anksiyeteyi hafifletebilir
     - Özellikle perimenopauzda etkili
   - **SSRI/SNRI (antidepresanlar)** [●●●●●]
     - Menopoz depresyonunda etkili
     - Yan etkiler (uyku, libido) — doza ve timing bağımlı
   - **Psikolojik tedavi (CBT, IPT)** [●●●●●]
     - Kanıt-tabanlı, uzun vadeli
   - **Kombinasyon tedavi** [●●●●●]
     - HRT + SSRI gibi yaklaşımlar

6. **Ne Zaman Yardım Almak Gerekir?**
   - Belirtiler 2 hafta+ sürer
   - Günlük yaşamı etkiliyor
   - İş, ilişki, sosyal yaşamda zorluk
   - Kendine zarar düşüncesi (acil yardım)
   - Başarısız kendi deneme sonrası

7. **Travma, Daha Derin Sorunlar**
   - Perimenopoz + travma = ağırlaşma riski
   - PTSD, childhood abuse — özel dikkat gerekebilir
   - Komorbid koşullar (anksiyete bozukluğu, OCD)

### Bilimsel Editör Notu

"Ruh hali değişimleri menopozun yaygın ve normatif yönüdür. Ancak depresyon ve anksiyete tedavi edilebilir koşullar olup, yardım almaktan kaçınılmamalıdır. Yaşam alışkanlığı ve profesyonel destek kombinasyonu, çoğu kadında iyileşme sağlar. Kişisel güvenliğin tehdit altında olduğu durumlarda (kendine zarar) acil yardım gereklidir."

### İlgili İçerikler

- Zihin & Denge / Uyku Bozukluğu ve Menopoz
- Hormonal Geçiş / Perimenopoz Nedir?
- Zihin & Denge / Stres Yönetimi
- Zamansız Yaşam / Hareket ve Sağlık
- Bilimsel Pencere / Östrojen Biyolojisi

---

## GÖREV 3: Vajinal Sağlık ve Menopoz

**Dosya Konumu:** `src/pages/beden-yakinlik/vajinal-saglik-menopoz.astro`  
**Kanıt Seviyesi:** A (Jinekoloji)  
**Hedef Sözcük Sayısı:** 1100-1200  
**Okuma Süresi:** 6-7 dakika

### İçerik Yapısı

**H1:** Vajinal Sağlık ve Menopoz — Atrofi, Yakınlık, Bakım Rehberi  
**Özet Kutusu:**  
"Vulvovajinal atrofi, menopozun yaygın ancak açıkça konuşulmayan bir sorunudur. Östrojen azalması vajinal dokuyu ince, kuru ve hassas hale getirir. Yakınlık sırasında ağrı veya rahatsızlıktan enfeksiyon riskine kadar etkiler vardır. Ama tedavi seçenekleri mevcut ve etkilidir."

### Alt Başlıklar & Bölümler

1. **Vulvovajinal Atrofi Nedir?**
   - Tanım: Östrojen azalması ile vajinal doku değişimleri [●●●●●]
   - Prevalans (40-60% postmenopoz kadınlarda) [●●●●●]
   - Neden "atrofi" — doku incelme, elastikiyet kaybı [●●●●●]
   - Ayrıca "genitourinary sendromu" (GUS) olarak adlandırılır

2. **Belirtiler Nelerdir?**
   - Vajinal kuruluk [●●●●●]
   - Yakınlık sırasında ağrı (dyspareuna) [●●●●●]
   - Kaşıntı, yanma hissi [●●●●●]
   - Vajinal dischage değişimi [●●●●●]
   - Üriner belirtiler (sıklık, yanma) [●●●●●]
   - Cinsel ilgide azalma (somatik nedenden dolayı) [●●●●○]
   - Belirtilerin ilişkilere ve yaşam kalitesine etkisi [●●●●○]

3. **Neden Olur? Mekanizma**
   - Östrojen ve vajinal dokunun bağlantısı [●●●●●]
   - Vaskülarizasyon ve elastin kaybı [●●●●●]
   - pH değişimi (more alkaline) [●●●●●]
   - Enfeksiyon riski artışı (normal flora değişim) [●●●●●]

4. **Non-Hormon Tedavi Seçenekleri**
   - **Vajinal nemlendirici** (günlük kullanım) [●●●●●]
     - Hyaluronik asit, glycerin
     - Krem, jel, insert formları
     - Düzenli kullanım faydasını artırır
   - **Vajinal yağlayıcı** (yakınlık öncesi) [●●●●●]
     - Su bazlı, silikon bazlı, yağ bazlı
     - Seçim kişiye göre değişir
   - **Düzenli sexual aktivite** [●●●●○]
     - Kan akışını artırır
     - Doku elastisitesini destekler

5. **Hormon Tedavi Seçenekleri**
   - **Lokal östrojen (topikal)** [●●●●●]
     - Krem (conjugated estrogens)
     - Tablet (vaginal estradiol)
     - Ring (estradiol)
     - Lokal etkili, minimal sistemik emilim
   - **Lokal DHEA (prasterone)** [●●●●●]
     - Seçilmiş olgularda etkili
     - Hem östrojen hem androjen aktivitesi
   - **Sistemik HRT** [●●●●●]
     - Genel tedavi amacı değilse, VVA için tek başına sınırlı
     - Ancak HRT alanlar VVA de iyileşme görebilir
   - **Ospemifene (oral SERM)** [●●●●○]
     - Sistemik SERM, lokal ve sistemik etkileri

6. **Diğer Tedavi Seçenekleri**
   - **Lazer/Radiofrequency** [●●○○○] — son teknoloji, kanıt gelişiyor
   - **Vajinal steroid** [●●●●○] — specific durumlar için

7. **Üriner Belirtiler**
   - UTI risk artışı [●●●●●]
   - Üriner inkontinans (stress, urgency) [●●●●●]
   - Ürolog görmek ne zaman gerekli

8. **Yakınlık Sırasında Ağrı Yönetimi**
   - Duygusal hazırlık (kaygı azaltma)
   - Foreplay, zaman ayırma
   - Yağlayıcı kullanımı önemli
   - Partneri bilgilendirme
   - Alternatif yakınlık formları

### Bilimsel Editör Notu

"Vulvovajinal atrofi tabu bir konu olarak algılanabilir ancak postmenopoz kadınlarının %40+ etkilenmektedir. Tedavi seçenekleri mevcut, etkili ve güvenlidir. Bu rehber, kadınları ayan sözcüklerle bilgilendirmek ve tedavi aranmaktan çekinmemelerini sağlamak amacındadır."

### İlgili İçerikler

- Beden & Yakınlık / Menopozda Cilt Değişimleri
- Beden & Yakınlık / Yakınlık Sırasında Ağrı [yet to be written]
- Hormonal Geçiş / Menopoz Nedir?
- Zihin & Denge / Ruh Hali Değişimleri
- Bilimsel Pencere / Östrojen Biyolojisi

---

## GÖREV 4: D Vitamini Rehberi

**Dosya Konumu:** `src/pages/zamansiz-yasam/d-vitamini-rehberi.astro`  
**Kanıt Seviyesi:** A (Oxford CEBM Level 1)  
**Hedef Sözcük Sayısı:** 1100-1200  
**Okuma Süresi:** 6-7 dakika

### İçerik Yapısı

**H1:** D Vitamini Rehberi — Tarama, Beslenme, Suplement  
**Özet Kutusu:**  
"D vitamini kemik, bağışıklık ve metabolik sağlıkta kritik rol oynar. 40+ kadınlarda yetersizlik yaygındır. Beslenme, güneş maruziyeti ve gerekirse suplement, optimal seviyeleri desteklemede etkindir."

### Alt Başlıklar & Bölümler

1. **D Vitamini Nedir ve Neden Önemlidir?**
   - Hormon olarak işlevi [●●●●●]
   - Kemik metabolizmi (kalsiyum emilimi) [●●●●●]
   - Bağışıklık sistemi [●●●●●]
   - Inflamasyon düzenleme [●●●●●]
   - Beyin sağlığı, ruh hali [●●●●○]
   - Metabolik sağlık, insülin direnci [●●●●○]

2. **Seviyeleri Tanımlama**
   - Ölçü birimi (ng/mL, nmol/L)
   - Optimal range: 30-50 ng/mL [●●●●●]
   - Yetersizlik (<20 ng/mL) [●●●●●]
   - Eksiklik (<12 ng/mL) [●●●●●]
   - Toksiklik riski (>100 ng/mL) [●●●●○]

3. **Tarama: Ne Zaman Yapılmalı?**
   - Risk faktörleri (yer coğrafyası, cilt rengi, yaşam tarzı) [●●●●●]
   - 40+ tüm kadınlara tavsiye edilir [●●●●●]
   - Periyodsiklik (1-3 yıl) [●●●●○]
   - Test seçenekleri (25-hydroxyvitamin D — standart) [●●●●●]

4. **D Vitamini Kaynakları: Beslenme**
   - **Doğal gıda kaynakları:** Çok sınırlı [●●●●●]
     - Yağlı balık (somon, ton, makrel): 400-1000 IU/100g
     - Yumurta sarısı: 20-40 IU/yumurta
     - Mantar (ışık maruz, özel çeşitler): 100-2000 IU
     - Kuşu eti, karaciğer: minimal
   
   - **Fortifiye gıdalar** [●●●●●]
     - Süt (genellikle 100-400 IU/glass)
     - Yoğurt, peynir: değişken
     - Mısır gevreği, ekmek: üreticiye bağlı
     - Dikkat: etiket oku

5. **D Vitamini Kaynağı: Güneş Maruziyeti**
   - Cildin 10000-25000 IU/20-30 dakika oluştur [●●●●●]
   - Varyasyon faktörleri (enlem, mevsim, saat, cilt rengi) [●●●●●]
   - Optimal güneş (kış hattı vs. yaz) [●●●●●]
   - Melanom riski vs. D vitamini avantajı — denge [●●●●●]
   - SPF güneş kremi D üretimini %95 azaltır [●●●●●]

6. **D Vitamini Supplemantasyon**
   - **Doza rehberleri** [●●●●●]
     - Yeterlilik için: 600-800 IU/gün (RDA, 40-70 yaş)
     - Optimal sağlık için: 1000-2000 IU/gün (tartışmalı ama yaygın)
     - Tedavi (yetersizlik durumunda): 2000-4000 IU/gün + test
     - Çocuklar daha yüksek doz ihtiyacı olabilir
   
   - **Form seçenekleri**
     - D2 (ergocalciferol) vs. D3 (cholecalciferol) — D3 tercih [●●●●●]
     - Kapsül, tablet, sıvı, sprey
     - Yağ bazlı form (emilim için daha iyi)
   
   - **Güvenlik ve Toksiklik** [●●●●●]
     - 4000 IU/gün düşük risk kabul edilir
     - 10,000 IU/gün uzun süreli — monitör gerek
     - Toksiklik nadirdir (>40,000 IU/gün sürekli)

7. **D Vitamini + Kalsiyum + K2 Kombinasyonu**
   - Kalsiyum emilimi D vitamini gerektir [●●●●●]
   - K2 (menaquinone) kemik yönlendirmede yardımcı [●●●●○]
   - Kombinasyon takviyesi düşün [●●●●○]
   - Yeterli protein de önemli [●●●●●]

8. **Özel Durumlar**
   - Malabsorpsiyon (Crohn, celiac) — daha yüksek doz [●●●●●]
   - Böbrek hastalığı — doktor danışması [●●●●●]
   - Kalp problemleri, hiperkalsemi — uyarı [●●●●●]

### Bilimsel Editör Notu

"D vitamini güneş vitamini değil hormon olarak davranır ve kemik, bağışıklık ve metabolik sağlıkta kritik rol oynar. Pek çok kadın yetersiz düzeyde yaşar. Basit bir test, takviye kararını bilgilendirebilir. Bununla birlikte, beslenme ve güneş maruziyeti öncelik, takviye tamamlayıcıdır."

### İlgili İçerikler

- Zamansız Yaşam / 40 Yaşından Sonra Kemik Sağlığı
- Zamansız Yaşam / Beslenme ve Yaşlanma [yet to be written]
- Hormonal Geçiş / Menopoz Nedir?
- Zihin & Denge / Hareket ve Sağlık
- Bilimsel Pencere / Mitokondrial Sağlık [yet to be written]

---

## GÖREV 5: Östrojen Biyolojisi ve Sağlık

**Dosya Konumu:** `src/pages/bilimsel-pencere/estrogen-biyolojisi-saglik.astro`  
**Kanıt Seviyesi:** A (Endokrinoloji, Genomik)  
**Hedef Sözcük Sayısı:** 1100-1250  
**Okuma Süresi:** 6-7 dakika

### İçerik Yapısı

**H1:** Östrojen Biyolojisi ve Sağlık — Hormonun Vücutta Rolü  
**Özet Kutusu:**  
"Östrojen basit bir hormon değil; vücudun pek çok sistemine etki eden güçlü bir sinyal molekülüdür. Kemik, kalp, beyin, cilt, metabolik sistem — hepsi östrojene bağlıdır. Yaşlanmada östrojen azalışının geniş çaplı etkileri vardır. Bu rehber mekanizmayı açıklar."

### Alt Başlıklar & Bölümler

1. **Östrojen Nedir?**
   - Steroid hormon tanımı [●●●●●]
   - Üç ana form: estradiol (E2), estriol (E3), estrone (E1) [●●●●●]
   - Yumurtalıklar, yağ dokusu, adrenal gland üretim [●●●●●]
   - Üretime erkeklerde de (düşük düzey) [●●●●●]
   - Hücresel mekanizma: reseptörler (ER-α, ER-β, GPER) [●●●●●]

2. **Kemik Sağlığında Östrojen**
   - Osteoblast ve osteoclast düzenlemesi [●●●●●]
   - Östrojen azalması = kemik kaybı artması [●●●●●]
   - Osteoporoz riski → kütük fraktur → mobilite kaybı [●●●●●]
   - HRT ile kemik sağlığı koruması [●●●●●]

3. **Kardiyovasküler Sağlık ve Östrojen**
   - Endotel fonksiyonu [●●●●●]
   - Lipid profili (LDL, HDL) [●●●●●]
   - Kan basıncı ve vazodilatasyon [●●●●●]
   - Postmenopoz döneminde kardiyovasküler risk artışı [●●●●●]
   - HRT ve kardiyovaskülär riski (tartışmalı) [●●●●○]

4. **Beyin ve Kognitif Fonksiyon**
   - Serotonin ve dopamin yolları [●●●●●]
   - Nöroproteksiyon mekanizmaları [●●●●●]
   - Ruh hali düzenleme [●●●●●]
   - Bellek ve öğrenme [●●●●○]
   - Alzheimer riski (HRT koruyucu mu?) [●●●●○]

5. **Cilt Sağlığı ve Östrojen**
   - Kolajen ve elastin sentezi [●●●●●]
   - Hyaluronik asit üretimi [●●●●●]
   - Microvascular perfusion [●●●●●]
   - Menopozda ciltte değişim [●●●●●]

6. **Metabolik ve Enerji Yönetimi**
   - Glukoz homeostazı [●●●●●]
   - Leptin, adiponectin [●●●●○]
   - Metabolic syndrome riski (postmenopoz) [●●●●●]
   - Visceral fat deposition [●●●●●]

7. **Bağışıklık Sistemi**
   - Th1/Th2 dengelemesi [●●●●●]
   - Östrojen ve otoimmun hastalıklar [●●●●●]
   - Enfeksiyon savunması [●●●●○]
   - Inflamasyonun düzenlenmesi [●●●●●]

8. **Menopozda Östrojen Azalışının Geniş Çaplı Etkileri**
   - **Erken menopoz (40 yaş öncesi)** — daha ağır etkiler [●●●●●]
   - **Cerrahi menopoz (ovaryektomi)** — ani, şiddetli [●●●●●]
   - **Doğal menopoz** — yavaş adaptasyon [●●●●●]
   - Vücut bu değişimlere adapte olabiliyor mu? [●●●●○]

9. **HRT: Östrojen Yerine Koymanın Mekanizmaları**
   - Doza ve forma bağlı etkiler [●●●●●]
   - Sistemik (oral, transdermal, implant) farklılıkları [●●●●●]
   - Geziditif (progesterone) kombinasyonu gerekliliği [●●●●●]
   - Zaman penceresi hipotezi (menopoz başında başlayan etkinlik) [●●●●○]
   - Güvenlik profili (kanser riski tartışmaları) [●●●●●]

10. **Alternatif Tedaviler: Mekanizmalar**
    - Fitoöstrojenler (soya, kırmızı üzüm) [●●●○○] — zayıf kanıt
    - Isoflavonlar, lignans [●●●○○]
    - Sağlık yönlü çekişmeler vs. mekanizmalı gerçek etkiler [●●●●○]

### Bilimsel Editör Notu

"Östrojen, yaşlı kadın sağlığının merkezi bir oyuncusudur. Azalışının etkisi sadece sıcak basması değil; kemik, kalp, beyin, metabolik sistem genelinde uzun vadeli değişimlerdir. Menopoz, bu değişimlerin yönetilmesi gereken bir dönemdir. Bireysel seçenekler (HRT, yaşam alışkanlığı, alternatifler) kişiye özel tartışılmalıdır."

### İlgili İçerikler

- Bilimsel Pencere / NAD+ ve Hücresel Yaşlanma
- Hormonal Geçiş / Menopoz Nedir?
- Zamansız Yaşam / Kemik Sağlığı ve Koruma
- Zihin & Denge / Ruh Hali Değişimleri ve Menopoz
- Beden & Yakınlık / Menopozda Cilt Değişimleri

---

## FİNAL KONTROL (CODEX İÇİN)

Her makale tamamlandıktan sonra:

✅ **SiteLayout + SiteNavbar + SiteFooter** import et  
✅ **Başlık, kategori, okuma süresi** belirtildi  
✅ **Özet kutusu** krem renkli, sınırlandırılmış (70-80 sözcük)  
✅ **Gövde** 1000-1250 sözcük, 5-10 alt başlık  
✅ **Kanıt seviyeleri** (● işaretleri) bölümlerde belirtildi  
✅ **Bilimsel Editör Notu** ayrı çerçeve, Doç. Dr. Senai Aksoy adına  
✅ **Tıbbi sorumluluk reddi** altbilgi  
✅ **İlgili içerikler** 5 bağlantı, iç sayfalar (gerçek veya placeholder)  
✅ **Dil** — sade Türkçe, hiperbol yok  
✅ **Renk/Stil** — Tailwind core utilities, renkler CLAUDE.md paletinden  

---

**BAŞLANIZ. Tüm 5 makale için aynı kalite standardı, editöryal ton ve yapı kullanınız.**

**Codex, bu 5 makalenin yazımını tamamla ve bittiğinde bildir.**
