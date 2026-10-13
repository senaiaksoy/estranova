# Audit + humanize revizyonu — 13 Ekim 2026

> **Son durum — 13 Ekim 2026:** Yazar ve tıbbi onay `onay-kaydi.md` içinde kayıtlıdır. Revizyon yerel site rotasına aktarılmıştır; aşağıdaki "onay bekliyor / taşınmadı" ifadeleri ilk audit aşamasının tarihsel kaydıdır. Aynı gün kullanıcı talebiyle teknik ve kaynak-künye düzeltmeleri uygulanmıştır. İlk onaylı metin `onayli-surum-duzeltme-oncesi.astro` içinde korunur; `site-kaynak.astro` güncel yerel rota ile aynıdır. Commit, push veya deploy yapılmamıştır.

- Makale: `/beden-yakinlik/menopoz-sonrasi-kilo-vucut-sekillendirme/` — "Menopoz Sonrası Vücut Şekillendirme: Liposuction Size Uygun mu?"
- Yazar: Op. Dr. Çağrı Sade (klinisyen istisnası). Tıbbi denetçi: Doç. Dr. Senai Aksoy.
- Önceki onaylı sürüm: `onceki-surum.astro` (canlı rotanın birebir kopyası, 21 Eylül 2026 onayı).
- Yeni sürüm: `site-kaynak.astro` (bu klasörde; canlı rotaya taşınmadı).
- **Durum: onay bekliyor.** Canlı rota (`src/pages/`), manifest, RSS, kart ve görseller değiştirilmedi. Commit/push/deploy yapılmadı. Yazar formu ("ONAYLIYORUM") ve tıbbi onay gelmeden yeni sürüm yayına alınmaz.

## Denetim bulguları

### Kritik: kaynak ve iddia sorunları

1. **Kaynak 5 yanlış atıf.** Makale PMID 37990743'ü "kozmetik uygulamalar ve subkutan yağın cerrahi olarak çıkarılmasının metabolik sınırları" diye tarif ediyordu. PubMed kaydının başlığı: *Obesity, diabetes mellitus, and cardiometabolic risk: An Obesity Medicine Association (OMA) Clinical Practice Statement (CPS) 2023* — liposuction'a ait bir çalışma değil, obezite ve T2DM derlemesi. Yani atıf, makalenin iddiasını liposuction için destekleyemiyordu. [DOI](https://doi.org/10.1016/j.obpill.2023.100056)
2. **"Liposuction ... insülin direncini ... tedavi etmez" iddiası kanıtla çelişiyordu.** 2022 meta-analizi (24 çalışma) liposuction sonrası glukoz ve insülinde istatistiksel olarak anlamlı düşüş bildiriyor, 2002'de yapılan küçük bir çalışma insülin duyarlılığında iyileşme göstermişti. Buna karşılık uzun dönem izlemde (7 kadın, 10–208 hafta) metabolik risk faktörleri değişmemişti. Sonuç: kesin "tedavi etmez" yerine "kısa süreli küçük iyileşmeler bildirilmiş, tutarlı değil, uzun dönemde fayda gösterilmemiş" ifadesi kullanıldı. [Meta-analiz DOI](https://doi.org/10.1097/PRS.0000000000009913), [uzun dönem çalışma DOI](https://doi.org/10.1038/oby.2008.418), [2002 çalışma DOI](https://doi.org/10.1055/s-2002-33603). **Tıbbi onay gerekir.**
3. **Kaynak 6 (PMID 33085282) doğrulanamadı.** PubMed metadata sorgusu bu PMID için kayıt döndürmedi, ancak başlık araması (Bartow/Szymanski/Raggio, StatPearls) aynı PMID'i listeledi. Metin değiştirilmedi. **Tıbbi onay öncesi `pubmed.ncbi.nlm.nih.gov/33085282` sayfası açılıp kaydın doğrulanması gerekir.**
4. **ASPS (yeni kaynak 11) ve The Menopause Society PDF (yeni kaynak 5) bağlantıları bu oturumda açılarak doğrulanmadı.** PubMed dışı kaynaklar.

### Biçim ve tutarlılık

5. **Atıf sırası bozuktu:** [5] metinde [4]'ten önce geliyordu. Yeniden numaralandırıldı; sıra artık ilk geçişe göre 1–11.
6. **İçindekiler etiketleri H2 başlıklarıyla eşleşmiyordu** (6 etiket). İçindekiler başlıklarla birebir eşitlendi. "Sık Sorulanlar" etiketi gerçek SSS başlığına (“Bu Yazıdan Sonra Akla Gelen Sorular”) göre düzeltildi.
7. **Üç H2 olumsuz kalıpla açılıyordu** ("...Kilo Verme Yöntemi Değildir", "...Aynı Sorun Değildir", "...İyileşme Takvimi Değildir"). Olumlu başlıklara çevrildi.
8. **Editör notunda yazara hitap eden cümle sızmıştı:** "…olarak sunulmamalıdır" (editöre yönelik talimat). Okura dönük cümleye çevrildi.
9. **"Bu cümle kısa ve nettir."** gibi meta ifadeler kaldırıldı.
10. **Kaynak 2 (Davis, derleme) ve yeni Kaynak 4 (Sharma, derleme)** kanıt düzeyi 4'ten 3'e indirildi (anlatı derleme). **Tıbbi onay gerekir.**
11. **"En sık sorulan dört nokta"** ifadesi arama verisine dayanmıyordu; "akla gelen dört soru" yapıldı. (Estranova'da "en sık" nitelemesi yalnızca doğrulanmış veriyle kullanılır.)
12. **Aljerian derlemesindeki komplikasyon listesi** özetle uyumlu hâle getirildi; genel komplikasyon oranı (yaklaşık %12, 60 çalışma, 21.776 hasta) eklendi. "His değişikliği" çıkarıldı, çünkü özette yer almıyor.

### Ritim, ses ve tekrar

13. **"X değil, Y" ve inkâr kalıpları:** 19 → 5 (özetteki iki kalıp, FAQ'taki iki kalıp, bir inkâr cümlesi).
14. **"Biz önce ..." kalıbı:** 5 → 0. Yerine doğrudan "Önce ... gerekir" ve "Önce ... konuşuruz" dönüşleri.
15. **Yaşıt / okur bağı:** "Neden değişir?" bölümünde "siz/biz" bağı yoktu; "Sizi yanıltabilir" ve "Birçoğumuz bunu biliriz" bağları eklendi.
16. **Somut ayrıntı:** Bölümlerin çoğunda duyusal sahne yoktu. "Aynada karın tek bir yüzey gibi görünür" eklendi; mevcut bel/tartı sahnesi korundu.
17. **Mekanik soru-cevap:** İtalik soru sayısı 3–4'ten 2'ye indi ("Karın çevrem arttı..." ve "Hangi teknik daha iyi?").
18. **Hafif tekrar:** Summary, H2 ve editör notundaki "liposuction kilo vermez" mesajı korundu (özet ve editör notu gerekli); gövdedeki tekrar azaltıldı.

## Dokunulmayanlar

- Hero (`submenuHeroByRoute` parent hub), byline görseli ve kart görseli.
- Başlık (`articleTitle`), `seoTitle`, `description`, tarihler (`publishedDate` 21 Eylül 2026).
- Bilimsel Editör Notu yapısı, ArticleDisclaimer, RelatedReadings, ArticleFAQ soru–cevap içeriği (yalnızca giriş cümlesi değişti).
- H2 `id`'leri (iç bağlantılar için).
- Evidence bileşenlerinin büyük kısmı (yalnızca Davis ve Sharma düşürüldü).
- Yazarın mevcut ses cümleleri: "Bana gelen kadınlarda önce üç soruyu birlikte ayırırız", "Benim için asıl soru...", "Bence soru biraz erken geliyor".

## Yeni eklenen cümleler (yazar onayı gerekir)

Bu cümleler yeni birinci tekil deneyim iddiası içermiyor; yine de Çağrı Sade'nin onayını almak için listeliyorum:

1. "Şaşırmanız çok doğal. Sayı sabit kalırken bel çevresi değişebilir; iki gözlem birlikte doğrudur."
2. "Birçoğumuz bunu biliriz; zor olan çoğu zaman uygulamaktır." (Orta yaş beslenme/hareket paragrafı)
3. "İçiniz rahat olsun diye söylüyorum: önce metabolik değerlendirmeyi istemek, estetik kaygınızı ciddiye almamak anlamına gelmez."
4. "Aynada karın tek bir yüzey gibi görünür."
5. "Bu etkenler çoğu kez üst üste biner; bu yüzden tek bir nedene bağlamak sizi yanıltabilir."

## Yayın öncesi işler (onaydan sonra)

- `modifiedDate: '13 Ekim 2026'` `site-kaynak.astro` içinde `buildArticleSchemas`'a geçildi; yayın anında bu tarih geçerli olur (`src/utils/article-schema.ts`, `modifiedDate` alanı).
- Onay gelince `site-kaynak.astro` → `src/pages/beden-yakinlik/menopoz-sonrasi-kilo-vucut-sekillendirme.astro` olarak taşınır; `onceki-surum.astro` arşiv olarak kalır.
- Eski `onaylanan/2026-09-21_...` paketi tarihsel kayıt olarak korunur.
- `article-log.md` (Çağrı Sade) bu revizyon için yeni satırla güncellenir.

## Kapsam notu (karar kullanıcıya ait)

`writers/cagri-sade/profile.yaml` içinde "Vücut estetiği geneli (BBL / liposuction / karın germe) — Estranova menopoz / 40+ ekseni dışında" kaydı var; "Postmenopoz vücut kompozisyon değişimi" konusunda ise Berna Aksoy'un alanı olarak işaretli. Bu makale menopoz çerçevesini kullanıyor, ancak konusu liposuction karar çerçevesi. Profil sınırıyla çelişip çelişmediğine karar vermek sizin ve Çağrı Sade'nin işi; bu revizyon konu değiştirmez.

## Onay için kısa form (≤5 dk)

**Çağrı Sade (yazar):**
- [ ] Yukarıdaki 5 yeni cümleyi onaylıyorum / düzeltme: ____
- [ ] Kaynak 4–7 ve "tedavi etmez" ifadesinin yeni hâli, klinik olarak doğru ifade ediyor.

**Doç. Dr. Senai Aksoy (tıbbi):**
- [ ] PMID 33085282 kaydı doğrulandı.
- [ ] Eski kaynak 5 (PubMed 37990743) yerine geçen kaynaklar (yeni 4, 6, 7) ve iddianın yeni hâli onaylandı.
- [ ] Evidence düzeyleri (Davis, Sharma: 3) onaylandı.
- [ ] ASPS ve Menopause Society bağlantıları açıldı.

Onay tarihi ve onay notu bu klasöre `onay-kaydi.md` olarak eklenecek; onay gelmeden canlı rota değişmez.
