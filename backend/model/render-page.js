const fs = require('fs');
const cheerio = require('cheerio');
const cfg = require('../config/database');

class PageRender {
  constructor(bundle, req, res) {
    const file = cfg.publicPath + 'index.html';
    console.log(req.user);
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