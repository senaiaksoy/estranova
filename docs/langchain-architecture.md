# Estranova LangChain Multi-Agent Mimari (Chain + State)

Bu dokuman, Estranova icerik sisteminin tek agent yaklasimindan multi-agent akisi yerine, **LangChain/LangGraph benzeri** bir yaklasimla 4 ana `Chain` uzerinden kurulmasi icin taslak bir mimari verir.

Hedef: Multi-agent akisini yonetilebilir yapmak; her adimda saglik/uyum sinirlarini **hard constraint** olarak uygulamak.

---

## 1) Terimler (Estranova ile uyum)

- Agent rollerini zincir (chain) olarak yeniden paketliyoruz:
  - ResearchChain (Research Agent)
  - WriterChain (Writer Agent)
  - ValidationChain (Fact-check Agent)
  - ComplianceChain (Compliance Agent)
- Orchestrator/Supervisor katmani, risk seviyesine gore rotayi ve gerektiginde Human Review adimini yonetir.
- Ortak veri arti **State** olusumu:
  - `topic`, `audience`, `content_goal`
  - `risk_level`
  - `approved_sources`, `key_claims`, `flagged_claims`
  - `disclaimer_needed`, `human_review_required`

Not: Bu tasarim, repo icindeki `docs/orchestrator.md` ve `docs/agent-io-spec.md` ile ayni alan semantigini korur.

---

## 2) Zincir (Chain) Yapisi

Ayrim: Sadece sorumluluk bazli chain’ler.

### Chain A: ResearchChain
**Amaç:** Kaynak tarama + iddia havuzu olusturma. Yorum/icerik yazmaz.

**Girdi:**
- `topic`, `audience`, `content_goal`
- `risk_level`

**Hard constraints (must / hard checks):**
- Sadece guvenilir kaynak tipleri: `guideline`, `systematic_review`, `meta_analysis`, `peer_reviewed_study`
- Her ana iddia en az bir kaynak referansina bagli olacak
- Bulgu (finding) ile yorum (commentary) ayrilacak
- Tedavi/teshis/recete diline izin verilmez (boyle bir token gorulurse output iptal)

**Cikti (State mutasyonu):**
- `approved_sources[]`
- `key_claims[]`
- `finding_vs_commentary[]`
- `flagged_claims[]` (opsiyonel: kanit zayif iddialar icin on-isaret)
- `disclaimer_needed = true`

---

### Chain B: WriterChain
**Amaç:** Research output’a bagli kalarak icerik uretmek (makale + sosyal + bulten).

**Girdi:**
- Research sonucu: `approved_sources`, `key_claims`, `disclaimer_needed`, `risk_level`

**Hard constraints:**
- Plaza dili yasak
- Korku dili yasak
- Teshis yok, tedavi onerisi yok, recete dili yok
- Kesinlik iddiasi (or: "kesin olarak", "garanti", "mucize", "hemen kesin") yasak
- Iddia cikarimi sadece `key_claims` icinden olacak (yeni iddia olusturma yok)
- Her ana paragraf/iddia `claim_id` ile izlenebilir olacak (`claim_trace`)
- Standart saglik uyarisini metin sonunda ekle (disclaimer)

**Cikti (State mutasyonu):**
- `draft_content.article`
- `draft_content.social_post`
- `draft_content.newsletter`
- `claim_trace[]`
- `human_review_required` taslak (opsiyonel): tokenizer/rules ile risk bulgusu yakalanirsa `true` on-onayi

---

### Chain C: ValidationChain (Tibbi dogruluk + Fact-check)
**Amaç:** Writer metinlerindeki dogrulanabilir iddialari kaynaklarla eslestirmek; zayif/eksik dayanaklari isaretlemek.

**Girdi:**
- Writer ciktilari: `draft_content`, `claim_trace`
- Research ciktilari: `approved_sources`, `key_claims`
- `risk_level`

**Hard constraints:**
- Metni yeniden yazmaz (sadece rapor ve revizyon önerisi verir)
- Iddiayi "unsupported" yapmadan once kanit sinirini belirler:
  - Uygun kaynagin olmadigi / cikarimin kaynakla uyumsuz oldugu yer -> `unsupported`
  - Kismen uyum -> `partial`
  - Net ve ayni mesaj -> `supported`
- Kanit gucu ayrimi saglanir: `high | medium | low`

**Cikti (State mutasyonu):**
- `factcheck_report`
- `key_claims[].status` (supported/partial/unsupported)
- `flagged_claims[]` (severity: low/medium/high)
- Gerekli degisiklik listesi: `required_revisions[]` (opsiyonel)

---

### Chain D: ComplianceChain (Regulasyon + Risk kontrolu)
**Amaç:** Yasal/editoriyal ve saglik guvenligi risklerini kontrol etmek; final karar vermek.

**Girdi:**
- Writer/Validation state’i: `draft_content`, `flagged_claims`, `risk_level`
- Kural setleri: `AGENTS.md`, `CLAUDE.md` (§4), `prompts/compliance-agent.md`

**Hard constraints:**
- Teshis/tedavi/recete/prescription dili yakalanirsa kritik -> `final_decision = revizyon_gerekli`
- Yasakli vaat/abartili ifadeler yakalanirsa kritik/orta -> revizyon
- Dilin okuyucuda "tibbi karar alma" yonlendirmesi olusturmasi engellenir
- `disclaimer_needed` true ise yasal disclaimer kontrol edilir
- Human Review zorunlulugu:
  - `risk_level == high` veya `flagged_claims` icinde `severity == high` varsa `human_review_required = true`

**Cikti (State mutasyonu):**
- `compliance_score` (0-100)
- `risk_findings[]`
- `required_fixes[]`
- `disclaimer_needed` (kontrol sonucu)
- `human_review_required`
- `final_decision`: `yayina_hazir | revizyon_gerekli`

---

## 3) Orchestrator/Supervisor Katmani

**Amaç:** Risk seviyesine gore chain’leri calistirmak; high riskte human review zorunluluğunu garanti etmek.

**Risk routing:**
- `low`:
  - ResearchChain -> WriterChain -> ComplianceChain
  - (ValidationChain opsiyonel/konfigurable, ama recommendation: kalite icin genelde calistir)
- `medium`:
  - ResearchChain -> WriterChain -> ValidationChain -> ComplianceChain
- `high`:
  - ResearchChain -> WriterChain -> ValidationChain -> ComplianceChain -> HumanReview

**Human Review karar kuralı:**
- ComplianceChain `human_review_required = true` dondurur veya flagged severity yüksekse -> human review zorunlu.

---

## 4) State (LangGraph benzeri) Yonlendirme Seklinde Sekillendirme

### State tipleri (JSON benzeri)

```json
{
  "topic": "string",
  "audience": "string",
  "content_goal": "string",
  "risk_level": "low | medium | high",
  "disclaimer_needed": true,

  "approved_sources": [],
  "key_claims": [],
  "finding_vs_commentary": [],
  "flagged_claims": [],

  "draft_content": {
    "article": "",
    "social_post": "",
    "newsletter": ""
  },
  "claim_trace": [],

  "factcheck_report": "",
  "required_revisions": [],

  "compliance_score": 0,
  "risk_findings": [],
  "required_fixes": [],

  "human_review_required": false,
  "final_decision": "unknown"
}
```

### Hard constraint uygulama stratejisi

Her chain’de:
- Input state taranir (regex / kurallar / structured output guardrail)
- Saglik/uyum ihlali gorulurse chain output’u:
  - ya exception ile biter
  - ya da `final_decision = revizyon_gerekli` set edilip ilerleme engellenir

---

## 5) Orchestrator Akis (Pseudo-Workflow)

### Basit akis

```text
state = init(topic, audience, content_goal, initial_risk)

state = ResearchChain(state)
state = WriterChain(state)

if state.risk_level in ["medium", "high"]:
    state = ValidationChain(state)

state = ComplianceChain(state)

if state.human_review_required == true:
    state = HumanReview(state)   # human onayi / revizyon

return state.final_decision, generated contents
```

### Revizyon dongusu

Validation/Compliance "revizyon_gerekli" dediginde:
- required_fixes veya required_revisions uygulanir
- WriterChain yeniden calistirilir
- risk bayragi tekrar degerlenir

---

## 6) Zincirlerde Estranova saglik guvenligi protokolleri (Hard Constraint listesi)

Asagidakiler her zincir icin "gating rule" olarak dusunulmelidir:

1. Teshis yok
2. Tedavi/ilac onerisi yok
3. Recete dili yok
4. Abartili vaat yok: "garanti", "mucize", "kesin cozum" vb.
5. Tibbi kesinlik yok: dogrulama gerektiren iddia "destekleniyor/kismen/desteklenmiyor" seviyesinde kalir
6. Disclaimer zorunlu:
   - disclaimer_needed=true ise writer metin sonunda eklemek zorunda
7. Kapsam / kesinlik sinirlarini koru:
   - "herkeste" ve "kesin" gibi genellestirmeler risk artirir

---

## 7) LangChain/LangGraph Uygulama Notlari (Taslak)

Bu tasarimda tipik uygulama yaklasimi:
- LangChain:
  - Her chain icin ayrik `PromptTemplate` + structured output parser
  - `JsonSchema` / Pydantic style ile claim_trace ve kaynak listesi zorunlu alan yapilir
- LangGraph:
  - `StateGraph` ile dugumler: Research, Writer, Validation, Compliance, HumanReview
  - Kenar kosullari: state.risk_level ve state.human_review_required

Operasyonel beklenti:
- Her chain sadece kendi sorumluluk alanini uretir
- State alanlari standardize oldugu icin loglama ve debugging kolay olur

---

## 8) Uretilecek cikti mapping (Estranova repo ile uyum)

State’te uretilen ciktilar doc/folder veya markdown dosyalari olarak aktarilir:
- `ResearchChain` -> `research-output.md` (approved_sources/key_claims)
- `WriterChain` -> `article.md`, `social-post.md`, `newsletter.md`
- `ValidationChain` -> `factcheck-report.md` + (opsiyonel) required revisions
- `ComplianceChain` -> `compliance-report.md` + final decision

Bu mapping, mevcut `docs/orchestrator.md` ve `docs/agent-io-spec.md` ile uyumludur.

