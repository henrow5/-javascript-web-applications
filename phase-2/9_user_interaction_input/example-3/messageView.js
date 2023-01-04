class MessageView {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');
    this.messageInputEl = document.querySelector('#message-input');

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
    // document.querySelector('#main-container').append(messageElement);
    // console.log('Thanks for clicking me!');
    // const message = document.querySelector('#message-input').value;
    // messageElement.innerText = message;

    const newDiv = document.createElement('div');
    newDiv.id = 'message';
    newDiv.textContent = this.messageInputEl.value;
    this.messageInputEl.value = '';
    this.mainContainerEl.append(newDiv);
  }

  hideMessage() {
    // document.querySelector('#message').remove();

    const message = document.querySelector('#message');
    message.remove();
  }
}

module.exports = MessageView;
