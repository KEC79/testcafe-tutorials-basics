import { Selector, t } from "testcafe"

class Navbar {
    constructor() {
        // Selectors
        this.searchBar = Selector("#searchTerm")
        this.signInButton = Selector("#signin_button")
        this.userIcon = Selector(".icon-user") 
        this.logoutButton = Selector("#logout_link")
    }

    async search(text) {
        await t
        .typeText(this.searchBar, text, { paste:true, replace:true })
        .pressKey("enter")
    }
}

export default Navbar