import { Selector, t } from "testcafe"

class PayBillsPage {
    constructor() {
        this.payBillsTab = Selector("#pay_bills_tab")
        this.addNewPayeeTab = Selector("a").withText("Add New Payee")
        this.form_PayeeName = Selector("#np_new_payee_name")
        this.form_PayeeAddress = Selector("#np_new_payee_address")
        this.form_PayeeAccount = Selector("#np_new_payee_account")
        this.form_PayeeDetails = Selector("#np_new_payee_details")
        this.addButton = Selector("input").withAttribute("value", "Add")
        this.successMessage = Selector("#alert_content")

    }

    async addNewPayee(name, address, account, details) {
        await t
            .typeText(this.form_PayeeName, name, {paste:true, replace:true})
            .typeText(this.form_PayeeAddress, address, {paste:true, replace:true})
            .typeText(this.form_PayeeAccount, account, {paste:true, replace:true})
            .typeText(this.form_PayeeDetails, details, {paste:true, replace:true})
            .click(this.addButton)            
    }
}

export default PayBillsPage