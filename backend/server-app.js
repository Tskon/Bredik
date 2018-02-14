const express = require('express');
const cfg = require('./config');
const renderPage = require('./model/render-page');

const app = express();

app.use(express.static('./dist'));

app.get('/', (req, res) => {
  renderPage('js/bundle.js', req, res);
});

app.get('/admin', (req, res) => {
  renderPage('js/admin/admin-bundle.js', req, res);
  res.send('Admin panel');
});

app.listen(cfg.PORT);
console.log('server was started: http://localhost:' + cfg.PORT);