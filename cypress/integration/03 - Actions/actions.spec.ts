// //LFA
// describe('Action  assertion', () => {
//   beforeEach(() => {
//     cy.visit('localhost:4200');
//   });

//   it.only('test over', () => {
//     cy.get('pizza-item:first')
//       .trigger('mouseover')
//       .should('be.visible');

//   });

//   it('test navigation', () => {
//     cy.get('pizza-display > .pizza-display:first > .pizza-display__base > [src="/assets/img/toppings/tomato.svg"]')
//       .click();
//     cy.location('pathname')
//       .should('match', /^\/products\/\d+$/);
//   });

//   it('intercept click on parent', () => {
//     // listen click on toppics parent ul?
//     // click on toppics and outside with coordonate
//   });

//   it('Scroll on new pizza', () => {

//   });

//   it('Show V bullets when toppings selected and disapeared when unselected', () => {
//   });

//   it('Animation when pizzas overed', () => {
//   });



//   it('navigation ???', () => {
//   });

//   it('dblclick simple ???', () => {
//   });

//   it('select simple ???', () => {
//   });

//   it('trigger ???', () => {
//   });

//   it('Detached???', () => {
//   });

//   it('click on coordonates ???', () => {
//   });

//   it('history back ???', () => {
//   });

//   it('history back ???', () => {
//   });

//   it ('automate flow???', () => {
//     // wait response
//   });
//   it ('share context flow???', () => {
//     // Mocha automatically shares contexts for us across all applicable hooks for each test.
//     // Additionally these aliases and properties are automatically cleaned up after each test.


//     // describe('parent', () => {
//     //   beforeEach(() => {
//     //     cy.wrap('one').as('a')
//     //   })

//     //   context('child', () => {
//     //     beforeEach(() => {
//     //       cy.wrap('two').as('b')
//     //     })

//     //     describe('grandchild', () => {
//     //       beforeEach(() => {
//     //         cy.wrap('three').as('c')
//     //       })

//     //       it('can access all aliases as properties', function () {
//     //         expect(this.a).to.eq('one')   // true
//     //         expect(this.b).to.eq('two')   // true
//     //         expect(this.c).to.eq('three') // true
//     //       })
//     //     })
//     //   })
//     // })

//   });

//   it ('or with json fixture', () => {
//     // beforeEach(() => {
//     //   // alias the users fixtures
//     //   cy.fixture('users.json').as('users')
//     // })

//     // it('utilize users in some way', function () {
//     //   // access the users property
//     //   const user = this.users[0]

//     //   // make sure the header contains the first
//     //   // user's name
//     //   cy.get('header').should('contain', user.name)
//     // })

//     // Accessing aliases as properties with this.* will not work if you use arrow functions for your tests or hooks.
//     // By using cy.get() we avoid the use of this.
//     // Keep in mind that there are use cases for both approaches because they have different ergonomics.
//     // When using this.users we have access to it synchronously, whereas when using cy.get('@users') it becomes an asynchronous command.
//   });

//   it('Alias on DOm Elements replaay de querying if they are no more present', function() {
//     // Aliases have other special characteristics when being used with DOM elements.

//     // After you alias DOM elements, you can then later access them for reuse.

//     // // alias all of the tr's found in the table as 'rows'
//     // cy.get('table').find('tr').as('rows')
//     // Internally, Cypress has made a reference to the <tr> collection returned as the alias “rows”. To reference these same “rows” later, you can use the cy.get() command.

//     // // Cypress returns the reference to the <tr>'s
//     // // which allows us to continue to chain commands
//     // // finding the 1st row.
//     // cy.get('@rows').first().click()
//     // Because we’ve used the @ character in cy.get(), instead of querying the DOM for elements, cy.get() looks for an existing alias called rows and returns the reference (if it finds it).

//     //     When we reference @firstTodo, Cypress checks to see if all of the elements it is referencing are still in the DOM. If they are, it returns those existing elements. If they aren’t, Cypress replays the commands leading up to the alias definition.

//     // In our case it would re-issue the commands: cy.get('#todos li').first(). Everything works because the new <li> is found.

//     // /!\
//       // cy.get('#nav header .user').as('user')  (good)
//       // cy.get('#nav').find('header').find('.user').as('user')  (bad)
//    })

//   it('Alias with route', function() {
//   })

//   it('Alias with request', function() {
//     // cy.request('https://jsonplaceholder.cypress.io/comments').as('comments')

//     // // other test code here

//     // cy.get('@comments').should((response) => {
//     //   if (response.status === 200) {
//     //       expect(response).to.have.property('duration')
//     //     } else {
//     //       // whatever you want to check here
//     //     }
//     //   })
//     // })
//   })
// });


// // Génération de flux

// // pouvoir déclencher des actions
// // Type avec touche meta
// // Focus, Blur et message d'erreur
// // clear()
// // Scroll (visible), mouseover
// // click avec position => click sur le toppings ou a côté

// // plusieurs example/kata de flux métiers intégrés

