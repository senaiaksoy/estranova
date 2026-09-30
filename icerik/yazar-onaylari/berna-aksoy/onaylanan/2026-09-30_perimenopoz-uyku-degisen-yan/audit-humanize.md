# Perimenopozda Uykunun Gerçekten Değişen Yanı — yerel revizyon

30 Eylül 2026. Kapsam: hedef Astro sayfası, kendi SSS veri kaynağı, manifestte yalnızca hedef açıklama ve bu editoryal kayıt. Commit/push/deploy yapılmadı. Son bütün metin revizyonu için yeni yazar/tıbbi inceleme onayı kaydedilmedi; 2 Mayıs onayı bu değişikliklere genişletilmedi.

## Bulgular ve düzeltmeler
- NREM bütünü derin uyku diye anlatılıyordu. Hafif ve derin evreleri kapsadığı, yalnızca üçüncü evrenin derin olduğu düzeltildi.
- Östrojen–REM/progesteron–NREM eşlemesi ve herkeste derin uyku azalması fazla kesindi. Öznel yakınma ile ölçülen evreler ayrıldı; kişiye göre değişkenlik korundu.
- Sabaha karşı uyanma kortizolle açıklanıyordu. Saatin tek başına neden veya tanı göstermediği belirtildi.
- Geçicilik/kalıcı hasar güvencesi ve evrensel 7–10 yıllık geçiş süresi kaldırıldı. Belirti süresi ile perimenopoz süresi aynı kabul edilmedi.
- Üç hafta/üç ay yardım eşiği çelişkisi giderildi. Gündüz etkilenmesi ve mevcut uyarı belirtileri korundu; direksiyonda uyuklama açıklaştırıldı.
- Tekrarlanan özet ve açıklamalar kısaltıldı; Berna’nın mevcut onaylı iki arkadaş anlatısı korunarak sadeleştirildi. Yeni kişisel veya klinik deneyim üretilmedi.
- Makalenin esas işlevi evreleri, belirtileri ve seçenekleri açıklamak olduğundan experience-essay sınıflaması editorial-guide olarak düzeltildi. Berna byline değişmedi; Article schema korunuyor, MedicalWebPage kullanılmıyor. Sekiz başlıkla eşleşen TOC eklendi.
- Yeni üç gerçek hekim yanıtı ve kayıtlı iki onaylı yanıt ayrı uzman katkısı olarak kullanıldı. Özgün metinler, tarihler ve aktarım izi klinik-katki.json içinde. “En sık” doğrulanmadığı için başlık Dr. Aksoy'a sorular.

## İddia–kaynak izi
- NREM/REM tanımı: https://www.nhlbi.nih.gov/health/sleep/stages-of-sleep
- Menopoz geçişinde öznel/nesnel uyku ve değişkenlik (SWAN birincil araştırma): https://pubmed.ncbi.nlm.nih.gov/34081126/
- CBT-I: McCurry ve arkadaşları randomize çalışma; insomnia ve vazomotor belirtileri bulunan kadınlar. Sonuç tüm perimenopoz popülasyonuna oran olarak taşınmadı: https://pubmed.ncbi.nlm.nih.gov/27213646/
- Vazomotor belirtiyle ilişkili uyku güçlüğü ve kişiselleştirilmiş seçenekler: https://www.nice.org.uk/guidance/ng23/chapter/Recommendations
- Alışkanlıklar: https://www.nhlbi.nih.gov/health/sleep-deprivation/healthy-sleep-habits
- Tüketici cihazlarının sınırlılıkları: https://aasm.org/advocacy/position-statements/consumer-sleep-technology/ ve https://aasm.org/clinical-resources/emerging-technology/ . Eski bildiriden bütün güncel cihazların ruhsat durumuna ilişkin genelleme yapılmadı.

## Doğrulama
Son sürüm npm run build:ci başarılı: TypeScript, compliance, strict içerik/şablon denetimleri, encoding/renk/editoryal dil/tarih, 143 Astro rota ve 163 sayfa SEO kontrolü.
Yerel HTML: bir H1, sekiz bölüm id, beş görünür SSS ile FAQPage metni birebir aynı, Article schema; MedicalWebPage yok. Son ilgili bağlantı mevcut sayfaya yönelir. Yerel tarayıcı metni ve görüntüsü incelendi.
Skill editorial-check: aday bulgu yok (48 blok). İki fidelity karşılaştırması tamamlandı; review_changes sonucu elle incelendi: yeni 40/03.00 gerçek hekim yanıtlarından geliyor; eski %12/12 örneği ve güncellik ifadesi kaldırıldı. Bu araçlar tıbbi onay veya insan yazarlığı kanıtı değildir. Frontmatter, dinamik SSS ve uzman kutusu ayrıca okundu.
Onaylı baz: 0381d1e380a5fd647bfe81ae98c0b2ccaf20806c. Girişteki kirli dosya ve baz geçici snapshotta ayrı saklandı. Önceki kullanıcı değişiklikleri korunarak revizyon yapıldı.
Canlı alan adına cache-bypass isteği HTTP 403 verdi; canlı içerik bu turda doğrulanamadı. Yerel başarı yayın kanıtı değildir.

## İkinci geçiş — denetim + humanize (30 Eylül 2026, Claude)
Tıbbi iddia, SSS yanıtları, Tıbbi Bilgi Notu ve Evidence değişmedi; yeni kişisel veya klinik deneyim eklenmedi (Kanal A kapalı korundu).
- Olumsuzlama/antitez yükü ~12 → 3; üç olumsuz H2 yeniden adlandırıldı (id'ler korundu, TOC güncellendi). Soru-H2: 1.
- ≤6 kelimelik vurgu cümlesi 0 → 5 ("Şikâyetin de kendi türleri var.", "Aynı kadın, iki ayrı gece.", "Kişisel okumamın sınırı da burası.", "Kitap suçlu değildi elbette.", "Aynı sekiz saat, iki farklı sabah.").
- Siz bağı eksik bölümler (01, 02, 03) tamamlandı; 03'e somut sahne (başucu saati) ve duygu beat'i (kızgınlık) eklendi.
- Teselli #14 ile aynıydı ("İçiniz rahat olsun") → "Merak etmeyin diye baştan yazıyorum".
- Kapanışta açılışa tek geri çağırma; mizah #2 gece okuma (onaylı arkadaş anlatısı korunarak kısaltıldı).
- article-faqs.ts içindeki kullanılmayan, revizyonla çelişen eski 3 soruluk kayıt kaldırıldı.
- npm run build:ci başarılı; lexicon hard_ban 0.
KC kararları (2026-09-30): hero değişmeyecek; Evidence eklendi (Ritim alışkanlıkları 3, hormon tedavisi uyku bölen vazomotor belirtilerde 3–4; toplam 3); SSS düzenlenmiş hâlleri onaylandı; yazar ve tıbbi onay tamam.

## Üçüncü geçiş — dış değerlendirme rötuşu (30 Eylül 2026)
KC talimatıyla ("uygula commit push deploy"): teselli girişi "Merak etmeyin diye baştan yazıyorum" kaldırıldı (cümle korundu); "Belirsizlik kaygı yaratabilir…" → "Hekimle konuşurken yalnızca geceyi değil, ertesi gün neyin zorlaştığını da anlatmak daha yararlı olur."; hormonlar bölümündeki arkadaş anekdotu tek cümleye indirildi. "Herkesin gecesi başka" yaşıt sesi gereği korundu. Tıbbi içerik değişmedi.
