import {test,Page,chromium,Browser} from "@playwright/test"

test('keyboard action test',async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    let firstName=page.getByRole('textbox',{name:'First Name'});
    await firstName.fill('Akash');

   await firstName.press('Tab');
   await page.keyboard.type('Kumar');

   await page.keyboard.press('Tab');
   await page.keyboard.type('test@123333.com');

   await page.keyboard.press('Tab');
   await page.keyboard.type('8979989890');

    await page.keyboard.press('Tab');
   await page.keyboard.type('test@123');

    await page.keyboard.press('Tab');
   await page.keyboard.type('test@123');

   await page.keyboard.press('Tab');
   await page.keyboard.press('Tab');
   await page.keyboard.press('Tab');

   await page.keyboard.press('Space');
   await page.keyboard.press('Enter');

   
   await page.pause();



});