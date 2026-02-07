const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

Before(async function () {

  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();

  //   this.browser = await chromium.launch({
  //   headless: false,
  //   args: ['--start-maximized'] // maximize window
  // });

  // this.context = await this.browser.newContext({
  //   viewport: null // let page use full window size
  // });

  // this.page = await this.context.newPage();

});








After(async function () {
  if (this.page && !this.page.isClosed()) {
    await this.page.close();
  }
  if (this.context) {
    await this.context.close();
  }
  if (this.browser) {
    await this.browser.close();
  }
});
