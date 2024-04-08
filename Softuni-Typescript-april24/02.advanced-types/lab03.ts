const inp1 = [
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
];
const inp2 = [
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
];

function inventory(heroes: string[]): string {
    let output: string[] = [];
    for (const line of heroes) {
        const [hero, level, items] = line.split(' / ');
        if (Number.isNaN(Number(level)
                || !hero
                || !level
                || !items)) {
            throw new Error('invalid data');
        }
        output.push(`Hero: ${hero}`, `level => ${level}`, `items => ${items}`);
    }
    return output.join('\n');
}

console.log(inventory(inp1));
console.log(inventory(inp2));