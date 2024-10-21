// 1. Сформируйте из объекта строку и выведите в консоль.
let student = {
  firstName: "Igor",
  lastName: "Pronkin",
  age: 34,
  phone: "8-916-341-38-35",
  city: "Moscow",
  "house number": 33,
  street: "Chertanovskaya",
}; 

let outputStudent = `firstName: ${student.firstName}
  lastName: ${student.lastName} age: ${student.age} 
  phone: ${student.phone} city: ${student.city} 
  "house number": ${student["house number"]} 
  street: ${student.street}`

console.log(outputStudent);

// 2. Из объекта и задания 1 сформируйте строку с разметкой HTML и выведите в документ.
let output = `<div>
<h2>Имя: ${student.firstName}</h2>
<h3>Фамилия: ${student.lastName}</h3>
<p>Возраст: ${student.age}</p>
<p>Телефон: ${student.phone}</p>
<p>Адрес проживания: ${student.city}, ${student["house number"]}, ${student.street}</p>
</div>`;
console.log(output);
document.write(output);

// 3. Выведите в консоль только имена пользователей (через цикл).
let users = [
  {
    fName: "Иван",
    lName: "Иванов",
    hobbies: ["Спать", "Гулять", "Читать"],
  },
  {
    fName: "Анна",
    lName: "Иванова",
    hobbies: ["Спать", "Читать"],
  },
  {
    fName: "Ирина",
    lName: "Сидорова",
    hobbies: ["Гулять", "Читать"],
  },
]; 

users.forEach((user) => {
  console.log(user.fName);
});


/* 4*. Из массива в задании 3 сформируйте разметку HTML и выведите в документ.
Стилизуйте через CSS по своему усмотрению.*/
let newOutput = '<div class="users">';
let i = 1;
for(let user of users){
    newOutput += `
            <div class="user user-${i}">
                <h3>Имя: ${user.fName}</h3>
                <h4>Фамилия: ${user.lName}</h4>
                <p>Хобби:${user.hobbies}</p>
            </div>`; 
    i++;           
}
newOutput += '</div>';

document.write(newOutput);

// 5** Выведите все данные из массива объектов в документ, сделайте папку с картинками котов.
let cats = [
  {
    name: "Ллойд",
    color: "Черный",
    age: 12,
    avatar: "img/1.jpg",
    owner: {
      name: "Василий",
      city: "Москва",
      phones: [333, 543, 123, 87876],
    },
  },
  {
    name: "Барсик",
    color: "Серый",
    age: 6,
    avatar: "img/2.jpg",
    owner: {
      name: "Анна",
      city: "Москва",
      phones: [523, 653, 532],
    },
  },
  {
    name: "Мурка",
    color: "Белый",
    age: 2,
    avatar: "img/3.jpg",
    owner: {
      name: "Инна",
      city: "Самара",
      phones: [187, 466, 643],
    },
  },
  {
    name: "Пусик",
    color: "Серый",
    age: 5,
    avatar: "img/4.jpg",
    owner: {
      name: "Николай",
      city: "Москва",
      phones: [345, 678, 543],
    },
  },
];

let catsOutput = '<div class="cats">';
let j = 1;
for(let cat of cats){
    catsOutput += `
            <div class="cat cat-${j}">
                <h2>Имя: ${cat.name}</h2>
                <p>Окрас: ${cat.color}</p>
                <p>Возраст: ${cat.age}</p>
                <p>Фото: ${cat.avatar}</p>
                <h3>Имя владельца: ${cat.owner.name}</h3>
                <p>Город: ${cat.owner.city}</p>
                <p>Номера телефонов: ${cat.owner.phones}</p>
            </div>`; 
    j++;           
}
catsOutput += '</div>';

document.write(catsOutput);
console.log(catsOutput);

// 6.Поменяйте первый и последний элемент массива местами.
let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
console.log(fruits);
fruits[0] = fruits.splice(5, 5, fruits[0])[0]; 
console.log(fruits); 

// 7. Получите из исходного массива массив ["cat", "dog", "bat",  "cow", "chicken", "mouse", "pig", "goat", "sheep","camel"]
let pets = ["cat", "dog", "bat", "mouse", "pig", "goat", "sheep", "cow", "chicken", "camel"];
pets.splice(3, 7, "cow", "chicken", "mouse", "pig", "goat", "sheep","camel");
console.log(pets);

// 8. Объедините два массива в один.
let numbers = [1, 4, 6, 3, 2, 8, 4, 3];
let animals = ["ant", "bison", "camel", "duck", "elephant", "cat", "dog"];

let arrayConcat = numbers.concat(animals);
console.log(arrayConcat);
