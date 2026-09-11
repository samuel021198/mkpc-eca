# Club folders -> data/folders.json + img/clubs/
$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.IO.Compression.FileSystem
Add-Type -AssemblyName System.Drawing

$root = Split-Path $PSScriptRoot -Parent
$cands = Get-ChildItem -LiteralPath $root -Directory -Recurse -ErrorAction SilentlyContinue |
  Where-Object { $_.Name -eq "Newspaper Club" }
$clubRoot = $null
$best = 0
foreach ($c in $cands) {
  $grand = $c.Parent.Parent
  if (-not $grand) { continue }
  $n = @(Get-ChildItem -LiteralPath $grand.FullName -Directory).Count
  if ($n -gt $best) { $best = $n; $clubRoot = $grand.FullName }
}
$outImg = Join-Path $PSScriptRoot "img\clubs"
$outData = Join-Path $PSScriptRoot "data"
New-Item -ItemType Directory -Force -Path $outImg | Out-Null
New-Item -ItemType Directory -Force -Path $outData | Out-Null

function Get-DocxText([string]$path) {
  $tmp = Join-Path $env:TEMP ("eca_docx_" + [guid]::NewGuid().ToString("n"))
  $copy = Join-Path $env:TEMP ("eca_docx_" + [guid]::NewGuid().ToString("n") + ".docx")
  New-Item -ItemType Directory -Path $tmp | Out-Null
  try {
    Copy-Item -LiteralPath $path -Destination $copy -Force
    [IO.Compression.ZipFile]::ExtractToDirectory($copy, $tmp)
    $xmlPath = Join-Path $tmp "word\document.xml"
    if (-not (Test-Path -LiteralPath $xmlPath)) { return "" }
    $xml = [IO.File]::ReadAllText($xmlPath)
    $xml = $xml -replace "</w:p>", "`n"
    $parts = [regex]::Matches($xml, '<w:t[^>]*>([^<]*)</w:t>') | ForEach-Object { $_.Groups[1].Value }
    return ($parts -join "") -replace '&amp;', '&'
  } catch {
    Write-Host "skip docx" $path
    return ""
  } finally {
    Remove-Item -LiteralPath $tmp -Recurse -Force -ErrorAction SilentlyContinue
    Remove-Item -LiteralPath $copy -Force -ErrorAction SilentlyContinue
  }
}

function Save-Cover([string]$src, [string]$dest) {
  $img = $null
  $bmp = $null
  $g = $null
  $tmp = Join-Path $env:TEMP ("eca_img_" + [guid]::NewGuid().ToString("n") + [IO.Path]::GetExtension($src))
  try {
    Copy-Item -LiteralPath $src -Destination $tmp -Force
    $img = [Drawing.Image]::FromFile($tmp)
    $maxW = 1000
    $scale = [Math]::Min(1.0, $maxW / [double]$img.Width)
    $w = [Math]::Max(1, [int]($img.Width * $scale))
    $h = [Math]::Max(1, [int]($img.Height * $scale))
    $bmp = New-Object Drawing.Bitmap $w, $h
    $g = [Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($img, 0, 0, $w, $h)
    $codec = [Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
    $ep = New-Object Drawing.Imaging.EncoderParameters 1
    $ep.Param[0] = New-Object Drawing.Imaging.EncoderParameter ([Drawing.Imaging.Encoder]::Quality, [long]74)
    $bmp.Save($dest, $codec, $ep)
  } finally {
    if ($g) { $g.Dispose() }
    if ($bmp) { $bmp.Dispose() }
    if ($img) { $img.Dispose() }
    Remove-Item -LiteralPath $tmp -Force -ErrorAction SilentlyContinue
    [GC]::Collect()
  }
}

if (-not (Test-Path -LiteralPath $clubRoot)) {
  [IO.File]::WriteAllText((Join-Path $outData "folders.json"), "{}", [Text.UTF8Encoding]::new($false))
  Write-Host "no club folders"
  exit 0
}

function Get-FolderStamp([string]$dir) {
  $files = Get-ChildItem -LiteralPath $dir -Recurse -File -ErrorAction SilentlyContinue |
    Where-Object { $_.Name -notlike "~*" }
  if (-not $files) { return "0" }
  return [string](($files | Measure-Object LastWriteTimeUtc -Maximum).Maximum.Ticks)
}

$stampPath = Join-Path $outData "..\.cache\club-stamps.json"
$stampDir = Split-Path $stampPath
New-Item -ItemType Directory -Force -Path $stampDir | Out-Null
$stamps = @{}
if (Test-Path -LiteralPath $stampPath) {
  $oldStamps = Get-Content -LiteralPath $stampPath -Raw -Encoding UTF8 | ConvertFrom-Json
  $oldStamps.PSObject.Properties | ForEach-Object { $stamps[$_.Name] = [string]$_.Value }
}
$prev = @{}
$foldersPath = Join-Path $outData "folders.json"
if (Test-Path -LiteralPath $foldersPath) {
  $oldMap = Get-Content -LiteralPath $foldersPath -Raw -Encoding UTF8 | ConvertFrom-Json
  $oldMap.PSObject.Properties | ForEach-Object { $prev[$_.Name] = $_.Value }
}

$map = @{}
$changed = 0
Get-ChildItem -LiteralPath $clubRoot -Directory | ForEach-Object {
  Get-ChildItem -LiteralPath $_.FullName -Directory
} | ForEach-Object {
  $name = $_.Name
  $tick = Get-FolderStamp $_.FullName
  $old = $prev[$name]
  $dest = if ($old -and $old.cover) { Join-Path $PSScriptRoot (($old.cover -replace "/", "\")) } else { "" }
  $coverOk = -not $dest -or (Test-Path -LiteralPath $dest)
  $destFresh = $dest -and $coverOk -and ((Get-Item -LiteralPath $dest).LastWriteTimeUtc.Ticks -ge [int64]$tick)
  if ($old -and $coverOk -and ($stamps[$name] -eq $tick -or $destFresh)) {
    $map[$name] = $old
    $stamps[$name] = $tick
    return
  }
  $script:changed++
  $docx = Get-ChildItem -LiteralPath $_.FullName -Filter "*.docx" -File | Where-Object { $_.Name -notlike "~*" } | Select-Object -First 1
  $raw = ""
  if ($docx) { $raw = Get-DocxText $docx.FullName }
  $photosDir = Get-ChildItem -LiteralPath $_.FullName -Directory -ErrorAction SilentlyContinue |
    Where-Object { $_.Name -like "photo*" } | Select-Object -First 1
  $coverRel = ""
  $photoRels = New-Object System.Collections.Generic.List[string]
  if ($photosDir) {
    $all = @(Get-ChildItem -LiteralPath $photosDir.FullName -File | Where-Object { $_.Extension -match '\.(jpg|jpeg|png|webp)$' })
    $pick = $all | Where-Object { $_.BaseName -eq "cover" } | Select-Object -First 1
    if (-not $pick) { $pick = $all | Select-Object -First 1 }
    $rest = @($all | Where-Object { $pick -and $_.FullName -ne $pick.FullName } | Select-Object -First 5)
    $files = @($pick) + $rest | Where-Object { $_ }
    $i = 0
    foreach ($f in $files) {
      $i++
      $destName = ($name + "-" + $i + ".jpg")
      try {
        Save-Cover $f.FullName (Join-Path $outImg $destName)
        $rel = "img/clubs/" + $destName
        $photoRels.Add($rel)
        if (-not $coverRel) { $coverRel = $rel }
      } catch {
        Write-Host "skip photo" $f.FullName
      }
    }
  }
  $map[$name] = @{
    introRaw = $raw
    cover = $coverRel
    photos = @($photoRels)
    folderCat = $_.Parent.Name
  }
  $stamps[$name] = $tick
}

$json = $map | ConvertTo-Json -Depth 5
$path = Join-Path $outData "folders.json"
$ok = $false
foreach ($n in 1..8) {
  try {
    [IO.File]::WriteAllText($path, $json, [Text.UTF8Encoding]::new($false))
    $ok = $true
    break
  } catch {
    Start-Sleep -Milliseconds 400
  }
}
if (-not $ok) { throw "cannot write folders.json" }
[IO.File]::WriteAllText($stampPath, ($stamps | ConvertTo-Json -Depth 3), [Text.UTF8Encoding]::new($false))
Write-Host "folders" $map.Count "updated" $changed
