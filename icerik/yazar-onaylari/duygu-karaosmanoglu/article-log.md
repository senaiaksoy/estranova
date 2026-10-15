# Dt. Duygu Karaosmanoğlu — Article Log

> **Article log framework:** [`docs/WRITER-DYNAMICS-FRAMEWORK.md`](../docs/WRITER-DYNAMICS-FRAMEWORK.md)
> **Profil:** `writers/duygu-karaosmanoglu/` — v3.0 bilimsel yazar (2026-05-02 lifestyle → bilimsel yazar geçişi).
> **Log başlangıcı:** 2026-04-29 (v2.0 lifestyle dönemi). v3.0 geçişiyle log temizlendi — eski v2.0 dönemi makalesi yok.

---

## v3.0 — 2026-05-02 başlangıç

> **Durum notu, 2026-05-04:** İlk makale (#1 dişeti çekilmesi) yazar onayı tamamlanana kadar yayından kaldırıldı. Site kaynak dosyası ve eski yayın arşivi kaydı `onay-bekleyen/2026-05-03_diseti-cekilmesi-postmenopoz/` paketinde tutuluyor.
>
> **Durum notu, 2026-05-11:** Yazı #2 (yüze yakışan estetik diş kararı) Dt. Duygu Karaosmanoğlu onayıyla yayında. Voice rewrite turu sonrası klinisyen birinci tekil sese geçti; M2 framework makalesi. Paket `onaylanan/2026-05-11_yuze-yakisan-estetik-dis-karari/`'ne taşındı, canlı rota açıldı, hub indeksi (`/hormonal-gecis/40-sonrasi` `articlePaths`) ile static-articles manifest güncellendi, `article-approvals.ts` kaydı eklendi. Byline 1200×1500 + card 1800×1000 görselleri devrede; submenuHeroByRoute korundu (parent hub fallback).
>
> **Durum notu, 2026-05-11 (akşam revizyon):** Yazı **geçici olarak canlıdan çekildi**. Yazardan iki revizyon paketi alındı (1: H2-2 dudak hattı bullet'ına yer çekimi + filtrum + üst/alt diş mekanizması; 2: H2-3 "biçim" → "şekil" + ardından "hizalama" → "diziliş" klinik terim revizyonu). Tüm revizyonlar `onaylanan/2026-05-11_yuze-yakisan-estetik-dis-karari/site-kaynak.astro` paketine işlendi. Canlı rota dosyası (`src/pages/...astro`) silindi, `static-articles.ts` + `sub-hubs.ts/articlePaths` + `article-approvals.ts` kayıtları kaldırıldı. **Kalanlar:** byline + card görselleri `public/images/library/editorial/`'de, `articleCardImageByRoute` + `articleFaqs` entry'leri ve onaylanan paket dokunulmadı — yazar bir sonraki düzenleme turunu bitirdiğinde tek hareketle (manifest + sub-hub + approval entry'leri geri eklenerek + paket site-kaynak.astro `src/pages/`'e kopyalanarak) yeniden yayına alınabilir. Tıbbi editör onay zinciri korunuyor.

## Schema

| # | Tarih | Konu | Kategori | Yazar v. | Aforizma | Manifesto | Anekdot | Açılış | Başlık tipi | Mevsim | Notlar |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 2026-05-03 | hormonal-gecis/40-sonrasi/diseti-cekilmesi-postmenopoz | hormon-ağız sağlığı (estetik diş hekimliği × postmenopoz) | v0.1 | — | — (manifesto havuzu lazy, profile.yaml templates: []) | T-VID didaktik tip ayrımı ("Genel olarak 2 tip çekilmeden bahsedebiliriz") + bilen-yapmayan ironisi yumuşatılmış ("çoğu kadının düşünmediği") + sayısal pratik direktif (sabah-akşam ikişer dakika, 6 ayda bir kontrol, yarım saat öncesi/sonrası asitli gıda) | "[VID-DK önem] Düzgün, pembe ve sağlıklı dişetleri güzel bir gülüş için çok önemlidir. Postmenopozda ise dişeti çekilmeleri çoğu kadının düşünmediği ama hormonal geçişle doğrudan bağı olan bir alanda biraz daha sık karşımıza çıkar." | "Yüze yakışanı arayan" kişiselleştirme + 3 doktor sorusu + "Doğal bir gülüş, ısrarla yapılmış olandan değil; doğru zamanda doğru ölçüde özen gösterilmiş olandan doğar" Duygu signature | — | **FRAMEWORK M1 / Duygu'nun ilk framework yayını** (eski v2.0 retrofit yayınlar log dışı — git history'de korunuyor). v3.2 profil **canlı testi**: VID dergisi yazılı korpus + YouTube Shorts sözlü korpus rafine ürünleri (4-parçalı VID çatı + bullet-yoğun yapı + bold kategori başlığı + sayısal pratik direktif + kontrollü espri yumuşatılmış + sözlü→yazılı köprü uygulandı). Tireli iki bölümlü başlık (kullanıcı önerisi). hormonal-gecis/40-sonrasi/index editorPick null → Duygu makalesi olarak güncellendi (mevcut tocArticles tarama-testleri + kemik-sağlığı korundu). 5 Evidence (postmenopozal periodontitis Düzey 4 + bağ doku/kollajen 3-4 + alveolar kemik osteoporoz korelasyonu 4 + HRT periodontal 2-3 + tükürük azalması). 5-katman BEN STANDART şablon (Senai 1. şahıs istisnası uygulanmaz — Sn. Karaosmanoğlu 3. şahıs format). 8 RedFlagBox (sigara çift risk, bisfosfonat osteonekroz, Sjögren, antidepresan kuru ağız). 5 FAQ (HRT etkisi / diş macunu / gece koruyucu / diş ipi kanama / periodontoloji aciliyet). **Çift Rol disiplini KORUNDU**: Senai 8 yazar gerçek jinekoloğu — Duygu kendi muayene bilgisi yok, başka yazarlara ima yok; Creadenta marka adı + Elif Özcan Dulundu ortağı referansı gövdede yok. Yasak kelimeler temiz (0 occurrence: Hollywood smile, NAMS/NICE/JAMA/FDA/WHO, Creadenta, kliniğimizde). RelatedReadings: kemik-sagligi-40-sonrasi + tarama-testleri-40-sonrasi + d-vitamini-rehberi. Hero parent fallback. Cooldown BOŞ (ilk framework makale; sonraki makaleden itibaren tam çalışır). |
| 2 | 2026-05-11 | hormonal-gecis/40-sonrasi/yuze-yakisan-estetik-dis-karari | estetik diş kararı (kişiselleştirme felsefesi × 40+ yüz) | v0.1 | — | M1 manifesto açılış lede (#2) + M3 H2-6 lede ("Doğal bir gülüş ısrarla yapılmış olandan değil; doğru zamanda doğru ölçüde müdahale edilmiş olandan doğar" — #3) + HARD imza kapanışta (#1). Lazy aktivasyon başlangıcı — havuz 3 manifesto canlı denendi; profile.yaml templates: [] korundu (kalıcı yazım editör onayı ile sonra) | T6 anonim klinik gözlem (1 yer: "polikliniğe gelen birçok kadında en sık duyulan cümlelerden biri şudur: 'Şunun gibi olsun istiyorum.'") — Duygu manifesto-aligned anekdot yönelimi (warm.md §4b) ile uyumlu; isim/yaş/yer detayı yok | "Estetik bir karar 'yapılabilir mi' değil 'yüze yakışıyor mu' sorusundan başlar; bu fark, kararın tonunu da hekiminizle görüşmenizin niteliğini de değiştirir." (Manifesto açılış — warm.md §4e aday kalıp #2) | "Yüze yakışanı arayan, doğal görünümü zorlamayan" (HARD imza) + 4 durak yol haritası + "Doğal görünümü zorlamamak; daha az değil, daha doğru bir tasarımdır" sentez cümlesi | — | **FRAMEWORK M2 / Duygu'nun ikinci framework makalesi.** Felsefe-merkezli yazı (M1 klinik-pratik VID 4-parçalı çatı ile zıt eksende; iki kanat ardışık gösterildi). 7 H2 cümleli, 3-bölüm yapısı (tablo→mekanizma→karar zinciri): H2-2 tablo + H2-3 mekanizma + H2-4 yelpaze + H2-5 karar zinciri. 3 Evidence (40 sonrası referans noktaları orta 3 + beyazlatma mekanizması iyi 4 + beklenti yönetimi memnuniyet sınırlı-orta 2-3 + BEN içinde hormon-yüz-dental bağı orta-iyi 3-4). 5-katman BEN STANDART (3. şahıs — "Sn. Karaosmanoğlu'nun yazısında..."). FAQ 4 soru (ideal yaş / arkadaş sonuç / kaç görüşme / hekim seçimi) — konuya özgü long-tail. **Çift Rol disiplini KORUNDU**: Senai jinekoloji ilişkisi (HRT/muayene odası bilgisi yok) + Elif Creadenta ortaklık (marka adı yok, "kliniğimizde" yok) + Çağrı Sade vücut/yüz estetiği çakışması yok (yüze yakışan dental ekseninde kaldı). Yasak kelimeler temiz: 0 occurrence (Hollywood smile, mükemmel gülüş, mucize, garanti, randevu al, Lumineers, Invisalign vb. marka — `npm run lexicon:check` OK). Hero parent fallback (`/hormonal-gecis/40-sonrasi`). Cooldown: M1'den bu yazıya açılış+kapanış+manifesto seçimleri farklı; aforizma/manifesto/mevsim/açılış cooldown filtreleri otomatik çalıştı (M1 anonim klinik gözlem + VID önem-yaygınlık açılışı; M2 manifesto-direkt açılış). Yayın kapısı: standart 5 dk form (Duygu istisna değil) — paket `2026-05-11_yuze-yakisan-estetik-dis-karari/` altında. |

---

## Cooldown takibi

| Kalıp türü | Havuz | Cooldown | Son kullanım |
|---|---|---|---|
| Açılış | 6 (v3.1'de 10) | 6 makale | M1: VID önem-yaygınlık (genel önem + yaygınlık çerçevesi) · M2: Manifesto-direkt soru ("yapılabilir mi" değil "yüze yakışıyor mu") |
| Kapanış | 6 (v3.1'de 10) | 4 makale | M1: 3 doktor sorusu + Duygu signature aforizma · M2: 4-durak yol haritası + HARD imza sentezi |
| Dengeleyici | 6 (v3.1'de 10) | 4 makale | M1: — · M2: H2-6 "Müdahale yapmamak da bir karardır" işlevsel dengeleyici |
| Bilmiyorum | 6 (v3.1'de 10) | 4 makale | — |
| Hekim çerçevesi | 6 (v3.1'de 10) | 4 makale | M1: bilen-yapmayan ironisi yumuşatılmış · M2: "yüzünüzün ölçüsü" hekim soru çerçevesi |
| Anekdot kapısı | 6 (v3.1'de 10) | 4 makale | M1: — · M2: T6 anonim klinik gözlem (polikliniğe gelen kadın cümlesi) |
| İmza kapanış | 6 | 4 makale | — |

---

## Versiyon geçişi notu (KRİTİK)

**v2.0 (lifestyle, 2026-04-29 → 2026-05-02):**
- Role: "Yaşam & Estetik Yazarı / Konuk Katkı"
- Kategori: lifestyle (sonradan scientific'e geçti)
- HRT deneyimi paylaşan yaşıt yazar
- Sosyal masa imzası (akşam yemeği anekdotu)
- Londra-İstanbul, kız-anne, boşanma eksenleri
- "Yaşıt tonuyla paylaşıyor" çerçevesi
- Diş hekimi otoritesi MUTLAK YASAK (klinisyen sesi yok)

**v3.0 (bilimsel yazar, 2026-05-02 — bugün):**
- Role: "Estetik Diş Hekimliği Bilimsel Yazarı"
- Kategori: scientific
- Klinik-pratik kanat (Elif akademik-lider yan eksen)
- Çift Rol active=true (Elif Creadenta + Senai HRT)
- Diş hekimi otoritesi YUMUŞAK kullanım (klinisyen mesafesi)
- "Yaşıt yazar persona'sı" MUTLAK YASAK
- Eski lifestyle eksenleri MUTLAK YASAK

## Aktivasyon notu (v3.1'e geçiş)

İlk makale üretilince:
1. AI agent kullanıcıya 4-6 manifesto + 10/10/6 varyant havuzu önerir.
2. Onay sonrası `writers/duygu-karaosmanoglu/hot.md §4` ve `warm.md §4e` güncellenir.
3. `profile.yaml.pattern_pool_sizes` 6 → 10.
4. `manifesto_templates.templates` doldurulur.
5. `writer_version` v3.0 → v3.1.
6. Bu log'un ilk satırı doldurulur.


## 14 Ekim 2026 — yüze yakışan estetik diş kararı, audit sonrası yerel revizyon

- Yetki: kullanıcı önce salt okunur audit, ardından “fix” istedi. Commit/push/deploy/yayın yetkisi yok.
- Taban: 9d9e025bf76012ff3b12fe7c72e3e36f38962e18; rota gövdesi, Mayıs onaylanan paketindeki site-kaynak.astro ile karşılaştırıldı. Sonraki farklar URL, açıklama, tür ve görsel stil alanlarındaydı.
- Eski onay arşivi korunmuştur. meta.json içindeki Analiz → Hazırlık → Prova revizyon notu, aynı paketin site-kaynak.astro ve makale-tam.html dosyalarındaki yedi bölümlü içerikle uyuşmuyor. Bu audit, tarif edilen revizyona yeni onay atfetmez.
- Yeni revizyonun durumu: YAZAR ONAYI BEKLİYOR; TIBBİ İNCELEME/ONAY BEKLİYOR. Önceki onay bu yeni gövde, SSS ve Bilimsel Editör Notu'nu kapsamaz. Yeni inceleme tarihi veya onay üretilmedi; 14 Ekim görünen son güncelleme tarihidir.
- Değişiklikler: tüm metinde tekrar/aforizma temizliği; kısa klinik yanıt; bonding ile kontur ayrımı; menopoz/osteoporoz/popülasyon sınırı; yüz şekli kuralının tercih olarak sınırlandırılması; beyazlatma yan etkilerinin açıklanması; kaynaksız 5 yıl ve tek/çok görüşme karşılaştırmasının çıkarılması. Şeffaf plaklarda mine azaltılması olasılığı ve bakım sınırı kaynaklandı.
- BEN: eski metin arşivde kalır. Kaynaksız memnuniyetsizlik karşılaştırması ve genel hormon-yüz sonucu çıkarıldı; antiresorptif ilaç uyarısı kaynakla sınırlandırıldı. Yeni BEN, Dr. Senai Aksoy'un tıbbi onayına sunulacak editoryal revizyondur; yeni özgün hekim sözü değildir.
- Byline korunmuştur: Dt. Duygu Karaosmanoğlu. Mevcut kişiselleştirme ve doku koruma yaklaşımı korundu; yeni hasta sözü, yaşanmış olay veya sıklık iddiası eklenmedi. Telefon/ayna sahnesi okura dönük genel düşünme örneği oldu. Mizah: H0; hassas risk bölümlerinde yok.
- SSS: aynı dört konu, tek görünür yüzey ve aynı faqItems üzerinden FAQPage. Dt. Duygu Karaosmanoğlu'nun yazısına Dr. Aksoy adına SSS eklenmedi. Yeni cevaplar onay bekleyen editoryal uyarlamadır.
- Kaynak eşlemesi: [1] PMID 37920517 osteoporozlu/osteoporozsuz postmenopoz karşılaştırması; [2] ADA whitening; [3] Cleveland Clinic dental bonding; [4] Cleveland Clinic enameloplasty; [5] ADA veneers; [6] PMID 33807504 laminat dayanıklılığı; [7] BOS clear aligners; [8] PMID 25411731 yüz/diş şekli; [9] ADA osteoporosis medications; [10] PMID 28967401 bruksizm ve seramik restorasyonlar. Kontrol tarihi: 14 Ekim 2026. Kanıt etiketleri kaynak türü ve belirsizlikle birlikte okunur; klinik tercihler bilimsel sonuç sayılmadı.
- Güncel docs/AUTHOR-APPROVAL-WORKFLOW.md v2.0 uyarınca yeni onay formu, paket veya e-posta üretilmedi. Eski paketler ve article-approvals.ts değiştirilmedi. Kaynak ve doğrulama sonuçları bu revizyonun teknik kanıtıdır, insan onayı değildir.

### Revizyon doğrulaması

- [11] PMID 26535953 (2016), yaş ve cinsiyete göre dudak uzunluğu/kesici diş görünürlüğü araştırması, dudak hattı açıklamasına eklendi. Bireysel değişim ve estetik hedef ayrımı korunur. Kaynaklar gövdede numaralı, sonda tıklanabilir; citation şeması aynı 11 URL'den üretilir.
- build:ci geçti: TypeScript, compliance (179 dosya), yayın bütünlüğü, şablon kontrolü, encoding/renk/lexicon/tarih kontrolleri, build (139 sayfa), SEO (160 sayfa). Hedefte lexicon uyarısı yok; farklı editoryal nottaki mevcut uyarı korunuyor.
- articles:audit:sources hedef yazı için temiz; depo geneli 7 başka rotadaki mevcut kaynak eksikleri nedeniyle başarısız. Kapsam dışı yazılar değiştirilmedi.
- Derlenmiş hedef: tek H1, 8 TOC/H2 eşleşmesi, 11 kaynak hedefi, FAQ 4/4 görünür metin–FAQPage eşitliği, 150 karakter meta açıklama. OG/Article görseli mevcut byline görseliyle hizalı; üst hero ve görsel dosyaları değişmedi.
- Chrome görsel QA: 1440×1000 masaüstü ve 390×844 mobil; iki görsel yüklü, mobil document genişliği 390 (yatay taşma yok), tüm numaralı kaynak bağlantıları çözülüyor. Uygulama içi tarayıcı bağlantısı teknik nedenle kullanılamadı.
- Yerel humanize araçları: editorial-check 0 aday. structure-check sayı/ifade sayımı tamamlandı; kaynak/kanıt bileşenleri metne çıkarılırken oluşan noktadan önce boşluk adayları gerçek HTML'de yok. rendered-check'in kaynak adı beklentisi Estranova numaralı atıf düzenine uygulanmadı; “birbirinin yerine geçmez” tıbbi disclaimer değildir, tek görünür sorumluluk reddi var.
- check-fidelity: değişiklik adayları elle incelendi. Eski 5 yıl bekleme, 5–10/10–15 yıl karar ufku ve 25/55/18 yaş normları çıkarıldı; yeni sayılar numaralı atıflardır. Laminatlarda on yıl ve üzeri takip kaynaklı ve garanti verilmeden korundu. Bonding/kontur, menopoz–osteoporoz kapsamı, şeffaf plaklarda mine azaltılması ve ilaç uyarısı olgusal düzeltmelerdir, salt gramer değişikliği değildir.

| Sonuç/ifade ailesi (özet + gövde + BEN; SSS hariç) | Önce | Sonra | Kalanın gerekçesi |
|---|---:|---:|---|
| Yüze uygunluk / kişiselleştirme | 17 | 6 | Özet, H2/TOC kimliği, ana değerlendirme ve kısa kapanış; yazar imzası |
| Geri dönüş / mine aşındırma | 11 | 6 | Bonding–kontur–laminat farkı, görüşme sorusu, güvenlik |
| Uzun dönem / sayısal karar ufku | 8 | 1 | Kaynaklı laminat takip süresi; bakım ihtiyacı başka sözcüklerle korunur |
| Bekleme / müdahale yapmama | 7 | 1 | Otomatik kalıp sayımı; işlem yapmama seçeneği özet ve ilgili bölümde ayrıca korunur |

Sayım sözcük eşleşmesidir, bütün anlamsal tekrarların sayısı değildir. Özet→gövde→SSS içinde gerekli güvenlik tekrarları ayrı okunan yüzeyleri tamamlar. Hastalarım ailesi 25→0; klinisyen ben yaklaşımı korunur. İncelemede kalan başlıklar eski SEO/anchor kimliğini korur.


## 15 Ekim 2026 — tekrar kontrol sonrası dört bulgunun düzeltmesi

- Kullanıcı “fix” yetkisiyle önceki turun dört bulgusu düzeltildi. Aynı izole çalışma kopyası kullanıldı; ana çalışma dizini ve diğer yazılar değiştirilmedi.
- Kaynak kayması: düzeltilmiş `.astro` dosyası sonradan 14 Ekim sürümüne (SHA-256 571abe17…) dönmüştü; nedeni kayıtlı değildir. Düzeltme aynı metinle yeniden uygulandı, son kaynak SHA-256 5a548970… ile eşleşir ve build yeniden alındı.
- PMID 28967401 tekrar doğrulandı: uyku bruksizmi–ön bölge seramik laminatlar alt grubundaki ilişki sinyali, tüm seramik restorasyonların genel analizindeki ilişki gösterilememesi ve GRADE toplam kanıt kesinliğinin çok düşük olması ayrı yazıldı. BEN etiketi 2/sınırlı yerine 1/zayıf olarak sınırlandırıldı; site etiketi ile çalışmanın kanıt kesinliği aynı ölçek diye sunulmadı.
- Osteoporoz/periodontal/peroksit/bruksizm/osteonekroz ifadeleri okur için açıklaştırıldı. Kaynaklar girişindeki yazar/editör talimatı çıkarıldı. SSS anahtarlarının satır birleşmesi giderildi; dört cevap ve FAQ kaynağı korunuyor.
- modifiedDate ve görünür lastUpdated gerçek içerik düzeltmesi nedeniyle 15 Ekim 2026 oldu. İlk yayın tarihi, yazar, reviewer, eski onay arşivi ve kaynak URL'leri korunuyor.
- Yazar onayı ve Dr. Senai Aksoy tıbbi onayı 15 Ekim 2026'da KC tarafından sohbette sözlü verildi (form, JSON yanıtı veya onay paketi yok). Kayıt `article-approvals.ts` içinde tutulur. Commit, push, deploy veya yayın yapılmadı; canlı yayın için ayrı yetki gerekir.
- Önceki 17→6 / 11→6 / 8→1 / 7→1 ifade ailesi sayımı bu dar düzeltmede değişmedi; bruksizm paragrafına eklenen cümleler alt grup, genel sonuç ve kanıt kesinliği ayrımlarını getiriyor.

- Bu turun doğrulaması: build:ci geçti (139 sayfa derlendi, 160 çıktı SEO kontrolünden geçti); git diff --check temiz. Derlenmiş HTML: modifiedDate 2026-10-15, tek H1, 11 kaynak/citation, 4/4 görünür SSS–FAQPage eşitliği. Dört hedef bulgu kaynak ve HTML'de yeniden kontrol edildi.
- Yerel araçlar: check-fidelity sayısal/atıf farkı bulmadı; olgusal anlam değişikliği (alt grup/genel sonuç/kanıt kesinliği) elle incelendi. editorial-check 0 aday. Structure ritmi 79 cümle/14.6 ortalama/7.1 sapmadan 82 cümle/14.5 ortalama/7.2 sapmaya geldi; ek cümleler farklı araştırma sonuçlarını ayırıyor. rendered-check'in iki aday ailesi önceki turdaki yanlış pozitifler: seçeneklerin birbirinin yerine geçmemesi disclaimer sayılmadı; numaralı kaynak atıfları kurumsal ad eşleştirmesiyle ölçülmedi.

## 15 Ekim 2026 — sözlü onay sonrası kaynak denetimi ve geniş audit/humanize (yeniden onay bekliyor)

- Onay sonrası kaynak denetimi (önceki oturum, devir notundan): "aşınma ve kapanış" maddesi ve yanlış [10] atfı kaldırıldı; kaynak 1 etiketi "dişeti hastalığı", kaynak 7 Delphi uzlaşı çalışması (Prog Orthod 2025), kaynak 8 etiketi "iki boyutlu radyografi ve model çalışması" oldu (SHA-256 c746cda5…).
- Kaynak doğrulaması bu turda: [1] PMID 37920517 (Qi ve ark., Heliyon 2023; 28 gözlemsel çalışma) — osteoporoz grubunda CAL, cep derinliği, çekilme, kanama ve OHI-S daha yüksek; alveoler kemik yüksekliğinde anlamlı fark yok. Gövde bu ayrıma göre düzeltildi ("Dişeti ve kemik" → "Dişeti"). [2] ADA Whitening ve [5] MouthHealthy Veneers sayfaları açılıp iddialarla eşleştirildi. [6] PMID 33807504: on yıllık kümülatif sağkalım %95,5, en sık sorun kırılma, sonra yerinden çıkma — gövdeye sayısız biçimde eklendi. [8] Furtado ve ark., Indian J Dent Res 2014;25(2):178-183, 50 kişi, yüz ölçüleri kesici biçimini güvenilir göstermiyor. [11] PMID 26535953: yaşla üst dudak uzunluğu artar, üst kesici görünürlüğü azalır. [7] Delphi çalışması endikasyon/sınırları destekliyor; plak kullanımı, pekiştirme ve mine azaltma cümlelerini desteklemiyor → [7] yalnızca uygunluk cümlesine taşındı, diğer iki cümle KAYNAKSIZ (KC kararı bekliyor).
- Humanize: "önce neyi değiştirmek istediğinizi tarif edin" sonucu 6 yerden 3'e (bölüm 1, bölüm 4 lede, SSS 2) indi; "ne kadar mine kaldırılacağı belirsiz kalmamalı" yinelemesi kaldırıldı; inkâr çerçevesi 3→1; birinci tekil "ben/benim yaklaşımım" 7→4 (onaylı cümlelerden; yeni klinik deneyim eklenmedi). Eklenenler: tek kontrollü espri + geri çağırma (fotoğrafın "prova geçmişi", H1 düzeyi), duygu beat'i ("utanmanız gerekmez"), teselli anı ("İçiniz rahat olsun"). H2 değişiklikleri (id'ler korundu): "İlk Görüşmemizde Sormanızı Önerdiğim" → "İlk Görüşmede Sorabileceğiniz" (okuru Duygu'nun hastası gibi konumlamaması için); "Bir Karar Değil, Bir Yol" → "Kendi Hızınızda" (makale başlığıyla çelişen antitez). Özetteki "Benim bu yazıda önemsediğim" meta cümlesi çıkarıldı. SSS ve Bilimsel Editör Notu değiştirilmedi.
- Kalıp seçim kaydı: açılış = sahne (telefon fotoğrafı + ayna); espri = gözlemci, 1 adet + 1 geri çağırma; imza kapanış cümlesi yok; "yüze yakışanı arayan" imzası bölüm 1 ve 7'de.
- Doğrulama: build:ci geçti (139 sayfa, 160 SEO); compliance 179 dosya; yayın bütünlüğü temiz; check-article-dates 67 tutarlı; lexicon hedefte uyarısız; git diff --check temiz. Derlenmiş HTML: tek H1, 11 kaynak, 4 SSS/FAQPage, dateModified 2026-10-15. structure-check: 3/9 kısa kapanış (farklı işlevli, kaldı); ritim 12.3/5.6 → 12.0/6.0. rendered-check: tekrar eden sorumluluk reddi ve "Yazan" satırı bulguları şablon kaynaklı/yanlış pozitif.
- Son kaynak SHA-256: bce2b304…. Bu değişiklikler 15 Ekim sözlü onayından SONRA yapıldı; KC yeniden sözlü onayı gelene kadar yayına alınmaz. Commit/push/deploy yapılmadı.

## 15 Ekim 2026 — ikinci audit/humanize turu: 8 bulgunun düzeltmesi (yeniden onay bekliyor)

- Salt okunur ikinci audit'in 1-8 numaralı bulguları KC'nin "Bulguları düzelt" yetkisiyle uygulandı. Kaynaksız iki şeffaf plak cümlesi (plak kullanımı/pekiştirme, mine azaltma) KC talimatıyla değiştirilmedi; açık iş olarak kalıyor.
- Kalıp göçü (önceki turun ürettiği): "bu yüzden" 4→0, "yine de" 4→1 (bonding'deki anlamlı kullanım kaldı). Bölüm 6'daki işlem yapmama tekrarı birleştirildi ("bu seçeneği de masada tutarım"); aile 4→3 (özet, bölüm 6 lede, özet son cümlesi).
- Dil: bölüm 3 lede "birlikte bakıldığında" → "birlikte ele alındığında"; laminat "Sizdeki ömrü" → "Sizdeki laminatın ne kadar dayanacağı"; dişeti maddesi cep derinliği/kanama ifadesi düzeltildi, ağız hijyeni farkının yönü (osteoporozlu grupta daha kötü OHI-S) yazıldı.
- Kaynak sadakati: [8] tek çalışma olduğu için "çalışmalar var" → "Elli kişilik bir çalışmada… bulunmamıştır"; [11] tek kesitsel çalışma için Evidence 3 → 2.
- Doğrulama: build:ci geçti (139 sayfa, 160 SEO); compliance 179 dosya; yayın bütünlüğü temiz; tarih kontrolü 67 tutarlı; lexicon hedefte uyarısız; git diff --check temiz. editorial-check 0 aday; structure-check 3/9 kısa kapanış (farklı işlevli, kaldı), ritim 11.9/6.0. Derlenmiş HTML: tek H1, 11 kaynak, 4 SSS/FAQPage, dateModified 2026-10-15. rendered-check: repeated-disclaimer şablon/yanlış pozitif; uncited-source Estranova numaralı atıf düzeninde geçersiz.
- Son kaynak SHA-256: 086af115…. Bu değişiklikler 15 Ekim sözlü onayından SONRA yapıldı; KC yeniden sözlü onayı gelene kadar yayına alınmaz. Commit/push/deploy yapılmadı.

## 15 Ekim 2026 — yeniden sözlü onay

- KC (Doç. Dr. Senai Aksoy), son metne (kaynak SHA-256 086af115…) yazar onayını ve tıbbi onayı sohbette sözlü verdi. Form, JSON yanıtı veya onay paketi yok. Onaydan önce dosya SHA-256'sı yeniden doğrulandı.
- Onay; sözlü onay sonrası kaynak denetimini, geniş audit/humanize revizyonunu ve ikinci audit'in 8 düzeltmesini kapsar. Kaynaksız iki şeffaf plak cümlesi metinde olduğu gibi onaylandı.
- `article-approvals.ts` içindeki "BEKLEYEN YENİDEN ONAY" notu kaldırıldı; approvedAt 2026-10-15 olarak kaldı.
- Commit, push, deploy ve Chrome görsel kontrolü yapılmadı; canlı yayın için ayrı yetki gerekir.

## 15 Ekim 2026 — açık kalan iki kaynak maddesi (ek revizyon)

- KC'nin "yap" talimatıyla şeffaf plak bölümündeki kaynaksız "plakların düzenli takılması… sonucun korunması" cümlesi çıkarıldı. Kaynak aramasında (PubMed ve web) plak takma süresi/nüks için uygun kaynak bulunamadı; kaynak 7 yalnızca endikasyon ve sınırları kapsar.
- "Dişler arasında yer açmak için mineden az miktarda alınabilir" cümlesi, Dahhas ve ark. (Cureus 2024; anlatısal derleme; [PMC11032144](https://pmc.ncbi.nlm.nih.gov/articles/PMC11032144/)) ile desteklendi: IPR geri dönüşsüz bir doku değişikliği ve dikkatli planlama gerektirir. Kaynak 12 olarak eklendi; atıf bölüme bitişik.
- Doğrulama: derlenmiş sayfada 12 kaynak, 4 SSS/FAQPage, tek H1. Kalan rendered-check bulgusu (uncited-source) Estranova numaralı atıf düzeninde geçersiz; repeated-disclaimer şablon kaynaklı.
- Son kaynak SHA-256: 14fcfd6b…. Yayın için commit, push ve canlı doğrulama ayrıca yapılır.
