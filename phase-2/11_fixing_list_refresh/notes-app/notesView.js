class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    this.addNoteButtonEl = document.querySelector('#add-note-btn');
    this.noteInputEl = document.querySelector('#note-input');

    this.addNoteButtonEl.addEventListener('click', () => {
      const newNote = this.noteInputEl.value;
      this.addNote(newNote);
      this.noteInputEl.value = '';
      // this.model.addNote(this.noteInputEl.value);
      // console.log(this.model.notes);
    });
  }

  addNote(note) {
    this.model.addNote(note);
    this.displayNotes();
  }

  displayNotes() {
    this.clearDisplayedNotes();
    const notes = this.model.getNotes();

    notes.forEach((note) => {
      const noteEl = document.createElement('div');
      noteEl.className = 'note';
      noteEl.textContent = note;
      // noteEl.append(note);
      this.mainContainerEl.append(noteEl);
    });
  }

  clearDisplayedNotes() {
    const notesToClear = document.querySelectorAll('div.note');
    notesToClear.forEach((note) => note.remove());
  }
}

module.exports = NotesView;
