class product {
    visit() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    }
    SearchElement(value) {
        cy.get('input[class="search-keyword"]').type(value)
        cy.get('button[class="search-button"]').click()
    }

    AddProdToCart(value) {
        cy.get('h4[class="product-name"]').each((el, i) => {
            if (el.text() == value) {
                cy.get('.product-action>button').eq(i).click()
            }
        })
    }
    clearText() {
        cy.get('[type="search"]').last().clear()
    }
    AddtoCart() {
        cy.get('[alt="Cart"]').click()
        cy.get('.action-block>button').first().click()
        cy.get('p[class="product-name"]').should('have.text', 'Cauliflower - 1 Kg')
        cy.contains('Place Order').click()

    }
    selectValFromDropdown(val) {
        cy.get('[class="products"] select').select(val)
    }
    selectProceed() {
        cy.get('.chkAgree').click()
        cy.get('button').click()
    }
    validateMsg() {
        cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!")
    }
}


export default product;