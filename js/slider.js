class Slider {

    constructor(slides, countShowSlides) {
        this.slides = slides;
        this.slideHead = countShowSlides - 1;
        this.slideBack = 0;
    }

    showAllSlides = () => {
        this.slides.map((slide) => {
            if (slide.classList.contains('hidden')) {
                slide.classList.remove('hidden');
            }
        })
    }

    makeHideOtherSlides = (start, end) => {
        let i = 0;

        if (start < end) {
            while (i < this.slides.length) {
                if (i < start || i > end) {
                    this.slides[i].classList.add('hidden');
                } else {
                    this.slides[i].classList.remove('hidden');
                }
                i++
            }
        }   else {
            i = 0;

            while (i < start) {
                this.slides[i].classList.add('hidden');
                i++;
            }

            i = 0;
            while (i <= end) {
                this.slides[i].classList.remove('hidden')
                i++;
            }
        }
    }

    moveRight = (step) => {
        this.slideHead += step;
        this.slideBack += step;
        if (this.slideHead >= this.slides.length) {
            this.showAllSlides();
            this.slideHead = Math.abs(this.slideHead - (this.slides.length));
        }
        if (this.slideBack >= this.slides.length) {
            this.showAllSlides();
            this.slideBack = Math.abs(this.slideBack - (this.slides.length));
        }
        this.makeHideOtherSlides(this.slideBack, this.slideHead);
    }

    moveLeft = (step) => {
        this.slideBack -= step;
        this.slideHead -= step
        if (this.slideBack < 0) {
            this.showAllSlides();
            this.slideBack = this.slides.length - Math.abs(this.slideBack);
        }
        if (this.slideHead < 0) {
            this.showAllSlides();
            this.slideHead = this.slides.length - Math.abs(this.slideHead);
        }
        this.makeHideOtherSlides(this.slideBack, this.slideHead);

    }
}