# GHK-Cu ve Menopoz — geniş audit ve humanize revizyonu

Tarih: 12 Ekim 2026. Dil: Türkçe. Yazar: Doç. Dr. Senai Aksoy (`category: 'scientific'`, klinisyen istisnası). Tür: clinical-guide.
Hedef: `src/pages/bilimsel-pencere/hucreler-ve-yaslanma/ghk-cu-menopoz-cilt.astro`
Durum: Yerel revizyon, commit/push/deploy yapılmadı. Yayın kapısı (kaynak) açık; aşağıdaki 'Açık kararlar' maddeleri Dr. Aksoy'a sorulmadan kapanmaz.

Preflight: `Stil rehberi okundu: Dr. Senai Aksoy Makale Stil Rehberi` (kanonik rehber, 870 satır, tamamı okundu).

## Onay tabanı

- Başlangıç ağacı temizdi (`main`, 9af6398b). Hedef dosya worktree `claude/peaceful-lederberg-408132` ile birebir aynıydı.
- Önceki sürüm: `onceki-surum.astro` (bu klasörde).
- Klinik katkı kaydı (`klinik-katkilar/`) bu makale için yok; SSS yanıtları model yazımıdır, Dr. Aksoy yanıtı değildir.

## Ölçümler (önce / sonra)

| Gösterge | Önce | Sonra | Eşik / not |
|---|---|---|---|
| H2 soru başlığı | 11 / 12 | 0 / 12 | ≤ 1 |
| "X değil, Y" antitezi | 5 | 1 | ≤ 2–3 |
| Ortalama cümle (kelime) | 14.0 | 14.6 | 10–16 uyumlu |
| ≤ 6 kelimelik vurgu cümlesi | 16 | 10 | ≥ 3–4 |
| Tereddüt kalıbı (çoğu zaman/genellikle/olabilir/-ebilir/bazen) | 32 | 32 | seyrek; bkz. açık karar 4 |
| Persona-anekdot uyumsuzluğu | 0 | 0 | klinik çerçeve "muayene odasında sorduğum" uyumlu |
| "beden konuşuyor" kişileştirme | 0 | 0 | |
| Kesin/garanti/mucize/en iyi | 0 | 0 | |
| "sen" hitabı | 0 | 0 | |
| lexicon:check (GHK) | uyarı yok | uyarı yok | repo genelinde 2 uyarı, bu makaleyle ilgisiz |
| `npm run build` | — | başarılı, 140 sayfa | |
| `articles:audit:sources` (GHK) | başarısız | başarısız | açık karar 1 |

Evidence etiketi: 24 (gövde 21). Spec "2–3, max 4–5" diyor; etiketler koruma bandında olduğu için dokunulmadı (açık karar 6).

## Yapılan humanize düzenlemeleri

1. **Başlıklar:** 11 soru biçimindeki H2 bildirimsel başlığa çevrildi. Anchor (`id`) değerleri korundu; TOC etiketleri güncellendi, `GHK-Cu Nedir?` gibi soru işaretli etiket kalmadı.
2. **Tekrar ve antitez:** "X değil, Y" kalıpları ve "… anlamına gelmez" inkâr çerçeveleri azaltıldı (örn. "Marka merakı değil; …", "ne kadar yeni değil, …", "yerine değil, …").
3. **Ledeler:** Onarım bölümünün açılışı kısa iki cümleye bölündü ("Biyolojik zemin gerçek; …"). Ledelerin tümü hâlâ 1–2 cümle.
4. **Teselli ve duygu:** Menopoz bölümüne bir doğrudan teselli cümlesi ve kaygıyı adlandıran bir cümle eklendi. Bu, rehberin Sıcaklık Katmanı kural 4 ve 7'sine karşılık geliyor; yeni tıbbi iddia içermiyor.
5. **Editör üslubu temizliği:** "…olarak sunulmamalıdır" (editöre talimat sızıntısı) okura doğrudan anlatıma çevrildi. "Raporun özellikle önemli bir uyarısı" (antecedent belirsiz) "Bu alanda özellikle önemli bir uyarı" oldu. "Biohacking" ve "problemli" sadeleştirildi; "longevity" kelimesi görünür metinde "uzun ömür" yapıldı (meta açıklama dahil; `keywords` dizisinde kaldı).
6. **Kapanış:** "Estranova'nın referans cümlesi" yerine klinisyenin kendi özeti.
7. **Tarih:** `modifiedDate: '12 Ekim 2026'` hem `buildArticleSchemas` çağrısına hem `ArticleAuthorBlock lastUpdated` alanına eklendi (içerik gerçekten değiştiği için, kural §4b).

## Tıbbi doğrulama

- **FDA 503A (ana düzeltme):** Birincil belge `fda.gov/media/94155` (güncelleme 14 Mayıs 2026) okundu. Doğrulanan: topikal GHK-Cu değerlendirme altındaki listede; enjeksiyon yolu bu listeden ayrı; FDA danışma komitesini **2027 Şubat sonundan önce** planlıyor. Metindeki "2026 yazında danışma komitesi" ifadesi GHK-Cu için yanlış olduğu için düzeltildi. Belge 14 Mayıs'ın sonrası için güncel değil; 12 Ekim itibarıyla yeni bir güncelleme olup olmadığı doğrulanamadı.
- **Doktora tezi iddiası:** Web taramasında bu iddiayı destekleyen kaynak bulunamadı. Cümle "bu sayıların hangi birincil çalışmaya dayandığı net biçimde gösterilemiyor" olarak değiştirildi. Dr. Aksoy bu tezi biliyorsa birincil referansıyla geri eklenebilir.
- **Plazma düzeyleri ve birim tutarsızlığı:** Sayılar ikincil derlemelerde tekrarlanıyor (2015 Pickart derlemesi, 2020 Dou ve ark.). 2015 derlemesindeki "10⁻⁷ M" etiketi 200 ng/mL ile uyuşmuyor (hesap: ≈0,6 µM). Metindeki "tutarsızlık görülüyor" ifadesi bununla uyumlu.
- **Dokunulmayanlar:** Evidence düzeyleri, RedFlagBox içeriği, FAQ verisi (`article-faqs.ts`), hero kaydı, Editör Notu metni, kaynak iddiaları.

## Açık kararlar (Dr. Aksoy / KC)

1. **Kaynak kapısı (yayın engeli):** `clinical-guide` türünde kaynak bölümü yok; `articles:audit:sources` bu makaleyi "doğrulanabilir kaynak izi yok" diye işaretliyor. Kaynak eklenmedi: doğrulanmamış referans yazılmaz. Sayfa yayında; kapı kapanmadan yeni revizyon yayına çıkmamalı. Aday başlangıç noktaları (okunmadı, doğrulanmadı): PMC4508379 ve PMC8789089 (GHK-Cu derlemeleri olarak görünüyor).
2. **SSS:** 5 soru model yazımı, Dr. Aksoy'un gerçek yanıtı değil. Başlık "Sıkça Sorulanlar" olarak bırakıldı (Dr. Aksoy adı konmadı). Stil rehberine göre `senai-aksoy` makalelerinde SSS'nin Dr. Aksoy'un gerçek yanıtlarıyla dönüştürülmesi gerekir; bu bir açık iş.
3. **Hakem/schema çelişkisi:** `buildArticleSchemas`, yazar Senai olduğunda `reviewedBy` olarak Dr. Alper Mumcu yazıyor (CLAUDE.md §6). Ancak görünür "Bilimsel Editör Notu" Senai imzalı ve Senai'nin kendi makalesine not yazdığı anlaşılıyor. Mumcu adına imza eklenmedi (inceleme uydurmamak için). Karar gerekli: Mumcu'nun gerçekten inceleyip incelemediği ve nota imza koyup koymayacağı.
4. **Hero kaydı:** `submenu-heroes.ts` içinde makale yoluna özgü bir hero girdisi var (`ghk-cu-menopoz-cilt-hero.jpg`); kural, makale yolu girdisi olmamasını ve üst hero'nun parent hub'dan alınmasını istiyor. Mevcut görünüm değişmediği için dokunulmadı (kural: "makale üst hero görseli değişmez").
5. **Byline görseli:** `ghk-cu-menopoz-cilt-hero.jpg` 3200×1791 (yatay); kural 1200×1500 dikey 4:5 byline kırpması istiyor. AI etiketi kontrolü geçti (`images:tag-ai --check`: 1 etiketli).
6. **Evidence yoğunluğu ve tür:** 24 etiket, spec'in 4–5 üst sınırının çok üstünde. Regülasyon cümlesindeki `Evidence level={4}` bir kanıt düzeyi değil, durum bilgisi; etiket türü yanlış olabilir. Koruma bandı olduğu için değiştirilmedi.
7. **Tereddüt yoğunluğu (32):** Çoğu kalıp kanıt sınırını taşıdığı için tek tek sadeleştirilmedi. Dr. Aksoy isterse ikinci tur yapılabilir.
8. **Editör Notu tekrarı:** Notun ilk paragrafı Kapanış'la örtüşüyor; kasıtlı bırakıldı.
9. **Arşiv:** `icerik/yayinlanmis-makaleler/2026-06/…ghk-cu-menopoz-cilt.md` dışa aktarımı 2 Ekim tarihli ve eski. `npm run articles:export` ile yenilenmeli (yayın onayından sonra).
10. **Article-log:** Bu makale için `article-log.md` kaydı yok; revizyon onaylandığında eklenmeli.

## Çıktılar

- `onceki-surum.astro` — öncesi.
- `fda-503a-metin.txt` — FDA belgesinin metin çıkarımı (doğrulama kaynağı).
- Bu kayıt dosyası.

Commit, push ve deploy yapılmadı.

## İkinci tur (12 Ekim 2026, aynı gün): kaynak, kırpma, kanıt kararı

1. **Kaynaklar (PubMed ile doğrulandı):** [1] Pickart 2012 (PMID 22666519, doi 10.1155/2012/324832); [2] Luansritisakul 2026 derlemesi (PMID 42635865, doi 10.1007/s11916-026-01542-z); [3] Miller 2006 randomize çalışma, 13 hasta, lazer sonrası GHK-Cu bakımı (PMID 16847171): objektif kırışıklık ve cilt kalitesinde gruplar arası fark yok, yalnızca memnuniyet anlamlı; [4] Hall & Phillips 2005 (PMID 16198774); [5] Affinito 1999 (PMID 10656502); [6] Sauerbronn 2000 randomize HRT çalışması, kolajen +%6,49 yalnızca hormon grubunda (PMID 10687834); [7] FDA 503A belgesi (14 Mayıs 2026). Makalede numaralı atıf ve "Kaynaklar" bölümü eklendi; kaynak kapısı (`articles:audit:sources`) GHK için artık geçiyor.
2. **Dr. Aksoy'a sorular:** Bkz. aşağıdaki liste. Cevaplar gelmeden SSS model yanıtı olarak kalır ve dönüştürülmez.
3. **Yazar Senai, hakem Mumcu:** Şema zaten `reviewedBy: Dr. Alper Mumcu` yazıyor. Görünür Editör Notu imzası ise Senai olarak kaldı; Mumcu incelemesi yapılmadan imza değiştirilmez (gerçek inceleme kaydı olmadan inceleme beyanı yayınlanmaz).
4. **Hero (AI üretimi):** Görsel IPTC `trainedAlgorithmicMedia` ile etiketli. Site genelindeki "Editoryal ilkeler" sayfası yapay zekâ kullanımını açıklıyor. Makale yoluna özgü hero map kaydı (`submenu-heroes.ts`) değiştirilmedi: görünür hero değişikliği için onay gerekir.
5. **Kırpma:** `ghk-cu-menopoz-cilt-byline.webp` (1200×1500, 4:5) oluşturuldu ve byline'da kullanıldı; `ghk-cu-menopoz-cilt-card.webp` (2400×1000, 2.4:1) oluşturuldu ve kart kaydına bağlandı. İkisi de `images:tag-ai` ile AI olarak etiketlendi (2/2 etiketli).
6. **Evidence kararı:** Gövde etiketleri 24'ten 3'e indi (özet 2, editör notu 1). Kalan 3 etiket kaynaklı iddialarda: insan verisi (level 2), menopoz kolajeni (level 4), enjeksiyon insan verisi (level 1). Regülasyon cümlesindeki "iyi kanıt" etiketi kaldırıldı (durum bilgisi kanıt değildir). Kaynaksız kalan cümleler etiketsiz bırakıldı ve aşağıda listelendi.
7. **Tereddüt kalıpları:** "çoğu zaman" 3→0, "genellikle" 4→2, "bazen" 4→1. Kipsel "-ebilir/-abilir" (yaklaşık 28) değiştirilmedi; bu kipler kanıt sınırını taşıyor. Toplam yaklaşık 39'dan 31'e indi.
8. **Editör notu tekrarı:** Notun ilk gövde paragrafı (Kapanış'la örtüşen özet) kaldırıldı; not kanıt sınırı, enjeksiyon, klinik pratik ve imza bölümlerini koruyor.

Soru başlığı 0; antitez "X değil, Y" 1; build geçti; lexicon GHK uyarısı yok.

### Kaynaksız kalan iddialar (Dr. Aksoy'a ya da kaynağa gerek)
- Kozmetik güvenlik: "Copper Tripeptide-1 ... genel olarak güvenli kabul edilmiştir" ve yan etki sıralaması. PubMed'de uygun kaynak bulunamadı.
- Bakır toksisitesi ve sistemik bakır yükü cümlesi.
- Enjeksiyon kalite riskleri (sterilite, endotoksin, ağır metal).
- Topikal geçiş (hidrofillik, yük) cümlesi.
- 2009 serum çalışması ve GHK-Cu içermediği iddiası.
- "8-12 hafta" süre tipik değeri.
- Yaşla azalma sayıları (200/80 ng/mL): kaynak zinciri metinde "izlenemiyor" diye yazılı; birincil kaynak yok.
- [1] ile "hastalık imzalarını ters çevirme" ifadesi: Pickart 2012 özetinde doğrudan geçmiyor; yalnızca gen ifadesi değişimi geçiyor.

### Dr. Aksoy'a sorular (gruplar halinde)
**Grup 1 — SSS (gerçek yanıtlar):**
1. Topikal GHK-Cu içeren bir serum isteyen 40 yaş üstü bir kadına genellikle ne dersiniz; hangi koşulda "makul" dersiniz?
2. Enjeksiyon sorulduğunda hangi üç şeyi sorarsınız (ürün standardı, izlem, ilaç etkileşimi)?
3. Hangi belirti ya da durumda GHK-Cu konusunu dermatoloji ya da kadın hastalıkları değerlendirmesine taşırsınız?

**Grup 2 — kaynak ve doğrulama:**
4. "Kozmetik güvenlik genel olarak güvenli kabul edilmiştir" cümlesinin dayanağı hangi değerlendirme (ör. CIR, SCCS, bir dergi makalesi)? Künye verebilir misiniz?
5. 200/80 ng/mL sayılarının kökeni bildiğiniz bir tez ya da çalışma mı? Varsa künyesi.
6. 2009 "yaşlanma karşıtı serum" çalışmasının künyesi nedir?

**Grup 3 — inceleme ve yayın:**
7. Dr. Alper Mumcu bu yazıyı inceledi mi? İnceleme tarihi, kapsamı ve Editör Notu imzası ne olacak?
8. Makaleyi yayında tutmak mı, yoksa kaynaklı revizyon tamamlanana kadar yayından çekmek mi istersiniz?

## Üçüncü tur: kaynaksız iddiaların durumu

Kaynak arandı (PubMed ve web). Bulunanlar eklendi, bulunamayanlar ya çıkarıldı ya da koşullu hale getirildi.

**Eklenen kaynaklar (toplam 10):**
- [7] Li 2015 (PMID 25690343): intakt insan cildinde GHK-Cu neredeyse hiç geçmedi; mikroiğne ön uygulaması geçişi artırdı. Topikal geçiş paragrafına bağlandı.
- [8] Hostynek 2010 (PMID 20703511): dermatomlu insan cildinde bakır tripeptid geçti ve dokuda tutuldu (in vitro). Aynı paragrafta.
- [9] CIR 2018 (Johnson ve ark., Int J Toxicol 37(3 suppl):90S-102S): PubMed'de bulunamadı; DOI doğrulanamadı; tam metin açılmadı. Kozmetik güvenlik cümlesine bağlandı. Kaynakça notunda belirtildi.
  - Dikkat: CIR tipik kullanım konsantrasyonunu "10 ppm altı" olarak veriyor; tedarikçi sayfalarında ise %0,05–1 aralığı geçiyor (ikincil kaynak). Ürün konsantrasyonu CIR'in incelediği aralıkta değilse güvenlik cümlesi geçerli olmayabilir. Bu fark Dr. Aksoy'a sorulmalı.
- Bakır oksidatif stres cümlesi [1] (Pickart 2012) ile bağlandı. Bu bağ gevşektir: Pickart özetinde oksidatif stres ve bakır dengesi birlikte "nedensel faktör" olarak anılıyor; "bakır fazlası oksidatif stres yaratır" olarak okunmamalı. Metin bu yönde yazıldı.

**Çıkarılan / değiştirilen:**
- 2009 serum çalışması paragrafı çıkarıldı (künye yok, kaynak bulunamadı). Soru 6 artık gerekli değil; künye gelirse geri eklenebilir.
- "Örneklemler 8-12 hafta" kaldırıldı. Yerine yalnızca bulunan çalışmanın süresi yazıldı: 12. hafta.
- Yaşla azalma (200/80 ng/mL) paragrafındaki [2] atfı kaldırıldı. Derleme bu sayılara değinmiyor; önceki turda yanlış atıf yapılmıştı. Sayıların kaynağı hâlâ bulunamadı.
- Enjeksiyon kalite cümlesi koşullu hale getirildi: "test edildiği gösterilemiyorsa riskin ölçüsü bilinmez". Gri kanal kaynaklı kalite iddiası PubMed'de kaynaklanamadı.

**Hâlâ kaynaksız (etiketsiz):**
- Sistemik bakır yükünün topikal kullanımda genellikle ana kaygı olmadığı.
- Bakır alerjisi, bakır metabolizması hastalığı ve hamilelikte dikkat notu.
- Olası yan etkilerin lokal reaksiyonlar olduğu (kızarıklık, batma, kaşıntı, hassasiyet).
- Topikal GHK-Cu'nun molekül ağırlığı ve hidrofillik cümlesi (kimyasal genel bilgi, kaynak yok).
- Yaşla azalma sayıları (200/80 ng/mL) ve "bağımsız insan kohortu yok" tespiti.

**Dr. Aksoy için güncel sorular:** 4 (CIR dayanağı ve konsantrasyon uyumu), 5 (200/80 kökeni), 7 (Mumcu incelemesi), 8 (yayında tutma / çekme). Soru 6 kapandı.

**Doğrulama:** atıf numaraları 1–10 kullanılıyor ve 10 kaynak tanımlı; gövde Evidence etiketi 3 (özet 2, editör notu 1); lexicon GHK uyarısı yok; kaynak kapısı (`articles:audit:sources`) GHK için geçiyor; build başarılı.
