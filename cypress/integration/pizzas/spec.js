/// <reference types="cypress"/>
describe('pizzas page', () => {

    const mockService = (value) => {
        cy.server();
        cy.route('GET', '/pizzas', value).as('pizzas');
        cy.visit('/');
        cy.wait('@pizzas');
    }

    it('should display no pizzas if there is no pizzas', () => {
        mockService([]);
        cy.getByData('no-pizza') // No need to test more. If cannot get this element, fail
    })

    it('should display pizzas', () => {
        mockService('fixture:pizzas.json');
        cy.getByData('pizza');
    });

    it('should have pizza with pizza palette img', () => {
        mockService('fixture:pizzas.json');
        cy.get('[data-cy="pizza"]')
            .should('descendants', 'img[src="/assets/img/pizza.svg"]')
    })

    it('should have all ingredient instead of onion on the inferno', () => {
        mockService('fixture:pizzas.json');
        cy.get('[data-cy="pizza"] h4')
            .contains('The Inferno')
            .parentsUntil('[data-cy="pizza"]')
            .should('descendants', 'img[src="/assets/img/toppings/tomato.svg"]')
            .and('descendants', 'img[src="/assets/img/toppings/pepper.svg"]')
            .and('descendants', 'img[src="/assets/img/toppings/mozzarella.svg"]')
            .and('descendants', 'img[src="/assets/img/toppings/anchovy.svg"]')
            .and('descendants', 'img[src="/assets/img/toppings/sweetcorn.svg"]')
            .and('descendants', 'img[src="/assets/img/toppings/olive.svg"]')
            .and('descendants', 'img[src="/assets/img/toppings/pepperoni.svg"]')
            .and('descendants', 'img[src="/assets/img/toppings/basil.svg"]')
            .and('descendants', 'img[src="/assets/img/toppings/mushroom.svg"]')
            .and('descendants', 'img[src="/assets/img/toppings/bacon.svg"]')
            .and('descendants', 'img[src="/assets/img/toppings/chili.svg"]')
            .and('not.descendants', 'img[src="/assets/img/toppings/onion.svg"]')
    });

    it('should go to new pizza form', () => {
        cy.getByData('new-pizza-btn').click();
        cy.url().should('match', /.*\/new$/)
    });

    it('should go to view pizza', () => {
        mockService('fixture:pizzas.json');
        cy.getByData('view-pizza-btn').first().click();
        cy.url().should('match', /.*\/products\/1$/)
    })

});
