///<reference types="cypress" />
import product from '../test/testcase'
import pomdata from "../../fixtures/pomdata.json"
let productss = new product()
describe('verify the login functionality', () => {
    it.only('validate the login credentials', () => {
        productss.login(pomdata.username,pomdata.password)
        productss.loginMsg()
    })
    it('validate the login with invalid credentials', () => {
        productss.login('Admin', "admin12344")
        productss.errMsg()
    })
    it('validate the login with invalid credentials', () => {
        productss.login('Admin1', "admin12344")
        productss.errMsg()
    })

    it('validate the login with invalid credentials', () => {
        productss.login('Admin66', "admin12344")
        productss.errMsg()
    })
})