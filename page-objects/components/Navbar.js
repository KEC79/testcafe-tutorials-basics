import { Selector, t } from "testcafe"

class Navbar {
    constructor() {
        // Selectors
        this.searchBar = Selector("#searchTerm")
        this.signInButton = Selector("#signin_button")
    }
}

export default Navbar