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

/*if (window.innerWidth < 999) {
    /!*document.addEventListener("DOMContentLoaded", () => {
        changeMenu()
    })*!/
}*/

const changeMenu = () => {
    /*if (navItems.classList.contains('hidden')) {
        navItems.classList.remove('hidden');
    } else if (!navItems.classList.contains('hidden')) {
        navItems.classList.add('hidden');
    }*/
    navItems.classList.toggle("collapsed");
}

buttonOpen.addEventListener('click', changeMenu);

const masters = document.querySelector('.master-items');
const mastersLiArray = Array.from(document.querySelectorAll('.master-item'));
const commentsLiArray = Array.from(document.querySelectorAll('.comment-item'));
const worksLiArray = Array.from(document.querySelectorAll('.work-item'));
const gallery = document.querySelector('.gallery-items');
const galleryLiArray = Array.from(document.querySelectorAll('.gallery-item'));
const priceItemImgArray = Array.from(document.querySelectorAll('.price-item-img'));

const findParentByTag = (childElement, parentName) => {

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

const findParentByClass = (childElement, parentNameClass) => {

    if (childElement.parentElement.classList.contains(parentNameClass)) {
        return childElement.parentElement;
    } else {
        while (!childElement.parentElement.classList.contains(parentNameClass)) {
            childElement = childElement.parentElement;
        }
        if (childElement.parentElement.classList.contains(parentNameClass)) {
            return childElement.parentElement;
        }

        return false;
    }
}

masters.addEventListener('click', (e) => {
    let elem = e.target;
    let answerFind = findParentByTag(elem, 'LI');

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
        /*masterImgContainerSlider = new Slider(cardImgArray, 1);
        masterImgContainerSlider.makeHideOtherSlides(0,0);
        masterImgTimer = setInterval(() => {
            masterImgContainerSlider.moveRight(1);
        }, 2500);*/
        // Get the photos in the container
        const photos = masterImgContainer.querySelectorAll('img');

        // Calculate total animation time and add a CSS variable
        const totalAnimationTime = photos.length * 4; // Assuming 4 seconds per photo
        document.documentElement.style.setProperty('--total-animation-time-master', `${totalAnimationTime}s`);

        // Generate CSS for each photo in the container
        photos.forEach((photo, index) => {
            // Calculate and set animation delay
            photo.classList.toggle('master-slider');
            const animationDelay = totalAnimationTime - 4 * (index + 1);
            photo.style.animationDelay = `-${animationDelay}s`;
        });


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

/*let priceImgSliders = [];*/
/*priceItemImgArray.map((item, index) => {
    priceImgSliders.push(new Slider(Array.from(item.querySelectorAll('.price-img')), 1));
    priceImgSliders[index].makeHideOtherSlides(0, 0);

    setInterval(() => {
        priceImgSliders[index].moveRight(1);
    }, 2500)
})*/

// Get all containers
const containers = document.querySelectorAll('.price-item-img');

// Loop through each container
containers.forEach(container => {
    // Get the photos in the container
    const photos = container.querySelectorAll('.price-img');

    // Calculate total animation time and add a CSS variable
    const totalAnimationTime = photos.length * 4; // Assuming 4 seconds per photo
    document.documentElement.style.setProperty('--total-animation-time', `${totalAnimationTime}s`);

    // Generate CSS for each photo in the container
    photos.forEach((photo, index) => {
        // Calculate and set animation delay
        const animationDelay = totalAnimationTime - 4 * (index + 1);
        photo.style.animationDelay = `-${animationDelay}s`;
    });
});

const aboutWrapperMediaImg = document.querySelector('.wrapper-media-img');

const photosAbout = aboutWrapperMediaImg.querySelectorAll('.about-us-media');

// Calculate total animation time and add a CSS variable
const totalAnimationTime = photosAbout.length * 4; // Assuming 4 seconds per photo
document.documentElement.style.setProperty('--total-animation-time-about', `${totalAnimationTime}s`);

// Generate CSS for each photo in the container
photosAbout.forEach((photo, index) => {
    photo.classList.toggle('about-slider');
    // Calculate and set animation delay
    const animationDelay = totalAnimationTime - 4 * (index + 1);
    photo.style.animationDelay = `-${animationDelay}s`;
});



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

createOrDeleteArrows = (elem) => {
    const blockClassnameArrows = 'arrow-buttons';
    if (elem.classList.contains('gallery-item-scale')) {
        const srcRightArrow = 'img/arrow-right.png';
        const srcLeftArrow = 'img/arrow-left.png';
        let tagArrowButtons = document.createElement('div');
        tagArrowButtons.classList.add(blockClassnameArrows);

        let buttonArrowLeft = document.createElement('button');
        buttonArrowLeft.classList.add('arrow', 'arrow-button-left', elem.classList[0] + "-arrow");

        let arrowImgLeft = document.createElement('img');
        arrowImgLeft.src = srcLeftArrow;

        buttonArrowLeft.append(arrowImgLeft);

        let buttonArrowRight = document.createElement('button');
        buttonArrowRight.classList.add('arrow', 'arrow-button-right', elem.classList[0] + '-arrow');

        let arrowImgRight = arrowImgLeft.cloneNode(true)
        arrowImgRight.src = srcRightArrow;

        buttonArrowRight.append(arrowImgRight)

        tagArrowButtons.append(buttonArrowLeft);
        tagArrowButtons.append(buttonArrowRight);

        elem.append(tagArrowButtons);
    } else  {
        elem.querySelector('.' + blockClassnameArrows).remove();
    }

}

createOrDeleteChrist = (elem) => {
    const blockClassNameChrist = 'wrapper-christ-close'
    if (elem.classList.contains('gallery-item-scale')) {
        const srcImgChrist = 'img/christ.svg'
        let divChrist = document.createElement('div');
        divChrist.classList.add(blockClassNameChrist);

        let buttonChrist = document.createElement('button');
        buttonChrist.classList.add('christ-button', elem.classList[0] + '-christ');

        let imgChrist = document.createElement('img');
        imgChrist.src = srcImgChrist;

        buttonChrist.append(imgChrist);
        divChrist.append(buttonChrist);
        elem.append(divChrist);
    }   else {
        elem.querySelector('.' + blockClassNameChrist).remove();
    }
}

if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    /*const gallerySlider = new Slider(galleryLiArray, 1);
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
    gallerySlider.makeHideOtherSlides(0, 0);*/
    // Get all containers
    let containersGl = document.querySelectorAll('.gallery-item-items');
    // Loop through each container
    containersGl.forEach(container => {
        // Get the photos in the container
        const photos = container.querySelectorAll('.gallery-item-item');

        // Set a constant animation duration (e.g., 10 seconds per photo)
        const animationDuration = 12;

        // Calculate total animation time for all photos
        const totalAnimationTime = animationDuration * photos.length;

        // Generate CSS for each photo in the container
        photos.forEach((photo, index) => {
            // Calculate and set animation delay
            const animationDelay = (index + 1) * animationDuration / photos.length;
            photo.style.animation = `round ${animationDuration}s ${animationDelay}s infinite`;
        });
    });

    const gallerySlider = new Slider(Array.from(document.querySelectorAll('.gallery-item')), 1);
    gallerySlider.makeHideOtherSlides(0, 0);
    gallerySlider.arrowRight = document.querySelector('.gallery .arrow-button-right');
    gallerySlider.arrowLeft = document.querySelector('.gallery .arrow-button-left');
    gallerySlider.arrowRight.addEventListener('click', () => {
        gallerySlider.moveRight(1);
    });

    gallerySlider.arrowLeft.addEventListener('click', () => {
        gallerySlider.moveLeft(1);
    });


}


if (window.innerWidth >= 768) {
    const workSlider = new Slider(worksLiArray, 2);
    workSlider.arrowLeft = document.querySelector('.work .arrow-button-left');
    workSlider.arrowRight = document.querySelector('.work .arrow-button-right');
    workSlider.arrowRight.addEventListener('click', () => {
        workSlider.moveRight(2, true);
    });
    workSlider.arrowLeft.addEventListener('click', () => {
        workSlider.moveLeft(2, true);
    });
    workSlider.makeHideOtherSlides(0, 1);

    const commentSlider = new Slider(commentsLiArray, 2);
    commentSlider.arrowLeft = document.querySelector('.comment .arrow-button-left');
    commentSlider.arrowRight = document.querySelector('.comment .arrow-button-right');
    commentSlider.arrowRight.addEventListener('click', () => {
        commentSlider.moveRight(2, true);
    });
    commentSlider.arrowLeft.addEventListener('click', () => {
        commentSlider.moveLeft(2, true);
    });
    commentSlider.makeHideOtherSlides(0, 1);

}   else if (window.innerWidth < 768) {

    navItems.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            changeMenu();
        }
    })
    const workSlider = new Slider(worksLiArray, 1);
    elemsOfSlider = Array.from(document.querySelectorAll('.work .left-show-animation'))
    elemsOfSlider.map((elem) => {
        elem.classList.remove('left-show-animation');
    })
    workSlider.arrowLeft = document.querySelector('.work .arrow-button-left');
    workSlider.arrowRight = document.querySelector('.work .arrow-button-right');
    workSlider.arrowRight.addEventListener('click', () => {
        workSlider.moveRight(1, true);
    });
    workSlider.arrowLeft.addEventListener('click', () => {
        workSlider.moveLeft(1, true);
    });
    workSlider.makeHideOtherSlides(0, 0);

    const commentSlider = new Slider(commentsLiArray, 1);
    elemsOfSlider = Array.from(document.querySelectorAll('.comment .left-show-animation'))
    elemsOfSlider.map((elem) => {
        elem.classList.remove('left-show-animation');
    })
    commentSlider.arrowLeft = document.querySelector('.comment .arrow-button-left');
    commentSlider.arrowRight = document.querySelector('.comment .arrow-button-right');
    commentSlider.arrowRight.addEventListener('click', () => {
        commentSlider.moveRight(1, true);
    });
    commentSlider.arrowLeft.addEventListener('click', () => {
        commentSlider.moveLeft(1, true);
    });
    commentSlider.makeHideOtherSlides(0, 0);

    /*const commentSlider = new Slider(commentsLiArray, 1);
    let elemsOfSlider = Array.from(document.querySelectorAll('.comment .left-show-animation'))
    elemsOfSlider.map((elem) => {
        elem.classList.remove('left-show-animation');
    })
    commentSlider.arrowLeft = document.querySelector('.work .arrow-button-left');
    commentSlider.arrowRight = document.querySelector('.work .arrow-button-right');
    commentSlider.arrowRight.addEventListener('click', () => {
        workSlider.moveRight(1, true);
    });
    commentSlider.arrowLeft.addEventListener('click', () => {
        commentSlider.moveLeft(1, true);
    });
    commentSlider.makeHideOtherSlides(0, 0);*/

    /*const gallerySlider = new Slider(galleryLiArray, 1);
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
    gallerySlider.makeHideOtherSlides(0, 0);*/
    // Get all containers
/*    const containers = document.querySelectorAll('.gallery-item-items');

// Loop through each container
    containers.forEach(container => {
        // Get the photos in the container
        const photos = container.querySelectorAll('.gallery-item-item');

        // Calculate total animation time and add a CSS variable
        const totalAnimationTime = photos.length * 4; // Assuming 4 seconds per photo
        document.documentElement.style.setProperty('--total-animation-time-gallery', `${totalAnimationTime}s`);

        // Generate CSS for each photo in the container
        photos.forEach((photo, index) => {
            // Calculate and set animation delay
            const animationDelay = totalAnimationTime - 4 * (index + 1);
            photo.style.animationDelay = `-${animationDelay}s`;
        });
    });*/
    let containersGl = document.querySelectorAll('.gallery-item-items');
    // Loop through each container
    containersGl.forEach(container => {
        // Get the photos in the container
        const photos = container.querySelectorAll('.gallery-item-item');

        // Set a constant animation duration (e.g., 10 seconds per photo)
        const animationDuration = 12;

        // Calculate total animation time for all photos
        const totalAnimationTime = animationDuration * photos.length;

        // Generate CSS for each photo in the container
        photos.forEach((photo, index) => {
            // Calculate and set animation delay
            const animationDelay = (index + 1) * animationDuration / photos.length;
            photo.style.animation = `round ${animationDuration}s ${animationDelay}s infinite`;
        });
    });

    const gallerySlider = new Slider(Array.from(document.querySelectorAll('.gallery-item')), 1);
    gallerySlider.makeHideOtherSlides(0, 0);
    gallerySlider.arrowRight = document.querySelector('.gallery .arrow-button-right');
    gallerySlider.arrowLeft = document.querySelector('.gallery .arrow-button-left');
    gallerySlider.arrowRight.addEventListener('click', () => {
        gallerySlider.moveRight(1);
    });

    gallerySlider.arrowLeft.addEventListener('click', () => {
        gallerySlider.moveLeft(1);
    });

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

    const gallerySlider = new Slider(galleryLiArray, 8);
    gallerySlider.makeHideOtherSlides(0,7);

    /*Slider for gallery's li's elements */
    gallery.addEventListener('click', (e) => {
        let elem = e.target;
        let answerFind = findParentByClass(elem, 'gallery-item');

        if (typeof answerFind === 'object') {
            elem = answerFind;
            elem.classList.toggle('gallery-item-scale');
            document.querySelector('html').classList.toggle('overlay');
            createOrDeleteArrows(elem);
            createOrDeleteChrist(elem);
            let slidesInElem = Array.from(elem.querySelectorAll('.gallery-item-item'));
            let sliderInElem = new Slider(slidesInElem, 1);
            sliderInElem.makeHideOtherSlides(0,0);
            sliderInElem.arrowLeft = elem.querySelector('.arrow-button-left');
            sliderInElem.arrowRight = elem.querySelector('.arrow-button-right');
            sliderInElem.christ = elem.querySelector('.christ')

            if (elem.classList.contains('gallery-item-scale')) {
                sliderInElem.arrowLeft.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    sliderInElem.moveLeft(1);
                });
                sliderInElem.arrowRight.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    sliderInElem.moveRight(1);
                });
            }   else {
                slidesInElem = null;
                sliderInElem = null;
            }
        } else if (!answerFind) {
            console.log('not found');
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
