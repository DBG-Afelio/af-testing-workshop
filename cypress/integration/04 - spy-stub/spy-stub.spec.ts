/// <reference types="cypress" />

describe('Integration tests', () => {
    beforeEach(() => {
      Cypress.config(
        'baseUrl', 'http://localhost:3000'
      );
    });

    it('real toppings request should response with 200 status, have application/json header aand contain an array of 2 elements in its body', () => {
      cy.request('toppings').as('toppings');
      cy.get('@toppings')
      .then((response) => {
        console.log('response', response);
        expect(response).to.be.a('object');
        expect(response.status).to.be.equal(200);
        expect(response.headers)
          .to.have.property('content-type')
          .and.match(/application\/json/);
        expect(response.body)
          .to.be.a('array');
      })
      .its('body')
      .should('have.length', 12);
    });

    it('GET pizzas should return 3 elements', () => {});
    it('POST pizzas should return the same pizza with an id', () => {
      const newPizza = {
        name: 'My Favorite',
        toppings: ['anchovy', 'bacon', 'sweetcorn'],
        sizes: []
      };
      cy.request('POST', 'pizzas', newPizza).as('newPizza');

      cy.get('@newPizza')
        .its('status')
        .should('be.eq', 201);

        cy.get('@newPizza')
        .its('body')
        .should('be.a', 'object')
        .and('have.ownProperty', 'id')
        .and('be.a', 'number')
        .and('be.greaterThan', 0);

    });

    it('Delete one pizza should ', () => {});

    it('call Delete on each pizza should empty pizzas list', () => {});

    it('Add a new Pizza, get the details and delete it', () => {});

    it('Complete flux with seed', () => {});
});

describe('Mocked test', () => {
  beforeEach(() => {


  });

  it('With server default configuration get pizzas should response an empty array', () => {
    cy.server(
      {
        delay: 1000,
        response: []
      }
    ); // valeur par défaut des routes
    cy.route('http://localhost:3000/pizzas');
    cy.visit('http://localhost:4200');
    cy.get('pizza-item')
      .should('have.length', 0);
  });

  it('With a specific mocked pizza list, interface should show the right number of pizza after 1000ms', () => {
    cy.server(
      {
        delay: 1000,
        response: []
      }
    ); // valeur par défaut des routes
      const mockedPizzas = [
          {
            'name': 'The Inferno DB',
            'toppings': [
              'chili',
              'basil',
              'pepperoni',
              'olive',
              'sweetcorn',
              'anchovy',
              'mozzarella',
              'pepper',
              'tomato'
            ],
            'id': 1,
            'sizes': []
          },
          {
            'name': 'Seaside Surfin\'',
            'toppings': [
              'mozzarella',
              'mushroom',
              'anchovy',
              'pepper',
              'olive',
              'onion',
              'sweetcorn',
              'tomato'
            ],
            'id': 2
          }
      ];

    cy.route('http://localhost:3000/pizzas', mockedPizzas).as('pizzas');
    cy.visit('http://localhost:4200');
    cy.get('pizza-item')
      .should('have.length', 2);
  });

  it('same with fixture and alias', () => {
    cy.server({force404: true}); // valeur par défaut des routes
    cy.route('http://localhost:3000/pizzas', 'fixture:pizzas');
    cy.visit('http://localhost:4200');
    cy.get('pizza-item')
      .should('have.length', 3);
  });

  it('Idem sauf qu\'on attends le retour des services toppings+pizza ', () => {
    cy.server(); // valeur par défaut des routes
    cy.route('http://localhost:3000/pizzas', 'fixture:pizzas')
      .as('pizzas');
    cy.route('http://localhost:3000/toppings', 'fixture:toppings')
      .as('toppings');


    cy.visit('http://localhost:4200');

    cy.wait(['@pizzas', '@toppings'])
      .get('pizza-item')
      .last()
      .find('img')
      .should('have.length', 6);
  });

  it.only('Le service get /toto ne doit pas être appelé', () => {
    cy.server();
    cy.route({
      url: 'http://localhost:3000/toto',
      response: {},
      onRequest: () => {
        totocall = true;
      }
    })
    .as('toto');
    cy.route({
      url: 'http://localhost:3000/toppings',
      response: {},
      onRequest: () => {
        console.log('request toppings');
      }
    }).as('toppings');
    cy.visit('http://localhost:4200');
    cy.wait(1000);
    cy.wrap(totocall).should('be.false');
  });

  it('should toppings selected when navigate on david\'s pizza', () => {});
  it('should navigate on correct route when click on pizza thumb', () => {});
  it('should call once toppings when detail page is called after list page', () => {});
});

describe('Spies / stub', () => {
  it('Simple spy', () => {
    const foo = {
      log: () => {
        console.log('spy');
        return 'implement';
      }
    };
    cy.spy(foo, 'log').as('log');
    cy.visit('http://localhost:4200');
    foo.log();
    cy.get('@log')
      .should('has.be.calledOnce')
      .should('has.returned', 'implement');
  });

  it('Simple stub', () => {
    const foo = {
      log: (texte) => {
        console.log('stub:', texte);
        return 'implement';
      }
    };
    cy.stub(foo, 'log')
      .withArgs('something')
      .as('log')
      .returns('stub');

    cy.visit('http://localhost:4200');
    foo.log('something');
    foo.log('something else');
    cy.get('@log')
      .should('has.be.calledOnce')
      .should('has.be.calledWithExactly', 'something')
      .should('has.returned', 'stub' );
  });

  it('Quand on navigue sur la page de détails le console.log doit être appelé avec la valeur init', () => {
    cy.visit('http://localhost:4200', {
      onBeforeLoad: (win) => {
        cy.spy(win.console, 'log').as('log');
      }
    });
    cy.get('pizza-item').first().click();
    cy.get('@log')
      .should('has.be.called')
      .should('has.be.calledWithExactly', 'init');
  });

  it('Quand on delete une pizza, la modale confirm doit être appelée et bloquer la suppression', (done) => {
    cy.on('window:confirm', (str) => {
      console.log('confirm');
      expect(str).contain('Are you sure?');
      done();
      return false; //reject
    });
    cy.server();
    cy.route('http://localhost:3000/pizzas').as('pizzas');
    cy.visit('http://localhost:4200');
    cy.get('pizza-item')
      .eq(3)
      .click();
    cy.get('[data-cy=delete-button]')
      .click();
  });
});

describe('Test end to end', () => {
  it('test a complete flux list/insertion/delete/list', () => {});
});
