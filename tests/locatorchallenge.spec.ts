import {test,Page,chromium,Browser} from "@playwright/test"
 test('capured the dynamic text',async({page})=>{
  
    await page.goto('https://testautomationpractice.blogspot.com/');
   let captureText=await page.locator('#rows').locator('tr')
                       .filter({hasText: 'Firefox'})
                                .locator('td').nth(3).innerText();
                                console.log(captureText);

   await page.pause();
 });
