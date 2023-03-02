// get signup wrapper, login forms wrapper, signup button, register button, signup x button, login x button
const signupModal = document.querySelector(".signup-form-wrapper");
const loginModal = document.querySelector(".login-form-wrapper");
const signupBtn = document.querySelector(".signup-btn");
const loginButton = document.querySelector(".login-btn");
const signupX = document.querySelector(".signup-x");
const loginX = document.querySelector(".login-x");

// add event listener to signup button
signupBtn.addEventListener("click", () => {
  // show signup modal
  signupModal.classList.add("display");
});

// add event listener to login button
loginButton.addEventListener("click", () => {
  // show login modal
  loginModal.classList.add("display");
});

// add event listener to the signup x button
signupX.addEventListener("click", () => {
  // hide signup modal
  signupModal.classList.remove("display");
});

// add event listener to the login x button
loginX.addEventListener("click", () => {
  // hide login modal
  loginModal.classList.remove("display");
});
