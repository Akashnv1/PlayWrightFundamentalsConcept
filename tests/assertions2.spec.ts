import {test,Page,chromium,Browser, expect} from "@playwright/test"
test('assertions test',async({page})=>{
    await page.goto('https://practice.expandtesting.com/dropdown#google_vignette');
   // console.log(await page.locator('#dropdown').count());
    await expect(page.locator('#dropdown')).toHaveCount(2);



});