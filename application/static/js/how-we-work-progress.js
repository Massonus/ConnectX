document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');
    const progressBar = document.getElementById('progress-bar');
    const progressInfo = document.getElementById('progress-info');
    const startStatus = document.getElementById('start-status');
    const initStatus = document.getElementById('init-status');
    const midStatus = document.getElementById('mid-status');
    const endStatus = document.getElementById('end-status');

    steps.forEach((step, index) => {
        step.addEventListener('mouseenter', () => {
            const stepNumber = index + 1;
            const totalSteps = steps.length;
            progressBar.style.width = `${(stepNumber / totalSteps) * 100}%`;
            progressInfo.textContent = `Step ${stepNumber} of ${totalSteps}`;

            // Change status text based on progress
            if (stepNumber === 1) {
                startStatus.style.opacity = '0';
                initStatus.style.opacity = '1';
                midStatus.style.opacity = '0';
                endStatus.style.opacity = '0';
            } else if (stepNumber === 2) {
                startStatus.style.opacity = '0';
                initStatus.style.opacity = '0';
                midStatus.style.opacity = '1';
                endStatus.style.opacity = '0';
            } else if (stepNumber === totalSteps) {
                startStatus.style.opacity = '0';
                initStatus.style.opacity = '0';
                midStatus.style.opacity = '0';
                endStatus.style.opacity = '1';
            }
        });
    });

    // Initial status
    startStatus.style.opacity = '1';
    initStatus.style.opacity = '0';
    midStatus.style.opacity = '0';
    endStatus.style.opacity = '0';
});
