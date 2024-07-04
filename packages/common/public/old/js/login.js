document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.location.href = '/login-success';
                } else {
                    document.getElementById('error-message').innerText = 'Login failed: ' + data.message;
                }
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('error-message').innerText = 'An error occurred. Please try again.';
            });
    });
});