const homepage = require('../Page/homepage');

describe('Describe', function(){
    this.timeout(50000);
   
    beforeEach(function(){
     
    });

    it('POM Test Check', async function(){
        var baseurl = 'https://pastebin.com/';
        await homepage.enter_url(baseurl);
        await homepage.enter_paste('git config --global user.name \"New Sheriff in Town\" \ngit reset $(git commit-tree HEAD^{tree} -m \"Legacy code\") \ngit push origin master --force');

        await homepage.select_syntax_highlighting();
        await homepage.enter_syntax_highlighting("//li[text()='Bash']");

        await homepage.select_paste_expiration();
        await homepage.enter_paste_expiration("//li[text()='10 Minutes']");

        await homepage.enter_paste_title('how to gain dominance among developers');

        await homepage.enter_create_new_paste("//button[@class='btn -big']");
        
    })

    afterEach(async function(){
        await homepage.closeBrowser();
    });

})