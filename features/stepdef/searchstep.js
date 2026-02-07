const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { SearchPage } = require('../../pages/searchpage');


Given('I am on ebay home page', async function () {

  this.searchpage = new SearchPage(this.page); // instance
  await this.searchpage.launchToHomePage(); // accessing the search page actions

});

When('Search for iphone', async function () {

  this.searchpage = new SearchPage(this.page);
  await this.searchpage.searchforiphone();
});

When('Search For Negativesceario', async function () {
  this.searchpage = new SearchPage(this.page);
  await this.searchpage.invalidsearch();
});


When('Search a Product {string}', async function (Product) {
  this.searchpage = new SearchPage(this.page);
  await this.searchpage.search(Product);
});


Then('Vserify The Search Results', async function () {
  this.searchpage = new SearchPage(this.page);
  await this.searchpage.verifysearchresult();
});


