
///<reference types="cypress" />

describe('verify the functionality of API', function () {
    it('verify the count of user via API', function () {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2",

        }).then(function ({ status, headers, duration, body }) {
            // cy.log(status)
            // cy.log(headers)
            // cy.log(duration)
            // cy.log(body)
            expect(status).to.eqls(200)
            expect(duration).to.be.within(15, 200)
            expect(body).to.have.keys(["page", "per_page", "total", "total_pages", "data", "support"])
            body.data.forEach(element => {
                expect(element).to.have.keys(["id", "first_name", "last_name", "email", "avatar"])
                expect(element.id).not.to.eql(null)
                expect(element.first_name).not.to.eql(null)
                expect(element.last_name).not.to.eql(null)
                expect(element.email).not.to.eql(null)
                expect(element.avatar).not.to.eql(null)
            });


            expect(headers).to.have.property('content-type', 'application/json; charset=utf-8')
        })
    })

    it('verify the count of user via API', function () {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: {
                "name": "morpheus",
                "job": "leader"
            }

        }).then(function ({ status, headers, duration, body }) {
            cy.log(body)
            cy.log(duration)
            cy.log(status)
            expect(status).to.eql(201)
            expect(duration).to.be.within(100, 600)
            expect(body).to.have.keys(["id", "job", "name", "createdAt"])

            // body.forEach(element =>{
            //     expect(element).to.have.keys(["id","job","name","createdAt"])
            //     expect(element.id).not.to.eql(null)
            //     expect(element.job).not.to.eql(null)
            //     expect(element.name).not.to.eql(null)
            //     expect(element.createdAt).not.to.eql(null)

            // })

        })

    })

    it('verify the count of user via API', function () {
     cy.request({
        method:"PUT",
        url:"https://reqres.in/api/users/2",
        body:{
            "name": "morpheus",
            "job": "zion resident"
        }

     }).then(function({ status, headers, duration, body }){
        expect(status).to.eql(200)
        expect(duration).to.be.within(100, 600)
        expect(body).to.have.keys([ "job", "name", "updatedAt"])

     })
     
    })

    it.only('verify the count of user via API', function(){
        cy.request({
            method:"DELETE",
            url:"https://reqres.in/api/users/2",
            
        }).then(function ({ status, headers, duration, body }) {
            cy.log(body)
            cy.log(duration)
            cy.log(status)
            expect(status).to.eql(204)
            expect(duration).to.be.within(100,1000)

        })
    })

})
