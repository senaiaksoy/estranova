# Op. Dr. Çağrı Sade — hidden.md

> Yayınlanmaz: iç notlar, Çift Rol Uyarısı, hassas sınırlar. Estetik konularda promosyon yasakları en sıkı çerçevede. v0.1 — 2026-05-02.

---

<a id="gizli-gozlemler"></a>

## §5b · Gizli Gözlemler (yayınlanmaz)

> v0.1'de minimal. Aşağıdaki gözlemler **gövdeye girmez**, içerik kararlarında AI agent için bağlam.

### Promosyon kapısı yapı sorunu

cagrisade.com.tr blog'undaki yazılar her sonunda klinik tanıtım kapanışıyla biter. Bu yapı **kişisel sitede normal**, ancak Estranova'ya taşınırken **MUTLAK kaldırılır** — Estranova'nın §1 (klinik sitesi DEĞİL) ve §4 (promosyon yasakları) çerçevesi en sıkı bu yazarda.

### Aston referansı kullanımı

Sherrell J. Aston gözlemci programı kariyer açısından kritik milad. Biyografide referans verilebilir; gövdede **YASAK** — "Aston tekniğiyle", "New York'ta öğrendiğim" tipi cümleler promosyonel vitrin.

### Estetik konuları için kategori daraltma

Çağrı Sade'nin kişisel sitesindeki blog konularının **küçük bir alt kümesi** Estranova'ya uygun:
- ✅ Yüz yaşlanması ve menopoz kavşağı
- ✅ Estetik karar süreci (kişiselleştirme)
- ✅ Non-invaziv mekanizma + kanıt sınırı
- ✅ Göz kapağı yaşlanması
- ❌ Vücut estetiği (BBL/liposuction/karın germe) — menopoz çerçevesi olmadıkça
- ❌ Saç ekimi tek başına — hormonal geçiş bağı yoksa
- ❌ Burun estetiği — Estranova menopoz odağı dışında
- ❌ Meme estetiği — Estranova menopoz odağı dışında (postmenopoz meme sağlık değişimi sağlık çerçevesinde DESTEKLEYİCİ olabilir)
- ❌ Labiaplasti / vajinoplasti — Senai alanı (eksen karışıklığı yasağı)

### Hasta-merkezli dil avantajı

Kişisel sitede "cerrahınızla rahat soru sorabilmeli" tipi inclusive yumuşatma var. Bu dilsel doku Estranova'nın "Doktorunuza danışın" çerçevesiyle uyumlu — yumuşak adaptasyon kolay.

---

<a id="cift-rol-uyarisi"></a>

## §5c-ek · Çift Rol Uyarısı — DEFAULT KAPALI

> profile.yaml `dual_role_warning.active: false`.

### Olası eksen 1: Senai (jinekolog) ile mesleki bağ

Senai (jinekolog) bazı estetik uzmanlarla labiaplasti / vajinoplasti vakalarında ortak değerlendirme yapabilir; Çağrı Sade böyle bir bağ kuruyorsa profesyonel ortamda tanışıyordur. **Estranova'da bu konularda Çağrı Sade YAZMAZ** — Senai alanı (fonksiyonel zemin); eksen karışıklığı yasağı.

### Olası eksen 2: Estranova yazarlarıyla hekim ilişkisi

Estranova lifestyle yazarları (Berna, Başak, Duygu vb.) Çağrı Sade'nin estetik hastasıysa muayene odası bilgisi sızmaz. Default mimaride Senai 8 yazarın gerçek jinekoloğu; Çağrı Sade'nin paralel bir mimari olabilir mi kullanıcı doğrulamasına bağlı.

### v0.1 kuralı

Kullanıcı doğrulayana kadar **dual_role_warning.active = false**. Hassas konularda (yazar deneyimi + estetik müdahale gibi) AI agent kullanıcıdan açıkça doğrulama ister.

---

## §5d · Editöryal nötrlük — operasyonel notlar (estetik sıkı)

- Çağrı Sade'nin kendi sitesi (cagrisade.com.tr), Nişantaşı muayenehanesi ve Amerikan Hastanesi tanıtımı **sadece biyografi sayfasında**.
- Makale gövdesinde "Şu klinikte / Şu hastanede" referansı YASAK — anonim "konsültasyonda / kliniğe başvuran kadınlarda".
- Sherrell J. Aston referansı biyografide; gövdede "Aston tekniğiyle" tipi övgü YASAK.
- ASPS/ISAPS/IPRAS bağı gövdede YASAK — "uluslararası uzman dernekler" anonim yumuşaması.
- **Önce-sonra anlatımı MUTLAK YASAK** — CLAUDE.md §4 doğrudan yasak.
- **Marka adı (dolgu / botoks / cihaz / lazer / iplik / krem) gövdede YASAK** — bu yazar için en sık karşılaşılacak ihlal kapısı.

---

## §6 · İç süreç notları

### Lazy aktivasyon protokolü (manifesto + cooldown havuzları)

İlk makale öncesi AI agent şu adımları atar:

1. cagrisade.com.tr blog'undan 4-5 yazıyı tam metin halinde topla (öncelik: göz kapağı estetiği karar yazısı + dudak dolgusu karar yazısı + sigara/beslenme yazısı + sekonder rinoplasti yazısı + kombine güzellik yazısı).
2. **6-10 cümle örnek havuzu** seçilir (tipik karar çerçevesi + tipik kişiselleştirme cümlesi + tipik mekanizma anlatımı).
3. Tematik türetmeyle 4-6 manifesto kalıbı + 10 açılış / 10 kapanış / 6 dengeleyici cümle havuzu.
4. Kullanıcıya kısa form ≤5 dakika onaylat.
5. profile.yaml `pattern_pool_sizes` 6 → 10; `manifesto_templates.templates` doldur; writer_version v0.2'ye bump.

### v0.2 hedefleri

- Manifesto havuzu (4-6 kalıp) aktif
- Açılış / kapanış / dengeleyici varyant havuzları (10/10/6)
- Klinik felsefe omurgası 4 direk ([CS-K] / [CS-T] etiketli)
- En az 1 gold-standard pozitif örnek (cold.md §12)
- Cooldown override'lar (Senai/Metin/Alp paraleli)
