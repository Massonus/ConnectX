document.addEventListener("DOMContentLoaded", () => {
    const teamTrack = document.querySelector('.team-carousel-track');
    const teamItems = document.querySelectorAll('.team-carousel-item');
    const teamItemCount = teamItems.length;
    let teamCurrentIndex = 0;

    function updateTeamCarousel(newIndex) {
        if (newIndex < 0) {
            teamCurrentIndex = teamItemCount - 1;
        } else if (newIndex >= teamItemCount) {
            teamCurrentIndex = 0;
        } else {
            teamCurrentIndex = newIndex;
        }
        const newTransform = -teamCurrentIndex * 100;
        teamTrack.style.transform = `translateX(${newTransform}%)`;
    }

    document.querySelector('#team-carousel-button-right').addEventListener('click', () => {
        updateTeamCarousel(teamCurrentIndex + 1);
    });

    document.querySelector('#team-carousel-button-left').addEventListener('click', () => {
        updateTeamCarousel(teamCurrentIndex - 1);
    });
});
