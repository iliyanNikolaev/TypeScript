const inp = ['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'];

type Product = {
    town: string,
    productName: string,
    price: number
}

function findLowerPrices(arr: string[]): string {
    const container: Product[] = [];
    arr.forEach(x => {
        const [town, product, price] = x.split(' | ');
        if(Number.isNaN(Number(price))){
            throw new Error('Invalid input!');
        }
        const indx = container.findIndex(y => y.productName == product);
        if(indx != -1){
            if(Number(price) < container[indx].price){
                container[indx].town = town;
                container[indx].price = Number(price);
            }
        } else {
            container.push({
                town,
                productName: product,
                price: Number(price)
            });
        }
    });
    return container.map(x => `${x.productName} -> ${x.price} (${x.town})`).join('\n');
}

console.log(findLowerPrices(inp));