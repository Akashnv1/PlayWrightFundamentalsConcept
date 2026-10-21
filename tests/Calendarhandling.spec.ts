import {test,Page,chromium,Browser} from "@playwright/test"

test('calendar handling test',async({page})=>{
    await page.goto('https://seleniumpractise.blogspot.com/2016/08/how-to-handle-calendar-in-selenium.html');
    await page.locator('#datepicker').click();

    let month=await page.locator('span.ui-datepicker-month').textContent(); // September
    let year=await page.locator('span.ui-datepicker-year').textContent(); //2026

   let courrentMonthYear=`${month?.trim()} ${year?.trim()}` // 
   console.log(courrentMonthYear);

   let expectedMonthYear="December 2026";
   // pagination logic we use while loop

   while(true){
    if(courrentMonthYear===expectedMonthYear)
    {
        await page.getByRole('link',{name:'25',exact:true}).click();
        break;
    }
    else
    {
        // click on the ne\xt icon
        await page.getByTitle('Next').click();
        await page.waitForTimeout(500);
          month=await page.locator('span.ui-datepicker-month').textContent(); // September
    year=await page.locator('span.ui-datepicker-year').textContent(); //2026

    courrentMonthYear=`${month?.trim()} ${year?.trim()}` // 
   console.log(courrentMonthYear);

    }
   }


 


});