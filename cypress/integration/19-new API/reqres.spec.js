describe('verifying reqres API', function () {
    it('GET API', function () {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).then(function (response) {
            // cy.log(response)
            expect(response.status).to.eqls(200)
        })
    })
    it('POST API', function () {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: {
                "name": "sachin",
                "job": "Tester"
            }
        }).then(function (response) {
            //cy.log(response)
            expect(response.body.name).to.equal("sachin")
        })
    })
    it('PUT API',function(){
        cy.request({
            method:"PUT",
            url:"https://reqres.in/api/users/2",
            body:{
                "name": "Sachin datir",
                "job": "leaderzion resident"
            }
            
        }).then(function(response){
           // cy.log(response)
           expect(response.body.name).to.equal("Sachin datir")
        })
        })
        it('DELETE API',function(){
            cy.request({
                method:"DELETE",
                url:"https://reqres.in/api/users/2"
            })
        })
        
     })
