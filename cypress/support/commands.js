// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import 'cypress-iframe';
import 'cypress-file-upload';
// Cypress.Commands.add('skd', (url, username, passward) => {
//     cy.visit(url)
//     cy.get('#user-name').type(username)
//     cy.get('#password').type(passward)
//     cy.get('#login-button').click()

// })


// Cypress.Commands.add('Cform', (firstname,lastname,email,comment) => { 
//     cy.get('input[name="first_name"]').type(firstname)
//     cy.get('input[name="last_name"]').type(lastname)
//     cy.get('input[name="email"]').type(email)
//     cy.get('textarea[name="message"]').type(comment)


// })

Cypress.Commands.add('swag', (url, username, password) => {
    cy.visit(url)
    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
})

Cypress.Commands.add('lab', (url, username, password) => {
    cy.visit(url)
    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
})



