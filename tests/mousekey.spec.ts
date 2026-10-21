import {test,Page,chromium,Browser} from "@playwright/test"

test('right click test',async({page})=>{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    await page.getByText('right click me',{exact:true}).click({button: 'right'});
    await page.getByText('Copy',{exact: true}).click();



});

test('menu hover handling test',async({page})=>{
    await page.goto('https://www.spicejet.com/');
    await page.getByText('Add-ons',{exact:true}).hover();
    

    await page.pause();


});

test('menu sub-menu handling test',async({page})=>{
    await page.goto('https://automationtesting.co.uk/dropdown.html');
    await page.getByRole('link',{name:'Animals'}).hover();
    await page.getByRole('link',{name:'Dog'}).hover();
    await page.getByRole('link',{name:'Labrador'}).click();
    let innerText= await page.locator('#outputMessage').innerText();
    console.log("The text result : " + innerText);
   
    

    await page.pause();


});