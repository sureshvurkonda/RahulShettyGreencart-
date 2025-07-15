const { test, expect } = require('@playwright/test');

test('Handle DropDown', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.waitForTimeout(5000);
    //By Index 
    await page.locator('#dropdown-class-example').selectOption({index:1});
    await page.waitForTimeout(5000);

    // By Attribute Value
    await page.locator('#dropdown-class-example').selectOption({value:'option2'});

    await page.waitForTimeout(5000);
    //By using Visible text
    const dropDown = await page.locator('#dropdown-class-example').selectOption('Option3');

    await expect(dropDown).toBeTruthy();
    await page.waitForTimeout(5000);
    await page.close();
})