// select container, color-1 and color-2
const container = document.querySelector(".container");
const color1 = document.querySelector(".color-1");
const color2 = document.querySelector(".color-2");
// add a new class to the container when we click. then using that newly added class we will define this task and suggest that should be applied to the card on click

// add click event listener to color-2 which is red color which will execute the anonymous function when the color is clicked

color2.addEventListener("click", () => {
  // classLists lists all the classes in the container. we add new class change to the container
  container.classList.add("change");
});

color1.addEventListener("click", () => {
  // classLists lists all the classes in the container. we add new class change to the container
  container.classList.remove("change");
});
