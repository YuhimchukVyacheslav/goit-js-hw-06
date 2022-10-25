const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const {
    elements: { email, password },
  } = evt.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені");
  }
  console.log(email.value, password.value);
});
