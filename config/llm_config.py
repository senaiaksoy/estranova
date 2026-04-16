from __future__ import annotations

from typing import Final


ORCHESTRATOR: Final[str] = "gpt-4o"
RESEARCHER: Final[str] = "gemini-1.5-flash"
WRITER: Final[str] = "gpt-4o"
CHECKER: Final[str] = "gpt-4o"
COMPLIANCE: Final[str] = "gpt-4o"

LLM_ROLE_MODELS: Final[dict[str, str]] = {
    "orchestrator": ORCHESTRATOR,
    "researcher": RESEARCHER,
    "writer": WRITER,
    "checker": CHECKER,
    "compliance": COMPLIANCE,
}
