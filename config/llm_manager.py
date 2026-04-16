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
            print(
                f"[WARN] Primary model hazirlanamadi ({model_name}) role={role}. "
                f"OpenAI fallback denenecek. Hata: {exc}"
            )

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

    def _invoke_openai_fallback(self, role: str, messages: Any, build_kwargs: dict[str, Any]):
        fallback_chain = ["gpt-4o-mini", "gpt-4o"]
        last_error: Exception | None = None
        for fallback_model in fallback_chain:
            try:
                print(f"[WARN] {role} icin fallback modele geciliyor: {fallback_model}")
                chat = self._build_openai_chat(role=role, model_name=fallback_model, **build_kwargs)
                return chat.invoke(messages)
            except Exception as exc:
                last_error = exc
        raise RuntimeError(f"OpenAI fallback modeli de basarisiz oldu: {last_error}") from last_error

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
    """Chat model wrapper that retries with OpenAI fallback on invoke errors."""

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

    def invoke(self, messages: Any):
        if self.primary_chat is None:
            return self.manager._invoke_openai_fallback(self.role, messages, self.build_kwargs)

        try:
            return self.primary_chat.invoke(messages)
        except Exception as exc:
            print(
                f"[WARN] Primary invoke basarisiz ({self.primary_model_name}) role={self.role}. "
                f"Fallback denenecek. Hata: {exc}"
            )
            return self.manager._invoke_openai_fallback(self.role, messages, self.build_kwargs)
