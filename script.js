// Basic Class and Inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name); 
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} barks! Woof woof!`);
    }
}
let myDog = new Dog("Buddy", "Golden Retriever");
myDog.makeSound(); 
myDog.bark();      
console.log(myDog.breed); 


// Multiple Inheritance using extends
let CanFly = Base => class extends Base {
    fly() {
        console.log(`${this.name} is flying.`);
    }
};
class Bird {
    constructor(name) {
        this.name = name;
    }

    chirp() {
        console.log(`${this.name} is chirping.`);
    }
}

class Parrot extends CanFly(Bird) {
    talk() {
        console.log(`${this.name} can talk.`);
    }
}
let myParrot = new Parrot("Polly");
myParrot.chirp();
myParrot.fly();   
myParrot.talk(); 



// Using super to Override Methods

class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        console.log(`${this.brand} is starting...`);
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }

    start() {
        super.start(); // Call parent class method
        console.log(`${this.brand} ${this.model} is ready to drive.`);
    }
}
let myCar = new Car("Toyota", "Camry");
myCar.start();

