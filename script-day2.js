/*
let outputEl = document.querySelector('#output');// получаем элемент
//outputEl.textContent = 'Hello';// запись в элемент
outputEl.innerHTML = '<h2>Hello</h2>';// запись в элемент разметки
*/

/*
// 1 объявление функции
function getSum(){
    console.log(1 + 9);
}

// 2 вызов функции
getSum();
getSum();
getSum();
*/

/*
let number1 = 4;
let number2 = 7;

function getSum(num1, num2){
    console.log(num1 + num2);
}

getSum(2, 5);
getSum(1, 7);
getSum(number2, number1);
getSum(number2); // 7 + undefined
*/

/*
function sayHello(userName, age){
    console.log(`Привет, ${userName}, мне ${age} лет!`);
}

sayHello('Иван', 22);
sayHello();
*/

/*
let num1 = 5;
let num2 = 10;

function incrementNumber(num){
    // let num1 = 10;
    let result = num + num1; // 10 + 5
    console.log(result);
}

incrementNumber(num2);*/


/*
function sayHello(userName = 'человек'){
    console.log(`Привет, ${userName}!`);
}

sayHello('Петр');
sayHello();
sayHello(null);
sayHello(true);
sayHello(2342);
*/

/*
function getSum(num1, num2){
    let result = num1 + num2;

    return result;
    //return num1 + num2;
}

let res1 = getSum(4, 7);
let res2 = getSum(7, 2);

console.log(res1, res2);*/

/*
// рекурсия
function getSum(){
    console.log( Math.random() );
    getSum();
}

getSum();
*/

/*
function checkAge(age){

    if(age >= 18) {
        return 'Добро пожаловать';
    } else {
        return  'Доступ запрещен';
    }

}

console.log( checkAge(54) );
*/

/*
function checkAge(age){

    if(age >= 18) {
        return 'Добро пожаловать';
    } else {
        return;
    }

}

console.log(checkAge(4));*/

/*
// возврат нескольких значений
function calculateNumbers(num1, num2){
    let sum = num1 + num2;
    let mult = num1 * num2;

    return [sum, mult];
    // return {sum, mult};
    // return {sum: sum, mult: mult};
}

console.log(calculateNumbers(3, 6));*/

/*
function getSum(num1, num2){
    let result = num1 + num2;
    console.log(result);
    //return result;
    //return [result, num1, num2];

}
getSum(3, 5);

console.log(num1);
console.log(result);
*/

/*
let userName = 'Иван';

function changeValue(userName){
    userName = 'Светлана';
}

changeValue();
console.log(userName);*/


/*

function changeValue(userName){
    userName = 'Светлана';
}

function sayHello(userName){
    console.log(`Привет, ${userName}`);
}

*/

/*
let age = 44;

let message;

if(age >= 21){
    message = 'Добро пожаловать';
}else{
    message = 'Доступ запрещен';
}

console.log(message);
*/

/*
let age = 44;

if(age >= 21){
    var message = 'Добро пожаловать';
}else{
    message = 'Доступ запрещен';
}

console.log(message);

//console.dir(document);

//alert('Hello');*/

/*
function getUserInfo(lastName, firstName = 'не задано'){
    return `Имя: ${firstName}, фамилия: ${lastName}!`;
}

console.log( getUserInfo('Иванов', 'Иван') );
console.log( getUserInfo('Иванов') );*/

/*
let firstName = 'Иван';
let lastName = 'Иванов';

function getUserInfo(){
    // if(firstName || lastName){
    //     return false;
    // }
    return `Имя: ${firstName ?? 'нет'}, фамилия: ${lastName}!`;
}

console.log(getUserInfo());*/


/*
let outputEl = document.querySelector('#output');// получаем элемент

function printMessage(){
    console.log('hello');
}
outputEl.addEventListener('click', printMessage);*/


/**
 * объектные типы
 */

/*
let fName = 'Иван';
console.log(fName.length);
console.log(fName.toUpperCase());*/

// let fName = 'Иван';
// let lName = 'Петров';
// let age = 11;

//let user = ['Иван', 'Петров', 11];

/*
let user = {
    fName: 'Иван',
    lName: 'Петров',
    age: 11,
};

console.log(user);
console.log(user.fName);
//document.write(user);

let output = `<h2>Имя: ${user.fName} Фамилия: ${user.lName} Возраст: ${user.age}<h2>`;
console.log(output);
document.write(output);
*/


// let hobbies = ['Плавать', 'Спать', 'Есть'];
// console.log(hobbies[1]);

/*
let user = {
    fName: 'Иван',
    lName: 'Петров',
    age: 11,
    'is admin': true,
    is_admin: false,
    hobbies: ['Плавать', 'Спать', 'Есть']
};

console.log(user["is admin"]);
console.log(user.is_admin);
console.log(user.hobbies[1]);*/

/*
let property = 'lName';

const user = {
    fName: 'Иван',
    lName: 'Петров',
    age: 11,
    'is admin': true,
    is_admin: false,
    hobbies: ['Плавать', 'Спать', 'Есть']
};

// console.log(user.property);
// user.property = 'Иванов';
// console.log(user[property]);
// console.log(user);

user.age = 33;
user.property = 'Иванов';

user = "Петр";

console.log(user);*/

/*
let userName = 'Анна';
let newUserName = userName;

newUserName = 'Инна';

console.log(newUserName);
console.log(userName);
*/

/*
const user = {
    fName: 'Иван',
    lName: 'Петров',
    age: 11,
    'is admin': true,
    is_admin: false,
    hobbies: ['Плавать', 'Спать', 'Есть']
};

const newUser = user;

newUser.fName = "Сергей";

console.log(user);
console.log(newUser);*/



/*
const user = {
    fName: 'Иван',
    lName: 'Петров',
    age: 11,
    'is admin': true,
    is_admin: false,
    hobbies: ['Плавать', 'Спать', 'Есть']
};

for(let key in user){
    console.log(`Ключ: ${key}, значение: ${user[key]}`);
}*/

/*
let newUser = {};

const user = {
    fName: 'Иван',
    lName: 'Петров',
    age: 11,
    'is admin': true,
    is_admin: false,
    hobbies: ['Плавать', 'Спать', 'Есть']
};

for(let key in user){
    newUser[key] = user[key];
}

newUser.age = 22;
newUser.hobbies[0] = 'Гулять';

console.log(newUser);
console.log(user);
*/


let users = [
    {
        fName: 'Иван',
        lName: 'Петров',
        age: 11,
    },
    {
        fName: 'Инна',
        lName: 'Петрова',
        age: 15,
    },
    {
        fName: 'Светлана',
        lName: 'Сидорова',
        age: 55,
    },
    {
        fName: 'Петр',
        lName: 'Сидоров',
        age: 33,
    }
];

// console.log(users);
/*
for(let user of users){
    document.write(`<h3>Имя: ${user.fName}. Фамилия: ${user.lName}. Возраст: ${user.age}.</h3>`);
}
*/

/*
let output = '<div class="users">';
let i = 1;
for(let user of users){
    output += `
            <div class="user user-${i}">
                <h3>Имя: ${user.fName}</h3>
                <p>Фамилия: ${user.lName}</p>
                <p>Возраст: ${user.age}</p>
            </div>`; 
    i++;           
}
output += '</div>';

document.write(output);*/


// fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(json => console.log(json))

/*
let numbers = [1,6,2,3,4,8];
numbers[6] = 2;
numbers[9] = 8;

console.log(numbers);
console.log(numbers[7]);
*/

//let numbers = [1,6,2,3,4,8];

// console.log(numbers.pop());
// console.log(numbers);

// numbers.push(10);
// console.log(numbers);

/*
let numbers = [1, 6, 2, 3, 4, 8];

// let newNumbers = numbers.slice(2, 5);
let newNumbers = numbers.slice();
console.log(newNumbers);
console.log(numbers);*/

/*
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
let delAnimals = animals.splice(1, 0, 'tiger', 'cow', 'bear');
console.log('Удаленные элементы',delAnimals);
console.log('Исходный массив', animals);*/

/*
let numbers = [1, 6, 2, 10, 3, 4, 8];
console.log(numbers.sort());*/


// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

/*
animals.forEach(function(value, index){
    console.log(value, index);
});*/
/*
let newAnimals = animals.map(function(value, index){
    return value.toUpperCase();
});

console.log(newAnimals);*/

/*
let usersLastNames = users.map(function(user){
    return user.lName;
});
console.log(usersLastNames);*/