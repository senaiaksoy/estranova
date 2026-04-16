from __future__ import annotations

import os
from typing import Any

from dotenv import load_dotenv

from config.llm_config import LLM_ROLE_MODELS


load_dotenv()


class LLMManager:
    """Resolve role -> model and lazily build the matching LangChain chat model."""

    def __init__(self) -> None:
        self.role_models = LLM_ROLE_MODELS

    def get_model_name(self, role: str) -> str:
        try:
            return self.role_models[role]
        except KeyError as exc:
            raise ValueError(f"Unknown LLM role: {role}") from exc

    def build_chat_model(self, role: str, **kwargs: Any):
        model_name = self.get_model_name(role)

        if model_name.startswith("gpt-"):
            self._require_env("OPENAI_API_KEY", role)
            from langchain_openai import ChatOpenAI

            return ChatOpenAI(model=model_name, api_key=os.getenv("OPENAI_API_KEY"), **kwargs)

        if model_name.startswith("claude-"):
            self._require_env("ANTHROPIC_API_KEY", role)
            from langchain_anthropic import ChatAnthropic

            return ChatAnthropic(model=model_name, api_key=os.getenv("ANTHROPIC_API_KEY"), **kwargs)

        if model_name.startswith("gemini-"):
            self._require_env("GOOGLE_API_KEY", role)
            from langchain_google_genai import ChatGoogleGenerativeAI

            return ChatGoogleGenerativeAI(model=model_name, google_api_key=os.getenv("GOOGLE_API_KEY"), **kwargs)

        raise ValueError(f"Unsupported model mapping for role '{role}': {model_name}")

    @staticmethod
    def _require_env(env_name: str, role: str) -> None:
        if not os.getenv(env_name):
            raise EnvironmentError(f"Missing required env var '{env_name}' for role '{role}'")


def get_chat_model(role: str, **kwargs: Any):
    return LLMManager().build_chat_model(role, **kwargs)
