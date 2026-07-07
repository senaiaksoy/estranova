# Estranova Icerik Orchestrator Taslagi

## Sistem amaci

Bu orchestrator, Estranova'nin tek-agent icerik uretiminden multi-agent yapiya gecmesini saglar.
Hedef; kaliteyi, izlenebilirligi ve uyum guvencesini artirirken her adimin sorumlulugunu net ayirmaktir.

Saglik icerigi sinirlari tum akista zorunludur:
- teshis yok
- tedavi onerisi yok
- recete dili yok
- abartili vaat yok
- tibbi kesinlik yok

---

## Agent siralamasi

Temel sira:
1. Research Agent
2. Writer Agent
3. Fact-check Agent (risk seviyesine bagli)
4. Compliance Agent
5. Human Review (risk seviyesine bagli)

Risk seviyesine gore zorunlu akis:
- `low` -> Research -> Writer -> Compliance
- `medium` -> Research -> Writer -> Fact-check -> Compliance
- `high` -> Research -> Writer -> Fact-check -> Compliance -> Human Review

---

## Her agent'in gorevi

### 1) Research Agent
- Konuya ait guvenilir kaynak paketini olusturur.
- Iddia havuzu ve kanit gucu etiketleri uretir.
- Icerik yazmaz, yorumla genisletmez.

### 2) Writer Agent
- Yalnizca research paketine dayanarak metin uretir.
- Cikti tipleri: makale, sosyal medya turevi, bulten turevi.
- Yeni tibbi iddia icat etmez, kaynak disina tasmaz.

### 3) Fact-check Agent
- Writer ciktilarindaki iddialari tek tek dogrular.
- "Destekleniyor / Kismen destekleniyor / Desteklenmiyor" siniflamasi yapar.
- Zorunlu duzeltme listesini cikarir.

### 4) Compliance Agent
- Yasal/editoriyal risk kontrolu yapar.
- Teshis, tedavi dili, recete dili, abartili vaat ve tibbi kesinlik acisindan denetler.
- Uyum skoru + risk seviyesi + zorunlu revizyon listesi uretir.

### 5) Human Review (gerektiginde)
- Klinik ve editoriyal acidan nihai insan denetimidir.
- Ozellikle `high` risk iceriklerde yayina cikis onayi verir veya reddeder.

---

## Input/output handoff mantigi

Her agent bir onceki adimin ciktilarini standart dosya paketi olarak alir ve bir sonraki adima devreder.

### Handoff sirasi

1. Research -> Writer  
   - Input: `topic-brief.md`  
   - Output: `research-output.md` (kaynaklar, iddia havuzu, kanit gucleri)

2. Writer -> Fact-check (risk `medium` ve `high`)  
   - Input: `research-output.md`  
   - Output:
     - `article.md`
     - `social-post.md`
     - `newsletter.md`

3. Fact-check -> Compliance  
   - Input:
     - `article.md`
     - `social-post.md`
     - `newsletter.md`
     - `research-output.md`
   - Output: `factcheck-report.md` + revize edilmis metinler

4. Compliance -> Human Review (yalnizca risk `high`)  
   - Input: fact-check sonrasi revize paket  
   - Output: `compliance-report.md`

5. Human Review -> Final  
   - Input: compliance onayli paket  
   - Output: `final-approval.md` veya `revision-request.md`

Not: Compliance veya Human Review "revizyon gerekli" derse akis Writer adimina doner; ilgili rapor zorunlu girdi olarak kullanilir.

---

## Risk level mantigi

Risk seviyesi yayina gitmeden once topic-brief asamasinda atanir. Gerekirse Compliance asamasinda bir ust seviyeye yukseltilir.

### `low`
- Genel bilgilendirme ve dusuk klinik hassasiyet.
- Akis: Research -> Writer -> Compliance.
- Fact-check opsiyonel degil, bu seviyede atlanir.

### `medium`
- Klinik yorum riski olasiligi veya iddia yogunlugu orta duzey.
- Akis: Research -> Writer -> Fact-check -> Compliance.
- Fact-check zorunludur.

### `high`
- Yanlis anlasilma, klinik yonlendirme veya guvenlik etkisi potansiyeli yuksek.
- Akis: Research -> Writer -> Fact-check -> Compliance -> Human Review.
- Human Review zorunludur; insan onayi olmadan yayina cikamaz.

### Yukseltme kurali
- Bir asamada tespit edilen kritik risk, akis risk seviyesini otomatik `high` yapar.
- `high` olduktan sonra Human Review adimi zorunlu kalir.

---

## Human review ne zaman zorunlu

Su kosullardan biri varsa Human Review zorunludur:
- Risk seviyesi `high`.
- Compliance raporunda "kritik" risk bulunmasi.
- Fact-check raporunda "desteklenmiyor" durumda kalan tibbi iddia bulunmasi.
- Dilin okuyucuda teshis/tedavi yonlendirmesi olusturma riski tasimasi.
- Yasal uyari metninin eksik veya uygunsuz olmasi.

Human Review karari:
- `onay`: yayin adimina gecilir.
- `revizyon`: Writer adimina geri donulur.
- `ret`: icerik yayindan cekilir veya yeniden planlanir.

---

## Pseudo-code

```text
function run_orchestrator(topic_brief, initial_risk):
    risk = initial_risk

    research_output = ResearchAgent.run(topic_brief)
    writer_output = WriterAgent.run(research_output)

    if risk in ["medium", "high"]:
        factcheck_report, writer_output = FactCheckAgent.run(
            writer_output,
            research_output
        )

    compliance_report = ComplianceAgent.run(writer_output, risk)

    if compliance_report.has_critical_risk:
        risk = "high"

    while compliance_report.status == "revizyon_gerekli":
        writer_output = WriterAgent.revise(
            writer_output,
            compliance_report.required_fixes
        )

        if risk in ["medium", "high"]:
            factcheck_report, writer_output = FactCheckAgent.run(
                writer_output,
                research_output
            )

        compliance_report = ComplianceAgent.run(writer_output, risk)

        if compliance_report.has_critical_risk:
            risk = "high"

    if risk == "high":
        human_result = HumanReview.run(
            writer_output,
            research_output,
            compliance_report
        )
        if human_result.status != "onay":
            return "revision_or_reject", human_result

    return "ready_to_publish", {
        "risk": risk,
        "research_output": research_output,
        "writer_output": writer_output,
        "compliance_report": compliance_report
    }
```

---

## Uyum notu (Estranova saglik icerigi)

Bu orchestrator kapsaminda uretilen tum metinlerde su cizgi korunur:
- bireysel teshis kurulmaz
- ilac veya tedavi recetesi verilmez
- kesin sonuc vaadi kullanilmaz
- tibbi belirsizlikler oldugu gibi belirtilir
- standart yasal uyari metni zorunlu tutulur

---

## Kaynak dogruluk matrisi

Bu matris, her agent'in hangi dogruluk katmanindan sorumlu oldugunu netlestirir.

| Katman | Sorumlu Agent | Kontrol sorusu | Cikti |
|---|---|---|---|
| Kaynak guvenilirligi | Research | Kaynak otoriter mi, guncel mi, konuya uygun mu? | `research-output.md` |
| Iddia kaynak eslesmesi | Writer | Yazilan her ana iddia research paketinde var mi? | `article.md`, `social-post.md`, `newsletter.md` |
| Iddia dogrulugu | Fact-check | Iddia "destekleniyor/kismen/desteklenmiyor" mi? | `factcheck-report.md` |
| Yasal/editoriyal uyum | Compliance | Metin teshis/tedavi/abartili vaat iceriyor mu? | `compliance-report.md` |
| Nihai yayin guvencesi | Human Review (`high`) | Kritik riskler gercekten kapandi mi? | `final-approval.md` |

Not: Matrisin operasyonel adimlari icin `docs/agent-prompts/05-orchestrator-pipeline.md` dosyasini referans alin.
