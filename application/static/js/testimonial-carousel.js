document.addEventListener("DOMContentLoaded", function (event) {
    var carousel = document.getElementById('testimonial-carousel');
    var slides = carousel.children; // Отримуємо дітей безпосередньо з каруселі
    var amount = slides.length;
    var moveOffset = document.getElementById('testimonial-carousel-container').offsetWidth;

    function updateWidths() {
        moveOffset = document.getElementById('testimonial-carousel-container').offsetWidth;
        for (var i = 0; i < amount; i++) {
            slides[i].style.width = moveOffset + 'px';
        }
        carousel.style.width = (amount * moveOffset) + 'px';
    }

    window.addEventListener('resize', updateWidths);

    updateWidths();

    document.getElementById('testimonial-prev').addEventListener('click', prev, true);
    document.getElementById('testimonial-next').addEventListener('click', next, true);

    function prev() {
        if (amount > 0) {
            carousel.insertBefore(slides[amount - 1], slides[0]);
            carousel.style.transition = 'none';
            carousel.style.transform = 'translateX(-' + moveOffset + 'px)';
            setTimeout(function () {
                carousel.style.transition = 'transform 0.5s';
                carousel.style.transform = 'translateX(0)';
            }, 20);
        }
    }

    function next() {
        if (amount > 0) {
            carousel.style.transition = 'transform 0.5s';
            carousel.style.transform = 'translateX(-' + moveOffset + 'px)';
            setTimeout(function () {
                carousel.appendChild(slides[0]);
                carousel.style.transition = 'none';
                carousel.style.transform = 'translateX(0)';
            }, 500);
        }
    }
});
