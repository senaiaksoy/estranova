# Magnezyum menopozda ne işe yarar — yeniden yapılandırma için araştırma notu

Tarih: 26 Ekim 2026. Yetki: devir notundaki sıra (kapsam kapısı → worktree → araştırma → notu sun, onaysız yazıya geçme). Bu not makaleyi değiştirmez; commit, push veya deploy yetkisi yok.

Hedef makale: `src/pages/zamansiz-yasam/vitaminler/magnezyum-menopozda-ne-ise-yarar.astro` (`origin/main` `3642b162` ile aynı; son içerik commit'i `f5954fd3`, 13 Ekim 2026; o commit yalnızca RelatedReadings bağlantısını değiştirdi, son metin turu 12 Ekim). Skill: `.claude/skills/estranova-deneysel-molekul/SKILL.md`. Yazar `senai-aksoy`, tür `clinical-guide`, tıbbi inceleyen Dr. Alper Mumcu. Worktree: `.claude/worktrees/magnezyum-dm`, dal `content/magnezyum-deneysel-molekul`.

Kaynaklar: PubMed ve ClinicalTrials.gov MCP (26.10.2026); Tarım ve Orman Bakanlığı Kısıtlı Maddeler Listesi PDF (son güncelleme 21.10.2026); TİTCK ruhsatlı ürünler xlsx (16.10.2026); EFSA UL özeti (Version 11, Ağustos 2025); mevzuat.gov.tr. Haber ve ürün sayfaları yalnızca "dolaşan iddia" kanıtı olarak kullanıldı.

Kreatin durumu: `content/kreatin-deneysel-molekul` worktree'si açık, ama `main`'in üzerinde henüz commit yok. Dosya çakışması yalnızca `src/data/article-approvals.ts` ve `article-log.md` satırlarında olası.

## 0. Kapsam kapısı

- Site/bölüm: Estranova, `/zamansiz-yasam/vitaminler/` — evet.
- Konu: tek molekül — evet.
- Kanıt boşluğu: **yalnızca bir kısmı.** Mevcut yazı belirti odaklı bir klinik rehber (uyku, kramp, kabızlık, kaygı/çarpıntı, form, güvenlik) ve uzun yaşam, beyin veya "herkes eksik" vaatlerini **hiç ele almıyor**. Bu vaatler yalnızca SSS'de bir cümleyle geçiyor ("beyin sağlığı, hafıza veya uyku için önerilen başka magnezyum çeşitleri… pazarlama iddiaları kanıtlardan ileri gidiyor").
- **Sonuç: "karışık durum".** Mevcut altı belirti bölümü bu turda yeniden yazılmaz (12 Ekim'de beş tur audit ve iki onaydan geçti; 2023–2026'da onları geçersiz kılan daha büyük çalışma bulunmadı). Skill yalnızca **yeni bir bölüm** ve ona bağlı modüller için uygulanır: kanıt merdiveni, iddia haritası, menopoz/40+, bilinmeyenler.
- Çakışma bildirimi: Skill'in çekirdek listesi (çok eksenli tablo, kimler kullanmamalı vb.) tam yazı varsayıyor. Bu yazıda güvenlik ve "kimler dikkatli olmalı" zaten var; tekrarlanmaz, yeni bölüm oraya bağlanır.

## 1. Mevcut yazıyı etkileyen bulgular

1. **Kural ihlali (düzeltilmeli, soru değil):** Satır 24–26 hero'yu önce makale yoluyla arıyor (`submenuHeroByRoute['/…/magnezyum-menopozda-ne-ise-yarar/'] ?? …vitaminler/`). Makale yolu haritada var, yani sayfa makale görselini hero olarak gösteriyor. CLAUDE.md'deki kesin kurala göre `submenuHeroByRoute['/zamansiz-yasam/vitaminler/']!` olmalı.
2. **Türkiye üst sınırı yazıda yok.** TGK Takviye Edici Gıdalar Tebliği (2013/49) Ek-3: 11 yaş ve üzeri için günlük en fazla **250 mg magnezyum** (4–10 yaş 125 mg); limit etiket beyanı üzerinden. Yazı yalnızca Avrupa 250 / ABD 350 diyor. Eklenirse "Tebliğ'in Ek-3'üne göre" diye tarihli yazılır. **Açık nokta:** Ek-3'ü İEİS'in konsolide kopyasından okuduk (ikincil). mevzuat.gov.tr'deki metin 17.09.2017 değişikliğine kadar işlenmiş, sonrasında değişiklik görünmüyor; ama Ek'ler ayrı dosyada ve resmî kopyadan okunmadı. Kısıtlı Maddeler Listesi'nde (21.10.2026) magnezyuma özgü satır yok; yalnızca "31/12/2025 öncesi kullanılan kaynaklar" ekinde litotamniyon ve kimyasal sentez geçiyor.
3. **PPI (mide koruyucu) ile hipomagnezemi yazıda yok.** 40+ kadınlarda yaygın bir ilaç grubu. Gözlemsel meta-analiz RR 1,43 (PMID 26108134). FDA'nın 2 Mart 2011 tarihli güvenlik duyurusu ikincil kaynaklardan doğrulandı; FDA sayfası 404 döndü. Bu, "eksiklik riski kimde gerçek?" sorusunun en somut yanıtı; "herkes eksik" iddiasının karşısına konabilir.
4. **Böbrek riskine sayı eklenebilir.** Yaşlılarda kreatinin klirensi ≤28,2 mL/dk ve günde ≥900 mg magnezyum oksit birlikteyse hipermagnezemi %53,1 (Ishii 2023, PMID 37897255, vaka-kontrol, Japonya). Bu doz bileşik dozu, öneri değil.
5. **Devam eden menopoz çalışması:** NCT07235878 (Northumbria Üniversitesi, ortak Vitabiotics). Perimenopozda 40–60 yaş, 12 hafta, magnezyum hidroksit 375 mg, n=58; birincil sonuç çalışma belleği, ikincil MENQOL, uyku, kaygı, depresyon. Birincil bitiş 18.10.2026, sonuç yok. "Bilinmeyenler" bölümünün güncelleme gerekçesi.

## 2. Kanıt merdiveni (yalnızca uzun yaşam, beyin ve "herkes eksik" vaatleri için)

1. **Mekanizma:** Yüzlerce enzimde kofaktör; sağlam (yazıda zaten [12]). "L-treonat beyin magnezyumunu artırır" yalnızca sıçan ve hücre verisi (PMID 27178134); insanda beyin magnezyumu ölçülmedi.
2. **Hayvanda ömür:** Çelişkili. Progeria faresinde ömür uzadı (PMID 32875720); TRPM6 eksik farede fenotip düzeldi (PMID 27991852); fisyon mayasında ise magnezyum *kısıtlaması* ömrü uzattı (PMID 33970532). ITP'de magnezyum testi bulunamadı (iki arama). Yönü bile tutarlı değil.
3. **İnsanda biyobelirteç:** Yaşlanma biyobelirteci (telomer, epigenetik saat) son noktalı RKÇ yok ("magnesium (telomere OR epigenetic clock OR biological aging) supplementation trial" 0 sonuç; "magnesium telomere length" 26 sonuç, RKÇ yok). Mendel randomizasyonu: genetik olarak tahmin edilen magnezyum düzeyi ile telomer uzunluğu arasında ilişki yok (Zhu 2026, PMID 42410770).
4. **İnsanda işlev:**
   - Biliş/L-treonat: Lopresti 2026 (PMID 41601871; n=100, 18–45 yaş, uykudan memnun olmayanlar, 6 hafta): NIH toplam biliş skorunda küçük fark (p=0,043), "tahmini beyin yaşı 7,5 yıl" ifadesi bu çalışmadan; Raven testinde fark yok, saatle ölçülen uykuda fark yok; üretici ürünü. Liu 2016 (PMID 26519439; n=44, 50–70 yaş, üretici yazarlar): olumlu. Ni 2023 (PMID 37520407; n=109, %100 kadın, meme kanseri cerrahisi sonrası, 12 hafta): biliş, ruh hali ve uykuda fark yok. Peri/postmenopozal veri yok.
   - Kas/işlev (yaşlı kadın): Veronese 2014 (PMID 25008857; n=139, ort. 71,5 yaş, 12 hafta, plasebosuz): kısa fiziksel performans skorunda küçük artış, kas gücünde fark yok.
5. **İnsanda güvenlik:** Kısa sürede iyi tolere; en uzun takviye RKÇ'si 24 hafta. Yıllarca kullanım için RKÇ güvenlik verisi yok. Böbrek ve ilaç riskleri yukarıda (§1).
6. **Sert sonlanım:** Diyetle alınan magnezyum ölümle ters ilişkili, **takviye ilişkili değil** (Bagheri 2021, PMID 33684200; 19 kohort, 1,17 milyon kişi, gözlemsel). Ömür veya hastalık son noktalı takviye RKÇ'si yok.

"Herkes eksik" iddiası: NHANES'te 60 yaş üstü ABD'li yetişkinlerin yaklaşık %60'ı tahmini ortalama gereksinimin altında alıyor (PMID 38892711). Bu **alım** verisi; düşük serum magnezyumu veya klinik eksiklik değil, Türkiye'ye genellenemez.

## 3. Çok eksenli değerlendirme (uzun yaşam/beyin vaatleri için)

| Eksen | Değer | Gerekçe |
|---|---|---|
| Etkinlik kanıtı | Zayıf | Biliş için küçük, üretici destekli, çelişkili RKÇ'ler; ömür için insan verisi yok |
| Güvenlik kanıtı | Orta | Kısa sürede iyi tolere; böbrek hastalığında birikim, ilaç etkileşimi; uzun dönem RKÇ yok |
| Mekanizma inandırıcılığı | Orta | Temel biyoloji sağlam; "beyne geçen form" iddiası hayvan verisi |
| Ürün ve düzenleyici durum | Orta | Çoğu ürün takviye; ilaç olarak ruhsatlı ~19 oral ürün (oksit/karbonat ağırlıklı); etiket sapması sık (Polonya'da 116 üründen %58,7 tolerans dışı, PMID kaydı: Puścion-Jakubik 2021, DOI 10.3390/nu13103416) |
| Geri dönüşebilirlik | Güçlü | Bırakınca etki ve yan etki geçer; böbrek yetmezliğindeki hipermagnezemi istisna |

## 4. İddia haritası (kanıt sırasına göre)

| İddia | Sınıf | Dayanak |
|---|---|---|
| Tansiyonu biraz düşürür | Test edildi, desteklendi (küçük; yüksek tansiyonlu ve düşük magnezyumlularda) | Argeros 2025, PMID 41000008: 38 RKÇ, SKB −2,8 / DKB −2,1 mmHg; normal tansiyonda anlamlı değil |
| Migreni önlemeye yardım eder | Test edildi, desteklendi (orta) | AAN/AHS 2012 "muhtemelen etkili" (PMID 22529203) |
| Kan şekeri / insülin duyarlılığı | Test edildi, kısmen desteklendi (mütevazı) | Veronese 2021 (PMID 34836329); HbA1c'de sınırda |
| Ruh hali / depresyon | Test edildi, düşük kesinlik | Tarleton 2017 açık etiket; 7 RKÇ'lik meta-analiz (PMID 38213402) |
| Hafızayı güçlendirir, "beyin yaşını geriletir" (L-treonat) | Test edildi, zayıf ve çelişkili | Lopresti 2026 (+, küçük), Ni 2023 (−) |
| Sıcak basmasını azaltır | Test edildi, desteklenmedi | Park 2015 (yazıda [18]) |
| Kemiği korur / kırığı önler | Kırık için henüz test edilmedi; KMY yalnızca gözlemsel | WHI-OS (PMID 24500155): KMY %2–3 yüksek, kırıkta fark yok |
| Perimenopoz belirtileri, biliş, uyku | Test ediliyor, sonuç yok | NCT07235878 |
| "Çoğumuz eksiğiz" | Alım için kısmen doğru (ABD); klinik eksiklik için genellenemez | NHANES (PMID 38892711) |
| Ömrü uzatır, yaşlanmayı yavaşlatır | Bu haliyle test edilemez; telomer için MR'da ilişki yok | PMID 42410770, 33684200 |

İlk dört satır (tansiyon, migren, kan şekeri, ruh hali) kanıtlı ama yazının menopoz-belirti çerçevesinin dışında. Bkz. karar 2.

## 5. Dolaşımdaki iddialar (iki bağımsız yerde görüldü)

- **"Beyin magnezyumu", hafıza, "beyin sisi", "beyin yaşını X yıl geriletir":** Türk sağlık haberleri (NTV "Beyin sisi: çözüm magnezyumda mı?", NTV hafıza galerisi; Diken'de BBC kaynaklı ikincil özet), yabancı ürün ve perakende sayfaları, sektör haberi (NutraIngredients "brain longevity"). "7,5 yıl" rakamı Lopresti 2026'dan, "9 yıl" bir ürün sayfasından, kaynaksız.
- **"Yaşadığınız birçok sorunun nedeni magnezyum eksikliği olabilir", kadınlara özel uyarı listeleri:** Milliyet ve NTV galerileri.
- **"Menopoz belirtilerini hafifletir":** Milliyet; ayrıca NCT07235878 kaydının kendisi magnezyumun sosyal medyada menopoz için önerildiğini gerekçe olarak yazıyor.
- **"Longevity/anti-aging":** ürün adlarında ve uzun yaşam bloglarında; bağımsız kanıt değerlendirme sitesi bu kullanımı "önerilmez" olarak işaretliyor.
- Kişi, kullanıcı adı, alıntı, satıcı bilgisi toplanmadı; yazıya da girmez.

## 6. Düzenleyici durum (tarihli)

- **Türkiye, takviye:** TGK Takviye Edici Gıdalar Tebliği (2013/49) Ek-3, 11 yaş+ için günlük 250 mg (açık nokta §1.2). Ek-2'de izinli formlar arasında oksit, sitrat, bisglisinat, malat, taurat, klorür, karbonat, hidroksit var; L-treonat listede yok (ayrıca bakanlık değerlendirmesine tabi olabilir; doğrulanmadı, yazıya girmez). Piyasa denetiminde mineraller için −%20/+%45 sapma payı.
- **Türkiye, ilaç:** TİTCK 16.10.2026 listesinde A12CC (magnezyum preparatları) altında 29 ruhsat; ağızdan alınanların çoğu oksit veya karbonat+oksit. Bisglisinat, malat, treonat ruhsatlı listede yok. Antasitlerde magnezyum karbonat/hidroksit kombinasyonları var.
- **AB:** Takviye kaynaklı magnezyum UL'si 250 mg/gün, EFSA özet tablosu Version 11 (Ağustos 2025) itibarıyla değişmedi. 432/2012 yetkili beyanları arasında yorgunluk, kas, sinir sistemi, psikolojik işlev, kemik var; **uyku, kaygı, stres, hafıza için yetkili beyan yok** (konsolide kopya, ikincil).
- **ABD:** UL 350 mg (IOM 1997, yazıda [11]). NIH ODS otomasyona 403 döndürdü; yokluk iddiası yapılmaz.
- **WADA 2026:** magnezyum yasaklı değil (resmî site otomasyona yanıt vermedi; ikincil kopyadan okundu). Sporcuya yönelik bir cümle gerekmiyor.

## 7. Menopoz ve 40+

- Peri/postmenopozda tek başına magnezyumla yayımlanmış belirti RKÇ'si yalnızca Park 2015 (sıcak basması, olumsuz, meme kanseri öyküsü olan kadınlar). Uyku çalışmaları menopoza özgü değil (yazıda belirtiliyor). Biliş için kadına özgü tek RKÇ meme kanseri cerrahisi sonrası (Ni 2023, olumsuz). Menopoz karışım ürün çalışmaları (PMID 42742055, 27785106) magnezyumu ayrıştıramaz.
- MHT ile birlikte magnezyum üzerine veri bulunamadı.

## 8. Önerilen yapı (onay bekliyor)

Mevcut sıra korunur; "Böbrek Hastalığı ve İlaçlar" bölümünden önce **tek yeni H2**:

**"Beyin, Uzun Yaşam ve 'Hepimiz Eksiğiz' Vaatleri"** (çalışma başlığı)
1. Lede: SSS'deki pazarlama cümlesine bağlanan kısa bir giriş.
2. Kısa kanıt merdiveni (altı basamak, sade liste; nokta dizisi yok).
3. İddia haritası tablosu (yukarıdaki §4'ün sadeleştirilmiş hali).
4. "Eksiklik kimde gerçek?" paragrafı: PPI, diüretik, emilim sorunu, yetersiz beslenme; "herkes eksik" verisinin alım verisi olduğu.
5. Bilinmeyenler: NCT07235878 sonuçları; L-treonatın menopozda test edilmemiş olması; uzun süreli güvenlik.

Ek küçük değişiklikler: hero düzeltmesi; güvenlik bölümüne Türkiye 250 mg cümlesi (açık nokta kapanırsa), PPI cümlesi ve böbrek sayısı; Kısa Klinik Yanıt'a bir cümle ("Beyin ve uzun yaşam vaatleri için insan kanıtı zayıf"); `modifiedDate`/`lastUpdated`; TOC; yeni kaynaklar 21'den itibaren; Bilimsel Editör Notu'na bir cümle (Mumcu onayı gerekir).

## 9. Kullanıcı kararları

1. **Yapı:** §8'deki tek yeni bölüm mü, yoksa uzun yaşam vaatleri yalnızca kısa bir paragraf olarak mı kalsın?
2. **Kanıtlı ama çerçeve dışı kullanımlar (tansiyon, migren, kan şekeri):** (a) yalnızca iddia haritasında birer satır, (b) her biri için kısa paragraf, (c) hiç girmesin. Öneri: (a); başlık menopoz-belirti odaklı, ayrı bölüm yazıyı dağıtır.
3. **Türkiye 250 mg:** Ek-3 resmî kopyadan doğrulanana kadar yazıya alınmasın mı, yoksa "İEİS konsolide metni" değil Tebliğ adıyla, doğrulama sonrası mı eklensin? Öneri: yayından önce resmî Ek'i okuyup ekleyelim.
4. **Hekim soruları:** Yeni bölüm için Dr. Aksoy'a konuya özgü en fazla 3 soru sormak için yetki. Önerilen konular (yanıt önerilmez): L-treonat/"beyin magnezyumu" soran hastaya yaklaşım; PPI veya diüretik kullanan menopozdaki kadında magnezyumu ne zaman düşündüğü; "uzun yaşam için magnezyum" sorusu. Mevcut dört SSS yanıtı birebir korunur.
