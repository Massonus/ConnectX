document.addEventListener("DOMContentLoaded", function (event) {
    let carousel = document.getElementById('carousel');
    let slides = document.getElementsByClassName('slide');
    let moveOffset = document.getElementById('carousel-container').offsetWidth;

    function updateWidths() {
        if (window.innerWidth <= 768) {
            moveOffset = document.getElementById('carousel-container').offsetWidth;
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.width = moveOffset + 'px';
            }
        } else {
            moveOffset = document.getElementById('carousel-container').offsetWidth / 3;
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.width = moveOffset + 'px';
            }
        }
        carousel.style.width = (slides.length * moveOffset) + 'px';
    }

    window.addEventListener('resize', updateWidths);

    updateWidths();

    document.getElementById('prev').addEventListener('click', prev, true);
    document.getElementById('next').addEventListener('click', next, true);

    function prev() {
        if (carousel.children.length > 0) {
            carousel.insertBefore(carousel.children[carousel.children.length - 1], carousel.children[0]);
            carousel.style.transition = 'none';
            carousel.style.transform = 'translateX(-' + moveOffset + 'px)';
            setTimeout(function () {
                carousel.style.transition = 'transform 0.5s';
                carousel.style.transform = 'translateX(0)';
            }, 20);
        }
    }

    function next() {
        if (carousel.children.length > 0) {
            carousel.style.transition = 'transform 0.5s';
            carousel.style.transform = 'translateX(-' + moveOffset + 'px)';
            setTimeout(function () {
                if (carousel.children.length > 0) {
                    carousel.appendChild(carousel.children[0]);
                    carousel.style.transition = 'none';
                    carousel.style.transform = 'translateX(0)';
                }
            }, 500);
        }
    }
});
