import Navbar from "../page-objects/components/Navbar"
import LoginPage from "../page-objects/pages/LoginPage"
import PayBillsPage from "../page-objects/pages/PayBillsPage"

fixture `New payee test`
.page `http://zero.webappsecurity.com/index.html`

const loginPage = new LoginPage()
const navbar = new Navbar()
const payBillsPage = new PayBillsPage()

test.before(async t => {
    await t.click(navbar.signInButton)
    await loginPage.loginToApp("username", "password")
})

("User can add a new payee to the list", async t => {
    // Actions
    await t.click(payBillsPage.payBillsTab)
    await t.click(payBillsPage.addNewPayeeTab)
    payBillsPage.addNewPayee(
        "Kim",
        "2 Street Lane, Leeds, LS2 9JT",
        "1234567",
        "This is a new payee"
    )
    
    // Assertions
    await t.expect(payBillsPage.successMessage.innerText).contains("The new payee Kim was successfully created.")
})