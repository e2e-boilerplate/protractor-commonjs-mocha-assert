const { config } = require("./protractor.conf");

config.capabilities = {
  browserName: "chrome",
  chromeOptions: {
    args: ["--headless", "--no-sandbox", "--disable-gpu"],
    // eslint-disable-next-line global-require
    binary: require("puppeteer").executablePath()
  }
};

exports.config = config;
