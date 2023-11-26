///<reference types="cypress" />
let token = "Bearer 05444f3633908fde3a89ee5b83686903ca07870388fd342d5da2959597c984a5"
describe('verify the go-rest api', function () {
    it.skip('verify list user API', function () {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: token
            }

        }).then(function (response) {
            //cy.log(response)
            expect(response.status).to.eql(200)
            expect(response.body.length).to.eql(10)
            response.body.forEach(element => {
                expect(element).to.have.keys(["id", "gender", "name", "email", "status"])
            })
        })
    });
    it('verify the create user api', function () {

        let payload = {
            "name": "Tenali Ramakrishna",
            "gender": "male",
            "email": `tenali${Math.random() * 6}.ramakrishna@15ce.com`,
            "status": "active"
        }
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: token
            },
            body: payload
        }).then(function (response) {
            // cy.response
            expect(response.status).to.eql(201)
            expect(response.body).to.have.keys(["id", "name", "gender", "email", "status"])
            expect(response.body.name).not.eql(null)
            expect(response.body.gender).not.eql(null)
            expect(response.body.email).not.eql(null)
            expect(response.body.status).not.eql(null)
            // return response.body.id

            let data = response.body
            for(let keys in data){
                cy.log(keys,data[keys])
            }
        })

    });

    it.only('verify the update user api', function () {

        let payload = {
            "name": "sachin datir",
            "email": `allasani${Math.random() * 6}.peddana@15ce.com`,
            "status": "active"
        }
        cy.request({
            method: "PUT",
            url: "https://gorest.co.in/public/v2/users/18402",
            headers: {
                Authorization: token
            },
            body: payload
        }).then(function (response) {
            // cy.response
            expect(response.status).to.eql(200)
            expect(response.body).to.have.keys(["id", "name", "gender", "email", "status"])
            expect(response.body.id).not.eql(null)
            expect(response.body.status).to.eq(payload.status)
            expect(response.body.name).to.eq(payload.name)
            
            let data = response.body
            for(let keys in data){
                cy.log(keys,data[keys])
            }

        })
    })
    it('verify the delete api', function () {
        cy.request({
            method: "DELETE",
            url: "https://gorest.co.in/public/v2/users/18184",
            headers: {
                Authorization: token
            },
        }).then(function (res) {
            expect(res.status).to.eqls(204)
        })
    })
})
