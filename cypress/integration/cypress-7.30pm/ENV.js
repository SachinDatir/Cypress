///<reference types="cypress" />
describe('verify the login form', () => {
    it('verify the login for orange hrm', () => {
        let baseUrl = Cypress.config().baseUrl
        let pass = Cypress.config().password
        cy.log(baseUrl)
    })
})