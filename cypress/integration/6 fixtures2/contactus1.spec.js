///<reference types="cypress" />


describe('verify the contact us with diffrent data', function () {
    it('same testcase with different data', function () {
        cy.fixture('users').then(function (users) {
            //cy.log(users)

            users.forEach(element => {
                cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
                cy.get('input[name="first_name"]').type(element.firstName)
                cy.get('input[name="last_name"]').type(element.lastName)
                cy.get('input[name="email"]').type(element.email)
                cy.get('textarea[name="message"]').type(element.message)
                cy.get('input[value="SUBMIT"]').click()
                cy.get('h1').should('have.text', 'Thank You for your Message!')
            })
        })
    })


})

