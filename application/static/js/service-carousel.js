document.addEventListener("DOMContentLoaded", function(event) {
    var carousel = document.getElementById('carousel');
    var slides = document.getElementsByClassName('slide');
    var amount = slides.length;
    var moveOffset = document.getElementById('carousel-container').offsetWidth;

    function updateWidths() {
        if (window.innerWidth <= 768) {
            moveOffset = document.getElementById('carousel-container').offsetWidth;
            for (var i = 0; i < amount; i++) {
                slides[i].style.width = moveOffset + 'px';
            }
        } else {
            moveOffset = document.getElementById('carousel-container').offsetWidth / 3;
            for (var i = 0; i < amount; i++) {
                slides[i].style.width = moveOffset + 'px';
            }
        }
        carousel.style.width = (amount * moveOffset) + 'px';
    }

    window.addEventListener('resize', updateWidths);

    updateWidths();

    document.getElementById('prev').addEventListener('click', prev, true);
    document.getElementById('next').addEventListener('click', next, true);

    function prev() {
        carousel.insertBefore(carousel.children[amount-1], carousel.children[0]);
        carousel.style.transition = 'none';
        carousel.style.transform = 'translateX(-' + moveOffset + 'px)';
        setTimeout(function() {
            carousel.style.transition = 'transform 0.5s';
            carousel.style.transform = 'translateX(0)';
        }, 20);
    }

    function next() {
        carousel.style.transition = 'transform 0.5s';
        carousel.style.transform = 'translateX(-' + moveOffset + 'px)';
        setTimeout(function() {
            carousel.appendChild(carousel.children[0]);
            carousel.style.transition = 'none';
            carousel.style.transform = 'translateX(0)';
        }, 500);
    }
});
