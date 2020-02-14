import { Selector, t } from "testcafe"

// prettier-ignore
fixture `Getting started with Testcafe` 
.page `https://devexpress.github.io/testcafe/example/`

// Test hooks
.before(async testController => {
    // Runs before tests are ran
    // Test setup goes here
    // await runDatabaseReset()
    // await seedTestData()
})

.beforeEach(async testController => {
    // Runs before each test
    await testController.setTestSpeed(1)
    await testController.setPageLoadTimeout(0)
})

.after(async testController => {
    // Runs after all tests have been ran
    // Cleaning test data
    // Logging and sending data to monitoring system
})

.afterEach(async testController => {
    // Runs after each test
})

test.only("My first testcafe test", async testController => {
    const developer_name_input = Selector("#developer-name")
    const submit_button = Selector("#submit-button")
    const article_text = Selector("#article-header")

    await testController.takeElementScreenshot(submit_button)
    await testController.takeScreenshot({ fullPage: true })
    await testController.typeText(developer_name_input, "Kim")
    //await testController.wait(3000)
    await testController.click(submit_button)
    await testController.expect(Selector(article_text).innerText).contains("Kim")
})

test.skip("My second testcafe test", async testController => {
    const developer_name_input = Selector("#developer-name")
    const submit_button = Selector("#submit-button")
    const article_text = Selector("#article-header")

    await testController.takeElementScreenshot(submit_button)
    await testController.takeScreenshot({ fullPage: true })
    await testController.typeText(developer_name_input, "Kim")
    //await testController.wait(3000)
    await testController.click(submit_button)
    await testController.expect(Selector(article_text).innerText).contains("Kim")
})

test("API Actions", async t => {
    const developer_name_input = Selector("#developer-name")
    const submit_button = Selector("#submit-button")
    const article_text = Selector("#article-header")

    await t.typeText(developer_name_input, "Kim")
    await t.click(submit_button)
    await t.expect(Selector(article_text).innerText).contains("Kim")

    // Click
    await t.click("selector", {options} )
    // Double click
    await t.doubleClick("selector", {options} )
    // Right click
    await t.rightClick("selector", {options} )
    // Drag element
    await t.drag("selector", 200, 0, {options} )
    // Hover
    await t.hover("selector", {options} )
    // select text
    await t.selectText("selector", {options} )
    // Type text
    await t.typeText("selector", "text")
    // Press key on keyboard
    await t.pressKey("enter", {options} )
    // Navigate
    await t.navigateTo("www.google.com")
    // Take screenshot
    await t.takeScreenshot( {options} )
    await t.takeElementScreenshot("selector")
    // Resize window
    await t.resizeWindow(800, 600)
    // 
})

test("API Assertions", async t => {
    // Deep equal
    await t.expect("foo").eql("foo", "message", { options })
    // Not deep equal
    await t.expect("foo").notEql("foo")
    // OK
    await t.expect(true).ok()
    // Not OK
    await t.expect(true).notOk()
    // Contains
    await t.expect("foo").contains("o")
    // Not contains
    await t.expect("foo").notContains("k")
    // Greater or Less than
    await t.expect(10).gt(5) // 10 > 5
    await t.expect(10).gte(10) // 10 >= 10
    //Less than 
    await t.expect(10).lt(10) // 10 < 10
    await t.expect(10).lte(10) // 10 <= 10
    // Within
    await t.expect(10).within(1,100)
    //Not within 
    await t.expect(10).notWithin(5,50)

})

