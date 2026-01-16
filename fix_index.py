
import os

input_file = 'index.html'
output_file = 'index_fixed.html'

with open(input_file, 'r', encoding='utf-8') as f_in, open(output_file, 'w', encoding='utf-8') as f_out:
    skip = False
    for line in f_in:
        # Detect start of favicon tag
        if '<link rel="icon" type="image/png"' in line:
            f_out.write('    <link rel="icon" type="image/png" href="img/logo-saja.png">\n')
            skip = True
            continue
        
        if skip:
            # If we are skipping, look for the closing of the tag or something that signifies the next part
            # Usually base64 favicon is followed by a newline or >
            if '>' in line:
                skip = False
            continue
            
        # Also handle manifest versioning here
        if '<link rel="manifest" href="manifest.json">' in line:
            line = line.replace('manifest.json', 'manifest.json?v=1.1')
            
        f_out.write(line)

# Replace original with fixed
os.replace(output_file, input_file)
print("Finished fixing index.html")
