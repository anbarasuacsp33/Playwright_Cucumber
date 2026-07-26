const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { getExcelData } = require('../../utils/excelReader');
const { LoginPage } = require('../../pages/loginpage');



Given('I launch the application', async function () {
    
    this.loginpage = new LoginPage(this.page);
    await this.loginpage.goto();
});


When('I login with {string} and {string}', async function (username, password) {
    await this.loginpage.login(username, password);
});



Then('I should see the dashboard', async function () {
    await this.loginpage.clickLogin();

});
