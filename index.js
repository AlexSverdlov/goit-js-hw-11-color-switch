const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

//Получаем ссылки на кнопки
const refs = {
  startButton: document.querySelector('button[data-action=start]'),
  stopButton: document.querySelector('button[data-action=stop]'),
};

// Функция генерации случайного числа
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//Функции обработки
let intervalId = null;
function startShowMustGoOn() {
  intervalId = setInterval(
    () =>
      (document.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)]),
    1000,
  );
  refs.startButton.disabled = true;
}

function stopShowMustGoOn() {
  clearInterval(intervalId);
  refs.startButton.disabled = false;
}

// Слушатели событий
refs.startButton.addEventListener('click', startShowMustGoOn);
refs.stopButton.addEventListener('click', stopShowMustGoOn);
