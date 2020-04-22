/// <reference types="cypress" />

describe('First assertion', () => {
  beforeEach(() => {
    cy.visit('localhost:4200');
  });

  it('Title properly setted', () => {
    cy.title().should('include', 'Cypress Workshop');
  });

});
