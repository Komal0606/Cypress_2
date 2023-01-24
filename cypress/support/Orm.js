export class Orm{
    selector = {
        url : "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
        user : '[name="username"]',
        pass : '[name="password"]',
        button: '[type="submit"]'
    }

    visitUrl(){
        cy.visit(this.selector.url)
    }

    login(uname, pname){
        cy.get(this.selector.user).type(uname)
        cy.get(this.selector.pass).type(pname)
        cy.get(this.selector.button).click()
    }
}