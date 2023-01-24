///<reference types="cypress" />

// In Js alert and confirm we have to methods 1 - cy.on() and 2 - cy.window()

describe('verify the functionality of alert', () => {
    it('TC_01 Verify the functionality of JS alert', () => {
        cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button1').click()
        cy.on('window:alert', (el) => {
            expect(el).to.eq('I am an alert box!')
            return true
        })
    })

    it('TC_02 Verify the functionality of JS alert', () => {
        cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.window().then(function (el) {
            let kk = el.alert()
            expect(kk).to.eq(true)
        })
    })

    it('TC_03 Verify the functionality of JS confirm for ok', () => {
        cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.on('window:confirm', (el) => {
            expect(el).to.eq('Press a button!')
            return true
        })
        cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
    })

    it('TC_04 Verify the functionality of JS confirm for cancel', () => {
        cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.on('window:confirm', (el) => {
            expect(el).to.eq('Press a button!')
            return false
        })
        cy.get('#confirm-alert-text').should('have.text', 'You pressed Cancel!')
    })

    it('TC_05 JS confirm by using cy.window', () => {
        cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.window().then(function (el) {
            cy.stub(el, 'confirm').returns(true)
        })
        cy.get('#button4').click()
        cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
    })

    // test fail
    it('TC_06 JS confirm by using cy.window', () => {
        cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.window().then((el) => {
            cy.stub(el, 'confirm').returns(false)
        })
        cy.get('#button4').click()
        cy.get('#confirm-alert-text').should('have.text', 'You pressed Cancel!')
    })

    it('TC_07 JS alert by using cy.on', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsAlert()"]').click()
        cy.on('window:alert',(el)=>{
            expect(el).to.eq('I am a JS Alert')
            return true
        })
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })

    it('TC_08 JS confirm for ok', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsConfirm()"]').click()
        cy.on('window:confirm', (el)=>{
            expect(el).to.eq('I am a JS Confirm')
            return true
        })
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

    it('TC_09 JS confirm for cancel', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsConfirm()"]').click()
        cy.on('window:confirm', (el)=>{
            expect(el).to.eq('I am a JS Confirm')
            return false
        })
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })

    it('TC_10 JS Prompt ', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((el)=>{
            cy.stub(el, 'prompt').returns('Hi Komal')
            cy.get('[onclick="jsPrompt()"]').click()
        })
        cy.get('#result').should('have.text', 'You entered: Hi Komal')
        
    })

    it.only('TC_10 JS Prompt ', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((el)=>{
            cy.stub(el, 'prompt').returns('hii')
            cy.get('[onclick="jsPrompt()"]').click()
        })
        cy.get('#result').should('have.text', 'You entered:hii')
        
    })

    
})
