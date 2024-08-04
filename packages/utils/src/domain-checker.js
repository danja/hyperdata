import https from 'https';

const domains = ['danny.ayers.name', 'hyperdata.it', 'ps.hyperdata.it', 'foaf-retro.hyperdata.it', 'elfquake.org', 'strandz.it', 'ps.strandz.it'];
const verbose = true; // Set this to false for one-line output

function httpsGet(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => resolve({ status: res.statusCode, data: data.trim() }));
        }).on('error', (err) => reject(err));
    });
}

async function checkDomain(domain) {
    const url = `https://${domain}/test.txt`;
    try {
        const response = await httpsGet(url);
        const success = response.status === 200 && response.data === domain;

        if (verbose) {
            console.log(`Domain: ${domain}`);
            console.log(`Status: ${response.status}`);
            console.log(`Content: ${response.data}`);
            console.log(`Check: ${success ? 'PASSED' : 'FAILED'}`);
            console.log('---');
        } else {
            console.log(`${domain}: ${success ? 'PASSED' : 'FAILED'}`);
        }

        return success;
    } catch (error) {
        if (verbose) {
            console.log(`Domain: ${domain}`);
            console.log(`Error: ${error.message}`);
            console.log('---');
        } else {
            console.log(`${domain}: ERROR - ${error.message}`);
        }
        return false;
    }
}

async function main() {
    const results = await Promise.all(domains.map(checkDomain));
    const totalPassed = results.filter(Boolean).length;
    console.log(`\nTotal: ${totalPassed}/${domains.length} domains passed the check.`);
}

main();