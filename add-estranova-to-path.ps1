# Proje kokunu kullanici PATH'ine ekler; sonra yeni terminalde "e" komutu taninir.
# PowerShell: Set-ExecutionPolicy -Scope CurrentUser RemoteSigned (bir kez gerekebilir)
# Calistirma:  .\add-estranova-to-path.ps1

$ErrorActionPreference = "Stop"
$repoRoot = $PSScriptRoot
if (-not $repoRoot) { $repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path }

$userPath = [Environment]::GetEnvironmentVariable("Path", "User")
$paths = $userPath -split ";" | Where-Object { $_ -and $_.Trim() -ne "" }
if ($paths -contains $repoRoot) {
    Write-Host "[Estranova] Zaten PATH'te: $repoRoot"
    exit 0
}

$newPath = if ($userPath.TrimEnd(";")) { "$userPath;$repoRoot" } else { $repoRoot }
[Environment]::SetEnvironmentVariable("Path", $newPath, "User")
Write-Host "[Estranova] Kullanici PATH'e eklendi:"
Write-Host "  $repoRoot"
Write-Host "Yeni bir terminal (veya VS Code penceresi) acin; ardindan her yerden 'e', 'e yaz ...', 'e rapor' calisir."
