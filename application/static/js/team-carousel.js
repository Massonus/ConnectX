document.addEventListener("DOMContentLoaded", () => {
    const teamTrack = document.querySelector('.team-carousel-track');
    const teamItems = document.querySelectorAll('.team-carousel-item');
    const TEAM_ITEM_COUNT = teamItems.length;
    const TRANSLATE_PERCENT = 100;
    let teamCurrentIndex = 0;

    function updateTeamCarousel(newIndex) {
        if (newIndex < 0) {
            teamCurrentIndex = TEAM_ITEM_COUNT - 1;
        } else if (newIndex >= TEAM_ITEM_COUNT) {
            teamCurrentIndex = 0;
        } else {
            teamCurrentIndex = newIndex;
        }
        const newTransform = -teamCurrentIndex * TRANSLATE_PERCENT;
        teamTrack.style.transform = `translateX(${newTransform}%)`;
    }

    document.querySelector('#team-carousel-button-right').addEventListener('click', () => {
        updateTeamCarousel(teamCurrentIndex + 1);
    });

    document.querySelector('#team-carousel-button-left').addEventListener('click', () => {
        updateTeamCarousel(teamCurrentIndex - 1);
    });
});
