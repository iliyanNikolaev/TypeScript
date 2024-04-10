const inp1 = ['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'];
const inp2 = ['Plovdiv | 136.45 | 812.575'];

type Town = {
    town: string,
    latitude: string,
    longitude: string
}

function towns(townsArr: string[]): string {
    const output: Town[] = [];
    townsArr.forEach(line => {
        const [town, latitude, longitude] = line.split(' | ');
        output.push({
            town,
            latitude,
            longitude
        });
    });
    return output.map(t => JSON.stringify(t)).join('\n');
}

console.log(towns(inp1));
console.log(towns(inp2));