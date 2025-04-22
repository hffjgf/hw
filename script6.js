function changeBackground() {
   
  
    // Изменяем каждый канал на случайное значение
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
  
    // Устанавливаем новый цвет фона
    document.getElementById(
      "igra6"
    ).style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }