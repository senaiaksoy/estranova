# Wikidata Item Taslağı — Estranova

> **Amaç (GEO-ANALYSIS.md §10 / #1 öneri):** Estranova markası için bir Wikidata item'ı oluşturup, Dr. Senai Aksoy'un hâlihazırda mevcut item'ına (**Q139893832**) bağlamak. Böylece markanın "kim olduğu" makine-okunur, doğrulanabilir bir entity hâline gelir ve yazarın güçlü entity grafiğine (Wikidata + ORCID + sameAs) kancalanır. ChatGPT ve Google AI Overviews entity-grounding için Wikidata'yı birincil zemin olarak kullanır.

---

## ⚠️ Önce oku: Notability (silinme riski)

Wikidata, bir item'ın ya **(a)** ciddi ve kamuya açık kaynaklarla tanımlanabilir, açıkça tanımlı bir varlığa karşılık gelmesini ya da **(b)** yapısal bir ihtiyaca (örn. başka bir item'dan referans) hizmet etmesini ister. Estranova çok yeni (canlı Mayıs 2026) ve henüz bağımsız basın görünürlüğü yok — **bu item, hiç ikincil kaynak olmadan açılırsa silinmeye (deletion) açık olur.**

**Güvenli sıra:**
1. **Önce (b) yapısal ihtiyacı kur — risksiz, hemen yapılabilir:** Dr. Aksoy'un mevcut Q139893832 item'ına Estranova'yı bağlayan bir ifade ekle (bkz. §3). Bu, yeni item için "yapısal kullanım" zemini yaratır.
2. **En az 1-2 bağımsız referans topla:** marka hakkında bir haber/söyleşi, dizin kaydı veya resmî künye sayfası. (Estranova'nın `editoryal-politika` / `hakkimizda` sayfaları birincil kaynaktır; ikincil/üçüncü-taraf kaynak daha güçlüdür.)
3. **Sonra item'ı oluştur** (§2) ve her ifadeye referans ekle.

> Resmî web sitesi (P856) + yazarın mevcut item bağı, item'ı tamamen savunmasız bırakmaz; ama bağımsız kaynak en sağlam korumadır.

---

## 1. Künye (repo'dan doğrulanmış)

| Alan | Değer | Kaynak |
|------|-------|--------|
| Marka adı | **Estranova** | `magazine-config.ts`, `hakkimizda.astro` |
| Dergi adı | **Eşik** ("Estranova yayını") | `magazine-config.ts` |
| Tür | Bağımsız editöryal kadın sağlığı yayın platformu / aylık dijital dergi | `hakkimizda.astro` |
| Web sitesi | https://estranova.com/ | canlı |
| Dil | Türkçe | `llms.txt`, schema `inLanguage: tr-TR` |
| Ülke | Türkiye | — |
| İlk sayı | Eşik · Sayı 01 — Mayıs 2026 | `magazine-config.ts` |
| Yayın ritmi | Aylık | `magazine-config.ts` |
| Konu | Perimenopoz, menopoz, 40+ kadın sağlığı, hormonal geçiş | `llms.txt` |
| Tıbbi editör | Doç. Dr. Senai Aksoy (**Q139893832**) | `article-schema.ts`, `editoryal-politika` |
| Resmî Instagram | @estranovaofficial | kullanıcı doğruladı |

**Doğrulanması gereken (taslakta boş bırakıldı, uydurulmadı):**
- Yasal yayıncı/imtiyaz sahibi tüzel kişi veya kurucu kişi adı → `founded by` (P112) / `owned by` (P127) için.
- Kuruluş tam tarihi (yıl `2026` güvenli; ay belirsizse boş bırak).

---

## 2. Yeni item — etiketler & ifadeler

### Labels / Descriptions / Aliases

| Dil | Label | Description | Aliases |
|-----|-------|-------------|---------|
| **tr** | Estranova | 40+ kadın sağlığı üzerine bağımsız Türkçe editöryal yayın platformu | Eşik; Eşik dergi; Estranova yayını |
| **en** | Estranova | Independent Turkish editorial publishing platform on women's health after 40 | Eşik magazine |

### Statements (property → değer)

| Property | Değer | Not |
|----------|-------|-----|
| **instance of** (P31) | online magazine (**Q1153191**) | İstenirse ek: website (Q35127) |
| **official website** (P856) | `https://estranova.com/` | Referans: kendisi |
| **inception** (P571) | `2026` | Ay netse `2026-05` |
| **country** (P17) | Turkey (**Q43**) | |
| **language of work or name** (P407) | Turkish (**Q256**) | |
| **main subject** (P921) | menopause (**Q165574**) | Ek: women's health (Q1054094) |
| **main subject** (P921) | perimenopause (varsa QID; yoksa atla) | |
| **field of work** (P101) | women's health (**Q1054094**) | |
| **editor / medical reviewer** | Doç. Dr. Senai Aksoy → **Q139893832** | Schema.org `reviewedBy` karşılığı; Wikidata'da temiz tek property yok — bkz. §3, ilişkiyi tercihen kişi item'ında kur |
| **social media followers / handle** | Instagram username (P2003) → `estranovaofficial` | |

> Her ifadeye **reference** (P854 reference URL → estranova.com ilgili sayfa, veya bağımsız kaynak) eklenmeli. Referanssız ifade zayıf sayılır.

---

## 3. Karşılıklı bağ — Q139893832 (Dr. Aksoy) item'ına eklenecek

Bu adım **önce ve risksiz** yapılabilir; yeni Estranova item'ı henüz yokken bile QID yerine geçici olarak metin/atlama yapılabilir, item açılınca QID girilir.

Dr. Aksoy'un mevcut item'ına eklenecek ifade(ler):

| Property | Değer | Anlam |
|----------|-------|-------|
| **affiliation** (P1416) | Estranova (yeni QID) | "ile ilişkili / bağlı" — en nötr ve doğru |
| *(alternatif)* **employer** (P108) | Estranova (yeni QID) | Yalnızca resmî istihdam ilişkisi varsa |
| *(kurucuysa)* **owner of / founder** | — | `founded by` (P112) yeni item'a; karşılığı kişi item'ında değil item'da tutulur |

**Öneri:** İlişkiyi `affiliation` (P1416) ile kur — Dr. Aksoy Estranova'nın *tıbbi editörü/inceleyicisi*, çalışanı veya sahibi olduğu iddiası gerekmiyor. Bu, schema.org tarafındaki `Organization.reviewedBy → Person` modeliyle de tutarlı.

---

## 4. Oluşturma adımları (Wikidata UI)

1. wikidata.org'da hesap aç / giriş yap (gerçek hesap; anonim düzenleme item oluşturamaz).
2. **Önce §3'ü uygula:** Q139893832'yi aç → *add statement* → `affiliation (P1416)` → (item henüz yoksa bu adımı 6'dan sonra tamamla).
3. *Create a new item* → tr + en label/description/aliases (§2 tablosu).
4. §2'deki statement'ları tek tek ekle; her birine *add reference* → reference URL (P854) ile kaynak ver.
5. `official website (P856)` ve `Instagram username (P2003)` mutlaka eklensin — bunlar entity'yi doğrulayan en güçlü sinyaller.
6. Yeni QID oluşunca Q139893832'deki `affiliation` ifadesini gerçek QID ile tamamla → **çift yönlü bağ kurulur.**
7. (İsteğe bağlı, güçlü) Estranova'nın `Organization` schema'sına yeni Wikidata QID'sini `sameAs`'e ekle: `https://www.wikidata.org/wiki/Q…` — böylece site ↔ Wikidata ↔ yazar üçgeni tam kapanır. *(Tek satırlık `src/layouts/SiteLayout.astro` düzenlemesi; QID hazır olunca ben de yapabilirim.)*

---

## 5. Neden bu sıralama doğru
- Yazar entity'si (Q139893832) **zaten güçlü ve estranova.com'a bağlı** — markayı oraya kancalamak, sıfırdan otorite kurmaktan çok daha ucuz.
- Wikidata, AI sistemlerinin "bu marka gerçek mi, ne yapar, kim arkasında?" sorusuna baktığı ilk yapılandırılmış kaynak.
- Çift yönlü bağ (site sameAs ↔ Wikidata ↔ yazar) AI için tek, tutarlı bir bilgi grafiği oluşturur — §GEO-ANALYSIS otorite skorunu yükselten asıl kaldıraç budur.

---
*Hazırlık: GEO-ANALYSIS.md §5 + §10. Veriler `magazine-config.ts`, `hakkimizda.astro`, `article-schema.ts` ve canlı schema'dan doğrulandı; doğrulanamayan alanlar (yasal yayıncı, kurucu) bilerek boş bırakıldı — Wikidata'ya uydurma değer girilmez.*
