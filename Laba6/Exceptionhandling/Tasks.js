console.log("------------Task1------------")
//В try catch конструкцию завернуть код: console.log(a), let a = 3.
// И вывести ошибку – ‘let перед использованием нужно объявить’.
// При выполнении 1/0  выводить ошибку 'на ноль делить нельзя'

try {
    console.log(a)
    let a = 3;
}
catch (err){
    console.log('let перед использованием нужно объявить')
}
try {
    if(1/0){
        throw new SyntaxError('На ноль делить нельзя')
    }
}
catch (err){
    console.log(err.message);
}



