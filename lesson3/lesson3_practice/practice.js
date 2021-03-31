// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"

let newContent = document.getElementById('content');
    console.log(newContent.textContent);




// b) отримує текст з блоку з id "rules"

let divRules = document.getElementById('rules');
console.log(divRules.textContent);


// c) замініть текст параграфа з id 'content' на будь-який інший

newContent.innerText = "Hello World";
console.log(newContent);



// d) замініть текст параграфа з id 'rules' на будь-який інший

divRules.innerText = "Good Bye"

// e) змініть кожному елементу колір фону на червоний

let allElemets = document.getElementsByTagName('*')
for (let i = 5; i < allElemets.length; i++) {
   allElemets[i].style.backgroundColor = "red";
   console.log(allElemets[i]);
}

// f) змініть кожному елементу колір тексту на синій

for (let i = 5; i < allElemets.length; i++) {
    allElemets[i].style.color = 'blue';
    console.log(allElemets[i]);
}

// g) отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(divRules.classList);

// h) отримати всі елементи з класом fc_rules

let fcRules = document.getElementsByClassName('fc_rules');
console.log(fcRules);

// i) поміняти колір тексту у всіх елементів fc_rules на червоний
for (let i = 0; i < fcRules.length; i++) {
    fcRules[i].style.color = "red";
}

// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Вставити цей блок на сторінку

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];

/*

for (let i = 0; i < users.length; i++) {
    let usersDiv = document.createElement('div');
        usersDiv.innerHTML = `${users[i].name}, ${users[i].age}, ${users[i].status}, ${users[i].address.city},${users[i].address.country},${users[i].address.street},${users[i].address.houseNumber}`;
        usersDiv.style.backgroundColor = 'lightblue';
    usersDiv.style.margin = '10px';
document.body.appendChild(usersDiv);

}

for (const user of users) {
    let userDiv = document.createElement('div');
    userDiv.innerHTML = `${user.name}  ${user.age}  ${user.status}  ${user.address.city} ${user.address.country} ${user.address.street} ${user.address.houseNumber}`;
    userDiv.style.backgroundColor = '#56ea9f';
    userDiv.style.margin = '3px'
    document.body.appendChild(userDiv);


}
*/



// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Блок з адресою зробити окремим блоком, з блоками для кожної властивості


/*for (const user of users) {
    let newUserDiv = document.createElement('div')
    newUserDiv.style.border = '1px solid black';
    newUserDiv.style.backgroundColor = 'lightgreen';
    newUserDiv.style.display = 'Flex';
    let newUserDiv1 = document.createElement('div')
    newUserDiv1.style.backgroundColor = 'lightblue';
    newUserDiv1.style.display = 'Flex';
    newUserDiv1.style.justifyContent = 'center';
    newUserDiv1.style.alignItems = 'center';
    let newUserDiv2 = document.createElement('div')
    let newUserDiv3 = document.createElement('div')
    newUserDiv3.style.backgroundColor = '#ff8932';
    newUserDiv3.style.margin = '5px';
    let newUserDiv4 = document.createElement('div')
    let newUserDiv5 = document.createElement('div')
    newUserDiv4.style.backgroundColor = '#ff8932';
    newUserDiv4.style.margin = '5px';
    newUserDiv5.style.backgroundColor = '#ff8932';
    newUserDiv5.style.margin = '5px';
    newUserDiv2.style.backgroundColor = '#ff8932';
    newUserDiv2.style.margin = '5px';
    newUserDiv.innerHTML = `${user.name} ${user.age} ${user.status}`;
    document.body.appendChild(newUserDiv);
    newUserDiv2.innerHTML = user.address.city
    newUserDiv3.innerHTML = user.address.country
    newUserDiv4.innerHTML = user.address.street
    newUserDiv5.innerHTML = user.address.houseNumber
   newUserDiv1.innerHTML =' address :';
   newUserDiv.appendChild(newUserDiv1);
   newUserDiv1.appendChild(newUserDiv2);
   newUserDiv1.appendChild(newUserDiv3);
   newUserDiv1.appendChild(newUserDiv4);
   newUserDiv1.appendChild(newUserDiv5);
}*/

/*

for (let i = 0; i < users.length; i++) {
    let usersDiv = document.createElement('div');
    let addressDiv = document.createElement('div');
    let addresPreDivs = document.createElement('div');
    usersDiv.innerHTML = `${users[i].name}, ${users[i].age}, ${users[i].status}`;
    addressDiv.innerHTML = 'address : ';
    addresPreDivs.innerHTML = `${users[i].address.city}`;
    let addresPreDivs1 = document.createElement('div');
    addresPreDivs1.innerHTML = `${users[i].address.country}`;
    let addresPreDivs2 = document.createElement('div');
    addresPreDivs2.innerHTML = `${users[i].address.street}`;
    let addresPreDivs3 = document.createElement('div');
    addresPreDivs3.innerHTML = `${users[i].address.houseNumber}`;
    usersDiv.style.backgroundColor = 'lightblue';
    usersDiv.style.margin = '10px';
    usersDiv.style.display = 'flex';
    addressDiv.style.backgroundColor = 'green';
    addressDiv.style.margin = '5px';
    addressDiv.style.padding = '10px';
    addressDiv.style.display = 'flex';
    addressDiv.style.justifyContent = 'center';
    addressDiv.style.alignItems = 'center';
    addresPreDivs.style.backgroundColor = 'tomato';
    addresPreDivs.style.margin = '2px';
    addresPreDivs1.style.backgroundColor = 'tomato';
    addresPreDivs1.style.margin = '2px';
    addresPreDivs2.style.backgroundColor = 'tomato';
    addresPreDivs2.style.margin = '2px';
    addresPreDivs3.style.backgroundColor = 'tomato';
    addresPreDivs3.style.margin = '2px';

    document.body.appendChild(usersDiv);
    usersDiv.appendChild(addressDiv);
    addressDiv.appendChild(addresPreDivs);
    addressDiv.appendChild(addresPreDivs1);
    addressDiv.appendChild(addresPreDivs2);
    addressDiv.appendChild(addresPreDivs3);

}
*/

//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];


/*let newMass = ''
for (const newMass1 of usersWithId) {
    for (const newMass2 of citiesWithId){
        if (newMass1.id === newMass2.user_id){
            newMass = Object.assign({}, newMass1, newMass2);
            console.log(newMass);
        }
    }
}*/

for (const newMass1 of usersWithId) {

    for (const newMass2 of citiesWithId){
        newMass1.address = newMass2;
        if (newMass1.id === newMass2.user_id){
            console.log(newMass1);
        }
    }
}


