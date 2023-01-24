///<reference types="cypress" />

describe('Verify Checkbox, Radiobutton, Dropdown', ()=>{
     // checkbox ---- search for the tagName input 
    // [type="checkox"]
    // [value= "option-1"] 
    it('TC_01 Verify Checkbox', ()=>{ 
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="option-1"]').click().should('be.checked')
        cy.get('input[value="option-1"]').click().should('not.be.checked')
    })

    it.only('TC_02 Verify the checkbox with the help of check and uncheck function', () =>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value= "option-4"]').check().should('be.checked')
        cy.wait(4000)
        cy.get('input[value= "option-4"]').check().should('be.checked')
        cy.get('input[value= "option-4"]').uncheck().should('not.to.be.checked')
    })

    it('TC_03 Verify the multiple selection checkboxs with the help of check and uncheck function', () =>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value= "option-4"]').check(['option-1', 'option-2','option-3', 'option-4']).should('be.checked')
    })

     // radio button will not have method uncheck()
    // validation -----> pick one element ===> check(),click() ===> select another , it should not be.checked

    it('TC_04 verify the functionality of radiobuttons by using click()', ()=>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="green"]').click().should('be.checked')
        cy.get('input[value="blue"]').should('not.be.checked')
    } )

    it('TC_05 verify the functionality of radiobuttons by using check()', ()=>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="blue"]').check().should('be.checked')
        cy.get('input[value="green"]').should('not.be.checked')
    })

    it('TC_06 select radiobuttons in loop', ()=>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#radio-buttons').find('input').each(function(el){
            cy.wrap(el).click().should('be.checked')
        })
        // cy.get('#radio-buttons').children().filter('input').each(function(el){
        //     cy.wrap(el).click().should('be.checked')
        // })
    })

    // Verify the Dropdown functionality
     it('TC_07 Verify the dropdown functionality', ()=>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('java').should('contain', 'JAVA')
        cy.get('#dropdowm-menu-2').select('TestNG').should('have.value', 'testng')
        cy.get('#dropdowm-menu-3').select('HTML').should('have.value', 'html')
    })

    it('TC_08 Verify the dropdown functionality', ()=>{  // ASK someone
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        let selectValues = ["SQL","Eclipes","CSS"]
        cy.get('.section-title').first().children('select').each(function(el,index){
            cy.wrap(el).select(selectValues[index]).should('have.value', 'sql, eclipes, css')
        })
    })

    // selected and disable
    it.only('TC_09 Verify the functionality of Selected and disabled', ()=>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#radio-buttons-selected-disabled').children('input[value="lettuce"]').check().should('be.enabled')
        cy.get('#radio-buttons-selected-disabled').children('input[value="cabbage"]').should('be.disabled')
    })


})