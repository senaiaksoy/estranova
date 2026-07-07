# Bilgi mimarisi: alt menüler ve makale konu önerileri

Bu doküman, Estranova’nın editoryal konumlandırması (bkz. `CLAUDE.md`, `AGENTS.md`) ile uyumlu olacak şekilde üst menü altında açılacak yollar ve üretilebilecek içerik başlıkları için çalışma çerçevesidir. Tedavi pazarlaması, randevu dili ve “garanti / en iyi” ifadeleri kullanılmamalıdır.

---

## 1. Rol çerçevesi (operasyonel)

| Rol | Odak |
|-----|------|
| **Yönetici (ürün / editoryal)** | IA önceliği, ton, yayın sırası, üst menü ↔ hub uyumu |
| **İçerik mimarı** | Kategori ve hub sayfaları, iç bağlantı ağı, kütüphane (`/library`) ile tutarlılık |
| **Konu editörü** | Başlık, özet, kanıt düzeyi, tıbbi feragat uyumu |
| **Semptom & okur yolu** | `/symptoms` ve makaleler arasında okuma önerileri |
| **Uyum / güven** | Editoryal politika, metodoloji, yasal sayfalarla uyum |
| **Teknik yayın** | Slug, meta, yapılandırılmış veri (mevcut site altyapısına göre) |

---

## 2. Mevcut üst menü (referans)

Anasayfa · Hormonal Geçiş · Zamansız Yaşam · Beden & Yakınlık · Zihin & Denge · Bilimsel Pencere · Hakkımızda · Yayın Kurulu.

**Uygulama:** Alt menü bağlantıları `src/data/navigation.ts` içinde tanımlıdır; masaüstünde açılır menü, mobilde `details` blokları `SiteNavbar.astro` üzerinden üretilir.

---

## 3. Alt menü / hub önerileri ve makale konuları

### 3.1 Hormonal Geçiş

| Alt yol (öneri) | Örnek makale / rehber konuları |
|-----------------|----------------------------------|
| Perimenopoz | Döngü izlemi ve günlük tutma (okur dili); erken belirtiler; aile öyküsü ve zamanlama beklentisi |
| Menopoza hazırlık | Koruyucu kayıtlar (ör. tansiyon, kilo) çerçevesi; minimum hareket; ne zaman hekime başvurunun düşünülebileceği |
| Menopoz | Son adetten sonra 12 ay tanımı; menopoz sonrası ilk dönem başlıkları (bilgilendirici, kişisel tedavi yok) |
| 40 sonrası uzun vade | Tarama ve izlem genel çerçevesi; kemik–kalp–metabolizma özet tablosu (kişiselleştirme vurgulu) |

### 3.2 Zamansız Yaşam

| Alt yol (öneri) | Örnek konular |
|-----------------|---------------|
| Beslenme & metabolizma | Protein, lif, glisemik yük (sade dil); sıvı alımı |
| Vitaminler & takviyeler | Mineraller, B12, omega-3 (kanıt gücü ayrımı); etiket okuma |
| Hareket & kas | Direnç + yürüyüş; denge ve düşme riski çerçevesi |
| Deneysel / erken aşama | NAD+ vb. — “umut verici / gelişen / güçlü kanıt” şablonu ile |

### 3.3 Beden & Yakınlık

| Alt yol (öneri) | Örnek konular |
|-----------------|---------------|
| Cilt & saç | Kuruluk, saç dökülmesi (hormon + yaş + stres birlikte) |
| Ürogenital konfor | Kuruluk, ağrı, idrar sıklığı — nötr, utandırmayan dil |
| Yakınlık & libido | İstek değişimi; iletişim; “normal aralık” çerçevesi (satış veya tedavi vaadi yok) |

### 3.4 Zihin & Denge

| Alt yol (öneri) | Örnek konular |
|-----------------|---------------|
| Uyku | Uyku hijyeni; hormonal uyku; uyku günlüğü fikri |
| Ruh hali & kaygı | Öfke dalgalanması; depresyon ile hormonal tablo (bilgilendirici ayrım) |
| Bilişsel sağlık | “Beyin sisi” metaforunu sadeleştirme; ne zaman değerlendirme |
| Stres & beden | Nefes, sınır koyma; iş–yaşam (editoryal, terapi satışı yok) |

### 3.5 Bilimsel Pencere

| Alt yol (öneri) | Örnek konular |
|-----------------|---------------|
| Hormon biyolojisi | Östrojen / progesteron özeti; genel bilgi (reçete yok) |
| Kalp-damar & menopoz | Risk faktörleri okuma çerçevesi |
| Kemik & mineral | Kalsiyum–D birlikte düşünme |
| Yeni çalışmalar | Tek çalışma: “ne söyler / ne söylemez” formatı |

### 3.6 Güven & kurumsal (çoğunlukla footer veya ikincil menü)

| Alt yol | Not |
|---------|-----|
| Editörün köşesi | Aylık gündem (ör. Sıcacık Köşe) |
| Metodoloji | Mevcut `/editoryal-politika/nasil-arastiriyoruz` ile uyumlu şablon |
| İletişim, KVKK, politikalar | Mevcut sayfalar; içeriklerden çapraz link |

---

## 4. Önceliklendirme (öneri sırası)

1. Üst menüdeki her ana başlık için en az bir **hub / landing** tutarlılığı (Hormonal Geçiş örneği: perimenopoz hub).
2. Okur akışı: `/symptoms` ↔ kütüphane ↔ makale üçlüsünde boşlukları kapatma.
3. İçerik üretim sırası (tahmini talep): **uyku** → **döngü / sıcak basması** → **ruh hali** → beden & yakınlık derinlemesine.
4. Her uzun içerikte tekrarlayan bloklar: kısa özet, kanıt rozeti veya şeffaflık notu, “bireysel değerlendirme” uyarısı, ilgili iç bağlantılar.

---

## 5. Revizyon

Bu dosya içerik takvimi ve site yapısı değiştikçe güncellenmelidir. Son güncelleme notu: içerik ekibi tarafından tarih ve kısa özet eklenebilir.
