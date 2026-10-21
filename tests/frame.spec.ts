// iframe test
import {test,Page,chromium,Browser, FrameLocator, Frame} from "@playwright/test"


test('iframe test',async({page})=>{
    await page.goto('https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/');
    let innerText=await page.locator('.hero__title').innerText();
    console.log(innerText);
    await page.getByTitle('Vehicle-Registration-Forms-and-Examples').click();
    let iframeLocator:FrameLocator= page.frameLocator('#frame-one748593425') // swtich to iframe
  //  await iframeLocator.locator('#RESULT_TextField-3').fill('Gurugram');
   await iframeLocator .getByRole("textbox",{name: 'Location'}).fill('gurugram');
   await iframeLocator.getByRole('textbox',{name: 'Description '}).fill('I am fill desc');
    await page.pause();

});


test('iframe name & Urls test',async({page})=>{
    await page.goto('https://www.londonfreelance.org/courses/frames/index.html');
    let allframes: Frame[]=page.frames();
    let frmaeCount =allframes.length;
    console.log(frmaeCount);

    for(let e of allframes)
    {
        let frameUrl=e.url();
        let frmaeName=e.name();
        console.log(frmaeName ," :" ,frameUrl);
    }


    await page.pause();

});


test('iframe getting header test',async({page})=>{
    await page.goto('https://www.londonfreelance.org/courses/frames/index.html');
    let header=page.frameLocator('[name="main"]').getByRole('heading',{level: 2});
    console.log(header);

    await page.pause();

});