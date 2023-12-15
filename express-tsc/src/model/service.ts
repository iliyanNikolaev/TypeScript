import { ICar, ICarInput } from "interfaces";

//volatile db
let cars: ICar[] = [
    {
        id: 1,
        brand: 'Opel',
        model: 'Corsa B',
        year: 1996
    },
    {
        id: 2,
        brand: 'VW',
        model: 'Golf 5',
        year: 2004
    },
    {
        id: 3,
        brand: 'Datsun',
        model: '240Z',
        year: 1969
    },
]

let idCounter = 3;

export function getAllCars(): Promise<ICar[]> {
    return new Promise(res => {
        setTimeout(() => res(cars), 500);
    })
}

export function createCar(car: ICar): Promise<ICar> {
    idCounter++;
    const created = {
        ...car,
        id: idCounter
    }
    cars.push(created);

    return new Promise(res => {
        setTimeout(() => res(created), 500);
    })
}

export function editCar(id: number, newData: ICarInput): Promise<ICar> {
    cars = cars.map(x => {
        if (x.id == id) {
            return { id, ...newData }
        }
        return { ...x }
    });

    return new Promise(res => { 
        setTimeout(() => {
            res({ id, ...newData});
        }, 500);
    });
}

export function deleteCar(id: number): Promise<string> {
    cars = cars.filter(x => x.id != id);
    return new Promise(res => {
        setTimeout(() => { res('ok') }, 500);
    });
}