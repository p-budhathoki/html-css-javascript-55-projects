// select container and the toggle button
const container = document.querySelector(".container");
const toggle = document.querySelector(".toggle");

// once we click the toggle button we add the class dark to the container, we define the class dark in css for the elements using that class.

// add event listener to toggle button with click event
toggle.addEventListener("click", (params) => {
  // classList gives all the classes that the element has
  // the toggle method allows us to add a class to the element if it doesn't have it and removes the class if it does have it
  // container.classList.toggle("dark");

  // if the condition is true we have icon of moon and if false the icon  of moon is added to the toggle button

  container.classList.toggle("dark")
    ? (toggle.firstElementChild.className = "far fa-moon")
    : (toggle.firstElementChild.className = "far fa-sun");
});
