const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const passportSetup = require('./middleware/passport-setup');
require('dotenv').config();
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// do I need both?
app.use(cookieParser());
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [process.env.COOKIE_KEY]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// turn on routes
const routes = require('./routes');
app.use(routes);

// set up mongoose connection
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/hiking-app', {
  useNewUrlParser: true
});

// tell mongoose to use the build in JavaScript Promise object to handle their promises
mongoose.Promise = Promise;

// turn on our server
app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));


