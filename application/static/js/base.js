document.getElementById('burger-menu').addEventListener('click', function () {
        this.classList.toggle('open');
        document.getElementById('header-links').classList.toggle('active');
    });

    document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('toggle');
    const toggleIcon = document.getElementById('toggle-icon');
    const toggleText = document.getElementById('toggle-text');
    const toggleLabel = document.querySelector('.toggle-label')

    toggle.addEventListener('change', function () {
        if (this.checked) {
            toggleIcon.src = "/static/img/moon-icon.svg";
            toggleText.textContent = 'NIGHTMODE';
            toggleText.style.color = 'white'
            toggleText.style.left = '5px';
            toggleText.style.right = 'auto';
            toggleLabel.style.background = 'black';
        } else {
            toggleIcon.src = "/static/img/sun-icon.svg";
            toggleText.textContent = 'DAYMODE';
            toggleText.style.color = 'black'
            toggleText.style.right = '10px';
            toggleText.style.left = 'auto';
            toggleLabel.style.background = 'white';
        }
    });
});