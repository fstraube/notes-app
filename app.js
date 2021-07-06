const chalk = require('chalk');
const validator = require('validator');
const getNotes = require('./notes.js');

const msg = getNotes()

console.log(msg);

console.log(validator.isURL('www.google.com'));

console.log(chalk.bold.green('Success!'));