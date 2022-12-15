const {Key} = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');
var BasePage = require ('../Page/basepage');

class HomePage extends BasePage{

   
    async enter_url(theURL) {
        await this.go_to_url(theURL);
    }

    async enter_paste(searchText) {
        var searchField = '[id=VisualSearchInput]';
        await this.enterTextByCss(searchField, searchText);
        await this.enterTextByCss(searchField, Key.RETURN);
    }

    async wait_paste(wait_paste) {
        await this.waitBrowser(wait_paste);
    }

    
}
module.exports = new HomePage();