///<reference types="cypress" />

describe('verify the localstorage for app', () => {
    beforeEach(() => {
        cy.visit('https://automationteststore.com/')
    })
    it.skip('Local storage using window', () => {
        cy.window().then((win) => {
            cy.log(win)
            expect(win.localStorage.length).to.eq(0)
            window.localStorage.setItem('id', 4)
            expect(win.localStorage.length).to.eq(1)
            expect(win.localStorage.getItem('id')).to.eq('4')
        })
    })
    it.skip('Clearing the local storage using cypress command', () => {
        cy.clearLocalStorage()
        cy.window().then((win) => {
            expect(win.localStorage.length).to.eq(0)
        })
    })



    //Document
    it('Verify the title of the page', () => {
        cy.document().then((doc) => {
            expect(doc.title).to.eq('A place to practice your automation skills!')
        })
    })
    it.only('Verify the title with cypress command', () => {
        cy.title().then((txt) => {
            expect(txt).to.eq('A place to practice your automation skills!')
        })
    })
})