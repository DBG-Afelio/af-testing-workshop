
/// <reference types="cypress" />

// Please be aware that Cypress only currently supports intercepting XMLHttpRequests.
// Requests using the Fetch API and other types of network requests like page loads and <script>
// tags will not be intercepted or visible in the Command Log. See #95 for more details and temporary workarounds.

// To begin stubbing responses you need to do two things.

// Start a cy.server()
// Provide a cy.route()


// ------------------------
// By default, Cypress is configured to ignore requests that are used to fetch static content like .js or .html files.
// This keeps the Command Log less noisy. This option can be changed by overriding the default whitelisting in the cy.server() options.

describe('First assertion', () => {
  beforeEach(() => {
    cy.server();
    cy.fixture('toppings.json').as('toppingsListJSON');
    cy.route('GET', '/toppings', '@toppingsListJSON');
    cy.visit('localhost:4200');

  });
  context('navigation home > new pizza', function() {

    it('Toppings correctly initiate', function () {
      cy.get('.products__new > .btn')
        .click();
      cy.get('.pizza-toppings').as('toppingsList');

      cy.get('@toppingsList')
        .children()
        .should('have.length', 13);
    });
  });

});
