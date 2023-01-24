describe('Uploadfile', ()=>{

    let filepath = "flower.jpg"
    
    it('TC_01 Verify the functionality of UploadFile', ()=>{  
        cy.visit('http://webdriveruniversity.com/File-Upload/index.html')
        cy.get('#myFile').attachFile(filepath)
        cy.get('#submit-button').click()
        cy.url().should('contain', filepath)
    })

    it.only('TC_02 Verify the functionality of UploadFile', ()=>{  
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(filepath)
        cy.get('#fileList').children().should('contain', 'flower.jpg')
    })
})