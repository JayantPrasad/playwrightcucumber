const { expect, playwright } = require('@playwright/test');
const { Before, After, AfterStep,Status } = require('@cucumber/cucumber')
const { chromium } = require('playwright');

Before(async function () {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
})

After ( async function (){
 console.log("The test is completed")
})
AfterStep( async function({result})
{
    if (result.status===Status.PASSED)
    {
        this.page.screenshot({path: 'screenshot1.png'})
    }
})