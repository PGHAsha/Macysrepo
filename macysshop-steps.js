module.exports = function() {
    this.Given('I am on macys website',function(){
        return helpers.loadPage(page.macysshop.shopUrl);
    });
this.When(/^ I click on "([^"]*)"$/,function (objectKey) {
    return page.macysshop.clickElement(objectKey);
});
this.Then(/^ I should see "([^"]*)"$/, function (objectKey) {
    return page.macysshop.elementExists(objectKey);
});

}