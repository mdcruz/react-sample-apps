/// <reference types="@applitools/eyes-cypress" />
/// <reference types="cypress" />

describe('Image search', () => {
  beforeEach(() => {
    cy.server();
    cy.route('photos?page=1').as('defaultSearchResults');

    cy.visit('/').wait('@defaultSearchResults', {
      timeout: Cypress.config('defaultCommandTimeout'),
    });
  });

  it('should look ok visually', () => {
    cy.eyesOpen();
    cy.eyesCheckWindow();
    cy.eyesClose();
  });
});
