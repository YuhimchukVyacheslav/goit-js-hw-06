// const formRef = document.querySelector(".login-form");

// formRef.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   const {
//     elements: { email, password },
//   } = evt.currentTarget;
//   console.log(email.value, password.value);
// });

const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", (evt) => {
    evt.preventDefault();
      const {
    elements: { email, password },
  } = evt.currentTarget;
  console.log(email.value, password.value);
});
