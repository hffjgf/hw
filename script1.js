function startGame1() {
    // Генерация случайного числа от 1 до 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    // Основная функция для проверки числа
    function checkGuess() {
        // Запрашиваем ввод числа у пользователя
        const userGuess = prompt("Угадайте число от 1 до 100:");

        // Если пользователь нажал "Отмена", завершаем игру
        if (userGuess === null) {
            alert("Игра завершена. Вы вышли из игры.");
            return; // Завершаем выполнение функции
        }

        // Преобразуем ввод в число
        const guessNumber = parseInt(userGuess);

        // Проверяем, является ли ввод числом
        if (isNaN(guessNumber)) {
            alert("Пожалуйста, введите число!");
            checkGuess(); // Повторяем запрос
            return;
        }

        attempts++; // Увеличиваем счетчик попыток

        // Сравниваем введенное число с загаданным
        if (guessNumber === randomNumber) {
            alert(`Поздравляем! Вы угадали число за ${attempts} попыток.`);
        } else if (guessNumber < randomNumber) {
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
