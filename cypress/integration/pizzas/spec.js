/// <reference types="cypress"/>
describe('pizzas page', () => {

    it('should display no pizzas if there is no pizzas', () => {
        cy.server();
        cy.route('GET', '/pizzas', []).as('pizzas');
        cy.visit('/');
        cy.wait('@pizzas');
        cy.getByData('no-pizza') // No need to test more. If cannot get this element, fail
    })

    it('should display pizzas', () => {
        cy.server();
        cy.route('GET', '/pizzas', 'fixture:pizzas.json').as('pizzas');
        cy.visit('/');
        cy.wait('@pizzas');
        cy.getByData('pizza');
    });

});
