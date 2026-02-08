const { Given, When, Then } = require("@cucumber/cucumber");
const {Category} = require("../../pages/Categorypage")




When('User Click Category Drop Down', async function () {
    this.category = new Category(this.page)
    await this.category.clickcategory();

});



When('Choose First Category', async function () {



});



When('Click Search Button', async function () {


});
