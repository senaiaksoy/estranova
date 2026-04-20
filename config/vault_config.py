"""
Vault konfigürasyonu — Dr. Aksoy Knowledge Vault.

Writer agent'ın vault'tan topic-uyumlu context çekmesi için gereken ayarlar.
Ortam değişkenleri ile override edilebilir (CI/CD + farklı makineler için).

Varsayılan davranış:
  - Path mevcutsa: vault_context prompt'a enjekte edilir.
  - Path yoksa veya erişilemezse: fail-open; writer orijinal akışla çalışır.
"""

from __future__ import annotations

import os
from pathlib import Path
from typing import Final


def _env_path(key: str, default: Path) -> Path:
    val = os.getenv(key)
    if val and val.strip():
        return Path(val.strip())
    return default


def _env_bool(key: str, default: bool) -> bool:
    val = (os.getenv(key) or "").strip().lower()
    if val in {"1", "true", "yes", "on"}:
        return True
    if val in {"0", "false", "no", "off"}:
        return False
    return default


def _env_int(key: str, default: int) -> int:
    val = os.getenv(key)
    if val and val.strip().isdigit():
        return int(val.strip())
    return default


# Vault kök dizini. Windows default; Linux/CI'de ESTRANOVA_VAULT_PATH env ile override.
VAULT_PATH: Final[Path] = _env_path(
    "ESTRANOVA_VAULT_PATH",
    Path(r"E:\obsidian-vaults\draksoyivf-knowledge"),
)

# Writer agent vault query enable/disable toggle.
# CI veya vault erişimi olmayan ortamlar için false yapılabilir.
VAULT_ENABLED: Final[bool] = _env_bool("ESTRANOVA_VAULT_ENABLED", True)

# Toplam context karakter sınırı (~4x token).
VAULT_MAX_CONTEXT_CHARS: Final[int] = _env_int("ESTRANOVA_VAULT_MAX_CHARS", 16000)

# Topic-matched concept seed sayısı.
VAULT_MAX_CONCEPTS: Final[int] = _env_int("ESTRANOVA_VAULT_MAX_CONCEPTS", 3)


def is_available() -> bool:
    """Vault yolu mevcut mu?"""
    return VAULT_ENABLED and VAULT_PATH.is_dir()


__all__ = [
    "VAULT_PATH",
    "VAULT_ENABLED",
    "VAULT_MAX_CONTEXT_CHARS",
    "VAULT_MAX_CONCEPTS",
    "is_available",
]
