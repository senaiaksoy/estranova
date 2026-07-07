# Fzt. Ersin Saraç — hidden.md

> Yayınlanmaz: iç notlar, Çift Rol Uyarısı, hassas sınırlar. v0.1 — 2026-05-02. **Yaş farkı (33 vs 40+ okuyucu) en hassas alan.**

---

<a id="gizli-gozlemler"></a>

## §5b · Gizli Gözlemler (yayınlanmaz)

> v0.1'de minimal. Aşağıdaki gözlemler **gövdeye girmez**.

### Yaş farkı — KRİTİK

Ersin 33 yaşında (1993 doğumlu), Estranova okuyucusu 40+. Diğer 7 bilimsel yazar 50+/60+. Bu **kuşak farkı**:

- "Ben de bu yaştan geçiyorum" tipi içtenlik kapısı YASAK (yaş farkı + kategori farkı).
- "Akademik birikim arka planda" tonu yerine "klinik gözlem + sertifika eğitimi disipliniyle" çerçeve.
- Öğretmen tonu paternalist olamaz; "size öğretiyorum" yerine "kanıt-temelli rehberlik".

### Sporcu klinisyen kimliği — pazarlama riski

Fenerbahçe Erkek Basketbol A Takımı'nda 2017-2018 fizyoterapist olarak çalışma — kariyer açısından kritik milad ama **gövdede pazarlama vitrini olamaz**. "Fenerbahçe ile çalıştığım yıllarda" tipi cümleler MUTLAK YASAK. Estetik diş hekimliği (Çağrı Sade'nin Aston gözlem riski paraleli).

### Klinik girişimcilik — genç klinisyen

25 yaşında mezun olup 4-5 yıl içinde Pain Free Nişantaşı klinik kurması — Türkiye'de hızlı klinik girişimci. Estranova için bu detay **gövdeye taşınmaz** (klinisyen vitrini); biyografide ok.

### Kadın sağlığı vurgusu — eksen tasarımı

Pain Free Nişantaşı sitesi kas-iskelet, spor yaralanmaları, postür, kronik ağrı vurguluyor. **"Kadın sağlığı fizyoterapisi" Estranova tıbbi danışman bio'sunda tag olarak var ama kişisel sitede vurgulanmamış.** Estranova çerçevesinde bu eksen tasarlanır:

- 40+ kadın bedenine yönelik kas-iskelet rehab
- Pelvik taban fizyoterapisi (kegel + biyofeedback)
- Doğum sonrası rehabilitasyon (40+ geç doğum)
- Postmenopozal kemik koruyucu egzersiz

Bu tasarım **kişisel klinik deneyiminden türemiş gibi sunulamaz** — "klinik gözlem" anonim çerçevesinde, "kanıt-temelli yaklaşım" tonunda yazılır.

---

<a id="cift-rol-uyarisi"></a>

## §5c-ek · Çift Rol Uyarısı — DEFAULT KAPALI

> profile.yaml `dual_role_warning.active: false`.

### Olası eksen 1: Senai (jinekolog) ile mesleki bağ

Senai mahrem klinik konularında (idrar kaçırma, GSM, pelvik organ prolapsusu) yazıyor; pelvik taban kas-iskelet boyutu fizyoterapi alanı. İki branş muhtemelen mesleki ortamda kesişiyor. Senai'nin pelvik taban hastalarını fizyoterapi rehabilitasyonu için yönlendirdiği fizyoterapist olabilir Ersin — kullanıcı doğrulamasına bağlı.

Doğrulanırsa:
- Senai'den yönlendirilen hasta bilgisi sızmaz.
- Birbirinin yazısına dolaylı atıf yapmaz.
- İki yazar editöryal nötrlüğü kollayarak yan yana var olur.

### Olası eksen 2: Estranova lifestyle yazarlarıyla bağ

Senai 8 lifestyle yazarın gerçek jinekoloğu kuralı (memory `feedback_dual_role_universal_2026_05_01.md`). Ersin için paralel bir bağ var mı kullanıcı doğrulamasına bağlı. Default kapalı.

### v0.1 kuralı

Kullanıcı doğrulayana kadar `dual_role_warning.active = false`. Hassas konularda (özellikle pelvik taban) AI agent kullanıcıdan açıkça doğrulama ister.

---

## §5d · Editöryal nötrlük — operasyonel notlar

- Pain Free Nişantaşı klinik adı / Nişantaşı adresi / kişisel klinik tanıtımı **sadece biyografi sayfasında**.
- Makale gövdesinde "Şu klinikte / Şu hastanede / Pain Free'de" referansı YASAK.
- Fenerbahçe Erkek Basketbol A Takımı / Assembly Klinik referansları biyografide; gövdede "ben yaptım" tonu YASAK.
- IKOMT / TBF / Spor Travmatolojisi sertifika eğitimleri biyografide; gövdede "eğitimimde öğrendiğim" YASAK.
- WCPT / IFOMPT / APTA gibi uluslararası fizyoterapi kuruluş adı gövdede YASAK — anonim "uluslararası fizyoterapi dernekleri" yumuşaması.
- **Önce-sonra anlatımı MUTLAK YASAK.**
- **Spesifik alet / cihaz / takviye / kineziyolojik bant markası MUTLAK YASAK.**
- **"X günde sıfır ağrı" / "Hızlı toparlanma" hızlı sonuç vaadi MUTLAK YASAK.**

---

## §6 · İç süreç notları

### Lazy aktivasyon protokolü

İlk makale öncesi AI agent şu adımları atar:

1. painfree.com.tr (about + services) tam metin topla.
2. Ersin'in sosyal medyasını (Instagram, YouTube) kontrol et — eğitim içerikleri varsa transkript.
3. PubMed `Sarac E[Author]` veya benzer sorgular.
4. **6-10 cümle örnek havuzu.**
5. Tematik türetmeyle 4-6 manifesto kalıbı + 10/10/6 varyantı.
6. Kullanıcıya kısa form ≤5 dakika onaylat.
7. profile.yaml + hot.md + warm.md güncelle; v0.2'ye bump.

### v0.2 hedefleri

- Manifesto havuzu (4-6 kalıp) aktif
- Açılış / kapanış / dengeleyici varyant havuzları (10/10/6)
- Klinik felsefe omurgası 4 direk ([ES-K] / [ES-T] etiketli)
- Gold-standard pozitif örnek (cold.md §12)
- Cooldown override'lar
