//pзадача угадай число 
function checkGuess() {
    // Генерация случайного числа от 1 до 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    // Основная функция для проверки числа
    function checkGuess() {
        // Запрашиваем ввод числа у пользователя
        const userGuess = parseInt(prompt("Угадайте число от 1 до 100:"));

        // Проверяем, является ли ввод числом
        if (isNaN(userGuess)) {
            alert("Пожалуйста, введите число!");
            checkGuess(); // Повторяем запрос
            return;
        }

        attempts++; // Увеличиваем счетчик попыток

        // Сравниваем введенное число с загаданным
        if (userGuess === randomNumber) {
            alert(`Поздравляем! Вы угадали число за ${attempts} попыток.`);
        } else if (userGuess < randomNumber) {
            alert("Загаданное число больше. Попробуйте еще раз.");
            checkGuess(); // Повторяем запрос
        } else {
            alert("Загаданное число меньше. Попробуйте еще раз.");
            checkGuess(); // Повторяем запрос
        }
    }

    // Запускаем игру
    checkGuess();
}
//задача1
function findMin(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(findMin(8, 4)); 
console.log(findMin(6, 6));
//задача2
function checkEvenOdd(n) {
    return n % 2 === 0 ? 'Число четное' : 'Число нечетное';
}

// Примеры использования:
console.log(checkEvenOdd(4));  // Вывод: "Число четное"
console.log(checkEvenOdd(7));  // Вывод: "Число нечетное"
//Задача 3
function createGetSquare() {
    return function(number) {
        return number ** 2;
    };
}

const getSquare = createGetSquare();
//Задача 4
function whatAge(age){
    if (age < 0) {
        alert('Вы ввели неправильное значение')
    } else if ((age === 0) || (age <= 12)){
        alert('Привет, друг!')
    } else if (age >= 13){
        alert('Добро пожаловать!')
    }else {
        alert ('Где-то опечатка. Попробуйте заново')
    }
}
(whatAge((prompt('Сколько тебе лет?'))))
//Задача 5

function multiplyNumbers(a, b) {
    // Преобразуем аргументы в числа
    const numA = Number(a);
    const numB = Number(b);

    // Проверяем, являются ли оба значения корректными числами
    if (isNaN(numA) || isNaN(numB)) {
        return 'Одно или оба значения не являются числом';
    }

    // Если оба значения — числа, возвращаем их произведение
    return numA * numB;
}
//Задача6

function cubeNumber() {
    const userInput = prompt("Введите число:");
    const number = Number(userInput);

    // Проверяем, является ли введенное значение числом
    if (typeof number !== 'number' || isNaN(number)) {
        return 'Переданный параметр не является числом';
    }

    return `${number} в кубе равняется ${number ** 3}`;
}

// Проверка работы функции
for (let i = 0; i <= 10; i++) {
    console.log(cubeNumber());
}
// Создаем объект circle1
const circle1 = {
    radius: 5, // Радиус первого круга

    // Метод для вычисления площади круга
    getArea() {
        return Math.PI * this.radius ** 2;
    },

    // Метод для вычисления периметра окружности
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

// Создаем объект circle2
const circle2 = {
    radius: 10, // Радиус второго круга

    // Метод для вычисления площади круга
    getArea() {
        return Math.PI * this.radius ** 2;
    },

    // Метод для вычисления периметра окружности
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

// Пример использования
console.log("circle1:");
console.log("Площадь:", circle1.getArea()); // Площадь круга с радиусом 5
console.log("Периметр:", circle1.getPerimeter()); // Периметр окружности с радиусом 5

console.log("circle2:");
console.log("Площадь:", circle2.getArea()); // Площадь круга с радиусом 10
console.log("Периметр:", circle2.getPerimeter()); // Периметр окружности с радиусом 10