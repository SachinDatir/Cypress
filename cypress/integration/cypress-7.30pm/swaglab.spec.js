///<reference types="cypress" />

describe('Swaglabs Test',()=>{
    it('TC-01',()=>{
      cy.swag('https://www.saucedemo.com/','standard_user','secret_sauce')
      cy.get('.inventory_item').should('have.length',6)
      cy.get('.inventory_item_name').each((el,i)=>{
        cy.log(el.text())
        let TITLE = el.text()
        if(TITLE=='Sauce Labs Backpack'||TITLE=='Sauce Labs Bike Light'
        ||TITLE=='Sauce Labs Bolt T-Shirt'||TITLE=='Sauce Labs Onesie'||TITLE=='Sauce Labs Fleece Jacket',TITLE=='Test.allTheThings() T-Shirt (Red)'){
            cy.contains('Add to cart').click()
        }
      })
      cy.get('.shopping_cart_link').click()
      let amount = ['$29.99','$9.99','$15.99','$49.99','$7.99','$15.99']
      cy.get('.inventory_item_price').each((el,i)=>{
        cy.log(el.text())
        let price = el.text().replace('$',' ').trim()
        cy.log(price)
        expect(el.text()).to.eql(amount[i])
    //    cy.wrap(price).should('eq','$29.99','$9.99')

      })
    })

})