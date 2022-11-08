import obj from "../../fixtures/contactus.json"



describe('verify functionality for contactus form', function () {
    let data =
        before(() => {
            cy.fixture('contactus').then((res) => {
                cy.log(res)
                data = res

            })
        })


    let info = {
        first_name: "sachin",
        last_name: "datir",
        email: "sdatir83@gmail.com",
        message: "i am learning js"

    }



    it.skip('verify the functionality for contact us form', function () {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('sachin')
        cy.get('input[name="last_name"]').type('datir')
        cy.get('input[name="email"]').type('sdatir83@gmail.com')
        cy.get('textarea[name="message"]').type('i am learning js')
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })


    it.skip('verify the functionality for contact us form', function () {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(info.first_name)
        cy.get('input[name="last_name"]').type(info.last_name)
        cy.get('input[name="email"]').type(info.email)
        cy.get('textarea[name="message"]').type(info.message)
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })


    it('verify the contactus form from fixture file in particular testcase', function () {
        cy.fixture('contactus').then(function (res) {
            cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(res.firstName)
            cy.get('input[name="last_name"]').type(res.lastName)
            cy.get('input[name="email"]').type(res.email)
            cy.get('textarea[name="message"]').type(res.message)
            cy.get('input[value="SUBMIT"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })

    })

    it('verify the contactus form from fixture before Each', function () {

        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(data.firstName)
        cy.get('input[name="last_name"]').type(data.lastName)
        cy.get('input[name="email"]').type(data.email)
        cy.get('textarea[name="message"]').type(data.message)
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it.only('verify the contactus form from fixture-Import', function () {

        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(obj.firstName)
        cy.get('input[name="last_name"]').type(obj.lastName)
        cy.get('input[name="email"]').type(obj.email)
        cy.get('textarea[name="message"]').type(obj.message)
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

})



