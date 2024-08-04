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

    if (!form.phone.value.trim()) {
        showAlert('Phone Number is required', 'danger', 'alert-phone');
        valid = false;
    }

    if (!form.email.value.trim()) {
        showAlert('Email is required', 'danger', 'alert-email');
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

function showAlert(message, type, containerId) {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    document.getElementById(containerId).appendChild(alert);
}

function clearAlerts() {
    const alertElements = document.querySelectorAll('.alert-container .alert');
    alertElements.forEach(alert => alert.remove());
}