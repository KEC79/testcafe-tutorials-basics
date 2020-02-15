 
import xPathToCss from "xpath-to-css"
 
 //XPATH TO CSS Example
    const xPath = `"//div[@id="foo"][2]/span[@class="bar"]//a[contains(@class, "baz")]//img[1]"`
    const css = xPathToCss(xPath)
    console.log(css)