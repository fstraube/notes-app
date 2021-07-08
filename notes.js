const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicatesNote = notes.find((note) => note.title === title);

  if (!duplicatesNote) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('New note added!'));
  } else {
    console.log(chalk.red.inverse('Note title taken!'));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const noteToRemove = notes.find((note) => note.title === title);
  const index = notes.indexOf(noteToRemove);

  if (index !== -1) {
    notes.splice(index, 1);
    saveNotes(notes);
    console.log(
      chalk.green.inverse(`Note with title ${title} removed successfully!`)
    );
  } else {
    console.log(chalk.red.inverse(`No note found!`));
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  const noteToRead = notes.find((note) => note.title === title);

  if (noteToRead) {
    console.log(chalk.bold(noteToRead.title));
    console.log(noteToRead.body);
  } else {
    console.log(chalk.red.inverse(`No note found!`));
  }
};

const listNotes = () => {
  console.log(chalk.bold('Your notes: '));
  const notes = loadNotes();

  if (notes.length !== 0) {
    notes.map((note) => console.log(chalk.gray.inverse('-' + note.title)));
  } else {
    console.log(chalk.red.inverse(`No notes found!`));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = { addNote, removeNote, readNote, listNotes };
