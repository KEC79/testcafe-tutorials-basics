import { Selector } from "testcafe"
import { login } from "../helper"

fixture `New payee test`
.page `http://zero.webappsecurity.com/index.html`

test.before(async t => {
   await login("username", "password")
})

("User can add a new payee to the list", async t => {
    // Selectors
    const payBillsTab = Selector("#pay_bills_tab")
    const addNewPayeeTab = Selector("a").withText("Add New Payee")
    const form_PayeeName = Selector("#np_new_payee_name")
    const form_PayeeAddress = Selector("#np_new_payee_address")
    const form_PayeeAccount = Selector("#np_new_payee_account")
    const form_PayeeDetails = Selector("#np_new_payee_details")
    const addButton = Selector("input").withAttribute("value", "Add")
    const successMessage = Selector("#alert_content").innerText

    // Actions
    await t.click(payBillsTab)
    await t.click(addNewPayeeTab)
    await t.typeText(form_PayeeName, "Kim", {paste:true} )
    await t.typeText(form_PayeeAddress, "2 Street Lane, Leeds, LS1 9JT", {paste:true})
    await t.typeText(form_PayeeAccount, "1234567", {paste:true})
    await t.typeText(form_PayeeDetails, "This is a new payee", {paste:true})
    await t.click(addButton)

    // Assertions
    await t.expect(successMessage).contains("The new payee Kim was successfully created.")
})