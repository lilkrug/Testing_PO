package FirstTest;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class WebDriverSeleniumHQ {
    @Test
    public void commonSearchTermResultsNotEmpty(){
        WebDriver driver = new ChromeDriver();
        driver.get("http://seleniumhq.org");
    }
}
