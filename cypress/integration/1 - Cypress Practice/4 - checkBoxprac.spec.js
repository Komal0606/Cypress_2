describe('Verify the functionality of CheckBox, radioButton', ()=>{
    it('TC_01 Verify the functionality of checkbox', ()=>{
        cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
        cy.get('[value="red"]').click().should('be.checked')
        cy.get('[value="red"]').click().should('not.be.checked')
        cy.get('[value="purple"]').click().should('be.checked')
        cy.get('[value="green"]').should('not.be.checked')
    })

    it('TC_02 Check the checkboxes in loop', ()=>{
        cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
        cy.get('[class="Example"]').first().find('input').each(function(el){
            cy.wrap(el).check().should('be.checked')
        })
    })

    it('TC_03 verify the radio button', ()=>{
        cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
        cy.get('[type="radio"]').first().check().should('be.checked')
        cy.contains(' Internet Explorer').should('not.be.checked')
    })

    it('TC_04 Check the radio Button in loop', ()=>{
        cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
        cy.get('[class="Example"]').last().first().find('[type="radio"]').each(function(el){
            cy.wrap(el).check().should('be.checked')
        })
    })

    it.only('TC_05 Check the radio Button in loop', ()=>{
        cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
        cy.get('select[name="coffee"]').children().select('Black').should('have.value', 'black')
    })
})