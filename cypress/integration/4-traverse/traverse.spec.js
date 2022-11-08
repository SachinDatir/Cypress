

describe('Traverse method in cypress', function () {

    //eq
    it('To get a DOM element at a specific index, use the .eq() command.', function () {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').find('li').eq(2).should('have.text', 'Banana')
        cy.get('.traversal-food-list').find('li').eq(0).should('have.text', 'Fruits')
    })

    //last
    it('To get the last DOM element within elements, use the .last() command.', function () {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').find('li').first().should('have.text', 'Fruits')
    })

    //first
    it('To get the first DOM element within elements, use the .first() command.', function () {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').find('li').last().should('have.text', 'Lentils')
    })

    //children
    it('To get children of DOM elements, use the .children() command.', function () {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().should('have.length', 11)
    })

    ////next
    it('To get the next sibling DOM element within elements, use the .next() command.', function () {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').next().should('have.text', 'Asparagus')
    })

    //prev()
    it('To get the next privious DOM element within elements, use the .prev() command.', function () {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prev().should('have.text', 'Figs')
    })

    //sibling()
    it('To get all sibling DOM elements of elements, use the .siblings() command.', function () {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').siblings().should('have.length', 10)
    })


    //nextAll()
    it('To get all sibling DOM elements of elements, use the .siblings() command.', function () {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').nextAll().should('have.length', 4)
    })

    //prevAll()
    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.', function () {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prevAll().should('have.length', 6)
    })

    ////prevUntil()
    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.', function () {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prevUntil('#fruits').should('have.length', 5)
    })

    //nextUntil()
    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.', function () {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').nextUntil('#veggie').should('have.length', 5)
    })


    //find()
    it('To get descendant DOM elements of the selector, use the .find() command.', function () {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-job-list').find('.menu').find('.sales').should('have.text', 'Sales')
    })

    //closest()
    it('To get the closest ancestor DOM element, use the .closest() command.', function () {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.sales').closest('div').should('have.class', 'thumbnail')
    })
   //not()
    it('To remove DOM element(s) from the set of elements, use the .not() command.', function () {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
       cy.get('div[data-toggle="buttons"]').children('button').not('.active').should('have.length',3)
        
    })
     

    //parent()
    it('To get parent DOM element of elements, use the .parent() command.', function () {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-marked-text').parent().should('have.length',1)
    })
    //parent()
    it('To get parent DOM element of elements, use the .parent() command.', function () {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').parent().filter('.container').should('have.length',1)
    })

    it.only('To remove DOM element(s) from the set of elements, use the .not() command.',function(){
     cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
     cy.get('.btn-group btn-group-toggle').children()
    })

})


