exports.config = {

    seleniumAddress: 'http://localhost:4723/wd/hub',
    
    capabilities: {
        browserName: 'chrome',
        platformName: 'Android',
        deviceName: 'myDevice'
    },
  
    specs: [
      '../test/spec.js'
    ],
  
    onPrepare: () => {
      browser.waitForAngularEnabled(true);
    },
  
    jasmineNodeOpts: {
     defaultTimeoutInterval: 1000000
   }
  
  }
  