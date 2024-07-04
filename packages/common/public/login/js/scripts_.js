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