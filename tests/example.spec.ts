  import { test, expect } from '@playwright/test';

test('practice automation', async ({ browser }) => {
  let context=await browser.newContext();
 let page= await context.newPage();

 // await page.goto('https://playwright.dev/');
 await page.goto('https://practice-automation.com/window-operations/');
  let[childWindow]=await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('button',{name:'New Tab'}).click()



  ]);

  childWindow.waitForLoadState();
  let allPages=context.pages();
  console.log('total pages',allPages);






 await page.pause();


  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
