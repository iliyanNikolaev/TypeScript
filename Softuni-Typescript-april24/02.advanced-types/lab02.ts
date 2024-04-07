//input
const inpFN = "Peter";
const inpLN = "Pan";
const inpA = "20";

//input2
const inpFN2 = "George";
const inpLN2 = "Smith";
const inpA2 = "18";

type Person = {
    firstName: string,
    lastName: string,
    age: number
}

function constrPerson(firstName: string, lastName: string, age: string): Person {
    if(Number.isNaN(Number(age))) {
        throw new Error('invalid input');
    }
    return {
        firstName,
        lastName,
        age: Number(age)
    }
}

console.log(constrPerson(inpFN, inpLN, inpA));
console.log(constrPerson(inpFN2, inpLN2, inpA2));