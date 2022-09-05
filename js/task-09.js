const buttonChangeColorEl = document.querySelector(".change-color");
const nameColorEl = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  nameColorEl.textContent = color;
}

buttonChangeColorEl.addEventListener("click", changeColor);
