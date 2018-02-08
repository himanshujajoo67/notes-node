console.log("Starting App");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command :',command);
console.log('Yargs :',argv);

if(command === 'add') {
var note = notes.addNote(argv.title, argv.body);
if(note) {
  console.log('Note created');
  console.log('----------');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
} else {
  console.log('Note title already taken');
}
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
 var note = notes.getNote(argv.title);
 if (note) {
   console.log('Note found');
   console.log(`Title: ${note.title}`);
   console.log(`Body: ${note.body}`);
 } else {
   console.log('Note not found');
 }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  if(noteRemoved) {
    console.log('Note Removed');
  } else {
    console.log('Note Doesnt Exist');
  }
} else {
  console.log("Command not recogonized");
}
