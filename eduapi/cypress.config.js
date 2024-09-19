const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    userEmail: 'test@example.com',
    userPassword: 'password123',
    apiUrl: 'https://example.com/api'
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
