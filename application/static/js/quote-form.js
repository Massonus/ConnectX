document.getElementById('request-quote-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    clearAlerts();

    const form = event.target;
    let valid = true;

    if (!form.name.value.trim()) {
        showAlert('Name is required', 'danger', 'alert-name');
        valid = false;
    }

    const phonePattern = /^\+38\(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    if (!phonePattern.test(form.phone.value.trim())) {
        showAlert('Phone Number must be in the format +38(XXX) XXX-XX-XX', 'danger', 'alert-phone');
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email.value.trim())) {
        showAlert('Invalid Email format', 'danger', 'alert-email');
        valid = false;
    }

    if (!form.message.value.trim()) {
        showAlert('Message is required', 'danger', 'alert-message');
        valid = false;
    }

    if (!valid) return;

    const emailParams = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        message: form.message.value
    };

    try {
        const response = await emailjs.send(serviceId, templateId, emailParams);

        if (response.status === 200) {
            showAlert('Your request has been sent successfully!', 'success', 'alert-container');
            form.reset();
        } else {
            console.error('EmailJS response:', response);
            throw new Error(`Failed to send your request. Status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error sending email:', error);
        showAlert('Failed to send your request. Please try again later.', 'danger', 'alert-container');
    }
});

document.getElementById('phone').addEventListener('input', formatPhone);

function formatPhone(event) {
    const input = event.target;
    let value = input.value.replace(/\D/g, '');

    if (value.length > 0 && !value.startsWith('38')) {
        value = '38' + value;
    }

    let formatted = '+38';
    if (value.length > 2) formatted += `(${value.slice(2, 5)}`; // +38(XXX
    if (value.length > 5) formatted += `) ${value.slice(5, 8)}`; // +38(XXX) XXX
    if (value.length > 8) formatted += `-${value.slice(8, 10)}`; // +38(XXX) XXX-XX
    if (value.length > 10) formatted += `-${value.slice(10, 12)}`; // +38(XXX) XXX-XX-XX

    input.value = formatted;
}

function showAlert(message, type, containerId) {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.innerHTML = `${message} <span class="close-alert" onclick="this.parentElement.style.display='none';">&times;</span>`;
    document.getElementById(containerId).appendChild(alert);
}

function clearAlerts() {
    const alertElements = document.querySelectorAll('.alert-container .alert');
    alertElements.forEach(alert => alert.remove());
}
