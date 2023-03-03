const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    video: false,
    supportFile: false,
    specPattern: '__tests__/**/*.cy.js',
  },
})
