class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayNotes() {
    const notes = this.model.getNotes();

    notes.forEach((note) => {
      const noteEl = document.createElement('div');
      noteEl.className = 'note';
      noteEl.textContent = note;
      // noteEl.append(note);
      this.mainContainerEl.append(noteEl);
    });
  }
}

module.exports = NotesView;
