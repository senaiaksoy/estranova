# Market Signal Learning And Backtest Design

Tarih: 2026-07-05

## Amaç

`Borsa/market-signals` aracı, geçmişte ürettiği sinyallerin sonucunu ölçerek rapor kalitesini iyileştirebilmelidir. Sistem otomatik emir, kişisel portföy yöneticisi veya kendi kendini sınırsız değiştiren bir model olmayacaktır. Öğrenme katmanı, geçmiş sinyal performansını ölçer, strateji eşiklerini öneri olarak sunar ve değişiklikleri yalnızca manuel onayla aktif hale getirir.

## Temel İlke

Sistem iki ayrı kavramı karıştırmaz:

- Günlük karar-destek: YAY, fiziki altın ve diğer izleme varlıkları için mevcut kurallarla sinyal üretir.
- Model değerlendirme: Daha önce verilen sinyallerin 1, 5, 20 ve 60 işlem günü sonrasındaki sonucunu ölçer.

Günlük raporda kullanılan aktif strateji, geriye dönük ölçümden otomatik olarak değişmez. Model iyileştirme önerileri ayrı bir raporda görünür ve kullanıcının onayı olmadan `config/strategy.yaml` dosyasına uygulanmaz.

## Kapsam

- Her üretilen sinyalin kalıcı olarak kaydedilmesi.
- Sinyal sonrası getirinin farklı vadelerde ölçülmesi.
- `AL`, `BEKLE`, `AZALT`, `NAKDE GEÇ` etiketlerinin geçmiş başarı oranının raporlanması.
- YAY ve fiziki altın için ayrı performans profili çıkarılması.
- Strateji eşikleri için aday öneriler üretilmesi.
- Eski strateji ile aday stratejinin backtest karşılaştırması.
- Hermes üzerinden haftalık ve aylık Türkçe model gözden geçirme raporları.

## Kapsam Dışı

- Otomatik alım/satım emri.
- Aracı kurum hesabına bağlanma.
- Tek bir geçmiş dönemden kesin gelecek tahmini üretme.
- Kullanıcının kişisel risk profili adına nihai yatırım tavsiyesi verme.
- Aday stratejiyi otomatik olarak canlı stratejiye alma.

## Veri Modeli

### Signal Journal

Her sinyal üretildiğinde şu alanlarla kaydedilir:

- `run_id`: günlük çalıştırma kimliği.
- `asof`: sinyal tarihi.
- `instrument_id`: örnek `tefas_yay`, `gold_try`, `silver_try`.
- `symbol`: piyasa veya fon kodu.
- `signal_label`: `AL`, `BEKLE`, `AZALT`, `NAKDE GEÇ`.
- `confidence`: `DUSUK`, `ORTA`, `YUKSEK`.
- `close`: sinyal anındaki fiyat.
- `reason`: model gerekçesi.
- `features`: SMA50, SMA200, EMA50, RSI14, drawdown, volatilite.
- `strategy_name`: örnek `conservative_daily_trend`.
- `strategy_version`: strateji parametre versiyonu.
- `source_status`: fiyatın güncel, gecikmeli, fallback veya eksik olduğu bilgisi.

Başlangıç depolama formatı `data/signals/signal-journal.jsonl` olur. JSONL seçimi basit denetim ve kolay test için yeterlidir. Veri büyürse aynı arayüz korunarak SQLite'a geçilebilir.

### Outcome Records

Her sinyal için vade sonuçları ayrı kaydedilir:

- `signal_run_id`
- `instrument_id`
- `horizon_days`: 1, 5, 20, 60.
- `entry_close`
- `exit_close`
- `return_pct`
- `max_drawdown_pct`
- `max_runup_pct`
- `outcome_status`: `pending`, `measured`, `missing_price`.

Başlangıç depolama formatı `data/signals/signal-outcomes.jsonl` olur.

## Karar Kalitesi Ölçümü

Sistem her etiket için şu metrikleri üretir:

- Ortalama getiri.
- Medyan getiri.
- Pozitif sonuç oranı.
- En kötü geri çekilme.
- En iyi hareket.
- Sinyal sayısı.
- Veri eksikliği oranı.

Yorumlama örnekleri:

- `AL` sonrası 20 günlük medyan getiri pozitif ve negatif sapma düşükse model bu varlıkta daha güvenilir görünür.
- `AZALT` sonrası fiyat çoğunlukla düşmüşse risk uyarısı işlev görmüştür.
- `NAKDE GEÇ` sonrası fiyat hızla toparlanmışsa eşik fazla sert olabilir.
- `BEKLE` sonrası güçlü yükseliş sık yaşanıyorsa model fırsat kaçırıyor olabilir.

Bu yorumlar raporda açıklayıcı not olarak yazılır; emir talimatına çevrilmez.

## Aday Strateji Üretimi

İlk sürümde güvenli ve şeffaf bir eşik taraması kullanılır. Makine öğrenmesi modeliyle kapalı kutu skor üretmek başlangıç için uygun değildir.

Taranacak adaylar:

- `rsi_buy_min`: 40, 45, 50.
- `rsi_buy_max`: 70, 72, 75.
- `rsi_reduce`: 75, 78, 80.
- `drawdown_exit_pct`: YAY için 10, 12, 15; altın için 8, 10, 12.
- SMA trend koşulu aynı kalır; ilk sürümde trend tanımı değiştirilmez.

Her aday strateji geçmiş veride denenir ve aktif stratejiyle karşılaştırılır.

Karşılaştırma ölçütleri:

- 20 günlük sinyal sonrası medyan getiri.
- Maksimum geri çekilme.
- Sinyal sıklığı.
- Aşırı işlem uyarısı.
- Veri kapsamı yeterliliği.

Bir aday, sadece tek metrikte daha iyi diye önerilmez. En az şu üç koşulu sağlamalıdır:

- Sinyal sayısı yeterli olmalıdır.
- Geri çekilme aktif stratejiden belirgin kötü olmamalıdır.
- İyileşme yalnızca tek bir kısa döneme sıkışmamalıdır.

## Raporlama

### Haftalık Model Performans Raporu

Hermes cron haftada bir şu raporu üretir:

- Son hafta üretilen sinyaller.
- Önceki sinyallerin yeni ölçülen 1 ve 5 günlük sonuçları.
- Etiket bazında kısa performans notu.
- Veri eksikleri.
- “Bu çıktı yatırım tavsiyesi değildir; model gözden geçirme raporudur.” uyarısı.

### Aylık Strateji Gözden Geçirme Raporu

Ayda bir şu rapor üretilir:

- YAY performans özeti.
- Fiziki altın performans özeti.
- GMSTR/Z30EA izleme notu, fiyat verisi yeterliyse.
- Aktif strateji ve aday strateji karşılaştırması.
- Aday eşik önerileri.
- Önerinin neden otomatik uygulanmadığına dair manuel onay notu.

Örnek karar dili:

> YAY için RSI üst alım eşiği 75 yerine 72 olduğunda geçmiş 20 günlük sonuçlar daha dengeli görünmektedir. Bu değişiklik otomatik uygulanmamıştır; canlı stratejiye alınmadan önce manuel onay gerekir.

## Hermes Cron Akışı

Önerilen komutlar:

- Günlük: `market-signals-hermes run-daily`
- Günlük portföy: `market-signals-hermes portfolio-report`
- Haftalık model ölçümü: `market-signals-hermes model-review --weekly`
- Aylık aday strateji taraması: `market-signals-hermes model-review --monthly`

Komutlar Telegram'a kısa özet gönderebilir; ayrıntılı Markdown dosyası `data/reports/` altında kalır.

## Modül Tasarımı

Yeni modüller:

- `signal_journal.py`: günlük sinyal kayıtlarını yazar ve okur.
- `outcome_tracker.py`: geçmiş sinyallerin vade sonuçlarını fiyat serisiyle ölçer.
- `backtest.py`: aktif ve aday stratejileri aynı tarih aralığında dener.
- `optimizer.py`: izin verilen eşik aralıklarından aday strateji önerir.
- `model_review_reports.py`: Türkçe haftalık/aylık raporları üretir.

Mevcut modüller korunur:

- `strategy.py`: canlı sinyal üretim motoru.
- `reports.py`: günlük sinyal raporu.
- `portfolio_reports.py`: portföy karar-destek raporu.
- `cli.py`: yeni komutları bağlayan katman.

## Hata Yönetimi

- Fiyat eksikse outcome satırı `missing_price` olarak kalır.
- Yeterli geçmiş yoksa optimizer aday üretmez, “veri yetersiz” raporu verir.
- JSONL dosyası bozuk satır içerirse sağlam satırlar okunur, bozuk satır raporda belirtilir.
- Aday strateji mevcut stratejiden daha iyi görünse bile otomatik uygulanmaz.
- Telegram gönderimi başarısızsa rapor dosyası yine yazılır.

## Test Planı

- Signal journal JSONL yazma/okuma testleri.
- Aynı `run_id` tekrar yazılırsa idempotency veya net hata davranışı testi.
- Outcome hesaplama: 1, 5, 20, 60 günlük getiri.
- Eksik fiyat durumunda outcome'ın sistemi durdurmaması.
- Backtest'in aynı veriyle deterministik sonuç üretmesi.
- Optimizer'ın veri yetersizliğinde aday önermemesi.
- Optimizer'ın sadece izin verilen eşik aralığında öneri üretmesi.
- Model review raporunda yatırım tavsiyesi uyarısının bulunması.
- CLI komutları: `model-review --weekly`, `model-review --monthly`.
- Hermes wrapper ile komutların exit code 0 dönmesi.

## Uygulama Sırası

1. Sinyal journal katmanı.
2. Günlük sinyal üretiminden journal'a yazma.
3. Outcome ölçüm katmanı.
4. Haftalık model performans raporu.
5. Backtest motoru.
6. Optimizer ve aday strateji karşılaştırması.
7. Aylık model gözden geçirme raporu.
8. Hermes cron entegrasyonu.

## Kabul Kriterleri

- Sistem her günlük sinyali kalıcı olarak kaydeder.
- Geçmiş sinyaller için en az 1 ve 5 günlük sonuçlar ölçülür.
- Veri yeterliyse 20 ve 60 günlük sonuçlar da ölçülür.
- Haftalık rapor Türkçe ve açıklayıcıdır.
- Aylık rapor aktif strateji ile aday stratejiyi karşılaştırır.
- Strateji değişikliği otomatik uygulanmaz.
- Tüm raporlar yatırım tavsiyesi olmadığını açıkça belirtir.
- Mevcut `pytest` seti ve `npm run build:ci` bozulmaz.

## Açık Karar

İlk uygulamada depolama formatı JSONL olacaktır. SQLite, ancak geçmiş sinyal hacmi veya sorgu karmaşıklığı arttığında ikinci faz olarak ele alınacaktır. Bu tercih sistemi daha hızlı devreye alır ve mevcut repo yapısıyla uyumlu kalır.
