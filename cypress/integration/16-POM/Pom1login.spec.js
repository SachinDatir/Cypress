///<reference types="cypress" />

import ELEMENT from "../../support/model/login.js"
import pomdata from "../../fixtures/pomdata.json"
import dashboard from "../../support/model/dashboard.js"
let loginE = new ELEMENT()
describe('verify the Orange HRM login form', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })
    it('verify the login functionality', () => {
        // loginE.login('Admin','admin123')
        loginE.login(pomdata.username, pomdata.password)
        //dashboard.verifyDashboardPageUrl()
    })
    // it('verify the verifylogoVisible', () => {
    //     dashboard.verifyDashboardUrl()
    // })
    it('verify the verifylogoVisible', () => {
        loginE.verifylogoVisible()
    })
    it('verify the forgetPasswordLink', () => {
        loginE.verifyforgetPasswordLink()
    })
    it('verify the forgetLoginPage', () => {
        loginE.verifyforgetLoginPage()
    })
})