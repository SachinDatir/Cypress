///<reference types="cypress" />

describe('verify the wrap function in cypress', () => {
    it('wrap the jQuery element', () => {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').then(($el) => {
            $el.val('sachin')
            cy.wrap($el).should('have.value', 'sachin')
        })
    })
    it('verify the wrap for string ,array,object', () => {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name=contactme]').then((el) => {
            let Q = el.text()
            // expect(Q).to.eql('CONTACT US')
            cy.wrap(Q).should('eq', 'CONTACT US')
        })
    })
    it('verify the wrap for array', () => {
        let array = []
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list>li').each((el) => {
            array.push(el.text())
        }).then(() => {
            //cy.log(array)
            cy.wrap(array).should('have.length', 5)
            cy.wrap(array).should('includes', 'Tea', 'Milk')
        })
    })
    it('verify the wrap for object', () => {
        cy.fixture('contactus').then((obj) => {
            cy.wrap(obj).should('have.a.property', 'email', 'sdatir@gamil.com')
        })
    })

    it.only('verify the wrap for object', () => {
        let SUM = function (x, y) {
            return new Promise((resolve, reject) => {
                setTimeout(function () {
                    if ('solved') {
                        resolve(x + y)
                    }
                    else {
                        reject('not solved')
                    }
                }, 2000)

            })
        }

        let skd = SUM(100, 900)
        cy.wrap(skd).should('eq', 1000)
    })

})