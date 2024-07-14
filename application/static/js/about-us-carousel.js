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

    document.querySelector('.carousel-button--right').addEventListener('click', () => {
        updateCarousel(currentIndex + 1);
    });

    document.querySelector('.carousel-button--left').addEventListener('click', () => {
        updateCarousel(currentIndex - 1);
    });
});
