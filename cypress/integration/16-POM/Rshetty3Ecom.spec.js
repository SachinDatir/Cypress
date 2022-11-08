///<reference types="cypress" />
import Product from '../test/testcase'
let productV = new Product()

describe('Add To Car', () => {
    it('visit the Ecom site', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })
    it('verify the element starts with CA', () => {
        productV.searchElement("CA")
    })
    it('Add to cart Carrot', () => {
        productV.searchProduct('Carrot')
    })

    it('Place order and select Country', () => {
        productV.AddtoCart()
    })
    it('validate thanku msg', () => {
        cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible')
    })
})