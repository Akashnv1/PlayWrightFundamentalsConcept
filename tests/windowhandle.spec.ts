import {test,Page,chromium,Browser, Locator} from "@playwright/test"

//https://vinothqaacademy.com/multiple-windows/
// In window handle case we have to de-structure the browser first and we have to create a new pae
test('2 window handle test',async({browser})=>{
    let context=await browser.newContext();
    let page=await context.newPage();
    await page.goto('https://practice-automation.com/window-operations/');

  let [childWindowPage]= await Promise.all([ // //start lsitening the page event in the browser
    context.waitForEvent('page'),
    page.getByRole('button',{name:'New Tab'}).click()

    ]);

    await childWindowPage.waitForLoadState();
    let allPages =context.pages();

    console.log("Total number of pages", allPages );

    await childWindowPage.bringToFront();
    console.log('the child window title',await childWindowPage.title());

    // close the chid window
    await childWindowPage.close();

    await page.bringToFront();
    console.log('the parent  window title',await page.title());
    await page.pause();


});



test('Multiple window handle test',async({browser})=>{
    let context=await browser.newContext();
    let page=await context.newPage();
    await page.goto('https://practice-automation.com/window-operations/');

    // array of link locator

    let alllinks:Locator[]=[ page.getByRole('link',{name: 'Learn More'}),
                              page.getByRole('link',{name: 'About'})
    ];

    let childWindowPages: Page[]=[]; //0
// open all the child window
    for(let link of alllinks)
    {
     let [childWindow]= await Promise.all([ 
      context.waitForEvent('page'),
      link.click()

      ]);

      await childWindow.waitForLoadState();
      childWindowPages.push(childWindow);
    };

    console.log('total pages ', context.pages().length);
    // goto each and every child window and get the title and closed it

    for(let i=0;i<childWindowPages.length;i++){

      let child=childWindowPages[i];
      console.log(await child.title());
      await child.close();
    }

    // Back to the parent window : only 1 tab is left
    await page.bringToFront();
    console.log('parent window title',await page.title());
     console.log('Remaining pages : ', context.pages().length);

     await page.pause();

    





});

