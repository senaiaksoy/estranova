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
        primary_chat = None
        try:
            primary_chat = self._build_primary_chat_model(role, model_name, **kwargs)
        except Exception as exc:
            print(f"[ERR] {role}: primary kurulamadi ({model_name}), cagri aninda gpt-4o denenecek: {exc}")

        return _FailoverChatModel(
            manager=self,
            role=role,
            primary_model_name=model_name,
            primary_chat=primary_chat,
            build_kwargs=kwargs,
        )

    def _build_primary_chat_model(self, role: str, model_name: str, **kwargs: Any):
        if model_name.startswith("gpt-"):
            return self._build_openai_chat(role=role, model_name=model_name, **kwargs)

        if model_name.startswith("claude-"):
            self._require_env("ANTHROPIC_API_KEY", role)
            from langchain_anthropic import ChatAnthropic

            return ChatAnthropic(model=model_name, api_key=os.getenv("ANTHROPIC_API_KEY"), **kwargs)

        if model_name.startswith("gemini-"):
            self._require_env("GOOGLE_API_KEY", role)
            from langchain_google_genai import ChatGoogleGenerativeAI

            return ChatGoogleGenerativeAI(model=model_name, google_api_key=os.getenv("GOOGLE_API_KEY"), **kwargs)

        raise ValueError(f"Unsupported model mapping for role '{role}': {model_name}")

    def _build_openai_chat(self, role: str, model_name: str, **kwargs: Any):
        self._require_env("OPENAI_API_KEY", role)
        from langchain_openai import ChatOpenAI

        openai_kwargs = self._normalize_openai_kwargs(kwargs)
        return ChatOpenAI(model=model_name, api_key=os.getenv("OPENAI_API_KEY"), **openai_kwargs)

    FALLBACK_MODEL: str = "gpt-4o"

    def _invoke_openai_fallback(self, role: str, messages: Any, build_kwargs: dict[str, Any]):
        """Tek deneme: yalnizca gpt-4o (mini+4o zinciri yok, dongu yok)."""
        try:
            chat = self._build_openai_chat(role=role, model_name=self.FALLBACK_MODEL, **build_kwargs)
            return chat.invoke(messages)
        except Exception as exc:
            raise RuntimeError(
                f"Fallback ({self.FALLBACK_MODEL}) basarisiz role={role}: {exc}"
            ) from exc

    @staticmethod
    def _normalize_openai_kwargs(kwargs: dict[str, Any]) -> dict[str, Any]:
        normalized = dict(kwargs)
        # Gemini path can pass max_output_tokens; OpenAI expects max_tokens.
        if "max_output_tokens" in normalized and "max_tokens" not in normalized:
            normalized["max_tokens"] = normalized.pop("max_output_tokens")
        else:
            normalized.pop("max_output_tokens", None)
        return normalized

    @staticmethod
    def _require_env(env_name: str, role: str) -> None:
        if not os.getenv(env_name):
            raise EnvironmentError(f"Missing required env var '{env_name}' for role '{role}'")


def get_chat_model(role: str, **kwargs: Any):
    return LLMManager().build_chat_model(role, **kwargs)


class _FailoverChatModel:
    """Primary model; invoke hatasinda veya primary yoksa tek seferlik OpenAI fallback."""

    def __init__(
        self,
        *,
        manager: LLMManager,
        role: str,
        primary_model_name: str,
        primary_chat: Any,
        build_kwargs: dict[str, Any],
    ) -> None:
        self.manager = manager
        self.role = role
        self.primary_model_name = primary_model_name
        self.primary_chat = primary_chat
        self.build_kwargs = build_kwargs
        self.last_model_used: str | None = None

    def invoke(self, messages: Any):
        if self.primary_chat is None:
            print(f"[WARN] {self.role}: primary model yok, tek seferlik {self.manager.FALLBACK_MODEL}")
            result = self.manager._invoke_openai_fallback(self.role, messages, self.build_kwargs)
            self.last_model_used = self.manager.FALLBACK_MODEL
            return result

        try:
            result = self.primary_chat.invoke(messages)
            self.last_model_used = self.primary_model_name
            return result
        except Exception as exc:
            if str(self.primary_model_name) == self.manager.FALLBACK_MODEL:
                print(f"[ERR] {self.role}: {self.primary_model_name} basarisiz (fallback zaten ayni model): {exc}")
                raise
            print(f"[WARN] {self.role}: {self.primary_model_name} hata, tek fallback {self.manager.FALLBACK_MODEL}: {exc}")
            result = self.manager._invoke_openai_fallback(self.role, messages, self.build_kwargs)
            self.last_model_used = self.manager.FALLBACK_MODEL
            return result
