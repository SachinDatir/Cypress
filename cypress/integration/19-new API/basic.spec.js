///<reference types="cypress" />




describe('validate GET ,POST ,PUT,DELETE API', function () {
    it.skip('validate the GET API', function () {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2",

        }).then(function (response) {
            cy.log(response)
            cy.log(response.statusText)
            expect(response.status).to.eql(200)
        })
    })

    it.skip('validate the POST API', function () {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        }).then(function (response) {
            cy.log(response)
            expect(response.status).to.eql(201)
        })
    })

    it.only('validate the value PUT API', function () {
        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/2",
            body: {
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then(function (response) {
            //cy.log(response)
            expect(response.status).to.eql(200)
        })
    })
    it.only('validate the DELETE API',function(){
        cy.request({
            method:"DELETE",
            url:"https://reqres.in/api/users/2",

        }).then(function(response){
            expect(response.status).to.eqls(204)
        })
    })
})