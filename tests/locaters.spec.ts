import {test,Page,chromium,Browser} from "@playwright/test"

// https://naveenautomationlabs.com/opencart/index.php?route=account/login
test('Register page locator',async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page.getByRole('link',{name:'Continue'}).click();
    await page.getByRole('textbox',{name:' First Name'}).fill('Akash')
    await page.getByRole('textbox',{name:'Last Name'}).fill('Kumar');
    await page.getByRole('textbox',{name:'E-Mail'}).fill('akashme456874@gmail.com');
    await page.getByPlaceholder('Telephone').fill('9088898989');
    //await page.getByRole('textbox',{name:'Password'}).first().fill('test@123');
   // await page.getByRole('textbox',{name:'Password',exact:true}).fill('test@123');
    await page.getByPlaceholder('Password',{exact:true}).fill('test@123');
    await page.pause();
    // await page.getByRole('link',{name:'Continue'}).click();
});