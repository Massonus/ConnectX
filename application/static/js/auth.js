document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('captcha-form').addEventListener('submit', async function (event) {
        event.preventDefault();
        let captchaResponse = grecaptcha.getResponse();
        if (captchaResponse.length === 0) {
            document.getElementById('captcha-message').innerText = "Please complete the CAPTCHA";
            return;
        }
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;

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
