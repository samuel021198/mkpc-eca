@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Updating website data (only changed folders / Excel)...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0rebuild.ps1"
echo.
if errorlevel 1 (
  echo FAILED. Close the Excel file 2627_課外活動總表 V5.xlsx and try again.
) else (
  echo Done. Refresh the browser with Ctrl+F5.
)
pause
