//
// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// let arena = document.getElementById('textArea');
// arena.oninput=(ev)=> localStorage.setItem('name',arena.value);
// arena.value = localStorage.getItem('name')


// -------------------------->>>>>>>>>>>>  OOOORRRRRRRRRRRRr

// let arena = document.getElementById('textArea');
// const storage = localStorage.getItem('arena');
// if (storage){
//     arena.value = storage;
// }
// arena.oninput=(ev)=> localStorage.setItem('arena',arena.value);


// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.

// const newBtn = document.getElementById('btn')
// let forma = document.forms.forms
//
// saveData(forma)
// newBtn.onclick = (ev) =>{
//     // ev.preventDefault()
//     for (let i = 0; i < forma.length; i++) {
//         if (forma[i].type ==="checkbox" || forma[i].type ==='radio'){
//             forma[i].checked ? forma[i].value = true:forma[i].value=false;
//         }
//         localStorage.setItem(forma[i].id, forma[i].value);
//
//         }
//
// }
// function saveData() {
//     for (let i = 0; i < localStorage.length; i++) {
//         if (localStorage.hasOwnProperty(forma[i].id)) {
//             forma[i].value = localStorage.getItem(forma[i].id);}
//        if (forma[i].value ==='true'){
//            forma[i].setAttribute('checked','true')
//        }
//         }
//
// }


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// let arena = document.getElementById('textArea');
// const saveButton = document.getElementById('save')
// const leftButton = document.getElementById('left')
// const rightButton = document.getElementById('right')
//
// saveButton.onclick = () => localStorage.setItem(localStorage.length+1,arena.value);
//
//
//     leftButton.onclick = () => {
//         let index
//         for (let keyElement in localStorage) {
//             if (localStorage.hasOwnProperty(keyElement)){
//          if (localStorage.getItem(keyElement)===arena.value){
//              index=keyElement;
//          }
//         }
//     }
//         if (index==='1'){
//             return alert(`'It's a first saved data`);
//         }
//         arena.value=localStorage.getItem(+index - 1)
//
// }
// rightButton.onclick = () => {
//         let index
//         for (let keyElement in localStorage) {
//             if (localStorage.hasOwnProperty(keyElement)){
//          if (localStorage.getItem(keyElement)===arena.value){
//              index=keyElement;
//          }if (index===localStorage.length.toString()){
//                     return alert(`'It's a last saved data`);
//         }
//     }
//
//         }
//         arena.value=localStorage.getItem(+index + 1)
// }


// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
const USERS = "USERS"
let temp = {};
const content = document.getElementById('content');
const forma = document.forms.someForm;
const saveBtn = document.getElementById('saveBtn')

forma.saveBtn.onclick = ev => {
    let person = {...temp}
    temp = {}
    for (let i = 0; i < forma.length; i++) {
        const formaElement = forma[i];
        if (formaElement.name && formaElement.type !== 'button'){
person[formaElement.name]= formaElement.value}
    }
    if (!person.key){
    person.key =  Math.floor(Math.random()*100)
    }
    saveUser(person)
}

getDataFromlC()
function saveUser(user){
    if (localStorage.hasOwnProperty(USERS)) {
        const arrayUsers = JSON.parse(localStorage.getItem(USERS))
        const find = arrayUsers.find(value => value.key === user.key);
        if (find) {

            const filter = arrayUsers.filter(value => value.key !== user.key);
            filter.push(user)
            localStorage.setItem(USERS, JSON.stringify(filter));
        } else {
            arrayUsers.push(user)
            localStorage.setItem(USERS, JSON.stringify(arrayUsers));
        }
    }else{
        localStorage.setItem(USERS,JSON.stringify([user]))
    }
}

function getDataFromlC (){
    if (localStorage.hasOwnProperty(USERS)){
        const arrUser = JSON.parse(localStorage.getItem(USERS))
        for (const user of arrUser) {
            content.appendChild(divka(user))
        }
    }
}

function divka(user){
 const main =    document.createElement('div');
    for (const keys in user) {
            const p = document.createElement('p');
            p.innerText = keys + ' : ' + user[keys];
            main.appendChild((p));

    }
    main.style = 'width : 250px;  padding:20px; float: left; border:1px solid red; '
    const leftButton = document.createElement('button');
    const rightButton = document.createElement('button');
    leftButton.innerText = 'edit';
    rightButton.innerText = 'delete';
   leftButton.onclick = function (){
       changeUser(user.key)
   }
    rightButton.onclick = function (){
        removeUser(user.key)
   }
    main.appendChild(leftButton)
    main.appendChild(rightButton)
    return main
}

function removeUser(key){
   const parse =  JSON.parse(localStorage.getItem(USERS))
   const filter = parse.filter = parse.filter (user =>user.key !== key);
   localStorage.setItem(USERS,JSON.stringify(filter));
   location.reload()
}
function changeUser(key){
   const parseIt =  JSON.parse(localStorage.getItem(USERS))
   const user = parseIt.find(user =>user.key === key);
    for (let i = 0; i < forma.length; i++) {
        const formaElement = forma[i];
        if (formaElement.name && formaElement.type !== 'submit'){
            for (const newKeys in user){
                if (formaElement.name===newKeys){
                    formaElement.value=user[newKeys]
                }
            }
    }
}
}
