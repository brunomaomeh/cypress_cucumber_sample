import SamplePage from "../pages/sample-page"

describe('My First Test', () => {
    it('Open a sample page with hardcoded', () => {
      cy.visit('https://example.cypress.io')
      cy.contains('type').click()
      cy.url().should('include', '/commands/actions')
    })
    
    it('Open a sample page with page object', () => {
        const page = new SamplePage()
        page.open()
        page.click()
        page.verifyUrl()
    })
    
    it('Open a sample page with command', () => {
      cy.open()
      cy.contains('type').click()
      cy.url().should('include', '/commands/actions')
    })
  })