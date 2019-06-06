const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./configs/passport-setup');

const keys = require('./configs/keys');

const app = express();
const PORT = process.env.PORT || 3001;


// turn on routes
const routes = require('./routes');
app.use(routes);

// set view engine
app.set('view engine', 'ejs');

// set up session cookies
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());


// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, 
  {useNewUrlParser: true 
});

// set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

// create home route
app.get('/', (req, res) => {
    res.render('home', { user: req.user });
});


// set up mongoose connection
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/hiking-app', {
  useNewUrlParser: true
});

// tell mongoose to use the build in JavaScript Promise object to handle their promises
mongoose.Promise = Promise;

// turn on our server
app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));