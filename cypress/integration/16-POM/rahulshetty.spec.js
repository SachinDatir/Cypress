///<reference types="cypress" />

import Ecom from '../test/Ecomtestcase'
let EProduct = new Ecom()
describe('', () => {
    it('visit the Ecom site', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })
    it('verify the element starts with CA', () => {
        EProduct.SearchE('mu')
    })
    it('Search product', () => {
        EProduct.SearchP('mu')
    })
    it('Add to cart', () => {
        EProduct.Addtocart()
    })
    it('validate Add to cart', () => {
        cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!")
    })
})