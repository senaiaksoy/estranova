# Geniş audit — revizyon 5

14 Ekim 2026. Salt-okunur denetim; makale değiştirilmedi. Kaynak: `makale-kaynak.astro` sha256 `83282c62…a2c93`.
Okunanlar: Senai-Wiki stil rehberi, CLAUDE.md §3–§6, ARTICLE-PRODUCTION-SPEC Faz 5, `writers/ersin-sarac/hot.md` + `profile.yaml`, `yazar-katkisi.json`.
Araçlar: `structure-check.mjs` (`duzenlenmis-metin.md` üzerinde), `editorial-check.mjs`, `rendered-check.mjs` (önizleme derlemesi), `check-editorial-lexicon.mjs`, `tag-ai-images.mjs --check`.

## 1. Persona ve ton

- Yazar: Fzt. Ersin Saraç, `category: 'scientific'` (klinisyen istisnası). Hitap "siz"; "sen" sızıntısı, ünlem, üç nokta yok. Vitrin/klinik adı/önce-sonra yok.
- Anekdot: hiç yok. Uydurma anekdot eklenmemesi doğru.
- **Bulgu:** Ersin'in gerçek katkısı (`yazar-katkisi.json`) birinci tekildi: "Benim için belirleyici olan…", "öneririm", "değerlendirmem". Taslakta üçüncü şahsa çevrilmiş; makalede yazarın kendi sesi hiç duyulmuyor. Klinisyen istisnası ve Sıcaklık Katmanı #3 birinci tekili meşru ve aktif ister. Katkı yazara ait olduğu için bu kişiselleştirme uydurma sayılmaz.
- "Bedeni dinleyerek ilerlemek" Ersin'in HARD imzası; kişileştirme yasağına girmez.

## 2. Tell sayıları

| Tell | Eşik | Bulgu |
|---|---|---|
| "X değil, Y" / olumsuzlama çerçevesi | ≤ 2–3 | **10** (2 H2 başlığı + gövdede 8: satır 125, 129, 134, 141, 148, 177, 181, 186) |
| Beden kişileştirmesi | 0 | 0 (imza ifadesi hariç) |
| Soru-başlıklı H2 | ≤ 1 | **3** (Neden Değişir?, Neden Önemli?, Ne Zaman … Gerekir?) |
| Persona-anekdot uyumsuzluğu | 0 | 0 |
| Tereddüt (-ebilir/-abilir) | seyrek | 15 / 767 kelime; arada kesin cümleler var, kabul edilebilir |
| ≤6 kelimelik vurgu | ≥ 3–4 | 4 (biri iki noktayla biten yönlendirme) |
| 3+ ardışık eş-uzunluk (±2) | yok | **4 dizi, en uzunu 5 cümle** |
| Kısa hüküm kapanışı | — | 6 gövde paragrafı kısa hükümle kapanıyor (88, 116, 124, 161, 169, 177. satırlar, md) |
| Lede çeşitliliği | çeşitli | 7 lede'nin 4'ü aynı "tez cümlesi" kalıbında |
| Somut detay / H2 | her H2'de | "Yaşla değişen" bölümünde yok |
| Teselli anı | ≥ 1 | **yok** |
| Duygu beat'i | ≥ 1 | Zayıf: "Düşme korkusu" başlıkta var, gövdede korku adlandırılmıyor |
| Kelime tekrarı | — | "değerlendirme" dosyada 30 kez |

Yapı kontrolü tekrarları: idrar-dışkı/his kaybı uyarısı 6 yüzeyde 9 kez (özet, gövde, kutu, SSS 4, BEN); "kapasitenize göre / kişiye uyarlanmış" 6 kez; "üç ay" ayrımı 3 kez (satır 184, 186, SSS 5) neredeyse aynı cümleyle.

**YZ/insan kadansı tahmini (editoryal yargı, ölçüm değil):** YZ ağırlıklı. Metin doğru, temiz ve güvenli; ama sesi yok. Olumsuzlama çerçevesi, kısa hüküm kapanışları ve birinci tekilin silinmesi kılavuz özeti hissi veriyor.

## 3. HARD yapı

| Madde | Durum |
|---|---|
| `ArticleProsePanel` + prose sınıfları | Var |
| H2 sayısı ve lede | 7 içerik H2 + Kaynaklar; her H2 1–2 cümlelik lede ile açılıyor |
| Evidence sayısı | **9 etiket; spec Faz 5: 2–3, en çok 4–5.** Ersin `hot.md` §13 "her bilimsel iddianın yanında" diyor; çelişki spec lehine çözülmeli |
| Literal nokta dizisi | Yok |
| Bilimsel Editör Notu | İmzasız "inceleme taslağı"; tıbbi inceleme bekleniyor (bilinen kapı) |
| SSS | 5 konuya özgü soru, tek yüzey, FAQPage aynı kaynaktan (5/5) |
| JSON-LD | Article + BreadcrumbList + FAQPage; editorial-guide olduğu için MedicalWebPage yok, kurala uygun |
| AuthorBlock / RelatedReadings / Disclaimer | Var; 5 ilgili okuma rotasının hepsi `src/pages` altında mevcut |
| Hero | `submenuHeroByRoute` içinde makale girdisi yok, parent hub hero'suna düşüyor. Satır 364'teki girdi `articleCardImageByRoute` (kart görseli), hero değil |
| Şema/OG görseli | **`introspective-khaki-wrap.webp` sayfada artık görünmüyor** (revizyon 3'te byline değişti). Rehber: Article `image` görünür ana görselle eşleşmeli |
| Kart görseli | Eski `zy-kas-iskelet-agrilari-esneme.webp`; yeni byline'ın 2.4:1 kesimi yok |
| AI görsel etiketi | **`kas-iskelet-yuruyus-byline.webp` etiketsiz** (`trainedAlgorithmicMedia` yok); khaki-wrap etiketli |
| Arama yüzeyi | `articleDescription` ile `static-articles.ts` açıklaması farklı ("ağrı sinyali"); yayın entegrasyonunda eşitlenmeli |
| Okuma süresi | 7 dk yazıyor; gövde + SSS yaklaşık 1.000–1.100 kelime, 5–6 dk |

## 4. §4 yasakları

Satış/funnel dili, plaza dili, teşhis/reçete dili, gövdede kurum adı ve inline harici URL yok. Kurum adları ve bağlantılar yalnızca klinisyen kaynak bölümünde; kurala uygun.

## 5. Otomatik kontroller

- Lexicon: 0 hard_ban, 0 soft_ban.
- `editorial-check`: 0 aday.
- `rendered-check`: tekrar eden uyarı (genel aktivite sınırı + kutu + disclaimer), adsız inceleme satırı (beklenen; inceleme yapılmadı), kaynak adı gövdede geçmiyor (numaralı atıf düzeni nedeniyle beklenen). "Yazan: kişi yok" adayı yanlış pozitif: Ersin Saraç görünür.
- `npm run build:ci` çalıştırılmadı: taslak `src/pages` dışında, canlı ağaç bu makaleyi kapsamıyor. Önizleme derlemesi (revizyon 5) geçti.

## 6. Öncelikli düzeltme listesi

1. **Ersin'in sesini geri getir (yüksek).** "Güvenli Hareket Haritası" bölümündeki üç paragrafı onun birinci tekil yanıtına yaklaştır ("Benim için belirleyici olan…", "tempoyu düşürmeyi öneririm", "bunu basit bir egzersiz ağrısı saymam"). Yeni iddia yok, yalnızca özne.
2. **Evidence sayısını 9'dan 5'e indir (yüksek, spec).** Öneri: [3] 2/5, [1] 2/5, [5] 4/5, [2] 4/5, [4] 3/5 (düşme) kalır; 119, 132, 167 ve 188. satırlardaki etiketler kalkar. 188'deki NHS etiketini korumak isterseniz başka biri çıkarılır.
3. **Soru-başlıklı H2'yi 3'ten 1'e indir (orta).** "Ne Zaman Fizyoterapi veya Hekim Desteği Gerekir?" kalabilir; diğer ikisi düz başlığa döner.
4. **Olumsuzlama çerçevesini 10'dan 3'e indir (orta).** H2 başlıklarındaki "değil" kalıplarından biri, gövdedeki 125, 134, 141, 177, 186. satırlar olumlu kuruluşa çevrilir.
5. **Bir teselli anı ve bir duygu cümlesi ekle (orta).** Denge bölümünde düşme korkusunu sade adlandır; kapanışta tek cümlelik güvence. Ersin'in klinisyen-öğretmen tonunda, yaşıt pozu olmadan.
6. **Tekrarları buda (orta).** İdrar-dışkı uyarısı özet + kutu + bir gövde cümlesinde kalsın (SSS 4 ve BEN'den çıkar); "üç ay" ayrımı tek yerde; "kapasite/uyarlanmış" ve "değerlendirme" tekrarı azaltılsın.
7. **Ritim ve kapanışlar (düşük).** Eş-uzunluk dizilerini kır, kısa hüküm kapanışlarının yarısını bilgiyle bitir; "Yaşla değişen" bölümüne tek somut sahne (merdiven, poşet taşıma vb.).
8. **Görsel ve teknik (yayın entegrasyonunda).** Şema/OG `image` görünür görselle eşlensin; byline IPTC etiketlensin; kart görseli kararı verilsin; `static-articles.ts` açıklaması ve `readingMinutes` güncellensin; disclaimer girintisi düzeltilsin.
