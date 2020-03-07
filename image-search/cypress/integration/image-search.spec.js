/// <reference types="Cypress" />

describe('Image search', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-testid="search-input"]').as('searchInput');
    cy.get('[data-test-id="image-gallery"] img').as('imageGallery');
  });

  it('should not return any images when search term is invalid', () => {
    cy.get('@searchInput').type('jehrjehrjehrjkerae {enter}');
    cy.contains('No content found').should('be.visible');
    cy.get('@imageGallery').should('not.be.visible');
  });

  it('should return images when search term is valid', () => {
    cy.visit('/');
    cy.get('@searchInput').type('pancakes {enter}');
    cy.get('@imageGallery')
      .should('be.visible')
      .and('have.length', 10);
  });

  it('should return mock data', () => {
    cy.fixture('unsplash').as('unsplashData');
    cy.server();
    cy.route('search/photos?query=mock+', '@unsplashData');

    cy.get('@searchInput').type('mock {enter}');
    cy.get('@imageGallery').should(
      'have.attr',
      'description',
      'This is a mock data'
    );
  });
});
