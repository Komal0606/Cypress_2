///<reference types="cypress"/>
import { ApiTest } from "../../../support/api"
let data = new ApiTest()

describe('API intercept', ()=>{
    it('TC_01',()=>{
       cy.intercept({
          method : "GET",
          url : data.selector.url
       }).as('getMethod')
       data.visitUrl()
    })
})