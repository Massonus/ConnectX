document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById('testimonial-carousel');
    let slides = Array.from(carousel.children);
    const amount = slides.length;
    const carouselContainer = document.getElementById('testimonial-carousel-container');

    const SLIDE_DURATION = 500;
    const TRANSITION_NONE = 'none';
    const TRANSITION_NORMAL = `transform ${SLIDE_DURATION}ms`;

    let moveOffset = carouselContainer.offsetWidth;

    function updateWidths() {
        moveOffset = carouselContainer.offsetWidth;
        slides.forEach(slide => slide.style.width = `${moveOffset}px`);
        carousel.style.width = `${amount * moveOffset}px`;
    }

    function prev() {
        if (amount > 0) {
            carousel.insertBefore(slides[amount - 1], slides[0]);

            carousel.style.transition = TRANSITION_NONE;
            carousel.style.transform = `translateX(-${moveOffset}px)`;

            setTimeout(() => {
                carousel.style.transition = TRANSITION_NORMAL;
                carousel.style.transform = 'translateX(0)';
                slides = Array.from(carousel.children);
            }, 20);
        }
    }

    function next() {
        if (amount > 0) {
            carousel.style.transition = TRANSITION_NORMAL;
            carousel.style.transform = `translateX(-${moveOffset}px)`;

            setTimeout(() => {
                carousel.appendChild(slides[0]);
                carousel.style.transition = TRANSITION_NONE;
                carousel.style.transform = 'translateX(0)';

                slides = Array.from(carousel.children);
            }, SLIDE_DURATION);
        }
    }


    document.getElementById('testimonial-prev').addEventListener('click', prev);
    document.getElementById('testimonial-next').addEventListener('click', next);

    window.addEventListener('resize', updateWidths);

    updateWidths();
});
