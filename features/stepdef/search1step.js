const { Given, When, Then } = require('@cucumber/cucumber');


Given('User in ebay home page', async function () {
    await this.page.goto("https://www.ebay.com")
});


When('Enter product name in a search field', async function () {

});
       

When('Click Search buttons', async function () {

});
       

Then('I verified search results', async function () {

});