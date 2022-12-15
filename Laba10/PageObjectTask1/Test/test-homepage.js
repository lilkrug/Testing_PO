const homepage = require('../Page/homepage');

describe('Describe', function(){
    this.timeout(50000);
   
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
    })

    afterEach(async function(){
        await homepage.closeBrowser();
    });

})