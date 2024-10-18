/*
let outputEl = document.querySelector("#output"); //получаем элемент
outputEl.textContent = "Hello"; // запись в элемент
outputEl.innerHTML = "<h>Hello</h>"; // запись в элемент разметки
*/
/*
function getSumm(num1, num2) {
  console.log(num1 + num2);
}

getSumm(5, 9);
*/
/*
let num1 = 5;
let num2 = 10;

function incrementNumber(num) {
  let num1 = 10;
  let result = num + num1;
  console.log(result);
}

incrementNumber(num2);
*/
/*
function getSumm(num1, num2) {
  let result = num1 + num2;
  return result;
}
let sum = getSumm(4, 7);
console.log(sum);
*/
/*
function getTotalBill(billArray) {
  let sum = 0;
  for (let item of billArray) {
    sum += item;
  }
  return sum;
}
let billArray = getTotalBill([43, 65, 23, 54]);
console.log(billArray);
*/
/*
function checkAge(age) {
  if (age >= 18) {
    return "Wellcome";
  } else {
    return;
  }
}
console.log(checkAge(10));
*/
/*
function calculateNumbers(num1, num2) {
  let sum = num1 + num2;
  let mult = num1 * num2;

  return { sum, mult };
  // return { sum: sum, mult: mult };
}
console.log(calculateNumbers(3, 6));
*/
/*
function getSum(num1, num2) {
  let result = num1 + num2;
  console.log(result);
}
getSum(3, 5);
console.log(result); // область видимости, поэтому не выведет результат
*/
/*
let userName = 'Ivan';

function changeValue(userName) {
    userName = 'Svetlana';
}
changeValue();
console.log(userName); // Ivan из-за области видимости
*/
