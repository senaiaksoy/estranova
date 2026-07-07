# Agent Prompts - Kullanim Rehberi

Bu klasor, icerik uretimini 4 ayri agente bolmek icin hazirlanmis prompt dosyalarini icerir.

## Dosya Yapisi

- `01-research-agent.md`: Yalnizca kaynak toplar.
- `02-writer-agent.md`: Yalnizca metin uretir.
- `03-fact-check-agent.md`: Yalnizca iddia dogrular.
- `04-compliance-agent.md`: Yalnizca risk ve uyum kontrolu yapar.
- `05-orchestrator-pipeline.md`: Tum surecin akisini tanimlar.

## Hizli Baslangic

1. Konuyu belirleyin.
2. `01-research-agent.md` promptunu calistirin.
3. Cikan sonucu `02-writer-agent.md` girdisi olarak verin.
4. Writer ciktisini `03-fact-check-agent.md` ile dogrulatin.
5. Duzeltilmis metni `04-compliance-agent.md` ile kontrol edin.
6. Sonuc `Yayina hazir` degilse revizyon dongusunu tekrar edin.

## Ornek Isletim Sirasi

- Konu: `Perimenopozda ruh hali dalgalanmalari`
- Cikti paketleri:
  - `research-output.md`
  - `article.md`
  - `social-post.md`
  - `newsletter.md`
  - `factcheck-report.md`
  - `compliance-report.md`

## Kalite Notlari

- Research agent metin yazmaz.
- Writer agent yeni kaynak eklemez.
- Fact-check agent stil degil, dogruluk denetler.
- Compliance agent bilimsel dogruluk degil, risk denetler.

Bu ayrimlar korundugunda surec daha izlenebilir, daha guvenli ve tekrar edilebilir hale gelir.
