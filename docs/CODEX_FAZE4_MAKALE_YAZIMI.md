# CODEX FAZE 4 — 5 YENİ MAKALE YAZIMI GÖREV PAKETİ

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
   - Yazar adı: `[Yazar Adı]` (placeholder)
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

### Kanıt Seviyeleri

Referans: `/docs/KANIT_DUZEYI.md`

- **A (Güçlü):** ●●●●● — RCT, meta-analiz, kapsamlı araştırma
- **B (Orta):** ●●●●○ — Gözlemsel çalışmalar, kontrollü deneyler
- **C (Orta-Düşük):** ●●●○○ — Bazı tutarlı kanıt, sınırlı veri
- **D (Zayıf):** ●●○○○ — Ön-klinik, hayvan modelleri, teorik
- **E (Yetersiz):** ●○○○○ — Anekdot, şu anki kanıt yetersiz

### Regulatif & Editöryal Standartlar

- **Pozisyonlandırma:** Genel neşriyat (klinik/muayenehane değil)
- **Tedavi promotion yok:** "Başvur", "Tedaviye başla", "En iyi hekim" vs. kaçın
- **CTA Dili:** Sadece "Devamını Oku", "Rehberi Keşfet", "Daha Fazla Bilgi"
- **Yasal:** KVKK uyumlu, neutral tıbbi referans

---

## GÖREV 1: Hareket ve Sağlık — Menopoz Döneminde Egzersiz Rehberi

**Dosya Konumu:** `src/pages/zamansiz-yasam/hareket-saglik-menopoz.astro`  
**Kanıt Seviyesi:** A (Egzersiz Fizyolojisi)  
**Hedef Sözcük Sayısı:** 1000-1100  
**Okuma Süresi:** 5-6 dakika

### İçerik Yapısı

**H1:** Hareket ve Sağlık — Menopozda Egzersiz Rehberi  
**Özet Kutusu:**  
"Düzenli hareket menopoz belirtilerini hafifletir, kemik sağlığını korur ve kardiyovasküler sağlığı destekler. Aerobik, dirençli ve esnek antrenmanlar kombinasyonu optimal sonuçlar sağlar. Yaş ve fitness seviyesi ne olursa olsun başlamak mümkündür."

### Alt Başlıklar & Bölümler

1. **Hareketin Menopoza Etkileri**
   - Vasomotor belirtileri hafifletme (sıcak basması, terleme) [●●●●●]
   - Ruh hali ve uyku kalitesi iyileşmesi [●●●●●]
   - Kemik sağlığı koruması [●●●●●]
   - Kardiyovasküler riski azaltma [●●●●●]
   - Metabolik sağlık ve kilo yönetimi [●●●●●]

2. **Hareket Türleri ve Faydalı**
   - **Aerobik Egzersiz** (yürüyüş, koşu, bisiklet, yüzme) [●●●●●]
     - Sıklık: Haftada 150+ dakika orta yoğun
     - Faydalar: Kalp sağlığı, enerji, ruh hali
   - **Dirençli Antrenman** (ağırlık, elastik bant, vücut ağırlığı) [●●●●●]
     - Sıklık: Haftada 2-3 gün, tüm kas grupları
     - Faydalar: Kemik yoğunluğu, kas kütlesi, metabolizm
   - **Esnek Antrenman** (yoga, pilates, stretching) [●●●●●]
     - Sıklık: Haftada 2-3 gün, 10-15 dakika
     - Faydalar: Mobilite, dengeyi, yaralanma prevansiyonu
   - **Denge Antrenmanları** (tai chi, one-leg stance) [●●●●●]
     - Sıklık: Haftada 2-3 gün
     - Faydalar: Düşüş riski azalması, propriosepsiyon

3. **Başlama Rehberi (Fitness Seviyesi)**
   - **Hareketsiz yaşayan kadınlar:**
     - Haftada 3 gün, 20-30 dakika yürüyüş
     - Yavaş, düzenli başlama (haftalık 10% artış) [●●●●●]
   - **Orta aktivite düzeyinde olanlar:**
     - Haftada 3-4 gün hareket, aerobik + dirençli
   - **Aktif olanlar:**
     - Kombinasyon programı, daha yoğun antrenman

4. **Yaş-Spesifik Hususlar**
   - 40-50 yaş: Kemik sağlığına odaklanma [●●●●●]
   - 50+ yaş: Dengeyi ve fonksiyonelliğe vurgu [●●●●●]
   - Mevcut sağlık durumu (artrit, kalp, diyabet) [●●●●●]

5. **Güvenlik ve Yaralanma Prevansiyonu**
   - Isınma ve soğuma (5-10 dakika) [●●●●●]
   - Doğru form (antrenör rehberliği) [●●●●●]
   - Aşamalı artış (pürüzlü geçişler) [●●●●●]
   - Ne zaman antrenmanı durduracağınız (ağrı, sıkıntı) [●●●●●]

6. **Motivasyon ve Tutarlılık**
   - Sosyal desteği kullanma (grup, arkadaş) [●●●●○]
   - Hedef belirleme (net, ölçülebilir) [●●●●●]
   - Çeşitliliği koruması (sıkıntı olmamas) [●●●●○]
   - Zaman yönetimi ve rutinleştirme [●●●●○]

7. **Profesyonel Rehberlik Ne Zaman Gerekli?**
   - İlk kez başlarken fizyoterapist danışması [●●●●○]
   - Yaralanma veya kronik hastalık varsa [●●●●●]
   - Belirli amaçlar için antrenman tasarımı [●●●●○]

### Bilimsel Editör Notu

"Hareket, menopozun belirtilerini yönetmenin ve uzun vadeli sağlığı korumunun en kanıt-tabanlı araçlarından biridir. Formun doğru, başlangıç hızının uygun ve tutarlılığın sağlandığı bir program, çoğu kadında etkinliğini kanıtlamıştır."

### İlgili İçerikler

- Zamansız Yaşam / Beslenme ve Yaşlanma
- Zihin & Denge / Uyku Bozukluğu ve Menopoz
- Zihin & Denge / Stres Yönetimi
- Zamansız Yaşam / Kemik Sağlığı
- Beden & Yakınlık / Vajinal Sağlık

---

## GÖREV 2: Beslenme ve Yaşlanma — 40+ Kadınlar için Beslenme Rehberi

**Dosya Konumu:** `src/pages/zamansiz-yasam/beslenme-yaslanma.astro`  
**Kanıt Seviyesi:** A (Nutrisyon Bilimi)  
**Hedef Sözcük Sayısı:** 1050-1150  
**Okuma Süresi:** 6 dakika

### İçerik Yapısı

**H1:** Beslenme ve Yaşlanma — 40+ Kadınlar için Beslenme Rehberi  
**Özet Kutusu:**  
"Menopoz döneminde metabolik değişiklikler, beslenme ihtiyaçlarını değiştirir. Protein, B vitaminleri, omega-3 yağlar ve antioksidanlar, yaşlanma sürecini desteklemede kritik rol oynar. Bilgili seçimler, sağlık yıllarını uzatmaya yardımcı olur."

### Alt Başlıklar & Bölümler

1. **40+ Yaşta Beslenme Neden Değişir?**
   - Metabolik hız azalması [●●●●●]
   - Sindirim ve emilim değişiklikleri [●●●●○]
   - Hormon değişime bağlı ihtiyaçlar [●●●●●]
   - Aktivite seviyesi düşmesi [●●●●●]

2. **Makronutrientler: Protein, Yağ, Karbohidrat**
   - **Protein** [●●●●●]
     - İhtiyaç: 1.0-1.2 g/kg vücut ağırlığı
     - Neden: Kas kaybı, doku onarımı, metabolik sağlık
     - Kaynaklar: Et, balık, yumurta, legüm, süt
   - **Yağlar** [●●●●●]
     - Saturated vs. unsaturated: Denge önemli
     - Omega-3 (balık, fındık, tohum): Inflamasyonu azaltma
   - **Karbohidratlar** [●●●●●]
     - Basit vs. kompleks: Glisemik kontrol
     - Lif: Sindirim sağlığı, doygunluk

3. **Kritik Mikronutrientler**
   - **B Vitaminleri** [●●●●●]
     - B6, B12, folat: Enerji, beyin sağlığı
     - Kaynaklar: Tahıl, ürün, et, yeşil yapraklılar
   - **Demir** [●●●●●]
     - Postmenopoza kadar ihtiyaç sınırlandırılır
     - Kaynaklar: Kırmızı et, tavuk, mercimek
   - **Çinko** [●●●●●]
     - Bağışıklık, cilt sağlığı
   - **Magnesium** [●●●●●]
     - Uyku, kas, kemik sağlığı
     - Kaynaklar: Yeşil yapraklılar, kuruyemiş, tahıl

4. **Antioksidanlar ve Fitonutrientler**
   - Renklü sebzeler (sarı, kırmızı, yeşil, mor) [●●●●●]
   - Meyve (berilerin, portakal) [●●●●●]
   - Çay (yeşil, siyah) [●●●●●]
   - Baharat (zerdeçal, karabiber) [●●●●○]

5. **Beslenme Alışkanlıkları ve Öğün Modeli**
   - **Düzenli öğünler** (her 3-4 saatte) [●●●●●]
   - **Sabit uyku-uyanış ile beslenme senkronizasyonu** [●●●●○]
   - **Çok su tüketimi** (minimum 2-3 litre/gün) [●●●●●]
   - **Aşırı yiyecek alımını azaltmak** (porsyon kontrol) [●●●●●]
   - **Ultra-işlenmiş gıdaları sınırlandırma** [●●●●●]

6. **Beslenme Şekilleri: Hangisi Uygun?**
   - **Akdeniz Diyeti** [●●●●●] — En çok kanıt
   - **DASH Diyeti** [●●●●●] — Hipertansiyon ve kalp sağlığı
   - **Vejetaryen/Vegan** [●●●●○] — Planlama gerekli
   - **Düşük Karbohidrat** [●●●●○] — Kişiye göre varyasyon
   - **Intermittent Fasting** [●●●○○] — Sınırlı menopoz-spesifik kanıt

7. **Yiyecekler: Tercih Et, Sınırla**
   - **Tercih et:**
     - Tam tahıllar, balık, tavuk, yumurta, legüm, yeşil yapraklılar, meyveler
   - **Sınırla:**
     - İşlenmiş et, şeker içi içecekler, ultra-işlenmiş gıdalar, aşırı tuz
   - **Uyarı:**
     - Aşırı kafein (uyku etkisi), aşırı alkol

8. **Ek Takviyeler: Gerekli mi?**
   - D vitamini [●●●●●] — Seviyelere göre
   - Kalsiyum [●●●●●] — Beslenme + suplement
   - Omega-3 [●●●●○] — Balık yeterli mi?
   - B12 [●●●●●] — Yaş 50+ tüm kadınlara
   - Multivitamin [●●●●○] — Genel dengeleme için

### Bilimsel Editör Notu

"Beslenme, yaşlanmanın hızı ve kalitesi üzerinde güçlü kontrol sağlar. Menopoz döneminde bilgili, planlı seçimler, belirtileri yönetmeye ve uzun vadeli sağlık risklerini azaltmaya katkı sağlar. Kişiselleştirilmiş rehberlik için diyetisyen danışması değerlidir."

### İlgili İçerikler

- Zamansız Yaşam / D Vitamini Rehberi
- Zamansız Yaşam / Hareket ve Sağlık
- Zamansız Yaşam / Kemik Sağlığı
- Zihin & Denge / Uyku Bozukluğu
- Bilimsel Pencere / Mitokondrial Sağlık

---

## GÖREV 3: Bellek ve Odaklanma — Menopozda Kognitif Değişimler

**Dosya Konumu:** `src/pages/zihin-denge/bellek-odaklanma-menopoz.astro`  
**Kanıt Seviyesi:** A (Nöropsikoloji)  
**Hedef Sözcük Sayısı:** 1000-1100  
**Okuma Süresi:** 5-6 dakika

### İçerik Yapısı

**H1:** Bellek ve Odaklanma — Menopozda Kognitif Değişimler  
**Özet Kutusu:**  
"Menopozda bellek kayması ve odaklanma güçlüğü ('brain fog') yaygındır. Hormon değişiklikleri, uyku bozukluğu ve stres birleşti bu deneyimde rol oynar. Uygulanabilir stratejiler, kognitif işlevi desteklemede etkilidir."

### Alt Başlıklar & Bölümler

1. **'Brain Fog' Nedir?**
   - Bellek kayması tanımı [●●●●●]
   - Odaklanma güçlüğü [●●●●●]
   - Kelime bulma zorlama ('tip of the tongue') [●●●●○]
   - Kavrama hızı yavaşlaması [●●●●○]
   - Yaygınlığı (40-60% menopoz döneminde) [●●●●●]

2. **Hormonun Beyin Sağlığına Rolü**
   - Estrojen ve beyin plastisitesi [●●●●●]
   - Sinaptik aktivite ve bellek konsolidasyonu [●●●●●]
   - Nörotransmitterler (serotonin, dopamin, asetilkolin) [●●●●●]
   - İnflamasyon ve glial hücreler [●●●●●]

3. **Menopozda Kognitif Değişimlerin Nedenleri**
   - **Birincil: Hormon dalgalanması** [●●●●●]
   - **İkincil faktörler:**
     - Uyku bozukluğu [●●●●●]
     - Stres ve kaygı [●●●●●]
     - Ruh hali değişimleri [●●●●●]
     - Vasomotor belirtiler (dikkat dağılması) [●●●●●]
     - Yaşam stresi (kariyer, aile) [●●●●○]

4. **Bellek Türleri ve Menopoz**
   - **Kısa dönem hafıza:** Genellikle etkilenmez [●●●●○]
   - **Çalışan hafıza:** Orta düzey etkileme [●●●●●]
   - **Uzun dönem hafıza:** Kodlamada zorluk [●●●●●]
   - **Prosedürel hafıza:** Genellikle korunur [●●●●○]

5. **Kognitif Yönetim Stratejileri**
   - **Uyku optimizasyonu** [●●●●●] — Bellekte kritik
   - **Stres yönetimi** (meditasyon, yoga) [●●●●●]
   - **Fiziksel egzersiz** [●●●●●] — BDNF üretimi, nörojenez
   - **Bilişsel antrenman** (bulmaca, okuma, dil öğrenme) [●●●●●]
   - **Sosyal bağlantılar** [●●●●●]
   - **Beslenme** (omega-3, antioksidanlar) [●●●●●]
   - **Kafein ve uyuşturucu yönetimi** [●●●●○]

6. **Organizasyonel Araçlar**
   - **Yazılı not alma** (kağıt, dijital) [●●●●●]
   - **Takvim ve hatırlatıcılar** [●●●●●]
   - **Rutin ve ritüeller** [●●●●●]
   - **Listeleme ve segmentasyon** [●●●●●]

7. **Tıbbi Seçenekler**
   - **HRT** [●●●●●]
     - Bazı kadında bellek iyileşmesi
     - Zamanlamaya duyarlı (perimenopozda daha etkili)
   - **Nörotrofik destekleme** (BDNF, NGF) [●●●●○]
   - **Antidepresanlar** [●●●●○] — ruh haliyse

8. **Uzun Vadeli Perspektif: Alzheimer Riski**
   - HRT ve demans riski (tartışmalı) [●●●●○]
   - Kardiyovasküler sağlık ve beyin sağlığı [●●●●●]
   - Kognitif rezerv oluşturma (yaşlılıkta koruma) [●●●●●]
   - Mitokondrial sağlık ve beyin yaşlanması [●●●●○]

### Bilimsel Editör Notu

"'Brain fog' menopozun yaygın ama sık göz ardı edilen bir boyutudur. Mekanizmi anlamak ve tedavi seçeneklerini bilmek, kadınların bu geçiş döneminde kendilerine güven duymasını sağlar. Çoğu durumda, kognitif işlev zamanla iyileşir; stratejiler bu süreçte yardımcıdır."

### İlgili İçerikler

- Zihin & Denge / Uyku Bozukluğu ve Menopoz
- Zihin & Denge / Stres Yönetimi
- Zamansız Yaşam / Hareket ve Sağlık
- Zamansız Yaşam / Beslenme ve Yaşlanma
- Bilimsel Pencere / NAD+ ve Hücresel Yaşlanma

---

## GÖREV 4: Stres Yönetimi — Menopozda Stres ve Adaptasyon

**Dosya Konumu:** `src/pages/zihin-denge/stres-yonetimi-menopoz.astro`  
**Kanıt Seviyesi:** A (Psikoloji, Stres Fizyolojisi)  
**Hedef Sözcük Sayısı:** 1050-1150  
**Okuma Süresi:** 6 dakika

### İçerik Yapısı

**H1:** Stres Yönetimi — Menopozda Stres ve Adaptasyon  
**Özet Kutusu:**  
"Menopoz, yaşamın stresli bir aşamasıdır: kardiyer, aile, sağlık endişeleri birleşir. Hormon değişiklikleri stres tepkisini de değiştirir. Kanıt-tabanlı stres yönetimi teknikleri, bu dönemde dengeyi yeniden kurmaya yardımcı olur."

### Alt Başlıklar & Bölümler

1. **Menopoz Döneminde Stres Neden Farklı?**
   - Cortisol ve hormonal etkileşimler [●●●●●]
   - Uyku bozukluğu + stres döngüsü [●●●●●]
   - Ruh hali değişimleri stres toleransını etkiler [●●●●●]
   - Yaşamsal faktörler (kariyer, aile, sağlık) [●●●●●]

2. **Stresin Fizyolojik Etkileri**
   - **Akut stres** vs. **kronik stres** [●●●●●]
   - Cortisol ve adrenalin yükselmesi [●●●●●]
   - Inflamasyonun artması [●●●●●]
   - Bağışıklık sistemi etkilenmesi [●●●●●]
   - Kalp ve metabolik sağlık riskleri [●●●●●]

3. **Stres Belirtileri Tanıma**
   - **Bedensel:** Baş ağrısı, kas gerginliği, mide sorunları [●●●●●]
   - **Duygusal:** Kaygı, sinirlilik, bezginlik [●●●●●]
   - **Bilişsel:** Odaklanma güçlüğü, bellek kayması [●●●●●]
   - **Davranışsal:** Uyku değişiklikleri, yeme alışkanlığı [●●●●●]

4. **Meditasyon ve Mindfulness**
   - Tanım ve mekanizmaları [●●●●●]
   - Kısa oturumlar (5-10 dakika) başlamak [●●●●●]
   - Uygulamalar (oturularak, kılavuzlu ses) [●●●●●]
   - Cortisol azaltma ve sinir sistemi düzenleme [●●●●●]

5. **Yoga ve Somato-Motor Uygulamalar**
   - Vinyasa (hareket), Hatha (kesin) vs. Yin (pasif) [●●●●○]
   - Faydalar: Esneklik, denge, stres azaltma [●●●●●]
   - Solunum teknikleri (pranayama) [●●●●●]
   - Menopoza uygun modifikasyonlar [●●●●○]

6. **Bilişsel Davranış Terapisi (CBT) İlkeleri**
   - Düşünce-duygu-davranış ilişkisi [●●●●●]
   - Yeniden çerçeveleme teknikleri [●●●●●]
   - Beyin kapısı (kalmak vs. kaçma) [●●●●●]
   - Kabullenme terapisi (ACT) ilkeleri [●●●●●]

7. **Günlük Yaşamda Stres Yönetimi**
   - **Zaman yönetimi ve öncelikler** [●●●●●]
   - **Sınırlar koyma** (iş, ilişki, özür dile) [●●●●●]
   - **Sosyal destek ağını kuvvetlendirme** [●●●●●]
   - **Hobi ve keyif aktiviteleri** [●●●●●]
   - **Uyku ve hareket** (temel altyapı) [●●●●●]

8. **Profesyonel Yardım Ne Zaman?**
   - Depresyon veya anksiyete tanısı varsa [●●●●●]
   - Stres yönetimi başarısızsa [●●●●●]
   - Terapist veya danışman türleri [●●●●●]
   - Grup desteği ve menopoz toplulukları [●●●●○]

### Bilimsel Editör Notu

"Stres yönetimi menopozda sadece 'iyi hissetmek' için değil, fiziksel ve duygusal sağlığı korumak için medikasyonlar kadar önemlidir. Uygulanabilir, kanıt-tabanlı teknikler, bu dönemde dirençliliği inşa etmeye yardımcı olur."

### İlgili İçerikler

- Zihin & Denge / Ruh Hali Değişimleri ve Menopoz
- Zihin & Denge / Uyku Bozukluğu ve Menopoz
- Zamansız Yaşam / Hareket ve Sağlık
- Zamansız Yaşam / Beslenme ve Yaşlanma
- Beden & Yakınlık / Yakınlık ve Stres

---

## GÖREV 5: Yakınlık Sırasında Ağrı — Menopozda Dispareuniya

**Dosya Konumu:** `src/pages/beden-yakinlik/yakinlik-agrisi-menopoz.astro`  
**Kanıt Seviyesi:** A (Jinekoloji)  
**Hedef Sözcük Sayısı:** 1050-1150  
**Okuma Süresi:** 6-7 dakika

### İçerik Yapısı

**H1:** Yakınlık Sırasında Ağrı — Menopozda Dispareuniya Rehberi  
**Özet Kutusu:**  
"Menopozda yakınlık sırasında ağrı veya rahatsızlık yaygındır ve çoğunlukla tedavi edilebilir. Vajinal kuruluk, doku esnekliğinde kayıp ve psikolojik faktörler birleşir. Bilgilendirme ve tedavi seçenekleri, yakınlık deneyimini yeniden mümkün kılar."

### Alt Başlıklar & Bölümler

1. **Dispareuniya Tanımı ve Yaygınlığı**
   - Tanım: Yakınlık sırasında ağrı veya rahatsızlık [●●●●●]
   - Yaygınlık: Postmenopoz kadınlarının 20-40% etkilenir [●●●●●]
   - Ayrımı: Yüzeysel (giriş) vs. derinde (iç) ağrı [●●●●●]
   - Psikolojik etkisi: Kaygı, depresyon, partner kaygısı [●●●●○]

2. **Fizyolojik Nedenler**
   - **Vajinal kuruluk** (vulvovajinal atrofi) [●●●●●]
     - Estrojen azalması → doku incelme, kolajen kaybı
     - Yağlayıcı üretimi azalması
   - **Doku elastisitesi kaybı** [●●●●●]
   - **pH değişimi** (mehr alkaline) [●●●●●]
   - **Diğer tıbbi durumlar** (endometriosis, fibroidi, enfeksiyon) [●●●●●]

3. **Psikolojik Faktörler**
   - **Özgüven ve beden imajı** [●●●●○]
   - **Kaygı ve performans baskısı** [●●●●●]
   - **Marital veya partner dinamikleri** [●●●●○]
   - **Geçmiş travma veya negatif deneyim** [●●●●○]
   - **Stres ve zihinsel yük** [●●●●●]

4. **Non-Medikal Tedavi Seçenekleri**
   - **Komunike ve educate** [●●●●●]
     - Partner ile açık konuşma
     - Saatlı baskısının yoğunluğunu azaltma
   - **Yağlayıcılar** (su bazlı, silikon, yağ) [●●●●●]
     - Yakınlık öncesi veya düzenli kullanım
   - **Nemlendirici krem** [●●●●●]
   - **Düzenli yakınlık** [●●●●●]
     - Kan akışı ve doku iyileşmesi
   - **Foreplay ve zaman** [●●●●●]
     - Doğal yağlayıcı üretimi
   - **Mindful yaklaşım** [●●●●○]
     - Beden farkındalığı, rahatsızlık normalleştirme

5. **Tıbbi Tedavi Seçenekleri**
   - **Lokal hormon tedavisi** [●●●●●]
     - Vajinal estradiol (tablet, ring, krem)
     - Lokal DHEA (prasterone)
     - Sistemik etkiler minimal
   - **Sistemik HRT** [●●●●●]
     - Dispareuniya iyileşebilir (genel tedavi amacı değilse sınırlı)
   - **Non-hormon lokal tedaviler** [●●●●○]
     - Hyaluronik asit, gliserin
   - **Ospemifene (oral SERM)** [●●●●○]

6. **Partner Katılımı**
   - Partner eğitimi (yakınlık anatomisi, menopoz etkileri) [●●●●●]
   - Tedavi planına katılma [●●●●●]
   - Alternatif yakınlık formları [●●●●●]
   - Duygusal desteği [●●●●●]

7. **Seks Terapist veya Jinekoloji Danışması**
   - Ne zaman profesyonel yardım aranmalı [●●●●●]
   - Seks terapist (psikolojik) vs. Jinekoloji (tıbbi) [●●●●●]

8. **Uzun Vadeli Perspektif**
   - Ağrı: Tedavi edilebilir, normal değil [●●●●●]
   - Yakınlık: Yaşlılıkta desteklenebilir kalabilir [●●●●●]
   - Kaisal bağlantılar: Yaşlılığa hazırlık [●●●●●]

### Bilimsel Editör Notu

"Dispareuniya menopozun tabu konularından biridir ancak yaygındır ve tedavi edilebilir. Açık iletişim, basit müdahaleler ve gerekirse tıbbi tedavi, kadınların yakınlık deneyimini yeniden mümkün kılar. Bu makale, konuşmasını ve çözüm aranmasını normalleştirmeyi amaçlar."

### İlgili İçerikler

- Beden & Yakınlık / Vajinal Sağlık ve Menopoz
- Zihin & Denge / Stres Yönetimi
- Zihin & Denge / Ruh Hali Değişimleri
- Hormonal Geçiş / Menopoz Nedir?
- Beden & Yakınlık / Cilt Değişimleri

---

## FİNAL KONTROL (CODEX İÇİN)

Her makale tamamlandıktan sonra:

✅ **SiteLayout + SiteNavbar + SiteFooter** import et  
✅ **Başlık, kategori, okuma süresi** belirtildi  
✅ **Özet kutusu** krem renkli, sınırlandırılmış (70-80 sözcük)  
✅ **Gövde** 1000-1200 sözcük, 5-8 alt başlık  
✅ **Kanıt seviyeleri** (● işaretleri) bölümlerde belirtildi  
✅ **Bilimsel Editör Notu** ayrı çerçeve, Doç. Dr. Senai Aksoy adına  
✅ **Tıbbi sorumluluk reddi** altbilgi  
✅ **İlgili içerikler** 5 bağlantı, iç sayfalar (gerçek veya placeholder)  
✅ **Dil** — sade Türkçe, hiperbol yok  
✅ **Renk/Stil** — Tailwind core utilities, renkler CLAUDE.md paletinden  

---

**BAŞLANIZ. Tüm 5 makale için aynı kalite standardı, editöryal ton ve yapı kullanınız.**

**Codex, bu 5 makalenin yazımını tamamla ve bittiğinde bildir.**
