const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get('http://pastebin.com');
    await driver.findElement(By.id('postform-text')).sendKeys('git config --global user.name \"New Sheriff in Town\" \ngit reset $(git commit-tree HEAD^{tree} -m \"Legacy code\") \ngit push origin master --force', Key.RETURN);

    await driver.findElement(By.id('select2-postform-format-container')).click();
    await driver.findElement(By.xpath("//li[text()='Bash']")).click();
    
    await driver.findElement(By.id('select2-postform-expiration-container')).click();
    await driver.findElement(By.xpath("//li[text()='10 Minutes']")).click();

    await driver.findElement(By.id('postform-name')).sendKeys('how to gain dominance among developers', Key.RETURN);
    await driver.findElement(By.xpath("//button[@class='btn -big']")).click();
    
  } finally {
    await driver.quit();
  }
})();
    