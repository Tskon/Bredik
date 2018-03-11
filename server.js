const express = require('express'),
  cookieParser = require('cookie-parser'),
  session = require('express-session'),
  bodyParser = require('body-parser'),
  passport = require('./backend/model/auth');

//const passport = require('passport'),
// LocalStrategy = require('passport-local').Strategy;

const serverCfg = require('./backend/config/server'),
  renderPage = require('./backend/model/render-page'),
  passportModel = require('./backend/model/auth');

const app = express();

app
  .use(cookieParser())
  .use(bodyParser.urlencoded({extended: false}))
  .use(bodyParser.json())
  .use(session({
    secret: 'bredik-secret-some-small-key',
    resave: false,
    saveUninitialized: false,
    cookie: {secure: true}
  }))

  .use(passport.initialize())
  .use(passport.session())

  .use(express.static(serverCfg.publicPath))
  .get('/', (req, res) => {
    renderPage('js/app.js', req, res);
  })
  .get('/auth/google',
    passport.authenticate('google', { scope: ['openid email profile'] }))
  .get('/auth/google/callback',
    passport.authenticate('google', {
      failureRedirect: '/login'
    }),
    function(req, res) {
      // Authenticated successfully
      res.redirect('/');
    })
  .get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  })
  .get('/admin', (req, res) => {
    renderPage('js/admin.js', req, res);
  })
  .listen(process.env.PORT || serverCfg.PORT);

console.log('server was started: http://localhost:' + serverCfg.PORT);