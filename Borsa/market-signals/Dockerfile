FROM python:3.12-slim

WORKDIR /app

# Copy the entire directory
COPY . /app/

# Upgrade pip and install the package
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir .

EXPOSE 8765

# Define runtime root to point to /app
ENV MARKET_SIGNALS_ROOT=/app

CMD ["python", "-m", "market_signals", "dashboard", "--host", "0.0.0.0", "--port", "8765"]
