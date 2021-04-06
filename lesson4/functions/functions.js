// 1) створити функцію яка приймає масив та виводить його


/*let arrMassive = [3,45,'456',true,'hello',66,'false'];
function newFunction (arr){
    console.log(arr)
}
newFunction(arrMassive);


function newFunction1 (){
    console.log(arguments)
}
newFunction1(1,2,3,'true',false,'23');

function newFunction2(arr) {
    console.log(arr)
}

newFunction2([66, 2, 3, 'true', false, '23']);*/


// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

/*let arrMassive = [3,45,'456',true,'hello',66,'false'];
function newFunction (arr){
    console.log(arr)
}
newFunction();

function mathRandom (){
    for (let i = 0; i < 20; i++) {
        arrMassive.push(Math.round(Math.random()*30));
    }
    return arrMassive
}
let newMath = mathRandom();
newFunction(newMath);*/


// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

/*
function minNumber(a, b, c) {
    let minimum

    if (a <= b && a <= c) {
        minimum = a
    }


    if (b <= c && b <= a) {
        minimum = b
    }

    if (c <= a && c <= b) {
        minimum = c
    }
   console.log(minimum);


}

minNumber(21, 20, 20)
*/


// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

/*function minNumber(a, b, c) {
    let maximum;
    if (a >= b && a >= c) {
        maximum = a
    }
    if (b >= c && b >= a) {
        maximum = b
    }
    if (c >= a && c >= b) {
        maximum = c
    }
console.log(maximum);
}

minNumber(25, 25, 20)*/


// 5) створити функцію яка повертає найбільше число з масиву

/*
function maxValue(numbers) {
    let max = numbers[0]
    for (let newNumber of numbers) {
        if (max < newNumber) {
            max = newNumber
        }
    }
    return max
}

let returnedValue = maxValue([1, 2, 3, 4, 5,603, 6, 7, 8, 123, 22, 33, 55])
console.log(returnedValue);
*/

// 6) створити функцію яка повертає найменьше число з масиву
/*

function minValue(numbers) {
    let min = numbers[0]
    for (let newNumber of numbers) {
        if (min > newNumber) {
            min = newNumber
        }
    }
    return min
}

let returnedValueMin = minValue([5, 5,603, 6, 7, 8, 123, 22, 33, 4])
console.log(returnedValueMin);
*/

/*
7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.*/

// function sumFunction(numbers) {
//     let sum = 0
//     for (let number of numbers) {
// sum+=number;
//     }
// return sum
// }
// let sumOfNumbers = sumFunction([2,6,4,7,10,15,10,16,12]);
// console.log(sumOfNumbers)


/*
8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.*/
/*function averageNew(numbers){
    let average = 0;
    for (let allAverage of numbers){
        average+=allAverage
    }
    let result = average/numbers.length;
return result
}
let returnAverage = averageNew([4,2,123,551,6,12,3,55,2]);
console.log(returnAverage);*/

/*
function averageNew(){
    let average = 0;
    for (let allAverage of arguments){
        average+=allAverage
    }
    let result = average/arguments.length;
    return result
}
let returnAverage = averageNew(4,2,123,55,6,36,3,55,2,66);
console.log(returnAverage);*/


/*
9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів*/


/*
let mass = (mass1,mass2,mass3)=>{
    for (const mass1ElementElement of mass1)
        for (const mass1Element in mass1ElementElement) {
             let result=mass1Element.split(' ')
            console.log(result)
        }


     for (const mass2ElementElement of mass2)
        for (const mass2Element in mass2ElementElement) {
            let result2=mass2Element.split(' ')
            console.log(result2)
        }

    for (const mass3ElementElement of mass3)
        for (const mass3Element in mass3ElementElement) {
            let result3=mass3Element.split(' ')
            console.log(result3)
        }



}
mass([{name: 'oleg', age: 30, city:'Lviv',country:'Ukraine'}], [{surname: 'dudych', age: 28, city:'Stockholm',car:'skoda'}],[{name: 'yura', hb: 1990, city:'Wroclaw',country:'Poland'}])

*/

/*
let newArr = [];
let mass = (mass1)=>{
    for (const mass1ElementElement of mass1)
        for (const mass1Element in mass1ElementElement) {
          newArr.push(mass1Element);
        }
    // console.log(newArr);
        return newArr
}
let newMass = mass([{name: 'oleg', age: 30, city:'Lviv',country:'Ukraine', car:'Skoda', school:70}])
console.log(newMass)
*/


/*Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів*/

/*
let newArr=[]
let mass = (mass1,mass2)=> {
    for (let mass1ElementElement of mass1) {
    for (let mass2ElementElement of mass2) {
        newArr.push(mass1ElementElement.name);
        newArr.push(mass1ElementElement.age);
        newArr.push(mass1ElementElement.city);
        newArr.push(mass2ElementElement.country);
        newArr.push(mass2ElementElement.car);

    }
return newArr
    }
}

let newArrReturn = mass([{name: 'oleg', age: 30, city:'Lviv'}], [{country:'Ukraine', car:'Skoda'}]);
console.log(newArrReturn);
*/


// створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.


/*function twoMassives (first,second){
let newMass = [];
newMass.push(first[0]+second[0]);
newMass.push(first[1]+second[1]);
newMass.push(first[2]+second[2]);
newMass.push(first[3]+second[3]);
return newMass
}
let returnNewMass = twoMassives([1,2,3,4],[2,3,4,5]);
console.log(returnNewMass);*/


/*

function twoMassives (first,second){
let newMass = [];
    for (let i = 0; i < first.length; i++)
        newMass.push(first[i]+second[i])
return newMass
}
let returnNewMass = twoMassives([1,2,3,4],[2,3,4,5]);
console.log(returnNewMass);

*/

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//

/*
function array (arr){
    let nul = [];
    let numbers = []
    for (const number of arr) {
        number===0 ? nul.push(0) : numbers.push(number);
    }
    return numbers.concat(nul);
}
let newArray = array([1,0,6,0,3]);
console.log(newArray);
*/


/*function array (arr){
    let nul = [];
    let numbers = []
    for (const number of arr) {
        number===0 ? nul.push(0) : numbers.push(number);
    }
    return `${numbers},${nul}`
}
let newArray = array([1,0,6,0,3,5,0,0,2]);
console.log(newArray);*/


// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// let newN1 =  n1.replace(/ +/g, ' ').trim();

/*
function spaceDel (defaultString){
    console.log(defaultString.replace(/ +/g,' ').trim());

}
spaceDel('    Harry       Potter      ');
*/



/*
Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
  EXAMPLE:
  foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
*/
// function arrMass(numbers=[]) {
//
// [numbers[0],numbers[1]] = [numbers[1],numbers[0]]
//
//     console.log(numbers)
// }
// arrMass([5,3,2,1]);

// function indexChange (array=[],i){
//     let arr = [...array];
//     if (i<arr.length){
//         let newArr = arr[i];
//         arr[i]=arr[i+1];
//         arr[i+1]=newArr;
//     }
//     return arr;
// }
// const newIndex = indexChange([9,8,0,4],0);
// console.log(newIndex);

// Додає в боді блок з текстом "Hello owu"
/*function divElement(){
let div = document.createElement('div');
div.innerHTML = 'Hello owu';
div.style.backgroundColor = '#e3d9d9';
document.body.appendChild(div);
}
divElement()*/


// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

/*
function body (element,tex){
let unknownElement = document.createElement(`${element}`)
    unknownElement.innerHTML = `${tex}`;
document.body.appendChild(unknownElement)

}
body(`div`,'hello world ');*/



/*
- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
    Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці*/
/*
let user = [
    {id: 1, name: 'vasya', age: 31, status: false,country: 'Ukraine',city: 'Ternopil',car: 'Skoda'},
    {id: 2, name: 'petya', age: 30, status: true,country: 'Poland', city: 'Krakow',car: 'Mercedes'},
    {id: 3, name: 'kolya', age: 29, status: true,country: 'USA', city: 'Portland',car: 'Volvo'},
    {id: 4, name: 'olya', age: 28, status: false,country: 'USA', city: 'Miami',car: 'BMW'}
];

function element(car,id){
for (let i = 0; i < user.length; i++) {
    const userElement = user[i];
    id =  (userElement.id);
    car = (userElement.car);
    let ul = document.createElement('ul')
    document.body.appendChild(ul)
    let li = document.createElement('li')
    li.innerHTML = `${id} - ${car}`
    ul.appendChild(li)


}
}
element();*/
