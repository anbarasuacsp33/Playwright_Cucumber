const { BeforeAll, AfterAll, Before, After } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('playwright');

let browser;

function getBrowser(browserName) {
    switch (browserName) {
        case 'firefox':
            return firefox;
        case 'webkit':
            return webkit;
        default:
            return chromium;
    }
}

BeforeAll(async function () {
    const browserName = process.env.BROWSER || 'chromium';
    const browserType = getBrowser(browserName);

    console.log("Launching browser:", browserName);

    browser = await browserType.launch({
        headless: false
    });
});

Before(async function () {
    this.context = await browser.newContext();
    this.page = await this.context.newPage();
});

After(async function () {
    await this.context.close();
});

AfterAll(async function () {
    await browser.close();
});
