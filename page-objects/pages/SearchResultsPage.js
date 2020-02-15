import { Selector, t} from "testcafe"

class SearchResultPage {
    constructor() {
        this.resultsTitle = Selector("h2")
        this.linkText = Selector("div")
    }
}

export default SearchResultPage