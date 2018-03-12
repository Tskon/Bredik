const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const authConfig = require('../config/auth');

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

passport.use(new GoogleStrategy(
  // Use the API access settings stored in ../config/auth.json. You must create
  // an OAuth 2 client ID and secret at: https://console.developers.google.com
  authConfig.google,

  function (accessToken, refreshToken, profile, done) {
    // Typically you would query the database to find the user record
    // associated with this Google profile, then pass that object to the `done`
    // callback.
    return done(null, profile);
  }
));

// Simple route middleware to ensure user is authenticated.
function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  // if auth failed
  res.redirect('/');
}

module.exports.passport = passport;
module.exports.isAuth = isAuth;



// // for Express4 in app.js:
// const auth = require('./model/auth');
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
//
// app.use(cookieParser())
//   .use(session({
//     secret: 'bredik-secret-some-small-key',
//     resave: false,
//     saveUninitialized: false
//   }))
//   .use(auth.passport.initialize())
//   .use(auth.passport.session());
//
// app.get('/auth/google',
//   auth.passport.authenticate('google', {scope: ['openid email profile']}));
//
// app.get('/auth/google/callback',
//   auth.passport.authenticate('google', {
//     failureRedirect: '/'
//   }),
//   function (req, res) {
//     // Authenticated successfully
//     res.redirect('/admin');
//   });
//
// app.get('/logout', function (req, res) {
//   req.logout();
//   res.redirect('/');
// });
//
// // for secret pages use middlewares:
// app.get('/secret', auth.isAuth, (req, res) => {});