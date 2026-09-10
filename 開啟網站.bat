@echo off
chcp 65001 >nul
cd /d "%~dp0"
start "" cmd /c "timeout /t 2 /nobreak >nul & start http://127.0.0.1:8080/"
npx --yes serve -l tcp://127.0.0.1:8080
