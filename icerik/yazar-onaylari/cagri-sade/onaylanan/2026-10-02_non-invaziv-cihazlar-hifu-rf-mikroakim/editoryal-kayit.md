# HIFU, RF ve mikroakım — Çağrı Sade için yeniden yazım

- Taslak tarihi: 2 Ekim 2026.
- Tür: `clinical-guide`; yazar yetki hattı: bilimsel / hekim.
- Durum: yazar onayı ve bağımsız tıbbi inceleme bekliyor.
- Yetki: Kullanıcı mevcut makaleyi Çağrı Sade yazısı olarak yeniden yazmamızı istedi. Yazarın metni onayladığı, klinik yanıt verdiği veya tıbbi incelemenin tamamlandığı belirtilmedi.
- Yeni metin `onay-bekleyen` altında tutuldu. Canlı rota, manifest, ortak SSS verisi, görsel eşlemeleri ve yayın/onay kayıtları değişmedi.
- `makale-onizleme.html`: tam metin, kaynaklar, SSS taslakları ve inceleme bekleyen editör notu. Form yerel yeni metne bağlanır; eski canlı yazı önizleme olarak gösterilmez.
- `site-kaynak.astro`: onay sonrası uyarlama için kaynak. İçe aktarma yolları hedef rota içindir. Taslakta `jsonLd` basılmaz; yazar/inceleyen onayından sonra doğru görünür bilgilerle etkinleştirilmelidir. İlk yayın 3 Mayıs 2026 korunur; onay daha sonraki bir günde gelirse gerçek revizyon tarihi yeniden değerlendirilir.
- `sss-taslak.json`: editoryal cevap taslakları; Çağrı Sade'nin kayıtlı özgün yanıtı olarak sunulmaz. Onay öncesinde ortak `article-faqs.ts` verisine taşınmadı.
- Bilimsel Editör Notu yeni bir hekim görüşü veya imzalı onay değildir. Mevcut metindeki Dr. Aksoy'a atfedilen klinik sahneler yeni yazarın deneyimi gibi aktarılmadı.

## Metin kararları

1. Tek cihaz adıyla bütün sistemleri eşitleyen ifadeler yerine cihaz/protokol/uygulama alanı ayrımı kuruldu.
2. HIFU ve RF arasında kesin kanıt üstünlüğü iddiası kaldırıldı.
3. Ev tipi mikroakım etkisinin çoğunlukla plasebo olduğu iddiası kaldırıldı; birleşik enerji çalışmasının tek başına mikroakımı kanıtlamadığı açıklandı.
4. Herkese 2–4 seans ve yıllık tekrar, sabit kalıcılık ve menopoz sonrası zorunlu etki azalması genellemeleri kaldırıldı.
5. Hormon tedavisi estetik işlemin temel hazırlığı gibi sunulmadı.
6. Yüz/cilt konusu dışındaki pelvik RF anlatısı çıkarıldı. LED yalnız ayrı bir teknoloji olduğunun açıklanması için anıldı.
7. İğneli RF ve cilt yüzeyinden RF ayrıldı. İğneli uygulama güvenlik bildirimi diğer RF uygulamalarının risk oranı gibi aktarılmadı.
8. İki eski SSS yüzeyi yerine yeni taslakta tek SSS kaynağı kullanıldı. Eski yayımlanmış SSS bu aşamada değiştirilmedi.

## Kaynak izi — 2 Ekim 2026 kontrolü

| Kaynak | Desteklediği bölüm | Sınır |
|---|---|---|
| PMC11834976, sistematik derleme/meta-analiz, 2025 | Mikroodaklı ultrason mekanizması, görünüm/gevşeklik bulguları, kontrol grubu ve ölçüm sınırlamaları | Görüntüleme eşliğinde MFU verisi bütün HIFU cihazlarına genellenmez; kişisel sonuç ve cerrahi eşdeğerliği göstermez |
| PMID 34923652, Austin ve ark., 2022 | RF mekanizması ve yüz/boyun klinik bulguları | Farklı uygulamalar incelenir; bütün yüzey RF sistemleri için aynı etki çıkarılamaz |
| PMID 38236440 / DOI 10.1007/s10103-024-03982-8, 2024 | Ev tipi birleşik enerji cihazı çalışması | 36 sağlıklı Koreli kadın, 8 hafta; düşük düzey ışık, RF, mikroakım ve ultrason birlikte; tek başına mikroakımın uzun süreli etkisini kanıtlamaz |
| FDA Non-Invasive Body Contouring Technologies | Enerji türlerine bağlı riskler, cihaz kullanım bilgisi ve elektronik implantların önemi | Vücut şekillendirme güvenlik belgesi; yüzde etkinlik veya risk oranı kanıtı olarak kullanılmadı |
| PMC12374573, 2025 anlatı derlemesi | Menopoz/cilt özellikleri ve HRT'nin yalnız cilt için endike olmaması | Cihazların menopoz alt gruplarında karşılaştırmalı etkinliğini göstermez; kaynak erişiminde tam metin bot kontrolü olduğundan indekslenen özet ve ilgili pasaj kullanıldı |
| FDA RF Microneedling Safety Communication, 2025 | İğneli RF'nin ayrı değerlendirilmesi, ciddi komplikasyon bildirimleri | Yüzeyden uygulanan RF'ye aynı risk sıklığıyla genellenmedi |

PubMed 38236440 sayfası doğrudan okuma aracında içerik vermedi; yayıncı Springer Nature'ın DOI sayfasındaki özet ve PubMed indekslenen kayıt üzerinden kontrol edildi. Bu tarama kapsamlı sistematik literatür taraması değildir. Evidence etiketleri editoryal kanıt yorumudur; resmi GRADE derecesi değildir ve tıbbi incelemede doğrulanmalıdır.

## Ses ve çeşitlilik kaydı

Kısa paragraf, biz/siz zemini ve üç italik karar sorusu kullanıldı. Birinci tekil cümleler metin için önerilen danışman sesidir; yazarın gerçekten söylediği alıntılar değildir. Anekdot, dış yazar taklidi, aforizma, mevsim dekoru, satış dili ve klinik başarı anlatısı yok. Açılış cihaz araştırma refleksi üzerinden; kapanış müdahale zorunluluğu olmadan hedefe dönüyor. Humor H0.

Profilin sıcak/soğuk katmanlarında eski havuz durumları tutarsız; `hot.md` v0.5 ses kuralları esas alındı. Kalıcı havuz/profil değişikliği yapılmadı; eksik 8 kalıp havuzunun onaylı aktivasyonu ayrıca bekliyor. Bu taslak o profil çalışmasının tamamlandığı anlamına gelmez.

## Kontroller

- Astro compiler: sıfır sözdizimi tanısı.
- Önizleme: tek H1, 15 benzersiz id, tüm iç atıf bağlantıları mevcut.
- Derlenmemiş Evidence/RedFlagBox işareti yok.
- Taslak sözlük hard-ban taraması temiz.
- Üç ilgili rota ve mevcut byline görseli dosyası mevcut.
- Yayın kaynakları değiştirilmedi; üretim build'i veya canlı yayın doğrulaması yapılmadı.

Onay sonrası: SSS verisini ortak kaynağa taşı, schema/görünür metin uyumunu tamamla, yazar/inceleyen ve gerçek tarihlerle manifesti eşitle, gerekli kaynak/tür/build kontrollerini çalıştır. Commit, push ve deploy ayrı yetki gerektirir.

## 2 Ekim 2026 — Audit düzeltmeleri (Claude)

Kullanıcı Codex taslağının denetlenip düzeltmelerin uygulanmasını istedi; tarih için "bugün yap, görünür yeniden yazım notu ekle" kararını verdi.

### Tarih ve imza

- Yayın tarihi `2 Ekim 2026` (Çağrı Sade imzalı yeni yayın). Onay başka günde gelirse yayın günü o güne çekilir; `modifiedDate` verilmez.
- Yazar bloğunun altında görünür not: önceki sürüm 3 Mayıs 2026'da Doç. Dr. Senai Aksoy imzasıyla yayımlandı; 2 Ekim 2026'da Çağrı Sade tarafından yeniden yazıldı; yüz ve boyun dışı uygulamalar kapsam dışı.

### Tıbbi / olgusal düzeltmeler

1. FDA [4] aktif implant, deri altı metal ve açık yarayı "kullanmayın" durumu olarak sayar. "Aynı yasak listesiyle uygulanmaz" ifadesi bu uyarıyı yumuşatıyordu; "yapılmamalıdır" olarak düzeltildi. Kaynaktaki metal içeren dövme mürekkebi (RF) uyarısı kalıcı makyaj bağlamıyla eklendi.
2. Evidence etiketleri iddia cümlesinin sonuna taşındı ("İncelenen sistemler için (orta kanıt);" kırık cümlesi giderildi).
3. Kaynak [1] için çoğul "sistematik derlemeler" → tek meta-analiz (42 çalışma). Doğrulanamayan "kontrol grubu bulunmayan çalışmalar" çıkarıldı; yerine özetteki asıl sınırlılık (nötr yanıtların olumlu sayılması olası) yazıldı.
4. Yeni, kaynaklı pratik bilgi: MFU-V çalışmalarında ağrı ortalama orta düzey [1]; sık yan etkiler (kızarıklık, şişlik, morarma, hassasiyet) çoğunlukla hafif-orta [1]; RF memnuniyetinin ölçülü toparlanma bekleyenlerde daha yüksek bulunması [2].
5. Kaynak listesi yazar + dergi + yıl ile netleştirildi (PubMed kayıtlarıyla doğrulandı: 39540440, 34923652, 38236440, 40847905; FDA RF microneedling bildirimi 15 Ekim 2025). FDA adı gövdeden çıkarıldı; yalnızca kaynak listesinde.

### Ses ve yapı (CLAUDE.md Sıcaklık Katmanı, Çağrı hot.md v0.5)

- Soru biçimli H2: 4 → 1 ("Görüşmeye Hangi Sorularla Gitmeli?"). H2 kimlikleri korundu.
- Her H2'de somut ayrıntı: aynada çene hattını iki parmakla yukarı çekme, telefondaki "tek seans" videosu, banyo rafındaki ev cihazı, değerlendirme formundaki "hafif iyileşme" kutusu, yetmeyen krem, telefondaki üç satırlık not.
- Duygu anı: ağrıyı söylemekten çekinme / utanma. Teselli: "Önce şunu söyleyeyim…", "Kararı o odada vermek zorunda değilsiniz."
- "anlamına gelmez" 9 → 0; X değil-Y kalıbı en fazla 2. Tekrarlanan genelleme uyarıları tekilleştirildi.
- Kısa vurgu cümleleri: "Bunlar aynı şey değil.", "İşlem sırasında ağrı olabilir.", "Üç yöntem, üç ayrı kanıt düzeyi.", "Acele etmeyin."
- #02'nin "Her değişim ameliyat gerektirmez" manifestosunun türevi kapanıştan çıkarıldı; kapanış açılıştaki ayna jestine geri çağırma ile bağlandı.
- Mizah H1: açılışta tek dokunuş ("Reklam videosunda her şey otuz saniyede bitiyor.") ardından tıbbi köprü. Risk bölümü H0.
- Önerilen birinci tekil cümleler (4): "…geri dönmek isterim", "Önce şunu söyleyeyim…", "…yazmanızı öneririm", "Benim için asıl ölçü…". Yazarın gerçek alıntısı değildir; formda ayrıca onaya sunuldu.

### SSS, BEN, form, SEO

- SSS yenilendi: hangisi daha iyi, acıtır mı, ev tipi mikroakım, menopoz sonrası etki. İğneli RF sorusu gövdede yeterince karşılandığı için çıkarıldı. Cevaplar editoryal taslak; Çağrı onayı bekler.
- Bilimsel Editör Notu değişiklik listesinden kanıt sentezine çevrildi; "Dr. Aksoy onayı bekleyen taslak" başlığıyla. Dr. Aksoy'un kendi sözleri değildir.
- Form: kurum adı sorusu Kaynaklar istisnasıyla netleştirildi; dört ses cümlesi ve dört SSS cevabı için zorunlu onay alanları eklendi.
- `seoTitle` geri getirildi: "HIFU, RF ve Mikroakım: Ne Beklenmeli?" (eski karakter bütçesi düzeltmesi korunur).
- TOC'ye "Sıkça Sorulanlar" eklendi (eski canlı sürümle aynı düzen).
- Kontroller: Astro compiler 0 tanı; gövdede "anlamına gel" 0, "mutlaka/kesin/garanti" 0.

### Onay sonrası (değişmedi, hatırlatma)

`article-approvals.ts` ve `static-articles.ts` kaydında yazar `senai-aksoy` → `cagri-sade`, tarih ve açıklama güncellenir; `article-faqs.ts` eski SSS'si yenisiyle değiştirilir; `jsonLd` bağlanır; taslak durum satırı, "Tıbbi inceleme bekliyor" ve BEN başlığındaki taslak ibaresi kaldırılır. İmza değişince anasayfa yazar şeridinde Senai Aksoy ve Çağrı Sade "Son yazısı" kartları değişir. Commit, push, deploy ayrı yetki ister.

## 2 Ekim 2026 — Onay ve canlı rotaya aktarım

Kullanıcı: “çağrı onayı tamam. tıbbi onay tamam”. Onay; dört önerilen birinci tekil cümleyi, dört SSS cevabını ve Bilimsel Editör Notu taslağını kapsar.

Aktarım: canlı rota `src/pages/zamansiz-yasam/non-invaziv/non-invaziv-cihazlar-hifu-rf-mikroakim.astro` bu paketteki `site-kaynak.astro`dan üretildi. Taslak durum satırı, "Tıbbi inceleme bekliyor" ve BEN/SSS taslak ibareleri kaldırıldı; `jsonLd` bağlandı; SSS `article-faqs.ts` ortak kaynağına taşındı (eski üç SSS değiştirildi). `article-approvals.ts` ve `static-articles.ts` kaydı `cagri-sade`, 2 Ekim 2026 olarak güncellendi. Hero, kart ve byline görselleri değişmedi.
