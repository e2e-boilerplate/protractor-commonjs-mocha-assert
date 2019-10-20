exports.config = {
  directConnect: true,
  specs: ["spec/*.spec.js"],
  capabilities: {
    browserName: "chrome"
  },
  framework: "mocha",
  mochaOpts: {
    reporter: "dot",
    slow: 3000,
    timeout: 5000
  }
};
