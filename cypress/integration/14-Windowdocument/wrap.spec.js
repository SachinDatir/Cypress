///<reference types="cypress" />

//Wrap ==>jquery element convert to cypress element>>>reason(for use cypress method)
describe('verify the wrap function in cypress', () => {
    it('verify the cypress wrap element', () => {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').then((el) => {  //.then block for synchronous //The then() method returns a Promise.
            el.val('SACHIN') //achieve by jQuery
            //cy.wrap(el).type('sachin')//converts into cypresss element
            cy.wrap(el).should('have.value',"SACHIN")
        })
    })
    it('verify the wrap element', () => {
        //string
        let name = "sachin datir"
        cy.wrap(name).should('eq', 'sachin datir')

        //object
        let info = {
            firstname: "sachin",
            lastname: "datir"
        }
        cy.wrap(info).should('have.a.property', 'firstname', 'sachin')
        cy.wrap(info).should('have.a.property', 'lastname', 'datir')

        //array
        let cities = ['sangamner', 'akole']
        cy.wrap(cities).should('includes', 'sangamner', 'akole')

        let getInfo = function (x, y) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve(x + y)
                }, 2000)
            })
        }
        let skd = getInfo(100, 200)
        //cypress()
        //wrap helps to wait until async call is finished,for synchronous exicution
        cy.wrap(skd).should('eq', 300)//behindthe scene  it will stop until it get value from skd

        //by javascript method
        getInfo(100, 70).then((A) => {
            expect(A).to.eq(170)
        })
    })

    it('',()=>{
        expect(1).to.eql(3)
    })
})