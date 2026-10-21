import {test,Page,chromium,Browser} from "@playwright/test"

test('drag drop test',async({page})=>{
    await page.goto('https://jqueryui.com/droppable/');
    let frame= page.frameLocator('.demo-frame');
    let source= frame.locator('#draggable');
     let target= frame.locator('#droppable');

    await source.dragTo(target);
    await page.pause();

});
    