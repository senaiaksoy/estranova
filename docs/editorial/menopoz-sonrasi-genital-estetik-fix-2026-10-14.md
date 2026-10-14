# Menopoz sonrası genital estetik — revizyon doğrulaması

Tarih: 14 Ekim 2026. Durum: yerel düzeltme tamamlandı; yazar ve tıbbi onay bekleniyor. Commit, push veya yayın yapılmadı.

Okunacak metin: `icerik/taslaklar/menopoz-sonrasi-genital-estetik.md`.
Uygulama taslağı: `icerik/taslaklar/menopoz-sonrasi-genital-estetik.astro`.
Astro dosyasının import yolları, onay sonrası hedeflenen `src/pages/beden-yakinlik/` konumuna göredir. Taslak SSS dizisi, onay sonrası mevcut `src/data/article-faqs.ts` kaydına aktarılmalı; görünür SSS ve şema aynı diziden beslenmeye devam etmelidir.

## Değişiklikler

- Beş kaynak ve iddiaya bağlı numaralı atıflar eklendi: 2025 GSM kılavuzu, ACOG 795, Jabbour 2017, NHS vulva belirtileri ve menopoz sonrası kanama bilgisi.
- Cerrahi riskleri ve kozmetik genital cerrahide kaliteli veri sınırı açıklandı.
- Yeni yara/kitle, geçmeyen kaşıntı, yeni cilt değişikliği ve menopoz sonrası kanama için değerlendirme sınırları eklendi.
- Yağ aktarımının cerrahi girişim olduğu ve menopoz sonrası kadınlarda uzun dönem veri sınırı açıklandı. Dördüncü SSS sorusu yanıtla uyumlu hale getirildi.
- Lazer/RF için deneysel nitelik ve kanıt sınırı belirtildi; kanıt eksikliği kesin etkisizlik olarak yazılmadı.
- Tekrarlanan öğütler birleştirildi; terimler açıklandı; alt metin sadeleştirildi. SEO başlığı, ana başlık ve mevcut anchor'lar korundu.
- Bilimsel Editör Notu gövdesi aynen korundu. Önceki reviewer kimliğinin görünür imzası bağlandı; yeni onay veya inceleme tarihi üretilmedi.
- Boş tıbbi uyarı dolduruldu; şema görsel adresindeki çift eğik çizgi kaldırıldı.

## Anlam ve kaynak sınırları

Önceki onay kaydı 29 Haziran 2026; karşılaştırma tabanı `01985451`. Özgün DOCX ve bağımsız tıbbi onay belgesi doğrulanmadığından bu revizyon onaylı olarak işaretlenmedi. Yeni birinci tekil hekim deneyimi eklenmedi; mevcut birinci tekil cümle korundu. Çağrı Sade imzası korunuyor; SSS Dr. Aksoy adına çevrilmedi.

Fidelity farkları kaynak künyeleri, yıllar, sayfa aralığı, PMID ve yeni atıflardan kaynaklanıyor. AUA URL'sindeki yüzde kodlaması bir klinik oran değildir. Başarı/komplikasyon oranı, ilaç dozu veya sayısal tanı eşiği eklenmedi. Kanıt etiketleri kaynakların niteliğine göre yeniden sınırlandı; bu teknik kontrolden tıbbi onay sonucu çıkarılmaz.

## İfade sayımı

Özet, gövde, SSS ve editör notunda aynı kalıplarla yapılan sayımdır; kaynak künyeleri hariçtir. Anlamın farklı kelimelerle tekrarı ayrıca elle incelendi.

| Mesaj / kalıp | Önce | Sonra | Kalan tekrarın işlevi |
|---|---:|---:|---|
| Cerrahi otomatik/ilk seçenek değil | 6 | 3 | Özet, korunmuş başlık, tedavi ayrımı |
| Jinekolojik değerlendirme | 5 | 2 | Klinik ilk adım, görüşme sorusu |
| Hacim kaybı–labioplasti ayrımı | 2 | 1 | İşlem ayrımı |
| Enerji bazlı uygulamalar | 1 | 1 | Deneysel seçenek ve belirsizlik |

Structure-check: inkâr çerçevesi üç kullanımda kaldı; biri mevcut SEO başlığı, biri normal anatomik çeşitlilik, biri kanıt yokluğu–etkisizlik ayrımıdır. Altı kısa kapanış, farklı bölüm bilgilerini taşıdığı için korundu. Dört kez geçen ilişki sırasında ağrı ifadesi sabit klinik terimdir; eş anlamlı çeşitlendirilmedi. Editöre hitap eden `sunulmamalıdır` düzeltildi. Cümle uzunluğu ölçümü kaynak künyeleri ve SSS dahil olduğundan yalnız gövdeyle doğrudan karşılaştırma yapılmadı.

## Doğrulama

Taslak, geçici ve ayrı bir doğrulama kopyasında mevcut rota yerine yerleştirildi; asıl deponun yayımlanmış sayfası, ortak FAQ verisi ve onay kayıtları değiştirilmedi.

- Son sürümde `npm run build:ci` geçti: TypeScript, compliance, yayın bütünlüğü, şablon, encoding, renk, sözlük, tarih, build ve SEO kontrolleri.
- Kaynak denetiminde hedef yazı temiz. Depo genelindeki strict-sources kontrolü, başka sekiz klinik rehberin kaynak eksikleri nedeniyle başarısız; hedef yazının sorunu olarak raporlanmadı.
- Derlenmiş HTML: tek H1, 5/5 görünür SSS–FAQPage eşleşmesi, beş kaynak, çalışan tüm fragment bağlantıları, dolu tıbbi uyarı ve normalize şema görsel URL'si doğrulandı.
- Editorial-check sıfır aday verdi. Rendered-check kaynakların kurum/yazar adlarının gövdede bulunmamasını aday olarak gösterdi; Estranova'daki numaralı atıf düzeninde bu yanlış pozitiftir. Beş kaynağın tamamı metindeki atıflara bağlıdır.
- Yerel tarayıcıda özet, gövde, kaynaklar, SSS ve uyarı metni gözlendi; görüntü `icerik/taslaklar/menopoz-sonrasi-genital-estetik-onizleme.png` konumunda. Ayrı telefon viewport testi yapılmadı.

## Sonraki kapı

`docs/AUTHOR-APPROVAL-WORKFLOW.md` v2.0 gereği KC'den bu sürüme ait yazar ve tıbbi onay alınmalı. Onay sonrası taslak sayfa ve hedef SSS kaydı canlı kaynak ağacına aktarılır; onay izi mevcut kayıt düzeninde tutulur. Yayın ve commit/push/deploy ayrı yetkilere tabidir.
