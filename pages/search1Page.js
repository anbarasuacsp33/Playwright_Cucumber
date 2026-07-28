class search1{

    constructor(page){
        this.page = page;
        

    }

    async launchtheapplicationurl(){
        await this.page.goto("https://www.ebay.com")
    }

    async searchforproduct(){
        await this.page.locator("#gh-ac").fill("Laptop");

    }









}

export default search1