# Polls club folders; rebuilds a few seconds after teachers save.
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot
$root = Split-Path $PSScriptRoot -Parent
$cands = Get-ChildItem -LiteralPath $root -Directory -Recurse -ErrorAction SilentlyContinue |
  Where-Object { $_.Name -eq "Newspaper Club" }
$watchRoot = $null
$best = 0
foreach ($c in $cands) {
  $grand = $c.Parent.Parent
  if (-not $grand) { continue }
  $n = @(Get-ChildItem -LiteralPath $grand.FullName -Directory).Count
  if ($n -gt $best) { $best = $n; $watchRoot = $grand.FullName }
}
if (-not (Test-Path -LiteralPath $watchRoot)) { throw "club folders missing" }

function Get-Stamp {
  $m = Get-ChildItem -LiteralPath $watchRoot -Recurse -File -ErrorAction SilentlyContinue |
    Sort-Object LastWriteTime -Descending |
    Select-Object -First 1
  if ($m) { return $m.LastWriteTimeUtc.Ticks } else { return 0 }
}

function Update-Site {
  Write-Host "$(Get-Date -Format HH:mm:ss) updating from club folders…"
  & powershell -NoProfile -ExecutionPolicy Bypass -File ".\dump-clubs.ps1"
  if (-not (Test-Path -LiteralPath ".\data\sheets.json")) {
    & powershell -NoProfile -ExecutionPolicy Bypass -File ".\dump-excel.ps1"
  }
  node .\build.mjs
  Remove-Item -LiteralPath ".\data\sheets.json" -ErrorAction SilentlyContinue
  Write-Host "$(Get-Date -Format HH:mm:ss) done — refresh the browser"
}

Write-Host "Watching club folders every 15s. Ctrl+C to stop."
$last = 0
while ($true) {
  $now = Get-Stamp
  if ($now -ne $last) {
    $last = $now
    Update-Site
  }
  Start-Sleep -Seconds 15
}
