class Common{
   
    go_to_url() {
         cy.visit('/');
    }
    enterTextByCss(css, searchText) {
         cy.get(css).type(searchText);
    }
    enterTextByXpath(xpath,text) {
         cy.xpath(xpath).type(text);
    }
    clickById(id) {
         cy.get(id).click();
    }
}

module.exports = new Common();