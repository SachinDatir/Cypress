///<reference types="cypress" />

// describe('To verify signUp form functionality',()=>{
//     Cypress.on('uncaught:exception',(err,runnable)=>{
//         return false
//     })

// it('Tc-01 To test with invalid email',()=>{
//     cy.visit("https://www.zoomin.com/sign-up")
//     cy.get('[name="name"]').type('sachin')
//     cy.get('input[type="text"]').eq(1).type('sdatir83gmail.com')
//     cy.get('[class="number-input"]').type(9146753015)
//     cy.get('[class="input-box"]').last().find('input').type('skd5899')
//     cy.contains('SIGN UP').click()
//     cy.get('[role="alert"]').should('contain','Please enter valid Email Address')

// })
// })

describe('traversal method', function () {

    it.only('TC-01 To get children of DOM elements, use the .children() command.',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().should('have.length',11)
    })
})











