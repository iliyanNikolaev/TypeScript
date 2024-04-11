const inp1 = ['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'];

const inp2 = ['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'];

type Town = {
    town: string,
    population: number
}
function population(arr: string[]): string {
    const container: Town[] = [];
    arr.forEach(line => {
        const [ town, pop ] = line.split(' <-> ');
        if(Number.isNaN(Number(pop))){
            throw new Error('Invalid input!')
        }
        const indx = container.findIndex(x => x.town == town);
        if(indx != -1){
            container[indx] = {
                town: container[indx].town,
                population: Number(pop) + container[indx].population
            }
        } else {
            container.push({
                town,
                population: Number(pop)
            });
        }
    });
    return container.map(x => `${x.town} : ${x.population}`).join('\n');
}

console.log(population(inp1));
console.log('--------------');
console.log(population(inp2));
