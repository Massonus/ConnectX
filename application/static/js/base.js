document.getElementById('burger-menu').addEventListener('click', function () {
    this.classList.toggle('open');
    document.getElementById('header-links').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('toggle');
    const toggleIcon = document.getElementById('toggle-icon');
    const toggleText = document.getElementById('toggle-text');
    const servicesIcons = document.getElementsByClassName('services-icon');
    const toggleLabel = document.querySelector('.toggle-label');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');

    const applyTheme = (theme) => {
        if (theme === 'dark-theme') {
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
            toggle.checked = true;
            toggleIcon.src = "/static/img/moon-icon.svg";
            toggleText.textContent = 'NIGHTMODE';
            toggleText.style.color = 'white';
            toggleText.style.left = '5px';
            toggleText.style.right = 'auto';
            toggleLabel.style.background = 'black';

            for (const icon of servicesIcons) {
                icon.style.filter = 'invert(0%)';
            }
        } else {
            body.classList.add('light-theme');
            body.classList.remove('dark-theme');
            toggle.checked = false;
            toggleIcon.src = "/static/img/sun-icon.svg";
            toggleText.textContent = 'DAYMODE';
            toggleText.style.color = 'black';
            toggleText.style.right = '10px';
            toggleText.style.left = 'auto';
            toggleLabel.style.background = 'white';

            for (const icon of servicesIcons) {
                icon.style.filter = 'invert(100%)';
            }
        }
    };

    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme('light-theme');
    }

    toggle.addEventListener('change', function () {
        if (this.checked) {
            applyTheme('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        } else {
            applyTheme('light-theme');
            localStorage.setItem('theme', 'light-theme');
        }
    });
});
