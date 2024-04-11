class Car {
    public _brand: string = ''
    public _model: string = ''
    public _horsepower: number = 0

    constructor(line: string) {
        const [brand, model, horsepower] = line.split(' ');
        this._brand = brand;
        this._model = model;
        this._horsepower = Number(horsepower);
    }

    get brand(): string {
        return this._brand
    }
    set brand(brand: string) {
        this._brand = brand;
    }
    get model(): string {
        return this._model
    }
    set model(model: string) {
        this._model = model;
    }
    get horsepower(): number {
        return this._horsepower
    }
    set horsepower(hp: number) {
        this._horsepower = hp;
    }
    print(): void {
        console.log(`The car is: ${this._brand} ${this._model} - ${this._horsepower} HP.`)
    }
}
const car1 = new Car('Chevrolet Impala 390');
car1.print();
console.log(car1.brand)
console.log(car1.model)
console.log(car1.horsepower)