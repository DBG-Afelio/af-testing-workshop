/*

LFA
 - Viewport
 - screenshot
 it('Cypress.Screenshot.defaults() - change default config of screenshots', function () {
      Cypress.Screenshot.defaults({
        blackout: ['.foo'],
        capture: 'viewport',
        clip: { x: 0, y: 0, width: 200, height: 200 },
        scale: false,
        disableTimersAndAnimations: true,
        screenshotOnRunFailure: true,
        beforeScreenshot () { },
        afterScreenshot () { },
      })
    })
 - variable d'environement

 => utils ...
it('Cypress._ - call a lodash method', () => {
  // https://on.cypress.io/_
  cy.request('https://jsonplaceholder.cypress.io/users')
    .then((response) => {
      let ids = Cypress._.chain(response.body).map('id').take(3).value()

      expect(ids).to.deep.eq([1, 2, 3])
    })
})


it('Cypress.$ - call a jQuery method', () => {
  // https://on.cypress.io/$
  let $li = Cypress.$('.utility-jquery li:first')

  cy.wrap($li)
    .should('not.have.class', 'active')
    .click()
    .should('have.class', 'active')
})

=> Viewport
=> window
*/
