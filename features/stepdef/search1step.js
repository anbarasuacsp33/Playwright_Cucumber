import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import search1 from '../../pages/search1Page.js'

Given('User in ebay home page', async function () {
    this.sp = new search1(this.page);
    await this.sp.launchtheapplicationurl();
});


When('Enter product name in a search field', async function () {
    this.sp = new search1(this.page);
    await this.sp.searchforproduct();
});
       

When('Click Search buttons new', async function () {
    await this.sp.clickSearchButton();

});
       

Then('I verified search results', async function () {
    await this.sp.verifySearchResult();
 });


When('Enter invalid product name in search field', async function () {
    await this.sp.searchforinvalidproduct();
});


Then('I verified no search results', async function () {
    await this.sp.verifySearchResult();
});


// When('Search For A Product {string}', async function (Product) {
//     await this.page.locator("#gh-ac").fill(Product);
// });




// When('Verify the search result', async function () {

  

// });


// When('Click the first product from the search result', async function () {



// });


// Then('Verify product detail page', async function () {



// });