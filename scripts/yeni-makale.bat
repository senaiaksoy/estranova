@echo off
chcp 65001 >nul
title Estranova - Yeni Makale Pipeline
setlocal EnableDelayedExpansion

REM Repo koku = bu .bat'in dizininin uzeri
set "REPO_ROOT=%~dp0.."
pushd "%REPO_ROOT%"

cls
echo.
echo ===================================================
echo   ESTRANOVA - Yeni Makale Pipeline
echo ===================================================
echo.

if not exist ".env" (
  echo .env dosyasi bulunamadi.
  echo.
  echo Bir kerelik kurulum gerekli:
  echo   1. .env.example'i .env olarak kopyala
  echo   2. OPENAI_API_KEY, ANTHROPIC_API_KEY, GOOGLE_API_KEY degerlerini doldur
  echo.
  echo Komut:  copy .env.example .env
  echo.
  pause
  popd
  exit /b 1
)

echo Konu giriniz ^(ornek: Perimenopozda dongu izlemi^):
set /p "TOPIC="

if "%TOPIC%"=="" (
  echo.
  echo Konu girilmedi. Cikiliyor.
  pause
  popd
  exit /b 1
)

echo.
echo Kategori secimi ^(opsiyonel - bos birakilirsa Writer onerisi kullanilir^):
echo.
echo   1^) hormonal-gecis/perimenopoz
echo   2^) hormonal-gecis/menopoza-hazirlik
echo   3^) hormonal-gecis/menopoz
echo   4^) hormonal-gecis/40-sonrasi
echo   5^) beden-yakinlik
echo   6^) zamansiz-yasam
echo   7^) zihin-denge
echo   8^) bilimsel-pencere
echo   9^) editorun-kosesi
echo   ^(Enter^) Otomatik
echo.
set /p "CATCHOICE=Secim: "

set "CATFLAG="
if "%CATCHOICE%"=="1" set "CATFLAG=--category hormonal-gecis/perimenopoz"
if "%CATCHOICE%"=="2" set "CATFLAG=--category hormonal-gecis/menopoza-hazirlik"
if "%CATCHOICE%"=="3" set "CATFLAG=--category hormonal-gecis/menopoz"
if "%CATCHOICE%"=="4" set "CATFLAG=--category hormonal-gecis/40-sonrasi"
if "%CATCHOICE%"=="5" set "CATFLAG=--category beden-yakinlik"
if "%CATCHOICE%"=="6" set "CATFLAG=--category zamansiz-yasam"
if "%CATCHOICE%"=="7" set "CATFLAG=--category zihin-denge"
if "%CATCHOICE%"=="8" set "CATFLAG=--category bilimsel-pencere"
if "%CATCHOICE%"=="9" set "CATFLAG=--category editorun-kosesi"

echo.
echo ---------------------------------------------------
echo   Konu     : %TOPIC%
if defined CATFLAG (
  echo   Kategori : %CATCHOICE%
) else (
  echo   Kategori : otomatik
)
echo ---------------------------------------------------
echo.
echo Pipeline baslatiliyor... ^(Research -^> Writer -^> Medical -^> Compliance -^> Publisher^)
echo.

python main.py "%TOPIC%" %CATFLAG% --pretty

set "EXITCODE=%ERRORLEVEL%"

echo.
echo ===================================================
echo   Pipeline tamamlandi ^(exit code: %EXITCODE%^)
echo ===================================================
echo.
echo Olasi cikti yerleri:
echo   - output\drafts\           (taslak markdown^)
echo   - src\content\blog\        (onayli makale^)
echo   - src\pages\^<kategori^>\    (Astro sayfa^)
echo.

popd
pause
endlocal
exit /b %EXITCODE%
