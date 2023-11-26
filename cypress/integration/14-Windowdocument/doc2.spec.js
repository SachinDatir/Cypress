///<reference types="cypress" />
describe('verify the title', () => {
    before(() => {
        cy.visit('https://automationteststore.com/')
    })
    it('verify the title page', () => {
        cy.document().then((doc) => {
            // cy.log(doc)
            expect(doc.title).to.contain('A place to practice your automation skills!')
        })
    })
    it('validate height and width of page', () => {
        cy.document().then((doc) => {
            let JQElement = Cypress.$(doc)
            cy.log(JQElement.height())
            cy.log(JQElement.width())
            expect(JQElement.height()).to.be.within(1000, 6000)
            expect(JQElement.width()).to.be.within(500, 1000)
        })
    })
    it.only('validate height and width of page by veiwport', () => {
        cy.viewport('samsung-note9', "portrait")
        cy.viewport('macbook-11', "landscape")
        cy.viewport('ipad-2', "landscape")
        cy.viewport(1000, 5000, "landscape")
        cy.screenshot()
    })
})