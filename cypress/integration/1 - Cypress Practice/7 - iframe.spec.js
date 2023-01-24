// iframe in webdriver

// cypress does not support iframe so we solve this with jquery and javascript
// in jquery we use .contents() method and in js we use contentDocument method
// steps = visit url => find iframe => use promises (.then) => wrap the el bcoz el is not cypress el =>
// => el.content() / el.contentDocument we reach to iframe document => then reach to body => after that use alias for ref 
// => reach to required el by using traveral method and asert


describe('verify the functionality of ifram', () => {

    //                                  ::: Jquery :::

    it('TC_01 Verify the functionality of iframe', () => {
        cy.visit('http://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then((el) => {
            cy.wrap(el.contents().find('body')).as('iframeBody')
            cy.get('@iframeBody').find('li[class="active"]').should('have.text', 'Home')
        })
    })

    it('TC_02 Verify the functionality of iframe', () => {
        cy.visit('http://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then((el) => {
            cy.wrap(el.contents().find('body')).as('iframeBody1')
            cy.get('@iframeBody1').find('.sub-heading').first().should('contain', 'Who Are We?')

        })
    })

    it('TC_03 Verify the functionality of iframe', () => {
        cy.visit('http://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then((el) => {
            cy.wrap(el.contents().find('body')).as('iframeBody2')
            cy.get('@iframeBody2').find('.slide-image').first().should('have.id', "slide-image-1")
        })
    })

    //                               ::: JAVASCRIPT :::

    it('TC_04 Verify the functionality of iframe', () => {
        cy.visit('http://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then((el) => {
            cy.log(el)
            cy.wrap(el[0].contentDocument.body).as('iframeBody3')
            cy.get('@iframeBody3').find('.navbar-nav').find('a').should('contain', 'Contact Us')
        })
    })

    it.only('TC_05 Verify the functionality of iframe', () => {
        cy.visit('http://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then((el) => {
            cy.log(el)
            cy.wrap(el[0].contentDocument.body).as('iframeBody4')
            cy.get('@iframeBody4').find('.navbar-nav').find('a').should('contain', 'Home')
        })
    })
})