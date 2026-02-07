class SearchPage {
  constructor(page) {
    this.page = page;
    this.searchinput="//input[@id='gh-ac']"
    this.searchbutton='gh-search-button__wrap'

  }

  async launchToHomePage() {
    await this.page.goto('https://www.ebay.com');
  }

  async searchforiphone(){
    await this.page.locator(this.searchinput).fill('i Phone 16 Pro Max');
    await this.page.locator(this.searchbutton);
  }


}

module.exports = { SearchPage };
