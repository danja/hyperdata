
// server/main.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 8101;

const clientDir = path.join(__dirname, '../client');

console.log('Server directory:', __dirname);
console.log('Client directory:', clientDir);

if (!fs.existsSync(clientDir)) {
    console.error(`Client directory not found: ${clientDir}`);
    process.exit(1);
}

app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.url}`);
    console.log(`Looking for file: ${path.join(clientDir, req.url)}`);
    next();
});

app.use(express.static(clientDir));

app.get('/', (req, res) => {
    const indexPath = path.join(clientDir, 'index.html');
    console.log(`Attempting to serve index.html from: ${indexPath}`);
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        console.error(`index.html not found at ${indexPath}`);
        res.status(404).send('index.html not found');
    }
});

app.use((req, res, next) => {
    console.error(`File not found: ${req.url}`);
    res.status(404).send('File not found');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));