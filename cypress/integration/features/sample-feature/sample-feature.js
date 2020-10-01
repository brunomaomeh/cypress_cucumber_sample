import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
    
Given('I open https://example.cypress.io', () => {
    cy.visit('https://example.cypress.io')
});
When('I click type link', () => {
    cy.contains('type').click()
});
Then('The url should change', () => {
    cy.url().should('include', '/commands/actions')
});