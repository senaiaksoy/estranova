# Estranova Varlık Pusulası Deploy Notu

Bu dashboard özel karar-destek ekranıdır. Yatırım tavsiyesi, portföy yönetimi,
otomatik emir veya kişisel al-sat talimatı değildir.

## Adresler

- Lokal servis: `http://127.0.0.1:8765/`
- Hedef dış adres: `https://varlik.estranova.com`
- Uygulama adı: `Estranova Varlık Pusulası`

## Lokal başlatma

```powershell
cd D:\A-klasör\Estranova\Borsa\market-signals
$env:MARKET_SIGNALS_DASHBOARD_USER="estranova"
$env:MARKET_SIGNALS_DASHBOARD_PASSWORD="<strong-password>"
py -3.12 -m market_signals dashboard --host 127.0.0.1 --port 8765
```

Parola boş bırakılırsa dashboard Basic Auth istemez. `varlik.estranova.com`
yayını için parola boş bırakılmamalıdır.

## Cloudflare Access + Tunnel

Sıralama önemlidir:

1. Cloudflare Zero Trust içinde `varlik.estranova.com` için self-hosted Access
   application oluştur.
2. Erişim policy'sini sadece izinli e-posta/kimliklerle sınırla.
3. Cloudflare Tunnel içinde public hostname ekle:
   - Hostname: `varlik.estranova.com`
   - Service: `http://127.0.0.1:8765`
4. Tunnel ayarında Access korumasını etkinleştir veya origin tarafında Access token
   doğrulaması yap.
5. Dashboard uygulamasını Basic Auth parolasıyla çalıştır.

Cloudflare dokümantasyonu, Access uygulaması oluşturulmadan tunnel route açılırsa
uygulamanın internete açık kalabileceğini belirtir. Bu yüzden Access policy önce,
hostname route sonra eklenmelidir.

## Güvenlik kuralları

- Public Estranova sitesinden bu adrese link verme.
- `robots` meta `noindex,nofollow` olarak gelir; yine de asıl koruma Access ve parola
  katmanıdır.
- `MARKET_SIGNALS_DASHBOARD_PASSWORD` git'e yazılmaz.
- Dashboard sadece raporları okur; emir göndermez, canlı strateji değiştirmez.
- Aylık model raporunda öneri çıksa bile canlı stratejiye otomatik uygulanmaz.
