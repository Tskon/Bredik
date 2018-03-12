const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const authConfig = require('./backend/config/auth');
const serverCfg = require('./backend/config/server');
const renderPage = require('./backend/model/render-page');


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
    return done(null, profile);
  }
));

const app = express();

app.use(cookieParser());
// .use(bodyParser.urlencoded({extended: false}))
// .use(bodyParser.json())
app.use(session({
  secret: 'bredik-secret-some-small-key',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(serverCfg.publicPath));


// Application routes

app.get('/', (req, res) => {
  renderPage('js/app.js', req, res);
});

app.get('/admin', ensureAuthenticated, (req, res) => {
  res.send(req.user);
  // renderPage('js/admin.js', req, res);
});

app.get('/auth/google',
  passport.authenticate('google', {scope: ['openid email profile']}));

app.get('/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/'
  }),
  function (req, res) {
    // Authenticated successfully
    res.redirect('/admin');
  });

app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

app.listen(process.env.PORT || serverCfg.PORT);

console.log('server was started: http://localhost:' + serverCfg.PORT);


// Simple route middleware to ensure user is authenticated.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}