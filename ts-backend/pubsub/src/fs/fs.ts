export{}
const fs = require('fs').promises;

init();

async function init() {
    const res = await readData('./data.json');
    let parsedData = JSON.parse(res);

    parsedData = [...parsedData, {message: 'hello im from vs code2'}];

    await writeFile('./data.json', JSON.stringify(parsedData));
}


async function readData(filePath: string): Promise<string> {
    const data = await fs.readFile(filePath);
    return data.toString();
}

async function writeFile(filePath:string, data: string): Promise<void> {
    fs.writeFile(filePath, data);
}