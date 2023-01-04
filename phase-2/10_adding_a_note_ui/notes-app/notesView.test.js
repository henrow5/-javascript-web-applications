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

  it('clicks the button and displays a new note', () => {
    const model = new NotesModel();
    const view = new NotesView(model);

    const noteInputEl = document.querySelector('#note-input');
    const addNoteButtonEl = document.querySelector('#add-note-btn');

    noteInputEl.value = 'Buy milk';
    addNoteButtonEl.click();

    // noteInputEl.value = 'Go to the gym';
    // addNoteButtonEl.click();

    // console.log(document.querySelectorAll('div.note').length);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual(
      'Buy milk'
    );
    // expect(document.querySelectorAll('div.note')[1].textContent).toEqual(
    //   'Go to the gym'
    // );
  });
});
