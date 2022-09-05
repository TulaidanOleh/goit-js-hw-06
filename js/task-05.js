const nameOutputEl = document.querySelector("#name-output");
const nameInputEl = document.querySelector("#name-input");

const inputNameKey = (event) => {
  nameOutputEl.textContent =
    event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value;
};

nameInputEl.addEventListener("input", inputNameKey);
