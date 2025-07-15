const { test, expect } = require('@playwright/test');

test('Handle Frames', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    //Storing Number Frames Present in an Page. using frames(). function.
    const frames = await page.frames();
    console.log(`Number of Frames in the Website are :${frames.length}`);
    await page.waitForTimeout(5000);

    //Using name. Name Attribute Value .
    const frameName = await page.frame({ name: 'iframe-name' });
    await frameName.click("//div[@class='login-btn']//a[text()='Register']")
    
    await page.waitForTimeout(5000)
    await page.reload();
    await page.waitForTimeout(5000)

    // FrameLocator
    await page.frameLocator("//iframe[@id='courses-iframe']").locator("//div//a[text()='Login']").click();

    await page.waitForTimeout(5000)
    await page.close();
})

test.skip('Handle Frames using URl', async ({ page }) => {
    //Using Url 
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frameLocator = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' });
    await frameLocator.fill("input[name='mytext1']", "suresh");


    await page.waitForTimeout(10000)
    await page.close();
})