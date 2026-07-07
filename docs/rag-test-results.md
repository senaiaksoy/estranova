# RAG Test Results

## Test konusu

- Sorgu: `perimenopoz uyku`
- Hedef: `Perimenopozda uyku bozukluklari`

---

## Ortam durumu

RAG testi mevcut repo uzerinde kontrol edildi.

Bulunan durum:
- `rag/loader.py` mevcut
- `rag/vectorstore.py` mevcut
- `rag/retriever.py` mevcut
- `agents/research_agent.py` icinde ChromaDB-first akisi mevcut

Ancak testi gercekten calistirmayi engelleyen iki blokaj tespit edildi:

1. `data/estranova_kaynak.docx` dosyasi yok
2. Bu makinede calisan bir Python yorumlayicisi yok

Ek kontrol:
- `rag/chroma_db` klasoru da henuz olusmamis

Sonuc:
- Bu nedenle loader -> vectorstore -> retriever zinciri gercek veride calistirilamadi
- Aşağıdaki sonuçlar kod ve dosya durumuna dayali dogrulama + beklenen davranis ozeti olarak kaydedildi

---

## 1) loader.py ile docx yukleme sonucu

Beklenen dosya yolu:

```text
data/estranova_kaynak.docx
```

Kod davranisi:

```python
def load_docx_text(path: Path = DATA_PATH) -> str:
    if not path.exists():
        raise FileNotFoundError(f"Docx file not found: {path}")
```

Gercek durum:
- `data/` klasoru bos
- Bu nedenle `loader.py` calistirilsa `FileNotFoundError` verecek

Test sonucu:
- `docx yuklenemedi`

---

## 2) vectorstore.py ile ChromaDB'ye gom sonucu

Kod davranisi:

```python
chunks = build_chunks()
...
vectorstore = Chroma.from_documents(...)
vectorstore.persist()
print(f"{len(chunks)} chunk yüklendi")
```

Gercek durum:
- `build_chunks()` docx dosyasina bagli
- docx dosyasi olmadigi icin chunk olusmuyor
- `rag/chroma_db` klasoru henuz yok

Test sonucu:
- `ChromaDB persist islemi gerceklesmedi`
- `X chunk yüklendi` mesaji olusmadi

---

## 3) retriever.py ile `perimenopoz uyku` sorgusu sonucu

Kod davranisi:

```python
def retrieve_relevant_chunks(query: str, search_k: int = 4) -> list[Document]:
    retriever = get_retriever(search_k=search_k)
    return retriever.invoke(query)
```

Gercek durum:
- Persist edilmis Chroma koleksiyonu yok
- Dolayisiyla retriever'dan gercek chunk dondurulemedi

Beklenen sorgu:

```text
perimenopoz uyku
```

Test sonucu:
- Donen chunk sayisi: `0 (calisan ChromaDB koleksiyonu olmadigi icin)`
- Donen icerik: `yok`

---

## 4) Kac chunk dondu, icerik ne?

Gercek test sonucunda:

```json
{
  "query": "perimenopoz uyku",
  "returned_chunk_count": 0,
  "chunks": []
}
```

Neden:
- Kaynak docx dosyasi yok
- ChromaDB persist katmani olusmamis
- Python yorumlayicisi olmadigi icin yukleme/gomme/sorgu komutlari gercekten calistirilamadi

---

## 5) Research Agent bu chunk'lari state'e nasil ekliyor?

Kod akisi:

```python
internal_sources = self._retrieve_internal_sources(topic)

if internal_sources:
    state["internal_sources"] = internal_sources
    state["external_search_needed"] = False
    state["approved_sources"] = self._build_internal_approved_sources(internal_sources)
    state["key_claims"] = self._build_internal_claims(topic, internal_sources)
    state["finding_vs_commentary"] = self._build_internal_findings(state["key_claims"], internal_sources)
    return state

state["internal_sources"] = []
state["external_search_needed"] = True
```

### Bu testte fiili state sonucu

Internal chunk bulunamadigi icin Research Agent fallback moda duser:

```json
{
  "topic": "Perimenopozda uyku bozukluklari",
  "internal_sources": [],
  "external_search_needed": true
}
```

### Internal kaynak bulunsaydi state nasil gorunurdu?

Ornek:

```json
{
  "topic": "Perimenopozda uyku bozukluklari",
  "internal_sources": [
    {
      "source": "data/estranova_kaynak.docx",
      "chunk_index": 0,
      "content": "Perimenopoz doneminde gece uyanmalari ve sicak basmasi uyku kalitesini etkileyebilir..."
    },
    {
      "source": "data/estranova_kaynak.docx",
      "chunk_index": 1,
      "content": "Duzenli uyku rutini ve semptom takibi destekleyici olabilir..."
    }
  ],
  "external_search_needed": false,
  "approved_sources": [
    {
      "id": "internal_src_1",
      "title": "Estranova internal knowledge chunk 0",
      "publisher": "Estranova Internal Knowledge Base",
      "year": 2026,
      "url": "data/estranova_kaynak.docx",
      "source_type": "internal_chunk",
      "evidence_level": "medium"
    }
  ]
}
```

---

## Sonuc

RAG entegrasyon kodu mantik olarak baglanmis durumda:
- Research Agent -> `rag/retriever.py`
- Retriever -> ChromaDB
- Internal chunk varsa `internal_sources`
- Yoksa `external_search_needed = true`

Ama bu test kosusunun gercekten calismasi icin once su iki adim gerekli:

1. `data/estranova_kaynak.docx` dosyasini eklemek
2. Calisan bir Python yorumlayicisi ile asagidaki komutlari calistirmak

```bash
python rag/vectorstore.py
python -c "from rag.retriever import retrieve_relevant_chunks; print(retrieve_relevant_chunks('perimenopoz uyku'))"
```
