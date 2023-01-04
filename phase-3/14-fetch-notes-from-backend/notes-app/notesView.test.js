/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');
const NotesClient = require('./notesClient');

// jest.mock('./notesClient');

require('jest-fetch-mock').enableMocks();

describe('Notes view', () => {
  beforeEach(() => {
    // NotesClient.mockClear();
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

    expect(document.querySelectorAll('div.note').length).toBe(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual(
      'Buy milk'
    );
  });

  it('clears all existing notes before displaying', () => {
    const model = new NotesModel();
    const view = new NotesView(model);

    model.addNote('Buy milk');
    model.addNote('Go to the gym');

    view.displayNotes();
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

  it('clicks the button twice, displays two new notes, clears text input', () => {
    const model = new NotesModel();
    const view = new NotesView(model);

    const noteInputEl = document.querySelector('#note-input');
    const addNoteButtonEl = document.querySelector('#add-note-btn');

    noteInputEl.value = 'Buy milk';
    addNoteButtonEl.click();

    noteInputEl.value = 'Go to the gym';
    addNoteButtonEl.click();

    expect(document.querySelectorAll('div.note').length).toBe(2);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual(
      'Buy milk'
    );
    expect(document.querySelectorAll('div.note')[1].textContent).toEqual(
      'Go to the gym'
    );
    expect(noteInputEl.value).toBe('');
  });

  it('displays notes from an API', () => {
    const model = new NotesModel();
    const fakeClient = {
      loadNotes: (callback) => {
        callback(['Note from the server']);
      },
    };
    const view = new NotesView(model, fakeClient);

    view.displayNotesFromApi();

    expect(document.querySelectorAll('div.note').length).toBe(1);
    expect(document.querySelector('div.note').textContent).toEqual(
      'Note from the server'
    );
  });
});
