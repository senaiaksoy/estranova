# Agentic Content Pipeline — scaffold ozeti

Bu repo (**Estranova**) asagidaki mimarinin **dolu bir uygulamasidir**. Greenfield veya fork icin bos sablonlar: **`config/domain_placeholders.py`**.

## Graf (LangGraph)

```
Orchestrator (gpt-4o) — router
  → Research (gemini-2.5-flash) — JSON + approved_sources
  → Writer (claude-sonnet-4-6) — makale + sosyal + bülten + category
  → Checker / validation (claude-sonnet-4-6) — fact-check JSON
  → Compliance (claude-sonnet-4-6) — skor + risk_findings
  → Publisher — body_markdown + SEO + ic link onerileri
```

- **Graf:** `main.build_graph()`
- **Router sinifi:** `agents/orchestrator_agent.py` (`agents/orchestrator.py` re-export)
- **Revizyon:** `MAX_REVISION_ITERATIONS = 2`; skor < 85 → Writer; 2. tur sonunda hard-stop + `best_effort_publish` + `ready_to_publish_best_effort` (mantik `compliance_expert_agent` + orchestrator)

## Zorunlu pattern’ler

| Pattern | Nerede |
|--------|--------|
| Router purity (tercihen sadece oku) | `orchestrator_agent.route_*`; kalici sayac/flag **compliance node** |
| Writer validator | `agents/writer_agent.py` — yapi, FAQ, category allowlist |
| Compliance deterministik | `agents/compliance_expert_agent.py` — kelime, URL, org, uzun cumle |
| Compliance LLM | `prompts/compliance-agent.md` |
| Debug dump | `output/_debug/*_raw_*.json` |
| Double-escape | `agents/writer_agent._normalize_article_escapes` |
| `load_dotenv(override=True)` | `main.py`, `streamlit_app.py`, `config/llm_manager.py`, `rag/vectorstore.py` |
| Config tek kaynak | `config/pipeline_limits.py`, `config/llm_config.py` |

## Prompt dosyalari (`prompts/`)

| Dosya | Not |
|-------|-----|
| `research-agent.md` | Research |
| `writer-agent.md` | Kisa yol; uzun prompt `agents/writer_agent.md` |
| `checker-agent.md` | Iskelet — uretim: `factcheck-agent.md` |
| `compliance-agent.md` | Compliance LLM |
| `orchestrator-agent.md` | Orchestrator sistem prompt |
| `publisher-agent.md` | Iskelet — Publisher kod agirlikli |

## CLI ve Streamlit

- **CLI:** `python main.py "Konu"` veya `python main.py --topic "Konu"`; `--category` opsiyonel (`agents/writer_agent.ALLOWED_CATEGORIES`).
- **Streamlit:** konu → Uret → onay (kategori + metin) → Yayin → `src/content/blog/` + `src/pages/.../*.astro` (`save_approved_article_with_routing`).

## Yayin ciktilari (Estranova)

| Tur | Yol |
|-----|-----|
| Markdown (koleksiyon) | `src/content/blog/{date}-{slug}.md` |
| Statik sayfa | `src/pages/{category}/.../{slug}.astro` |
| Taslak / hazir degil | `output/drafts/` |
| Debug | `output/_debug/` (gitignore) |
| Rapor | `output/{date}-{slug}-report.json` |

Genel isimlendirme: `docs/PIPELINE.md`, `docs/style-rules-map.md`.

## Placeholder doldurma listesi (fork)

1. `config/domain_placeholders.py` — BRAND_PERSONA, LANGUAGE, ARTICLE_STRUCTURE, FAQ_MIN/MAX, ALLOWED_CATEGORIES, FORBIDDEN_*
2. `prompts/*.md` — marka sesi ve cikti sozlesmeleri
3. `agents/compliance_expert_agent.py` — deterministik listeler (veya import ile domain_placeholders)
4. `agents/writer_agent.py` — validator sabitleri ile hizala
5. Site entegrasyonu — Astro/Next: `main.py` yayin fonksiyonlari
