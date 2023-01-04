/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');

describe('Page view', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays 2 paragraphs', () => {
    const view = new View();

    expect(document.querySelectorAll('p').length).toBe(2);
  });

  it('adds a paragraph and displays 3 paragraphs', () => {
    // Arrange
    const view = new View();

    // Act
    view.addParagraph();

    // Assert
    const paragraphElements = document.querySelectorAll('p');
    expect(paragraphElements.length).toBe(3);
    // expect(paragraphElements[2].textContent).toBe(
    //   'This paragraph has been dynamically added by JavaScript!'
    // );
    expect(paragraphElements[2].innerText).toBe(
      'This paragraph has been dynamically added by JavaScript!'
    );
  });

  it('removes all paragraphs from the document', () => {
    // Arrange
    const view = new View();

    // Act
    view.clearParagraphs();

    // Assert
    expect(document.querySelectorAll('p').length).toBe(0);
  });
});
