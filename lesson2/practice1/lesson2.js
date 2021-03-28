// --створити масив та вивести його в консоль:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
/*let numbers = [1,2,34,66,76];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);

let string = ['oleg', 'dudych', '30', 'lviv', 'ukraine'];
console.log(string[0]);
console.log(string[1]);
console.log(string[2]);
console.log(string[3]);
console.log(string[4]);

let different = [false, 48, 'bot', true, '55'];
console.log(different[0]);
console.log(different[1]);
console.log(different[2]);
console.log(different[3]);
console.log(different[4]);*/

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
/*let newMass = [];
newMass[0] = 'hello';
newMass[1] = 'Oleg';
newMass[2] = 3333;
newMass[3] = true;
console.log(newMass);*/


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
/*let arr = ['hello', 123, true, '123', 'world', 444, false, 'oleg', 'boy', 'wadfasf'];

for (let i = 0; i< arr.length; i++){
    document.write(`<div>${arr[i]}</div>`);
}

OR ----------------------------------------->>>

for (i = 0; i < 10; i++) {
    document.write('<div>hello</div>');

}*/

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

/*
let arr = ['hello', 123, true, '123', 'world', 444, false, 'oleg', 'boy', 'wadfasf'];

for (let i = 0; i< arr.length; i++){
    document.write(`<div>${arr[i]}</div>`, i);
}

OR ----------------------------------------->>>

for (i = 0; i < 10; i++) {
    document.write('<div>hello</div>', i);}*/

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

/*
let i=0;
while (i<20){
    document.write(`<h1>Hello world</h1>`);
    i++;
}

*/

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
/*

let i=0;
while (i<20){
    document.write(`<h1>Hello world</h1>`, i);
    i++;
}
*/

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
/*
let array = [2,33,5,7,88,9,634,63,78,12];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);

}*/
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

/*    let newArray = ['Hello','123','boy','false','true','hello world','oleg','name','second','stop'];
for (let i = 0; i < newArray.length; i++) {
    console.log(newArray[i]);

}*/


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

/*
let lenghArray = ['hello','false',true,'newarr',141,false,13,'123', 'Oleg','true'];
for (let newArray of lenghArray){
    console.log(newArray);
}
*/


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи


/*
let lenghArray = ['hello', 'false', true, 'newarr', 141, false, 13, '123', 'Oleg', 'true'];
for (let newArray of lenghArray) {
    if (typeof newArray === 'boolean'){
    console.log(newArray);
    }
}

*/


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

/*let lenghArray = ['hello', 'false', true, 'newarr', 141, false, 13, '123', 'Oleg', 'true'];
for (let newArray of lenghArray) {
    if (typeof newArray === 'number'){
    console.log(newArray);
    }
}*/


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

/*let lenghArray = ['hello', 'false', true, 'newarr', 141, false, 13, '123', 'Oleg', 'true'];
for (let newArray of lenghArray) {
    if (typeof newArray === 'string'){
    console.log(newArray);
    }
}*/

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

/*let array = [];
array[1] = 2;
array[2] = false;
array[3] = 'true';
array[4] = 'hello';
array[5] = 325;
array[6] = 'false';
array[7] = 'okten';
array[8] = 22;
array[9] = true;
array[10] = 50;
for (let newArray of array){
    console.log(newArray)
}*/

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

/*for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(i);
}*/
//
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

/*for (let i=0;i<100;i++){
    console.log(i);
    document.write(i);
}*/

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
/*for (let i = 0; i < 200; i = i + 2) {
    console.log(i);
    document.write(i);
}*/

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

/*
for (let i = 2; i < 100; i += 2) {
    console.log(i);
    document.write(i);
    document.write('<br>');
}
*/

/*- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write*/

/*for (let i=1; i<100;i+=2){
    console.log(i);
    document.write(i);
    document.write('<br>');
}*/
//
// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

/*for (let min = 0; min<2;min++){
    for (let sec = 0; sec<60;sec++)
console.log(`00.${min}.${sec}`);*/

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
/*

let clock = '0:0:0';
for (let h = 0;h<=2;h++) {
    for (let min = 0; min < 60; min++) {
        if (min<10){
        }
        for (let sec = 0; sec < 60; sec++) {
            if (clock === '2:20:0') {
                break;
            }
            clock = `${h}:${min}:${sec}`
            console.log(clock);
        }
    }
}
*/




// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
/*let abc = ['a','b','c'];
let newAbc ="";
for (let i=0;i<abc.length;i++){
   newAbc += abc[i];

}
console.log(newAbc);*/

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let abc = ['a','b','c'];
// let newAbc ="";
// i = 0
// while (i<abc.length){
//     newAbc += abc[i];
//     i++
// }
// console.log(newAbc);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
/*
let abc = ['a','b','c'];
let newAbc ="";
for (let cab of abc){
    newAbc+=cab;
}
console.log(newAbc);
*/


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let abc = ['a','b','c'];
let newAbc ="";
for (let string in abc){
    newAbc+=abc[string];
}
console.log(newAbc);