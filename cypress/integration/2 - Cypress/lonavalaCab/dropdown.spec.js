describe('DropDown',()=>{
    it('dropdwon',()=>{
        cy.visit('https://www.lonavalacab.com/')
        cy.get('.form-control.tm-select').first().select('Half sightseeing').should('have.value', 'Half sightseeing')
        cy.get('#package').select('Lohgad Package').should('have.value', 'Lohgad Package')
        cy.get('.form-control.tm-select').last().select('4 Seater').should('have.value', '1')
        cy.get('#car').select('17 Seater').should('have.value', '3')
    })
})