
const webdriverio = require('webdriverio');
const ANDROID_APP_PATH =  `${process.cwd()}\\android\\app\\build\\outputs\\apk\\release\\app-release.apk`;
const assert = require('chai').assert;
const ANDROID_TEXT_SELECTOR = '*//android.widget.TextView';


const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    automationName: 'UiAutomator2',
    avd : "Nexus_4_API_30",
    orientation: 'PORTRAIT',
    app: ANDROID_APP_PATH
  }
};
  
describe('Validate change background color',  function () {
  
  let device;

 beforeEach(async function () {
    jest.setTimeout(50000);    
    device = await webdriverio.remote(opts);
  });

  it('When selecting red the background color should change to #FF0000', async function () {
    // Arrange
    let button = await device.$("~Red");
    let bgColorText = await device.$("~bgColor");
    await button.waitForExist({ timeout: 10000 });

    //Act
    await button.touchAction('tap');    

    // Assert
    assert.equal(await bgColorText.getText(ANDROID_TEXT_SELECTOR),"#FF0000");
  });

  afterEach(async function() {
    await device.deleteSession();
  });

});


