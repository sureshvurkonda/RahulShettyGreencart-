const { test, expect } = require('@playwright/test');


test("Handle Check Box's", async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const checkBoxs = await page.locator("label input[type='checkbox']");
    const checkBoxCount = await checkBoxs.count();
    console.log(`Number of Check Box's are : ${checkBoxCount}`);

    for (let i = 0; i < checkBoxCount; i++) {
        let checkBoxClick = await checkBoxs.nth(i).check();
        await expect(page.locator(checkBoxClick).isChecked).toBeTruthy();
    }
    await page.waitForTimeout(5000);
    await page.close();
})