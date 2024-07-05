import dotenv from 'dotenv';

dotenv.config();

const ldapClient = ldap.createClient({
    url: process.env.LDAP_URL
});

const bindDN = process.env.LDAP_BIND_DN;
const bindCredentials = process.env.LDAP_BIND_CREDENTIALS;

console.log('Attempting to bind to LDAP server with DN:', bindDN);

ldapClient.bind(bindDN, bindCredentials, (err) => {
    if (err) {
        console.error('Error binding to LDAP server:', err);
        process.exit(1);
    }

    console.log('Successfully bound to LDAP server');
    ldapClient.unbind((err) => {
        if (err) {
            console.error('Error unbinding from LDAP server:', err);
        } else {
            console.log('Successfully unbound from LDAP server');
        }
        process.exit(0);
    });
});