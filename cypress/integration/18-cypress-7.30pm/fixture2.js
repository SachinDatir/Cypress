describe('to learn fixture',()=>{
    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false
    })
    it('to fill form by data',()=>{
        cy.visit('https://petstore.octoperf.com/actions/Account.action?newAccountForm=')
        cy.get('[name="username"]').type('sachin')
        cy.get('[name="password"]').type("skd")
        cy.get('input[name="repeatedPassword"]').type('skd')
    })
})