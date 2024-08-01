document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById('carousel');
    const slides = document.getElementsByClassName('slide');
    const carouselContainer = document.getElementById('carousel-container');

    let moveOffset = carouselContainer.offsetWidth;
    const slideDuration = 500;
    const minWindowWidth = 768;
    const transitionNone = 'none';
    const transitionNormal = 'transform 0.5s';

    function updateWidths() {
        moveOffset = window.innerWidth <= minWindowWidth ? carouselContainer.offsetWidth : carouselContainer.offsetWidth / 3;

        for (const slide of slides) {
            slide.style.width = `${moveOffset}px`
        }

        carousel.style.width = `${slides.length * moveOffset}px`;
    }

    function moveSlide(direction) {
        if (direction === 1) {
            carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);

            carousel.style.transition = transitionNone;
            carousel.style.transform = `translateX(-${moveOffset}px)`;

            setTimeout(() => {
                carousel.style.transition = transitionNormal;
                carousel.style.transform = 'translateX(0)';
            }, 20);
        } else {
            carousel.style.transition = transitionNormal;
            carousel.style.transform = `translateX(-${moveOffset}px)`;

            setTimeout(() => {
                carousel.appendChild(carousel.firstElementChild);

                carousel.style.transition = transitionNone;
                carousel.style.transform = 'translateX(0)';
            }, slideDuration);
        }
    }

    document.getElementById('prev').addEventListener('click', () => moveSlide(1));
    document.getElementById('next').addEventListener('click', () => moveSlide(-1));

    window.addEventListener('resize', updateWidths);

    updateWidths();
});
