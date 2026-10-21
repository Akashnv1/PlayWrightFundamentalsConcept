import {test,Page,chromium,Browser} from "@playwright/test"

test('webtable pagination test',async({page})=>{
    await page.goto('https://selectorshub.com/xpath-practice-page/');
    while(true){ // when you dont know about the iterations then use while loop
   let productPresent =await page.getByRole('cell',{name:'akash'}).first().isVisible();

   if(productPresent){
// product is found on 1st page
await page.locator('#tablepress-1 tr')
            .filter({hasText:'akash'}).first().locator('input[type="checkbox"]').check();
            break;

          //  await page.pause();
   }
   else{
      // element is not present on the 1st page,pagination logic
      // click on the next icon
         let nextElement=page.getByRole('link',{name:'Next'});
         await page.waitForTimeout(3000);
         await nextElement.click(); // 10th page

         let isDisabled=await nextElement.isDisabled();// true

         if(isDisabled)
         {
            // pagination over
            console.log("pagination is over");
            break;
         }
   }
}

   

});


test('webtable pagination select multiple element test',async({page})=>{
    await page.goto('https://selectorshub.com/xpath-practice-page/');
    while(true){ // when you dont know about the iterations then use while loop
   let allProdcutPresent=await page.locator('#tablepress-1 tr')
            .filter({hasText:'mac'}).first().locator('input[type="checkbox"]').all();

            if(allProdcutPresent.length>0)
            {
               for(let e of allProdcutPresent)
               {
                  await e.check();  
               }
            }
            // go to next page : Pagination logic

           let nextElement=page.getByRole('link',{name:'Next'});
            let isDisabled=await nextElement.isDisabled();// true

            if(isDisabled)
            {
               // pagination over
               console.log("Pagination is over");
               break;
            }

            await page.waitForTimeout(500);
            await nextElement.click();

    }
    await page.pause();
   });