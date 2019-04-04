exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  ignoreUncaughtExceptions: true,
  restartBrowserBetweenTests: false,
  getPageTimeout: 50000,
  allScriptsTimeout: 30000,
  rootElement: '*[ng-app]',
  params: {

  },

  specs: [
    'spec.js'
  ],

  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: [
        '--disable-gpu', '--headless'
      ]
    }
  },

  beforeLaunch: function () {
    setTimeout(function () {
      browser.driver.executeScript(function () {
        return {
          width: window.screen.availWidth,
          height: window.screen.availHeight
        }
      }).then(function (result) {
        browser.driver.manage().window().setSize(result.width, result.height)
      })
    })
  },

  onPrepare: function () {
    browser.ignoreSynchronization = true
  }
}
