const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
require('dotenv').config();
const { User } = require('../models');
const keys = require('./keys');

passport.serializeUser((user, done) => {
  done(null, user.id)
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user)
    });
});

passport.use(
  new GoogleStrategy({
    // options for the strategy
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
  }, (accessToken, refreshToken, email, done) => {
    // check if user already exists in our db
    User.findOne({googleId: email.id})
      .then((currentUser) => {
        if (currentUser) {
          // already have the user
          console.log(`user is: ${currentUser}`);
          done(null, currentUser);
        } else {
          console.log(email)
          // if not, create user in our db
          new User({
            firstName: email.name.givenName,
            googleId: email.id,
            email: email.emails[0].value,
          })
            .save()
            .then((newUser) => {
              console.log(`new user created: ${newUser}`);
              done(null, newUser);
            });
        };
      });
  })
);