const { Given, When } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { SearchPage } = require('../../pages/searchpage');


Given('I am on ebay home page', async function () {

  this.searchpage = new SearchPage(this.page);
  await this.searchpage.launchToHomePage();

});

When('Search for iphone', async function () {

  this.searchpage = new SearchPage(this.page);
  await this.searchpage.searchforiphone();




});
