///< reference types="cypress" />
describe('verify the login functionality', function () {

    it('validate login with correct credentials', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('h1').should('be.visible').and('have.text', 'Dashboard')

    })

    it.only('validate login with invalid credentials', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin11')
        cy.get('#btnLogin').click()
        cy.get('#spanMessege').should('be.visible').and('have.text', 'Invalid credentials')
    })
})