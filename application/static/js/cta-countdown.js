const MILLISECONDS_IN_SECOND = 1000;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * SECONDS_IN_MINUTE;
const MILLISECONDS_IN_HOUR = MILLISECONDS_IN_MINUTE * MINUTES_IN_HOUR;
const MILLISECONDS_IN_DAY = MILLISECONDS_IN_HOUR * HOURS_IN_DAY;

const intervalMilliseconds = 1000;

async function fetchEndDate() {
    const response = await fetch('/get_end_date');
    const data = await response.json();
    return new Date(data.end_date).getTime();
}

function startCountdown(countDownDate) {
    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();

        const distance = countDownDate - now;

        const days = Math.floor(distance / MILLISECONDS_IN_DAY);
        const hours = Math.floor((distance % MILLISECONDS_IN_DAY) / MILLISECONDS_IN_HOUR);
        const minutes = Math.floor((distance % MILLISECONDS_IN_HOUR) / MILLISECONDS_IN_MINUTE);
        const seconds = Math.floor((distance % MILLISECONDS_IN_MINUTE) / MILLISECONDS_IN_SECOND);

        document.getElementById("days").innerHTML = days.toString();
        document.getElementById("hours").innerHTML = hours.toString();
        document.getElementById("minutes").innerHTML = minutes.toString();
        document.getElementById("seconds").innerHTML = seconds.toString();

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, intervalMilliseconds);
}

document.addEventListener('DOMContentLoaded', async () => {
    const countDownDate = await fetchEndDate();
    startCountdown(countDownDate);
});
