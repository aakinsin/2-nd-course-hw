/*//Задание 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
console.log(people.sort(function (a, b) {
    if (a.age > b.age) {
        return 1;
    }
    if (a.age < b.age) {
        return -1;
    }
    return 0;
}));
//Задание 2
function isPositive(a) {
    let b = 0;
    if (a > 0) {
        b = a;
    }
    return b;
}
function isMale(a) {
    let b = 0;
    if (a.gender == 'male') {
        b = a;
    }
    return b;
}
function filter(arr, func) {
    const output = [];
    const c = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === 0) {
            c.push(func(arr[i]));
        } else {
            output.push(func(arr[i]));
        }
    };
    return output;
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]
//Задание 3
let timerId = setInterval(() => console.log(Date()), 3000);
setTimeout(() => { clearInterval(timerId); console.log('30 Секунд прошло.'); }, 30000);
//Задание 4*/
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})
/*//Задание 5
// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'))*/

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
