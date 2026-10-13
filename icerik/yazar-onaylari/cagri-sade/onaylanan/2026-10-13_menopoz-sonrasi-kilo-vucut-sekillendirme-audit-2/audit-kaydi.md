# İkinci geniş audit ve düzeltmeler — 13 Ekim 2026

- Makale: `/beden-yakinlik/menopoz-sonrasi-kilo-vucut-sekillendirme/`
- Yazar: Op. Dr. Çağrı Sade. Tıbbi inceleme: Doç. Dr. Senai Aksoy.
- Önceki sürüm: `onceki-surum.astro` (ilk audit + Codex teknik düzeltmeleri sonrası). Yeni sürüm: `site-kaynak.astro` (canlı rota ile birebir).
- Onay: bkz. `onay-kaydi.md`.

## Kaynak doğrulaması

- **Kaynak 8 (StatPearls, Bartow ve ark., son güncelleme 7 Temmuz 2025)** NCBI Bookshelf'te tarayıcıyla açılarak okundu. Metindeki üç iddia karşılık buldu:
  - Amaç: "Primarily a body-contouring procedure"; "should not be portrayed as a weight loss procedure."
  - Kilo dengesi: "A patient's weight should be stable for 6 to 12 months before surgery."
  - Deri: "An ideal candidate is nonobese, with minimal skin laxity."
  - Karın duvarı gevşekliği cümlesine bu kaynakta karşılık yok; metinde bu cümleye atıf verilmiyor, yazarın klinik ifadesi olarak kaldı.
- **Kaynak 5 (The Menopause Society MenoNote, 2025)** PDF tam metninden doğrulandı: "aging is the primary driver of weight gain, menopause plays a critical role in redistributing fat".
- Kaynak 1, 2, 3, 4, 6, 7, 9, 10 aynı gün PubMed özetleriyle doğrulanmıştı. Kaynak 11 (ASPS) Codex tarafından HTTP 200 olarak kontrol edildi; içerik bu turda okunmadı.

## Yapılan düzeltmeler

1. Kanıt düzeyleri tutarlı hale getirildi: StatPearls (anlatı derleme) üç yerde 4 → 3; Menopause Society notu 4 → 3. Kalan üç "iyi kanıt" etiketi SWAN kohortu (Greendale, Samargandy) ve Aljerian meta-analizine ait.
2. "Kilo Verme Hedefi ile Liposuction Ayrı Konular" bölümünün girişi tek cümleye indi; çalışma sonuçları ikinci paragrafa alındı (H2 lede kuralı).
3. "Östrojen azalırken… karın bölgesine kayabilir" cümlesi kaynağa bağlandı. Kaynak 5 eklenseydi atıf sırası bozulacaktı; aynı iddiayı destekleyen Davis derlemesi [2] cümlenin sonuna taşındı.
4. Terim açıklamaları: "beden konturu, yani bedenin dış hatları"; "cilt altı yağ belli bir bölgede toplanmışsa, yani lokalize ise".
5. Tekrarlanan "aynı masa" benzetmesi ikinci yerde "hesaba katılır" yapıldı.
6. "Tartıdaki Sayı" ve "Neden Değişir?" bölümlerinin girişleri 3 cümleden 2 cümleye indi; ayrılan cümle sonraki paragraf oldu. Bütün H2 girişleri artık en fazla 2 cümle.
7. Byline alt metni: "Boğaz manzaralı bir odada boy aynasının yanında duran, eli cebinde bir kadın." (Görsel açılarak yazıldı; SEO eki kaldırıldı.)
8. Okuma süresi 9 → 7 dakika (yaklaşık 1.260 kelime).
9. Kaynak 5 künyesine yıl (2025) eklendi.
10. Bilimsel Editör Notu'na görünür inceleme imzası eklendi: "İnceleyen: Doç. Dr. Senai Aksoy · Kadın Hastalıkları ve Doğum Uzmanı · Tıbbi Editör · 13 Ekim 2026", yazar sayfasına bağlantılı. İmza, şemadaki `reviewedBy` ile aynı kuraldan (`getDefaultMedicalReviewer`) üretilir.

## Değişmeyenler

Başlık, açıklama, SSS soru-cevapları, Bilimsel Editör Notu metni, görseller, tarihler (`publishedDate` 21 Eylül 2026, `modifiedDate` 13 Ekim 2026), H2 kimlikleri ve atıf numaraları değişmedi. Hormon tedavisinin karın yağına olası küçük etkisi (Menopause Society, Davis) yazarın uzmanlık ekseni dışında kaldığı için bilinçli olarak eklenmedi.

## Ölçümler (sonra)

Atıf ilk geçiş sırası 1–11; 75 cümle, ortalama 11,8 kelime, standart sapma 5,2; 12 kısa vurgu cümlesi; 25+ kelime 1 cümle. `astro check` 0 hata; derlenmiş sayfada imza, bağlantı (`/yazarlar/senai-aksoy/` → 200), alt metin ve şema `reviewedBy` doğrulandı.

## Bağlı değişiklikler (makale dışı)

- `src/components/site/ArticleEditorNote.astro`: isteğe bağlı `reviewerForWriter` / `reviewedDate` alanları. Verilmezse eski görünüm aynen kalır; şimdilik yalnızca bu makalede açık.
- `src/data/article-types.ts`: `getDefaultMedicalReviewer` sonucuna `slug` eklendi.
- `writers/cagri-sade/profile.yaml`: kapsam satırları KC editör kararıyla güncellendi — menopoz sonrası vücut şekillendirme (liposuction, karın germe) Çağrı Sade'nin alanı; menopoz çerçevesi olmayan genel vücut estetiği kapsam dışı kalır.

## Son kontrol sonrası düzeltmeler (13 Ekim 2026)

- "beden konturu, yani bedenin dış hatları başlığına" → "beden konturu (bedenin dış hatları) başlığına" (tamlama bölünmesi giderildi).
- Kaynak 8 künyesi: "StatPearls, 2025 güncellemesi."
- Kapsam kararı `writers/cagri-sade/cold.md` ve `src/data/writers.ts` (yasak listesi) ile eşitlendi; `focusAreas` içine "Menopoz Sonrası Vücut Şekillendirme" eklendi (KC kararı).
- Not: Önceki bölümde "onay raporunda onaylı görünüyor" denmişti; bu yanlıştı — rapor aracı bu makaleyi hiç okumuyordu. Araç düzeltildi (`scripts/list-article-approvals.mjs`); makale artık raporda onaylı (2026-10-13).
