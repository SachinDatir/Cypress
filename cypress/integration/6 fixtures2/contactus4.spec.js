///<reference types="cypress" />

import obj from '../../fixtures/users.json'

describe('verify the data with different testcase',()=>{
    obj.forEach((element,index)=>{
        it(`verify the contact us form with test-data${index+1}`,()=>{
            cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(element.firstName)
            cy.get('input[name="last_name"]').type(element.lastName)
            cy.get('input[name="email"]').type(element.email)
            cy.get('textarea[name="message"]').type(element.message)
            cy.get('input[value="SUBMIT"]').click()
            cy.get('h1').should('have.text','Thank You for your Message!')
        })
    })
})