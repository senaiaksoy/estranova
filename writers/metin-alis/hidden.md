# Dr. Metin Alış — hidden.md

> Yayınlanmaz: Estranova editöryal süreci için iç notlar, Çift Rol Uyarısı, hassas sınırlar. v0.1 — 2026-05-02.

---

## §5b · Gizli Gözlemler (yayınlanmaz)

> v0.1'de minimal. Kullanıcı doğrulamasıyla zaman içinde genişler. Aşağıdaki gözlemler **gövdeye girmez**, sadece içerik kararlarında AI agent için bağlam.

### Akademik formasyon ipucu

GATA hattı klinisyen formasyonu — askeri tıp akademisi disiplini, hipotezi adım adım test eden, kılavuza uyumlu ama bireyselleştirebilen yaklaşım. Bu formasyon "yazımdaki disiplinli yapı" olarak yansır (alt başlık + bullet + tanım kuralı + sebep-sonuç köprüsü). Estranova için yumuşatılır ama disiplin korunur.

### Sosyal medya görünürlüğü

Instagram aktif (@drmetinalis veya @endokrin.dr.metinalis — doğrulama gerekli). Ama TV / podcast / büyük gazete köşe yazarı arşivi sınırlı. Bu, "muayenehaneye odaklı, düşük profil promosyon" davranışına işaret eder — Estranova'nın "promosyon yasağı" kuralıyla uyumlu.

### Hasta bağlamı çekingen

metinalis.com içeriği klinik referans / ders kitabı tonunda (MSD Manual çevirisine yakın); birinci-şahıs hasta hikayesi yok. Bu, Metin'in profesyonel mesafe alışkanlığını gösterir. Estranova'da anekdot kapısı açıldığında **anonim klinik gözlem** ile sınırlı tutulmalı.

---

## §5c-ek · Çift Rol Uyarısı — DEFAULT KAPALI

> profile.yaml `dual_role_warning.active: false` — kullanıcı doğrulamadığı için kapalı. Aşağıda **olası** Çift Rol senaryoları; doğrulanırsa active=true'ya çekilir.

### Olası eksen 1: Senai ile mesleki bağ

İstanbul özel hastaneler ekosisteminde Endokrinoloji + Jinekoloji branşları sıkça çakışır:

- Tiroid disfonksiyonu olan jinekolojik hastalar endokrinoloğa yönlendirilir.
- Postmenopozal osteoporoz takibinde jinekolog + endokrinolog ortak değerlendirme.
- HRT kararında tiroid statüsü değerlendirmesi.

Senai (jinekolog) ile Metin (endokrinolog) muhtemelen mesleki ortamda tanışıyor. Eğer bu bağ doğrulanırsa:

- Muayene odası bilgisi sızmaz (Senai'nin Estranova yazarlarına dair çift rol kuralının paraleli).
- Birbirinin yazısına dolaylı atıf yapmaz (örn. Metin'in tiroid yazısı, Senai'nin "uzman dernekler arasında" yumuşaması ile referans alabilir; ama isim bağı kurulmaz).
- Estranova'da iki yazar editöryal nötrlüğü kollayarak yan yana var olur.

### Olası eksen 2: Estranova yazarlarıyla hekim ilişkisi

Senai default mimaride 8 lifestyle yazarın gerçek jinekoloğu (memory: `feedback_dual_role_universal_2026_05_01.md`). Metin için paralel mimari **henüz kurulmadı** — kullanıcı doğrulamasına bağlı. Eğer Berna/Başak/Duygu gibi yazarlar Metin'in endokrinoloji hastasıysa, aynı kural devreye girer:

- Hasta-yazar bilgisi gövdeye sızmaz.
- "Hastalarımdan biri" anekdot kapısı sadece GENEL/ANONİM.
- Spesifik HRT/tiroid lab değeri / doz bilgisi bu yazarlar üzerinden anılmaz.

### v0.1 kuralı

Kullanıcı doğrulayana kadar **dual_role_warning.active = false**. AI agent ilk makalede konu hassas (örn. tiroid ve HRT etkileşimi) ise kullanıcıdan açıkça doğrulama ister.

---

## §5d · Editöryal nötrlük — operasyonel notlar

- Metin'in kendi muayenehanesi (metinalis.com / Şişli) ve Amerikan Hastanesi tanıtımı **sadece biyografi sayfasında** (yayin-kurulu) yer alır.
- Makale gövdesinde "Şu hastanede / Şu klinikte" referansı YASAK — anonim "klinik pratikte / polikliniğe başvuran kadınlarda" kullanılır.
- Türkiye Endokrinoloji ve Metabolizma Derneği (TEMD) katkısı (osteoporoz kılavuzu) biyografide referans verilebilir; gövdede TEMD adı geçmez (CLAUDE.md §4 yasak referans biçimleri).
- ASE / ESE / Mayo bağı biyografide; gövdede "uluslararası uzman dernekler" anonim yumuşaması.

---

## §6 · İç süreç notları

### Lazy aktivasyon protokolü (manifesto + cooldown havuzları)

İlk makale öncesi AI agent şu adımları atar:

1. metinalis.com'un **tüm 6 kategori sayfasını** (endokrin sistemi, hipertiroidizm, devlik ve akromegali, metabolik sendrom, şeker hastalığı, Cushing sendromu) tam metin halinde toplar.
2. Bunlardan **6-10 cümle örnek havuzu** seçilir (tipik tanım + tipik geçiş + tipik klinik karar).
3. Tematik türetmeyle 4-6 manifesto kalıbı + 10 açılış varyantı + 10 kapanış varyantı + 6 dengeleyici cümle havuzu kurulur.
4. Kullanıcıya sunulur (kısa form ≤5 dakika — memory: `feedback_dogrulama_formu_kisa_format_2026_05_01.md`).
5. Onay sonrası hot.md §4 + warm.md §4e güncellenir; profile.yaml `pattern_pool_sizes` 6 → 10'a yükselir; `manifesto_templates.templates` doldurulur; writer_version v0.2'ye bump.

### v0.2 hedefleri

- Manifesto havuzu (6 kalıp) aktif
- Açılış / kapanış / dengeleyici varyant havuzları (10/10/6)
- Klinik felsefe omurgası 4 direk ([MA-K] / [MA-T] etiketli)
- En az 1 gold-standard pozitif örnek (cold.md §12)
- Cooldown override'lar (Senai paraleli — opening 6, closing 4, balance 4 gibi)
