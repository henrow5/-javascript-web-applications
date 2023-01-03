/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');

describe('Notes view', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays initially no notes', () => {
    const model = new NotesModel();
    const view = new NotesView(model);
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toBe(0);
  });

  it('displays two notes', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');

    const view = new NotesView(model);
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toBe(2);
  });
});
