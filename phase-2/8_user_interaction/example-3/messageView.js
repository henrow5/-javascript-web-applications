class MessageView {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');

    this.buttonEl.addEventListener('click', () => {
      this.displayMessage();
    });

    this.hideButtonEl.addEventListener('click', this.hideMessage);

    // this.hideButtonEl.addEventListener('click', () => {
    //   this.hideMessage();
    // });
  }

  displayMessage() {
    // const messageElement = document.createElement('div');
    // messageElement.innerText = 'This is a message';
    // document.querySelector('#main-container').append(messageElement);

    const newDiv = document.createElement('div');
    newDiv.id = 'message';
    newDiv.textContent = 'This message displayed by JavaScript';
    this.mainContainerEl.append(newDiv);
    console.log('Thanks for clicking me!');
  }

  hideMessage() {
    // document.querySelector('#message').remove();

    const message = document.querySelector('#message');
    message.remove();
  }
}

module.exports = MessageView;
