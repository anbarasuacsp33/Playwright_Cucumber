class Category{


    constructor(page){
        this.page=page;
        this.catdd='.gh-search-categories'

    }

    async clickcategory(){
        await this.page.locator(this.catdd).click();
    }




}
module.exports = {Category}