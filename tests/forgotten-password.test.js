import {Selector} from "testcafe"
import Navbar from "../page-objects/components/Navbar"

const navbar = new Navbar()

fixture `Send forgotten password test`
.page `http://zero.webappsecurity.com/index.html`

test("User can request new password to be sent to their email", async t => {
    // Get selectors
    const linkToPassword = Selector("a").withText("Forgot your password ?")
    const emailInput = Selector("#user_email")
    const message = Selector("div").innerText
    
    // Actions
    await t.click(navbar.signInButton)
    await t.click(linkToPassword)
    await t.typeText(emailInput, "test@test.com", {paste: true})
    await t.pressKey("enter")
    
    // Assertion
    await t.expect(message).contains("test@test.com")
    await t.expect(emailInput.exists).notOk
})