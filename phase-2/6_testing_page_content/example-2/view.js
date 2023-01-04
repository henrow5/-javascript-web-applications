class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    const paragraphEl = document.createElement('p');
    // paragraphEl.textContent =
    // 'This paragraph has been dynamically added by JavaScript!';
    paragraphEl.innerText =
      'This paragraph has been dynamically added by JavaScript!';
    this.mainContainerEl.append(paragraphEl);
  }

  clearParagraphs() {
    const paragraphsToRemove = document.querySelectorAll('p');
    paragraphsToRemove.forEach((paragraph) => paragraph.remove());
  }
}

module.exports = View;
