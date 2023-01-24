describe('FileUpload', ()=>{

    let filePath = "flower.jpg"

    let filePath1 = "Vishal.jpg"

    let filePath2 = ['flower.jpg', 'Vishal.jpg']

    it('TC_01 FileUpload', ()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(filePath)
        cy.get('#fileList').first().should('contain', 'flower.jpg')
    })

    it('TC_02 FileUpload', ()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile([filePath, filePath1])
        cy.get('#fileList').children().should('have.length', 2)
    })

    it('TC_03 FileUpload', ()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(filePath2)
        cy.get('#fileList').children().should('have.length', 2)
    })

    it('TC_04 FileUpload', ()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(filePath, filePath)
       // cy.get('#fileList')
    })

    it.only('TC_05 FileUpload', ()=>{
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        cy.get('.container form div label').attachFile(filePath)
       // cy.get('.box__success').should('have.text', 'Done! Upload more?')
        cy.get('.box__input').find('label').should('have.attr', 'for')
    })
})