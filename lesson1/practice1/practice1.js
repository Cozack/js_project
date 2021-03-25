// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
/*
let greeting = "hello";
let owu = "owu";
let com = "com";
let ua = "ua";
let firstNumber = 1;
let secondNumber = 10;
let minusNumber = -199;
let piNumber = 3.14;
let thirdNumber = 2.7;
let fourthNumber = 16;
let boy = true;
let girl = false;

alert(greeting);
alert(owu);
alert(com);
alert(ua);
alert(firstNumber);
alert(secondNumber);
alert(minusNumber);
alert(piNumber);
alert(thirdNumber);
alert(fourthNumber);
alert(boy);
alert(girl);

document.write(greeting);
document.write(owu);
document.write(com);
document.write(ua);
document.write(firstNumber);
document.write(secondNumber);
document.write(minusNumber);
document.write(piNumber);
document.write(thirdNumber);
document.write(fourthNumber);
document.write(boy);
document.write(girl);

console.log(greeting);
console.log(owu);
console.log(com);
console.log(ua);
console.log(firstNumber);
console.log(secondNumber);
console.log(minusNumber);
console.log(piNumber);
console.log(thirdNumber);
console.log(fourthNumber);
console.log(boy);
console.log(girl);*/


// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

/*let greeting = "hello";
greeting = "Good Day"
alert(greeting);
console.log(greeting);
document.write(greeting);

let owu = "owu";
owu = true
alert(owu);
console.log(owu);
document.write(owu);

let com = "com";
com = "max", 1;
alert(com);
console.log(com);
document.write(com);

let ua = "ua";
ua = false;
alert(ua);
console.log(ua);
document.write(ua);

let firstNumber = 1;
firstNumber = 999;
alert(firstNumber);
console.log(firstNumber);
document.write(firstNumber);

let secondNumber = 10;
secondNumber = "hello world"
alert(secondNumber);
console.log(secondNumber);
document.write(secondNumber);

let minusNumber = -199;
minusNumber = "plusNumber";
alert(minusNumber);
console.log(minusNumber);
document.write(minusNumber);

let piNumber = 3.14;
piNumber = 14.3
alert(piNumber);
console.log(piNumber);
document.write(piNumber);

let thirdNumber = 2.7;
thirdNumber = true;
alert(thirdNumber);
console.log(thirdNumber);
document.write(thirdNumber);

let fourthNumber = 16;
fourthNumber = "my name is oleg";
alert(fourthNumber);
console.log(fourthNumber);
document.write(fourthNumber);

let boy = true;
boy = "girl"
alert(boy);
console.log(boy);
document.write(boy);

let girl = false;
girl = "my wife";
alert(girl);
console.log(girl);
document.write(girl);*/

/*- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
    Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".*/

// const firstName = prompt("What is tour name?");
// const secondName = prompt("What is tour surname?");
// let age = prompt("How old are you");
// alert( "Вітаю" + " " + firstName + " " + secondName + "." + "Тобі" + " " + age + "років");


// - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).
/*
const firstName = prompt("What is tour name?");
const secondName = prompt("What is tour surname?");
let age = prompt("How old are you");
let userAccount = firstName + secondName + age;
console.log(userAccount);
 // OR   // alert( firstName + " " + secondName + " " + age );*/


/*- За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.*/

// let num1 = +prompt(" How old are you?");
// let num2 = +prompt(" in what year were you born?");
// let num3 = +prompt(" how many countries have you visited??");
// console.log(num1);
// console.log(num2);
// console.log(num3);


/*За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.*/


// let num1 = prompt(" How old are you?");
// let num2 = prompt(" in what year were you born?");
// let num3 = prompt(" how many countries have you visited??");
// let num4 = prompt(" how many countries have you visited??");
// let parsenum1 = parseInt(num1);
// let parsenum2 = parseInt(num2);
// let parsenum3 = parseInt(num3);
// let parsenum4 = parseInt(num4);
// console.log(parsenum1 +parsenum2 +parsenum3 +parsenum4 );


/*
- За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.*/
/*Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.*/

// let num1 = prompt("How old are you?");
// let num2 = prompt("What is the PI digit?");
// let num3 = prompt("what is the latitude of this place?");
// let parsenum1 = parseFloat(num1);
// let parsenum2 = parseFloat(num2);
// let parsenum3 = parseFloat(num3);
//  let result = parsenum1 + parsenum2+ parsenum3;
//  console.log(result);

/*
- За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.*/

/*let num1 = prompt("How old are you?");
let num2 = prompt("What is the PI digit?");
let num3 = prompt("what is the latitude of this place?");
let parsenum1 = Math.round(parseFloat(num1));
let parsenum2 = Math.round(parseFloat(num2));
let parsenum3 = Math.round(parseFloat(num3));
let result = parsenum1 + parsenum2 + parsenum3;
 console.log(result);*/


// - За допомогою prompt() отримати 2 цілих числа.
//     Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//     За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//     Example. Число 1 = 5. Число 2 = 2. Результат = 25

/*let num1 = prompt("what is your first favorite digit?");
let num2 = prompt("what is your first favorite digit?");
let floor1 = Math.floor(num1)
let floor2 = Math.floor(num2)
let result =  Math.pow(floor1, floor2);
 console.log(result);*/

/*- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100; let b = '100'; let c = true;*/

/*let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);*/

// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразаї не використовувати однакові оператори!!!

/*5 < 6 -> true
5 > 6 -> false
5 >= 6 -> false
5 === 6 -> false
10 === 10 -> true
10 == 10 -> true
10 < 10 -> false
10 > 10 -> false
10 !== 10 -> false
123 === '123' -> false
123 == '123' -> true*/
