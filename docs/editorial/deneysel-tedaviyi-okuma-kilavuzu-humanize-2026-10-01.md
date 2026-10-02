# Deneysel Tedaviyi Okuma Kılavuzu — Antigravity audit / Codex düzeltmesi

Tarih: 1 Ekim 2026. Rota: `/zamansiz-yasam/deneysel/deneysel-tedaviyi-okuma-kilavuzu/`.
Yazar: Senai Aksoy; tür: `clinical-guide`. Bu rapor önceki Antigravity raporundaki doğrulanmamış kaynak ve onay beyanlarını düzeltir.

## Kapsam ve başlangıç

Kullanıcı “Antigravity'nin yaptığı düzeltmeler audit humanize fix” ile inceleme ve yerel düzeltme istedi. Yapıştırılan döküm bu makaleyi hedefliyor. Başlık, özet, tüm gövde, SSS, kaynaklar, bileşen metinleri ve şema; gramer, doğal ifade ve humanizasyon açısından ayrı okundu. Senai-humanize skill'i, TR/site/anlam/yazara soru/yerel kontrol referansları, kanonik stil rehberi, proje kuralları ve yazar profili kullanıldı.

Onay kaydı 2026-05-04 prelaunch envanter uzlaştırmasıdır. Onaylı metnin hash bağlantısı yok; yeni revizyonu kapsamaz. Oturum HEAD'i `c34d3d1f1511df665f473642aa0f5e2b1ee12563`; hedef dosyanın son commit'i `f96fa86b` (12 Ağustos 2026). HEAD ve commit edilmemiş Antigravity turu birlikte karşılaştırıldı. Başlangıç makale/FAQ/rapor kopyaları `C:/Users/KC3/AppData/Local/Temp/estranova-deneysel-audit-38c61bcf11d144c08a0b813f72a4305e/` altında korunuyor.

Diğer makaleler ve GLP-1 çalışması kapsam dışı. Paylaşılan FAQ dosyasının diğer rota kayıtlarının başlangıç kopyasıyla aynı kaldığı doğrulandı.

## Bulgular ve düzeltmeler

1. **SSS kökeni:** Antigravity gerçek hekim yanıtı almadan dört cevap üretmişti. Bu sohbette Dr. Aksoy'un üç gerçek yanıtı alındı; sadece Markdown kalın işaretleri temizlendi. Tek SSS yüzeyi ve FAQPage aynı kaynaktan geliyor. Sıklık teyidi olmadığı için başlık “Dr. Aksoy'a sorular”.
2. **İnceleyici atfı:** Gerçek inceleme kaydı olmadan Dr. Alper Mumcu adına imzalı model notu ve “tıbbi denetimden geçirilmiştir” beyanı yazılmıştı. İmzalı not kaldırıldı, bağımsız inceleme bekliyor. Yalnız bu rotanın iki ilgili şemasında otomatik `reviewedBy` kaldırıldı; ortak yardımcı değiştirilmedi.
3. **ACOG künyesi:** “Fractional Laser and Radiofrequency Devices in Gynecologic Practice” / Clinical Consensus No. 1 (raporda No. 402) doğrulanamadı. Yerine [ACOG hasta bilgilendirmesi](https://www.acog.org/womens-health/faqs/vaginal-rejuvenation-labiaplasty-and-other-female-genital-cosmetic-surgery) kullanıldı. Tam sayfa açılışı erişim hatası verdi; resmî siteden indekslenmiş başlık ve lazer güvenlik metni eşleşti. Tam metin okunmuş gibi sunulmadı.
4. **Plasebo kaynağı:** Moerman–Jonas yazısının doğru kaydı [PMID 11900500](https://pubmed.ncbi.nlm.nih.gov/11900500/). Perspektif yazısıdır, meta-analiz değildir. Genel %30 yanıt oranı bu kaynakla doğrulanamadığı için çıkarıldı. Beklenti/bağlam ve kontrolsüz rahatlama–özgül etkinlik ayrımı korundu.
5. **Fazlar:** [NIH rehberi](https://www.nih.gov/health-information/nih-clinical-research-trials-you/basics) ile Faz 4 onay sonrası izlem olarak düzeltildi. Her araştırmanın dört faz izlediği ve her fazın deneysel olduğu genellemesi çıkarıldı.
6. **Kanıt:** Meta-analize otomatik Evidence 5 verilmedi. [OCEBM](https://www.cebm.ox.ac.uk/resources/levels-of-evidence/ocebm-levels-of-evidence) uyarılarıyla kalite, tutarlılık ve soruyla uyum anlatıldı; çalışma türü ile kanıt gücü eş tutulmadı.
7. **Etik:** Eski 2013 metni yerine [WMA 2024 Helsinki](https://www.wma.net/policies-post/wma-declaration-of-helsinki/) kullanıldı. Etik kurul/onam risksizlik güvencesi gibi sunulmadı; araştırma dışındaki kanıtlanmamış girişim için gerekçe, alternatif ve izlem koşulları korundu.
8. **Cihaz güvenliği:** “Kolajen aşısı” lazer/RF örneğinden çıkarıldı. 2018 uyarısı [resmî Medsafe duyurusuna](https://www.medsafe.govt.nz/safety/EWS/2018/EnergyBasedDevicesVaginalRejuvenation.asp) bağlandı. Yanık, yara izi ve ağrı uyarıları görünür kaldı. Tarihsel uyarı bütün cihazların bütün güncel endikasyonları için toplu hükme dönüştürülmedi.
9. **Off-label:** [FDA ilaç açıklaması](https://www.fda.gov/understanding-unapproved-use-approved-drugs-label) eklendi. ABD açıklamasından Türkiye için otomatik izin çıkarılmadı; ilaç/cihaz izin yollarının farkı korundu.
10. **Dil:** Özet kısaltıldı; soyut isim zincirleri, üstün güvenlik iddiası, doğrulanmamış sık klinik gözlem ve üst üste metaforlar temizlendi. Gerekli belirsizlikler korundu. Yasak sözcükleri eş anlamlıyla filtre dışına çıkarmak yerine abartılı tanıtım örnekleri nötrleştirildi. RedFlagBox'ın tanı/belirti varsayılan metni konuya uygun tanıtım okuma açıklamasıyla değiştirildi.

## Anlam kaydı

| Önce | Sonra / korunan sınır |
|---|---|
| Faz 3–4 geniş karşılaştırmalı etkinlik | Faz 4 onay sonrası; ilaç fazları bütün araştırmalara genellenmedi. |
| Meta-analiz otomatik güçlü kanıt | Kalite/tutarlılık/uygunluk; toplu Evidence 5 çıkarıldı. |
| Genel %30 plasebo oranı | Desteksiz oran çıkarıldı; kontrolsüz rahatlamadan özgül etki çıkarılamayacağı korundu. |
| Genel 8–12 haftalık deneme | Sabit süre çıkarıldı; hedef sonuç, kişiye/yönteme göre takip ve yeniden değerlendirme korundu. |
| Standart seçenekler tüketilmeden deneysel yöntem olmaz | Alternatiflerin uygunluğu konuşulur; araştırmaya katılım otomatik son çareye indirgenmedi. |
| Onaylı cihaz her kullanımda güvence | Belirli izin kapsamı, farklı kullanım amacı ve ciddi güvenlik uyarıları ayrıldı. |
| Reklam yüzdeleri | Örnek yüzdeler çıkarıldı; sonuç tanımı, katılımcı/payda, takipten ayrılma, süre ve karşılaştırma sorgusu korundu. |
| Model SSS ve inceleyici görüşü | Üç gerçek hekim yanıtı biçim dışında birebir; yeni inceleyici görüşü üretilmedi. |

## Gerçek yanıtlar

Kayıt: `icerik/yazar-onaylari/senai-aksoy/klinik-katkilar/2026-10-01_deneysel-tedaviyi-okuma-kilavuzu.json`. Özgün cevaplar, görünür karşılık, gerçek yanıt günü ve kullanım/inceleme durumu kayıtlı. 3/3 cevap için Markdown biçimi dışında eşitlik doğrulandı; yeni veri/gerekçe/tavsiye eklenmedi. Nihai revizyon/yayın onayı çıkarılmadı.

Gövdenin üç karar sorusu gerçek yanıttaki **kanıt → bilinen/bilinmeyen risk → standart alternatifler** sırasına bağlandı. Takip/ölçüm ayrıca korundu; üçüncü sorunun yerine geçirilmedi.

## Doğrulama

- `npm run build:ci`: geçti; 143 sayfa, SEO denetimi 163 sayfa. Lint, compliance, strict/template audit ve build tamamlandı. Bu sonuç tıbbi onay değildir.
- `npm run articles:audit:sources`: hedef makale için uyarı yok; kapsam dışındaki makalelerde kaynak uyarıları devam ediyor. Site geneli temiz sonucu verilmedi.
- `editorial-check.mjs --locale tr`: çıkarılmış metinde 41 blok, 0 aday. Özet, özelliklerden gelen metin ve SSS ayrıca elle okundu.
- `check-fidelity.mjs --locale tr`: HEAD karşılaştırmasında beklenen `review_changes`. Sayı/atıf/link farkları elle incelendi: kaldırılan oran örnekleri, faz açıklaması, gerçek kaynak eklemeleri. Onaylı metnin hash'i bulunmadığı için “son onaylı sürüme karşı fark yok” sonucu verilmedi.
- Yerel tarayıcı: 1 H1, 1 SSS, 3 cevap; şema 3/3 eşleşme; yinelenen ID/kırık anchor yok; masaüstü yatay taşma yok. Bekleyen inceleme için iki ilgili şemada `reviewedBy` bulunmuyor.
- `git -c core.whitespace=cr-at-eol diff --check`: geçti.
- Canlı özel alan adı cache-bypass sorgusuyla okundu: eski sürüm, çift SSS ve eski editör notu hâlâ mevcut. Yerel revizyon canlı gibi sunulmadı.

## Açık işler

Dr. Alper Mumcu'nun bu son revizyona ilişkin bağımsız tıbbi inceleme teyidi ve nihai editör/yazar onayı bekliyor. Eski envanter onayı güncellenmedi. Bu oturumda commit, push ve deploy komutu çalıştırılmadı. Son kontrolde gerçek SSS yanıtları mevcut HEAD’de de bulunuyor; eşzamanlı depo çalışması nedeniyle tüm değişiklikler commit edilmemiş olarak sunulmadı. İnceleme teyidi geldiğinde görünür durum ve şema birlikte güncellenmeli; gerçek inceleyici metni model tarafından yazılmamalı.

Okur değeri: deneysel/off-label ayrımı ve araştırma okuma için kullanılabilir. Belirli tedavinin uygunluğu, etkinlik oranı veya Türkiye'deki hukuki izin için kişisel karar kaynağı değildir.

## İkinci geniş audit sonrası düzeltme — 1 Ekim 2026

- Helsinki 2024 madde 37’nin onaylı seçeneklerin yetersiz/etkisiz olması ve araştırmaya katılamama koşulları açıklandı; uzman görüşü, risk/yük/yarar, onam, kayıt/paylaşım ve sonraki araştırma ile koruma kurallarını aşmama koşulları eklendi.
- Kaynaksız 2/5 derecelendirme kaldırıldı. FDA/Medsafe’in 2018 tarihli etkinlik/güvenlik belirsizliği ile ACOG’nin ciddi zarar uyarısı ayrı paragraflara bağlandı. Bu genel araştırma okuma rehberinde doğrulanmamış tedavi puanı üretilmedi; yeni kanıt derecesi için gerçek değerlendirme gerekir.
- Üst görsel değiştirilmedi; yalnız hedef makalenin `imageAlt` özelliği kısa Türkçe görsel açıklamasıyla düzeltildi. Paylaşılan hub ve başka makalelerin görsel kayıtları değişmedi.
- Meta açıklama ve hedef manifest açıklaması eşitlendi; tekrar eden kapanış yerine çekilme hakkının bakım üzerindeki sınırı ve iletişim sorusu kondu.
- Kaynakçadaki elle yazılmış ikinci numaralar çıkarıldı; `ol` numaraları ve `kaynak-N` hedefleri korundu.
- Gerçek SSS yanıtları değiştirilmedi. Bağımsız inceleme/yayın onayı ve release durumu değişmedi.

Son doğrulama: `build:ci` yeniden geçti (143 üretilen sayfa; 163 SEO kontrolü). Yerel tarayıcıda 1 H1, 1 SSS, 3/3 şema eşleşmesi, çalışan akordeon, kısa Türkçe üst görsel alt metni ve tek kaynak numaralandırması doğrulandı; kırık anchor, yinelenen ID ve masaüstü taşma yok. `diff --check` geçti. Yerel eksik bağımlılıklar npm ile geri yüklendi; kilit dosyasının JSON içeriği değişmedi ve biçimi başlangıç haline getirildi. Commit/push/deploy yapılmadı.

## Üçüncü tur — Claude audit, kaynak doğrulama ve humanize (1 Ekim 2026)

Başlangıç: Codex'in commit edilmemiş sürümü (yedek: oturum scratchpad'i). Kanonik stil rehberi, `senai-humanize` skill'i ve proje kuralları okundu.

**Birincil kaynakla doğrulananlar:** Helsinki 2024 madde 37 (onaylı seçenekler yetersiz/etkisiz + araştırmaya katılım mümkün değil; uzman görüşü, risk-yük-yarar, onam, kayıt/paylaşım, araştırmayı aksatmama, koruma kurallarını dolanmama) ve madde 31 (araştırmadan çekilme standart bakımı etkilememeli); Medsafe sayfası (5 Eylül 2018; FDA bu amaçla hiçbir enerji bazlı cihaza onay/izin vermemiş; güvenlik ve etkinlik belirlenmemiş; yanık, yara izi, cinsel ilişkide ağrı, uzun süren ağrı); FDA off-label sayfası (hekim uygun gördüğünde yazabilir; FDA o kullanım için güvenlik/etkinlik belirlemiş değildir); Moerman–Jonas künyesi (PubMed: Ann Intern Med 2002;136(6):471–6, perspektif yazısı).
**Doğrudan okunamayanlar:** NIH faz sayfası ve OCEBM (HTTP 403), ACOG sayfası (HTTP 402). NIH faz tanımları ve ACOG/FDA uyarı içeriği yalnızca arama özetinden teyit edildi; tam metin okunmuş gibi sunulmadı.

**Bulgular ve düzeltmeler**
1. **Kaynakla desteklenmeyen cümle:** "Bazı cihazların belirli jinekolojik işlemler için izni bulunur" ifadesi atıf yapılan Medsafe duyurusunda yok. Çıkarıldı; yerine doğrulanan ifade kondu (FDA o tarihe kadar bu amaçla hiçbir cihaza onay/izin vermemişti).
2. **ACOG atfı:** Yan etki listesi aslında ACOG'nin aktardığı FDA uyarısıdır ve "araştırma protokolleri dışında" koşulu içerir; cümle buna göre yeniden yazıldı.
3. **Mantık boşluğu:** "Yan etki bildirimleri, uygulamanın ne kadar fayda sağladığını göstermez" cümlesi yararın ayrı bir kanıt sorusu olduğunu söyleyecek biçimde düzeltildi.
4. **Belirsiz gönderim:** "Bu durumda hekim…" paragrafı dördüncü maddeye (araştırma dışı kanıtsız uygulama) açıkça bağlandı.
5. **Yerleşim:** Araştırmadan çekilme/standart bakım bilgisi (Helsinki m.31) kapanıştan klinik araştırma maddesine taşındı; NAD+ bağlantısı faz paragrafından mekanizma–insan verisi ayrımının anlatıldığı paragrafa taşındı.
6. **Kaynak numaraları:** İlk geçiş sırasına göre yeniden numaralandı (1–7); `kaynak-N` hedefleri ve metin içi atıflar birlikte güncellendi. FDA bağlantısı kanonik yola alındı (kısa adres `utm_source=chatgpt.com` ile yönleniyordu).
7. **SSS ile gövde uyumu:** Gövdedeki üç soru Dr. Aksoy'un gerçek yanıtlarındaki soru sözcükleriyle aynı yapıldı (soru 1 ve 2'de önceki turdaki yeniden yazım kaldırıldı).
8. **Dil/ses:** Özet ve ledeler sadeleştirildi; kısa vurgu cümleleri, soru sormanın olağan olduğunu söyleyen güvence cümlesi ve umut/aceleye ilişkin bir duygu cümlesi eklendi (hekim deneyimi veya klinik gözlem uydurulmadı). RedFlagBox giriş cümlesinin dilbilgisi, SSS giriş cümlesi, "Bir uygulama üzerinde karar verilirse" gibi edilgen kalıplar düzeltildi. Meta açıklama ve manifest açıklaması yeniden yazıldı.

**Bilerek yapılmayanlar:** Evidence etiketi eklenmedi (gerçek bir kanıt değerlendirmesi olmadan derece uydurulmaz; Codex'in kararı korundu). Bilimsel Editör Notu imzalı hekim notu olarak yazılmadı; Dr. Alper Mumcu incelemesi bekliyor.

Doğrulama: `build:ci` geçti (143 sayfa, 163 SEO denetimi); yerleşik HTML'de 1 H1, yinelenen ID yok, kırık anchor yok, FAQPage 3 soru, iki ilgili şemada `reviewedBy` yok; `diff --check` temiz; leksikon uyarıları yalnızca bu makale dışında/rapor dosyasında. Commit/push/deploy yapılmadı.

## Dördüncü tur — Evidence etiketleri, hekim yanıtları, Mumcu teyidi (1 Ekim 2026)

**Dr. Aksoy'un yanıtları (gerçek, kendi mesajı):** Üç soruya verdiği yanıtlar gövdeye işlendi: yurt dışı yöntem (`off-label`), en sık yanlış anlaşılan nokta (`pazarlama-bilim`), "deneyebiliriz" koşulları (`uc-soru`). Düzeltmeler yalnızca biçim: başa "Bu konuda", "gebelik, canlı doğum ya da" çıkarıldı (menopoz yayınına uymuyor), "uygulanmasının" → "uygulamanın". Ben çapası 3 pasaj (üst sınır). Özgün ve düzenlenmiş halleri JSON kaydında.

**Evidence etiketleri (Dr. Aksoy talimatı):** Rehber tek tedaviyi derecelendirmediği için yalnızca iki bulgu etiketlendi, ikisi için de önce gerçek dayanak arandı.
- *Orta (3):* beklenti/bağlam kişinin bildirdiği sonuçları etkileyebilir. Dayanak: Hróbjartsson & Gøtzsche, Cochrane 2010 (PMID 20091554) — 234 randomize plasebo çalışması; genel olarak klinik açıdan önemli etki yok, hasta bildirimli sonuçlarda sınırlı etki, yalnızca %8'inde düşük yanlılık riski. Bu kaynak makaleye [6] olarak eklendi.
- *Sınırlı (2):* fraksiyonel CO2 lazerin GSM'de kısa vadeli yararı. Dayanak: Zulfikaroglu & Zulfikaroglu, Int Urogynecol J 2026 (PMID 42593504) — sham kontrollü çalışmalarda yarar küçülür, kesinlik sınırlı. Makaleye [9] olarak eklendi; yalnızca PubMed özeti okundu. 2018 FDA uyarısının "etkinlik belirlenmemişti" ifadesine bu daha yeni veri eklenmiş oldu; kapsamı (GSM, yalnız CO2 lazer; RF ve estetik amaç dışarıda) metinde belirtildi.
- Meta-analize otomatik 5 verilmedi; Helsinki, FDA/NIH tanımları ve yöntem açıklamaları etiketsiz bırakıldı (kanıt iddiası değil).

**Mumcu teyidi:** Dr. Aksoy "Mumcu teyidi tamam" dedi (KC beyanı; yazılı not yok). Bilimsel Editör Notu (Kanıt Düzeyi 2–3) imzası Dr. Alper Mumcu olarak geri kondu; yazar kutusundaki "Bağımsız inceleme bekleniyor" ve şemadan `reviewedBy` çıkaran kod kaldırıldı. Açık nokta: bu teyit, Evidence etiketleri ve yeni cümleler yazılmadan önce verildi; not metni ve yeni içerik Mumcu tarafından ayrıca görülmemiş olabilir.

## Mumcu ek teyidi (2 Ekim 2026)

Dr. Aksoy "mumcu tamam" dedi (KC beyanı; yazılı not yok). Dördüncü turdaki açık nokta kapandı: teyit, ilk onaydan sonra eklenen Cochrane/2026 meta-analizi cümlelerini, Evidence etiketlerini, Bilimsel Editör Notu metnini ve üç hekim gövde pasajını kapsıyor. Kodda değişiklik yok; yalnızca onay kaydı, klinik katkı JSON'u ve yazar logu güncellendi. Commit/push/deploy yapılmadı.
