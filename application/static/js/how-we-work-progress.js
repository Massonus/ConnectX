document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');
    const progressBar = document.getElementById('progress-bar');
    const progressInfo = document.getElementById('progress-info');
    const statusElements = {
        start: document.getElementById('start-status'),
        init: document.getElementById('init-status'),
        mid: document.getElementById('mid-status'),
        end: document.getElementById('end-status')
    };

    const updateStatus = (stepNumber, totalSteps) => {
        progressBar.style.width = `${(stepNumber / totalSteps) * 100}%`;
        progressInfo.textContent = `Step ${stepNumber} of ${totalSteps}`;

        Object.values(statusElements).forEach(element => element.style.opacity = '0');
        if (stepNumber === 1) {
            statusElements.init.style.opacity = '1';
        } else if (stepNumber === 2) {
            statusElements.mid.style.opacity = '1';
        } else if (stepNumber === totalSteps) {
            statusElements.end.style.opacity = '1';
        }
    };

    steps.forEach((step, index) => {
        step.addEventListener('mouseenter', () => {
            updateStatus(index + 1, steps.length);
        });
    });

    // Initial status
    statusElements.start.style.opacity = '1';
});
