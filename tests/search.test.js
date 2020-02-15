import {Selector} from "testcafe"

fixture `Search bar test`
.page `http://zero.webappsecurity.com/index.html`

test("User can search for information using searchbar", async t => {
    // Selectors
    const searchBar = Selector("#searchTerm")
    const resultsTitle = Selector("h2").innerText
    const linkText = Selector("div").innerText
    
    // Actions
    await t.typeText(searchBar, "online bank", {paste:true})
    await t.pressKey("enter")

    //Assertions
    await t.expect(resultsTitle).contains("Search Results:")
    await t.expect(searchBar.exists).ok()
    await t.expect(linkText).contains("Zero - Free Access to Online Banking")
})