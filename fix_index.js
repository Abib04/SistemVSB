
const fs = require('fs');
const readline = require('readline');

async function fixIndex() {
    const fileStream = fs.createReadStream('index.html');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    const output = fs.createWriteStream('index_fixed.html');
    let skip = false;

    for await (let line of rl) {
        if (line.includes('<link rel="icon" type="image/png"')) {
            output.write('    <link rel="icon" type="image/png" href="img/logo-saja.png">\n');
            skip = true;
            continue;
        }

        if (skip) {
            if (line.includes('>')) {
                skip = false;
            }
            continue;
        }

        if (line.includes('<link rel="manifest" href="manifest.json">')) {
            line = line.replace('manifest.json', 'manifest.json?v=1.1');
        }

        output.write(line + '\n');
    }

    fileStream.close();
    output.end();
}

fixIndex().then(() => {
    fs.renameSync('index_fixed.html', 'index.html');
    console.log('Fixed index.html');
});
