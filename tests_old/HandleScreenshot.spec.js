const{test,expect} = require('@playwright/test');

test("Handle Screen Shot in page " , async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.waitForLoadState();
    await page.screenshot({path:'tests/ScreenShots/'+Date.now()+'homepage.png'});
   
});
test("Handle Screen Shot in Full page " , async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.waitForLoadState();
    await page.screenshot({path:'tests/ScreenShots/'+Date.now()+'Fullpage.png',fullPage:true}); 
});
test.only("Handle Screen Shot for Element " , async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.waitForLoadState();
    await page.locator('#mousehover').screenshot({path:'tests/ScreenShots/'+Date.now()+'Element.png'});
});