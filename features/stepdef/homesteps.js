const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { HomePage } = require("../../pages/homepage");



When('User mouseover to embalem', async function () {
    this.hp = new HomePage(this.page)
    await this.hp.VerifyEmblm();
});


When('User Verified SignIn and signup links', async function () {


});


Then('Home Page Header Emenets Verified', async function () {



});

