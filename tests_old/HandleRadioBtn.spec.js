const { test, expect } = require('@playwright/test');

test('Handle Radio Button ', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');


    //!st way to click.
    // await page.locator("input[value='radio1']").click();
    // await expect(page.locator("input[value='radio1']").isChecked).toBeTruthy();


    //2nd way
    const radioBtn = await page.locator(".radioButton");
    const radioBtnCount = await radioBtn.count();
    console.log(`Number of  Radio Buttons Are : ${radioBtnCount}`);
    for (let i = 0; i < radioBtnCount; i++) {
        await radioBtn.nth(i).click();
        expect(await radioBtn.nth(i).isChecked);
    }
    await page.waitForTimeout(5000);
    await page.close();
})