import { expect } from '@playwright/test';
export default class search1{

    constructor(page){
        this.page = page;

    }

    async launchtheapplicationurl(){
        await this.page.goto("https://www.ebay.com")
    }

    async searchforproduct(){
        await this.page.locator("#gh-ac").fill("Laptop");

    }

    async clickSearchButton(){
        await this.page.locator("#gh-search-btn").click();

    }

    async verifySearchResult(){
        await expect(this.page).toHaveURL(/.*_nkw=Laptop.*/);
        await expect(this.page.locator(this.heading)).toContainText("Laptop");
    }

    async searchforinvalidproduct(){
        await this.page.locator("#gh-ac").fill("abc-test");
    }

    async clickSearchButton(){
        await this.page.locator("#gh-search-btn").click();

    }

    async verifySearchResult(){
        await expect(this.page.locator(".srp-controls__count-heading")).toContainText("0 results for abc-test");
        await expect(this.page.locator("h1")).toContainText("No exact matches found");
    }





}
