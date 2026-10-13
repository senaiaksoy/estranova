# NAD+ takviyesi — 13 Ekim 2026 denetim ve düzeltme kaydı

Hedef: `src/pages/zamansiz-yasam/deneysel/nad-plus-takviyesi.astro`.
Karşılaştırma tabanı: çalışma ağacındaki önceki humanize değişikliği ve HEAD. HEAD'in 13 Ekim revizyonuna verilmiş tıbbi onay olduğu varsayılmadı.

## Kaynak ve anlam düzeltmeleri

- Kaynaksız “genellikle 20–100 kişi / 4–12 hafta” genellemesi kaldırıldı. Yoshino çalışmasını 25 kadının tamamladığı ve uygulamanın 10 hafta sürdüğü; Conze çalışmasına 140 yetişkin alındığı ve takviyenin 8 hafta verildiği kaynaklarına bitişik yazıldı.
- Yoshino popülasyonundaki “prediyabetik veya kilolu” ifadesi, “prediyabeti olan, fazla kilolu veya obez postmenopozal kadınlar” olarak düzeltildi.
- Yoshino'da kas insülin duyarlılığı ile kas gücü/fiziksel yorulabilirlik sonuçları ayrıldı. Bir çalışmanın sonucu bütün çalışmalar için etkililik veya etkisizlik hükmüne dönüştürülmedi.
- Kaynaksız kas gücü/yorgunluk yararı ve biyoyararlanım açıklaması kaldırıldı. Conze'deki kan NAD+ artışı, klinik yarardan ayrı anlatıldı.
- NR güvenliği, sekiz haftalık çalışmada araştırılan dozlarla ve plaseboyla yan etki karşılaştırmasıyla sınırlandı; uzun dönem güvenliğe genellenmedi.
- Enzim aktivitesi cümlesinde mekanizma sınırı korundu. “Sonuç henüz değil” yerine “klinik yarar henüz net değil” yazıldı.

Doğrulanan kaynaklar:

1. https://pmc.ncbi.nlm.nih.gov/articles/PMC8550608/ — Yoshino 2021, PMID 33888596.
2. https://www.nature.com/articles/s41598-019-46120-z — Conze 2019, PMID 31278280.
3. https://pmc.ncbi.nlm.nih.gov/articles/PMC7963035/ — Covarrubias 2021, PMID 33353981.

## Gerçek hekim katkısı

Kullanıcı 13 Ekim 2026'da konuya özgü gerçek yanıt verdi. Düzenlenmiş hali gösterildi; ardından “devam et” talebiyle yerel iletişim bölümüne işlendi. Özgün yanıt, düzenlenmiş metin ve kapsam notu `icerik/yazar-onaylari/senai-aksoy/klinik-katkilar/2026-10-13_nad-plus-takviyesi.json` dosyasında.

Damar yoluyla NAD+ hakkındaki cümle mevcut üç kaynağın kapsamı dışında olduğundan makaleye eklenmedi; özgün kayıtta korundu. 6ec735a3 ile kaldırılmış eski birinci tekil klinik cümleler geri getirilmedi.

## Yapı ve görsel

Makale parent `/zamansiz-yasam/deneysel/` hero'suna geçirildi; görsel dosyası aynı kaldı. Makaleye özel hero girdisi kaldırıldı. Kart eşlemesi ve byline görseli korundu. Parent hero'nun üretim komutu biçimindeki alt metni sade Türkçe görsel açıklamasına çevrildi; bu açıklama parent hero'yu kullanan diğer sayfalarda da geçerlidir.

Evidence etiketleri ve düzeyleri, SSS verisi, RedFlagBox, özet, Bilimsel Editör Notu ve disclaimer değişmedi. Yayın tarihi korunup revizyon tarihi 13 Ekim 2026 olarak bırakıldı.

## Tekrar ve ritim

| Gövde hükmü | HEAD | Son sürüm | Gerekçe |
|---|---:|---:|---|
| Genel topluma standart öneri için yetersiz kanıt | 2 | 1 | Aynı bölümdeki tekrar birleştirildi. Gerçek hekim yaklaşımı ayrıca kayıtlı kişisel karar olarak anlatılıyor. |
| Yaşla NAD+ azalması | 2 | 1 | Mekanizma bölümünün açılışı görevi tanımlıyor, azalma sonraki paragrafta açıklanıyor. |
| Uzun dönem güvenlik eksikliği | 2 | 2 | Onkolojik kapsam ile yıllarca kullanımın genel güvenliği ayrımı korunuyor. Uyarı kutusu ve editör notu bağımsız okunabilen güvenlik yüzeyleri. |

Statik H2/H3/P/LI çıkarımında ortalama cümle uzunluğu 16,8 → 13,0; standart sapma 7,1 → 6,4 sözcük. Gövdede ≤6 sözcüklük cümle 0 → 5. Bunlar editoryal ölçümler; yazarlık/dedektör veya tıbbi onay kanıtı değil.

## Kontrol sınırları

Fidelity raporundaki sayı, süre ve ek atıf farkları yukarıdaki kaynak düzeltmeleriyle açıklanıyor. Editorial-check 0 aday verdi. Structure-check kısa kapanışları ve güvenlik tekrarlarını aday gösterdi; ilgili kapanışlar bölüm bilgisini taşıdığı için korundu. Evidence sonrası boşluk adayı çıkarım biçiminden geliyor; rendered-check bunu raporlamadı.

Rendered-check'in “uncited-source” uyarıları yanlış pozitif: Yoshino ve Conze gövdede numaralı kaynak bağlantılarıyla anılıyor. “repeated-disclaimer” adayı klinik uyarı kutusu ile genel disclaimer'ı eşliyor; farklı işlevleri nedeniyle ikisi korundu.

Son kart eşlemesi restorasyonundan sonra `build:ci` yeniden çalıştırıldı ve çıkış kodu 0 ile geçti: compliance 180 dosya, strict/template audit, 140 sayfa build ve 160 sayfa SEO audit. Derlenmiş MedicalWebPage ve Article görseli aynı `zy-deneysel.webp` dosyasını taşıyor; güncelleme tarihi 2026-10-13, inceleyici Dr. Alper Mumcu. Tek H1 ve kaynak anchor'ları doğrulandı. Hedef makalede lexicon uyarısı yok; mevcut iki soft uyarı başka dosyalarda.

Tarayıcı bağlantısı “privileged native pipe bridge is not available; browser-client is not trusted” hatasıyla açılamadı. Görsel/tarayıcı QA tamamlanmadı. Derlenmiş HTML kontrolü görsel QA yerine geçmez.

Nihai revizyon için yeni tıbbi/yayın onayı kaydedilmedi. Commit, push ve deploy yapılmadı.
