//inheritance
// class Mammal {
//     move() {
//         console.log('the creature is moving');
//     }
//     speak() {
//         console.log('the creature is speaking');
//     }
// }

// class Cat extends Mammal {
//     constructor() {
//         super();
//     }
// }
// class Mouse extends Mammal {
//     constructor() {
//         super();
//     }
// }
// class Dog extends Mammal {
//     constructor() {
//         super();
//     }
// }


//polymorphism
interface Animal {
    move: () => void;
}

class Fish implements Animal {
    move() {
        console.log('swimming');
    }
}
class Lion implements Animal {
    move() {
        console.log('walking');
    }
}
class Bird implements Animal {
    move() {
        console.log('flying');
    }
}

const fish = new Fish();
const lion = new Lion();
const bird = new Bird();

fish.move();
lion.move();
bird.move();