// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// < reference types="cypress" />              // for cypress  intellisense
/// <reference types="cypress-xpath" />         // for cypress-xpath intellisense


Cypress.Commands.add('loginAsAdmin', () => {
  cy.visit('https://settings-starwars.akriviahcm.io/');
  cy.get('.company-logo-style').should('exist').and('be.visible')
  cy.get('#username').type('Admin');
  cy.get('#password').type('Master@123456');
  cy.get('.ah-btn.ah-login-btn').click();
});