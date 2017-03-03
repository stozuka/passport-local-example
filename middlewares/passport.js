'use strict';

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    if (username !== 'name') {
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (password !== 'pwd') {
      return done(null, false, { message: 'Incorrect password.' });
    }

    let user = {name: 'stozuka', pwd: 'stozuka'};
    return done(null, user);
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(user, cb) {
  cb(null, user);
});
