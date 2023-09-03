//Задание 1
let password = 'password';

let pass = prompt('Введите пароль');
if (password === pass) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}
//Задание 2
let c = 5;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
//Задание 3
let d = 50;
let e = 110;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
//Задание 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
a = Number(a);
b = Number(b);
alert(a + b);
//Задание 5
let monthNumber = Number(prompt('Напишите номер месяца'));
switch (monthNumber) {
    case 1:
        console.log('Зима');
        break;
    case 2:
        console.log('Зима');
        break;
    case 3:
        console.log('Весна');
        break;
    case 4:
        console.log('Весна');
        break;
    case 5:
        console.log('Весна');
        break;
    case 6:
        console.log('Лето');
        break;
    case 7:
        console.log('Лето');
        break;
    case 8:
        console.log('Лето');
        break;
    case 9:
        console.log('Осень');
        break;
    case 10:
        console.log('Осень');
        break;
    case 11:
        console.log('Осень');
        break;
    case 12:
        console.log('Зима');
        break;
    default:
        console.log('Такого месяца нет');
        break;
}