const { Given, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')
const { chromium } = require('playwright')
const { homePO } = require('../PageObjects/HomePageObject')
const { LoginPO } = require('../PageObjects/LoginPageObject')
const JsonObj = JSON.parse(JSON.stringify(require('../Properties/propertyFile.json')))

Given('Login and Verify all UI elements', { timeout: 10000 }, async function () {
    this.lpo = new LoginPO(this.page, expect)
    await this.lpo.navigateToURL()
    await this.lpo.performLogin(JsonObj.username, JsonObj.password)
    this.hpo = new homePO(this.page, expect)
    await this.hpo.verifyTags()

});

Then('All elements validated', async function () {
    await this.lpo.navigateToURL()
    await this.lpo.performLogin(JsonObj.username, JsonObj.password)
    await this.hpo.verifyLabels()
});
