export default class SamplePage {
    open() {
        cy.visit('https://example.cypress.io')
    }
    click() {
        cy.contains('type').click()
    }
    verifyUrl() {
        cy.url().should('include', '/commands/actions')
    }
}
