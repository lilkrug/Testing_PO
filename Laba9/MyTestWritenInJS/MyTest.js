const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get('https://www.nike.com/');
    await driver.findElement(By.id('VisualSearchInput')).sendKeys('Jordan', Key.RETURN);
    await driver.wait(until.titleIs('Official Jordan Store. Nike.com'), 2000);
  } finally {
    await driver.quit();
  }
})();