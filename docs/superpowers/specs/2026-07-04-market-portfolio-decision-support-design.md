# Market Portfolio Decision Support Design

Tarih: 2026-07-04

## Amaç

`Borsa/market-signals` aracı, kullanıcının YAY, fiziki altın, YFT, YLB, GMSTR ve Z30EA pozisyonlarını güncel fiyatlarla değerleyip kurallı bir karar-destek raporu üretmelidir. Sistem kişisel yatırım danışmanlığı, portföy yöneticiliği veya otomatik emir aracı değildir. Çıktılar emir talimatı değil, manuel karar kontrol listesi olarak yazılır.

## Kapsam

- Güncel fiyat çekimi: TEFAS fonları, GMSTR/BIST fiyatı, fiziki gram altın fiyatı ve mümkünse Z30EA fiyatı.
- Portföy kayıt girişi: adet, bloke durum, bekleyen işlem ve kullanıcı notu.
- Bekleyen işlem projeksiyonu: YLB bakiyesinin Pazartesi YAY alımına döneceği senaryo ayrı gösterilir.
- Model sinyali: YAY ve fiziki altın için `AL`, `TUT`, `AZALT`, `NAKDE GEÇ/BEKLE` gibi kurallı etiketler.
- Model ağırlığı: kullanıcı ağırlık veremediğinde sistem, sinyal gücüne göre temkinli model ağırlığı aralığı üretir.
- Raporlama: Türkçe, açıklayıcı, yatırım tavsiyesi olmadığını net belirten Markdown ve Telegram özeti.

## Kapsam Dışı

- Otomatik emir gönderimi.
- Kullanıcının risk profiline göre kişiye özel nihai alım/satım tavsiyesi.
- Garanti getiri, kesin zamanlama veya fiyat hedefi.
- Aracı kurum hesabına giriş, hesap hareketi okuma veya secret paylaşımı.

## Varlık Modeli

Her portföy satırı şu alanları taşır:

- `id`: sistem içi kimlik.
- `symbol`: piyasa/fon kodu.
- `label`: kullanıcıya görünen ad.
- `asset_class`: `tefas_fund`, `money_market_fund`, `equity_derivative`, `physical_gold`, `blocked_cash`.
- `quantity`: adet, pay veya gram.
- `price_source`: fiyat sağlayıcı kimliği.
- `pending_action`: `none`, `convert_to_yay`, `exit_to_yft`, `manual_watch`.
- `liquidity_role`: `growth`, `defensive`, `cash_parking`, `transition`.
- `notes`: kullanıcı açıklaması.

Başlangıç portföy notu:

- `GMSTR`: 7680 adet, uygun fiyatta YFT'ye geçiş adayı.
- `Z30EA`: 2758 adet, uygun zamanda YFT'ye geçiş adayı.
- `YAY/YFAY1`: 2576 adet, ana büyüme pozisyonu.
- `YFT/SERLF`: 82255 adet, günlük para piyasası/nakit park alanı.
- `YLB/YLBL`: 2333374 adet/bloke, Pazartesi YAY alımına dönecek bekleyen tutar.
- `Fiziki altın`: miktar kullanıcıdan alınmalı; sistem fiyatı çekebilir ama eldeki gram/adet bilinmeden değerleme yapamaz.

## Veri Kaynakları

Birinci tercih resmi veya kurumsal kaynaklardır; veri gecikmesi raporda belirtilir.

- TEFAS/KAP/Yapı Kredi Portföy: YAY, YFT, YLB fiyat ve fon bilgileri.
- BIST/TradingView/aracı kurum ekranı: GMSTR ve Z30EA gecikmeli fiyatı.
- QNB Portföy: GMSTR fon bileşeni ve açıklayıcı fon bilgisi.
- Altın fiyat kaynağı: gram altın alış/satış fiyatı; bankaya göre makas farklı olabileceği için kaynak adı raporda görünür.

Veri çekilemeyen sembol için rapor durmaz; ilgili satır `fiyat doğrulanamadı` olarak işaretlenir ve manuel fiyat girişi istenir.

## Model Ağırlık Mantığı

Kullanıcı hedef ağırlık vermezse sistem hedefi doğrudan kişisel tavsiye olarak değil, kurallı model aralığı olarak üretir.

Örnek model rolleri:

- YAY: büyüme motoru. Sinyal güçlendikçe model aralığı artar, trend bozuldukça YFT tamponuna kayar.
- Fiziki altın: savunma/denge varlığı. Güçlü momentumda biriktirme alanı artar, aşırı uzamada bekleme öne çıkar.
- YFT: nakit park ve geçiş alanı. YAY/altın sinyali zayıfladığında model tamponu yükselir.
- GMSTR ve Z30EA: kullanıcının beyanına göre çıkış izleme pozisyonları; satış tetikleyicisi fiyat/sinyal şartına bağlanır, model bunları uzun vadeli çekirdek ağırlık olarak büyütmez.
- YLB: bekleyen dönüş varlığı; Pazartesi YAY projeksiyonunda YAY tarafına taşınır.

Model ağırlıkları tek sayı yerine aralık verir. Örneğin `YAY model aralığı: %35-45` gibi. Bu aralık raporda emir talimatına çevrilmez; mevcut ağırlıkla fark hesaplanır ve `hedefe göre eksik/fazla` olarak gösterilir.

## Sinyal Kuralları

Mevcut `conservative_daily_trend` stratejisi korunur ve genişletilir:

- Trend: SMA50, SMA200, EMA50.
- Momentum: RSI14.
- Risk: 120 günlük geri çekilme, 20 günlük gerçekleşmiş volatilite.
- Altın için ek okuma: gram altın trendi, ons altın ve USDTRY etkisi mümkünse ayrı izlenir.
- YAY için ek okuma: Nasdaq/teknoloji trendi ve TEFAS valör/13:30 emir saati notu.

Sinyal etiketleri:

- `AL`: model koşulları olumlu; manuel kontrol gerekir.
- `TUT/BEKLE`: yeni agresif giriş için yeterli onay yok.
- `AZALT`: risk yükseldi; pozisyon ağırlığı gözden geçirilir.
- `NAKDE GEÇ`: ana trend ve geri çekilme riski belirgin; sermaye koruma kontrolü öne çıkar.

## Rapor Formatı

Günlük rapor bölümleri:

- `Portföy Özeti`: güncel toplam değer, fiyat zamanı, eksik veri uyarıları.
- `Bekleyen İşlem Projeksiyonu`: YLB'nin YAY'a geçmesi sonrası tahmini dağılım.
- `Model Sinyalleri`: YAY ve fiziki altın için sinyal, güven düzeyi, gerekçe.
- `Geçiş İzleme`: GMSTR ve Z30EA için YFT'ye geçiş izleme durumu.
- `Model Ağırlık Aralığı`: sistemin sinyale göre ürettiği aralıklar.
- `Fark Tablosu`: mevcut/projeksiyon ağırlık ile model aralığı farkı.
- `Manuel Kontrol`: TEFAS 13:30, valör, fiyat kaynağı, veri gecikmesi ve kararın kullanıcıda kaldığı notu.

Telegram özeti kısa kalır:

- Toplam portföy değeri.
- YAY sinyali ve kısa gerekçe.
- Fiziki altın sinyali ve kısa gerekçe.
- Bekleyen YLB -> YAY projeksiyon notu.
- Veri eksikleri.
- `Bu çıktı yatırım tavsiyesi değildir; manuel karar desteği içindir.`

## Hata Yönetimi

- Fiyat kaynağı erişilemezse son başarılı fiyat ve tarih gösterilir.
- Son başarılı fiyat yoksa satır manuel fiyat bekler.
- Secret değerleri raporda asla yazılmaz.
- Telegram gönderimi başarısızsa rapor dosyası yine üretilir.
- Z30EA sembolü doğrulanamazsa kullanıcıdan sembolün tam piyasa kodu istenir.

## Test Planı

- Fiyat sağlayıcıları mock ile test edilir.
- Portföy değerleme toplamı ve ağırlık hesabı test edilir.
- YLB -> YAY projeksiyonu ayrı test edilir.
- Eksik fiyat durumunda raporun durmadığı test edilir.
- Rapor ve Telegram metninin Türkçe yatırım-tavsiyesi uyarısı taşıdığı test edilir.
- Mevcut `pytest` seti ve `npm run build:ci` korunur.

## Onay Gerektiren Noktalar

Uygulama başlamadan önce kullanıcıdan şu iki bilgi gerekir:

- Fiziki altın miktarı: gram/adet ve mümkünse maliyet.
- Z30EA tam sembolü/kaynağı: fiyat çekimi için doğru piyasa kodu.

Bu iki bilgi olmadan sistem diğer satırları değerleyebilir, ancak toplam portföy dağılımı eksik kabul edilir.
