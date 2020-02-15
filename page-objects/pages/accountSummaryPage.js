import { Selector, t } from "testcafe"

class AccountSummaryPage {
    constructor() {
        // Selectors
        this.accountSummaryTab = Selector("#account_summary_tab")
    }

}

export default AccountSummaryPage