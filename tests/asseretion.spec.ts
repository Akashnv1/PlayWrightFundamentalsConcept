import {test,Page,chromium,Browser, expect} from "@playwright/test"

test('assertions test',async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
     expect(page.getByRole('heading',{name:'Register Account'})).toBeVisible();
          expect.soft(page.getByRole('heading',{name:'Register Account11'})).toBeVisible();

          console.log('Skip the failed test');

        await  expect(page.locator('aside#column-right a')).toHaveCount(20);
        await page.locator('#input-firstname').fill('playwright automation');
        await expect(page.locator('#input-firstname')).toHaveText('playwright automation');




});