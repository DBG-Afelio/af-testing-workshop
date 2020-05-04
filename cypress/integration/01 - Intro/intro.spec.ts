// reference pour intellisense
/// <reference types="cypress" />
describe('Introduction', () => {
    beforeEach(() => {
        // cy.visit('localhost:4200');
        cy.visit('/'); // Url is defined in cypress.json
    });

    it('Title properly setted', () => {
        cy.title().should('include', 'Cypress Workshop');
    });

    it('should get element with a data-cy', () => {
        // Works bu what if multiple div .products or if .products class changes ?
        cy.get('div .products');
        // This is better
        cy.get('[data-cy=product-component]');
        // We can create a commands to do it
        cy.getByData('product-component');
    });

    it.skip('should get element with a data-cy fails', () => {
        cy.get('[data-cy=bonjour]');
    });
});
