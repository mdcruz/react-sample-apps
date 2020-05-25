/// <reference types="cypress" />

describe('Image search with Mock API', () => {
  it('should return mock data', () => {
    cy.fixture('unsplash').as('unsplashData');
    cy.server().route({
      method: 'GET',
      url: 'search/photos?query=mock+',
      response: '@unsplashData',
    });

    cy.visit('/');

    cy.get('[data-testid="search-input"]').type('mock {enter}');
    cy.get('[data-test-id="image-gallery"] img')
      .should('be.visible')
      .and('have.attr', 'description', 'This is a mock data')
      .and('have.length', 10);
  });

  it('should not display images when API does not return data', () => {
    cy.server().route({
      method: 'GET',
      url: 'search/photos?query=tree+',
      status: 200,
      response: {
        results: [],
        total: 0,
      },
    });

    cy.visit('/');

    cy.get('[data-testid="search-input"]').type('tree {enter}');
    cy.get('[data-test-id="image-gallery"] img').should('not.be.visible');
  });
});
