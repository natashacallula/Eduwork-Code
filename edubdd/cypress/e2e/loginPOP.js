import LoginPage from './loginPOP.page';
const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');

Given('I open login page', () => {
    LoginPage.visit();
})

When('I submit login', () => {
    LoginPage.FillUsername('username');
    LoginPage.FillPassword('password');
    LoginPage.SignIn();
})

Then('I should see hompage', () => {
    cy.get('#account_summary_tab > a').should('be.visible');
})