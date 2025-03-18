//задача угадай число 
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