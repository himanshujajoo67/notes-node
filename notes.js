console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var logNote = (note) => {
  console.log('----------');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  var gettingNotes = fetchNotes();
  var filterNote = gettingNotes.filter((note) => note.title === title);
  return filterNote[0];
};

var removeNote = (title) => {
  var note = fetchNotes();
  var filterNote = note.filter((note) => note.title !== title);
  saveNotes(filterNote);
  return note.length !== filterNote.length;
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
