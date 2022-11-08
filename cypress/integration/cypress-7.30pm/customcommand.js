///<reference types="cypress" />
describe('To learn Login Functionality', () => {

  it.only('TC-01 To test with valid Crendential', () => {
  cy.skd('https://www.saucedemo.com/','problem_user','secret_sauce')
  })




  // it('TC-01 To test with valid Crendential', () => {
  //  cy.visit('https://www.saucedemo.com/')
  //  cy.get('#user-name').type('problem_user')
  //  cy.get('#password').type('secret_sauce')
  //  cy.get('#login-button').click()
  // })

  // it('TC-02 To test with valid Crendential', () => {
  //     cy.visit('https://www.saucedemo.com/')
  //     cy.get('#user-name').type('performance_glitch_user')
  //     cy.get('#password').type('secret_sauce')
  //     cy.get('#login-button').click()
  //    })


  it.only('verify the functionality for contact us form', function () {
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    cy.Cform('sachin', 'datir', 'sdatir@gmail.com', 'i am leraning C command',)

  })
})