const JsonTags = JSON.parse(JSON.stringify(require('../Properties/propertyFile.json')))
class LoginPO {
    constructor(page, expect) {
        this.page = page
        this.expect = expect
        this.username = this.page.getByPlaceholder('you@email.com')
        this.password = this.page.locator('#password')
        this.loginBtn = this.page.locator('#login-btn')
        this.homePage = this.page.locator('#nav-home')

    }

    async navigateToURL() {
        await this.page.goto(JsonTags.url)
    }
    async performLogin(username, password) {
        await this.username.fill(username)
        await this.password.fill(password)
        await this.page.waitForLoadState('networkidle')
        await this.loginBtn.click()
    }
    async validateLogin() {
        const expectedResult = await this.homePage
        await this.expect(expectedResult).toBeVisible()
    }

    //methods
}
module.exports = { LoginPO }