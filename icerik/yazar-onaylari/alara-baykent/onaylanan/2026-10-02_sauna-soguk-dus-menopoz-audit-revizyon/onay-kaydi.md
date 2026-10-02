# Revizyon onay kaydı — 2 Ekim 2026

**Makale:** Sauna ve Soğuk Duş — Sporcu Bedenden Önceki Kuşağın Sıcak Basmasına
**Yol:** `/zamansiz-yasam/non-invaziv/sauna-soguk-dus-menopoz/`
**Yazar:** Alara Baykent (yazar formu istisnası; KC doğrudan editör onayı)
**Onaylayan:** Doç. Dr. Senai Aksoy (KC editör / bilimsel editör)

Kullanıcının bu sohbetteki doğrudan beyanı: “onaylandı, kayıtları ekle ve commit push yap”.

## Kapsam

Onay, aynı gün Antigravity'de yapılan humanize geçişinin denetimi ve bu denetim üzerine yapılan düzeltmeleri kapsar:

- Aile dostuna atfedilen tırnaklı söz (Antigravity'nin yeni içerik eklediği hali) kaldırıldı; anlamı dolaylı anlatımla korundu. Sahne, 2026-05-03'te anne anekdotu yasağıyla “yakın bir aile dostu” çerçevesine çevrilmiş haliyle korundu.
- “Güvenli aralık: haftada 2–4 seans”, “15–20 dakikayı aşmaması önerilir” ve “uzatmak ek fayda sağlamaz” ifadeleri kaldırıldı. Finlandiya kohortu (Laukkanen ve ark., JAMA Intern Med 2015, doi:10.1001/jamainternmed.2014.8187; 2.315 erkek) gözlemsel ve erkek ağırlıklı veri olarak aktarıldı; doz kararı hekime bırakıldı.
- Abartılı kanıt dili (“oldukça umut verici”, “güçlü kanıtlar”, “tam olarak”, “biliniyor”, “Bilim saunayı destekliyor”) ve sonradan eklenen mekanizma iddiaları temizlendi; ruh hali/uyku iddiası `Evidence level={3}` etiketiyle yeniden eşlendi.
- Yasaklı beden kişileştirmeleri kaldırıldı; “X değil, Y” kalıbı 7'den 1'e indi.
- Alara'nın sesi (kısa cümle ağırlığı, “Atımla sabah ahırda” açılışı) ve yazarın kendi soğuk duş deneyimi (“uyanış değil, düzenleme aracı”) geri getirildi; uydurulmuş duyusal ayrıntılar çıkarıldı.
- Her H2 bölümüne “siz” bağı, bir teselli anı ve bir duygu cümlesi eklendi.
- Bilimsel Editör Notu: Antigravity'nin değişiklikleri korundu; yalnızca “kesin kontrendikasyon” → “kontrendikasyon oluşturur” yapıldı.
- `static-articles.ts` açıklaması sayfa meta açıklamasıyla eşitlendi.

İlk yayın tarihi (3 Mayıs 2026), yazar, görseller ve kanıt etiketleri korundu; son güncelleme 2 Ekim 2026 olarak şemaya işlendi. Gövdede SSS yok (deneme türü); `article-faqs.ts` içindeki eski 3 soru sayfada gösterilmiyor ve bu revizyonda değiştirilmedi.

## Dosyalar

- `onceki-kaynak.astro` — revizyon öncesi yayındaki kaynak (commit 81a58b78).
- `site-kaynak.astro` — onaylanan kaynak.

## Doğrulama

`npm run lint`, `compliance`, `prebuild`, `articles:audit:strict`, `articles:audit:templates` temiz. Yerel önizlemede sayfa konsol hatasız render edildi; `Article.dateModified` 2026-10-02.
