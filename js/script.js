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

const masters = document.querySelector('.master-items');
const mastersLiArray = Array.from(document.querySelectorAll('.master-item'));
const commentsLiArray = Array.from(document.querySelectorAll('.comment-item'));
const worksLiArray = Array.from(document.querySelectorAll('.work-item'));
const galleryLiArray = Array.from(document.querySelectorAll('.gallery-item'));

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
                master.classList.remove('hidden-elem');
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
                master.classList.add('hidden-elem');
            }
        });
    }
}


if (window.innerWidth >= 768) {
    const masterSlider = new Slider(mastersLiArray, 4);
    masterSlider.arrowLeft = document.querySelector('.arrow-button-left');
    masterSlider.arrowRight = document.querySelector('.arrow-button-right');
    masterSlider.arrowRight.addEventListener('click', () => {
        masterSlider.moveRight(4);
    })
    masterSlider.arrowLeft.addEventListener('click', () => {
        masterSlider.moveLeft(4);
    })
    masterSlider.makeHideOtherSlides(0, 3);

    const commentSlider = new Slider(commentsLiArray, 2);
    commentSlider.arrowLeft = document.querySelector('.comment .arrow-button-left');
    commentSlider.arrowRight = document.querySelector('.comment .arrow-button-right');
    commentSlider.arrowRight.addEventListener('click', () => {
        commentSlider.moveRight(2);
    });
    commentSlider.arrowLeft.addEventListener('click', () => {
        commentSlider.moveLeft(2);
    });
    commentSlider.makeHideOtherSlides(0, 1);

} else if (window.innerWidth < 768) {

    const masterSlider = new Slider(mastersLiArray, 1);
    masterSlider.arrowLeft = document.querySelector('.master .arrow-button-left');
    masterSlider.arrowRight = document.querySelector('.master .arrow-button-right');
    masterSlider.arrowRight.addEventListener('click', () => {
        masterSlider.moveRight(1);
    });
    masterSlider.arrowLeft.addEventListener('click', () => {
        masterSlider.moveLeft(1);
    });
    masterSlider.makeHideOtherSlides(0, 0);

    const commentSlider = new Slider(commentsLiArray, 1);
    commentSlider.arrowLeft = document.querySelector('.comment .arrow-button-left');
    commentSlider.arrowRight = document.querySelector('.comment .arrow-button-right');
    commentSlider.arrowRight.addEventListener('click', () => {
        commentSlider.moveRight(1);
    });
    commentSlider.arrowLeft.addEventListener('click', () => {
        commentSlider.moveLeft(1);
    });
    commentSlider.makeHideOtherSlides(0, 0);

    const workSlider = new Slider(worksLiArray, 1);
    workSlider.arrowLeft = document.querySelector('.work .arrow-button-left');
    workSlider.arrowRight = document.querySelector('.work .arrow-button-right');
    workSlider.arrowRight.addEventListener('click', () => {
        workSlider.moveRight(1);
    });
    workSlider.arrowLeft.addEventListener('click', () => {
        workSlider.moveLeft(1);
    });
    workSlider.makeHideOtherSlides(0, 0);

    const gallerySlider = new Slider(galleryLiArray, 1);
    let galleryItemSlider = new Slider(Array.from(gallerySlider.getSlide().querySelectorAll('.gallery-item-item')), 1);
    galleryItemSlider.makeHideOtherSlides(0,0);
    let galleryItemSliderTimer = setInterval(() => {
        galleryItemSlider.moveRight(1)
    }, 2500)
    gallerySlider.setIds();

    gallerySlider.arrowLeft = document.querySelector('.gallery .arrow-button-left');
    gallerySlider.arrowRight = document.querySelector('.gallery .arrow-button-right');
    gallerySlider.arrowRight.addEventListener('click', () => {
        gallerySlider.moveRight(1);
        clearInterval(galleryItemSliderTimer);
        galleryItemSlider = new Slider(Array.from(gallerySlider.getSlide().querySelectorAll('.gallery-item-item')), 1);
        galleryItemSlider.makeHideOtherSlides(0,0);
        galleryItemSliderTimer = setInterval(() => {
            galleryItemSlider.moveRight(1)
        }, 2500);
    });
    gallerySlider.arrowLeft.addEventListener('click', () => {
        gallerySlider.moveLeft(1);
    });
    gallerySlider.makeHideOtherSlides(0, 0);
}
