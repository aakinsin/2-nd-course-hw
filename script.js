/*//Задание 1
let str = 'oetngoetg.';
console.log(str.toUpperCase());
//Задание 2

function searchStart(array, b) {
    const search = [];
    array.forEach(el => {
        if (el.toLowerCase().startsWith(b.toLowerCase())) {
            search.push(el);
        }
    });
    return search;
}
searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');
//Задание 3

let number = 32.58884;
console.log(`1. ${Math.floor(number)}`);
console.log(`2. ${Math.ceil(number)}`);
console.log(`3. ${Math.round(number)}`);
//Задание 4
console.log(`Минимальное значение ${Math.min(52, 53, 49, 77, 21, 32)}`);
console.log(`Максимальное значение ${Math.max(52, 53, 49, 77, 21, 32)}`);

//Задание 5
function randomNumber() {
    console.log(Math.floor(Math.random() * 10 + 1))
};
randomNumber();
//Задание 6

function getRandomArrNumbers(a) {
    const array = [];
    for (let index = 1; index <= Math.floor(a / 2); index++) {
        array.push(Math.floor(Math.random() * a));

    }
    return array;
}
getRandomArrNumbers(10);

//Задание 7
function inRange(a, b) {
    let c = Math.floor(Math.random() * (b - a) + a);
    return c;
}
inRange(10, 25);
//Задание 8
let now = Date();
console.log(now);
*///Задание 9
let currentDate = new Date();
console.log(currentDate);
currentDate.setDate(+currentDate.getDate() + 73);
console.log(currentDate);

/*
//Задание 10
const ruDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const ruMonths = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
let myDate = new Date();
function ruDate(Date) {
    console.log('Дата: ' + Date.getDate() + '-е ' + ruMonths[Date.getMonth()] + ' ' + Date.getFullYear() + ' года - это ' + ruDays[Date.getDay()] +
        '. Время: ' + Date.getHours() + ':' + Date.getMinutes() + ':' + Date.getSeconds());
}
ruDate(myDate);*/

function Game1(a) {
    a = prompt('Введите порядковый номер месяца');
    if (isNaN(a)) {
        alert('Писать нужно цифрой.')
    } else
        if (a >= 1 && a <= 2 || a == 12) {
            alert('Зима');
        } else if (a >= 3 && a <= 5) {
            alert('Весна');
        } else if (a >= 6 && a <= 8) {
            alert('Лето');
        } else if (a >= 9 && a <= 11) {
            alert('Осень');
        } else {
            alert('Такого месяца явно нет.')
        }
};


function Game2(a, b) {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruits = fruits.sort(() => Math.random() - 0.5);
    alert(fruits);
    let c = fruits[0];
    c = c.toLowerCase();
    let d = fruits[6];
    d = d.toLowerCase();
    a = prompt('Чему равнялся первый элемент массива?');
    b = prompt('Чему равнялся последний элемент массива?');
    if (a.toLowerCase() != c && b.toLowerCase() != d) {
        alert('Может в следующий раз получится?');
    } else if (a.toLowerCase() == c && b.toLowerCase() == d) {
        alert('У тебя отличная память.');
    } else {
        alert('Ты был близок к победе.')
    }
};
