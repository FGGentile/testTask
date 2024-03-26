const { defineConfig } = require("cypress");


module.exports = defineConfig({
  video: true,
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/test-results.xml',
    outputs: true,
    testCaseSwitchClassnameAndName: true
  },
  e2e: {


    baseUrl: "https://automationexercise.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

  },

});
