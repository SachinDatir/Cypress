///<reference types="cypress" />
describe(' to learn read write file functionality', () => {
    it('TC-01 to writefile', () => {
        cy.writeFile('file1.txt', 'My name is sachin\n')
        cy.writeFile('file1.txt', 'My last name is datir\n', { flag: 'a' })
        cy.writeFile('file1.txt', 'My love exercise\n', { flag: 'a' })
    })
    it('TC-02 to verify the fixture writefile', () => {
        cy.writeFile('cypress/fixtures/file.json',
            {
                "firstname": "sachin",
                "lastname": "datir",
                "hobby": "exercise"
            })
    })
    it('TC-03 to read the writefile', () => {
        cy.readFile('file1.txt').then((data) => {
            expect(data).includes('exercise')
            expect(data).includes('datir')
        })
    })
    it('TC-04 to read the json writefile', () => {
        cy.fixture('file').then((data) => {
            expect(data.firstname).to.eq('sachin')
            expect(data.hobby).to.eq('exercise')
        })
    })



    it('TC-05 to write file', () => {
        cy.writeFile('file2.text', "My name is skd\n")
        cy.writeFile('file2.text', "My love playing cricket\n", { flag: "a" })
        cy.writeFile('file2.text', "i am learning pom\n", { flag: "a" })
    })

    it('TC-06 to read file', () => {
        cy.readFile('file2.text').then((data) => {
            expect(data).includes('skd')
            expect(data).includes('i am learning pom')
        })
    })

    it('TC-07 to write file', () => {
        cy.writeFile('cypress/fixtures/file2.json',
            {
                "firstname": "sachinD",
                "lastname": "Datir",
                "job": "student"
            })
        cy.fixture('file2').then((data) => {
            expect(data.firstname).to.eq('sachinD')
            expect(data.job).to.eq('student')
        })
    })
    // it.only('to read file', () => {
    //     cy.readFile('file2').then((data) => {
    //         expect(data.firstname).to.eq('sachinD')
    //         expect(data.job).to.eq('student')
    //     })
    // })


    it('TC-08 to write file', () => {
        cy.writeFile('firstfile.txt', 'i am learning writefile\n')
        cy.writeFile('firstfile.txt', 'my fav cricketer is Rohit\n', { flag: "a" })
        cy.writeFile('firstfile.txt', 'my fav Actor manoj bajpayee\n', { flag: "a" })

        cy.readFile('firstfile.txt').then((data) => {
            //cy.log(data)
            expect(data).includes('manoj')
            expect(data).includes('Rohit')
        })
    })

    it.only('TC-09', () => {
        cy.writeFile('cypress/fixtures/firstfile.json',
            {
                "firstname": "rohit gurunath sharma",
                "job": "cricketer"
            })
        cy.fixture('firstfile').then((data) => {
            cy.log(data)
            expect(data.firstname).to.contain('rohit')
            expect(data.job).to.eq('cricketer')

        })
    })

})