startLine: 1
endLine: 25
document.getElementById('sparqlForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const query = document.getElementById('query').value;
    const username = 'service-admin-user'; // Replace with your username
    const password = 'vbn-vbn-123'; // Replace with your password
    const credentials = btoa(`${username}:${password}`);

    try {
        const response = await fetch('https://fuseki.hyperdata.it/trellis/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${credentials}`
            },
            body: new URLSearchParams({ query })
        });
        const result = await response.text();
        document.getElementById('result').textContent = result;
    } catch (error) {
        document.getElementById('result').textContent = `Error: ${error.message}`;
    }
});

document.getElementById('logoutButton').addEventListener('click', function () {
    window.location.href = '/logout';
});