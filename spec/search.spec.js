const protractor = require("protractor");
const assert = require("assert");

describe("google search", () => {
  before(() => {
    browser.waitForAngularEnabled(false);
    browser.get("https://www.google.com/");
  });

  it("should be on google search page", async () => {
    const title = await browser.getTitle();
    assert(title, "Google");
  });

  it("should search for Cheese!", async () => {
    const searchBox = await element(by.name("q"));
    assert.ok(searchBox.isDisplayed());
    searchBox.sendKeys("Cheese!", protractor.Key.ENTER);
  });

  it('the page title should start with "Cheese!"', async () => {
    const title = await browser.getTitle();
    const isTitleStartWithCheese = title.lastIndexOf("Cheese!", 0) === 0;
    assert.ok(isTitleStartWithCheese);
  });
});
