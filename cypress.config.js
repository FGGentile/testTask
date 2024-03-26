const { defineConfig } = require("cypress");


module.exports = defineConfig({
  video: true,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {


    baseUrl: "https://automationexercise.com/",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },

  },

});
