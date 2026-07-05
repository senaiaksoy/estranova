import pytest
from unittest.mock import patch


@pytest.fixture(autouse=True)
def mock_live_prices(request):
    if "test_prices.py" in request.node.fspath.strpath:
        yield
    else:
        with patch("market_signals.prices.LivePriceProvider.get", return_value=None):
            yield
