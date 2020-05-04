// reference pour intellisense
/// <reference types="cypress" />
describe('Introduction', () => {
    beforeEach(() => {
    });

    it('Title properly setted', () => {
        cy.title().should('include', 'Cypress Workshop');
    });

    it('should get element with a data-cy', () => {

    });

    it.skip('should get element with a data-cy fails', () => {

    });
});
