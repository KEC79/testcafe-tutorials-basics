import {Selector} from "testcafe"

fixture `Send forgotten password test`
.page `http://zero.webappsecurity.com/index.html`

test("User can request new password to be sent to their email", async t => {
    // Get selectors
    const signinButton = Selector("#signin_button")
    const linkToPassword = Selector("a").withText("Forgot your password ?")
    const emailInput = Selector("#user_email")
    const message = Selector("div").innerText
    
    // Actions
    await t.click(signinButton)
    await t.click(linkToPassword)
    await t.typeText(emailInput, "test@test.com", {paste: true})
    await t.pressKey("enter")
    
    // Assertion
    await t.expect(message).contains("test@test.com")
    await t.expect(emailInput.exists).notOk
})