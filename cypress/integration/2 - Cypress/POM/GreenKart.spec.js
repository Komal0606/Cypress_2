// POM practice on greenKart

import { GreenKart1 }  from "../../../support/GreenKart"

let data = new GreenKart1()

describe('Order Veggie from GreenKart', ()=>{
    it('TC_01 Visit Site', ()=>{
        data.visitUrl()
    })

    it('TC_02 type vegetable inital in search box', ()=>{
        data.GoToSearchBox('be')
    })

    it('TC_03 Get All product list', ()=>{
        data.getTotalProductList()
    })

    it('TC_04 select product from list', ()=>{
        data.SelectProduct('Beetroot')
    })

    it('TC_05 AddToCart the product', ()=>{
        data.addToCart()
    })

    it('TC_06 PlaceOrder', ()=>{
        data.placeOrder()
    })



})