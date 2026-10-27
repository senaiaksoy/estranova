# Kreatin menopozda ne işe yarar — yeniden yapılandırma için araştırma notu

Tarih: 26 Ekim 2026. Yetki: Devir notundaki "kreatin yazısını `estranova-deneysel-molekul` skill'iyle gözden geçir; araştırma notunu sunmadan yazıya geçme" talimatı. Bu not makaleyi değiştirmez; commit, push veya deploy yetkisi yok.

Hedef makale: `src/pages/zamansiz-yasam/vitaminler/kreatin-menopozda-ne-ise-yarar.astro` (`origin/main` `554a99a6` ile aynı). Son içerik commit'leri `b941ed60` ve `34bbcf9b` (1 Ekim 2026: audit, humanize, Dr. Aksoy SSS yanıtları, dış değerlendirme rötuşu). 13 Ekim 2026 tarihli `f5954fd3` yalnızca bir iç bağlantıyı değiştirdi (kemik makalesi birleşmesi). Başka oturumda içerik değişikliği yok. Yazar `senai-aksoy`, tür `clinical-guide`, tıbbi inceleyen Dr. Alper Mumcu. SSS: `src/data/article-faqs.ts` içinde 5 hekim yanıtı; birebir korunacak.

Kaynaklar: PubMed ve ClinicalTrials.gov MCP; TİTCK ruhsatlı beşeri tıbbi ürünler xlsx (16.10.2026); Tarım ve Orman Bakanlığı takviye edici gıdalar kısıtlı maddeler listesi PDF (son güncelleme 21.10.2026); FDA GRAS bildirimi GRN 931; USADA. Haber, ürün ve ticari sayfalar yalnızca "dolaşan iddia" kanıtı olarak kullanıldı ve **ikincil** diye işaretlendi.

## 0. Kapsam kapısı

- Site/bölüm: Estranova, `/zamansiz-yasam/vitaminler/` — evet.
- Konu: tek molekül (kreatin; monohidrat ve hidroklorür formları) — evet.
- Kanıt boşluğu: **yalnızca bir kısmı.** Kas kütlesi ve güç için menopoz sonrası kadınlarda randomize çalışmalar ve meta-analizler var (insan, işlev basamağı). Kemik mineral yoğunluğu iki yıllık iyi tasarlanmış bir RCT'de test edilip desteklenmedi. Kanıt boşluğu beyin/biliş, duygu durumu, uyku ve menopoz belirtileri, adet düzeni ve uzun yaşam/yaşlanma karşıtı vaatlerde.
- **Sonuç: skill "karışık durum" kuralıyla uygulanır.** "Kas ve Güç" ve "Kemik" bölümleri normal `clinical-guide` düzeninde kalır (yalnızca yeni meta-analizle güncellenir). Skill modülleri (kanıt merdiveni, iddia haritası, çok eksenli tablo, bilinmeyenler) yalnızca kanıtsız vaatlere uygulanır.
- Çakışma bildirimi: Yazıda zaten beyin sisi, duygu durumu ve adet düzeni için temkinli ayrı bölümler var. Bunlar silinmez; tek bir "kanıtı erken olan vaatler" katmanına bağlanır. **Uzun yaşam vaadi yazıda hiç ele alınmıyor**; bu bir boşluk.

## 1. Mevcut yazıyı etkileyen en önemli bulgular

1. **Doz cümlesi skill §6'yı ihlal ediyor.** "Form ve Doz" bölümünde: *"Sağlıklı erişkinlerde kullanılan genel yaklaşım, günlük 3–5 gram kreatin monohidrattır; başlangıçta yüksek doz kullanılan bir yükleme dönemi şart değildir"* (kaynak 14). Bu bir çalışma betimlemesi değil, genel kullanım önerisi. Kaldırılmalı ya da "bilimsel görüş belgesinde şu dozlar incelendi" biçiminde betimlemeye çevrilmeli. Bölüm başlığı "Form ve Doz" da doz rehberi izlenimi veriyor; "Form ve Etiket" gibi bir başlık önerilir.
2. **Türkiye'ye özgü düzenleyici sınır yazıda yok.** Tarım ve Orman Bakanlığı listesinde (son güncelleme 21.10.2026) "Kreatin / Fosfokreatin (birlikte veya ayrı ayrı)" için 11 yaş ve üzeri **günlük en fazla 3 g**; satır güncelleme tarihi **21.09.2026** (ilk yayım 22.01.2016). 4–10 yaş için değer yok. Ayrıca "Trikreatin malat" için günlük en fazla 4 g (16.06.2017). Kas ve güç yararının belirgin olduğu çalışmaların çoğu günde ≥5 g ile ve direnç egzersiziyle yapıldı; ≤3 g ve egzersizsiz çalışmalarda ölçülebilir yarar görülmedi (Naddafha 2026). Bu iki bilgi yan yana yazılınca okur "Türkiye'de satılan takviyeyle çalışmadaki dozlar aynı değil" bilgisini alır; ancak bu doz önerisine dönüşmemeli. Nasıl çerçeveleneceği hekim sorusu (bölüm 9, soru 3).
3. **Kaynak 5'in yılı yanlış.** Korovljev ve ark. (CONCRET-MENOPA) yazıda 2026 olarak geçiyor; PubMed'e göre **2025** (J Am Nutr Assoc, 25 Ağustos 2025, PMID 40854087, [DOI](https://doi.org/10.1080/27697061.2025.2551184)). Gövdede de "2026'da yayımlanan" ifadesi yalnızca kaynak 4 (Ostojic 2026) için kullanılmış; kaynak listesindeki yıl düzeltilecek.
4. **Yazı yayımlandıktan sonra çıkan iki önemli çalışma:**
   - **Baker ve ark. 2026** (Eur J Appl Physiol, 24 Ekim 2026, PMID 42926218, [DOI](https://doi.org/10.1007/s00421-026-06481-6); kayıt NCT07027800): 51 perimenopozal kadın (46 ± 5 yaş), kreatin monohidrat + 6 hafta yüksek yoğunluklu direnç egzersizi, plasebo ve egzersizsiz kontrol. **Stroop tepki süresi gruplar arasında farklı değil.** Keşif analizinde prefrontal oksijenlenme, uyku düzenliliği (giyilebilir cihazla) ve "sıcaklık hassasiyeti günleri" kreatin lehine. Küçük, kısa, keşif amaçlı; yazarlardan biri giyilebilir cihaz şirketi çalışanı. Beyin sisi bölümüne "perimenopozda ilk randomize biliş testi: fark yok" diye girmeli; uyku ve sıcaklık sinyali yalnızca keşif bulgusu olarak.
   - **Eckert ve ark. 2025** (Br J Nutr, PMID 41189312, [DOI](https://doi.org/10.1017/S0007114525105588)): depresyon belirtileri için 11 RCT, 1.093 kişi. SMD −0,34 (%95 GA −0,68 ile −0,00), Hamilton ölçeğinde ~2,2 puan; **klinik önem eşiği olan 3 puanın altında**; GRADE **çok düşük**; yanlılık kreatin lehine. Duygu durumu bölümü şu an tek bir 2012 RCT'sine dayanıyor; bu meta-analiz eklenmeli.
5. **Yazıda olmayan bir güvenlik sinyali:** Bipolar depresyonda kreatin kullanılan çalışmalarda hipomani/mani bildirildi (Can J Psychiatry 2026 sistematik derleme, PMID 41558805, [DOI](https://doi.org/10.1177/07067437251408171): kreatin alan 17 katılımcının 2'sinde hipomani/mani). Küçük sayı, nedensellik kanıtlanmış değil; ama "kimler dikkatli olmalı" listesine bipolar bozukluk öyküsü eklenmeli. Hekim sorusu (bölüm 9, soru 2).
6. **Kas bölümüne eklenebilecek ikinci meta-analiz:** Chen ve ark. 2026 (Int J Med Sci, PMID 42158825, [DOI](https://doi.org/10.7150/ijms.130435)): egzersize eklenen protein/amino asit/kreatin, 14 RCT, 763 kadın; kas kütlesinde anlamlı ek etki yok; bench press ve el kavrama gücünde küçük artış, "özellikle kreatin kullanan çalışmalarda"; kemikte etki yok. Mevcut "sınırlı ama tutarlı" çerçevesini destekliyor, abartıyı frenliyor.

## 2. Kanıt merdiveni (yalnızca kanıtsız vaatler için)

1. **Mekanizma:** Fosfokreatin–ATP tamponu; kas başlıca depo, beyinde de çalışıyor (mevcut kaynak 8, 9). Oral takviye beyin kreatinini artırabiliyor ama kastakine göre sınırlı (McMorris 2024, mevcut kaynak 13). Menopoz geçişinde kreatin metabolizmasının değiştiği öne sürülüyor; kadın verisi az.
2. **Hayvanda ömür:** Bender ve ark. 2008 (Neurobiol Aging, PMID 17416441, [DOI](https://doi.org/10.1016/j.neurobiolaging.2007.03.001)): kreatinle beslenen farelerde **"sağlıklı ömür"** medyanı %9 uzun, nörodavranış testlerinde daha iyi. Tek laboratuvar, tek fare soyu; replikasyon bulunamadı. Hastalık modellerinde (ALS, Huntington fareleri) ömürde küçük uzama bildirimleri var (ör. PMID 16140286); bunlar sağlıklı yaşlanma verisi değil. NIA Interventions Testing Program (ITP) için PubMed'de "ITP + kreatin" yayını **bulunamadı**; ITP'nin kendi bileşik listesine erişilemedi (sayfa 405 döndü), bu nedenle "ITP test etmedi" diye **yazılmamalı**; "bağımsız ömür programı sonucuna ulaşamadık" denebilir.
3. **İnsanda biyobelirteç:** Beyin kreatini artışı (MRS): Korovljev 2025 (36 kadın, kreatin HCl 1.500 mg/gün, frontal beyin kreatini +%16,4, plasebo +%0,9); Alzheimer pilotu (20 hasta, 20 g/gün, 8 hafta, beyin toplam kreatini +%11; kontrol grubu yok; PMID 40395689). Serum kreatinin artar (bölüm 6).
4. **İnsanda işlev:**
   - Biliş, genel erişkin: Xu 2024 (16 RCT, 492 kişi; bellekte SMD 0,31, GRADE orta; genel biliş ve yürütücü işlevde fark yok; mevcut kaynak 12). McMorris 2024: sonuçlar tutarsız (mevcut kaynak 13). Marshall 2026 (Nutr Rev, 55+ yaş, 6 çalışma, 1.542 kişi; yalnızca 2'si çift kör müdahale, 4'ü kesitsel diyet anketi; kalite çoğunlukla "zayıf"; PMID 40971619, [DOI](https://doi.org/10.1093/nutrit/nuaf135)).
   - Biliş, peri/postmenopoz: Korovljev 2025 (tepki süresinde iyileşme, düşük doz HCl, monohidrat değil); **Baker 2026 (monohidrat + egzersiz, Stroop'ta grup farkı yok).** İkisi de küçük ve kısa.
   - Demans: kontrollü çalışma yok; kapsam derlemesi (Whitford 2026, Ageing Res Rev, PMID 42668123, [DOI](https://doi.org/10.1016/j.arr.2026.103317)) RCT bulamadı; tek insan verisi kontrolsüz 20 kişilik pilot.
   - Duygu durumu: Eckert 2025 (yukarıda; çok düşük güven); Lyoo 2012 (mevcut kaynak 6).
   - Uyku/menopoz belirtileri: Baker 2026 keşif bulguları dışında RCT yok. Korovljev 2025'te "ruh hali dalgalanmaları" p=0,06 (anlamlı değil).
   - Adet düzeni: yalnızca kesitsel diyet verisi (mevcut kaynak 7); takviye çalışması yok.
5. **İnsanda güvenlik:** Postmenopozal meta-analizde yan etkiler plaseboya benzer, böbrek göstergeleri değişmedi (Naddafha 2026). Böbrek meta-analizi: serum kreatinin +0,13 mg/dL, eGFR ve üre farkı yok; 1 yıldan uzun RCT verisi sınırlı (Tsiaras 2026, mevcut kaynak 10). Kadınlarda güvenlik meta-analizi: toplam yan etki, mide-bağırsak ve kilo artışında fark yok; ama izleme sistemli değil (mevcut kaynak 11). Yeni: bipolar bozuklukta hipomani/mani bildirimi (bölüm 1.5).
6. **Sert sonlanım:** Takviyeyle ömür, hastalık veya ölüm sonlanımlı RCT **yok**. Tek gözlemsel veri: Ostojic 2025 (Appl Physiol Nutr Metab, PMID 40587884, [DOI](https://doi.org/10.1139/apnm-2025-0001)): NHANES 1999–2000, 4.041 kişi, tek 24 saatlik diyet anketi, 19,8 yıl izlem; besinle ≥1 g/gün kreatin alanlarda tüm nedenlere bağlı ölüm HR 0,85 (%95 GA 0,72–1,00); demografik ve yaşam biçimi ayarlamasıyla ilişki zayıflıyor. Takviye değil, besin; nedensellik göstermez. Mendel randomizasyonu aranmadı (açık nokta).

## 3. Çok eksenli değerlendirme

| Eksen | Değer | Gerekçe |
|---|---|---|
| Etkinlik kanıtı (kas/güç) | Orta | Postmenopozda 7 RCT'lik meta-analiz; küçük ama tutarlı fark; egzersizle birlikte |
| Etkinlik kanıtı (beyin, ruh hali, uyku, uzun yaşam) | Zayıf–sınırlı | Küçük, kısa, tutarsız RCT'ler; perimenopozda biliş testinde fark yok; ömür için yalnızca fare ve gözlemsel veri |
| Güvenlik kanıtı | Güçlü–orta | Çok sayıda RCT'de iyi tolere; böbrek göstergesi bozulmuyor ama kreatinin yükseliyor; 1 yıldan uzun veri az; bipolar sinyali küçük |
| Mekanizma inandırıcılığı | Güçlü (kas), orta (beyin) | Kasta iyi tanımlı; beyne geçiş sınırlı ve doza bağlı |
| Ürün ve düzenleyici durum | Orta | Türkiye'de ruhsatlı ilaç değil (TİTCK 16.10.2026 listesinde etkin madde olarak yok); takviye olarak Bakanlık listesinde 3 g/gün üst sınır; ürün saflığı ve etiket uyumu sorunları bildirildi (bölüm 7) |
| Geri dönüşebilirlik | Güçlü | Bırakılınca kas depolarının birkaç hafta içinde başlangıca döndüğü bilgisi görüş belgesine dayanıyor (mevcut kaynak 14; bu turda yeniden doğrulanmadı); kalıcı zarar bildirilmemiş |

## 4. İddia haritası

Her iddianın en az iki bağımsız kamuya açık yerde dolaştığı doğrulandı (bölüm 5). Kanıt sırasına göre:

| İddia | Sınıf | Dayanak |
|---|---|---|
| Menopoz sonrası kas ve gücü artırır (egzersizle) | Test edildi, desteklendi (küçük etki) | Naddafha 2026; Dos Santos 2021; Chen 2026 |
| Kemik erimesini önler | Test edildi, desteklenmedi (kemik yoğunluğu) | Chilibeck 2023; Naddafha 2026 |
| Belleği/zihinsel keskinliği artırır | Test edildi, tutarsız (genel erişkinde bellekte küçük sinyal) | Xu 2024; McMorris 2024; Marshall 2026 |
| Menopoz "beyin sisini" giderir | Test edildi, desteklenmedi / erken | Baker 2026 (fark yok); Korovljev 2025 (farklı form, küçük) |
| Depresyona iyi gelir | Test edildi, çok düşük güvenle küçük etki; klinik eşiğin altında | Eckert 2025; Lyoo 2012 |
| Uykuyu düzeltir, sıcak basmasını azaltır | Henüz yeterince test edilmedi (tek keşif bulgusu); test edilebilir | Baker 2026; NCT07729930 sürüyor |
| Adetleri düzenler | Henüz test edilmedi (yalnızca besinle kesitsel ilişki) | Ostojic 2024 |
| Ömrü uzatır / yaşlanmayı yavaşlatır | Fare: tek çalışmada sağlıklı ömür +%9; insan: bu haliyle test edilemez | Bender 2008; Ostojic 2025 (gözlemsel, besin) |
| Demansı önler/yavaşlatır | Henüz test edilmedi (RCT yok); test edilebilir | Whitford 2026; NCT06948149 sürüyor |

## 5. Dolaşan iddialar (kaynaklar ikincil, yalnızca iddianın varlığını göstermek için)

- "Menopozda beyin sisi ve uyku için kreatin": PsyPost haberi (Korovljev 2025 üzerine), Woman & Home kişisel deneyim yazısı, Yorkshire Evening Post / Newsletter haberi, bir hekim podcast'inde sosyal medya söyleminin aktarımı ("yorgun, uykusuz, sisli, menopozdaki herkes almalı"). Türkçe: Hürriyet "Kreatin dosyası", Sözcü "Kreatin çılgınlığı".
- "Uzun yaşam / yaşlanma karşıtı": Axios (Mayıs 2025, "Longevity's new muscle: Creatine"), bir takviye firmasının "uzun yaşam için kreatin" ürün lansmanı (Elysium Health), uzun yaşam takviyesi satıcılarının blogları ("fare ömrü %9 uzadı, yedi insan yılına eşit" ifadesi dahil; bu dönüştürme hiçbir çalışmada yok).
- Kullanıcı adı, kişisel hikâye, satıcı veya forum bağlantısı not edilmedi; yazıya taşınmayacak.
- Sık bildirilen istenmeyen etkiler (toplu, anonim): erken kilo/su artışı, mide-bağırsak yakınması (şişkinlik, ishal), kas krampı endişesi. RCT'lerde plaseboya göre fark gösterilemedi; tekrar eden şişkinlik ve kilo bildirimi okurun bırakma nedeni olarak değerli bir sinyal. Baker 2026'da "şişkinlik" günlük takip edilen belirtiler arasında.

## 6. Kreatinin ölçümü ve böbrek

- Takviye serum kreatininini artırır (ortalama +0,13 mg/dL; Tsiaras 2026), eGFR formülleri kreatinine dayandığı için tahmini süzme hızı yapay olarak düşük görünebilir. Yazıda bu zaten var; korunacak.
- Yeni eklenebilecek pratik cümle: tetkik isteyen hekime kreatin kullanımını söylemek (yazıda var). Sistatin C gibi alternatif ölçüm adı vermek doz/tanı rehberliği sayılmaz ama gereksiz teknik derinlik olabilir; karar yazım aşamasında.

## 7. Ürün kalitesi ve düzenleyici durum (tarihli)

- **TİTCK:** 16.10.2026 tarihli ruhsatlı beşeri tıbbi ürünler listesinde etkin madde olarak "kreatin" içeren ürün yok (aramadaki tüm eşleşmeler "pankreatin"). Kreatin Türkiye'de ilaç değil.
- **Tarım ve Orman Bakanlığı:** 21.10.2026 tarihli kısıtlı maddeler listesine göre kreatin/fosfokreatin 11 yaş ve üzeri günlük en fazla 3 g (satır güncellemesi 21.09.2026); trikreatin malat en fazla 4 g/gün. Liste PDF'i: Bakanlık sitesi.
- **FDA:** Kreatin monohidrat ABD'de takviye olarak satılıyor; ayrıca gıdalarda kullanım için GRAS bildirimi (GRN 931, AlzChem) "soru yok" yanıtı aldı (12 Kasım 2020; düzeltilmiş mektup sonradan). Kapsam: porsiyon başına 1 g kreatin düzeyinde belirli gıdalar.
- **WADA/doping:** USADA: "Kreatin sporda yasak değil"; takviye kaynaklı pozitif test ve sağlık olayı riski için üçüncü taraf sertifikalı ürün öneriyor (sayfa tarihi yok). WADA 2026 yasaklı listesinde kreatin bulunmadığı birincil PDF üzerinden **doğrulanmadı**; yazıda yalnızca "sporda yasaklı madde değildir" denilecekse USADA'ya dayanır.
- **Saflık/etiket:** Brezilya'da 149 ticari örneğin 32'si (%21) HPLC ile katkılı bulundu (Oliveira 2025, Food Chem, PMID 40306235, [DOI](https://doi.org/10.1016/j.foodchem.2025.144282)); kafein ve nişasta ile karıştırma tespiti için yöntem çalışmaları var (PMID 41412041, 40209364). Sakız (gummy) formunda etikete göre çok az veya hiç kreatin bulunmayan ürünler: 2024 NOW Foods testi (12 markadan 5'i) ve 2025 SuppCo testi — ikisi de **şirket testleri, ikincil, hakemli değil**; kreatinin sulu-asidik ortamda kreatinine dönüşmesiyle açıklanıyor. Yazıya "sakız formlarında etiket uyumu sorunları bildirildi" düzeyinde, marka adı olmadan girebilir.

## 8. Devam eden çalışmalar (ClinicalTrials.gov, 26 Ekim 2026)

- **NCT07729930** (Loughborough Üniversitesi): orta yaş kadınlarda kreatin monohidrat ve plasebo; biliş, kas gücü, yorgunluk, uyku, menopoz belirtileri, kemik belirteçleri. 38 kişi, işe alım sürüyor, birincil tamamlanma Kasım 2028.
- **NCT06948149** (Western University): hafif bilişsel bozuklukta kreatin + direnç egzersizi, 26 hafta, 140 kişi, Aralık 2027.
- **NCT05895747** (Utah Üniversitesi): tedaviye dirençli majör depresyonda antidepresana ek kreatin ve 5-HTP, 106 kişi, Temmuz 2027.
- **NCT07372144** (D'Or, faz 3): erken evre meme kanserinde kemoterapiye bağlı bilişsel gerilemeyi önlemede kreatin, 227 kişi, Haziran 2028. Kadın okur için ilgili ama menopoz çalışması değil.
- MENOCOG (Western Sydney Üniversitesi): postmenopozal kadınlarda 12 haftalık fizibilite RCT'si; üniversite sayfasında duyuruluyor, kayıt numarası bu turda **doğrulanmadı**.
- Tamamlanmış ama sonucu bu turda bulunmayan: NCT07580846 (ticari sponsor, gözlemsel uyum çalışması; yazıya girmesi önerilmez).

## 9. Hekim soruları (konuya özgü, en fazla 3; yanıt önerilmedi)

Mevcut 5 SSS yanıtı birebir korunur. Yeni soru yalnızca sizin gerçek yanıtınızla yayımlanır:

1. Kreatin uzun yaşam ya da yaşlanmayı yavaşlatma amacıyla kullanılabilir mi?
2. Bipolar bozukluğum ya da belirgin ruh hali dalgalanmalarım varsa kreatin kullanmadan önce neye dikkat etmeliyim?
3. Türkiye'de satılan kreatin takviyelerinde günlük miktar en fazla 3 gramla sınırlı; çalışmalardaki miktarlar ise çoğu zaman bundan yüksek. Bu fark okur için ne anlama geliyor?

## 10. Önerilen yapı (onaydan sonra)

Korunacak: açılış, "Kreatinin Vücuttaki Görevi", "Kas ve Güç" (Chen 2026 eklenerek), "Kemik", "Güvenlik" (bipolar sinyali eklenerek), "Karar Verirken İzlediğim Sıra", "Sonuç", 5 SSS, Mumcu notu (yeniden imzalanacak).

Değişecek/eklenecek:
- Kısa Klinik Yanıt: merdivenin özeti + en güçlü bilgi + güvenlik notu + kim dikkatli olmalı (70–120 kelime).
- Yazı başında tek bakışta merdiven: kas/güç ↔ beyin/ruh hali ↔ uzun yaşam için hangi basamağa çıkıldığını gösteren kısa liste veya tablo (literal nokta dizisi yok).
- Beyin sisi: Baker 2026 eklenir; Korovljev yılı düzeltilir.
- Duygu durumu: Eckert 2025 meta-analizi eklenir.
- Yeni bölüm: "Uzun Yaşam ve Yaşlanma Karşıtı İddialar" (fare verisi, gözlemsel ölüm verisi, test edilemezlik) + iddia haritası tablosu + çok eksenli tablo.
- "Form ve Doz" → "Form, Etiket ve Ürün Kalitesi": genel 3–5 g önerisi kaldırılır; Bakanlık sınırı tarihli olarak; saflık/sakız formu; çalışma dozları yalnızca betimleme.
- Yeni kısa bölüm: "Henüz Bilmediklerimiz" (bölüm 8'deki çalışmalar ve tarihleri).
- Kaynaklar: yeni kaynaklar eklenir; kaynak 12–14 başlıkları şu an Türkçeye çevrilmiş, diğerleri özgün İngilizce; tutarlılık için özgün başlıklar önerilir.

## 11. Açık noktalar

- ITP'nin kreatin test edip etmediği (ITP sayfasına erişilemedi).
- WADA 2026 listesinin birincil PDF üzerinden kontrolü.
- MENOCOG kayıt numarası.
- Kreatin ve ölüm/hastalık için Mendel randomizasyonu çalışması aranmadı.
