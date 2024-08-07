document.addEventListener("DOMContentLoaded", function() {
    const leftElements = document.querySelectorAll('.fade-in-left');
    const rightElements = document.querySelectorAll('.fade-in-right');
    const repairImage = document.querySelector('.repair-services-image');

    function initAnimations() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('fade-in-left')) {
                        entry.target.classList.add('animate-left');
                    } else if (entry.target.classList.contains('fade-in-right')) {
                        entry.target.classList.add('animate-right');
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -10% 0px'
        });

        leftElements.forEach(element => {
            observer.observe(element);
        });

        rightElements.forEach(element => {
            observer.observe(element);
        });

        document.documentElement.style.overflowX = 'hidden';
    }

    if (repairImage.complete) {
        initAnimations();
    } else {
        repairImage.addEventListener('load', initAnimations);
    }
});
