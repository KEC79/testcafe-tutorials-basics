import Navbar from "../page-objects/components/Navbar"
import LoginPage from "../page-objects/pages/LoginPage"
import AccountSummaryPage from "../page-objects/pages/accountSummaryPage"

const navbar = new Navbar()
const loginPage = new LoginPage()
const accountSummaryPage = new AccountSummaryPage()

fixture `Login Test`
    .page `http://zero.webappsecurity.com/index.html`

    .beforeEach(async t => {
        await t.setTestSpeed(1)
        await t.setPageLoadTimeout(0)
    })
    

test("User cannot login with invalid credentials", async t => {
    await t
        .click(navbar.signInButton)
    loginPage
        .loginToApp("invalid username", "invalid Password")
    await t
        .expect(loginPage.errorMessage.innerText)
        .contains("Login and/or password are wrong.")
}),

test("User can login into application", async t => {
    await t
        .click(navbar.signInButton)
        .expect(loginPage.loginForm.exists).ok()
    loginPage
        .loginToApp("username", "password")
    await t    
        .expect(accountSummaryPage.accountSummaryTab.exists).ok()
        .expect(loginPage.loginForm.exists).notOk()
        .click(navbar.userIcon)
        .expect(navbar.logoutButton.exists).ok()
        .click(navbar.logoutButton)
        .expect(navbar.signInButton.exists).ok()
})