import {test,Page,chromium,Browser} from "@playwright/test"

// https://naveenautomationlabs.com/opencart/index.php?route=account/login
test('Register page locator',async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page.screenshot({path:'RegistrationPage.png',fullPage:true});// full page SS
     await page.screenshot({path:'RegistrationPage.png'}); // visible page ss

     await page.getByText('naveenopencart').screenshot({path:'logo.png'});

     // screenshot with options
     await page.screenshot({
        path: 'customer.png',
        fullPage:true,
       // quality:80,
        omitBackground:true,
        clip:{x:0,y:0,width:500,height:300}

     });
     // attached screenshot to html report
     let screenshot=await page.screenshot({fullPage:true});
     await test.info().attach('registar page',{
      body:screenshot,
      contentType:'image/png'

     }
      ,
     )
    


});