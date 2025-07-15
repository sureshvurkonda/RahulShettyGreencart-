const { test, expect } = require('@playwright/test');
test('Handle Switch Windows', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    const [childPage] = await Promise.all([
        (page.waitForEvent('popup')),
        await page.locator('#openwindow').click()
    ])
    await childPage.waitForLoadState();
    console.log("Switching to the ChildWindow...........");
    console.log(`child window title is : ${await childPage.title()}`);
    await page.bringToFront();
    console.log("Switching to the ParentWindow...........");
    console.log(`Parent window title is : ${await page.title()}`);
    await page.waitForTimeout(5000);
    await page.close();
})