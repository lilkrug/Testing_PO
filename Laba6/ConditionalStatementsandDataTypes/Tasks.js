let string = "5";
let number = 3;
let boolean = true;

console.log("-------------Task1--------------")
//Выполнить сложение различных типов(string+boolean, string+number, number+boolean)
console.log(string + boolean);
console.log(string + number);
console.log(number + boolean);

console.log("-------------Task2--------------")
//Выполнить умножение различных типов(string * boolean, string * number, number * boolean)
console.log(string * boolean);
console.log(string * number);
console.log(number * boolean);

console.log("-------------Task3--------------")
//Выполнить деление различных типов(string/boolean, string/number, number/Boolean)
console.log(string / boolean);
console.log(string / number);
console.log(number / boolean);

console.log("-------------Task4--------------")
//Выполнить явное преобразование(number, string, boolean)
console.log(String(string) + Boolean(boolean));
console.log(String(string) + Number(number));
console.log(Number(number) + Boolean(boolean));