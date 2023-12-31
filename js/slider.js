class Slider {

    constructor(slides, countShowSlides) {
        this.slides = slides;
        this.slideHead = countShowSlides - 1;
        this.slideBack = 0;
        this._arrowLeft = null;
        this._arrowRight = null;
        this._christ = null;
        this._id = this.slideHead;
        this._prevDirection = 'null';
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

        if (start === end) {
            this.slides.map((slide, index) => {
                if (index !== start) {
                    slide.classList.add('hidden');
                } else {
                    slide.classList.remove('hidden');
                }
            })
        } else if (start < end) {
            while (i < this.slides.length) {
                if (i < start || i > end) {
                    this.slides[i].classList.add('hidden');
                } else {
                    this.slides[i].classList.remove('hidden');
                }
                i++
            }
        } else if (start > end) {
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

    moveSlides = (start, end, direction) => {
        let nameDirection;

        if (direction === 'left') {
            nameDirection = 'left-show-animation';
        } else {
            nameDirection = 'right-show-animation';
        }
        let i = 0;

        if (start === end) {
            this.slides.map((slide, index) => {
                if (index !== start) {
                    slide.classList.remove(this._prevDirection)
                    slide.classList.toggle(nameDirection)
                    slide.classList.add('hidden');
                } else {
                    slide.classList.remove(this._prevDirection)
                    slide.classList.toggle(nameDirection);
                    slide.classList.remove('hidden');
                }
            })
        } else if (start < end) {
            while (i < this.slides.length) {
                if (i < start || i > end) {
                    this.slides[i].classList.remove(this._prevDirection)
                    this.slides[i].classList.toggle(nameDirection);
                    this.slides[i].classList.add('hidden');
                } else {
                    this.slides[i].classList.remove(this._prevDirection)
                    this.slides[i].classList.toggle(nameDirection);
                    this.slides[i].classList.remove('hidden');
                }
                i++
            }
        } else if (start > end) {
            i = 0;

            while (i < start) {
                this.slides[i].classList.remove(this._prevDirection)
                this.slides[i].classList.toggle(nameDirection);
                this.slides[i].classList.add('hidden');
                i++;
            }

            i = 0;
            while (i <= end) {
                this.slides[i].classList.remove(this._prevDirection)
                this.slides[i].classList.toggle(nameDirection);
                this.slides[i].classList.remove('hidden')
                i++;
            }
        }
        this._prevDirection = nameDirection;
    }

    moveRight = (step, carousel = false) => {
        this.slideHead += step;
        this._id += step;
        this.slideBack += step;
        if (this.slideHead >= this.slides.length) {
            this.showAllSlides();
            this.slideHead = Math.abs(this.slideHead - (this.slides.length));
            this._id = this.slideHead;
        }
        if (this.slideBack >= this.slides.length) {
            this.showAllSlides();
            this.slideBack = Math.abs(this.slideBack - (this.slides.length));
        }
        if (carousel) {
            this.moveSlides(this.slideBack, this.slideHead, 'left');
        }   else {
            this.makeHideOtherSlides(this.slideBack, this.slideHead);
        }

    }

    moveLeft = (step, carousel = false) => {
        this.slideBack -= step;
        this.slideHead -= step
        this._id -= step;

        if (this.slideBack < 0) {
            this.showAllSlides();
            this.slideBack = this.slides.length - Math.abs(this.slideBack);
        }
        if (this.slideHead < 0) {
            this.showAllSlides();
            this.slideHead = this.slides.length - Math.abs(this.slideHead);
            this._id = this.slideHead;
        }
        if (carousel) {
            this.moveSlides(this.slideBack, this.slideHead, 'right');
        }   else {
            this.makeHideOtherSlides(this.slideBack, this.slideHead);
        }
    }


    setIds = () => {
        this.slides.map((slide, index) => {
            slide.setAttribute('id', slide.classList[0] + index);
        })
    }

    get getId() {
        return this._id;
    }

    getSlide = () => {
        return this.slides[this._id]
    }

    get arrowLeft() {
        return this._arrowLeft;
    }
    get arrowRight() {
        return this._arrowRight;
    }

    set arrowLeft(arrow) {
        this._arrowLeft = arrow;
    }
    set arrowRight(arrow) {
        this._arrowRight = arrow;
    }

    get christ() {
        return this._christ;
    }
    set christ(christ) {
        this._christ = christ;
    }
}