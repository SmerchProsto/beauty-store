const buttonOpen = document.querySelector('.main-nav-btn');
const nav = document.querySelector('.main-nav');
const navItems = document.querySelector('.nav-items');
const buttonSignUp = document.querySelector('.button-signup');

document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth <= 999) {
        changeMenu()
    }
})
const changeMenu = () => {
    if (navItems.classList.contains('hidden')) {
        navItems.classList.remove('hidden');
    } else if (!navItems.classList.contains('hidden')) {
        navItems.classList.add('hidden');
    }
}

console.log(window.innerWidth);

buttonOpen.addEventListener('click', changeMenu);
navItems.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        changeMenu();
    }
})

const slider = () => {
    let slides = document.querySelectorAll('.work-item')

}

