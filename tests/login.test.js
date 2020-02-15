import { Selector } from "testcafe"

fixture `Login Test`
    .page `http://zero.webappsecurity.com/index.html`

    .beforeEach(async testController => {
        // Runs before each test
        await testController.setTestSpeed(1)
        await testController.setPageLoadTimeout(0)
    })
    

test("User cannot login with invalid credentials", async t => {
    const signInButton = Selector("#signin_button")
    const loginForm = Selector("#login_form")
    const usernameInput = Selector("#user_login")
    const passwordInput = Selector("#user_password")
    const submitButton = Selector(".btn-primary")
    const errorMessage = Selector(".alert-error").innerText

    await t.click(signInButton)
    await t.expect(loginForm.exists).ok()
    await t.typeText(usernameInput, "invalid username", { paste:true })
    await t.typeText(passwordInput, "invalid Password", { paste:true })
    await t.click(submitButton)
    await t.expect(errorMessage).contains("Login and/or password are wrong.")

}),

test("User can login into application", async t => {
    const signInButton = Selector("#signin_button")
    const loginForm = Selector("#login_form")
    const usernameInput = Selector("#user_login")
    const passwordInput = Selector("#user_password")
    const submitButton = Selector(".btn-primary")
    const accountSummaryTab = Selector("#account_summary_tab")
    const userIcon = Selector(".icon-user")
    const logoutButton = Selector("#logout_link")

    await t.click(signInButton)
    await t.expect(loginForm.exists).ok()
    await t.typeText(usernameInput, "username", { paste:true })
    await t.typeText(passwordInput, "password", { paste:true })
    await t.click(submitButton)
    await t.expect(accountSummaryTab.exists).ok()
    await t.expect(loginForm.exists).notOk()
    await t.click(userIcon)
    await t.expect(logoutButton.exists).ok()
    await t.click(logoutButton)
    await t.expect(signInButton.exists).ok()
})