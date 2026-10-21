import {test,Page,chromium,Browser} from "@playwright/test"

// https://naveenautomationlabs.com/opencart/index.php?route=account/login
// test('Webtable column value test',async({page})=>{
//     // Click the checkbox in row of selenium
//     await page.goto('https://qavbox.github.io/demo/webtable/');
//     await page.locator('#table01').locator('tr').filter({hasText: 'Selenium'})
// .getByRole('checkbox').click();

//     await page.pause();

// });

// test('Captured the QC ALM',async({page})=>{
//     // Click the checkbox in row of selenium
//     await page.goto('https://qavbox.github.io/demo/webtable/');
//    let tableText= await page.locator('#table01').locator('tr')
//                              .filter({hasText:'QC ALM'}).getByText('QC ALM').innerText();
//                                             console.log(tableText);



//     await page.pause();

// });

test('Captured the age from table 2',async({page})=>{
    // Click the checkbox in row of selenium
    await page.goto('https://qavbox.github.io/demo/webtable/');
   let age= await page.locator('#table02').locator('tr')
                       .filter({hasText: 'Ashton Cox'})
                                .locator('td').nth(3).innerText();
                                            console.log(age);



    await page.pause();

});

test('Webtable user data  table 2',async({page})=>{
    // Click the checkbox in row of selenium
    await page.goto('https://qavbox.github.io/demo/webtable/');
   let allUserData= await page.locator('#table02').locator('tr').
                                       filter({hasText:'Ashton Cox'}).locator('td').allInnerTexts();
                                       console.log(allUserData.length);
                                       for(let e of allUserData)
                                            
                                        {
                                            console.log(e);
                                        }



    await page.pause();

});

test('webtable find row & column',async({page})=>{
    // Click the checkbox in row of selenium
    await page.goto('https://qavbox.github.io/demo/webtable/');
   let totalRow= await page.locator('#table02').locator('tr').count();
    let totalColmun= await page.locator('#table02').locator('th').count();

    console.log(totalRow);
     console.log(totalColmun);


  



    await page.pause();

});




 test('Webtable column value test',async({page})=>{

   await page.goto('https://app.thetestingacademy.com/playwright/webtable');
   await page.locator('.table-wrap').locator('tr').filter({hasText:'Neha.Patel'})
.getByRole('checkbox').click();

let nehaName=await page.locator('.table-wrap').
                             locator('tr').filter({hasText:'Neha.Patel'}).
                                  locator('td').nth(1).innerText();
                             console.log(nehaName);
await page.pause();

 });