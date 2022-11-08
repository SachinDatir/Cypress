///<reference types="cypress" />

describe('window commands', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php')
    })
    it('verify location property of window', () => {
        cy.window().should((win) => {
            console.log(win)
            expect(win.location.href).to.eq('http://automationpractice.com/index.php')
            expect(win.location.origin).to.eq('http://automationpractice.com')
            expect(win.location.protocol).to.eq('http:')

        })
    })

    it('verify the reload method', () => {
        cy.window().then((win) => {
            win.location.reload()
        })
    })
    it('verify forward and back method of window', () => {
        cy.get('.sf-menu').children().eq(2).click()
        cy.window().then((win) => {
            win.history.go(-1)
        })
        cy.get('a[class="blockbestsellers"]').should('contain', 'Best Sellers')
        cy.window().then((win) => {
            win.history.go(1)
        })
        cy.get('[class="title_block"]').should('be.visible')
    })

    it('cypress-navigation commands', () => {
        cy.get('.sf-menu').children().eq(1).click()
        cy.go('back')
        cy.get('a[class="blockbestsellers"]').should('contain', 'Best Sellers')
        cy.go('forward')
        cy.get('[class="title_block"]').should('be.visible')
    })

    it.only('URI properties with cypress', () => {
        cy.hash().should('eq', '')
        cy.location('protocol').should('eq', 'http:')
        cy.location('origin').should('eq', 'http://automationpractice.com')
    })


})