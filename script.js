//Задание 1
let i = 0;
while (i < 2) {
    console.log('Привет!');
    i++;

}
//Задание 2
while (i < 7) {
    console.log(i - 1);
    i++;
}
//Задание 3
while (i <= 22) {
    console.log(i);
    i++;
}
//Задание 4
const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
}
for (const man in obj) {
    console.log(man, '— зарплата ', obj[man], ' долларов');
}
//Задание 5
let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    num++;
}
console.log(n, num);
//Задание 6
let day = prompt("Число первой пятницы месяца?");
let fri = day % 7;
while (day <= 31) {
    if (day % 7 == fri) {
        console.log('Сегодня пятница,', day, '-е число. Необходимо подготовить отчет.');
    };
    day++;
};