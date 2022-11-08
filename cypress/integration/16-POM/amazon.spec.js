///<reference types="cypress" />
describe('Amazon website functionality',()=>{
    it('TC--01',()=>{
        Cypress.on('uncaught:exception',(err,runnable)=>{
            return false
        })
        cy.visit('https://www.amazon.in/')
        cy.get('#nav-search-bar-form').type('iphone13pro')
        cy.get('#nav-search-submit-button').click({force: true})
        cy.get('div[class="_bXVsd_gridColumn_2Jfab"]').first().click({force: true})
        cy.get('.a-offscreen').eq(5).should('have.text','₹1,15,900.00')
        cy.get('#submit.add-to-cart').click()
    })
})