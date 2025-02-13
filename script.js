//Задание1
let password = prompt('Введите пароль');
let password2 = "1"

if( password == password2){
    message = 'Пароль верный';
} else {
    message = 'Пароль не верный';
}
alert(message);
//Задание2
let c = 4
if(c > 0 && c <=10) {
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
    case 12:
        case 1:
        case 2:
            season = "зима";
            break;
        case 3:
        case 4:
        case 5:
            season = "весна";
            break;
        case 6:
        case 7:
        case 8:
            season = "лето";
            break;
        case 9:
        case 10:
        case 11:
            season = "осень";
            break;
        default:
            season = "Неизвестный месяц"; 
            
    }