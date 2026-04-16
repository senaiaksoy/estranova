from __future__ import annotations

from pathlib import Path


class PromptBackedAgent:
    def __init__(self, prompt_filename: str) -> None:
        self.prompt_path = Path(__file__).with_name(prompt_filename)
        self.prompt_text = self.prompt_path.read_text(encoding="utf-8")

    @property
    def name(self) -> str:
        return self.__class__.__name__
