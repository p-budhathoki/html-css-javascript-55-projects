// select navbar btn and attach event listener with click event

// add new class called change to navbar wrapper
document.querySelector(".navbar-btn").addEventListener("click", () => {
  document.querySelector(".navbar-wrapper").classList.toggle("change");
});
