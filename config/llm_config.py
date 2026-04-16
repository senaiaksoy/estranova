from __future__ import annotations

from typing import Final


ORCHESTRATOR: Final[str] = "gpt-4o"
RESEARCHER: Final[str] = "gemini-1.5-pro"
WRITER: Final[str] = "claude-3-5-sonnet-latest"
CHECKER: Final[str] = "gpt-4o"
COMPLIANCE: Final[str] = "gpt-4o"

LLM_ROLE_MODELS: Final[dict[str, str]] = {
    "orchestrator": ORCHESTRATOR,
    "researcher": RESEARCHER,
    "writer": WRITER,
    "checker": CHECKER,
    "compliance": COMPLIANCE,
}
