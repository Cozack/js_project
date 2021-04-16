
// - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".

// let forms = document.forms.myform;
// console.log(forms);
// forms.hider.onclick = function (){
//     document.getElementById('text').hidden = true
// }


//     - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
//
// forms.hideMe.onclick = function (){
//     forms.hideMe.hidden = true;
// }

// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
// forms.accept.onclick = function (){
//     if (forms.sometext.value >=18){
//         alert('Welcome'); }
//         else
//         alert('Access denied')
//
// }


// - Створіть меню, яке розгортається/згортається при клику
// let button1 = document.getElementById('button1');
// let menu = document.getElementById('menu');
// let newItem = true;
//
//
// button1.onclick = function (){
//     if (menu.style.display = newItem){
//         menu.style.display =  'none'
//     } else
//         menu.style.display =  'block'
//     newItem =!newItem
//
// }


// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// const comments = [{
//     "postId": 9,
//     "id": 45,
//     "name": "autem illo facilis",
//     "email": "Marcia@name.biz",
//     "title": "lorem",
//     "body": "ipsum odio harum voluptatem sunt cumque et doloresnihil laboriosam neque commodi qui estquos numquam voluptatumcorporis quo in vitae similique cumque tempore"
// },
//     {
//         "postId": 10,
//         "id": 46,
//         "name": "dignissimos et deleniti voluptate et quod",
//         "email": "Jeremy.Harann@waino.me",
//         "title": "lorem2",
//         "body": "exercitationem et id quae cum omnisvoluptatibus accusantium et quidemut ipsam sintdoloremque illo ex atque necessitatibus sed"
//     },
//     {
//         "postId": 10,
//         "id": 47,
//         "name": "rerum commodi est non dolor nesciunt ut",
//         "email": "Pearlie.Kling@sandy.com",
//         "title": "lorem3",
//         "body": "occaecati laudantium ratione non cumqueearum quod non enim soluta nisi velit similique voluptatibusesse laudantium consequatur voluptatem rem eaque voluptatem aut utet sit quam"
//     },
//     {
//         "postId": 10,
//         "id": 48,
//         "name": "consequatur animi dolorem saepe repellendus ut quo aut tenetur",
//         "email": "Manuela_Stehr@chelsie.tv",
//         "title": "lorem4",
//         "body": "illum et alias quidem magni voluptatumab soluta ea qui saepe corrupti hic etcum repellat esseest sint vel veritatis officia consequuntur cum"
//     },
//     {
//         "postId": 10,
//         "id": 49,
//         "name": "rerum placeat quae minus iusto eligendi",
//         "email": "Camryn.Weimann@doris.io",
//         "title": "lorem5",
//         "body": "id est iure occaecati quam similique enimab repudiandae nonillum expedita quam excepturi soluta qui placeatperspiciatis optio maiores non doloremque aut iusto sapiente"
//     },
//     {
//         "postId": 10,
//         "id": 50,
//         "name": "dolorum soluta quidem ex quae occaecati dicta aut doloribus",
//         "email": "Kiana_Predovic@yasmin.io",
//         "title": "lorem6",
//         "body": "eum accusamus aut delectusarchitecto blanditiis quia suntrerum harum sit quos quia aspernatur vel corrupti inventoreanimi dicta vel corporis"
//     },]
//
//
//
// // Вивести список коментарів в документ, кожний в своєму блоці.
//
// let newMenu = true
// comments.forEach((value) =>{
//
//     let p = document.createElement('p');
//     let header = document.createElement('h1');
//     header.innerText = value.title;
//     p.innerText = value.body;
//     let div = document.createElement('div')
//     div.style.backgroundColor = 'lightgreen';
//     div.style.height = 'auto';
//     div.style.border = '1px solid red';
//     document.body.appendChild(div)
//     div.appendChild(header);
//     div.appendChild(p);
// //     Додайте кожному коментарю по кнопці для згортання його body.
//     let buttonComment = document.createElement('button');
//     buttonComment.innerText = 'Comment menu';
//     buttonComment.style.margin = '10px'
//     header.appendChild(buttonComment);
//     buttonComment.onclick = function (){
//
//         p.style.display = newMenu ? 'none': 'block';
//         newMenu=!newMenu;
//     }
//
// } )


// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let newBut = document.getElementById('but');
// newBut.onclick = ev => {
//     let myForms = document.forms
//     for (const myFormElement of myForms) {
//         for (const myFormElementSecond of myFormElement) {
//             console.log(myFormElementSecond.value)
//         }
//
//     }
// }

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// let divId = document.getElementById('divka')
// let tableFunction = function (rows,columns,target) {
//    let targetName = document.getElementById(target)
//     let tableName = document.createElement('table')
//     // document.body.appendChild(tableName)
//     for (let i = 0; i < rows; i++) {
//        let tr =  document.createElement('tr')
//         for (let j = 0; j < columns; j++) {
//             let td = document.createElement('td')
//             td.innerText = `${i} - ${i}`
//             tr.appendChild(td)
//         }
//         tableName.appendChild(tr)
//
//     }
// targetName.appendChild(tableName);
// }
// tableFunction(5,6,'divka')
// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.

// const imagesArray = [
//     {
//
//         url: "dogs/dog1.jpg"
//     },
//     {
//
//         url: "dogs/dog2.jpg"
//     },
//     {
//         url: "dogs/dog3.jpg"
//     },
//
// ]
// const divNew = document.getElementById('div1');
// const butNext = document.getElementById('next');
// const butBack = document.getElementById('back');
// let imgCont = document.getElementById('imagesId')
// imgCont.style.width = '200px'
// let index = 0;
// butBack.onclick =()=>{
//     index-1 < 0? index=imagesArray.length-1: index=index-1
//     imgCont.src = imagesArray[index].url
// }
// butNext.onclick =()=>{
//     index+1>imagesArray.length-1? index=0 : index=index+1
//     imgCont.src = imagesArray[index].url
// }

// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// const badWords = ['qqq','www','zzz','mmm','fff','lol','wtf','qqq']
// const input = document.getElementById('input1')
// const checkButton = document.getElementById('newButton')
//
// checkButton.onclick =() => {
//     let newArr = []
//     for (let badWords1 of badWords)
//         if (input.value===(badWords1)) {
//            return alert('This is bad word')
//         }
//
//     console.log(input.value)
//
//
// }

// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// const badWords = ['qqq','www','zzz','mmm','fff','lol','wtf','qqq']
// const input = document.getElementById('input1')
// const checkButton = document.getElementById('newButton')
//
// checkButton.onclick =() => {
//
//     for (let badWords1 of badWords)
//         if (input.value.includes(badWords1)) {
//            return alert('This text contain bad words')
//         }
//
//     console.log(input.value)
//
//
// }


// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті

// const h2 = document.getElementsByTagName('h2')
// const divContent = document.getElementById('content');
// const wrap = document.getElementById('wrap');
// const ol = document.createElement('ol')
// for (let i = 0; i < h2.length; i++) {
//
//
//     const a = document.createElement('a')
//     const li = document.createElement('li')
//     let core = 'core'+i
//     a.href = '#' + core;
//     h2[i].setAttribute('id', core)
//     a.innerHTML = h2[i].innerText
//     li.appendChild(a);
//     ol.appendChild(li);
//
// }
// divContent.appendChild(ol)
// divContent.style.width = '25%';
// wrap.style.width = '75%';
// wrap.style.float = 'left';
// divContent.style.float = 'right';

//
// -- Взяти масив юзерів
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];

let button = document.getElementById('btn');

const divContent = document.getElementById('divka')

const box1 = document.getElementById('check1');
const box2 = document.getElementById('check2');
const box3 = document.getElementById('check3');

// box1.oninput = ev => {
//     let users = usersWithAddress.filter((value) => !value.isMarried)
// divContent.innerText = JSON.stringify(users);
//
// }
//
// box2.oninput = ev => {
//     let usersAge = usersWithAddress.filter((value) => value.age >= 29)
//     divContent.innerText = JSON.stringify(usersAge);
// }
// box3.oninput = ev => {
//     let usersCity = usersWithAddress.filter((value) => value.address.city === 'Kyiv')
//     divContent.innerText = JSON.stringify(usersCity);
//
//     }

// --------------->>>>>>>>>>>>>>>>>>>>>>>> OOOOOOOOOOOORRRRRRRRRRRRRRRRRR

button.onclick = ev => {
    let newUsersArray = JSON.parse(JSON.stringify(usersWithAddress))

    if (box1.checked) newUsersArray = newUsersArray.filter((value) => !value.isMarried)
    divContent.innerText = JSON.stringify(newUsersArray);

    if (box2.checked) newUsersArray = newUsersArray.filter((value) => value.age >= 29)
    divContent.innerText = JSON.stringify(newUsersArray);

    if (box3.checked) newUsersArray = newUsersArray.filter((value) => value.address.city === 'Kyiv')
    divContent.innerText = JSON.stringify(newUsersArray);

}