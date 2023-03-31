// select hamburger menu and add event listener
document.querySelector('.hamburger-menu').addEventListener('click', () => {
    // use toggle method on nav-wrapper
    document.querySelector('.nav-wrapper').classList.toggle('change');
})