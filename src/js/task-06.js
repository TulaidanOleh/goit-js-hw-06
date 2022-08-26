const inputEl = document.querySelector("#validation-input");

const ValidOrInvalid = () => {
  inputEl.value.length === Number(inputEl.getAttribute("data-length"))
    ? addValidOrInvalid(true)
    : addValidOrInvalid(false);
};

const addValidOrInvalid = (isValid) => {
  if (isValid === true) {
    if (
      !inputEl.hasAttribute("class") ||
      !inputEl.classList.contains("invalid")
    ) {
      inputEl.classList.add("valid");
    } else {
      inputEl.classList.replace("invalid", "valid");
    }
  } else {
    if (
      !inputEl.hasAttribute("class") ||
      !inputEl.classList.contains("valid")
    ) {
      inputEl.classList.add("invalid");
    } else {
      inputEl.classList.replace("valid", "invalid");
    }
  }
};

inputEl.addEventListener("blur", ValidOrInvalid);
