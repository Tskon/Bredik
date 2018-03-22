const fs = require('fs');
const cheerio = require('cheerio');
const cfg = require('../config/database');

class PageRender {
  constructor(bundle, fileName, req, res) {
    const file = cfg.publicPath + fileName;
    fs.readFile(file, (err, html) => {
      if(err) throw err;
      let $ = cheerio.load(html);
      $('body').append(`<script src="${bundle}"></script>`);
      res.send($.html());
    })
  }
}

module.exports = (scriptName, htmlFileName, req, res) => {
  new PageRender(scriptName, htmlFileName, req, res);
};