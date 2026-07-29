class HomePage {

    constructor(page) {
        this.page = page;
        this.emblm = '#gh-logo'
    }

    async VerifyEmblm(){
        await this.page.hover(this.emblm);
        await this.page.locator(this.emblm).highlight();
    }

    async enterproduct(Product){
        await this.page.locator("#gh-ac").fill(Product);

    }




}

export default { HomePage };
