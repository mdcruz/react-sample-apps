/// <reference types="@applitools/eyes-cypress" />
/// <reference types="cypress" />

describe.skip('Image search', () => {
  beforeEach(() => {
    cy.intercept('photos?page=1').as('defaultSearchResults');

    cy.visit('/');
    cy.wait('@defaultSearchResults');
  });

  it('should look ok visually', () => {
    cy.eyesOpen({
      appName: 'ReactSplash',
      batchName: 'Image search',
      browser: [
        { width: 1024, height: 768, name: 'chrome' },
        { width: 1024, height: 768, name: 'safari' },
        { deviceName: 'iPhone 5/SE' },
        { deviceName: 'iPad' },
      ],
    });

    cy.eyesCheckWindow();

    cy.eyesClose();
  });
});
