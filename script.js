/*//Задание 1
function lessOrMore(a, b) {
    if (a <= b) {
        console.log(a);
    } else {
        console.log(b)
    }
}
lessOrMore(4, 4);
//Задание 2
function even(c) {
    if (c % 2 == 0) {
        return ('Число четное')
    } else {
        return ('Число нечетное')
    }
}
even(4);

//Задание 3
let square = (a) => {
    let result = a * a;
    console.log(result);
    return result;
}
square(5);
//Задание 4
function access() {
    let a = prompt('Укажите свой возвраст');

    if (a < 0) {
        console.log('Вы ввели неправильное значение')

    } else {

        if (a >= 13) {
            console.log('Добро пожаловать!')
        }
        else {
            console.log('Привет, друг!');

        }
    }
}
access();
//Задание 5
function notNumber(d, e) {
    d = (d);
    e = (e);
    if (isNaN(d) || isNaN(e)) {
        console.log('Одно или оба значения не являются числом')
    } else {
        console.log(d * e)
    }
};
notNumber(9, 7);
//Задание 6*/
function degree() {
    let n = prompt('Введите число');
    if (isNaN(n)) {
        console.log('Переданный параметр не является числом')
    } else {
        console.log(`n в кубе равняется ${n ** 3}`)
    }
}
degree();
/*//Задание 7
function getArea() {
    console.log(`Площадь окружности равна ${this.radius * 3.14 * this.radius}`)
}
function getPerimeter() {
    console.log(`Периметр окружности равен ${2 * 3.14 * this.radius}`)
}
const circle1 = {
    radius: 1,
    getArea: getArea,
    getPerimeter: getPerimeter
}

const circle2 = {
    radius: 5,
    getArea: getArea,
    getPerimeter: getPerimeter
}
circle1.getArea();
circle2.getArea();
circle1.getPerimeter();
circle2.getPerimeter();*/


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
}