/// <reference types="cypress" />

describe('Image search', () => {
  beforeEach(() => {
    cy.server();
    cy.route('photos?page=2').as('defaultSearchResults');

    cy.visit('/').wait('@defaultSearchResults', {
      timeout: Cypress.config('defaultCommandTimeout'),
    });
  });

  it('should have the correct values and styling', () => {
    cy.get('h1.header').should('have.text', 'ReactSplash');
    cy.get('h2.sub.header').should(
      'have.text',
      'The internet’s source of freely usable images. Well, powered by unsplash API...'
    );
    cy.get('[data-testid="search-input"]').should(
      'have.attr',
      'placeholder',
      'Search free high-resolution photos'
    );
    cy.get('.search.icon');
  });
});
