// select div containing class container, signup button
const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-bg button");

// once we click the button we create a new class container and in css we define the new style. on the second click we edit the class container to remove the old style.
// add event listeners to the signup button with a click event and a callback function which will be executed when we click the button

signUpBtn.addEventListener("click", () => {
    // add class to the container using classList which gives us all the class that the element has. toggle method allows us to add a new class to the container if it does not have it already or remove it from the container if it already has it 
    container.classList.toggle("change");
})