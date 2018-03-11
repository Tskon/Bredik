const passport = require('passport'),
  GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
  authConfig = require('../config/auth');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new GoogleStrategy(
  // Use the API access settings stored in ../config/auth.json. You must create
  // an OAuth 2 client ID and secret at: https://console.developers.google.com
  authConfig.google,

  function(accessToken, refreshToken, profile, done) {
    // Typically you would query the database to find the user record
    // associated with this Google profile, then pass that object to the `done`
    // callback.
    console.log(profile);
    return done(null, profile);
  }
));


module.exports = passport;