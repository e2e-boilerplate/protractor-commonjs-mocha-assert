const assert = require("assert");

describe("google search", () => {
  before(function fn() {
    this.timeout(20000);
    browser.get("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on the sandbox", async () => {
    const title = await browser.getTitle();
    const header = element(by.css("h1"));

    assert.strictEqual(title, "Sandbox");
    header.getText().then((h) => {
      assert.strictEqual(h, "Sandbox");
    });
  });
});
