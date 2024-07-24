document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('captcha-form').addEventListener('submit', function (event) {
        event.preventDefault();
        let response = grecaptcha.getResponse();
        if (response.length === 0) {
            document.getElementById('captcha-message').innerText = "Please complete the CAPTCHA";
            return;
        }
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;

        fetch('/user/verify-captcha', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                response: response,
                username: username,
                password: password

            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    proceedRegistration(data.username, data.password);
                } else {
                    document.getElementById('captcha-message').innerText = "CAPTCHA verification failed. Please try again.";
                }
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('captcha-message').innerText = "An error occurred. Please try again.";
            });
    });
});

function proceedRegistration(username, password) {

    fetch('/user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({

            username: username,
            password: password

        })
    })
        .then(res => res.json())
        .then(data => {
            if (data.registered) {
                window.location.href = '/user/login';
            } else {
                alert('Something is wrong!')
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('captcha-message').innerText = "An error occurred. Please try again.";
        });
}
