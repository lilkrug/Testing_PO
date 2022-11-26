package HelloWebDriver;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;


public class HelloWebDriver {
    public static void main(String[] args) throws InterruptedException {
        WebDriver driver = new ChromeDriver();
        driver.get("http://seleniumhq.org");

        //new WebDriverWait(driver, 10)
             //   .until(ExpectedConditions.presenceOfElementLocated(By.id("q")));

       //WebElement searchInput = new WebDriverWait(driver,10)
           //     .until(ExpectedConditions.presenceOfElementLocated(By.id("q")));
       // searchInput.sendKeys("selenium Java");

        List<WebElement> searchBtn = driver.findElements(By.xpath("//*[@id=\"docsearch\"]/button"));
        searchBtn.get(0).click();

        driver.quit();
    }
}
