class HomePage {

    constructor(page) {
        this.page = page;
        this.emblm = '#gh-logo'
    }

    async VerifyEmblm(){
        await this.page.hover(this.emblm);
        await this.page.locator(this.emblm).highlight();
    }




}

module.exports = { HomePage };
