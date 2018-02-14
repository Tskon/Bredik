const fs = require('fs');
const cheerio = require('cheerio');
const cfg = require('../config');

class PageRender {
  constructor(bundle, req, res) {
    const file = cfg.distPath + 'index.html';

    fs.readFile(file, (err, html) => {
      if(err) throw err;
      let $ = cheerio.load(html);
      $('body').append(`<script src="${bundle}"></script>`);
      // console.log(file);
      res.send($.html());
    })
  }

}

module.exports = (scriptName, req, res) => {
  const page = new PageRender(scriptName, req, res);
};

