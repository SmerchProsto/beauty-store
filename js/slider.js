class Slider {

    constructor(slides) {
        this.slides = slides;
        this.slideHead = null;
        this.slideBack = null;
        this.showSlideLength = 3;
    }
    makeHideOtherSlides = (hideDirection) => {
        if (hideDirection === 'toEnd') {
            this.slides.map((slide, index) => {
                if (index === 0) {
                    this.slideBack = index;
                }
                if (index === this.showSlideLength) {
                    this.slideHead = index;
                }
                if (index <= this.showSlideLength) {
                    slide.classList.remove('hidden')
                }
                if (index > this.showSlideLength) {
                    slide.classList.add('hidden');
                }
            })
        }   else if (hideDirection === 'toStart') {
            this.slideBack = this.slides.length - (this.showSlideLength + 1);
            this.slideHead = this.slides.length - 1;
            this.slides.map((slide, index) => {
                if (index < this.slideBack || index > this.slideHead) {
                    slide.classList.add('hidden');
                }   else {
                    slide.classList.remove('hidden');
                }
            })
        }
    }

    moveRight = () => {
        this.slideHead++;
        if (this.slideHead == this.slides.length) {
            this.makeHideOtherSlides('toEnd');
        } else {
            this.slides[this.slideHead].classList.remove('hidden');
            this.slides[this.slideBack].classList.add('hidden');
            this.slideBack++;
        }
    }

    moveLeft = () => {
        this.slideBack--;
        if (this.slideBack < 0) {
            this.makeHideOtherSlides('toStart');
        } else {
            this.slides[this.slideBack].classList.remove('hidden');
            this.slides[this.slideHead].classList.add('hidden');
            this.slideHead--;
        }
    }
}