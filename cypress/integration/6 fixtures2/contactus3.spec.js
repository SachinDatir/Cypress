///<reference types="cypress" />

describe('verify the contact us with diffrent data', () => {
    it('same testcase with different data', () => {
        cy.fixture('users').then((users) => {
            cy.log(users[1])
            expect(users[1].firstName).to.equal('pankaj')
            users.forEach((element,index) => {
                cy.visit(`http://webdriveruniversity.com/Contact-Us/contactus.html${index+1}`)
                cy.get('input[name="first_name"]').type(element.firstName)
                cy.get('input[name="last_name"]').type(element.lastName)
                cy.get('input[name="email"]').type(element.email)
                cy.get('textarea[name="message"]').type(element.message)
                cy.get('input[value="SUBMIT"]').click()
                cy.get('h1').should('have.text','Thank You for your Message!')
            });
        })
    })
})