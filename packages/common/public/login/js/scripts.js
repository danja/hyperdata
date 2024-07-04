document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.querySelectorAll('.toggle-password');
    togglePassword.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            const passwordField = e.target.previousElementSibling;
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                e.target.textContent = 'Hide';
            } else {
                passwordField.type = 'password';
                e.target.textContent = 'Show';
            }
        });
    });

    const loginForm = document.querySelector('#loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const username = document.querySelector('#username').value;
            const password = document.querySelector('#password').value;

            fetch('https://hyperdata.it/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        window.location.href = 'https://hyperdata.it/users/login-success';
                    } else {
                        document.getElementById('error-message').innerText = 'Login failed: ' + data.message;
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    document.getElementById('error-message').innerText = 'An error occurred. Please try again.';
                });
        });
    }

    const signupForm = document.querySelector('#signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            const password = document.querySelector('#password').value;
            const confirmPassword = document.querySelector('#confirm-password').value;
            if (password !== confirmPassword) {
                e.preventDefault();
                alert('Passwords do not match!');
            }
        });
    }
});