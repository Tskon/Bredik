const fs = require('fs');
const cheerio = require('cheerio');
const cfg = require('../config');

class PageRender {
  constructor(bundle, req, res) {
    const file = qwertytele2cfg.publicPath + 'index.html';

    fs.readFile(file, (err, html) => {
      if(err) throw err;
      let $ = cheerio.load(html);
      $('body').append(`<script src="${bundle}"></script>`);
      res.send($.html());
    })
  }
}

module.exports = (scriptName, req, res) => {
  new PageRender(scriptName, req, res);
};