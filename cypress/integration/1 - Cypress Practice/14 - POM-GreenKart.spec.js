/// <reference types="Cypress" />

import { GreenKart } from "../../support/AddToCart"

let util = new GreenKart()

describe('Order veggies by using POM', ()=>{
    before('Navigate to site', ()=>{
        util.visitSite()
    })

    it('Type ca in searchbox', ()=>{
        util.InputSearchBox('ca')
    })
    
    it('Select Items', ()=>{
        util.searchItem()
    })

    it('add Item AddToCart', ()=>{
        util.AddToCart('Carrot')
    })

    it('PlaceOrder', ()=>{
        util.PlaceOrder()
    })


    

})