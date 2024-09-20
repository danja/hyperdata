// index.js
import { TurtleToJSON } from './turtletojson.js';
import fs from 'fs/promises';

async function main() {
    const turtleString = await fs.readFile('src/test-data/foaf-template.ttl', 'utf-8');
    const tj = new TurtleToJSON();
    const result = await tj.turtle2json(turtleString);
    console.log(JSON.stringify(result, null, 2));
}

main().catch(console.error);