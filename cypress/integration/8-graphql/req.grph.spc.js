// graphql -- API 
// url same ---- get and post
//graph ql differenciate by operation name 
/// <reference types="cypress" />
describe('verify the graphql Api', function () {
  it('verify all todos', function () {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/",
      body: {
        operationName: "allTodos",
        query: `query allTodos {
                    allTodos {
                      id
                      title
                      completed
                      __typename
                    }
                  }`,
        variables: {}                                          
      }
    }).then(function (res) {
      cy.log(res)
      expect(res.status).to.eq(200)
      expect(res.body.data.allTodos.length).to.eq(3)
    })
  })

  it('addTodos', () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/",
      body: {
        operationName: "AddTodo",
        query: `mutation AddTodo($title: String!) {
                    createTodo(title: $title, completed: false) {
                      id
                      __typename
                    }
                  }`,
        variables: {
          "title": "python"
        }
      }

    }).then((res) => {
      // let obj = (res.body.data)
      //    cy.log(obj.res.createTodo)
      expect(res.status).to.eq(200)
      expect(res.duration).to.be.within(5, 10)
      expect(res.body.data.createTodo).to.haveOwnProperty('id')
    })

  })


  it('updateTodos', () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/",
      body: {
        operationName: "allTodos",
        query: `query allTodos {
                    allTodos {
                      id
                      title
                      completed
                      __typename
                    }
                  }`,
        variables: {}
      }
    }).then((res) => {
      expect(res.status).to.eq(200)
      let id = res.body.data.allTodos[0].id
      return id
    }).then((id) => {
      cy.request({
        method: "POST",
        url: "http://localhost:3000/",
        body: {
          operationName: "updateTodo",
          query: `mutation updateTodo($id: ID!, $completed: Boolean!) {
          updateTodo(id: $id, completed: $completed) {
            id
            title
            completed
            __typename
          }
        }`,
          variables: {
            "id": `${id}`,
            
            "completed": true
          }
        }
      })
    }).then((res) => {
      cy.log(res)
    })

  })


  it.only('delete todos', function () {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/",
      body: {
        operationName: "allTodos",
        query: `query allTodos {
          allTodos {
            id
            title
            completed
            __typename
          }
        }`,
        variables: {}
      }
    }).then((res) => {
      expect(res.status).to.eql(200)
      let id = res.body.data.allTodos[0].id
      return id
    }).then((id) => {
      cy.request({
        method: "POST",
        url: "http://localhost:3000/",
        body: {
          operationName: "DeleteTodo",
          query: `mutation DeleteTodo($id: ID!) {
            removeTodo(id: $id) {
              id
              __typename
            }
          }`,
          variables: {
            id: `${id}`
          }
        }
      }).then((res) => {
        cy.log(res)
      })
    })
  })




})