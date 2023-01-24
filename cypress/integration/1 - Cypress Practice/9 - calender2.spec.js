// calender

/// <reference types="cypress" />

describe('datePicker', () => {
    it('select date', () => {


        let date = new Date()
        date.setDate(date.getDate() + 381)

        let year = date.getFullYear()
        let numberMonth = date.getMonth()
        let sDate = date.getDate()
        let sMonth = date.toLocaleString('default', { month: 'long' })
        cy.log(year)
        cy.log(numberMonth)
        cy.log(sDate)
        cy.log(sMonth)

        cy.visit('https://jqueryui.com/datepicker/')
        cy.get('.demo-frame').then(($iframe) => {
            let body = $iframe.contents().find('body')
            cy.wrap(body).as('IframeBody')
            cy.get('@IframeBody').find('.hasDatepicker').click()
            function getYear() {
                cy.get("@IframeBody").find('[class="ui-datepicker-title"]').children().last().then(function (el) {
                    cy.log(el.text())
                    if (!el.text().includes(year)) {
                        cy.get("@IframeBody").find('[title="Next"]').last().click()
                        getYear()
                    }
                })
            }

            function getMonth() {
                cy.get("@IframeBody").find('[class="ui-datepicker-title"]').children().first().then(function (el) {
                    cy.log(el.text())
                    if (!el.text().includes(sMonth)) {
                        cy.get("@IframeBody").find('[title="Next"]').last().click()
                        getMonth()
                    }
                })
            }

            function selectDate() {
                cy.get("@IframeBody").contains(sDate).click()
            }

            getYear()
            getMonth()
            selectDate()
        })

    })
})