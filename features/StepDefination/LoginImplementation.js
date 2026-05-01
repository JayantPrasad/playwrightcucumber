const { Given, When, Then } = require('@cucumber/cucumber')
const { expect, playwright } = require('@playwright/test');
const { LoginPO } = require('../PageObjects/LoginPageObject');
const JsonTags = JSON.parse(JSON.stringify(require('../Properties/propertyFile.json')))
const { chromium } = require('playwright');


Given('Navigate to url and login', { timeout: 10000 }, async function () {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.loginFunc = new LoginPO(this.page, expect)
    await this.loginFunc.navigateToURL()

});

When('Enter {string} and {string}, click on login button', async function (username, password) {
    await this.loginFunc.performLogin(username, password)

});
Then('Login should be successful', async function () {
    await this.loginFunc.validateLogin()
});




