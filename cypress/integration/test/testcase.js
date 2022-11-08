class product {
    login(username, password) {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials')
        cy.get('#txtUsername').type(username)
        cy.get('#txtPassword').type(password)
        cy.get('#btnLogin').click()
    }

    loginMsg() {
        cy.get('h1').should('be.visible', "Dashboard")
    }

    errMsg() {
        cy.get('#spanMessage').should('be.visible').and('have.text', 'Invalid credentials')
    }

    searchElement(value) {
        cy.get('.search-keyword').type(value)
        cy.get('[type="submit"]').click()
    }

    searchProduct(product) {
        cy.get('h4[class="product-name"]').each((el,index) => {
            //cy.log(el.text())
            if (el.text().replace(' - 1 Kg', ' ').trim() == product) {
                cy.get('.product-action> button').eq(index).click()
            }
        })

    }
    AddtoCart() {
        cy.get('[alt="Cart"]').click()
        cy.get('.action-block>button').first().click()
        cy.contains('Place Order').click()
        cy.get('select').select('India')
        cy.get('.chkAgree').click()
        cy.get('button').click()
    }

}


export default product



