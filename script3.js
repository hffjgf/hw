//задачаперверни
// Функция для переворачивания текста
function reverseText(text) {
    return text.split("").reverse().join("");
  }
  
  // Функция для игры "Переверни текст"
  function playReverseGame() {
    // Запрашиваем у пользователя текст
    const userInput = prompt("Введите текст:");
  
    // Проверяем, что пользователь ввел текст
    if (userInput) {
      // Переворачиваем текст
      const reversedText = reverseText(userInput);
  
      // Выводим результат
      alert(`Перевернутый текст: ${reversedText}`);
    } else {
      // Если пользователь ничего не ввел
      alert("Вы не ввели текст!");
    }
  
  
  // Запускаем игру
  playReverseGame();
}
