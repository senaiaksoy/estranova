@echo off
chcp 65001 >nul
title Estranova - Yeni Makale UI
setlocal

set "REPO_ROOT=%~dp0.."
pushd "%REPO_ROOT%"

cls
echo.
echo ===================================================
echo   ESTRANOVA - Yeni Makale Web Arayuzu
echo ===================================================
echo.

if not exist ".env" (
  echo .env dosyasi bulunamadi.
  echo Bir kerelik kurulum gerekli: copy .env.example .env
  pause
  popd
  exit /b 1
)

echo Streamlit baslatiliyor... Tarayici otomatik acilacak.
echo Acilmazsa: http://localhost:8501
echo.
echo Pipeline'i durdurmak icin bu pencereyi kapatabilirsiniz veya Ctrl+C basabilirsiniz.
echo.

streamlit run streamlit_app.py --server.port 8501 --browser.gatherUsageStats false

set "EXITCODE=%ERRORLEVEL%"

echo.
echo ===================================================
echo   Streamlit kapandi (exit code: %EXITCODE%)
echo ===================================================
popd
pause
endlocal
exit /b %EXITCODE%
