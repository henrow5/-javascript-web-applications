const { response } = require('express');
const NotesClient = require('./notesClient');
// jest.setTimeout(20000);
require('jest-fetch-mock').enableMocks();

describe('NotesClient class', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('calls fetch and loads data', (done) => {
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

  it('calls fetch and POSTS data', () => {
    const client = new NotesClient();

    client.createNote('test note');

    // method: 'POST',
    // headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify({ content: noteText }),

    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual('http://localhost:3000/notes');
    expect(fetch.mock.calls[0][1].method).toEqual('POST');
    expect(fetch.mock.calls[0][1].headers).toEqual({
      'Content-Type': 'application/json',
    });
    expect(fetch.mock.calls[0][1].body).toEqual('{"content":"test note"}');
  });

  it('calls fetch and sends DELETE request', () => {
    const client = new NotesClient();

    client.resetNotes();
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual('http://localhost:3000/notes');
    expect(fetch.mock.calls[0][1].method).toEqual('DELETE');
  });

  it('calls fetch and sends POST request to emojify API', (done) => {
    const client = new NotesClient();

    fetch.mockResponseOnce(
      JSON.stringify({
        emojified_text: 'Hello, :earth_africa:',
      })
    );

    client.emojify('test note', (data) => {
      expect(data.emojified_text).toEqual('Hello, :earth_africa:');
      done();
    });

    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual(
      'https://makers-emojify.herokuapp.com'
    );
    expect(fetch.mock.calls[0][1].method).toEqual('POST');
    expect(fetch.mock.calls[0][1].headers).toEqual({
      'Content-Type': 'application/json',
    });
    expect(fetch.mock.calls[0][1].body).toEqual('{"text":"test note"}');
  });
});
