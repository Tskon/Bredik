const express = require('express');
const cfg = require('./backend/config');
const renderPage = require('./backend/model/render-page');

const app = express();

app.get('/', (req, res) => {
  renderPage('js/app.js', req, res);
});

app.get('/admin', (req, res) => {
  renderPage('js/admin.js', req, res);
});

app.use(express.static(cfg.publicPath));

app.listen(process.env.PORT || cfg.PORT);
console.log('server was started: http://localhost:' + cfg.PORT);