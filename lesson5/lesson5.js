/*
-  Створити функцію конструктор для об'єкту який описує теги
Властивості
-назва тегу
- опис його дій
- масив з атрибутами (2-3 атрибути максимум)
Кожен атрибут описати як окремий який буде містити
-назву атрибуту
-опис дії атрибуту
інформацію брати з htmlbook.ru*/

/*function Attributes(name, description, attribut) {
    this.name = name;
    this.description = description;
    this.attribut = attribut;

}

const a = new Attributes('<a>',
    `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.
    В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.
    Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки.
    При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.`,
    [{name: 'accesskey', description: 'Активация ссылки с помощью комбинации клавиш.'},
        {name: 'coords', description: 'Устанавливает координаты активной области.'}]);
const option = new Attributes('<option>',
    `Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. 
Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. 
Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. 
Это также необходимо, когда к данным списка идет обращение через скрипты.`,
    [{name: 'disabled', description: 'Заблокировать для доступа элемент списка.'},
        {name: 'selected', description: 'Заранее устанавливает определенный пункт списка выделенным.'}]);
const input = new Attributes('<input>',
    `Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. 
Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. 
Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. 
То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.`,
    [{name: 'autocomplete', description: 'Включает или отключает автозаполнение.'},
        {name: 'autofocus', description: 'Устанавливает фокус в поле формы.'}]);
console.log(a);
console.log(input);
console.log(option);*/


/*
-  Створити класс  для об'єкту який описує теги
Властивості
-назва тегу
- опис його дій
- масив з атрибутами (2-3 атрибути максимум)
Кожен атрибут описати як окремий який буде містити
-назву атрибуту
-опис дії атрибуту
інформацію брати з htmlbook.ru*/


/*
class Attributes {
    constructor(name, description, attributes){
            this.name = name;
            this.description = description;
            this.attributes = attributes;
        }
    }


const span = new Attributes('<span>',
    `Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>,
 <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.
  Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и 
  определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, 
  а для тега добавить атрибут class или id с именем селектора.`,
    [{name: 'hidden', description: 'Скрывает содержимое элемента от просмотра.'},
        {name: 'spellcheck', description: 'Указывает браузеру проверять или нет правописание и грамматику в тексте.'}]);
const div = new Attributes('<div>',
    `Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. 
Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу 
стилей, а для тега добавить атрибут class или id с именем селектора.`,
    [{name: 'align', description: 'Задает выравнивание содержимого тега <div>.'},
        {name: 'title', description: 'Добавляет всплывающую подсказку к содержимому.'}]);
const form = new Attributes('<form>',
    `Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. 
Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу
 формы, изменять его и применять по своему усмотрению.`,
    [{name: 'enctype', description: 'Способ кодирования данных формы.'},
        {name: 'method', description: 'Метод протокола HTTP.'}]);
console.log(span);
console.log(div);
console.log(form);*/

/*

-- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
-- info () - яка виводить всю інформацію про автомобіль
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car*/


/*let car = {
    model:'Octavia',
    manufacture:'Skoda',
    year:2014,
    maxSpeed:260,
    engine:1.6,


    drive: function (){
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
},
  info: function (){
    console.log( {model:this.model,
          manufacture:this.manufacture,
          year:this.year})
},
    increaseMaxSpeed:function (newSpeed){
        this.maxSpeed+=newSpeed

        console.log(this.maxSpeed)
    },
    changeYear:function (newValue){
        this.year=newValue

    },
    addDriver:function (driver){
        car.driver=driver


    }
}
console.log(car)
car.increaseMaxSpeed(10)
console.log(car)
car.changeYear(2020)
console.log(car)
car.addDriver([{name:'Arra',age:40},{name:'Ramshut',age:30}])
console.log(car)*/

/*- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
-- info () - яка виводить всю інформацію про автомобіль
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car*/


/*function Car(model, manufacture, year, maxSpeed, engine) {
    this.model = model
    this.manufacture = manufacture
    this.year = year
    this.maxSpeed = maxSpeed
    this.engine = engine
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function () {
        console.log({
            model: this.model,
            manufacture: this.manufacture,
            year: this.year
        })
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed

        console.log(this.maxSpeed)
    }
    this.changeYear = function (newValue){
        this.year=newValue
}


    this.addDriver = function (driver) {
        car.driver = driver
    }
}

    const octaviaCar = new Car('Octavia', 'Skoda', 2014, 260, 1.6)

console.log(octaviaCar)
octaviaCar.increaseMaxSpeed(15);
console.log(octaviaCar)
octaviaCar.changeYear(2021)
octaviaCar.drive()
console.log(octaviaCar)*/



// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


/*class Car {
constructor(model, manufacture, year, maxSpeed, engine) {
    this.model = model
    this.manufacture = manufacture
    this.year = year
    this.maxSpeed = maxSpeed
    this.engine = engine
}
    drive (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info () {
        console.log({
            model: this.model,
            manufacture: this.manufacture,
            year: this.year
        })
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed

        console.log(this.maxSpeed)
    }
    changeYear (newValue){
        this.year=newValue
    }

    addDriverdriver() {
        car.driver = driver
    }
}

    const octaviaCar = new Car('Octavia', 'Skoda', 2014, 260, 1.6)

console.log(octaviaCar)
octaviaCar.increaseMaxSpeed(35);
console.log(octaviaCar)
octaviaCar.drive()
console.log(octaviaCar)
octaviaCar.changeYear(2010)
console.log(octaviaCar)*/


//
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

/*class Princess {
    constructor(name,age,footSize) {
        this.name=name;
        this.age=age;
        this.footSize=footSize;

    }
}

class Prince extends Princess{
    constructor(name,age,footSize) {
        super(name,age,footSize);
    }
}

let allPrincess = [
    new Princess('Persemona', 25, 32),
    new Princess('Annna', 22, 38),
    new Princess('Veronika', 20, 36),
    new Princess('Viktoriya', 22, 38),
    new Princess('Afrodita', 21, 35),
    new Princess('Isabella', 19, 36),
    new Princess('Natali', 32, 38),
    new Princess('Samanta', 29, 39),
    new Princess('Jessica', 30, 34),
     new Princess('Pokahontas', 28, 37),
]
let king = new Prince('Antomio', 28,36)
for (const onePrincess of allPrincess) {
    if (onePrincess.footSize===king.footSize){
        console.log(onePrincess)
    }

}*/

// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить


/*
function Kingdom (name,age,footSize){
    {
        this.name=name;
        this.age=age;
        this.footSize=footSize;
        this.princessFinder = function (){
    for (const onePrincess of allPrincess) {
        if (onePrincess.footSize===king.footSize){
            console.log(onePrincess)
        }
    }
}
    }
}

let allPrincess = [
    new Kingdom('Persemona', 25, 32),
    new Kingdom('Annna', 22, 38),
    new Kingdom('Veronika', 20, 36),
    new Kingdom('Viktoriya', 22, 38),
    new Kingdom('Afrodita', 21, 35),
    new Kingdom('Isabella', 19, 36),
    new Kingdom('Natali', 32, 38),
    new Kingdom('Samanta', 29, 39),
    new Kingdom('Jessica', 30, 34),
    new Kingdom('Pokahontas', 28, 37),
]
const king = new Kingdom ('Antonio', 36,35)
king.princessFinder();*/



// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
// Назва.
//     В кожного компютера має бути метод включання.
// ===



//




class Computer {
    constructor(ram,power,name,powerType,maxIncreasePower) {
        this.ram=ram;
        this.power=power;
        this.name=name;
        this.powerType=powerType;


        // Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// ===
        this.maxIncreasePower = function (max){
            max<=10
            if (max<=10){
                this.maxIncreasePower=((max*this.power/100)+this.power);
            }
        }
        this.maxIncreaseRam = function (max){
         this.maxIncreaseRam=this.ram*2
            console.log(this.maxIncreaseRam)
            }
        }
    test(){
        console.log(`New pc ${this.name} already tested`)
    }
    }


const  pc1 = new Computer(6,800,'MSI', `plug`)
const  pc2 = new Computer(4,900,'Celeron','plug')
const  pc3 = new Computer(2,700,'Pentium','plug')
// console.log(pc1);
// pc1.maxIncreasePower(5);
// console.log(pc2);
// pc2.maxIncreasePower(9);
// pc1.maxIncreaseRam();
// console.log(pc1);

// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
class BasicComputer extends Computer{
    constructor(ram,power,name,powerType) {
        super(ram,power,name,powerType);
        this.newLaunch=`You are playing FORTNITE with ${this.newLaunch=this.power/this.ram} FSP`
    }
}
const basicPc1 = new BasicComputer(3,250,'celeron','plug');
console.log(basicPc1);

// Від базового ПК необхідно зробити ігнорий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно ивдати помилку,
//     що на цьому відрі ігри не запускаються.
class UnknownComp extends BasicComputer{
    constructor(ram,power,name,powerType) {
        super(ram,power,name,powerType);
        this.fps = 2 * (this.power / this.ram);
        // this.error = this.power<500 && this.ram <8 ? console.log(`На цьому відрі ігри не запускаються.`): console.log('NICE PC')
        this.error
        if (this.power<500 && this.ram <8){
            this.error = 'На цьому відрі ігри не запускаються.'
        }else  this.error = 'ITS NOT ERROR, JUST YOU HAVE A NICE PC'
    }
}

const unknownPc1 = new UnknownComp(10,600,'Apple','plug')
const unknownPc2 = new UnknownComp(2,400,'Intel Celeron','plug')
console.log(unknownPc1);
console.log(unknownPc2);



// ===
// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)

class Laptop extends Computer{
    constructor(ram,power,name,powerType,inch) {
        super(ram,power,name,powerType);
        this.inch=inch;
        this.batteryPower = Math.round(this.power/(this.inch*this.ram))
    }

}
let Laptop1 = new Laptop(2,900,'asus','plug',15);
let Laptop2 = new Laptop(4,400,'Dell','plug',17);

// console.log(Laptop1)
// console.log(Laptop2)


// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// ===

class UltraBook extends Laptop{
    constructor(ram,power,name,powerType,inch,weight) {
        super(ram,power,name,powerType,inch);
        this.weight = weight

    }
    turnUltrabookError (){
        if (this.weight>=2000 && this.batteryPower<=4){
            console.log(`Error,after trying turn on the ${this.name}`)
        }
    }

}

let ultrabook1 = new UltraBook(2,100,'Apple','plug',17,2500);
let ultrabook2 = new UltraBook(8,150,'Apple','plug',15,1000);
// console.log(ultrabook1)
// ultrabook1.turnUltrabookError()
// console.log(ultrabook2)
// ultrabook2.turnUltrabookError()
// console.log(pc1);


