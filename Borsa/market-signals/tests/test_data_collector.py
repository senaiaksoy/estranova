from datetime import date

from market_signals.data_collector import merge_and_save_to_csv


def test_merge_and_save_to_csv_creates_file_when_missing(tmp_path):
    total = merge_and_save_to_csv(
        "z30ea",
        [(date(2026, 7, 6), 199.6)],
        data_dir=tmp_path,
    )

    assert total == 1
    text = (tmp_path / "z30ea.csv").read_text(encoding="utf-8")
    assert "date,price" in text
    assert "2026-07-06,199.6" in text


def test_merge_and_save_to_csv_accumulates_across_calls(tmp_path):
    merge_and_save_to_csv("z30ea", [(date(2026, 7, 6), 199.6)], data_dir=tmp_path)
    total = merge_and_save_to_csv("z30ea", [(date(2026, 7, 7), 201.2)], data_dir=tmp_path)

    assert total == 2
    lines = (tmp_path / "z30ea.csv").read_text(encoding="utf-8").splitlines()
    assert lines[1] == "2026-07-06,199.6"
    assert lines[2] == "2026-07-07,201.2"


def test_merge_and_save_to_csv_overwrites_same_date_with_latest_price(tmp_path):
    merge_and_save_to_csv("z30ea", [(date(2026, 7, 6), 199.6)], data_dir=tmp_path)
    total = merge_and_save_to_csv("z30ea", [(date(2026, 7, 6), 200.1)], data_dir=tmp_path)

    assert total == 1
    lines = (tmp_path / "z30ea.csv").read_text(encoding="utf-8").splitlines()
    assert lines == ["date,price", "2026-07-06,200.1"]
