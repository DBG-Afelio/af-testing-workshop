
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


// Checker le payload du backend (test integration)

// Logique de mock et non mock
// Alias
// fixture
// Cy.wait pour un ou deux appels (ex toppings, listPizzas)

// stub & spies
// pour les methodes window (sessionStorage, confirm)

// location => exemple d'url quand on click sur la pizza => examples/
  // cy.go('back')
  // cy.reload(true)
  // cy.visit('https://example.cypress.io/commands/navigation', {
    timeout: 50000, // increase total time for the visit to resolve
    onBeforeLoad (contentWindow) {
      // contentWindow is the remote page's window object
      expect(typeof contentWindow === 'object').to.be.true
    },
    onLoad (contentWindow) {
      // contentWindow is the remote page's window object
      expect(typeof contentWindow === 'object').to.be.true
    },
  })

  // cy.route
  // cy.request
  // cy.server
