//Задание 1
const numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if (numbers[i] == 10) break;

}
//Задание 2
console.log(numbers.indexOf(4));

//Задание 3
const space = [1, 3, 5, 10, 20];
console.log(space.join());
//Задание 4
const multiArray = [];
for (let i = 0; i < 3; i++) {
    multiArray[i] = [];
    for (let j = 0; j < 3; j++) {
        multiArray[i][j] = 1;
    }
}
console.log(multiArray);
//Задание 5
const array1 = [1, 1, 1];
array1.push(2, 2, 2);
console.log(array1);
//Задание 6
const remove = [9, 8, 7, 'a', 6, 5];
remove.sort();
remove.pop();
remove.reverse();
console.log(remove);
//Задание 7
let i = prompt("Введите число");
let b = 0;
remove.forEach((el) => {
    if (el == i) {
        alert("Угадал");

    } else {
        b++
    }
});
if (b == 5) {
    alert("Не угадал");
}
//Задание 8

let line = 'abcdef';
line = line.split('');
line = line.reverse();
line = line.join('');
console.log(line);
//Задание 9
const array2 = [[1, 2, 3], [4, 5, 6]];
array2[0].push(array2[1][0]);
array2[0].push(array2[1][1]);
array2[0].push(array2[1][2]);
array2.pop();
console.log(array2[0]);
//Задание 10
const array3 = [6, 4, 9, 5, 2, 1, 6];
for (let i = 0; i < array3.length; i++) {
    if (i == array3.length - 1) {
        console.log(array3[i]);
    } else {
        console.log(array3[i] + array3[i + 1]);
    }
};
//Задание 11

function square(array) {
    const degree = array.map(el => el * el);
    return degree;
};
square(array3);
//Задание 12
const words = ['слово', '', 'слог', 'длинное предложение', 'буква'];

let a = ['Guatemala', 'Canada', 'Costa Rica', 'Anguilla', 'North Korea'];

let aCountArr = [];

function getLengthWords(array) {
    for (let c of words) {
        aCountArr.push(c.length)
    };
    return aCountArr;
}
getLengthWords(words);
//Задание 13
function filterPositive(array) {
    const neg = array.filter(el => el < 0);
    console.log(neg);
}
filterPositive([-1, 0, 5, -10, 56]);
filterPositive([-25, 25, 0, -1000, -2]);



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