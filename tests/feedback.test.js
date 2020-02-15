import {Selector} from "testcafe"

fixture `Feedback form test`
.page `http://zero.webappsecurity.com/index.html`

test("User can submit feedback via form", async t => {
    // Selectors
    const feedbackLink = Selector("#feedback")
    const feedbackPageTitle = Selector("#feedback-title").innerText
    const nameInput = Selector("#name")
    const emailInput = Selector("#email")
    const subjectInput = Selector("#subject")
    const commentInput = Selector("#comment")
    const submitButton = Selector("input").withAttribute("value", "Send Message")
    const submitMessage = Selector("div").innerText

    // Actions
    await t.click(feedbackLink)
    await t.typeText(nameInput, "Kim", {paste:true})
    await t.typeText(emailInput, "test@test.com", {paste:true})
    await t.typeText(subjectInput, "This is a subject", {paste:true})
    await t.typeText(commentInput, "This is a comment", {paste:true})
    await t.click(submitButton)
    
    // Assertion
    await t.expect(feedbackPageTitle).contains("Feedback")
    await t.expect(submitMessage).contains("Thank you for your comments, Kim")
})