///<reference types="cypress" />

describe('FileUpload functionality in cypress', () => {
    it('TC01 first fileUpload', () => {
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        let Myfile = 'file.txt';
        cy.get('#fileUpload').attachFile(Myfile)
        cy.get('.filename').should('contain.text', 'file')
    })

    it('TC01 Second FileUpload', () => {
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        let file = 'Red-Wine.png'
        cy.get('#file').attachFile(file)
        cy.get('.box__success').should('contain', 'Done')
    })
    it('TC03 verify the multiple fileUpload',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        let file1 = 'OIP.png'
        let file2 = 'Shiva-.jpg'
        let file3 = 'sunset image.png'
        cy.get('#filesToUpload').attachFile([file1,file2,file3])
        cy.get('#fileList').children().should('have.length',3)
    })

    it.only('TC04- change file name',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        let file = 'Red-Wine.png'
        cy.get('#filesToUpload').attachFile({filePath:file,fileName:'RedWine'})
        cy.get('#fileList').children().first().should('contain','Red')
        cy.get('#fileList').children().should('have.length',1)
    })


})