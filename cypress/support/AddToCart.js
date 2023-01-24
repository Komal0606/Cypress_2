export class GreenKart {
    selector = {
        url: "https://rahulshettyacademy.com/seleniumPractise/#/",
        InputSearchBox: ".search-keyword",
        SearchBtn: ".search-button",
        SearchItem: ".products",
        listOfItem: "h4[class='product-name']",
        button : '[class="product-action"] button',
        Cart : 'img[alt="Cart"]',
        checkOut : 'div[class="action-block"] >button',
        PlaceOrder : 'Place Order'



    }

    visitSite() {
        cy.visit(this.selector.url)
    }

    InputSearchBox(text) {
        cy.get(this.selector.InputSearchBox).type(text)
        cy.get(this.selector.SearchBtn).click()
    }

    searchItem() {
        cy.get(this.selector.SearchItem).each((element) => {
            cy.log(element.text())
        })
    }

    AddToCart(veggie) {
        cy.get(this.selector.listOfItem).each((el, index) => {
            // cy.log(el.text())
            // let vegetable = el.text().replace(' - 1 Kg', " ").trim()  
            // if(vegetable == veggie){
            //     cy.get(this.selector.button).eq(index).click()
            // }

            let vegetable = el.text()
            if(vegetable.includes(veggie)){
                cy.get('[class="product-action"] button').eq(index).click()
            }  

        })

    }

    PlaceOrder() {
        cy.get('img[alt="Cart"]').click()
        cy.get('[class="action-block"] button').first().click()
        cy.contains('Place Order').click()
        cy.get('select').select('India')
        cy.get('[class="chkAgree"]').click()
        cy.get('button').click()
    }

}