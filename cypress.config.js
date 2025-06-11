const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/Test1.js' // n
  },
});

// cypress.config.js
// module.exports = {
//   e2e: {
//     specPattern: 'cypress/e2e/**/*Test1.js', // Look for `.cy.js` files in the `e2e` folder
//     specPattern: 'cypress/e2e/**/*Test2.js', // Look for `.cy.js` files in the `e2e` folder
//   },
// };
module.exports = {
  e2e: {
    specPattern: [
      'cypress/e2e/Test1.js', // First test file
      'cypress/e2e/Tags.js', // Second test file
    ],
     watchForFileChanges: false
  },
};

