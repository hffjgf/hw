//задачка1

const str = 'js';
const upperCaseStr = str.toUpperCase();

console.log(upperCaseStr); // Вывод: "JS"


//задачка2
function filterStringsStartingWith(arr, prefix) {
    // Приводим префикс к нижнему регистру для сравнения
    const lowerCasePrefix = prefix.toLowerCase();
  
    // Фильтруем массив, оставляя только строки, которые начинаются с префикса
    return arr.filter(str => str.toLowerCase().startsWith(lowerCasePrefix));
  }
  
  // Пример использования функции
  const words = ["Apple", "Banana", "apricot", "Avocado", "berry", "apartment"];
  const prefix = "ap";
  
  const result = filterStringsStartingWith(words, prefix);
  console.log(result); // Вывод: ["Apple", "apricot", "apartment"]

//задача3
const number = 32.58884;

// Округление до меньшего целого
const floorResult = Math.floor(number);

// Округление до большего целого
const ceilResult = Math.ceil(number);

// Округление до ближайшего целого
const roundResult = Math.round(number);

// Вывод результатов
console.log("До меньшего целого:", floorResult); // 32
console.log("До большего целого:", ceilResult);  // 33
console.log("До ближайшего целого:", roundResult); // 33


//задача4
// Набор чисел
const numbers = [52, 53, 49, 77, 21, 32];

// Нахождение минимального значения
const minValue = Math.min(...numbers);

// Нахождение максимального значения
const maxValue = Math.max(...numbers);

// Вывод результатов в консоль
console.log("Минимальное значение:", minValue); // 21
console.log("Максимальное значение:", maxValue); // 77


//задача5

function getRandomNumber() {
    // Генерируем случайное число от 0 до 1, затем умножаем на 10 и округляем вниз
    const randomNumber = Math.floor(Math.random() * 10) + 1;
  
    // Выводим результат в консоль
    console.log(randomNumber);
  }
  
  // Вызов функции
  getRandomNumber()

//задача6
function generateRandomArray(num) {
    // Проверяем, что число положительное и больше 0
    if (num <= 0 || !Number.isInteger(num)) {
      return "Пожалуйста, введите целое положительное число.";
    }
  
    // Вычисляем длину массива (в два раза меньше числа)
    const length = Math.floor(num / 2);
  
    // Создаем массив случайных чисел
    const randomArray = Array.from({ length }, () => Math.floor(Math.random() * (num + 1)));
  
    // Возвращаем массив
    return randomArray;
  }
  
  // Пример использования функции
  const result = generateRandomArray(10);
  console.log(result); // Пример вывода: [3, 7, 2, 5, 8]


//задача7
function getRandomInRange(min, max) {
  // Проверяем, что min и max — целые числа, и min <= max
  if (!Number.isInteger(min) || !Number.isInteger(max) || min > max) {
    return "Пожалуйста, введите два целых числа, где min <= max.";
  }

  // Генерируем случайное число в диапазоне [min, max]
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Пример использования функции
const randomNumber = getRandomInRange(5, 10);
console.log(randomNumber); // Пример вывода: 7
//задача8
// Создаем объект Date для текущей даты и времени
const currentDate = new Date();

// Выводим текущую дату и время в консоль
console.log("Текущая дата и время:", currentDate);
//задача9
// Создаем объект Date для текущей даты
const currentDate = new Date();

// Выводим текущую дату
console.log("Текущая дата:", currentDate.toLocaleDateString());

// Вычисляем дату через 73 дня
const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);

// Выводим дату через 73 дня
console.log("Дата через 73 дня:", futureDate.toLocaleDateString());

//задача10
function formatDate(date) {
    // Массивы для названий месяцев и дней недели на русском
    const months = [
      "января", "февраля", "марта", "апреля", "мая", "июня",
      "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];
    const days = [
      "воскресенье", "понедельник", "вторник", "среда",
      "четверг", "пятница", "суббота"
    ];
  
    // Получаем компоненты даты
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = days[date.getDay()];
  
    // Получаем компоненты времени
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    // Формируем строку
    return `Дата: ${dayOfMonth} ${month} ${year} — это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
  }
  
  // Пример использования
  const currentDate = new Date();
  console.log(formatDate(currentDate));