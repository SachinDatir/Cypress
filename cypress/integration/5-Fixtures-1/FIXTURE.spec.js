///<reference types="cypress" />

import obj from '../../fixtures/contactus.json'
import {info,info2} from '../../fixtures/contact'

describe('Different ways to use the fixture file', function () {
    let data =
        before(() => {
            cy.fixture('contactus').then((res) => {
                data = res
                //cy.log(data)

            })
        })

    it('read the fixture file in before', function () {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(data.firstName)
        cy.get('input[name="last_name"]').type(data.lastName)
        cy.get('input[name="email"]').type(data.email)
        cy.get('textarea[name="message"]').type(data.message)
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it('read the fixture file in particular testcase', function () {
        cy.fixture('contactus').then(function (data) {
            data.firstName = 'SACHIN'
            cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(data.firstName)
            cy.get('input[name="last_name"]').type(data.lastName)
            cy.get('input[name="email"]').type(data.email)
            cy.get('textarea[name="message"]').type(data.message)
            cy.get('input[value="SUBMIT"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })

    
    it('read the fixture file from import', function () {
    
            cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(obj.firstName)
            cy.get('input[name="last_name"]').type(obj.lastName)
            cy.get('input[name="email"]').type(obj.email)
            cy.get('textarea[name="message"]').type(obj.message)
            cy.get('input[value="SUBMIT"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })

         
    it('read the fixture file from import', function () {
         cy.log(info)
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(info.firstName)
        cy.get('input[name="last_name"]').type(info.lastName)
        cy.get('input[name="email"]').type(info.email)
        cy.get('textarea[name="message"]').type(info.message)
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })



         
    it.only('read the fixture file from import', function () {
        cy.log(info2)
       cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
       cy.get('input[name="first_name"]').type(info2.firstName)
       cy.get('input[name="last_name"]').type(info2.lastName)
       cy.get('input[name="email"]').type(info2.email)
       cy.get('textarea[name="message"]').type(info2.message)
       cy.get('input[value="SUBMIT"]').click()
       cy.get('h1').should('have.text', 'Thank You for your Message!')
   })
})