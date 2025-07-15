const { test, expect } = require('@playwright/test');
test('Handle Drag & Drop', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // 1st Way
    const dragable = await page.locator('div#draggable p');
    const drop = await page.locator('div#droppable p');
    await page.waitForTimeout(5000);
    await dragable.dragTo(drop);


    // 2nd Way
    await page.dragAndDrop('div#draggable p', 'div#droppable p');
    await page.waitForTimeout(5000);
    await page.close();
})