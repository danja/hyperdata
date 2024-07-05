const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

const app = express();

// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Serve static files
app.use(express.static(path.join(__dirname, '../client')));

// Passport configuration
passport.use(new LocalStrategy(
    function (username, password, done) {
        // Replace with your user authentication logic
        if (username === 'user' && password === 'pass') {
            return done(null, { id: 1, username: 'user' });
        } else {
            return done(null, false, { message: 'Incorrect credentials.' });
        }
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    // Replace with your user fetching logic
    done(null, { id: 1, username: 'user' });
});

// Routes
app.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard.html',
    failureRedirect: '/login.html'
}));

app.get('/success', (req, res) => res.send('Login successful!'));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, '../client/login.html')));

// Handle logout
app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login.html');
});

// Handle SPARQL query
app.post('/sparql', async (req, res) => {
    const query = req.body.query;
    try {
        const response = await axios.post('https://fuseki.hyperdata.it/trellis/sparql', `query=${encodeURIComponent(query)}`, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        res.send(response.data);
    } catch (error) {
        res.status(500).send(`Error executing query: ${error.message}`);
    }
});

// Serve the login page as the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/login.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});