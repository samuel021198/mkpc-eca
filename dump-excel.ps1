$ErrorActionPreference = "Stop"
$root = Split-Path $PSScriptRoot -Parent
$xlsx = Get-ChildItem -LiteralPath $root -Filter "*V5.xlsx" | Where-Object { $_.Name -notlike "~*" } | Select-Object -First 1 -ExpandProperty FullName
if (-not $xlsx) { throw "V5.xlsx not found" }
$cacheDir = Join-Path $PSScriptRoot ".cache"
New-Item -ItemType Directory -Force -Path $cacheDir | Out-Null
$cache = Join-Path $cacheDir "sheets.json"
$xlsxTime = (Get-Item -LiteralPath $xlsx).LastWriteTimeUtc
if ((Test-Path -LiteralPath $cache) -and (Get-Item -LiteralPath $cache).LastWriteTimeUtc -ge $xlsxTime) {
  Write-Host "excel unchanged"
  exit 0
}

$excel = New-Object -ComObject Excel.Application
$excel.Visible = $false
$excel.DisplayAlerts = $false
$wb = $excel.Workbooks.Open($xlsx)

$sheets = @{}
foreach ($ws in $wb.Worksheets) {
  $name = [string]$ws.Name
  if ([string]::IsNullOrWhiteSpace($name)) { continue }
  $used = $ws.UsedRange
  if (-not $used) { continue }
  $rows = $used.Rows.Count
  $cols = $used.Columns.Count
  $grid = New-Object System.Collections.Generic.List[object]
  for ($r=1; $r -le $rows; $r++) {
    $row = New-Object System.Collections.Generic.List[string]
    for ($c=1; $c -le $cols; $c++) {
      $row.Add(([string]$used.Cells.Item($r,$c).Text).Trim())
    }
    $grid.Add($row)
  }
  $sheets[$name] = $grid
}

$wb.Close($false)
$excel.Quit()
[System.Runtime.InteropServices.Marshal]::ReleaseComObject($wb) | Out-Null
[System.Runtime.InteropServices.Marshal]::ReleaseComObject($excel) | Out-Null

$json = $sheets | ConvertTo-Json -Depth 6
[System.IO.File]::WriteAllText($cache, $json, [System.Text.UTF8Encoding]::new($false))
Write-Host ("dumped " + $sheets.Keys.Count + " sheets")
