# Kaynak doğrulaması — 14 Ekim 2026

Kapsam: `makale-kaynak.astro` revizyon 4 (sha256 `2484356e…a538a`). Metin bu turda değiştirilmedi.

| # | Kaynak | Bağlantı | İçerik metinle uyumlu mu | Not |
|---|---|---|---|---|
| 1 | WHO 2023, kronik primer bel ağrısı | NBK599210, NCBI eutils ile doğrulandı (sayfa reCAPTCHA arkasında). Bölümde "Table 1. WHO recommendations…CPLBP" var | Evet | Yapılandırılmış egzersiz: "may be offered", düşük kesinlik (koşullu). Kronik: 3 aydan uzun. WHO özet broşürü ile teyit. |
| 2 | NICE NG59 | 200, açılıyor | Evet | **Tarih yanlış.** Son güncelleme 29 Temmuz 2026 (psikolojik terapi önerileri geri çekildi). Egzersiz 1.2.2 ve görüntüleme 1.1.4–1.1.6 değişmedi [2016]. Kapsam 16 yaş üstü. |
| 3 | Greendale ve ark., JCI Insight 2019;4(5):e124865 | DOI çözülüyor | Evet | SWAN, 1.246 kadın, DXA. Geçişte yağ kütlesi yaklaşık +1,6 kg, yağsız kütle yaklaşık −0,2 kg (%0,5). Gözlemsel. |
| 4 | WHO 2020, fiziksel aktivite | NBK566046 = "RECOMMENDATIONS" bölümü (eutils) | Evet | Yetişkin kas güçlendirme ve 65+ çok bileşenli denge/kuvvet önerileri: güçlü öneri, orta kesinlik. |
| 5 | NICE NG226, 2022 | 200, açılıyor | Evet | Yayın 19 Ekim 2022. Egzersiz ve bilgilendirme temel tedavi (1.2.2, 1.3.1). Kilo yönetimi yalnızca fazla kilo/obezitede (1.3.5). Başlangıçta ağrı artabilir (1.3.3). |
| 6 | NHS, bel ağrısı | 200 | Kısmen | Acil belirtiler (iki bacakta güçsüzlük/uyuşma, kasık-makat his kaybı, mesane/bağırsak değişikliği) uyumlu. "Kanser öyküsü" ve "gece terlemesi" sayfada yok. Ateş benzeri durum acil GP; kilo kaybı rutin GP. |
| 7 | NHS, eklem ağrısı | 200 (son inceleme 26 Şubat 2026) | Evet | Yaralanma sonrası basamama/çıkık → A&E; sıcak-şiş eklem, ateş → acil GP/111. |
| 8 | Verhagen ve ark., Eur Spine J 2016 (revizyon 5'te eklendi) | DOI çözülüyor, açık erişim | Evet | 16 kılavuz: kanser öyküsü 16/16, istemsiz kilo kaybı 13/16, ateş 12. "Gece terlemesi" yok, maddeden çıkarıldı. |

## Sonuç (revizyon 5)

Madde 1 ve 2 düzeltildi. Madde 3: 4/5 korundu (Dr. Aksoy kararı). Madde 4: 2/5 korundu. Ayrıntı: `revizyon-5-duzeltme-notu.md`.

## İncelemeye açık noktalar (ilk tarama)

1. Kaynak [2] etiketi "2016; güncelleme 2020" → "2016; son güncelleme 2026" olmalı.
2. Kırmızı bayrak kutusundaki "kanser öyküsü, gece terlemesi" maddesi [6, 7] ile desteklenmiyor. Seçenekler: maddeyi kaynakların dediğine daralt ya da bunu doğrudan söyleyen bir kılavuz ekle. Bu karar tıbbi inceleyicinin.
3. Satır 188'de NHS hasta bilgi sayfalarına (6, 7) `Evidence level={4}` verilmiş. Bu sayfalar derecelendirilmiş kanıt sunmuyor; etiketin kaldırılması düşünülebilir.
4. [3] için `level={2}` kalibrasyonu: büyük, uzunlamasına gözlemsel kohort. 2 ya da 3 savunulabilir; karar inceleyicinin.
