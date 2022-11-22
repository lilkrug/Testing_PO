const {Key} = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');
var BasePage = require ('../Page/basepage');

class HomePage extends BasePage{

   
    async enter_url(theURL) {
        await this.go_to_url(theURL);
    }

    async enter_paste(searchText) {
        var searchField = '[id=postform-text]';
        await this.enterTextByCss(searchField, searchText);
        await this.enterTextByCss(searchField, Key.RETURN);
    }

    async select_syntax_highlighting() {
        var pasteField = 'select2-postform-format-container';
        await this.clickById(pasteField);
    }

    async enter_syntax_highlighting(xpathField) {
        await this.enterTextByXpath(xpathField);
    }

    async select_paste_expiration() {
        var pasteField = 'select2-postform-expiration-container';
        await this.clickById(pasteField);
    }

    async enter_paste_expiration(xpathField) {
        await this.enterTextByXpath(xpathField)
    }

    async enter_paste_title(searchText) {
        var pasteTitle = '[id=postform-name]';
        await this.enterTextByCss(pasteTitle, searchText);
        await this.enterTextByCss(pasteTitle, Key.RETURN);
    }

    async enter_create_new_paste(xpathField) {
        await this.enterTextByXpath(xpathField);
    }

    async wait_paste(wait_paste) {
        await this.waitBrowser(wait_paste);
    }

    
}
module.exports = new HomePage();