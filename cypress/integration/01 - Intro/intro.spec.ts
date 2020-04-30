// LFA
// reference pour intellisense
/// <reference types="cypress" />

describe('First assertion', () => {
  beforeEach(() => {
    cy.visit('localhost:4200');
  });

  it('Title properly setted', () => {
    cy.title().should('include', 'Cypress Workshop');
  });

  // describe, it, it.only, it.skip

  // get simple + Montrer l'utilisation du data-cy

  // Déplacer le localhost dans fichier de config
});
