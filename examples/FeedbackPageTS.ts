import { Selector, t } from "testcafe"

class FeedbackPage {

        feedbackPageTitle: Selector = Selector("#feedback-title")
        nameInput: Selector = Selector("#name")
        emailInput: Selector = Selector("#email")
        subjectInput: Selector = Selector("#subject")
        commentInput: Selector = Selector("#comment")
        submitButton: Selector = Selector("input").withAttribute("value", "Send Message")
        submitMessage: Selector = Selector("div")

    async submitFeedback(t: TestController, name: string, email: string, subject: string, comment: string) {
        await t
            .typeText(this.nameInput, name, {paste:true, replace:true})
            .typeText(this.emailInput, email, {paste:true, replace:true})
            .typeText(this.subjectInput, subject, {paste:true, replace:true})
            .typeText(this.commentInput, comment, {paste:true, replace:true})
            .click(this.submitButton)            
    }
} 

export default FeedbackPage