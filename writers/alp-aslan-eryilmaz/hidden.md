# Dr. Alp Aslan Eryılmaz — hidden.md

> Yayınlanmaz: iç notlar, Çift Rol Uyarısı, hassas sınırlar. v0.1 — 2026-05-02.

---

## §5b · Gizli Gözlemler (yayınlanmaz)

> v0.1'de minimal. Aşağıdaki gözlemler **gövdeye girmez**, içerik kararlarında AI agent için bağlam.

### Pioneer kimlik / vitrin riski

Türkiye'nin ilk TAVİ ve MitraClip ekiplerinde olmak **akademik / kariyer açısından kritik miladlar**, ancak Estranova'nın editöryal nötrlük çerçevesinde **gövdede pazarlama vitrini olamaz**. Biyografi sayfasında ok; her makaleye "ilk ekipte olduğum için" gibi cümleler sızdırmak CLAUDE.md §1 yasaklı promosyonel klinisyen vitrini.

### Klinik vurgusu önleyici tarafta

Kişisel sitedeki tek tek alt başlıklar, "Tıbbi Danışman" kart bio'sundaki "Riski abartmadan ama küçümsemeden anlatmaya inanan" tanımıyla uyumlu. Bu, Estranova'da Alp imzasını tanımlayan en güçlü davranış sinyali.

### Sayısal kanıt alışkanlığı

eryilmazalp.com'da rakamlar sıkça kullanılıyor. Estranova'da bu alışkanlık zenginlik — ancak Evidence level etiketleri ile yumuşatılmalı, "p<0.05" tipi akademik dergi tonuna kaymamalı.

---

## §5c-ek · Çift Rol Uyarısı — DEFAULT KAPALI

> profile.yaml `dual_role_warning.active: false` — kullanıcı doğrulamadığı için kapalı. Aşağıda **olası** Çift Rol senaryoları.

### Olası eksen 1: Senai (jinekolog) ile mesleki bağ

İstanbul özel hastaneler ekosisteminde Jinekoloji + Kardiyoloji branşları sıkça çakışır:

- Menopozda HRT kararı öncesi kardiyovasküler risk değerlendirmesi.
- Postmenopozal hipertansiyon takibi.
- Ailesinde erken kalp hastalığı olan kadınlarda HRT seçimi.

Senai (jinekolog) ile Alp (kardiyolog) muhtemelen mesleki ortamda tanışıyor. Doğrulanırsa:

- Muayene odası bilgisi sızmaz.
- Birbirinin yazısına dolaylı atıf yapmaz.
- İki yazar editöryal nötrlüğü kollayarak yan yana var olur.

### Olası eksen 2: Estranova yazarlarıyla hekim ilişkisi

Senai default mimaride 8 lifestyle yazarın gerçek jinekoloğu (memory: `feedback_dual_role_universal_2026_05_01.md`). Alp için paralel mimari **henüz kurulmadı** — kullanıcı doğrulamasına bağlı. Eğer Estranova yazarları Alp'in kardiyoloji hastasıysa, aynı kural devreye girer.

### v0.1 kuralı

Kullanıcı doğrulayana kadar **dual_role_warning.active = false**. AI agent ilk makalede konu hassas (örn. HRT kararı + kardiyovasküler risk) ise kullanıcıdan açıkça doğrulama ister.

---

## §5d · Editöryal nötrlük — operasyonel notlar

- Alp'in kendi sitesi (eryilmazalp.com) ve Amerikan Hastanesi tanıtımı **sadece biyografi sayfasında** (yayin-kurulu).
- Makale gövdesinde "Şu hastanede / Şu klinikte" referansı YASAK — anonim "klinik pratikte / polikliniğe başvuran kadınlarda".
- TAVİ pioneerliği biyografide referans verilebilir; gövdede "ilk ekipte olarak" tipi övgü YASAK.
- ESC/AHA/ACC bağı gövdede YASAK — "uluslararası uzman dernekler" anonim yumuşaması.

---

## §6 · İç süreç notları

### Lazy aktivasyon protokolü (manifesto + cooldown havuzları)

İlk makale öncesi AI agent şu adımları atar:

1. eryilmazalp.com'un 5 ana kategori sayfasını + önleyici kardiyoloji 6 alt başlığını topla.
2. **6-10 cümle örnek havuzu** seçilir (tipik tanım + tipik geçiş + tipik klinik karar + tipik sayısal kanıt).
3. Tematik türetmeyle 4-6 manifesto kalıbı + 10 açılış varyantı + 10 kapanış varyantı + 6 dengeleyici cümle havuzu kurulur.
4. Kullanıcıya sunulur (kısa form ≤5 dakika).
5. Onay sonrası hot.md §4 + warm.md §4e güncellenir; profile.yaml `pattern_pool_sizes` 6 → 10; `manifesto_templates.templates` doldurulur; writer_version v0.2'ye bump.

### v0.2 hedefleri

- Manifesto havuzu (4-6 kalıp) aktif
- Açılış / kapanış / dengeleyici varyant havuzları (10/10/6)
- Klinik felsefe omurgası 4 direk ([AAE-K] / [AAE-T] etiketli)
- En az 1 gold-standard pozitif örnek (cold.md §12)
- Cooldown override'lar (Senai paraleli — opening 6, closing 4, balance 4)
