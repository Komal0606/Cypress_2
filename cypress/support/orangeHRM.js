export class Ohrm {
    selector ={
        username : '[placeholder="Username"]',
        password : '[placeholder="Password"]',
        button : 'button[type="submit"]'
    }

    visitSite(url){
        cy.visit(url)
    }

    login(uname, pname){
        cy.get(this.selector.username).type(uname)
        cy.get(this.selector.password).type(pname)
        cy.get(this.selector.button).click()
    }
}