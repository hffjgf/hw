//Задание1
let password = prompt('Введите пароль');
let message;

if(password === 34) {
    message = 'Пароль верный';
} else {
    message = 'Пароль не верный';
}
alert(message);
//Задание2
let number = prompt('число с');
let c = 4
if(number > 0 && number <=10) {
    message = 'Верно';
} else {
    message = 'Неверно';
}
alert(message);
//Задание3
let d = 140;
let e = 10;
if(d>100 || e<100 ) {
    message = 'Верно';
} else {
    message = 'Неверно';
}
alert(message);
//Задание4
let a = 2;
let b = 3;
alert(Number(a) + Number(b));
//Задание5
let day = String(prompt('Введите номер месяц'));

switch (day) {
case '1':
console.log('январь')
break;
case '2':
console.log('февраль')
break;
case '3':
console.log('март')
break;
case '4':
console.log('апрель')
break;
case '5':
console.log('май')
break;
case '6':
console.log('июнь')
break;
case '7':
console.log('июль')
break;
case '8':
console.log('август')
break;
case '9':
console.log('сентябрь')
break;
case '10':
console.log('октябрь')
break;
case '11':
console.log('наябрь')
break;
case '12':
console.log('декабрь')
break;
default:
    console.log('месяц не существует')
    break;
}