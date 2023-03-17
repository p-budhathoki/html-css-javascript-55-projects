// select hamburger menu and add event listener
document.querySelector(".hamburger-menu").addEventListener("click", () => {
  // create a new class change and add the change class on click using toggle method. toggle method adds the class to the container if it does not have it and removes the class if it does have change class.
  // classList gives all the elements the classes has
  document.querySelector(".container").classList.toggle("change");
});
