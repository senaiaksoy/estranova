# /makale-humanize

Bir makaleyi/metni yayın öncesi **insan elinden çıkmış ve sıcak** hale getiren çalıştırılabilir pas.
Kuralları **tekrarlamaz, bağlar** — kanonik kaynak: `CLAUDE.md` §3 (özellikle **Sıcaklık Katmanı** + **Humanize zorunluluğu** + **klinisyen istisnası / anekdot çerçevesi**). Bu skill o kuralların *icra prosedürüdür*: tara → say → yeniden yaz → doğrula.

## 0. Preflight (HARD GATE)

1. Oku: `D:\A-klasör\obsidian-vaults\draksoyivf-knowledge\wiki\brand\senai-aksoy-makale-stil-rehberi.md`.
2. Aynen yaz: `Stil rehberi okundu: Dr. Senai Aksoy Makale Stil Rehberi`.
3. Oku: `CLAUDE.md` §3 (Sıcaklık Katmanı 7 kural + anti-tell yasakları + klinisyen istisnası anekdot çerçevesi).
4. Rehber okunamıyorsa hafızadan devam etme; engeli bildir ve dur.

## 1. Persona tespiti

- Hedef makalenin yazarını `src/data/writers.ts`'ten bul (`authorSlug` / `writerSlug`).
- **Klinisyen istisnası** (`category: 'scientific'` — Senai/Bülent/Metin/Gonca/Ersin/Çağrı): birinci tekil klinik sıcaklık **aktif** kullanılır; anekdot çerçevesi *"bir hastam / muayene odasında / polikliniğe gelen bir kadın"*.
- **Yaşıt (default) yazar:** hekim değil; anekdot *"bir kadın / bir arkadaşım / çevremdeki biri"*, *"bir hastam"* YASAK. Birinci tekil = yaşıt deneyimi.
- Varsa yazarın `experience_seeds` / imza sahnelerini yükle (modüler profilde `writers/<slug>/`, legacy'de `writers/<slug>.md`) — Sıcaklık Katmanı kural 3 bunları zorunlu kılar.

## 2. Mekanik tell taraması (önce ölç)

Hedef dosyada şunları say; eşik aşılırsa düzelt. (Grep desenleri başlangıç; bağlamı her zaman gözle doğrula.)

| Tell | Tarama | Eşik |
|---|---|---|
| "X değil, Y" antitezi | `grep -oE "değil[;,]" <dosya>` (gövde; BEN/FAQ hariç değerlendir) | gövdede **≤ 2–3** |
| "beden konuşuyor/dil/ritim" kişileştirmesi | `grep -nE "beden(in\|inizin)? (dili\|ritmini\|konuş)" <dosya>` | **0** (yasak — AI artığı) |
| Soru-başlıklı H2 | `grep -cE "<h2[^>]*>[^<]*\?" <dosya>` | **≤ 1** |
| Persona-anekdot uyumsuzluğu | klinisyende `bir kadın (bana\|söze\|anlat\|dedi)` / `tanıdığım bir kadın` / `okudukça` · yaşıtta `bir hastam` | **0** |
| Tereddüt yığını | `çoğu zaman / genellikle / olabilir / -ebilir` üst üste | seyreltilmiş |
| Ritim tekdüzeliği | ardışık eş-uzunlukta cümle; ≤6 kelimelik vurgu cümlesi sayısı | **≥ 3–4 kısa vurgu**, 3+ ardışık eş-uzunluk yok |
| Lede formülü | her H2 aynı "nazik tez cümlesi" kalıbıyla mı açılıyor | çeşitlenmiş |

## 3. Sıcaklık enjeksiyonu

CLAUDE.md §3 **Sıcaklık Katmanı**'nın 7 kuralını uygula (burada tekrar etme, oradan icra et): ritim kırma · somut > soyut · gerçek mikro-ses (`experience_seeds`) · doğrudan teselli anı · tereddüt seyreltme · lede formülünü kırma · bir gerçek duygu beat'i. Persona'ya göre birinci tekil duruşunu ayarla (Adım 1).

## 4. Koruma bandı (DOKUNMA)

- `<Evidence .../>` etiketleri, kanıt seviyeleri, sayısal klinik veriler — değiştirme.
- `RedFlagBox`, `ArticleEditorNote` (BEN), `ArticleFAQ` verisi, JSON-LD — içeriğe dokunma.
- Yeni tıbbi iddia ekleme; mevcut iddiayı büyütme/küçültme. §4 yumuşatma ("ilişkili olabilir") ve **"siz"** hitabı korunur.
- §4 başhekim vitrini / satış dili sınırı sıcaklığın üstündedir — sıcaklık asla övünme veya "sen"e kaymaz.
- Tipografi: `ArticleProsePanel` + `prose-estranova`, italic lede, manuel numara yok.

## 5. Doğrulama (yeniden ölç)

1. `npm run lexicon:check` — `hard_ban` 0.
2. `npm run build:ci` — compliance + strict audit + SEO audit geçmeli.
3. Adım 2 tell taramasını tekrarla; eşiklerin altına indiğini göster.

## 6. Çıktı formatı

1. **Humanize edilmiş metin** (yerinde düzenlendiyse değişen pasajlar)
2. **Kısa değişiklik özeti** (tell önce/sonra sayıları dahil)
3. **Varsa tıbbi dikkat gerektiren iddialar** (yoksa "yeni iddia eklenmedi, klinik katman korundu")
