  // Массив вопросов и правильных ответов
  const quiz = [
    {
      question: "Где живет джин?",
      options: ["1. В доме", "2. В лампе", "3. У друзей "],
      correctAnswer: 2 // номер правильного ответа
    },
    {
      question: "Когда солнце опускается - это?",
      options: ["1.Закат", "2. Ночь", "3.Рассвет"],
      correctAnswer: 1
    },
    {
      question: "Какое название у мультика, где белка пыталась достать орех из льда?",
      options: ["1. Морозка", "2. Холодное сердце", "3. Ледниковый период"],
      correctAnswer: 3
    },
    {
        question: "В каком мультике была принцесса Жасмин?",
        options: ["1. Алладин", "2. Золушка", "3. Белоснежка"],
        correctAnswer: 1
      }
  ];
  
  // Функция для запуска викторины
  function startQuiz() {
    let correctAnswers = 0; // Счетчик правильных ответов
  
    // Перебираем каждый вопрос в массиве
    quiz.forEach((question, index) => {
      // Формируем текст вопроса с вариантами ответов
      const questionText = `Вопрос ${index + 1}: ${question.question}\n${question.options.join("\n")}`;
  
      // Запрашиваем ответ у пользователя
      const userAnswer = parseInt(prompt(questionText));
  
      // Проверяем, правильный ли ответ
      if (userAnswer === question.correctAnswer) {
        correctAnswers++; // Увеличиваем счетчик правильных ответов
      }
    });
  
    // Выводим результат
    alert(`Вы ответили правильно на ${correctAnswers} из ${quiz.length} вопросов!`);
  
  
  // Запускаем викторину
 
}