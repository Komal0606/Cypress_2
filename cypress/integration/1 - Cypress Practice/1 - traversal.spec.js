// Traversal Method - 

///<reference types="cypress" />

describe('Traversal Method', ()=>{
    it('TC_01 Children() method', ()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('#main-menu').children().should('have.length', 1)
        cy.get('ul[class="menu list-unstyled mb-0"]').children().should('have.length', 11)
    })

    it('TC_02 first() method', ()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().first().should('have.attr', 'class')
    })

    it('TC_03 last() method', ()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().last().should('have.attr', 'class', 'menu-item-has-children')
    })

    it('TC_04 eq() method', ()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().eq(3).should('contain', 'Tailorm')
    })

    it('TC_05 find() method', ()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().eq(3).find('a').should('have.class', 'text-uppercase')
    })

    it('TC_06 next() method', ()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().eq(4).next().should('have.attr', 'class')
    })
 
    it('TC_06 next() method', ()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().eq(4).next().should('have.attr', 'class')  
        cy.get('ul[class="menu list-unstyled mb-0"]').children().first().next().should('contain', 'Speciality')
    })

    it('TC_07 prev() method', ()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().eq(4).prev().should('contain', 'Tailor')  
    })

    it('TC_08 prevAll() method', ()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().eq(4).prevAll().should('have.length', 4)  
    })

    it('TC_09 nextAll() method', ()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().eq(4).nextAll().should('have.length', 6)  
    })

    it('TC_10 closest() method', ()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').closest('nav').should('have.id', 'main-menu' )
    })

    it.only('TC_11 parent() method', ()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').parent().should('have.id', 'main-menu' )
    })


})

