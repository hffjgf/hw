//задача1
const array = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]); // Выводим текущий элемент массива
    if (array[i] === 10) { // Проверяем, равен ли текущий элемент 10
        break; // Прерываем цикл, если нашли 10
    }
}

//задача2
const array = [1, 5, 4, 10, 0, 3];
const index = array.indexOf(4); // Ищем индекс значения 4

console.log(index); // Выводим результат в консоль
//задача3
const array = [1, 3, 5, 10, 20];
const result = array.join(' '); // Объединяем элементы массива через пробел

console.log(result); // Выводим

//задача4
const rows = 3; // Количество строк
const cols = 3; // Количество столбцов
const value = 1; // Значение, которым заполняется массив

// Создаем пустой многомерный массив
const multiArray = [];

// Внешний цикл для создания строк
for (let i = 0; i < rows; i++) {
    // Создаем пустую строку (внутренний массив)
    const row = [];

    // Внутренний цикл для заполнения строки значениями
    for (let j = 0; j < cols; j++) {
        row.push(value); // Добавляем значение в строку
    }

    // Добавляем строку в многомерный массив
    multiArray.push(row);
}

console.log(multiArray); // Выводим результат в консоль

//задача5
// Исходный массив
let arr1 = [1, 1, 1];

// Добавляем значения 2, 2, 2 в конец массива
arr1.push(2, 2, 2);

// Выводим результат
console.log(arr);


//задача6

// Исходный массив
let arr3 = [9, 8, 7, 'a', 6, 5];

// Удаляем букву 'a' из массива
arr = arr3.filter(item => typeof item !== 'string');

// Сортируем массив
arr.sort((a, b) => a - b);

// Выводим результат
console.log(arr);


//задача7
// Исходный массив
const arr2 = [9, 8, 7, 6, 5];

// Запрашиваем у пользователя число
const userGuess = prompt("Угадайте число от 5 до 9:");

// Проверяем, есть ли введенное значение в массиве
if (arr2.includes(Number(userGuess))) {
  alert("Угадал");
} else {
  alert("Не угадал");
}
//задача8
// Исходная строка
const str = 'abcdef';

// Преобразуем строку в массив, переворачиваем и объединяем обратно в строку
const reversedStr = str.split('').reverse().join('');

// Выводим результат в консоль
console.log(reversedStr);

//задача9
// Исходный массив
const arr = [[1, 2, 3], [4, 5, 6]];

// Преобразуем вложенный массив в одномерный
const flatArr = arr.flat();

// Выводим результат в консоль
console.log(flatArr);

//задача10
// Создаем массив с произвольными числами от 1 до 10
const arr = [3, 7, 2, 9, 5, 1, 8, 4, 6, 10];

// Перебираем массив с помощью цикла for
for (let i = 0; i < arr.length - 1; i++) {
  // Вычисляем сумму текущего и следующего элементов
  const sum = arr[i] + arr[i + 1];
  
  // Выводим результат в консоль
  console.log(`Сумма элементов ${arr[i]} и ${arr[i + 1]}: ${sum}`);
}
//задача11
nction squareArray(arr) {
    // Используем метод map для создания нового массива
    return arr.map(num => num * num);
  }
  
  // Пример использования функции
  const numbers = [1, 2, 3, 4, 5];
  const squaredNumbers = squareArray(numbers);
  
  // Выводим результат в консоль
  console.log(squaredNumbers); // [1, 4, 9, 16, 25]


//задача12
// Функция для получения массива длин слов
function getWordLengths(arr) {
    // Используем метод map для создания нового массива
    return arr.map(str => str.length);
  }
  
  // Пример использования функции
  const words = ["apple", "banana", "cherry", "date"];
  const lengths = getWordLengths(words);
  
  // Выводим результат в консоль
  console.log(lengths); // [5, 6, 6, 4]


//задача13
// Функция для фильтрации отрицательных чисел
function filterNegativeNumbers(arr) {
    // Используем метод filter для создания нового массива
    return arr.filter(num => num < 0);
  }
  
  // Пример использования функции
  const numbers = [1, -2, 3, -4, 5, -6];
  const negativeNumbers = filterNegativeNumbers(numbers);
  
  // Выводим результат в консоль
  console.log(negativeNumbers); // [-2, -4, -6]

//задача14
// Создаем массив из 10 случайных чисел в диапазоне от 0 до 10
const originalArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));

// Фильтруем массив, оставляя только четные числа
const evenNumbersArray = originalArray.filter(num => num % 2 === 0);

// Выводим оба массива в консоль
console.log("Исходный массив:", originalArray);
console.log("Массив с четными значениями:", evenNumbersArray);

//задача15
// Создаем массив из 6 случайных чисел в диапазоне от 1 до 10
const array = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);

// Вычисляем сумму всех элементов массива
const sum = array.reduce((acc, num) => acc + num, 0);

// Вычисляем среднее арифметическое
const average = sum / array.length;

// Выводим массив и среднее арифметическое в консоль
console.log("Массив:", array);
console.log("Среднее арифметическое:", average);




