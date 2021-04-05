// Счетчик состоит из спана и кнопок,
//которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится
//текущее значение счетчика.
// Создай функции increment и decrement для увеличения
//и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const currentValue = document.querySelector('#value');
const decrementButn = document.querySelector('[data-action="decrement"]');
const incrementButn = document.querySelector('[data-action="increment"]');

decrementButn.addEventListener('click', onDecrement);
incrementButn.addEventListener('click', onIncrement);

let counterValue = 0;

function onIncrement() {
    counterValue += 1;
    currentValue.innerHTML = counterValue;

}

function onDecrement() {
    counterValue -= 1;
    currentValue.innerHTML = counterValue;
}

console.log(currentValue);