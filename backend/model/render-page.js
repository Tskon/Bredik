const fs = require('fs');
const cheerio = require('cheerio');
const cfg = require('../config/database');

class PageRender {
  constructor(req, res) {
    const file = cfg.publicPath + 'index.html';
    fs.readFile(file, (err, html) => {
      if(err) throw err;
      let $ = cheerio.load(html);
      $('body').append(`<script src='js/app.js'></script>`);
      res.send($.html());
    })
  }
}

module.exports = (req, res) => {
  new PageRender(req, res);
};