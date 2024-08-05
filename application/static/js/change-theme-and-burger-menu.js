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
        body.classList.toggle('dark-theme', theme === 'dark-theme');
        body.classList.toggle('light-theme', theme === 'light-theme');
        toggle.checked = theme === 'dark-theme';
        toggleIcon.src = theme === 'dark-theme' ? "/static/img/moon-icon.svg" : "/static/img/sun-icon.svg";
        toggleText.textContent = theme === 'dark-theme' ? 'NIGHTMODE' : 'DAYMODE';
        toggleText.classList.toggle('dark', theme === 'dark-theme');
        toggleText.classList.toggle('light', theme === 'light-theme');
        toggleLabel.classList.toggle('dark', theme === 'dark-theme');
        toggleLabel.classList.toggle('light', theme === 'light-theme');

        for (const icon of servicesIcons) {
            icon.classList.toggle('dark', theme === 'dark-theme');
            icon.classList.toggle('light', theme === 'light-theme');
        }
    };

    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme('light-theme');
    }

    toggle.addEventListener('change', function () {
        const theme = this.checked ? 'dark-theme' : 'light-theme';
        applyTheme(theme);
        localStorage.setItem('theme', theme);
    });
});
