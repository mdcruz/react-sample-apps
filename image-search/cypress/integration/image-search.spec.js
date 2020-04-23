/// <reference types="cypress" />

describe('Image search', () => {
  beforeEach(() => {
    cy.server();
    cy.route('photos?page=1').as('defaultSearchResults');

    cy.visit('/').wait('@defaultSearchResults', {
      timeout: Cypress.config('defaultCommandTimeout'),
    });

    cy.get('[data-testid="search-input"]').as('searchInput');
    cy.get('[data-test-id="image-gallery"] img').as('imageGallery');
  });

  it('should not return any images when search term is invalid', () => {
    cy.route('search/photos?query=jehrjehrjehrjkerae+').as(
      'invalidSearchResults'
    );

    cy.get('@searchInput')
      .type('jehrjehrjehrjkerae {enter}')
      .wait('@invalidSearchResults', {
        timeout: Cypress.config('defaultCommandTimeout'),
      })
      .then(() => cy.contains('No content found').should('be.visible'));

    cy.get('@imageGallery').should('not.be.visible');
  });

  it('should return images when search term is valid', () => {
    cy.route('search/photos?query=pancakes+').as('validSearchResults');

    cy.get('@searchInput')
      .type('pancakes {enter}')
      .wait('@validSearchResults', {
        timeout: Cypress.config('defaultCommandTimeout'),
      });

    cy.get('@imageGallery').should('be.visible').and('have.length', 10);
  });

  it('should return mock data', () => {
    cy.fixture('unsplash').as('unsplashData');
    cy.route('search/photos?query=mock+', '@unsplashData');

    cy.get('@searchInput').type('mock {enter}');
    cy.get('@imageGallery')
      .should('be.visible')
      .and('have.attr', 'description', 'This is a mock data')
      .and('have.length', 10);
  });
});
