///<reference types="cypress" />
beforeEach(() => {
    cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
})
describe('to learn checkboxes and radiobuttons acivity', () => {
    it('TC_01 to test checkboxesusing check method', () => {
        cy.get('[value="red"]').check().should('be.checked')
        cy.get('[value="yellow"]').check().should('be.checked')
    })

    it('TC-02 to test checkboxesusing click method', () => {
        cy.get('[value="yellow"]').click().should('be.checked')
        cy.get('[value="red"]').click().should('be.checked')
    })

    it('to test multiple checkboxes at a time', () => {
     cy.get('input[type="checkbox"]').each((el,index)=>{
        cy.wrap(el).check().should('be.checked')
     })
    })

    it.only('to test multiple checkboxes at a time',()=>{
        cy.get('input[type="checkbox"]').check(["red","yellow"]).should('be.checked')
    })
})