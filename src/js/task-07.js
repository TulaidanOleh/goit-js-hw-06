const inputEl = document.querySelector("#font-size-control");
const TextSizeEl = document.querySelector("#text");

TextSizeEl.style.fontSize = `${inputEl.value}px`;

const InputChange = () => {
  TextSizeEl.style.fontSize = `${inputEl.value}px`;
};

inputEl.addEventListener("input", InputChange);
