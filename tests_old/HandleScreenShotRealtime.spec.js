const{test,expect} = require('@playwright/test');

test("Handle Screen shot And login Instagram Page",async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/locatorspractice/');
    await page.waitForLoadState();
    await page.locator("//input[@id='inputUsername']").fill("suresh_vurkonda");
    await page.locator("//input[@type='password']").fill("@Suresh8010");
    await page.locator("//input[@value='rmbrUsername']").check();
    await page.locator('#chkboxTwo').check();
    await page.locator("//button[@type='submit']").click();
    await page.waitForTimeout(5000);
    await page.close();
})