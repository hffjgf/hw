//Задание1
for(let i = 0; i < 2; i++) {
  console.log('Привет');
}
Задание2
for(let i = 1; i < 6; i += 1) {
    console.log(i);
}
//Задание3
for(let i = 7; i < 23; i += 1) {
    console.log(i);
}
//Задание4
const obj = {
    name: 'Коля 200$',
    name2: 'Вася 300$',
    name3: 'Петя 400$',
};
for (let key in obj) {
    console.log(key, obj[key]);
}
//Задание5
function myCode() {
let n = 1000;
let num = 0;

while (n > 50){
    n/=2;
    num++;
}
console.log(num);
console.log(n);
}
myCode();
//Задание 6
const firstFriday = 5;
for (let day = 1; day <= 31; day++)
{
    if((day - firstFriday) % 7 ===0){

    console.log("Сегодня пятница," + day + "-e число. Необходимо подготовить отчет.");
}
}