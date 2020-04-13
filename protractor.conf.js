
      
const directConnect = true;
const specs = ["spec/*.spec.ts"];
const framework = "mocha";

const mochaOpts = {
  reporter: "dot",
  timeout: 50000,
};

const onPrepare = () => {
  browser.waitForAngularEnabled(false);
};

const headed = {
  directConnect,
  specs,
  capabilities: {
    browserName: "chrome",
  },
  framework,
  mochaOpts,
  onPrepare
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
  onPrepare
};

const config = process.env.GITHUB_ACTIONS ? headless : headed;    
           
exports.config = config;
