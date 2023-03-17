// select card button and add click event listener, arrow function is executed when click event is registered
document.querySelector(".card-btn").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});
