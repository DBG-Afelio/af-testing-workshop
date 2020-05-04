/// <reference types="cypress" />

describe('Integration tests', () => {
    beforeEach(() => {
      Cypress.config(
        'baseUrl', 'http://localhost:3000'
      );
    });

    it('real toppings request should response with 200 status, have application/json header aand contain an array of 2 elements in its body', () => {

    });

    it('GET pizzas should return 3 elements', () => {});
    it('POST pizzas should return the same pizza with an id', () => {

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

  });

  it('With a specific mocked pizza list, interface should show the right number of pizza after 1000ms', () => {

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
  });

  it('same with fixture and alias', () => {

  });

  it('Idem sauf qu\'on attends le retour des services toppings+pizza ', () => {

  });

  it.only('Le service get /toto ne doit pas être appelé', () => {

  });

  it('should toppings selected when navigate on david\'s pizza', () => {});
  it('should navigate on correct route when click on pizza thumb', () => {});
  it('should call once toppings when detail page is called after list page', () => {});
});

describe('Spies / stub', () => {
  it('Simple spy should call log method and rreturn implement', () => {
    const foo = {
      log: () => {
        console.log('spy');
        return 'implement';
      }
    };

  });

  it('Simple stub: should call log method once with something argument and return stub', () => {
    const foo = {
      log: (texte) => {
        console.log('stub:', texte);
        return 'implement';
      }
    };
    foo.log('something');
    foo.log('something else');

  });

  it('Quand on navigue sur la page de détails le console.log doit être appelé avec la valeur init', () => {

  });

  it('Quand on delete une pizza, la modale confirm doit être appelée et bloquer la suppression', (done) => {

  });
});

describe('Test end to end', () => {
  it('test a complete flux list/insertion/delete/list', () => {});
});
