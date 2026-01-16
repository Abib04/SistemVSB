import re
import os

path = r'c:\laragon\www\SistemVSB\SistemVSB\index.html'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to find the manifest link (even if it's super long)
# We look for <!-- Icons --> followed by the link tag
pattern = r'(<!-- Icons -->\s*<link rel="manifest"\s*href="data:application/json;base64,[^"]*">)'

replacement = '<!-- Icons -->\n    <link rel="manifest" href="manifest.json">\n    <link rel="apple-touch-icon" href="https://img.icons8.com/fluency/192/appointment-reminders.png">'

new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)

if new_content != content:
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Replacement successful")
else:
    print("Pattern not found")
