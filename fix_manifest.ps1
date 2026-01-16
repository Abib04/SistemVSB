$path = 'c:\laragon\www\SistemVSB\SistemVSB\index.html'
$content = Get-Content $path -Raw
$pattern = '(?s)<link rel="manifest"\s+href="data:application/json;base64,.*?>'
$replacement = '<link rel="manifest" href="manifest.json">
    <link rel="apple-touch-icon" href="https://img.icons8.com/fluency/192/appointment-reminders.png">'
$newContent = $content -replace $pattern, $replacement
$newContent | Set-Content $path
