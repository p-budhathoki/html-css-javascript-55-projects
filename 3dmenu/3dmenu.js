// select the center-item, menu
const centerItem = document.querySelector(".center-item");
const menu = document.querySelector(".menu");

// once we hover over the item, then the rest of the item should display and also we should be able to hover until the mouse leaves the menu

// attach the event listener to the center-item
centerItem.addEventListener("mouseover", () => {
    // create a new class
    menu.classList.add("change");
    // use the class .change to display the items

});

// hide the item back
menu.addEventListener("mouseleave", () => {
    menu.classList.remove("change");
})
