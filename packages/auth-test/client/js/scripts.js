document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch('/login', {
        method: 'POST',
        body: formData
    });
    if (response.ok) {
        window.location.href = '/dashboard';
    } else {
        alert('Login failed');
    }
});
