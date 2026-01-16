
import os

with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
skip = False
for line in lines:
    if '<link rel="icon" type="image/png"' in line:
        new_lines.append('    <link rel="icon" type="image/png" href="img/logo-saja.png">\n')
        skip = True
        continue
    if skip and 'href="data:image/png;base64,' in line:
        skip = False
        continue
    new_lines.append(line)

with open('index.html', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
