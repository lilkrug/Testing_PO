console.log("----------------Task1----------------");
//Дан массив состоящий из названий фильмов, выполните перебор массива с выводом в консоль названия каждого фильма
let ArrayFilms = ["Breaking bad", "Scarface", "Game of Thrones"];
    for (let i = 0; i < ArrayFilms.length; i++){
        console.log(ArrayFilms[i]);
}

console.log("----------------Task2----------------");
//Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив
let ArrayCar = ["Ford", "Audi", "BMW", "Ferrari"];
let ArrayInString = ArrayCar.join();
    console.log(ArrayInString);
let StringInArray = ArrayInString.split(" ", 4)
    console.log(StringInArray);

console.log("----------------Task3----------------");
//Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello
let ArrayName = ["Vasya", "Petya", "Alex", "Toxa"];
ArrayName[0] = "VasyaHello";
ArrayName[1] = "PetyaHello";
ArrayName[2] = "AlexHello";
ArrayName[3] = "ToxaHello";
console.log(ArrayName);

console.log("----------------Task4----------------");
//Преобразовать числовой массив в Boolean
let ArrayNumber = [1, 2, 3, 4, 5];
let ArrayBoolean = Boolean(ArrayNumber);
console.log(ArrayBoolean)

console.log("----------------Task5----------------");
// Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию
let ArrayAsc = [1,6,7,8,3,4,5,6];
let ArraySortAsc = ArrayAsc.sort((a, b) => b - a );
console.log(ArraySortAsc);

console.log("----------------Task6----------------");
//Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3
let SortArrayByValueThree = [1,6,7,8,3,4,5,6];
let NewArray = [];
    for (let i = 0; i < SortArrayByValueThree.length; i++){
        if (SortArrayByValueThree[i] > 3) {
            console.log(NewArray.push(SortArrayByValueThree[i]))
        }
    }
    console.log(NewArray);

console.log("----------------Task7----------------");
//Написать функцию, которая принимает два параметра - массив и число и выводит индекс элемента массива равный числу
let OutputIndex = (Array = [1,2,3,4,5], Number = 4) => console.log(Array.indexOf(4));
OutputIndex();

console.log("----------------Task8----------------");
//Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10
for (let i = 20; i >= 10; i--){
     console.log(i);
 }

console.log("----------------Task9----------------");
//Реализовать цикл, который выводит в консоль простые числа
SimpleNumbers:
for (let i = 2; i <= 20; i++){
    for (let j = 2; j < i; j++){
        if (i % j === 0) continue SimpleNumbers;
    }
    console.log(i);
}

console.log("----------------Task10----------------");
//Реализовать цикл, который выводит в консоль нечетные числа
for (let i = 0; i < 20; i++){
    if (i % 2){
        console.log(i);
    }
}