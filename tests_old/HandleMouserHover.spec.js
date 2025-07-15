const{test,expect} = require('@playwright/test');
test('Handle Mouse Hover' , async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    //For Top
    await page.waitForTimeout(5000);
    await page.locator('#mousehover').hover();
    await page.waitForTimeout(5000);
    await page.click("//a[text()='Top']");


    //For Reload 
    await page.waitForTimeout(5000);
   const mouseEvent =  await page.locator('#mousehover');
   await mouseEvent.hover();
    await page.waitForTimeout(5000);
    await page.click("//a[text()='Reload']");
    await page.waitForTimeout(5000);
    await page.close();
})