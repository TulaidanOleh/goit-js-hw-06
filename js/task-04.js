let counterValue = 0;

const valueEl = document.querySelector("#value");

const clickDecrementEl = () => {
  valueEl.textContent = counterValue -= 1;
};

const clickIncrementEl = () => {
  valueEl.textContent = counterValue += 1;
};

const buttonDecrementEl = document.querySelector(`[data-action="decrement"]`);
buttonDecrementEl.addEventListener("click", clickDecrementEl);

const buttonIncrementEl = document.querySelector(`[data-action="increment"]`);
buttonIncrementEl.addEventListener("click", clickIncrementEl);
