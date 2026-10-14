# Revizyon 6 — ikinci audit ve düzeltme notu

Tarih: 14 Ekim 2026
Revizyon anahtarı: `2026-10-14-audit-fix-v6`
Önceki sürüm: `revizyon-5/site-kaynak.astro` (korundu)
Kaynak SHA-256 (v6): `a7afbfa8ee8f854cf2c1519bbad3852103276c10d1fecbe379e6a397c50a2ad6`

Kapsam: revizyon 5'in yeniden audit'i ve bulunan sorunların düzeltilmesi. Canlı rota, paylaşılan `article-faqs.ts` ve onay kaydı değişmedi. Yazar onayı ve bağımsız bilimsel inceleme bekleniyor; form gönderilmedi.

## Bulgular ve düzeltmeler

1. **Kaynak [6] — revizyon 5 gerilemesi geri alındı.** Revizyon 5'te Maturitas künyesi "doğrulanamadı" gerekçesiyle medRxiv ön baskısına çevrilmişti. Bu turda Crossref (`api.crossref.org/works/10.1016/j.maturitas.2023.107844`) ve PubMed E-utilities (PMID 37716136) kayıtları künyeyi doğruladı: Critchlow AJ, Hiam D, Williams R, Scott D, Lamon S. The role of estrogen in female skeletal muscle aging: A systematic review. Maturitas 2023;178:107844. Hakemli dergi sürümü geri getirildi; bağlantı DOI adresine verildi.
   - Not: revizyon 5 notundaki "Maturitas künyesi doğrulanmadı" ifadesi erişim engelinden kaynaklanıyordu ve artık geçerli değil.

2. **Atıf öncesi boşluk.** Revizyon 5'te silinen cümleden "değerlendirilir. [6]" boşluğu kalmıştı. Düzeltildi.

3. **Cochrane ifadesi (kaynak [7]) — kesinlik düzeltildi.** Revizyon 5 cümlesi iki noktalı virgülle 40+ kelimeye uzamıştı ve kaynağın söylediğinden daha kesin konuşuyordu ("iyileşme ... düzeyin altında kalır" + ayrı bir "belirsizdir" cümlesiyle tekrar). Cochrane 2024 (CD004376): ortalama iyileşme ağrıda 8,7/100 (eşik 12), işlevde 11,3/100 (eşik 13); kesinlik ağrı için düşük, işlev için orta; klinik önem belirsiz. Yeni metin üç cümleye bölündü: yarar sağlayabilir → ortalama iyileşme eşiğin altında → kesinlik ağrı için düşük, işlev için orta; günlük hayattaki farkın belirsizliği. Tekrar kaldırıldı.

4. **Kortikosteroid cümlesi atıfsız kalmıştı.** Revizyon 5'te hyalüronan cümlesi silinirken [1] atıfı da gitmiş, ilaç önerisi kaynaksız kalmıştı. [1] geri eklendi. Ayrıca hyalüronan karşılaştırması için kurulan "Enjeksiyonlar aynı yararı taşıyan tek bir grup değildir:" girişi işlevini yitirmişti; kaldırıldı.
   - Uyarı: [1] (NICE NG226) doğrudan açılamadı (403); "diğer ilaç seçenekleri etkisiz veya uygunsuzsa ya da egzersizi desteklemek için düşünülebilir" ifadesi yalnızca ikincil kaynaklarla eşleşiyor.

5. **Kaynak [4] etiketi.** "hareketi kısıtlayan yırtıklar" ifadesi AAOS sayfasında desteklenmiyordu. Etiket kılavuzun gerçek kapsamına çekildi: "Akut izole menisküs yaralanmaları; dejeneratif ve kronik yırtıklar kapsam dışıdır."

## Değişmeyen ama not edilen bulgular

- SSS "MR'da menisküs" yanıtı [2][4][5] atıflı; kilitlenmiş diz için başvuru önerisi [2] (NHS: diz hareket ettirilemiyorsa acil danışma) ile destekleniyor. [5]'in (BMJ 2017) kilitlenmiş dizi kapsam dışı tutup tutmadığı BMJ metni açılamadığı için doğrulanmadı.
- "Tedavinin başarısı çoğu zaman doğru ilacı seçmek kadar iyi iletişim kurmaya da bağlıdır" ve "tedavinin en güçlü başlangıç noktası" ifadeleri 8 Mayıs onaylı metinden geliyor; kaynaksız genel yargı. Yazar onayında görülmeli.
- Negatif çerçeve ailesi 3 kez ("anlamına gelmez" ×2, "demek değildir" ×1); her biri farklı bir sınır taşıdığı için korundu.
- Kaynakların çoğu İngiltere merkezli; Türkiye uyarlaması yazar kararı.

## Kontroller

- İzole Astro derlemesi başarılı (1 rota). Tarayıcıda doğrulandı: banner "Revizyon 6"; Maturitas künyesi görünür, medRxiv yok; atıf öncesi boşluk yok; kortikosteroid cümlesi [1] atıflı; yeni Cochrane metni mevcut; AAOS etiketi güncel; tek H1; atıf hedefleri eksiksiz; yatay taşma yok.
- `structure-check`: yalnızca negatif çerçeve ailesi (3); ortalama 13,3 kelime, kısa cümle oranı %12.
- `editorial-check`: 0 aday.
- `rendered-check`: 9 `uncited-source` — bilinen yanlış pozitif (numaralı atıflar kurum adıyla eşleşmiyor; tüm kaynaklar metinde numarayla atıflı).
- `kontrol-formu.html` ve `meta.json` v6 hash'ine bağlandı; yazar ve bilimsel inceleme durumları `pending`, `sentAt: null`.
