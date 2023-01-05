class NotesClient {
  loadNotes(callback, errorCallback) {
    fetch('http://localhost:3000/notes')
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((err) => errorCallback(`Unable to load notes (${err.message})`));
  }

  createNote(noteText, errorCallback) {
    fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: noteText }),
    }).catch((err) => errorCallback(`Could not add note (${err.message})`));

    //then(() => callback);
    // .then((response) => response.json())
    // .then((data) => {
    //   console.log('Success:', data);
    // });
  }
}

module.exports = NotesClient;

// const data = { username: 'example' };

// fetch('https://example.com/profile', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log('Success:', data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
