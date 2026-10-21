import {test,Page,chromium,Browser} from "@playwright/test"

// https://naveenautomationlabs.com/opencart/index.php?route=account/login
test('single file upload  test',async({page})=>{
    // It should have type="file" attribute
    await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');
    await page.locator('#single-file').setInputFiles("C:/Program Files/7-Zip/History.txt");
    await page.pause();


});

test('Multiple file upload  test',async({page})=>{
     // It should have type="file" attribute
    await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');
    await page.locator('#multi-file').setInputFiles(["C:/Program Files/7-Zip/History.txt",
        "C:/Program Files/7-Zip/License.txt"
        ,"C:/Program Files/7-Zip/readme.txt"]);
        
    
    await page.pause();


});

 

 test('file=type is not present  test',async({page})=>{
    //If type="file" attribute is not present
    
    await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');

    let [fileUpload]=await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('#custom-upload-btn').click()


    ]);

   await fileUpload.setFiles(["C:/Program Files/7-Zip/History.txt",
        "C:/Program Files/7-Zip/License.txt"
        ,"C:/Program Files/7-Zip/readme.txt"

    ]);

    await page.pause();


 });

 test('file download  test',async({page})=>{
    
    await page.goto('https://the-internet.herokuapp.com/download');
   let[download]= await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('link',{name:'Sauce_Labs_Logo.png'}).click()

    ])
// get the file name
console.log('file name is ' + download.suggestedFilename());
// save to a specific path 
await download.saveAs('./downloads/' + download.suggestedFilename());

 });
 