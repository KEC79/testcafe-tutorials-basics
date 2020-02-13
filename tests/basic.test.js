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

