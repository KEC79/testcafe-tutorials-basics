import Navbar from "../page-objects/components/Navbar"
import LoginPage from "../page-objects/pages/LoginPage"
import ForgottenPasswordPage from "../page-objects/pages/ForgottenPasswordPage"

const navbar = new Navbar()
const loginPage = new LoginPage()
const forgottenPasswordPage = new ForgottenPasswordPage()

fixture `Send forgotten password test`
.page `http://zero.webappsecurity.com/index.html`

test("User can request new password to be sent to their email", async t => {
    // Actions
    await t
        .click(navbar.signInButton)
        .click(loginPage.linkToPassword)
        .typeText(forgottenPasswordPage.emailInput, "test@test.com", { paste:true, replace:true })
        .pressKey("enter")
    
    // Assertion
    await t
        .expect(forgottenPasswordPage.message.innerText).contains("test@test.com")
        .expect(forgottenPasswordPage.emailInput.exists).notOk
})