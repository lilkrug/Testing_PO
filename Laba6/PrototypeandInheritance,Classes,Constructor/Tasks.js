console.log("-----------------Task1-----------------");
//Создать 2 объекта: animal и cat, в объект animal добавить свойство move,
// объект cat должен наследовать свойство move, реализовать и через прототипы и через классы

//Реализация через классы
class Animal{
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} бежит со скоростью ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} стоит неподвижно.`);
    }
}

let animal = new Animal("My pet");

animal.stop();

class Cat extends Animal{
    hide(){
        console.log(`${this.name} прячется!`);
    }
}

let cat = new Cat("Белый Котик");

cat.hide();
cat.stop();
cat.run(5);

console.log("-----------------Task2-----------------");
//Реализация через прототипы

let animals = {
    eats: true,
    walk() {
        console.log("Animal walk");
    }
};

let rabbit = {
    jumps: true,
    __proto__: animals
};

// walk взят из прототипа
rabbit.walk();
