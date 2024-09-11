/// <reference types="cypress" />

describe('Custom commands Fixtures', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/login.html')
      })
    it('Features Pay Saved Payee',() => {
        cy.fixture("bank").then(bank => {
            const username = bank.user
            const password = bank.pass
            const amount = bank.amount
            const description = bank.desc

            //Type username & Password
            cy.loginbank(username, password)
            cy.url().should('include', 'account-summary.html')
            
            //Open pay bills tab
            cy.get ('a[href="/bank/redirect.html?url=pay-bills.html"]').click()
            cy.url().should('include', 'pay-bills.html')

            //pay saved payee
            cy.paypayee(amount, description)

            //Assertion
            cy.get('#alert_content')
            .should('be.visible')
            .and('contain.text', 'The payment was successfully submitted.');
        })
     });

     it('Features Add New payee',() => {
        cy.fixture("bank").then(bank => {
            const username = bank.user
            const password = bank.pass
            const payeename = bank.pname
            const payeeaddress = bank.paddress
            const account = bank.acc
            const details = bank.detail

            //Type username & Password
            cy.loginbank(username, password)
            cy.url().should('include', 'account-summary.html')
            
            //Open pay bills tab
            cy.get ('a[href="/bank/redirect.html?url=pay-bills.html"]').click()
            cy.url().should('include', 'pay-bills.html')

            //Add New payee
            cy.newpayee(payeename, payeeaddress, account, details)
            
            //Assertion
            cy.get('#alert_content')
            .should('be.visible')
            .and('contain.text', 'The new payee Lala marcella was successfully created.');
        })
     });

     it('Features Purchase foreign currency',() => {
        cy.fixture("bank").then(bank => {
            const username = bank.user
            const password = bank.pass
            const amount = bank.amount

            //Type username & Password
            cy.loginbank(username, password)
            cy.url().should('include', 'account-summary.html')
            
            //Open pay bills tab
            cy.get ('a[href="/bank/redirect.html?url=pay-bills.html"]').click()
            cy.url().should('include', 'pay-bills.html')

            //Purchase foreign currency
            cy.foreigncurrency(amount)
            
            //Assertion
           cy.get('#alert_content')
           .should('be.visible')
           .and('contain.text', 'Foreign currency cash was successfully purchased.');
        })
     });
 });