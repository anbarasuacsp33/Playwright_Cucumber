const { Given, When } = require('@cucumber/cucumber');
const homePage = require('../page_objects/homepage');

Given('I navigate to the ebay home page', { timeout: 20 * 1000 }, async function () {
  const hp = new homePage(this.page);
  await hp.visit();

});

When('I verify the header menu', { timeout: 20 * 1000 }, async function () {
  const hp = new homePage(this.page);
  await hp.dailydeal();
});

When('I verify the sub menu', async function () {
  const hp = new homePage(this.page);
  await hp.submenu();
});

When('I search for product', async function () {
  const hp = new homePage(this.page);
  await hp.searchProduct();
});


