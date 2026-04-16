from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any, Optional

from config.llm_manager import LLMManager
from config.llm_config import LLM_ROLE_MODELS

from langchain_core.messages import HumanMessage, SystemMessage


class PromptBackedAgent:
    """
    Reads the system prompt from repo root `/prompts` folder and provides an LLM call helper.

    Note: This class does not force an agent to call an LLM. Agents decide when to call.
    """

    def __init__(self, prompt_rel_path_from_repo_root: str) -> None:
        repo_root = Path(__file__).resolve().parents[1]
        prompt_path = repo_root / prompt_rel_path_from_repo_root
        self.prompt_path = prompt_path
        self.prompt_text = prompt_path.read_text(encoding="utf-8")

    @property
    def name(self) -> str:
        return self.__class__.__name__

    @staticmethod
    def detect_provider_from_model(model_name: str) -> str:
        if model_name.startswith("gpt-"):
            return "openai"
        if model_name.startswith("claude-"):
            return "anthropic"
        if model_name.startswith("gemini-"):
            return "google"
        return "unknown"

    def call_llm_json(
        self,
        *,
        role: str,
        user_payload: str,
        temperature: float = 0.2,
        max_tokens: int = 1200,
        state_for_logging: Optional[dict[str, Any]] = None,
    ) -> dict[str, Any]:
        """
        Calls the mapped LLM for `role`, logs provider/model and response length,
        and returns parsed JSON.
        """
        llm_manager = LLMManager()
        model_name = llm_manager.get_model_name(role)
        provider = self.detect_provider_from_model(model_name)
        print(f"{self.name}, {provider}/{model_name} modelini kullanarak çağrı yapıyor...")

        build_kwargs: dict[str, Any] = {"temperature": temperature}
        if model_name.startswith("gemini-"):
            # LangChain wrapper uses `max_output_tokens` for Gemini.
            build_kwargs["max_output_tokens"] = max_tokens
        else:
            build_kwargs["max_tokens"] = max_tokens

        chat = llm_manager.build_chat_model(role, **build_kwargs)

        system_msg = SystemMessage(content=self.prompt_text)
        human_msg = HumanMessage(
            content=user_payload
            + "\n\nLUTTFEN: YALNIZCA GECERLI JSON DONDUR. Kod bloku (```json) kullanma."
        )
        response = chat.invoke([system_msg, human_msg])
        text = getattr(response, "content", None) or str(response)

        parsed = self._parse_json_strict(text)

        if state_for_logging is not None:
            state_for_logging.setdefault("llm_calls", []).append(
                {
                    "agent": self.name,
                    "role": role,
                    "provider": provider,
                    "model": model_name,
                    "response_length_chars": len(text),
                }
            )

        return parsed

    @staticmethod
    def _parse_json_strict(text: str) -> dict[str, Any]:
        text = text.strip()
        # If the model wraps JSON, try to extract the first {...} block.
        if not text.startswith("{"):
            match = re.search(r"\{.*\}", text, flags=re.DOTALL)
            if match:
                text = match.group(0)
        try:
            return json.loads(text)
        except json.JSONDecodeError as exc:
            # Provide a helpful error so the caller can fix the prompt.
            raise ValueError(f"LLM output is not valid JSON. Raw output (truncated): {text[:500]}") from exc
