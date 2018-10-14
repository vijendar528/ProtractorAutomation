exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: ['start-maximized'],
    }
    },
  framework: 'jasmine',
  specs: [
    //'./specs/AddToCart.spec.js',
    //'./specs/UploadFile.spec.js',
    './specs/searchFlight.spec.js'

  ],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 480000
  }
};