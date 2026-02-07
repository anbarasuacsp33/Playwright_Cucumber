const { TIMEOUT } = require("mz/dns");

class SearchPage {

  constructor(page) {
    this.page = page;
    this.searchinput="//input[@id='gh-ac']"
    this.searchbutton='gh-search-button__wrap'
    this.verifysearchresult1='.srp-controls__control.srp-controls__count'

  }

  async launchToHomePage() {
    await this.page.goto('https://www.ebay.com');
  }

  async searchforiphone(){
    await this.page.locator(this.searchinput).fill('i Phone 16 Pro Max');
    await this.page.locator(this.searchbutton);
    console.log('Search for iphone')
  }

  async invalidsearch(){
    await this.page.locator(this.searchinput).fill('ggfgdsyuftyudsftyuvsf76576576sr57656ryudsftuy');
    await this.page.locator(this.searchbutton);
    console.log('Invalid Search')
  }

  async search(Product){
    await this.page.locator(this.searchinput, {TIMEOUT:10000}).fill(Product);
    await this.page.locator(this.searchbutton);
    console.log('Search with scenariooutlinefeature')
  }

  async verifysearchresult(){
    await this.page.locator(this.verifysearchresult1);
    console.log('I am in a search Result Page')
  }


}

module.exports = { SearchPage };
