const inputNumEl = document.querySelector("input");
const createBtnEl = document.querySelector(`[data-create]`);
const destroyBtnEl = document.querySelector(`[data-destroy]`);
const boxForElement = document.querySelector("#boxes");

inputNumEl.addEventListener("input", inputChange);
createBtnEl.addEventListener("click", createBoxes);
destroyBtnEl.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function inputChange() {
  if (inputNumEl.value < 1 || inputNumEl.value > 100) {
    alert("The number should be from 1 till 100");
    inputNumEl.value = "";
  } else {
    return inputNumEl.value;
  }
}

function createBoxes() {
  const elements = [];

  for (let i = 0; i < inputNumEl.value; i += 1) {
    const width = 30 + i * 10;
    const height = width;
    const color = getRandomHexColor();
    const el = `<div style="width:${width}px;height:${height}px;background-color:${color}"></div>`;
    elements.push(el);
  }

  const boxes = elements.join("");

  boxForElement.insertAdjacentHTML("beforeend", boxes);

  inputNumEl.value = "";
}

function destroyBoxes() {
  boxForElement.innerHTML = "";
}
