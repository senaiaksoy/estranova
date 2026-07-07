# -*- coding: utf-8 -*-
"""
Topluca 'yaşıt' → 'yaşıt' replace (Berna v2.3 ikinci tur direktifi, 2026-04-30).
Tek replace Türkçe çekimleri otomatik yakalar (yaşıtıyla → yaşıtıyla vb.).
"""
import os
import sys
from pathlib import Path

EXCLUDE_DIRS = {'.git', 'node_modules', 'dist', '.next', '__pycache__', '.astro', '.cache'}
TARGET_EXTENSIONS = {'.md', '.yaml', '.yml', '.ts', '.tsx', '.astro', '.py', '.mjs', '.js', '.json'}

def should_process(path):
    p = Path(path)
    if p.suffix not in TARGET_EXTENSIONS:
        return False
    parts = p.parts
    return not any(part in EXCLUDE_DIRS for part in parts)

def replace_in_file(filepath, dry_run=False):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except (UnicodeDecodeError, OSError):
        return None  # binary or unreadable

    new_content = content.replace('yaşıt', 'yaşıt').replace('Yaşıt', 'Yaşıt')
    if new_content == content:
        return 0

    occurrences = content.count('yaşıt') + content.count('Yaşıt')

    if not dry_run:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)

    return occurrences

def main():
    dry_run = '--dry-run' in sys.argv
    root = Path('.')
    changed_files = []
    total_occurrences = 0

    for path in root.rglob('*'):
        if not path.is_file():
            continue
        if not should_process(str(path)):
            continue
        result = replace_in_file(str(path), dry_run=dry_run)
        if result and result > 0:
            changed_files.append((str(path), result))
            total_occurrences += result

    print(f"{'(DRY RUN) ' if dry_run else ''}Toplam: {len(changed_files)} dosya, {total_occurrences} occurrence")
    for path, count in sorted(changed_files):
        print(f"  {count:3d}  {path}")

if __name__ == '__main__':
    main()
