import { Selector, t } from "testcafe"

class FeedbackPage {
    constructor() {
        this.feedbackPageTitle = Selector("#feedback-title")
        this.nameInput = Selector("#name")
        this.emailInput = Selector("#email")
        this.subjectInput = Selector("#subject")
        this.commentInput = Selector("#comment")
        this.submitButton = Selector("input").withAttribute("value", "Send Message")
        this.submitMessage = Selector("div")
    }

    async submitFeedback(name, email, subject, comment) {
        await t
            .typeText(this.nameInput, name, {paste:true, replace:true})
            .typeText(this.emailInput, email, {paste:true, replace:true})
            .typeText(this.subjectInput, subject, {paste:true, replace:true})
            .typeText(this.commentInput, comment, {paste:true, replace:true})
            .click(this.submitButton)            
    }
} 

export default FeedbackPage