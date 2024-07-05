import fetch from 'node-fetch';

const username = 'fuseki-foowiki-user';
const password = 'TheEnglish_3';
const endpoint = 'https://fuseki.hyperdata.it/foowiki/update';
const query = `
  PREFIX dc: <http://purl.org/dc/elements/1.1/>
  INSERT DATA { 
    <http://example.org/book/book1> dc:title "Another new book" .
  }
`;

const auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
const incorrectAuth = 'Basic ' + Buffer.from(username + ':wrongpassword').toString('base64');

async function sendRequest(authHeader) {
    try {
        console.log('Sending request with headers:', {
            'Content-Type': 'application/sparql-update',
            'Authorization': authHeader
        });
        console.log('Request body:', query);

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/sparql-update',
                'Authorization': authHeader
            },
            body: query
        });

        console.log('Response status code:', response.status); // Log the response status code

        if (response.ok) {
            console.log('Triple added successfully!');
        } else {
            console.error('Failed to add triple:', response.statusText);
            // Log the response body for more details
            const errorDetails = await response.text();
            console.error('Error details:', errorDetails);
        }
    } catch (error) {
        // Catch and log any network or other errors
        console.error('Request failed:', error);
    }
}

async function sendRequestWithoutAuth() {
    try {
        console.log('Sending request without authentication headers');
        console.log('Request body:', query);

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/sparql-update'
            },
            body: query
        });

        console.log('Response status code:', response.status); // Log the response status code

        if (response.ok) {
            console.log('Triple added successfully without authentication!');
        } else {
            console.error('Failed to add triple without authentication:', response.statusText);
            // Log the response body for more details
            const errorDetails = await response.text();
            console.error('Error details:', errorDetails);
        }
    } catch (error) {
        // Catch and log any network or other errors
        console.error('Request failed without authentication:', error);
    }
}

// Try with correct password
sendRequest(auth);

// Try with incorrect password
sendRequest(incorrectAuth);

// Try without any credentials
sendRequestWithoutAuth();