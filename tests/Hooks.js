const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

Before(async function () {

    this.browser = await chromium.launch({
    headless: false,
    args: ['--start-maximized'] // maximize window
  });

  this.context = await this.browser.newContext({
    viewport: null // let page use full window size
  });

  this.page = await this.context.newPage();
  
});

After(async function () {
  await this.browser.close();
});
