describe('Action  assertion', () => {

    const goToPizzaForm = () => {
        return cy.getByData('new-pizza-btn').click();
    };

    const getTitleInput = () => {
        return cy.getByData('title-input');
    };

    const addPizza = (name, toppings) => {
        goToPizzaForm();
        getTitleInput().type(name);
        (toppings || []).map(t => {
            cy.getToppingByName(t).click();
        });
        cy.getByData('create-pizza-button').click();
    };

    const deletePizza = (name) => {
        cy.getPizzaByName(name).click();
        cy.getByData('delete-button').click();
    };

    beforeEach(() => {
        cy.visit('/');
    });

    it('should go to pizza form', () => {
        goToPizzaForm();
        cy.url().should('match', /.*\/new$/);
    });

    it('should fill pizza title', () => {
        const title = 'A pizza';
        goToPizzaForm();
        getTitleInput()
            .type(title)
            .should('have.value', title);
    });

    it.skip('should fill pizza title with a delay', () => {
        const title = 'A pizza';
        goToPizzaForm();
        getTitleInput()
            .type(title, { delay: 300 })
            .should('have.value', title);
    });

    it('should fill pizza title, press twice left arrow and press delete', () => {
        const title = 'A pizza';
        goToPizzaForm();
        getTitleInput()
            .type(title + '{leftarrow}{leftarrow}{del}')
            .should('have.value', 'A piza');
    });

    it('should clear pizza title after typing', () => {
        const title = 'A pizza';
        goToPizzaForm();
        getTitleInput()
            .type(title)
            .clear()
            .should('have.value', '');
    });

    it('should add a pizza with tomato and bacon', () => {
        const title = 'A pizza with tomato and bacon';
        addPizza('A pizza with tomato and bacon', ['tomato', 'bacon']);
        cy.getPizzaByName(title)
            .should('descendants', 'img[src="/assets/img/toppings/tomato.svg"]')
            .and('descendants', 'img[src="/assets/img/toppings/bacon.svg"]')
            .and('not.descendants', 'img[src="/assets/img/toppings/mozzarella.svg"]')
            .and('not.descendants', 'img[src="/assets/img/toppings/anchovy.svg"]')
            .and('not.descendants', 'img[src="/assets/img/toppings/sweetcorn.svg"]')
            .and('not.descendants', 'img[src="/assets/img/toppings/olive.svg"]')
            .and('not.descendants', 'img[src="/assets/img/toppings/pepperoni.svg"]')
            .and('not.descendants', 'img[src="/assets/img/toppings/basil.svg"]')
            .and('not.descendants', 'img[src="/assets/img/toppings/mushroom.svg"]')
            .and('not.descendants', 'img[src="/assets/img/toppings/chili.svg"]')
            .and('not.descendants', 'img[src="/assets/img/toppings/onion.svg"]');
    });

    it('should delete a pizza', () => {
        const title = 'Todelete';
        addPizza(title, ['tomato']);
        deletePizza(title);
        cy.getByData('pizza').should('not.contain.text', title);
    });

    it('should scroll to a pizza', () => {
        const toppings = ['tomato', 'bacon', 'mozzarella', 'anchovy', 'sweetcorn'];
        toppings.map((t) => {
            addPizza(`pizza ${t}`, [t]);
        });
        cy.getByData('pizza')
            .last()
            .scrollIntoView()
            // Check in view port
            .should($el => {
                const bottom = Cypress.config().viewportHeight;
                const rect = $el[0].getBoundingClientRect();

                expect(rect.top).not.to.be.greaterThan(bottom);
                expect(rect.bottom).not.to.be.greaterThan(bottom);
                expect(rect.top).not.to.be.greaterThan(bottom);
                expect(rect.bottom).not.to.be.greaterThan(bottom);
            });
    });

    it('should display error message required no blur', () => {
        goToPizzaForm();
        getTitleInput().focus().blur();
        cy.getByData('error-message').should('have.text', 'Pizza must have a name');
    });

    it('should hide error message on typing', () => {
        goToPizzaForm();
        getTitleInput().focus().blur();
        cy.getByData('error-message').should('have.text', 'Pizza must have a name');
        getTitleInput().type('test');
        cy.getByData('error-message').should('not.exist');
    });

    it('should update a pizza', () => {
        cy.getByData('pizza').eq(0).click();
        getTitleInput().clear().type('The modified title');
        cy.getByData('update-pizza-button').click();
        cy.getPizzaByName('The modified title');
    });

    it.only('should check item if clicking in other position than center', () => {
        goToPizzaForm();
        cy.getToppingByName('tomato')
            .click('bottom').should('have.class', 'active');
        cy.getToppingByName('onion')
            .click(80, 10).should('have.class', 'active');
    });

});


// Génération de flux

// click avec position => click sur le toppings ou a côté

