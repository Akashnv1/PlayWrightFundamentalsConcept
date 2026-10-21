import {test,Page,chromium,Browser} from "@playwright/test"

// https://naveenautomationlabs.com/opencart/index.php?route=account/login
test('select dropdown test',async({page})=>{
    await page.goto('https://qaautomationlabs.com/testing/dropdown.php');
    await page.locator('#fruitDropdown').selectOption({label:'Banana'});
            await page.waitForTimeout(3000);
    await page.locator('#fruitDropdown').selectOption({value:'Orange'});
            await page.waitForTimeout(3000);
    await page.locator('#fruitDropdown').selectOption({index:1});

await page.pause();
});

test('select multiple fruits dropdown test',async({page})=>{
    await page.goto('https://selenium08.blogspot.com/2019/11/dropdown.html');
    await page.locator('[name="Month"]').selectOption(['March','June','July','August'])
    
await page.pause();
});

//https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/


test('Jquery multiple  dropdown test',async({page})=>{
    await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/');
    await page.locator('#justAnInputBox').click();
    await page.locator('span.comboTreeItemTitle').filter({hasText:'choice 3'}).first().click();
    
await page.pause();
});


test('Jquery multiple  selection test',async({page})=>{
    await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/');
    await page.locator('#justAnInputBox').click();
    // await page.locator('span.comboTreeItemTitle').filter({hasText:'choice 3'}).first().click();
    selectChoice(page,['choice 5','choice 4','choice 6 2 2','choice 7']);
    
await page.pause();
});

async function selectChoice(page: Page, choices: string[]):Promise<void>
{
    for(let ch of choices)
    {
 await page.locator('span.comboTreeItemTitle').filter({hasText:`${ch}`}).first().click();
    }

}

test('Auto suggestion dropdown test',async({page})=>{
    await page.goto('https://www.amazon.in/');
    await page.locator('#twotabsearchtextbox').fill('macbook pro');
    await page.locator('div.s-suggestion span').filter({hasText:' 16 inch'}).click();
    
await page.pause();
});

test('Auto suggestion dropdown flipkart test',async({page})=>{
    await page.goto('https://www.google.com');
    await page.getByRole('combobox',{name:'Ask Google'}).fill('naveen automation');
   // await page.locator('div.s-suggestion span').filter({hasText:' 16 inch'}).click();
    
await page.pause();
});

