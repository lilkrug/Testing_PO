const homepage = require('../Page/homepage');

describe('Describe', function(){
    this.timeout(20000);
   
    beforeEach(function(){
     
    });

    it('POM Test Check', async function(){
        var baseurl = 'https://pastebin.com/';
        await homepage.enter_url(baseurl);
        await homepage.enter_paste('Hello Web Driver');
        await homepage.select_paste_expiration();
        await homepage.enter_paste_expiration("//li[text()='10 Minutes']");
        await homepage.enter_paste_title('helloweb');
        await homepage.enter_create_new_paste("//button[@class='btn -big']");
        await homepage.wait_paste('Pastebin.com - #1 paste tool since 2002!');
    })

    afterEach(async function(){
        await homepage.closeBrowser();
    });

})