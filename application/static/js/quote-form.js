let publicKey, serviceId, templateId;

async function fetchKeys() {
    try {
        const response = await fetch('/api/keys');
        const keys = await response.json();
        publicKey = keys.public_key;
        serviceId = keys.service_id;
        templateId = keys.template_id;

        emailjs.init(publicKey);
    } catch (error) {
        console.error('Error fetching keys:', error);
    }
}

fetchKeys();

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
        message: form.message.value,
        to_email: 'recipient1@example.com,recipient2@example.com'
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

    if (value.startsWith('38')) {
        value = '+38' + value.slice(2);
    } else if (value.startsWith('0')) {
        value = '+38' + value.slice(1);
    } else {
        value = '+38' + value;
    }

    let formatted = value.slice(0, 3); // +38
    if (value.length > 3) formatted += `(${value.slice(3, 6)}`;
    if (value.length > 6) formatted += `) ${value.slice(6, 9)}`;
    if (value.length > 9) formatted += `-${value.slice(9, 11)}`;
    if (value.length > 11) formatted += `-${value.slice(11, 13)}`;

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