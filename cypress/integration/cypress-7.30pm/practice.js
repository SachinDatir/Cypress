///<reference types="cypress" />
describe('', () => {
    it.skip('', () => {
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('iphone13')
            .get('[type="submit"]').click().find('')
        // cy.get('[type="submit"]').click()
    })


    it('TC-01 To test with valid Crendential', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('problem_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('#inventory_container').children('div').find('.inventory_item_name').first('Sauce Labs Backpack')
        cy.get('button[class="btn btn_primary btn_small btn_inventory"]').first().click()
    })

})