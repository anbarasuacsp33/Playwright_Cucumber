import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('User in ebay home page', async function () {
    await this.page.goto("https://www.ebay.com")
});


When('Enter product name in a search field', async function () {
await this.page.locator("#gh-ac").fill("Laptop");
});
       

When('Click Search buttons', async function () {
await this.page.locator("#gh-search-btn").click();

});
       

Then('I verified search results', async function () {
  await expect(this.page).toHaveURL('https://www.ebay.com/sch/i.html?_nkw=Laptop&_sacat=0&_from=R40&_trksid=p4624852.m570.l1313'
  );

  const heading = this.page.locator('.srp-controls__count-heading');

  await expect(heading).toContainText('Laptop');
 });


When('Enter invalid product name in search field', async function () {
    await this.page.locator("#gh-ac").fill("abc-test");
});

When('Click Search button', async function () {
    await this.page.locator("#gh-search-btn").click();
});

Then('I verified no search results', async function () {

    await expect(this.page.locator(".srp-controls__count-heading")).toContainText("0 results for abc-test");

    await expect(this.page.locator("h1")).toContainText("No exact matches found");
});