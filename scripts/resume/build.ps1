# Regenerates public/Resume-Md-Rabiul-Islam-Santo.pdf from resume.html
# using headless Microsoft Edge. Run from anywhere:
#   powershell -File scripts/resume/build.ps1

$root = Resolve-Path (Join-Path $PSScriptRoot "..\..")
$source = Join-Path $PSScriptRoot "resume.html"
$target = Join-Path $root "public\Resume-Md-Rabiul-Islam-Santo.pdf"

$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edge)) { $edge = "C:\Program Files\Microsoft\Edge\Application\msedge.exe" }
if (-not (Test-Path $edge)) { throw "Microsoft Edge not found - install Edge or adjust the path." }

$sourceUri = "file:///" + ($source -replace "\\", "/")
& $edge --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="$target" $sourceUri | Out-Null
Start-Sleep -Seconds 2

if (Test-Path $target) {
    Write-Output "Wrote $target ($((Get-Item $target).Length) bytes)"
} else {
    throw "PDF generation failed."
}
