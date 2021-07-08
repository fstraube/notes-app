const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    console.log('Title: ', argv.title);
    console.log('Body: ', argv.body);
  },
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: () => {
    console.log('Removing a note!');
  },
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: () => {
    console.log('Reading a note!');
  },
});

yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: () => {
    console.log('Listing all notes!');
  },
});

yargs.parse();
