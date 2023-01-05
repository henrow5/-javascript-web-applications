const { response } = require('express');
const NotesClient = require('./notesClient');

require('jest-fetch-mock').enableMocks();

describe('NotesClient class', () => {
  it('calls fetch and loads data', (done) => {
    // 1. Instantiate the class
    const client = new NotesClient();

    fetch.mockResponseOnce(
      JSON.stringify({
        notes: ['Note from the server'],
      })
    );

    client.loadNotes((data) => {
      expect(data.notes).toEqual(['Note from the server']);
      done();
    });
  });

  it('calls fetch and POSTS data', (done) => {
    const client = new NotesClient();

    fetch.mockResponseOnce({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: 'note test' }),
    });

    client.createNote((response) => {
      expect(response.status).toBe(200);
    });
    done();
  });
});
