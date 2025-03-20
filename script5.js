 // Функция для получения случайного выбора компьютера
 function getComputerChoice() {
    const choices = ["камень", "ножницы", "бумага"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  // Функция для определения победителя
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Ничья!";
    }
  
    if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        return "Вы победили!";
    } else {
        return "Вы проиграли!";
    }
  }
  
  // Основная функция игры
  function playGame() {
    // Запрашиваем выбор пользователя
    const userChoice = prompt("Выберите: камень, ножницы или бумага").toLowerCase();
  
    // Проверяем, что пользователь ввел допустимое значение
    if (!["камень", "ножницы", "бумага"].includes(userChoice)) {
        alert("Пожалуйста, выберите камень, ножницы или бумага.");
        return;
    }
  
    // Получаем выбор компьютера
    const computerChoice = getComputerChoice();
  
    // Определяем победителя
    const result = determineWinner(userChoice, computerChoice);
  
    // Выводим результаты
    alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\nРезультат: ${result}`);
  }
  
 