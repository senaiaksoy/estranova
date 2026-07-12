@echo off
setlocal EnableDelayedExpansion

echo [INFO] Python executable araniyor...
set "PYTHON_EXE="

where py >nul 2>&1
if %errorlevel%==0 (
    set "PYTHON_EXE=py"
    echo [INFO] Bulundu: py launcher
) else (
    where python >nul 2>&1
    if %errorlevel%==0 (
        set "PYTHON_EXE=python"
        echo [INFO] Bulundu: python
    ) else (
        echo [WARN] Python PATH'te bulunamadi.
    )
)

echo [INFO] Gerekli kutuphaneler yukleniyor...
if defined PYTHON_EXE (
    if /I "!PYTHON_EXE!"=="py" (
        py -m pip install -r agents\requirements.txt
    ) else (
        "!PYTHON_EXE!" -m pip install -r agents\requirements.txt
    )
) else (
    echo [WARN] Python executable bulunamadi, dogrudan pip denenecek...
    pip install -r agents\requirements.txt
)

if %errorlevel%==0 (
    echo [OK] Kurulum denemesi tamamlandi.
) else (
    echo [WARN] Kurulum sirasinda hata olustu. Python kurulumunu ve PATH ayarlarini kontrol edin.
)

echo.
echo [INFO] Kullanabileceginiz komut ornekleri:
echo   py main.py "ornek-konu" --pretty
echo   C:\Path\To\Python\python.exe main.py "ornek-konu" --pretty

endlocal
