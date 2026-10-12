# Magnezyum: NIH ODS kaynaklarının kaldırılması ve SCF ile değiştirilmesi

Tarih: 12 Ekim 2026. Durum: onay bekliyor. Bu değişiklik `magnezyum-kaynak-2026-10-12` dalında; ana dala alınmadı, push ve deploy yapılmadı.

## Neden
NIH ODS sayfası (ods.od.nih.gov) botlara kapalı; bu oturumda otomatik erişim 403 döndü, tarayıcıda da insan doğrulaması istedi. Bu yüzden iki NIH bağlantısı ([1] ve [12]) doğrulanamadı. Engeli aşmaya çalışılmadı.

## Ne değişti
- **SCF 2001 görüşü** (kaynak, AB Bilim Komitesi; önceden de kaynakça listesindeydi) üç yere bağlandı ve metin doğrulandı:
  - Mg, yüzlerce enzimatik tepkimede kofaktördür (eski NIH [1] yerine).
  - Şiddetli böbrek işlevi bozukluğu (inülin klirensi <10 mL/dk) aşırı magnezyum birikimi için risk faktörüdür (böbrek ve ilaç paragraflarında eski NIH [12] yerine).
  - Tetrasiklin ve penisilin gibi ilaçlarla etkileşimler, ishal ise oral magnezyum tuzlarının en hassas istenmeyen etkisidir (metinde ishal riski açıklaması için).
- NIH kaynakları kaynakçadan çıkarıldı. Numaralar 1–20 olarak yeniden sıralandı; her atıf ve kaynak kimliği eşleşiyor.
- Diğer kaynaklar, metin ve kanıt etiketleri değişmedi.

## Doğrulama
- SCF metni yerel olarak okundu (PDF, 16 sayfa): ifadeler yukarıdaki gibi.
- `tsc` ve `build:ci` geçti; tarih kontrolü 68 makalede tutarlı; derlenmiş sayfada 20 atıf ve 20 kaynak tanımı eşleşiyor, NIH kalıntısı yok.

## Onay gereksinimi
- Dr. Aksoy ve Dr. Alper Mumcu'nun bu kaynak değişikliğini ve üç metin noktasını onaylaması gerekiyor.
- Yayın için ayrıca açık onay ve push yetkisi gerekir.
