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

/*const slider = () => {
    let slides = document.querySelectorAll('.work-item')
}*/

const masters = document.querySelector('.master-items');
const mastersLiArray = Array.from(document.querySelectorAll('.master-item'));

const findParent = (childElement, parentName) => {

    if (childElement.parentElement.tagName === parentName) {
        return childElement.parentElement;
    } else {
        while (childElement.parentElement.tagName !== parentName) {
            childElement = childElement.parentElement;
        }
        if (childElement.parentElement.tagName === parentName) {
            return childElement.parentElement;
        }

        return false;
    }
}

masters.addEventListener('click', (e) => {
    let elem = e.target;
    let answerFind = findParent(elem, 'LI');

    if (typeof answerFind === 'object') {
        elem = answerFind
        changeMasterCard(elem);
    } else if (!answerFind) {
        console.log('not found');
    }
})

const changeMasterCard = (elem) => {
    let cardBtn = elem.querySelector('.master-button-change');
    let masterDescriptions = elem.querySelector('.master-descriptions');
    let cardText = document.getElementById(elem.id + '-master');
    let text;
    if (null !== cardBtn.innerHTML &&  cardBtn.innerHTML === 'Закрыть') {
        elem.classList.remove('master-item-scale');
        cardBtn.innerHTML = 'Подробнее';
        text = cardText.innerHTML;
        cardText.innerHTML = masterDescriptions.innerHTML;
        masterDescriptions.innerHTML = text;
        mastersLiArray.map(master => {
            if (master.id !== elem.id) {
                master.classList.remove('hidden');
            }
        });
    } else {
        elem.classList.add('master-item-scale');
        text = masterDescriptions.innerHTML
        masterDescriptions.innerHTML = cardText.innerHTML;
        cardText.innerHTML = text;
        cardBtn.innerHTML = 'Закрыть';
        mastersLiArray.map(master => {
            if (master.id !== elem.id) {
                master.classList.add('hidden');
            }
        });
    }
}


const masterSlider = new Slider(mastersLiArray);
const btnArrRight = document.querySelector('.arrow-button-right');
const btnArrLeft = document.querySelector('.arrow-button-left');
btnArrRight.addEventListener('click', () => {
    masterSlider.moveRight();
})
btnArrLeft.addEventListener('click', () => {
    masterSlider.moveLeft();
})
masterSlider.makeHideOtherSlides('toEnd')
