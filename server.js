const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');

const auth = require('./backend/model/auth');
const serverCfg = require('./backend/config/server');
const renderPage = require('./backend/model/render-page');


const app = express();

app.use(cookieParser())
  .use(bodyParser.urlencoded({extended: false}))
  .use(bodyParser.json())
  .use(session({
    secret: 'bredik-secret-some-small-key',
    resave: false,
    saveUninitialized: false
  }));

app.use(auth.passport.initialize());
app.use(auth.passport.session());

app.use(express.static(serverCfg.publicPath));


// Application routes

app
  .get('/auth/google',
    auth.passport.authenticate('google', {scope: ['openid email profile']}))
  .get('/auth/google/callback',
    auth.passport.authenticate('google', {
      failureRedirect: '/'
    }),
    function (req, res) {
      // Authenticated successfully
      res.redirect('/admin');
    })
  .get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });

app
  .get('/', (req, res) => {
    renderPage('js/app.js', 'index.html', req, res);
  })
  // .get('/admin', auth.isAuth, (req, res) => {
  .get('/admin', (req, res) => {
    renderPage('js/admin.js', 'admin.html', req, res);
  })
  .get('/*', (req, res) => {
    res.redirect('/#' + req.url);
  });


// API
  app
    .post('/get/user', (req, res) => {
      console.log('auth',req.isAuthenticated());
      if (req.isAuthenticated()){
        res.json(req.user);
      } else{
        res.send(null);
      }
    });


app.listen(process.env.PORT || serverCfg.PORT);

console.log('server was started: http://localhost:' + serverCfg.PORT);