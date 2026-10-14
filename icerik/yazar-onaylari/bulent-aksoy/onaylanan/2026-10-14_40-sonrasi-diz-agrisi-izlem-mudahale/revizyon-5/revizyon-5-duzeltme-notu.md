# Revizyon 5 — kaynak düzeltme notu

Tarih: 14 Ekim 2026
Revizyon anahtarı: `2026-10-14-audit-fix-v5`
Önceki sürüm: `revizyon-4/site-kaynak.astro` (korundu)
Kaynak SHA-256 (v5): `6178d962a3090587a0e2798bf90ea7c91b945765a8234dffdb72030334280bdb`

Kapsam: revizyon 4 için yapılan bağımsız kaynak doğrulamasında çıkan beş düzeltme. Canlı rota değiştirilmedi. Yazar onayı ve bağımsız bilimsel inceleme hâlâ bekleniyor; form gönderilmedi.

## Yapılan düzeltmeler

1. **Kilitlenmiş yırtık ve AAOS atfı (kaynak [4] + [2]).** "böyle bir kilitlenmede genel izlem süresinin tamamlanması beklenmez" cümlesi [4]'e bağlıydı; AAOS 2024 sayfası kilitlenmiş yırtıkta gözlem süresi hakkında bilgi vermiyor. Cümle "kilitlenmede genel izlem süresini beklemeden hekime başvurulmalıdır" olarak yeniden yazıldı; [2] (NHS: diz hareket ettirilemiyorsa 111'e başvuru) ile [4] birlikte atıflandı. [4] yalnızca "akut yırtıklar ayrı değerlendirilir" iddiası için kalıyor (AAOS kapsamı: akut izole yaralanma).
   - FAQ "MR'da menisküs" yanıtı aynı iddiayı taşıdığı için kaynakları [2][4][5] olarak bırakıldı; metin değişmedi.

2. **Kortikosteroid süresi ve hyalüronan (kaynak [1]).** NICE NG226 kılavuz metni açılamadı; "2–10 hafta" ve "hyalüronan önerilmez" yalnızca ikincil kaynaklarda geçiyor. İki iddia kaldırıldı. Yerine: "Etkisinin ne kadar süreceği kişiye göre değişir; uygunluğu hekimle birlikte değerlendirilir." Enjeksiyonun kılavuzda düşünülebilecek bir seçenek olduğu cümlesi [1] ile kalıyor (ikincil kaynaklarla desteklenen tek nokta).

3. **Cochrane ifadesi (kaynak [7]).** "karşılaştırılan tedaviye göre değişir" yerine: "kontrol grubuyla (dikkat kontrolü veya plasebo) karşılaştırıldığında ağrı ve işlevdeki iyileşme klinik olarak önemli kabul edilen düzeyin altında kalır; kanıtın kesinliği düşük–orta düzeydedir". Tekrarlanan "Bu derlemede sonuçlara duyulan güven..." cümlesi kaldırıldı. Kanıt etiketi (2–3/5) korundu.

4. **Kaynaksız yorum (kaynak [6]).** "Bu ilişki, sizin diz ağrınızın hormonlardan kaynaklanmadığını göstermez" cümlesi kaldırıldı; hiçbir kaynaktan gelmiyordu.
   - Kaynak [6] künyesi, Maturitas bilgisi doğrulanmadığı için değiştirildi: Critchlow ve ark., medRxiv ön baskı 2023, doi:10.1101/2023.05.18.23290199. Bağlantı medRxiv sayfasına gidiyor. PMID ve Maturitas cilt/sayfa bilgisi kaldırıldı.
   - Yayınlanmış dergi sürümü bulunursa künye ona göre güncellenmeli (PubMed'den doğrulanmalı).

5. **İnme belirtileri (kaynak [9]).** "yeni belirgin denge kaybı" NHS FAST listesinde yok; cümleden çıkarıldı. Kalan belirtiler (tek taraflı güç kaybı veya uyuşma, yüz düşmesi, konuşma bozukluğu) NHS ile uyumlu.

## Ek değişiklik

- SSS: dört SSS metni ve kaynak numaraları değişmedi. `article-faqs.ts` paylaşılan dosyası değiştirilmedi.

## Kontroller

- `makale-onizleme.html` izole Astro projesinde yeniden derlendi (1 rota). Tarayıcıda doğrulandı: H1 tek; eski ifadeler sayfada yok; yeni ifadeler mevcut; atıf hedefleri eksik değil; banner "Revizyon 5"; yatay taşma yok (1024 px).
- `structure-check`: negatif çerçeve ailesi 3 kez (iki "anlamına gelmez", bir "demek değildir"). Her biri farklı bir sınırı taşıdığı için korundu; kısa cümle oranı %12, ortalama 13,7 kelime.
- `editorial-check`: 0 aday.
- `kontrol-formu.html` ve `meta.json` v5 hash'ine bağlandı; `revision: 2026-10-14-audit-fix-v5`, `previousRevision: revizyon-4/site-kaynak.astro`. Yazar ve bilimsel inceleme durumları `pending`, `sentAt: null`.

## Açık işler

- Bülent Aksoy yazar onayı (form gönderilmedi).
- Bağımsız bilimsel inceleme; NICE NG226 metninin doğrudan kontrolü (kılavuz açılamadı); Maturitas künyesinin PubMed'den doğrulanması.
- Kaynakların İngiltere merkezli olması; Türkiye uyarlaması için yerel kaynak eklenip eklenmeyeceği yazar kararı.
- Canlı rota, paylaşılan `article-faqs.ts` ve onay kaydı değiştirilmedi. Commit, push, deploy yapılmadı.
