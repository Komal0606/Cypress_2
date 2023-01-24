describe('verify the functionality of alert, confirm, prompt', () => {
    it('TC_01 JS alert', () => {
        cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button1').click()
        cy.on('window:alert', (el) => {
            expect(el).to.eq('I am an alert box!')
            return true
        })
    })

    it('TC_02 JS alert', () => {
        cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.window().then((el) => {
            let aa = el.alert()
            expect(aa).to.eq(true)
        })
    })

    it('TC_03 JS confirm', () => {
        cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.on('window:confirm', (el) => {
            expect(el).to.eq('Press a button!')
            return true
        })
        cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
    })

    it('TC_04 JS confirm', () => {
        cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.on('window:confirm', (el) => {
            expect(el).to.eq('Press a button!')
            return false
        })
        cy.get('#confirm-alert-text').should('have.text', 'You pressed Cancel!')
    })

    it('TC_05 JS confirm', () => {
        cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.window().then((el) => {
            cy.stub(el, 'confirm').returns(true)
        })
        cy.get('#button4').click()
        cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
    })

    it('TC_06 Js alert', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsAlert()"]').click()
        cy.on('window:alert', (el)=>{
            expect(el).to.eq('I am a JS Alert')
        })
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })

    it('TC_07 Js confirm', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsConfirm()"]').click()
        cy.on('window:confirm', (el)=>{
            expect(el).to.eq('I am a JS Confirm')
        })
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

    
    it.only('TC_08 Js Prompt', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((el)=>{
            cy.stub(el, 'prompt').returns('Komal Palke')
            cy.get('[onclick="jsPrompt()"]').click()
        })
        cy.get('#result').should('contain', 'Komal')
    })


})