class NotesView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    this.mainContainerEl = document.querySelector('#main-container');
    this.addNoteButtonEl = document.querySelector('#add-note-btn');
    this.noteInputEl = document.querySelector('#note-input');
    this.resetNotesBtnEl = document.querySelector('#reset-notes-btn');

    this.addNoteButtonEl.addEventListener('click', () => {
      const newNote = this.noteInputEl.value;
      this.addNote(newNote);
      this.noteInputEl.value = '';
      // this.model.addNote(this.noteInputEl.value);
      // console.log(this.model.notes);
    });

    this.resetNotesBtnEl.addEventListener('click', () => {
      this.client
        .resetNotes((error) => this.displayError(error))
        .then(() => this.displayNotesFromApi());
    });
  }

  addNote(note) {
    this.model.addNote(note);
    this.displayNotes();
    this.client.createNote(note, (error) => this.displayError(error));
    // this.client.createNote(note).then(() => this.displayNotesFromApi());
  }

  displayNotes() {
    this.clearDisplayedNotes();
    const notes = this.model.getNotes();

    notes.forEach((note) => {
      const noteEl = document.createElement('div');
      noteEl.className = 'note';

      this.client.emojify(note, (response) => {
        noteEl.textContent = response.emojified_text;
      });
      // noteEl.textContent = note;
      // noteEl.append(note);
      this.mainContainerEl.append(noteEl);
    });
  }

  displayNotesFromApi() {
    this.client.loadNotes(
      (notesFromApi) => {
        this.model.setNotes(notesFromApi);
        this.displayNotes();
      },
      (error) => this.displayError(error)
    );
  }

  clearDisplayedNotes() {
    const notesToClear = document.querySelectorAll('div.note');
    notesToClear.forEach((note) => note.remove());
  }

  displayError(msg) {
    const errorEl = document.createElement('div');
    errorEl.className = 'error';
    errorEl.textContent = msg;
    this.mainContainerEl.append(errorEl);
    // this.mainContainerEl.insertAdjacentText('afterbegin', msg);
  }
}

module.exports = NotesView;
