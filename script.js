/*//Задание 1
let str = 'oetngoetg.';
console.log(str.toUpperCase());
//Задание 2

function searchStart(array, b) {
    const search = [];
    array.forEach(el => {
        if (el.toLowerCase().includes(b.toLowerCase())) {
            search.push(el);
        }
    });
    console.log(search);
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
    console.log(Math.round(Math.random() * 10))
};
randomNumber();
//Задание 6

function getRandomArrNumbers(a) {
    const array = [];
    for (let index = 1; index <= a / 2; index++) {
        array.push(Math.round(Math.random() * a));

    }
    console.log(array);
}
getRandomArrNumbers(prompt('Введите число'));
//Задание 7
function inRange(a, b) {
    let c = Math.round(Math.random() * (b - a) + a);
    console.log(c);
}
inRange(10, 25);
//Задание 8
let now = Date();
console.log(now);
//Задание 9
let currentDate = new Date();
console.log(currentDate);
currentDate.getDate(currentDate.setDate(73))
console.log(currentDate);


//Задание 10*/
const ruDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const ruMonths = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
let myDate = new Date();
function ruDate(Date) {
    console.log('Дата: ' + Date.getDate() + '-е ' + ruMonths[Date.getMonth()] + ' ' + Date.getFullYear() + ' года - это ' + ruDays[Date.getDay()] +
        '. Время: ' + Date.getHours() + ':' + Date.getMinutes() + ':' + Date.getSeconds());
}

ruDate(myDate);


function Game1(a) {
    a = prompt('Введите порядковый номер месяца');
    if (isNaN(a)) {
        alert('Писать нужно цифрой.')
    } else
        if (a >= 1 && a <= 2 || a === 12) {
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
    a = prompt('Чему равнялся первый элемент массива?');
    b = prompt('Чему равнялся последний элемент массива?');
    if (a != fruits[0] && b != fruits[6]) {
        alert('Может в следующий раз получится?');
    } else if (a == fruits[0] && b == fruits[6]) {
        alert('У тебя отличная память.');
    } else {
        alert('Ты был близок к победе.')
    }
};
