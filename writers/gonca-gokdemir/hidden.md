# Prof. Dr. Gonca Gökdemir — hidden.md

> Yayınlanmaz: iç notlar, Çift Rol Uyarısı, hassas sınırlar. v0.1 — 2026-05-02.

---

<a id="gizli-gozlemler"></a>

## §5b · Gizli Gözlemler (yayınlanmaz)

> v0.1'de minimal. Aşağıdaki gözlemler **gövdeye girmez**.

### Kozmetik marka danışmanlığı geçmişi — KRİTİK SINIR

Gonca Gökdemir'in kişisel sitesinde "medikal kozmetik marka danışmanlığı" geçmişi açıkça belirtiliyor. Estranova için bu **iki yönlü bir mesele**:

**Avantaj:**
- Kozmetik aktif maddeleri (retinol, niasinamid, askorbik asit, hyalüronik asit, peptid) konusunda derin bilgi.
- Endüstri yönelimlerini içeriden bilen biri olarak "trendin değil cildin tarafında" duruşu güçlü kanıtla bu pozisyondan gelir.

**Risk:**
- Estranova editöryal nötrlük çerçevesinde bu geçmiş **gövdede zikredilmez**.
- Spesifik marka adı kullanımı kuvvetle yasak — okuyucu tarafından danışmanlık geçmişi ile bağlantılandırılma riski.
- "Şu marka serum / krem" tarzı öneri MUTLAK YASAK.
- Aktif madde mekanizma anlatımı OK; marka karşılaştırması YASAK.

### Akademik yayın hacmi (~150)

25+ yıl akademisyen + ~150 yayın — Türkiye dermatoloji alanında üst düzey. Estranova için bu, "uluslararası yayın referansı" yumuşatması yapılmadan derin bilgi taşıma kapasitesi sağlar. Ancak biyografi vitrin olarak değil, gövdede anonim bilgi otoritesi olarak yansır.

### Estetik dermatoloji eğitmenliği

Yeni nesil dermatologlara aktarım rolü → pedagojik dil. Estranova'da "anlaşılır anlatımla okuru rahatlatan" sesin kaynağı bu rol olabilir.

### Kişisel siteden çıkarımlar

cagrisade.com.tr ile kıyaslandığında: Çağrı Sade'nin yazıları "şu işleme nasıl karar verilir" formatında; Gonca'nın yazıları "şu konuyu nasıl anlamalı" formatında daha eğitici tonda. Bu Estranova için Gonca'nın sesini Çağrı'dan ayıran asıl ipucu.

---

<a id="cift-rol-uyarisi"></a>

## §5c-ek · Çift Rol Uyarısı — DEFAULT KAPALI

> profile.yaml `dual_role_warning.active: false`.

### Olası eksen 1: Senai (jinekolog) ile mesleki bağ

Cilt-hormon ekseninde menopozda jinekoloji-dermatoloji ortak değerlendirme olabilir (hormonal akne, melazma, postmenopozal cilt değişimi). Senai (jinekolog) ile Gonca (dermatolog) muhtemelen mesleki ortamda tanışıyor. Doğrulanırsa kural Senai paraleli.

### Olası eksen 2: Çağrı Sade ile yan eksen çakışması

İkisi de estetik konularda yazıyor; eksen ayrımı sıkı. Gonca cilt biyolojisi merkezli; Çağrı yüz katmanlı cerrahi haritası. Aynı konuda iki yazar nadiren çakışır — örn. lazer fraksiyonel tedavi: Gonca dermatoloji tarafı, Çağrı cerrahi tarafı.

### v0.1 kuralı

Kullanıcı doğrulayana kadar **dual_role_warning.active = false**.

---

## §5d · Editöryal nötrlük — operasyonel notlar (kozmetik için sıkı)

- Gonca'nın kendi sitesi (goncagokdemir.com), Teşvikiye muayenehanesi tanıtımı **sadece biyografi sayfasında**.
- Makale gövdesinde "Şu klinikte / Şu hastanede" referansı YASAK.
- ~150 yayın / 25 yıl / Profesörlük biyografide; gövdede "ben yaptım" tonuna kayma yok.
- AAD / EADV / IADVL bağı gövdede YASAK — "uluslararası dermatoloji dernekleri" anonim yumuşaması.
- Pharmetic, Longevity Okulu, NG Dergi gibi platform yazıları biyografide; gövdede platform adı YASAK.
- **Spesifik kozmetik marka adı gövdede MUTLAK YASAK.**
- **Önce-sonra anlatımı MUTLAK YASAK.**

---

## §6 · İç süreç notları

### Lazy aktivasyon protokolü

İlk makale öncesi AI agent şu adımları atar:

1. goncagokdemir.com/makaleler/'den 4-5 yazıyı tam metin halinde topla.
2. Pharmetic.org'da Gonca Gökdemir yazılarını topla.
3. NG Dergi "Sağlıklı Güzellik" yazısını topla.
4. PubMed `Gokdemir G[Author]` sorgusu.
5. **6-10 cümle örnek havuzu** seçilir.
6. Tematik türetmeyle 4-6 manifesto kalıbı + 10/10/6 varyantı havuzu.
7. Kullanıcıya kısa form ≤5 dakika onaylat.
8. profile.yaml + hot.md + warm.md güncelle; writer_version v0.2'ye bump.

### v0.2 hedefleri

- Manifesto havuzu (4-6 kalıp) aktif
- Açılış / kapanış / dengeleyici varyant havuzları (10/10/6)
- Klinik felsefe omurgası 4 direk ([GG-K] / [GG-T] etiketli)
- En az 1 gold-standard pozitif örnek (cold.md §12)
- Cooldown override'lar
