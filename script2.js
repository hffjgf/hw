// Основная функция игры
function playGame1() {
    // Функция для генерации случайного числа в диапазоне [min, max]
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Функция для генерации случайной задачи
    function generateTask() {
        const operations = ['+', '-', '*', '/']; // Возможные операции
        const operation = operations[getRandomNumber(0, operations.length - 1)]; // Случайная операция

        let num1, num2;

        if (operation === '/') {
            // Для деления генерируем числа так, чтобы результат был целым
            num2 = getRandomNumber(1, 10); // Делитель от 1 до 10
            num1 = num2 * getRandomNumber(1, 10); // Умножаем, чтобы результат был целым
        } else {
            num1 = getRandomNumber(1, 100); // Первое число от 1 до 100
            num2 = getRandomNumber(1, 100); // Второе число от 1 до 100
        }

        const task = `${num1} ${operation} ${num2}`; // Формируем задачу
        const answer = calculateAnswer(num1, operation, num2); // Вычисляем правильный ответ

        return { task, answer };
    }

    // Функция для вычисления правильного ответа
    function calculateAnswer(num1, operation, num2) {
        switch (operation) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                return NaN;
        }
    }

    // Генерация задачи и запрос ответа
    const { task, answer } = generateTask(); // Генерируем задачу
    const userAnswer = prompt(`Решите задачу: ${task}`); // Запрашиваем ответ

    if (userAnswer === null || userAnswer === '') {
        alert('Игра отменена');
        return;
    }

    const userNumber = parseFloat(userAnswer);

    if (isNaN(userNumber)) {
        alert('Введите корректное число.');
    } else if (userNumber === answer) {
        alert('Верный ответ!');
    } else {
        alert(`Ошибка! Верный ответ: ${answer}`);
    }
}
