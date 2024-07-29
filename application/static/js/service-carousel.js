document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById('carousel');
    const slides = document.getElementsByClassName('slide');
    const carouselContainer = document.getElementById('carousel-container');

    let moveOffset = carouselContainer.offsetWidth;
    const SLIDE_DURATION = 500;
    const MIN_WINDOW_WIDTH = 768;
    const TRANSITION_NONE = 'none';
    const TRANSITION_NORMAL = 'transform 0.5s';

    function updateWidths() {
        moveOffset = window.innerWidth <= MIN_WINDOW_WIDTH ? carouselContainer.offsetWidth : carouselContainer.offsetWidth / 3;

        for (const slide of slides) {
            slide.style.width = `${moveOffset}px`
        }

        carousel.style.width = `${slides.length * moveOffset}px`;
    }

    function moveSlide(direction) {
        if (direction === 1) {
            carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);

            carousel.style.transition = TRANSITION_NONE;
            carousel.style.transform = `translateX(-${moveOffset}px)`;

            setTimeout(() => {
                carousel.style.transition = TRANSITION_NORMAL;
                carousel.style.transform = 'translateX(0)';
            }, 20);
        } else {
            carousel.style.transition = TRANSITION_NORMAL;
            carousel.style.transform = `translateX(-${moveOffset}px)`;

            setTimeout(() => {
                carousel.appendChild(carousel.firstElementChild);

                carousel.style.transition = TRANSITION_NONE;
                carousel.style.transform = 'translateX(0)';
            }, SLIDE_DURATION);
        }
    }

    document.getElementById('prev').addEventListener('click', () => moveSlide(1));
    document.getElementById('next').addEventListener('click', () => moveSlide(-1));

    window.addEventListener('resize', updateWidths);

    updateWidths();
});
