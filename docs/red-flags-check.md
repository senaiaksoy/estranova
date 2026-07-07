# Estranova Red Flags Check

Bu dokuman, ozellikle `Medical Checker` ve `Compliance Agent` tarafinda kullanilacak kirmizi bayrak kurallarini tanimlar.

Amac:
- Yayin oncesi kritik riskleri hizli ve tutarli bicimde yakalamak
- Tibbi kesinlik, tedavi vaadi, reklam dili ve dil kalitesi sorunlarini erken durdurmak

---

## 1) Asla onay verme kurallari

Asagidaki ifade veya anlam kaliplari metinde gecerse icerik **ASLA onaylanmaz**:

- `mucize`
- `kesin cozum`
- `iyilestirir`
- `hastaligi bitirir`
- `garanti eder`
- `tamamen tedavi eder`
- `kesin sonuc verir`

Bu durumda:
- `Compliance Agent` sonucu: `revizyon_gerekli`
- Risk seviyesi: en az `critical`
- Gerekirse `human_review_required = true`

---

## 2) Zorunlu danisma ifadesi

Metinde `Doktorunuza danisin` veya anlamca ayni guvenli yonlendirme yoksa icerik **reddedilir**.

Kabul edilebilir ornekler:
- `Doktorunuza danisin.`
- `Saglik durumunuzla ilgili sorulariniz icin doktorunuza veya diger nitelikli saglik uzmanlarina danisin.`

Bu ifade yoksa:
- `Compliance Agent` -> `disclaimer_gap`
- `final_decision = revizyon_gerekli`

---

## 3) Cumle uzunlugu kurali

Bir cumle 20 kelimeden uzunsa:
- `Writer Agent`a revize icin geri gonderilir
- Gerekce: okunabilirlik ve 8-10. sinif Turkcesi hedefine uyumsuzluk

Bu kural:
- `Compliance Agent` tarafinda dil kalitesi icin isaretlenebilir
- `Medical Checker` tarafinda tıbbi anlam belirsizlesiyorsa not dusulebilir

---

## 4) Plaza dili kurali

Asagidaki gibi plaza dili veya benzeri yapay is dili kaliplari tespit edilirse surec durdurulur:

- `focuslanmak`
- `push etmek`
- `aksiyon almak`
- `case bazli`
- `skalalamak`
- `optimize etmek`

Bu durumda:
- `Compliance Agent` sonucu: `revizyon_gerekli`
- `Writer Agent`a sade Turkce ile yeniden yazim gorevi doner

---

## 5) Agent bazli kullanim

### Medical Checker
- Iddia-kanit uyumunu kontrol eder
- Abartili veya desteklenmeyen tibbi kesinlik kaliplarini `flagged_claims` icine ekler
- Tedavi vaadini veya kaynak disi kesinlik dilini `unsupported` olarak isaretler

### Compliance Agent
- Red-flag listesini zorunlu tarama katmani olarak uygular
- `Doktorunuza danisin` ifadesi veya esdeger standart uyari yoksa onay vermez
- Plaza dili ve reklam dili tespit edilirse revizyon ister

---

## 6) Operasyon sonucu

Bu red-flag kurallarindan biri tetiklenirse varsayilan sonuc:

```json
{
  "final_decision": "revizyon_gerekli",
  "human_review_required": false
}
```

Asagidaki durumlarda `human_review_required = true` dusunulmelidir:
- Tibbi kesinlik + tedavi vaadi bir aradaysa
- Metin bir hastaligi bitirme/iyilestirme vaadinde bulunuyorsa
- Compliance kritik risk bulgusunu temiz revizyonla kapatamiyorsa
