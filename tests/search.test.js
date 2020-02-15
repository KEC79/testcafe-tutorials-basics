import Navbar from "../page-objects/components/Navbar"
import SearchResultPages from "../page-objects/pages/SearchResultsPage"

const navbar = new Navbar()
const searchResultsPage = new SearchResultPages()

fixture `Search bar test`
.page `http://zero.webappsecurity.com/index.html`

test("User can search for information using searchbar", async t => {
    // Actions
    navbar.search("online Bank")

    //Assertions
    await t
        .expect(searchResultsPage.resultsTitle.innerText).contains("Search Results:")
        .expect(navbar.searchBar.exists).ok()
        .expect(searchResultsPage.linkText.innerText).contains("Zero - Free Access to Online Banking")
})