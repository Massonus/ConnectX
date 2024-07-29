document.addEventListener("DOMContentLoaded", () => {
    const newsTrack = document.querySelector('.news-carousel-track');
    const newsItems = document.querySelectorAll('.news-carousel-item');
    const NEWS_ITEM_COUNT = newsItems.length;
    const TRANSLATE_PERCENT = 100;
    let newsCurrentIndex = 0;

    function updateNewsCarousel(newIndex) {
        if (newIndex < 0) {
            newsCurrentIndex = NEWS_ITEM_COUNT - 1;
        } else if (newIndex >= NEWS_ITEM_COUNT) {
            newsCurrentIndex = 0;
        } else {
            newsCurrentIndex = newIndex;
        }
        const newTransform = -newsCurrentIndex * TRANSLATE_PERCENT;
        newsTrack.style.transform = `translateX(${newTransform}%)`;
    }

    document.querySelector('#news-carousel-button-right').addEventListener('click', () => {
        updateNewsCarousel(newsCurrentIndex + 1);
    });

    document.querySelector('#news-carousel-button-left').addEventListener('click', () => {
        updateNewsCarousel(newsCurrentIndex - 1);
    });
});
