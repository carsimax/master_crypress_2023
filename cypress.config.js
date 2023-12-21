const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    URL: "https://www.saucedemo.com/v1/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
