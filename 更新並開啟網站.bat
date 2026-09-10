@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Updating website (only changed folders / Excel)...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0rebuild.ps1"
if errorlevel 1 (
  echo FAILED. Close 2627_課外活動總表 V5.xlsx and try again.
  pause
  exit /b 1
)
echo Done.
powershell -NoProfile -Command "try { if ((Invoke-WebRequest -Uri http://127.0.0.1:8080/ -UseBasicParsing -TimeoutSec 2).StatusCode -eq 200) { exit 0 } } catch {}; exit 1"
if errorlevel 1 (
  echo Starting website...
  start "ECA website" cmd /k "cd /d ""%~dp0"" && npx --yes serve -l tcp://127.0.0.1:8080"
  timeout /t 3 /nobreak >nul
)
start "" "http://127.0.0.1:8080/"
echo Opened http://127.0.0.1:8080/  — press Ctrl+F5 if the page looks old.
pause
