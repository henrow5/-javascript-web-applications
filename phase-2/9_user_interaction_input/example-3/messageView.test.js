/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('clicks the button and displays the message', () => {
    // Arrange
    const view = new MessageView();

    // Act
    const buttonEl = document.querySelector('#show-message-button');
    const messageInputEl = document.querySelector('#message-input');

    messageInputEl.value = 'hello world!';
    buttonEl.click();

    // Assert
    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('div#message').textContent).toEqual(
      'hello world!'
    );
    expect(messageInputEl.value).toBe('');
  });

  it('hides the message', () => {
    const view = new MessageView();

    // Show then hide message
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    const hideButtonEl = document.querySelector('#hide-message-button');
    hideButtonEl.click();

    // Assert that the message element is not on the page
    expect(document.querySelector('#message')).toBeNull();
  });
});
