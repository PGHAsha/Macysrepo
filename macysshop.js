const { Driver } = require("selenium-webdriver/chrome");
const helpers = require("../runtime/helpers");

module.exports = {
    shopUrl: 'https://www.macys.com/',

elements: {
    sale: '/html/body/header/div',
},

clickElement: async function(objectKey) {
    var selector = page.sale.elements[objectKey];
    await driver.sleep(1000);
    return driver.findElement(By.xpath(selector)).click();
},

elementExists: async function(objectKey) {
    var selector = page.macys.elements[objectKey];
    await driver.sleep(1000);
    return driver.findElement(By.xpath(selector));
    await driver.sleep(1000);
},
};