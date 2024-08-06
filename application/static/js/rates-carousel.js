document.addEventListener("DOMContentLoaded", function () {
    const ratesCarousel = document.getElementById('rates-carousel');
    const ratesSlides = document.getElementsByClassName('slide');
    const ratesCarouselContainer = document.getElementById('rates-carousel-container');

    let moveOffset = ratesCarouselContainer.offsetWidth;
    const slideDuration = 500;
    const minWindowWidth = 768;
    const transitionNone = 'none';
    const transitionNormal = 'transform 0.5s';

    function updateWidths() {
        moveOffset = window.innerWidth <= minWindowWidth ? ratesCarouselContainer.offsetWidth : ratesCarouselContainer.offsetWidth / 3;

        for (const slide of ratesSlides) {
            slide.style.width = `${moveOffset}px`
        }

        ratesCarousel.style.width = `${ratesSlides.length * moveOffset}px`;
    }

    function moveSlide(direction) {
        if (direction === 1) {
            ratesCarousel.insertBefore(ratesCarousel.lastElementChild, ratesCarousel.firstElementChild);

            ratesCarousel.style.transition = transitionNone;
            ratesCarousel.style.transform = `translateX(-${moveOffset}px)`;

            setTimeout(() => {
                ratesCarousel.style.transition = transitionNormal;
                ratesCarousel.style.transform = 'translateX(0)';
            }, 20);
        } else {
            ratesCarousel.style.transition = transitionNormal;
            ratesCarousel.style.transform = `translateX(-${moveOffset}px)`;

            setTimeout(() => {
                ratesCarousel.appendChild(ratesCarousel.firstElementChild);

                ratesCarousel.style.transition = transitionNone;
                ratesCarousel.style.transform = 'translateX(0)';
            }, slideDuration);
        }
    }

    document.getElementById('rates-prev').addEventListener('click', () => moveSlide(1));
    document.getElementById('rates-next').addEventListener('click', () => moveSlide(-1));

    window.addEventListener('resize', updateWidths);

    updateWidths();
});
