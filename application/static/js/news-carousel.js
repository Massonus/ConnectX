document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const itemCount = items.length;
    let currentIndex = 0;

    function updateCarousel(newIndex) {
        if (newIndex < 0) {
            currentIndex = itemCount - 1;
        } else if (newIndex >= itemCount) {
            currentIndex = 0;
        } else {
            currentIndex = newIndex;
        }
        const newTransform = -currentIndex * 100;
        track.style.transform = `translateX(${newTransform}%)`;
    }

    function handleTransitionEnd() {
        if (currentIndex === itemCount) {
            track.style.transition = 'none';
            track.style.transform = `translateX(0)`;
            currentIndex = 0;
            setTimeout(() => track.style.transition = 'transform 0.5s ease-in-out', 50);
        } else if (currentIndex === -1) {
            track.style.transition = 'none';
            track.style.transform = `translateX(${-(itemCount - 1) * 100}%)`;
            currentIndex = itemCount - 1;
            setTimeout(() => track.style.transition = 'transform 0.5s ease-in-out', 50);
        }
    }

    track.addEventListener('transitionend', handleTransitionEnd);

    document.querySelector('.carousel-button--right').addEventListener('click', () => {
        updateCarousel(currentIndex + 1);
    });

    document.querySelector('.carousel-button--left').addEventListener('click', () => {
        updateCarousel(currentIndex - 1);
    });
});
