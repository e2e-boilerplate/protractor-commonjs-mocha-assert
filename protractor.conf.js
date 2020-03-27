const directConnect = true;
const specs = ["spec/*.spec.js"];
const framework = "mocha";
const mochaOpts = {
  reporter: "dot",
};

const headed = {
  directConnect,
  specs,
  capabilities: {
    browserName: "chrome",
  },
  framework,
  mochaOpts,
};

const headless = {
  directConnect,
  specs,
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--headless", "--no-sandbox", "--disable-gpu"],
    },
  },
  framework,
  mochaOpts,
};

const config = process.env.GITHUB_ACTIONS ? headless : headed;

exports.config = config;
