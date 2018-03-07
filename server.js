const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');

const cfg = require('./backend/config');
const renderPage = require('./backend/model/render-page');
require('./backend/model/passport');

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

  //passport
  .use(passport.initialize())
  .use(passport.session())
  // Auth system
  .post('/login', controllers.users.login)
  .post('/register', controllers.users.register)
  .get('/logout', controllers.users.logout)

  .get('/', (req, res) => {
    renderPage('js/app.js', req, res);
  })
  .get('/admin', (req, res) => {
    renderPage('js/admin.js', req, res);
  })
  .use(express.static(cfg.publicPath))
  .listen(process.env.PORT || cfg.PORT);

console.log('server was started: http://localhost:' + cfg.PORT);