///<reference types="cypress" />
beforeEach(() => {
    cy.visit('https://www.kesari.in/')
})
describe("to learn traverse method", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    //children()
    it.skip('TC-01 To get children of DOM elements, use the .children() command.', () => {
        cy.get('ul[class="menu list-unstyled mb-0"]').children().should('have.length', 11)
        cy.get('ul[class="menu list-unstyled mb-0"]').children().should('have.length.above', 8)
    })
    //first()
    it('TC-02 To get the first DOM element within elements, use the .first() command.', () => {
        cy.get('ul[class="menu list-unstyled mb-0"]').children().first().should('contain', "Group")
    })
    //last()
    it('TC-03 To get the last DOM element within elements, use the .first() command.', () => {
        cy.get('ul[class="menu list-unstyled mb-0"]').last().should('contain', "More")
    })

    it('To get the next sibling DOM element within elements, use the .next() command.', () => {
        cy.get('ul[class="menu list-unstyled mb-0"]').children().eq(2).next().should('contain',"Tailormade")
    })

    
    it.only('To get the previous sibling DOM element within elements, use the .prev() command.', () => {
        cy.get('ul[class="menu list-unstyled mb-0"]').children().eq(4).prev().should('contain',"Tailormade")
    })
})