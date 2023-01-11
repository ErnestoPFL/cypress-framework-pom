const { defineConfig } = require('cypress');

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 15000,
  requestTimeout: 5000,
  responseTimeout: 5000,
  video: false,
  trashAssetsBeforeRuns: true,
  watchForFileChanges: false,
  e2e: {
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
  },
});
