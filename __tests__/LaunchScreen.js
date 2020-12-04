
import ws from "webdriverio"
const wdio = require("webdriverio");
const assert = require("assert");
const ANDROID_APP_PATH = './android/app/build/outputs/apk/release/app-release.apk';
const deviceName = 'Nexus_5_7.1.1';

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "8",
    deviceName: "Android Emulator",
    orientation: 'PORTRAIT',
    app: ANDROID_APP_PATH,
    path: "0.0.0.0:4723"
  }
};

async function main () {
  const client = await wdio.remote(opts);

  
  await client.deleteSession();
}

main();


