//<reference type= "cypress" />

describe('hooks in cypress', function () {

    before(function () {
        cy.log('i will run before everything')
    })

    beforeEach(function () {
        cy.log('i will run before Each test case')
    })

    //testcase run

    afterEach(function () {
        cy.log('this will run after each test case')
    })

    after(function () {
        cy.log('this will run after all test cases')
    })

    it('testcase one name', function () {
        cy.log('testcase one exicution')
    })
    it('testcase one name', function () {
        cy.log('testcase one exicution')
    })
})