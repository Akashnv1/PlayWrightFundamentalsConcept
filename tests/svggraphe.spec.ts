import {test,Page,chromium,Browser, Locator} from "@playwright/test"

// SVG
// CSS Selector Noraml Waay
// XpAth : Regular xpath will not supported
// local-name() name()

// https://naveenautomationlabs.com/opencart/index.php?route=account/login
test('svg graph  test',async({page})=>{
    await page.goto('https://petdiseasealerts.org/forecast-map/#/');
    await page.waitForTimeout(5000);
let frame= page.frameLocator('iframe[id*="map-instance"]'); // * means contains thats why used *
let allRegions: Locator[]=await frame.locator('g.region').all();

console.log('Total number of regions :' + allRegions.length);

for(let e of allRegions)
{
    let stateName=await e.getAttribute('id');
    console.log(stateName);
}
}); 

test('svg boundingbox  test',async({page})=>{
    await page.goto('https://petdiseasealerts.org/forecast-map/#/');
    await page.waitForTimeout(5000);
let frame= page.frameLocator('iframe[id*="map-instance"]'); // * means contains thats why used *
let allRegions: Locator[]=await frame.locator('g.region').all();

console.log('Total number of regions :' + allRegions.length);

for(let e of allRegions)
{
    let box=await e.boundingBox();
   let centerX= box!.x+box!.width/2;
   let centerY= box!.y+box!.height/2;
   await page.mouse.move(centerX,centerY);

    let stateName=await e.getAttribute('id');
    console.log(stateName);
    await page.waitForTimeout(5000);
}

}); 