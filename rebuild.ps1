# Refresh site data from the master Excel (no phone numbers are copied).
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot
powershell -NoProfile -ExecutionPolicy Bypass -File ".\dump-excel.ps1"
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
powershell -NoProfile -ExecutionPolicy Bypass -File ".\dump-clubs.ps1"
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
node .\build.mjs
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
Remove-Item -LiteralPath ".\data\sheets.json" -ErrorAction SilentlyContinue
