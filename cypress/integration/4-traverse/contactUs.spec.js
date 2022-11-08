 ///<reference types="cypress" />






// describe('verify functionality for contact Us form', function () {
//     beforeEach(function () {
//         cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
//         cy.get('h2[name="contactme"]').should('be.visible').and('have.text', 'CONTACT US')
//     })


//     it('verify the functionality for contact Us form - Submit Button', function () {
//         cy.get('input[name="first_name"]').type('sachin')
//         cy.get('input[name="last_name"]').type('datir')
//         cy.get('input[name="email"]').type('sdatir83@gmail.com')
//         cy.get('textarea[name="message"]').type('I am learning js')
//         cy.get('input[value=SUBMIT').click()
//         cy.get('h1').should('have.text', 'Thank You for your Message!')


//     })

//     it('verify the funtionality for contact Us form -Reset Button', function () {
//         cy.get('input[name="first_name"]').type('sachin')
//         cy.get('input[name="last_name"]').type('datir')
//         cy.get('input[name="email"]').type('sdatir83@gmail.com')
//         cy.get('textarea[name="message"]').type('I am learning js')
//         cy.get('input[value=RESET').click()

//         //VALIDATING AFTER RESET

//         cy.get('input[name="first_name"]').should('have.text',"")
//         cy.get('input[name="last_name"]').should('have.text',"")
//         cy.get('input[name="email"]').should('have.text',"")
//         cy.get('textarea[name="message"]').should('have.text',"")
        
//     })


//     it('verify the funtionality for contact Us form -Invalid Email address', function () {
//         it('verify the functionality for contact Us form - Submit Button', function () {
//             cy.get('input[name="first_name"]').type('sachin')
//             cy.get('input[name="last_name"]').type('datir')
//             cy.get('input[name="email"]').type('sdatir83gmail.com')
//             cy.get('textarea[name="message"]').type('I am learning js')
//             cy.get('input[value=SUBMIT').click()
//             cy.get('body').should('contain','Invalid email address')
            
//     })

//     })
//  })
describe('To verify signUp form functionality',()=>{
    Cypress.on('uncaught:exception',(err,runnable)=>{
    return false
})
// it('Tc-01 To test with invalid email',()=>{
//     cy.visit("https://www.zoomin.com/sign-up")
//     cy.get('[name="name"]').type('Priyanka')
//     cy.get('input[type="text"]').eq(1).type('pskgmail.com')
//     cy.get('[class="number-input"]').type(8808534838)
//     cy.get('[class="input-box"]').last().find('input').type('Priya123')
//     cy.contains('SIGN UP').click()
//     cy.get('[role="alert"]').should('contain','Please enter valid Email Address')

//})


})

it.skip('to test muliple checkboxes ata a time',()=>{
    cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
    cy.get('input[type="checkbox"]').each((el,index)=>{
        cy.wrap(el).check().should('be.checked')
    })
  

})

describe('check the functionality of contactus form',()=>{

    it.only('to test muliple checkboxes ata a time',()=>{
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[value=SUBMIT').click()
        cy.url().should('contain','/contact_us.php')
    })
})
    


