# Selin Beden Gerginliği Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Işık Selin Günce için “Duruş Bozulduğunda Değil, Beden Sessizce Sıkıştığında” başlıklı makaleyi onay paketine yazmak.

**Architecture:** Makale önce Selin’in onay-bekleyen klasöründe bir paket olarak üretilecek. Paket içinde route-ready Astro kaynak, okunur HTML önizleme, kontrol formu ve meta dosyası bulunacak; dil, stil ve site şablonu build/encoding kontrolleriyle doğrulanacak.

**Tech Stack:** Astro article shell, HTML preview, local editorial approval package, Node validation scripts

---

### Task 1: Onay Paketi İskeleti

**Files:**
- Create: `D:/A-klasör/Estranova/icerik/yazar-onaylari/isik-selin-gunce/onay-bekleyen/2026-05-07_durus-bozuldugunda-degil-beden-sessizce-sikistiginda/meta.json`
- Create: `D:/A-klasör/Estranova/icerik/yazar-onaylari/isik-selin-gunce/onay-bekleyen/2026-05-07_durus-bozuldugunda-degil-beden-sessizce-sikistiginda/kontrol-formu.html`
- Modify: `D:/A-klasör/Estranova/icerik/yazar-onaylari/isik-selin-gunce/article-log.md`

- [ ] **Step 1: Paket klasörünü ve meta çerçevesini oluştur**

Meta alanları:
- `writerSlug: "isik-selin-gunce"`
- `title: "Duruş Bozulduğunda Değil, Beden Sessizce Sıkıştığında: Gerginliği Fark Etmenin İnce Yolu"`
- `status: "awaiting-author-review"`
- `createdAt: "2026-05-07"`
- `route: "/zamansiz-yasam/durus-bozuldugunda-degil-beden-sessizce-sikistiginda"`

- [ ] **Step 2: Kısa yazar kontrol formunu yaz**

Form başlıkları:
- Başlık size uyuyor mu?
- Selin tonu doğru mu?
- Fazla klinik / fazla soyut bir bölüm var mı?
- Onay / küçük revizyon / büyük revizyon seçeneği

- [ ] **Step 3: Article log’a yeni satırı ekle**

Alanlar:
- tarih
- başlık
- rota
- durum: `onay-bekleyen`
- not: `Selin sahne-beden ekseni için ilk taslak üretildi`

### Task 2: Route-Ready Astro Makale

**Files:**
- Create: `D:/A-klasör/Estranova/icerik/yazar-onaylari/isik-selin-gunce/onay-bekleyen/2026-05-07_durus-bozuldugunda-degil-beden-sessizce-sikistiginda/makale-kaynak.astro`

- [ ] **Step 1: Astro ön yüz iskeletini kur**

Zorunlu bileşenler:
- `SiteLayout`
- `SiteNavbar`
- `SubmenuHero`
- `SubmenuArticleBody`
- `ArticleTOC`
- `ArticleAuthorBlock`
- `ArticleSummary`
- `ArticleProsePanel`
- `ArticleFAQ`
- `RelatedReadings`
- `ArticleEditorNote`
- `ArticleDisclaimer`
- `buildArticleSchemas`

- [ ] **Step 2: Makale gövdesini yaz**

Bölüm omurgası:
1. Beden her zaman ağrıyla konuşmaz
2. “Kötü duruş” fikri neden bazen fazla yüzeyde kalır?
3. Omuz, çene ve nefes hattında sessiz birikme nasıl olur?
4. Sahne disiplini bedeni dinlemeyi nasıl öğretir?
5. Gün içinde hangi küçük işaretler fark edilmeyi bekler?
6. Sert düzeltmeler yerine hangi küçük farkındalıklar işe yarar?
7. Ne zaman bu tablo yalnızca gerginlik diye geçilmemeli?
8. Kapanış

- [ ] **Step 3: Selin imzasını metne yerleştir**

Zorunlu ton unsurları:
- sahne arkası ya da nefes anıyla açılış
- hafif lirik ama okunur gövde
- buyurgan olmayan beden dili
- en az 1 manifesto-aligned anekdot
- teknik anatomi yükü düşük

- [ ] **Step 4: SSS ve schema kaynağını sayfa içinde tutarlı yaz**

SSS hedefi:
- 3-4 soru
- duruş, beden gerginliği, farkındalık ve profesyonel değerlendirme sınırı

### Task 3: HTML Önizleme

**Files:**
- Create: `D:/A-klasör/Estranova/icerik/yazar-onaylari/isik-selin-gunce/onay-bekleyen/2026-05-07_durus-bozuldugunda-degil-beden-sessizce-sikistiginda/makale-onizleme.html`

- [ ] **Step 1: Okunur, tek dosyalık HTML önizleme hazırla**

Önizleme içeriği:
- başlık
- meta
- kısa özet
- tüm H2 akışı
- görünür SSS
- kısa editör notu

- [ ] **Step 2: Önizleme ile Astro metni birebir hizala**

Kontrol listesi:
- başlık aynı
- spot / summary aynı anlamda
- bölüm sırası aynı
- SSS aynı

### Task 4: Doğrulama

**Files:**
- Verify: `D:/A-klasör/Estranova/icerik/yazar-onaylari/isik-selin-gunce/onay-bekleyen/2026-05-07_durus-bozuldugunda-degil-beden-sessizce-sikistiginda/*`

- [ ] **Step 1: Encoding kontrolü çalıştır**

Run: `node scripts/check-encoding.mjs`  
Expected: `Encoding check passed ...`

- [ ] **Step 2: Dil ve stil açısından hızlı self-review yap**

Kontrol:
- `sen` yok, `siz` var
- sahne otoritesi yok
- klinik kürsüsü yok
- “dik durun” gibi buyurgan çözüm dili yok
- Selin’in lirik ama sakin sesi hissediliyor

- [ ] **Step 3: Paket hazır mesajını kullanıcıya ver**

Teslim içeriği:
- `makale-kaynak.astro`
- `makale-onizleme.html`
- `kontrol-formu.html`
- `meta.json`
- article log güncellemesi
