from __future__ import annotations

from typing import Final


ORCHESTRATOR: Final[str] = "gpt-4o"
RESEARCHER: Final[str] = "gemini-2.5-flash"
WRITER: Final[str] = "claude-sonnet-4-6"
CHECKER: Final[str] = "claude-sonnet-4-6"
COMPLIANCE: Final[str] = "claude-sonnet-4-6"

LLM_ROLE_MODELS: Final[dict[str, str]] = {
    "orchestrator": ORCHESTRATOR,
    "researcher": RESEARCHER,
    "writer": WRITER,
    "checker": CHECKER,
    "compliance": COMPLIANCE,
}
