class ELEMENT {
    login(username, password) {
        cy.get('#txtUsername').type(username)
        cy.get('#txtPassword').type(password)
        //cy.get('#btnLogin').click()
    }
    verifylogoVisible() {
        cy.get('#divLogo').should('be.visible')
    }
    verifyforgetPasswordLink() {
        cy.get('#forgotPasswordLink').should('be.visible')
    }

    verifyforgetLoginPage() {
        cy.url().should('contain', 'https://opensource-demo.orangehrmlive.com/')
    }
}

export default ELEMENT;