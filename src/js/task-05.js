const nameOutputEl = document.querySelector("#name-output");
const nameInputEl = document.querySelector("#name-input");

window.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    if (nameOutputEl.textContent === "") {
      nameOutputEl.textContent = "Anonymous";
    }
  }
});

const inputNameKey = (event) => {
  nameOutputEl.textContent =
    nameOutputEl.textContent !== "" ? event.currentTarget.value : "Anonymous";
};

nameInputEl.addEventListener("input", inputNameKey);
