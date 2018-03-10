const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;

const cfg = require('./backend/config');
const renderPage = require('./backend/model/render-page');
const passportModel = require('./backend/model/passport');

const app = express();

app
  .use(cookieParser())
  .use(bodyParser.urlencoded({extended: false}))
  .use(bodyParser.json())
  .use(session({
    secret: 'bredik-secret-some-small-key',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: true}
  }))

  // Passport
  .post('/login',
    passport.authenticate('local', {successRedirect: '/admin', failureRedirect: '/', failureFlash: true}),
    (req, res) => {
      // If this function gets called, authentication was successful.
      // `req.user` contains the authenticated user.
      // res.redirect('/users/' + req.user.username);
    })
  // .use(passport.initialize())
  // .use(passport.session())
  // .post('/login', passportModel.login)
  // .post('/register', passportModel.register)
  // .get('/logout', passportModel.logout)

  .get('/', (req, res) => {
    renderPage('js/app.js', req, res);
  })
  .get('/admin', (req, res) => {
    renderPage('js/admin.js', req, res);
  })
  .use(express.static(cfg.publicPath))
  .listen(process.env.PORT || cfg.PORT);

console.log('server was started: http://localhost:' + cfg.PORT);