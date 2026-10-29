# MOTS-c — geniş audit, humanize ve yerel düzeltme

> **Güncelleme (29 Ekim 2026, güncel main üzerine taşıma):** Bu rapor PR 97 öncesi tabandan yazıldı. Rapordaki NCT07505745 satırları (tarihler, 120 kişi, 16 hafta, dışlama ölçütleri) geçersizdir: kaydı sunan kuruluşun kayıtlarından biri kendi özetinde çalışmasını kurgusal örnek olarak tanımlıyor ve kuruluş bağımsız doğrulanamıyor; PR 97 bu kaydı yazılardan çıkardı. Taşımada o kayda dayanan cümleler PR 97 sürümüne çevrildi. CB4211 sayıları (23 randomize, 20 değerlendirme, 11/9), FAERS cümlesi, kanser ve ölçüm farkı düzeltmeleri, mobil tablolar ve dateModified korundu. Rapordaki p = 0,23 değeri tam metinde doğrulanamadı (yalnızca 31,8 aya kadar p = 0,05 görüldü); görsel kaynağı kontrol edilmeli.


Tarih: 29 Ekim 2026. Hedef: `/zamansiz-yasam/deneysel/mots-c-peptidi-kanit-ve-risk/`.
Durum: bağımsız düzeltmeler uygulandı ve yerel QA geçti. Korunan hekim notunda bir ifade açık; yeni sürümün yazar ve bağımsız tıbbi onayı alınmadı. Kullanıcı bu çalışmanın ardından “commit push” talimatı verdi; bu talimat klinik onay veya üretime yayın onayı olarak kaydedilmedi. Değişiklikler ayrı çalışma dalında commit/push için hazırlandı; deploy yapılmadı.

## Başlangıç ve kapsam

- Ana çalışma dizini başka BPC-157/TB-500 değişiklikleri ve izlenmeyen taslaklar içeriyordu. Hiçbiri değiştirilmedi.
- Güncel kaynak için `origin/main` yenilendi; `d3cebb876cd13646ecd006a06876ec428fe2a6a4` tabanından uygulamaya bağlı ayrı worktree açıldı: `C:\Users\KC3\.codex\worktrees\mots-c-audit-fix\Estranova`.
- Hedef makalenin başlangıç commiti `aa340e51`. `article-approvals.ts` kaydı ve Senai article-log 305–306. satırları: 28 Ekim 2026 KC yazar ve Mumcu tıbbi onayı, beş gerçek SSS yanıtı, özel görseller. Bunlar önceki sürümün kayıtlarıdır; bu revizyonun onayı değildir.
- Canlı sayfa HTTP 200; HTML ayrıca kaydedildi. Canlıda tek H1, 28 kaynak, beş SSS, doğru canonical, index/follow vardı. Yayın ve değişiklik tarihi 28 Ekim 2026 idi.
- Kanonik Senai-Wiki stil rehberi, senai-humanize, Türkçe/anlam/yerel kontrol başvuruları, CLAUDE.md, yazar profili/hot, ARTICLE-TEMPLATES ve sözlü onay iş akışı okundu. Yeni araştırma konusu veya başka makale açılmadı.
- Tür/byline korundu: `clinical-guide`, `senai-aksoy`, bağımsız inceleyen Dr. Alper Mumcu. Deneysel yerleşimi uygun: okurun ana sorusu kullanım kararı. Üst hero, byline ve kart görsellerinin dosyaları değiştirilmedi. Yazar profiline, onay kayıtlarına, ortak bileşenlere ve ana checkout'taki günlüğe yazılmadı.

## Bulgular ve yapılan düzeltmeler

Satırlar revize `.astro` dosyasına aittir.

| Öncelik / konum | Bulgu | Uygulama ve kanıt |
|---|---|---|
| P1 — 151, 330, 463 | “İlk kontrollü çalışma 2027'de bitecek” kesinliği; birincil bitiş ile tüm çalışma bitişi karışıyordu. | Kayıt NCT07505745 API'den okundu: tahmini birincil bitiş 14 Şubat 2027, tüm çalışma bitişi 17 Mayıs 2028; sonuç yok. 120 kişi hedef örneklem; 12 haftalık tedavi + dört haftalık güvenlik takibi. Kayıt 1 Nisan 2026'dan beri güncellenmemiş; “recruiting” yalnızca kaydın gösterdiği durum olarak aktarıldı. Çok merkezli tasarım / tek listelenen merkez çelişkisi gizlenmedi. |
| P1 — 196, 210, 266, 340 | Fare ömründe “sınırda eğilim” genel eğrinin sonucunu saklıyordu; “yalnızca belli yaşa kadar izlendi” yanlış çağrışım yaratıyordu. | Reynolds 2021 tam metin, Fig. 4m: tüm eğri p=0,23; 31,8 aya kadar analiz p=0,05. %6,4 / %7,0 eğilimleri korunup anlamlı genel uzama olmadığı açıklandı. Erkek fare sınırı korundu. |
| P2 — 232 | 14 ve 300–500 pg/mL karşılaştırmasında her fark “otuz kattan büyük” değildi; farklı popülasyonlardan yöntem geçersizliği çıkarılıyordu. | Yaklaşık 20–40 kat olarak düzeltildi; kişi/ölçüm koşulu farkı belirtildi. Kaynak 10: 14,33 ve 13,67; kaynak 11: 319,31 / 440,32 / 507,51 pg/mL grup ortalamaları. Tek başına assay hatası kanıtı sayılmadı. |
| P1 — 240–244 | CB4211'in 20 kişi olarak anlatılması randomize edilenlerle son değerlendirme grubunu ayırmıyordu. | Birincil şirket sunumu: 23 randomize, üç ayrılma, 20 son değerlendirme; 11 aktif / 9 plasebo. Kaynak 30 eklendi. CB4211 ile MOTS-c ayrımı, dört hafta, güvenlik birincil amacı, keşif sonlanımları ve şirket kaynağı sınırı korundu. |
| P2 — 240 | “Enzimler ve şeker biraz düştü” hangi karşılaştırma ve kimin bildirimi olduğunu açık bırakıyordu. | Plaseboya göre şirketin bildirdiği fark olarak yazıldı; Evidence 1 korundu. Tam hakemli sonuç yayını bulunamadı; ClinicalTrials.gov hasResults=false. |
| P1 — 360 | “Kimse sistemli olarak kaydetmiyor” doğrulanmamış evrensel yargıydı. | Temmuz 2026 FDA sunumundaki FAERS araması ve eksik/gönüllü bildirim sınırlılığına bağlandı. Kaynak 29 eklendi. Bildirim yokluğu güvenlik kanıtı yapılmadı. |
| P1 — 372 | Kanser kanıtı “yalnızca hücre ve küçük gözlemsel çalışmalar” diye eksik sınıflanıyordu; kaynak 24 tümörlü fare içeriyor. | Hücre + hayvan + gözlemsel insan ayrımı yapıldı. Kaynak 15'teki yükseklik akciğer kanserine daraltıldı; kanser veya nüks riskine ilişkin klinik güvenlik çıkarımı yapılmadı. |
| P1 — 379–387 | Başlangıç tahlilleri / tek değişiklik / bırakma ölçütü listesi, deneysel enjeksiyona güvenli başlama protokolü gibi okunabiliyordu. | Sağlık öyküsü, kullanılan ürün ve uygulama bilgisi, gelişen belirtiler ve değerlendirme sorularına çevrildi. Öneriler korunan gerçek 3. ve 5. hekim yanıtlarıyla karşılaştırıldı; yeni ilaç/doz/tetkik paketi eklenmedi. Normal testin güvenlik güvencesi olmadığı açıklandı. |
| P2 — 397 | “İlk yumurtalık laboratuvar verisi” benzersizlik iddiası doğrulanmıyordu. | “2026 tarihli bir çalışma” olarak daraltıldı. HGL5 insan hücre modeli ve yaşlı fare yumurtaları, laboratuvar sınırı, genç seviyeye erişmeme ve döllenme/embriyo/canlı doğum ölçülmemesi korundu. |
| P2 — 430, 440 | DPP yüzdelerinin göreli fark ve plasebo karşılaştırması olduğu açık değildi; yorgunluk oranları menopoz nüfusuna ait sanılabilirdi. | DPP: 3.234, %68 kadın, ortalama 2,8 yıl, plaseboya göre göreli %58/%31. Yorgunluk derlemesi 2016 ve genel birinci basamak popülasyonu olarak açıklandı; %4,3/%2,8/%18,5 korundu. |
| P2 — 453, 493 | Egzersizin MOTS-c'yi yükseltmenin “bilinen tek yolu” olduğu iddiası kaynak kapsamını aşıyordu. | Vücudun doğal artışı ile tedavi sonucunu ayıran paragraf yazıldı. Kapanışta aynı mutlak yargı yinelenmedi; egzersizi zorlaştıran nedenlere dönüldü. |
| P2 — 471 | Kurul oyu kaynak 16'ya bağlanıyordu; bu güvenlik sayfası oy sonucu kaynağı değil. Ayrıca genel peptid yazısıyla uzun tekrar vardı. | Düzenleyici paragraf birincil kaynaklarla doğrulanabilen güvenlik tablosu, kurul gündemi ve ruhsat/hazırlama ayrımına kısaltıldı; kurul oyuna dair zayıf atıf kaldırıldı, ayrıntı bağlantısı korundu. |
| P2 — giriş ve lede'ler | “Kadınların çoğu tembellikten değil…”, “o sesi tanıyorum”, “bu bölüm yazıyı güncelleme gerekçemiz”, “kanıt etiketi koymuyorum” gibi genelleme/üretim anlatısı; birbirine benzeyen kısa hüküm kapanışları. | Giriş olası gündelik koşullarla kuruldu, soyut tabela cümleleri temizlendi. Spor ayakkabısı motifi ve gerçek hekim sesi korundu; yeni klinik anekdot üretilmedi. Başlıklar ve anchor'lar korundu. |
| P2 — metadata | Meta açıklama 215 karakter; OG ve Article/MedicalWebPage görseli konuya özel mevcut kart yerine genel hub görseliydi. | Açıklama 144 karakter; manifestte de aynı metin. Şema/OG mevcut 2400×1000 makale kartına bağlandı; üst hero ve 1200×1500 byline değişmedi. İlk yayın 28 Ekim; gerçek revizyon için modifiedDate ve görünür lastUpdated 29 Ekim. Tıbbi inceleme tarihi ilerletilmedi. |
| P2 — üç tablo / 567 sonrası | 390 px'te tablo içerikleri 277 px alan içinde 360 / 292 / 302 px genişliğinde olup yatay kaydırma gerektiriyordu. | Sadece bu sayfada mobil satırlar sütun adlarıyla alt alta dizildi. Son ölçüm: tablolar 275 px, kapsayıcılar 277 px; sayfa 390/390 px. Masaüstünde üç sütunlu gerçek tablo korundu. |

## Korunan hekim katkısı ve açık iş

- Beş soru-cevap `article-faqs.ts` içinde hiç değiştirilmedi. Canlı HTML'den okunan beş FAQPage cevabı ile son yerel derlemedeki cevaplar birebir aynı; görünür beş `<details>` ile de eşleşiyor. Eski taslakta 28 Ekim'de alındığı kaydı ve mevcut onay kaydı var; bu tur yeni hekim yanıtı üretilmedi.
- Bilimsel Editör Notu kaynak metinle birebir aynı tutuldu. Ancak 515–516. satırlardaki **“İnsanda gösterilen tek şey, egzersizin vücudun kendi MOTS-c düzeyini artırması”** ifadesi fazla geniş: aynı makalede insanlarda doğal düzey/gen varyantı/hastalık ilişkileri de anlatılıyor. Bu bir klinik etkinlik kanıtı değildir; fakat “tek şey” ifadesini de desteklemez.
- Bu cümlenin hekime ait/onaylı katmanda olması nedeniyle sessizce yeni hekim cümlesi yazılmadı. Ayrı düzeltme için kapsam daraltılmalı; örneğin yalnızca egzersizle doğal artış bulgusundan söz edilmeli, insan gözlemsel verilerinin tamamı yok sayılmamalı. Kullanılacak karşılık KC tarafından görülmeli. Mevcut 28 Ekim Mumcu inceleme kaydı bu revizyon için onay değildir.
- Notun molekül geneline tek Evidence 1–2 etiketi vermesi iddia bazlı kanıt yaklaşımından daha kaba bir özet; gerçek klinik hüküm ve imza korunarak ayrıca gözden geçirilebilir. İnsanda tedavi güvenliği için kanıt varmış izlenimi vermemeli.
- Kaynak 18'deki TİTCK 16 Ekim listesi bu tur indirilemedi (zaman aşımı); NIA ITP canlı listesi robot doğrulamasına takıldı. Eski tarihli kayıtlar yeni canlı doğrulama diye sunulmadı. Yayın öncesi bu iki dinamik liste yeniden kontrol edilmeli. “Hiç test edilmedi” mutlaklığı mevcut listeye daraltıldı. WADA 2026 S4.4.1 PDF'i ise doğrudan yeniden okundu ve MOTS-c doğrulandı.

## İddia / tekrar sayımı

Tüm makalenin görünür metni, kapalı SSS'lerin HTML metni ve korunan not dahil. Kaynakça ve navigasyon hariç. Aşağıdaki sayılar açık ifade ailesi sayımıdır; farklı kelimelerle yazılan her anlam tekrarını ölçtüğü iddia edilmez.

| Sonuç / ifade ailesi | Önce | Sonra | Kalanın işlevi |
|---|---:|---:|---|
| Egzersizle artışın insanlarda “tek şey/tek yol” diye sunulması | 4 | 1 | Kalan tek yer korunan hekim notu; açık bulgu. |
| Ömür için genel eğri sonucunu vermeyen “sınırda eğilim” kalıbı | 4 | 0 | Asıl sonuç ve p değerleri aynı kaynağa bağlandı; sınırda alt analiz artık bağlamıyla var. |
| İnsan müdahale çalışması sonucu yokluğu kalıbı | 6 | 4 | Özet, bağımsız okunan kanıt merdiveni, CB4211'den ayrım, korunan not. Yeni koşul/bağlam taşıyor. |
| Yumurtalıkları alınmış fare / menopoz modeli | 3 | 3 | Özet kapsamı, hayvan deneyinin açıklaması, kadınlara aktarım sınırı. |

İnsan tedavi verisi eksikliği hâlâ farklı kelimelerle tablolarda da belirtiliyor; bağımsız okunabilen iddia tablosu/etkinlik matrisi için gerekli bulundu. Güvenlik, gebelik, etkileşim ve geri dönüşebilirlik ayrı sonuçlardır; sırf “bilinmiyor” dedikleri için tek iddia sayılıp silinmedi.

## Kontroller

- Son `npm run build:ci`: geçti. Astro sync, TypeScript lint, compliance, strict içerik/tür denetimi, encoding/renk/sözlük/tarih kapıları, build ve SEO audit tamamlandı. 138 rota; SEO audit 160 HTML.
- `git diff --check`: geçti.
- `editorial-check`: 0 sözcüksel aday. `structure-check`: 9 → 8 aday grubu. Tüm görünür metin ritmi: ortalama 11,5 → 12 sözcük; standart sapma 6,7 → 6,5. SSS uzun/kısa cümleleri değişmedi. Bunlar insan yazarlığı/klinik onay ölçüsü değildir.
- Yapı adayları elle değerlendirildi: güvenlikte farklı bilinmezlikler kaldı; kısa hüküm kapanışları gövdede yumuşatıldı, gerçek hekim yanıtlarında korundu; sabit “dışarıdan verilen/vücudun kendi MOTS-c” terimleri anlam ayrımı için kaldı; “Kimler kullanmamalı…” bölüm etiketi soru işareti zorunlu soru olarak değerlendirilmedi. Başlık hiyerarşisi korunuyor. İddia adayları üstteki tabloda değerlendirildi.
- `check-fidelity`: beklenen review_changes. Eklenen p=0,23/p=0,05/31,8; 23/20/11/9 ayrımı; 2028 ve tahmini tarihler; 2,8 yıl ve 2016 bağlamı; [29]–[30] atıfları kaynaklarla elle karşılaştırıldı. Sayı değişikliği otomatik “anlam bozuldu” diye değerlendirilmedi.
- `rendered-check`: yalnızca 10 `uncited-source` adayı. Araç yazar/kurum adı arıyor; Estranova'da numaralı atıf kullanıldığı için bu adaylar geçersiz. Bağımsız anchor kontrolünde **30/30 kaynak gövdede anılıyor**, kırık iç atıf yok.
- Tek H1; tüm önceki H2 id'leri aynı; yinelenen id yok. Beş görünür SSS / beş schema cevabı eşit. On bir dahili hedefin tamamı derlemede var. Canonical aynı. Article ve MedicalWebPage tarihler/görsel uyumlu; reviewer aynı kişi.
- Yerel build ortam politikası gereği `noindex,nofollow`; canlı sayfa `index,follow`. Bu yerel önizleme bir üretim sürümü değildir. Hiçbir robots/noindex yapılandırması değiştirilmedi.
- 390×844 mobil ve 1440×1000 masaüstü tarayıcıda incelendi. Her iki makale resmi yükleniyor. Mobilde sayfa/tablo taşması giderildi; masaüstünde sütun düzeni korundu.
- İlk browser-use bağlantısı güven hatası verdi; sayfa kontrolü alternatif tarayıcı araçlarıyla tamamlandı. Görsel kontrol yapılmamış gibi veya ilk hatadan sonra geçmiş gibi raporlanmadı.

## Birincil kanıt bağlantıları

- [NCT07505745 API](https://clinicaltrials.gov/api/v2/studies/NCT07505745) — tahmini tarihler, örneklem, sonuçlar, dışlama ölçütleri; [menopoz araması](https://clinicaltrials.gov/api/v2/studies?query.term=MOTS-c%20AND%20menopause&countTotal=true&pageSize=10): 0 kayıt.
- [NCT03998514](https://clinicaltrials.gov/study/NCT03998514) — CB4211, tamamlanma/sonuç kayıt durumu.
- [Reynolds 2021 tam metin](https://pmc.ncbi.nlm.nih.gov/articles/PMC7817689/) — Fig. 4m ve yaşa bağlı fiziksel işlev.
- [CohBar özgün sunum, SEC](https://www.sec.gov/Archives/edgar/data/1522602/000121390021041377/ea145151ex99-3_cohbar.htm) — slayt 11–17; şirket bildirimi, hakemli yayın değil.
- [FDA güvenlik sayfası](https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks), [özgün FDA sunumu](https://www.fda.gov/media/193773/download), [toplantı gündemi](https://www.fda.gov/advisory-committees/advisory-committee-calendar/july-23-24-2026-meeting-pharmacy-compounding-advisory-committee-07232026).
- [WADA 2026 PDF](https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf) — basılı s. 11, S4.4.1.
- [Kumagai 2024](https://pubmed.ncbi.nlm.nih.gov/39559755/), [Özkaya 2025](https://pubmed.ncbi.nlm.nih.gov/41004666/), [Zhang 2026](https://pubmed.ncbi.nlm.nih.gov/42939841/), [Tsui 2026](https://pubmed.ncbi.nlm.nih.gov/42895211/), [kanser gözlemi](https://pubmed.ncbi.nlm.nih.gov/38314601/), [kanser deneyleri](https://pubmed.ncbi.nlm.nih.gov/39581216/), [DPP](https://pubmed.ncbi.nlm.nih.gov/11832527/), [yorgunluk derlemesi](https://pubmed.ncbi.nlm.nih.gov/27765009/). PubMed erişiminin başarısız olduğu kayıtlarda aynı makalelerin özetleri Europe PMC API'den okundu; hepsinde tam metin okunduğu ileri sürülmedi.

## İnceleme dosyaları

Geçici kanıt dizini: `C:\Users\KC3\AppData\Local\Temp\mots-c-audit-f698547c0134435fb6baa5000d3ca40e`.
Burada önceki Astro, canlı HTML, son build logu, qa.json, fidelity/editorial/structure/rendered raporları ve masaüstü/mobil ekran görüntüleri var. Kalıcı rapor bu dosyadır; geçici dosyalar kaynak kontrolüne eklenmedi.

Yayın öncesi açık işler: korunan not cümlesini KC ile netleştirmek, TİTCK/ITP dinamik kaynaklarını yeniden açmak, bu revizyona özgü yazar ve Mumcu tıbbi onayını almak. Kullanıcının commit/push talimatı ayrı çalışma dalına uygulanır; main birleştirmesi ve deploy kapsamında değildir.
