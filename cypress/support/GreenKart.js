export class GreenKart1{
    selector = {
        url : 'https://rahulshettyacademy.com/seleniumPractise/#/',
        searchBox : '[type="search"]',
        productClass : '.products',
        Listofproduct : 'h4[class="product-name"]',
        button : 'div[class="product-action"]',
        CartButton : '[alt="Cart"]',
        checkoutButton : '[class="action-block"] button',
        placeOrderButton : '.products button',
        selectCountry : 'select',
        checkbox : '[type="checkbox"]',
        proceed : '.products-wrapper button'

    }

    visitUrl(){
        cy.visit(this.selector.url)
    }

    GoToSearchBox(input){
        cy.get(this.selector.searchBox).type(input)
    }

    getTotalProductList(){
        cy.get(this.selector.productClass).then((el)=>{
            cy.log(el.text())
            
        })
    }

    SelectProduct(myVeggie){
        cy.get(this.selector.Listofproduct).each((element, index)=>{

            let vegetable = element.text()
            if(vegetable.includes(myVeggie)){
                cy.get(this.selector.button).eq(index).click()
            }

        })
    }

    addToCart(){
        cy.get(this.selector.CartButton).click()
        cy.get(this.selector.checkoutButton).first().click()
    }

    placeOrder(){
        cy.get(this.selector.placeOrderButton).last().click()
        cy.get(this.selector.selectCountry).select('India').should('have.value', 'Australia')
        cy.get(this.selector.checkbox).check()
        cy.get(this.selector.proceed).click()

    }

   

}