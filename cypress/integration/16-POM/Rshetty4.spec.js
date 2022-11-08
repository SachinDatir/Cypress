///<reference types="cypress" />
import product from "../test/testcase2"
import myData from '../../fixtures/myData.json'
let pro = new product()
describe('rahulshetty Ecomm', () => {
    it('tc01 visit Ecom site', () => {
        pro.visit()
    })
    it('TC02 verify the element starts with CA', () => {
        pro.SearchElement(myData[0].prodShortcut2)
    })
    it('TC03 Add to cart', () => {
        pro.AddProdToCart(myData[0].Product1)
    })
    it('TC4 clear text', () => {
        pro.clearText()
    })
    it('TC05 validate cart', () => {
        pro.AddtoCart()
    })
    it('TC06 country select', () => {
       pro.selectValFromDropdown(myData[1].country1)
    })
    it('TC07 Proceed', () => {
        pro.selectProceed()
    })
    it('TC0 validate msg ', () => {
        pro.validateMsg()
    })
})