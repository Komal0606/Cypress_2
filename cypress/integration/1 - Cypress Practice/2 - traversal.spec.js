describe('Trversal Method', ()=>{
    it('TC_01 children() method', ()=>{
        cy.visit('https://www.lonavalacab.com/')
        cy.get('.navbar-nav.ml-auto').children().should('have.length', 6)
    })

    it('TC_02 first() method', ()=>{
        cy.visit('https://www.lonavalacab.com/')
        cy.get('.navbar-nav.ml-auto').children().first().should('have.attr', 'class', 'nav-item')
    })

    it('TC_03 last() method', ()=>{
        cy.visit('https://www.lonavalacab.com/')
        cy.get('.navbar-nav.ml-auto').children().last().should('contain', 'Mumbai')
    })
   
    it('TC_04 next() method', ()=>{
        cy.visit('https://www.lonavalacab.com/')
        cy.get('.navbar-nav.ml-auto').children().first().next().should('contain', 'sights')
    })

    it('TC_05 nextAll() method', ()=>{
        cy.visit('https://www.lonavalacab.com/')
        cy.get('.navbar-nav.ml-auto').children().first().nextAll().should('have.length', 5 )
    })
    
    it('TC_06 prev() method', ()=>{
        cy.visit('https://www.lonavalacab.com/')
        cy.get('.navbar-nav.ml-auto').children().last().prev().should('contain', 'Blog' )
    })

    it('TC_07 prevAll() method', ()=>{
        cy.visit('https://www.lonavalacab.com/')
        cy.get('.navbar-nav.ml-auto').children().last().prevAll().should('have.length', 5)
    })

    it('TC_08 parent() method', ()=>{
        cy.visit('https://www.lonavalacab.com/')
        cy.get('.navbar-nav.ml-auto').parent().should('have.id', 'mainNav')
    })

    it('TC_09 eq() method', ()=>{
        cy.visit('https://www.lonavalacab.com/')
        cy.get('.navbar-nav.ml-auto').children().eq(1).should('contain', 'sights')
    })

    it('TC_10 closest() method', ()=>{
        cy.visit('https://www.lonavalacab.com/')
        cy.get('.navbar-nav.ml-auto').closest('div').should('have.id', 'mainNav')
    })

    it('TC_11 find() method', ()=>{
        cy.visit('https://www.lonavalacab.com/')
        cy.get('.navbar-nav.ml-auto').find('a').should('contain', 'Packages')
    })

    it('TC_12 prevUntill() method', ()=>{
        cy.visit('https://www.lonavalacab.com/')
        cy.get('.navbar-nav.ml-auto').children().last().prevUntil('.nav-link').should('have.length', 5)
    })

    
    it.only('TC_13 nextUntill() method', ()=>{
        cy.visit('https://www.lonavalacab.com/')
        cy.get('.navbar-nav.ml-auto').children().eq(0).nextUntil('.nav-link').should('have.length', 5)
    })
})