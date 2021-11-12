/// <reference types="cypress" />

describe('Image search', () => {
  beforeEach(() => cy.visit('/'));

  it('should not return any images when search term is invalid', () => {
    cy.intercept('search/photos?query=jehrjehrjehrjkerae+').as(
      'invalidSearchResults'
    );

    cy.get('[data-testid="search-input"]').type('jehrjehrjehrjkerae {enter}');
    cy.wait('@invalidSearchResults');
    cy.contains('No content found');
    cy.get('[data-test-id="image-gallery"] img').should('not.exist');
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-testid=search-input]').clear();
    cy.get('[data-testid=search-input]').type('2342343{enter}');
    cy.get('.grid > :nth-child(3)').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });

  it('should return images when search term is valid', () => {
    cy.intercept('search/photos?query=pancakes+').as('validSearchResults');

    cy.get('[data-testid="search-input"]').type('pancakes {enter}')
    cy.wait('@validSearchResults');
    cy.get('[data-test-id="image-gallery"] img').should('be.visible').and('have.length', 10);
  });
});
