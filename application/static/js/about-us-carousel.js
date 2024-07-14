$(document).ready(function () {
    const track = $('.carousel-track');
    const items = $('.carousel-item');
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
        track.css('transform', `translateX(${newTransform}%)`);
    }

    $('.carousel-button--right').click(function () {
        updateCarousel(currentIndex + 1);
    });

    $('.carousel-button--left').click(function () {
        updateCarousel(currentIndex - 1);
    });
});
