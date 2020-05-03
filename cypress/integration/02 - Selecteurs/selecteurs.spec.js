describe('Querying et Assert', () => {
  beforeEach(() => {
    cy.visit('localhost:4200');
  });

  describe('1. Querying', () => {

    it('base synthax', () => {
      cy.get('[data-cy=pizza]:first')
      .should('have.class', 'pizza-item');
    });

    it('find an element with specific title', () => {
      cy.get('pizza-item')
        .contains('The Inferno DB')
        .should('have.attr', 'href')
        .and('be.match', /products\/\d+/);
    });

    it('retryability and chainability', () => {
      cy.get('products')
      .should('be.visible')
      .find('pizza-item a[href]')
      .should('have.length',3)
      .eq(1)
      .invoke('attr','href')
      .should('contain','products');

      cy.get('products')
      .should('be.visible')
      .find('pizza-item a[href]')
      .should('have.length',3)
      .eq(1)
      .should('have.attr', 'href')
      .should('contain','products')
    });

    it('three pizzas have pizza.svg as source of first img markup', () => {
      cy.get('products')
        .find('pizza-item')
        .find ('img:first')
        .should('have.attr', 'src')
        .and('contain', 'pizza.svg')
    });

    it('Each pizzas has a unique name', () => {
      cy.get('products')
        .find('pizza-item')
        .then(($pizza) => {
          const tab = [];
          $pizza.each((index, pizzaItemElement) => {
            tab.push(Cypress.$(pizzaItemElement)
              .find('h4')
              .text())
          })
          cy.wrap(tab);
          // or return cy.wrap(tab);
        })
        .should((allText) => {
          expect(Cypress._.uniq(allText)).be.eql(allText);
        })
    });
  })
});


// // DBG
// // get et selecteur saunce jquery

// // synthaxe du should ChaiJs dans chaine caractère
// // - contains
// // - .should('have.text', 'Column content')
// // - .should('contain', 'Column content')
// // - .should('have.html', 'Column content')
// // - .should('match', 'td')
// // - // to match text content against a regular expression
//       // first need to invoke jQuery method text()
//       // and then match using regular expression
//       // .invoke('text') ---> /!\
//       // .should('match', /column content/i)
// // - have class
// // - cy.get('li.selected').should('have.length', 3)
// // - cy.get('form').find('input').should('not.have.class', 'disabled')
// // - cy.get('textarea').should('have.value', 'foo bar baz')
// // - cy.get('button').should('be.visible') --> Avec le scroll ???
// // - cy.get('#loading').should('not.exist')

// // Traversal/Querying with cypress (voir aussi example/traversing)
// // - contains and parents
// // - eq()
// // - un autre
// // - and/sould.should

// // ajout d'une commande pour le cy-data

// utilisation de then dans should
//.should(($p) => {
// // https://on.cypress.io/$
// // return an array of texts from all of the p's
// // @ts-ignore TS6133 unused variable
// const texts = $p.map((i, el) => Cypress.$(el).text())

// // jquery map returns jquery object
// // and .get() convert this to simple array
// const paragraphs = texts.get()

// // array should have length of 3
// expect(paragraphs, 'has 3 paragraphs').to.have.length(3)

// // use second argument to expect(...) to provide clear
// // message with each assertion
// expect(paragraphs, 'has expected text in each paragraph').to.deep.eq([
//   'Some text from first p',
//   'More text from second p',
//   'And even more text from third p',
// ])
// })

// // then => n'est pas répété répète pas
// // should bien
// it('finds element by class name regex', () => {
//   cy.get('.docs-header')
//     .find('div')
//     // .should(cb) callback function will be retried
//     .should(($div) => {
//       expect($div).to.have.length(1)

//       const className = $div[0].className

//       expect(className).to.match(/heading-/)
//     })
//     // .then(cb) callback is not retried,
//     // it either passes or fails
//     .then(($div) => {
//       expect($div, 'text content').to.have.text('Introduction')
//     })
// })
// it('yields the returned value to the next command', () => {
//   cy.wrap(1)
//     .then((num) => {
//       expect(num).to.equal(1)

//       return 2
//     })
//     .then((num) => {
//       expect(num).to.equal(2)
//     })
// })

// // Compare deux valeurs recherchées
// it('matches unknown text between two elements', () => {
//   /**
//    * Text from the first element.
//    * @type {string}
//   */
//   let text

//   /**
//    * Normalizes passed text,
//    * useful before comparing text with spaces and different capitalization.
//    * @param {string} s Text to normalize
//   */
//   const normalizeText = (s) => s.replace(/\s/g, '').toLowerCase()

//   cy.get('.two-elements')
//     .find('.first')
//     .then(($first) => {
//       // save text from the first element
//       text = normalizeText($first.text())
//     })

//   cy.get('.two-elements')
//     .find('.second')
//     .should(($div) => {
//       // we can massage text before comparing
//       const secondText = normalizeText($div.text())

//       expect(secondText, 'second text').to.equal(text)
//     })
// })
