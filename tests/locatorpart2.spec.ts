import {test,Page,chromium,Browser} from "@playwright/test"

// // https://naveenautomationlabs.com/opencart/index.php?route=account/login
// test('Register page locator part 2',async({page})=>{
//     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
//     await page.getByRole('textbox',{name:'First Name'}).highlight();
//     await page.pause();
// });

// test('fill with delay test',async({page})=>{
//     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
//     await page.getByRole('textbox',{name:'First Name'}).pressSequentially('akash kumar sahpau',{delay:500})
//     await page.pause();
// });


test('image test',async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
   // await page.getByAltText('naveenopencart').highlight();
    await page.getByRole('img',{name:'naveenopencart'}).click();
   // await page.getByAltText('naveenopencart').click();



    
    //await page.getByRole('textbox',{name:'First Name'}).pressSequentially('akash kumar sahpau',{delay:500})
    await page.pause();
});