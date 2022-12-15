console.log("------------Task1------------")
//Дана строка 'ahb acb aeb aeeb adcb axeb'.
// Напишите регулярное выражение, которое найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'
let string = 'ahb acb aeb aeeb adcb axeb';
let RegExp = string.match(/a[hce]b/g);
console.log(RegExp)

console.log("------------Task2------------")
//Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные
let number = '2+3 223 2223';
let RegNumber = number.match(/2.3/s)
console.log(RegNumber);

console.log("------------Task3------------")
//Получить день, месяц и год текущей даты и по отдельности вывести в консоль
let Now = new Date();
console.log(Now);


let getDate = new Date().getDate();
console.log(getDate);
let getMonth = new Date().getMonth() + 1;
console.log(getMonth);
let getFullYear = new Date().getFullYear();
console.log(getFullYear);
