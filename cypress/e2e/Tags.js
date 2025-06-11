describe('My First test', () => {
  it('Navigate to the URL', () => {
    cy.loginAsAdmin();
    cy.title().should('eq', 'Akrivia Human Capital Management')   //Assertion to verify the Title of the Page
      cy.get('#quick-search-input').type('Expenses')
      cy.get('.ah-quick-search-parent-title').contains('Expenses').click()
      cy.get('.ah-topmenu-set-item-link').contains('Tags').click()
      cy.get('.ah-btn.ah-btn-icon').contains('Add New').click()
      cy.get('.form-control.ah-sm.ng-untouched.ng-pristine.ng-invalid').first().click().type('Game changers')
      cy.get('.ah-multi-selective') .click();
      cy.get('')
    })
  })