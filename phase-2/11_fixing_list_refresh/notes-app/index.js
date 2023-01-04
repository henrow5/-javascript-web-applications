const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

console.log('The notes app is running');

const model = new NotesModel();
// model.addNote('This is an example note');
// model.addNote('Buy milk');
// model.addNote('Go to the gym');

const view = new NotesView(model);

view.displayNotes();

// console.log(model.getNotes());
