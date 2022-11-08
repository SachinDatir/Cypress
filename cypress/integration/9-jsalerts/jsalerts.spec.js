///<reference types="cypress" />
describe('verify the js alerts', () => {
    it('verify the normal js alerts', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        // window 
        cy.on('window:alert', (str) => {
            expect(str).to.eql('I am a JS Alert')
        })
        cy.contains('Click for JS Alert').click()
        cy.on('window:alert', function () {  ///click on ok
            return true
        })
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })
    it('verify the js confirm alert', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:alert', (str) => {
            expect(str).to.eql('I am a JS Confirm')
        })
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', function () {
            return true
        })
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

    it('verify the js confirm alert', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:alert', (str) => {
            expect(str).to.eql('I am a JS Confirm')
        })
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', function () {
            return false
        })
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })
    it.only('verify the js prompt alert', function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function (win) {
            cy.stub(win, 'prompt').returns('i am new to cypress')
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').should('contain', 'i am new to cypress')
    })




})