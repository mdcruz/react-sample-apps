/// <reference types="cypress" />

describe('Image search with Mock API', () => {
  it('should return mock data', () => {
    cy.intercept('search/photos?query=mock+', { fixture: 'unsplash.json'}).as('mockData');
    cy.visit('/');
    
    cy.get('[data-testid="search-input"]').type('mock {enter}');
    cy.wait('@mockData');
    cy.get('[data-test-id="image-gallery"] img')
      .should('be.visible')
      .and('have.attr', 'description', 'This is a mock data')
      .and('have.length', 10);
  });

  it('should not display images when API does not return data', () => {
    cy.intercept('GET', 'search/photos?query=mock+', {
      statusCode: 200, 
      body: { 
        results: [], total: 0
      }
    }).as('mockData');

    cy.visit('/');

    cy.get('[data-testid="search-input"]').type('mock {enter}');
    cy.wait('@mockData');
    cy.get('[data-test-id="image-gallery"] img').should('not.exist');
    cy.contains('No content found');
  });
});
