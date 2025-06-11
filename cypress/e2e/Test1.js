describe('My First test', () => {
  it('Navigate to the URL', () => {
    cy.loginAsAdmin();
    cy.title().should('eq', 'Akrivia Human Capital Management')   //Assertion to verify the Title of the Page
    cy.get('#quick-search-input').type('Expenses')
    cy.get('.ah-quick-search-parent-title').contains('Expenses').click()
    cy.get('.ah-btn.ah-btn-icon').click()
    const randomCategoryName = `Category_${Math.random().toString(36).substring(2,8)}`;
    cy.get('#category').type(randomCategoryName)
    cy.get('#description').type('Travel expenses for the Automation Testers team.')
    cy.get('#request-submit').click()
    cy.contains('Confirmation').should('be.visible')
    cy.get('.ah-btn').contains('Confirm').click()
    cy.get('#request-close').click()
    cy.contains(randomCategoryName).should('exist');
    })
    it('To Check the Category view details', () => {
    expect(randomCategoryName, 'Created category name should be set').to.not.be.undefined;
    cy.contains(createdCategoryName).click();
    })
})
