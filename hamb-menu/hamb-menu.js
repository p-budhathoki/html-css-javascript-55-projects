// select button and add event listeners
document.querySelector(".hamburger-menu").addEventListener("click", () => {
    console.log("clicked");
  // select nav element which has navigation class
  // toggle method allows us to add and remove class name. we attach the toggle method to the classList property which stores all the classes that belong to the nav element. We add change class to the toggle method
  document.querySelector(".navigation").classList.toggle("change");
});
