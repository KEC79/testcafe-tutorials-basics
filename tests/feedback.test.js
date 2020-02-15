import FeedbackPage from "../page-objects/pages/FeedbackPage"
import HomePage from "../page-objects/pages/HomePage"

const feedbackPage = new FeedbackPage()
const homePage = new HomePage()

fixture `Feedback form test`
.page `http://zero.webappsecurity.com/index.html`

test("User can submit feedback via form", async t => {
    // Actions
    await t.click(homePage.feedbackLink)
    feedbackPage.submitFeedback("Kim", "test@test.com", "this is a subject", "This is a comment")
    
    // Assertion
    await t.expect(feedbackPage.feedbackPageTitle.innerText).contains("Feedback")
    await t.expect(feedbackPage.submitMessage.innerText).contains("Thank you for your comments, Kim")
})