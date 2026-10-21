import {test,Page,chromium,Browser} from "@playwright/test"

// https://naveenautomationlabs.com/opencart/index.php?route=account/login
test('select dropdown test',async({page})=>{
    // Alert just accept it
    page.on('dialog',async (popup)=>{
        if(popup.type()==='alert'){
            console.log(popup.message());
            await popup.accept();
        }

    }

    );
    
    // Confim just accept it
    page.on('dialog',async (popup)=>{
        if(popup.type()==='confirm'){
            console.log(popup.message());
            await popup.accept();
            //await popup.dismiss(); click cancel
        }

    }

    );
// pass the text and accept it
       page.on('dialog',async (popup)=>{
        if(popup.type()==='prompt'){
            console.log(popup.message());
            await popup.accept('hi this is akash');
        }

    }

    );




    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.getByRole('button',{name: 'Click for JS Alert'}).click();
    await page.waitForTimeout(3000);
    // 

        await page.getByRole('button',{name: 'Click for JS Confirm'}).click();
    await page.waitForTimeout(3000);

      await page.getByRole('button',{name: 'Click for JS Prompt '}).click();
    await page.waitForTimeout(3000);



});