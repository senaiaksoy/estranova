# Orchestrator Pipeline

## Akis
1. Research Agent calisir ve kaynak paketi uretir.
2. Writer Agent, yalnizca bu paketi kullanarak makale + sosyal + bulten metinlerini uretir.
3. Fact-check Agent tum iddialari dogrular, zorunlu duzeltmeleri listeler.
4. Compliance Agent yasal/editoriyal risk kontrolu yapar.
5. Compliance sonucu "Yayina hazir" degilse Writer adimina geri donulup revizyon yapilir.

## Kisa Komut
KONU: `{{topic}}`

Adim 1 - Research:
- Cikti: `research-output.md`

Adim 2 - Writer:
- Girdi: `research-output.md`
- Cikti:
  - `article.md`
  - `social-post.md`
  - `newsletter.md`

Adim 3 - Fact-check:
- Girdi: `article.md` + `research-output.md`
- Cikti: `factcheck-report.md`

Adim 4 - Compliance:
- Girdi: `article.md` (fact-check duzeltmeleri uygulanmis)
- Cikti: `compliance-report.md`

Adim 5 - Final:
- Eger compliance sonucu "Yayina hazir" ise teslim et.
- Degilse zorunlu revizyon listesini uygulayip tekrar Adim 3-4 calistir.

## Teslim Paketleri
- `article.md`
- `social-post.md`
- `newsletter.md`
- `factcheck-report.md`
- `compliance-report.md`

## Capraz Referans

Bu dosya operasyonel akisi anlatir.
Mimari cerceve, risk seviyeleri ve Human Review kurallari icin:
- `docs/orchestrator.md`

Kaynak-dogruluk sorumluluk dagilimi icin:
- `docs/orchestrator.md` -> "Kaynak dogruluk matrisi"
