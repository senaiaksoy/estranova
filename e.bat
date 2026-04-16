@echo off
REM Estranova kisayolu (proje kokundeki e.bat)
REM
REM PowerShell'de baska klasordeyken sadece "e" yazmak CALISMAZ (PATH'te yoksa).
REM   - Gecici:  cd /d "%~dp0"   sonra   .\e.cmd   veya   .\e.bat
REM   - Kalici:  proje kokunde  powershell -ExecutionPolicy Bypass -File .\add-estranova-to-path.ps1
REM              (Yeni terminal acin; sonra her yerden "e" taninir.)
REM
REM CMD'de kalici: bu klasorun yolunu Windows PATH'e ekleyin; e.cmd "e" komutunu bulur.
REM
setlocal EnableDelayedExpansion
cd /d "%~dp0"

set "PYEXE="
where python >nul 2>nul && set "PYEXE=python" && goto :py_ok
where py >nul 2>nul && set "PYEXE=py" && goto :py_ok
echo [Estranova] python veya py bulunamadi. PATH'e ekleyin veya Python kurun.
exit /b 9009

:py_ok
if "%~1"=="" (
  "%PYEXE%" "%~dp0app.py" ui
  exit /b %ERRORLEVEL%
)

if /i "%~1"=="rapor" (
  "%PYEXE%" "%~dp0app.py" dashboard
  exit /b %ERRORLEVEL%
)

if /i "%~1"=="yaz" (
  if "%~2"=="" (
    echo [Estranova] Konu eksik. Ornek: e.bat yaz "Magnezyum ve kadin sagligi"
    exit /b 1
  )
  set "ALL=%*"
  set "TOPIC=!ALL:~4!"
  "%PYEXE%" "%~dp0app.py" run "!TOPIC!"
  exit /b %ERRORLEVEL%
)

echo Estranova ^(e.bat^)
echo   e.bat              - Web arayuzu ^(Streamlit^)
echo   e.bat yaz ^<konu^> - Makale uretimi ^(ajan pipeline^)
echo   e.bat rapor        - Dashboard ^(output raporlari^)
exit /b 1
