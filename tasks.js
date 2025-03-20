//задача1
const people1 = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];

// Сортируем массив по возрастанию возраста
const sortedPeople = people1.sort((a, b) => a.age - b.age);

// Выводим отсортированный массив в консоль
console.log(sortedPeople);

//задача2
// Функция для проверки, является ли число положительным
function isPositive(number) {
 return number > 0;
}

// Функция для проверки, является ли объект мужчиной
function isMale(person) {
 return person.gender === 'male';
}

// Реализация функции filter
function filter(array, ruleFunction) {
 const result = []; // Создаем пустой массив для результатов
 for (let i = 0; i < array.length; i++) {
     // Если ruleFunction возвращает true, добавляем элемент в результат
     if (ruleFunction(array[i])) {
         result.push(array[i]);
     }
 }
 return result; // Возвращаем отфильтрованный массив
}

// Пример использования функции filter
console.log(filter([3, -4, 1, 9], isPositive)); // [3, 1, 9]

const people = [
{name: 'Глеб', gender: 'male'},
{name: 'Анна', gender: 'female'},
{name: 'Олег', gender: 'male'},
{name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale)); 
// [
//   {name: 'Глеб', gender: 'male'},
//   {name: 'Олег', gender: 'male'}
// ]
//задача3
// Функция для вывода текущей даты
function printCurrentDate() {
 console.log(new Date().toLocaleString());
}

// Запускаем интервал, который будет выводить дату каждые 3 секунды
const intervalId = setInterval(printCurrentDate, 3000);

// Останавливаем интервал через 30 секунд и выводим сообщение
setTimeout(() => {
 clearInterval(intervalId); // Останавливаем интервал
 console.log("30 секунд прошло");
}, 30000); // 30000 миллисекунд = 30 секунд



//задача4
function delayForSecond(callback) {
 // Используем setTimeout для задержки выполнения callback на 1 секунду
 setTimeout(callback, 1000);
}

delayForSecond(function () {
console.log('Привет, Глеб!');
});


//задача5
// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
 setTimeout(() => {
     console.log('Прошла одна секунда');
     if (cb) { cb(); }
 }, 1000);
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
 console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Исправленный код ниже:
delayForSecond(() => sayHi('Глеб'));



