const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const NotesClient = require('./notesClient');

console.log('The notes app is running');

const model = new NotesModel();
const client = new NotesClient();
const view = new NotesView(model, client);

view.displayNotesFromApi();
// view.displayNotes();
// console.log(model.getNotes());
// model.addNote('This is an example note');
// model.addNote('Buy milk');
// model.addNote('Go to the gym');
