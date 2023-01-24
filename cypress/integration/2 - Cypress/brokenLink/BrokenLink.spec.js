
//broken-link.cy.js

describe('Broken Link', () => {

    beforeEach(() => {
  
      cy.viewport(1280, 1000)
  
    })
  
    it('Find all broken links', () => {
  
      cy.visit('https://www.tic.com/')
  
      cy.get('a').each(link => {
  
        if (link.prop('href'))
  
          cy.request({
  
            url: link.prop('href'),
  
            failOnStatusCode: false
  
          })
  
        cy.log( link.prop('href'))
  
      })
  
    })
  
  })
