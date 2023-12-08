const buttonOpen = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
const navItems = document.querySelector('.nav-items');
const buttonSignUp = document.querySelector('.button-signup');

(function () {
    let toggle = document.querySelector('.nav-toggle');

    toggle.addEventListener('click', function(e) {
        this.classList.toggle('opened');
    });
})();

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

buttonOpen.addEventListener('click', changeMenu);

const masters = document.querySelector('.master-items');
const mastersLiArray = Array.from(document.querySelectorAll('.master-item'));
const commentsLiArray = Array.from(document.querySelectorAll('.comment-item'));
const worksLiArray = Array.from(document.querySelectorAll('.work-item'));
const galleryLiArray = Array.from(document.querySelectorAll('.gallery-item'));
const priceItemImgArray = Array.from(document.querySelectorAll('.price-item-img'));

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
    let master = document.querySelector('.master');
    let masterArrows = master.querySelector('.arrow-buttons');
    let masterDescriptions = elem.querySelector('.master-descriptions');
    let masterImgContainer = elem.querySelector('.master-img-container');
    let masterImgContainerSlider;
    let cardText = document.getElementById(elem.id + '-master');
    let cardImg = document.getElementById(elem.id + '-master-img');
    let cardImgArray = null;
    let text;
    let img;
    let masterImgTimer;
    if (null !== cardBtn.innerHTML &&  cardBtn.innerHTML === 'Закрыть') {
        elem.classList.remove('master-item-scale');
        cardBtn.innerHTML = 'Подробнее';
        text = cardText.innerHTML;
        img = cardImg.innerHTML;
        cardText.innerHTML = masterDescriptions.innerHTML;
        cardImg.innerHTML = masterImgContainer.innerHTML;
        masterDescriptions.innerHTML = text;
        masterImgContainer.innerHTML = img;
        masterImgContainerSlider = null;
        cardImgArray = null;
        clearInterval(masterImgTimer);
        mastersLiArray.map(master => {
            if (master.id !== elem.id) {
                master.classList.remove('hidden-elem');
            }
        });
        masterArrows.classList.toggle('hidden');
    } else {
        elem.classList.add('master-item-scale');
        text = masterDescriptions.innerHTML;
        img = masterImgContainer.innerHTML;
        masterDescriptions.innerHTML = cardText.innerHTML;
        masterImgContainer.innerHTML = cardImg.innerHTML;
        cardImgArray = Array.from(masterImgContainer.querySelectorAll('.master-img'))
        masterImgContainerSlider = new Slider(cardImgArray, 1);
        masterImgContainerSlider.makeHideOtherSlides(0,0);
        masterImgTimer = setInterval(() => {
            masterImgContainerSlider.moveRight(1);
        }, 2500);
        cardText.innerHTML = text;
        cardImg.innerHTML = img;
        cardBtn.innerHTML = 'Закрыть';
        mastersLiArray.map(master => {
            if (master.id !== elem.id) {
                master.classList.add('hidden-elem');
            }
        });
        masterArrows.classList.toggle('hidden');
    }
}

let priceImgSliders = [];
priceItemImgArray.map((item, index) => {
    priceImgSliders.push(new Slider(Array.from(item.querySelectorAll('.price-img')), 1));
    priceImgSliders[index].makeHideOtherSlides(0, 0);

    setInterval(() => {
        priceImgSliders[index].moveRight(1);
    }, 2500)
})

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


if (window.innerWidth >= 768) {
    const workSlider = new Slider(worksLiArray, 2);
    workSlider.arrowLeft = document.querySelector('.work .arrow-button-left');
    workSlider.arrowRight = document.querySelector('.work .arrow-button-right');
    workSlider.arrowRight.addEventListener('click', () => {
        workSlider.moveRight(2);
    });
    workSlider.arrowLeft.addEventListener('click', () => {
        workSlider.moveLeft(2);
    });
    workSlider.makeHideOtherSlides(0, 1);

    const gallerySlider = new Slider(galleryLiArray, 6);
    gallerySlider.makeHideOtherSlides(0,5);
} else if (window.innerWidth < 768) {
    navItems.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            changeMenu();
        }
    })
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
if (window.innerWidth >= 1024) {
    const priceItems = Array.from(document.querySelectorAll('.price-item'));
    const priceSlider = new Slider(priceItems, 1);
    priceSlider.setIds();
    let countElem = 0;
    let countColumn = 0;
    priceItems.map((elem, index) => {
        if (countColumn % 2 !== 0) {
            if (index >= 2 && index % 2 === 0) {
                elem.style.order = (index+1).toString();
            }   else if (index >= 2 && index % 2 !== 0) {
                elem.style.order = (index-1).toString();
            }
        }
        else {
            elem.style.order = index.toString();
        }
        countElem++;
        if (countElem % 2 === 0) {
            countColumn++;
        }
    })

    const masterSlider = new Slider(mastersLiArray, 4);
    masterSlider.arrowLeft = document.querySelector('.master .arrow-button-left');
    masterSlider.arrowRight = document.querySelector('.master .arrow-button-right');
    masterSlider.arrowRight.addEventListener('click', () => {
        masterSlider.moveRight(4);
    });
    masterSlider.arrowLeft.addEventListener('click', () => {
        masterSlider.moveLeft(4);
    });
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
}
