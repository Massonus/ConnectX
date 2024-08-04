import {showAlert} from "./quote-form.js";
import {clearAlerts} from "./quote-form.js";

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('captcha-form').addEventListener('submit', async function (event) {
        event.preventDefault();
        clearAlerts();
        let captchaResponse = grecaptcha.getResponse();
        if (captchaResponse.length === 0) {
            document.getElementById('captcha-message').innerText = "Please complete the CAPTCHA";
            return;
        }
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;

        let valid = true;
        const usernamePattern = /^[a-zA-Z0-9]{5,}$/;

        if (!username.trim()) {
            showAlert('Name is required', 'danger', 'alert-username');
            valid = false;
        } else if (!usernamePattern.test(username.trim())) {
            showAlert('Username must be at least 5 characters long and contain only letters and numbers.', 'danger', 'alert-username');
            valid = false;
        }

        const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/;
        if (!passwordPattern.test(password.trim())) {
            showAlert('Password must be at least 6 characters long and contain both letters and numbers.', 'danger', 'alert-password');
            valid = false;
        }

        if (!valid) return;

        try {
            let response = await fetch('/user/verify-captcha', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    response: captchaResponse,
                    username: username,
                    password: password
                })
            });

            let data = await response.json();
            if (data.success) {
                await proceedRegistration(data.username, data.password);
            } else {
                document.getElementById('captcha-message').innerText = "CAPTCHA verification failed. Please try again.";
            }
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('captcha-message').innerText = "An error occurred. Please try again.";
        }
    });
});

async function proceedRegistration(username, password) {
    try {
        let res = await fetch('/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        let data = await res.json();
        if (data.registered) {
            window.location.href = '/user/login';
        } else {
            alert('Something is wrong!');
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('captcha-message').innerText = "An error occurred. Please try again.";
    }
}
