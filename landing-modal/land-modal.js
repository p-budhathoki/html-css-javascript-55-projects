// get signup wrapper, login forms wrapper, signup button, register button, signup x button, login x button, form container
const signupModal = document.querySelector(".signup-form-wrapper");
const loginModal = document.querySelector(".login-form-wrapper");
const signupBtn = document.querySelector(".signup-btn");
const loginButton = document.querySelector(".login-btn");
const signupX = document.querySelector(".signup-x");
const loginX = document.querySelector(".login-x");
const formContainer = document.querySelector(".form-container");

// add event listener to signup button
signupBtn.addEventListener("click", () => {
  // show signup modal
  signupModal.classList.add("display");
  // disable the form so that nothing else can be clicked
  formContainer.classList.add("disable");
});

// add event listener to login button
loginButton.addEventListener("click", () => {
  // show login modal
  loginModal.classList.add("display");
  // disable the form so that nothing else can be clicked
  formContainer.classList.add("disable");
});

// add event listener to the signup x button
signupX.addEventListener("click", () => {
  // hide signup modal
  signupModal.classList.remove("display");
  // disable the form so that nothing else can be clicked
  formContainer.classList.remove("disable");
});

// add event listener to the login x button
loginX.addEventListener("click", () => {
  // hide login modal
  loginModal.classList.remove("display");
  // disable the form so that nothing else can be clicked
  formContainer.classList.remove("disable");
});
