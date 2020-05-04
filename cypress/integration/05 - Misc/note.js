/// <reference types="cypress" />
describe('Misc', () => {
    it('should be able to call lodash by cypress', () => {
        let obj = {};
        obj = Cypress._.set(obj, 'key', 'value');
        expect(obj).to.eql({ key: 'value' });
    });

    it('should take a screenshot', () => {
        cy.visit('/');
        cy.screenshot();
    });

    it('should take a screenshot of a pizza', () => {
        cy.visit('/');
        cy.getByData('pizza').eq(0).screenshot();
    });

    it('should iterate to an array using JQuery by cypress', () => {
        Cypress.$.each([0, 1, 2, 3], (index, value) => {
            expect(index).to.eq(value)
        })
    });

    it('should get a pizza on an Iphone 6', () => {
        cy.viewport('iphone-6');
        cy.visit('/');
        cy.getByData('pizza');
    })

    it('should get a pizza on a 500X600 screen', () => {
        cy.viewport(500, 600);
        cy.visit('/');
        cy.getByData('pizza');
    })
});
