import { defineConfig } from 'cypress'

export default defineConfig({
  
  viewportWidth: 1980,
  viewportHeight: 1024,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 70000,
  e2e: {
    baseUrl: 'https://www.pipedrive.com/en',
    
    screenshotsFolder: './.cypress/screenshots',
    videosFolder: './.cypress/videos',
    downloadsFolder: './.cypress/downloads',
  },
   setupNodeEvents(on, config) {
    // implement node event listeners here
   }
})
