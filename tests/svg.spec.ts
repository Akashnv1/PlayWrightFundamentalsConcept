import {test,Page,chromium,Browser} from "@playwright/test"

// SVG
// CSS Selector Noraml Waay
// XpAth : Regular xpath will not supported
// local-name() name()

// https://naveenautomationlabs.com/opencart/index.php?route=account/login
test('svg flipkart search icon test',async({page})=>{
    await page.goto('https://www.flipkart.com');
    await page.getByRole('textbox',{name:'Search for Products, Brands and More'}).fill('iphone 18');
    await page.getByRole('button',{name:'Search for Products, Brands and More'}).locator('//*[local-name()="svg"]').click();
    await page.pause();


});