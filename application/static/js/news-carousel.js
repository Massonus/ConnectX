document.addEventListener("DOMContentLoaded", () => {
    const newsTrack = document.querySelector('.news-carousel-track');
    const newsItems = document.querySelectorAll('.news-carousel-item');
    const newsItemCount = newsItems.length;
    let newsCurrentIndex = 0;

    function updateNewsCarousel(newIndex) {
        if (newIndex < 0) {
            newsCurrentIndex = newsItemCount - 1;
        } else if (newIndex >= newsItemCount) {
            newsCurrentIndex = 0;
        } else {
            newsCurrentIndex = newIndex;
        }
        const newTransform = -newsCurrentIndex * 100;
        newsTrack.style.transform = `translateX(${newTransform}%)`;
    }

    document.querySelector('#news-carousel-button-right').addEventListener('click', () => {
        updateNewsCarousel(newsCurrentIndex + 1);
    });

    document.querySelector('#news-carousel-button-left').addEventListener('click', () => {
        updateNewsCarousel(newsCurrentIndex - 1);
    });
});
