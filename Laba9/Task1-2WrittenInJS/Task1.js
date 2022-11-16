const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get('http://pastebin.com');
    await driver.findElement(By.id('postform-text')).sendKeys('Hello from WebDriver', Key.RETURN);
    await driver.findElement(By.id('select2-postform-expiration-container')).click();
    await driver.findElement(By.xpath("//li[text()='10 Minutes']")).click();
    await driver.findElement(By.id('postform-name')).sendKeys('helloweb', Key.RETURN);
    await driver.findElement(By.xpath("//button[@class='btn -big']")).click();
  } finally {
    await driver.quit();
  }
})();
    