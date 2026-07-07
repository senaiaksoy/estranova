from market_signals.taxes import calculate_asset_tax


def test_asset_tax_calculation_mutual_fund():
    # Buy 10 shares of YAY at 1000 TRY, currently at 1500 TRY
    # Gain = 15000 - 10000 = 5000
    # Stopaj = 5000 * 17.5% = 875  (YAY: yabancı HSY fon -> %17.5, 2026-03 kararı)
    # Net = 14125
    res = calculate_asset_tax(
        symbol="YAY",
        quantity=10.0,
        current_price=1500.0,
        cost_price=1000.0
    )
    assert res["symbol"] == "YAY"
    assert res["current_value"] == 15000.0
    assert res["cost_basis"] == 10000.0
    assert res["gain"] == 5000.0
    assert res["tax_rate"] == 0.175
    assert res["tax_amount"] == 875.0
    assert res["net_value"] == 14125.0


def test_asset_tax_calculation_physical_gold():
    # Gold has 0% stopaj
    res = calculate_asset_tax(
        symbol="GRAM_ALTIN",
        quantity=10.0,
        current_price=3000.0,
        cost_price=2000.0
    )
    assert res["symbol"] == "GRAM_ALTIN"
    assert res["gain"] == 10000.0
    assert res["tax_rate"] == 0.0
    assert res["tax_amount"] == 0.0
    assert res["net_value"] == 30000.0


def test_asset_tax_calculation_with_loss():
    # Capital loss yields 0 tax
    res = calculate_asset_tax(
        symbol="YAY",
        quantity=10.0,
        current_price=800.0,
        cost_price=1000.0
    )
    assert res["gain"] == -2000.0
    assert res["tax_amount"] == 0.0
    assert res["net_value"] == 8000.0
