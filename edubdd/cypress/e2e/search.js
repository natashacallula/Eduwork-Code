import SearchPage from './search.page';
const {Given, When , Then} = require('@badeball/cypress-cucumber-preprocessor');

Given('I am on the Zero Bank homepage', () => {
    SearchPage.visit();
})

When('I type "online" into search box', () => {
    SearchPage.search().type('Online{enter}');
})

Then('I should see the search results page', () => {
    cy.url().should("include", "search.html");
})

Then('I should see a link for "Zero - online statements"', () =>{
    cy.get('a[href="/online-banking.html"]')
    .should('contain.text', 'Zero - Free Access to Online Banking');
})

When('I type "Loid Forger" into the search box', () => {
   SearchPage.search().type('Loid Forger{enter}');
})

Then('I should see a message containing "No results were found for the query: Loid Forger"', () =>{
    cy.get('div').should('contain.text', "No results were found for the query: Loid Forger");
})