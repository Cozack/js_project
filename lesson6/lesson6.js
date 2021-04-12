// 1) Створити масив з 20 чисел та:
//     a) відсортувати його від меншого до більшого.
//     b) відсортувати його від більшого до меншого.
//     c) Відфілтрувати числа які є кратними 3.
// d) Відфілтрувати числа які є більшими за 10.
// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// f) За допомогою map збільшити кожен елемент в масиві в три рази.
//     g) Порахувати загальну суму всіх елментів у масиві (reduce)

let numbers = [2, 44, 1, 0, 66, 34, 3, 55, 6, 2, 33, 8, 99, 7, 18, 9, 3, 5, 76, 12, 24];

// a) відсортувати його від меншого до більшого.
/*let sortMin = numbers.sort((a, b) => a-b)
console.log(sortMin);*/
// b) відсортувати його від більшого до меншого.
/*let sortMax = numbers.sort((a, b) => b-a)
console.log(sortMax);*/

// c) Відфілтрувати числа які є кратними 3.
/*let filter = numbers.filter((value) =>value % 3===0 )
console.log(filter);*/

// d) Відфілтрувати числа які є більшими за 10.
/*let filterMax = numbers.filter(value => value>10)
console.log(filterMax)*/

// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
/*
let each = numbers.forEach((value, index) =>{
  document.write(`${value} - ${index}`)
  document.write(`<br>`)

})*/

// f) За допомогою map збільшити кожен елемент в масиві в три рази.

/*
let mapping =numbers.map((value, index) => value*3)
console.log(mapping);*/


// g) Порахувати загальну суму всіх елментів у масиві (reduce)

/*
let reduce = numbers.reduce((acc, currentValue) => acc + currentValue)
console.log(reduce);*/


// 2) Створити масив з 20 стрічок та:
//     a) Відсортувати його в алфавітному порядку
// b) Відсортувати в зворотньому порядку
// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'

let string = ['Lucky', 'Hello', 'Okten', 'World', 'Programming', 'Lviv', 'Java', 'Python', 'School', '23', 'True', 'String', 'Numbers', 'Thomas', 'String', '0', 'Wife', 'Oleg', 'Taras', 'Lion']
// a) Відсортувати його в алфавітному порядку
/*let sortString = string.sort();
console.log(sortString);*/

// b) Відсортувати в зворотньому порядку
/*let sortReverse = string.sort((a, b) => {
    if (a<b){
        return 1
    }
    return -1
})
console.log(sortReverse)*/

// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
/*
let stringLenght = string.filter((value) => {
    if (value.length>4)
        return value
})
console.log(stringLenght);*/

// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
/*let addStringWord = string.map(value => `Sam says ${value}`)
console.log(addStringWord)*/

//
// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
//     const users = [
//         {name: 'vasya', age: 31, isMarried: false},
//         {name: 'petya', age: 30, isMarried: true},
//         {name: 'kolya', age: 29, isMarried: true},
//         {name: 'olya', age: 28, isMarried: false},
//         {name: 'max', age: 30, isMarried: true},
//         {name: 'anya', age: 31, isMarried: false},
//         {name: 'oleg', age: 28, isMarried: false},
//         {name: 'andrey', age: 29, isMarried: true},
//         {name: 'masha', age: 30, isMarried: true},
//         {name: 'olya', age: 31, isMarried: false},
//         {name: 'max', age: 31, isMarried: true}
//     ];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)
// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
// d) відсортувати його за індентифікатором
// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)

// a) відсортувати його за  віком (зростання , а потім окремо спадання)
// let sortUsersIncrease = users.sort((a, b) =>a.age - b.age)
// console.log(sortUsersIncrease);
// let sortUsersDecrease = users.sort((a, b) =>b.age -a.age )
// console.log(sortUsersDecrease);

// пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// // та зберегти це в новий масив (первинний масив залишиться без змін)

// let mapAddId = users.map((user,id) => {
//     user.id=id+1
//     return user
// })
//
// console.log(mapAddId);

// let mapAddId = users.map((name, index) =>({...name, id: index + 1}))
//
// console.log(mapAddId);
// console.log(users);

// d) відсортувати його за індентифікатором
// let userSort = users.sort( (a, b) => a.id - b.id)
// console.log(userSort);


// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру
// let isMarriedTrue = users.reduce((acc, user) => {
//     if (user.isMarried===true){
//         user.home=true
//         acc.push(user)
//     }
//     return acc
//
//
// },[])
// console.log(isMarriedTrue)

// const cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];

// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
// let engineVolume = cars.filter((value) => {
//     if (value.volume>=3)
//         return value
// })
// console.log(engineVolume);
// let engineVolume = cars.filter((value) =>value.volume>=3)
// console.log(engineVolume);

// - двигун = 2л
//
// let engineVolume1 = cars.filter((value) =>value.volume===2)
// console.log(engineVolume1);

// - виробник мерс
// let engineVolume1 = cars.filter((value) =>value.producer==='mercedes')
// console.log(engineVolume1);

// - двигун більше 3х літрів + виробник мерседес
// let engineVolume1 = cars.filter((value) =>value.volume >=3 && value.producer==='mercedes')
// console.log(engineVolume1);

// - двигун більше 3х літрів + виробник субару
// let engineVolume1 = cars.filter((value) =>value.volume >=3 && value.producer==='subaru')
// console.log(engineVolume1);

// - сили більше ніж 300
//
// let engineVolume1 = cars.filter((value) =>value.power >=300)
// console.log(engineVolume1);

// - сили більше ніж 300 + виробник субару
// let engineVolume1 = cars.filter((value) =>value.power >=300 && value.producer==='subaru')
// console.log(engineVolume1);

// - мотор серіі ej
// let engineVolume1 = cars.filter((value) =>value.engine.startsWith('ej'))
// console.log(engineVolume1);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let engineVolume1 = cars.filter((value) =>value.power>=300 && value.producer==='subaru'&& value.engine.startsWith('ej'))
// console.log(engineVolume1);

// - двигун меньше 3х літрів + виробник мерседес
// let engineVolume1 = cars.filter((value) =>value.volume<3 && value.producer==='mercedes')
// console.log(engineVolume1);

// - двигун більше 2л + сили більше 250
// let engineVolume1 = cars.filter((value) =>value.volume>=2 && value.power>=250)
// console.log(engineVolume1);

// - сили більше 250  + виробник бмв
// let engineVolume1 = cars.filter((value) =>value.producer==='bmw' && value.power>=250)
// console.log(engineVolume1);

//
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];

// -- Відсортувати їх по ID
// let idSort = usersWithAddress.sort((a, b)=>a.id-b.id)
// console.log(idSort);

// -- Відсортувати їх по ID в зворотньому порядку
// let idSortReverse = usersWithAddress.sort((a, b)=>b.id-a.id)
// console.log(idSortReverse)

// -- Відсортувати по віку
// let sortAge = usersWithAddress.sort((a, b) => a.age-b.age);
// console.log(sortAge);

// -- Відсортувати по віку в зворотньому порядку
// let sortAgeReverse = usersWithAddress.sort((a, b) => b.age-a.age);
// console.log(sortAgeReverse);

// -- Відсорутвати по імені
// let sortName = usersWithAddress.sort((a, b) => {
//     if (b.name<a.name){
//         return 1
//     }
//     return -1
// });
// console.log(sortName);

// -- Відсорутвати по назві вулиці
// let sortName = usersWithAddress.sort((a, b) => {
//     if (b.address.street<a.address.street){
//         return 1
//     }
//     return -1
// });
// console.log(sortName);


// -- Відсорутвати по номеру будинку
// let sortName = usersWithAddress.sort((a, b) => {
//     if (b.address.number<a.address.number){
//         return 1
//     }
//     return -1
// });
// console.log(sortName);

// -- Залигити тільки тих, хто молодший ніж 30 (filter)
// let sortAge = usersWithAddress.filter((value) =>value.age<30 )
// console.log(sortAge);

// -- Залишити тільки одружених
// let onlyMarried = usersWithAddress.filter((value) => value.isMarried===true )
// console.log(onlyMarried);

// -- Залишити тільки одружених, які молодні за 30
// let onlyMarriedYoung = usersWithAddress.filter((value) => value.isMarried===true && value.age<30)
// console.log(onlyMarriedYoung);

// -- Залишити лише тих, в кого парні номери будинків.
// let onlyMarriedYoung = usersWithAddress.filter((value) => value.address.number%2===0)
// console.log(onlyMarriedYoung);
// -- Порахувати загальний вік всіх людей. (reduce)
// let sumAge = usersWithAddress.reduce((acc, currentValue) => {
//     return   acc + currentValue.age
//
// },0 )
// console.log(sumAge);


// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
//
// let newArr = usersWithAddress.reduce((acc, value) =>{
//
//     if (value.isMarried===true && value.age>=30){
//         value.child = true;
//         acc.push(value)
//
//     }
//     return acc
// },[])
// console.log(newArr);


// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

let cars = [{ model:'Skoda', power:115, owner:{name:'John', age:30, expYear:15}, price:10500, year:2014,},
    { model:'Mercedes', power:220, owner:{name:'Bred', age:28, expYear:8}, price:20000, year:2018,},
    { model:'Niva', power:80, owner:{name:'Igor', age:32, expYear:9}, price:3000, year:2006,},
    { model:'Lada', power:79, owner:{name:'Romanius', age:24, expYear:4}, price:2500, year:2008,},
    { model:'BMW', power:150, owner:{name:'Paulo', age:34, expYear:13}, price:7500, year:1998,},
    { model:'Volvo', power:170, owner:{name:'Greg', age:26, expYear:1}, price:18000, year:2017,},
    { model:'Jaguar', power:300, owner:{name:'Max', age:31, expYear:10}, price:20000, year:2013,},
    { model:'Volkswagen', power:150, owner:{name:'Slavik', age:39, expYear:10}, price:15000, year:2016,},
    { model:'Ferrari', power:550, owner:{name:'Valera', age:25, expYear:7}, price:250000, year:2019,},
    { model:'Audi', power:300, owner:{name:'Bodia', age:37, expYear:17}, price:16000, year:2015,}]
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).

// let newPower = cars.map((value) => {
//     if (value.power<150){
//         value.power= value.power * 0.1 + value.power;
//     }
//     return value
// })
// console.log(newPower);
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%

// let powerShell = cars.map((value,index) => {
//     if (index%2===0){
//         value.power= value.power * 0.1 + value.power;
//         value.price=value.price*0.05+value.price
//     }
//     return value
// })
// console.log(powerShell);
//
// let carOwner={name:'John', age:30, expYear:15}

// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.

// let experiance  = cars.map((value) => {
//     if(value.owner.expYear<5 || value.age>25){
//         value.owner.expYear=value.owner.expYear + 1;
//     }
// return value
// })
// console.log(experiance);
//
// //     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// let totalSum = cars.reduce((acc, currentValue) => {
//     let sum = acc +currentValue.price
//     return sum
// },0)
// console.log(totalSum);



// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
   let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
function minMaxIndex(arr,element){
let min = arr.indexOf(element)
    let max = arr.lastIndexOf(element)
    if (min !=arr.indexOf(element) || max !=arr.lastIndexOf(element)){
        console.log(-1)
    }
console.log(`minIndex = ${min},maxIndex = ${max}`)
// console.log(minIndex)
}
minMaxIndex(arr,4)
