import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';
import { Strategy as LdapStrategy } from 'passport-ldapauth';
import dotenv from 'dotenv';
import ldap from 'ldapjs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();

// Convert import.meta.url to __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('__dirname = ' + __dirname)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', express.static(path.join(__dirname, 'public'))); // Serve static files under public at /

const LDAP_OPTIONS = {
    server: {
        url: process.env.LDAP_URL,
        bindDN: process.env.LDAP_BIND_DN,
        bindCredentials: process.env.LDAP_BIND_CREDENTIALS,
        searchBase: process.env.LDAP_SEARCH_BASE,
        searchFilter: process.env.LDAP_SEARCH_FILTER
    }
};

passport.use(new LdapStrategy(LDAP_OPTIONS));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

// Routes
app.get('/', (req, res) => {
    console.log('get /')
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
    console.log('get /login')
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.post('/login', (req, res, next) => {
    passport.authenticate('ldapauth', (err, user, info) => {
        if (err) {
            console.error('Authentication error:', err);
            return next(err);
        }
        if (!user) {
            console.log('Authentication failed:', info);
            return res.redirect('login?error=1');
        }
        req.logIn(user, (err) => {
            if (err) {
                console.error('Login error:', err);
                return next(err);
            }
            return res.redirect('login-success');
        });
    })(req, res, next);
});

app.get('/login-success', (req, res) => {
    if (req.isAuthenticated()) {
        res.send('Login successful! Welcome, ' + req.user.cn);
    } else {
        res.redirect('login');
    }
});

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// Add the signup route
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

app.post('/signup', (req, res) => {
    const { username, password } = req.body;

    const ldapClient = ldap.createClient({
        url: process.env.LDAP_URL
    });

    console.log('Attempting to bind to LDAP server with DN:', process.env.LDAP_BIND_DN);

    ldapClient.bind(process.env.LDAP_BIND_DN, process.env.LDAP_BIND_CREDENTIALS, (err) => {
        if (err) {
            console.error('Error binding to LDAP server:', err);
            return res.status(500).send('Error binding to LDAP server');
        }

        console.log('Successfully bound to LDAP server');

        // Find the highest uidNumber and gidNumber
        const searchOptions = {
            scope: 'sub',
            filter: '(uidNumber=*)',
            attributes: ['uidNumber']
        };

        ldapClient.search(process.env.LDAP_SEARCH_BASE, searchOptions, (err, searchRes) => {
            if (err) {
                console.error('Error searching LDAP:', err);
                return res.status(500).send('Error searching LDAP');
            }

            let maxUidNumber = 1000; // Default starting point

            searchRes.on('searchEntry', (entry) => {
                const uidNumber = parseInt(entry.object.uidNumber, 10);
                if (uidNumber > maxUidNumber) {
                    maxUidNumber = uidNumber;
                }
            });

            searchRes.on('end', () => {
                const newUidNumber = maxUidNumber + 1;

                const newEntry = {
                    uid: username,
                    cn: username,
                    sn: username,
                    objectClass: ['inetOrgPerson', 'posixAccount', 'shadowAccount'],
                    userPassword: password,
                    uidNumber: newUidNumber.toString(),
                    gidNumber: newUidNumber.toString(), // Assuming gidNumber follows the same logic
                    homeDirectory: `/home/${username}`,
                    loginShell: '/bin/bash'
                };

                console.log('Attempting to add new entry:', newEntry);

                ldapClient.add(`uid=${username},ou=agents,dc=hyperdata,dc=it`, newEntry, (err) => {
                    if (err) {
                        console.error('Error creating new user:', err);
                        return res.status(500).send('Error creating new user');
                    }

                    console.log('Successfully created new user:', username);
                    res.send('User created successfully');
                });
            });
        });
    });
});

const PORT = process.env.PORT || 3050;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});