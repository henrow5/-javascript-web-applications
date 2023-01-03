const NotesModel = require('./notesModel');

describe('NotesModel', () => {
  it('returns an empty list of notes', () => {
    const model = new NotesModel();
    // const notes = new NotesModel()''
    expect(model.getNotes()).toEqual([]);
  });

  it('adds two notes to the list', () => {
    const model = new NotesModel();
    // const notes = new NotesModel()''

    model.addNote('Buy milk');
    model.addNote('Go to the gym');

    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  });

  it('clears the note list', () => {
    const model = new NotesModel();
    // const notes = new NotesModel()''

    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    model.reset();

    expect(model.getNotes()).toEqual([]);
  });
});
