const assert = require("assert");

describe("google search", () => {
  before(function fn() {
    this.timeout(20000);
    browser.get("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on the sandbox", async () => {
    const title = await browser.getTitle();
    assert.strictEqual(title, "Sandbox");

    const header = await element(by.css("h1")).getText();
    assert.strictEqual(header, "Sandbox");
  });
});
