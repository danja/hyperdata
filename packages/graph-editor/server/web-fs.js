// server/web-fs.js
import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { pathMappings } from './web-fs-config.js';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());

app.all('*', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow specific methods
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Allow specific headers


    const urlPath = req.path;
    const fsPath = pathMappings[urlPath];

    if (!fsPath) {
        return res.status(404).send('Not found');
    }

    const fullPath = path.join(__dirname, fsPath);

    try {
        switch (req.method) {
            case 'GET':
                const content = await fs.readFile(fullPath, 'utf-8');
                res.send(content);
                break;
            case 'PUT':
            case 'POST':
                await fs.writeFile(fullPath, req.body.content);
                res.sendStatus(200);
                break;
            case 'PATCH':
                const existingContent = await fs.readFile(fullPath, 'utf-8');
                const updatedContent = existingContent + req.body.content;
                await fs.writeFile(fullPath, updatedContent);
                res.sendStatus(200);
                break;
            default:
                res.sendStatus(405);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(8102, () => console.log('Server running on http://localhost:8102'));