import { Selector, t } from "testcafe"

class HomePage {
    constructor() {
        this.feedbackLink = Selector("#feedback")
    }
}

export default HomePage