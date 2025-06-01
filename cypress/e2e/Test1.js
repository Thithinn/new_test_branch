describe('My First test', () => {
  it('Navigate to the URL', () => {
    cy.loginAsAdmin();
    cy.title().should('eq', 'Akrivia Human Capital Management')   //Assertion to verify the Title of the Page
    cy.get('#quick-search-input').type('Expenses')
    cy.get('.ah-quick-search-parent-title').contains('Expenses').click()
    cy.get('.ah-btn.ah-btn-icon').click()
    cy.get('#category').type('Travel Vers')
    cy.get('#description').type('Trave expenses for the Automation Testers team.')
    cy.get('#request-submit').click()
    cy.contains('Confirmation').should('be.visible')
    cy.get('.ah-btn').contains('Confirm').click()
    cy.get('#request-close').click()
    cy.contains('Travel Vers').should('exist');

  })
  it('', () => {
  

  })
})