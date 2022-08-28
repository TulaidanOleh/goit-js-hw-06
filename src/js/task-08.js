const loginFormSubmitEl = document.querySelector(".login-form");

const user = {
  email: "",
  password: "",
};

const setOutput = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені !");
  } else {
    user.email = email.value;
    user.password = password.value;
    console.log(user.email, user.password);
    loginFormSubmitEl.reset();
  }
};

loginFormSubmitEl.addEventListener("submit", setOutput);
