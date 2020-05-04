/// <reference types="cypress" />
// add custom command to Cypress declaration
// see https://github.com/cypress-io/cypress-example-todomvc/blob/master/cypress/support/index.d.ts


declare namespace Cypress {
    interface Chainable<Subject> {
        getByData(text: string): Chainable<any>;
        getToppingByName(name): Chainable<any>;
        getPizzaByName(name): Chainable<any>;
    }
}
