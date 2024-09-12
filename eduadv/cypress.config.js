const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  // pageLoadTimeout: 60000, // Timeout untuk pemuatan halaman (60 detik)
  // requestTimeout: 10000,  // Timeout untuk permintaan jaringan (10 detik)
  },
});
