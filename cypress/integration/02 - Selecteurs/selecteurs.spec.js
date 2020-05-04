/// <reference types="cypress" />

describe("Querying et Assert", () => {
  beforeEach(() => {
    cy.visit("localhost:4200");
  });

  it("First data-cy pizza should have class pizza-item", () => {
    cy.get("[data-cy=pizza]:first").should("have.class", "pizza-item");
  });

  it("find an element with  title : The Inferno DB should have a href with pattern product/{id}", () => {
    cy.get("pizza-item")
      .contains("The Inferno DB")
      .should("have.attr", "href")
      .and("be.match", /products\/\d+/);
  });

  it("each pizza should have pizza.svg as source of first img markup", () => {
    cy.get("products")
      .find("pizza-item")
      .find("img:first")
      .should("have.attr", "src")
      .and("contain", "pizza.svg");
  });

  it("it should contains 3 pizza-item and the first should contain 'product' in href", () => {
    cy.get("products")
      .should("be.visible")
      .find("pizza-item a[href]")
      .should("have.length", 3)
      .eq(1)
      .invoke("attr", "href")
      .should("contain", "products");
  });

  it("Each pizzas has a unique name", () => {
    cy.get("products")
      .find("pizza-item")
      .then(($pizza) => {
        const tab = [];
        $pizza.each((index, pizzaItemElement) => {
          tab.push(Cypress.$(pizzaItemElement).find("h4").text());
        });
        cy.wrap(tab);
        // or return cy.wrap(tab);
      })
      .should((allText) => {
        expect(Cypress._.uniq(allText)).be.eql(allText);
      });
  });
});
