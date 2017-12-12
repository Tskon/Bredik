'use strict';
const log = require('logger')(module);
const db = require('db');
db.connect();

const User = require('./user/index.js');

function run() {
  const vasya = new User('Вася');
  const petya = new User('Петя');

  vasya.hello(petya);

  log(db.getPhrase('Run successful'));
}

if (module.parent){
  exports.run = run;
}else{
  run();
}